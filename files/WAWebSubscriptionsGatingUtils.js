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
      return (
        c() ||
        e() ||
        (o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebMetaOneGating").isMetaOneRolloutEnabled()) ||
        s()
      );
    }
    function c() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue("premium_blue_enabled")
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
    function p() {
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
      (l.subscriptionFetchEnabled = u),
      (l.isMetaVerifiedEnabled = c),
      (l.isMetaVerifiedContextCardEnabled = d),
      (l.isMetaVerifiedLockedProfileEditingV1Enabled = m),
      (l.isMetaOneSubscriptionNotificationsEnabled = p));
  },
  98,
);
