__d(
  "WASmaxWaffleRefreshAccessTokensRPC",
  [
    "WAComms",
    "WASmaxInWaffleRefreshAccessTokensResponseError",
    "WASmaxInWaffleRefreshAccessTokensResponseSuccess",
    "WASmaxOutWaffleRefreshAccessTokensRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutWaffleRefreshAccessTokensRequest",
        ).makeRefreshAccessTokensRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInWaffleRefreshAccessTokensResponseSuccess",
        ).parseRefreshAccessTokensResponseSuccess(r, n);
      if (a.success)
        return { name: "RefreshAccessTokensResponseSuccess", value: a.value };
      var i = o(
        "WASmaxInWaffleRefreshAccessTokensResponseError",
      ).parseRefreshAccessTokensResponseError(r, n);
      if (i.success)
        return { name: "RefreshAccessTokensResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("RefreshAccessTokens", {
          Success: a,
          Error: i,
        }),
      );
    }
    l.sendRefreshAccessTokensRPC = e;
  },
  98,
);
