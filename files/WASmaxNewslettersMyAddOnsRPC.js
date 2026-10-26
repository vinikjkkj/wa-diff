__d(
  "WASmaxNewslettersMyAddOnsRPC",
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
          var n = C(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = p(r, n);
          if (a.success)
            return { name: "MyAddOnsResponseSuccess", value: a.value };
          var i = u(r, n);
          if (i.success)
            return { name: "MyAddOnsResponseClientError", value: i.value };
          var l = c(r, n);
          if (l.success)
            return { name: "MyAddOnsResponseServerError", value: l.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("MyAddOns", {
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
        ? o("WAResultOrError").makeResult({ myAddonsClientErrors: r.value })
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
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = f(e);
      return (n.success, n);
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "messages");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrNewsletterJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(e, "message", 0, 5e3, d);
      return r.success
        ? o("WAResultOrError").makeResult({ jid: n.value, message: r.value })
        : r;
    }
    function p(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "my_addons");
      if (!r.success) return r;
      var a = o(
        "WASmaxInNewslettersIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "messages",
        0,
        5e3,
        m,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, { myAddonsMessages: i.value }),
          )
        : i;
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
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(
        e,
        "server_id",
        99,
        2147476647,
      );
      if (!n.success) return n;
      var r = y(e),
        a = h(e);
      return o("WAResultOrError").makeResult({
        serverId: n.value,
        newsletterMyReactionMixin: r.success ? r.value : null,
        newsletterMyPollVoteMixin: a.success ? a.value : null,
      });
    }
    function g(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "vote");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytesRange(e, 32, 32);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "votes");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(n.value, "t", 0, void 0);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(
        n.value,
        "vote",
        0,
        1e3,
        g,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            votesT: r.value,
            votesVote: a.value,
          })
        : a;
    }
    function y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "reaction");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(n.value, "code");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(n.value, "t", 0, void 0);
      return a.success
        ? o("WAResultOrError").makeResult({
            reactionCode: r.value,
            reactionT: a.value,
          })
        : a;
    }
    function C(e) {
      var t = e.myAddonsLimit,
        n = e.myAddonsJid,
        r = o(
          "WASmaxOutNewslettersSelfIQGetRequestMixin",
        ).mergeSelfIQGetRequestMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax("my_addons", {
              limit: o("WAWap").INT(t),
              jid: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, n),
            }),
          ),
        );
      return r;
    }
    ((l.sendMyAddOnsRPC = e),
      (l.parseMyAddOnsResponseClientError = u),
      (l.parseMyAddOnsResponseServerError = c),
      (l.parseMyAddOnsResponseSuccessMyAddonsMessagesMessage = d),
      (l.parseMyAddOnsResponseSuccessMyAddonsMessages = m),
      (l.parseMyAddOnsResponseSuccess = p),
      (l.parseMyAddonsClientErrors = _),
      (l.parseNewsletterMessageMyAddOnsMixin = f),
      (l.parseNewsletterMyPollVoteVotesVote = g),
      (l.parseNewsletterMyPollVoteMixin = h),
      (l.parseNewsletterMyReactionMixin = y),
      (l.makeMyAddOnsRequest = C));
  },
  98,
);
