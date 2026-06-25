__d(
  "WASmaxOutStatusPublishStatusNewsletterQuestionPublishMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutStatusPublishStatusNewsletterInteractionTypeQuestionMixin",
    "WASmaxOutStatusPublishStatusNewsletterMediaPublishMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxOutStatusPublishStatusNewsletterInteractionTypeQuestionMixin",
      ).mergeStatusNewsletterInteractionTypeQuestionMixin(
        o(
          "WASmaxOutStatusPublishStatusNewsletterMediaPublishMixin",
        ).mergeStatusNewsletterMediaPublishMixin(
          o("WASmaxJsx").smax("status", null),
          e,
        ),
      );
      return t;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeStatusNewsletterQuestionPublishMixin = s;
  },
  98,
);
