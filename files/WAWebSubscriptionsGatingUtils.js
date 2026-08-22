__d(
  "WAWebSubscriptionsGatingUtils",
  ["WAWebABProps", "WAWebMobilePlatforms", "WAWebPrimaryFeatures"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_billing_enabled")
      );
    }
    function s() {
      return u() || e();
    }
    function u() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue("premium_blue_enabled")
        : !1;
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_meta_verified_context_card",
      );
    }
    function d() {
      return o("WAWebPrimaryFeatures").primaryFeatureEnabled(
        "profile_edit_for_mv_users_enabled",
      );
    }
    ((l.billingEnabled = e),
      (l.subscriptionFetchEnabled = s),
      (l.isMetaVerifiedEnabled = u),
      (l.isMetaVerifiedContextCardEnabled = c),
      (l.isMetaVerifiedLockedProfileEditingV1Enabled = d));
  },
  98,
);
