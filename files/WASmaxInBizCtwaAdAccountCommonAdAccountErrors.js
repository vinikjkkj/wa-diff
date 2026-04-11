__d(
  "WASmaxInBizCtwaAdAccountCommonAdAccountErrors",
  [
    "WAResultOrError",
    "WASmaxInBizCtwaAdAccountIQErrorBadRequestMixin",
    "WASmaxInBizCtwaAdAccountIQErrorForbiddenMixin",
    "WASmaxInBizCtwaAdAccountIQErrorInternalServerErrorMixin",
    "WASmaxInBizCtwaAdAccountIQErrorServiceUnavailableMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInBizCtwaAdAccountIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = o(
        "WASmaxInBizCtwaAdAccountIQErrorForbiddenMixin",
      ).parseIQErrorForbiddenMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorForbidden",
          value: n.value,
        });
      var r = o(
        "WASmaxInBizCtwaAdAccountIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorInternalServerError",
          value: r.value,
        });
      var a = o(
        "WASmaxInBizCtwaAdAccountIQErrorServiceUnavailableMixin",
      ).parseIQErrorServiceUnavailableMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorServiceUnavailable",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorForbidden",
              "IQErrorInternalServerError",
              "IQErrorServiceUnavailable",
            ],
            [t, n, r, a],
          );
    }
    l.parseCommonAdAccountErrors = e;
  },
  98,
);
