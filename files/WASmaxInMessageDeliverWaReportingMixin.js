__d(
  "WASmaxInMessageDeliverWaReportingMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverClientReportingTokenMixin",
    "WASmaxInMessageDeliverClientReportingTokenValidationPolicyMixin",
    "WASmaxInMessageDeliverServerReportingTokenMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o(
          "WASmaxInMessageDeliverClientReportingTokenMixin",
        ).parseClientReportingTokenMixin(e),
        r = o(
          "WASmaxInMessageDeliverClientReportingTokenValidationPolicyMixin",
        ).parseClientReportingTokenValidationPolicyMixin(e),
        a = o(
          "WASmaxInMessageDeliverServerReportingTokenMixin",
        ).parseServerReportingTokenMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                clientReportingTokenMixin: n.success ? n.value : null,
                clientReportingTokenValidationPolicyMixin: r.success
                  ? r.value
                  : null,
              },
              a.value,
            ),
          )
        : a;
    }
    l.parseWaReportingMixin = e;
  },
  98,
);
