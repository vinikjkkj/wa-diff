__d(
  "ZenonTSLogDataUtil",
  ["ZenonAuditedCheckpointLogId", "ZenonInfraActionsLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = ["recv", "inbound"],
        n = ["send", "outbound"];
      return t.some(function (t) {
        return e.toLowerCase().includes(t);
      })
        ? "inbound"
        : n.some(function (t) {
              return e.toLowerCase().includes(t);
            })
          ? "outbound"
          : (r("ZenonInfraActionsLogger").logError({
              auditId: r("ZenonAuditedCheckpointLogId")
                .RP_ROOMS_INFRA_WWW__ERROR,
              checkpoint: "TsLogHolder Stream Name: " + e,
              error: "CANNOT_DETERMINE_STREAM_DIRECTION",
              errorDomain: "ZenonTSLogDataHelper",
            }),
            "inbound");
    }
    l.getMediaTrackDirection = e;
  },
  98,
);
