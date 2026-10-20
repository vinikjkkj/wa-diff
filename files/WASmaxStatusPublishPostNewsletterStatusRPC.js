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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = d(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = u(r, n);
          if (a.success)
            return {
              name: "PostNewsletterStatusResponseNegative",
              value: a.value,
            };
          var i = c(r, n);
          if (i.success)
            return {
              name: "PostNewsletterStatusResponseSuccess",
              value: i.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("PostNewsletterStatus", {
              Negative: a,
              Success: i,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o(
        "WASmaxInStatusPublishStatusNegativeAckMixin",
      ).parseStatusNegativeAckMixin(e, t);
      return (r.success, r);
    }
    function c(e, t) {
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
    function d(e) {
      var t = e.statusTo,
        n =
          e.clientPostNewsletterStatusAndServerOrPostNewsletterStatusIDMixinGroupArgs,
        r = m(o("WASmaxJsx").smax("status", { to: o("WAWap").JID(t) }), n);
      return r;
    }
    function m(e, t) {
      if (t.postNewsletterStatusClientAndServerID)
        return _(e, t.postNewsletterStatusClientAndServerID);
      if (t.postNewsletterStatusClientID)
        return g(e, t.postNewsletterStatusClientID);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function p(e) {
      var t = e.statusId,
        n = e.statusServerId,
        r =
          e.statusNewsletterReactionOrReactionRevokeOrQuestionResponseMixinGroupArgs,
        a = C(
          o("WASmaxJsx").smax("status", {
            id: o("WAWap").STANZA_ID(t),
            server_id: o("WAWap").INT(n),
          }),
          r,
        );
      return a;
    }
    function _(e, t) {
      var n = p(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function f(e) {
      var t = e.statusId,
        n = e.hasStatusAIContentMeta,
        r = e.newsletterClientIdContentArgs,
        a = S(
          o("WASmaxMixins").optionalMerge(
            y,
            o("WASmaxJsx").smax("status", { id: o("WAWap").STANZA_ID(t) }),
            n,
          ),
          r,
        );
      return a;
    }
    function g(e, t) {
      var n = f(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function h() {
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
    function y(e) {
      var t = h();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function C(e, t) {
      if (t.statusNewsletterReaction) return x(e, t.statusNewsletterReaction);
      if (t.isStatusNewsletterReactionRevoke) return v(e);
      if (t.statusNewsletterQuestionResponse)
        return T(e, t.statusNewsletterQuestionResponse);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function b() {
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
    function v(e) {
      var t = b();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function S(e, t) {
      if (t.isStatusNewsletterRevoke) return P(e);
      if (t.statusNewsletterQuestionPublish)
        return L(e, t.statusNewsletterQuestionPublish);
      if (t.statusNewsletterQuestionResharePublish)
        return k(e, t.statusNewsletterQuestionResharePublish);
      if (t.statusNewsletterText) return M(e, t.statusNewsletterText);
      if (t.statusNewsletterMediaPublish)
        return H(e, t.statusNewsletterMediaPublish);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function R(e) {
      var t = O(H(o("WASmaxJsx").smax("status", null), e));
      return t;
    }
    function L(e, t) {
      var n = R(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function E(e) {
      var t = W(H(o("WASmaxJsx").smax("status", null), e), e);
      return t;
    }
    function k(e, t) {
      var n = E(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function I(e) {
      var t = e.statusServerId,
        n = e.newsletterPlaintextPayloadMixinArgs,
        r = U(
          o(
            "WASmaxOutStatusPublishStatusContentTypeTextMixin",
          ).mergeStatusContentTypeTextMixin(
            o("WASmaxJsx").smax(
              "status",
              { server_id: o("WAWap").INT(t) },
              K(o("WASmaxJsx").smax("plaintext", null), n),
            ),
          ),
          e,
        );
      return r;
    }
    function T(e, t) {
      var n = I(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function D(e) {
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
    function x(e, t) {
      var n = D(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function $() {
      var e = o(
        "WASmaxOutStatusPublishStatusContentTypeTextMixin",
      ).mergeStatusContentTypeTextMixin(
        A(
          o("WASmaxJsx").smax(
            "status",
            null,
            o("WASmaxJsx").smax("plaintext", null),
          ),
        ),
      );
      return e;
    }
    function P(e) {
      var t = $();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function N(e) {
      var t = e.newsletterPlaintextPayloadMixinArgs,
        n = o(
          "WASmaxOutStatusPublishStatusContentTypeTextMixin",
        ).mergeStatusContentTypeTextMixin(
          o("WASmaxJsx").smax(
            "status",
            null,
            K(o("WASmaxJsx").smax("plaintext", null), t),
          ),
        );
      return n;
    }
    function M(e, t) {
      var n = N(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function w() {
      var e = o("WASmaxJsx").smax("status", { edit: "8" });
      return e;
    }
    function A(e) {
      var t = w();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function F() {
      var e = o("WASmaxJsx").smax(
        "status",
        null,
        o("WASmaxJsx").smax("meta", { interaction_type: "question" }),
      );
      return e;
    }
    function O(e) {
      var t = F();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function B(e) {
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
    function W(e, t) {
      var n = B(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function q(e) {
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
    function U(e, t) {
      var n = q(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function V(e) {
      var t = e.statusMediaId,
        n = z(
          o("WASmaxJsx").smax("status", {
            media_id: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t),
          }),
          e,
        );
      return n;
    }
    function H(e, t) {
      var n = V(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function G(e) {
      var t = e.plaintextMediatype,
        n = e.newsletterPlaintextPayloadMixinArgs,
        r = o(
          "WASmaxOutStatusPublishStatusContentTypeMediaMixin",
        ).mergeStatusContentTypeMediaMixin(
          o("WASmaxJsx").smax(
            "status",
            null,
            K(
              o("WASmaxJsx").smax("plaintext", {
                mediatype: o("WAWap").CUSTOM_STRING(t),
              }),
              n,
            ),
          ),
        );
      return r;
    }
    function z(e, t) {
      var n = G(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function j(e) {
      var t = e.plaintextElementValue,
        n = o("WASmaxJsx").smax("plaintext", null, t);
      return n;
    }
    function K(e, t) {
      var n = j(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendPostNewsletterStatusRPC = e),
      (l.parsePostNewsletterStatusResponseNegative = u),
      (l.parsePostNewsletterStatusResponseSuccess = c),
      (l.makePostNewsletterStatusRequest = d),
      (l.mergeClientPostNewsletterStatusAndServerOrPostNewsletterStatusIDMixinGroup =
        m),
      (l.mergePostNewsletterStatusClientAndServerIDMixin = _),
      (l.mergePostNewsletterStatusClientIDMixin = g),
      (l.mergeStatusAIContentMetaMixin = y),
      (l.mergeStatusNewsletterReactionOrReactionRevokeOrQuestionResponseMixinGroup =
        C),
      (l.mergeStatusNewsletterReactionRevokeMixin = v),
      (l.mergeNewsletterClientIdContent = S),
      (l.mergeStatusNewsletterQuestionPublishMixin = L),
      (l.mergeStatusNewsletterQuestionResharePublishMixin = k),
      (l.mergeStatusNewsletterQuestionResponseMixin = T),
      (l.mergeStatusNewsletterReactionMixin = x),
      (l.mergeStatusNewsletterRevokeMixin = P),
      (l.mergeStatusNewsletterTextMixin = M),
      (l.mergeStatusAdminRevokeMixin = A),
      (l.mergeStatusNewsletterInteractionTypeQuestionMixin = O),
      (l.mergeStatusNewsletterInteractionTypeQuestionReshareMixin = W),
      (l.mergeStatusNewsletterInteractionTypeQuestionResponseMixin = U),
      (l.mergeStatusNewsletterMediaPublishMixin = H),
      (l.mergeStatusNewsletterMediaMixin = z),
      (l.mergeNewsletterPlaintextPayloadMixin = K));
  },
  98,
);
