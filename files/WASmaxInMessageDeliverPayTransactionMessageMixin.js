__d(
  "WASmaxInMessageDeliverPayTransactionMessageMixin",
  ["WASmaxInMessageDeliverPayTransactionAnyMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "transaction");
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverPayTransactionAnyMixin",
      ).parsePayTransactionAnyMixin(n.value);
      return (r.success, r);
    }
    l.parsePayTransactionMessageMixin = e;
  },
  98,
);
