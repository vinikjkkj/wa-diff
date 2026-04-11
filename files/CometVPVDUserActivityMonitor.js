__d(
  "CometVPVDUserActivityMonitor",
  ["CometUserActivityMonitor"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      isUserActive: function () {
        return o("CometUserActivityMonitor").getActivityState() === "ACTIVE";
      },
      subscribe: function (t) {
        var e = o("CometUserActivityMonitor").subscribe(function (e) {
          var n = e === "ACTIVE";
          t(n);
        });
        return function () {
          e && e.remove();
        };
      },
    };
    l.default = e;
  },
  98,
);
