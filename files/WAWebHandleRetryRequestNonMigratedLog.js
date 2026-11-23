__d(
  "WAWebHandleRetryRequestNonMigratedLog",
  ["WAWebCheckChatExistsOrCreate", "WAWebRetryRequestChatResolution"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = "na";
      e.from.isRegularUser() && (t = e.from.isLid() ? "lid" : "pn");
      var n = o("WAWebRetryRequestChatResolution").selectRetryErrorType(e),
        r = o("WAWebRetryRequestChatResolution").getTargetChat(e),
        a = "na",
        i = !1;
      r &&
        r.isRegularUser() &&
        ((a = r.isLid() ? "lid" : "pn"),
        (i =
          (await o("WAWebCheckChatExistsOrCreate").doesChatExist(r)) !== !1));
      var l = e.offline ? "-offline" : "";
      return (
        "handle-message-retry-request-no-chat-info-" +
        n +
        "-from-" +
        t +
        "-target-" +
        a +
        "-" +
        e.type +
        "-target-exists-" +
        i.toString() +
        l
      );
    }
    l.buildNoChatInfoSendLogsArg = e;
  },
  98,
);
