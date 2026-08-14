__d(
  "WASmaxInStatusDeliverEncTypeSenderKeyOrIndividualMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInStatusDeliverEncTypeIndividualMixin",
    "WASmaxInStatusDeliverEncTypeSenderKeyMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInStatusDeliverEncTypeSenderKeyMixin",
      ).parseEncTypeSenderKeyMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "EncTypeSenderKey",
          value: t.value,
        });
      var n = o(
        "WASmaxInStatusDeliverEncTypeIndividualMixin",
      ).parseEncTypeIndividualMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "EncTypeIndividual",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["EncTypeSenderKey", "EncTypeIndividual"],
            [t, n],
          );
    }
    l.parseEncTypeSenderKeyOrIndividualMixinGroup = e;
  },
  98,
);
