__d(
  "WASmaxInVoipLinkQueryResponseLinkQueryAck",
  [
    "WAResultOrError",
    "WASmaxInVoipCallAckBaseMixin",
    "WASmaxInVoipEnums",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
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
      return r.success
        ? o("WAResultOrError").makeResult({
            isAdmin: n.value,
            enabled: r.value,
          })
        : r;
    }
    function s(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "ack");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(t, "link_query");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalChild(a.value, "event");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optionalChildWithTag(
        a.value,
        "waiting_room",
        e,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        t,
        "from",
        "call",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t,
        "type",
        "link_query",
      );
      if (!u.success) return u;
      var c = o("WASmaxParseJid").attrDeviceJid(a.value, "link_creator");
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrDeviceJid,
        a.value,
        "link_creator_pn",
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        a.value,
        "link_creator_username",
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        a.value,
        "action",
        o("WASmaxInVoipEnums").ENUM_LINKEDIT_PREVIEW,
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").attrString(a.value, "token");
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").attrStringEnum(
        a.value,
        "media",
        o("WASmaxInVoipEnums").ENUM_AUDIO_VIDEO,
      );
      if (!f.success) return f;
      var g = o("WASmaxInVoipCallAckBaseMixin").parseCallAckBaseMixin(t, n);
      return g.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: s.value,
                type: u.value,
                linkQueryLinkCreator: c.value,
                linkQueryLinkCreatorPn: d.value,
                linkQueryLinkCreatorUsername: m.value,
                linkQueryAction: p.value,
                linkQueryToken: _.value,
                linkQueryMedia: f.value,
              },
              g.value,
              {
                hasLinkQueryEvent: i.value != null,
                linkQueryWaitingRoom: l.value,
              },
            ),
          )
        : g;
    }
    ((l.parseLinkQueryResponseLinkQueryAckLinkQueryWaitingRoom = e),
      (l.parseLinkQueryResponseLinkQueryAck = s));
  },
  98,
);
