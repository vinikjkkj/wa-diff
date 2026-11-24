__d(
  "WAWebChatStateServiceWebLive",
  ["WAWebChatStateBridge", "WAWebChatStateService", "WebDi.Async"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebChatStateService").ChatStateService.make(function* () {
      var e = {
        sendChatStateComposing: function (t, n) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebChatStateBridge").sendChatStateComposing(t, n);
          });
        },
        sendChatStatePaused: function (t) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebChatStateBridge").sendChatStatePaused(t);
          });
        },
        sendChatStateRecording: function (t) {
          return o("WebDi.Async").fromPromise(function () {
            return o("WAWebChatStateBridge").sendChatStateRecording(t);
          });
        },
      };
      return e;
    });
    l.ChatStateServiceWebLive = e;
  },
  98,
);
