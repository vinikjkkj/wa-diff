__d(
  "WAThrottle",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      var r,
        o,
        a = (r = n == null ? void 0 : n.leading) != null ? r : !0,
        i = (o = n == null ? void 0 : n.trailing) != null ? o : !0,
        l = null,
        s = null,
        u = null,
        c = void 0;
      function d(t) {
        return ((l = Date.now()), (u = null), (c = e.apply(void 0, t)), c);
      }
      function m() {
        s = null;
        var t = u;
        ((u = null), (l = null), i && t != null && (c = e.apply(void 0, t)));
      }
      function p() {
        for (
          var e = Date.now(),
            n = l == null ? t : e - l,
            r = arguments.length,
            o = new Array(r),
            p = 0;
          p < r;
          p++
        )
          o[p] = arguments[p];
        if (((u = o), l == null || n >= t)) {
          if ((s != null && (self.clearTimeout(s), (s = null)), a)) return d(o);
          i && ((l = e), (s = self.setTimeout(m, t)));
        } else s == null && i && (s = self.setTimeout(m, t - n));
        return c;
      }
      var _ = function () {
        (s != null && (self.clearTimeout(s), (s = null)),
          (u = null),
          (l = null));
      };
      return (
        (p.cancel = _),
        (p.reset = _),
        (p.flush = function () {
          if (s != null) {
            (self.clearTimeout(s), (s = null));
            var t = u;
            ((u = null), (l = null), t != null && (c = e.apply(void 0, t)));
          }
        }),
        (p.isPending = function () {
          return s != null;
        }),
        p
      );
    }
    i.throttle = e;
  },
  66,
);
