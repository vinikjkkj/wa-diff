__d(
  "WASmaxInNewslettersStatusNewsletterTextMixin",
  [
    "WAResultOrError",
    "WASmaxInNewslettersNewsletterPlaintextPayloadMixin",
    "WASmaxInNewslettersStatusContentTypeTextMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "plaintext");
      if (!n.success) return n;
      var r = o(
        "WASmaxInNewslettersNewsletterPlaintextPayloadMixin",
      ).parseNewsletterPlaintextPayloadMixin(n.value);
      if (!r.success) return r;
      var a = o(
        "WASmaxInNewslettersStatusContentTypeTextMixin",
      ).parseStatusContentTypeTextMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { plaintextNewsletterPlaintextPayloadMixin: r.value },
              a.value,
            ),
          )
        : a;
    }
    l.parseStatusNewsletterTextMixin = e;
  },
  98,
);
