__d(
  "WASmaxPassiveModeActiveIQRPC",
  [
    "WAComms",
    "WASmaxInPassiveModeActiveIQResponseSuccess",
    "WASmaxOutPassiveModeActiveIQRequest",
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
              "WASmaxOutPassiveModeActiveIQRequest",
            ).makeActiveIQRequest(),
            n = yield o("WAComms").sendSmaxStanza(t, e),
            r = o(
              "WASmaxInPassiveModeActiveIQResponseSuccess",
            ).parseActiveIQResponseSuccess(n, t);
          if (r.success)
            return { name: "ActiveIQResponseSuccess", value: r.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("ActiveIQ", {
              Success: r,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendActiveIQRPC = e;
  },
  98,
);
