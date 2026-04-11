__d(
  "WAWebPixFeature",
  ["WAWebMobilePlatforms", "WAWebPrimaryFeaturesModel"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebMobilePlatforms").isSMB() &&
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures
          .customPaymentMethodsSyncSupport
      );
    }
    l.isPixEnabled = e;
  },
  98,
);
