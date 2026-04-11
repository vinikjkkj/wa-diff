__d(
  "WAWebExtensionScreenProgressWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumEntryPointConversationInitiated",
    "WAWebWamEnumFlowEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ExtensionScreenProgress: [
            4112,
            {
              adContext: [22, e.TYPES.STRING],
              bizPlatform: [1, o("WAWebWamEnumBizPlatform").BIZ_PLATFORM],
              businessOwnerJid: [2, e.TYPES.STRING],
              clickSequenceNumber: [24, e.TYPES.INTEGER],
              embeddedError: [3, e.TYPES.STRING],
              embeddedFlow: [4, e.TYPES.STRING],
              embeddedFlowType: [5, e.TYPES.STRING],
              entryPointConversationInitiated: [
                19,
                o("WAWebWamEnumEntryPointConversationInitiated")
                  .ENTRY_POINT_CONVERSATION_INITIATED,
              ],
              entryPointConversionApp: [20, e.TYPES.STRING],
              entryPointConversionSource: [21, e.TYPES.STRING],
              extensionCategory: [6, e.TYPES.STRING],
              extensionRestoredFromCache: [17, e.TYPES.BOOLEAN],
              extensionScreenLength: [7, e.TYPES.INTEGER],
              extensionStatus: [18, e.TYPES.STRING],
              extensionsFlowId: [8, e.TYPES.STRING],
              extensionsMessageId: [9, e.TYPES.STRING],
              extensionsSessionId: [10, e.TYPES.STRING],
              flowEntryPoint: [
                23,
                o("WAWebWamEnumFlowEntryPoint").FLOW_ENTRY_POINT,
              ],
              flowStatusExit: [11, e.TYPES.STRING],
              hsmCategory: [12, e.TYPES.STRING],
              hsmTag: [16, e.TYPES.STRING],
              isSuccessScreen: [25, e.TYPES.BOOLEAN],
              isTemplate: [13, e.TYPES.BOOLEAN],
              layoutType: [26, e.TYPES.STRING],
              screenProgress: [14, e.TYPES.STRING],
              sequenceNumber: [15, e.TYPES.INTEGER],
              shoppingCartItemsCount: [27, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "private",
            0,
          ],
        },
        { ExtensionScreenProgress: [] },
      );
    l.ExtensionScreenProgressWamEvent = s;
  },
  98,
);
