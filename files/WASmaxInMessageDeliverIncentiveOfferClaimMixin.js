__d(
  "WASmaxInMessageDeliverIncentiveOfferClaimMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "offer_claim");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "offer_id", 1, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "id",
        1,
        void 0,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "incentive_payment_id",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "parent_transaction_id",
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            offerId: n.value,
            id: r.value,
            incentivePaymentId: a.value,
            parentTransactionId: i.value,
          })
        : i;
    }
    l.parseIncentiveOfferClaimMixin = e;
  },
  98,
);
