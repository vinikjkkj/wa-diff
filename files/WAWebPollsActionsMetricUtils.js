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
      var t;
      return {
        creationDateInSeconds: e.t,
        hideVoterName: (t = e.pollHideVoterNames) != null ? t : void 0,
        pollDurationMs:
          e.pollEndTime == null ? void 0 : e.pollEndTime - e.t * 1e3,
        pollOptionsCount: e.pollOptions.length,
      };
    }
    function s(e) {
      var t = c(
        e,
        o("WAWebWamEnumPollActionType").POLL_ACTION_TYPE.OPEN_CREATE_MODAL,
      );
      t.commit();
    }
    function u(e) {
      var t = e.action,
        n = e.chat,
        r = e.creationDateInSeconds,
        o = e.hideVoterName,
        a = e.pollDurationMs,
        i = e.pollOptionsCount,
        l = c(n, t);
      ((l.pollCreationDs = d(r)),
        (l.pollOptionsCount = i),
        o != null && (l.hideVoterName = o),
        a != null && (l.pollDurationMs = a),
        l.commit());
    }
    function c(e, t) {
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
    function d(e) {
      var t = r("WAWeb-moment").utc(e * 1e3);
      return (t.startOf("day"), t.unix());
    }
    ((l.getPollMetricFieldsFromCreationMsg = e),
      (l.commitPollOpenCreationModal = s),
      (l.commitPollsActionsMetric = u));
  },
  98,
);
