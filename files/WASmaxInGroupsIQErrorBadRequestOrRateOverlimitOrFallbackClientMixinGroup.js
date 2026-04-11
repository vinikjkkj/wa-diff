__d(
  "WASmaxInGroupsIQErrorBadRequestOrRateOverlimitOrFallbackClientMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInGroupsIQErrorBadRequestMixin",
    "WASmaxInGroupsIQErrorFallbackClientMixin",
    "WASmaxInGroupsIQErrorRateOverlimitMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: n.value,
        });
      var r = o(
        "WASmaxInGroupsIQErrorFallbackClientMixin",
      ).parseIQErrorFallbackClientMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFallbackClient",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorRateOverlimit",
              "IQErrorFallbackClient",
            ],
            [t, n, r],
          );
    }
    l.parseIQErrorBadRequestOrRateOverlimitOrFallbackClientMixinGroup = e;
  },
  98,
);
