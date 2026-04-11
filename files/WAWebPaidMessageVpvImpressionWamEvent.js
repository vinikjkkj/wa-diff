__d(
  "WAWebPaidMessageVpvImpressionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumChatsFolderType",
    "WAWebWamEnumContactType",
    "WAWebWamEnumMessageBodyTypeEnum",
    "WAWebWamEnumQbmFlag",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          PaidMessageVpvImpression: [
            7652,
            {
              bodyUrlCountInt: [1, e.TYPES.INTEGER],
              bodyUrlUniqueCountInt: [2, e.TYPES.INTEGER],
              buttonValueJsonArray: [3, e.TYPES.STRING],
              chatsFolderType: [
                4,
                o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE,
              ],
              contactType: [5, o("WAWebWamEnumContactType").CONTACT_TYPE],
              ctaUrlUniqueCountInt: [6, e.TYPES.INTEGER],
              decisionId: [7, e.TYPES.STRING],
              deltaTime: [8, e.TYPES.INTEGER],
              deltaTimeReceived: [9, e.TYPES.INTEGER],
              hsmTagStr: [10, e.TYPES.STRING],
              isBizIntent: [11, e.TYPES.BOOLEAN],
              isBroadcastMessage: [12, e.TYPES.BOOLEAN],
              isInsubContact: [13, e.TYPES.BOOLEAN],
              isMuted: [14, e.TYPES.BOOLEAN],
              messageBodyType: [
                25,
                o("WAWebWamEnumMessageBodyTypeEnum").MESSAGE_BODY_TYPE_ENUM,
              ],
              messageFieldJsonArray: [15, e.TYPES.STRING],
              messageIdHmac: [16, e.TYPES.STRING],
              mmCarouselCardIndex: [26, e.TYPES.INTEGER],
              qbmFlag: [17, o("WAWebWamEnumQbmFlag").QBM_FLAG],
              readReceiptsEnabled: [18, e.TYPES.BOOLEAN],
              submessageFieldJsonArray: [19, e.TYPES.STRING],
              threadIdHmac: [20, e.TYPES.STRING],
              unifiedSessionId: [21, e.TYPES.STRING],
              urlUniqueCountInt: [22, e.TYPES.INTEGER],
              vpvDwellTimeMs: [23, e.TYPES.INTEGER],
              vpvJsonObject: [24, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { PaidMessageVpvImpression: [] },
      );
    l.PaidMessageVpvImpressionWamEvent = s;
  },
  98,
);
