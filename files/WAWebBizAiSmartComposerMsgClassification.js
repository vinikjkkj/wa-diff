__d(
  "WAWebBizAiSmartComposerMsgClassification",
  ["WAWebBotTypes", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        e != null &&
        !e.id.fromMe &&
        e.bizBotType !== o("WAWebBotTypes").BizBotType.BIZ_1P &&
        e.type !== o("WAWebMsgType").MSG_TYPE.REVOKED &&
        !o("WAWebMsgType").SYSTEM_MESSAGE_TYPES.includes(e.type)
      );
    }
    l.isInboundConsumerMsg = e;
  },
  98,
);
