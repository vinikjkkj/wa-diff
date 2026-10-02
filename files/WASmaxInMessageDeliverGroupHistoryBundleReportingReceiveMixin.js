__d(
  "WASmaxInMessageDeliverGroupHistoryBundleReportingReceiveMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEncGroupHistoryMixin",
    "WASmaxInMessageDeliverGroupHistoryBundleReportingMessagesReceiveMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "enc");
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverEncGroupHistoryMixin",
      ).parseEncGroupHistoryMixin(n.value);
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverGroupHistoryBundleReportingMessagesReceiveMixin",
      ).parseGroupHistoryBundleReportingMessagesReceiveMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ encEncGroupHistoryMixin: r.value }, a.value),
          )
        : a;
    }
    l.parseGroupHistoryBundleReportingReceiveMixin = e;
  },
  98,
);
