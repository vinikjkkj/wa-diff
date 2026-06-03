__d(
  "WASmaxWaffleForceSuspendStateRPC",
  [
    "WAComms",
    "WASmaxInWaffleForceSuspendStateResponseError",
    "WASmaxInWaffleForceSuspendStateResponseSuccess",
    "WASmaxOutWaffleForceSuspendStateRequest",
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
              "WASmaxOutWaffleForceSuspendStateRequest",
            ).makeForceSuspendStateRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInWaffleForceSuspendStateResponseSuccess",
            ).parseForceSuspendStateResponseSuccess(r, n);
          if (a.success)
            return { name: "ForceSuspendStateResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInWaffleForceSuspendStateResponseError",
          ).parseForceSuspendStateResponseError(r, n);
          if (i.success)
            return { name: "ForceSuspendStateResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("ForceSuspendState", {
              Success: a,
              Error: i,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendForceSuspendStateRPC = e;
  },
  98,
);
