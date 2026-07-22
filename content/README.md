# Wikimedia content workflow

This directory separates external source material from reviewed museum copy.

1. `wikimedia-pilot.json` identifies each pilot work by local catalog code, Wikidata QID, and Chinese Wikipedia title.
2. `npm run sync:wikimedia` writes an unedited API snapshot to `imports/wikimedia-raw.json`.
3. A human reviews the imported text and writes the approved 80–140 character description and cover-rights decision to `src/pilot-metadata.js`. Covers must be marked either `approved` for reusable licensed media or `referenced` for non-free identification/reference use with a visible source and rights notice.
4. The website imports only the reviewed metadata. Raw API output is never published automatically.

For production API usage, set `WIKIMEDIA_USER_AGENT` to a descriptive user agent containing a real project URL or contact address.

Never place an image in `public/covers/` until its source, author, license, and permission status have been reviewed.
