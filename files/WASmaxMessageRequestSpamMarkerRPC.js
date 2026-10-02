__d(
  "WASmaxMessageRequestSpamMarkerRPC",
  [
    "WASmaxInMessageRequestSpamMarkerRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInMessageRequestSpamMarkerRequest",
      ).parseSpamMarkerRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("SpamMarker", {
            Request: t,
          }),
        );
      return { parsedRequest: t.value };
    }
    l.receiveSpamMarkerRPC = e;
  },
  98,
);
