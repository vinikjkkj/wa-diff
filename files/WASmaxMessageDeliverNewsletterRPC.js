__d(
  "WASmaxMessageDeliverNewsletterRPC",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverAdminRevokeMixin",
    "WASmaxInMessageDeliverContentTypeMediaMixin",
    "WASmaxInMessageDeliverContentTypePollCreationMixin",
    "WASmaxInMessageDeliverContentTypePollResultSnapshotMixin",
    "WASmaxInMessageDeliverContentTypePollVoteMixin",
    "WASmaxInMessageDeliverContentTypeReactionMixin",
    "WASmaxInMessageDeliverContentTypeTextMixin",
    "WASmaxInMessageDeliverContentTypeTextOrMediaMixinGroup",
    "WASmaxInMessageDeliverEnums",
    "WASmaxInMessageDeliverMessageAssociationTypeMixin",
    "WASmaxInMessageDeliverOfflineMixin",
    "WASmaxInMessageDeliverRevokeMixin",
    "WASmaxInMessageDeliverStsMixin",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = s(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("Newsletter", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeNewsletterResponseError: function () {
          return c(e);
        },
        makeNewsletterResponseSuccess: function () {
          return d(e);
        },
      };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = m(e);
      if (!n.success) return n;
      var r = u(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, {
          receiverContentTypeMediaRCATMixin: r.success ? r.value : null,
        }),
      );
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "plaintext");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "rcat");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "mediatype",
        "url",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").contentBytes(r.value);
      if (!i.success) return i;
      var l = o(
        "WASmaxInMessageDeliverContentTypeMediaMixin",
      ).parseContentTypeMediaMixin(e);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { plaintextMediatype: a.value, rcatElementValue: i.value },
              l.value,
            ),
          )
        : l;
    }
    function c(e) {
      var t = _(o("WASmaxJsx").smax("ack", { error: "406" }), e);
      return t;
    }
    function d(e) {
      var t = _(o("WASmaxJsx").smax("ack", null), e);
      return t;
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrNewsletterJid(e, "from");
      if (!n.success) return n;
      var r = f(e);
      if (!r.success) return r;
      var a = o("WASmaxInMessageDeliverOfflineMixin").parseOfflineMixin(e),
        i = o("WASmaxInMessageDeliverStsMixin").parseStsMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ from: n.value }, r.value, {
          offlineMixin: a.success ? a.value : null,
          stsMixin: i.success ? i.value : null,
        }),
      );
    }
    function p(e) {
      var t = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseJid").attrNewsletterJid,
        e,
        ["from"],
      );
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(t.error);
      var n = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrStanzaId,
        e,
        ["id"],
      );
      if (!n.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(n.error);
      var r = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrString,
        e,
        ["type"],
      );
      if (!r.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(r.error);
      var a = o("WASmaxJsx").smax("ack", {
        to: o("WAWap").JID(t.value),
        class: "message",
        id: o("WAWap").STANZA_ID(n.value),
        type: o("WAWap").CUSTOM_STRING(r.value),
      });
      return a;
    }
    function _(e, t) {
      var n = p(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function f(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(
        e,
        "server_id",
        99,
        2147476647,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        e,
        "is_sender",
        "true",
      );
      if (!i.success) return i;
      var l = h(e),
        s = g(e),
        u = C(e),
        c = y(e),
        d = R(e),
        m = L(e);
      return m.success
        ? o("WAResultOrError").makeResult({
            id: n.value,
            serverId: r.value,
            t: a.value,
            isSender: i.value,
            newsletterMessageOriginalTimestampMixin: l.success ? l.value : null,
            newsletterMessageLastEditTimestampMixin: s.success ? s.value : null,
            adminProfileMetaMixin: u.success ? u.value : null,
            hasPaidPartnershipContentMixin: c.success,
            hasNewsletterAIContentMetaMixin: d.success,
            newsletterMessageFanoutContent: m.value,
          })
        : m;
    }
    function g(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "msg_edit_t",
        15778656e5,
        41024736e5,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaMsgEditT: r.value })
        : r;
    }
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "original_msg_t",
        1577865600,
        4102473600,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaOriginalMsgT: r.value })
        : r;
    }
    function y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        n.value,
        "paid_partnership",
      );
      return r.success ? o("WASmaxParseUtils").voidSuccess : r;
    }
    function C(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        n.value,
        "admin_profile",
      );
      if (!r.success) return r;
      var a = S(r.value);
      return (a.success, a);
    }
    function b(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "name");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentString(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function v(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "picture");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "direct_path");
      return r.success
        ? o("WAResultOrError").makeResult({ id: n.value, directPath: r.value })
        : r;
    }
    function S(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "admin_profile");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "name", b);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "picture", v);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "id",
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            id: a.value,
            name: n.value,
            picture: r.value,
          })
        : a;
    }
    function R(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        n.value,
        "ai_content",
      );
      return r.success ? o("WASmaxParseUtils").voidSuccess : r;
    }
    function L(e) {
      var t = D(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterQuestion",
          value: t.value,
        });
      var n = $(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterQuestionResponseRevokeFanout",
          value: n.value,
        });
      var r = x(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterQuestionResponse",
          value: r.value,
        });
      var a = q(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterEdit",
          value: a.value,
        });
      var i = j(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterQuestionReply",
          value: i.value,
        });
      var l = w(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterRevoke",
          value: l.value,
        });
      var s = Y(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterText",
          value: s.value,
        });
      var u = X(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterMedia",
          value: u.value,
        });
      var c = N(e);
      if (c.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterReaction",
          value: c.value,
        });
      var d = M(e);
      if (d.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterReactionRevoke",
          value: d.value,
        });
      var m = E(e);
      if (m.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterPollCreation",
          value: m.value,
        });
      var p = P(e);
      if (p.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterQuizCreation",
          value: p.value,
        });
      var _ = T(e);
      if (_.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterPollVote",
          value: _.value,
        });
      var f = k(e);
      if (f.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterPollResultSnapshot",
          value: f.value,
        });
      var g = A(e);
      return g.success
        ? o("WAResultOrError").makeResult({
            name: "NewsletterWAMOEmpty",
            value: g.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "NewsletterQuestion",
              "NewsletterQuestionResponseRevokeFanout",
              "NewsletterQuestionResponse",
              "NewsletterEdit",
              "NewsletterQuestionReply",
              "NewsletterRevoke",
              "NewsletterText",
              "NewsletterMedia",
              "NewsletterReaction",
              "NewsletterReactionRevoke",
              "NewsletterPollCreation",
              "NewsletterQuizCreation",
              "NewsletterPollVote",
              "NewsletterPollResultSnapshot",
              "NewsletterWAMOEmpty",
            ],
            [t, n, r, a, i, l, s, u, c, d, m, p, _, f, g],
          );
    }
    function E(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "plaintext");
      if (!n.success) return n;
      var r = J(n.value);
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverContentTypePollCreationMixin",
      ).parseContentTypePollCreationMixin(e);
      if (!a.success) return a;
      var i = Z(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ plaintextPayloadMixin: r.value }, a.value, {
          wAMOSubMixin: i.success ? i.value : null,
        }),
      );
    }
    function k(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "plaintext");
      if (!n.success) return n;
      var r = J(n.value);
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverContentTypePollResultSnapshotMixin",
      ).parseContentTypePollResultSnapshotMixin(e);
      if (!a.success) return a;
      var i = Z(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ plaintextPayloadMixin: r.value }, a.value, {
          wAMOSubMixin: i.success ? i.value : null,
        }),
      );
    }
    function I(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "vote");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytesRange(e, 32, 32);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function T(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "votes");
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverContentTypePollVoteMixin",
      ).parseContentTypePollVoteMixin(e);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(
        n.value,
        "vote",
        0,
        1e3,
        I,
      );
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, r.value, { votesVote: a.value }),
          )
        : a;
    }
    function D(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = G(e);
      if (!n.success) return n;
      var r = Z(e),
        a = K(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, {
              wAMOSubMixin: r.success ? r.value : null,
              newsletterTextOrMediaMixinGroup: a.value,
            }),
          )
        : a;
    }
    function x(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "plaintext");
      if (!n.success) return n;
      var r = J(n.value);
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverContentTypeTextMixin",
      ).parseContentTypeTextMixin(e);
      if (!a.success) return a;
      var i = O(e);
      if (!i.success) return i;
      var l = B(e);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { plaintextPayloadMixin: r.value },
              a.value,
              i.value,
              l.value,
            ),
          )
        : l;
    }
    function $(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxInMessageDeliverRevokeMixin").parseRevokeMixin(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverContentTypeTextMixin",
      ).parseContentTypeTextMixin(e);
      if (!r.success) return r;
      var a = O(e);
      if (!a.success) return a;
      var i = B(e);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value, a.value, i.value),
          )
        : i;
    }
    function P(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "plaintext");
      if (!n.success) return n;
      var r = J(n.value);
      if (!r.success) return r;
      var a = W(e);
      if (!a.success) return a;
      var i = Z(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ plaintextPayloadMixin: r.value }, a.value, {
          wAMOSubMixin: i.success ? i.value : null,
        }),
      );
    }
    function N(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "reaction");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(n.value, "code");
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverContentTypeReactionMixin",
      ).parseContentTypeReactionMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ reactionCode: r.value }, a.value),
          )
        : a;
    }
    function M(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "reaction");
      if (!n.success) return n;
      var r = o("WASmaxInMessageDeliverRevokeMixin").parseRevokeMixin(e);
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverContentTypeReactionMixin",
      ).parseContentTypeReactionMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, r.value, a.value),
          )
        : a;
    }
    function w(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "plaintext");
      if (!n.success) return n;
      var r = o("WASmaxInMessageDeliverAdminRevokeMixin").parseAdminRevokeMixin(
        e,
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverContentTypeTextMixin",
      ).parseContentTypeTextMixin(e);
      if (!a.success) return a;
      var i = Z(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, r.value, a.value, {
          wAMOSubMixin: i.success ? i.value : null,
        }),
      );
    }
    function A(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "plaintext");
      if (!n.success) return n;
      var r = Z(e);
      if (!r.success) return r;
      var a = o("WASmaxInMessageDeliverAdminRevokeMixin").parseAdminRevokeMixin(
          e,
        ),
        i = z(e),
        l = F(e);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, r.value, {
              adminRevokeMixin: a.success ? a.value : null,
              adminEditMixin: i.success ? i.value : null,
              newsletterWamoEmptyContent: l.value,
            }),
          )
        : l;
    }
    function F(e) {
      var t = U(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterQuestionEmpty",
          value: t.value,
        });
      var n = V(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterQuestionReplyEmpty",
          value: n.value,
        });
      var r = o(
        "WASmaxInMessageDeliverContentTypeTextMixin",
      ).parseContentTypeTextMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeText",
          value: r.value,
        });
      var a = o(
        "WASmaxInMessageDeliverContentTypeMediaMixin",
      ).parseContentTypeMediaMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypeMedia",
          value: a.value,
        });
      var i = o(
        "WASmaxInMessageDeliverContentTypePollCreationMixin",
      ).parseContentTypePollCreationMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "ContentTypePollCreation",
          value: i.value,
        });
      var l = W(e);
      return l.success
        ? o("WAResultOrError").makeResult({
            name: "ContentTypeQuizCreation",
            value: l.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "NewsletterQuestionEmpty",
              "NewsletterQuestionReplyEmpty",
              "ContentTypeText",
              "ContentTypeMedia",
              "ContentTypePollCreation",
              "ContentTypeQuizCreation",
            ],
            [t, n, r, a, i, l],
          );
    }
    function O(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "questiontype",
        "response",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaQuestiontype: r.value })
        : r;
    }
    function B(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(n.value, "response_server_id");
      return r.success
        ? o("WAResultOrError").makeResult({ metaResponseServerId: r.value })
        : r;
    }
    function W(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "poll",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "polltype",
        "quiz_creation",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "contenttype",
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            type: r.value,
            metaPolltype: a.value,
            metaContenttype: i.value,
          })
        : i;
    }
    function q(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = z(e);
      if (!n.success) return n;
      var r = Z(e),
        a = H(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, {
              wAMOSubMixin: r.success ? r.value : null,
              newsletterQuestionReplyOrTextOrMediaMixinGroup: a.value,
            }),
          )
        : a;
    }
    function U(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = G(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverContentTypeTextOrMediaMixinGroup",
      ).parseContentTypeTextOrMediaMixinGroup(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, {
              contentTypeTextOrMediaMixinGroup: r.value,
            }),
          )
        : r;
    }
    function V(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = Q(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverContentTypeTextOrMediaMixinGroup",
      ).parseContentTypeTextOrMediaMixinGroup(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, {
              contentTypeTextOrMediaMixinGroup: r.value,
            }),
          )
        : r;
    }
    function H(e) {
      var t = j(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterQuestionReply",
          value: t.value,
        });
      var n = Y(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterText",
          value: n.value,
        });
      var r = X(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "NewsletterMedia",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["NewsletterQuestionReply", "NewsletterText", "NewsletterMedia"],
            [t, n, r],
          );
    }
    function G(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "questiontype",
        "question",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaQuestiontype: r.value })
        : r;
    }
    function z(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "edit",
        "3",
      );
      return n.success ? o("WAResultOrError").makeResult({ edit: n.value }) : n;
    }
    function j(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = Q(e);
      if (!n.success) return n;
      var r = Z(e),
        a = K(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, {
              wAMOSubMixin: r.success ? r.value : null,
              newsletterTextOrMediaMixinGroup: a.value,
            }),
          )
        : a;
    }
    function K(e) {
      var t = Y(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NewsletterText",
          value: t.value,
        });
      var n = X(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "NewsletterMedia",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["NewsletterText", "NewsletterMedia"],
            [t, n],
          );
    }
    function Q(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "questiontype",
        "reply",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaQuestiontype: r.value })
        : r;
    }
    function X(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "plaintext");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "mediatype",
        o("WASmaxInMessageDeliverEnums")
          .ENUM_1PSTICKER_AUDIO_AVATARSTICKER_CATALOGLINK_COLLECTION_DOCUMENT_GENAISTICKER_GIF_IMAGE_MOTIONPHOTO_MOTIONVIDEO_PRODUCTLINK_PTT_PTV_STICKER_STICKERPACK_URL_USERCREATEDSTICKER_VCARD_VIDEO,
      );
      if (!r.success) return r;
      var a = J(n.value);
      if (!a.success) return a;
      var i = o(
        "WASmaxInMessageDeliverContentTypeMediaMixin",
      ).parseContentTypeMediaMixin(e);
      if (!i.success) return i;
      var l = Z(e),
        s = o(
          "WASmaxInMessageDeliverMessageAssociationTypeMixin",
        ).parseMessageAssociationTypeMixin(e),
        u = ee(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          { plaintextMediatype: r.value, plaintextPayloadMixin: a.value },
          i.value,
          {
            wAMOSubMixin: l.success ? l.value : null,
            messageAssociationTypeMixin: s.success ? s.value : null,
            mediaMetaMixin: u.success ? u.value : null,
          },
        ),
      );
    }
    function Y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "plaintext");
      if (!n.success) return n;
      var r = J(n.value);
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverContentTypeTextMixin",
      ).parseContentTypeTextMixin(e);
      if (!a.success) return a;
      var i = Z(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ plaintextPayloadMixin: r.value }, a.value, {
          wAMOSubMixin: i.success ? i.value : null,
        }),
      );
    }
    function J(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "plaintext");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytesRange(e, 1, 1048576);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function Z(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "is_wamo_sub",
        "true",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaIsWamoSub: r.value })
        : r;
    }
    function ee(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "contenttype",
      );
      return r.success
        ? o("WAResultOrError").makeResult({ metaContenttype: r.value })
        : r;
    }
    ((l.receiveNewsletterRPC = e),
      (l.parseNewsletterRequest = s),
      (l.parseReceiverContentTypeMediaRCATMixin = u),
      (l.makeNewsletterResponseError = c),
      (l.makeNewsletterResponseSuccess = d),
      (l.parseNewsletterMessageWithJIDMixin = m),
      (l.mergeCommonAckMixin = _),
      (l.parseNewsletterMessageFanoutMixin = f),
      (l.parseNewsletterMessageLastEditTimestampMixin = g),
      (l.parseNewsletterMessageOriginalTimestampMixin = h),
      (l.parsePaidPartnershipContentMixin = y),
      (l.parseAdminProfileMetaMixin = C),
      (l.parseAdminProfileName = b),
      (l.parseAdminProfilePicture = v),
      (l.parseAdminProfileMixin = S),
      (l.parseNewsletterAIContentMetaMixin = R),
      (l.parseNewsletterMessageFanoutContent = L),
      (l.parseNewsletterPollCreationMixin = E),
      (l.parseNewsletterPollResultSnapshotMixin = k),
      (l.parseNewsletterPollVoteVotesVote = I),
      (l.parseNewsletterPollVoteMixin = T),
      (l.parseNewsletterQuestionMixin = D),
      (l.parseNewsletterQuestionResponseMixin = x),
      (l.parseNewsletterQuestionResponseRevokeFanoutMixin = $),
      (l.parseNewsletterQuizCreationMixin = P),
      (l.parseNewsletterReactionMixin = N),
      (l.parseNewsletterReactionRevokeMixin = M),
      (l.parseNewsletterRevokeMixin = w),
      (l.parseNewsletterWAMOEmptyMixin = A),
      (l.parseNewsletterWamoEmptyContent = F),
      (l.parseQuestionTypeResponseMixin = O),
      (l.parseResponseServerIDMixin = B),
      (l.parseContentTypeQuizCreationMixin = W),
      (l.parseNewsletterEditMixin = q),
      (l.parseNewsletterQuestionEmptyMixin = U),
      (l.parseNewsletterQuestionReplyEmptyMixin = V),
      (l.parseNewsletterQuestionReplyOrTextOrMediaMixinGroup = H),
      (l.parseQuestionTypeQuestionMixin = G),
      (l.parseAdminEditMixin = z),
      (l.parseNewsletterQuestionReplyMixin = j),
      (l.parseNewsletterTextOrMediaMixinGroup = K),
      (l.parseQuestionTypeReplyMixin = Q),
      (l.parseNewsletterMediaMixin = X),
      (l.parseNewsletterTextMixin = Y),
      (l.parsePayloadMixin = J),
      (l.parseWAMOSubMixin = Z),
      (l.parseMediaMetaMixin = ee));
  },
  98,
);
