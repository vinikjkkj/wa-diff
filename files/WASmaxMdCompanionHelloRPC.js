__d(
  "WASmaxMdCompanionHelloRPC",
  [
    "WAComms",
    "WASmaxInMdCompanionHelloResponseError",
    "WASmaxInMdCompanionHelloResponseNotifyCompanion",
    "WASmaxOutMdCompanionHelloRequest",
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
              "WASmaxOutMdCompanionHelloRequest",
            ).makeCompanionHelloRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInMdCompanionHelloResponseNotifyCompanion",
            ).parseCompanionHelloResponseNotifyCompanion(r, n);
          if (a.success)
            return {
              name: "CompanionHelloResponseNotifyCompanion",
              value: a.value,
            };
          var i = o(
            "WASmaxInMdCompanionHelloResponseError",
          ).parseCompanionHelloResponseError(r, n);
          if (i.success)
            return { name: "CompanionHelloResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("CompanionHello", {
              NotifyCompanion: a,
              Error: i,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendCompanionHelloRPC = e;
  },
  98,
);
