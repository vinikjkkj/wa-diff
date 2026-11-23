__d(
  "WAWebMentionPickerActionLoggingUtils",
  ["WAWebChatThreadLogging", "WAWebMentionPickerActionWamEvent"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      n === void 0 && (n = e.groupMetadata != null);
      var r = await o("WAWebChatThreadLogging").getChatThreadID(e.id.toJid());
      new (o("WAWebMentionPickerActionWamEvent").MentionPickerActionWamEvent)({
        isAGroup: n,
        mentionType: t,
        threadId: r != null ? r : "",
      }).commit();
    }
    l.logMentionPickerAction = e;
  },
  98,
);
