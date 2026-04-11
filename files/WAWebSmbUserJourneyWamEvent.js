__d(
  "WAWebSmbUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumChatFilterActionTypes",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumOppositePlatformEnum",
    "WAWebWamEnumSmbFeatureNameEnum",
    "WAWebWamEnumSmbUserActionTypeEnum",
    "WAWebWamEnumSurfaceType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          SmbUserJourney: [
            5462,
            {
              actionType: [
                1,
                o("WAWebWamEnumChatFilterActionTypes").CHAT_FILTER_ACTION_TYPES,
              ],
              contactIsSaved: [2, e.TYPES.BOOLEAN],
              entryPoint: [3, o("WAWebWamEnumEntryPoint").ENTRY_POINT],
              entryPointDetails: [18, e.TYPES.STRING],
              extraAttributes: [4, e.TYPES.STRING],
              oppositePlatform: [
                5,
                o("WAWebWamEnumOppositePlatformEnum").OPPOSITE_PLATFORM_ENUM,
              ],
              prevSurface: [14, o("WAWebWamEnumSurfaceType").SURFACE_TYPE],
              recipientSize: [12, e.TYPES.INTEGER],
              seqId: [7, e.TYPES.INTEGER],
              smbFeatureName: [
                8,
                o("WAWebWamEnumSmbFeatureNameEnum").SMB_FEATURE_NAME_ENUM,
              ],
              smbUserActionType: [
                13,
                o("WAWebWamEnumSmbUserActionTypeEnum")
                  .SMB_USER_ACTION_TYPE_ENUM,
              ],
              smbUserSessionId: [9, e.TYPES.STRING],
              surface: [10, o("WAWebWamEnumSurfaceType").SURFACE_TYPE],
              userActionTarget: [11, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { SmbUserJourney: [] },
      );
    l.SmbUserJourneyWamEvent = s;
  },
  98,
);
