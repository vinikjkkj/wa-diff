__d(
  "WASmaxInMessageDeliverStatusDualOrSingleEncMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverStatusDualEncMixin",
    "WASmaxInMessageDeliverStatusSingleEncMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverStatusDualEncMixin",
      ).parseStatusDualEncMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "StatusDualEnc",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverStatusSingleEncMixin",
      ).parseStatusSingleEncMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "StatusSingleEnc",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["StatusDualEnc", "StatusSingleEnc"],
            [t, n],
          );
    }
    l.parseStatusDualOrSingleEncMixinGroup = e;
  },
  98,
);
