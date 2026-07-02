__d(
  "WASmaxInNewslettersStatusNewsletterInteractionTypeQuestionReshareMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "interaction_type",
        "question_reshare",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "parent_server_id",
        99,
        2147476647,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrString(n.value, "response_server_id");
      return i.success
        ? o("WAResultOrError").makeResult({
            metaInteractionType: r.value,
            metaParentServerId: a.value,
            metaResponseServerId: i.value,
          })
        : i;
    }
    l.parseStatusNewsletterInteractionTypeQuestionReshareMixin = e;
  },
  98,
);
