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
        u() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_smb_meta_one_mobile_signup_enabled",
        )
      );
    }
    function d() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_smb_aura_benefits_enabled",
        )
      );
    }
    function m() {
      return (
        p() ||
        e() ||
        (o("WAWebMobilePlatforms").isSMB() &&
          o("WAWebMetaOneGating").isMetaOneRolloutEnabled())
      );
    }
    function p() {
      return o("WAWebMobilePlatforms").isSMB()
        ? o("WAWebABProps").getABPropConfigValue("premium_blue_enabled")
        : !1;
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "smb_meta_verified_context_card",
      );
    }
    function f() {
      return o("WAWebPrimaryFeatures").primaryFeatureEnabled(
        "profile_edit_for_mv_users_enabled",
      );
    }
    function g() {
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
      (l.customerManagerMetaOneMobileSignupEnabled = c),
      (l.smbAuraBenefitsEnabled = d),
      (l.subscriptionFetchEnabled = m),
      (l.isMetaVerifiedEnabled = p),
      (l.isMetaVerifiedContextCardEnabled = _),
      (l.isMetaVerifiedLockedProfileEditingV1Enabled = f),
      (l.isMetaOneSubscriptionNotificationsEnabled = g));
  },
  98,
);
