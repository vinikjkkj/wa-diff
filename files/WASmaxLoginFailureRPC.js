__d(
  "WASmaxLoginFailureRPC",
  ["WASmaxInLoginFailureRequest", "WASmaxParsingFailure", "WASmaxRpcUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInLoginFailureRequest").parseFailureRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("Failure", { Request: t }),
        );
      return { parsedRequest: t.value };
    }
    l.receiveFailureRPC = e;
  },
  98,
);
