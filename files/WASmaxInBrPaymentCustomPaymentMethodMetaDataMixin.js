__d(
  "WASmaxInBrPaymentCustomPaymentMethodMetaDataMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "metadata");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "key");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(e, "value");
      return r.success
        ? o("WAResultOrError").makeResult({ key: n.value, value: r.value })
        : r;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").mapChildrenWithTag(t, "metadata", 1, 5, e);
      return n.success
        ? o("WAResultOrError").makeResult({ metadata: n.value })
        : n;
    }
    ((l.parseCustomPaymentMethodMetaDataMetadata = e),
      (l.parseCustomPaymentMethodMetaDataMixin = s));
  },
  98,
);
