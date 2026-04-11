__d(
  "WASmaxInNewslettersQuestionResponseMessageMixin",
  [
    "WAResultOrError",
    "WASmaxInNewslettersNewsletterQuestionResponseMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "question_response");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "message");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStanzaId(n.value, "id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "t",
        1577865600,
        4102473600,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        n.value,
        "is_sender",
        "true",
      );
      if (!i.success) return i;
      var l = o(
        "WASmaxInNewslettersNewsletterQuestionResponseMixin",
      ).parseNewsletterQuestionResponseMixin(n.value);
      return l.success
        ? o("WAResultOrError").makeResult({
            messageId: r.value,
            messageT: a.value,
            messageIsSender: i.value,
            messageNewsletterQuestionResponseMixin: l.value,
          })
        : l;
    }
    l.parseQuestionResponseMessageMixin = e;
  },
  98,
);
