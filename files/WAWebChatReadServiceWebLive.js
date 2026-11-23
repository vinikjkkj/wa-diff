__d(
  "WAWebChatReadServiceWebLive",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAWebChatReadService",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")("WAWebChatSeenBridge").__setRef(
        "WAWebChatReadServiceWebLive",
      ),
      u = r("JSResourceForInteraction")(
        "WAWebChatSendConversationSeen",
      ).__setRef("WAWebChatReadServiceWebLive"),
      c = r("JSResourceForInteraction")("WAWebSendReadReceiptJob").__setRef(
        "WAWebChatReadServiceWebLive",
      ),
      d = o("WAWebChatReadService").ChatReadService.make(function* () {
        var t = yield* o("WebDi.Async").fromPromise(function () {
            return (e || (e = n("Promise"))).all([
              s.load(),
              u.load(),
              c.load(),
            ]);
          }),
          r = t[0],
          a = r.markConversationSeen,
          i = r.markConversationUnseen,
          l = r.sendConversationUnseen,
          d = t[1].sendConversationSeen,
          m = t[2].markEditedMsgsRead,
          p = {
            markConversationSeen: function (t, n) {
              return o("WebDi.Async").fromPromise(function () {
                return a(t, n);
              });
            },
            markConversationUnseen: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return i(t);
              });
            },
            sendConversationUnseen: function (t, n) {
              return o("WebDi.Async").fromPromise(function () {
                return l(t, n);
              });
            },
            sendConversationSeen: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return d(t);
              });
            },
            markEditedMsgsRead: function (t, n, r) {
              return o("WebDi.Async").fromPromise(function () {
                return m(t, n, r);
              });
            },
          };
        return p;
      });
    l.ChatReadServiceWebLive = d;
  },
  98,
);
