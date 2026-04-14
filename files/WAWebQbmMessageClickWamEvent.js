__d(
  "WAWebQbmMessageClickWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumChatsFolderType",
    "WAWebWamEnumContactType",
    "WAWebWamEnumQbmFlag",
    "WAWebWamEnumQbmMessageClickButtonClickedType",
    "WAWebWamEnumSignupEntryPoint",
    "WAWebWamEnumThumbnailType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          QbmMessageClick: [
            5178,
            {
              bizTrustTier: [10, e.TYPES.STRING],
              bodyUrlCountInt: [27, e.TYPES.INTEGER],
              bodyUrlUniqueCountInt: [28, e.TYPES.INTEGER],
              buttonClickedType: [
                1,
                o("WAWebWamEnumQbmMessageClickButtonClickedType")
                  .QBM_MESSAGE_CLICK_BUTTON_CLICKED_TYPE,
              ],
              buttonValueJsonArray: [20, e.TYPES.STRING],
              chatsFolderType: [
                2,
                o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE,
              ],
              contactType: [3, o("WAWebWamEnumContactType").CONTACT_TYPE],
              ctaUrlUniqueCountInt: [29, e.TYPES.INTEGER],
              decisionId: [17, e.TYPES.STRING],
              deltaTime: [4, e.TYPES.INTEGER],
              deltaTimeReceived: [5, e.TYPES.INTEGER],
              entSourceSubplatform: [16, e.TYPES.STRING],
              hsmTagStr: [6, e.TYPES.STRING],
              iasEntryPoint: [
                33,
                o("WAWebWamEnumSignupEntryPoint").SIGNUP_ENTRY_POINT,
              ],
              iasOptinDs: [34, e.TYPES.STRING],
              isBizIntent: [13, e.TYPES.BOOLEAN],
              isBroadcastMessage: [14, e.TYPES.BOOLEAN],
              isCoex: [31, e.TYPES.BOOLEAN],
              isIasSubscriber: [35, e.TYPES.BOOLEAN],
              isInsubContact: [15, e.TYPES.BOOLEAN],
              isOba: [19, e.TYPES.BOOLEAN],
              isThroughDecisionService: [32, e.TYPES.BOOLEAN],
              messageFieldJsonArray: [21, e.TYPES.STRING],
              messageIdHmac: [11, e.TYPES.STRING],
              messageTypeStr: [7, e.TYPES.STRING],
              qbmFlag: [8, o("WAWebWamEnumQbmFlag").QBM_FLAG],
              submessageFieldJsonArray: [22, e.TYPES.STRING],
              threadIdHmac: [9, e.TYPES.STRING],
              threadLidHmac: [18, e.TYPES.STRING],
              thumbnailType: [
                12,
                o("WAWebWamEnumThumbnailType").THUMBNAIL_TYPE,
              ],
              urlUniqueCountInt: [30, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { QbmMessageClick: [] },
      );
    l.QbmMessageClickWamEvent = s;
  },
  98,
);
