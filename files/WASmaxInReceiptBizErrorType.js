__d(
  "WASmaxInReceiptBizErrorType",
  [
    "WAResultOrError",
    "WASmaxInReceiptDeliverBizFeatureIncapableTypeWithReasonMixin",
    "WASmaxInReceiptDeliverFeatureIncapableErrorTypeMixin",
    "WASmaxInReceiptHSMErrorTypeMixin",
    "WASmaxInReceiptOrderStatusErrorTypeMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInReceiptDeliverBizFeatureIncapableTypeWithReasonMixin",
      ).parseDeliverBizFeatureIncapableTypeWithReasonMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverBizFeatureIncapableTypeWithReason",
          value: t.value,
        });
      var n = o(
        "WASmaxInReceiptDeliverFeatureIncapableErrorTypeMixin",
      ).parseDeliverFeatureIncapableErrorTypeMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "DeliverFeatureIncapableErrorType",
          value: n.value,
        });
      var r = o("WASmaxInReceiptHSMErrorTypeMixin").parseHSMErrorTypeMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "HSMErrorType",
          value: r.value,
        });
      var a = o(
        "WASmaxInReceiptOrderStatusErrorTypeMixin",
      ).parseOrderStatusErrorTypeMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "OrderStatusErrorType",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "BizFeatureIncapableTypeWithReason",
              "FeatureIncapableErrorType",
              "HSMErrorType",
              "OrderStatusErrorType",
            ],
            [t, n, r, a],
          );
    }
    l.parseBizErrorType = e;
  },
  98,
);
