__d(
  "WASmaxInBizSettingsGetPrivacySettingResponseError",
  [
    "WAResultOrError",
    "WASmaxInBizSettingsIQErrorResponseMixin",
    "WASmaxInBizSettingsPrivacySettingErrors",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!r.success) return r;
      var a = o(
        "WASmaxInBizSettingsIQErrorResponseMixin",
      ).parseIQErrorResponseMixin(e, t);
      if (!a.success) return a;
      var i = o(
        "WASmaxInBizSettingsPrivacySettingErrors",
      ).parsePrivacySettingErrors(r.value);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              errorPrivacySettingErrors: i.value,
            }),
          )
        : i;
    }
    l.parseGetPrivacySettingResponseError = e;
  },
  98,
);
