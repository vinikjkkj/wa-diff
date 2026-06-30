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
      return o("WAWebMobilePlatforms").isSMB() ? u() || c() : !1;
    }
    function u() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue("premium_blue_enabled")
        : !1;
    }
    function c() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue("smb_billing_enabled")
        : !1;
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_meta_verified_context_card",
      );
    }
    function m() {
      return o("WAWebPrimaryFeatures").primaryFeatureEnabled(
        "profile_edit_for_mv_users_enabled",
      );
    }
    ((l.billingEnabled = e),
      (l.subscriptionFetchEnabled = s),
      (l.isMetaVerifiedEnabled = u),
      (l.isMetaVerifiedContextCardEnabled = d),
      (l.isMetaVerifiedLockedProfileEditingV1Enabled = m));
  },
  98,
);
