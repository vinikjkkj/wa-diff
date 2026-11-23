__d(
  "WAWebChatStateServiceClient",
  ["WAWebChatStateService"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return {
        sendChatStateComposing: function (n, r) {
          return e(o("WAWebChatStateService").ChatStateService, function (e) {
            return e.sendChatStateComposing(n, r);
          });
        },
        sendChatStatePaused: function (n) {
          return e(o("WAWebChatStateService").ChatStateService, function (e) {
            return e.sendChatStatePaused(n);
          });
        },
        sendChatStateRecording: function (n) {
          return e(o("WAWebChatStateService").ChatStateService, function (e) {
            return e.sendChatStateRecording(n);
          });
        },
      };
    }
    l.chatStateServiceClient = e;
  },
  98,
);
