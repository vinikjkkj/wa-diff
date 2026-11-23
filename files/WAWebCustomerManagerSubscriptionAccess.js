__d(
  "WAWebCustomerManagerSubscriptionAccess",
  [
    "WATimeUtils",
    "WAWebCustomerManagerAccessState",
    "WAWebCustomerManagerAccessStore",
    "WAWebFeatureFlagName",
    "WAWebMetaOneSubscriptionActions",
    "WAWebSubscriptionFeatureFlagActions",
    "WAWebSubscriptionsGatingUtils",
    "useWAWebGetFeatureFlag",
    "useWAWebHasActiveMetaOneSubscription",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        !o(
          "WAWebSubscriptionsGatingUtils",
        ).customerManagerSubscriptionGatingEnabled() ||
        u() ||
        o(
          "WAWebCustomerManagerAccessState",
        ).isCustomerManagerAccessAllowedByState(
          o("WAWebCustomerManagerAccessStore").getCustomerManagerAccessState(),
          o("WATimeUtils").unixTime(),
        )
      );
    }
    function s() {
      var e = c(),
        t = o(
          "WAWebCustomerManagerAccessStore",
        ).useWAWebCustomerManagerAccessState(),
        n = o(
          "WAWebCustomerManagerAccessStore",
        ).useWAWebCustomerManagerTrialNow(t);
      return (
        !o(
          "WAWebSubscriptionsGatingUtils",
        ).customerManagerSubscriptionGatingEnabled() ||
        e ||
        o(
          "WAWebCustomerManagerAccessState",
        ).isCustomerManagerAccessAllowedByState(t, n)
      );
    }
    function u() {
      return (
        o(
          "WAWebSubscriptionFeatureFlagActions",
        ).isSubscriptionFeatureFlagEnabled(
          o("WAWebFeatureFlagName").FeatureFlagName.BIZ_WA_CONTACT_MANAGER,
        ) && o("WAWebMetaOneSubscriptionActions").hasActiveMetaOneSubscription()
      );
    }
    function c() {
      var e = r("useWAWebGetFeatureFlag")(
          o("WAWebFeatureFlagName").FeatureFlagName.BIZ_WA_CONTACT_MANAGER,
        ),
        t = e.enabled,
        n = r("useWAWebHasActiveMetaOneSubscription")();
      return t && n;
    }
    ((l.isCustomerManagerSubscriptionAccessAllowed = e),
      (l.useWAWebCustomerManagerSubscriptionAccessAllowed = s),
      (l.useWAWebHasCustomerManagerPaidBenefit = c));
  },
  98,
);
