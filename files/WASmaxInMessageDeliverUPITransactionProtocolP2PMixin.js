__d(
  "WASmaxInMessageDeliverUPITransactionProtocolP2PMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "receiver-tpap-name",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "lite_purpose",
        o("WASmaxInMessageDeliverEnums").ENUM_DEREGISTER_INITTOPUP_PAY_TOPUP,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "transaction_referral",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "split_id",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "is_interop",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        e,
        "incentive-rewards-reserved",
        o("WASmaxInMessageDeliverEnums").ENUM_0_1,
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "original-transaction-id",
      );
      return u.success
        ? o("WAResultOrError").makeResult({
            receiverTpapName: n.value,
            litePurpose: r.value,
            transactionReferral: a.value,
            splitId: i.value,
            isInterop: l.value,
            incentiveRewardsReserved: s.value,
            originalTransactionId: u.value,
          })
        : u;
    }
    l.parseUPITransactionProtocolP2PMixin = e;
  },
  98,
);
