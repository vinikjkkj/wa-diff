__d(
  "WASmaxBizCtwaAdAccountSendAccountRecoveryNonceRPC",
  [
    "WAComms",
    "WASmaxInBizCtwaAdAccountSendAccountRecoveryNonceResponseError",
    "WASmaxInBizCtwaAdAccountSendAccountRecoveryNonceResponseSuccess",
    "WASmaxOutBizCtwaAdAccountSendAccountRecoveryNonceRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutBizCtwaAdAccountSendAccountRecoveryNonceRequest",
        ).makeSendAccountRecoveryNonceRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
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
        o("WASmaxRpcUtils").errorMessageRpcParsing("SendAccountRecoveryNonce", {
          Success: a,
          Error: i,
        }),
      );
    }
    l.sendSendAccountRecoveryNonceRPC = e;
  },
  98,
);
