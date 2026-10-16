__d(
  "WAWebRichTextFormatMessageSendWamEvent",
  ["WAWebWamCodegenUtils", "WAWebWamEnumMessageChatType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          RichTextFormatMessageSend: [
            8206,
            {
              chatType: [1, o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE],
              dedupKey: [8, e.TYPES.INTEGER],
              hasBold: [2, e.TYPES.BOOLEAN],
              hasCodeBlock: [3, e.TYPES.BOOLEAN],
              hasItalic: [4, e.TYPES.BOOLEAN],
              hasMonospace: [5, e.TYPES.BOOLEAN],
              hasSpoiler: [6, e.TYPES.BOOLEAN],
              hasStrikethrough: [7, e.TYPES.BOOLEAN],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { RichTextFormatMessageSend: [] },
      );
    l.RichTextFormatMessageSendWamEvent = s;
  },
  98,
);
