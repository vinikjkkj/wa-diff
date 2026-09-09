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
        primaryAiHatchIntegrationEnabled: o("WAWebPrimaryFeaturesModel")
          .PrimaryFeatures.aiHatchIntegrationEnabled,
      });
    }
    function s() {
      return (
        e() &&
        o("WAWebBotBaseGating").isAiSubscriptionEnabled() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_manage_subscription_enabled",
        )
      );
    }
    ((l.isHatchIntegrationEnabled = e),
      (l.isHatchManageSubscriptionEnabled = s));
  },
  98,
);
