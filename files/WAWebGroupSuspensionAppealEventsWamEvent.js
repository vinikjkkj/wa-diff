__d(
  "WAWebGroupSuspensionAppealEventsWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumGroupSuspensionAppealUiAction",
    "WAWebWamEnumGroupSuspensionAppealUiSurface",
    "WAWebWamEnumGroupTypeClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebWamCodegenUtils").defineEvents(
      {
        GroupSuspensionAppealEvents: [
          7574,
          {
            groupJid: [5, o("WAWebWamCodegenUtils").TYPES.STRING],
            groupSuspensionAppealUiAction: [
              1,
              o("WAWebWamEnumGroupSuspensionAppealUiAction")
                .GROUP_SUSPENSION_APPEAL_UI_ACTION,
            ],
            groupSuspensionAppealUiSurface: [
              2,
              o("WAWebWamEnumGroupSuspensionAppealUiSurface")
                .GROUP_SUSPENSION_APPEAL_UI_SURFACE,
            ],
            groupTypeClient: [
              3,
              o("WAWebWamEnumGroupTypeClient").GROUP_TYPE_CLIENT,
            ],
            isAdmin: [4, o("WAWebWamCodegenUtils").TYPES.BOOLEAN],
          },
          [1, 1, 1],
          "regular",
        ],
      },
      { GroupSuspensionAppealEvents: [] },
    );
    l.GroupSuspensionAppealEventsWamEvent = e;
  },
  98,
);
