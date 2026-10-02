__d(
  "WASmaxInMessageDeliverMXTransactionMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverFullTransactionBaseMixin",
    "WASmaxInMessageDeliverMXTransactionProtocolMixin",
    "WASmaxInMessageDeliverTransactionNUXReceiverMixin",
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
        "WASmaxInMessageDeliverMXTransactionProtocolMixin",
      ).parseMXTransactionProtocolMixin(e);
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverTransactionNUXReceiverMixin",
      ).parseTransactionNUXReceiverMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value, a.value),
          )
        : a;
    }
    l.parseMXTransactionMixin = e;
  },
  98,
);
