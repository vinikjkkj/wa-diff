__d(
  "WASmaxInMdIqMixinErrors",
  [
    "WAResultOrError",
    "WASmaxInMdIQErrorBadRequestMixin",
    "WASmaxInMdIQErrorFeatureNotAvailableMixin",
    "WASmaxInMdIQErrorForbiddenMixin",
    "WASmaxInMdIQErrorInternalServerErrorMixin",
    "WASmaxInMdIQErrorRateOverlimitMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMdIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorInternalServerError",
          value: t.value,
        });
      var n = o("WASmaxInMdIQErrorBadRequestMixin").parseIQErrorBadRequestMixin(
        e,
      );
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: n.value,
        });
      var r = o(
        "WASmaxInMdIQErrorFeatureNotAvailableMixin",
      ).parseIQErrorFeatureNotAvailableMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorFeatureNotAvailable",
          value: r.value,
        });
      var a = o(
        "WASmaxInMdIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: a.value,
        });
      var i = o("WASmaxInMdIQErrorForbiddenMixin").parseIQErrorForbiddenMixin(
        e,
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorForbidden",
            value: i.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorInternalServerError",
              "IQErrorBadRequest",
              "IQErrorFeatureNotAvailable",
              "IQErrorRateOverlimit",
              "IQErrorForbidden",
            ],
            [t, n, r, a, i],
          );
    }
    l.parseIqMixinErrors = e;
  },
  98,
);
