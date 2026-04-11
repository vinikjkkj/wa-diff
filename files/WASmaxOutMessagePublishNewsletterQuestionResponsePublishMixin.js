__d(
  "WASmaxOutMessagePublishNewsletterQuestionResponsePublishMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishContentTypeTextMixin",
    "WASmaxOutMessagePublishPayloadMixin",
    "WASmaxOutMessagePublishQuestionTypeResponseMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.payloadMixinArgs,
        n = o(
          "WASmaxOutMessagePublishQuestionTypeResponseMixin",
        ).mergeQuestionTypeResponseMixin(
          o(
            "WASmaxOutMessagePublishContentTypeTextMixin",
          ).mergeContentTypeTextMixin(
            o("WASmaxJsx").smax(
              "message",
              null,
              o("WASmaxOutMessagePublishPayloadMixin").mergePayloadMixin(
                o("WASmaxJsx").smax("plaintext", null),
                t,
              ),
            ),
          ),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterQuestionResponsePublishMixin = s;
  },
  98,
);
