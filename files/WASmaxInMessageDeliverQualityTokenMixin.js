__d(
  "WASmaxInMessageDeliverQualityTokenMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "hsm");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "quality_token");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalLiteral(
        o("WASmaxParseUtils").attrString,
        n.value,
        "v",
        "1",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").contentBytesRange(n.value, 1, 16384);
      return a.success
        ? o("WAResultOrError").makeResult({
            qualityTokenV: r.value,
            qualityTokenElementValue: a.value,
          })
        : a;
    }
    l.parseQualityTokenMixin = e;
  },
  98,
);
