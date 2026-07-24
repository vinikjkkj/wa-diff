__d(
  "WASmaxInBrPaymentPayoutPrepaidCardMixin",
  ["WAResultOrError", "WASmaxInBrPaymentMethodBaseMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "payout");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "prepaid-card",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "last4");
      if (!r.success) return r;
      var a = o("WASmaxInBrPaymentMethodBaseMixin").parseMethodBaseMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ type: n.value, last4: r.value }, a.value),
          )
        : a;
    }
    l.parsePayoutPrepaidCardMixin = e;
  },
  98,
);
