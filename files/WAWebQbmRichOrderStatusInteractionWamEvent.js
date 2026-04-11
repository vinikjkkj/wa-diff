__d(
  "WAWebQbmRichOrderStatusInteractionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumChatsFolderType",
    "WAWebWamEnumContactType",
    "WAWebWamEnumEntryPoint",
    "WAWebWamEnumQbmFlag",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          QbmRichOrderStatusInteraction: [
            6940,
            {
              actionTypeRichOrderStatus: [1, e.TYPES.STRING],
              chatsFolderType: [
                2,
                o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE,
              ],
              contactType: [3, o("WAWebWamEnumContactType").CONTACT_TYPE],
              decisionId: [4, e.TYPES.STRING],
              deltaTime: [5, e.TYPES.INTEGER],
              deltaTimeReceived: [6, e.TYPES.INTEGER],
              entryPoint: [7, o("WAWebWamEnumEntryPoint").ENTRY_POINT],
              hsmTagStr: [8, e.TYPES.STRING],
              isBizIntent: [9, e.TYPES.BOOLEAN],
              isBroadcastMessage: [10, e.TYPES.BOOLEAN],
              isInsubContact: [11, e.TYPES.BOOLEAN],
              isMuted: [12, e.TYPES.BOOLEAN],
              messageIdHmac: [13, e.TYPES.STRING],
              qbmFlag: [14, o("WAWebWamEnumQbmFlag").QBM_FLAG],
              readReceiptsEnabled: [15, e.TYPES.BOOLEAN],
              threadIdHmac: [16, e.TYPES.STRING],
              unifiedSessionId: [17, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { QbmRichOrderStatusInteraction: [] },
      );
    l.QbmRichOrderStatusInteractionWamEvent = s;
  },
  98,
);
