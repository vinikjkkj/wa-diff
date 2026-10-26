__d(
  "WASmaxNewslettersGetNewsletterResponsesRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInNewslettersGetNewsletterResponsesClientErrors",
    "WASmaxInNewslettersIQErrorInternalServerErrorMixin",
    "WASmaxInNewslettersQuestionResponseMessageMixin",
    "WASmaxInNewslettersQuestionResponseReactionsMixin",
    "WASmaxJsx",
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxMixins",
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
          var n = h(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = m(r, n);
          if (a.success)
            return {
              name: "GetNewsletterResponsesResponseSuccess",
              value: a.value,
            };
          var i = u(r, n);
          if (i.success)
            return {
              name: "GetNewsletterResponsesResponseClientError",
              value: i.value,
            };
          var l = c(r, n);
          if (l.success)
            return {
              name: "GetNewsletterResponsesResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "GetNewsletterResponses",
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
      var r = _(e);
      if (!r.success) return r;
      var a = p(e),
        i = o(
          "WASmaxInNewslettersQuestionResponseReactionsMixin",
        ).parseQuestionResponseReactionsMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, r.value, {
          questionResponseFlagsMixin: a.success ? a.value : null,
          questionResponseReactionsMixin: i.success ? i.value : null,
        }),
      );
    }
    function m(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "question_responses",
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
        1e3,
        d,
      );
      return c.success
        ? o("WAResultOrError").makeResult({
            from: l.value,
            type: s.value,
            questionResponsesServerId: u.value,
            questionResponsesQuestionResponse: c.value,
          })
        : c;
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "question_response");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "flags");
      if (!n.success) return n;
      var r = f(n.value),
        a = g(n.value);
      return o("WAResultOrError").makeResult({
        hasFlagsRepliedFlagMixin: r.success,
        hasFlagsStarredFlagMixin: a.success,
      });
    }
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "question_response");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "sender");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "picture");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrLidUserJid,
        n.value,
        "lid",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "notify_name",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrString(r.value, "direct_path");
      return l.success
        ? o("WAResultOrError").makeResult({
            senderLid: a.value,
            senderNotifyName: i.value,
            senderPictureDirectPath: l.value,
          })
        : l;
    }
    function f(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "flags");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "replied");
      return n.success ? o("WASmaxParseUtils").voidSuccess : n;
    }
    function g(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "flags");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "starred");
      return n.success ? o("WASmaxParseUtils").voidSuccess : n;
    }
    function h(e) {
      var t = e.questionResponsesServerId,
        n = e.questionResponsesCount,
        r = e.beforeQuestionResponseMixinMixinArgs,
        a = e.filterQuestionResponseMixinMixinArgs,
        i = e.searchQuestionResponseMixinMixinArgs,
        l = o(
          "WASmaxOutNewslettersNewsletterIQGetRequestMixin",
        ).mergeNewsletterIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxMixins").optionalMerge(
              C,
              o("WASmaxMixins").optionalMerge(
                R,
                o("WASmaxMixins").optionalMerge(
                  v,
                  o("WASmaxJsx").smax("question_responses", {
                    server_id: o("WAWap").INT(t),
                    count: o("WAWap").INT(n),
                  }),
                  r,
                ),
                a,
              ),
              i,
            ),
          ),
          e,
        );
      return l;
    }
    function y(e) {
      var t = e.searchText,
        n = o("WASmaxJsx").smax(
          "question_responses",
          null,
          o("WASmaxJsx").smax("search", { text: o("WAWap").CUSTOM_STRING(t) }),
        );
      return n;
    }
    function C(e, t) {
      var n = y(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function b(e) {
      var t = e.questionResponsesBefore,
        n = o("WASmaxJsx").smax("question_responses", {
          before: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function v(e, t) {
      var n = b(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function S(e) {
      var t = e.contactsOrRepliedOrStarredFilterMixinMixinGroupArgs,
        n = o("WASmaxJsx").smax(
          "question_responses",
          null,
          L(o("WASmaxJsx").smax("filters", null), t),
        );
      return n;
    }
    function R(e, t) {
      var n = S(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function L(e, t) {
      if (t.isContactsFilterMixin) return x(e);
      if (t.isRepliedFilterMixin) return k(e);
      if (t.isStarredFilterMixin) return T(e);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function E() {
      var e = o("WASmaxJsx").smax(
        "filters",
        null,
        o("WASmaxJsx").smax("replied", null),
      );
      return e;
    }
    function k(e) {
      var t = E();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function I() {
      var e = o("WASmaxJsx").smax(
        "filters",
        null,
        o("WASmaxJsx").smax("starred", null),
      );
      return e;
    }
    function T(e) {
      var t = I();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function D() {
      var e = o("WASmaxJsx").smax(
        "filters",
        null,
        o("WASmaxJsx").smax("contacts", null),
      );
      return e;
    }
    function x(e) {
      var t = D();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendGetNewsletterResponsesRPC = e),
      (l.parseGetNewsletterResponsesResponseClientError = u),
      (l.parseGetNewsletterResponsesResponseServerError = c),
      (l.parseGetNewsletterResponsesResponseSuccessQuestionResponsesQuestionResponse =
        d),
      (l.parseGetNewsletterResponsesResponseSuccess = m),
      (l.parseQuestionResponseFlagsMixin = p),
      (l.parseQuestionResponseSenderMixin = _),
      (l.parseRepliedFlagMixin = f),
      (l.parseStarredFlagMixin = g),
      (l.makeGetNewsletterResponsesRequest = h),
      (l.mergeSearchQuestionResponseMixinMixin = C),
      (l.mergeBeforeQuestionResponseMixinMixin = v),
      (l.mergeFilterQuestionResponseMixinMixin = R),
      (l.mergeContactsOrRepliedOrStarredFilterMixinMixinGroup = L),
      (l.mergeRepliedFilterMixinMixin = k),
      (l.mergeStarredFilterMixinMixin = T),
      (l.mergeContactsFilterMixinMixin = x));
  },
  98,
);
