__d(
  "WAWebQbmMessageReplyLogEventLazy",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebQbmThreadMsgs",
    "getErrorSafe",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "reaction";
    function u(e) {
      try {
        if (!r("justknobx")._("7285")) return;
        var t = e.chat,
          n = e.reactionParentMsg,
          a = e.replyMsg;
        if (
          t.id.isBot() ||
          (t.contact.isBusiness !== !0 && t.contact.isEnterprise !== !0) ||
          (a != null && !d(a)) ||
          (n != null && o("WAWebMsgGetters").getIsSentByMe(n))
        )
          return;
        var i = o("WAWebQbmThreadMsgs").getLastIncomingMsg(t);
        r("JSResourceForInteraction")("WAWebQbmMessageReplyLogEvent")
          .__setRef("WAWebQbmMessageReplyLogEventLazy")
          .load()
          .then(function (t) {
            return t.logQbmMessageReply(e, i);
          })
          .catch(c);
      } catch (e) {
        c(e);
      }
    }
    function c(t) {
      o("WALogger")
        .WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[qbm] failed to log qbm_message_reply",
            ])),
        )
        .catching(r("getErrorSafe")(t))
        .sendLogs("qbm-message-reply-log-failed");
    }
    function d(e) {
      return (
        o("WAWebMsgGetters").getIsSentByMe(e) &&
        !o("WAWebMsgGetters").getIsNotification(e) &&
        e.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
        e.type !== o("WAWebMsgType").MSG_TYPE.ALBUM &&
        e.type !== o("WAWebMsgType").MSG_TYPE.REQUEST_PHONE_NUMBER
      );
    }
    ((l.REACTION_REPLY_MESSAGE_TYPE = s), (l.logQbmMessageReply = u));
  },
  98,
);
