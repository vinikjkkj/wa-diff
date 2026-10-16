__d(
  "WAWebInternalProductFeaturePolicy",
  ["WAWebInternalMobilePlatforms", "WAWebMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebInternalMobilePlatforms").isInternalPlatform(
        o("WAWebMobilePlatforms").getMaybeMobilePlatform(),
      );
    }
    l.isInternalProduct = e;
  },
  98,
);
