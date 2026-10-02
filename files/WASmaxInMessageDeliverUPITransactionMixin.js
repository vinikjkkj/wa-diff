__d(
  "WASmaxInMessageDeliverUPITransactionMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverFullTransactionBaseMixin",
    "WASmaxInMessageDeliverUPITransactionProtocolMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverFullTransactionBaseMixin",
      ).parseFullTransactionBaseMixin(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverUPITransactionProtocolMixin",
      ).parseUPITransactionProtocolMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value),
          )
        : r;
    }
    l.parseUPITransactionMixin = e;
  },
  98,
);
