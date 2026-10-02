__d(
  "WASmaxInMessageDeliverOriginalEnvelopeMixin",
  ["WASmaxInMessageDeliverBizOriginalEnvelopeMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverBizOriginalEnvelopeMixin",
      ).parseBizOriginalEnvelopeMixin(n.value);
      return (r.success, r);
    }
    l.parseOriginalEnvelopeMixin = e;
  },
  98,
);
