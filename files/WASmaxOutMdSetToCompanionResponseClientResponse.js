__d(
  "WASmaxOutMdSetToCompanionResponseClientResponse",
  [
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
        o("WASmaxParseJid").attrDomainJid,
        e,
        ["from"],
      );
      if (!n.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(n.error);
      var r = o("WASmaxJsx").smax("iq", {
        id: o("WAWap").STANZA_ID(t.value),
        to: o("WAWap").DOMAIN_JID(n.value),
        type: "result",
      });
      return r;
    }
    l.makeSetToCompanionResponseClientResponse = e;
  },
  98,
);
