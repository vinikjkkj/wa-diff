__d(
  "WASmaxOutStatusPublishStatusNewsletterInteractionTypeQuestionResponseMixin",
  ["WASmaxAttrs", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.metaResponseServerId,
        n = o("WASmaxJsx").smax(
          "status",
          null,
          o("WASmaxJsx").smax("meta", {
            interaction_type: "question_response",
            response_server_id: o("WASmaxAttrs").OPTIONAL(
              o("WAWap").CUSTOM_STRING,
              t,
            ),
          }),
        );
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeStatusNewsletterInteractionTypeQuestionResponseMixin = s;
  },
  98,
);
