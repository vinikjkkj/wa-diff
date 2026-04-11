__d(
  "WAWebL10NRemoveAccents",
  ["WAWebAccentDiacriticRegex", "WAWebL10NHelpers", "latenize"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        e === void 0 && (e = ""),
        r("latenize")(
          o("WAWebL10NHelpers")
            .normalizeForm(e)
            .replace(r("WAWebAccentDiacriticRegex"), ""),
        )
      );
    }
    l.removeAccents = e;
  },
  98,
);
