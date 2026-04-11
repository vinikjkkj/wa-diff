__d(
  "WAWebCommunityFeatureUsageWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumCommunityFeatureUiActionTakenType",
    "WAWebWamEnumCommunityUiFeatureType",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        CommunityFeatureUsage: [
          3696,
          {
            communityId: [2, o("WAWebWamCodegenUtils").TYPES.STRING],
            communityUiAction: [
              4,
              o("WAWebWamEnumCommunityFeatureUiActionTakenType")
                .COMMUNITY_FEATURE_UI_ACTION_TAKEN_TYPE,
            ],
            communityUiFeature: [
              3,
              o("WAWebWamEnumCommunityUiFeatureType").COMMUNITY_UI_FEATURE_TYPE,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { CommunityFeatureUsage: [] },
    );
    l.CommunityFeatureUsageWamEvent = e;
  },
  98,
);
