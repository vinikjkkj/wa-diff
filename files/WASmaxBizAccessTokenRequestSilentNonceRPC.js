__d(
  "WASmaxBizAccessTokenRequestSilentNonceRPC",
  [
    "WAComms",
    "WASmaxInBizAccessTokenRequestSilentNonceResponseError",
    "WASmaxInBizAccessTokenRequestSilentNonceResponseRecoveryRequired",
    "WASmaxInBizAccessTokenRequestSilentNonceResponseSuccess",
    "WASmaxOutBizAccessTokenRequestSilentNonceRequest",
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
              "WASmaxOutBizAccessTokenRequestSilentNonceRequest",
            ).makeRequestSilentNonceRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInBizAccessTokenRequestSilentNonceResponseSuccess",
            ).parseRequestSilentNonceResponseSuccess(r, n);
          if (a.success)
            return {
              name: "RequestSilentNonceResponseSuccess",
              value: a.value,
            };
          var i = o(
            "WASmaxInBizAccessTokenRequestSilentNonceResponseRecoveryRequired",
          ).parseRequestSilentNonceResponseRecoveryRequired(r, n);
          if (i.success)
            return {
              name: "RequestSilentNonceResponseRecoveryRequired",
              value: i.value,
            };
          var l = o(
            "WASmaxInBizAccessTokenRequestSilentNonceResponseError",
          ).parseRequestSilentNonceResponseError(r, n);
          if (l.success)
            return { name: "RequestSilentNonceResponseError", value: l.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("RequestSilentNonce", {
              Success: a,
              RecoveryRequired: i,
              Error: l,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendRequestSilentNonceRPC = e;
  },
  98,
);
