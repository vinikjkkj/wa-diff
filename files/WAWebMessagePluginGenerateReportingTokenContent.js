__d(
  "WAWebMessagePluginGenerateReportingTokenContent",
  [
    "WAWebMessagePluginGenerateReportingTokenContentRegistry",
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
    function u(e, t) {
      return (
        e !== o("WAWebMsgType").MSG_TYPE.REACTION &&
        e !== o("WAWebMsgType").MSG_TYPE.REACTION_ENC &&
        e !== o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE &&
        e !== o("WAWebMsgType").MSG_TYPE.POLL_UPDATE
      );
    }
    ((l.generateReportingTokenContent = s),
      (l.isMsgTypeReportingTokenCompatible = u));
  },
  98,
);
