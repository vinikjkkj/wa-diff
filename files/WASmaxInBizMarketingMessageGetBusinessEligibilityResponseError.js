__d(
  "WASmaxInBizMarketingMessageGetBusinessEligibilityResponseError",
  [
    "WAResultOrError",
    "WASmaxInBizMarketingMessageHackBaseIQErrorResponseMixin",
    "WASmaxInBizMarketingMessageIQErrorBadRequestOrForbiddenOrInternalServerErrorOrServiceUnavailableMixinGroup",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInBizMarketingMessageHackBaseIQErrorResponseMixin",
      ).parseHackBaseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = o(
        "WASmaxInBizMarketingMessageIQErrorBadRequestOrForbiddenOrInternalServerErrorOrServiceUnavailableMixinGroup",
      ).parseIQErrorBadRequestOrForbiddenOrInternalServerErrorOrServiceUnavailableMixinGroup(
        r.value,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorIQErrorBadRequestOrForbiddenOrInternalServerErrorOrServiceUnavailableMixinGroup:
                i.value,
            }),
          )
        : i;
    }
    l.parseGetBusinessEligibilityResponseError = e;
  },
  98,
);
