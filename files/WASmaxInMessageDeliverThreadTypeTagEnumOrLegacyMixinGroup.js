__d(
  "WASmaxInMessageDeliverThreadTypeTagEnumOrLegacyMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverThreadTypeTagEnumMixin",
    "WASmaxInMessageDeliverThreadTypeTagLegacyMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageDeliverThreadTypeTagEnumMixin",
      ).parseThreadTypeTagEnumMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ThreadTypeTagEnum",
          value: t.value,
        });
      var n = o(
        "WASmaxInMessageDeliverThreadTypeTagLegacyMixin",
      ).parseThreadTypeTagLegacyMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "ThreadTypeTagLegacy",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["ThreadTypeTagEnum", "ThreadTypeTagLegacy"],
            [t, n],
          );
    }
    l.parseThreadTypeTagEnumOrLegacyMixinGroup = e;
  },
  98,
);
