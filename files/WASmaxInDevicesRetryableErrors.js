__d(
  "WASmaxInDevicesRetryableErrors",
  [
    "WAResultOrError",
    "WASmaxInDevicesIQErrorInternalServerErrorMixin",
    "WASmaxInDevicesIQErrorServiceUnavailableMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInDevicesIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorInternalServerError",
          value: t.value,
        });
      var n = o(
        "WASmaxInDevicesIQErrorServiceUnavailableMixin",
      ).parseIQErrorServiceUnavailableMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorServiceUnavailable",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["IQErrorInternalServerError", "IQErrorServiceUnavailable"],
            [t, n],
          );
    }
    l.parseRetryableErrors = e;
  },
  98,
);
