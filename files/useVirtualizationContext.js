__d(
  "useVirtualizationContext",
  ["VirtualizationContext", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useContext,
      d = s.useMemo,
      m = s.useRef;
    function p() {
      var e = o("react-compiler-runtime").c(11),
        t = c(r("VirtualizationContext")),
        n = m(0),
        a;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = new Set()), (e[0] = a))
        : (a = e[0]);
      var i = m(a),
        l = m(!1),
        s = m(null);
      if (s.current == null) {
        var u;
        (e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = new Map()), (e[1] = u))
          : (u = e[1]),
          (s.current = u));
      }
      var d;
      e[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = function (t) {
            var e;
            n.current = n.current + 1;
            var r = n.current;
            return (
              (e = s.current) == null || e.set(r, t),
              function () {
                var e;
                (e = s.current) == null || e.delete(r);
              }
            );
          }),
          (e[2] = d))
        : (d = e[2]);
      var p = d,
        _;
      e[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = function () {
            return s.current == null ? !1 : s.current.size > 0;
          }),
          (e[3] = _))
        : (_ = e[3]);
      var f = _,
        g = m(null);
      if (g.current == null) {
        var h;
        (e[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = new Map()), (e[4] = h))
          : (h = e[4]),
          (g.current = h));
      }
      var y;
      e[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = function (t, r) {
            n.current = n.current + 1;
            var e = n.current,
              o = null,
              a = g.current;
            if (a != null) {
              var i;
              (a.has(t) || a.set(t, new Map()),
                (o = a.get(t)),
                (i = o) == null || i.set(e, r));
            }
            return function () {
              var n, r;
              ((n = o) == null || n.delete(e),
                ((r = o) == null ? void 0 : r.size) === 0 &&
                  (a == null || a.delete(t)));
            };
          }),
          (e[5] = y))
        : (y = e[5]);
      var C = y,
        b;
      e[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = function (t) {
            var e, n;
            return (e = (n = g.current) == null ? void 0 : n.has(t)) != null
              ? e
              : !1;
          }),
          (e[6] = b))
        : (b = e[6]);
      var v = b,
        S;
      e[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = function (t) {
            return (
              i.current.add(t),
              t(l.current),
              function () {
                i.current.delete(t);
              }
            );
          }),
          (e[7] = S))
        : (S = e[7]);
      var R = S,
        L;
      e[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = function (t) {
            ((l.current = t),
              i.current.forEach(function (e) {
                e(t);
              }));
          }),
          (e[8] = L))
        : (L = e[8]);
      var E = L,
        k = m(null),
        I;
      e[9] !== t
        ? ((I =
            t != null
              ? t
              : {
                  contentWrapperRef: k,
                  createFlag: C,
                  createPin: p,
                  hasFlag: v,
                  hasPin: f,
                  onVirtualizationChange: E,
                  subscribeToVirtualizationStatus: R,
                }),
          (e[9] = t),
          (e[10] = I))
        : (I = e[10]);
      var T = I;
      return T;
    }
    l.default = p;
  },
  98,
);
