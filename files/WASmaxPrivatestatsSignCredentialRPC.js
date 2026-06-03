__d(
  "WASmaxPrivatestatsSignCredentialRPC",
  [
    "WAComms",
    "WASmaxInPrivatestatsSignCredentialResponseErrorNoRetry",
    "WASmaxInPrivatestatsSignCredentialResponseErrorRetry",
    "WASmaxInPrivatestatsSignCredentialResponseSuccess",
    "WASmaxOutPrivatestatsSignCredentialRequest",
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
              "WASmaxOutPrivatestatsSignCredentialRequest",
            ).makeSignCredentialRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInPrivatestatsSignCredentialResponseSuccess",
            ).parseSignCredentialResponseSuccess(r, n);
          if (a.success)
            return { name: "SignCredentialResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInPrivatestatsSignCredentialResponseErrorNoRetry",
          ).parseSignCredentialResponseErrorNoRetry(r, n);
          if (i.success)
            return {
              name: "SignCredentialResponseErrorNoRetry",
              value: i.value,
            };
          var l = o(
            "WASmaxInPrivatestatsSignCredentialResponseErrorRetry",
          ).parseSignCredentialResponseErrorRetry(r, n);
          if (l.success)
            return { name: "SignCredentialResponseErrorRetry", value: l.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("SignCredential", {
              Success: a,
              ErrorNoRetry: i,
              ErrorRetry: l,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendSignCredentialRPC = e;
  },
  98,
);
