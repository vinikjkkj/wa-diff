__d(
  "WASmaxOutNotificationFallbackGenericNotificationResponseAck",
  [
    "WASmaxAttrs",
    "WASmaxInNotificationFallbackEnums",
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
      var n = o("WASmaxParseReference").optionalAttrFromReference(
        o("WASmaxParseJid").attrJidEnum,
        e,
        ["from"],
        o("WASmaxInNotificationFallbackEnums")
          .BROADCASTJID_CALLJID_DEVICEJID_DOMAINJID_GROUPJID_STATUSJID_USERJID,
      );
      if (!n.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(n.error);
      var r = o("WASmaxParseReference").optionalAttrFromReference(
        o("WASmaxParseJid").attrJidEnum,
        e,
        ["participant"],
        o("WASmaxInNotificationFallbackEnums")
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
        id: o("WAWap").STANZA_ID(t.value),
        to: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, n.value),
        participant: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, r.value),
        class: "notification",
        type: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, a.value),
      });
      return i;
    }
    l.makeGenericNotificationResponseAck = e;
  },
  98,
);
