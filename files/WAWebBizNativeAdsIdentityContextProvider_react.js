__d(
  "WAWebBizNativeAdsIdentityContextProvider.react",
  [
    "WAWebBizAdCreationIdentityContext",
    "WAWebOIDCFlow.react",
    "react",
    "useWAWebBizNativeAdsIdentity",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.children,
        n = e.initialIdentityBundle,
        a = e.isWAAEligible,
        i = r("useWAWebBizNativeAdsIdentity")(n, a),
        l = i.contextValue,
        u = i.onOIDCSuccess;
      return s.jsxs(r("WAWebBizAdCreationIdentityContext").Provider, {
        value: l,
        children: [
          s.jsx(o("WAWebOIDCFlow.react").OIDCEventListener, { onSuccess: u }),
          t,
        ],
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
