__d(
  "ZenonMediaActionLogger",
  ["FBLogger", "RpWebMediaActionsEventFalcoEvent", "ZenonMediaLoggingUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {
          ((this.$1 = {
            conferenceName: void 0,
            deviceID: void 0,
            peerID: void 0,
            serverInfoData: void 0,
            signalingID: void 0,
          }),
            (this.$2 = !1));
        }
        var t = e.prototype;
        return (
          (t.updateCachedValues = function (t) {
            var e = t.conferenceName,
              n = t.deviceID,
              r = t.peerID,
              o = t.serverInfoData,
              a = t.signalingID;
            ((this.$1.signalingID = a != null ? a : this.$1.signalingID),
              (this.$1.conferenceName = e != null ? e : this.$1.conferenceName),
              (this.$1.deviceID = n != null ? n : this.$1.deviceID),
              (this.$1.peerID = r != null ? r : this.$1.peerID),
              (this.$1.serverInfoData =
                o != null ? o : this.$1.serverInfoData));
          }),
          (t.disable = function () {
            this.$2 = !0;
          }),
          (t.enable = function () {
            this.$2 = !1;
          }),
          (t.logCheckpointEmployeesTestUsersOnly = function (t) {
            r("ZenonMediaLoggingUtils").shouldLogEmployeeOnly() &&
              this.logCheckpoint(t);
          }),
          (t.logEventEmployeesTestUsersOnly = function (t) {
            r("ZenonMediaLoggingUtils").shouldLogEmployeeOnly() &&
              this.logEvent(t);
          }),
          (t.logCheckpoint = function (t) {
            this.logEvent({ checkpoint: t });
          }),
          (t.logEvent = function (t) {
            if (!this.$2) {
              var e = {
                call_id:
                  this.$1.signalingID == null
                    ? void 0
                    : String(this.$1.signalingID),
                checkpoint: t.checkpoint,
                client_timestamp_milliseconds: Date.now().toString(),
                conference_name: this.$1.conferenceName,
                error_domain: t.errorDomain,
                error_type: t.errorType,
                media_id: t.mediaID,
                peer_id: this.$1.peerID,
                server_info_data: this.$1.serverInfoData,
                web_device_id: this.$1.deviceID,
              };
              r("RpWebMediaActionsEventFalcoEvent").log(function () {
                return e;
              });
            }
          }),
          (t.logErrorToFbLogger = function (t, n, o, a) {
            if (!this.$2) {
              var e = r("FBLogger")("rtc_www");
              switch ((o instanceof Error && (e = e.catching(o)), a)) {
                case "debug":
                  e.debug(t);
                  break;
                case "info":
                  e.info(t);
                  break;
                case "warn":
                  e.warn(t);
                  break;
                case "mustfix":
                  e.mustfix(t);
                  break;
              }
              this.logEvent({
                checkpoint: t,
                errorDomain: n,
                errorType: o == null ? void 0 : o.toString(),
              });
            }
          }),
          e
        );
      })(),
      s = new e();
    l.default = s;
  },
  98,
);
