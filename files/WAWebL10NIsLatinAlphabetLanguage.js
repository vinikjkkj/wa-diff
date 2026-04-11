__d(
  "WAWebL10NIsLatinAlphabetLanguage",
  ["WAWebL10NRemoveAccents", "latenize"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return r("latenize").isLatin(
        o("WAWebL10NRemoveAccents").removeAccents(e),
      );
    }
    l.isLatinAlphabetLanguage = e;
  },
  98,
);
