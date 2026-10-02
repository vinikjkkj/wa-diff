__d(
  "WASmaxInMessageDeliverIDTransactionGoPayOrOttoCashOrOvoMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverIDTransactionGoPayMixin",
    "WASmaxInMessageDeliverIDTransactionOttoCashMixin",
    "WASmaxInMessageDeliverIDTransactionOvoMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverIDTransactionGoPayMixin",
      ).parseIDTransactionGoPayMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IDTransactionGoPay",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverIDTransactionOttoCashMixin",
      ).parseIDTransactionOttoCashMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IDTransactionOttoCash",
          value: n.value,
        });
      var r = o(
        "WASmaxInMessageDeliverIDTransactionOvoMixin",
      ).parseIDTransactionOvoMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "IDTransactionOvo",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["IDTransactionGoPay", "IDTransactionOttoCash", "IDTransactionOvo"],
            [t, n, r],
          );
    }
    l.parseIDTransactionGoPayOrOttoCashOrOvoMixinGroup = e;
  },
  98,
);
