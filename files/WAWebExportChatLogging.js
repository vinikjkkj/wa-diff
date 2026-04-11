__d(
  "WAWebExportChatLogging",
  [
    "WAWebChatExportWamEvent",
    "WAWebWamEnumExportModeType",
    "WAWebWamEnumExportResultType",
    "WAWebWamEnumMessageChatType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        text_only: o("WAWebWamEnumExportModeType").EXPORT_MODE_TYPE.TEXT_ONLY,
        with_media: o("WAWebWamEnumExportModeType").EXPORT_MODE_TYPE.WITH_MEDIA,
      },
      s = {
        success: o("WAWebWamEnumExportResultType").EXPORT_RESULT_TYPE.SUCCESS,
        cancelled: o("WAWebWamEnumExportResultType").EXPORT_RESULT_TYPE
          .CANCELLED,
        error: o("WAWebWamEnumExportResultType").EXPORT_RESULT_TYPE.ERROR,
      },
      u = {
        individual: o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE
          .INDIVIDUAL,
        group: o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.GROUP,
        broadcast: o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.BROADCAST,
      };
    function c(t) {
      new (o("WAWebChatExportWamEvent").ChatExportWamEvent)({
        exportMode: e[t.exportMode],
        chatType: u[t.chatType],
        exportMessageCount: t.messageCount,
        mediaCount: t.mediaCount,
        exportDurationMs: t.exportDurationMs,
        exportResult: s[t.exportResult],
        exportErrorReason: t.errorReason,
        exportDateRangeUsed: t.dateRangeUsed ? 1 : 0,
        exportFileSizeBytes: t.fileSizeBytes,
      }).commit();
    }
    l.logExportChat = c;
  },
  98,
);
