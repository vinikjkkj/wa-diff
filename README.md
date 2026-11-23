# wa-diff

Tooling to version WhatsApp Web JavaScript bundles and inspect diffs across releases.

## What it does

1. Uses [`@vinikjkkj/wa-fetcher`](https://www.npmjs.com/package/@vinikjkkj/wa-fetcher) (`fetchArchive`) to download the upstream bundle archive of the current WA Web revision, keeping the `.js` files that register `WA*` or `MAIBA*` modules.
2. Saves the WA version, revision and kept bundle names to `bundles.json`.
3. Loads the bundles with `loadCanonicalBundles`, which keeps one copy per module (the archive ships several transpile variants of most modules), and writes each module to `files/<ModuleName>.js`.
4. Runs Prettier on the changed files.

Modules that disappear upstream are not deleted from `files/`.

## Project files

- `main.js`: end-to-end runner (download the archive, export modules, format files).
- `bundles.json`: WA version, revision and the archive bundles the export used.
- `files/`: one file per module.

## Requirements

- Node.js `>=20`
- npm `>=10`
- `WA_ARCHIVE_URL` environment variable: the archive endpoint, with a `{revision}` placeholder. In CI it comes from the repo secret of the same name.

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

## NPM scripts

- `npm run start`: run `main.js`
- `npm run fetch`: run `main.js`
- `npm run check`: syntax-check `main.js`
- `npm run format`: run Prettier on the repo
- `npm run format:check`: check Prettier formatting

## Typical versioning workflow

1. Run `npm run fetch`.
2. Review changed files in `bundles.json` and `files/`.
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
