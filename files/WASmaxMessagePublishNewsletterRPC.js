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
      var n = te(e, t);
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
      var a = ee(e, t);
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
      var l = ne(e);
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
        return T(e, t.newsletterQuestionResponsePublish);
      if (t.newsletterQuestionResponseReaction)
        return x(e, t.newsletterQuestionResponseReaction);
      if (t.newsletterReaction) return A(e, t.newsletterReaction);
      if (t.newsletterQuestionResponseReactionRevoke)
        return P(e, t.newsletterQuestionResponseReactionRevoke);
      if (t.isNewsletterReactionRevoke) return O(e);
      if (t.newsletterPollVote) return E(e, t.newsletterPollVote);
      if (t.newsletterQuestionResponseRevoke)
        return M(e, t.newsletterQuestionResponseRevoke);
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
            ie,
            t.optionalMerge(
              o("WASmaxOutMessagePublishMetaPremiumTypeMixin")
                .mergeMetaPremiumTypeMixin,
              t.optionalMerge(
                Z,
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
      if (t.newsletterScheduledEdit) return z(e, t.newsletterScheduledEdit);
      if (t.newsletterScheduledCreate) return H(e, t.newsletterScheduledCreate);
      if (t.newsletterEdit) return S(e, t.newsletterEdit);
      if (t.newsletterQuestionPublish)
        return me(e, t.newsletterQuestionPublish);
      if (t.newsletterQuestionReplyPublish)
        return ge(e, t.newsletterQuestionReplyPublish);
      if (t.newsletterText) return Oe(e, t.newsletterText);
      if (t.newsletterMediaPublish) return Ae(e, t.newsletterMediaPublish);
      if (t.isNewsletterScheduledCancel) return U(e);
      if (t.newsletterRevoke) return W(e, t.newsletterRevoke);
      if (t.newsletterPollCreation) return se(e, t.newsletterPollCreation);
      if (t.newsletterPollResultSnapshot)
        return ce(e, t.newsletterPollResultSnapshot);
      if (t.newsletterQuizCreation) return ye(e, t.newsletterQuizCreation);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function v(e) {
      var t = e.hasWAMOSub,
        n = e.newsletterQuestionReplyOrTextOrMediaMixinGroupArgs,
        r = k(
          o("WASmaxMixins").optionalMerge(
            He,
            oe(o("WASmaxJsx").smax("message", null)),
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
    function k(e, t) {
      if (t.newsletterQuestionReply) return _e(e, t.newsletterQuestionReply);
      if (t.newsletterText) return Oe(e, t.newsletterText);
      if (t.newsletterMedia) return We(e, t.newsletterMedia);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function I(e) {
      var t = e.payloadMixinArgs,
        n = Q(
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
    function T(e, t) {
      var n = I(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function D(e) {
      var t = Y(Q(A(o("WASmaxJsx").smax("message", null), e)), e);
      return t;
    }
    function x(e, t) {
      var n = D(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function $(e) {
      var t = Y(Q(O(o("WASmaxJsx").smax("message", null))), e);
      return t;
    }
    function P(e, t) {
      var n = $(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function N(e) {
      var t = Y(
        Q(
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
    function M(e, t) {
      var n = N(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function w(e) {
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
    function A(e, t) {
      var n = w(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function F() {
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
    function O(e) {
      var t = F();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function B(e) {
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
    function W(e, t) {
      var n = B(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function q() {
      var e = be(
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
    function U(e) {
      var t = q();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function V(e) {
      var t = e.newsletterScheduledPublishContentArgs,
        n = j(Se(o("WASmaxJsx").smax("message", null), e), t);
      return n;
    }
    function H(e, t) {
      var n = V(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function G(e) {
      var t = e.newsletterScheduledPublishContentArgs,
        n = j(Le(oe(o("WASmaxJsx").smax("message", null)), e), t);
      return n;
    }
    function z(e, t) {
      var n = G(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function j(e, t) {
      if (t.newsletterQuestionPublish)
        return me(e, t.newsletterQuestionPublish);
      if (t.newsletterQuestionReplyPublish)
        return ge(e, t.newsletterQuestionReplyPublish);
      if (t.newsletterText) return Oe(e, t.newsletterText);
      if (t.newsletterMediaPublish) return Ae(e, t.newsletterMediaPublish);
      if (t.newsletterPollCreation) return se(e, t.newsletterPollCreation);
      if (t.newsletterQuizCreation) return ye(e, t.newsletterQuizCreation);
      if (t.newsletterPollResultSnapshot)
        return ce(e, t.newsletterPollResultSnapshot);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function K() {
      var e = o("WASmaxJsx").smax(
        "message",
        null,
        o("WASmaxJsx").smax("meta", { questiontype: "response" }),
      );
      return e;
    }
    function Q(e) {
      var t = K();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function X(e) {
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
    function Y(e, t) {
      var n = X(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function J(e) {
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
    function Z(e, t) {
      var n = J(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function ee(e, t) {
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
      var i = ne(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ serverId: r.value }, a.value, {
          newsletterSenderRCATAckMixin: i.success ? i.value : null,
        }),
      );
    }
    function te(e, t) {
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
    function ne(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "rcat");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentBytes(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({ rcatElementValue: r.value })
        : r;
    }
    function re() {
      var e = o("WASmaxJsx").smax("message", { edit: "3" });
      return e;
    }
    function oe(e) {
      var t = re();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function ae() {
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
    function ie(e) {
      var t = ae();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function le(e) {
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
    function se(e, t) {
      var n = le(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function ue(e) {
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
    function ce(e, t) {
      var n = ue(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function de(e) {
      var t = e.hasWAMOSub,
        n = e.newsletterTextOrMediaPublishMixinGroupArgs,
        r = ke(
          o("WASmaxMixins").optionalMerge(
            He,
            xe(o("WASmaxJsx").smax("message", null)),
            t,
          ),
          n,
        );
      return r;
    }
    function me(e, t) {
      var n = de(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function pe(e) {
      var t = e.hasWAMOSub,
        n = e.newsletterTextOrMediaMixinGroupArgs,
        r = Ee(
          o("WASmaxMixins").optionalMerge(
            He,
            Pe(o("WASmaxJsx").smax("message", null)),
            t,
          ),
          n,
        );
      return r;
    }
    function _e(e, t) {
      var n = pe(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function fe(e) {
      var t = e.hasWAMOSub,
        n = e.newsletterTextOrMediaPublishMixinGroupArgs,
        r = ke(
          o("WASmaxMixins").optionalMerge(
            He,
            Te(Pe(o("WASmaxJsx").smax("message", null)), e),
            t,
          ),
          n,
        );
      return r;
    }
    function ge(e, t) {
      var n = fe(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function he(e) {
      var t = e.hasWAMOSub,
        n = e.payloadMixinArgs,
        r = o("WASmaxMixins").optionalMerge(
          He,
          Me(
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
    function ye(e, t) {
      var n = he(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Ce() {
      var e = o("WASmaxJsx").smax(
        "message",
        null,
        o("WASmaxJsx").smax("meta", { type: "scheduled_message" }),
      );
      return e;
    }
    function be(e) {
      var t = Ce();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function ve(e) {
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
    function Se(e, t) {
      var n = ve(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Re(e) {
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
    function Le(e, t) {
      var n = Re(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Ee(e, t) {
      if (t.newsletterText) return Oe(e, t.newsletterText);
      if (t.newsletterMedia) return We(e, t.newsletterMedia);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function ke(e, t) {
      if (t.newsletterText) return Oe(e, t.newsletterText);
      if (t.newsletterMediaPublish) return Ae(e, t.newsletterMediaPublish);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function Ie(e) {
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
    function Te(e, t) {
      var n = Ie(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function De() {
      var e = o("WASmaxJsx").smax(
        "message",
        null,
        o("WASmaxJsx").smax("meta", { questiontype: "question" }),
      );
      return e;
    }
    function xe(e) {
      var t = De();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function $e() {
      var e = o("WASmaxJsx").smax(
        "message",
        null,
        o("WASmaxJsx").smax("meta", { questiontype: "reply" }),
      );
      return e;
    }
    function Pe(e) {
      var t = $e();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function Ne(e) {
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
    function Me(e, t) {
      var n = Ne(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function we(e) {
      var t = e.messageMediaId,
        n = We(
          o("WASmaxJsx").smax("message", {
            media_id: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t),
          }),
          e,
        );
      return n;
    }
    function Ae(e, t) {
      var n = we(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Fe(e) {
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
    function Oe(e, t) {
      var n = Fe(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Be(e) {
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
      (l.makeNewsletterRequest = d));
  },
  98,
);
