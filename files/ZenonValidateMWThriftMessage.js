__d(
  "ZenonValidateMWThriftMessage",
  [
    "FBLogger",
    "MultiwayCommonTypes",
    "ZenonInfraActionsLogger",
    "ZenonMWThriftMessageMap",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.messageHeader.type,
        n = o("ZenonMWThriftMessageMap").messageTypeToString(t);
      return e.messageHeader.serverInfoData == null &&
        t != null &&
        t !== o("MultiwayCommonTypes").MessageType.JOIN
        ? (r("ZenonInfraActionsLogger").logCheckpoint({
            checkpoint: "[ZP][DROP] No remoteSignalingID in message: " + n,
          }),
          r("FBLogger")("rtc_www").warn(
            "[ZP][DROP] No remoteSignalingID in message: " + n,
          ),
          !1)
        : !0;
    }
    l.default = e;
  },
  98,
);
