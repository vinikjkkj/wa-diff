__d(
  "WASmaxOutBrPaymentCustomPaymentMethodMetaDataInfoMixin",
  [
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxOutBrPaymentCustomPaymentMethodMetaDataMixin",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxJsx").smax(
        "smax$any",
        null,
        o(
          "WASmaxOutBrPaymentCustomPaymentMethodMetaDataMixin",
        ).mergeCustomPaymentMethodMetaDataMixin(
          o("WASmaxJsx").smax("metadata_info", null),
          e,
        ),
      );
      return t;
    }
    function s(t, n) {
      var r = e(n);
      return o("WASmaxMixins").mergeStanzas(t, r);
    }
    l.mergeCustomPaymentMethodMetaDataInfoMixin = s;
  },
  98,
);
