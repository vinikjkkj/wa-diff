__d(
  "WASmaxInMessageDeliverGroupMessageTypes",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBotResponseMessageMixin",
    "WASmaxInMessageDeliverGroupRegularMixin",
    "WASmaxInMessageDeliverGroupRetryMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInMessageDeliverGroupRetryMixin").parseGroupRetryMixin(
        e,
      );
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "GroupRetry",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverBotResponseMessageMixin",
      ).parseBotResponseMessageMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "BotResponseMessage",
          value: n.value,
        });
      var r = o(
        "WASmaxInMessageDeliverGroupRegularMixin",
      ).parseGroupRegularMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "GroupRegular",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["GroupRetry", "BotResponseMessage", "GroupRegular"],
            [t, n, r],
          );
    }
    l.parseGroupMessageTypes = e;
  },
  98,
);
