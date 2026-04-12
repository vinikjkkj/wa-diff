__d(
  "WAWebBizAdsErrorBoundary.react",
  ["FBLogger", "WAWebErrorBoundary.react", "WAWebNoop", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useEffect;
    function c(e) {
      var t = e.children,
        n = e.fallback,
        a = e.name,
        i = e.onError,
        l = function (t) {
          var e = t.boundaryName,
            o = e === void 0 ? a : e,
            i = t.error,
            l = t.handleClick,
            u = l === void 0 ? r("WAWebNoop") : l;
          return s.jsx(d, {
            boundaryName: o,
            error: i,
            fallbackUI: n,
            _handleClick: u,
          });
        };
      return s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
        fallback: l,
        name: a,
        onError: i,
        children: t,
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = e._handleClick,
        n = t === void 0 ? r("WAWebNoop") : t,
        o = e.boundaryName,
        a = e.error,
        i = e.fallbackUI;
      return (
        u(
          function () {
            a != null
              ? r("FBLogger")("wa_ctwa_web")
                  .catching(a)
                  .mustfix("Uncaught render error in " + o)
              : r("FBLogger")("wa_ctwa_web").mustfix(
                  "Uncaught render error in " + o,
                );
          },
          [a, o],
        ),
        i
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
