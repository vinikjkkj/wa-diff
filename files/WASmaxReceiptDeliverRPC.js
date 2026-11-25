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
      var t = _(e);
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
      var r = h(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverSenderAggregatedStyleSenderType",
          value: r.value,
        });
      var a = y(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverSenderAggregatedStyleViewType",
          value: a.value,
        });
      var i = g(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverSenderAggregatedStyleNewsletterSelfType",
          value: i.value,
        });
      var l = f(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverSenderAggregatedStyle",
          value: l.value,
        });
      var s = b(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverSingleStyleWithRecipient",
          value: s.value,
        });
      var u = p(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverBotUnavailableStyle",
          value: u.value,
        });
      var c = C(e);
      return c.success
        ? o("WAResultOrError").makeResult({
            name: "DeliverSingleStyle",
            value: c.value,
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
              "BotUnavailableStyle",
              "SingleStyle",
            ],
            [t, n, r, a, i, l, s, u, c],
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
          .DEVICEJID_BROADCASTJID_DEVICEJID_GROUPJID_INTEROPDEVICEJID_INTEROPDEVICEJID_LIDUSERJID_NEWSLETTERJID_STATUSJID_USERJID,
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
      var r = he(e),
        a = O(e);
      if (!a.success) return a;
      var i = ve(e);
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
        o("WASmaxInReceiptEnums").GROUPJID_LIDUSERJID_USERJID,
      );
      if (!n.success) return n;
      var r = o("WASmaxInReceiptSingleMixin").parseSingleMixin(e);
      if (!r.success) return r;
      var a = z(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ from: n.value }, r.value, a.value),
          )
        : a;
    }
    function _(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "from",
        o("WASmaxInReceiptEnums").BROADCASTJID_GROUPJID_NEWSLETTERJID_STATUSJID,
      );
      if (!n.success) return n;
      var r = he(e),
        a = R(e);
      if (!a.success) return a;
      var i = ve(e),
        l = L(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          { from: n.value, recipientMixin: r.success ? r.value : null },
          a.value,
          {
            statusClassMixin: i.success ? i.value : null,
            messageAggregatedStyleReceiptType: l.success ? l.value : null,
          },
        ),
      );
    }
    function f(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = he(e),
        r = I(e);
      if (!r.success) return r;
      var a = ne(e),
        i = V(e),
        l = U(e),
        s = re(e),
        u = x(e);
      if (!u.success) return u;
      var c = $(e);
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
    function g(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = me(e);
      if (!n.success) return n;
      var r = I(e);
      if (!r.success) return r;
      var a = E(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value, {
              readOrPlayedSelfTypeMixinGroup: a.value,
            }),
          )
        : a;
    }
    function h(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = I(e);
      if (!n.success) return n;
      var r = be(e);
      if (!r.success) return r;
      var a = v(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value, {
              individualWithRecipientOrDeliverGroupStatusOrGroupOrDeliverStatusOrBroadcastMixinGroup:
                a.value,
            }),
          )
        : a;
    }
    function y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = me(e);
      if (!n.success) return n;
      var r = D(e);
      if (!r.success) return r;
      var a = A(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value, a.value),
          )
        : a;
    }
    function C(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = he(e),
        r = o("WASmaxInReceiptSingleMixin").parseSingleMixin(e);
      if (!r.success) return r;
      var a = ne(e),
        i = V(e),
        l = B(e),
        s = U(e),
        u = re(e),
        c = N(e);
      if (!c.success) return c;
      var d = M(e);
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
    function b(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxInReceiptSingleMixin").parseSingleMixin(e);
      if (!n.success) return n;
      var r = ne(e),
        a = re(e),
        i = v(e);
      if (!i.success) return i;
      var l = P(e);
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
    function v(e) {
      var t = de(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IndividualWithRecipient",
          value: t.value,
        });
      var n = j(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverGroupStatus",
          value: n.value,
        });
      var r = se(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "Group",
          value: r.value,
        });
      var a = ae(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverStatus",
          value: a.value,
        });
      var i = q(e);
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
    function S(e) {
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
    function R(e) {
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
        S,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            id: r.value,
            participantsKey: a.value,
            participantsUser: i.value,
          })
        : i;
    }
    function L(e) {
      var t = be(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "SenderType",
          value: t.value,
        });
      var n = ue(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "InactiveType",
          value: n.value,
        });
      var r = ge(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ReadType",
          value: r.value,
        });
      var a = fe(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "ReadSelfType",
          value: a.value,
        });
      var i = _e(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "PlayedType",
          value: i.value,
        });
      var l = pe(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "PlayedSelfType",
          value: l.value,
        });
      var s = w(e);
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
    function E(e) {
      var t = fe(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ReadSelfType",
          value: t.value,
        });
      var n = pe(e);
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
    function k(e) {
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
    function I(e) {
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
        k,
      );
      return a.success
        ? o("WAResultOrError").makeResult({ id: r.value, listItem: a.value })
        : a;
    }
    function T(e) {
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
    function D(e) {
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
        T,
      );
      return a.success
        ? o("WAResultOrError").makeResult({ id: r.value, listItem: a.value })
        : a;
    }
    function x(e) {
      var t = ce(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "Individual",
          value: t.value,
        });
      var n = j(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverGroupStatus",
          value: n.value,
        });
      var r = se(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "Group",
          value: r.value,
        });
      var a = ae(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverStatus",
          value: a.value,
        });
      var i = q(e);
      return i.success
        ? o("WAResultOrError").makeResult({ name: "Broadcast", value: i.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Individual", "GroupStatus", "Group", "Status", "Broadcast"],
            [t, n, r, a, i],
          );
    }
    function $(e) {
      var t = ue(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "InactiveType",
          value: t.value,
        });
      var n = ge(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "ReadType",
          value: n.value,
        });
      var r = fe(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ReadSelfType",
          value: r.value,
        });
      var a = _e(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "PlayedType",
          value: a.value,
        });
      var i = pe(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "PlayedSelfType",
          value: i.value,
        });
      var l = ie(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "DeprecatedDeliveryType",
          value: l.value,
        });
      var s = w(e);
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
    function P(e) {
      var t = be(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "SenderType",
          value: t.value,
        });
      var n = ye(e);
      return n.success
        ? o("WAResultOrError").makeResult({ name: "Retry", value: n.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["SenderType", "Retry"],
            [t, n],
          );
    }
    function N(e) {
      var t = oe(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverSingleIndividual",
          value: t.value,
        });
      var n = j(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverGroupStatus",
          value: n.value,
        });
      var r = se(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "Group",
          value: r.value,
        });
      var a = ae(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverStatus",
          value: a.value,
        });
      var i = q(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "Broadcast",
          value: i.value,
        });
      var l = me(e);
      return l.success
        ? o("WAResultOrError").makeResult({
            name: "NewsletterDeliver",
            value: l.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "SingleIndividual",
              "GroupStatus",
              "Group",
              "Status",
              "Broadcast",
              "NewsletterDeliver",
            ],
            [t, n, r, a, i, l],
          );
    }
    function M(e) {
      var t = o(
        "WASmaxInReceiptServerErrorTypeMixin",
      ).parseServerErrorTypeMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ServerErrorType",
          value: t.value,
        });
      var n = ue(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "InactiveType",
          value: n.value,
        });
      var r = ge(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "ReadType",
          value: r.value,
        });
      var a = fe(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "ReadSelfType",
          value: a.value,
        });
      var i = _e(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "PlayedType",
          value: i.value,
        });
      var l = pe(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "PlayedSelfType",
          value: l.value,
        });
      var s = ye(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "Retry",
          value: s.value,
        });
      var u = Q(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverLIDFeatureIncapableType",
          value: u.value,
        });
      var c = H(e);
      if (c.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverBizType",
          value: c.value,
        });
      var d = le(e);
      if (d.success)
        return o("WAResultOrError").makeResult({
          name: "EngagedType",
          value: d.value,
        });
      var m = K(e);
      if (m.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverIntegrityDropErrorType",
          value: m.value,
        });
      var p = w(e);
      return p.success
        ? o("WAResultOrError").makeResult({
            name: "UnknownType",
            value: p.value,
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
              "IntegrityDropErrorType",
              "UnknownType",
            ],
            [t, n, r, a, i, l, s, u, c, d, m, p],
          );
    }
    function w(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "type");
      return n.success ? o("WAResultOrError").makeResult({ type: n.value }) : n;
    }
    function A(e) {
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
    function F(e) {
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
    function O(e) {
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
        F,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            id: r.value,
            participantsMessageId: a.value,
            participantsUser: i.value,
          })
        : i;
    }
    function B(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "bot");
      if (!n.success) return n;
      var r = Re(n.value);
      if (!r.success) return r;
      var a = W(n.value);
      return o("WAResultOrError").makeResult({
        botBotClientMultiThreadIDMixin: r.value,
        botBotConversationThreadIDMixin: a.success ? a.value : null,
      });
    }
    function W(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "bot");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "conversation_thread_id");
      return n.success
        ? o("WAResultOrError").makeResult({ conversationThreadId: n.value })
        : n;
    }
    function q(e) {
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
    function U(e) {
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
    function V(e) {
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
    function H(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = Se(e);
      return n.success
        ? o("WAResultOrError").makeResult({ bizErrorType: n.value })
        : n;
    }
    function G(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "to");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "jid",
        o("WASmaxInReceiptEnums").DEVICEJID_USERJID_DEVICEJID_LIDUSERJID,
      );
      return n.success ? o("WAResultOrError").makeResult({ jid: n.value }) : n;
    }
    function z(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "bot");
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
        "bot-unavailable",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        r.value,
        "count",
        1,
        10,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "to",
        1,
        1024,
        G,
      );
      return s.success
        ? o("WAResultOrError").makeResult({
            type: a.value,
            errorType: i.value,
            botCount: l.value,
            botTo: s.value,
          })
        : s;
    }
    function j(e) {
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
      var i = ve(e);
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
    function K(e) {
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
        "integrity-drop",
      );
      return a.success
        ? o("WAResultOrError").makeResult({ type: r.value, errorType: a.value })
        : a;
    }
    function Q(e) {
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
      var i = Te(e);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { errorType: r.value, errorReason: a.value },
              i.value,
            ),
          )
        : i;
    }
    function X(e) {
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
    function Y(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "source_url");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentString(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function J(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "referral");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "source_url", Y);
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
    function Z(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "origin");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(e, "referral", J);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "type");
      return r.success
        ? o("WAResultOrError").makeResult({ type: r.value, referral: n.value })
        : r;
    }
    function ee(e) {
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
    function te(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "item");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "delivery_context",
        X,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(e, "origin", Z);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(e, "pricing", ee);
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
    function ne(e) {
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
        te,
      );
      return a.success
        ? o("WAResultOrError").makeResult({ bizPaidMessagingItem: a.value })
        : a;
    }
    function re(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "sender_pn");
      return n.success
        ? o("WAResultOrError").makeResult({ senderPn: n.value })
        : n;
    }
    function oe(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = ce(e);
      if (!n.success) return n;
      var r = ve(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, {
          statusClassMixin: r.success ? r.value : null,
        }),
      );
    }
    function ae(e) {
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
      var l = ve(e);
      return o("WAResultOrError").makeResult({
        from: n.value,
        participant: r.value,
        participantPn: a.value,
        participantUsername: i.value,
        statusClassMixin: l.success ? l.value : null,
      });
    }
    function ie(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStringEnum(
        e,
        "type",
        o("WASmaxInReceiptEnums").ENUM_DELIVER_DELIVERY,
      );
      return n.success ? o("WAResultOrError").makeResult({ type: n.value }) : n;
    }
    function le(e) {
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
      var i = Ce(n.value);
      return i.success
        ? o("WAResultOrError").makeResult({
            type: r.value,
            bizValue: a.value,
            bizRoiTemplateSourceMixin: i.value,
          })
        : i;
    }
    function se(e) {
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
      var a = Le(e);
      return o("WAResultOrError").makeResult({
        from: n.value,
        participant: r.value,
        botIsLIDFlagMixin: a.success ? a.value : null,
      });
    }
    function ue(e) {
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
    function ce(e) {
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
      var a = he(e);
      return o("WAResultOrError").makeResult({
        from: n.value,
        participant: r.value,
        recipientMixin: a.success ? a.value : null,
      });
    }
    function de(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrDeviceJid(e, "from");
      if (!n.success) return n;
      var r = he(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ from: n.value }, r.value),
          )
        : r;
    }
    function me(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrNewsletterJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrDeviceJid(e, "participant");
      if (!r.success) return r;
      var a = ve(e);
      return o("WAResultOrError").makeResult({
        from: n.value,
        participant: r.value,
        statusClassMixin: a.success ? a.value : null,
      });
    }
    function pe(e) {
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
    function _e(e) {
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
    function fe(e) {
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
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "subtype",
        o("WASmaxInReceiptEnums").ENUM_MANUAL_ORGANIC,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            type: n.value,
            sts: r.value,
            subtype: a.value,
          })
        : a;
    }
    function ge(e) {
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
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "subtype",
        o("WASmaxInReceiptEnums").ENUM_MANUAL_ORGANIC,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            type: n.value,
            sts: r.value,
            subtype: a.value,
          })
        : a;
    }
    function he(e) {
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
    function ye(e) {
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
    function Ce(e) {
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
    function be(e) {
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
    function ve(e) {
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
    function Se(e) {
      var t = ke(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverRestrictedCountryNonMemberErrorType",
          value: t.value,
        });
      var n = Ee(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverBizFeatureIncapableTypeWithReason",
          value: n.value,
        });
      var r = Te(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverFeatureIncapableErrorType",
          value: r.value,
        });
      var a = o("WASmaxInReceiptHSMErrorTypeMixin").parseHSMErrorTypeMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "HSMErrorType",
          value: a.value,
        });
      var i = Ie(e);
      return i.success
        ? o("WAResultOrError").makeResult({
            name: "OrderStatusErrorType",
            value: i.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "RestrictedCountryNonMemberErrorType",
              "BizFeatureIncapableTypeWithReason",
              "FeatureIncapableErrorType",
              "HSMErrorType",
              "OrderStatusErrorType",
            ],
            [t, n, r, a, i],
          );
    }
    function Re(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "bot");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "client_thread_id");
      return n.success
        ? o("WAResultOrError").makeResult({ clientThreadId: n.value })
        : n;
    }
    function Le(e) {
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
    function Ee(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(n.value, "reason");
      if (!r.success) return r;
      var a = Te(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ bizReason: r.value }, a.value),
          )
        : a;
    }
    function ke(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "reason",
        "restricted_country_non_member",
      );
      if (!r.success) return r;
      var a = Te(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ bizReason: r.value }, a.value),
          )
        : a;
    }
    function Ie(e) {
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
    function Te(e) {
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
    ((l.receiveDeliverRPC = e),
      (l.parseDeliverRequest = s),
      (l.makeDeliverResponseSuccess = d));
  },
  98,
);
