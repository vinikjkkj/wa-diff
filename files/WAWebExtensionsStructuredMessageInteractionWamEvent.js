__d(
  "WAWebExtensionsStructuredMessageInteractionWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumEntryPointConversationInitiated",
    "WAWebWamEnumFlowEntryPoint",
    "WAWebWamEnumInteractionType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumStructuredMessageClass",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ExtensionsStructuredMessageInteraction: [
            4114,
            {
              adContext: [10, e.TYPES.STRING],
              bizPlatform: [1, o("WAWebWamEnumBizPlatform").BIZ_PLATFORM],
              businessOwnerJid: [2, e.TYPES.STRING],
              entryPointConversationInitiated: [
                7,
                o("WAWebWamEnumEntryPointConversationInitiated")
                  .ENTRY_POINT_CONVERSATION_INITIATED,
              ],
              entryPointConversionApp: [8, e.TYPES.STRING],
              entryPointConversionSource: [9, e.TYPES.STRING],
              flowEntryPoint: [
                11,
                o("WAWebWamEnumFlowEntryPoint").FLOW_ENTRY_POINT,
              ],
              messageClass: [
                3,
                o("WAWebWamEnumStructuredMessageClass")
                  .STRUCTURED_MESSAGE_CLASS,
              ],
              messageClassAttributes: [4, e.TYPES.STRING],
              messageInteraction: [
                5,
                o("WAWebWamEnumInteractionType").INTERACTION_TYPE,
              ],
              messageMediaType: [6, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              threadIdHmac: [12, e.TYPES.STRING],
            },
            [1, 1, 1],
            "private",
            0,
          ],
        },
        { ExtensionsStructuredMessageInteraction: [] },
      );
    l.ExtensionsStructuredMessageInteractionWamEvent = s;
  },
  98,
);
