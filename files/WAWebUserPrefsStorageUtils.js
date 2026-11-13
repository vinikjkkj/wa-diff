__d(
  "WAWebUserPrefsStorageUtils",
  ["WALogger", "WAMd5", "WAWebUserUtils"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      var n = o("WAWebUserUtils").getMaybeMePnLessOrFallback_DO_NOT_USE();
      if (!n) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "hashUserPrefKey: Me has not loaded yet.",
            ])),
        );
        return;
      }
      var r = o("WAMd5").md5(n.toString() + ":" + t);
      return r;
    }
    l.hashUserPrefKey = s;
  },
  98,
);
