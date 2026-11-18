__d(
  "WAWebChatDeleteServiceWebLive",
  [
    "JSResourceForInteraction",
    "WAWebBackendServiceModule",
    "WAWebChatDeleteService",
    "WebDi.Async",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")("WAWebChatClearBridge").__setRef(
        "WAWebChatDeleteServiceWebLive",
      ),
      s = r("JSResourceForInteraction")("WAWebChatDeleteBridge").__setRef(
        "WAWebChatDeleteServiceWebLive",
      ),
      u = {
        sendClear: function (n, r, a) {
          return o("WebDi.Async").fromPromiseNoAbort(function () {
            return o("WAWebBackendServiceModule")
              .loadModule(e)
              .then(function (e) {
                var t = e.sendClear;
                return t(n, r, a);
              });
          });
        },
        sendConversationDelete: function (t) {
          return o("WebDi.Async").fromPromiseNoAbort(function () {
            return o("WAWebBackendServiceModule")
              .loadModule(s)
              .then(function (e) {
                var n = e.sendConversationDelete;
                return n(t);
              });
          });
        },
      },
      c = o("WAWebChatDeleteService").ChatDeleteService.of(u);
    l.ChatDeleteServiceWebLive = c;
  },
  98,
);
