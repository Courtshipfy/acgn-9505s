# Nginx performance configuration

The production site is served directly by Nginx. The repository provides
`deploy/nginx/performance.conf` as a snippet for the existing HTTPS server.
It does not contain the domain, document root, redirects, or certificate paths.

## Install

Copy the snippet to the server:

```bash
sudo install -m 0644 deploy/nginx/performance.conf /etc/nginx/snippets/acgnmuseum-performance.conf
```

Open the existing `server` block that serves `acgnmuseum.com` on port 443 and
add this line inside that block:

```nginx
include /etc/nginx/snippets/acgnmuseum-performance.conf;
```

Do not add the include to the port 80 server when that server only redirects to
HTTPS. Before applying the change, test the complete configuration:

```bash
sudo nginx -t
sudo systemctl reload nginx
```

If `nginx -t` fails, do not reload. Remove the include and inspect the reported
duplicate `location` or unsupported directive. The server currently runs Nginx
1.22.1, so Brotli is deliberately not enabled unless its module is installed.

## Verify

```bash
curl -sSI -H 'Accept-Encoding: gzip' https://acgnmuseum.com/assets/FILE.js
curl -sSI https://acgnmuseum.com/covers/thumbs/m-9501.webp
curl -sSI https://acgnmuseum.com/sw.js
```

Expected headers:

- hashed JS/CSS: `Content-Encoding: gzip` when the client accepts it, plus a
  one-year immutable cache;
- WebP thumbnails: a seven-day cache;
- `index.html` and `sw.js`: `Cache-Control: no-cache`.

When the existing server block defines security headers with `add_header`,
repeat those headers inside these locations or move them into this snippet.
Nginx 1.22 does not inherit parent `add_header` directives after a child
location defines its own `add_header`.
