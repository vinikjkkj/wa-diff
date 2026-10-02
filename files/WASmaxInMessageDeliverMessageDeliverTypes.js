__d(
  "WASmaxInMessageDeliverMessageDeliverTypes",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBroadcastMixin",
    "WASmaxInMessageDeliverGroupMixin",
    "WASmaxInMessageDeliverIndividualMixin",
    "WASmaxInMessageDeliverStatusMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInMessageDeliverIndividualMixin").parseIndividualMixin(
        e,
      );
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "Individual",
          value: t.value,
        });
      var n = o("WASmaxInMessageDeliverGroupMixin").parseGroupMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "Group",
          value: n.value,
        });
      var r = o("WASmaxInMessageDeliverStatusMixin").parseStatusMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "Status",
          value: r.value,
        });
      var a = o("WASmaxInMessageDeliverBroadcastMixin").parseBroadcastMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult({ name: "Broadcast", value: a.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Individual", "Group", "Status", "Broadcast"],
            [t, n, r, a],
          );
    }
    l.parseMessageDeliverTypes = e;
  },
  98,
);
