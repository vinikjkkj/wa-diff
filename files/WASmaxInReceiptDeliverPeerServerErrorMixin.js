__d(
  "WASmaxInReceiptDeliverPeerServerErrorMixin",
  [
    "WAResultOrError",
    "WASmaxInReceiptPeerServerErrorTypeMixin",
    "WASmaxInReceiptSingleMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxInReceiptSingleMixin").parseSingleMixin(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInReceiptPeerServerErrorTypeMixin",
      ).parsePeerServerErrorTypeMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value),
          )
        : r;
    }
    l.parseDeliverPeerServerErrorMixin = e;
  },
  98,
);
