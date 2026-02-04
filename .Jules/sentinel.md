## 2026-02-01 - Content Security Policy Pattern
**Vulnerability:** Lack of a Content Security Policy (CSP) left the application vulnerable to Cross-Site Scripting (XSS) and data injection attacks.
**Learning:** This project requires specific allowances for Google Fonts and Redbubble (preconnect) in its security policy.
**Prevention:** Maintain a strict CSP allowing only 'self' and specific external origins (currently applied via a CSP `<meta>` tag; HTTP headers are preferred where possible): `style-src 'self' https://fonts.googleapis.com`, `font-src https://fonts.gstatic.com`, `connect-src 'self' https://www.redbubble.com`.

## 2026-02-04 - Strict CSP for Inline Scripts
**Vulnerability:** The use of `'unsafe-inline'` in the `script-src` directive bypassed XSS protections to allow an inline JSON-LD script.
**Learning:** `application/ld+json` scripts can be safely whitelisted using a SHA-256 hash without enabling `'unsafe-inline'` for all scripts.
**Prevention:** Calculate the SHA-256 hash of any necessary inline scripts and add them to `script-src`, removing `'unsafe-inline'`. For this repo, the hash `sha256-hATJXMfL8V2nqU86k5eAtJylkXQLEVq1boJzRb8ye6s=` corresponds to the organization schema.
