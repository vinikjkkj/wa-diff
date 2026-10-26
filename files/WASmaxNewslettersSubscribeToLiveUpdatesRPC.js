__d(
  "WASmaxNewslettersSubscribeToLiveUpdatesRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxInNewslettersBadRequestIQErrorResponseMixin",
    "WASmaxInNewslettersIQResultResponseMixin",
    "WASmaxInNewslettersInternalServerErrorIQErrorResponseMixin",
    "WASmaxInNewslettersItemNotFoundIQErrorResponseMixin",
    "WASmaxInNewslettersRateLimitedIQErrorResponseMixin",
    "WASmaxInNewslettersSuspendedIQErrorResponseMixin",
    "WASmaxInNewslettersUnavailableForLegalReasonsResponseMixin",
    "WASmaxJsx",
    "WASmaxMixins",
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
              name: "SubscribeToLiveUpdatesResponseSuccess",
              value: a.value,
            };
          var i = u(r, n);
          if (i.success)
            return {
              name: "SubscribeToLiveUpdatesResponseClientError",
              value: i.value,
            };
          var l = c(r, n);
          if (l.success)
            return {
              name: "SubscribeToLiveUpdatesResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "SubscribeToLiveUpdates",
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
      var r = p(e, t);
      return r.success
        ? o("WAResultOrError").makeResult({
            subscribeToLiveUpdatesClientErrors: r.value,
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
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "live_updates");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(r.value, "duration", 30, 600);
      if (!a.success) return a;
      var i = o(
        "WASmaxInNewslettersIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ liveUpdatesDuration: a.value }, i.value),
          )
        : i;
    }
    function m(e) {
      var t = f(
        o("WASmaxJsx").smax(
          "iq",
          null,
          o("WASmaxJsx").smax("live_updates", null),
        ),
        e,
      );
      return t;
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
      var t = e.iqTo,
        n = h(
          o("WASmaxJsx").smax("iq", {
            to: o("WAWap").JID(t),
            xmlns: "newsletter",
          }),
        );
      return n;
    }
    function f(e, t) {
      var n = _(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function g() {
      var e = o("WASmaxJsx").smax("iq", {
        id: o("WAWap").generateId(),
        type: "set",
      });
      return e;
    }
    function h(e) {
      var t = g();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    ((l.sendSubscribeToLiveUpdatesRPC = e),
      (l.parseSubscribeToLiveUpdatesResponseClientError = u),
      (l.parseSubscribeToLiveUpdatesResponseServerError = c),
      (l.parseSubscribeToLiveUpdatesResponseSuccess = d),
      (l.makeSubscribeToLiveUpdatesRequest = m),
      (l.parseSubscribeToLiveUpdatesClientErrors = p),
      (l.mergeNewsletterIQSetRequestMixin = f),
      (l.mergeBaseIQSetRequestMixin = h));
  },
  98,
);
