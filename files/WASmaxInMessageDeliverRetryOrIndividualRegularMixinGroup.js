__d(
  "WASmaxInMessageDeliverRetryOrIndividualRegularMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverIndividualRegularMixin",
    "WASmaxInMessageDeliverRetryMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInMessageDeliverRetryMixin").parseRetryMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "Retry",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverIndividualRegularMixin",
      ).parseIndividualRegularMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "IndividualRegular",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Retry", "IndividualRegular"],
            [t, n],
          );
    }
    l.parseRetryOrIndividualRegularMixinGroup = e;
  },
  98,
);
