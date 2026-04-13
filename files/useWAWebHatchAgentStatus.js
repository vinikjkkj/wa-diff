__d(
  "useWAWebHatchAgentStatus",
  [
    "WAWebBotFrontendGating",
    "WAWebBotUtils",
    "WAWebHatchAgentStatusManager",
    "WAWebHatchTextStatusBridge",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      var t = o("react-compiler-runtime").c(3),
        n,
        a;
      (t[0] !== e
        ? ((n = function () {
            if (
              !(
                e == null ||
                !o("WAWebBotUtils").isHatchBot(e.id) ||
                !o("WAWebBotFrontendGating").isHatchIntegrationEnabled()
              )
            ) {
              var t = e.id.toString(),
                n = e.id,
                a = r("WAWebHatchAgentStatusManager").subscribeToStatusText(
                  function (e) {
                    e != null
                      ? o("WAWebHatchTextStatusBridge").setHatchTextStatus(n, e)
                      : o("WAWebHatchTextStatusBridge").clearHatchTextStatus(n);
                  },
                );
              return (
                r("WAWebHatchAgentStatusManager").fetchAndUpdateStatus(t),
                function () {
                  (a(),
                    o("WAWebHatchTextStatusBridge").clearHatchTextStatus(n));
                }
              );
            }
          }),
          (a = [e]),
          (t[0] = e),
          (t[1] = n),
          (t[2] = a))
        : ((n = t[1]), (a = t[2])),
        s(n, a));
    }
    l.default = u;
  },
  98,
);
