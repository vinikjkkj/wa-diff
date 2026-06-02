__d(
  "WAWebAddOnsUpdateSendStatesAction",
  [
    "WAWebAddOnsUpdateAddOnAcksApi",
    "WAWebCommentCollection",
    "WAWebMessageAddOnType",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebPinInChatCollection",
    "WAWebPollsPollVoteCollection",
    "WAWebReactionsCollection",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = d(e);
      n != null &&
        o("WAWebAddOnsUpdateAddOnAcksApi").maybeUpdateAddOnAcks(
          new Map([[n, [{ msgKey: e.id.toString(), ack: t }]]]),
        );
    }
    function s(e, t) {
      var n = d(e);
      return n == null
        ? Promise.resolve()
        : u(
            new Map([
              [n, [babelHelpers.extends({ msgKey: e.id.toString() }, t)]],
            ]),
          );
    }
    async function u(e) {
      var t = new Map();
      for (var n of e) {
        var a = n[0],
          i = n[1],
          l = r("compactMap")(i, function (e) {
            return e.ack == null ? null : { msgKey: e.msgKey, ack: e.ack };
          });
        t.set(a, l);
      }
      (await o("WAWebAddOnsUpdateAddOnAcksApi").updateAddOnAcks(t), c(e));
    }
    function c(e) {
      for (var t of e) {
        var n = t[0],
          o = t[1];
        for (var a of o) {
          var i = m(n, r("WAWebMsgKey").from(a.msgKey));
          i != null &&
            (a.ack != null && (i.ack = a.ack),
            a.isSendFailure != null && (i.isSendFailure = a.isSendFailure));
        }
      }
    }
    function d(e) {
      switch (e.type) {
        case o("WAWebMsgType").MSG_TYPE.REACTION:
        case o("WAWebMsgType").MSG_TYPE.REACTION_ENC:
          return o("WAWebMessageAddOnType").MessageAddOnType.Reaction;
        case o("WAWebMsgType").MSG_TYPE.POLL_UPDATE:
          if (e.subtype === "poll_vote")
            return o("WAWebMessageAddOnType").MessageAddOnType.PollVote;
          break;
        case o("WAWebMsgType").MSG_TYPE.PIN_MESSAGE:
          return o("WAWebMessageAddOnType").MessageAddOnType.PinMessage;
        case o("WAWebMsgType").MSG_TYPE.COMMENT:
          return o("WAWebMessageAddOnType").MessageAddOnType.Comment;
      }
      return null;
    }
    function m(e, t) {
      switch (e) {
        case o("WAWebMessageAddOnType").MessageAddOnType.Reaction:
          return o(
            "WAWebReactionsCollection",
          ).ReactionsCollection.getSenderByMsgKey(t);
        case o("WAWebMessageAddOnType").MessageAddOnType.PollVote:
          return o(
            "WAWebPollsPollVoteCollection",
          ).PollVoteCollection.getByMsgKey(t);
        case o("WAWebMessageAddOnType").MessageAddOnType.PinMessage:
          return o("WAWebPinInChatCollection").PinInChatCollection.getByMsgKey(
            t,
          );
        case o("WAWebMessageAddOnType").MessageAddOnType.Comment:
          return o("WAWebCommentCollection").CommentCollection.getByMsgKey(t);
        case o("WAWebMessageAddOnType").MessageAddOnType.BotMsmsg:
        case o("WAWebMessageAddOnType").MessageAddOnType.KeepInChat:
        case o("WAWebMessageAddOnType").MessageAddOnType.MessageEdit:
        case o("WAWebMessageAddOnType").MessageAddOnType.ReactionEnc:
        case o("WAWebMessageAddOnType").MessageAddOnType.Unknown:
          return null;
      }
    }
    ((l.maybeUpdateAddOnAckForMsgAction = e),
      (l.updateAddOnSendStatesForMsgAction = s),
      (l.updateAddOnSendStatesAction = u),
      (l.updateAddOnCollectionsSendStatesAction = c));
  },
  98,
);
