__d(
  "WAWebSimpleSignalDowngradeStore",
  ["WALogger", "WAWebUserPrefsIndexedDBStorage"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "WACoexSimpleSignalDowngradedUsers",
      u = null;
    function c() {
      if (u != null) return u;
      var e = o("WAWebUserPrefsIndexedDBStorage").userPrefsIdb.get(s);
      return ((u = new Set(Array.isArray(e) ? e : [])), u);
    }
    function d(e) {
      return c().has(e.user);
    }
    function m(t) {
      var n = c();
      n.has(t.user) ||
        (n.add(t.user),
        o("WAWebUserPrefsIndexedDBStorage")
          .userPrefsIdb.set(s, Array.from(n))
          .catch(function (n) {
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "SimpleSignalDowngradeStore: persist failed for ",
                  ": ",
                  "",
                ])),
              t.user,
              String(n),
            );
          }));
    }
    ((l.isCoexUserDowngradedFromSimpleSignal = d),
      (l.markCoexUserDowngradedFromSimpleSignal = m));
  },
  98,
);
