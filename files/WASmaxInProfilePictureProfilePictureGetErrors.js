__d(
  "WASmaxInProfilePictureProfilePictureGetErrors",
  [
    "WAResultOrError",
    "WASmaxInProfilePictureIQErrorBadRequestMixin",
    "WASmaxInProfilePictureIQErrorFeatureNotImplementedMixin",
    "WASmaxInProfilePictureIQErrorInternalServerErrorMixin",
    "WASmaxInProfilePictureIQErrorItemNotFoundMixin",
    "WASmaxInProfilePictureIQErrorNotAuthorizedMixin",
    "WASmaxInProfilePictureIQErrorRateOverlimitMixin",
    "WASmaxInProfilePictureIQErrorServiceUnavailableMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInProfilePictureIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = o(
        "WASmaxInProfilePictureIQErrorNotAuthorizedMixin",
      ).parseIQErrorNotAuthorizedMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAuthorized",
          value: n.value,
        });
      var r = o(
        "WASmaxInProfilePictureIQErrorItemNotFoundMixin",
      ).parseIQErrorItemNotFoundMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorItemNotFound",
          value: r.value,
        });
      var a = o(
        "WASmaxInProfilePictureIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: a.value,
        });
      var i = o(
        "WASmaxInProfilePictureIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorInternalServerError",
          value: i.value,
        });
      var l = o(
        "WASmaxInProfilePictureIQErrorFeatureNotImplementedMixin",
      ).parseIQErrorFeatureNotImplementedMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorFeatureNotImplemented",
          value: l.value,
        });
      var s = o(
        "WASmaxInProfilePictureIQErrorServiceUnavailableMixin",
      ).parseIQErrorServiceUnavailableMixin(e);
      return s.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorServiceUnavailable",
            value: s.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorNotAuthorized",
              "IQErrorItemNotFound",
              "IQErrorRateOverlimit",
              "IQErrorInternalServerError",
              "IQErrorFeatureNotImplemented",
              "IQErrorServiceUnavailable",
            ],
            [t, n, r, a, i, l, s],
          );
    }
    l.parseProfilePictureGetErrors = e;
  },
  98,
);
