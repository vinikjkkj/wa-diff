__d(
  "WASmaxInMessageDeliverTransactionTypeMixin",
  ["WAResultOrError", "WASmaxInMessageDeliverEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrStringEnum(
        e,
        "transaction-type",
        o("WASmaxInMessageDeliverEnums")
          .ENUM_BR_INCENTIVE_P2M_P2P_PAYOUT_REMITTANCE_UPI_UPILITE,
      );
      return t.success
        ? o("WAResultOrError").makeResult({ transactionType: t.value })
        : t;
    }
    l.parseTransactionTypeMixin = e;
  },
  98,
);
