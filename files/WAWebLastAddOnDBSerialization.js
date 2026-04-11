__d(
  "WAWebLastAddOnDBSerialization",
  ["WANullthrows"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      switch (e.type) {
        case "reaction":
          return {
            type: "reaction",
            msgKey: e.msgKey,
            parentMsgKey: e.parentMsgKey,
            reactionText: e.reactionText,
            sender: e.sender,
            timestamp: e.timestamp,
          };
        case "poll_vote":
          return {
            type: "poll_vote",
            msgKey: e.msgKey,
            parentMsgKey: e.parentMsgKey,
            pollHideVoterNames: e.pollHideVoterNames,
            sender: e.sender,
            timestamp: e.timestamp,
          };
        case "comment":
          return {
            type: "comment",
            msgKey: e.msgKey,
            parentMsgKey: e.parentMsgKey,
            sender: e.sender,
            timestamp: e.timestamp,
          };
        case "event_response":
          return {
            type: "event_response",
            msgKey: e.msgKey,
            parentMsgKey: e.parentMsgKey,
            sender: e.sender,
            timestamp: e.timestamp,
            eventResponse: e.eventResponse,
          };
      }
    }
    function s(e) {
      return {
        msgKey: e.msgKey,
        parentMsgKey: e.parentMsgKey,
        sender: e.senderUserJid,
        reactionText: e.reactionText,
        timestamp: e.timestamp,
        isOrphan: e.orphan === 1,
        type: "reaction",
      };
    }
    function u(e, t, n) {
      return {
        msgKey: e.msgKey.toString(),
        isOrphan: t,
        pollHideVoterNames: !!n,
        selectedOptionsCount: e.selectedOptionLocalIds.length,
        parentMsgKey: e.parentMsgKey.toString(),
        sender: e.sender.toString(),
        timestamp: e.senderTimestampMs,
        type: "poll_vote",
      };
    }
    function c(e) {
      return {
        msgKey: e.msgKey,
        parentMsgKey: e.parentMsgKey,
        sender: e.sender,
        timestamp: e.t * 1e3,
        isOrphan: !1,
        type: "comment",
      };
    }
    function d(e) {
      return {
        msgKey: e.msgKey,
        parentMsgKey: e.parentMsgKey,
        sender: e.senderUserJid,
        timestamp: e.timestamp,
        reactionText: r("WANullthrows")(e.reactionText),
        type: "reaction",
      };
    }
    ((l.lastAddOnPreviewFromCandidate = e),
      (l.lastAddOnPreviewCandidateFromReactionRowType = s),
      (l.lastAddOnPreviewCandidateFromVoteData = u),
      (l.lastAddOnPreviewCandidateFromCommentRowType = c),
      (l.lastAddOnPreviewFromDeprecatedLastReactionPreview = d));
  },
  98,
);
