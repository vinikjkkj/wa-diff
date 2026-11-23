__d(
  "WAWebChatDeleteServiceWebLive",
  [
    "JSResourceForInteraction",
    "Promise",
    "WAWebChatDeleteService",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("JSResourceForInteraction")("WAWebChatClearBridge").__setRef(
        "WAWebChatDeleteServiceWebLive",
      ),
      u = r("JSResourceForInteraction")("WAWebChatDeleteBridge").__setRef(
        "WAWebChatDeleteServiceWebLive",
      ),
      c = o("WAWebChatDeleteService").ChatDeleteService.make(function* () {
        var t = yield* o("WebDi.Async").fromPromise(function () {
            return (e || (e = n("Promise"))).all([s.load(), u.load()]);
          }),
          r = t[0].sendClear,
          a = t[1].sendConversationDelete,
          i = {
            sendClear: function (t, n, a) {
              return o("WebDi.Async").fromPromise(function () {
                return r(t, n, a);
              });
            },
            sendConversationDelete: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return a(t);
              });
            },
          };
        return i;
      });
    l.ChatDeleteServiceWebLive = c;
  },
  98,
);
