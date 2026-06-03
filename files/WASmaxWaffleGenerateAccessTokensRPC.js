__d(
  "WASmaxWaffleGenerateAccessTokensRPC",
  [
    "WAComms",
    "WASmaxInWaffleGenerateAccessTokensResponseError",
    "WASmaxInWaffleGenerateAccessTokensResponseSuccess",
    "WASmaxOutWaffleGenerateAccessTokensRequest",
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
              "WASmaxOutWaffleGenerateAccessTokensRequest",
            ).makeGenerateAccessTokensRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInWaffleGenerateAccessTokensResponseSuccess",
            ).parseGenerateAccessTokensResponseSuccess(r, n);
          if (a.success)
            return {
              name: "GenerateAccessTokensResponseSuccess",
              value: a.value,
            };
          var i = o(
            "WASmaxInWaffleGenerateAccessTokensResponseError",
          ).parseGenerateAccessTokensResponseError(r, n);
          if (i.success)
            return {
              name: "GenerateAccessTokensResponseError",
              value: i.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GenerateAccessTokens", {
              Success: a,
              Error: i,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendGenerateAccessTokensRPC = e;
  },
  98,
);
