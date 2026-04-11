__d(
  "WASmaxWaffleEncryptedPayloadRequestRPC",
  [
    "WAComms",
    "WASmaxInWaffleEncryptedPayloadRequestResponseError",
    "WASmaxInWaffleEncryptedPayloadRequestResponseSuccess",
    "WASmaxOutWaffleEncryptedPayloadRequestRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o(
              "WASmaxOutWaffleEncryptedPayloadRequestRequest",
            ).makeEncryptedPayloadRequestRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
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
            return {
              name: "EncryptedPayloadRequestResponseError",
              value: i.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "EncryptedPayloadRequest",
              { Success: a, Error: i },
            ),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendEncryptedPayloadRequestRPC = e;
  },
  98,
);
