__d(
  "WASmaxInStatusDeliverClientReportingTokenMixin",
  [
    "WAResultOrError",
    "WASmaxInStatusDeliverReportingTokenElementMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "reporting");
      if (!t.success) return t;
      var n = o(
        "WASmaxInStatusDeliverReportingTokenElementMixin",
      ).parseReportingTokenElementMixin(t.value);
      return o("WAResultOrError").makeResult({
        reportingReportingTokenElementMixin: n.success ? n.value : null,
      });
    }
    l.parseClientReportingTokenMixin = e;
  },
  98,
);
