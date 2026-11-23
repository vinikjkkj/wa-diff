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
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = c(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = s(r, n);
      if (a.success)
        return { name: "NewsletterResponseNegative", value: a.value };
      var i = u(r, n);
      if (i.success)
        return { name: "NewsletterResponseSuccess", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("Newsletter", {
          Negative: a,
          Success: i,
        }),
      );
    }
    function s(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxInMessagePublishNegativeAckMixin").parseNegativeAckMixin(
        e,
        t,
      );
      return (r.success, r);
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = d(e, t);
      return r.success
        ? o("WAResultOrError").makeResult({
            newsletterQuestionResponseOrNewsletterScheduledMessageOrNewsletterMessageAckMixinGroup:
              r.value,
          })
        : r;
    }
    function c(e) {
      var t = e.messageTo,
        n = e.clientNewsletterAndServerOrNewsletterIDMixinGroupArgs,
        r = p(o("WASmaxJsx").smax("message", { to: o("WAWap").JID(t) }), n);
      return r;
    }
    function d(e, t) {
      var n = ee(e, t);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterQuestionResponseAck",
          value: n.value,
        });
      var r = m(e, t);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterScheduledMessageAck",
          value: r.value,
        });
      var a = Z(e, t);
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
    function m(e, t) {
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
      var l = te(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          { scheduledServerId: r.value, serverId: a.value },
          i.value,
          { newsletterSenderRCATAckMixin: l.success ? l.value : null },
        ),
      );
    }
    function p(e, t) {
      if (t.newsletterClientAndServerID)
        return f(e, t.newsletterClientAndServerID);
      if (t.newsletterClientID) return y(e, t.newsletterClientID);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function _(e) {
      var t = e.messageId,
        n = e.messageServerId,
        r = e.newsletterClientAndServerIdContentArgs,
        a = g(
          o("WASmaxJsx").smax("message", {
            id: o("WAWap").STANZA_ID(t),
            server_id: o("WAWap").INT(n),
          }),
          r,
        );
      return a;
    }
    function f(e, t) {
      var n = _(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function g(e, t) {
      if (t.newsletterQuestionResponsePublish)
        return I(e, t.newsletterQuestionResponsePublish);
      if (t.newsletterQuestionResponseReaction)
        return D(e, t.newsletterQuestionResponseReaction);
      if (t.newsletterReaction) return w(e, t.newsletterReaction);
      if (t.newsletterQuestionResponseReactionRevoke)
        return $(e, t.newsletterQuestionResponseReactionRevoke);
      if (t.isNewsletterReactionRevoke) return F(e);
      if (t.newsletterPollVote) return L(e, t.newsletterPollVote);
      if (t.newsletterQuestionResponseRevoke)
        return N(e, t.newsletterQuestionResponseRevoke);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function h(e) {
      var t,
        n = e.messageId,
        r = e.msgMetaOriginMixinArgs,
        a = e.senderContentTypeMediaRCATMixinArgs,
        i = e.metaPremiumTypeMixinArgs,
        l = e.hasNewsletterAIContentMeta,
        s = e.newsletterClientIdContentArgs,
        u = C(
          (t = o("WASmaxMixins")).optionalMerge(
            ae,
            t.optionalMerge(
              o("WASmaxOutMessagePublishMetaPremiumTypeMixin")
                .mergeMetaPremiumTypeMixin,
              t.optionalMerge(
                J,
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
    function y(e, t) {
      var n = h(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function C(e, t) {
      if (t.newsletterScheduledEdit) return G(e, t.newsletterScheduledEdit);
      if (t.newsletterScheduledCreate) return V(e, t.newsletterScheduledCreate);
      if (t.newsletterEdit) return v(e, t.newsletterEdit);
      if (t.newsletterQuestionPublish)
        return de(e, t.newsletterQuestionPublish);
      if (t.newsletterQuestionReplyPublish)
        return fe(e, t.newsletterQuestionReplyPublish);
      if (t.newsletterText) return Fe(e, t.newsletterText);
      if (t.newsletterMediaPublish) return we(e, t.newsletterMediaPublish);
      if (t.isNewsletterScheduledCancel) return q(e);
      if (t.newsletterRevoke) return B(e, t.newsletterRevoke);
      if (t.newsletterPollCreation) return le(e, t.newsletterPollCreation);
      if (t.newsletterPollResultSnapshot)
        return ue(e, t.newsletterPollResultSnapshot);
      if (t.newsletterQuizCreation) return he(e, t.newsletterQuizCreation);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function b(e) {
      var t = e.hasWAMOSub,
        n = e.newsletterQuestionReplyOrTextOrMediaMixinGroupArgs,
        r = E(
          o("WASmaxMixins").optionalMerge(
            Ve,
            re(o("WASmaxJsx").smax("message", null)),
            t,
          ),
          n,
        );
      return r;
    }
    function v(e, t) {
      var n = b(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function S(e) {
      var t = e.voteElementValue,
        n = o("WASmaxJsx").smax("vote", null, t);
      return n;
    }
    function R(e) {
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
              o("WASmaxChildren").REPEATED_CHILD(S, t, 0, 1e3),
            ),
          ),
          e,
        );
      return n;
    }
    function L(e, t) {
      var n = R(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function E(e, t) {
      if (t.newsletterQuestionReply) return pe(e, t.newsletterQuestionReply);
      if (t.newsletterText) return Fe(e, t.newsletterText);
      if (t.newsletterMedia) return Be(e, t.newsletterMedia);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function k(e) {
      var t = e.payloadMixinArgs,
        n = K(
          o(
            "WASmaxOutMessagePublishContentTypeTextMixin",
          ).mergeContentTypeTextMixin(
            o("WASmaxJsx").smax(
              "message",
              null,
              qe(o("WASmaxJsx").smax("plaintext", null), t),
            ),
          ),
        );
      return n;
    }
    function I(e, t) {
      var n = k(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function T(e) {
      var t = X(K(w(o("WASmaxJsx").smax("message", null), e)), e);
      return t;
    }
    function D(e, t) {
      var n = T(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function x(e) {
      var t = X(K(F(o("WASmaxJsx").smax("message", null))), e);
      return t;
    }
    function $(e, t) {
      var n = x(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function P(e) {
      var t = X(
        K(
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
    function N(e, t) {
      var n = P(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function M(e) {
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
    function w(e, t) {
      var n = M(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function A() {
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
    function F(e) {
      var t = A();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function O(e) {
      var t = e.hasWAMOSub,
        n = o("WASmaxMixins").optionalMerge(
          Ve,
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
    function B(e, t) {
      var n = O(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function W() {
      var e = Ce(
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
    function q(e) {
      var t = W();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function U(e) {
      var t = e.newsletterScheduledPublishContentArgs,
        n = z(ve(o("WASmaxJsx").smax("message", null), e), t);
      return n;
    }
    function V(e, t) {
      var n = U(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function H(e) {
      var t = e.newsletterScheduledPublishContentArgs,
        n = z(Re(re(o("WASmaxJsx").smax("message", null)), e), t);
      return n;
    }
    function G(e, t) {
      var n = H(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function z(e, t) {
      if (t.newsletterQuestionPublish)
        return de(e, t.newsletterQuestionPublish);
      if (t.newsletterQuestionReplyPublish)
        return fe(e, t.newsletterQuestionReplyPublish);
      if (t.newsletterText) return Fe(e, t.newsletterText);
      if (t.newsletterMediaPublish) return we(e, t.newsletterMediaPublish);
      if (t.newsletterPollCreation) return le(e, t.newsletterPollCreation);
      if (t.newsletterQuizCreation) return he(e, t.newsletterQuizCreation);
      if (t.newsletterPollResultSnapshot)
        return ue(e, t.newsletterPollResultSnapshot);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function j() {
      var e = o("WASmaxJsx").smax(
        "message",
        null,
        o("WASmaxJsx").smax("meta", { questiontype: "response" }),
      );
      return e;
    }
    function K(e) {
      var t = j();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function Q(e) {
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
    function X(e, t) {
      var n = Q(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Y(e) {
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
    function J(e, t) {
      var n = Y(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Z(e, t) {
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
      var i = te(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ serverId: r.value }, a.value, {
          newsletterSenderRCATAckMixin: i.success ? i.value : null,
        }),
      );
    }
    function ee(e, t) {
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
    function te(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "rcat");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentBytes(n.value);
      return r.success
        ? o("WAResultOrError").makeResult({ rcatElementValue: r.value })
        : r;
    }
    function ne() {
      var e = o("WASmaxJsx").smax("message", { edit: "3" });
      return e;
    }
    function re(e) {
      var t = ne();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function oe() {
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
    function ae(e) {
      var t = oe();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function ie(e) {
      var t = e.hasWAMOSub,
        n = e.payloadMixinArgs,
        r = o("WASmaxMixins").optionalMerge(
          Ve,
          o(
            "WASmaxOutMessagePublishContentTypePollCreationMixin",
          ).mergeContentTypePollCreationMixin(
            o("WASmaxJsx").smax(
              "message",
              null,
              qe(o("WASmaxJsx").smax("plaintext", null), n),
            ),
            e,
          ),
          t,
        );
      return r;
    }
    function le(e, t) {
      var n = ie(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function se(e) {
      var t = e.hasWAMOSub,
        n = e.payloadMixinArgs,
        r = o("WASmaxMixins").optionalMerge(
          Ve,
          o(
            "WASmaxOutMessagePublishContentTypePollResultSnapshotMixin",
          ).mergeContentTypePollResultSnapshotMixin(
            o("WASmaxJsx").smax(
              "message",
              null,
              qe(o("WASmaxJsx").smax("plaintext", null), n),
            ),
          ),
          t,
        );
      return r;
    }
    function ue(e, t) {
      var n = se(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function ce(e) {
      var t = e.hasWAMOSub,
        n = e.newsletterTextOrMediaPublishMixinGroupArgs,
        r = Ee(
          o("WASmaxMixins").optionalMerge(
            Ve,
            De(o("WASmaxJsx").smax("message", null)),
            t,
          ),
          n,
        );
      return r;
    }
    function de(e, t) {
      var n = ce(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function me(e) {
      var t = e.hasWAMOSub,
        n = e.newsletterTextOrMediaMixinGroupArgs,
        r = Le(
          o("WASmaxMixins").optionalMerge(
            Ve,
            $e(o("WASmaxJsx").smax("message", null)),
            t,
          ),
          n,
        );
      return r;
    }
    function pe(e, t) {
      var n = me(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function _e(e) {
      var t = e.hasWAMOSub,
        n = e.newsletterTextOrMediaPublishMixinGroupArgs,
        r = Ee(
          o("WASmaxMixins").optionalMerge(
            Ve,
            Ie($e(o("WASmaxJsx").smax("message", null)), e),
            t,
          ),
          n,
        );
      return r;
    }
    function fe(e, t) {
      var n = _e(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function ge(e) {
      var t = e.hasWAMOSub,
        n = e.payloadMixinArgs,
        r = o("WASmaxMixins").optionalMerge(
          Ve,
          Ne(
            o("WASmaxJsx").smax(
              "message",
              null,
              qe(o("WASmaxJsx").smax("plaintext", null), n),
            ),
            e,
          ),
          t,
        );
      return r;
    }
    function he(e, t) {
      var n = ge(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function ye() {
      var e = o("WASmaxJsx").smax(
        "message",
        null,
        o("WASmaxJsx").smax("meta", { type: "scheduled_message" }),
      );
      return e;
    }
    function Ce(e) {
      var t = ye();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function be(e) {
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
    function ve(e, t) {
      var n = be(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Se(e) {
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
    function Re(e, t) {
      var n = Se(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Le(e, t) {
      if (t.newsletterText) return Fe(e, t.newsletterText);
      if (t.newsletterMedia) return Be(e, t.newsletterMedia);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function Ee(e, t) {
      if (t.newsletterText) return Fe(e, t.newsletterText);
      if (t.newsletterMediaPublish) return we(e, t.newsletterMediaPublish);
      throw new (o(
        "WASmaxMixinGroupExhaustiveError",
      ).SmaxMixinGroupExhaustiveError)();
    }
    function ke(e) {
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
    function Ie(e, t) {
      var n = ke(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Te() {
      var e = o("WASmaxJsx").smax(
        "message",
        null,
        o("WASmaxJsx").smax("meta", { questiontype: "question" }),
      );
      return e;
    }
    function De(e) {
      var t = Te();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function xe() {
      var e = o("WASmaxJsx").smax(
        "message",
        null,
        o("WASmaxJsx").smax("meta", { questiontype: "reply" }),
      );
      return e;
    }
    function $e(e) {
      var t = xe();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function Pe(e) {
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
    function Ne(e, t) {
      var n = Pe(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Me(e) {
      var t = e.messageMediaId,
        n = Be(
          o("WASmaxJsx").smax("message", {
            media_id: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t),
          }),
          e,
        );
      return n;
    }
    function we(e, t) {
      var n = Me(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Ae(e) {
      var t = e.hasWAMOSub,
        n = e.payloadMixinArgs,
        r = o("WASmaxMixins").optionalMerge(
          Ve,
          o(
            "WASmaxOutMessagePublishContentTypeTextMixin",
          ).mergeContentTypeTextMixin(
            o("WASmaxJsx").smax(
              "message",
              null,
              qe(o("WASmaxJsx").smax("plaintext", null), n),
            ),
          ),
          t,
        );
      return r;
    }
    function Fe(e, t) {
      var n = Ae(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Oe(e) {
      var t = e.hasWAMOSub,
        n = e.messageAssociationTypeMixinArgs,
        r = e.mediaMetaMixinArgs,
        a = e.plaintextMediatype,
        i = e.payloadMixinArgs,
        l = o("WASmaxMixins").optionalMerge(
          Ge,
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutMessagePublishMessageAssociationTypeMixin")
              .mergeMessageAssociationTypeMixin,
            o("WASmaxMixins").optionalMerge(
              Ve,
              o(
                "WASmaxOutMessagePublishContentTypeMediaMixin",
              ).mergeContentTypeMediaMixin(
                o("WASmaxJsx").smax(
                  "message",
                  null,
                  qe(
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
    function Be(e, t) {
      var n = Oe(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function We(e) {
      var t = e.plaintextElementValue,
        n = o("WASmaxJsx").smax("plaintext", null, t);
      return n;
    }
    function qe(e, t) {
      var n = We(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function Ue() {
      var e = o("WASmaxJsx").smax(
        "message",
        null,
        o("WASmaxJsx").smax("meta", { is_wamo_sub: "true" }),
      );
      return e;
    }
    function Ve(e) {
      var t = Ue();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function He(e) {
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
    function Ge(e, t) {
      var n = He(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.sendNewsletterRPC = e),
      (l.parseNewsletterResponseNegative = s),
      (l.parseNewsletterResponseSuccess = u),
      (l.makeNewsletterRequest = c));
  },
  98,
);
