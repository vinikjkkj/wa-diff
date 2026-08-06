__d(
  "WAWebSilentProtocolMsg",
  ["WAWebCommonMsgSubtypeTypes", "WAWebMsgType"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      o("WAWebCommonMsgSubtypeTypes").MsgSubtype.EphemeralSyncResponse,
      o("WAWebCommonMsgSubtypeTypes").MsgSubtype.HatchMetadataSync,
    ]);
    function s(t) {
      return (
        t.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL &&
        t.subtype != null &&
        e.has(t.subtype)
      );
    }
    l.isSilentProtocolMsg = s;
  },
  98,
);
