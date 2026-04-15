__d(
  "WAWebBizNativeAdsIdentityContextProvider.react",
  [
    "WAWebBizAdCreationIdentityContext",
    "WAWebOIDCFlow.react",
    "react",
    "react-compiler-runtime",
    "useWAWebBizNativeAdsIdentity",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.children,
        a = e.initialIdentityBundle,
        i = e.isWAAEligible,
        l = r("useWAWebBizNativeAdsIdentity")(a, i),
        u = l.contextValue,
        c = l.onOIDCSuccess,
        d;
      t[0] !== c
        ? ((d = s.jsx(o("WAWebOIDCFlow.react").OIDCEventListener, {
            onSuccess: c,
          })),
          (t[0] = c),
          (t[1] = d))
        : (d = t[1]);
      var m;
      return (
        t[2] !== n || t[3] !== u || t[4] !== d
          ? ((m = s.jsxs(r("WAWebBizAdCreationIdentityContext").Provider, {
              value: u,
              children: [d, n],
            })),
            (t[2] = n),
            (t[3] = u),
            (t[4] = d),
            (t[5] = m))
          : (m = t[5]),
        m
      );
    }
    l.default = u;
  },
  98,
);
