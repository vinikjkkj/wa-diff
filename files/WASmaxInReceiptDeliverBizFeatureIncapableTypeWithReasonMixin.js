__d(
  "WASmaxInReceiptDeliverBizFeatureIncapableTypeWithReasonMixin",
  [
    "WAResultOrError",
    "WASmaxInReceiptDeliverFeatureIncapableErrorTypeMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(n.value, "reason");
      if (!r.success) return r;
      var a = o(
        "WASmaxInReceiptDeliverFeatureIncapableErrorTypeMixin",
      ).parseDeliverFeatureIncapableErrorTypeMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ bizReason: r.value }, a.value),
          )
        : a;
    }
    l.parseDeliverBizFeatureIncapableTypeWithReasonMixin = e;
  },
  98,
);
