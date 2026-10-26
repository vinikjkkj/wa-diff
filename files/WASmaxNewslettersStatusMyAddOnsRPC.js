__d(
  "WASmaxNewslettersStatusMyAddOnsRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxInNewslettersBadRequestIQErrorResponseMixin",
    "WASmaxInNewslettersIQResultResponseMixin",
    "WASmaxInNewslettersInternalServerErrorIQErrorResponseMixin",
    "WASmaxInNewslettersItemNotFoundIQErrorResponseMixin",
    "WASmaxInNewslettersRateLimitedIQErrorResponseMixin",
    "WASmaxInNewslettersUnauthorizedIQErrorResponseMixin",
    "WASmaxJsx",
    "WASmaxOutNewslettersSelfIQGetRequestMixin",
    "WASmaxParseJid",
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
            a = p(r, n);
          if (a.success)
            return { name: "StatusMyAddOnsResponseSuccess", value: a.value };
          var i = u(r, n);
          if (i.success)
            return {
              name: "StatusMyAddOnsResponseClientError",
              value: i.value,
            };
          var l = c(r, n);
          if (l.success)
            return {
              name: "StatusMyAddOnsResponseServerError",
              value: l.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("StatusMyAddOns", {
              Success: a,
              ClientError: i,
              ServerError: l,
            }),
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
            statusMyAddonsClientErrors: r.value,
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
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
      if (!t.success) return t;
      var n = f(e);
      return (n.success, n);
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "statuses");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrNewsletterJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(e, "status", 0, 5e3, d);
      return r.success
        ? o("WAResultOrError").makeResult({ jid: n.value, status: r.value })
        : r;
    }
    function p(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "my_addons");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "type",
        "status",
      );
      if (!a.success) return a;
      var i = o(
        "WASmaxInNewslettersIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "statuses",
        0,
        5e3,
        m,
      );
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ myAddonsType: a.value }, i.value, {
              myAddonsStatuses: l.value,
            }),
          )
        : l;
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
        "WASmaxInNewslettersUnauthorizedIQErrorResponseMixin",
      ).parseUnauthorizedIQErrorResponseMixin(e, t);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "UnauthorizedIQErrorResponse",
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
        "WASmaxInNewslettersRateLimitedIQErrorResponseMixin",
      ).parseRateLimitedIQErrorResponseMixin(e, t);
      return i.success
        ? o("WAResultOrError").makeResult({
            name: "RateLimitedIQErrorResponse",
            value: i.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "BadRequestIQErrorResponse",
              "UnauthorizedIQErrorResponse",
              "ItemNotFoundIQErrorResponse",
              "RateLimitedIQErrorResponse",
            ],
            [n, r, a, i],
          );
    }
    function f(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(
        e,
        "server_id",
        99,
        2147476647,
      );
      if (!n.success) return n;
      var r = g(e);
      return o("WAResultOrError").makeResult({
        serverId: n.value,
        statusNewsletterMyReactionMixin: r.success ? r.value : null,
      });
    }
    function g(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "reaction");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(n.value, "code");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "t",
        1577865600,
        4102473600,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            reactionCode: r.value,
            reactionT: a.value,
          })
        : a;
    }
    function h(e) {
      var t = e.myAddonsLimit,
        n = e.myAddonsJid,
        r = o(
          "WASmaxOutNewslettersSelfIQGetRequestMixin",
        ).mergeSelfIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax("my_addons", {
              type: "status",
              limit: o("WAWap").INT(t),
              jid: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, n),
            }),
          ),
        );
      return r;
    }
    ((l.sendStatusMyAddOnsRPC = e),
      (l.parseStatusMyAddOnsResponseClientError = u),
      (l.parseStatusMyAddOnsResponseServerError = c),
      (l.parseStatusMyAddOnsResponseSuccessMyAddonsStatusesStatus = d),
      (l.parseStatusMyAddOnsResponseSuccessMyAddonsStatuses = m),
      (l.parseStatusMyAddOnsResponseSuccess = p),
      (l.parseStatusMyAddonsClientErrors = _),
      (l.parseStatusNewsletterMyAddOnsMixin = f),
      (l.parseStatusNewsletterMyReactionMixin = g),
      (l.makeStatusMyAddOnsRequest = h));
  },
  98,
);
