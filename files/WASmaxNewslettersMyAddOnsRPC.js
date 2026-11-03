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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = y(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = m(r, n);
      if (a.success) return { name: "MyAddOnsResponseSuccess", value: a.value };
      var i = s(r, n);
      if (i.success)
        return { name: "MyAddOnsResponseClientError", value: i.value };
      var l = u(r, n);
      if (l.success)
        return { name: "MyAddOnsResponseServerError", value: l.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("MyAddOns", {
          Success: a,
          ClientError: i,
          ServerError: l,
        }),
      );
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = p(e, t);
      return r.success
        ? o("WAResultOrError").makeResult({ myAddonsClientErrors: r.value })
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
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = _(e);
      return (n.success, n);
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "messages");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrNewsletterJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").mapChildrenWithTag(e, "message", 0, 5e3, c);
      return r.success
        ? o("WAResultOrError").makeResult({ jid: n.value, message: r.value })
        : r;
    }
    function m(e, t) {
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
        d,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, { myAddonsMessages: i.value }),
          )
        : i;
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
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(
        e,
        "server_id",
        99,
        2147476647,
      );
      if (!n.success) return n;
      var r = h(e),
        a = g(e);
      return o("WAResultOrError").makeResult({
        serverId: n.value,
        newsletterMyReactionMixin: r.success ? r.value : null,
        newsletterMyPollVoteMixin: a.success ? a.value : null,
      });
    }
    function f(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "vote");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytesRange(e, 32, 32);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function g(e) {
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
        f,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            votesT: r.value,
            votesVote: a.value,
          })
        : a;
    }
    function h(e) {
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
    function y(e) {
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
      (l.parseMyAddOnsResponseClientError = s),
      (l.parseMyAddOnsResponseServerError = u),
      (l.parseMyAddOnsResponseSuccessMyAddonsMessagesMessage = c),
      (l.parseMyAddOnsResponseSuccessMyAddonsMessages = d),
      (l.parseMyAddOnsResponseSuccess = m),
      (l.parseMyAddonsClientErrors = p),
      (l.parseNewsletterMessageMyAddOnsMixin = _),
      (l.parseNewsletterMyPollVoteVotesVote = f),
      (l.parseNewsletterMyPollVoteMixin = g),
      (l.parseNewsletterMyReactionMixin = h),
      (l.makeMyAddOnsRequest = y));
  },
  98,
);
