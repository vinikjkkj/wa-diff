__d(
  "WAWebHandleRetryRequestNonMigratedLog",
  [
    "WAWebCheckChatExistsOrCreate",
    "WAWebHandleRetryRequest",
    "WAWebUserPrefsMeUser",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = "na";
          e.from.isRegularUser() && (t = e.from.isLid() ? "lid" : "pn");
          var n = u(e),
            r = o("WAWebHandleRetryRequest").getTargetChat(e),
            a = "na",
            i = !1;
          return (
            r &&
              r.isRegularUser() &&
              ((a = r.isLid() ? "lid" : "pn"),
              (i =
                (yield o("WAWebCheckChatExistsOrCreate").doesChatExist(r)) !==
                !1)),
            "handle-message-retry-request-no-chat-info-" +
              n +
              "-from-" +
              t +
              "-target-" +
              a +
              "-" +
              e.type +
              "-target-exists-" +
              i.toString()
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
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
    ((l.buildNoChatInfoSendLogsArg = e), (l.selectRetryErrorType = u));
  },
  98,
);
