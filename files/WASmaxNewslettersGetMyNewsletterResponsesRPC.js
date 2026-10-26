__d(
  "WASmaxNewslettersGetMyNewsletterResponsesRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInNewslettersGetNewsletterResponsesClientErrors",
    "WASmaxInNewslettersIQErrorInternalServerErrorMixin",
    "WASmaxInNewslettersQuestionResponseMessageMixin",
    "WASmaxInNewslettersQuestionResponseReactionsMixin",
    "WASmaxJsx",
    "WASmaxOutNewslettersNewsletterIQGetRequestMixin",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = p(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = m(r, n);
          if (a.success)
            return {
              name: "GetMyNewsletterResponsesResponseSuccess",
              value: a.value,
            };
          var i = u(r, n);
          if (i.success)
            return {
              name: "GetMyNewsletterResponsesResponseClientError",
              value: i.value,
            };
          var l = c(r, n);
          if (l.success)
            return {
              name: "GetMyNewsletterResponsesResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "GetMyNewsletterResponses",
              { Success: a, ClientError: i, ServerError: l },
            ),
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInNewslettersGetNewsletterResponsesClientErrors",
      ).parseGetNewsletterResponsesClientErrors(e, t);
      return r.success
        ? o("WAResultOrError").makeResult({
            getNewsletterResponsesClientErrors: r.value,
          })
        : r;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        a.value,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseJid").attrNewsletterJid(e, "from");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "error",
      );
      if (!s.success) return s;
      var u = o(
        "WASmaxInNewslettersIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(r.value);
      return u.success
        ? o("WAResultOrError").makeResult({
            from: l.value,
            type: s.value,
            errorIQErrorInternalServerErrorMixin: u.value,
          })
        : u;
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "question_response");
      if (!t.success) return t;
      var n = o(
        "WASmaxInNewslettersQuestionResponseMessageMixin",
      ).parseQuestionResponseMessageMixin(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInNewslettersQuestionResponseReactionsMixin",
      ).parseQuestionResponseReactionsMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, {
          questionResponseReactionsMixin: r.success ? r.value : null,
        }),
      );
    }
    function m(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "my_question_responses",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseReference").attrStringFromReference(t, ["id"]);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
        a.value,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseJid").attrNewsletterJid(e, "from");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").attrIntRange(
        r.value,
        "server_id",
        99,
        2147476647,
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "question_response",
        0,
        100,
        d,
      );
      return c.success
        ? o("WAResultOrError").makeResult({
            from: l.value,
            type: s.value,
            myQuestionResponsesServerId: u.value,
            myQuestionResponsesQuestionResponse: c.value,
          })
        : c;
    }
    function p(e) {
      var t = e.myQuestionResponsesServerId,
        n = o(
          "WASmaxOutNewslettersNewsletterIQGetRequestMixin",
        ).mergeNewsletterIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax("my_question_responses", {
              server_id: o("WAWap").INT(t),
            }),
          ),
          e,
        );
      return n;
    }
    ((l.sendGetMyNewsletterResponsesRPC = e),
      (l.parseGetMyNewsletterResponsesResponseClientError = u),
      (l.parseGetMyNewsletterResponsesResponseServerError = c),
      (l.parseGetMyNewsletterResponsesResponseSuccessMyQuestionResponsesQuestionResponse =
        d),
      (l.parseGetMyNewsletterResponsesResponseSuccess = m),
      (l.makeGetMyNewsletterResponsesRequest = p));
  },
  98,
);
