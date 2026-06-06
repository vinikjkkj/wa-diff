__d(
  "WAWebChatMuteBridge",
  ["WAWebMuteChatSync", "WAWebSyncdCoreApi"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = e._expirationNew,
        n = e.chatId,
        a = e.expiration,
        i = e.mentionAllMuteExpiration,
        l = await r("WAWebMuteChatSync").generateMuteMutation(n, a, i),
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
    }
    l.sendConversationMute = e;
  },
  98,
);
