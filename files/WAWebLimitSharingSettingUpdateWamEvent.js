__d(
  "WAWebLimitSharingSettingUpdateWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumAcpInteractionType",
    "WAWebWamEnumAcpSurfaceType",
    "WAWebWamEnumAcpVersionType",
    "WAWebWamEnumOpusAction",
    "WAWebWamEnumToggleUpdateAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        LimitSharingSettingUpdate: [
          6390,
          {
            acpInteractionType: [
              5,
              o("WAWebWamEnumAcpInteractionType").ACP_INTERACTION_TYPE,
            ],
            acpSurface: [6, o("WAWebWamEnumAcpSurfaceType").ACP_SURFACE_TYPE],
            acpVersion: [7, o("WAWebWamEnumAcpVersionType").ACP_VERSION_TYPE],
            dedupKey: [4, o("WAWebWamCodegenUtils").TYPES.INTEGER],
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
