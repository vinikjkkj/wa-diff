__d(
  "MqttConnection",
  [
    "MqttConnectionHookCollection",
    "MqttEnv",
    "MqttProtocolClient",
    "MqttPublishListener",
    "MqttTypes",
    "MqttUserName",
    "MqttUtils",
    "Promise",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 15,
      u = 15,
      c = 1,
      d = 1,
      m = 64,
      p = "publish",
      _ = "subscribe",
      f = "unsubscribe",
      g = function (t) {},
      h = 18e4,
      y = 5 * 1e3,
      C = 15,
      b = 21,
      v = (function () {
        function t() {
          var e = this;
          ((this.$38 = function () {
            return e.$20;
          }),
            (this.$39 = function () {
              return e.$21;
            }),
            (this.$8 = !1),
            (this.$10 = o("MqttEnv").Env.getLoggerInstance()),
            (this.$11 = "Disconnected"),
            (this.$17 = new Set()),
            (this.$24 = new Map()),
            (this.$12 = 0),
            (this.$13 = 0),
            (this.$14 = 0),
            (this.$15 = 0),
            (this.$16 = 0),
            (this.$8 = !1),
            (this.$5 = ""),
            (this.$6 = new (r("MqttUserName"))("", 0, 1, "", 0, !0)),
            (this.$9 = 0),
            (this.$18 = 0),
            (this.$19 = !1),
            (this.$7 = null));
          var t = function () {};
          ((this.$1 = t),
            (this.$2 = t),
            (this.$3 = t),
            (this.$25 = !1),
            (this.$26 = !1),
            (this.$27 = new (r("MqttConnectionHookCollection"))()),
            (this.$4 = function () {
              return [];
            }),
            (this.$20 = s),
            (this.$21 = u),
            (this.$22 = null),
            (this.$23 = 0));
        }
        var a = t.prototype;
        return (
          (a.run = function (t) {
            var e = this,
              n = t.endpoint,
              r = t.extraConnectMessageProvider,
              o = t.mqttUserName,
              a = t.onJSError,
              i = t.onMessageReceived,
              l = t.onStateChange,
              c = t.subscribedTopics;
            if (this.$8) {
              this.$10.debugTrace("run", "Run called while in running state.");
              return;
            }
            ((this.$1 = l),
              (this.$3 = i),
              (this.$5 = n),
              (this.$6 = o),
              (this.$8 = !0),
              (this.$18 = Date.now()),
              (this.$12 = 0),
              (this.$13 = 0),
              (this.$2 = a || g),
              c &&
                c.forEach(function (t) {
                  return e.$17.add(t);
                }),
              (this.$4 = r),
              (this.$20 = s),
              (this.$21 = u),
              this.$28());
          }),
          (a.shutdown = function (t) {
            (this.$29(t),
              this.$30("shutdown"),
              (this.$8 = !1),
              this.$10.debugTrace("shutdown", "Shutdown"));
          }),
          (a.subscribe = function (t) {
            return (
              this.$17.add(t),
              this.ensureConnected(_) && this.$31(t),
              !0
            );
          }),
          (a.publish = function (t, n, r, o) {
            return this.$32(t, n, r, o);
          }),
          (a.publishBinary = function (t, n, r, o) {
            return this.$32(t, n, r, o);
          }),
          (a.$32 = function (a, i, l, s) {
            var t = { reject: function (t) {}, resolve: function () {} };
            s != null && (t.listener = s);
            var u = new (e || (e = n("Promise")))(function (e, n) {
                ((t.resolve = e), (t.reject = n));
              }),
              c = this.ensureConnected(p);
            return (
              c
                ? this.$33(a, i, l, t)
                : (s == null ||
                    s.onEvent(
                      o("MqttPublishListener").MqttPublishEvent.NOT_CONNECTED,
                    ),
                  t.reject(r("err")("Client disconnected"))),
              u
            );
          }),
          (a.unsubscribe = function (t) {
            return (
              this.$17.delete(t),
              this.ensureConnected(f) && this.$34(t),
              !0
            );
          }),
          (a.addHook = function (t) {
            this.$27.addHook(t);
          }),
          (a.removeHook = function (t) {
            this.$27.removeHook(t);
          }),
          (a.isRunning = function () {
            return this.$8;
          }),
          (a.getSessionId = function () {
            return this.$9;
          }),
          (a.hasFatal = function () {
            return this.$25;
          }),
          (a.hasConnectSuccess = function () {
            return this.$26;
          }),
          (a.canPublish = function () {
            return this.ensureConnected("canPublish");
          }),
          (a.ensureConnected = function (t) {
            return !(!this.$8 || this.$7 == null || !this.$7.isConnected());
          }),
          (a.connectionState = function () {
            return this.$11;
          }),
          (a.mqttStateFromConnectionState = function (t) {
            switch (t) {
              case "Connecting":
              case "TransportConnected":
                return "Connecting";
              case "Connected":
                return "Connected";
              case "Disconnected":
                return "Disconnected";
            }
            throw r("err")("Unknown state " + t);
          }),
          (a.testOnlyGetSubscribedTopics = function () {
            return this.$17;
          }),
          (a.getDisconnectCount = function () {
            return this.$23;
          }),
          (a.$29 = function (t) {
            this.$8 &&
              this.$7 != null &&
              (this.$35("Disconnected"),
              this.$7 != null &&
                (this.$7.disconnect(t), this.$27.onConnectionDisconnect()),
              (this.$7 = null));
          }),
          (a.$36 = function (t) {
            if (
              this.$11 === "Connected" &&
              t === "Disconnected" &&
              this.$18 === 0
            ) {
              this.$18 = Date.now();
              return;
            }
            if (t === "Connecting" && this.$18 !== 0 && !this.$19) {
              (this.$10.bumpCounter("protocol.reconnectstarted"),
                (this.$19 = !0));
              return;
            }
            if (t === "Connected" && this.$18 !== 0) {
              var e = Date.now() - this.$18;
              switch (Math.floor(e / 3e4)) {
                case 0:
                  this.$10.bumpCounter("protocol.reconnectedwithin30s");
                  break;
                case 1:
                  this.$10.bumpCounter("protocol.reconnectedwithin60s");
                  break;
                case 2:
                  this.$10.bumpCounter("protocol.reconnectedwithin90s");
                  break;
                case 3:
                  this.$10.bumpCounter("protocol.reconnectedwithin120s");
                  break;
                default:
                  this.$10.bumpCounter("protocol.reconnectedmorethan120s");
                  break;
              }
              ((this.$18 = 0), (this.$19 = !1));
              return;
            }
          }),
          (a.$35 = function (t) {
            t !== this.$11 &&
              (this.$10.debugTrace(
                "MQTTConnection-updateState",
                "State changed to: " + t,
              ),
              this.$36(t),
              (this.$11 = t),
              this.$1(t));
          }),
          (a.$28 = function () {
            var e = this;
            if (this.$8) {
              (this.$11 !== "Disconnected" &&
                this.$10.debugTrace(
                  "Reconnect",
                  "Current State not disconnected: " + this.$11,
                ),
                this.$35("Connecting"));
              var t = Date.now(),
                n = this.$10.getBrowserConnectivity();
              this.$9 = o("MqttUtils").generateSessionId();
              var a = Array.from(this.$17),
                i = o("MqttUtils").endpointWithSessionId(this.$5, this.$9),
                l = o("MqttUtils").endpointWithExtraParameter(
                  i,
                  "cid",
                  this.$6.getDeviceId(),
                );
              try {
                this.$7 = new (r("MqttProtocolClient"))(l);
                var s = this.$37(),
                  u = s.map(function (e) {
                    return e.topic;
                  }),
                  c = this.$6.gen(this.$9, a, s);
                this.$7 != null &&
                  ((this.$13 += 1),
                  this.$7.connect({
                    getKeepAliveIntervalSeconds: this.$38,
                    getKeepAliveTimeoutSeconds: this.$39,
                    ignoreSubProtocol: !0,
                    mqttVersion: 3,
                    onConnectFailure: function (o, i, l) {
                      return e.$40(i, t, e.$18, a, u, n, o, l);
                    },
                    onConnection: function () {
                      return e.$41(s, a);
                    },
                    onConnectionLost: function (n, r) {
                      return e.$42(n, r);
                    },
                    onConnectSuccess: function (o) {
                      return e.$43(t, e.$18, a, u, n, o);
                    },
                    onMessageArrived: function (n, r, o) {
                      return e.$44(n, r, o);
                    },
                    onMessageDelivered: function (n) {
                      return e.$45(n);
                    },
                    userName: c,
                  }),
                  this.$10.bumpCounter("protocol.connectattempt"),
                  this.$6.getIsGuestAuthStringPresent() &&
                    this.$10.bumpCounter("guestAuthentication.connectattempt"),
                  this.$27.onConnectAttempt());
              } catch (e) {
                var d = r("getErrorSafe")(e);
                (this.$10.bumpCounter("js_error_in_init_exception"),
                  this.$35("Disconnected"),
                  this.$46(
                    !1,
                    !1,
                    t,
                    this.$18,
                    a,
                    [],
                    n,
                    null,
                    14,
                    "init error - " + d.message,
                  ),
                  e != null && this.$10.logErrorWarn(d, "ws_js_error"),
                  this.$27.onWSFatal(),
                  this.$47(
                    new (o("MqttTypes").MqttChannelError)(!1, "ws_js_error", d),
                    "client_init",
                  ));
              }
            }
          }),
          (a.$37 = function () {
            var e = this.$4(),
              t = 65536;
            return e.map(function (e) {
              return ((e.messageId = t--), e);
            });
          }),
          (a.$31 = function (t) {
            try {
              if (this.$7 != null)
                return (
                  this.$7.subscribe(t),
                  this.$10.debugTrace("#doSubscribe", "Subscribing to " + t),
                  this.$27.onSubscribe(t),
                  this.$10.bumpCounter("protocol.subscribe"),
                  !0
                );
            } catch (n) {
              var e = r("getErrorSafe")(n);
              (this.$10.logError(e, "Exception subscribing"),
                this.$10.bumpCounter("subscribe_exception." + t),
                this.$10.bumpCounter("protocol.subscribe.error"));
            }
            return !1;
          }),
          (a.$34 = function (t) {
            try {
              if (this.$7 != null)
                return (
                  this.$7.unsubscribe(t),
                  this.$10.debugTrace(
                    "#doUnsubscribe",
                    "Unsubscribing to " + t,
                  ),
                  this.$27.onUnsubscribe(t),
                  this.$10.bumpCounter("protocol.unsubscribe"),
                  !0
                );
            } catch (n) {
              var e = r("getErrorSafe")(n);
              (this.$10.logError(e, "Exception unsubscribing"),
                this.$10.bumpCounter("unsubscribe_exception." + t),
                this.$10.bumpCounter("protocol.unsubscribe.error"));
            }
            return !1;
          }),
          (a.$33 = function (t, n, a, i) {
            if (this.$7 != null)
              try {
                var e, l;
                (typeof n == "string"
                  ? (l = this.$7.publish(t, n, a))
                  : (l = this.$7.publishBinary(t, n, a)),
                  this.$10.bumpCounter("protocol.publish"));
                var s = l != null ? l : "null";
                return (
                  this.$10.debugTrace(
                    "#doPublish",
                    "publish " + t + " with messageId:" + s + " qos:" + a,
                  ),
                  this.$27.onPublish(t),
                  (e = i.listener) == null ||
                    e.onEvent(o("MqttPublishListener").MqttPublishEvent.SENT),
                  l != null
                    ? (this.$10.bumpCounter("publish.ack_expected"),
                      this.$24.set(l, i))
                    : i.resolve(),
                  !0
                );
              } catch (e) {
                var u = r("getErrorSafe")(e);
                return (
                  this.$10.logError(u, "Exception publishing"),
                  this.$10.bumpCounter("publish_exception." + t),
                  i.reject(u),
                  this.$10.bumpCounter("protocol.publish.error"),
                  !1
                );
              }
            else return !1;
          }),
          (a.$48 = function (t) {
            var e = this;
            if ((t === void 0 && (t = null), !!this.$8)) {
              (this.$29(o("MqttTypes").MqttErrors.RECONNECT),
                this.$30("reconnect"),
                this.$49(),
                (this.$9 = -1),
                (this.$16 = 0));
              var n = t;
              (n == null && (n = c * Math.pow(2, this.$12)),
                (n = Math.max(n, d)),
                (n = Math.min(n, m)));
              var r = n * (1e3 + o("MqttEnv").Env.random() * 200);
              (this.$10.debugTrace(
                "#scheduleReconnect",
                "Reconnect in " + r + " ms",
              ),
                (this.$22 = o("MqttEnv").Env.setTimeout(function () {
                  e.$28();
                }, r)),
                (this.$12 += 1));
            }
          }),
          (a.$49 = function () {
            var e = Date.now() - this.$16,
              t = this.$16 !== 0 && e > y,
              n = this.$12 > C;
            ((t || n) && (this.$12 = 0),
              this.$16 !== 0 &&
                e <= y &&
                this.$10.bumpCounter("short_lived_session"),
              n && this.$10.bumpCounter("connection_attempt_limit"));
          }),
          (a.$46 = function (t, n, r, o, a, i, l, s, u, c) {
            t ? this.$14++ : this.$15++;
            var e = Date.now();
            (this.$10.eventLogConnect({
              ackReceived: n,
              attemptNumber: this.$13,
              connectionState: this.mqttStateFromConnectionState(this.$11),
              connectionStatus: t,
              disconnectCount: this.$23,
              duration: e - r,
              errorCode: u,
              errorMessage: c,
              failTotal: this.$15,
              hostname: this.$5,
              messageSizeBytes: s,
              osConnectivity: l,
              publishes: i,
              sessionID: this.$9,
              subscribedTopics: a,
              successTotal: this.$14,
              total_duration: e - o,
            }),
              t && (this.$13 = 0));
          }),
          (a.$40 = function (t, n, r, o, a, i, l, s) {
            var e = t.mqttError,
              u = s != null ? e.errorMessage + " - " + s : e.errorMessage;
            if (
              (this.$10.debugTrace("connect", "Connect failed " + u),
              this.$10.bumpCounter("protocol.onconnectfailure"),
              this.$6.getIsGuestAuthStringPresent() &&
                this.$10.bumpCounter("guestAuthentication.onconnectfailure"),
              this.$27.onConnectFailure(),
              this.$46(!1, t.connAck !== -1, n, r, o, a, i, l, e.errorCode, u),
              t.connAck != null &&
                (this.$10.bumpCounter("protocol.connect_failure." + t.connAck),
                t.connAck === b))
            ) {
              this.$48(h);
              return;
            }
            this.$48();
          }),
          (a.$41 = function (t, n) {
            var e = this;
            (this.$10.bumpCounter("protocol.onconnection"),
              this.$10.debugTrace("Connect", "Socket established"),
              this.$27.onConnected(),
              this.$6.getIsGuestAuthStringPresent() &&
                this.$10.bumpCounter("guestAuthentication.onconnection"),
              n.forEach(function (t) {
                e.$27.onSubscribe(t);
              }),
              t.forEach(function (t) {
                e.$27.onPublish(t.topic);
              }),
              this.$35("TransportConnected"));
          }),
          (a.$43 = function (t, n, r, o, a, i) {
            (this.$10.bumpCounter("protocol.onconnectsuccess"),
              this.$10.debugTrace("connect", "Connect success"),
              this.$6.getIsGuestAuthStringPresent() &&
                this.$10.bumpCounter("guestAuthentication.onconnectsucess"),
              this.$27.onConnectSuccess(),
              (this.$26 = !0),
              this.$35("Connected"),
              this.$46(!0, !0, t, n, r, o, a, i),
              this.$50(r),
              (this.$16 = Date.now()));
          }),
          (a.$42 = function (t, n) {
            if (
              (this.$10.bumpCounter("protocol.onconnectionlost"),
              this.$23++,
              t.errorCode)
            ) {
              var e = n != null ? t.errorMessage + " - " + n : t.errorMessage;
              this.$10.eventLogDisconnect({
                disconnectCount: this.$23,
                duration: Date.now() - this.$16,
                errorCode: t.errorCode,
                errorMessage: e,
                sessionID: this.$9,
              });
            }
            (this.$10.debugTrace("connect", "connection lost"),
              this.$27.onConnectionLost(),
              this.$6.getIsGuestAuthStringPresent() &&
                this.$10.bumpCounter("guestAuthentication.onconnectionlost"),
              this.$48());
          }),
          (a.$44 = function (t, n, o) {
            (this.$10.bumpCounter("protocol.onmessagearrived"),
              this.$6.getIsGuestAuthStringPresent() &&
                this.$10.bumpCounter("guestAuthentication.onmessagearrived"),
              this.$10.debugTrace(
                "onMessageArrived",
                "Message received on " + t,
              ),
              this.$27.onMessage(t));
            try {
              this.$3(t, n, o);
            } catch (n) {
              var e = r("getErrorSafe")(n);
              (this.$10.logError(e, "Listener threw error"),
                this.$10.bumpCounter("listener_error." + t));
            }
          }),
          (a.$45 = function (t) {
            var e;
            this.$10.bumpCounter("protocol.onmessagedelivered");
            var n = t != null ? t : "null";
            if (
              (this.$10.debugTrace(
                "onMessageDelivered",
                "Delivered Message {ID: " + n + "}",
              ),
              t != null)
            ) {
              var r = this.$24.get(t);
              if (r == null) {
                this.$10.bumpCounter("protocol.message_with_unknown_id");
                return;
              }
              (this.$24.delete(t),
                (e = r.listener) == null ||
                  e.onEvent(o("MqttPublishListener").MqttPublishEvent.ACKED),
                r.resolve(),
                this.$10.bumpCounter("publish.ack_received"));
            }
          }),
          (a.$30 = function (t) {
            (this.$10.bumpCounter("protocol.fail_all_unacked_publishes." + t),
              this.$24.forEach(function (e, n, a) {
                var i;
                ((i = e.listener) == null ||
                  i.onEvent(
                    o("MqttPublishListener").MqttPublishEvent.NOT_ACKED,
                  ),
                  e.reject(r("err")(t)));
              }),
              this.$24.clear());
          }),
          (a.$50 = function (t) {
            var e = this,
              n = new Set(t);
            n.forEach(function (t) {
              e.$17.has(t) || e.unsubscribe(t);
            });
            var r = new Set(this.$17);
            r.forEach(function (t) {
              n.has(t) || e.subscribe(t);
            });
          }),
          (a.$47 = function (t, n) {
            try {
              (this.$10.bumpCounter("js_error_in_init"),
                this.$10.bumpCounter(n + ".error"),
                (this.$25 = !0));
              var e = t ? t.message : "error";
              (this.$10.debugTrace("onError", n + ": " + e), this.$2(t));
            } catch (e) {
              var o = r("getErrorSafe")(e);
              (this.$10.bumpCounter("js_error_in_error_logging"),
                this.$10.logError(
                  o,
                  "JS error while trying to log previous error",
                ));
            }
          }),
          (a.setRunning_OnlyForTests = function (t) {
            this.$8 = t;
          }),
          t
        );
      })();
    l.default = v;
  },
  98,
);
