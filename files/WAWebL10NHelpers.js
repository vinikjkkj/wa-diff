__d(
  "WAWebL10NHelpers",
  ["WAWebEnvironment"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (e === void 0 && (e = ""), e.normalize("NFKD"));
    }
    function s() {
      return r("WAWebEnvironment").isWindows === !0;
    }
    ((l.normalizeForm = e), (l.isLocalLanguageOverrideEnabled = s));
  },
  98,
);
