__d(
  "WAWebCommsUnifiedSessionId",
  [],
  function (t, n, r, o, a, i) {
    var e = null,
      l = null;
    function s() {
      return e;
    }
    function u(t) {
      ((e = t), l == null || l(t));
    }
    function c(e) {
      l = e;
    }
    ((i.getCommsUnifiedSessionId = s),
      (i.setCommsUnifiedSessionId = u),
      (i.setCommsUnifiedSessionIdListener = c));
  },
  66,
);
