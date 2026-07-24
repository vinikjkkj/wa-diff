__d(
  "WASmaxInBrPaymentComboCardCapabilitiesMixin",
  ["WAResultOrError", "WASmaxInBrPaymentEnums", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "card");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "capabilities");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "p2m-credit-eligible",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrStringEnum(
        n.value,
        "p2m-debit-eligible",
        o("WASmaxInBrPaymentEnums").ENUM_0_1,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            capabilitiesP2mCreditEligible: r.value,
            capabilitiesP2mDebitEligible: a.value,
          })
        : a;
    }
    l.parseComboCardCapabilitiesMixin = e;
  },
  98,
);
