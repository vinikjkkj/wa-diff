__d(
  "WAWebChatMuteBridge",
  ["WAWebMuteChatSync", "WAWebSyncdCoreApi", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n, r) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var i = yield r("WAWebMuteChatSync").generateMuteMutation(e, t, a),
              l = { muteExpiration: t };
            a != null && (l.mentionAllMuteExpiration = a);
            var s = o("WAWebSyncdCoreApi")
              .lockForSync(["chat"], [i], function (t) {
                var n = t[0];
                return n.merge(e.toString(), l);
              })
              .then(function () {
                return { status: 200 };
              });
            return s;
          },
        )),
        s.apply(this, arguments)
      );
    }
    l.sendConversationMute = e;
  },
  98,
);
