__d(
  "WASmaxInMessageDeliverIndividualDeliverPayNodeOrPayTransactionMessageMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverIndividualDeliverPayNodeMessageMixin",
    "WASmaxInMessageDeliverPayTransactionMessageMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverIndividualDeliverPayNodeMessageMixin",
      ).parseIndividualDeliverPayNodeMessageMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IndividualDeliverPayNodeMessage",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverPayTransactionMessageMixin",
      ).parsePayTransactionMessageMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "PayTransactionMessage",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["IndividualDeliverPayNodeMessage", "PayTransactionMessage"],
            [t, n],
          );
    }
    l.parseIndividualDeliverPayNodeOrPayTransactionMessageMixinGroup = e;
  },
  98,
);
