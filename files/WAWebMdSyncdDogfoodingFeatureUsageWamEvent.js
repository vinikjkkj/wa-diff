__d(
  "WAWebMdSyncdDogfoodingFeatureUsageWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumMdFeatureCode"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        MdSyncdDogfoodingFeatureUsage: [
          3016,
          {
            mdSyncdDogfoodingFeature: [
              1,
              o("WAWebWamEnumMdFeatureCode").MD_FEATURE_CODE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { MdSyncdDogfoodingFeatureUsage: [] },
    );
    l.MdSyncdDogfoodingFeatureUsageWamEvent = e;
  },
  98,
);
