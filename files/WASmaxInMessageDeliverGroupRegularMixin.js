__d(
  "WASmaxInMessageDeliverGroupRegularMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEncMediaTypeDeprecatedMixin",
    "WASmaxInMessageDeliverEncSenderType",
    "WASmaxInMessageDeliverEncVersion",
    "WASmaxInMessageDeliverGroupHistoryBundleReportingReceiveMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "enc");
      if (!n.success) return n;
      var r = o(
          "WASmaxInMessageDeliverEncMediaTypeDeprecatedMixin",
        ).parseEncMediaTypeDeprecatedMixin(n.value),
        a = o(
          "WASmaxInMessageDeliverGroupHistoryBundleReportingReceiveMixin",
        ).parseGroupHistoryBundleReportingReceiveMixin(e),
        i = o("WASmaxInMessageDeliverEncVersion").parseEncVersion(n.value);
      if (!i.success) return i;
      var l = o("WASmaxInMessageDeliverEncSenderType").parseEncSenderType(
        n.value,
      );
      return l.success
        ? o("WAResultOrError").makeResult({
            encEncMediaTypeDeprecatedMixin: r.success ? r.value : null,
            groupHistoryBundleReportingReceiveMixin: a.success ? a.value : null,
            encEncVersion: i.value,
            encEncSenderType: l.value,
          })
        : l;
    }
    l.parseGroupRegularMixin = e;
  },
  98,
);
