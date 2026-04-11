__d(
  "WAWebWamBridgeApi",
  ["WAWebEphemeralKeepInChatWamUtils", "WAWebOTPLoggingHelper"],
  function (t, n, r, o, a, i, l) {
    var e = {
      logTieBreakIgnoredKicWam: function (t) {
        var e = t.keepInChatMessage;
        return o("WAWebEphemeralKeepInChatWamUtils").logTieBreakIgnoredKic(e);
      },
      logOTPMessageReceivedActions: function (t) {
        var e = t.msgData;
        o("WAWebOTPLoggingHelper").logOTPMessageReceived(e);
      },
      logOTPMessageReadActions: function (t) {
        var e = t.msgRow;
        o("WAWebOTPLoggingHelper").logOTPMessageRead(e);
      },
    };
    l.WamBridgeApi = e;
  },
  98,
);
