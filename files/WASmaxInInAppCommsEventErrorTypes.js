__d(
  "WASmaxInInAppCommsEventErrorTypes",
  [
    "WAResultOrError",
    "WASmaxInInAppCommsIQErrorInternalServerErrorMixin",
    "WASmaxInInAppCommsIQErrorRequestTimeoutMixin",
    "WASmaxInInAppCommsIQErrorServiceUnavailableMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInInAppCommsIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorInternalServerError",
          value: t.value,
        });
      var n = o(
        "WASmaxInInAppCommsIQErrorRequestTimeoutMixin",
      ).parseIQErrorRequestTimeoutMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRequestTimeout",
          value: n.value,
        });
      var r = o(
        "WASmaxInInAppCommsIQErrorServiceUnavailableMixin",
      ).parseIQErrorServiceUnavailableMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorServiceUnavailable",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorInternalServerError",
              "IQErrorRequestTimeout",
              "IQErrorServiceUnavailable",
            ],
            [t, n, r],
          );
    }
    l.parseEventErrorTypes = e;
  },
  98,
);
