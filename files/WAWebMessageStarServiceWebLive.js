__d(
  "WAWebMessageStarServiceWebLive",
  ["JSResourceForInteraction", "WAWebMessageStarService", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")(
        "WAWebChatSendStarMsgsBridge",
      ).__setRef("WAWebMessageStarServiceWebLive"),
      s = o("WAWebMessageStarService").MessageStarService.make(function* () {
        var t = yield* o("WebDi.Async").fromPromise(function () {
            return e.load();
          }),
          n = t.sendStarMsgs,
          r = t.sendUnstarAll,
          a = {
            sendStarMsgs: function (t, r, a) {
              return o("WebDi.Async").fromPromise(function () {
                return n(t, r, a);
              });
            },
            sendUnstarAll: function (t, n) {
              return o("WebDi.Async").fromPromise(function () {
                return r(t, n);
              });
            },
          };
        return a;
      });
    l.MessageStarServiceWebLive = s;
  },
  98,
);
