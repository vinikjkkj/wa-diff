__d(
  "WASmaxInNewslettersNewsletterQuestionResponseMixin",
  [
    "WAResultOrError",
    "WASmaxInNewslettersContentTypeTextMixin",
    "WASmaxInNewslettersPayloadMixin",
    "WASmaxInNewslettersQuestionTypeResponseMixin",
    "WASmaxInNewslettersResponseServerIDMixin",
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
        "WASmaxInNewslettersContentTypeTextMixin",
      ).parseContentTypeTextMixin(e);
      if (!a.success) return a;
      var i = o(
        "WASmaxInNewslettersQuestionTypeResponseMixin",
      ).parseQuestionTypeResponseMixin(e);
      if (!i.success) return i;
      var l = o(
        "WASmaxInNewslettersResponseServerIDMixin",
      ).parseResponseServerIDMixin(e);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { plaintextPayloadMixin: r.value },
              a.value,
              i.value,
              l.value,
            ),
          )
        : l;
    }
    l.parseNewsletterQuestionResponseMixin = e;
  },
  98,
);
