__d(
  "WASmaxBotBotListRPC",
  [
    "WAComms",
    "WASmaxInBotBotListResponseError",
    "WASmaxInBotBotListResponseSuccessV2",
    "WASmaxInBotBotListResponseSuccessV3",
    "WASmaxOutBotBotListRequest",
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
          var n = o("WASmaxOutBotBotListRequest").makeBotListRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInBotBotListResponseSuccessV2",
            ).parseBotListResponseSuccessV2(r, n);
          if (a.success)
            return { name: "BotListResponseSuccessV2", value: a.value };
          var i = o(
            "WASmaxInBotBotListResponseSuccessV3",
          ).parseBotListResponseSuccessV3(r, n);
          if (i.success)
            return { name: "BotListResponseSuccessV3", value: i.value };
          var l = o(
            "WASmaxInBotBotListResponseError",
          ).parseBotListResponseError(r, n);
          if (l.success)
            return { name: "BotListResponseError", value: l.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("BotList", {
              SuccessV2: a,
              SuccessV3: i,
              Error: l,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendBotListRPC = e;
  },
  98,
);
