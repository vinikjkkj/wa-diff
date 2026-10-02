__d(
  "WASmaxOutSyncdNewPatchResponseClientAck",
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
        o("WASmaxParseJid").attrDomainJid,
        e,
        ["from"],
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
      var r = o("WASmaxJsx").smax("ack", {
        class: "notification",
        type: "server_sync",
        to: o("WAWap").DOMAIN_JID(t.value),
        id: o("WAWap").STANZA_ID(n.value),
      });
      return r;
    }
    l.makeNewPatchResponseClientAck = e;
  },
  98,
);
