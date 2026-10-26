__d(
  "WASmaxNewslettersGetNewsletterStatusUpdatesRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxInNewslettersBadRequestIQErrorResponseMixin",
    "WASmaxInNewslettersIQResultResponseMixin",
    "WASmaxInNewslettersInternalServerErrorIQErrorResponseMixin",
    "WASmaxInNewslettersItemNotFoundIQErrorResponseMixin",
    "WASmaxInNewslettersNewsletterStatusResponsePayloadMixin",
    "WASmaxInNewslettersRateLimitedIQErrorResponseMixin",
    "WASmaxInNewslettersSuspendedIQErrorResponseMixin",
    "WASmaxInNewslettersUnavailableForLegalReasonsResponseMixin",
    "WASmaxJsx",
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxMixins",
    "WASmaxOutNewslettersNewsletterIQGetRequestMixin",
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
              name: "GetNewsletterStatusUpdatesResponseSuccess",
              value: a.value,
            };
          var i = u(r, n);
          if (i.success)
            return {
              name: "GetNewsletterStatusUpdatesResponseClientError",
              value: i.value,
            };
          var l = c(r, n);
          if (l.success)
            return {
              name: "GetNewsletterStatusUpdatesResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "GetNewsletterStatusUpdates",
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
      var r = _(e, t);
      return r.success
        ? o("WAResultOrError").makeResult({
            getNewsletterStatusUpdatesClientErrors: r.value,
          })
        : r;
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInNewslettersInternalServerErrorIQErrorResponseMixin",
      ).parseInternalServerErrorIQErrorResponseMixin(e, t);
      return (r.success, r);
    }
    function d(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "status_updates");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "statuses");
      if (!a.success) return a;
      var i = o(
        "WASmaxInNewslettersNewsletterStatusResponsePayloadMixin",
      ).parseNewsletterStatusResponsePayloadMixin(a.value);
      if (!i.success) return i;
      var l = o(
        "WASmaxInNewslettersIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                statusUpdatesStatusesNewsletterStatusResponsePayloadMixin:
                  i.value,
              },
              l.value,
            ),
          )
        : l;
    }
    function m(e) {
      var t = e.statusUpdatesCount,
        n = e.statusUpdatesSince,
        r = e.statusUpdatesBeforeOrAfterMixinMixinGroupArgs,
        a = o(
          "WASmaxOutNewslettersNewsletterIQGetRequestMixin",
        ).mergeNewsletterIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            p(
              o("WASmaxJsx").smax("status_updates", {
                count: o("WAWap").INT(t),
                since: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, n),
              }),
              r,
            ),
          ),
          e,
        );
      return a;
    }
    function p(e, t) {
      if (t.statusUpdatesBeforeMixin) return y(e, t.statusUpdatesBeforeMixin);
      if (t.statusUpdatesAfterMixin) return g(e, t.statusUpdatesAfterMixin);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function _(e, t) {
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
      return l.success
        ? o("WAResultOrError").makeResult({
            name: "RateLimitedIQErrorResponse",
            value: l.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "BadRequestIQErrorResponse",
              "UnavailableForLegalReasonsResponse",
              "ItemNotFoundIQErrorResponse",
              "SuspendedIQErrorResponse",
              "RateLimitedIQErrorResponse",
            ],
            [n, r, a, i, l],
          );
    }
    function f(e) {
      var t = e.statusUpdatesAfter,
        n = o("WASmaxJsx").smax("status_updates", { after: o("WAWap").INT(t) });
      return n;
    }
    function g(e, t) {
      var n = f(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function h(e) {
      var t = e.statusUpdatesBefore,
        n = o("WASmaxJsx").smax("status_updates", {
          before: o("WAWap").INT(t),
        });
      return n;
    }
    function y(e, t) {
      var n = h(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendGetNewsletterStatusUpdatesRPC = e),
      (l.parseGetNewsletterStatusUpdatesResponseClientError = u),
      (l.parseGetNewsletterStatusUpdatesResponseServerError = c),
      (l.parseGetNewsletterStatusUpdatesResponseSuccess = d),
      (l.makeGetNewsletterStatusUpdatesRequest = m),
      (l.mergeStatusUpdatesBeforeOrAfterMixinMixinGroup = p),
      (l.parseGetNewsletterStatusUpdatesClientErrors = _),
      (l.mergeStatusUpdatesAfterMixinMixin = g),
      (l.mergeStatusUpdatesBeforeMixinMixin = y));
  },
  98,
);
