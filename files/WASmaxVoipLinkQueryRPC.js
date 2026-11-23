__d(
  "WASmaxVoipLinkQueryRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxInVoipEnums",
    "WASmaxJsx",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = m(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = c(r, n);
      if (a.success)
        return { name: "LinkQueryResponseLinkQueryAck", value: a.value };
      var i = d(r, n);
      if (i.success)
        return { name: "LinkQueryResponseLinkQueryNack", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("LinkQuery", {
          LinkQueryAck: a,
          LinkQueryNack: i,
        }),
      );
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "guest");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "is_guest_eligible",
        o("WASmaxInVoipEnums").ENUM_0_1,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ isGuestEligible: n.value })
        : n;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "waiting_room");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "is_admin",
        "1",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        e,
        "enabled",
        o("WASmaxInVoipEnums").ENUM_0_1,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "filter",
        "guests_only",
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            isAdmin: n.value,
            enabled: r.value,
            filter: a.value,
          })
        : a;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "link_query");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(r.value, "guest", s);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChild(r.value, "event");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalChildWithTag(
        r.value,
        "waiting_room",
        u,
      );
      if (!l.success) return l;
      var c = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "call",
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrJidEnum,
        e,
        "to",
        o("WASmaxInVoipEnums").DEVICEJID_USERJID,
      );
      if (!d.success) return d;
      var m = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        m.value,
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "class",
        "call",
      );
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "link_query",
      );
      if (!g.success) return g;
      var h = o("WASmaxParseJid").attrDeviceJid(r.value, "link_creator");
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrDeviceJid,
        r.value,
        "link_creator_pn",
      );
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        r.value,
        "link_creator_username",
      );
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "action",
        o("WASmaxInVoipEnums").ENUM_LINKEDIT_PREVIEW,
      );
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").attrString(r.value, "token");
      if (!v.success) return v;
      var S = o("WASmaxParseUtils").attrStringEnum(
        r.value,
        "media",
        o("WASmaxInVoipEnums").ENUM_AUDIO_VIDEO,
      );
      return S.success
        ? o("WAResultOrError").makeResult({
            from: c.value,
            to: d.value,
            class: _.value,
            error: f.value,
            type: g.value,
            linkQueryLinkCreator: h.value,
            linkQueryLinkCreatorPn: y.value,
            linkQueryLinkCreatorUsername: C.value,
            linkQueryAction: b.value,
            linkQueryToken: v.value,
            linkQueryMedia: S.value,
            linkQueryGuest: a.value,
            hasLinkQueryEvent: i.value != null,
            linkQueryWaitingRoom: l.value,
          })
        : S;
    }
    function d(e, t) {
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
        "link_query",
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").attrString(r.value, "token");
      return m.success
        ? o("WAResultOrError").makeResult({
            from: a.value,
            to: i.value,
            class: u.value,
            error: c.value,
            type: d.value,
            errorToken: m.value,
          })
        : m;
    }
    function m(e) {
      var t,
        n = e.linkQueryToken,
        r = e.linkQueryMedia,
        a = e.linkQueryAction,
        i = o("WASmaxJsx").smax(
          "call",
          { id: (t = o("WAWap")).generateId(), to: t.JID("call") },
          o("WASmaxJsx").smax("link_query", {
            token: t.CUSTOM_STRING(n),
            media: t.CUSTOM_STRING(r),
            action: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, a),
          }),
        );
      return i;
    }
    ((l.sendLinkQueryRPC = e),
      (l.parseLinkQueryResponseLinkQueryAck = c),
      (l.parseLinkQueryResponseLinkQueryNack = d),
      (l.makeLinkQueryRequest = m));
  },
  98,
);
