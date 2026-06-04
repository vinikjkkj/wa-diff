__d(
  "WASmaxMdSetEncryptedPairingRequestRPC",
  [
    "WAComms",
    "WASmaxInMdSetEncryptedPairingRequestResponseSuccess",
    "WASmaxOutMdSetEncryptedPairingRequestRequest",
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
              "WASmaxOutMdSetEncryptedPairingRequestRequest",
            ).makeSetEncryptedPairingRequestRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInMdSetEncryptedPairingRequestResponseSuccess",
            ).parseSetEncryptedPairingRequestResponseSuccess(r, n);
          if (a.success)
            return {
              name: "SetEncryptedPairingRequestResponseSuccess",
              value: a.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "SetEncryptedPairingRequest",
              { Success: a },
            ),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendSetEncryptedPairingRequestRPC = e;
  },
  98,
);
