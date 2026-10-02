__d(
  "WASmaxInMessageDeliverPayTransactions",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBRTransactionMixin",
    "WASmaxInMessageDeliverCAPITransactionMixin",
    "WASmaxInMessageDeliverIDTransactionMixin",
    "WASmaxInMessageDeliverMXTransactionMixin",
    "WASmaxInMessageDeliverUPITransactionMixin",
    "WASmaxInMessageDeliverXBTransactionMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverUPITransactionMixin",
      ).parseUPITransactionMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "UPITransaction",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverMXTransactionMixin",
      ).parseMXTransactionMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "MXTransaction",
          value: n.value,
        });
      var r = o(
        "WASmaxInMessageDeliverIDTransactionMixin",
      ).parseIDTransactionMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IDTransaction",
          value: r.value,
        });
      var a = o(
        "WASmaxInMessageDeliverBRTransactionMixin",
      ).parseBRTransactionMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "BRTransaction",
          value: a.value,
        });
      var i = o(
        "WASmaxInMessageDeliverCAPITransactionMixin",
      ).parseCAPITransactionMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "CAPITransaction",
          value: i.value,
        });
      var l = o(
        "WASmaxInMessageDeliverXBTransactionMixin",
      ).parseXBTransactionMixin(e);
      return l.success
        ? o("WAResultOrError").makeResult({
            name: "XBTransaction",
            value: l.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "UPITransaction",
              "MXTransaction",
              "IDTransaction",
              "BRTransaction",
              "CAPITransaction",
              "XBTransaction",
            ],
            [t, n, r, a, i, l],
          );
    }
    l.parsePayTransactions = e;
  },
  98,
);
