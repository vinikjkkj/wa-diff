__d(
  "WASmaxOutMessagePublishNewsletterQuestionReplyPublishMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishNewsletterTextOrMediaPublishMixinGroup",
    "WASmaxOutMessagePublishParentAndResponseServerIDMixin",
    "WASmaxOutMessagePublishQuestionTypeReplyMixin",
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
              "WASmaxOutMessagePublishParentAndResponseServerIDMixin",
            ).mergeParentAndResponseServerIDMixin(
              o(
                "WASmaxOutMessagePublishQuestionTypeReplyMixin",
              ).mergeQuestionTypeReplyMixin(
                o("WASmaxJsx").smax("message", null),
              ),
              e,
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
    l.mergeNewsletterQuestionReplyPublishMixin = s;
  },
  98,
);
