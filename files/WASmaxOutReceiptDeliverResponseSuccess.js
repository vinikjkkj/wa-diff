__d(
  "WASmaxOutReceiptDeliverResponseSuccess",
  [
    "WASmaxAttrs",
    "WASmaxInReceiptEnums",
    "WASmaxJsx",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
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
        o("WASmaxInReceiptEnums")
          .DEVICEJID_BROADCASTJID_DEVICEJID_GROUPJID_INTEROPDEVICEJID_INTEROPDEVICEJID_NEWSLETTERJID_STATUSJID,
      );
      if (!n.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(n.error);
      var r = o("WASmaxParseReference").optionalAttrFromReference(
        o("WASmaxParseUtils").attrString,
        e,
        ["type"],
      );
      if (!r.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(r.error);
      var a = o("WASmaxParseReference").optionalAttrFromReference(
        o("WASmaxParseJid").attrJidEnum,
        e,
        ["participant"],
        o("WASmaxInReceiptEnums")
          .DEVICEJID_USERJID_DEVICEJID_USERJID_USERJID_USERJID,
      );
      if (!a.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(a.error);
      var i = o("WASmaxParseReference").optionalAttrFromReference(
        o("WASmaxParseJid").attrJidEnum,
        e,
        ["recipient"],
        o("WASmaxInReceiptEnums").USERJID_LIDUSERJID_USERJID,
      );
      if (!i.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(i.error);
      var l = o("WASmaxJsx").smax("ack", {
        id: o("WAWap").STANZA_ID(t.value),
        class: "receipt",
        to: o("WAWap").JID(n.value),
        type: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, r.value),
        participant: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, a.value),
        recipient: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, i.value),
      });
      return l;
    }
    l.makeDeliverResponseSuccess = e;
  },
  98,
);
