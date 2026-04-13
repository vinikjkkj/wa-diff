__d(
  "useWAWebTimeLeftMs",
  [
    "react",
    "react-compiler-runtime",
    "useLazyRef",
    "useWAWebThrottledCallback",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useRef,
      u = 0.01;
    function c(e, t, n) {
      var a = o("react-compiler-runtime").c(7),
        i = n === void 0 ? 1e3 : n,
        l = r("useLazyRef")(d),
        c = s(0),
        m = s(0),
        p;
      a[0] !== e || a[1] !== l || a[2] !== t
        ? ((p = function () {
            if (
              l.current == null ||
              c.current == null ||
              t == null ||
              e == null
            )
              return null;
            var n = Date.now(),
              r = e - c.current,
              o = n - l.current;
            if (((c.current = e), (l.current = n), o === 0)) return null;
            var a = t - e,
              i = r / o;
            return (
              (m.current = m.current === 0 ? i : i * u + m.current * (1 - u)),
              a / m.current
            );
          }),
          (a[0] = e),
          (a[1] = l),
          (a[2] = t),
          (a[3] = p))
        : (p = a[3]);
      var _;
      a[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = { trailing: !1, leading: !0 }), (a[4] = _))
        : (_ = a[4]);
      var f = r("useWAWebThrottledCallback")(p, i, _),
        g;
      return (a[5] !== f ? ((g = f()), (a[5] = f), (a[6] = g)) : (g = a[6]), g);
    }
    function d() {
      return Date.now();
    }
    l.useTimeLeftMs = c;
  },
  98,
);
