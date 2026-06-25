__d(
  "WASmaxOutStatusPublishStatusNewsletterInteractionTypeQuestionMixin",
  ["WASmaxJsx", "WASmaxMixins"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WASmaxJsx").smax(
        "status",
        null,
        o("WASmaxJsx").smax("meta", { interaction_type: "question" }),
      );
      return e;
    }
    function s(t) {
      var n = e();
      return o("WASmaxMixins").mergeStanzas(t, n);
    }
    l.mergeStatusNewsletterInteractionTypeQuestionMixin = s;
  },
  98,
);
