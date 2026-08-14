__d(
  "WASmaxInStatusDeliverReportingTagElementMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "reporting_tag");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytesRange(t.value, 9, 128);
      return n.success
        ? o("WAResultOrError").makeResult({ reportingTagElementValue: n.value })
        : n;
    }
    l.parseReportingTagElementMixin = e;
  },
  98,
);
