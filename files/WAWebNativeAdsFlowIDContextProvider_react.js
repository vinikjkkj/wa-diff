__d(
  "WAWebNativeAdsFlowIDContextProvider.react",
  [
    "WAWebNativeAdsFlowIDContext",
    "WAWebPonyfillsCryptoRandomUUID",
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
      m = u.useState;
    function p(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.children,
        a = e.initialAdCreationFlowID,
        i = e.manageAdsFlowID,
        l = m(a),
        u = l[0],
        c = l[1],
        d;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = function () {
            var e = r("WAWebPonyfillsCryptoRandomUUID")();
            return (c(e), e);
          }),
          (t[0] = d))
        : (d = t[0]);
      var p = d,
        _;
      t[1] !== u || t[2] !== i
        ? ((_ = {
            manageAdsFlowID: i,
            adCreationFlowID: u,
            regenerateAdCreationFlowID: p,
            setAdCreationFlowID: c,
          }),
          (t[1] = u),
          (t[2] = i),
          (t[3] = _))
        : (_ = t[3]);
      var f = _,
        g;
      return (
        t[4] !== n || t[5] !== f
          ? ((g = s.jsx(r("WAWebNativeAdsFlowIDContext").Provider, {
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
    l.default = p;
  },
  98,
);
