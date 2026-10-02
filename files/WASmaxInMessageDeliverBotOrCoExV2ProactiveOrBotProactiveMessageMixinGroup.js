__d(
  "WASmaxInMessageDeliverBotOrCoExV2ProactiveOrBotProactiveMessageMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBotMessageMixin",
    "WASmaxInMessageDeliverBotProactiveMessageMixin",
    "WASmaxInMessageDeliverCoExV2ProactiveMessageMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInMessageDeliverBotMessageMixin").parseBotMessageMixin(
        e,
      );
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "BotMessage",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverCoExV2ProactiveMessageMixin",
      ).parseCoExV2ProactiveMessageMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "CoExV2ProactiveMessage",
          value: n.value,
        });
      var r = o(
        "WASmaxInMessageDeliverBotProactiveMessageMixin",
      ).parseBotProactiveMessageMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "BotProactiveMessage",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["BotMessage", "CoExV2ProactiveMessage", "BotProactiveMessage"],
            [t, n, r],
          );
    }
    l.parseBotOrCoExV2ProactiveOrBotProactiveMessageMixinGroup = e;
  },
  98,
);
