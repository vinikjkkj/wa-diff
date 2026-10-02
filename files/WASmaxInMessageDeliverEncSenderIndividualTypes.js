__d(
  "WASmaxInMessageDeliverEncSenderIndividualTypes",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEncTypeIndividualMixin",
    "WASmaxInMessageDeliverEncTypeSenderKeyAndGroupMediaMixin",
    "WASmaxInMessageDeliverEncTypeSenderKeyWithoutMediatypeMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverEncTypeSenderKeyAndGroupMediaMixin",
      ).parseEncTypeSenderKeyAndGroupMediaMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "EncTypeSenderKeyAndGroupMedia",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverEncTypeSenderKeyWithoutMediatypeMixin",
      ).parseEncTypeSenderKeyWithoutMediatypeMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "EncTypeSenderKeyWithoutMediatype",
          value: n.value,
        });
      var r = o(
        "WASmaxInMessageDeliverEncTypeIndividualMixin",
      ).parseEncTypeIndividualMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "EncTypeIndividual",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "EncTypeSenderKeyAndGroupMedia",
              "EncTypeSenderKeyWithoutMediatype",
              "EncTypeIndividual",
            ],
            [t, n, r],
          );
    }
    l.parseEncSenderIndividualTypes = e;
  },
  98,
);
