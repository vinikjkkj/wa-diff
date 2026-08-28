__d(
  "ZenonClientTslogUploader",
  ["DateConsts", "ZenonAuditedCheckpointLogId", "ZenonInfraActionsLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 5 * o("DateConsts").MS_PER_MIN,
      s = "[ZP] Tslog Uploader",
      u = (function () {
        function t(t, n) {
          (t === void 0 && (t = function () {}),
            (this.$1 = function () {}),
            (this.$3 = e),
            (this.$1 = t),
            (this.$2 = n),
            (this.$3 = e));
        }
        var n = t.prototype;
        return (
          (n.$4 = function (t) {
            r("ZenonInfraActionsLogger").logCheckpoint({
              auditId: r("ZenonAuditedCheckpointLogId")
                .RP_ROOMS_INFRA_WWW__PLATFORM,
              checkpoint: s + " - " + t,
            });
          }),
          (n.logTslog = function () {
            var e = this.$2.timeSeries();
            if (e) {
              if (e.timeSeries == null || e.timeSeries.length === 0) {
                this.$4("TSLog is empty - stop sending from logTslog");
                return;
              }
              this.$1({ name: "logTSData", serializedTSLog: e });
            }
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
