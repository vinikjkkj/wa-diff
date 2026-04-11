__d(
  "WASmaxInGroupsAddParticipantTimeOrCountRateLimitMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInGroupsAddParticipantCountRateLimitMixin",
    "WASmaxInGroupsAddParticipantTimeRateLimitMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsAddParticipantTimeRateLimitMixin",
      ).parseAddParticipantTimeRateLimitMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "AddParticipantTimeRateLimit",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsAddParticipantCountRateLimitMixin",
      ).parseAddParticipantCountRateLimitMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "AddParticipantCountRateLimit",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["AddParticipantTimeRateLimit", "AddParticipantCountRateLimit"],
            [t, n],
          );
    }
    l.parseAddParticipantTimeOrCountRateLimitMixinGroup = e;
  },
  98,
);
