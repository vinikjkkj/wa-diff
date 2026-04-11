__d(
  "WAWebMessagePluginGenerateReportingTokenContent",
  [
    "WAWebMessagePluginGenerateReportingTokenContentRegistry",
    "WAWebMessagingGatingUtils",
    "WAWebMsgType",
    "WAWebPluginCreateRegistryLookup",
  ],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebPluginCreateRegistryLookup").createMsgTypeRegistryLookup(
      r("WAWebMessagePluginGenerateReportingTokenContentRegistry"),
    );
    function s(t) {
      var n;
      return (n = e(t.type, t.subtype)) == null ||
        n.generateReportingTokenContent == null
        ? void 0
        : n.generateReportingTokenContent(t);
    }
    function u(t, n) {
      var r;
      return o(
        "WAWebMessagingGatingUtils",
      ).isReportingTokenFromInclusionListEnabled()
        ? !!((r = e(t, n)) != null && r.generateReportingTokenContent)
        : t !== o("WAWebMsgType").MSG_TYPE.REACTION &&
            t !== o("WAWebMsgType").MSG_TYPE.REACTION_ENC &&
            t !== o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE &&
            t !== o("WAWebMsgType").MSG_TYPE.POLL_UPDATE;
    }
    ((l.generateReportingTokenContent = s),
      (l.isMsgTypeReportingTokenCompatible = u));
  },
  98,
);
