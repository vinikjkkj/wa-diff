__d(
  "WAWebPollsVoteDataUtils",
  [
    "WANullthrows",
    "WAWebMsgGetters",
    "WAWebMsgKeyUtils",
    "WAWebMsgType",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        r,
        a = o("WAWebMsgKeyUtils").msgKeyToTargetInfo(
          e.msgKey,
          o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon,
        ),
        i = a.author,
        l = a.from,
        s = a.to;
      return {
        id: e.msgKey,
        to: s,
        from: l,
        author: i,
        type: o("WAWebMsgType").MSG_TYPE.POLL_UPDATE,
        kind: o("WAWebMsgType").MsgKind.PollVoteDecrypted,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        pollUpdateParentKey: e.parentMsgKey,
        selectedOptionLocalIds: e.selectedOptionLocalIds,
        senderTimestampMs: e.senderTimestampMs,
        t: (t = e.t) != null ? t : void 0,
        ack: (n = e.ack) != null ? n : void 0,
        read: (r = e.read) != null ? r : !1,
        lastSuccessfulSelectedOptionLocalIds:
          e.lastSuccessfulSelectedOptionLocalIds,
      };
    }
    function s(e) {
      return {
        msgKey: e.id,
        parentMsgKey: e.pollUpdateParentKey,
        selectedOptionLocalIds: e.selectedOptionLocalIds,
        senderTimestampMs: e.senderTimestampMs,
        t: e.t,
        sender: o("WAWebWidFactory").asUserWidOrThrow(
          r("WANullthrows")(o("WAWebMsgGetters").getSender(e)),
        ),
        ack: o("WAWebMsgGetters").getAck(e),
        read: o("WAWebUserPrefsMeUser").isMeAccount(e.from) || e.read,
        lastSuccessfulSelectedOptionLocalIds:
          e.lastSuccessfulSelectedOptionLocalIds,
      };
    }
    ((l.voteDataToPollVoteMsgData = e), (l.pollVoteMsgDataToVoteData = s));
  },
  98,
);
