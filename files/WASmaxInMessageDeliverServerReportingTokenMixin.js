__d(
  "WASmaxInMessageDeliverServerReportingTokenMixin",
  ["WASmaxInMessageDeliverReportingTagElementMixin", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "reporting");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverReportingTagElementMixin",
      ).parseReportingTagElementMixin(t.value);
      return (n.success, n);
    }
    l.parseServerReportingTokenMixin = e;
  },
  98,
);
