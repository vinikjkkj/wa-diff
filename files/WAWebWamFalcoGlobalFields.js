__d(
  "WAWebWamFalcoGlobalFields",
  ["WAWebFalcoCanonicalFieldMapping"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = {};
      for (var t in o("WAWebFalcoCanonicalFieldMapping")
        .canonicalFieldMapping) {
        var n = o("WAWebFalcoCanonicalFieldMapping").canonicalFieldMapping[t],
          r = n();
        r != null && (e[t] = r);
      }
      return e;
    }
    l.getCanonicalFieldsForFalco = e;
  },
  98,
);
