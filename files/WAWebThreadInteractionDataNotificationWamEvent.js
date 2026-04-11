__d(
  "WAWebThreadInteractionDataNotificationWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumClientGroupSizeBucket",
    "WAWebWamEnumGroupTypeClient",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ThreadInteractionDataNotification: [
            6412,
            {
              groupSizeBucket: [
                1,
                o("WAWebWamEnumClientGroupSizeBucket").CLIENT_GROUP_SIZE_BUCKET,
              ],
              groupTypeClient: [
                2,
                o("WAWebWamEnumGroupTypeClient").GROUP_TYPE_CLIENT,
              ],
              isAGroup: [3, e.TYPES.BOOLEAN],
              threadCreationDate: [26, e.TYPES.STRING],
              threadDs: [4, e.TYPES.STRING],
              threadId: [24, e.TYPES.STRING],
              threadIdByLid: [25, e.TYPES.STRING],
              totalLinkReshareMessageNotifShown: [6, e.TYPES.INTEGER],
              totalLinkReshareMessageNotifShownFb: [7, e.TYPES.INTEGER],
              totalLinkReshareMessageNotifShownIg: [8, e.TYPES.INTEGER],
              totalLinkReshareMessageNotifTapToOpen: [9, e.TYPES.INTEGER],
              totalLinkReshareMessageNotifTapToOpenFb: [10, e.TYPES.INTEGER],
              totalLinkReshareMessageNotifTapToOpenIg: [11, e.TYPES.INTEGER],
              totalMessageReminderNotifShown: [12, e.TYPES.INTEGER],
              totalMessageReminderNotifTapToOpen: [13, e.TYPES.INTEGER],
              totalNotifMarkAsRead: [14, e.TYPES.INTEGER],
              totalNotifMissedCallVoipCallback: [15, e.TYPES.INTEGER],
              totalNotifMissedCallVoipMessage: [16, e.TYPES.INTEGER],
              totalNotifOthers: [17, e.TYPES.INTEGER],
              totalNotifReply: [18, e.TYPES.INTEGER],
              totalNotifRtcVoipAccept: [19, e.TYPES.INTEGER],
              totalNotifRtcVoipDecline: [20, e.TYPES.INTEGER],
              totalNotifShowPreview: [21, e.TYPES.INTEGER],
              totalNotifShown: [22, e.TYPES.INTEGER],
              totalNotifTapToOpen: [23, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ThreadInteractionDataNotification: [] },
      );
    l.ThreadInteractionDataNotificationWamEvent = s;
  },
  98,
);
