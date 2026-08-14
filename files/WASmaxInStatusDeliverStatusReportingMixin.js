__d(
  "WASmaxInStatusDeliverStatusReportingMixin",
  [
    "WAResultOrError",
    "WASmaxInStatusDeliverClientReportingTokenMixin",
    "WASmaxInStatusDeliverServerReportingTokenMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "status");
      if (!t.success) return t;
      var n = o(
          "WASmaxInStatusDeliverServerReportingTokenMixin",
        ).parseServerReportingTokenMixin(e),
        r = o(
          "WASmaxInStatusDeliverClientReportingTokenMixin",
        ).parseClientReportingTokenMixin(e);
      return o("WAResultOrError").makeResult({
        serverReportingTokenMixin: n.success ? n.value : null,
        clientReportingTokenMixin: r.success ? r.value : null,
      });
    }
    l.parseStatusReportingMixin = e;
  },
  98,
);
