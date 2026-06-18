__d(
  "WAWebWasaUserPrefs",
  ["WAWebUserPrefsIndexedDBStorage", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = "WAWasaActiveTargetIds";
    function s(t) {
      var n,
        r =
          (n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e)) == null
            ? void 0
            : n[t];
      return typeof r == "string" ? r : null;
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var r,
            a = babelHelpers.extends(
              {},
              (r = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e)) !=
                null
                ? r
                : {},
            );
          ((a[t] = n),
            yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(e, a));
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
          if (!(n == null || n[t] == null)) {
            var r = babelHelpers.extends({}, n);
            (delete r[t],
              yield o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(e, r));
          }
        })),
        m.apply(this, arguments)
      );
    }
    ((l.getWasaActiveTargetId = s),
      (l.setWasaActiveTargetId = u),
      (l.clearWasaActiveTargetId = d));
  },
  98,
);
