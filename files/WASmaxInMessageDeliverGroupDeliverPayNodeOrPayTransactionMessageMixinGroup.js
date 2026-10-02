__d(
  "WASmaxInMessageDeliverGroupDeliverPayNodeOrPayTransactionMessageMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverGroupDeliverPayNodeMessageMixin",
    "WASmaxInMessageDeliverPayTransactionMessageMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverGroupDeliverPayNodeMessageMixin",
      ).parseGroupDeliverPayNodeMessageMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "GroupDeliverPayNodeMessage",
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
            ["GroupDeliverPayNodeMessage", "PayTransactionMessage"],
            [t, n],
          );
    }
    l.parseGroupDeliverPayNodeOrPayTransactionMessageMixinGroup = e;
  },
  98,
);
