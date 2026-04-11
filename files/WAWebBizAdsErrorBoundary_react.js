__d(
  "WAWebBizAdsErrorBoundary.react",
  [
    "FBLogger",
    "WAWebErrorBoundary.react",
    "WAWebNoop",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useEffect;
    function c(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.children,
        a = e.fallback,
        i = e.name,
        l = e.onError,
        u;
      t[0] !== a || t[1] !== i
        ? ((u = function (t) {
            var e = t.boundaryName,
              n = t.error,
              o = t.handleClick,
              l = e === void 0 ? i : e,
              u = o === void 0 ? r("WAWebNoop") : o;
            return s.jsx(d, {
              boundaryName: l,
              error: n,
              fallbackUI: a,
              _handleClick: u,
            });
          }),
          (t[0] = a),
          (t[1] = i),
          (t[2] = u))
        : (u = t[2]);
      var c = u,
        m;
      return (
        t[3] !== c || t[4] !== n || t[5] !== i || t[6] !== l
          ? ((m = s.jsx(o("WAWebErrorBoundary.react").ErrorBoundary, {
              fallback: c,
              name: i,
              onError: l,
              children: n,
            })),
            (t[3] = c),
            (t[4] = n),
            (t[5] = i),
            (t[6] = l),
            (t[7] = m))
          : (m = t[7]),
        m
      );
    }
    function d(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e._handleClick,
        a = e.boundaryName,
        i = e.error,
        l = e.fallbackUI;
      n === void 0 && r("WAWebNoop");
      var s, c;
      return (
        t[0] !== a || t[1] !== i
          ? ((s = function () {
              i != null
                ? r("FBLogger")("wa_ctwa_web")
                    .catching(i)
                    .mustfix("Uncaught render error in " + a)
                : r("FBLogger")("wa_ctwa_web").mustfix(
                    "Uncaught render error in " + a,
                  );
            }),
            (c = [i, a]),
            (t[0] = a),
            (t[1] = i),
            (t[2] = s),
            (t[3] = c))
          : ((s = t[2]), (c = t[3])),
        u(s, c),
        l
      );
    }
    l.default = c;
  },
  98,
);
