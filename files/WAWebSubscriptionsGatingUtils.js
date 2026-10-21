__d(
  "WAWebSubscriptionsGatingUtils",
  [
    "WAWebABProps",
    "WAWebMetaOneGating",
    "WAWebMobilePlatforms",
    "WAWebPrimaryFeatures",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue("smb_billing_enabled")
      );
    }
    function s() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "contact_manager_sub_gating_enabled",
        )
      );
    }
    function u() {
      return s() && o("WAWebMetaOneGating").isMetaOneRolloutEnabled();
    }
    function c() {
      return (
        d() ||
        e() ||
        (o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebMetaOneGating").isMetaOneRolloutEnabled()) ||
        s()
      );
    }
    function d() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue("premium_blue_enabled")
        : !1;
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_meta_verified_context_card",
      );
    }
    function p() {
      return o("WAWebPrimaryFeatures").primaryFeatureEnabled(
        "profile_edit_for_mv_users_enabled",
      );
    }
    function _() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_meta_one_subscription_notifications_enabled",
        ) &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_meta_one_subscription_notifications_enabled",
        )
      );
    }
    ((l.billingEnabled = e),
      (l.customerManagerSubscriptionGatingEnabled = s),
      (l.customerManagerMetaOneUpsellEnabled = u),
      (l.subscriptionFetchEnabled = c),
      (l.isMetaVerifiedEnabled = d),
      (l.isMetaVerifiedContextCardEnabled = m),
      (l.isMetaVerifiedLockedProfileEditingV1Enabled = p),
      (l.isMetaOneSubscriptionNotificationsEnabled = _));
  },
  98,
);
