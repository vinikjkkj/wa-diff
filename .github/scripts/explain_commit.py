#!/usr/bin/env python3
"""Generate an AI summary of the latest commit via Gemini and emit title/body for a GitHub Release."""

import json
import os
import re
import subprocess
import sys
import urllib.request

MODEL = "gemini-2.5-flash"
MAX_DIFF_CHARS = 600_000  # ~150k tokens; leaves headroom under 250k TPM cap


def run(cmd: list[str]) -> str:
    return subprocess.check_output(cmd, text=True, encoding="utf-8", errors="replace")


def build_context(sha: str) -> tuple[str, bool]:
    stat = run(["git", "show", "--stat", "--format=%H%n%s%n%an%n%ad", sha])
    new_files = run(["git", "diff", f"{sha}~1", sha, "--diff-filter=A", "--name-only"])
    diff = run(["git", "diff", "-U1", f"{sha}~1", sha])

    base = "## git show --stat:\n" + stat + "\n## New files:\n" + new_files
    if len(diff) <= MAX_DIFF_CHARS:
        return base + "\n## Diff (-U1):\n" + diff, True
    return base, False


def call_gemini(api_key: str, context: str, has_diff: bool) -> dict:
    if has_diff:
        guidance = (
            "You have the FULL diff (zero context). Be technical: cite short code snippets in "
            "fenced ```js blocks when they reveal a feature, new function/identifier, or notable "
            "refactor. Ignore pure minification noise (variable renames, module ID shuffles)."
        )
    else:
        guidance = (
            "Diff was too large to include — infer from FILENAMES and --stat only. "
            "No code snippets; describe themes."
        )

    prompt = (
        "You summarize commits from a repo that stores daily dumps of the WhatsApp Web bundle "
        f"(transpiled/minified code). {guidance}\n\n"
        "CRITICAL: Your response MUST be valid JSON with EXACTLY these 4 keys — no more, no less:\n"
        '{"title_en": "...", "body_en": "...", "title_pt": "...", "body_pt": "..."}\n\n'
        "ALL 4 keys are REQUIRED. Do NOT omit any key. Do NOT use other key names.\n\n"
        "- title_en: up to 80 characters, English, highlights the 1-2 main themes.\n"
        "- title_pt: up to 80 characters, Brazilian Portuguese translation of title_en.\n"
        "- body_en: markdown, English, bullets grouped by theme "
        "(e.g. **AI Reply Bot**, **Polls**, **Newsletter**). Short, no preamble. Max 12 bullets.\n"
        "- body_pt: markdown, Brazilian Portuguese translation of body_en. "
        "Keep code snippets and identifiers identical — translate only prose.\n\n"
        f"{context}"
    )

    body = json.dumps({
        "contents": [{"parts": [{"text": prompt}]}],
        "generationConfig": {"responseMimeType": "application/json"},
    }).encode()

    url = f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:generateContent?key={api_key}"
    req = urllib.request.Request(url, data=body, headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=120) as r:
        data = json.loads(r.read())

    text = data["candidates"][0]["content"]["parts"][0]["text"]
    parsed = json.loads(text)
    title_en = parsed.get("title_en", parsed.get("title", "")).strip()
    body_en = parsed.get("body_en", parsed.get("body", "")).strip()
    return {
        "title_en": title_en,
        "body_en": body_en,
        "title_pt": parsed.get("title_pt", title_en).strip(),
        "body_pt": parsed.get("body_pt", body_en).strip(),
    }


def emit_outputs(title: str, body: str, tag: str) -> None:
    out_path = os.environ.get("GITHUB_OUTPUT")
    if not out_path:
        print(f"title={title}\ntag={tag}\n\n{body}")
        return
    with open(out_path, "a", encoding="utf-8") as f:
        f.write(f"title={title}\n")
        f.write(f"tag={tag}\n")
    with open("release_body.md", "w", encoding="utf-8") as f:
        f.write(body)


def main() -> int:
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("GEMINI_API_KEY missing", file=sys.stderr)
        return 1

    sha = run(["git", "rev-parse", "HEAD"]).strip()
    commit_date = run(["git", "show", "-s", "--format=%cd", "--date=format:%Y.%m.%d-%H%M", sha]).strip()
    tag = f"v{commit_date}"

    context, has_diff = build_context(sha)
    result = call_gemini(api_key, context, has_diff)

    repo = os.environ.get("GITHUB_REPOSITORY", "")
    server = os.environ.get("GITHUB_SERVER_URL", "https://github.com")
    commit_link = f"[`{sha[:10]}`]({server}/{repo}/commit/{sha})" if repo else f"`{sha[:10]}`"

    body = (
        "<details open><summary>🇺🇸 <b>English</b></summary>\n\n"
        f"{result['body_en']}\n\n"
        "</details>\n\n"
        "<details><summary>🇧🇷 <b>Português</b></summary>\n\n"
        f"{result['body_pt']}\n\n"
        "</details>\n\n"
        f"---\nCommit: {commit_link}"
    )
    title = re.sub(r"\s+", " ", result["title_en"])[:80]

    emit_outputs(title, body, tag)
    return 0


if __name__ == "__main__":
    sys.exit(main())
