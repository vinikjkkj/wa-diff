__d(
  "WASmaxOutMessagePublishBRPublishSendPayNodeP2MMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutMessagePublishInstallmentMixin",
    "WASmaxOutMessagePublishOrderInPaymentMixin",
    "WASmaxOutMessagePublishPaymentInitiatorMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.orderInPaymentMixinArgs,
        n = e.paymentInitiatorMixinArgs,
        r = e.installmentMixinArgs,
        a = o("WASmaxMixins").optionalMerge(
          o("WASmaxOutMessagePublishInstallmentMixin").mergeInstallmentMixin,
          o("WASmaxMixins").optionalMerge(
            o("WASmaxOutMessagePublishPaymentInitiatorMixin")
              .mergePaymentInitiatorMixin,
            o("WASmaxMixins").optionalMerge(
              o("WASmaxOutMessagePublishOrderInPaymentMixin")
                .mergeOrderInPaymentMixin,
              o("WASmaxJsx").smax("pay", { "transaction-type": "p2m" }),
              t,
            ),
            n,
          ),
          r,
        );
      return a;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeBRPublishSendPayNodeP2MMixin = s;
  },
  98,
);
