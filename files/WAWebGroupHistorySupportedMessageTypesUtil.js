__d(
  "WAWebGroupHistorySupportedMessageTypesUtil",
  ["WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e === o("WAWebMsgType").MSG_TYPE.CHAT ||
        e === o("WAWebMsgType").MSG_TYPE.IMAGE ||
        e === o("WAWebMsgType").MSG_TYPE.AUDIO ||
        e === o("WAWebMsgType").MSG_TYPE.PTT ||
        e === o("WAWebMsgType").MSG_TYPE.PTV ||
        e === o("WAWebMsgType").MSG_TYPE.VIDEO ||
        e === o("WAWebMsgType").MSG_TYPE.VCARD ||
        e === o("WAWebMsgType").MSG_TYPE.LOCATION ||
        e === o("WAWebMsgType").MSG_TYPE.DOCUMENT ||
        e === o("WAWebMsgType").MSG_TYPE.MULTI_VCARD ||
        e === o("WAWebMsgType").MSG_TYPE.REVOKED ||
        e === o("WAWebMsgType").MSG_TYPE.STICKER ||
        e === o("WAWebMsgType").MSG_TYPE.GROUPS_V4_INVITE ||
        e === o("WAWebMsgType").MSG_TYPE.POLL_CREATION ||
        e === o("WAWebMsgType").MSG_TYPE.POLL_UPDATE ||
        e === o("WAWebMsgType").MSG_TYPE.EVENT_CREATION ||
        e === o("WAWebMsgType").MSG_TYPE.EVENT_RESPONSE ||
        e === o("WAWebMsgType").MSG_TYPE.ALBUM
      );
    }
    l.default = e;
  },
  98,
);
