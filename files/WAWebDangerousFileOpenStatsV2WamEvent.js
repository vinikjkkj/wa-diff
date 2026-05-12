__d(
  "WAWebDangerousFileOpenStatsV2WamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumHarmfulFileWarningClickthroughAction",
    "WAWebWamEnumHarmfulFileWarningSenderRelationship",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        DangerousFileOpenStatsV2: [
          6708,
          {
            harmfulFileWarningClickthroughAction: [
              1,
              o("WAWebWamEnumHarmfulFileWarningClickthroughAction")
                .HARMFUL_FILE_WARNING_CLICKTHROUGH_ACTION,
            ],
            harmfulFileWarningSenderRelationship: [
              2,
              o("WAWebWamEnumHarmfulFileWarningSenderRelationship")
                .HARMFUL_FILE_WARNING_SENDER_RELATIONSHIP,
            ],
          },
          [1, 1, 1],
          "private",
          0,
        ],
      },
      { DangerousFileOpenStatsV2: [] },
    );
    l.DangerousFileOpenStatsV2WamEvent = e;
  },
  98,
);
