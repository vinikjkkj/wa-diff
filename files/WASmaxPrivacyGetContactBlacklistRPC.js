__d(
  "WASmaxPrivacyGetContactBlacklistRPC",
  [
    "WAComms",
    "WASmaxInPrivacyGetContactBlacklistResponseError",
    "WASmaxInPrivacyGetContactBlacklistResponseSuccess",
    "WASmaxInPrivacyGetContactBlacklistResponseSuccessLID",
    "WASmaxOutPrivacyGetContactBlacklistRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutPrivacyGetContactBlacklistRequest",
        ).makeGetContactBlacklistRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInPrivacyGetContactBlacklistResponseSuccessLID",
        ).parseGetContactBlacklistResponseSuccessLID(r, n);
      if (a.success)
        return {
          name: "GetContactBlacklistResponseSuccessLID",
          value: a.value,
        };
      var i = o(
        "WASmaxInPrivacyGetContactBlacklistResponseSuccess",
      ).parseGetContactBlacklistResponseSuccess(r, n);
      if (i.success)
        return { name: "GetContactBlacklistResponseSuccess", value: i.value };
      var l = o(
        "WASmaxInPrivacyGetContactBlacklistResponseError",
      ).parseGetContactBlacklistResponseError(r, n);
      if (l.success)
        return { name: "GetContactBlacklistResponseError", value: l.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GetContactBlacklist", {
          SuccessLID: a,
          Success: i,
          Error: l,
        }),
      );
    }
    l.sendGetContactBlacklistRPC = e;
  },
  98,
);
