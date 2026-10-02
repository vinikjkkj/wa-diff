__d(
  "WASmaxStreamErrorXMLNotWellFormedRPC",
  [
    "WASmaxInStreamErrorXMLNotWellFormedRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInStreamErrorXMLNotWellFormedRequest",
      ).parseXMLNotWellFormedRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("XMLNotWellFormed", {
            Request: t,
          }),
        );
      return { parsedRequest: t.value };
    }
    l.receiveXMLNotWellFormedRPC = e;
  },
  98,
);
