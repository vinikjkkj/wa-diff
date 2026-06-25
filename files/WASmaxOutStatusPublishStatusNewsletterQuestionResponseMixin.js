__d(
  "WASmaxOutStatusPublishStatusNewsletterQuestionResponseMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutStatusPublishNewsletterPlaintextPayloadMixin",
    "WASmaxOutStatusPublishStatusContentTypeTextMixin",
    "WASmaxOutStatusPublishStatusNewsletterInteractionTypeQuestionResponseMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.statusServerId,
        n = e.newsletterPlaintextPayloadMixinArgs,
        r = o(
          "WASmaxOutStatusPublishStatusNewsletterInteractionTypeQuestionResponseMixin",
        ).mergeStatusNewsletterInteractionTypeQuestionResponseMixin(
          o(
            "WASmaxOutStatusPublishStatusContentTypeTextMixin",
          ).mergeStatusContentTypeTextMixin(
            o("WASmaxJsx").smax(
              "status",
              { server_id: o("WAWap").INT(t) },
              o(
                "WASmaxOutStatusPublishNewsletterPlaintextPayloadMixin",
              ).mergeNewsletterPlaintextPayloadMixin(
                o("WASmaxJsx").smax("plaintext", null),
                n,
              ),
            ),
          ),
          e,
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeStatusNewsletterQuestionResponseMixin = s;
  },
  98,
);
