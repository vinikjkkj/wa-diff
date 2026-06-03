__d(
  "WASmaxWaffleRefreshAccessTokensRPC",
  [
    "WAComms",
    "WASmaxInWaffleRefreshAccessTokensResponseError",
    "WASmaxInWaffleRefreshAccessTokensResponseSuccess",
    "WASmaxOutWaffleRefreshAccessTokensRequest",
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
              "WASmaxOutWaffleRefreshAccessTokensRequest",
            ).makeRefreshAccessTokensRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInWaffleRefreshAccessTokensResponseSuccess",
            ).parseRefreshAccessTokensResponseSuccess(r, n);
          if (a.success)
            return {
              name: "RefreshAccessTokensResponseSuccess",
              value: a.value,
            };
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
        })),
        s.apply(this, arguments)
      );
    }
    l.sendRefreshAccessTokensRPC = e;
  },
  98,
);
