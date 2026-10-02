__d(
  "WASmaxOutReceiptDeliverAppDataPeerResponseSuccess",
  [
    "WASmaxAttrs",
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
        o("WASmaxParseJid").attrDeviceJid,
        e,
        ["from"],
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
      var a = o("WASmaxJsx").smax("ack", {
        id: o("WAWap").STANZA_ID(t.value),
        class: "receipt",
        to: o("WAWap").DEVICE_JID(n.value),
        type: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, r.value),
      });
      return a;
    }
    l.makeDeliverAppDataPeerResponseSuccess = e;
  },
  98,
);
