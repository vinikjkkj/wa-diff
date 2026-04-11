__d(
  "BaseToasterStateManager",
  [
    "CometMaxEnqueuedToastsSitevarConfig.experimental",
    "JSScheduler",
    "XPlatReactToasterStateManager",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      (e || (e = o("JSScheduler"))).scheduleNormalPriCallback(function () {
        t();
      });
    }
    var u = {
      getInstance: function () {
        return r("XPlatReactToasterStateManager").getInstance({
          callbackScheduler: s,
          maxQueuedToasts: r("CometMaxEnqueuedToastsSitevarConfig.experimental")
            .max,
        });
      },
      resetInstance_DO_NOT_USE: function () {
        r("XPlatReactToasterStateManager").resetInstance_DO_NOT_USE();
      },
    };
    l.default = u;
  },
  98,
);
