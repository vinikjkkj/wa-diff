__d(
  "WASmaxInReceiptIndividualOrGroupOrDeliverStatusOrBroadcastMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInReceiptBroadcastMixin",
    "WASmaxInReceiptDeliverStatusMixin",
    "WASmaxInReceiptGroupMixin",
    "WASmaxInReceiptIndividualMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInReceiptIndividualMixin").parseIndividualMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "Individual",
          value: t.value,
        });
      var n = o("WASmaxInReceiptGroupMixin").parseGroupMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "Group",
          value: n.value,
        });
      var r = o("WASmaxInReceiptDeliverStatusMixin").parseDeliverStatusMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverStatus",
          value: r.value,
        });
      var a = o("WASmaxInReceiptBroadcastMixin").parseBroadcastMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult({ name: "Broadcast", value: a.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Individual", "Group", "Status", "Broadcast"],
            [t, n, r, a],
          );
    }
    l.parseIndividualOrGroupOrDeliverStatusOrBroadcastMixinGroup = e;
  },
  98,
);
