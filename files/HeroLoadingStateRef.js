__d(
  "HeroLoadingStateRef",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new WeakMap();
    function l() {
      var t = new Set(),
        n = null,
        r = { current: null };
      return (
        Object.defineProperty(r, "current", {
          get: function () {
            return n;
          },
          set: function (r) {
            ((n = r),
              t.forEach(function (e) {
                return e();
              }));
          },
        }),
        e.set(r, t),
        r
      );
    }
    function s(t, n) {
      var r = e.get(t);
      return (
        r == null || r.add(n),
        function () {
          r == null || r.delete(n);
        }
      );
    }
    ((i.createLoadingStateRef = l), (i.subscribe = s));
  },
  66,
);
