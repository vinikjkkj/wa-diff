__d(
  "WASmaxInKeyTransparencyKeyTransparencyErrorTypes",
  [
    "WAResultOrError",
    "WASmaxInKeyTransparencyIQErrorBadRequestMixin",
    "WASmaxInKeyTransparencyIQErrorInternalServerErrorMixin",
    "WASmaxInKeyTransparencyIQErrorItemNotFoundMixin",
    "WASmaxInKeyTransparencyIQErrorNotAuthorizedMixin",
    "WASmaxInKeyTransparencyIQErrorRateOverlimitMixin",
    "WASmaxInKeyTransparencyIQErrorRequestTimeoutMixin",
    "WASmaxInKeyTransparencyIQErrorSequencingPendingMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInKeyTransparencyIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorInternalServerError",
          value: t.value,
        });
      var n = o(
        "WASmaxInKeyTransparencyIQErrorNotAuthorizedMixin",
      ).parseIQErrorNotAuthorizedMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAuthorized",
          value: n.value,
        });
      var r = o(
        "WASmaxInKeyTransparencyIQErrorItemNotFoundMixin",
      ).parseIQErrorItemNotFoundMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorItemNotFound",
          value: r.value,
        });
      var a = o(
        "WASmaxInKeyTransparencyIQErrorRequestTimeoutMixin",
      ).parseIQErrorRequestTimeoutMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRequestTimeout",
          value: a.value,
        });
      var i = o(
        "WASmaxInKeyTransparencyIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: i.value,
        });
      var l = o(
        "WASmaxInKeyTransparencyIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: l.value,
        });
      var s = o(
        "WASmaxInKeyTransparencyIQErrorSequencingPendingMixin",
      ).parseIQErrorSequencingPendingMixin(e);
      return s.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorSequencingPending",
            value: s.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorInternalServerError",
              "IQErrorNotAuthorized",
              "IQErrorItemNotFound",
              "IQErrorRequestTimeout",
              "IQErrorBadRequest",
              "IQErrorRateOverlimit",
              "IQErrorSequencingPending",
            ],
            [t, n, r, a, i, l, s],
          );
    }
    l.parseKeyTransparencyErrorTypes = e;
  },
  98,
);
