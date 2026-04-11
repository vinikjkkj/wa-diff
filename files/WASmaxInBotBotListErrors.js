__d(
  "WASmaxInBotBotListErrors",
  [
    "WAResultOrError",
    "WASmaxInBotIQErrorBadRequestMixin",
    "WASmaxInBotIQErrorForbiddenMixin",
    "WASmaxInBotIQErrorInternalServerErrorMixin",
    "WASmaxInBotIQErrorNotAllowedMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInBotIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorInternalServerError",
          value: t.value,
        });
      var n = o("WASmaxInBotIQErrorForbiddenMixin").parseIQErrorForbiddenMixin(
        e,
      );
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorForbidden",
          value: n.value,
        });
      var r = o(
        "WASmaxInBotIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: r.value,
        });
      var a = o(
        "WASmaxInBotIQErrorNotAllowedMixin",
      ).parseIQErrorNotAllowedMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorNotAllowed",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorInternalServerError",
              "IQErrorForbidden",
              "IQErrorBadRequest",
              "IQErrorNotAllowed",
            ],
            [t, n, r, a],
          );
    }
    l.parseBotListErrors = e;
  },
  98,
);
