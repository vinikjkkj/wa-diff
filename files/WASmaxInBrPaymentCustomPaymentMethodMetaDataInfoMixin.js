__d(
  "WASmaxInBrPaymentCustomPaymentMethodMetaDataInfoMixin",
  ["WASmaxInBrPaymentCustomPaymentMethodMetaDataMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "metadata_info");
      if (!t.success) return t;
      var n = o(
        "WASmaxInBrPaymentCustomPaymentMethodMetaDataMixin",
      ).parseCustomPaymentMethodMetaDataMixin(t.value);
      return (n.success, n);
    }
    l.parseCustomPaymentMethodMetaDataInfoMixin = e;
  },
  98,
);
