# wa-diff

Tooling to version WhatsApp Web JavaScript bundles and inspect diffs across releases.

## What it does

1. Opens WhatsApp Web with `puppeteer-real-browser` in headless mode.
2. Runs [`fetch.js`](./fetch.js) inside the page to collect `.js` bundle URLs.
3. Filters URLs to `static.whatsapp.net`.
4. Saves all collected URLs to `urls.json`.
5. Exports bundles with `wa-export` into `files/` (flat mode).
6. Runs Prettier on the exported files.

## Project files

- `main.js`: end-to-end runner (fetch URLs, export bundles, format files).
- `fetch.js`: browser-side script that discovers bundle URLs.
- `urls.json`: generated list of collected bundle URLs.
- `files/`: generated exported JavaScript files from `wa-export`.

## Requirements

- Node.js `>=20`
- npm `>=10`

## Install

```bash
npm install
```

## Run

```bash
npm run fetch
```

or:

```bash
node main.js
```

## Current export command

The runner executes this logic after generating `urls.json`:

```bash
wa-export urls.json files --workers 50 --flat
```

Then it formats the output:

```bash
prettier --write files --ignore-unknown
```

## NPM scripts

- `npm run start`: run `main.js`
- `npm run fetch`: run `main.js`
- `npm run check`: syntax-check `main.js` and `fetch.js`
- `npm run format`: run Prettier on the repo
- `npm run format:check`: check Prettier formatting

## Typical versioning workflow

1. Run `npm run fetch`.
2. Review changed files in `urls.json` and `files/`.
3. Commit the update.
4. Compare commits to analyze WhatsApp bundle changes.

## AI-generated release notes

Each commit pushed by the daily workflow gets an automatic GitHub Release summarizing what changed. The summary is produced by Gemini 2.5 Flash from the commit's `--stat` and `git diff -U1` (when small enough), and includes both English and Portuguese versions in collapsible sections.

- Tag format: `vYYYY.MM.DD-HHMM` (commit timestamp, UTC)
- Generator: [`.github/scripts/explain_commit.py`](./.github/scripts/explain_commit.py)
- Workflow step lives in [`.github/workflows/daily-update.yml`](./.github/workflows/daily-update.yml)
- Requires repo secret `GEMINI_API_KEY` ([get one here](https://aistudio.google.com/apikey))

Browse the latest summaries in the [Releases](../../releases) tab.

## Notes

- This project is intended for analysis/versioning workflows.
- Use responsibly and respect platform terms and applicable laws.
