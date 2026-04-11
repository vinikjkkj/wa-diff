__d(
  "WAWebQuickReplyWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumLastMessageDirection",
    "WAWebWamEnumQuickReplyAction",
    "WAWebWamEnumQuickReplyEntryPoint",
    "WAWebWamEnumQuickReplyOrigin",
    "WAWebWamEnumQuickReplyTranscodeResult",
    "WAWebWamEnumQuickReplyType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          QuickReply: [
            1468,
            {
              attachmentGifCount: [7, e.TYPES.INTEGER],
              attachmentImageCount: [5, e.TYPES.INTEGER],
              attachmentVideoCount: [6, e.TYPES.INTEGER],
              isSmartDefault: [10, e.TYPES.BOOLEAN],
              labelThreadId: [12, e.TYPES.STRING],
              lastMessageDirection: [
                16,
                o("WAWebWamEnumLastMessageDirection").LAST_MESSAGE_DIRECTION,
              ],
              messageDepth: [17, e.TYPES.INTEGER],
              quickReplyAction: [
                1,
                o("WAWebWamEnumQuickReplyAction").QUICK_REPLY_ACTION,
              ],
              quickReplyCount: [2, e.TYPES.INTEGER],
              quickReplyEntryPoint: [
                11,
                o("WAWebWamEnumQuickReplyEntryPoint").QUICK_REPLY_ENTRY_POINT,
              ],
              quickReplyKeywordCount: [3, e.TYPES.INTEGER],
              quickReplyKeywordMatched: [4, e.TYPES.BOOLEAN],
              quickReplyOrigin: [
                9,
                o("WAWebWamEnumQuickReplyOrigin").QUICK_REPLY_ORIGIN,
              ],
              quickReplyTranscodeResult: [
                8,
                o("WAWebWamEnumQuickReplyTranscodeResult")
                  .QUICK_REPLY_TRANSCODE_RESULT,
              ],
              quickReplyType: [
                19,
                o("WAWebWamEnumQuickReplyType").QUICK_REPLY_TYPE,
              ],
              threadCreationDate: [14, e.TYPES.STRING],
              threadEntryPoint: [13, e.TYPES.STRING],
              threadIdHmac: [15, e.TYPES.STRING],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { QuickReply: [] },
      );
    l.QuickReplyWamEvent = s;
  },
  98,
);
