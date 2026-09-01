__d(
  "WAWebBizAiHandoffResponseUtils",
  ["WAWebBotTypes", "WAWebMsgGetters", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set([
        (e = o("WAWebMsgType")).MSG_TYPE.BUTTONS_RESPONSE,
        e.MSG_TYPE.HSM,
        e.MSG_TYPE.INTERACTIVE,
        e.MSG_TYPE.INTERACTIVE_RESPONSE,
        e.MSG_TYPE.LIST,
        e.MSG_TYPE.LIST_RESPONSE,
        e.MSG_TYPE.NATIVE_FLOW,
        e.MSG_TYPE.PAYMENT,
        e.MSG_TYPE.REQUEST_PHONE_NUMBER,
        e.MSG_TYPE.TEMPLATE_BUTTON_REPLY,
      ]);
    function u(e) {
      return (
        e.id.fromMe &&
        e.type !== o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
        o("WAWebMsgGetters").getBizBotType(e) !==
          o("WAWebBotTypes").BizBotType.BIZ_1P &&
        (o("WAWebMsgGetters").getIsUserCreatedType(e) || s.has(e.type))
      );
    }
    l.isHumanBusinessReply = u;
  },
  98,
);
