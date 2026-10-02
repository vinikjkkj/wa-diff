__d(
  "WASmaxEdgeEdgeRoutingRPC",
  ["WASmaxInEdgeEdgeRoutingRequest", "WASmaxParsingFailure", "WASmaxRpcUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInEdgeEdgeRoutingRequest").parseEdgeRoutingRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("EdgeRouting", {
            Request: t,
          }),
        );
      return { parsedRequest: t.value };
    }
    l.receiveEdgeRoutingRPC = e;
  },
  98,
);
