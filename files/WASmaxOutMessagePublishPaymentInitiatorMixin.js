__d(
  "WASmaxOutMessagePublishPaymentInitiatorMixin",
  ["WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.anyPaymentInitiator,
        n = o("WASmaxJsx").smax("smax$any", {
          payment_initiator: o("WAWap").CUSTOM_STRING(t),
        });
      return n;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergePaymentInitiatorMixin = s;
  },
  98,
);
