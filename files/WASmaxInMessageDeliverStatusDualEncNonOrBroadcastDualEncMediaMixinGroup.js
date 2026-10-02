__d(
  "WASmaxInMessageDeliverStatusDualEncNonOrBroadcastDualEncMediaMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBroadcastDualEncMediaMixin",
    "WASmaxInMessageDeliverStatusDualEncNonMediaMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverStatusDualEncNonMediaMixin",
      ).parseStatusDualEncNonMediaMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "StatusDualEncNonMedia",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverBroadcastDualEncMediaMixin",
      ).parseBroadcastDualEncMediaMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "BroadcastDualEncMedia",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["StatusDualEncNonMedia", "BroadcastDualEncMedia"],
            [t, n],
          );
    }
    l.parseStatusDualEncNonOrBroadcastDualEncMediaMixinGroup = e;
  },
  98,
);
