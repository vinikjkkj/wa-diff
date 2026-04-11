__d(
  "WAWebParsePollResultSnapshotMessageProto",
  [
    "WALongInt",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebPollCreationUtils",
    "WAWebPollsGatingUtils",
    "WAWebPollsValidationError",
    "WAWebWamEnumE2eFailureReason",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = e.msgContext,
        a = n.pollResultSnapshotMessage,
        i = n.pollResultSnapshotMessageV3,
        l = a != null ? a : i;
      if (l) {
        if (
          !o("WAWebPollsGatingUtils").isPollResultSnapshotReceivingEnabled() ||
          (i &&
            !o("WAWebNewsletterGatingUtils").isNewsletterQuizReceiverEnabled())
        )
          return {
            msgData: babelHelpers.extends({}, t, {
              type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
              kind: o("WAWebMsgType").MsgKind.Unknown,
              futureproofType: o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT,
            }),
            contextInfo: l.contextInfo,
          };
        var s = l.contextInfo,
          u = l.name,
          c = l.pollVotes;
        if (u == null)
          throw new (o(
            "WAWebPollsValidationError",
          ).PollResultSnapshotValidationError)(
            o("WAWebPollsValidationError").PollResultSnapshotValidationErrorCode
              .MISSING_NAME,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        if (
          u.length === 0 ||
          u.length >
            o("WAWebPollsGatingUtils").getMaxPollNameLengthForIncomingMessages()
        )
          throw new (o(
            "WAWebPollsValidationError",
          ).PollResultSnapshotValidationError)(
            o("WAWebPollsValidationError").PollResultSnapshotValidationErrorCode
              .INVALID_NAME,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        var d = o("WAWebPollCreationUtils").getPollTypeFromE2EValue(l.pollType);
        if (r === "quoted" || r === "history_quoted") {
          var m = babelHelpers.extends({}, t, {
            type: o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT,
            kind: o("WAWebMsgType").MsgKind.PollResultSnapshot,
            pollName: u,
            pollVotesSnapshot: null,
            pollType: d,
          });
          return { msgData: m, contextInfo: s };
        }
        if (c == null || c.length === 0)
          throw new (o(
            "WAWebPollsValidationError",
          ).PollResultSnapshotValidationError)(
            o("WAWebPollsValidationError").PollResultSnapshotValidationErrorCode
              .MISSING_POLL_VOTES,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        var p = new Set(),
          _ = c.map(function (e) {
            var t = e.optionName,
              n = e.optionVoteCount;
            if (t == null)
              throw new (o(
                "WAWebPollsValidationError",
              ).PollResultSnapshotValidationError)(
                o("WAWebPollsValidationError")
                  .PollResultSnapshotValidationErrorCode.MISSING_OPTION,
                o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                  .INVALID_MESSAGE,
              );
            if (
              t.length === 0 ||
              t.length >
                o(
                  "WAWebPollsGatingUtils",
                ).getMaxPollOptionLengthForIncomingMessages()
            )
              throw new (o(
                "WAWebPollsValidationError",
              ).PollResultSnapshotValidationError)(
                o("WAWebPollsValidationError")
                  .PollResultSnapshotValidationErrorCode.INVALID_OPTION,
                o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                  .INVALID_MESSAGE,
              );
            if (n == null)
              throw new (o(
                "WAWebPollsValidationError",
              ).PollResultSnapshotValidationError)(
                o("WAWebPollsValidationError")
                  .PollResultSnapshotValidationErrorCode
                  .MISSING_OPTION_VOTE_COUNT,
                o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                  .INVALID_MESSAGE,
              );
            var r = o("WALongInt").maybeNumber(n);
            if (r == null)
              throw new (o(
                "WAWebPollsValidationError",
              ).PollResultSnapshotValidationError)(
                o("WAWebPollsValidationError")
                  .PollResultSnapshotValidationErrorCode
                  .INVALID_OPTION_VOTE_COUNT,
                o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                  .INVALID_MESSAGE,
              );
            if (p.has(t))
              throw new (o(
                "WAWebPollsValidationError",
              ).PollResultSnapshotValidationError)(
                o("WAWebPollsValidationError")
                  .PollResultSnapshotValidationErrorCode.DUPLICATE_OPTIONS,
                o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                  .INVALID_MESSAGE,
              );
            var a = p.size;
            return (
              p.add(t),
              { option: { localId: a, name: t }, optionVoteCount: r }
            );
          });
        if (
          _.length < 2 ||
          _.length > o("WAWebPollsGatingUtils").getMaxPollOptionCount()
        )
          throw new (o(
            "WAWebPollsValidationError",
          ).PollResultSnapshotValidationError)(
            o("WAWebPollsValidationError").PollResultSnapshotValidationErrorCode
              .INVALID_POLL_VOTES_SNAPSHOTS_COUNT,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        var f = babelHelpers.extends({}, t, {
          type: o("WAWebMsgType").MSG_TYPE.POLL_RESULT_SNAPSHOT,
          kind: o("WAWebMsgType").MsgKind.PollResultSnapshot,
          pollName: u,
          pollVotesSnapshot: { pollVotes: _ },
          pollType: d,
        });
        return { msgData: f, contextInfo: s };
      }
    }
    l.default = e;
  },
  98,
);
