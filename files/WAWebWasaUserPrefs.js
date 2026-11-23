__d(
  "WAWebWasaUserPrefs",
  ["WAWebUserPrefsIndexedDBStorage"],
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
    async function u(t, n) {
      var r,
        a = babelHelpers.extends(
          {},
          (r = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e)) != null
            ? r
            : {},
        );
      ((a[t] = n),
        await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(e, a));
    }
    async function c(t) {
      var n = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(e);
      if (!(n == null || n[t] == null)) {
        var r = babelHelpers.extends({}, n);
        (delete r[t],
          await o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.set(e, r));
      }
    }
    ((l.getWasaActiveTargetId = s),
      (l.setWasaActiveTargetId = u),
      (l.clearWasaActiveTargetId = c));
  },
  98,
);
