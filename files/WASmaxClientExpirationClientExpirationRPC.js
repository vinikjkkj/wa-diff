__d(
  "WASmaxClientExpirationClientExpirationRPC",
  [
    "WASmaxInClientExpirationClientExpirationRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInClientExpirationClientExpirationRequest",
      ).parseClientExpirationRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("ClientExpiration", {
            Request: t,
          }),
        );
      return { parsedRequest: t.value };
    }
    l.receiveClientExpirationRPC = e;
  },
  98,
);
