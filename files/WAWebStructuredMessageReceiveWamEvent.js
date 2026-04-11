__d(
  "WAWebStructuredMessageReceiveWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumBizPlatform",
    "WAWebWamEnumEntryPointConversationInitiated",
    "WAWebWamEnumLastMessageDirection",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumStructuredMessageClass",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          StructuredMessageReceive: [
            3222,
            {
              bizPlatform: [1, o("WAWebWamEnumBizPlatform").BIZ_PLATFORM],
              businessOwnerJid: [2, e.TYPES.STRING],
              entryPointConversationInitiated: [
                7,
                o("WAWebWamEnumEntryPointConversationInitiated")
                  .ENTRY_POINT_CONVERSATION_INITIATED,
              ],
              entryPointConversionApp: [8, e.TYPES.STRING],
              entryPointConversionSource: [9, e.TYPES.STRING],
              lastMessageDirection: [
                10,
                o("WAWebWamEnumLastMessageDirection").LAST_MESSAGE_DIRECTION,
              ],
              messageClass: [
                3,
                o("WAWebWamEnumStructuredMessageClass")
                  .STRUCTURED_MESSAGE_CLASS,
              ],
              messageClassAttributes: [4, e.TYPES.STRING],
              messageDepth: [11, e.TYPES.INTEGER],
              messageMediaType: [5, o("WAWebWamEnumMediaType").MEDIA_TYPE],
              templateId: [6, e.TYPES.STRING],
              threadIdHmac: [12, e.TYPES.STRING],
            },
            [1, 1, 1],
            "private",
            0,
          ],
        },
        { StructuredMessageReceive: [] },
      );
    l.StructuredMessageReceiveWamEvent = s;
  },
  98,
);
