__d(
  "WAWebSilentProtocolMsg",
  ["WAWebCommonMsgSubtypeTypes", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set([
        (e = o("WAWebCommonMsgSubtypeTypes")).MsgSubtype.BotFeedback,
        e.MsgSubtype.BizAIMetadataSync,
        e.MsgSubtype.EphemeralSyncResponse,
        e.MsgSubtype.HatchMetadataSync,
      ]);
    function u(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
        e.subtype != null &&
        s.has(e.subtype)
      );
    }
    l.isSilentProtocolMsg = u;
  },
  98,
);
