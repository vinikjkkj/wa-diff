__d(
  "WAWebChatExportWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumExportModeType",
    "WAWebWamEnumExportResultType",
    "WAWebWamEnumMessageChatType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          ChatExport: [
            7734,
            {
              chatType: [1, o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE],
              exportDateRangeUsed: [2, e.TYPES.INTEGER],
              exportDurationMs: [3, e.TYPES.INTEGER],
              exportErrorReason: [4, e.TYPES.STRING],
              exportFileSizeBytes: [5, e.TYPES.INTEGER],
              exportMessageCount: [6, e.TYPES.INTEGER],
              exportMode: [7, o("WAWebWamEnumExportModeType").EXPORT_MODE_TYPE],
              exportResult: [
                8,
                o("WAWebWamEnumExportResultType").EXPORT_RESULT_TYPE,
              ],
              mediaCount: [9, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { ChatExport: [] },
      );
    l.ChatExportWamEvent = s;
  },
  98,
);
