__d(
  "CometGHLTestUBT",
  ["GhlTestUbtFalcoEvent", "JSScheduler", "ghlTestUBT"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      (e || (e = o("JSScheduler"))).scheduleLoggingPriCallback(function () {
        r("ghlTestUBT")(function (e, n) {
          return (
            (e || n) && t.addGlobalMetadata("adblocker_enabled", 1),
            r("GhlTestUbtFalcoEvent").log(function () {
              return { recent: n, ubt: e };
            })
          );
        });
      });
    }
    l.default = s;
  },
  98,
);
