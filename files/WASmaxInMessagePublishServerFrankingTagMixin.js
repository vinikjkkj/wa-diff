__d(
  "WASmaxInMessagePublishServerFrankingTagMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "franking");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        t.value,
        "reporting_tag",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").contentBytesRange(n.value, 9, 128);
      return r.success
        ? o("WAResultOrError").makeResult({
            frankingReportingTagElementValue: r.value,
          })
        : r;
    }
    l.parseServerFrankingTagMixin = e;
  },
  98,
);
