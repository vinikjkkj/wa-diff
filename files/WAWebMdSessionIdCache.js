__d(
  "WAWebMdSessionIdCache",
  ["WAWebLocalStorage"],
  function (t, n, r, o, a, i, l) {
    var e = "mdSessionId",
      s = null;
    function u() {
      if (s != null) return s;
      var t =
        r("WAWebLocalStorage") == null
          ? void 0
          : r("WAWebLocalStorage").getItem(e);
      return t != null && typeof t == "string" && t.length > 0
        ? ((s = t), s)
        : null;
    }
    function c(t) {
      if (t == null) {
        d();
        return;
      }
      t.length !== 0 &&
        ((s = t),
        r("WAWebLocalStorage") == null || r("WAWebLocalStorage").setItem(e, t));
    }
    function d() {
      ((s = null),
        r("WAWebLocalStorage") == null || r("WAWebLocalStorage").removeItem(e));
    }
    ((l.getCachedMdSessionId = u),
      (l.setMdSessionId = c),
      (l.clearMdSessionId = d));
  },
  98,
);
