__d(
  "WAWebBizAiSmartComposerMsgClassification",
  ["WAWebBotTypes", "WAWebMsgGetters", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        e != null &&
        e.isNewMsg === !0 &&
        e.local === !0 &&
        e.id.fromMe &&
        e.type === o("WAWebMsgType").MSG_TYPE.CHAT &&
        o("WAWebMsgGetters").getBizBotType(e) == null
      );
    }
    function s(e) {
      return (
        e != null &&
        !e.id.fromMe &&
        e.bizBotType !== o("WAWebBotTypes").BizBotType.BIZ_1P &&
        e.type !== o("WAWebMsgType").MSG_TYPE.REVOKED &&
        !o("WAWebMsgType").SYSTEM_MESSAGE_TYPES.includes(e.type)
      );
    }
    function u(e) {
      return (
        e != null &&
        e.type !== o("WAWebMsgType").MSG_TYPE.REVOKED &&
        !o("WAWebMsgType").SYSTEM_MESSAGE_TYPES.includes(e.type) &&
        (e.id.fromMe || e.bizBotType === o("WAWebBotTypes").BizBotType.BIZ_1P)
      );
    }
    ((l.isLocallyCreatedHumanTextMsg = e),
      (l.isInboundConsumerMsg = s),
      (l.isAgentOrBusinessReplyMsg = u));
  },
  98,
);
