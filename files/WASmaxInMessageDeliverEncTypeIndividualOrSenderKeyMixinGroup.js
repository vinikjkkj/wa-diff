__d(
  "WASmaxInMessageDeliverEncTypeIndividualOrSenderKeyMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEncTypeIndividualMixin",
    "WASmaxInMessageDeliverEncTypeSenderKeyMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverEncTypeIndividualMixin",
      ).parseEncTypeIndividualMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "EncTypeIndividual",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverEncTypeSenderKeyMixin",
      ).parseEncTypeSenderKeyMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "EncTypeSenderKey",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["EncTypeIndividual", "EncTypeSenderKey"],
            [t, n],
          );
    }
    l.parseEncTypeIndividualOrSenderKeyMixinGroup = e;
  },
  98,
);
