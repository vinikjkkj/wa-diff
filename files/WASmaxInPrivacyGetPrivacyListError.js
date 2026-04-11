__d(
  "WASmaxInPrivacyGetPrivacyListError",
  [
    "WAResultOrError",
    "WASmaxInPrivacyIQErrorBadRequestMixin",
    "WASmaxInPrivacyIQErrorFeatureNotImplementedMixin",
    "WASmaxInPrivacyIQErrorInternalServerErrorMixin",
    "WASmaxInPrivacyIQErrorRateOverlimitMixin",
    "WASmaxInPrivacyIQErrorServiceUnavailableMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInPrivacyIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = o(
        "WASmaxInPrivacyIQErrorFeatureNotImplementedMixin",
      ).parseIQErrorFeatureNotImplementedMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorFeatureNotImplemented",
          value: n.value,
        });
      var r = o(
        "WASmaxInPrivacyIQErrorServiceUnavailableMixin",
      ).parseIQErrorServiceUnavailableMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorServiceUnavailable",
          value: r.value,
        });
      var a = o(
        "WASmaxInPrivacyIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: a.value,
        });
      var i = o(
        "WASmaxInPrivacyIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      return i.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorInternalServerError",
            value: i.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorFeatureNotImplemented",
              "IQErrorServiceUnavailable",
              "IQErrorRateOverlimit",
              "IQErrorInternalServerError",
            ],
            [t, n, r, a, i],
          );
    }
    l.parseGetPrivacyListError = e;
  },
  98,
);
