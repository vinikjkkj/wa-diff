__d(
  "WASmaxOfflineCompletionRPC",
  [
    "WASmaxInOfflineCompletionRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInOfflineCompletionRequest").parseCompletionRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("Completion", {
            Request: t,
          }),
        );
      return { parsedRequest: t.value };
    }
    l.receiveCompletionRPC = e;
  },
  98,
);
