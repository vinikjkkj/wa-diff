__d(
  "WASmaxInWaffleGenerateWaEntAcUserErrors",
  [
    "WAResultOrError",
    "WASmaxInWaffleIQErrorAlreadyExistsMixin",
    "WASmaxInWaffleIQErrorBadRequestMixin",
    "WASmaxInWaffleIQErrorConflictMixin",
    "WASmaxInWaffleIQErrorInternalServerErrorMixin",
    "WASmaxInWaffleIQErrorNotAllowedMixin",
    "WASmaxInWaffleIQErrorNotAuthorizedMixin",
    "WASmaxInWaffleIQErrorPayloadEncDecMixin",
    "WASmaxInWaffleIQErrorRateOverlimitMixin",
    "WASmaxInWaffleIQErrorRequestTimeoutMixin",
    "WASmaxInWaffleIQErrorServiceUnavailableMixin",
    "WASmaxInWaffleIQErrorWFJurisdictionGatingMixin",
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
        "WASmaxInWaffleIQErrorPayloadEncDecMixin",
      ).parseIQErrorPayloadEncDecMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorPayloadEncDec",
          value: r.value,
        });
      var a = o(
        "WASmaxInWaffleIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorInternalServerError",
          value: a.value,
        });
      var i = o(
        "WASmaxInWaffleIQErrorServiceUnavailableMixin",
      ).parseIQErrorServiceUnavailableMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorServiceUnavailable",
          value: i.value,
        });
      var l = o(
        "WASmaxInWaffleIQErrorNotAuthorizedMixin",
      ).parseIQErrorNotAuthorizedMixin(e);
      if (l.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAuthorized",
          value: l.value,
        });
      var s = o(
        "WASmaxInWaffleIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      if (s.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorRateOverlimit",
          value: s.value,
        });
      var u = o(
        "WASmaxInWaffleIQErrorNotAllowedMixin",
      ).parseIQErrorNotAllowedMixin(e);
      if (u.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNotAllowed",
          value: u.value,
        });
      var c = o("WASmaxInWaffleIQErrorConflictMixin").parseIQErrorConflictMixin(
        e,
      );
      if (c.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorConflict",
          value: c.value,
        });
      var d = o(
        "WASmaxInWaffleIQErrorAlreadyExistsMixin",
      ).parseIQErrorAlreadyExistsMixin(e);
      if (d.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorAlreadyExists",
          value: d.value,
        });
      var m = o(
        "WASmaxInWaffleIQErrorWFJurisdictionGatingMixin",
      ).parseIQErrorWFJurisdictionGatingMixin(e);
      return m.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorWFJurisdictionGating",
            value: m.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorRequestTimeout",
              "IQErrorPayloadEncDec",
              "IQErrorInternalServerError",
              "IQErrorServiceUnavailable",
              "IQErrorNotAuthorized",
              "IQErrorRateOverlimit",
              "IQErrorNotAllowed",
              "IQErrorConflict",
              "IQErrorAlreadyExists",
              "IQErrorWFJurisdictionGating",
            ],
            [t, n, r, a, i, l, s, u, c, d, m],
          );
    }
    l.parseGenerateWaEntAcUserErrors = e;
  },
  98,
);
