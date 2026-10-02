__d(
  "WASmaxOutMessageDeliverAckMixin",
  [
    "WASmaxAttrs",
    "WASmaxInMessageDeliverEnums",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = e.ackRecipient,
        r = o("WASmaxParseReference").attrFromReference(
          o("WASmaxParseJid").attrJidEnum,
          t,
          ["from"],
          o("WASmaxInMessageDeliverEnums")
            .DEVICEJID_BROADCASTJID_DEVICEJID_GROUPJID_INTEROPDEVICEJID_INTEROPDEVICEJID_DEVICEJID_STATUSJID,
        );
      if (!r.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(r.error);
      var a = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrStanzaId,
        t,
        ["id"],
      );
      if (!a.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(a.error);
      var i = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrString,
        t,
        ["type"],
      );
      if (!i.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(i.error);
      var l = o("WASmaxParseReference").optionalAttrFromReference(
        o("WASmaxParseJid").attrJidEnum,
        t,
        ["participant"],
        o("WASmaxInMessageDeliverEnums")
          .DEVICEJID_DEVICEJID_USERJID_USERJID_DEVICEJID_LIDUSERJID_USERJID,
      );
      if (!l.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(l.error);
      var s = o("WASmaxJsx").smax("ack", {
        to: o("WAWap").JID(r.value),
        class: "message",
        id: o("WAWap").STANZA_ID(a.value),
        type: o("WAWap").CUSTOM_STRING(i.value),
        participant: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, l.value),
        recipient: o("WASmaxAttrs").OPTIONAL(o("WAWap").USER_JID, n),
      });
      return s;
    }
    function s(t, n, r) {
      var a = e(n, r);
      return o("WASmaxMixins").mergeStanzas(t, a);
    }
    l.mergeAckMixin = s;
  },
  98,
);
