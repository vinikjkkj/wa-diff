__d(
  "WASmaxInSupportContactFormError",
  [
    "WAResultOrError",
    "WASmaxInSupportIQErrorBadRequestMixin",
    "WASmaxInSupportIQErrorInternalServerErrorMixin",
    "WASmaxInSupportIQErrorNoticeRequiredMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInSupportIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = o(
        "WASmaxInSupportIQErrorNoticeRequiredMixin",
      ).parseIQErrorNoticeRequiredMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorNoticeRequired",
          value: n.value,
        });
      var r = o(
        "WASmaxInSupportIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorInternalServerError",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorNoticeRequired",
              "IQErrorInternalServerError",
            ],
            [t, n, r],
          );
    }
    l.parseContactFormError = e;
  },
  98,
);
