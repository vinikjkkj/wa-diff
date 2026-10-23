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
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(4),
        t = c(),
        n = o(
          "WAWebCustomerManagerAccessStore",
        ).useWAWebCustomerManagerAccessState(),
        r = o(
          "WAWebCustomerManagerAccessStore",
        ).useWAWebCustomerManagerTrialNow(n),
        a;
      return (
        e[0] !== n || e[1] !== t || e[2] !== r
          ? ((a =
              !o(
                "WAWebSubscriptionsGatingUtils",
              ).customerManagerSubscriptionGatingEnabled() ||
              t ||
              o(
                "WAWebCustomerManagerAccessState",
              ).isCustomerManagerAccessAllowedByState(n, r)),
            (e[0] = n),
            (e[1] = t),
            (e[2] = r),
            (e[3] = a))
          : (a = e[3]),
        a
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
