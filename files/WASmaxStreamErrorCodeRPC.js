__d(
  "WASmaxStreamErrorCodeRPC",
  ["WASmaxInStreamErrorCodeRequest", "WASmaxParsingFailure", "WASmaxRpcUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInStreamErrorCodeRequest").parseCodeRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("Code", { Request: t }),
        );
      return { parsedRequest: t.value };
    }
    l.receiveCodeRPC = e;
  },
  98,
);
