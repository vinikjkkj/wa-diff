__d(
  "WAWebAECompanionGating",
  ["WAWebABProps", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    var e = 0;
    function s() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_smb_ae_companion_onboarding_enabled",
        )
      );
    }
    function u() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue(
            "ctwa_smb_ae_onboarding_compatability_code",
          )
        : e;
    }
    function c() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "ctwa_coex_state_sync_enabled",
        ) === !0
      );
    }
    ((l.isAECompanionOnboardingEnabled = s),
      (l.getAECompatibilityBits = u),
      (l.isCoexStateSyncEnabled = c));
  },
  98,
);
