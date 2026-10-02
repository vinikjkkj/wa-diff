__d(
  "WASmaxInMessageDeliverAvailableOrUnavailableIndividualMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverAvailableMixin",
    "WASmaxInMessageDeliverUnavailableIndividualMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInMessageDeliverAvailableMixin").parseAvailableMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "Available",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverUnavailableIndividualMixin",
      ).parseUnavailableIndividualMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "UnavailableIndividual",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Available", "UnavailableIndividual"],
            [t, n],
          );
    }
    l.parseAvailableOrUnavailableIndividualMixinGroup = e;
  },
  98,
);
