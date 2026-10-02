__d(
  "WASmaxInReceiptDeliverBizTypeMixin",
  ["WAResultOrError", "WASmaxInReceiptBizErrorType", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxInReceiptBizErrorType").parseBizErrorType(e);
      return n.success
        ? o("WAResultOrError").makeResult({ bizErrorType: n.value })
        : n;
    }
    l.parseDeliverBizTypeMixin = e;
  },
  98,
);
