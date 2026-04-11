__d(
  "WASmaxOutMessagePublishNewsletterQuizCreationMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishContentTypeQuizCreationMixin",
    "WASmaxOutMessagePublishPayloadMixin",
    "WASmaxOutMessagePublishWAMOSubMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.hasWAMOSub,
        n = e.payloadMixinArgs,
        r = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutMessagePublishWAMOSubMixin").mergeWAMOSubMixin,
          o(
            "WASmaxOutMessagePublishContentTypeQuizCreationMixin",
          ).mergeContentTypeQuizCreationMixin(
            o("WASmaxJsx").smax(
              "message",
              null,
              o("WASmaxOutMessagePublishPayloadMixin").mergePayloadMixin(
                o("WASmaxJsx").smax("plaintext", null),
                n,
              ),
            ),
            e,
          ),
          t,
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterQuizCreationMixin = s;
  },
  98,
);
