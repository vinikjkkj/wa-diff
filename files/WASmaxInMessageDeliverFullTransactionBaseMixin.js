__d(
  "WASmaxInMessageDeliverFullTransactionBaseMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEnums",
    "WASmaxInMessageDeliverIncentiveOfferClaimMixin",
    "WASmaxInMessageDeliverInstallmentMixin",
    "WASmaxInMessageDeliverMoneyMixin",
    "WASmaxInMessageDeliverOrderInPaymentMixin",
    "WASmaxInMessageDeliverTransactionErrorMixin",
    "WASmaxInMessageDeliverTransactionSyncStatusMixin",
    "WASmaxInMessageDeliverTransactionTypeMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "offer_claim");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverIncentiveOfferClaimMixin",
      ).parseIncentiveOfferClaimMixin(e);
      return (n.success, n);
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "amount");
      if (!t.success) return t;
      var n = o("WASmaxInMessageDeliverMoneyMixin").parseMoneyMixin(e);
      return (n.success, n);
    }
    function u(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "transaction");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(t, "offer_claim", e);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(t, "amount", s);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrString(t, "id");
      if (!i.success) return i;
      var l = o("WASmaxParseJid").attrUserJid(t, "sender");
      if (!l.success) return l;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "sender-alias",
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "sender-name",
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "receiver-name",
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        t,
        "receiver",
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").attrString(t, "currency");
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").attrString(t, "amount");
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "credential-id",
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").attrIntRange(t, "ts", 0, void 0);
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        t,
        "created-ts",
        0,
        void 0,
      );
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").attrString(t, "status");
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStanzaId,
        t,
        "message-id",
      );
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").attrIntRange(t, "counter", 0, void 0);
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        t,
        "expiry-ts",
        0,
        void 0,
      );
      if (!v.success) return v;
      var S = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrGroupJid,
        t,
        "group",
      );
      if (!S.success) return S;
      var R = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        t,
        "service",
        o("WASmaxInMessageDeliverEnums").ENUM_FBPAY_UPI,
      );
      if (!R.success) return R;
      var L = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "merchant-name",
      );
      if (!L.success) return L;
      var E = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "note",
      );
      if (!E.success) return E;
      var k = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "reference-id",
      );
      if (!k.success) return k;
      var I = o(
          "WASmaxInMessageDeliverTransactionErrorMixin",
        ).parseTransactionErrorMixin(t),
        T = o(
          "WASmaxInMessageDeliverTransactionTypeMixin",
        ).parseTransactionTypeMixin(t);
      if (!T.success) return T;
      var D = o(
        "WASmaxInMessageDeliverTransactionSyncStatusMixin",
      ).parseTransactionSyncStatusMixin(t);
      if (!D.success) return D;
      var x = o(
          "WASmaxInMessageDeliverOrderInPaymentMixin",
        ).parseOrderInPaymentMixin(t),
        $ = o("WASmaxInMessageDeliverInstallmentMixin").parseInstallmentMixin(
          t,
        );
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          {
            id: i.value,
            sender: l.value,
            senderAlias: u.value,
            senderName: c.value,
            receiverName: d.value,
            receiver: m.value,
            currency: p.value,
            amount: _.value,
            credentialId: f.value,
            ts: g.value,
            createdTs: h.value,
            status: y.value,
            messageId: C.value,
            counter: b.value,
            expiryTs: v.value,
            group: S.value,
            service: R.value,
            merchantName: L.value,
            note: E.value,
            referenceId: k.value,
            transactionErrorMixin: I.success ? I.value : null,
          },
          T.value,
          D.value,
          {
            orderInPaymentMixin: x.success ? x.value : null,
            installmentMixin: $.success ? $.value : null,
            offerClaim: r.value,
            childAmount: a.value,
          },
        ),
      );
    }
    ((l.parseFullTransactionBaseOfferClaim = e),
      (l.parseFullTransactionBaseAmount = s),
      (l.parseFullTransactionBaseMixin = u));
  },
  98,
);
