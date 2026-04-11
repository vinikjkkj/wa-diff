__d(
  "WASmaxOutStatusPublishStatusNewsletterMediaMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutStatusPublishNewsletterPlaintextPayloadMixin",
    "WASmaxOutStatusPublishStatusContentTypeMediaMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.plaintextMediatype,
        n = e.newsletterPlaintextPayloadMixinArgs,
        r = o(
          "WASmaxOutStatusPublishStatusContentTypeMediaMixin",
        ).mergeStatusContentTypeMediaMixin(
          o("WASmaxJsx").smax(
            "status",
            null,
            o(
              "WASmaxOutStatusPublishNewsletterPlaintextPayloadMixin",
            ).mergeNewsletterPlaintextPayloadMixin(
              o("WASmaxJsx").smax("plaintext", {
                mediatype: o("WAWap").CUSTOM_STRING(t),
              }),
              n,
            ),
          ),
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeStatusNewsletterMediaMixin = s;
  },
  98,
);
