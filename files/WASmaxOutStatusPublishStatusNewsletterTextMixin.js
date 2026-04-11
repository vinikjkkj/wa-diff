__d(
  "WASmaxOutStatusPublishStatusNewsletterTextMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutStatusPublishNewsletterPlaintextPayloadMixin",
    "WASmaxOutStatusPublishStatusContentTypeTextMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.newsletterPlaintextPayloadMixinArgs,
        n = o(
          "WASmaxOutStatusPublishStatusContentTypeTextMixin",
        ).mergeStatusContentTypeTextMixin(
          o("WASmaxJsx").smax(
            "status",
            null,
            o(
              "WASmaxOutStatusPublishNewsletterPlaintextPayloadMixin",
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
