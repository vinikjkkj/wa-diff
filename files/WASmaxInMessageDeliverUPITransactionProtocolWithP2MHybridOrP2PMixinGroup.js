__d(
  "WASmaxInMessageDeliverUPITransactionProtocolWithP2MHybridOrP2PMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverUPITransactionProtocolP2PMixin",
    "WASmaxInMessageDeliverUPITransactionProtocolWithP2MHybridMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverUPITransactionProtocolWithP2MHybridMixin",
      ).parseUPITransactionProtocolWithP2MHybridMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "UPITransactionProtocolWithP2MHybrid",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverUPITransactionProtocolP2PMixin",
      ).parseUPITransactionProtocolP2PMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "UPITransactionProtocolP2P",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "UPITransactionProtocolWithP2MHybrid",
              "UPITransactionProtocolP2P",
            ],
            [t, n],
          );
    }
    l.parseUPITransactionProtocolWithP2MHybridOrP2PMixinGroup = e;
  },
  98,
);
