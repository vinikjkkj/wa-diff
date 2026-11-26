__d(
  "WAWebCtwaConversationDepthUtils",
  [
    "WAWebABProps",
    "WAWebConversationCountersUtils",
    "WAWebConversionTupleCollection",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set([
        "text",
        "image",
        "video",
        "audio",
        "ptv",
        "document",
        "sticker",
        "album",
        "location",
        "contact",
        "interactive",
        "list",
        "interactiveResponse",
        "buttonsResponse",
        "templateButtonReply",
      ]),
      u = new Map([
        [(e = o("WAWebMsgType")).MSG_TYPE.CHAT, "text"],
        [e.MSG_TYPE.IMAGE, "image"],
        [e.MSG_TYPE.VIDEO, "video"],
        [e.MSG_TYPE.AUDIO, "audio"],
        [e.MSG_TYPE.PTT, "audio"],
        [e.MSG_TYPE.PTV, "ptv"],
        [e.MSG_TYPE.DOCUMENT, "document"],
        [e.MSG_TYPE.STICKER, "sticker"],
        [e.MSG_TYPE.ALBUM, "album"],
        [e.MSG_TYPE.LOCATION, "location"],
        [e.MSG_TYPE.VCARD, "contact"],
        [e.MSG_TYPE.MULTI_VCARD, "contact"],
        [e.MSG_TYPE.INTERACTIVE, "interactive"],
        [e.MSG_TYPE.NATIVE_FLOW, "interactive"],
        [e.MSG_TYPE.LIST, "list"],
        [e.MSG_TYPE.INTERACTIVE_RESPONSE, "interactiveResponse"],
        [e.MSG_TYPE.LIST_RESPONSE, "interactiveResponse"],
        [e.MSG_TYPE.BUTTONS_RESPONSE, "buttonsResponse"],
        [e.MSG_TYPE.TEMPLATE_BUTTON_REPLY, "templateButtonReply"],
        [e.MSG_TYPE.POLL_CREATION, "poll"],
        [e.MSG_TYPE.EVENT_CREATION, "event"],
      ]);
    function c(e) {
      return y(e, h());
    }
    function d(e) {
      var t = new Set(
        (e != null ? e : "")
          .split(",")
          .map(function (e) {
            return e.trim();
          })
          .filter(function (e) {
            return e !== "";
          }),
      );
      return t.size > 0 ? t : s;
    }
    function m(e) {
      var t = h(),
        n = 0,
        r = null;
      for (var o of e.msgs.getModelsArray())
        if (y(o.type, t)) {
          var a = o.id.fromMe;
          (a && r === !1 && n++, (r = a));
        }
      return n;
    }
    function p(e, t) {
      return o("WAWebConversationCountersUtils").nextConversationCounters(
        e,
        t,
        !0,
      );
    }
    function _(e, t) {
      var n,
        o,
        a = r("WAWebConversionTupleCollection").get(e.id);
      if (a != null) {
        var i = p(
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
    var f = null,
      g = s;
    function h() {
      var e = o("WAWebABProps").getABPropConfigValue(
        "ctwa_conversation_counter_message_types",
      );
      return (e !== f && ((g = d(e)), (f = e)), g);
    }
    function y(e, t) {
      var n = u.get(e);
      return n != null && t.has(n);
    }
    ((l.isCtwaConversationCounterMsgType = c),
      (l.parseCtwaConversationCounterNames = d),
      (l.getCtwaConversationDepth = m),
      (l.nextCtwaConversationCounters = p),
      (l.advanceCtwaConversationCounters = _));
  },
  98,
);
