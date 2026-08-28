__d(
  "AdsIntelligentComponentsTimerStartReducerPlugin",
  [
    "AdsIntelligentComponentsTimerStopAction",
    "requestIdleCallback",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 10;
    function s(t) {
      r("requestIdleCallback")(function () {
        r("setTimeout")(t, e);
      });
    }
    var u = {
        reduce: function (t, n) {
          return t.get("timerOn")
            ? t
            : (s(function () {
                return r("AdsIntelligentComponentsTimerStopAction").dispatch(
                  {},
                  {
                    line: "38",
                    module:
                      "AdsIntelligentComponentsTimerStartReducerPlugin.js",
                    moduleID: i.id,
                  },
                );
              }),
              t.set("timerOn", !0));
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
