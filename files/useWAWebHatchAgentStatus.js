__d(
  "useWAWebHatchAgentStatus",
  [
    "WAWebBotFrontendGating",
    "WAWebBotUtils",
    "WAWebHatchAgentStatusManager",
    "WAWebHatchTextStatusBridge",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useEffect;
    function u(e) {
      s(
        function () {
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
                (a(), o("WAWebHatchTextStatusBridge").clearHatchTextStatus(n));
              }
            );
          }
        },
        [e],
      );
    }
    l.default = u;
  },
  98,
);
