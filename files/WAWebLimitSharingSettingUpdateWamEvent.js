__d(
  "WAWebLimitSharingSettingUpdateWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumOpusAction",
    "WAWebWamEnumToggleUpdateAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        LimitSharingSettingUpdate: [
          6390,
          {
            opusAction: [3, o("WAWebWamEnumOpusAction").OPUS_ACTION],
            threadId: [1, o("WAWebWamCodegenUtils").TYPES.STRING],
            toggleUpdateAction: [
              2,
              o("WAWebWamEnumToggleUpdateAction").TOGGLE_UPDATE_ACTION,
            ],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { LimitSharingSettingUpdate: [] },
    );
    l.LimitSharingSettingUpdateWamEvent = e;
  },
  98,
);
