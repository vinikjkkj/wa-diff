__d(
  "WAWebPrimaryFeaturesBridgeApi",
  ["WAWebPrimaryFeaturesModel"],
  function (t, n, r, o, a, i, l) {
    var e = {
      setPrimaryFeatures: function (t) {
        var e = t.isFreshSync,
          n = t.primaryFeatures;
        o("WAWebPrimaryFeaturesModel").PrimaryFeatures.setPrimaryFeatures(
          n,
          e === !0,
        );
      },
    };
    l.PrimaryFeaturesBridgeApi = e;
  },
  98,
);
