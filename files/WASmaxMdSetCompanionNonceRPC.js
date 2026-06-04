__d(
  "WASmaxMdSetCompanionNonceRPC",
  [
    "WAComms",
    "WASmaxInMdSetCompanionNonceResponseSuccess",
    "WASmaxOutMdSetCompanionNonceRequest",
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
              "WASmaxOutMdSetCompanionNonceRequest",
            ).makeSetCompanionNonceRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInMdSetCompanionNonceResponseSuccess",
            ).parseSetCompanionNonceResponseSuccess(r, n);
          if (a.success)
            return { name: "SetCompanionNonceResponseSuccess", value: a.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("SetCompanionNonce", {
              Success: a,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendSetCompanionNonceRPC = e;
  },
  98,
);
