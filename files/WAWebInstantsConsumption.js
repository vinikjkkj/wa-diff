__d(
  "WAWebInstantsConsumption",
  [
    "WAWebAck",
    "WAWebChatGroupUtils",
    "WAWebFrontendMsgGetters",
    "WAWebInstantMsgTypes",
    "WAWebMsgCollection",
    "WAWebMsgGetters",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        (e.ack != null && e.ack >= o("WAWebAck").ACK.PLAYED) ||
        e.instantPlayedSelf === !0
      );
    }
    function s(t) {
      if (
        !o("WAWebInstantMsgTypes").isInstantMsgType(t.type) ||
        o("WAWebMsgGetters").getIsSentByMe(t) ||
        e(t) ||
        o("WAWebMsgCollection").MsgCollection.get(t.id) == null
      )
        return !1;
      var n = o("WAWebFrontendMsgGetters").getMaybeChat(t);
      return n == null
        ? !1
        : !(n.id.isUser() && n.contact.isContactBlocked) &&
            !o("WAWebChatGroupUtils").isSuspendedGroup(n);
    }
    ((l.isInstantConsumed = e), (l.canConsumeInstant = s));
  },
  98,
);
