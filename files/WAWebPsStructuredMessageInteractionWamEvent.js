__d(
  "WAWebPsStructuredMessageInteractionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumButtonActionType",
    "WAWebWamEnumChatType",
    "WAWebWamEnumClickComponentType",
    "WAWebWamEnumInteractionType",
    "WAWebWamEnumLinkCategoryType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumStructuredMessageClass",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          PsStructuredMessageInteraction: [
            3052,
            {
              bizBotOnboarded: [10, e.TYPES.BOOLEAN],
              bizPlatform: [1, o("WAWebWamEnumBizPlatform").BIZ_PLATFORM],
              businessOwnerJid: [7, e.TYPES.STRING],
              buttonActionType: [
                11,
                o("WAWebWamEnumButtonActionType").BUTTON_ACTION_TYPE,
              ],
              carouselCardIndex: [12, e.TYPES.INTEGER],
              chatTypeInd: [13, o("WAWebWamEnumChatType").CHAT_TYPE],
              clickComponent: [
                14,
                o("WAWebWamEnumClickComponentType").CLICK_COMPONENT_TYPE,
              ],
              clickComponentCount: [15, e.TYPES.INTEGER],
              clickComponentIndex: [16, e.TYPES.INTEGER],
              createdByBizBotWithEdits: [17, e.TYPES.BOOLEAN],
              createdByBizBotWithoutEdits: [18, e.TYPES.BOOLEAN],
              isCoex: [19, e.TYPES.BOOLEAN],
              isOutgoingMessage: [20, e.TYPES.BOOLEAN],
              linkCategory: [
                21,
                o("WAWebWamEnumLinkCategoryType").LINK_CATEGORY_TYPE,
              ],
              messageClass: [
                3,
                o("WAWebWamEnumStructuredMessageClass")
                  .STRUCTURED_MESSAGE_CLASS,
              ],
              messageClassAttributes: [5, e.TYPES.STRING],
              messageInteraction: [
                4,
                o("WAWebWamEnumInteractionType").INTERACTION_TYPE,
              ],
              messageMediaType: [2, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              sentByBizBot: [22, e.TYPES.BOOLEAN],
              templateId: [8, e.TYPES.STRING],
              threadIdHmac: [9, e.TYPES.STRING],
            },
            [1, 1, 1],
            "private",
            0,
          ],
        },
        { PsStructuredMessageInteraction: [] },
      );
    l.PsStructuredMessageInteractionWamEvent = s;
  },
  98,
);
