__d(
  "WAWebDisappearingModeSettingEventsWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumDisappearingModeEntryPointType",
    "WAWebWamEnumDisappearingModeSettingEventNameType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          DisappearingModeSettingEvents: [
            3446,
            {
              disappearingModeEntryPoint: [
                5,
                o("WAWebWamEnumDisappearingModeEntryPointType")
                  .DISAPPEARING_MODE_ENTRY_POINT_TYPE,
              ],
              disappearingModeSettingEventName: [
                1,
                o("WAWebWamEnumDisappearingModeSettingEventNameType")
                  .DISAPPEARING_MODE_SETTING_EVENT_NAME_TYPE,
              ],
              isAfterRead: [6, e.TYPES.BOOLEAN],
              lastToggleTimestamp: [2, e.TYPES.INTEGER],
              newEphemeralityDuration: [3, e.TYPES.INTEGER],
              previousEphemeralityDuration: [4, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { DisappearingModeSettingEvents: [] },
      );
    l.DisappearingModeSettingEventsWamEvent = s;
  },
  98,
);
