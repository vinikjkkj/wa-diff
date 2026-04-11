__d(
  "WASmaxOutBrPaymentCreateCustomPaymentMethodRequest",
  [
    "WASmaxAttrs",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutBrPaymentCustomPaymentMethodMetaDataInfoMixin",
    "WASmaxOutBrPaymentSetIQMixin",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.accountDeviceId,
        r = e.customPaymentMethodType,
        a = e.customPaymentMethodUpdate,
        i = e.customPaymentMethodFlow,
        l = e.customPaymentMethodMetaDataInfoMixinArgs,
        s = o("WASmaxOutBrPaymentSetIQMixin").mergeSetIQMixin(
          o("WASmaxJsx").smax(
            "iq",
            null,
            o("WASmaxJsx").smax(
              "account",
              {
                action: "create-custom-payment-method",
                device_id: (t = o("WAWap")).CUSTOM_STRING(n),
                country: "BR",
              },
              o("WASmaxMixins").optionalMerge(
                o("WASmaxOutBrPaymentCustomPaymentMethodMetaDataInfoMixin")
                  .mergeCustomPaymentMethodMetaDataInfoMixin,
                o("WASmaxJsx").smax("custom_payment_method", {
                  type: t.CUSTOM_STRING(r),
                  update: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, a),
                  flow: o("WASmaxAttrs").OPTIONAL(t.CUSTOM_STRING, i),
                }),
                l,
              ),
            ),
          ),
        );
      return s;
    }
    l.makeCreateCustomPaymentMethodRequest = e;
  },
  98,
);
