__d(
  "WASmaxMdCompanionFinishRPC",
  [
    "WAComms",
    "WASmaxInMdCompanionFinishResponseError",
    "WASmaxInMdCompanionFinishResponseSuccess",
    "WASmaxOutMdCompanionFinishRequest",
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
              "WASmaxOutMdCompanionFinishRequest",
            ).makeCompanionFinishRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInMdCompanionFinishResponseSuccess",
            ).parseCompanionFinishResponseSuccess(r, n);
          if (a.success)
            return { name: "CompanionFinishResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInMdCompanionFinishResponseError",
          ).parseCompanionFinishResponseError(r, n);
          if (i.success)
            return { name: "CompanionFinishResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("CompanionFinish", {
              Success: a,
              Error: i,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendCompanionFinishRPC = e;
  },
  98,
);
