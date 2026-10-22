__d(
  "WAWebAEOnboardedState",
  [
    "WAWebAEOnboarded",
    "WAWebCmd",
    "WAWebCoexProductStateStore",
    "WAWebMobilePlatforms",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore;
    function u() {
      return s(c, o("WAWebAEOnboarded").isAEOnboarded);
    }
    function c(e) {
      var t = function () {
        o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebCoexProductStateStore").getCoexProductState() != null &&
          e();
      };
      return (
        o("WAWebCoexProductStateStore").subscribeToCoexProductStateChanges(e),
        o("WAWebCmd").Cmd.on("on_ab_props_update_from_bridge", t),
        function () {
          (o(
            "WAWebCoexProductStateStore",
          ).unsubscribeFromCoexProductStateChanges(e),
            o("WAWebCmd").Cmd.off("on_ab_props_update_from_bridge", t));
        }
      );
    }
    l.useIsAEOnboarded = u;
  },
  98,
);
