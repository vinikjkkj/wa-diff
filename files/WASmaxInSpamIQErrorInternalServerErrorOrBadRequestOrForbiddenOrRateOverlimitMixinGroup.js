__d(
  "WASmaxInSpamIQErrorInternalServerErrorOrBadRequestOrForbiddenOrRateOverlimitMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInSpamIQErrorBadRequestMixin",
    "WASmaxInSpamIQErrorForbiddenMixin",
    "WASmaxInSpamIQErrorInternalServerErrorMixin",
    "WASmaxInSpamIQErrorRateOverlimitMixin",
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
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorRateOverlimit",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorInternalServerError",
              "IQErrorBadRequest",
              "IQErrorForbidden",
              "IQErrorRateOverlimit",
            ],
            [t, n, r, a],
          );
    }
    l.parseIQErrorInternalServerErrorOrBadRequestOrForbiddenOrRateOverlimitMixinGroup =
      e;
  },
  98,
);
