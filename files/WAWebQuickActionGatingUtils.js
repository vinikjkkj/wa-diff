__d(
  "WAWebQuickActionGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return (
        o("WAWebABProps").getABPropConfigValue(
          "web_configurable_quick_actions_m1",
        ) === !0
      );
    }
    l.isQuickActionsEnabled = e;
  },
  98,
);
