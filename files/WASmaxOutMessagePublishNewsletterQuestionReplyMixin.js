__d(
  "WASmaxOutMessagePublishNewsletterQuestionReplyMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishNewsletterTextOrMediaMixinGroup",
    "WASmaxOutMessagePublishQuestionTypeReplyMixin",
    "WASmaxOutMessagePublishWAMOSubMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.hasWAMOSub,
        n = e.newsletterTextOrMediaMixinGroupArgs,
        r = o(
          "WASmaxOutMessagePublishNewsletterTextOrMediaMixinGroup",
        ).mergeNewsletterTextOrMediaMixinGroup(
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutMessagePublishWAMOSubMixin").mergeWAMOSubMixin,
            o(
              "WASmaxOutMessagePublishQuestionTypeReplyMixin",
            ).mergeQuestionTypeReplyMixin(o("WASmaxJsx").smax("message", null)),
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
    l.mergeNewsletterQuestionReplyMixin = s;
  },
  98,
);
