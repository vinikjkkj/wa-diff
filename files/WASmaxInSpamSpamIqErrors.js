__d(
  "WASmaxInSpamSpamIqErrors",
  [
    "WAResultOrError",
    "WASmaxInSpamIQErrorBadRequestMixin",
    "WASmaxInSpamIQErrorFeatureNotImplementedMixin",
    "WASmaxInSpamIQErrorForbiddenMixin",
    "WASmaxInSpamIQErrorInternalServerErrorMixin",
    "WASmaxInSpamIQErrorRateOverlimitMixin",
    "WASmaxInSpamIQErrorReportTokenValidationFailMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInSpamIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorInternalServerError",
          value: t.value,
        });
      var n = o(
        "WASmaxInSpamIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: n.value,
        });
      var r = o("WASmaxInSpamIQErrorForbiddenMixin").parseIQErrorForbiddenMixin(
        e,
      );
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorForbidden",
          value: r.value,
        });
      var a = o(
        "WASmaxInSpamIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: a.value,
        });
      var i = o(
        "WASmaxInSpamIQErrorReportTokenValidationFailMixin",
      ).parseIQErrorReportTokenValidationFailMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorReportTokenValidationFail",
          value: i.value,
        });
      var l = o(
        "WASmaxInSpamIQErrorFeatureNotImplementedMixin",
      ).parseIQErrorFeatureNotImplementedMixin(e);
      return l.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorFeatureNotImplemented",
            value: l.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorInternalServerError",
              "IQErrorBadRequest",
              "IQErrorForbidden",
              "IQErrorRateOverlimit",
              "IQErrorReportTokenValidationFail",
              "IQErrorFeatureNotImplemented",
            ],
            [t, n, r, a, i, l],
          );
    }
    l.parseSpamIqErrors = e;
  },
  98,
);
