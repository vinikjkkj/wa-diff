__d(
  "WASmaxVoipLinkCreateRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
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
          var n = m(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = u(r, n);
          if (a.success)
            return { name: "LinkCreateResponseLinkCreateAck", value: a.value };
          var i = c(r, n);
          if (i.success)
            return { name: "LinkCreateResponseLinkCreateNack", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("LinkCreate", {
              LinkCreateAck: a,
              LinkCreateNack: i,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "link_create");
      if (!r.success) return r;
      var a = o("WASmaxParseJid").attrJidEnum(
        e,
        "from",
        o("WASmaxInVoipEnums").CALLJID_DOMAINJID,
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
        "link_create",
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").attrString(r.value, "token");
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        r.value,
        "media",
        o("WASmaxInVoipEnums").ENUM_AUDIO_VIDEO,
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrDeviceJid,
        r.value,
        "call-creator",
      );
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrCallId,
        r.value,
        "call-id",
      );
      return f.success
        ? o("WAResultOrError").makeResult({
            from: a.value,
            to: i.value,
            class: u.value,
            error: c.value,
            type: d.value,
            linkCreateToken: m.value,
            linkCreateMedia: p.value,
            linkCreateCallCreator: _.value,
            linkCreateCallId: f.value,
          })
        : f;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "call",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrJidEnum,
        e,
        "to",
        o("WASmaxInVoipEnums").DEVICEJID_USERJID,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        i.value,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "class",
        "call",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").attrString(e, "error");
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "link_create",
      );
      return c.success
        ? o("WAResultOrError").makeResult({
            from: r.value,
            to: a.value,
            class: s.value,
            error: u.value,
            type: c.value,
          })
        : c;
    }
    function d(e) {
      var t = e.eventStartTime,
        n = o("WASmaxJsx").smax("event", { start_time: o("WAWap").INT(t) });
      return n;
    }
    function m(e) {
      var t,
        n,
        r = e.eventArgs,
        a = e.callTo,
        i = e.linkCreateMedia,
        l = e.linkCreateCallCreator,
        s = e.linkCreateCallId,
        u = e.linkCreateLinkCreatorUsername,
        c = e.hasLinkCreateWaitingRoomEnabled1,
        m = o("WASmaxJsx").smax(
          "call",
          { id: (t = o("WAWap")).generateId(), to: t.JID(a) },
          o("WASmaxJsx").smax(
            "link_create",
            {
              media: (n = o("WASmaxAttrs")).OPTIONAL(t.CUSTOM_STRING, i),
              "call-creator": n.OPTIONAL(t.DEVICE_JID, l),
              "call-id": n.OPTIONAL(t.CALL_ID, s),
              link_creator_username: n.OPTIONAL(t.CUSTOM_STRING, u),
              waiting_room_enabled: n.OPTIONAL_LITERAL("1", c),
            },
            o("WASmaxChildren").OPTIONAL_CHILD(d, r),
          ),
        );
      return m;
    }
    ((l.sendLinkCreateRPC = e),
      (l.parseLinkCreateResponseLinkCreateAck = u),
      (l.parseLinkCreateResponseLinkCreateNack = c),
      (l.makeLinkCreateRequestLinkCreateEvent = d),
      (l.makeLinkCreateRequest = m));
  },
  98,
);
