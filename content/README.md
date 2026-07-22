# Wikimedia content workflow

This directory separates external source material from reviewed museum copy.

1. `wikimedia-pilot.json` and `wikimedia-collection.json` identify works by local catalog code, Wikidata QID, Wikipedia revision, and local cover path.
2. `npm run sync:wikimedia` retains the original eight-item Chinese Wikipedia snapshot; `scripts/fetch-wikimedia-collection.ps1` refreshes the remaining collection from the official English Wikipedia API.
3. Published descriptions are kept to 80–140 Chinese characters. Covers are either `approved` reusable media or `referenced` identification material with a visible source and rights notice.
4. The website imports only the lean reviewed metadata. Raw API extracts are retained for provenance and are not rendered directly.
5. Entries without a usable Wikipedia page image receive an original CC0 archive title card instead of an unverified commercial cover.

For production API usage, set `WIKIMEDIA_USER_AGENT` to a descriptive user agent containing a real project URL or contact address.

Every image in `public/covers/` must have its source, review date, and rights status recorded in collection metadata.
