__d(
  "WAWebChatMuteBridge",
  ["WAWebMuteChatSync", "WAWebSyncdCoreApi", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e._expirationNew,
            n = e.chatId,
            a = e.expiration,
            i = e.mentionAllMuteExpiration,
            l = yield r("WAWebMuteChatSync").generateMuteMutation(n, a, i),
            s = { muteExpiration: a };
          i != null && (s.mentionAllMuteExpiration = i);
          var u = o("WAWebSyncdCoreApi")
            .lockForSync(["chat"], [l], function (e) {
              var t = e[0];
              return t.merge(n.toString(), s);
            })
            .then(function () {
              return { status: 200 };
            });
          return u;
        })),
        s.apply(this, arguments)
      );
    }
    l.sendConversationMute = e;
  },
  98,
);
