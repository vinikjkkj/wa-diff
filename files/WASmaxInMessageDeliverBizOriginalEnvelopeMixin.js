__d(
  "WASmaxInMessageDeliverBizOriginalEnvelopeMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "biz");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "original_envelope",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentBytesRange(n.value, 1, 102400);
      return r.success
        ? o("WAResultOrError").makeResult({
            originalEnvelopeElementValue: r.value,
          })
        : r;
    }
    l.parseBizOriginalEnvelopeMixin = e;
  },
  98,
);
