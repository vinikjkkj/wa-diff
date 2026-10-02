__d(
  "WASmaxDirtyBitsNotifyRPC",
  ["WASmaxInDirtyBitsNotifyRequest", "WASmaxParsingFailure", "WASmaxRpcUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInDirtyBitsNotifyRequest").parseNotifyRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("Notify", { Request: t }),
        );
      return { parsedRequest: t.value };
    }
    l.receiveNotifyRPC = e;
  },
  98,
);
