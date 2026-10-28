__d(
  "WAWebDashDebugOverrideStore",
  [],
  function (t, n, r, o, a, i) {
    var e = new Map(),
      l = new Set();
    function s(t) {
      return e.get(t);
    }
    function u(t, n) {
      (e.set(t, { setAt: Date.now(), xml: n }), m());
    }
    function c(t) {
      (e.delete(t), m());
    }
    function d(e) {
      return (
        l.add(e),
        function () {
          l.delete(e);
        }
      );
    }
    function m() {
      for (var e of l) e();
    }
    ((i.get = s), (i.set = u), (i.clear = c), (i.subscribe = d));
  },
  66,
);
