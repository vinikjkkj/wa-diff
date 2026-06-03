__d(
  "WASmaxAccountSetPaymentsTOSv3RPC",
  [
    "WAComms",
    "WASmaxInAccountSetPaymentsTOSv3ResponseError",
    "WASmaxInAccountSetPaymentsTOSv3ResponseSuccess",
    "WASmaxOutAccountSetPaymentsTOSv3Request",
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
              "WASmaxOutAccountSetPaymentsTOSv3Request",
            ).makeSetPaymentsTOSv3Request(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInAccountSetPaymentsTOSv3ResponseSuccess",
            ).parseSetPaymentsTOSv3ResponseSuccess(r, n);
          if (a.success)
            return { name: "SetPaymentsTOSv3ResponseSuccess", value: a.value };
          var i = o(
            "WASmaxInAccountSetPaymentsTOSv3ResponseError",
          ).parseSetPaymentsTOSv3ResponseError(r, n);
          if (i.success)
            return { name: "SetPaymentsTOSv3ResponseError", value: i.value };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing("SetPaymentsTOSv3", {
              Success: a,
              Error: i,
            }),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendSetPaymentsTOSv3RPC = e;
  },
  98,
);
