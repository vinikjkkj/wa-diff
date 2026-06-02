__d(
  "WASmaxBizLinkingGetAccountNonceRPC",
  [
    "WAComms",
    "WASmaxInBizLinkingGetAccountNonceResponseError",
    "WASmaxInBizLinkingGetAccountNonceResponseSuccess",
    "WASmaxOutBizLinkingGetAccountNonceRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutBizLinkingGetAccountNonceRequest",
        ).makeGetAccountNonceRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInBizLinkingGetAccountNonceResponseSuccess",
        ).parseGetAccountNonceResponseSuccess(r, n);
      if (a.success)
        return { name: "GetAccountNonceResponseSuccess", value: a.value };
      var i = o(
        "WASmaxInBizLinkingGetAccountNonceResponseError",
      ).parseGetAccountNonceResponseError(r, n);
      if (i.success)
        return { name: "GetAccountNonceResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GetAccountNonce", {
          Success: a,
          Error: i,
        }),
      );
    }
    l.sendGetAccountNonceRPC = e;
  },
  98,
);
