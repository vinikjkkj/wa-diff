__d(
  "WASmaxInBizSettingsPrivacySettingErrors",
  [
    "WAResultOrError",
    "WASmaxInBizSettingsIQErrorBadRequestMixin",
    "WASmaxInBizSettingsIQErrorFeatureNotImplementedMixin",
    "WASmaxInBizSettingsIQErrorInternalServerErrorMixin",
    "WASmaxInBizSettingsIQErrorServiceUnavailableMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInBizSettingsIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = o(
        "WASmaxInBizSettingsIQErrorFeatureNotImplementedMixin",
      ).parseIQErrorFeatureNotImplementedMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorFeatureNotImplemented",
          value: n.value,
        });
      var r = o(
        "WASmaxInBizSettingsIQErrorServiceUnavailableMixin",
      ).parseIQErrorServiceUnavailableMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorServiceUnavailable",
          value: r.value,
        });
      var a = o(
        "WASmaxInBizSettingsIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorInternalServerError",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorFeatureNotImplemented",
              "IQErrorServiceUnavailable",
              "IQErrorInternalServerError",
            ],
            [t, n, r, a],
          );
    }
    l.parsePrivacySettingErrors = e;
  },
  98,
);
