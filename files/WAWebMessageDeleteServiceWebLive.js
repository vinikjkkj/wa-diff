__d(
  "WAWebMessageDeleteServiceWebLive",
  ["WAWebChatSendDeleteMsgsBridge", "WAWebMessageDeleteService", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebMessageDeleteService").MessageDeleteService.make(
      function* () {
        var e = {
          sendDeleteMsgs: function (t, n, r) {
            return o("WebDi.Async").fromPromise(function () {
              return o("WAWebChatSendDeleteMsgsBridge").sendDeleteMsgs(t, n, r);
            });
          },
        };
        return e;
      },
    );
    l.MessageDeleteServiceWebLive = e;
  },
  98,
);
