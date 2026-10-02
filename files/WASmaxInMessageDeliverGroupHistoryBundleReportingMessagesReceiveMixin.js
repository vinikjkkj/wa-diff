__d(
  "WASmaxInMessageDeliverGroupHistoryBundleReportingMessagesReceiveMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverClientReportingTokenValidationPolicyMixin",
    "WASmaxInMessageDeliverReportingTagElementMixin",
    "WASmaxInMessageDeliverReportingTokenElementMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverReportingTagElementMixin",
      ).parseReportingTagElementMixin(e);
      if (!r.success) return r;
      var a = o(
        "WASmaxInMessageDeliverReportingTokenElementMixin",
      ).parseReportingTokenElementMixin(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({ id: n.value }, r.value, {
          reportingTokenElementMixin: a.success ? a.value : null,
        }),
      );
    }
    function s(t) {
      var n = o("WASmaxParseUtils").flattenedChildWithTag(t, "reporting");
      if (!n.success) return n;
      var r = o(
          "WASmaxInMessageDeliverClientReportingTokenValidationPolicyMixin",
        ).parseClientReportingTokenValidationPolicyMixin(n.value),
        a = o("WASmaxParseUtils").mapChildrenWithTag(
          n.value,
          "message",
          0,
          1 / 0,
          e,
        );
      return a.success
        ? o("WAResultOrError").makeResult({
            reportingClientReportingTokenValidationPolicyMixin: r.success
              ? r.value
              : null,
            reportingMessage: a.value,
          })
        : a;
    }
    ((l.parseGroupHistoryBundleReportingMessagesReceiveReportingMessage = e),
      (l.parseGroupHistoryBundleReportingMessagesReceiveMixin = s));
  },
  98,
);
