__d(
  "WAWebAECompanionEligibilityReaders",
  [
    "WAWebAECompanionEligibility",
    "WAWebAECompanionGating",
    "WAWebCoexProductStateStore",
    "WAWebMobilePlatforms",
    "WAWebPrimaryFeaturesModel",
    "WAWebUserPrefsGeneral",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebAECompanionEligibility").getAEOnboardingRouteResult(u);
    }
    function s() {
      return o("WAWebAECompanionEligibility").isAEOffboardingAvailable(u);
    }
    var u = {
      isBusinessAccount: o("WAWebMobilePlatforms").isSMB,
      hasCtwaContext: function () {
        return (
          o("WAWebUserPrefsGeneral").getCTWAMessageReceived() ||
          o("WAWebPrimaryFeaturesModel").PrimaryFeatures.hasFeature(
            "ctwa_message_received",
          )
        );
      },
      getCoexSurfaces: function () {
        var e = o("WAWebCoexProductStateStore").getCoexProductState();
        return e != null && o("WAWebAECompanionGating").isCoexStateSyncEnabled()
          ? e.surfaces
          : null;
      },
      getCompatibilityBits: o("WAWebAECompanionGating").getAECompatibilityBits,
      isOnboardingFeatureEnabled: o("WAWebAECompanionGating")
        .isAEOnboardingEnabled,
      isCompanionGateEnabled: o("WAWebAECompanionGating")
        .isAECompanionOnboardingEnabled,
    };
    ((l.getAECompanionOnboardingRouteResult = e),
      (l.isAECompanionOffboardingAvailable = s));
  },
  98,
);
