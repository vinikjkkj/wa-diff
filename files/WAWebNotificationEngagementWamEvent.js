__d(
  "WAWebNotificationEngagementWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumClientGroupSizeBucket",
    "WAWebWamEnumGroupTypeClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          NotificationEngagement: [
            3796,
            {
              avgNotifEngagementT: [1, e.TYPES.TIMER],
              groupSizeBucket: [
                2,
                o("WAWebWamEnumClientGroupSizeBucket").CLIENT_GROUP_SIZE_BUCKET,
              ],
              groupTypeClient: [
                3,
                o("WAWebWamEnumGroupTypeClient").GROUP_TYPE_CLIENT,
              ],
              isAGroup: [4, e.TYPES.BOOLEAN],
              isWebBackgroundSyncNotif: [18, e.TYPES.BOOLEAN],
              threadId: [5, e.TYPES.STRING],
              totalLinkReshareMessageNotifShown: [19, e.TYPES.INTEGER],
              totalLinkReshareMessageNotifShownFb: [21, e.TYPES.INTEGER],
              totalLinkReshareMessageNotifShownIg: [22, e.TYPES.INTEGER],
              totalLinkReshareMessageNotifTapToOpen: [20, e.TYPES.INTEGER],
              totalLinkReshareMessageNotifTapToOpenFb: [23, e.TYPES.INTEGER],
              totalLinkReshareMessageNotifTapToOpenIg: [24, e.TYPES.INTEGER],
              totalMessageReminderNotifShown: [16, e.TYPES.INTEGER],
              totalMessageReminderNotifTapToOpen: [17, e.TYPES.INTEGER],
              totalNotifMarkAsRead: [6, e.TYPES.INTEGER],
              totalNotifMissedCallVoipCallback: [7, e.TYPES.INTEGER],
              totalNotifMissedCallVoipMessage: [8, e.TYPES.INTEGER],
              totalNotifOthers: [9, e.TYPES.INTEGER],
              totalNotifReply: [10, e.TYPES.INTEGER],
              totalNotifRtcVoipAccept: [11, e.TYPES.INTEGER],
              totalNotifRtcVoipDecline: [12, e.TYPES.INTEGER],
              totalNotifShowPreview: [13, e.TYPES.INTEGER],
              totalNotifShown: [14, e.TYPES.INTEGER],
              totalNotifTapToOpen: [15, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { NotificationEngagement: [] },
      );
    l.NotificationEngagementWamEvent = s;
  },
  98,
);
