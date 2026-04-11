__d(
  "WASmaxInPrivatestatsSignCredentialNoRetryError",
  [
    "WAResultOrError",
    "WASmaxInPrivatestatsIQErrorBadRequestMixin",
    "WASmaxInPrivatestatsIQErrorFeatureNotImplementedMixin",
    "WASmaxInPrivatestatsIQErrorServiceUnavailableMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInPrivatestatsIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = o(
        "WASmaxInPrivatestatsIQErrorFeatureNotImplementedMixin",
      ).parseIQErrorFeatureNotImplementedMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorFeatureNotImplemented",
          value: n.value,
        });
      var r = o(
        "WASmaxInPrivatestatsIQErrorServiceUnavailableMixin",
      ).parseIQErrorServiceUnavailableMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorServiceUnavailable",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorFeatureNotImplemented",
              "IQErrorServiceUnavailable",
            ],
            [t, n, r],
          );
    }
    l.parseSignCredentialNoRetryError = e;
  },
  98,
);
