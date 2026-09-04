__d(
  "WAWebCtwaConversationDepthUtils",
  [
    "WAWebConversationCountersUtils",
    "WAWebConversionTupleCollection",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set([
        (e = o("WAWebMsgType")).MSG_TYPE.CHAT,
        e.MSG_TYPE.IMAGE,
        e.MSG_TYPE.VIDEO,
        e.MSG_TYPE.AUDIO,
        e.MSG_TYPE.PTT,
        e.MSG_TYPE.PTV,
        e.MSG_TYPE.DOCUMENT,
        e.MSG_TYPE.STICKER,
        e.MSG_TYPE.ALBUM,
        e.MSG_TYPE.LOCATION,
        e.MSG_TYPE.VCARD,
        e.MSG_TYPE.MULTI_VCARD,
        e.MSG_TYPE.INTERACTIVE,
        e.MSG_TYPE.INTERACTIVE_RESPONSE,
        e.MSG_TYPE.LIST,
        e.MSG_TYPE.LIST_RESPONSE,
        e.MSG_TYPE.BUTTONS_RESPONSE,
        e.MSG_TYPE.TEMPLATE_BUTTON_REPLY,
        e.MSG_TYPE.NATIVE_FLOW,
      ]);
    function u(e) {
      var t = 0,
        n = null;
      for (var r of e.msgs.getModelsArray())
        if (s.has(r.type)) {
          var o = r.id.fromMe;
          (o && n === !1 && t++, (n = o));
        }
      return t;
    }
    function c(e, t) {
      return o("WAWebConversationCountersUtils").nextConversationCounters(
        e,
        t,
        !0,
      );
    }
    function d(e, t) {
      var n,
        o,
        a = r("WAWebConversionTupleCollection").get(e.id);
      if (a != null) {
        var i = c(
          {
            depth: (n = a.conversationDepth) != null ? n : 0,
            repeat: (o = a.conversationRepeat) != null ? o : 0,
            lastMessageFromMe: a.lastMessageFromMe,
          },
          t,
        );
        r("WAWebConversionTupleCollection").add(
          {
            id: e.id,
            timestamp: a.timestamp,
            conversationDepth: i.depth,
            conversationRepeat: i.repeat,
            lastMessageFromMe: i.lastMessageFromMe,
          },
          { merge: !0 },
        );
      }
    }
    ((l.CTWA_CONVERSATION_COUNTER_MSG_TYPES = s),
      (l.getCtwaConversationDepth = u),
      (l.nextCtwaConversationCounters = c),
      (l.advanceCtwaConversationCounters = d));
  },
  98,
);
