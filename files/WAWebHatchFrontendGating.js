__d(
  "WAWebHatchFrontendGating",
  [
    "WAWebABProps",
    "WAWebBotBaseGating",
    "WAWebBotUtils",
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
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_approval_notification_enabled",
        )
      );
    }
    function u() {
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue("ai_hatch_connectors_enabled")
      );
    }
    function c() {
      return (
        e() && o("WAWebABProps").getABPropConfigValue("ai_hatch_ideas_enabled")
      );
    }
    function d(t) {
      return (
        t != null &&
        o("WAWebBotUtils").isHatchBot(t) &&
        e() &&
        o("WAWebABProps").getABPropConfigValue("ai_hatch_browser_enabled")
      );
    }
    function m() {
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_secure_credentials_enabled",
        )
      );
    }
    function p() {
      return (
        e() && o("WAWebABProps").getABPropConfigValue("ai_hatch_space_enabled")
      );
    }
    function _() {
      return (
        e() &&
        o("WAWebBotBaseGating").isAiSubscriptionEnabled() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_manage_subscription_enabled",
        )
      );
    }
    ((l.isHatchIntegrationEnabled = e),
      (l.isHatchApprovalNotificationEnabled = s),
      (l.isHatchConnectorsEnabled = u),
      (l.isHatchIdeasEnabled = c),
      (l.isHatchBrowserEnabled = d),
      (l.isHatchSecureCredentialsEnabled = m),
      (l.isHatchSpaceEnabled = p),
      (l.isHatchManageSubscriptionEnabled = _));
  },
  98,
);
