__d(
  "WhatsAppWebServiceWorker",
  [
    "WAWebMainThreadLogger",
    "WAWebSuspiciousLinkMetrics",
    "WAWebSuspiciousLinkWam",
    "WAWebSw",
    "WAWebWamRuntimeProvider",
    "WAWebWamWorkerInterface",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        init: function () {
          try {
            return (
              o("WAWebMainThreadLogger").initializeWAWebMainThreadLogger(),
              o("WAWebWamRuntimeProvider").setWamRuntime({
                commit: o("WAWebWamWorkerInterface").commit,
                set: o("WAWebWamWorkerInterface").set,
              }),
              o("WAWebSuspiciousLinkMetrics").configureSuspiciousLinkMetrics(
                "sw",
                function (e) {
                  return o("WAWebWamWorkerInterface").commitWithResult(
                    o("WAWebSuspiciousLinkWam").createSuspiciousLinkMetricEvent(
                      e,
                    ),
                  );
                },
              ),
              o("WAWebSw").initHandlers(),
              !0
            );
          } catch (e) {
            return !1;
          }
        },
      },
      s = e.init(),
      u = s;
    l.default = u;
  },
  98,
);
