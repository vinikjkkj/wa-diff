__d(
  "WAWebChatSettingsServiceWebLive",
  [
    "WAWebChatArchiveBridge",
    "WAWebChatLockAction",
    "WAWebChatMuteBridge",
    "WAWebChatSettingsService",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebChatSettingsService").ChatSettingsService.make(
      function* () {
        var e = {
          sendConversationArchive: function (t, n, r) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebChatArchiveBridge").sendConversationArchive(
                t,
                n,
                r,
              );
            });
          },
          sendConversationMute: function (t) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebChatMuteBridge").sendConversationMute(t);
            });
          },
          setChatAsLocked: function (t, n) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebChatLockAction").setChatAsLocked(t, n);
            });
          },
          setChatAsUnlocked: function (t, n) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebChatLockAction").setChatAsUnlocked(t, n);
            });
          },
        };
        return e;
      },
    );
    l.ChatSettingsServiceWebLive = e;
  },
  98,
);
