__d(
  "MqttLogger",
  [
    "ChannelClientID",
    "FBLogger",
    "LogHistory",
    "MetaConfig",
    "MqttEnv",
    "MqttGlobalStreamCounter",
    "MqttUnifiedClientConnectFalcoEvent",
    "MqttUnifiedClientDisconnectFalcoEvent",
    "MqttUnifiedClientIncomingPublishFalcoEvent",
    "MqttUnifiedClientOutgoingPublishFalcoEvent",
    "MqttWsClientTypedLoggerLite",
    "NetworkStatus",
    "ODS",
    "Random",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("MetaConfig")._("99"),
      u = "mqtt_client",
      c = 100,
      d = "WEBSOCKET",
      m = typeof window != "undefined" ? window : self,
      p = null,
      _ = {
        CLIENT_ERROR: "mqtt_client_error",
        CONNECT: "mqtt_client_connect",
        DISCONNECT: "mqtt_client_disconnect",
        PUBLISH: "mqtt_client_publish",
        PUBLISH_TIMEOUT: "mqtt_qos1_publish_timeout",
        SOCKET_DISCONNECT: "mqtt_protocol_error",
      },
      f = {
        CONNECT: "connect",
        DISCONNECT: "disconnect",
        INCOMING_PUBLISH: "incoming_publish",
        OUTGOING_PUBLISH: "outgoing_publish",
      },
      g = (function () {
        function t(e) {
          ((this.$1 = o("LogHistory").getInstance(u)),
            (this.$2 = 0),
            (this.$3 = Date.now()),
            (this.$4 = r("ChannelClientID").getID()),
            this.$7(),
            (this.$5 = o("MqttGlobalStreamCounter").getInstance()),
            this.$5.isEnabled() || (this.$5 = null),
            (this.$6 = e));
        }
        t.getInstance = function (n) {
          return (p || (p = new t(n)), p);
        };
        var n = t.prototype;
        return (
          (n.setAppId = function (t) {
            this.$2 === 0 && (this.$2 = t);
          }),
          (n.eventLogConnect = function (t) {
            var e,
              n,
              o = t.ackReceived,
              a = t.attemptNumber,
              i = t.connectionState,
              l = t.connectionStatus,
              s = t.disconnectCount,
              u = t.duration,
              c = t.errorMessage,
              m = t.failTotal,
              p = t.hostname,
              g = t.messageSizeBytes,
              h = t.osConnectivity,
              y = t.sessionID,
              C = t.successTotal,
              b = t.total_duration,
              v = l ? "success" : "failed";
            this.bumpCounter(_.CONNECT + "." + v);
            var S = C / (C + m),
              R = h && this.getBrowserConnectivity(),
              L = {
                acked: o,
                attempt_number: a.toString(),
                client_type: d,
                connection_state: i,
                disconnect_count: s.toString(),
                duration: u.toString(),
                error: c,
                event_type: f.CONNECT,
                extra_data: {
                  connect_success_rate: S.toString(),
                  device_id: this.$4,
                  hostname: p,
                  connectionStatus: l.toString(),
                  exposure: (e = this.$6) != null ? e : "",
                },
                os_connectivity: R,
                payload_size: g == null ? void 0 : g.toString(),
                session_id: y.toString(),
                total_duration: b.toString(),
                ws_count:
                  (n = this.$5) == null
                    ? void 0
                    : n.getGlobalState().totalConnectionStreams.toString(),
              };
            this.$8(function () {
              r("MqttUnifiedClientConnectFalcoEvent").log(function () {
                return L;
              });
            });
          }),
          (n.eventLogPull = function (t) {
            var e = t.duration,
              n = t.errorMessage,
              r = t.hostname,
              a = t.pullEventName,
              i = t.sessionID,
              l = t.status,
              s = {
                connection_status: l,
                device_id: this.$4,
                duration: e,
                error_message: n,
                hostname: r,
                href: m.location.hostname,
                logged_in: o("MqttEnv").Env.isUserLoggedInNow(),
                session_id: i,
              };
            this.$9(a, s);
          }),
          (n.eventLogPullFinish = function (t) {
            var e = t.duration,
              n = t.errorMessage,
              r = t.publishReceived,
              a = t.publishSent,
              i = t.pullEventName,
              l = t.sessionID,
              s = {
                device_id: this.$4,
                duration: e,
                error_message: n,
                href: m.location.hostname,
                logged_in: o("MqttEnv").Env.isUserLoggedInNow(),
                publish_received: r,
                publish_sent: a,
                session_id: l,
              };
            this.$9(i, s);
          }),
          (n.eventLogDisconnect = function (t) {
            var e,
              n,
              o = t.disconnectCount,
              a = t.duration,
              i = t.errorMessage,
              l = t.sessionID;
            this.bumpCounter(_.DISCONNECT);
            var s = {
              client_type: d,
              connection_state: "Disconnected",
              disconnect_count: o.toString(),
              duration: a.toString(),
              error: i,
              event_type: f.DISCONNECT,
              extra_data: {
                device_id: this.$4,
                exposure: (e = this.$6) != null ? e : "",
              },
              os_connectivity: this.getBrowserConnectivity(),
              session_id: l.toString(),
              ws_count:
                (n = this.$5) == null
                  ? void 0
                  : n.getGlobalState().totalConnectionStreams.toString(),
            };
            this.$8(function () {
              r("MqttUnifiedClientDisconnectFalcoEvent").log(function () {
                return s;
              });
            });
          }),
          (n.eventLogOutgoingPublish = function (t) {
            var e = t.attempt,
              n = t.connectionState,
              o = t.disconnectCount,
              a = t.errorMessage,
              i = t.firstAttemptStartTime,
              l = t.payloadSizeBytes,
              s = t.protocol,
              u = t.qos,
              c = t.sessionID,
              m = t.success,
              p = t.thisAttemptStartTime,
              g = t.topic;
            this.bumpCounter(_.PUBLISH + "." + g);
            var h = Date.now(),
              y = {
                acked: u === 1 ? m : null,
                attempt_number: e.toString(),
                client_type: d,
                connection_state: n,
                disconnect_count: o.toString(),
                duration: (h - p).toString(),
                error: a,
                event_type: f.OUTGOING_PUBLISH,
                extra_data: { device_id: this.$4, protocol: s },
                os_connectivity: this.getBrowserConnectivity(),
                payload_size: l.toString(),
                qos: u.toString(),
                session_id: c.toString(),
                topic: g,
                total_duration: i != null ? (h - i).toString() : null,
              };
            this.$8(function () {
              r("MqttUnifiedClientIncomingPublishFalcoEvent").log(function () {
                return y;
              });
            });
          }),
          (n.eventLogIncomingPublish = function (t) {
            var e = t.connectionState,
              n = t.disconnectCount,
              o = t.payloadSizeBytes,
              a = t.qos,
              i = t.sessionID,
              l = t.topic,
              s = {
                client_type: d,
                connection_state: e,
                disconnect_count: n.toString(),
                event_type: f.INCOMING_PUBLISH,
                extra_data: { device_id: this.$4 },
                os_connectivity: this.getBrowserConnectivity(),
                payload_size: o.toString(),
                qos: a.toString(),
                session_id: i.toString(),
                topic: l,
              },
              u = l == "/webrtc" || l == "/rtc_multi";
            this.$10(
              function () {
                r("MqttUnifiedClientOutgoingPublishFalcoEvent").log(
                  function () {
                    return s;
                  },
                );
              },
              50,
              u,
            );
          }),
          (n.logError = function (t, n) {
            o("MqttEnv").Env.scheduleLoggingCallback(function () {
              try {
                r("FBLogger")(u).catching(t).mustfix(n);
              } catch (e) {}
            });
          }),
          (n.logErrorWarn = function (t, n) {
            o("MqttEnv").Env.scheduleLoggingCallback(function () {
              try {
                r("FBLogger")(u).catching(t).warn(n);
              } catch (e) {}
            });
          }),
          (n.logWarn = function (t, n) {
            var e = this;
            o("MqttEnv").Env.scheduleLoggingCallback(function () {
              try {
                e.$1.warn(t, n);
              } catch (e) {}
            });
          }),
          (n.debugTrace = function (t, n) {
            var e = this;
            o("MqttEnv").Env.scheduleLoggingCallback(function () {
              try {
                e.$1.debug(t, n);
              } catch (e) {}
            });
          }),
          (n.bumpCounter = function (n) {
            var t = this;
            o("Random").coinflip(c) &&
              o("MqttEnv").Env.scheduleLoggingCallback(function () {
                (t.$2 !== 0 &&
                  (e || (e = o("ODS"))).bumpEntityKey(
                    2966,
                    "mqtt_ws_client",
                    t.$2 + "." + n,
                    c,
                  ),
                  (e || (e = o("ODS"))).bumpEntityKey(
                    2966,
                    "mqtt_ws_client",
                    n,
                    c,
                  ));
              });
          }),
          (n.$9 = function (t, n, a) {
            var e = this;
            o("MqttEnv").Env.scheduleLoggingCallback(function () {
              ((n.event_type = t), (n.app_id = e.$2), (n.online = e.$11()));
              var o = JSON.stringify(n);
              (e.$1.log(t, o, { weight: a }),
                t !== _.DISCONNECT && r("MqttWsClientTypedLoggerLite").log(n));
            });
          }),
          (n.$10 = function (t, n, r) {
            var e;
            (s && n !== 0 ? (e = r || o("Random").coinflip(n)) : (e = !0),
              e && o("MqttEnv").Env.scheduleCallback(t));
          }),
          (n.$8 = function (t) {
            this.$10(t, 0, !1);
          }),
          (n.$11 = function () {
            return m.navigator && m.navigator.onLine !== void 0
              ? m.navigator.onLine
              : !1;
          }),
          (n.getBrowserConnectivity = function () {
            return r("NetworkStatus").isOnline();
          }),
          (n.$7 = function () {
            var e = this;
            if (m.navigator && m.navigator.onLine !== void 0) {
              var t = function (n) {
                var t = n.online;
                t || e.bumpCounter("browser_disconnect");
              };
              r("NetworkStatus").onChange(t);
            }
          }),
          t
        );
      })();
    l.default = g;
  },
  98,
);
