__d(
  "WASmaxInBrPaymentBRMerchantMixin",
  [
    "WAResultOrError",
    "WASmaxInBrPaymentEnums",
    "WASmaxInBrPaymentMerchantBaseMixin",
    "WASmaxInBrPaymentPayoutBankOrPrepaidCardMixinGroup",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "payout");
      if (!t.success) return t;
      var n = o(
        "WASmaxInBrPaymentPayoutBankOrPrepaidCardMixinGroup",
      ).parsePayoutBankOrPrepaidCardMixinGroup(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            payoutBankOrPrepaidCardMixinGroup: n.value,
          })
        : n;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "merchant");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "gateway-name",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStringEnum(
        t,
        "display-state",
        o("WASmaxInBrPaymentEnums")
          .ENUM_ACCOUNTPENDINGLINKING_ACTIVE_EXTERNALLYDISABLED_HARDBLOCKED_INACTIVE_INITED_INTEGRITYBLOCKED_PENDING_SOFTBLOCKED,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "dashboard-url",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "logo-uri",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        t,
        "max_installment_count",
        0,
        50,
      );
      if (!s.success) return s;
      var u = o("WASmaxInBrPaymentMerchantBaseMixin").parseMerchantBaseMixin(t);
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").mapChildrenWithTag(
        t,
        "payout",
        0,
        1 / 0,
        e,
      );
      return c.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                gatewayName: r.value,
                displayState: a.value,
                dashboardUrl: i.value,
                logoUri: l.value,
                maxInstallmentCount: s.value,
              },
              u.value,
              { payout: c.value },
            ),
          )
        : c;
    }
    ((l.parseBRMerchantPayout = e), (l.parseBRMerchantMixin = s));
  },
  98,
);
