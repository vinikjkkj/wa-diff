__d(
  "WASmaxOutNotificationFallbackGenericNotificationResponseBadStanza",
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
    function e(e, t) {
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
        o("WASmaxInNotificationFallbackEnums")
          .BROADCASTJID_CALLJID_DEVICEJID_DOMAINJID_GROUPJID_STATUSJID_USERJID,
      );
      if (!a.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(a.error);
      var i = o("WASmaxParseReference").optionalAttrFromReference(
        o("WASmaxParseJid").attrJidEnum,
        t,
        ["participant"],
        o("WASmaxInNotificationFallbackEnums")
          .BROADCASTJID_CALLJID_DEVICEJID_DOMAINJID_GROUPJID_STATUSJID_USERJID,
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
    l.makeGenericNotificationResponseBadStanza = e;
  },
  98,
);
