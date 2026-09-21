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
    ((l.HATCH_PRIMARY_FEATURE = e),
      (l.isHatchIntegrationEnabledOnBackend = s),
      (l.isHatchApprovalNotificationEnabledOnBackend = u));
  },
  98,
);
