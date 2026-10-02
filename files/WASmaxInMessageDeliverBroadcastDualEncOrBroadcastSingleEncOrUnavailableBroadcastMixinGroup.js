__d(
  "WASmaxInMessageDeliverBroadcastDualEncOrBroadcastSingleEncOrUnavailableBroadcastMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBroadcastDualEncMixin",
    "WASmaxInMessageDeliverBroadcastSingleEncMixin",
    "WASmaxInMessageDeliverUnavailableBroadcastMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverBroadcastDualEncMixin",
      ).parseBroadcastDualEncMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "BroadcastDualEnc",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverBroadcastSingleEncMixin",
      ).parseBroadcastSingleEncMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "BroadcastSingleEnc",
          value: n.value,
        });
      var r = o(
        "WASmaxInMessageDeliverUnavailableBroadcastMixin",
      ).parseUnavailableBroadcastMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "UnavailableBroadcast",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["BroadcastDualEnc", "BroadcastSingleEnc", "UnavailableBroadcast"],
            [t, n, r],
          );
    }
    l.parseBroadcastDualEncOrBroadcastSingleEncOrUnavailableBroadcastMixinGroup =
      e;
  },
  98,
);
