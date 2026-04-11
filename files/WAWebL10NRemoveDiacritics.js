__d(
  "WAWebL10NRemoveDiacritics",
  ["WAWebAccentDiacriticRegex", "WAWebL10NHelpers"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        e === void 0 && (e = ""),
        o("WAWebL10NHelpers")
          .normalizeForm(e)
          .replace(r("WAWebAccentDiacriticRegex"), "")
      );
    }
    l.removeDiacritics = e;
  },
  98,
);
