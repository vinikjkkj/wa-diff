__d(
  "WAWebChatStateServiceWebLive",
  ["JSResourceForInteraction", "WAWebChatStateService", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e = r("JSResourceForInteraction")("WAWebChatStateBridge").__setRef(
        "WAWebChatStateServiceWebLive",
      ),
      s = o("WAWebChatStateService").ChatStateService.make(function* () {
        var t = yield* o("WebDi.Async").fromPromise(function () {
            return e.load();
          }),
          n = t.sendChatStateComposing,
          r = t.sendChatStatePaused,
          a = t.sendChatStateRecording,
          i = {
            sendChatStateComposing: function (t, r) {
              return o("WebDi.Async").fromPromise(function () {
                return n(t, r);
              });
            },
            sendChatStatePaused: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return r(t);
              });
            },
            sendChatStateRecording: function (t) {
              return o("WebDi.Async").fromPromise(function () {
                return a(t);
              });
            },
          };
        return i;
      });
    l.ChatStateServiceWebLive = s;
  },
  98,
);
