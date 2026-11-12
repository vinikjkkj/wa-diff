__d(
  "WAWebGroupHistoryStoredHint",
  [
    "WALongInt",
    "WAWebGroupHistoryPostJoinSubtype",
    "WAWebGroupHistoryStoredHintGating",
    "WAWebMsgType",
    "WAWebUserUtils",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    var e = -1;
    function s(e, t) {
      if (
        e == null ||
        e.kind !== "gp2" ||
        !u(e) ||
        e.groupHistoryIndividualMessageInfo != null ||
        !o(
          "WAWebGroupHistoryStoredHintGating",
        ).isGroupHistoryStoredHintEnabled()
      )
        return e;
      var n = c(t.groupHistoryLastCountedMessageTimestamp);
      return n == null
        ? e
        : babelHelpers.extends({}, e, {
            groupHistoryLastCountedMessageTimestamp: n,
          });
    }
    function u(e) {
      var t, n;
      if (
        e.type !== o("WAWebMsgType").MSG_TYPE.GP2 ||
        !e.id.remote.isGroup() ||
        !o("WAWebGroupHistoryPostJoinSubtype").isPostJoinHistoryCTASubtype(
          e.subtype,
        )
      )
        return !1;
      var a =
        (t = (n = e.recipients) != null ? n : e.templateParams) != null
          ? t
          : [];
      return a.some(function (e) {
        return (
          e instanceof r("WAWebWid") &&
          e.isUser() &&
          !o("WAWebUserUtils").isMeAccount(e)
        );
      });
    }
    function c(t) {
      var n = o("WALongInt").maybeNumber(t);
      return n == null || !Number.isSafeInteger(n) || n < 0
        ? null
        : n === 0
          ? e
          : n;
    }
    ((l.GROUP_HISTORY_NO_COUNTED_MESSAGES = e),
      (l.maybeRestoreGroupHistoryStoredHint = s),
      (l.isGroupHistoryStoredHintEvent = u));
  },
  98,
);
