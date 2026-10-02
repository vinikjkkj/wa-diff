__d(
  "WASmaxOutMessageDeliverPeerResponseSuccess",
  [
    "WASmaxInMessageDeliverEnums",
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
        o("WASmaxParseJid").attrJidEnum,
        e,
        ["from"],
        o("WASmaxInMessageDeliverEnums").USERJID_DEVICEJID,
      );
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(t.error);
      var n = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrStanzaId,
        e,
        ["id"],
      );
      if (!n.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(n.error);
      var r = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrString,
        e,
        ["type"],
      );
      if (!r.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(r.error);
      var a = o("WASmaxJsx").smax("ack", {
        to: o("WAWap").JID(t.value),
        class: "message",
        id: o("WAWap").STANZA_ID(n.value),
        type: o("WAWap").CUSTOM_STRING(r.value),
      });
      return a;
    }
    l.makePeerResponseSuccess = e;
  },
  98,
);
