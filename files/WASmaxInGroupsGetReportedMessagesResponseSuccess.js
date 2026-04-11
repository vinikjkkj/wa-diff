__d(
  "WASmaxInGroupsGetReportedMessagesResponseSuccess",
  [
    "WAResultOrError",
    "WASmaxInGroupsGroupAddressingModeMixin",
    "WASmaxInGroupsIQResultResponseMixin",
    "WASmaxInGroupsIdentityMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "reporter");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrUserJid(e, "jid");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "timestamp", 0, void 0);
      if (!r.success) return r;
      var a = o("WASmaxInGroupsIdentityMixin").parseIdentityMixin(e);
      return o("WAResultOrError").makeResult({
        jid: n.value,
        timestamp: r.value,
        identityMixin: a.success ? a.value : null,
      });
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "report");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStanzaId(t, "message_id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(
        t,
        "reporter",
        1,
        19999,
        e,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            messageId: r.value,
            reporter: a.value,
          })
        : a;
    }
    function u(e, t) {
      var n = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "reports");
      if (!r.success) return r;
      var a = o(
        "WASmaxInGroupsIQResultResponseMixin",
      ).parseIQResultResponseMixin(e, t);
      if (!a.success) return a;
      var i = o(
          "WASmaxInGroupsGroupAddressingModeMixin",
        ).parseGroupAddressingModeMixin(e),
        l = o("WASmaxParseUtils").mapChildrenWithTag(
          r.value,
          "report",
          0,
          1e4,
          s,
        );
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, a.value, {
              groupAddressingModeMixin: i.success ? i.value : null,
              reportsReport: l.value,
            }),
          )
        : l;
    }
    ((l.parseGetReportedMessagesResponseSuccessReportsReportReporter = e),
      (l.parseGetReportedMessagesResponseSuccessReportsReport = s),
      (l.parseGetReportedMessagesResponseSuccess = u));
  },
  98,
);
