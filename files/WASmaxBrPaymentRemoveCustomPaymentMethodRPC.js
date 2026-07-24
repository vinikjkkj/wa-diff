__d(
  "WASmaxBrPaymentRemoveCustomPaymentMethodRPC",
  [
    "WAComms",
    "WASmaxInBrPaymentRemoveCustomPaymentMethodResponseError",
    "WASmaxInBrPaymentRemoveCustomPaymentMethodResponseSuccess",
    "WASmaxOutBrPaymentRemoveCustomPaymentMethodRequest",
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
              "WASmaxOutBrPaymentRemoveCustomPaymentMethodRequest",
            ).makeRemoveCustomPaymentMethodRequest(e),
            r = yield o("WAComms").sendSmaxStanza(n, t),
            a = o(
              "WASmaxInBrPaymentRemoveCustomPaymentMethodResponseSuccess",
            ).parseRemoveCustomPaymentMethodResponseSuccess(r, n);
          if (a.success)
            return {
              name: "RemoveCustomPaymentMethodResponseSuccess",
              value: a.value,
            };
          var i = o(
            "WASmaxInBrPaymentRemoveCustomPaymentMethodResponseError",
          ).parseRemoveCustomPaymentMethodResponseError(r, n);
          if (i.success)
            return {
              name: "RemoveCustomPaymentMethodResponseError",
              value: i.value,
            };
          throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
            o("WASmaxRpcUtils").errorMessageRpcParsing(
              "RemoveCustomPaymentMethod",
              { Success: a, Error: i },
            ),
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.sendRemoveCustomPaymentMethodRPC = e;
  },
  98,
);
