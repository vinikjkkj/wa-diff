__d(
  "WAWebMessageStarServiceWebLive",
  ["WAWebChatSendStarMsgsBridge", "WAWebMessageStarService", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebMessageStarService").MessageStarService.make(function* () {
      var e = {
        sendStarMsgs: function (t, n, r) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebChatSendStarMsgsBridge").sendStarMsgs(t, n, r);
          });
        },
        sendUnstarAll: function (t, n) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebChatSendStarMsgsBridge").sendUnstarAll(t, n);
          });
        },
      };
      return e;
    });
    l.MessageStarServiceWebLive = e;
  },
  98,
);
