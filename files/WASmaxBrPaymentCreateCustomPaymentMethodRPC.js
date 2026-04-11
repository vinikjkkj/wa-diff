__d(
  "WASmaxBrPaymentCreateCustomPaymentMethodRPC",
  [
    "WAComms",
    "WASmaxInBrPaymentCreateCustomPaymentMethodResponseIQErrorWithCodeAndReason",
    "WASmaxInBrPaymentCreateCustomPaymentMethodResponseSuccess",
    "WASmaxOutBrPaymentCreateCustomPaymentMethodRequest",
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
              "WASmaxOutBrPaymentCreateCustomPaymentMethodRequest",
            ).makeCreateCustomPaymentMethodRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInBrPaymentCreateCustomPaymentMethodResponseSuccess",
            ).parseCreateCustomPaymentMethodResponseSuccess(r, n);
          if (a.success)
            return {
              name: "CreateCustomPaymentMethodResponseSuccess",
              value: a.value,
            };
          var i = o(
            "WASmaxInBrPaymentCreateCustomPaymentMethodResponseIQErrorWithCodeAndReason",
          ).parseCreateCustomPaymentMethodResponseIQErrorWithCodeAndReason(
            r,
            n,
          );
          if (i.success)
            return {
              name: "CreateCustomPaymentMethodResponseIQErrorWithCodeAndReason",
              value: i.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "CreateCustomPaymentMethod",
              { Success: a, IQErrorWithCodeAndReason: i },
            ),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendCreateCustomPaymentMethodRPC = e;
  },
  98,
);
