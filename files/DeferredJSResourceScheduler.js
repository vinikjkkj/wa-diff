__d(
  "DeferredJSResourceScheduler",
  ["Bootloader", "CometResourceScheduler", "JSScheduler"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      (o("CometResourceScheduler").__debug.queuedDeferredCallback++,
        o("CometResourceScheduler").onHighPriComplete(function () {
          (e || (e = r("JSScheduler"))).scheduleLoggingPriCallback(function () {
            (o("CometResourceScheduler").__debug.executedDeferredCallback++,
              r("Bootloader").loadResources(t));
          });
        }));
    }
    l.default = s;
  },
  98,
);
