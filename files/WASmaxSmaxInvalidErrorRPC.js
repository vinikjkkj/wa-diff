__d(
  "WASmaxSmaxInvalidErrorRPC",
  ["WASmaxInSmaxInvalidErrorRequest", "WASmaxParsingFailure", "WASmaxRpcUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInSmaxInvalidErrorRequest").parseErrorRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("Error", { Request: t }),
        );
      return { parsedRequest: t.value };
    }
    l.receiveErrorRPC = e;
  },
  98,
);
