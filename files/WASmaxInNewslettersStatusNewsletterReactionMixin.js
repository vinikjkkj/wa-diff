__d(
  "WASmaxInNewslettersStatusNewsletterReactionMixin",
  [
    "WAResultOrError",
    "WASmaxInNewslettersStatusContentTypeReactionMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "reaction");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(n.value, "code");
      if (!r.success) return r;
      var a = o(
        "WASmaxInNewslettersStatusContentTypeReactionMixin",
      ).parseStatusContentTypeReactionMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ reactionCode: r.value }, a.value),
          )
        : a;
    }
    l.parseStatusNewsletterReactionMixin = e;
  },
  98,
);
