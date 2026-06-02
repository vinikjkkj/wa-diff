__d(
  "WASmaxWaffleEncryptedPayloadRequestRPC",
  [
    "WAComms",
    "WASmaxInWaffleEncryptedPayloadRequestResponseError",
    "WASmaxInWaffleEncryptedPayloadRequestResponseSuccess",
    "WASmaxOutWaffleEncryptedPayloadRequestRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutWaffleEncryptedPayloadRequestRequest",
        ).makeEncryptedPayloadRequestRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
        a = o(
          "WASmaxInWaffleEncryptedPayloadRequestResponseSuccess",
        ).parseEncryptedPayloadRequestResponseSuccess(r, n);
      if (a.success)
        return {
          name: "EncryptedPayloadRequestResponseSuccess",
          value: a.value,
        };
      var i = o(
        "WASmaxInWaffleEncryptedPayloadRequestResponseError",
      ).parseEncryptedPayloadRequestResponseError(r, n);
      if (i.success)
        return { name: "EncryptedPayloadRequestResponseError", value: i.value };
      throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
        o("WASmaxRpcUtils").errorMessageRpcParsing("EncryptedPayloadRequest", {
          Success: a,
          Error: i,
        }),
      );
    }
    l.sendEncryptedPayloadRequestRPC = e;
  },
  98,
);
