__d(
  "WASmaxVoipWaitingRoomToggleCallLinkRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInVoipEnums",
    "WASmaxJsx",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = d(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = u(r, n);
          if (a.success)
            return {
              name: "WaitingRoomToggleCallLinkResponseWaitingRoomToggleCallLinkAck",
              value: a.value,
            };
          var i = c(r, n);
          if (i.success)
            return {
              name: "WaitingRoomToggleCallLinkResponseWaitingRoomToggleCallLinkNack",
              value: i.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "WaitingRoomToggleCallLink",
              {
                WaitingRoomToggleCallLinkAck: a,
                WaitingRoomToggleCallLinkNack: i,
              },
            ),
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
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
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrJidEnum,
        e,
        "to",
        o("WASmaxInVoipEnums").DEVICEJID_USERJID,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        l.value,
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "class",
        "call",
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "waiting_room_toggle",
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").attrString(r.value, "link-token");
      return m.success
        ? o("WAResultOrError").makeResult({
            from: a.value,
            to: i.value,
            class: u.value,
            error: c.value,
            type: d.value,
            waitingRoomToggleLinkToken: m.value,
          })
        : m;
    }
    function c(e, t) {
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
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrJidEnum,
        e,
        "to",
        o("WASmaxInVoipEnums").DEVICEJID_USERJID,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        l.value,
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "class",
        "call",
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").attrString(e, "error");
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "waiting_room_toggle",
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").attrString(r.value, "link-token");
      return m.success
        ? o("WAResultOrError").makeResult({
            from: a.value,
            to: i.value,
            class: u.value,
            error: c.value,
            type: d.value,
            errorLinkToken: m.value,
          })
        : m;
    }
    function d(e) {
      var t,
        n = e.waitingRoomToggleEnabled,
        r = e.waitingRoomToggleLinkToken,
        a = e.waitingRoomToggleMedia,
        i = o("WASmaxJsx").smax(
          "call",
          { id: (t = o("WAWap")).generateId(), to: t.JID("call") },
          o("WASmaxJsx").smax("waiting_room_toggle", {
            enabled: t.CUSTOM_STRING(n),
            "link-token": t.CUSTOM_STRING(r),
            media: t.CUSTOM_STRING(a),
          }),
        );
      return i;
    }
    ((l.sendWaitingRoomToggleCallLinkRPC = e),
      (l.parseWaitingRoomToggleCallLinkResponseWaitingRoomToggleCallLinkAck =
        u),
      (l.parseWaitingRoomToggleCallLinkResponseWaitingRoomToggleCallLinkNack =
        c),
      (l.makeWaitingRoomToggleCallLinkRequest = d));
  },
  98,
);
