__d(
  "WAWebWorkFeaturePolicy",
  ["WAWebMobilePlatforms", "WAWebWorkMobilePlatforms"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebWorkMobilePlatforms").isWorkPlatform(
        o("WAWebMobilePlatforms").getMaybeMobilePlatform(),
      );
    }
    l.isWork = e;
  },
  98,
);
