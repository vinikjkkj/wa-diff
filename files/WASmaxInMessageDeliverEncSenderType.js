__d(
  "WASmaxInMessageDeliverEncSenderType",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEncTypeIndividualMixin",
    "WASmaxInMessageDeliverEncTypeSenderKeyMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverEncTypeSenderKeyMixin",
      ).parseEncTypeSenderKeyMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "EncTypeSenderKey",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverEncTypeIndividualMixin",
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
    l.parseEncSenderType = e;
  },
  98,
);
