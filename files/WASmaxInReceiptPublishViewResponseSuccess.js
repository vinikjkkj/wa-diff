__d(
  "WASmaxInReceiptPublishViewResponseSuccess",
  ["WASmaxInReceiptPublishSuccessMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!n.success) return n;
      var r = o("WASmaxInReceiptPublishSuccessMixin").parsePublishSuccessMixin(
        e,
        t,
      );
      return (r.success, r);
    }
    l.parsePublishViewResponseSuccess = e;
  },
  98,
);
