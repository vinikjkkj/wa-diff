__d(
  "WASmaxInPrivacyGetContactBlacklistResponseError",
  [
    "WAResultOrError",
    "WASmaxInPrivacyDeprecatedIQErrorResponseOptionalFromMixin",
    "WASmaxInPrivacyGetPrivacyListError",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInPrivacyDeprecatedIQErrorResponseOptionalFromMixin",
      ).parseDeprecatedIQErrorResponseOptionalFromMixin(e, t);
      if (!a.success) return a;
      var i = o("WASmaxInPrivacyGetPrivacyListError").parseGetPrivacyListError(
        r.value,
      );
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorGetPrivacyListError: i.value,
            }),
          )
        : i;
    }
    l.parseGetContactBlacklistResponseError = e;
  },
  98,
);
