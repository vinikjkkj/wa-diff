__d(
  "WASmaxOutStatusPublishStatusNewsletterInteractionTypeQuestionReshareMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.metaParentServerId,
        n = e.metaResponseServerId,
        r = o("WASmaxJsx").smax(
          "status",
          null,
          o("WASmaxJsx").smax("meta", {
            interaction_type: "question_reshare",
            parent_server_id: o("WAWap").INT(t),
            response_server_id: o("WAWap").CUSTOM_STRING(n),
          }),
        );
      return r;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeStatusNewsletterInteractionTypeQuestionReshareMixin = s;
  },
  98,
);
