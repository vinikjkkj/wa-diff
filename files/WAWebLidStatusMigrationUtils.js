__d(
  "WAWebLidStatusMigrationUtils",
  ["WALogger", "WAWebLidMigrationUtils"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      if (!t.isRegularUser()) return t;
      var n = o("WAWebLidMigrationUtils").toLid(t);
      return n == null
        ? (o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "matWidConvert: no LID mapping found for ",
                ", falling back to PN",
              ])),
            t.toLogString(),
          ),
          t)
        : n;
    }
    l.matWidConvert = s;
  },
  98,
);
