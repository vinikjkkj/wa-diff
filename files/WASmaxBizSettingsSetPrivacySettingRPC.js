__d(
  "WASmaxBizSettingsSetPrivacySettingRPC",
  [
    "WAComms",
    "WASmaxInBizSettingsSetPrivacySettingResponseError",
    "WASmaxInBizSettingsSetPrivacySettingResponseSuccess",
    "WASmaxOutBizSettingsSetPrivacySettingRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutBizSettingsSetPrivacySettingRequest",
        ).makeSetPrivacySettingRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInBizSettingsSetPrivacySettingResponseSuccess",
        ).parseSetPrivacySettingResponseSuccess(r, n);
      if (a.success)
        return { name: "SetPrivacySettingResponseSuccess", value: a.value };
      var i = o(
        "WASmaxInBizSettingsSetPrivacySettingResponseError",
      ).parseSetPrivacySettingResponseError(r, n);
      if (i.success)
        return { name: "SetPrivacySettingResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("SetPrivacySetting", {
          Success: a,
          Error: i,
        }),
      );
    }
    l.sendSetPrivacySettingRPC = e;
  },
  98,
);
