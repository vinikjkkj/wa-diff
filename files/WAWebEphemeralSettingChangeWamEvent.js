__d(
  "WAWebEphemeralSettingChangeWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumEphemeralSettingEntryPointType",
    "WAWebWamEnumPreciseSizeBucket",
    "WAWebWamEnumPreviousEphemeralityType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          EphemeralSettingChange: [
            2370,
            {
              afterReadDuration: [7, e.TYPES.INTEGER],
              chatEphemeralityDuration: [1, e.TYPES.INTEGER],
              ephemeralSettingEntryPoint: [
                3,
                o("WAWebWamEnumEphemeralSettingEntryPointType")
                  .EPHEMERAL_SETTING_ENTRY_POINT_TYPE,
              ],
              ephemeralSettingGroupSize: [
                5,
                o("WAWebWamEnumPreciseSizeBucket").PRECISE_SIZE_BUCKET,
              ],
              errorCode: [9, e.TYPES.INTEGER],
              isAfterRead: [10, e.TYPES.BOOLEAN],
              isSuccess: [11, e.TYPES.BOOLEAN],
              previousEphemeralityDuration: [2, e.TYPES.INTEGER],
              previousEphemeralityType: [
                12,
                o("WAWebWamEnumPreviousEphemeralityType")
                  .PREVIOUS_EPHEMERALITY_TYPE,
              ],
              threadId: [6, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { EphemeralSettingChange: [] },
      );
    l.EphemeralSettingChangeWamEvent = s;
  },
  98,
);
