__d(
  "WASmaxMdSetPasskeyPrologueRPC",
  [
    "WAComms",
    "WASmaxInMdSetPasskeyPrologueResponseSuccess",
    "WASmaxOutMdSetPasskeyPrologueRequest",
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
              "WASmaxOutMdSetPasskeyPrologueRequest",
            ).makeSetPasskeyPrologueRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInMdSetPasskeyPrologueResponseSuccess",
            ).parseSetPasskeyPrologueResponseSuccess(r, n);
          if (a.success)
            return {
              name: "SetPasskeyPrologueResponseSuccess",
              value: a.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("SetPasskeyPrologue", {
              Success: a,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendSetPasskeyPrologueRPC = e;
  },
  98,
);
