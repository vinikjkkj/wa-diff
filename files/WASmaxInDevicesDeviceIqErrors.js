__d(
  "WASmaxInDevicesDeviceIqErrors",
  [
    "WAResultOrError",
    "WASmaxInDevicesNonRetryableIQErrorMixin",
    "WASmaxInDevicesRetryableIQErrorMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInDevicesRetryableIQErrorMixin",
      ).parseRetryableIQErrorMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "RetryableIQError",
          value: t.value,
        });
      var n = o(
        "WASmaxInDevicesNonRetryableIQErrorMixin",
      ).parseNonRetryableIQErrorMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "NonRetryableIQError",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["RetryableIQError", "NonRetryableIQError"],
            [t, n],
          );
    }
    l.parseDeviceIqErrors = e;
  },
  98,
);
