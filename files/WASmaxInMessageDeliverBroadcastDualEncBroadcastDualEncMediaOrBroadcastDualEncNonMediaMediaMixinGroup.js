__d(
  "WASmaxInMessageDeliverBroadcastDualEncBroadcastDualEncMediaOrBroadcastDualEncNonMediaMediaMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBroadcastDualEncMediaMixin",
    "WASmaxInMessageDeliverBroadcastDualEncNonMediaMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverBroadcastDualEncMediaMixin",
      ).parseBroadcastDualEncMediaMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "BroadcastDualEncMedia",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverBroadcastDualEncNonMediaMixin",
      ).parseBroadcastDualEncNonMediaMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "BroadcastDualEncNonMedia",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["BroadcastDualEncMedia", "BroadcastDualEncNonMedia"],
            [t, n],
          );
    }
    l.parseBroadcastDualEncBroadcastDualEncMediaOrBroadcastDualEncNonMediaMediaMixinGroup =
      e;
  },
  98,
);
