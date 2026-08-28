__d(
  "ZenonIceConnectionMonitor",
  [
    "DateConsts",
    "ZenonAuditedCheckpointLogId",
    "ZenonInfraActionsLogger",
    "ZenonNetworkQualityMonitor",
    "ZenonPeerConnectionConstants",
    "clearTimeout",
    "emptyFunction",
    "performanceNow",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = 30 * o("DateConsts").MS_PER_SEC,
      c = 3,
      d = new Set([
        (s = o("ZenonNetworkQualityMonitor")).ZenonNetworkQuality.Disconnected,
        s.ZenonNetworkQuality.Poor,
      ]),
      m = new Set([
        s.ZenonNetworkQuality.Excellent,
        s.ZenonNetworkQuality.Good,
        s.ZenonNetworkQuality.Fair,
      ]),
      p = (function () {
        function t() {
          ((this.$1 = "new"),
            (this.$2 = o(
              "ZenonNetworkQualityMonitor",
            ).ZenonNetworkQuality.Excellent),
            (this.$3 = null),
            (this.$4 = null),
            (this.$5 = 0),
            (this.$6 = !1),
            (this.$7 = 0));
        }
        var n = t.prototype;
        return (
          (n.clearIceRestartTimer = function () {
            this.$4 != null &&
              (r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly(
                { checkpoint: "Clearing platform ice restart timer" },
              ),
              r("clearTimeout")(this.$4),
              (this.$4 = null));
          }),
          (n.clearIceConnectionTimer = function () {
            this.$3 != null &&
              (r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly(
                { checkpoint: "Clearing platform connection drop timer" },
              ),
              r("clearTimeout")(this.$3),
              (this.$3 = null));
          }),
          (n.updateIceConnectionState = function (t) {
            ((this.$1 = t),
              r("ZenonInfraActionsLogger").logCheckpointEmployeesTestUsersOnly({
                checkpoint: "iceConnectionStateChange: " + t,
              }));
          }),
          (n.updateNetworkStatus = function (t) {
            this.$2 = t;
          }),
          (n.updateIceRestartTimer = function (n, o) {
            if (this.$8()) this.clearIceRestartTimer();
            else if (this.$9() && this.$4 == null && this.$5 < c)
              ((this.$7 = (e || (e = r("performanceNow")))() + o),
                r(
                  "ZenonInfraActionsLogger",
                ).logCheckpointEmployeesTestUsersOnly({
                  checkpoint: "Creating an ICE Restart timer",
                }),
                this.$10(n, o));
            else if (this.$9()) {
              var t = this.$7 - (e || (e = r("performanceNow")))();
              t > o &&
                (r(
                  "ZenonInfraActionsLogger",
                ).logCheckpointEmployeesTestUsersOnly({
                  checkpoint: "Creating a shorter ICE Restart timer",
                }),
                this.clearIceRestartTimer(),
                this.$10(n, o));
            }
          }),
          (n.$10 = function (t, n) {
            var e = this;
            this.$4 = r("setTimeout")(function () {
              (r("ZenonInfraActionsLogger").logCheckpoint({
                auditId: r("ZenonAuditedCheckpointLogId")
                  .RP_ROOMS_INFRA_WWW__PLATFORM,
                checkpoint: "Issuing an ICE Restart",
              }),
                e.$5++,
                t.processEvent({
                  onError: r("emptyFunction"),
                  onSuccess: r("emptyFunction"),
                  type: "iceRestart",
                }));
            }, n);
          }),
          (n.updateIceConnectionTimer = function (t, n) {
            (n === void 0 && (n = u),
              o("ZenonPeerConnectionConstants").CONNECTED_STATES.has(this.$1)
                ? this.clearIceConnectionTimer()
                : o("ZenonPeerConnectionConstants").DISCONNECTED_STATES.has(
                    this.$1,
                  ) &&
                  this.$3 == null &&
                  (r(
                    "ZenonInfraActionsLogger",
                  ).logCheckpointEmployeesTestUsersOnly({
                    checkpoint: "Setting platform connection drop timer",
                  }),
                  (this.$3 = r("setTimeout")(function () {
                    (r(
                      "ZenonInfraActionsLogger",
                    ).logCheckpointEmployeesTestUsersOnly({
                      checkpoint:
                        "Ending call on platform connection drop timeout",
                    }),
                      t());
                  }, n))));
          }),
          (n.logIceConnectionState = function (t) {
            (this.$11() ||
              t({
                connected: this.$12(),
                name: "peerConnectionStateChanged",
                newState: this.$1,
              }),
              this.$12() && t({ name: "mediaConnected" }),
              this.$1 === "connected" &&
                t({ name: "iceConnectionStateChangedConnected" }),
              this.$1 === "disconnected" &&
                t({ name: "iceConnectionStateChangedDisconnected" }));
          }),
          (n.$8 = function () {
            return this.$6 ? this.$12() && m.has(this.$2) : this.$12();
          }),
          (n.$9 = function () {
            return this.$6 ? this.$13() || d.has(this.$2) : this.$13();
          }),
          (n.$12 = function () {
            return o("ZenonPeerConnectionConstants").CONNECTED_STATES.has(
              this.$1,
            );
          }),
          (n.$13 = function () {
            return o("ZenonPeerConnectionConstants").DISCONNECTED_STATES.has(
              this.$1,
            );
          }),
          (n.$11 = function () {
            return o("ZenonPeerConnectionConstants").INDETERMINANT_STATES.has(
              this.$1,
            );
          }),
          t
        );
      })();
    l.default = p;
  },
  98,
);
