__d(
  "WebBloksCheckInstalledAppsOnDevice",
  [
    "CAAWebBloksMinificationKeys",
    "XWebLiteInstalledAppsLoggingControllerRouteBuilder",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (typeof navigator.getInstalledRelatedApps == "function") {
        var n = Date.now(),
          a = navigator.getInstalledRelatedApps();
        r("promiseDone")(
          a,
          function (e) {
            var a = Date.now(),
              i = window.btoa(JSON.stringify(e)),
              l = Math.floor(a - n),
              s = t.get(
                o("CAAWebBloksMinificationKeys").INSTALLED_APPS_IMPRESSION_ID,
              );
            navigator.sendBeacon &&
              navigator.sendBeacon(
                r("XWebLiteInstalledAppsLoggingControllerRouteBuilder")
                  .buildUri({ r: i, wb: "1", t: l.toString(), imp: s })
                  .toString(),
              );
          },
          function (e) {
            throw e;
          },
        );
      }
    }
    l.default = e;
  },
  98,
);
