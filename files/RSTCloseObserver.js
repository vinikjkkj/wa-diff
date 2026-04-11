__d(
  "RSTCloseObserver",
  [
    "FBLogger",
    "RSTConfig",
    "RSTEvents",
    "RSTSessionID",
    "ResponsiveTrackerMainThread",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (r("RSTConfig").ENABLE_SERVICE_WORKER) {
        var t = e.persisted
            ? o("RSTEvents").RSTEvent.BROWSER_TAB_BACKGROUND
            : o("RSTEvents").RSTEvent.BROWSER_TAB_CLOSED,
          n = {
            type: r("RSTConfig").MESSAGE_TYPE,
            event: t,
            eventTime: Date.now(),
            DOMData: { hidden: !1 },
            sessionID: o("RSTSessionID").getSessionID(),
            metadata: null,
          };
        try {
          if ("serviceWorker" in navigator) {
            var a;
            (a = navigator.serviceWorker) == null ||
              (a = a.controller) == null ||
              a.postMessage({ command: "responsiveness", data: n });
          }
        } catch (e) {
          r("FBLogger")("responsive-tracker")
            .catching(r("getErrorSafe")(e))
            .warn("Failed to send quick browser tab close event to worker");
        }
        try {
          r("ResponsiveTrackerMainThread").postEvent(t);
        } catch (e) {
          r("FBLogger")("responsive-tracker")
            .catching(r("getErrorSafe")(e))
            .mustfix(
              "Failed to send browser tab close/background event to worker",
            );
        }
      }
    }
    function s() {
      window.addEventListener("pagehide", e);
    }
    l.initPageCloseObserver = s;
  },
  98,
);
