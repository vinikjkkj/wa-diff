__d(
  "CometAdsRenderingValidationContextProvider",
  [
    "CometAdsRenderingValidationContext",
    "CometAdsRenderingValidationReducer",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useMemo,
      m = u.useRef,
      p = { hasImpressionEnded: !1, logs: [] };
    function _(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.adClientToken,
        a = e.adId,
        i = e.children,
        l = e.postRenderingLoggers,
        u = m(p),
        c;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = new Set()), (t[0] = c))
        : (c = t[0]);
      var d = m(c),
        _;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = function (t) {
            u.current = o("CometAdsRenderingValidationReducer").reducer(
              u.current,
              t,
            );
          }),
          (t[1] = _))
        : (_ = t[1]);
      var g = _,
        h;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = function () {
            d.current.forEach(f);
          }),
          (t[2] = h))
        : (h = t[2]);
      var y = h,
        C;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = function () {
            return u.current;
          }),
          (t[3] = C))
        : (C = t[3]);
      var b = C,
        v;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = function (t) {
            return (
              d.current.add(t),
              function () {
                d.current.delete(t);
              }
            );
          }),
          (t[4] = v))
        : (v = t[4]);
      var S = v,
        R;
      t[5] !== n || t[6] !== a || t[7] !== l
        ? ((R = {
            dispatcher: g,
            finalizePendingLogs: y,
            getCurrentState: b,
            registerPendingLogsFinalizer: S,
            sponsoredData: {
              adClientToken: n,
              adId: a,
              postRenderingLoggers: l,
            },
          }),
          (t[5] = n),
          (t[6] = a),
          (t[7] = l),
          (t[8] = R))
        : (R = t[8]);
      var L = R,
        E;
      return (
        t[9] !== i || t[10] !== L
          ? ((E = s.jsx(r("CometAdsRenderingValidationContext").Provider, {
              value: L,
              children: i,
            })),
            (t[9] = i),
            (t[10] = L),
            (t[11] = E))
          : (E = t[11]),
        E
      );
    }
    function f(e) {
      e();
    }
    l.default = _;
  },
  98,
);
