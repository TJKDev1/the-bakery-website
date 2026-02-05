## 2026-02-01 - Content Security Policy Pattern
**Vulnerability:** Lack of a Content Security Policy (CSP) left the application vulnerable to Cross-Site Scripting (XSS) and data injection attacks.
**Learning:** This project requires specific allowances for Google Fonts and Redbubble (preconnect) in its security policy.
**Prevention:** Maintain a strict CSP allowing only 'self' and specific external origins (currently applied via a CSP `<meta>` tag; HTTP headers are preferred where possible): `style-src 'self' https://fonts.googleapis.com`, `font-src https://fonts.gstatic.com`, `connect-src 'self' https://www.redbubble.com`.

## 2026-02-05 - CSP Inline Script Hardening
**Vulnerability:** The CSP contained `'unsafe-inline'` which allows arbitrary script execution, defeating the primary purpose of CSP against XSS.
**Learning:** To secure necessary inline scripts (like JSON-LD), SHA-256 hashes should be used instead of `'unsafe-inline'`. This allows the specific safe script while blocking others.
**Prevention:** Calculate the SHA-256 hash of the inline script content (including whitespace) and add it to the `script-src` directive in `_headers` and `netlify.toml`.
