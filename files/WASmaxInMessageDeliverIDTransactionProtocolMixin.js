__d(
  "WASmaxInMessageDeliverIDTransactionProtocolMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverIDTransactionGoPayOrOttoCashOrOvoMixinGroup",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "transaction");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverIDTransactionGoPayOrOttoCashOrOvoMixinGroup",
      ).parseIDTransactionGoPayOrOttoCashOrOvoMixinGroup(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            iDTransactionGoPayOrOttoCashOrOvoMixinGroup: n.value,
          })
        : n;
    }
    l.parseIDTransactionProtocolMixin = e;
  },
  98,
);
