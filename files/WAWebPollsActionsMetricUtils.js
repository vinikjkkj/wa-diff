__d(
  "WAWebPollsActionsMetricUtils",
  [
    "WAWeb-moment",
    "WAWebChatGetters",
    "WAWebGetMessageChatTypeFromWid",
    "WAWebPollsActionsWamEvent",
    "WAWebWamEnumPollActionType",
    "WAWebWamNumberToClientGroupSizeBucket",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = u(
        e,
        o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE.OPEN_CREATE_MODAL,
      );
      t.commit();
    }
    function s(e) {
      var t = e.action,
        n = e.chat,
        r = e.creationDateInSeconds,
        o = e.pollOptionsCount,
        a = u(n, t);
      ((a.pollCreationDs = c(r)), (a.pollOptionsCount = o), a.commit());
    }
    function u(e, t) {
      var n = new (o("WAWebPollsActionsWamEvent").PollsActionsWamEvent)({
        pollAction: t,
      });
      return (
        o("WAWebChatGetters").getIsGroup(e) &&
          ((n.groupSizeBucket = r("WAWebWamNumberToClientGroupSizeBucket")(
            e.getParticipantCount(),
          )),
          (n.isAdmin = e.iAmAdmin())),
        (n.chatType = o(
          "WAWebGetMessageChatTypeFromWid",
        ).getMessageChatTypeFromWid(e.id)),
        n
      );
    }
    function c(e) {
      var t = r("WAWeb-moment").utc(e * 1e3);
      return (t.startOf("day"), t.unix());
    }
    ((l.commitPollOpenCreationModal = e), (l.commitPollsActionsMetric = s));
  },
  98,
);
