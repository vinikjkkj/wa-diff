__d(
  "WASmaxInMessageDeliverClientReportingTokenMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverReportingTokenElementMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "reporting");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverReportingTokenElementMixin",
      ).parseReportingTokenElementMixin(t.value);
      return o("WAResultOrError").makeResult({
        reportingReportingTokenElementMixin: n.success ? n.value : null,
      });
    }
    l.parseClientReportingTokenMixin = e;
  },
  98,
);
