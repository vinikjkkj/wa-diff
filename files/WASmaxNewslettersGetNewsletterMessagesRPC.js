__d(
  "WASmaxNewslettersGetNewsletterMessagesRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInNewslettersBadRequestIQErrorResponseMixin",
    "WASmaxInNewslettersIQErrorInternalServerErrorMixin",
    "WASmaxInNewslettersItemNotFoundIQErrorResponseMixin",
    "WASmaxInNewslettersNewsletterMessageResponsePayloadMixin",
    "WASmaxInNewslettersNotAllowedIQErrorResponseMixin",
    "WASmaxInNewslettersRateLimitedIQErrorResponseMixin",
    "WASmaxInNewslettersSuspendedIQErrorResponseMixin",
    "WASmaxInNewslettersUnavailableForLegalReasonsResponseMixin",
    "WASmaxJsx",
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxMixins",
    "WASmaxOutNewslettersQueryNewsletterParamsMixin",
    "WASmaxOutNewslettersSelfIQGetRequestMixin",
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
          var n = m(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = d(r, n);
          if (a.success)
            return {
              name: "GetNewsletterMessagesResponseSuccess",
              value: a.value,
            };
          var i = u(r, n);
          if (i.success)
            return {
              name: "GetNewsletterMessagesResponseClientError",
              value: i.value,
            };
          var l = c(r, n);
          if (l.success)
            return {
              name: "GetNewsletterMessagesResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "GetNewsletterMessages",
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
      var r = h(e, t);
      return r.success
        ? o("WAResultOrError").makeResult({
            getNewsletterMessagesClientErrors: r.value,
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
      var l = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
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
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "messages");
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
      var l = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "result",
      );
      if (!s.success) return s;
      var u = o(
        "WASmaxInNewslettersNewsletterMessageResponsePayloadMixin",
      ).parseNewsletterMessageResponsePayloadMixin(r.value);
      return u.success
        ? o("WAResultOrError").makeResult({
            from: l.value,
            type: s.value,
            messagesNewsletterMessageResponsePayloadMixin: u.value,
          })
        : u;
    }
    function m(e) {
      var t = _(o("WASmaxJsx").smax("iq", null), e);
      return t;
    }
    function p(e) {
      var t = e.queryNewsletterParamsMixinArgs,
        n = e.newsletterMessageRequestPayloadMixinArgs,
        r = o(
          "WASmaxOutNewslettersSelfIQGetRequestMixin",
        ).mergeSelfIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            g(
              o(
                "WASmaxOutNewslettersQueryNewsletterParamsMixin",
              ).mergeQueryNewsletterParamsMixin(
                o("WASmaxJsx").smax("messages", null),
                t,
              ),
              n,
            ),
          ),
        );
      return r;
    }
    function _(e, t) {
      var n = p(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function f(e) {
      var t = e.messagesCount,
        n = e.messageDirectionsArgs,
        r = o("WASmaxMixins").optionalMerge(
          y,
          o("WASmaxJsx").smax("messages", { count: o("WAWap").INT(t) }),
          n,
        );
      return r;
    }
    function g(e, t) {
      var n = f(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function h(e, t) {
      var n = o(
        "WASmaxInNewslettersBadRequestIQErrorResponseMixin",
      ).parseBadRequestIQErrorResponseMixin(e, t);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "BadRequestIQErrorResponse",
          value: n.value,
        });
      var r = o(
        "WASmaxInNewslettersUnavailableForLegalReasonsResponseMixin",
      ).parseUnavailableForLegalReasonsResponseMixin(e, t);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "UnavailableForLegalReasonsResponse",
          value: r.value,
        });
      var a = o(
        "WASmaxInNewslettersItemNotFoundIQErrorResponseMixin",
      ).parseItemNotFoundIQErrorResponseMixin(e, t);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "ItemNotFoundIQErrorResponse",
          value: a.value,
        });
      var i = o(
        "WASmaxInNewslettersSuspendedIQErrorResponseMixin",
      ).parseSuspendedIQErrorResponseMixin(e, t);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "SuspendedIQErrorResponse",
          value: i.value,
        });
      var l = o(
        "WASmaxInNewslettersRateLimitedIQErrorResponseMixin",
      ).parseRateLimitedIQErrorResponseMixin(e, t);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "RateLimitedIQErrorResponse",
          value: l.value,
        });
      var s = o(
        "WASmaxInNewslettersNotAllowedIQErrorResponseMixin",
      ).parseNotAllowedIQErrorResponseMixin(e, t);
      return s.success
        ? o("WAResultOrError").makeResult({
            name: "NotAllowedIQErrorResponse",
            value: s.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "BadRequestIQErrorResponse",
              "UnavailableForLegalReasonsResponse",
              "ItemNotFoundIQErrorResponse",
              "SuspendedIQErrorResponse",
              "RateLimitedIQErrorResponse",
              "NotAllowedIQErrorResponse",
            ],
            [n, r, a, i, l, s],
          );
    }
    function y(e, t) {
      if (t.beforeMixin) return S(e, t.beforeMixin);
      if (t.afterMixin) return b(e, t.afterMixin);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function C(e) {
      var t = e.messagesAfter,
        n = o("WASmaxJsx").smax("messages", { after: o("WAWap").INT(t) });
      return n;
    }
    function b(e, t) {
      var n = C(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function v(e) {
      var t = e.messagesBefore,
        n = o("WASmaxJsx").smax("messages", { before: o("WAWap").INT(t) });
      return n;
    }
    function S(e, t) {
      var n = v(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendGetNewsletterMessagesRPC = e),
      (l.parseGetNewsletterMessagesResponseClientError = u),
      (l.parseGetNewsletterMessagesResponseServerError = c),
      (l.parseGetNewsletterMessagesResponseSuccess = d),
      (l.makeGetNewsletterMessagesRequest = m),
      (l.mergeNewsletterMessageRequestIQPayloadMixin = _),
      (l.mergeNewsletterMessageRequestPayloadMixin = g),
      (l.parseGetNewsletterMessagesClientErrors = h),
      (l.mergeMessageDirections = y),
      (l.mergeAfterMixinMixin = b),
      (l.mergeBeforeMixinMixin = S));
  },
  98,
);
