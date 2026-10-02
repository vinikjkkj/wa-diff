__d(
  "WASmaxOutMessageFallbackDeliverResponseNoEnc",
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
    l.makeDeliverResponseNoEnc = e;
  },
  98,
);
