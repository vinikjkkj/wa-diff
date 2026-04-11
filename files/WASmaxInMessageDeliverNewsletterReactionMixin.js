__d(
  "WASmaxInMessageDeliverNewsletterReactionMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeReactionMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "reaction");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(n.value, "code");
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverContentTypeReactionMixin",
      ).parseContentTypeReactionMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ reactionCode: r.value }, a.value),
          )
        : a;
    }
    l.parseNewsletterReactionMixin = e;
  },
  98,
);
