__d(
  "WAWebMessagingUserJourneyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumActionType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumThreadType",
    "WAWebWamEnumTsSurface",
    "WAWebWamEnumUserRoleType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          MessagingUserJourney: [
            5134,
            {
              appSessionId: [1, e.TYPES.STRING],
              isSelfPin: [8, e.TYPES.BOOLEAN],
              mediaType: [9, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              messagingActionType: [2, o("WAWebWamEnumActionType").ACTION_TYPE],
              pinInChatExpirySecs: [3, e.TYPES.INTEGER],
              threadType: [4, o("WAWebWamEnumThreadType").THREAD_TYPE],
              uiSurface: [5, o("WAWebWamEnumTsSurface").TS_SURFACE],
              unifiedSessionId: [10, e.TYPES.STRING],
              userJourneyFunnelId: [6, e.TYPES.STRING],
              userRole: [7, o("WAWebWamEnumUserRoleType").USER_ROLE_TYPE],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { MessagingUserJourney: [] },
      );
    l.MessagingUserJourneyWamEvent = s;
  },
  98,
);
