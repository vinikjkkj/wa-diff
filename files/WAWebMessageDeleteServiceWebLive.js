__d(
  "WAWebMessageDeleteServiceWebLive",
  ["JSResourceForInteraction", "WAWebMessageDeleteService", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")(
        "WAWebChatSendDeleteMsgsBridge",
      ).__setRef("WAWebMessageDeleteServiceWebLive"),
      s = o("WAWebMessageDeleteService").MessageDeleteService.make(
        function* () {
          var t = yield* o("WebDi.Async").fromPromise(function () {
              return e.load();
            }),
            n = t.sendDeleteMsgs,
            r = {
              sendDeleteMsgs: function (t, r, a) {
                return o("WebDi.Async").fromPromise(function () {
                  return n(t, r, a);
                });
              },
            };
          return r;
        },
      );
    l.MessageDeleteServiceWebLive = s;
  },
  98,
);
