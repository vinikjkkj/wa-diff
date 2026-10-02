__d(
  "WASmaxInMessageDeliverGroupDualEncGroupDualEncMediaOrGroupDualEncNonMediaMediaMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverGroupDualEncMediaMixin",
    "WASmaxInMessageDeliverGroupDualEncNonMediaMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverGroupDualEncMediaMixin",
      ).parseGroupDualEncMediaMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "GroupDualEncMedia",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverGroupDualEncNonMediaMixin",
      ).parseGroupDualEncNonMediaMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "GroupDualEncNonMedia",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["GroupDualEncMedia", "GroupDualEncNonMedia"],
            [t, n],
          );
    }
    l.parseGroupDualEncGroupDualEncMediaOrGroupDualEncNonMediaMediaMixinGroup =
      e;
  },
  98,
);
