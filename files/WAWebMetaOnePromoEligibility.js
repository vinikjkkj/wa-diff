__d(
  "WAWebMetaOnePromoEligibility",
  ["WAWebMobilePlatforms", "WAWebUserPrefsSubscription"],
  function (t, n, r, o, a, i, l) {
    var e = "7d_free_trial";
    function s(t) {
      return o("WAWebUserPrefsSubscription").getMetaOnePromoTypes()[t] === e;
    }
    function u() {
      return o("WAWebMobilePlatforms").isIOSPrimary() ? "smbi" : "smba";
    }
    ((l.hasMetaOneSevenDayFreeTrial = s), (l.getMetaOnePhonePromoPlatform = u));
  },
  98,
);
