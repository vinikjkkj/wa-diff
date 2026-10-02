__d(
  "WASmaxPingsServerPingRPC",
  [
    "WASmaxInPingsServerPingRequest",
    "WASmaxOutPingsServerPingResponseClientResponse",
    "WASmaxOutPingsServerPingResponseClientResponseError",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInPingsServerPingRequest").parseServerPingRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("ServerPing", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeServerPingResponseClientResponse: o(
          "WASmaxOutPingsServerPingResponseClientResponse",
        ).makeServerPingResponseClientResponse,
        makeServerPingResponseClientResponseError: o(
          "WASmaxOutPingsServerPingResponseClientResponseError",
        ).makeServerPingResponseClientResponseError,
      };
    }
    l.receiveServerPingRPC = e;
  },
  98,
);
