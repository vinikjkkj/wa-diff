__d(
  "WAWebQbmPaymentReminderInteractionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumChatsFolderType",
    "WAWebWamEnumContactType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          QbmPaymentReminderInteraction: [
            7360,
            {
              actionTypePaymentReminder: [1, e.TYPES.STRING],
              chatsFolderType: [
                2,
                o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE,
              ],
              contactType: [3, o("WAWebWamEnumContactType").CONTACT_TYPE],
              dedupKey: [14, e.TYPES.INTEGER],
              deltaTime: [4, e.TYPES.INTEGER],
              deltaTimeReceived: [5, e.TYPES.INTEGER],
              isBizIntent: [6, e.TYPES.BOOLEAN],
              isInsubContact: [7, e.TYPES.BOOLEAN],
              isMuted: [8, e.TYPES.BOOLEAN],
              isPaymentOverdue: [9, e.TYPES.BOOLEAN],
              messageIdHmac: [10, e.TYPES.STRING],
              readReceiptsEnabled: [11, e.TYPES.BOOLEAN],
              threadIdHmac: [12, e.TYPES.STRING],
              unifiedSessionId: [13, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { QbmPaymentReminderInteraction: [] },
      );
    l.QbmPaymentReminderInteractionWamEvent = s;
  },
  98,
);
