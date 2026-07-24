__d(
  "WASmaxOutBrPaymentRemoveCustomPaymentMethodRequest",
  ["WASmaxJsx", "WASmaxOutBrPaymentSetIQMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.accountCredentialId,
        n = o("WASmaxOutBrPaymentSetIQMixin").mergeSetIQMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax("account", {
              action: "remove-custom-payment-method",
              credential_id: o("WAWap").CUSTOM_STRING(t),
              country: "BR",
            }),
          ),
        );
      return n;
    }
    l.makeRemoveCustomPaymentMethodRequest = e;
  },
  98,
);
