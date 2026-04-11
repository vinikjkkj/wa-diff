__d(
  "WASmaxOutMessagePublishNewsletterQuestionPublishMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishNewsletterTextOrMediaPublishMixinGroup",
    "WASmaxOutMessagePublishQuestionTypeQuestionMixin",
    "WASmaxOutMessagePublishWAMOSubMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.hasWAMOSub,
        n = e.newsletterTextOrMediaPublishMixinGroupArgs,
        r = o(
          "WASmaxOutMessagePublishNewsletterTextOrMediaPublishMixinGroup",
        ).mergeNewsletterTextOrMediaPublishMixinGroup(
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutMessagePublishWAMOSubMixin").mergeWAMOSubMixin,
            o(
              "WASmaxOutMessagePublishQuestionTypeQuestionMixin",
            ).mergeQuestionTypeQuestionMixin(
              o("WASmaxJsx").smax("message", null),
            ),
            t,
          ),
          n,
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeNewsletterQuestionPublishMixin = s;
  },
  98,
);
