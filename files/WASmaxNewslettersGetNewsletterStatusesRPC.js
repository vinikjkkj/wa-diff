__d(
  "WASmaxNewslettersGetNewsletterStatusesRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInNewslettersBadRequestIQErrorResponseMixin",
    "WASmaxInNewslettersIQErrorInternalServerErrorMixin",
    "WASmaxInNewslettersItemNotFoundIQErrorResponseMixin",
    "WASmaxInNewslettersNewsletterStatusResponsePayloadMixin",
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
              name: "GetNewsletterStatusesResponseSuccess",
              value: a.value,
            };
          var i = u(r, n);
          if (i.success)
            return {
              name: "GetNewsletterStatusesResponseClientError",
              value: i.value,
            };
          var l = c(r, n);
          if (l.success)
            return {
              name: "GetNewsletterStatusesResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "GetNewsletterStatuses",
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
      var r = y(e, t);
      return r.success
        ? o("WAResultOrError").makeResult({
            getNewsletterStatusesClientErrors: r.value,
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
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "statuses");
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
        "WASmaxInNewslettersNewsletterStatusResponsePayloadMixin",
      ).parseNewsletterStatusResponsePayloadMixin(r.value);
      return u.success
        ? o("WAResultOrError").makeResult({
            from: l.value,
            type: s.value,
            statusesNewsletterStatusResponsePayloadMixin: u.value,
          })
        : u;
    }
    function m(e) {
      var t = _(o("WASmaxJsx").smax("iq", null), e);
      return t;
    }
    function p(e) {
      var t = e.queryNewsletterParamsMixinArgs,
        n = e.newsletterStatusRequestPayloadMixinArgs,
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
                o("WASmaxJsx").smax("statuses", null),
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
      var t = e.statusesCount,
        n = e.statusDirectionsArgs,
        r = o("WASmaxMixins").optionalMerge(
          h,
          o("WASmaxJsx").smax("statuses", { count: o("WAWap").INT(t) }),
          n,
        );
      return r;
    }
    function g(e, t) {
      var n = f(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function h(e, t) {
      if (t.statusBeforeMixin) return S(e, t.statusBeforeMixin);
      if (t.statusAfterMixin) return b(e, t.statusAfterMixin);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function y(e, t) {
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
    function C(e) {
      var t = e.statusesAfter,
        n = o("WASmaxJsx").smax("statuses", { after: o("WAWap").INT(t) });
      return n;
    }
    function b(e, t) {
      var n = C(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function v(e) {
      var t = e.statusesBefore,
        n = o("WASmaxJsx").smax("statuses", { before: o("WAWap").INT(t) });
      return n;
    }
    function S(e, t) {
      var n = v(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendGetNewsletterStatusesRPC = e),
      (l.parseGetNewsletterStatusesResponseClientError = u),
      (l.parseGetNewsletterStatusesResponseServerError = c),
      (l.parseGetNewsletterStatusesResponseSuccess = d),
      (l.makeGetNewsletterStatusesRequest = m),
      (l.mergeNewsletterStatusRequestIQPayloadMixin = _),
      (l.mergeNewsletterStatusRequestPayloadMixin = g),
      (l.mergeStatusDirections = h),
      (l.parseGetNewsletterStatusesClientErrors = y),
      (l.mergeStatusAfterMixinMixin = b),
      (l.mergeStatusBeforeMixinMixin = S));
  },
  98,
);
