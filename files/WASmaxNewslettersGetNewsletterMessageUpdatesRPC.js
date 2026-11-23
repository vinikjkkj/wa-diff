__d(
  "WASmaxNewslettersGetNewsletterMessageUpdatesRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxInNewslettersBadRequestIQErrorResponseMixin",
    "WASmaxInNewslettersIQResultResponseMixin",
    "WASmaxInNewslettersInternalServerErrorIQErrorResponseMixin",
    "WASmaxInNewslettersItemNotFoundIQErrorResponseMixin",
    "WASmaxInNewslettersNewsletterMessageResponsePayloadMixin",
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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = d(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = c(r, n);
      if (a.success)
        return {
          name: "GetNewsletterMessageUpdatesResponseSuccess",
          value: a.value,
        };
      var i = s(r, n);
      if (i.success)
        return {
          name: "GetNewsletterMessageUpdatesResponseClientError",
          value: i.value,
        };
      var l = u(r, n);
      if (l.success)
        return {
          name: "GetNewsletterMessageUpdatesResponseServerError",
          value: l.value,
        };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing(
          "GetNewsletterMessageUpdates",
          { Success: a, ClientError: i, ServerError: l },
        ),
      );
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = p(e, t);
      return r.success
        ? o("WAResultOrError").makeResult({
            getNewsletterMessageUpdatesClientErrors: r.value,
          })
        : r;
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o(
        "WASmaxInNewslettersInternalServerErrorIQErrorResponseMixin",
      ).parseInternalServerErrorIQErrorResponseMixin(e, t);
      return (r.success, r);
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "message_updates");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "messages");
      if (!a.success) return a;
      var i = o(
        "WASmaxInNewslettersNewsletterMessageResponsePayloadMixin",
      ).parseNewsletterMessageResponsePayloadMixin(a.value);
      if (!i.success) return i;
      var l = o(
        "WASmaxInNewslettersIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                messageUpdatesMessagesNewsletterMessageResponsePayloadMixin:
                  i.value,
              },
              l.value,
            ),
          )
        : l;
    }
    function d(e) {
      var t = e.messageUpdatesCount,
        n = e.messageUpdatesSince,
        r = e.messageUpdatesBeforeOrAfterMixinMixinGroupArgs,
        a = o(
          "WASmaxOutNewslettersNewsletterIQGetRequestMixin",
        ).mergeNewsletterIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            m(
              o("WASmaxJsx").smax("message_updates", {
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
    function m(e, t) {
      if (t.messageUpdatesBeforeMixin) return h(e, t.messageUpdatesBeforeMixin);
      if (t.messageUpdatesAfterMixin) return f(e, t.messageUpdatesAfterMixin);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function p(e, t) {
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
    function _(e) {
      var t = e.messageUpdatesAfter,
        n = o("WASmaxJsx").smax("message_updates", {
          after: o("WAWap").INT(t),
        });
      return n;
    }
    function f(e, t) {
      var n = _(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function g(e) {
      var t = e.messageUpdatesBefore,
        n = o("WASmaxJsx").smax("message_updates", {
          before: o("WAWap").INT(t),
        });
      return n;
    }
    function h(e, t) {
      var n = g(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendGetNewsletterMessageUpdatesRPC = e),
      (l.parseGetNewsletterMessageUpdatesResponseClientError = s),
      (l.parseGetNewsletterMessageUpdatesResponseServerError = u),
      (l.parseGetNewsletterMessageUpdatesResponseSuccess = c),
      (l.makeGetNewsletterMessageUpdatesRequest = d));
  },
  98,
);
