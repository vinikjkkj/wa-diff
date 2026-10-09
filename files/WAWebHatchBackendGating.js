__d(
  "WAWebHatchBackendGating",
  ["WAWebABProps", "WAWebHatchGating", "WAWebPrimaryFeatures"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "ai_hatch_integration_enabled";
    function s() {
      return o("WAWebHatchGating").isHatchIntegrationEnabledForPrimaryFeature({
        primaryAiHatchIntegrationEnabled: o(
          "WAWebPrimaryFeatures",
        ).primaryFeatureEnabled(e),
      });
    }
    function u() {
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_approval_notification_enabled",
        )
      );
    }
    function c() {
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue("ai_hatch_browser_enabled")
      );
    }
    function d() {
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue("ai_hatch_connectors_enabled")
      );
    }
    function m() {
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_hatch_secure_credentials_enabled",
        )
      );
    }
    ((l.HATCH_PRIMARY_FEATURE = e),
      (l.isHatchIntegrationEnabledOnBackend = s),
      (l.isHatchApprovalNotificationEnabledOnBackend = u),
      (l.isHatchBrowserEnabledOnBackend = c),
      (l.isHatchConnectorsEnabledOnBackend = d),
      (l.isHatchSecureCredentialsEnabledOnBackend = m));
  },
  98,
);
