__d(
  "WASmaxInMessageDeliverRetryOrIndividualRegularOrBotResponseMessageMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBotResponseMessageMixin",
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
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IndividualRegular",
          value: n.value,
        });
      var r = o(
        "WASmaxInMessageDeliverBotResponseMessageMixin",
      ).parseBotResponseMessageMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "BotResponseMessage",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Retry", "IndividualRegular", "BotResponseMessage"],
            [t, n, r],
          );
    }
    l.parseRetryOrIndividualRegularOrBotResponseMessageMixinGroup = e;
  },
  98,
);
