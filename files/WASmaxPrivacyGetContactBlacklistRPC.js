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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o(
              "WASmaxOutPrivacyGetContactBlacklistRequest",
            ).makeGetContactBlacklistRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
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
            return {
              name: "GetContactBlacklistResponseSuccess",
              value: i.value,
            };
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
        })),
        s.apply(this, arguments)
      );
    }
    l.sendGetContactBlacklistRPC = e;
  },
  98,
);
