__d(
  "WAWebHatchFrontendGating",
  ["WAWebABProps", "WAWebHatchGating", "WAWebPrimaryFeaturesModel"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebHatchGating").isHatchIntegrationEnabledForPrimaryFeature({
        primaryAiBotIntegrationEnabled: o("WAWebPrimaryFeaturesModel")
          .PrimaryFeatures.aiBotIntegrationEnabled,
      });
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "hatch_pairing_from_companion_enabled",
      );
    }
    ((l.isHatchIntegrationEnabled = e),
      (l.isHatchPairingFromCompanionEnabled = s));
  },
  98,
);
