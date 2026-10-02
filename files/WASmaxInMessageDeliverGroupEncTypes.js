__d(
  "WASmaxInMessageDeliverGroupEncTypes",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverGroupDualEncMixin",
    "WASmaxInMessageDeliverGroupSingleEncMixin",
    "WASmaxInMessageDeliverUnavailableGroupMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverGroupDualEncMixin",
      ).parseGroupDualEncMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "GroupDualEnc",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverGroupSingleEncMixin",
      ).parseGroupSingleEncMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "GroupSingleEnc",
          value: n.value,
        });
      var r = o(
        "WASmaxInMessageDeliverUnavailableGroupMixin",
      ).parseUnavailableGroupMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "UnavailableGroup",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["GroupDualEnc", "GroupSingleEnc", "UnavailableGroup"],
            [t, n, r],
          );
    }
    l.parseGroupEncTypes = e;
  },
  98,
);
