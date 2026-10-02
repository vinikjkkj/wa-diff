__d(
  "WASmaxLoginSuccessRPC",
  ["WASmaxInLoginSuccessRequest", "WASmaxParsingFailure", "WASmaxRpcUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInLoginSuccessRequest").parseSuccessRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("Success", { Request: t }),
        );
      return { parsedRequest: t.value };
    }
    l.receiveSuccessRPC = e;
  },
  98,
);
