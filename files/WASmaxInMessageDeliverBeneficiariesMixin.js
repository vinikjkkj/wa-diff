__d(
  "WASmaxInMessageDeliverBeneficiariesMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBeneficiaryMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "beneficiary");
      if (!t.success) return t;
      var n = o("WASmaxInMessageDeliverBeneficiaryMixin").parseBeneficiaryMixin(
        e,
      );
      return (n.success, n);
    }
    function s(t) {
      var n = o("WASmaxParseUtils").mapChildrenWithTag(
        t,
        "beneficiary",
        1,
        5,
        e,
      );
      return n.success
        ? o("WAResultOrError").makeResult({ beneficiary: n.value })
        : n;
    }
    ((l.parseBeneficiariesBeneficiary = e), (l.parseBeneficiariesMixin = s));
  },
  98,
);
