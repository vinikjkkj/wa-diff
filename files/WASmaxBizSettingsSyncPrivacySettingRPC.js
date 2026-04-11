__d(
  "WASmaxBizSettingsSyncPrivacySettingRPC",
  [
    "WASmaxInBizSettingsSyncPrivacySettingRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInBizSettingsSyncPrivacySettingRequest",
      ).parseSyncPrivacySettingRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("SyncPrivacySetting", {
            Request: t,
          }),
        );
      return { parsedRequest: t.value };
    }
    l.receiveSyncPrivacySettingRPC = e;
  },
  98,
);
