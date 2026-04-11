__d(
  "WASmaxInSupportMessageFeedbackSendFeedbackError",
  [
    "WAResultOrError",
    "WASmaxInSupportMessageFeedbackIQErrorBadRequestMixin",
    "WASmaxInSupportMessageFeedbackIQErrorInternalServerErrorMixin",
    "WASmaxInSupportMessageFeedbackIQErrorRateOverlimitMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInSupportMessageFeedbackIQErrorBadRequestMixin",
      ).parseIQErrorBadRequestMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorBadRequest",
          value: t.value,
        });
      var n = o(
        "WASmaxInSupportMessageFeedbackIQErrorInternalServerErrorMixin",
      ).parseIQErrorInternalServerErrorMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "IQErrorInternalServerError",
          value: n.value,
        });
      var r = o(
        "WASmaxInSupportMessageFeedbackIQErrorRateOverlimitMixin",
      ).parseIQErrorRateOverlimitMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "IQErrorRateOverlimit",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "IQErrorBadRequest",
              "IQErrorInternalServerError",
              "IQErrorRateOverlimit",
            ],
            [t, n, r],
          );
    }
    l.parseSendFeedbackError = e;
  },
  98,
);
