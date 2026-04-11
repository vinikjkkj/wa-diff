__d(
  "WAWebDisappearingModeSettingChangeWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumDisappearingModeEntryPointType",
    "WAWebWamEnumPreviousEphemeralityType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          DisappearingModeSettingChange: [
            3056,
            {
              afterReadDuration: [5, e.TYPES.INTEGER],
              disappearingModeEntryPoint: [
                4,
                o("WAWebWamEnumDisappearingModeEntryPointType")
                  .DISAPPEARING_MODE_ENTRY_POINT_TYPE,
              ],
              errorCode: [7, e.TYPES.INTEGER],
              isAfterRead: [8, e.TYPES.BOOLEAN],
              isSuccess: [9, e.TYPES.BOOLEAN],
              lastToggleTimestamp: [3, e.TYPES.INTEGER],
              newEphemeralityDuration: [2, e.TYPES.INTEGER],
              previousEphemeralityDuration: [1, e.TYPES.INTEGER],
              previousEphemeralityType: [
                10,
                o("WAWebWamEnumPreviousEphemeralityType")
                  .PREVIOUS_EPHEMERALITY_TYPE,
              ],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { DisappearingModeSettingChange: [] },
      );
    l.DisappearingModeSettingChangeWamEvent = s;
  },
  98,
);
