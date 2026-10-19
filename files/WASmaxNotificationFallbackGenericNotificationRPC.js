__d(
  "WASmaxNotificationFallbackGenericNotificationRPC",
  [
    "WAJids",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = u(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("GenericNotification", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeGenericNotificationResponseBadStanza: function (n) {
          return d(n, e);
        },
        makeGenericNotificationResponseAck: function () {
          return c(e);
        },
      };
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrJidEnum,
        e,
        "from",
        m,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrJidEnum,
        e,
        "participant",
        m,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            id: n.value,
            from: r.value,
            participant: a.value,
            type: i.value,
          })
        : i;
    }
    function c(e) {
      var t = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrStanzaId,
        e,
        ["id"],
      );
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(t.error);
      var n = o("WASmaxParseReference").optionalAttrFromReference(
        o("WASmaxParseJid").attrJidEnum,
        e,
        ["from"],
        m,
      );
      if (!n.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(n.error);
      var r = o("WASmaxParseReference").optionalAttrFromReference(
        o("WASmaxParseJid").attrJidEnum,
        e,
        ["participant"],
        m,
      );
      if (!r.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(r.error);
      var a = o("WASmaxParseReference").optionalAttrFromReference(
        o("WASmaxParseUtils").attrString,
        e,
        ["type"],
      );
      if (!a.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(a.error);
      var i = o("WASmaxJsx").smax("ack", {
        id: o("WAWap").STANZA_ID(t.value),
        to: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, n.value),
        participant: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, r.value),
        class: "notification",
        type: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, a.value),
      });
      return i;
    }
    function d(e, t) {
      var n = e.ackError,
        r = o("WASmaxParseReference").attrFromReference(
          o("WASmaxParseUtils").attrStanzaId,
          t,
          ["id"],
        );
      if (!r.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(r.error);
      var a = o("WASmaxParseReference").optionalAttrFromReference(
        o("WASmaxParseJid").attrJidEnum,
        t,
        ["from"],
        m,
      );
      if (!a.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(a.error);
      var i = o("WASmaxParseReference").optionalAttrFromReference(
        o("WASmaxParseJid").attrJidEnum,
        t,
        ["participant"],
        m,
      );
      if (!i.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(i.error);
      var l = o("WASmaxParseReference").optionalAttrFromReference(
        o("WASmaxParseUtils").attrString,
        t,
        ["type"],
      );
      if (!l.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(l.error);
      var s = o("WASmaxJsx").smax("ack", {
        id: o("WAWap").STANZA_ID(r.value),
        to: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, a.value),
        participant: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, i.value),
        class: "notification",
        type: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, l.value),
        error: o("WAWap").INT(n),
      });
      return s;
    }
    var m = {
      validators: [
        (e = o("WAJids")).validateBroadcastJid,
        e.validateCallJid,
        e.validateDeviceJid,
        e.validateDomainJid,
        e.validateGroupJid,
        e.validateStatusJid,
        e.validateUserJid,
      ],
      typeName:
        "BroadcastJid|CallJid|DeviceJid|DomainJid|GroupJid|StatusJid|UserJid",
    };
    ((l.receiveGenericNotificationRPC = s),
      (l.parseGenericNotificationRequest = u),
      (l.makeGenericNotificationResponseAck = c),
      (l.makeGenericNotificationResponseBadStanza = d),
      (l.BROADCASTJID_CALLJID_DEVICEJID_DOMAINJID_GROUPJID_STATUSJID_USERJID =
        m));
  },
  98,
);
