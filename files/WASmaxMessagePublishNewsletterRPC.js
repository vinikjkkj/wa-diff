__d(
  "WASmaxMessagePublishNewsletterRPC",
  [
    "WAComms",
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxInMessagePublishAckMixin",
    "WASmaxInMessagePublishNegativeAckMixin",
    "WASmaxJsx",
    "WASmaxMixinGroupExhaustiveError",
    "WASmaxMixins",
    "WASmaxOutMessagePublishAdminRevokeMixin",
    "WASmaxOutMessagePublishContentTypeMediaMixin",
    "WASmaxOutMessagePublishContentTypePollCreationMixin",
    "WASmaxOutMessagePublishContentTypePollResultSnapshotMixin",
    "WASmaxOutMessagePublishContentTypePollVoteMixin",
    "WASmaxOutMessagePublishContentTypeReactionMixin",
    "WASmaxOutMessagePublishContentTypeTextMixin",
    "WASmaxOutMessagePublishMessageAssociationTypeMixin",
    "WASmaxOutMessagePublishMetaPremiumTypeMixin",
    "WASmaxOutMessagePublishMsgMetaOriginMixin",
    "WASmaxOutMessagePublishRevokeMixin",
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
            return { name: "NewsletterResponseNegative", value: a.value };
          var i = c(r, n);
          if (i.success)
            return { name: "NewsletterResponseSuccess", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("Newsletter", {
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
      var r = o("WASmaxInMessagePublishNegativeAckMixin").parseNegativeAckMixin(
        e,
        t,
      );
      return (r.success, r);
    }
    function c(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = m(e, t);
      return r.success
        ? o("WAResultOrError").makeResult({
            newsletterQuestionResponseOrNewsletterScheduledMessageOrNewsletterMessageAckMixinGroup:
              r.value,
          })
        : r;
    }
    function d(e) {
      var t = e.messageTo,
        n = e.clientNewsletterAndServerOrNewsletterIDMixinGroupArgs,
        r = _(o("WASmaxJsx").smax("message", { to: o("WAWap").JID(t) }), n);
      return r;
    }
    function m(e, t) {
      var n = ce(e, t);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterQuestionResponseAck",
          value: n.value,
        });
      var r = p(e, t);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterScheduledMessageAck",
          value: r.value,
        });
      var a = ue(e, t);
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "NewsletterMessageAck",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["QuestionResponseAck", "ScheduledMessageAck", "MessageAck"],
            [n, r, a],
          );
    }
    function p(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(
        e,
        "scheduled_server_id",
        99,
        2147476647,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "server_id",
        99,
        2147476647,
      );
      if (!a.success) return a;
      var i = o("WASmaxInMessagePublishAckMixin").parseAckMixin(e, t);
      if (!i.success) return i;
      var l = de(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          { scheduledServerId: r.value, serverId: a.value },
          i.value,
          { newsletterSenderRCATAckMixin: l.success ? l.value : null },
        ),
      );
    }
    function _(e, t) {
      if (t.newsletterClientAndServerID)
        return g(e, t.newsletterClientAndServerID);
      if (t.newsletterClientID) return C(e, t.newsletterClientID);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function f(e) {
      var t = e.messageId,
        n = e.messageServerId,
        r = e.newsletterClientAndServerIdContentArgs,
        a = h(
          o("WASmaxJsx").smax("message", {
            id: o("WAWap").STANZA_ID(t),
            server_id: o("WAWap").INT(n),
          }),
          r,
        );
      return a;
    }
    function g(e, t) {
      var n = f(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function h(e, t) {
      if (t.newsletterQuestionResponsePublish)
        return P(e, t.newsletterQuestionResponsePublish);
      if (t.newsletterQuestionResponseReaction)
        return M(e, t.newsletterQuestionResponseReaction);
      if (t.newsletterReaction) return W(e, t.newsletterReaction);
      if (t.newsletterQuestionResponseReactionRevoke)
        return A(e, t.newsletterQuestionResponseReactionRevoke);
      if (t.isNewsletterReactionRevoke) return U(e);
      if (t.newsletterPollVote) return E(e, t.newsletterPollVote);
      if (t.newsletterQuestionResponseRevoke)
        return O(e, t.newsletterQuestionResponseRevoke);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function y(e) {
      var t,
        n = e.messageId,
        r = e.msgMetaOriginMixinArgs,
        a = e.senderContentTypeMediaRCATMixinArgs,
        i = e.metaPremiumTypeMixinArgs,
        l = e.hasNewsletterAIContentMeta,
        s = e.newsletterClientIdContentArgs,
        u = b(
          (t = o("WASmaxMixins")).optionalMerge(
            fe,
            t.optionalMerge(
              o("WASmaxOutMessagePublishMetaPremiumTypeMixin")
                .mergeMetaPremiumTypeMixin,
              t.optionalMerge(
                se,
                t.optionalMerge(
                  o("WASmaxOutMessagePublishMsgMetaOriginMixin")
                    .mergeMsgMetaOriginMixin,
                  o("WASmaxJsx").smax("message", {
                    id: o("WAWap").STANZA_ID(n),
                  }),
                  r,
                ),
                a,
              ),
              i,
            ),
            l,
          ),
          s,
        );
      return u;
    }
    function C(e, t) {
      var n = y(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function b(e, t) {
      if (t.newsletterScheduledEdit) return X(e, t.newsletterScheduledEdit);
      if (t.newsletterScheduledCreate) return K(e, t.newsletterScheduledCreate);
      if (t.newsletterEdit) return S(e, t.newsletterEdit);
      if (t.newsletterQuestionPublish) return I(e, t.newsletterQuestionPublish);
      if (t.newsletterQuestionReplyPublish)
        return x(e, t.newsletterQuestionReplyPublish);
      if (t.newsletterText) return We(e, t.newsletterText);
      if (t.newsletterMediaPublish) return he(e, t.newsletterMediaPublish);
      if (t.isNewsletterScheduledCancel) return z(e);
      if (t.newsletterRevoke) return H(e, t.newsletterRevoke);
      if (t.newsletterPollCreation) return Ce(e, t.newsletterPollCreation);
      if (t.newsletterPollResultSnapshot)
        return ve(e, t.newsletterPollResultSnapshot);
      if (t.newsletterQuizCreation) return Ee(e, t.newsletterQuizCreation);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function v(e) {
      var t = e.hasWAMOSub,
        n = e.newsletterQuestionReplyOrTextOrMediaMixinGroupArgs,
        r = T(
          o("WASmaxMixins").optionalMerge(
            He,
            pe(o("WASmaxJsx").smax("message", null)),
            t,
          ),
          n,
        );
      return r;
    }
    function S(e, t) {
      var n = v(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function R(e) {
      var t = e.voteElementValue,
        n = o("WASmaxJsx").smax("vote", null, t);
      return n;
    }
    function L(e) {
      var t = e.voteArgs,
        n = o(
          "WASmaxOutMessagePublishContentTypePollVoteMixin",
        ).mergeContentTypePollVoteMixin(
          o("WASmaxJsx").smax(
            "message",
            null,
            o("WASmaxJsx").smax(
              "votes",
              null,
              o("WASmaxChildren").REPEATED_CHILD(R, t, 0, 1e3),
            ),
          ),
          e,
        );
      return n;
    }
    function E(e, t) {
      var n = L(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function k(e) {
      var t = e.hasWAMOSub,
        n = e.newsletterTextOrMediaPublishMixinGroupArgs,
        r = J(
          o("WASmaxMixins").optionalMerge(
            He,
            ne(o("WASmaxJsx").smax("message", null)),
            t,
          ),
          n,
        );
      return r;
    }
    function I(e, t) {
      var n = k(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function T(e, t) {
      if (t.newsletterQuestionReply) return Re(e, t.newsletterQuestionReply);
      if (t.newsletterText) return We(e, t.newsletterText);
      if (t.newsletterMedia) return Oe(e, t.newsletterMedia);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function D(e) {
      var t = e.hasWAMOSub,
        n = e.newsletterTextOrMediaPublishMixinGroupArgs,
        r = J(
          o("WASmaxMixins").optionalMerge(
            He,
            ee(Me(o("WASmaxJsx").smax("message", null)), e),
            t,
          ),
          n,
        );
      return r;
    }
    function x(e, t) {
      var n = D(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function $(e) {
      var t = e.payloadMixinArgs,
        n = oe(
          o(
            "WASmaxOutMessagePublishContentTypeTextMixin",
          ).mergeContentTypeTextMixin(
            o("WASmaxJsx").smax(
              "message",
              null,
              Ue(o("WASmaxJsx").smax("plaintext", null), t),
            ),
          ),
        );
      return n;
    }
    function P(e, t) {
      var n = $(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function N(e) {
      var t = ie(oe(W(o("WASmaxJsx").smax("message", null), e)), e);
      return t;
    }
    function M(e, t) {
      var n = N(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function w(e) {
      var t = ie(oe(U(o("WASmaxJsx").smax("message", null))), e);
      return t;
    }
    function A(e, t) {
      var n = w(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function F(e) {
      var t = ie(
        oe(
          o(
            "WASmaxOutMessagePublishContentTypeTextMixin",
          ).mergeContentTypeTextMixin(
            o("WASmaxOutMessagePublishRevokeMixin").mergeRevokeMixin(
              o("WASmaxJsx").smax(
                "message",
                null,
                o("WASmaxJsx").smax("plaintext", null),
              ),
            ),
          ),
        ),
        e,
      );
      return t;
    }
    function O(e, t) {
      var n = F(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function B(e) {
      var t = e.reactionCode,
        n = o(
          "WASmaxOutMessagePublishContentTypeReactionMixin",
        ).mergeContentTypeReactionMixin(
          o("WASmaxJsx").smax(
            "message",
            null,
            o("WASmaxJsx").smax("reaction", {
              code: o("WAWap").CUSTOM_STRING(t),
            }),
          ),
        );
      return n;
    }
    function W(e, t) {
      var n = B(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function q() {
      var e = o(
        "WASmaxOutMessagePublishContentTypeReactionMixin",
      ).mergeContentTypeReactionMixin(
        o("WASmaxOutMessagePublishRevokeMixin").mergeRevokeMixin(
          o("WASmaxJsx").smax(
            "message",
            null,
            o("WASmaxJsx").smax("reaction", null),
          ),
        ),
      );
      return e;
    }
    function U(e) {
      var t = q();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function V(e) {
      var t = e.hasWAMOSub,
        n = o("WASmaxMixins").optionalMerge(
          He,
          o(
            "WASmaxOutMessagePublishContentTypeTextMixin",
          ).mergeContentTypeTextMixin(
            o("WASmaxOutMessagePublishAdminRevokeMixin").mergeAdminRevokeMixin(
              o("WASmaxJsx").smax(
                "message",
                null,
                o("WASmaxJsx").smax("plaintext", null),
              ),
            ),
          ),
          t,
        );
      return n;
    }
    function H(e, t) {
      var n = V(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function G() {
      var e = Ie(
        o(
          "WASmaxOutMessagePublishContentTypeTextMixin",
        ).mergeContentTypeTextMixin(
          o("WASmaxOutMessagePublishAdminRevokeMixin").mergeAdminRevokeMixin(
            o("WASmaxJsx").smax(
              "message",
              null,
              o("WASmaxJsx").smax("plaintext", null),
            ),
          ),
        ),
      );
      return e;
    }
    function z(e) {
      var t = G();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function j(e) {
      var t = e.newsletterScheduledPublishContentArgs,
        n = Y(De(o("WASmaxJsx").smax("message", null), e), t);
      return n;
    }
    function K(e, t) {
      var n = j(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Q(e) {
      var t = e.newsletterScheduledPublishContentArgs,
        n = Y($e(pe(o("WASmaxJsx").smax("message", null)), e), t);
      return n;
    }
    function X(e, t) {
      var n = Q(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Y(e, t) {
      if (t.newsletterText) return We(e, t.newsletterText);
      if (t.newsletterMediaPublish) return he(e, t.newsletterMediaPublish);
      if (t.newsletterPollCreation) return Ce(e, t.newsletterPollCreation);
      if (t.newsletterQuizCreation) return Ee(e, t.newsletterQuizCreation);
      if (t.newsletterPollResultSnapshot)
        return ve(e, t.newsletterPollResultSnapshot);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function J(e, t) {
      if (t.newsletterText) return We(e, t.newsletterText);
      if (t.newsletterMediaPublish) return he(e, t.newsletterMediaPublish);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function Z(e) {
      var t = e.metaParentServerId,
        n = e.metaResponseServerId,
        r = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax("meta", {
            parent_server_id: o("WAWap").INT(t),
            response_server_id: o("WAWap").CUSTOM_STRING(n),
          }),
        );
      return r;
    }
    function ee(e, t) {
      var n = Z(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function te() {
      var e = o("WASmaxJsx").smax(
        "message",
        null,
        o("WASmaxJsx").smax("meta", { questiontype: "question" }),
      );
      return e;
    }
    function ne(e) {
      var t = te();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function re() {
      var e = o("WASmaxJsx").smax(
        "message",
        null,
        o("WASmaxJsx").smax("meta", { questiontype: "response" }),
      );
      return e;
    }
    function oe(e) {
      var t = re();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function ae(e) {
      var t = e.metaResponseServerId,
        n = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax("meta", {
            response_server_id: o("WAWap").CUSTOM_STRING(t),
          }),
        );
      return n;
    }
    function ie(e, t) {
      var n = ae(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function le(e) {
      var t = e.plaintextContentId,
        n = o(
          "WASmaxOutMessagePublishContentTypeMediaMixin",
        ).mergeContentTypeMediaMixin(
          o("WASmaxJsx").smax(
            "message",
            null,
            o("WASmaxJsx").smax("plaintext", {
              mediatype: "url",
              content_id: o("WASmaxAttrs").OPTIONAL(
                o("WAWap").CUSTOM_STRING,
                t,
              ),
            }),
          ),
        );
      return n;
    }
    function se(e, t) {
      var n = le(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function ue(e, t) {
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
      var a = o("WASmaxInMessagePublishAckMixin").parseAckMixin(e, t);
      if (!a.success) return a;
      var i = de(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ serverId: r.value }, a.value, {
          newsletterSenderRCATAckMixin: i.success ? i.value : null,
        }),
      );
    }
    function ce(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "response_server_id");
      if (!r.success) return r;
      var a = o("WASmaxInMessagePublishAckMixin").parseAckMixin(e, t);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ responseServerId: r.value }, a.value),
          )
        : a;
    }
    function de(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "rcat");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentBytes(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({ rcatElementValue: r.value })
        : r;
    }
    function me() {
      var e = o("WASmaxJsx").smax("message", { edit: "3" });
      return e;
    }
    function pe(e) {
      var t = me();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function _e() {
      var e = o("WASmaxJsx").smax(
        "message",
        null,
        o("WASmaxJsx").smax(
          "meta",
          null,
          o("WASmaxJsx").smax("ai_content", null),
        ),
      );
      return e;
    }
    function fe(e) {
      var t = _e();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function ge(e) {
      var t = e.messageMediaId,
        n = Oe(
          o("WASmaxJsx").smax("message", {
            media_id: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t),
          }),
          e,
        );
      return n;
    }
    function he(e, t) {
      var n = ge(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function ye(e) {
      var t = e.hasWAMOSub,
        n = e.payloadMixinArgs,
        r = o("WASmaxMixins").optionalMerge(
          He,
          o(
            "WASmaxOutMessagePublishContentTypePollCreationMixin",
          ).mergeContentTypePollCreationMixin(
            o("WASmaxJsx").smax(
              "message",
              null,
              Ue(o("WASmaxJsx").smax("plaintext", null), n),
            ),
            e,
          ),
          t,
        );
      return r;
    }
    function Ce(e, t) {
      var n = ye(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function be(e) {
      var t = e.hasWAMOSub,
        n = e.payloadMixinArgs,
        r = o("WASmaxMixins").optionalMerge(
          He,
          o(
            "WASmaxOutMessagePublishContentTypePollResultSnapshotMixin",
          ).mergeContentTypePollResultSnapshotMixin(
            o("WASmaxJsx").smax(
              "message",
              null,
              Ue(o("WASmaxJsx").smax("plaintext", null), n),
            ),
          ),
          t,
        );
      return r;
    }
    function ve(e, t) {
      var n = be(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Se(e) {
      var t = e.hasWAMOSub,
        n = e.newsletterTextOrMediaMixinGroupArgs,
        r = Pe(
          o("WASmaxMixins").optionalMerge(
            He,
            Me(o("WASmaxJsx").smax("message", null)),
            t,
          ),
          n,
        );
      return r;
    }
    function Re(e, t) {
      var n = Se(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Le(e) {
      var t = e.hasWAMOSub,
        n = e.payloadMixinArgs,
        r = o("WASmaxMixins").optionalMerge(
          He,
          Ae(
            o("WASmaxJsx").smax(
              "message",
              null,
              Ue(o("WASmaxJsx").smax("plaintext", null), n),
            ),
            e,
          ),
          t,
        );
      return r;
    }
    function Ee(e, t) {
      var n = Le(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function ke() {
      var e = o("WASmaxJsx").smax(
        "message",
        null,
        o("WASmaxJsx").smax("meta", { type: "scheduled_message" }),
      );
      return e;
    }
    function Ie(e) {
      var t = ke();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function Te(e) {
      var t = e.metaSt,
        n = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax("meta", {
            type: "scheduled_message",
            st: o("WAWap").INT(t),
          }),
        );
      return n;
    }
    function De(e, t) {
      var n = Te(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function xe(e) {
      var t = e.metaSt,
        n = e.hasMetaSendNowTrue,
        r = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax("meta", {
            type: "scheduled_message",
            st: o("WASmaxAttrs").OPTIONAL(o("WAWap").INT, t),
            send_now: o("WASmaxAttrs").OPTIONAL_LITERAL("true", n),
          }),
        );
      return r;
    }
    function $e(e, t) {
      var n = xe(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Pe(e, t) {
      if (t.newsletterText) return We(e, t.newsletterText);
      if (t.newsletterMedia) return Oe(e, t.newsletterMedia);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function Ne() {
      var e = o("WASmaxJsx").smax(
        "message",
        null,
        o("WASmaxJsx").smax("meta", { questiontype: "reply" }),
      );
      return e;
    }
    function Me(e) {
      var t = Ne();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function we(e) {
      var t = e.metaContenttype,
        n = o("WASmaxJsx").smax(
          "message",
          { type: "poll" },
          o("WASmaxJsx").smax("meta", {
            polltype: "quiz_creation",
            contenttype: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t),
          }),
        );
      return n;
    }
    function Ae(e, t) {
      var n = we(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Fe(e) {
      var t = e.hasWAMOSub,
        n = e.messageAssociationTypeMixinArgs,
        r = e.mediaMetaMixinArgs,
        a = e.plaintextMediatype,
        i = e.payloadMixinArgs,
        l = o("WASmaxMixins").optionalMerge(
          ze,
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutMessagePublishMessageAssociationTypeMixin")
              .mergeMessageAssociationTypeMixin,
            o("WASmaxMixins").optionalMerge(
              He,
              o(
                "WASmaxOutMessagePublishContentTypeMediaMixin",
              ).mergeContentTypeMediaMixin(
                o("WASmaxJsx").smax(
                  "message",
                  null,
                  Ue(
                    o("WASmaxJsx").smax("plaintext", {
                      mediatype: o("WAWap").CUSTOM_STRING(a),
                    }),
                    i,
                  ),
                ),
              ),
              t,
            ),
            n,
          ),
          r,
        );
      return l;
    }
    function Oe(e, t) {
      var n = Fe(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Be(e) {
      var t = e.hasWAMOSub,
        n = e.payloadMixinArgs,
        r = o("WASmaxMixins").optionalMerge(
          He,
          o(
            "WASmaxOutMessagePublishContentTypeTextMixin",
          ).mergeContentTypeTextMixin(
            o("WASmaxJsx").smax(
              "message",
              null,
              Ue(o("WASmaxJsx").smax("plaintext", null), n),
            ),
          ),
          t,
        );
      return r;
    }
    function We(e, t) {
      var n = Be(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function qe(e) {
      var t = e.plaintextElementValue,
        n = o("WASmaxJsx").smax("plaintext", null, t);
      return n;
    }
    function Ue(e, t) {
      var n = qe(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Ve() {
      var e = o("WASmaxJsx").smax(
        "message",
        null,
        o("WASmaxJsx").smax("meta", { is_wamo_sub: "true" }),
      );
      return e;
    }
    function He(e) {
      var t = Ve();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function Ge(e) {
      var t = e.metaContenttype,
        n = o("WASmaxJsx").smax(
          "message",
          null,
          o("WASmaxJsx").smax("meta", {
            contenttype: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t),
          }),
        );
      return n;
    }
    function ze(e, t) {
      var n = Ge(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendNewsletterRPC = e),
      (l.parseNewsletterResponseNegative = u),
      (l.parseNewsletterResponseSuccess = c),
      (l.makeNewsletterRequest = d),
      (l.parseNewsletterQuestionResponseOrNewsletterScheduledMessageOrNewsletterMessageAckMixinGroup =
        m),
      (l.parseNewsletterScheduledMessageAckMixin = p),
      (l.mergeClientNewsletterAndServerOrNewsletterIDMixinGroup = _),
      (l.mergeNewsletterClientAndServerIDMixin = g),
      (l.mergeNewsletterClientAndServerIdContent = h),
      (l.mergeNewsletterClientIDMixin = C),
      (l.mergeNewsletterClientIdContent = b),
      (l.mergeNewsletterEditMixin = S),
      (l.makeNewsletterPollVoteVotesVote = R),
      (l.mergeNewsletterPollVoteMixin = E),
      (l.mergeNewsletterQuestionPublishMixin = I),
      (l.mergeNewsletterQuestionReplyOrTextOrMediaMixinGroup = T),
      (l.mergeNewsletterQuestionReplyPublishMixin = x),
      (l.mergeNewsletterQuestionResponsePublishMixin = P),
      (l.mergeNewsletterQuestionResponseReactionMixin = M),
      (l.mergeNewsletterQuestionResponseReactionRevokeMixin = A),
      (l.mergeNewsletterQuestionResponseRevokeMixin = O),
      (l.mergeNewsletterReactionMixin = W),
      (l.mergeNewsletterReactionRevokeMixin = U),
      (l.mergeNewsletterRevokeMixin = H),
      (l.mergeNewsletterScheduledCancelMixin = z),
      (l.mergeNewsletterScheduledCreateMixin = K),
      (l.mergeNewsletterScheduledEditMixin = X),
      (l.mergeNewsletterScheduledPublishContent = Y),
      (l.mergeNewsletterTextOrMediaPublishMixinGroup = J),
      (l.mergeParentAndResponseServerIDMixin = ee),
      (l.mergeQuestionTypeQuestionMixin = ne),
      (l.mergeQuestionTypeResponseMixin = oe),
      (l.mergeResponseServerIDMixin = ie),
      (l.mergeSenderContentTypeMediaRCATMixin = se),
      (l.parseNewsletterMessageAckMixin = ue),
      (l.parseNewsletterQuestionResponseAckMixin = ce),
      (l.parseNewsletterSenderRCATAckMixin = de),
      (l.mergeAdminEditMixin = pe),
      (l.mergeNewsletterAIContentMetaMixin = fe),
      (l.mergeNewsletterMediaPublishMixin = he),
      (l.mergeNewsletterPollCreationMixin = Ce),
      (l.mergeNewsletterPollResultSnapshotMixin = ve),
      (l.mergeNewsletterQuestionReplyMixin = Re),
      (l.mergeNewsletterQuizCreationMixin = Ee),
      (l.mergeNewsletterScheduledCancelMetaMixin = Ie),
      (l.mergeNewsletterScheduledCreateMetaMixin = De),
      (l.mergeNewsletterScheduledEditMetaMixin = $e),
      (l.mergeNewsletterTextOrMediaMixinGroup = Pe),
      (l.mergeQuestionTypeReplyMixin = Me),
      (l.mergeContentTypeQuizCreationMixin = Ae),
      (l.mergeNewsletterMediaMixin = Oe),
      (l.mergeNewsletterTextMixin = We),
      (l.mergePayloadMixin = Ue),
      (l.mergeWAMOSubMixin = He),
      (l.mergeMediaMetaMixin = ze));
  },
  98,
);
