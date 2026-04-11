__d(
  "WAWebAddOnsUpdateSendStatesAction",
  [
    "Promise",
    "WAWebAddOnsUpdateAddOnAcksApi",
    "WAWebCommentCollection",
    "WAWebMessageAddOnType",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebPinInChatCollection",
    "WAWebPollsPollVoteCollection",
    "WAWebReactionsCollection",
    "asyncToGeneratorRuntime",
    "compactMap",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t) {
      var n = p(e);
      n != null &&
        o("WAWebAddOnsUpdateAddOnAcksApi").maybeUpdateAddOnAcks(
          new Map([[n, [{ msgKey: e.id.toString(), ack: t }]]]),
        );
    }
    function u(t, r) {
      var o = p(t);
      return o == null
        ? (e || (e = n("Promise"))).resolve()
        : c(
            new Map([
              [o, [babelHelpers.extends({ msgKey: t.id.toString() }, r)]],
            ]),
          );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new Map();
          for (var n of e) {
            var a = n[0],
              i = n[1],
              l = r("compactMap")(i, function (e) {
                return e.ack == null ? null : { msgKey: e.msgKey, ack: e.ack };
              });
            t.set(a, l);
          }
          (yield o("WAWebAddOnsUpdateAddOnAcksApi").updateAddOnAcks(t), m(e));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      for (var t of e) {
        var n = t[0],
          o = t[1];
        for (var a of o) {
          var i = _(n, r("WAWebMsgKey").from(a.msgKey));
          i != null &&
            (a.ack != null && (i.ack = a.ack),
            a.isSendFailure != null && (i.isSendFailure = a.isSendFailure));
        }
      }
    }
    function p(e) {
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
    function _(e, t) {
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
        case o("WAWebMessageAddOnType").MessageAddOnType.KeepInChat:
        case o("WAWebMessageAddOnType").MessageAddOnType.MessageEdit:
        case o("WAWebMessageAddOnType").MessageAddOnType.ReactionEnc:
        case o("WAWebMessageAddOnType").MessageAddOnType.Unknown:
          return null;
      }
    }
    ((l.maybeUpdateAddOnAckForMsgAction = s),
      (l.updateAddOnSendStatesForMsgAction = u),
      (l.updateAddOnSendStatesAction = c),
      (l.updateAddOnCollectionsSendStatesAction = m));
  },
  98,
);
