__d(
  "WASmaxStatusPublishPostNewsletterStatusRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxInStatusPublishStatusAckMixin",
    "WASmaxInStatusPublishStatusNegativeAckMixin",
    "WASmaxJsx",
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxMixins",
    "WASmaxOutStatusPublishStatusContentTypeMediaMixin",
    "WASmaxOutStatusPublishStatusContentTypeReactionMixin",
    "WASmaxOutStatusPublishStatusContentTypeTextMixin",
    "WASmaxOutStatusPublishStatusRevokeMixin",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = c(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = s(r, n);
      if (a.success)
        return { name: "PostNewsletterStatusResponseNegative", value: a.value };
      var i = u(r, n);
      if (i.success)
        return { name: "PostNewsletterStatusResponseSuccess", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("PostNewsletterStatus", {
          Negative: a,
          Success: i,
        }),
      );
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o(
        "WASmaxInStatusPublishStatusNegativeAckMixin",
      ).parseStatusNegativeAckMixin(e, t);
      return (r.success, r);
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "server_id",
        99,
        2147476647,
      );
      if (!r.success) return r;
      var a = o("WASmaxInStatusPublishStatusAckMixin").parseStatusAckMixin(
        e,
        t,
      );
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ serverId: r.value }, a.value),
          )
        : a;
    }
    function c(e) {
      var t = e.statusTo,
        n =
          e.clientPostNewsletterStatusAndServerOrPostNewsletterStatusIDMixinGroupArgs,
        r = d(o("WASmaxJsx").smax("status", { to: o("WAWap").JID(t) }), n);
      return r;
    }
    function d(e, t) {
      if (t.postNewsletterStatusClientAndServerID)
        return p(e, t.postNewsletterStatusClientAndServerID);
      if (t.postNewsletterStatusClientID)
        return f(e, t.postNewsletterStatusClientID);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function m(e) {
      var t = e.statusId,
        n = e.statusServerId,
        r =
          e.statusNewsletterReactionOrReactionRevokeOrQuestionResponseMixinGroupArgs,
        a = y(
          o("WASmaxJsx").smax("status", {
            id: o("WAWap").STANZA_ID(t),
            server_id: o("WAWap").INT(n),
          }),
          r,
        );
      return a;
    }
    function p(e, t) {
      var n = m(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function _(e) {
      var t = e.statusId,
        n = e.hasStatusAIContentMeta,
        r = e.newsletterClientIdContentArgs,
        a = v(
          o("WASmaxMixins").optionalMerge(
            h,
            o("WASmaxJsx").smax("status", { id: o("WAWap").STANZA_ID(t) }),
            n,
          ),
          r,
        );
      return a;
    }
    function f(e, t) {
      var n = _(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function g() {
      var e = o("WASmaxJsx").smax(
        "status",
        null,
        o("WASmaxJsx").smax(
          "meta",
          null,
          o("WASmaxJsx").smax("ai_content", null),
        ),
      );
      return e;
    }
    function h(e) {
      var t = g();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function y(e, t) {
      if (t.statusNewsletterReaction) return D(e, t.statusNewsletterReaction);
      if (t.isStatusNewsletterReactionRevoke) return b(e);
      if (t.statusNewsletterQuestionResponse)
        return I(e, t.statusNewsletterQuestionResponse);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function C() {
      var e = o(
        "WASmaxOutStatusPublishStatusContentTypeReactionMixin",
      ).mergeStatusContentTypeReactionMixin(
        o("WASmaxOutStatusPublishStatusRevokeMixin").mergeStatusRevokeMixin(
          o("WASmaxJsx").smax(
            "status",
            null,
            o("WASmaxJsx").smax("reaction", null),
          ),
        ),
      );
      return e;
    }
    function b(e) {
      var t = C();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function v(e, t) {
      if (t.isStatusNewsletterRevoke) return $(e);
      if (t.statusNewsletterQuestionPublish)
        return R(e, t.statusNewsletterQuestionPublish);
      if (t.statusNewsletterQuestionResharePublish)
        return E(e, t.statusNewsletterQuestionResharePublish);
      if (t.statusNewsletterText) return N(e, t.statusNewsletterText);
      if (t.statusNewsletterMediaPublish)
        return V(e, t.statusNewsletterMediaPublish);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function S(e) {
      var t = F(V(o("WASmaxJsx").smax("status", null), e));
      return t;
    }
    function R(e, t) {
      var n = S(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function L(e) {
      var t = B(V(o("WASmaxJsx").smax("status", null), e), e);
      return t;
    }
    function E(e, t) {
      var n = L(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function k(e) {
      var t = e.statusServerId,
        n = e.newsletterPlaintextPayloadMixinArgs,
        r = q(
          o(
            "WASmaxOutStatusPublishStatusContentTypeTextMixin",
          ).mergeStatusContentTypeTextMixin(
            o("WASmaxJsx").smax(
              "status",
              { server_id: o("WAWap").INT(t) },
              j(o("WASmaxJsx").smax("plaintext", null), n),
            ),
          ),
          e,
        );
      return r;
    }
    function I(e, t) {
      var n = k(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function T(e) {
      var t = e.reactionCode,
        n = o(
          "WASmaxOutStatusPublishStatusContentTypeReactionMixin",
        ).mergeStatusContentTypeReactionMixin(
          o("WASmaxJsx").smax(
            "status",
            null,
            o("WASmaxJsx").smax("reaction", {
              code: o("WAWap").CUSTOM_STRING(t),
            }),
          ),
        );
      return n;
    }
    function D(e, t) {
      var n = T(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function x() {
      var e = o(
        "WASmaxOutStatusPublishStatusContentTypeTextMixin",
      ).mergeStatusContentTypeTextMixin(
        w(
          o("WASmaxJsx").smax(
            "status",
            null,
            o("WASmaxJsx").smax("plaintext", null),
          ),
        ),
      );
      return e;
    }
    function $(e) {
      var t = x();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function P(e) {
      var t = e.newsletterPlaintextPayloadMixinArgs,
        n = o(
          "WASmaxOutStatusPublishStatusContentTypeTextMixin",
        ).mergeStatusContentTypeTextMixin(
          o("WASmaxJsx").smax(
            "status",
            null,
            j(o("WASmaxJsx").smax("plaintext", null), t),
          ),
        );
      return n;
    }
    function N(e, t) {
      var n = P(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function M() {
      var e = o("WASmaxJsx").smax("status", { edit: "8" });
      return e;
    }
    function w(e) {
      var t = M();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function A() {
      var e = o("WASmaxJsx").smax(
        "status",
        null,
        o("WASmaxJsx").smax("meta", { interaction_type: "question" }),
      );
      return e;
    }
    function F(e) {
      var t = A();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function O(e) {
      var t = e.metaParentServerId,
        n = e.metaResponseServerId,
        r = o("WASmaxJsx").smax(
          "status",
          null,
          o("WASmaxJsx").smax("meta", {
            interaction_type: "question_reshare",
            parent_server_id: o("WAWap").INT(t),
            response_server_id: o("WAWap").CUSTOM_STRING(n),
          }),
        );
      return r;
    }
    function B(e, t) {
      var n = O(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function W(e) {
      var t = e.metaResponseServerId,
        n = o("WASmaxJsx").smax(
          "status",
          null,
          o("WASmaxJsx").smax("meta", {
            interaction_type: "question_response",
            response_server_id: o("WASmaxAttrs").OPTIONAL(
              o("WAWap").CUSTOM_STRING,
              t,
            ),
          }),
        );
      return n;
    }
    function q(e, t) {
      var n = W(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function U(e) {
      var t = e.statusMediaId,
        n = G(
          o("WASmaxJsx").smax("status", {
            media_id: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t),
          }),
          e,
        );
      return n;
    }
    function V(e, t) {
      var n = U(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function H(e) {
      var t = e.plaintextMediatype,
        n = e.newsletterPlaintextPayloadMixinArgs,
        r = o(
          "WASmaxOutStatusPublishStatusContentTypeMediaMixin",
        ).mergeStatusContentTypeMediaMixin(
          o("WASmaxJsx").smax(
            "status",
            null,
            j(
              o("WASmaxJsx").smax("plaintext", {
                mediatype: o("WAWap").CUSTOM_STRING(t),
              }),
              n,
            ),
          ),
        );
      return r;
    }
    function G(e, t) {
      var n = H(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function z(e) {
      var t = e.plaintextElementValue,
        n = o("WASmaxJsx").smax("plaintext", null, t);
      return n;
    }
    function j(e, t) {
      var n = z(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendPostNewsletterStatusRPC = e),
      (l.parsePostNewsletterStatusResponseNegative = s),
      (l.parsePostNewsletterStatusResponseSuccess = u),
      (l.makePostNewsletterStatusRequest = c));
  },
  98,
);
