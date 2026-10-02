__d(
  "WASmaxStreamErrorConflictRPC",
  [
    "WASmaxInStreamErrorConflictRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInStreamErrorConflictRequest").parseConflictRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("Conflict", {
            Request: t,
          }),
        );
      return { parsedRequest: t.value };
    }
    l.receiveConflictRPC = e;
  },
  98,
);
