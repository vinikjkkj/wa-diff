__d(
  "WASmaxInMessageDeliverEncTypeSenderKeyAndBroadcastMediaOrIndividualMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEncTypeIndividualMixin",
    "WASmaxInMessageDeliverEncTypeSenderKeyAndBroadcastMediaMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverEncTypeSenderKeyAndBroadcastMediaMixin",
      ).parseEncTypeSenderKeyAndBroadcastMediaMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "EncTypeSenderKeyAndBroadcastMedia",
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
            ["EncTypeSenderKeyAndBroadcastMedia", "EncTypeIndividual"],
            [t, n],
          );
    }
    l.parseEncTypeSenderKeyAndBroadcastMediaOrIndividualMixinGroup = e;
  },
  98,
);
