__d(
  "WASmaxInReceiptDeliverPeerDeliveryMixin",
  [
    "WAResultOrError",
    "WASmaxInReceiptPeerMessageTypeMixin",
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
        "WASmaxInReceiptPeerMessageTypeMixin",
      ).parsePeerMessageTypeMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value),
          )
        : r;
    }
    l.parseDeliverPeerDeliveryMixin = e;
  },
  98,
);
