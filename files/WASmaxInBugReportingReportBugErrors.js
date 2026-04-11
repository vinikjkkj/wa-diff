__d(
  "WASmaxInBugReportingReportBugErrors",
  [
    "WAResultOrError",
    "WASmaxInBugReportingIQErrorBadRequestMixin",
    "WASmaxInBugReportingIQErrorInternalServerErrorMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInBugReportingIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = o(
        "WASmaxInBugReportingIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorInternalServerError",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["IQErrorBadRequest", "IQErrorInternalServerError"],
            [t, n],
          );
    }
    l.parseReportBugErrors = e;
  },
  98,
);
