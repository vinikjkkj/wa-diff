__d(
  "WASmaxStreamErrorCodeRPC",
  [
    "WAResultOrError",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = s(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("Code", { Request: t }),
        );
      return { parsedRequest: t.value };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "stream:error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "code");
      return n.success ? o("WAResultOrError").makeResult({ code: n.value }) : n;
    }
    ((l.receiveCodeRPC = e), (l.parseCodeRequest = s));
  },
  98,
);
