__d(
  "withAdsErrorBoundary",
  [
    "AdsErrorBoundary.react",
    "react",
    "react-compiler-runtime",
    "useHeroErrorMetadata",
    "useHeroFailTrigger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useCallback;
    function c(e, t, n) {
      function a(a) {
        var i = o("react-compiler-runtime").c(9),
          l;
        i[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = n != null ? n : {}), (i[0] = l))
          : (l = i[0]);
        var u = l,
          c = u.fallbackComponent,
          d = r("useHeroFailTrigger")(),
          m = r("useHeroErrorMetadata")(),
          p;
        i[1] !== d
          ? ((p = function (t, n) {
              d({ description: n, error: t });
            }),
            (i[1] = d),
            (i[2] = p))
          : (p = i[2]);
        var _ = p,
          f;
        i[3] !== a
          ? ((f = s.jsx(t, babelHelpers.extends({}, a))),
            (i[3] = a),
            (i[4] = f))
          : (f = i[4]);
        var g;
        return (
          i[5] !== m || i[6] !== _ || i[7] !== f
            ? ((g = s.jsx(r("AdsErrorBoundary.react"), {
                augmentError: m,
                fallbackComponent: c,
                moduleName: e,
                onError: _,
                children: f,
              })),
              (i[5] = m),
              (i[6] = _),
              (i[7] = f),
              (i[8] = g))
            : (g = i[8]),
          g
        );
      }
      return a;
    }
    l.default = c;
  },
  98,
);
