__d(
  "WASmaxInPsaChatBlockError",
  [
    "WAResultOrError",
    "WASmaxInPsaIQErrorInternalServerErrorMixin",
    "WASmaxInPsaIQErrorRateOverlimitMixin",
    "WASmaxInPsaIQErrorRequestTimeoutMixin",
    "WASmaxInPsaIQErrorServiceUnavailableMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInPsaIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorInternalServerError",
          value: t.value,
        });
      var n = o(
        "WASmaxInPsaIQErrorRequestTimeoutMixin",
      ).parseIQErrorRequestTimeoutMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRequestTimeout",
          value: n.value,
        });
      var r = o(
        "WASmaxInPsaIQErrorServiceUnavailableMixin",
      ).parseIQErrorServiceUnavailableMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorServiceUnavailable",
          value: r.value,
        });
      var a = o(
        "WASmaxInPsaIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorRateOverlimit",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorInternalServerError",
              "IQErrorRequestTimeout",
              "IQErrorServiceUnavailable",
              "IQErrorRateOverlimit",
            ],
            [t, n, r, a],
          );
    }
    l.parseChatBlockError = e;
  },
  98,
);
