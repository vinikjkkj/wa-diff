__d(
  "WASmaxBizCtwaAdAccountSendAccountRecoveryNonceRPC",
  [
    "WAComms",
    "WASmaxInBizCtwaAdAccountSendAccountRecoveryNonceResponseError",
    "WASmaxInBizCtwaAdAccountSendAccountRecoveryNonceResponseSuccess",
    "WASmaxOutBizCtwaAdAccountSendAccountRecoveryNonceRequest",
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
              "WASmaxOutBizCtwaAdAccountSendAccountRecoveryNonceRequest",
            ).makeSendAccountRecoveryNonceRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInBizCtwaAdAccountSendAccountRecoveryNonceResponseSuccess",
            ).parseSendAccountRecoveryNonceResponseSuccess(r, n);
          if (a.success)
            return {
              name: "SendAccountRecoveryNonceResponseSuccess",
              value: a.value,
            };
          var i = o(
            "WASmaxInBizCtwaAdAccountSendAccountRecoveryNonceResponseError",
          ).parseSendAccountRecoveryNonceResponseError(r, n);
          if (i.success)
            return {
              name: "SendAccountRecoveryNonceResponseError",
              value: i.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "SendAccountRecoveryNonce",
              { Success: a, Error: i },
            ),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendSendAccountRecoveryNonceRPC = e;
  },
  98,
);
