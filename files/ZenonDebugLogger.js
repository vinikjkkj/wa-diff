__d(
  "ZenonDebugLogger",
  [
    "ChannelClientID",
    "CurrentUser",
    "FBLogger",
    "IGDWebUtils",
    "Log",
    "LogHistory",
    "ODS",
    "QuickLogActionType",
    "QuickPerformanceLogger",
    "RpWebStateMachineLoggingBlocklist.experimental",
    "UserAgentData",
    "WebDriverConfig",
    "ZenonAuditedCheckpointLogId",
    "ZenonInfraActionsLogger",
    "ZenonLoggingUtils",
    "ZenonMachineToQPLEvent",
    "ZenonODSLogger",
    "formatDate",
    "isEmployeeTestUserZenonLogging",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = null,
      c = (function () {
        function t() {
          var e;
          ((this.$1 = o("LogHistory").getInstance("webrtc")),
            (this.$2 = o("ChannelClientID").getID()),
            (this.$3 = JSON.stringify({
              browser: (e = r("UserAgentData")).browserName,
              browser_version: e.browserFullVersion,
              device: e.deviceName,
              msg_source: "web",
              os: e.platformName,
              os_version: e.platformFullVersion,
              version: 2,
            })));
          var t = r("CurrentUser").getAppID();
          (t != null && o("IGDWebUtils").isInstagramWebSupportedApp(Number(t))
            ? (this.$4 = parseInt(t, 10))
            : (this.$4 = 0xc815778a650a),
            (this.$5 = new Set(
              r("RpWebStateMachineLoggingBlocklist.experimental").EVENT_TYPES,
            )),
            (this.$6 = new Set(
              r("RpWebStateMachineLoggingBlocklist.experimental").STATES,
            )));
        }
        ((t.getInstance = function () {
          return (u || (u = new t()), u);
        }),
          (t.getFBLogger = function (t) {
            var e, n;
            return (
              t === void 0 && (t = {}),
              r("FBLogger")("rpweb")
                .addMetadata(
                  "RT_WEB",
                  "CALL_ID",
                  "" + ((e = t.signalingID) != null ? e : "null"),
                )
                .addMetadata(
                  "RT_WEB",
                  "PEER_ID",
                  "" + ((n = t.peerID) != null ? n : "null"),
                )
            );
          }));
        var n = t.prototype;
        return (
          (n.$7 = function (t, n, a) {
            n === void 0 && (n = !0);
            var e = r("formatDate")(new Date(), "[H:i:s:X]", {
              skipPatternLocalization: !0,
            });
            (r("WebDriverConfig").isJestE2ETestRun && o("Log").debug(t),
              this.$1.log("Console", e + " " + t),
              n &&
                r("ZenonInfraActionsLogger").logCheckpoint({
                  auditId: r("ZenonAuditedCheckpointLogId")
                    .RP_ROOMS_INFRA_WWW__PLATFORM,
                  checkpoint: "[ZP] " + t,
                  messageID: a,
                }));
          }),
          (n.$8 = function (t, n, o) {
            var e = r("formatDate")(new Date(), "[H:i:s:X]", {
              skipPatternLocalization: !0,
            });
            this.$1.log(
              "Console",
              e + " " + t + ". StateMachineID:  " + (n != null ? n : ""),
            );
            var a = {
              auditId: r("ZenonAuditedCheckpointLogId")
                .RP_ROOMS_INFRA_WWW__STATE_MACHINE,
              checkpoint: "[ZP] " + t + ".",
              stateMachineID: n,
            };
            (o != null && (a.messageID = o),
              r("ZenonInfraActionsLogger").logCheckpoint(a));
          }),
          (n.$9 = function (t, n, a, i) {
            i === void 0 && (i = 0);
            var e =
              r("ZenonMachineToQPLEvent") == null
                ? void 0
                : r("ZenonMachineToQPLEvent")[t];
            e &&
              (s || (s = r("QuickPerformanceLogger"))) &&
              r("QuickLogActionType") &&
              o("ZenonLoggingUtils").shouldAllowLogging() &&
              (a === "terminated"
                ? (s || (s = r("QuickPerformanceLogger"))).markerEnd(e, 2, i)
                : (s || (s = r("QuickPerformanceLogger"))).markerPoint(e, n, {
                    data: { string: { data: a } },
                    instanceKey: i,
                  }));
          }),
          (n.$10 = function (t) {
            return isNaN(+t) ? 0 : +t;
          }),
          (n.getLogHistory = function () {
            return this.$1;
          }),
          (n.logStateMachine = function (t, n, o, a, i) {
            if (r("isEmployeeTestUserZenonLogging")() && !this.$5.has(o)) {
              var e =
                  "[" +
                  t +
                  "] [Current State: " +
                  n +
                  "] Processing event: " +
                  o,
                l = {
                  auditId: r("ZenonAuditedCheckpointLogId")
                    .RP_ROOMS_INFRA_WWW__STATE_MACHINE,
                  checkpoint: "" + e,
                  stateMachineID: a,
                };
              (i != null && (l.messageID = i),
                r("ZenonInfraActionsLogger").logCheckpoint(l),
                this.$9(t, o, n, this.$10(a)));
            }
          }),
          (n.logStateMachineTransition = function (t, n, o, a, i, l, s, u) {
            if (
              !(this.$6.has(o) || this.$5.has(i)) &&
              r("isEmployeeTestUserZenonLogging")()
            ) {
              var e = "";
              (l != null && l.length === 1 && l[0].type === "defer"
                ? (e =
                    "[" +
                    t +
                    "] [[DEFERRED] " +
                    i +
                    " did not trigger transition. Current state remains " +
                    o)
                : o !== a
                  ? (e =
                      "[" +
                      t +
                      "] [[PROCESSED] " +
                      i +
                      " caused transition from " +
                      (a || "") +
                      " to " +
                      o +
                      ".")
                  : n
                    ? (e =
                        "[" +
                        t +
                        "] [[PROCESSED] " +
                        i +
                        " did not trigger transition. Current state remains " +
                        o)
                    : ((e =
                        "[" +
                        t +
                        "] [[DROPPED] " +
                        i +
                        " did not trigger transition. Current state remains " +
                        o),
                      this.$11(t)),
                this.$8(e, s, u));
            }
          }),
          (n.startQPL = function (t, n) {
            (n === void 0 && (n = 0),
              (s || (s = r("QuickPerformanceLogger"))) &&
                o("ZenonLoggingUtils").shouldAllowLogging() &&
                (s || (s = r("QuickPerformanceLogger"))).markerStart(
                  t,
                  this.$10(n),
                ));
          }),
          (n.endQPL = function (t, n) {
            (n === void 0 && (n = 0),
              (s || (s = r("QuickPerformanceLogger"))) &&
                r("QuickLogActionType") &&
                o("ZenonLoggingUtils").shouldAllowLogging() &&
                (s || (s = r("QuickPerformanceLogger"))).markerEnd(
                  t,
                  2,
                  this.$10(n),
                ));
          }),
          (n.logConsole = function (t) {
            this.$7(t, !1);
          }),
          (n.logMQTTStateChange = function (t) {
            var e = "mqtt_client_state_" + t;
            (r("ZenonODSLogger").logCounter(e),
              r("isEmployeeTestUserZenonLogging")() &&
                r("ZenonInfraActionsLogger").logCheckpoint({
                  auditId: r("ZenonAuditedCheckpointLogId")
                    .RP_ROOMS_INFRA_WWW__PLATFORM,
                  checkpoint:
                    "[ZP] onMQTTStateChanged: " +
                    t +
                    ", document.visibility: " +
                    document.visibilityState +
                    ", document.hasFocus: " +
                    String(document.hasFocus()) +
                    ", navigator.onLine: " +
                    String(navigator.onLine),
                }));
          }),
          (n.logMQTTConnectStats = function (t, n) {
            r("ZenonInfraActionsLogger").logCheckpoint({
              auditId: r("ZenonAuditedCheckpointLogId")
                .RP_ROOMS_INFRA_WWW__PLATFORM,
              checkpoint:
                "[ZP] MQTT Connection time: " +
                String(t) +
                "ms, Retry Count: " +
                String(n),
            });
          }),
          (n.$11 = function (n) {
            ((e || (e = o("ODS"))).bumpEntityKey(
              4083,
              "zenon_state_machine",
              n + "_event_dropped",
            ),
              e.flush());
          }),
          t
        );
      })();
    l.default = c;
  },
  98,
);
