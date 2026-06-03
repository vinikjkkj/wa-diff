__d(
  "WASmaxBizSettingsGetPrivacySettingRPC",
  [
    "WAComms",
    "WASmaxInBizSettingsGetPrivacySettingResponseError",
    "WASmaxInBizSettingsGetPrivacySettingResponseSuccess",
    "WASmaxOutBizSettingsGetPrivacySettingRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
              "WASmaxOutBizSettingsGetPrivacySettingRequest",
            ).makeGetPrivacySettingRequest(),
            n = yield o("WAComms").sendSmaxStanza(t, e),
            r = o(
              "WASmaxInBizSettingsGetPrivacySettingResponseSuccess",
            ).parseGetPrivacySettingResponseSuccess(n, t);
          if (r.success)
            return { name: "GetPrivacySettingResponseSuccess", value: r.value };
          var a = o(
            "WASmaxInBizSettingsGetPrivacySettingResponseError",
          ).parseGetPrivacySettingResponseError(n, t);
          if (a.success)
            return { name: "GetPrivacySettingResponseError", value: a.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GetPrivacySetting", {
              Success: r,
              Error: a,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendGetPrivacySettingRPC = e;
  },
  98,
);
