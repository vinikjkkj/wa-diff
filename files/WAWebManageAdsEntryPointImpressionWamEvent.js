__d(
  "WAWebManageAdsEntryPointImpressionWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumManageAdsEntryPoint"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        ManageAdsEntryPointImpression: [
          4124,
          {
            manageAdsEntryPoint: [
              1,
              o("WAWebWamEnumManageAdsEntryPoint").MANAGE_ADS_ENTRY_POINT,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { ManageAdsEntryPointImpression: [] },
    );
    l.ManageAdsEntryPointImpressionWamEvent = e;
  },
  98,
);
