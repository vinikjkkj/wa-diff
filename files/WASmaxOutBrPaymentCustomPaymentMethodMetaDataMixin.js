__d(
  "WASmaxOutBrPaymentCustomPaymentMethodMetaDataMixin",
  ["WASmaxChildren", "WASmaxJsx", "WASmaxMixins", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.metadataKey,
        n = e.metadataValue,
        r = o("WASmaxJsx").smax("metadata", {
          key: o("WAWap").CUSTOM_STRING(t),
          value: o("WAWap").CUSTOM_STRING(n),
        });
      return r;
    }
    function s(t) {
      var n = t.metadataArgs,
        r = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxChildren").REPEATED_CHILD(e, n, 1, 5),
        );
      return r;
    }
    function u(e, t) {
      var n = s(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.makeCustomPaymentMethodMetaDataMetadata = e),
      (l.mergeCustomPaymentMethodMetaDataMixin = u));
  },
  98,
);
