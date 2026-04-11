__d(
  "WASmaxOutSpamStatusNewsletterTextMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutSpamNewsletterPlaintextPayloadMixin",
    "WASmaxOutSpamStatusContentTypeTextMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.newsletterPlaintextPayloadMixinArgs,
        n = o(
          "WASmaxOutSpamStatusContentTypeTextMixin",
        ).mergeStatusContentTypeTextMixin(
          o("WASmaxJsx").smax(
            "status",
            null,
            o(
              "WASmaxOutSpamNewsletterPlaintextPayloadMixin",
            ).mergeNewsletterPlaintextPayloadMixin(
              o("WASmaxJsx").smax("plaintext", null),
              t,
            ),
          ),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeStatusNewsletterTextMixin = s;
  },
  98,
);
