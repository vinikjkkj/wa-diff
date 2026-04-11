__d(
  "WASmaxInBizCtwaNativeAdUploadAdMediaResponseError",
  [
    "WAResultOrError",
    "WASmaxInBizCtwaNativeAdDeprecatedIQErrorResponseOptionalFromMixin",
    "WASmaxInBizCtwaNativeAdNativeAdErrors",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInBizCtwaNativeAdDeprecatedIQErrorResponseOptionalFromMixin",
      ).parseDeprecatedIQErrorResponseOptionalFromMixin(e, t);
      if (!a.success) return a;
      var i = o("WASmaxInBizCtwaNativeAdNativeAdErrors").parseNativeAdErrors(
        r.value,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, { errorNativeAdErrors: i.value }),
          )
        : i;
    }
    l.parseUploadAdMediaResponseError = e;
  },
  98,
);
