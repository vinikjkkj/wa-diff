__d(
  "WAWebMdLinkDeviceCompanionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumApplicationState",
    "WAWebWamEnumMdLinkDeviceCompanionStage",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MdLinkDeviceCompanion: [
            2576,
            {
              appContext: [13, e.TYPES.STRING],
              appContextBitfield: [14, e.TYPES.INTEGER],
              applicationState: [
                12,
                o("WAWebWamEnumApplicationState").APPLICATION_STATE,
              ],
              mdCompanionRefHash: [10, e.TYPES.STRING],
              mdDurationS: [8, e.TYPES.INTEGER],
              mdLinkDeviceCompanionErrorCode: [6, e.TYPES.INTEGER],
              mdLinkDeviceCompanionStage: [
                4,
                o("WAWebWamEnumMdLinkDeviceCompanionStage")
                  .MD_LINK_DEVICE_COMPANION_STAGE,
              ],
              mdLinkDeviceExperienceId: [11, e.TYPES.INTEGER],
              mdRegAttemptId: [9, e.TYPES.STRING],
              mdSessionId: [1, e.TYPES.STRING],
              mdTimestampS: [7, e.TYPES.INTEGER],
              mdWasUpgraded: [5, e.TYPES.BOOLEAN],
              userLocale: [15, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MdLinkDeviceCompanion: [] },
      );
    l.MdLinkDeviceCompanionWamEvent = s;
  },
  98,
);
