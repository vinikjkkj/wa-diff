__d(
  "WASmaxReceiptDeliverRPC",
  [
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxInReceiptDeprecatedEditMixin",
    "WASmaxInReceiptEnums",
    "WASmaxInReceiptHSMErrorTypeMixin",
    "WASmaxInReceiptKeyBundleMixin",
    "WASmaxInReceiptOfflineMixin",
    "WASmaxInReceiptRegistrationIDMixin",
    "WASmaxInReceiptRetryTypeMixin",
    "WASmaxInReceiptServerErrorTypeMixin",
    "WASmaxInReceiptSingleMixin",
    "WASmaxJsx",
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
          o("WASmaxRpcUtils").errorMessageRpcParsing("Deliver", { Request: t }),
        );
      return {
        parsedRequest: t.value,
        makeDeliverResponseSuccess: function () {
          return d(e);
        },
      };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      if (!n.success) return n;
      var r = o("WASmaxInReceiptOfflineMixin").parseOfflineMixin(e),
        a = o("WASmaxInReceiptDeprecatedEditMixin").parseDeprecatedEditMixin(e),
        i = c(e),
        l = u(e);
      return l.success
        ? o("WAResultOrError").makeResult({
            t: n.value,
            offlineMixin: r.success ? r.value : null,
            deprecatedEditMixin: a.success ? a.value : null,
            toAgentParticipantMixin: i.success ? i.value : null,
            receiptStyles: l.value,
          })
        : l;
    }
    function u(e) {
      var t = p(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverMessageAggregatedStyle",
          value: t.value,
        });
      var n = m(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverAggregatedByMessageIdStyle",
          value: n.value,
        });
      var r = g(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverSenderAggregatedStyleSenderType",
          value: r.value,
        });
      var a = h(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverSenderAggregatedStyleViewType",
          value: a.value,
        });
      var i = f(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverSenderAggregatedStyleNewsletterSelfType",
          value: i.value,
        });
      var l = _(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverSenderAggregatedStyle",
          value: l.value,
        });
      var s = C(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverSingleStyleWithRecipient",
          value: s.value,
        });
      var u = y(e);
      return u.success
        ? o("WAResultOrError").makeResult({
            name: "DeliverSingleStyle",
            value: u.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "MessageAggregatedStyle",
              "AggregatedByMessageIdStyle",
              "SenderAggregatedStyleSenderType",
              "SenderAggregatedStyleViewType",
              "SenderAggregatedStyleNewsletterSelfType",
              "SenderAggregatedStyle",
              "SingleStyleWithRecipient",
              "SingleStyle",
            ],
            [t, n, r, a, i, l, s, u],
          );
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "participant");
      return n.success
        ? o("WAResultOrError").makeResult({ participant: n.value })
        : n;
    }
    function d(e) {
      var t = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrStanzaId,
        e,
        ["id"],
      );
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(t.error);
      var n = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseJid").attrJidEnum,
        e,
        ["from"],
        o("WASmaxInReceiptEnums")
          .DEVICEJID_BROADCASTJID_DEVICEJID_GROUPJID_INTEROPDEVICEJID_INTEROPDEVICEJID_NEWSLETTERJID_STATUSJID,
      );
      if (!n.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(n.error);
      var r = o("WASmaxParseReference").optionalAttrFromReference(
        o("WASmaxParseUtils").attrString,
        e,
        ["type"],
      );
      if (!r.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(r.error);
      var a = o("WASmaxParseReference").optionalAttrFromReference(
        o("WASmaxParseJid").attrJidEnum,
        e,
        ["participant"],
        o("WASmaxInReceiptEnums")
          .DEVICEJID_USERJID_DEVICEJID_USERJID_USERJID_USERJID,
      );
      if (!a.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(a.error);
      var i = o("WASmaxParseReference").optionalAttrFromReference(
        o("WASmaxParseJid").attrJidEnum,
        e,
        ["recipient"],
        o("WASmaxInReceiptEnums").USERJID_LIDUSERJID_USERJID,
      );
      if (!i.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(i.error);
      var l = o("WASmaxJsx").smax("ack", {
        id: o("WAWap").STANZA_ID(t.value),
        class: "receipt",
        to: o("WAWap").JID(n.value),
        type: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, r.value),
        participant: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, a.value),
        recipient: o("WASmaxAttrs").OPTIONAL(o("WAWap").JID, i.value),
      });
      return l;
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "from",
        o("WASmaxInReceiptEnums").BROADCASTJID_GROUPJID_NEWSLETTERJID_STATUSJID,
      );
      if (!n.success) return n;
      var r = me(e),
        a = F(e);
      if (!a.success) return a;
      var i = ge(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          { from: n.value, recipientMixin: r.success ? r.value : null },
          a.value,
          { statusClassMixin: i.success ? i.value : null },
        ),
      );
    }
    function p(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "from",
        o("WASmaxInReceiptEnums").BROADCASTJID_GROUPJID_NEWSLETTERJID_STATUSJID,
      );
      if (!n.success) return n;
      var r = me(e),
        a = S(e);
      if (!a.success) return a;
      var i = R(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          { from: n.value, recipientMixin: r.success ? r.value : null },
          a.value,
          { messageAggregatedStyleReceiptType: i.success ? i.value : null },
        ),
      );
    }
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = me(e),
        r = k(e);
      if (!r.success) return r;
      var a = J(e),
        i = U(e),
        l = q(e),
        s = Z(e),
        u = D(e);
      if (!u.success) return u;
      var c = x(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          { recipientMixin: n.success ? n.value : null },
          r.value,
          {
            deliverPaidConversationAggregatedMixin: a.success ? a.value : null,
            deliverBizRolesMixin: i.success ? i.value : null,
            deliverBizBotGatingMixin: l.success ? l.value : null,
            deliverSenderPNMixin: s.success ? s.value : null,
            senderAggregatedStyleChatType: u.value,
            senderAggregatedStyleReceiptType: c.success ? c.value : null,
          },
        ),
      );
    }
    function f(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = le(e);
      if (!n.success) return n;
      var r = k(e);
      if (!r.success) return r;
      var a = L(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value, {
              readOrPlayedSelfTypeMixinGroup: a.value,
            }),
          )
        : a;
    }
    function g(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = k(e);
      if (!n.success) return n;
      var r = fe(e);
      if (!r.success) return r;
      var a = b(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value, {
              individualWithRecipientOrDeliverGroupStatusOrGroupOrDeliverStatusOrBroadcastMixinGroup:
                a.value,
            }),
          )
        : a;
    }
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = le(e);
      if (!n.success) return n;
      var r = T(e);
      if (!r.success) return r;
      var a = w(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value, a.value),
          )
        : a;
    }
    function y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = me(e),
        r = o("WASmaxInReceiptSingleMixin").parseSingleMixin(e);
      if (!r.success) return r;
      var a = J(e),
        i = U(e),
        l = O(e),
        s = q(e),
        u = Z(e),
        c = P(e);
      if (!c.success) return c;
      var d = N(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          { recipientMixin: n.success ? n.value : null },
          r.value,
          {
            deliverPaidConversationAggregatedMixin: a.success ? a.value : null,
            deliverBizRolesMixin: i.success ? i.value : null,
            botClientMultiThreadIDReceiptMixin: l.success ? l.value : null,
            deliverBizBotGatingMixin: s.success ? s.value : null,
            deliverSenderPNMixin: u.success ? u.value : null,
            singleStyleChatType: c.value,
            singleStyleReceiptType: d.success ? d.value : null,
          },
        ),
      );
    }
    function C(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxInReceiptSingleMixin").parseSingleMixin(e);
      if (!n.success) return n;
      var r = J(e),
        a = Z(e),
        i = b(e);
      if (!i.success) return i;
      var l = $(e);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, {
              deliverPaidConversationAggregatedMixin: r.success
                ? r.value
                : null,
              deliverSenderPNMixin: a.success ? a.value : null,
              individualWithRecipientOrDeliverGroupStatusOrGroupOrDeliverStatusOrBroadcastMixinGroup:
                i.value,
              senderTypeOrRetryMixinGroup: l.value,
            }),
          )
        : l;
    }
    function b(e) {
      var t = ie(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IndividualWithRecipient",
          value: t.value,
        });
      var n = H(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverGroupStatus",
          value: n.value,
        });
      var r = re(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "Group",
          value: r.value,
        });
      var a = ee(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverStatus",
          value: a.value,
        });
      var i = W(e);
      return i.success
        ? o("WAResultOrError").makeResult({ name: "Broadcast", value: i.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IndividualWithRecipient",
              "GroupStatus",
              "Group",
              "Status",
              "Broadcast",
            ],
            [t, n, r, a, i],
          );
    }
    function v(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "user");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrDeviceJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "participant_pn",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "participant_username",
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            jid: n.value,
            t: r.value,
            participantPn: a.value,
            participantUsername: i.value,
          })
        : i;
    }
    function S(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "participants");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStanzaId(n.value, "key");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").mapChildrenWithTag(
        n.value,
        "user",
        1,
        1024,
        v,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            id: r.value,
            participantsKey: a.value,
            participantsUser: i.value,
          })
        : i;
    }
    function R(e) {
      var t = fe(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "SenderType",
          value: t.value,
        });
      var n = oe(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "InactiveType",
          value: n.value,
        });
      var r = de(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ReadType",
          value: r.value,
        });
      var a = ce(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "ReadSelfType",
          value: a.value,
        });
      var i = ue(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "PlayedType",
          value: i.value,
        });
      var l = se(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "PlayedSelfType",
          value: l.value,
        });
      var s = M(e);
      return s.success
        ? o("WAResultOrError").makeResult({
            name: "UnknownType",
            value: s.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "SenderType",
              "InactiveType",
              "ReadType",
              "ReadSelfType",
              "PlayedType",
              "PlayedSelfType",
              "UnknownType",
            ],
            [t, n, r, a, i, l, s],
          );
    }
    function L(e) {
      var t = ce(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ReadSelfType",
          value: t.value,
        });
      var n = se(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "PlayedSelfType",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["ReadSelfType", "PlayedSelfType"],
            [t, n],
          );
    }
    function E(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "item");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxInReceiptDeprecatedEditMixin").parseDeprecatedEditMixin(
        e,
      );
      return o("WAResultOrError").makeResult({
        id: n.value,
        deprecatedEditMixin: r.success ? r.value : null,
      });
    }
    function k(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "list");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(
        n.value,
        "item",
        0,
        128e3,
        E,
      );
      return a.success
        ? o("WAResultOrError").makeResult({ id: r.value, listItem: a.value })
        : a;
    }
    function I(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "item");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(
        e,
        "server_id",
        99,
        2147476647,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ serverId: n.value })
        : n;
    }
    function T(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "list");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(
        n.value,
        "item",
        0,
        128e3,
        I,
      );
      return a.success
        ? o("WAResultOrError").makeResult({ id: r.value, listItem: a.value })
        : a;
    }
    function D(e) {
      var t = ae(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "Individual",
          value: t.value,
        });
      var n = H(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverGroupStatus",
          value: n.value,
        });
      var r = re(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "Group",
          value: r.value,
        });
      var a = ee(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverStatus",
          value: a.value,
        });
      var i = W(e);
      return i.success
        ? o("WAResultOrError").makeResult({ name: "Broadcast", value: i.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Individual", "GroupStatus", "Group", "Status", "Broadcast"],
            [t, n, r, a, i],
          );
    }
    function x(e) {
      var t = oe(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "InactiveType",
          value: t.value,
        });
      var n = de(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "ReadType",
          value: n.value,
        });
      var r = ce(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ReadSelfType",
          value: r.value,
        });
      var a = ue(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "PlayedType",
          value: a.value,
        });
      var i = se(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "PlayedSelfType",
          value: i.value,
        });
      var l = te(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "DeprecatedDeliveryType",
          value: l.value,
        });
      var s = M(e);
      return s.success
        ? o("WAResultOrError").makeResult({
            name: "UnknownType",
            value: s.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "InactiveType",
              "ReadType",
              "ReadSelfType",
              "PlayedType",
              "PlayedSelfType",
              "DeprecatedDeliveryType",
              "UnknownType",
            ],
            [t, n, r, a, i, l, s],
          );
    }
    function $(e) {
      var t = fe(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "SenderType",
          value: t.value,
        });
      var n = pe(e);
      return n.success
        ? o("WAResultOrError").makeResult({ name: "Retry", value: n.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["SenderType", "Retry"],
            [t, n],
          );
    }
    function P(e) {
      var t = ae(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "Individual",
          value: t.value,
        });
      var n = H(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverGroupStatus",
          value: n.value,
        });
      var r = re(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "Group",
          value: r.value,
        });
      var a = ee(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverStatus",
          value: a.value,
        });
      var i = W(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "Broadcast",
          value: i.value,
        });
      var l = le(e);
      return l.success
        ? o("WAResultOrError").makeResult({
            name: "NewsletterDeliver",
            value: l.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "Individual",
              "GroupStatus",
              "Group",
              "Status",
              "Broadcast",
              "NewsletterDeliver",
            ],
            [t, n, r, a, i, l],
          );
    }
    function N(e) {
      var t = o(
        "WASmaxInReceiptServerErrorTypeMixin",
      ).parseServerErrorTypeMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ServerErrorType",
          value: t.value,
        });
      var n = oe(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "InactiveType",
          value: n.value,
        });
      var r = de(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ReadType",
          value: r.value,
        });
      var a = ce(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "ReadSelfType",
          value: a.value,
        });
      var i = ue(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "PlayedType",
          value: i.value,
        });
      var l = se(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "PlayedSelfType",
          value: l.value,
        });
      var s = pe(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "Retry",
          value: s.value,
        });
      var u = G(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverLIDFeatureIncapableType",
          value: u.value,
        });
      var c = V(e);
      if (c.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverBizType",
          value: c.value,
        });
      var d = ne(e);
      if (d.success)
        return o("WAResultOrError").makeResult({
          name: "EngagedType",
          value: d.value,
        });
      var m = M(e);
      return m.success
        ? o("WAResultOrError").makeResult({
            name: "UnknownType",
            value: m.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "ServerErrorType",
              "InactiveType",
              "ReadType",
              "ReadSelfType",
              "PlayedType",
              "PlayedSelfType",
              "Retry",
              "LIDFeatureIncapableType",
              "BizType",
              "EngagedType",
              "UnknownType",
            ],
            [t, n, r, a, i, l, s, u, c, d, m],
          );
    }
    function M(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "type");
      return n.success ? o("WAResultOrError").makeResult({ type: n.value }) : n;
    }
    function w(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "view",
      );
      return n.success ? o("WAResultOrError").makeResult({ type: n.value }) : n;
    }
    function A(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "user");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrDeviceJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(
        e,
        "t",
        1577865600,
        4102473600,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStringEnum(
        e,
        "type",
        o("WASmaxInReceiptEnums").ENUM_DELIVERY_INACTIVE_PLAYED_READ,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "participant_pn",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "participant_username",
      );
      return l.success
        ? o("WAResultOrError").makeResult({
            jid: n.value,
            t: r.value,
            type: a.value,
            participantPn: i.value,
            participantUsername: l.value,
          })
        : l;
    }
    function F(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "participants");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStanzaId(n.value, "message_id");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").mapChildrenWithTag(
        n.value,
        "user",
        1,
        1024,
        A,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            id: r.value,
            participantsMessageId: a.value,
            participantsUser: i.value,
          })
        : i;
    }
    function O(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "bot");
      if (!n.success) return n;
      var r = ye(n.value);
      if (!r.success) return r;
      var a = B(n.value);
      return o("WAResultOrError").makeResult({
        botBotClientMultiThreadIDMixin: r.value,
        botBotConversationThreadIDMixin: a.success ? a.value : null,
      });
    }
    function B(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "bot");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "conversation_thread_id");
      return n.success
        ? o("WAResultOrError").makeResult({ conversationThreadId: n.value })
        : n;
    }
    function W(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrBroadcastJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrDeviceJid(e, "participant");
      return r.success
        ? o("WAResultOrError").makeResult({
            from: n.value,
            participant: r.value,
          })
        : r;
    }
    function q(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "gating");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "bot");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrString(a.value, "state");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrString(a.value, "notice_id");
      return l.success
        ? o("WAResultOrError").makeResult({
            bizGatingBotState: i.value,
            bizGatingBotNoticeId: l.value,
          })
        : l;
    }
    function U(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "actual_actors",
        0,
        100,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "host_storage",
        0,
        100,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "privacy_mode_ts",
        1577865600,
        4102473600,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            bizActualActors: r.value,
            bizHostStorage: a.value,
            bizPrivacyModeTs: i.value,
          })
        : i;
    }
    function V(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = he(e);
      return n.success
        ? o("WAResultOrError").makeResult({ bizErrorType: n.value })
        : n;
    }
    function H(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrGroupJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrDeviceJid(e, "participant");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "participant_username",
      );
      if (!a.success) return a;
      var i = ge(e);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: n.value,
                participant: r.value,
                participantUsername: a.value,
              },
              i.value,
            ),
          )
        : i;
    }
    function G(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "type",
        "feature-incapable",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "reason",
        "lid",
      );
      if (!a.success) return a;
      var i = ve(e);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { errorType: r.value, errorReason: a.value },
              i.value,
            ),
          )
        : i;
    }
    function z(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "delivery_context");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "optimization_goal",
        o("WASmaxInReceiptEnums").ENUM_DELIVERY_NOOPTIMIZATION,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ optimizationGoal: n.value })
        : n;
    }
    function j(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "source_url");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentString(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function K(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "referral");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "source_url", j);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "source_type",
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            sourceType: r.value,
            sourceUrl: n.value,
          })
        : r;
    }
    function Q(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "origin");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "referral", K);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "type");
      return r.success
        ? o("WAResultOrError").makeResult({ type: r.value, referral: n.value })
        : r;
    }
    function X(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "pricing");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "consumer_country_code",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "business_country_code",
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            consumerCountryCode: n.value,
            businessCountryCode: r.value,
          })
        : r;
    }
    function Y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "item");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "delivery_context",
        z,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "origin", Q);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(e, "pricing", X);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrString(e, "paid_convo_id");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").attrStringEnum(
        e,
        "pricing_model",
        o("WASmaxInReceiptEnums").ENUM_CBP_NBP_PMP,
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").attrStringEnum(
        e,
        "billable",
        o("WASmaxInReceiptEnums").ENUM_FALSE_TRUE,
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "pricing_category",
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "pricing_type",
        o("WASmaxInReceiptEnums")
          .ENUM_FREECUSTOMERSERVICE_FREEENTRYPOINT_REGULAR,
      );
      return d.success
        ? o("WAResultOrError").makeResult({
            id: i.value,
            paidConvoId: l.value,
            pricingModel: s.value,
            billable: u.value,
            pricingCategory: c.value,
            pricingType: d.value,
            deliveryContext: n.value,
            origin: r.value,
            pricing: a.value,
          })
        : d;
    }
    function J(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        n.value,
        "paid_messaging",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "item",
        0,
        128e3,
        Y,
      );
      return a.success
        ? o("WAResultOrError").makeResult({ bizPaidMessagingItem: a.value })
        : a;
    }
    function Z(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "sender_pn");
      return n.success
        ? o("WAResultOrError").makeResult({ senderPn: n.value })
        : n;
    }
    function ee(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrStatusJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrDeviceJid(e, "participant");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "participant_pn",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "participant_username",
      );
      if (!i.success) return i;
      var l = ge(e);
      return o("WAResultOrError").makeResult({
        from: n.value,
        participant: r.value,
        participantPn: a.value,
        participantUsername: i.value,
        statusClassMixin: l.success ? l.value : null,
      });
    }
    function te(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "type",
        o("WASmaxInReceiptEnums").ENUM_DELIVER_DELIVERY,
      );
      return n.success ? o("WAResultOrError").makeResult({ type: n.value }) : n;
    }
    function ne(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "engaged",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(n.value, "value");
      if (!a.success) return a;
      var i = _e(n.value);
      return i.success
        ? o("WAResultOrError").makeResult({
            type: r.value,
            bizValue: a.value,
            bizRoiTemplateSourceMixin: i.value,
          })
        : i;
    }
    function re(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrGroupJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrJidEnum(
        e,
        "participant",
        o("WASmaxInReceiptEnums").DEVICEJID_DEVICEJID_USERJID_USERJID,
      );
      if (!r.success) return r;
      var a = Ce(e);
      return o("WAResultOrError").makeResult({
        from: n.value,
        participant: r.value,
        botIsLIDFlagMixin: a.success ? a.value : null,
      });
    }
    function oe(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "inactive",
      );
      return n.success ? o("WAResultOrError").makeResult({ type: n.value }) : n;
    }
    function ae(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "from",
        o("WASmaxInReceiptEnums")
          .DEVICEJID_DEVICEJID_INTEROPDEVICEJID_INTEROPDEVICEJID,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrJidEnum,
        e,
        "participant",
        o("WASmaxInReceiptEnums").USERJID_USERJID,
      );
      if (!r.success) return r;
      var a = me(e);
      return o("WAResultOrError").makeResult({
        from: n.value,
        participant: r.value,
        recipientMixin: a.success ? a.value : null,
      });
    }
    function ie(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrDeviceJid(e, "from");
      if (!n.success) return n;
      var r = me(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ from: n.value }, r.value),
          )
        : r;
    }
    function le(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrNewsletterJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrDeviceJid(e, "participant");
      if (!r.success) return r;
      var a = ge(e);
      return o("WAResultOrError").makeResult({
        from: n.value,
        participant: r.value,
        statusClassMixin: a.success ? a.value : null,
      });
    }
    function se(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "played-self",
      );
      return n.success ? o("WAResultOrError").makeResult({ type: n.value }) : n;
    }
    function ue(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "played",
      );
      return n.success ? o("WAResultOrError").makeResult({ type: n.value }) : n;
    }
    function ce(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "read-self",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "sts",
        15778656e8,
        41024736e8,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ type: n.value, sts: r.value })
        : r;
    }
    function de(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "read",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "sts",
        15778656e8,
        41024736e8,
      );
      return r.success
        ? o("WAResultOrError").makeResult({ type: n.value, sts: r.value })
        : r;
    }
    function me(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "recipient",
        o("WASmaxInReceiptEnums").USERJID_LIDUSERJID_USERJID,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ recipient: n.value })
        : n;
    }
    function pe(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxInReceiptRetryTypeMixin").parseRetryTypeMixin(e);
      if (!n.success) return n;
      var r = o("WASmaxInReceiptRegistrationIDMixin").parseRegistrationIDMixin(
        e,
      );
      if (!r.success) return r;
      var a = o("WASmaxInReceiptKeyBundleMixin").parseKeyBundleMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, r.value, {
          keyBundleMixin: a.success ? a.value : null,
        }),
      );
    }
    function _e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "biz");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "source",
        o("WASmaxInReceiptEnums")
          .ENUM_BODYLINK_CTAAPP_CTACALL_CTAURL_MEDIADOC_MEDIAIMAGE_MEDIAVIDEO_QUICKREPLY,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ source: n.value })
        : n;
    }
    function fe(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "sender",
      );
      return n.success ? o("WAResultOrError").makeResult({ type: n.value }) : n;
    }
    function ge(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "class",
        "status",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ class: n.value })
        : n;
    }
    function he(e) {
      var t = be(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverBizFeatureIncapableTypeWithReason",
          value: t.value,
        });
      var n = ve(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverFeatureIncapableErrorType",
          value: n.value,
        });
      var r = o("WASmaxInReceiptHSMErrorTypeMixin").parseHSMErrorTypeMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "HSMErrorType",
          value: r.value,
        });
      var a = Se(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "OrderStatusErrorType",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "BizFeatureIncapableTypeWithReason",
              "FeatureIncapableErrorType",
              "HSMErrorType",
              "OrderStatusErrorType",
            ],
            [t, n, r, a],
          );
    }
    function ye(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "bot");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "client_thread_id");
      return n.success
        ? o("WAResultOrError").makeResult({ clientThreadId: n.value })
        : n;
    }
    function Ce(e) {
      var t = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "is_lid",
        "true",
      );
      return t.success
        ? o("WAResultOrError").makeResult({ isLid: t.value })
        : t;
    }
    function be(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(n.value, "reason");
      if (!r.success) return r;
      var a = ve(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ bizReason: r.value }, a.value),
          )
        : a;
    }
    function ve(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "error",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "type",
        "feature-incapable",
      );
      return a.success
        ? o("WAResultOrError").makeResult({ type: r.value, errorType: a.value })
        : a;
    }
    function Se(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "error",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "type",
        "order-status-update-failed",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrStringEnum(
        r.value,
        "reason",
        o("WASmaxInReceiptEnums").ENUM_CANCELLATIONFAILED_INVALIDTRANSITION,
      );
      return l.success
        ? o("WAResultOrError").makeResult({
            type: a.value,
            errorType: i.value,
            bizReason: l.value,
          })
        : l;
    }
    ((l.receiveDeliverRPC = e),
      (l.parseDeliverRequest = s),
      (l.parseReceiptStyles = u),
      (l.parseToAgentParticipantMixin = c),
      (l.makeDeliverResponseSuccess = d),
      (l.parseDeliverAggregatedByMessageIdStyleMixin = m),
      (l.parseDeliverMessageAggregatedStyleMixin = p),
      (l.parseDeliverSenderAggregatedStyleMixin = _),
      (l.parseDeliverSenderAggregatedStyleNewsletterSelfTypeMixin = f),
      (l.parseDeliverSenderAggregatedStyleSenderTypeMixin = g),
      (l.parseDeliverSenderAggregatedStyleViewTypeMixin = h),
      (l.parseDeliverSingleStyleMixin = y),
      (l.parseDeliverSingleStyleWithRecipientMixin = C),
      (l.parseIndividualWithRecipientOrDeliverGroupStatusOrGroupOrDeliverStatusOrBroadcastMixinGroup =
        b),
      (l.parseMessageAggregatedParticipantsUser = v),
      (l.parseMessageAggregatedMixin = S),
      (l.parseMessageAggregatedStyleReceiptType = R),
      (l.parseReadOrPlayedSelfTypeMixinGroup = L),
      (l.parseSenderAggregatedDeliverListItem = E),
      (l.parseSenderAggregatedDeliverMixin = k),
      (l.parseSenderAggregatedDeliverServerIDListItem = I),
      (l.parseSenderAggregatedDeliverServerIDMixin = T),
      (l.parseSenderAggregatedStyleChatType = D),
      (l.parseSenderAggregatedStyleReceiptType = x),
      (l.parseSenderTypeOrRetryMixinGroup = $),
      (l.parseSingleStyleChatType = P),
      (l.parseSingleStyleReceiptType = N),
      (l.parseUnknownTypeMixin = M),
      (l.parseViewTypeMixin = w),
      (l.parseAggregatedByMessageIdParticipantsUser = A),
      (l.parseAggregatedByMessageIdMixin = F),
      (l.parseBotClientMultiThreadIDReceiptMixin = O),
      (l.parseBotConversationThreadIDMixin = B),
      (l.parseBroadcastMixin = W),
      (l.parseDeliverBizBotGatingMixin = q),
      (l.parseDeliverBizRolesMixin = U),
      (l.parseDeliverBizTypeMixin = V),
      (l.parseDeliverGroupStatusMixin = H),
      (l.parseDeliverLIDFeatureIncapableTypeMixin = G),
      (l.parseDeliverPaidConversationAggregatedBizPaidMessagingItemDeliveryContext =
        z),
      (l.parseDeliverPaidConversationAggregatedBizPaidMessagingItemOriginReferralSourceUrl =
        j),
      (l.parseDeliverPaidConversationAggregatedBizPaidMessagingItemOriginReferral =
        K),
      (l.parseDeliverPaidConversationAggregatedBizPaidMessagingItemOrigin = Q),
      (l.parseDeliverPaidConversationAggregatedBizPaidMessagingItemPricing = X),
      (l.parseDeliverPaidConversationAggregatedBizPaidMessagingItem = Y),
      (l.parseDeliverPaidConversationAggregatedMixin = J),
      (l.parseDeliverSenderPNMixin = Z),
      (l.parseDeliverStatusMixin = ee),
      (l.parseDeprecatedDeliveryTypeMixin = te),
      (l.parseEngagedTypeMixin = ne),
      (l.parseGroupMixin = re),
      (l.parseInactiveTypeMixin = oe),
      (l.parseIndividualMixin = ae),
      (l.parseIndividualWithRecipientMixin = ie),
      (l.parseNewsletterDeliverMixin = le),
      (l.parsePlayedSelfTypeMixin = se),
      (l.parsePlayedTypeMixin = ue),
      (l.parseReadSelfTypeMixin = ce),
      (l.parseReadTypeMixin = de),
      (l.parseRecipientMixin = me),
      (l.parseRetryMixin = pe),
      (l.parseRoiTemplateSourceMixin = _e),
      (l.parseSenderTypeMixin = fe),
      (l.parseStatusClassMixin = ge),
      (l.parseBizErrorType = he),
      (l.parseBotClientMultiThreadIDMixin = ye),
      (l.parseBotIsLIDFlagMixin = Ce),
      (l.parseDeliverBizFeatureIncapableTypeWithReasonMixin = be),
      (l.parseDeliverFeatureIncapableErrorTypeMixin = ve),
      (l.parseOrderStatusErrorTypeMixin = Se));
  },
  98,
);
