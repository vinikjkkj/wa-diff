__d(
  "GeoPrivateChartHoverTargetContextProvider",
  [
    "GeoPrivateChartHoverTargetContext",
    "react",
    "react-compiler-runtime",
    "useShallowEqualMemo",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useState;
    function m(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.children,
        a = d(null),
        i = a[0],
        l = a[1],
        u;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = function (t) {
            l(t);
          }),
          (t[0] = u))
        : (u = t[0]);
      var c = u,
        m;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = function (t) {
            l(function (e) {
              return e === t ? null : e;
            });
          }),
          (t[1] = m))
        : (m = t[1]);
      var p = m,
        _;
      t[2] !== i
        ? ((_ = {
            hoveredTarget: i,
            setLastMouseEnterTarget: c,
            setLastMouseLeaveTarget: p,
          }),
          (t[2] = i),
          (t[3] = _))
        : (_ = t[3]);
      var f = r("useShallowEqualMemo")(_),
        g;
      return (
        t[4] !== n || t[5] !== f
          ? ((g = s.jsx(r("GeoPrivateChartHoverTargetContext").Provider, {
              value: f,
              children: n,
            })),
            (t[4] = n),
            (t[5] = f),
            (t[6] = g))
          : (g = t[6]),
        g
      );
    }
    l.default = m;
  },
  98,
);
