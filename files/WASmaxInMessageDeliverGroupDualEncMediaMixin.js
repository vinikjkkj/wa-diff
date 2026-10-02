__d(
  "WASmaxInMessageDeliverGroupDualEncMediaMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverContentTypeMediaOrMedianotifyMixinGroup",
    "WASmaxInMessageDeliverEncSenderIndividualTypes",
    "WASmaxInMessageDeliverEncVersion",
    "WASmaxInMessageDeliverGroupHistoryBundleReportingDualEncReceiveMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxInMessageDeliverEncVersion").parseEncVersion(e);
      if (!n.success) return n;
      var r = o(
        "WASmaxInMessageDeliverEncSenderIndividualTypes",
      ).parseEncSenderIndividualTypes(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            encVersion: n.value,
            encSenderIndividualTypes: r.value,
          })
        : r;
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "rcat");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytes(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function u(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "message");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(t, "rcat", s);
      if (!r.success) return r;
      var a = o(
          "WASmaxInMessageDeliverGroupHistoryBundleReportingDualEncReceiveMixin",
        ).parseGroupHistoryBundleReportingDualEncReceiveMixin(t),
        i = o(
          "WASmaxInMessageDeliverContentTypeMediaOrMedianotifyMixinGroup",
        ).parseContentTypeMediaOrMedianotifyMixinGroup(t);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").mapChildrenWithTag(t, "enc", 2, 2, e);
      return l.success
        ? o("WAResultOrError").makeResult({
            groupHistoryBundleReportingDualEncReceiveMixin: a.success
              ? a.value
              : null,
            contentTypeMediaOrMedianotifyMixinGroup: i.value,
            rcat: r.value,
            enc: l.value,
          })
        : l;
    }
    ((l.parseGroupDualEncMediaEnc = e),
      (l.parseGroupDualEncMediaRcat = s),
      (l.parseGroupDualEncMediaMixin = u));
  },
  98,
);
