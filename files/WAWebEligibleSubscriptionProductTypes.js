__d(
  "WAWebEligibleSubscriptionProductTypes",
  ["WAWebUserPrefsSubscription"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o(
        "WAWebUserPrefsSubscription",
      ).getSubscriptionsEntryPointEligibility().metaOne === !0
        ? "meta_one_business"
        : void 0;
    }
    l.getEligibleSubscriptionProductTypes = e;
  },
  98,
);
