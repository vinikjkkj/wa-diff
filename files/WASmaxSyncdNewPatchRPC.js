__d(
  "WASmaxSyncdNewPatchRPC",
  [
    "WASmaxInSyncdNewPatchRequest",
    "WASmaxOutSyncdNewPatchResponseClientAck",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInSyncdNewPatchRequest").parseNewPatchRequest(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("NewPatch", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeNewPatchResponseClientAck: function () {
          return o(
            "WASmaxOutSyncdNewPatchResponseClientAck",
          ).makeNewPatchResponseClientAck(e);
        },
      };
    }
    l.receiveNewPatchRPC = e;
  },
  98,
);
