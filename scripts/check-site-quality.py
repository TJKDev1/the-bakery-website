#!/usr/bin/env python3

import re
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
INDEX_PATH = ROOT / "index.html"
STYLES_PATH = ROOT / "styles.css"
SCRIPT_PATH = ROOT / "script.js"


def extract_link_keys(script_text: str) -> set[str]:
    match = re.search(r"const\s+LINKS\s*=\s*Object\.freeze\(\{(.*?)\}\);", script_text, re.S)
    if not match:
        return set()

    links_block = match.group(1)
    keys = set()
    for key_match in re.finditer(r"(?:'([^']+)'|([A-Za-z0-9_-]+))\s*:", links_block):
        key = key_match.group(1) or key_match.group(2)
        if key:
            keys.add(key)
    return keys


def main() -> int:
    errors: list[str] = []

    index_text = INDEX_PATH.read_text(encoding="utf-8")
    styles_text = STYLES_PATH.read_text(encoding="utf-8")
    script_text = SCRIPT_PATH.read_text(encoding="utf-8")

    if re.search(r"href\s*=\s*\"#\"", index_text):
        errors.append("Found placeholder href=\"#\" in index.html")

    if '<main id="main-content"' not in index_text:
        errors.append("Missing <main id=\"main-content\"> landmark")

    declared_vars = set(re.findall(r"--([a-zA-Z0-9-]+)\s*:", styles_text))
    used_vars = set(re.findall(r"var\(--([a-zA-Z0-9-]+)\)", styles_text))
    undefined_vars = sorted(used_vars - declared_vars)
    if undefined_vars:
        errors.append(f"Undefined CSS variables: {', '.join(undefined_vars)}")

    configured_keys = extract_link_keys(script_text)
    html_keys = set(re.findall(r"data-link-key=\"([^\"]+)\"", index_text))
    missing_keys = sorted(html_keys - configured_keys)
    if missing_keys:
        errors.append(f"Missing data-link-key entries in script.js LINKS: {', '.join(missing_keys)}")

    if errors:
        print("Site quality checks failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    print("Site quality checks passed")
    print(f"- CSS variables validated: {len(used_vars)} used")
    print(f"- data-link-key entries validated: {len(html_keys)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
