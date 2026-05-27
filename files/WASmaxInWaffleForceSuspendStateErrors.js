__d(
  "WASmaxInWaffleForceSuspendStateErrors",
  [
    "WAResultOrError",
    "WASmaxInWaffleIQErrorBadRequestMixin",
    "WASmaxInWaffleIQErrorConflictMixin",
    "WASmaxInWaffleIQErrorInternalServerErrorMixin",
    "WASmaxInWaffleIQErrorNotAllowedMixin",
    "WASmaxInWaffleIQErrorRateOverlimitMixin",
    "WASmaxInWaffleIQErrorRequestTimeoutMixin",
    "WASmaxInWaffleIQErrorServiceUnavailableMixin",
    "WASmaxInWaffleIQErrorWFNotFoundMixin",
    "WASmaxInWaffleIQErrorWFStateMismatchMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInWaffleIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = o(
        "WASmaxInWaffleIQErrorRequestTimeoutMixin",
      ).parseIQErrorRequestTimeoutMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRequestTimeout",
          value: n.value,
        });
      var r = o(
        "WASmaxInWaffleIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorInternalServerError",
          value: r.value,
        });
      var a = o(
        "WASmaxInWaffleIQErrorServiceUnavailableMixin",
      ).parseIQErrorServiceUnavailableMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorServiceUnavailable",
          value: a.value,
        });
      var i = o(
        "WASmaxInWaffleIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: i.value,
        });
      var l = o(
        "WASmaxInWaffleIQErrorNotAllowedMixin",
      ).parseIQErrorNotAllowedMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAllowed",
          value: l.value,
        });
      var s = o("WASmaxInWaffleIQErrorConflictMixin").parseIQErrorConflictMixin(
        e,
      );
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorConflict",
          value: s.value,
        });
      var u = o(
        "WASmaxInWaffleIQErrorWFNotFoundMixin",
      ).parseIQErrorWFNotFoundMixin(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorWFNotFound",
          value: u.value,
        });
      var c = o(
        "WASmaxInWaffleIQErrorWFStateMismatchMixin",
      ).parseIQErrorWFStateMismatchMixin(e);
      return c.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorWFStateMismatch",
            value: c.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorRequestTimeout",
              "IQErrorInternalServerError",
              "IQErrorServiceUnavailable",
              "IQErrorRateOverlimit",
              "IQErrorNotAllowed",
              "IQErrorConflict",
              "IQErrorWFNotFound",
              "IQErrorWFStateMismatch",
            ],
            [t, n, r, a, i, l, s, u, c],
          );
    }
    l.parseForceSuspendStateErrors = e;
  },
  98,
);
