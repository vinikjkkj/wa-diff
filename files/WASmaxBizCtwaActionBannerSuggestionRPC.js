__d(
  "WASmaxBizCtwaActionBannerSuggestionRPC",
  [
    "WASmaxInBizCtwaActionBannerSuggestionRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInBizCtwaActionBannerSuggestionRequest",
      ).parseBannerSuggestionRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("BannerSuggestion", {
            Request: t,
          }),
        );
      return { parsedRequest: t.value };
    }
    l.receiveBannerSuggestionRPC = e;
  },
  98,
);
