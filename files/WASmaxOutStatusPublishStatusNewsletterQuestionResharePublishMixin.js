__d(
  "WASmaxOutStatusPublishStatusNewsletterQuestionResharePublishMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutStatusPublishStatusNewsletterInteractionTypeQuestionReshareMixin",
    "WASmaxOutStatusPublishStatusNewsletterMediaPublishMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxOutStatusPublishStatusNewsletterInteractionTypeQuestionReshareMixin",
      ).mergeStatusNewsletterInteractionTypeQuestionReshareMixin(
        o(
          "WASmaxOutStatusPublishStatusNewsletterMediaPublishMixin",
        ).mergeStatusNewsletterMediaPublishMixin(
          o("WASmaxJsx").smax("status", null),
          e,
        ),
        e,
      );
      return t;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeStatusNewsletterQuestionResharePublishMixin = s;
  },
  98,
);
