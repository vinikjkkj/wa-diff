__d(
  "WAWebQuickActionGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === "status" || e === "chats"
        ? o("WAWebABProps").getABPropConfigValue(
            "web_configurable_quick_actions_m1",
          ) === !0
        : e === "channels"
          ? o("WAWebABProps").getABPropConfigValue(
              "web_configurable_quick_actions_m1_channels",
            ) === !0
          : e === "community_navigation"
            ? o("WAWebABProps").getABPropConfigValue(
                "web_configurable_quick_actions_m1_communities",
              ) === !0
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    l.isQuickActionsEnabled = e;
  },
  98,
);
