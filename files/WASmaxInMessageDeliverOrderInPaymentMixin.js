__d(
  "WASmaxInMessageDeliverOrderInPaymentMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBeneficiariesMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "beneficiaries");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverBeneficiariesMixin",
      ).parseBeneficiariesMixin(e);
      return (n.success, n);
    }
    function s(t) {
      var n = o("WASmaxParseUtils").flattenedChildWithTag(t, "order");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(
        n.value,
        "beneficiaries",
        e,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(n.value, "id");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStanzaId,
        n.value,
        "message_id",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "payment_config_id",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "type",
      );
      return s.success
        ? o("WAResultOrError").makeResult({
            orderId: a.value,
            orderMessageId: i.value,
            orderPaymentConfigId: l.value,
            orderType: s.value,
            orderBeneficiaries: r.value,
          })
        : s;
    }
    ((l.parseOrderInPaymentOrderBeneficiaries = e),
      (l.parseOrderInPaymentMixin = s));
  },
  98,
);
