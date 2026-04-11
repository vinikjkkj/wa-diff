__d(
  "WASmaxInStatsSendBufferNoRetryError",
  [
    "WAResultOrError",
    "WASmaxInStatsIQErrorBadRequestMixin",
    "WASmaxInStatsIQErrorFeatureNotImplementedMixin",
    "WASmaxInStatsIQErrorNotAcceptableMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInStatsIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = o(
        "WASmaxInStatsIQErrorNotAcceptableMixin",
      ).parseIQErrorNotAcceptableMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAcceptable",
          value: n.value,
        });
      var r = o(
        "WASmaxInStatsIQErrorFeatureNotImplementedMixin",
      ).parseIQErrorFeatureNotImplementedMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFeatureNotImplemented",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorNotAcceptable",
              "IQErrorFeatureNotImplemented",
            ],
            [t, n, r],
          );
    }
    l.parseSendBufferNoRetryError = e;
  },
  98,
);
