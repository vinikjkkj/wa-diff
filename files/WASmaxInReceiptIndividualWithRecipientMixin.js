__d(
  "WASmaxInReceiptIndividualWithRecipientMixin",
  [
    "WAResultOrError",
    "WASmaxInReceiptRecipientMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrDeviceJid(e, "from");
      if (!n.success) return n;
      var r = o("WASmaxInReceiptRecipientMixin").parseRecipientMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ from: n.value }, r.value),
          )
        : r;
    }
    l.parseIndividualWithRecipientMixin = e;
  },
  98,
);
