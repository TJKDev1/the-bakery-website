## 2026-02-01 - Content Security Policy Pattern
**Vulnerability:** Lack of a Content Security Policy (CSP) left the application vulnerable to Cross-Site Scripting (XSS) and data injection attacks.
**Learning:** This project requires specific allowances for Google Fonts and Redbubble (preconnect) in its security policy.
**Prevention:** Maintain a strict CSP allowing only 'self' and specific external origins (currently applied via a CSP `<meta>` tag; HTTP headers are preferred where possible): `style-src 'self' https://fonts.googleapis.com`, `font-src https://fonts.gstatic.com`, `connect-src 'self' https://www.redbubble.com`.

## 2026-02-06 - CSP Hash for Inline Scripts
**Vulnerability:** Usage of `'unsafe-inline'` in `script-src` allowed execution of arbitrary inline scripts, defeating the primary protection of CSP against XSS.
**Learning:** Netlify configuration was split between `_headers` and `netlify.toml`, with `netlify.toml` containing a placeholder and `_headers` being insecure. Consistency is key.
**Prevention:** Calculate SHA-256 hashes for necessary inline scripts (like JSON-LD) and include them in the CSP `script-src` directive instead of using `'unsafe-inline'`.
