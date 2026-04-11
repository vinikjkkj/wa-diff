__d(
  "WASmaxPassiveModePassiveIQRPC",
  [
    "WAComms",
    "WASmaxInPassiveModePassiveIQResponseSuccess",
    "WASmaxOutPassiveModePassiveIQRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o(
              "WASmaxOutPassiveModePassiveIQRequest",
            ).makePassiveIQRequest(),
            n = yield o("WAComms").sendSmaxStanza(t, e),
            r = o(
              "WASmaxInPassiveModePassiveIQResponseSuccess",
            ).parsePassiveIQResponseSuccess(n, t);
          if (r.success)
            return { name: "PassiveIQResponseSuccess", value: r.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("PassiveIQ", {
              Success: r,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendPassiveIQRPC = e;
  },
  98,
);
