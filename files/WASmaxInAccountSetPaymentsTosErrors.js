__d(
  "WASmaxInAccountSetPaymentsTosErrors",
  [
    "WAResultOrError",
    "WASmaxInAccountIQErrorBadRequestMixin",
    "WASmaxInAccountIQErrorConfigMismatchMixin",
    "WASmaxInAccountIQErrorForbiddenMixin",
    "WASmaxInAccountIQErrorInternalServerErrorMixin",
    "WASmaxInAccountIQErrorPayUpgradeRequiredMixin",
    "WASmaxInAccountIQErrorServiceUnavailableMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInAccountIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorInternalServerError",
          value: t.value,
        });
      var n = o(
        "WASmaxInAccountIQErrorServiceUnavailableMixin",
      ).parseIQErrorServiceUnavailableMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorServiceUnavailable",
          value: n.value,
        });
      var r = o(
        "WASmaxInAccountIQErrorPayUpgradeRequiredMixin",
      ).parseIQErrorPayUpgradeRequiredMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorPayUpgradeRequired",
          value: r.value,
        });
      var a = o(
        "WASmaxInAccountIQErrorConfigMismatchMixin",
      ).parseIQErrorConfigMismatchMixin(e);
      if (a.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorConfigMismatch",
          value: a.value,
        });
      var i = o(
        "WASmaxInAccountIQErrorForbiddenMixin",
      ).parseIQErrorForbiddenMixin(e);
      if (i.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorForbidden",
          value: i.value,
        });
      var l = o(
        "WASmaxInAccountIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      return l.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorBadRequest",
            value: l.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorInternalServerError",
              "IQErrorServiceUnavailable",
              "IQErrorPayUpgradeRequired",
              "IQErrorConfigMismatch",
              "IQErrorForbidden",
              "IQErrorBadRequest",
            ],
            [t, n, r, a, i, l],
          );
    }
    l.parseSetPaymentsTosErrors = e;
  },
  98,
);
