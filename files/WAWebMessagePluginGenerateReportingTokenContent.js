__d(
  "WAWebMessagePluginGenerateReportingTokenContent",
  [
    "WAWebCommonMsgSubtypeTypes",
    "WAWebMessagePluginGenerateReportingTokenContentRegistry",
    "WAWebMsgType",
    "WAWebPluginCreateRegistryLookup",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = o("WAWebPluginCreateRegistryLookup").createMsgTypeRegistryLookup(
        r("WAWebMessagePluginGenerateReportingTokenContentRegistry"),
      );
    function u(e) {
      var t;
      return (t = s(e.type, e.subtype)) == null ||
        t.generateReportingTokenContent == null
        ? void 0
        : t.generateReportingTokenContent(e);
    }
    function c(e, t) {
      return e === o("WAWebMsgType").MSG_TYPE.PROTOCOL ? !m.has(t) : !d.has(e);
    }
    var d = new Set([
        (e = o("WAWebMsgType")).MSG_TYPE.REACTION,
        e.MSG_TYPE.REACTION_ENC,
        e.MSG_TYPE.EVENT_RESPONSE,
        e.MSG_TYPE.POLL_UPDATE,
        e.MSG_TYPE.REVOKED,
        e.MSG_TYPE.PIN_MESSAGE,
        e.MSG_TYPE.KEEP_IN_CHAT,
      ]),
      m = new Set([
        o("WAWebCommonMsgSubtypeTypes").MsgSubtype.SenderRevoke,
        o("WAWebCommonMsgSubtypeTypes").MsgSubtype.AdminRevoke,
        o("WAWebCommonMsgSubtypeTypes").MsgSubtype.ScheduledMessageUnschedule,
      ]);
    ((l.generateReportingTokenContent = u),
      (l.isMsgTypeReportingTokenCompatible = c));
  },
  98,
);
