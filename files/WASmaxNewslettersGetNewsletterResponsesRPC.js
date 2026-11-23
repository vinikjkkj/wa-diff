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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = g(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = d(r, n);
      if (a.success)
        return {
          name: "GetNewsletterResponsesResponseSuccess",
          value: a.value,
        };
      var i = s(r, n);
      if (i.success)
        return {
          name: "GetNewsletterResponsesResponseClientError",
          value: i.value,
        };
      var l = u(r, n);
      if (l.success)
        return {
          name: "GetNewsletterResponsesResponseServerError",
          value: l.value,
        };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GetNewsletterResponses", {
          Success: a,
          ClientError: i,
          ServerError: l,
        }),
      );
    }
    function s(e, t) {
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
    function u(e, t) {
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
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "question_response");
      if (!t.success) return t;
      var n = o(
        "WASmaxInNewslettersQuestionResponseMessageMixin",
      ).parseQuestionResponseMessageMixin(e);
      if (!n.success) return n;
      var r = p(e);
      if (!r.success) return r;
      var a = m(e),
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
    function d(e, t) {
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
      var d = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "question_response",
        0,
        1e3,
        c,
      );
      return d.success
        ? o("WAResultOrError").makeResult({
            from: l.value,
            type: s.value,
            questionResponsesServerId: u.value,
            questionResponsesQuestionResponse: d.value,
          })
        : d;
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "question_response");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "flags");
      if (!n.success) return n;
      var r = _(n.value),
        a = f(n.value);
      return o("WAResultOrError").makeResult({
        hasFlagsRepliedFlagMixin: r.success,
        hasFlagsStarredFlagMixin: a.success,
      });
    }
    function p(e) {
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
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "flags");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "replied");
      return n.success ? o("WASmaxParseUtils").voidSuccess : n;
    }
    function f(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "flags");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "starred");
      return n.success ? o("WASmaxParseUtils").voidSuccess : n;
    }
    function g(e) {
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
              y,
              o("WASmaxMixins").optionalMerge(
                S,
                o("WASmaxMixins").optionalMerge(
                  b,
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
    function h(e) {
      var t = e.searchText,
        n = o("WASmaxJsx").smax(
          "question_responses",
          null,
          o("WASmaxJsx").smax("search", { text: o("WAWap").CUSTOM_STRING(t) }),
        );
      return n;
    }
    function y(e, t) {
      var n = h(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function C(e) {
      var t = e.questionResponsesBefore,
        n = o("WASmaxJsx").smax("question_responses", {
          before: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function b(e, t) {
      var n = C(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function v(e) {
      var t = e.contactsOrRepliedOrStarredFilterMixinMixinGroupArgs,
        n = o("WASmaxJsx").smax(
          "question_responses",
          null,
          R(o("WASmaxJsx").smax("filters", null), t),
        );
      return n;
    }
    function S(e, t) {
      var n = v(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function R(e, t) {
      if (t.isContactsFilterMixin) return D(e);
      if (t.isRepliedFilterMixin) return E(e);
      if (t.isStarredFilterMixin) return I(e);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function L() {
      var e = o("WASmaxJsx").smax(
        "filters",
        null,
        o("WASmaxJsx").smax("replied", null),
      );
      return e;
    }
    function E(e) {
      var t = L();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function k() {
      var e = o("WASmaxJsx").smax(
        "filters",
        null,
        o("WASmaxJsx").smax("starred", null),
      );
      return e;
    }
    function I(e) {
      var t = k();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function T() {
      var e = o("WASmaxJsx").smax(
        "filters",
        null,
        o("WASmaxJsx").smax("contacts", null),
      );
      return e;
    }
    function D(e) {
      var t = T();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendGetNewsletterResponsesRPC = e),
      (l.parseGetNewsletterResponsesResponseClientError = s),
      (l.parseGetNewsletterResponsesResponseServerError = u),
      (l.parseGetNewsletterResponsesResponseSuccess = d),
      (l.makeGetNewsletterResponsesRequest = g));
  },
  98,
);
