__d(
  "WASmaxInMessageDeliverGroupHistoryBundleReportingDualEncReceiveMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEncGroupHistoryMixin",
    "WASmaxInMessageDeliverGroupHistoryBundleReportingMessagesReceiveMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMessageDeliverEncGroupHistoryMixin",
      ).parseEncGroupHistoryMixin(e);
      return (n.success, n);
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "message");
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverGroupHistoryBundleReportingMessagesReceiveMixin",
      ).parseGroupHistoryBundleReportingMessagesReceiveMixin(t);
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(t, "enc", 2, 2, e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, r.value, { enc: a.value }),
          )
        : a;
    }
    ((l.parseGroupHistoryBundleReportingDualEncReceiveEnc = e),
      (l.parseGroupHistoryBundleReportingDualEncReceiveMixin = s));
  },
  98,
);
