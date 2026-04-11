__d(
  "WAWebBusinessTemplateRichOrderStatusWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumChatsFolderType",
    "WAWebWamEnumContactType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          BusinessTemplateRichOrderStatus: [
            7076,
            {
              actionTypeRichOrderStatus: [1, e.TYPES.STRING],
              businessJid: [2, e.TYPES.STRING],
              chatsFolderType: [
                3,
                o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE,
              ],
              contactType: [4, o("WAWebWamEnumContactType").CONTACT_TYPE],
              isBizIntent: [5, e.TYPES.BOOLEAN],
              isInsubContact: [6, e.TYPES.BOOLEAN],
              isMuted: [7, e.TYPES.BOOLEAN],
              readReceiptsEnabled: [8, e.TYPES.BOOLEAN],
              templateId: [9, e.TYPES.STRING],
            },
            [1, 1, 1],
            "private",
            113760892,
          ],
        },
        { BusinessTemplateRichOrderStatus: [] },
      );
    l.BusinessTemplateRichOrderStatusWamEvent = s;
  },
  98,
);
