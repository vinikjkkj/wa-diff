__d(
  "WAWebBusinessTemplatePaymentReminderWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumChatsFolderType",
    "WAWebWamEnumContactType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          BusinessTemplatePaymentReminder: [
            7358,
            {
              actionTypePaymentReminder: [1, e.TYPES.STRING],
              businessJid: [2, e.TYPES.STRING],
              chatsFolderType: [
                3,
                o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE,
              ],
              contactType: [4, o("WAWebWamEnumContactType").CONTACT_TYPE],
              isBizIntent: [5, e.TYPES.BOOLEAN],
              isInsubContact: [6, e.TYPES.BOOLEAN],
              isMuted: [7, e.TYPES.BOOLEAN],
              isPaymentOverdue: [8, e.TYPES.BOOLEAN],
              readReceiptsEnabled: [9, e.TYPES.BOOLEAN],
              templateId: [10, e.TYPES.STRING],
            },
            [1, 1, 1],
            "private",
            113760892,
          ],
        },
        { BusinessTemplatePaymentReminder: [] },
      );
    l.BusinessTemplatePaymentReminderWamEvent = s;
  },
  98,
);
