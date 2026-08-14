__d(
  "WASmaxInStatusDeliverEncSenderKeyBucketMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "bucket");
      return n.success
        ? o("WAResultOrError").makeResult({ bucket: n.value })
        : n;
    }
    l.parseEncSenderKeyBucketMixin = e;
  },
  98,
);
