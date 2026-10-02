__d(
  "WASmaxInMessageDeliverUPIInternationalTransactionDetailMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverUPIInternationalFxDetailMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(
        e,
        "international-transaction-detail",
      );
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "fx-detail");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "invoice-number",
      );
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverUPIInternationalFxDetailMixin",
      ).parseUPIInternationalFxDetailMixin(n.value);
      return a.success
        ? o("WAResultOrError").makeResult({
            invoiceNumber: r.value,
            fxDetailUPIInternationalFxDetailMixin: a.value,
          })
        : a;
    }
    l.parseUPIInternationalTransactionDetailMixin = e;
  },
  98,
);
