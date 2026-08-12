__d(
  "WAWebHatchFrontendGating",
  [
    "WAWebABProps",
    "WAWebBotBaseGating",
    "WAWebHatchGating",
    "WAWebPrimaryFeaturesModel",
  ],
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
    function u() {
      return (
        e() &&
        o("WAWebBotBaseGating").isAiSubscriptionEnabled() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_manage_subscription_enabled",
        )
      );
    }
    ((l.isHatchIntegrationEnabled = e),
      (l.isHatchPairingFromCompanionEnabled = s),
      (l.isHatchManageSubscriptionEnabled = u));
  },
  98,
);
