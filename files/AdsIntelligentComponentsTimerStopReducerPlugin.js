__d(
  "AdsIntelligentComponentsTimerStopReducerPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          return t.set("timerOn", !1).update("timerCycle", function (e) {
            return e + 1;
          });
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
