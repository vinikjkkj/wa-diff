__d(
  "WAWebMentionPickerActionLoggingUtils",
  [
    "WAWebChatThreadLogging",
    "WAWebMentionPickerActionWamEvent",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 && (n = e.groupMetadata != null);
          var r = yield o("WAWebChatThreadLogging").getChatThreadID(
            e.id.toJid(),
          );
          new (o(
            "WAWebMentionPickerActionWamEvent",
          ).MentionPickerActionWamEvent)({
            isAGroup: n,
            mentionType: t,
            threadId: r != null ? r : "",
          }).commit();
        })),
        s.apply(this, arguments)
      );
    }
    l.logMentionPickerAction = e;
  },
  98,
);
