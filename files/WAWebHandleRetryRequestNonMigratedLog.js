__d(
  "WAWebHandleRetryRequestNonMigratedLog",
  [
    "WAWebCheckChatExistsOrCreate",
    "WAWebHandleRetryRequest",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = "na";
      e.from.isRegularUser() && (t = e.from.isLid() ? "lid" : "pn");
      var n = s(e),
        r = o("WAWebHandleRetryRequest").getTargetChat(e),
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
    function s(e) {
      return e.from.isGroup()
        ? o("WAWebUserPrefsMeUser").isMeAccount(e.participant)
          ? "did_not_find_group_message_from_self"
          : "did_not_find_group_message_from_remote"
        : e.from.isUser()
          ? o("WAWebUserPrefsMeUser").isMeAccount(e.from)
            ? e.from.device === 0 || e.from.device == null
              ? "did_not_find_1on1_message_from_self_primary"
              : "did_not_find_1on1_message_from_self_companion"
            : "did_not_find_1on1_message_from_remote"
          : "did_not_find_message_other";
    }
    ((l.buildNoChatInfoSendLogsArg = e), (l.selectRetryErrorType = s));
  },
  98,
);
