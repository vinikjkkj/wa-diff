__d(
  "WASmaxWaffleGenerateAccessTokensRPC",
  [
    "WAComms",
    "WASmaxInWaffleGenerateAccessTokensResponseError",
    "WASmaxInWaffleGenerateAccessTokensResponseSuccess",
    "WASmaxOutWaffleGenerateAccessTokensRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutWaffleGenerateAccessTokensRequest",
        ).makeGenerateAccessTokensRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInWaffleGenerateAccessTokensResponseSuccess",
        ).parseGenerateAccessTokensResponseSuccess(r, n);
      if (a.success)
        return { name: "GenerateAccessTokensResponseSuccess", value: a.value };
      var i = o(
        "WASmaxInWaffleGenerateAccessTokensResponseError",
      ).parseGenerateAccessTokensResponseError(r, n);
      if (i.success)
        return { name: "GenerateAccessTokensResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("GenerateAccessTokens", {
          Success: a,
          Error: i,
        }),
      );
    }
    l.sendGenerateAccessTokensRPC = e;
  },
  98,
);
