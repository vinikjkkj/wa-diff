__d(
  "WASmaxInNewslettersGetNewsletterResponsesResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInNewslettersQuestionResponseFlagsMixin",
    "WASmaxInNewslettersQuestionResponseMessageMixin",
    "WASmaxInNewslettersQuestionResponseSenderMixin",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "question_response");
      if (!t.success) return t;
      var n = o(
        "WASmaxInNewslettersQuestionResponseMessageMixin",
      ).parseQuestionResponseMessageMixin(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInNewslettersQuestionResponseSenderMixin",
      ).parseQuestionResponseSenderMixin(e);
      if (!r.success) return r;
      var a = o(
        "WASmaxInNewslettersQuestionResponseFlagsMixin",
      ).parseQuestionResponseFlagsMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, r.value, {
          questionResponseFlagsMixin: a.success ? a.value : null,
        }),
      );
    }
    function s(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(
        t,
        "question_responses",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseReference").attrStringFromReference(n, ["id"]);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t,
        "id",
        i.value,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseJid").attrNewsletterJid(t, "from");
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t,
        "type",
        "result",
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").attrIntRange(
        a.value,
        "server_id",
        99,
        2147476647,
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").mapChildrenWithTag(
        a.value,
        "question_response",
        0,
        1e3,
        e,
      );
      return d.success
        ? o("WAResultOrError").makeResult({
            from: s.value,
            type: u.value,
            questionResponsesServerId: c.value,
            questionResponsesQuestionResponse: d.value,
          })
        : d;
    }
    ((l.parseGetNewsletterResponsesResponseSuccessQuestionResponsesQuestionResponse =
      e),
      (l.parseGetNewsletterResponsesResponseSuccess = s));
  },
  98,
);
