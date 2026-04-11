__d(
  "WASmaxOutMdSetRegResponseError",
  [
    "WASmaxJsx",
    "WASmaxOutMdIQErrorNotAuthorizedMixin",
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
      var n = o("WASmaxJsx").smax(
        "iq",
        {
          id: o("WAWap").STANZA_ID(t.value),
          to: o("WAWap").S_WHATSAPP_NET,
          type: "error",
        },
        o(
          "WASmaxOutMdIQErrorNotAuthorizedMixin",
        ).mergeIQErrorNotAuthorizedMixin(o("WASmaxJsx").smax("error", null)),
      );
      return n;
    }
    l.makeSetRegResponseError = e;
  },
  98,
);
