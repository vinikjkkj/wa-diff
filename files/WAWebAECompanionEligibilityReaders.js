__d(
  "WAWebAECompanionEligibilityReaders",
  [
    "WAWebAECompanionEligibility",
    "WAWebAECompanionGating",
    "WAWebAECompanionNuxEligibility",
    "WAWebCoexProductStateStore",
    "WAWebCommonCTWADataSharing",
    "WAWebMobilePlatforms",
    "WAWebPrimaryFeaturesModel",
    "WAWebUserPrefsGeneral",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebAECompanionEligibility").getAEOnboardingRouteResult(d);
    }
    function s() {
      return o("WAWebAECompanionEligibility").isAEOffboardingAvailable(d);
    }
    function u() {
      return (
        o(
          "WAWebAECompanionNuxEligibility",
        ).shouldAutoShowOnboardingNuxOnListsHome() &&
        e() === "presented" &&
        !o(
          "WAWebCommonCTWADataSharing",
        ).shouldShowListsManagementDataSharingDialog() &&
        o("WAWebAECompanionGating").isListsHomeOnboardingNuxAutoTriggerEnabled()
      );
    }
    function c() {
      return (
        o(
          "WAWebAECompanionNuxEligibility",
        ).shouldShowOnboardingNuxFromListFilter() && e() === "presented"
      );
    }
    var d = {
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
      (l.isAECompanionOffboardingAvailable = s),
      (l.shouldAutoShowAECompanionOnboardingNuxOnListsHome = u),
      (l.shouldShowAECompanionOnboardingNuxFromListFilter = c));
  },
  98,
);
