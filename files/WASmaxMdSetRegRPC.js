__d(
  "WASmaxMdSetRegRPC",
  [
    "WASmaxInMdSetRegRequest",
    "WASmaxOutMdSetRegResponseClientResponse",
    "WASmaxOutMdSetRegResponseError",
    "WASmaxOutMdSetRegResponseHostedClientResponse",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInMdSetRegRequest").parseSetRegRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("SetReg", { Request: t }),
        );
      return {
        parsedRequest: t.value,
        makeSetRegResponseClientResponse: function (n) {
          return o(
            "WASmaxOutMdSetRegResponseClientResponse",
          ).makeSetRegResponseClientResponse(n, e);
        },
        makeSetRegResponseHostedClientResponse: function (n) {
          return o(
            "WASmaxOutMdSetRegResponseHostedClientResponse",
          ).makeSetRegResponseHostedClientResponse(n, e);
        },
        makeSetRegResponseError: function () {
          return o("WASmaxOutMdSetRegResponseError").makeSetRegResponseError(e);
        },
      };
    }
    l.receiveSetRegRPC = e;
  },
  98,
);
