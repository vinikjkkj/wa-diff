__d(
  "WASmaxOutMessagePublishNewsletterEditMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishAdminEditMixin",
    "WASmaxOutMessagePublishNewsletterQuestionReplyOrTextOrMediaMixinGroup",
    "WASmaxOutMessagePublishWAMOSubMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.hasWAMOSub,
        n = e.newsletterQuestionReplyOrTextOrMediaMixinGroupArgs,
        r = o(
          "WASmaxOutMessagePublishNewsletterQuestionReplyOrTextOrMediaMixinGroup",
        ).mergeNewsletterQuestionReplyOrTextOrMediaMixinGroup(
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutMessagePublishWAMOSubMixin").mergeWAMOSubMixin,
            o("WASmaxOutMessagePublishAdminEditMixin").mergeAdminEditMixin(
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
    l.mergeNewsletterEditMixin = s;
  },
  98,
);
