__d(
  "WASmaxBizSettingsGetPrivacySettingRPC",
  [
    "WAComms",
    "WASmaxInBizSettingsGetPrivacySettingResponseError",
    "WASmaxInBizSettingsGetPrivacySettingResponseSuccess",
    "WASmaxOutBizSettingsGetPrivacySettingRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = o(
          "WASmaxOutBizSettingsGetPrivacySettingRequest",
        ).makeGetPrivacySettingRequest(),
        n = await o("WAComms").sendSmaxStanza(t, e),
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
    }
    l.sendGetPrivacySettingRPC = e;
  },
  98,
);
