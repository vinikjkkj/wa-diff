__d(
  "WASmaxInNewslettersNewsletterQuizCreationMixin",
  [
    "WAResultOrError",
    "WASmaxInNewslettersContentTypeQuizCreationMixin",
    "WASmaxInNewslettersPayloadMixin",
    "WASmaxInNewslettersWAMOSubMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "plaintext");
      if (!n.success) return n;
      var r = o("WASmaxInNewslettersPayloadMixin").parsePayloadMixin(n.value);
      if (!r.success) return r;
      var a = o(
        "WASmaxInNewslettersContentTypeQuizCreationMixin",
      ).parseContentTypeQuizCreationMixin(e);
      if (!a.success) return a;
      var i = o("WASmaxInNewslettersWAMOSubMixin").parseWAMOSubMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ plaintextPayloadMixin: r.value }, a.value, {
          wAMOSubMixin: i.success ? i.value : null,
        }),
      );
    }
    l.parseNewsletterQuizCreationMixin = e;
  },
  98,
);
