__d(
  "WASmaxInStatusDeliverFromBroadcastOrGroupMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInStatusDeliverFromBroadcastMixin",
    "WASmaxInStatusDeliverFromGroupMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInStatusDeliverFromBroadcastMixin",
      ).parseFromBroadcastMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "FromBroadcast",
          value: t.value,
        });
      var n = o("WASmaxInStatusDeliverFromGroupMixin").parseFromGroupMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({ name: "FromGroup", value: n.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["FromBroadcast", "FromGroup"],
            [t, n],
          );
    }
    l.parseFromBroadcastOrGroupMixinGroup = e;
  },
  98,
);
