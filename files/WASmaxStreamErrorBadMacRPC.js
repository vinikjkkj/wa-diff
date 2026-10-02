__d(
  "WASmaxStreamErrorBadMacRPC",
  [
    "WASmaxInStreamErrorBadMacRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInStreamErrorBadMacRequest").parseBadMacRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("BadMac", { Request: t }),
        );
      return { parsedRequest: t.value };
    }
    l.receiveBadMacRPC = e;
  },
  98,
);
