__d(
  "WASmaxBrPaymentCreateCustomPaymentMethodRPC",
  [
    "WAComms",
    "WASmaxInBrPaymentCreateCustomPaymentMethodResponseIQErrorWithCodeAndReason",
    "WASmaxInBrPaymentCreateCustomPaymentMethodResponseSuccess",
    "WASmaxOutBrPaymentCreateCustomPaymentMethodRequest",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      var n = o(
          "WASmaxOutBrPaymentCreateCustomPaymentMethodRequest",
        ).makeCreateCustomPaymentMethodRequest(e),
        r = await o("WAComms").sendSmaxStanza(n, t),
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
      ).parseCreateCustomPaymentMethodResponseIQErrorWithCodeAndReason(r, n);
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
    }
    l.sendCreateCustomPaymentMethodRPC = e;
  },
  98,
);
