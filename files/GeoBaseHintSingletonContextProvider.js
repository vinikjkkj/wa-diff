__d(
  "GeoBaseHintSingletonContextProvider",
  [
    "GeoBaseHintSingletonContext",
    "GeoBaseHintSingletonRefContext",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useMemo,
      m = u.useRef,
      p = u.useState;
    function _(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.children,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = new Map()), (t[0] = a))
        : (a = t[0]);
      var i = p(a),
        l = i[0],
        u = i[1],
        d;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = function (t, n) {
            u(function (e) {
              var r = new Map(e);
              return (r.set(t, n), r);
            });
          }),
          (t[1] = d))
        : (d = t[1]);
      var _;
      t[2] !== l
        ? ((_ = { groups: l, setLastHintLayerForGroup: d }),
          (t[2] = l),
          (t[3] = _))
        : (_ = t[3]);
      var f = _,
        g = m(f),
        h,
        y;
      (t[4] !== f
        ? ((h = function () {
            g.current = f;
          }),
          (y = [f]),
          (t[4] = f),
          (t[5] = h),
          (t[6] = y))
        : ((h = t[5]), (y = t[6])),
        c(h, y));
      var C;
      t[7] !== n
        ? ((C = s.jsx(r("GeoBaseHintSingletonRefContext").Provider, {
            value: g,
            children: n,
          })),
          (t[7] = n),
          (t[8] = C))
        : (C = t[8]);
      var b;
      return (
        t[9] !== f || t[10] !== C
          ? ((b = s.jsx(r("GeoBaseHintSingletonContext").Provider, {
              value: f,
              children: C,
            })),
            (t[9] = f),
            (t[10] = C),
            (t[11] = b))
          : (b = t[11]),
        b
      );
    }
    l.default = _;
  },
  98,
);
