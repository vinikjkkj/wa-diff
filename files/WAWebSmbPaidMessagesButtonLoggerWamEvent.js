__d(
  "WAWebSmbPaidMessagesButtonLoggerWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumPmButtonEventType",
    "WAWebWamEnumPmButtonType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          SmbPaidMessagesButtonLogger: [
            4508,
            {
              businessPhoneNumber: [1, e.TYPES.INTEGER],
              pmButtonCount: [2, e.TYPES.INTEGER],
              pmButtonEventType: [
                3,
                o("WAWebWamEnumPmButtonEventType").PM_BUTTON_EVENT_TYPE,
              ],
              pmButtonIndex: [4, e.TYPES.INTEGER],
              pmButtonType: [5, o("WAWebWamEnumPmButtonType").PM_BUTTON_TYPE],
              pmIsTrackableLink: [7, e.TYPES.STRING],
              pmServerCampaignId: [6, e.TYPES.STRING],
            },
            [1, 1, 1],
            "private",
            113760892,
          ],
        },
        { SmbPaidMessagesButtonLogger: [] },
      );
    l.SmbPaidMessagesButtonLoggerWamEvent = s;
  },
  98,
);
