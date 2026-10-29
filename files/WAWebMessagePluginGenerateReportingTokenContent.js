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
      s,
      u = o("WAWebPluginCreateRegistryLookup").createMsgTypeRegistryLookup(
        r("WAWebMessagePluginGenerateReportingTokenContentRegistry"),
      );
    function c(e) {
      var t;
      return (t = u(e.type, e.subtype)) == null ||
        t.generateReportingTokenContent == null
        ? void 0
        : t.generateReportingTokenContent(e);
    }
    function d(e, t) {
      return e === o("WAWebMsgType").MSG_TYPE.PROTOCOL ? !p.has(t) : !m.has(e);
    }
    var m = new Set([
        (e = o("WAWebMsgType")).MSG_TYPE.REACTION,
        e.MSG_TYPE.REACTION_ENC,
        e.MSG_TYPE.EVENT_RESPONSE,
        e.MSG_TYPE.POLL_UPDATE,
        e.MSG_TYPE.REVOKED,
        e.MSG_TYPE.PIN_MESSAGE,
        e.MSG_TYPE.KEEP_IN_CHAT,
      ]),
      p = new Set([
        (s = o("WAWebCommonMsgSubtypeTypes")).MsgSubtype.SenderRevoke,
        s.MsgSubtype.AdminRevoke,
        s.MsgSubtype.MemberLabel,
        s.MsgSubtype.ScheduledMessageUnschedule,
      ]);
    ((l.generateReportingTokenContent = c),
      (l.isMsgTypeReportingTokenCompatible = d));
  },
  98,
);
