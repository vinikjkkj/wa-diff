__d(
  "WASmaxInReceiptPeerRetryTypeMixin",
  [
    "WAResultOrError",
    "WASmaxInReceiptPeerCategoryMixin",
    "WASmaxInReceiptRetryTypeMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxInReceiptRetryTypeMixin").parseRetryTypeMixin(e);
      if (!n.success) return n;
      var r = o("WASmaxInReceiptPeerCategoryMixin").parsePeerCategoryMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value),
          )
        : r;
    }
    l.parsePeerRetryTypeMixin = e;
  },
  98,
);
