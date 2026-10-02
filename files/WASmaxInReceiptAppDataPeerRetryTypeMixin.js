__d(
  "WASmaxInReceiptAppDataPeerRetryTypeMixin",
  [
    "WAResultOrError",
    "WASmaxInReceiptAppDataPeerCategoryMixin",
    "WASmaxInReceiptRetryTypeMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxInReceiptRetryTypeMixin").parseRetryTypeMixin(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInReceiptAppDataPeerCategoryMixin",
      ).parseAppDataPeerCategoryMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value),
          )
        : r;
    }
    l.parseAppDataPeerRetryTypeMixin = e;
  },
  98,
);
