__d(
  "WASmaxInMessageDeliverProductListMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "biz");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "list");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        r.value,
        "type",
        "product_list",
      );
      return a.success
        ? o("WAResultOrError").makeResult({ bizListType: a.value })
        : a;
    }
    l.parseProductListMixin = e;
  },
  98,
);
