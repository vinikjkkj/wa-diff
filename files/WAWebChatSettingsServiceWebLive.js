__d(
  "WAWebChatSettingsServiceWebLive",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAWebChatSettingsService",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")("WAWebChatArchiveBridge").__setRef(
        "WAWebChatSettingsServiceWebLive",
      ),
      u = r("JSResourceForInteraction")("WAWebChatLockAction").__setRef(
        "WAWebChatSettingsServiceWebLive",
      ),
      c = r("JSResourceForInteraction")("WAWebChatMuteBridge").__setRef(
        "WAWebChatSettingsServiceWebLive",
      ),
      d = o("WAWebChatSettingsService").ChatSettingsService.make(function* () {
        var t = yield* o("WebDi.Async").fromPromise(function () {
            return (e || (e = n("Promise"))).all([
              s.load(),
              u.load(),
              c.load(),
            ]);
          }),
          r = t[0].sendConversationArchive,
          a = t[1],
          i = a.setChatAsLocked,
          l = a.setChatAsUnlocked,
          d = t[2].sendConversationMute,
          m = {
            sendConversationArchive: function (t, n, a) {
              return o("WebDi.Async").fromPromise(function () {
                return r(t, n, a);
              });
            },
            sendConversationMute: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return d(t);
              });
            },
            setChatAsLocked: function (t, n) {
              return o("WebDi.Async").fromPromise(function () {
                return i(t, n);
              });
            },
            setChatAsUnlocked: function (t, n) {
              return o("WebDi.Async").fromPromise(function () {
                return l(t, n);
              });
            },
          };
        return m;
      });
    l.ChatSettingsServiceWebLive = d;
  },
  98,
);
