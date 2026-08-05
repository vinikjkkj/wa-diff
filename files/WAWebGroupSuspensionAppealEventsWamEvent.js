__d(
  "WAWebGroupSuspensionAppealEventsWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumGroupSuspensionAppealEntryPoint",
    "WAWebWamEnumGroupSuspensionAppealUiAction",
    "WAWebWamEnumGroupSuspensionAppealUiSurface",
    "WAWebWamEnumGroupTypeClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          GroupSuspensionAppealEvents: [
            7574,
            {
              groupJid: [5, e.TYPES.STRING],
              groupSuspensionAppealEntryPoint: [
                7,
                o("WAWebWamEnumGroupSuspensionAppealEntryPoint")
                  .GROUP_SUSPENSION_APPEAL_ENTRY_POINT,
              ],
              groupSuspensionAppealErrorMessage: [6, e.TYPES.STRING],
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
              isAdmin: [4, e.TYPES.BOOLEAN],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { GroupSuspensionAppealEvents: [] },
      );
    l.GroupSuspensionAppealEventsWamEvent = s;
  },
  98,
);
