__d(
  "WASmaxWaffleWFPingRPC",
  [
    "WAComms",
    "WASmaxInWaffleWFPingResponseError",
    "WASmaxInWaffleWFPingResponseSuccess",
    "WASmaxOutWaffleWFPingRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o("WASmaxOutWaffleWFPingRequest").makeWFPingRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o("WASmaxInWaffleWFPingResponseSuccess").parseWFPingResponseSuccess(
          r,
          n,
        );
      if (a.success) return { name: "WFPingResponseSuccess", value: a.value };
      var i = o("WASmaxInWaffleWFPingResponseError").parseWFPingResponseError(
        r,
        n,
      );
      if (i.success) return { name: "WFPingResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("WFPing", {
          Success: a,
          Error: i,
        }),
      );
    }
    l.sendWFPingRPC = e;
  },
  98,
);
