__d(
  "WASmaxInStatusDeliverStatusEncDeliverTypes",
  [
    "WAResultOrError",
    "WASmaxInStatusDeliverStatusEncDualEncMixin",
    "WASmaxInStatusDeliverStatusEncSingleEncMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInStatusDeliverStatusEncDualEncMixin",
      ).parseStatusEncDualEncMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "StatusEncDualEnc",
          value: t.value,
        });
      var n = o(
        "WASmaxInStatusDeliverStatusEncSingleEncMixin",
      ).parseStatusEncSingleEncMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "StatusEncSingleEnc",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["StatusEncDualEnc", "StatusEncSingleEnc"],
            [t, n],
          );
    }
    l.parseStatusEncDeliverTypes = e;
  },
  98,
);
