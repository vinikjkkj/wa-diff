__d(
  "WAWebScheduledMsgBridgeApi",
  ["WAWebCmd"],
  function (t, n, r, o, a, i, l) {
    var e = {
      triggerScheduledMsgRevealedFromBridge: function (t) {
        var e = t.msgId;
        o("WAWebCmd").Cmd.onScheduledMsgRevealedFromBridge(e);
      },
      triggerScheduledMsgChangedFromBridge: function (t) {
        var e = t.chatId;
        o("WAWebCmd").Cmd.onScheduledMsgChangedFromBridge(e);
      },
    };
    l.ScheduledMsgBridgeApi = e;
  },
  98,
);
