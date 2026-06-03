__d(
  "WASmaxWaffleGenerateWAEntACUserRPC",
  [
    "WAComms",
    "WASmaxInWaffleGenerateWAEntACUserResponseError",
    "WASmaxInWaffleGenerateWAEntACUserResponseSuccess",
    "WASmaxOutWaffleGenerateWAEntACUserRequest",
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
              "WASmaxOutWaffleGenerateWAEntACUserRequest",
            ).makeGenerateWAEntACUserRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInWaffleGenerateWAEntACUserResponseSuccess",
            ).parseGenerateWAEntACUserResponseSuccess(r, n);
          if (a.success)
            return {
              name: "GenerateWAEntACUserResponseSuccess",
              value: a.value,
            };
          var i = o(
            "WASmaxInWaffleGenerateWAEntACUserResponseError",
          ).parseGenerateWAEntACUserResponseError(r, n);
          if (i.success)
            return { name: "GenerateWAEntACUserResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("GenerateWAEntACUser", {
              Success: a,
              Error: i,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendGenerateWAEntACUserRPC = e;
  },
  98,
);
