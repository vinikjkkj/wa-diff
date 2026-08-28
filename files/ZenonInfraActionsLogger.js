__d(
  "ZenonInfraActionsLogger",
  [
    "Log",
    "RpWebInfraActionsLoggerEventFalcoEvent",
    "ZenonAuditedCheckpointLogId",
    "formatDate",
    "isEmployeeTestUserZenonLogging",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e() {
          ((this.$1 = {
            callTrigger: void 0,
            conferenceName: void 0,
            deviceID: void 0,
            mediaPath: "sfu",
            peerID: void 0,
            serverInfoData: void 0,
            signalingID: void 0,
          }),
            (this.$2 = new Set()),
            (this.$3 = new Map()),
            (this.$4 = new Map()));
        }
        var t = e.prototype;
        return (
          (t.updateCachedValues = function (t) {
            Object.assign(this.$1, t);
          }),
          (t.setE2eeIsMandatedForCall = function (t) {
            this.$3.set(t, !0);
          }),
          (t.logCheckpointEmployeesTestUsersOnly = function (t) {
            r("isEmployeeTestUserZenonLogging")() && this.logCheckpoint(t);
          }),
          (t.logCheckpoint = function (t) {
            this.logEvent(babelHelpers.extends({}, t));
          }),
          (t.logCheckpointOnceForDomain = function (t) {
            var e = t.checkpoint;
            this.$2.has(e) || (this.$2.add(e), this.logCheckpoint(t));
          }),
          (t.logError = function (t) {
            this.logEvent(babelHelpers.extends({}, t));
          }),
          (t.startTimer = function (t) {
            var e = Date.now();
            (this.$4.set(t, e),
              this.logEvent({ checkpoint: t + "_timerStart" }));
          }),
          (t.stopTimer = function (t) {
            var e = this.$4.get(t);
            this.$4.delete(t);
            var n = e != null ? Date.now() - e : null;
            return (
              this.logEvent({
                checkpoint: t + "_timerEnd",
                eventTimeElapsed: n,
              }),
              parseInt(n, 10)
            );
          }),
          (t.logEvent = function (t) {
            var e,
              n,
              o,
              a,
              i,
              l,
              s,
              u,
              c,
              d,
              m,
              p,
              _,
              f,
              g =
                (e = this.$3.get((n = this.$1.signalingID) != null ? n : "")) !=
                null
                  ? e
                  : !1;
            if (!(g && !r("justknobx")._("1021"))) {
              if (g && t.auditId == null) {
                var h = "Encountered an unaudited log line, dropping it.";
                t.error != null
                  ? this.logEvent({
                      auditId: r("ZenonAuditedCheckpointLogId")
                        .RP_ROOMS_INFRA_WWW__LOGGER_INFRA,
                      error: h,
                    })
                  : this.logEvent({
                      auditId: r("ZenonAuditedCheckpointLogId")
                        .RP_ROOMS_INFRA_WWW__LOGGER_INFRA,
                      checkpoint: h,
                    });
                return;
              }
              if (
                !(
                  ((o = t.checkpoint) == null ? void 0 : o.length) != null &&
                  t.checkpoint.length > 3e5
                )
              ) {
                var y = {
                  call_id:
                    (a = t.signalingID) != null
                      ? a
                      : this.$1.signalingID == null
                        ? void 0
                        : String(this.$1.signalingID),
                  call_trigger: this.$1.callTrigger,
                  call_type: (i = t.callType) != null ? i : null,
                  checkpoint: t.checkpoint,
                  client_session_id: this.$1.signalingID,
                  client_time: Date.now().toString(),
                  conference_name:
                    (l = t.conferenceName) != null ? l : this.$1.conferenceName,
                  connection:
                    (s = t.connectionState) != null
                      ? s
                      : this.$1.connectionState,
                  device_id: this.$1.deviceID,
                  error: t.error,
                  error_domain: t.errorDomain,
                  event_time_elapsed:
                    (u = t.eventTimeElapsed) == null ? void 0 : u.toString(),
                  is_caller: (c = t.isCaller) != null ? c : null,
                  media_path: (d = t.mediaPath) != null ? d : this.$1.mediaPath,
                  message_id: t.messageID,
                  peer_connection:
                    (m = t.peerConnectionState) != null
                      ? m
                      : this.$1.peerConnectionState,
                  peer_id: this.$1.peerID,
                  sdp_format: (p = t.sdpFormat) != null ? p : null,
                  server_info_data:
                    (_ = t.serverInfoData) != null ? _ : this.$1.serverInfoData,
                  signaling:
                    (f = t.signalingState) != null ? f : this.$1.signalingState,
                  state_machine_id: t.stateMachineID,
                };
                r("RpWebInfraActionsLoggerEventFalcoEvent").log(function () {
                  return y;
                });
              }
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
