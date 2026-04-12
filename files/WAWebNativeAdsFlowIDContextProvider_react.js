__d(
  "WAWebNativeAdsFlowIDContextProvider.react",
  ["WAWebNativeAdsFlowIDContext", "WAWebPonyfillsCryptoRandomUUID", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useMemo,
      m = u.useState;
    function p(e) {
      var t = e.children,
        n = e.initialAdCreationFlowID,
        o = e.manageAdsFlowID,
        a = m(n),
        i = a[0],
        l = a[1],
        u = c(function () {
          var e = r("WAWebPonyfillsCryptoRandomUUID")();
          return (l(e), e);
        }, []),
        p = d(
          function () {
            return {
              manageAdsFlowID: o,
              adCreationFlowID: i,
              regenerateAdCreationFlowID: u,
              setAdCreationFlowID: l,
            };
          },
          [o, i, u],
        );
      return s.jsx(r("WAWebNativeAdsFlowIDContext").Provider, {
        value: p,
        children: t,
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  98,
);
