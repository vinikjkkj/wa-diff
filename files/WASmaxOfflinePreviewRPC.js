__d(
  "WASmaxOfflinePreviewRPC",
  ["WASmaxInOfflinePreviewRequest", "WASmaxParsingFailure", "WASmaxRpcUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInOfflinePreviewRequest").parsePreviewRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("Preview", { Request: t }),
        );
      return { parsedRequest: t.value };
    }
    l.receivePreviewRPC = e;
  },
  98,
);
