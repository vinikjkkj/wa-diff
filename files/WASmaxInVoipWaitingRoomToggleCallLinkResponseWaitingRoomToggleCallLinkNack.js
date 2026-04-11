__d(
  "WASmaxInVoipWaitingRoomToggleCallLinkResponseWaitingRoomToggleCallLinkNack",
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
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
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
      var l = o("WASmaxParseUtils").attrString(e, "error");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrString(r.value, "link-token");
      if (!s.success) return s;
      var u = o("WASmaxInVoipCallAckBaseMixin").parseCallAckBaseMixin(e, t);
      return u.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: a.value,
                type: i.value,
                error: l.value,
                errorLinkToken: s.value,
              },
              u.value,
            ),
          )
        : u;
    }
    l.parseWaitingRoomToggleCallLinkResponseWaitingRoomToggleCallLinkNack = e;
  },
  98,
);
