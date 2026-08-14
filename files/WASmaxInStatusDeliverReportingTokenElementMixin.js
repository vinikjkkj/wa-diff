__d(
  "WASmaxInStatusDeliverReportingTokenElementMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "reporting_token");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrInt,
        t.value,
        "v",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentBytesRange(t.value, 16, 16);
      return r.success
        ? o("WAResultOrError").makeResult({
            reportingTokenV: n.value,
            reportingTokenElementValue: r.value,
          })
        : r;
    }
    l.parseReportingTokenElementMixin = e;
  },
  98,
);
