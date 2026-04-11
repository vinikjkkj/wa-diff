__d(
  "WASmaxInVoipWaitingRoomToggleCallLinkResponseWaitingRoomToggleCallLinkAck",
  [
    "WAResultOrError",
    "WASmaxInVoipCallAckBaseMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "waiting_room_toggle",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "call",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "waiting_room_toggle",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrString(r.value, "link-token");
      if (!l.success) return l;
      var s = o("WASmaxInVoipCallAckBaseMixin").parseCallAckBaseMixin(e, t);
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: a.value,
                type: i.value,
                waitingRoomToggleLinkToken: l.value,
              },
              s.value,
            ),
          )
        : s;
    }
    l.parseWaitingRoomToggleCallLinkResponseWaitingRoomToggleCallLinkAck = e;
  },
  98,
);
