__d(
  "WASmaxOutMessageFallbackDeliverResponseDelivery",
  [
    "WASmaxAttrs",
    "WASmaxInMessageFallbackEnums",
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
        o("WASmaxInMessageFallbackEnums")
          .BROADCASTJID_CALLJID_DEVICEJID_DOMAINJID_GROUPJID_STATUSJID_USERJID,
      );
      if (!n.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(n.error);
      var r = o("WASmaxParseReference").optionalAttrFromReference(
        o("WASmaxParseJid").attrJidEnum,
        e,
        ["participant"],
        o("WASmaxInMessageFallbackEnums")
          .BROADCASTJID_CALLJID_DEVICEJID_DOMAINJID_GROUPJID_STATUSJID_USERJID,
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
    l.makeDeliverResponseDelivery = e;
  },
  98,
);
