__d(
  "WAWebScanDbRowApiSkipRow",
  ["WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set([
        (e = o("WAWebMsgType")).MSG_TYPE.AUDIO,
        e.MSG_TYPE.CHAT,
        e.MSG_TYPE.DOCUMENT,
        e.MSG_TYPE.GROUPS_V4_INVITE,
        e.MSG_TYPE.HSM,
        e.MSG_TYPE.IMAGE,
        e.MSG_TYPE.INTERACTIVE,
        e.MSG_TYPE.LIST,
        e.MSG_TYPE.LOCATION,
        e.MSG_TYPE.MULTI_VCARD,
        e.MSG_TYPE.ORDER,
        e.MSG_TYPE.PAYMENT,
        e.MSG_TYPE.PRODUCT,
        e.MSG_TYPE.PTT,
        e.MSG_TYPE.STICKER,
        e.MSG_TYPE.TEMPLATE_BUTTON_REPLY,
        e.MSG_TYPE.VCARD,
        e.MSG_TYPE.VIDEO,
        e.MSG_TYPE.AUTOMATED_GREETING_MESSAGE,
      ]);
    function u(e, t) {
      return t === "message" && !s.has(e.type);
    }
    l.skipRow = u;
  },
  98,
);
