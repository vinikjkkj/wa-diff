__d(
  "WASmaxInStatusDeliverStatusEncDualEncStatusEncDualEncNonMediaOrStatusEncDualEncMediaMediaMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInStatusDeliverStatusEncDualEncMediaMixin",
    "WASmaxInStatusDeliverStatusEncDualEncNonMediaMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInStatusDeliverStatusEncDualEncNonMediaMixin",
      ).parseStatusEncDualEncNonMediaMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "StatusEncDualEncNonMedia",
          value: t.value,
        });
      var n = o(
        "WASmaxInStatusDeliverStatusEncDualEncMediaMixin",
      ).parseStatusEncDualEncMediaMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "StatusEncDualEncMedia",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["StatusEncDualEncNonMedia", "StatusEncDualEncMedia"],
            [t, n],
          );
    }
    l.parseStatusEncDualEncStatusEncDualEncNonMediaOrStatusEncDualEncMediaMediaMixinGroup =
      e;
  },
  98,
);
