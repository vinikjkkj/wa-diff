__d(
  "WAWebWamFalcoBatchLoggerLoader",
  ["Promise", "cr:11720", "unsafeCast"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = { 3: r("unsafeCast")(n("cr:11720")) };
    function u(e) {
      return s[e] != null;
    }
    function c(e) {
      var t;
      return (t = s[e]) == null ? void 0 : t.getModuleIfRequired();
    }
    function d(t) {
      var r = s[t];
      return r == null ? (e || (e = n("Promise"))).resolve(null) : r.load();
    }
    ((l.hasWamFalcoBatchLogger = u),
      (l.getWamFalcoBatchLoggerIfLoaded = c),
      (l.loadWamFalcoBatchLogger = d));
  },
  98,
);
