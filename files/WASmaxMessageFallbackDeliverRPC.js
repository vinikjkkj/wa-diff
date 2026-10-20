__d(
  "WASmaxMessageFallbackDeliverRPC",
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
          o("WASmaxRpcUtils").errorMessageRpcParsing("Deliver", { Request: t }),
        );
      return {
        parsedRequest: t.value,
        makeDeliverResponseNoEnc: function () {
          return p(e);
        },
        makeDeliverResponseDelivery: function () {
          return m(e);
        },
        makeDeliverResponseBadStanzaInvalidProtobuf: function (n) {
          return d(n, e);
        },
        makeDeliverResponseBadStanza: function (n) {
          return c(n, e);
        },
      };
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrJidEnum(e, "from", f);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrJidEnum,
        e,
        "participant",
        f,
      );
      if (!i.success) return i;
      var l = _(e);
      return o("WAResultOrError").makeResult({
        id: n.value,
        from: r.value,
        type: a.value,
        participant: i.value,
        deliverEncMixin: l.success ? l.value : null,
      });
    }
    function c(e, t) {
      var n = e.ackError,
        r = o("WASmaxParseReference").attrFromReference(
          o("WASmaxParseUtils").attrStanzaId,
          t,
          ["id"],
        );
      if (!r.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(r.error);
      var a = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseJid").attrJidEnum,
        t,
        ["from"],
        f,
      );
      if (!a.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(a.error);
      var i = o("WASmaxParseReference").optionalAttrFromReference(
        o("WASmaxParseJid").attrJidEnum,
        t,
        ["participant"],
        f,
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
        class: "message",
        id: o("WAWap").STANZA_ID(r.value),
        to: o("WAWap").JID(a.value),
        participant: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, i.value),
        type: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, l.value),
        error: o("WAWap").INT(n),
      });
      return s;
    }
    function d(e, t) {
      var n = e.metaFailureReason,
        r = o("WASmaxParseReference").attrFromReference(
          o("WASmaxParseUtils").attrStanzaId,
          t,
          ["id"],
        );
      if (!r.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(r.error);
      var a = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseJid").attrJidEnum,
        t,
        ["from"],
        f,
      );
      if (!a.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(a.error);
      var i = o("WASmaxParseReference").optionalAttrFromReference(
        o("WASmaxParseJid").attrJidEnum,
        t,
        ["participant"],
        f,
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
      var s = o("WASmaxJsx").smax(
        "ack",
        {
          class: "message",
          id: o("WAWap").STANZA_ID(r.value),
          to: o("WAWap").JID(a.value),
          participant: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, i.value),
          type: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, l.value),
          error: "491",
        },
        o("WASmaxJsx").smax("meta", { failure_reason: o("WAWap").INT(n) }),
      );
      return s;
    }
    function m(e) {
      var t = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrStanzaId,
        e,
        ["id"],
      );
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(t.error);
      var n = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseJid").attrJidEnum,
        e,
        ["from"],
        f,
      );
      if (!n.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(n.error);
      var r = o("WASmaxParseReference").optionalAttrFromReference(
        o("WASmaxParseJid").attrJidEnum,
        e,
        ["participant"],
        f,
      );
      if (!r.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(r.error);
      var a = o("WASmaxJsx").smax("receipt", {
        id: o("WAWap").STANZA_ID(t.value),
        to: o("WAWap").JID(n.value),
        participant: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, r.value),
      });
      return a;
    }
    function p(e) {
      var t = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrStanzaId,
        e,
        ["id"],
      );
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(t.error);
      var n = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseJid").attrJidEnum,
        e,
        ["from"],
        f,
      );
      if (!n.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(n.error);
      var r = o("WASmaxParseReference").optionalAttrFromReference(
        o("WASmaxParseJid").attrJidEnum,
        e,
        ["participant"],
        f,
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
        class: "message",
        id: o("WAWap").STANZA_ID(t.value),
        from: o("WAWap").JID(n.value),
        participant: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, r.value),
        type: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, a.value),
        error: "406",
      });
      return i;
    }
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").countChildrenWithTag(
        e,
        "enc",
        1,
        1 / 0,
        o("WAResultOrError").makeResult,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ countEnc: n.value })
        : n;
    }
    var f = {
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
    ((l.receiveDeliverRPC = s),
      (l.parseDeliverRequest = u),
      (l.makeDeliverResponseBadStanza = c),
      (l.makeDeliverResponseBadStanzaInvalidProtobuf = d),
      (l.makeDeliverResponseDelivery = m),
      (l.makeDeliverResponseNoEnc = p),
      (l.parseDeliverEncMixin = _),
      (l.BROADCASTJID_CALLJID_DEVICEJID_DOMAINJID_GROUPJID_STATUSJID_USERJID =
        f));
  },
  98,
);
