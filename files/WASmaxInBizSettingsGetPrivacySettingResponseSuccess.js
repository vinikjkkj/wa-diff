__d(
  "WASmaxInBizSettingsGetPrivacySettingResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInBizSettingsIQResultResponseMixin",
    "WASmaxInBizSettingsSmbDataSharingSettingMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "privacy");
      if (!r.success) return r;
      var a = o(
        "WASmaxInBizSettingsSmbDataSharingSettingMixin",
      ).parseSmbDataSharingSettingMixin(r.value);
      if (!a.success) return a;
      var i = o(
        "WASmaxInBizSettingsIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              { privacySmbDataSharingSettingMixin: a.value },
              i.value,
            ),
          )
        : i;
    }
    l.parseGetPrivacySettingResponseSuccess = e;
  },
  98,
);
