__d(
  "WASmaxOutMdSetRegResponseHostedClientResponse",
  [
    "WASmaxJsx",
    "WASmaxOutMdHostedCompanionSetRegResponseBundleMixin",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrStanzaId,
        t,
        ["id"],
      );
      if (!n.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(n.error);
      var r = o(
        "WASmaxOutMdHostedCompanionSetRegResponseBundleMixin",
      ).mergeHostedCompanionSetRegResponseBundleMixin(
        o("WASmaxJsx").smax("iq", {
          id: o("WAWap").STANZA_ID(n.value),
          to: o("WAWap").S_WHATSAPP_NET,
          type: "result",
        }),
        e,
      );
      return r;
    }
    l.makeSetRegResponseHostedClientResponse = e;
  },
  98,
);
