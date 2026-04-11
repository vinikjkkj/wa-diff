__d(
  "WASmaxMdSetToCompanionRPC",
  [
    "WASmaxInMdSetToCompanionRequest",
    "WASmaxOutMdSetToCompanionResponseClientResponse",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInMdSetToCompanionRequest").parseSetToCompanionRequest(
        e,
      );
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("SetToCompanion", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeSetToCompanionResponseClientResponse: function () {
          return o(
            "WASmaxOutMdSetToCompanionResponseClientResponse",
          ).makeSetToCompanionResponseClientResponse(e);
        },
      };
    }
    l.receiveSetToCompanionRPC = e;
  },
  98,
);
