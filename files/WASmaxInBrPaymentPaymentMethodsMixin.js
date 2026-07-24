__d(
  "WASmaxInBrPaymentPaymentMethodsMixin",
  [
    "WAResultOrError",
    "WASmaxInBrPaymentAliasMixin",
    "WASmaxInBrPaymentBankMixin",
    "WASmaxInBrPaymentCardMixin",
    "WASmaxInBrPaymentCustomPaymentMethodMixin",
    "WASmaxInBrPaymentMerchantMixin",
    "WASmaxParseReference",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "card");
      if (!t.success) return t;
      var n = o("WASmaxInBrPaymentCardMixin").parseCardMixin(e);
      return (n.success, n);
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "bank");
      if (!t.success) return t;
      var n = o("WASmaxInBrPaymentBankMixin").parseBankMixin(e);
      return (n.success, n);
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "merchant");
      if (!t.success) return t;
      var n = o("WASmaxInBrPaymentMerchantMixin").parseMerchantMixin(e);
      return (n.success, n);
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "alias");
      if (!t.success) return t;
      var n = o("WASmaxInBrPaymentAliasMixin").parseAliasMixin(e);
      return (n.success, n);
    }
    function d(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "custom_payment_method");
      if (!t.success) return t;
      var n = o(
        "WASmaxInBrPaymentCustomPaymentMethodMixin",
      ).parseCustomPaymentMethodMixin(e);
      return (n.success, n);
    }
    function m(t, n) {
      var r = o("WASmaxParseUtils").assertTag(t, "account");
      if (!r.success) return r;
      var a = o("WASmaxParseReference").attrStringFromReference(n, [
        "account",
        "action",
      ]);
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t,
        "action",
        a.value,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        t,
        "version",
        0,
        void 0,
      );
      if (!l.success) return l;
      var m = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "instance-id",
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "wa-support-phone-number",
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").mapChildrenWithTag(t, "card", 0, 1 / 0, e);
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").mapChildrenWithTag(t, "bank", 0, 1 / 0, s);
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").mapChildrenWithTag(
        t,
        "merchant",
        0,
        1 / 0,
        u,
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").mapChildrenWithTag(t, "alias", 0, 100, c);
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").mapChildrenWithTag(
        t,
        "custom_payment_method",
        0,
        5,
        d,
      );
      return y.success
        ? o("WAResultOrError").makeResult({
            version: l.value,
            instanceId: m.value,
            waSupportPhoneNumber: p.value,
            card: _.value,
            bank: f.value,
            merchant: g.value,
            alias: h.value,
            customPaymentMethod: y.value,
          })
        : y;
    }
    ((l.parsePaymentMethodsCard = e),
      (l.parsePaymentMethodsBank = s),
      (l.parsePaymentMethodsMerchant = u),
      (l.parsePaymentMethodsAlias = c),
      (l.parsePaymentMethodsCustomPaymentMethod = d),
      (l.parsePaymentMethodsMixin = m));
  },
  98,
);
