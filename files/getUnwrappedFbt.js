__d(
  "getUnwrappedFbt",
  ["FbtResultGK"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.contents,
        n = r("FbtResultGK").inlineMode,
        o = r("FbtResultGK").shouldReturnFbtResult;
      if (!o && n !== "REPORT")
        return (t == null ? void 0 : t.length) === 1 && typeof t[0] == "string"
          ? t[0]
          : t;
    }
    l.default = e;
  },
  98,
);
