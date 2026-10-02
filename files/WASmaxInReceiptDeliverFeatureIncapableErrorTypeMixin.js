__d(
  "WASmaxInReceiptDeliverFeatureIncapableErrorTypeMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "error",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "type",
        "feature-incapable",
      );
      return a.success
        ? o("WAResultOrError").makeResult({ type: r.value, errorType: a.value })
        : a;
    }
    l.parseDeliverFeatureIncapableErrorTypeMixin = e;
  },
  98,
);
