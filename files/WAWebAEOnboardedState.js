__d(
  "WAWebAEOnboardedState",
  [
    "WAWebAECompanionGating",
    "WAWebCmd",
    "WAWebCoexCanonicalMembership",
    "WAWebCoexProductStateStore",
    "WAWebMobilePlatforms",
    "WAWebUserPrefsGeneral",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore;
    function u() {
      if (!o("WAWebMobilePlatforms").isSMB()) return !1;
      var e = o("WAWebCoexProductStateStore").getCoexProductState();
      return e != null && o("WAWebAECompanionGating").isCoexStateSyncEnabled()
        ? e.surfaces.includes(o("WAWebCoexCanonicalMembership").AE_SURFACE)
        : o("WAWebUserPrefsGeneral").getDetectedOutcomeOnboardingStatus();
    }
    function c() {
      return s(d, u);
    }
    function d(e) {
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
    ((l.isAEOnboarded = u), (l.useIsAEOnboarded = c));
  },
  98,
);
