__d(
  "MqttChannel",
  [
    "ChannelClientID",
    "IrisSubscribeChecker",
    "MetaConfig",
    "MqttAnalyticsHook",
    "MqttConnection",
    "MqttEnv",
    "MqttPublishListener",
    "MqttTypes",
    "MqttUserName",
    "MqttUtils",
    "MqttWebSocketUtils",
    "Promise",
    "Run",
    "err",
    "getErrorSafe",
    "isFastRefreshEnabledForCurrentDomain",
    "promiseDone",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 29125,
      u = (function () {
        function t(e) {
          var t = this,
            n = e.endpoint,
            a = e.pollingEndpoint,
            i = e.userFbid,
            l = e.appId,
            s = e.initialSubscribedTopics,
            u = e.capabilities,
            c = e.clientCapabilities,
            d = e.chatVisibility,
            m = d === void 0 ? !0 : d,
            p = e.guestAuthString,
            _ = p === void 0 ? null : p,
            f = e.phpOverride,
            g = f === void 0 ? "" : f,
            h = e.clientType,
            y = h === void 0 ? "websocket" : h,
            C = e.deviceId,
            b = C === void 0 ? r("ChannelClientID").getID() : C,
            v = e.pageId,
            S = v === void 0 ? null : v,
            R = e.assetIds,
            L = R === void 0 ? null : R,
            E = e.appSpecificInfo,
            k = E === void 0 ? null : E;
          if (
            ((this.$11 = o("MqttEnv").Env.getLoggerInstance()),
            this.$11.setAppId(l),
            (this.$12 = new (r("MqttUserName"))(
              i,
              u,
              c,
              b,
              l,
              m,
              _,
              g,
              y,
              S,
              L,
              k,
            )),
            (this.$1 = n),
            (this.$2 = a),
            (this.$5 = "Disconnected"),
            (this.$7 = "LPInactive"),
            (this.$6 = "Disconnected"),
            (this.$3 = []),
            (this.$4 = new Set()),
            (this.$8 = new Map()),
            (this.$9 = new Map()),
            (this.$10 = new (r("MqttConnection"))()),
            (this.$13 = null),
            (this.$16 = new (r("MqttAnalyticsHook"))()),
            (this.$15 = new Map()),
            (this.$14 = []),
            !o("MqttEnv").Env.isUserLoggedInNow() &&
              !r("isFastRefreshEnabledForCurrentDomain")() &&
              (_ == null || _ == ""))
          ) {
            this.$11.bumpCounter("logged_out_init");
            return;
          }
          (this.$10.addHook(this.$16),
            this.$10.addHook(
              new (r("IrisSubscribeChecker"))(function () {
                return t.$4.size > 0;
              }),
            ),
            this.$17(s),
            this.$18());
        }
        var a = t.prototype;
        return (
          (a.$17 = function (t) {
            var e = this;
            if (this.$10.isRunning()) {
              this.$19("run", "Connection started calling run again");
              return;
            }
            if (
              o("MqttEnv").Env.genGk(
                o("MqttEnv").MqttGkNames.mqtt_ws_polling_enabled,
              )
            ) {
              if (r("MetaConfig")._("15")) {
                this.$19(
                  "MqttChannel",
                  "Websocket disabled, will do long polling only",
                );
                return;
              } else if (!o("MqttWebSocketUtils").hasWSSupport()) {
                (this.$19(
                  "MqttChannel",
                  "Websocket Unavailable, will do long polling only",
                ),
                  this.$11.bumpCounter("ws_unavailable_polling"));
                return;
              }
            }
            (this.$10.run({
              endpoint: this.$1,
              extraConnectMessageProvider: function () {
                return e.$20();
              },
              mqttUserName: this.$12,
              onJSError: function (n) {
                e.$21(n);
              },
              onMessageReceived: function (n, r, o) {
                e.$22(n, r, o);
              },
              onStateChange: function (n) {
                e.$23(n);
              },
              subscribedTopics: t,
            }),
              this.$24());
          }),
          (a.$24 = function () {
            var e = this,
              t = o("Run").onUnload(function () {
                e.$25(o("MqttTypes").MqttErrors.BROWSER_CLOSE);
              });
          }),
          (a.shutdown = function () {
            this.$25(o("MqttTypes").MqttErrors.APP_DISCONNECT);
          }),
          (a.$25 = function (t) {
            (this.$10 && this.$10.shutdown(t),
              this.$13 && this.$13.shutdown(),
              this.$16.onTabClose());
          }),
          (a.publish = function (t, n, r) {
            return this.$26(t, n, r != null ? r : { qos: 1, skipBuffer: !1 });
          }),
          (a.publishBinary = function (t, n, r) {
            return (
              r === void 0 && (r = { qos: 1, skipBuffer: !1 }),
              this.$26(t, n, r)
            );
          }),
          (a.$26 = function (t, n, r) {
            r === void 0 && (r = { qos: 1, skipBuffer: !1 });
            var e;
            return (
              r.qos === 0
                ? (e = this.$27(t, n, r.listener))
                : (e = this.$28(t, n, r)),
              o("MqttUtils").promiseDone(
                e,
                function () {},
                function (e) {
                  var t;
                  (t = r.listener) == null ||
                    t.onEvent(
                      o("MqttPublishListener").MqttPublishEvent.PUBLISH_ERROR,
                    );
                },
              ),
              e
            );
          }),
          (a.$27 = function (t, n, r) {
            return this.$29(t, n, 0, r, 1, null);
          }),
          (a.$28 = function (r, a, i) {
            var t = { reject: function (t) {}, resolve: function () {} },
              l = new (e || (e = n("Promise")))(function (e, n) {
                ((t.resolve = e), (t.reject = n));
              }),
              s = o("MqttEnv").Env.random(),
              u = {
                ack: t,
                attempt: 0,
                options: i,
                payload: a,
                publishToken: s,
                startTime: Date.now(),
                timeoutId: null,
                topic: r,
              };
            if (i.skipBuffer)
              if (this.$10.connectionState() === "Connecting") {
                var c;
                (this.$14.push(u),
                  (c = i.listener) == null ||
                    c.onEvent(
                      o("MqttPublishListener").MqttPublishEvent.QUEUED,
                    ));
              } else this.$30(u);
            else {
              var d;
              ((u.timeoutId = this.$31(s)),
                this.$15.set(s, u),
                (d = i.listener) == null ||
                  d.onEvent(o("MqttPublishListener").MqttPublishEvent.QUEUED),
                this.$32(u));
            }
            return l;
          }),
          (a.$30 = function (t) {
            ((t.attempt += 1),
              o("MqttUtils").promiseDone(
                this.$29(
                  t.topic,
                  t.payload,
                  t.options.qos,
                  t.options.listener,
                  t.attempt,
                  t.startTime,
                ),
                function () {
                  t.ack.resolve();
                },
                function (e) {
                  t.ack.reject(e);
                },
              ));
          }),
          (a.$32 = function (t) {
            var e = this;
            ((t.attempt += 1),
              o("MqttUtils").promiseDone(
                this.$29(
                  t.topic,
                  t.payload,
                  t.options.qos,
                  t.options.listener,
                  t.attempt,
                  t.startTime,
                ),
                function () {
                  return e.$33(t);
                },
                function (e) {},
              ));
          }),
          (a.$29 = function (t, n, a, i, l, s) {
            var e = this,
              u,
              c,
              d = this.getConnectionState(),
              m = Date.now();
            return (
              !this.$10.canPublish() && this.$13 && this.$13.canPublish()
                ? (typeof n == "string"
                    ? (u = this.$13.publish(t, n, a))
                    : (u = this.$13.publishBinary(t, n, a)),
                  (c = "lp"),
                  i != null &&
                    (u = u.then(function () {
                      return i.onEvent(
                        o("MqttPublishListener").MqttPublishEvent.SENT,
                      );
                    })),
                  this.$11.bumpCounter("try_publish_lp"))
                : (typeof n == "string"
                    ? (u = this.$10.publish(t, n, a, i))
                    : (u = this.$10.publishBinary(t, n, a, i)),
                  (c = "ws"),
                  this.$11.bumpCounter("try_publish_ws")),
              r("promiseDone")(
                u,
                function () {
                  e.$11.eventLogOutgoingPublish({
                    attempt: l,
                    connectionState: d,
                    disconnectCount: e.$10.getDisconnectCount(),
                    errorMessage: null,
                    firstAttemptStartTime: s,
                    payloadSizeBytes: n.length * 2,
                    protocol: c,
                    qos: a,
                    sessionID: e.$10.getSessionId(),
                    success: !0,
                    thisAttemptStartTime: m,
                    topic: t,
                  });
                },
                function (r) {
                  e.$11.eventLogOutgoingPublish({
                    attempt: l,
                    connectionState: d,
                    disconnectCount: e.$10.getDisconnectCount(),
                    errorMessage: r != null ? r.toString() : null,
                    firstAttemptStartTime: s,
                    payloadSizeBytes: n.length * 2,
                    protocol: c,
                    qos: a,
                    sessionID: e.$10.getSessionId(),
                    success: !1,
                    thisAttemptStartTime: m,
                    topic: t,
                  });
                },
              ),
              u
            );
          }),
          (a.subscribe = function (t, n) {
            var e = this;
            this.$10.subscribe(t);
            var r = this.$8.get(t);
            return (
              r ? r.push(n) : ((r = [n]), this.$8.set(t, r)),
              function () {
                var r = e.$8.get(t) || [],
                  o = r.filter(function (e) {
                    return e !== n;
                  });
                (e.$8.set(t, o), o.length === 0 && e.unsubscribeAll(t));
              }
            );
          }),
          (a.subscribeBinary = function (t, n) {
            var e = this;
            this.$10.subscribe(t);
            var r = this.$9.get(t);
            return (
              r ? r.push(n) : ((r = [n]), this.$9.set(t, r)),
              function () {
                var r = e.$9.get(t) || [],
                  o = r.filter(function (e) {
                    return e !== n;
                  });
                (e.$9.set(t, o), o.length === 0 && e.unsubscribeAll(t));
              }
            );
          }),
          (a.subscribeChannelEvents = function (t) {
            var e = this;
            return (
              this.$3.push(t),
              function () {
                e.unsubscribeChannelEvents(t);
              }
            );
          }),
          (a.unsubscribeChannelEvents = function (t) {
            var e = this.$3.indexOf(t);
            e > -1 && this.$3.splice(e, 1);
          }),
          (a.registerExtraConnectPayloadProvider = function (t) {
            var e = this;
            if (
              (this.$19(
                "MqttChannel",
                "registerExtraConnectPayloadProvider called",
              ),
              this.$4.add(t),
              this.$10.isRunning())
            ) {
              var n = t.getPublishMessages();
              n.forEach(function (t) {
                typeof t.payload == "string"
                  ? e.publish(t.topic, t.payload, {
                      qos: t.qos,
                      skipBuffer: !0,
                    })
                  : e.publishBinary(t.topic, t.payload, {
                      qos: t.qos,
                      skipBuffer: !0,
                    });
              });
            }
          }),
          (a.unregisterExtraConnectPayloadProvider = function (t) {
            this.$4.delete(t);
          }),
          (a.unsubscribeAll = function (t) {
            (this.$10.unsubscribe(t), this.$8.delete(t), this.$9.delete(t));
          }),
          (a.getConnectionState = function () {
            return this.$5;
          }),
          (a.getLongPollingStatus = function () {
            return this.$7;
          }),
          (a.getEndpoint = function () {
            return this.$1;
          }),
          (a.addHook = function (t) {
            this.$10.addHook(t);
          }),
          (a.removeHook = function (t) {
            this.$10.removeHook(t);
          }),
          (a.testOnlyMessageReceived = function (t, n) {
            this.$22(t, n, -1);
          }),
          (a.$34 = function (t) {
            var e = this.$15.get(t);
            (e != null &&
              e.timeoutId != null &&
              o("MqttEnv").Env.clearTimeout(e.timeoutId),
              this.$15.delete(t));
          }),
          (a.$31 = function (t) {
            var e = this;
            return o("MqttEnv").Env.setTimeout(
              function (t) {
                var n = e.$15.get(t);
                if (n) {
                  var o = n.topic;
                  (e.$11.bumpCounter("publish_timeout." + o),
                    e.$11.debugTrace(
                      "publish_timeout",
                      "Timeout publishing topic: " + o + " publishToken: " + t,
                    ),
                    e.$34(t),
                    n.ack.reject(r("err")("Publish Timed Out")));
                }
              },
              s,
              t,
            );
          }),
          (a.$33 = function (t) {
            var e = t.publishToken,
              n = this.$15.get(e);
            n &&
              (this.$34(e),
              t.ack.resolve(),
              this.$11.debugTrace(
                "publish_success",
                "Topic: " + t.topic + " publishToken: " + t.publishToken,
              ),
              this.$11.bumpCounter("publish_success." + t.topic));
          }),
          (a.$22 = function (t, n, o) {
            var e = this.$8.get(t);
            if (
              (this.$11.eventLogIncomingPublish({
                connectionState: this.getConnectionState(),
                disconnectCount: this.$10.getDisconnectCount(),
                payloadSizeBytes: n.payloadString.length * 2,
                qos: o,
                sessionID: this.$10.getSessionId(),
                topic: t,
              }),
              !e)
            )
              this.$11.debugTrace(
                "_onMessageReceived",
                t + " being dropped, no listeners",
              );
            else
              for (var a of e)
                try {
                  a(n.payloadString);
                } catch (e) {
                  (this.$11.logError(
                    r("getErrorSafe")(e),
                    "Listener exception",
                  ),
                    this.$11.bumpCounter("listener_error"));
                }
            var i = this.$9.get(t);
            if (
              (this.$11.eventLogIncomingPublish({
                connectionState: this.getConnectionState(),
                disconnectCount: this.$10.getDisconnectCount(),
                payloadSizeBytes: n.payloadBytes.length,
                qos: o,
                sessionID: this.$10.getSessionId(),
                topic: t,
              }),
              !i)
            )
              this.$11.debugTrace(
                "_onMessageReceived",
                t + " being dropped, no binary listeners",
              );
            else
              for (var l of i)
                try {
                  l(n.payloadBytes);
                } catch (e) {
                  (this.$11.logError(
                    r("getErrorSafe")(e),
                    "Binary Listener exception",
                  ),
                    this.$11.bumpCounter("listener_error"));
                }
          }),
          (a.$21 = function (t) {
            if (
              o("MqttEnv").Env.genGk(
                o("MqttEnv").MqttGkNames.mqtt_ws_polling_enabled,
              )
            ) {
              t.isRecoverable
                ? this.$11.bumpCounter("recoverable_error_skipped")
                : this.$11.bumpCounter("unrecoverable_error_skipped");
              return;
            }
            (t.isRecoverable
              ? this.$11.bumpCounter("recoverable_error_not_skipped")
              : this.$11.bumpCounter("unrecoverable_error_not_skipped"),
              this.$35(t));
          }),
          (a.$36 = function (t) {
            this.$35(t);
          }),
          (a.$35 = function (t) {
            for (var e of this.$3) e.onJSError && e.onJSError(t);
          }),
          (a.$37 = function () {
            var e = this;
            (this.$14.forEach(function (t) {
              (e.$30(t),
                e.$11.bumpCounter("publish_from_temp_buffer." + t.topic));
            }),
              (this.$14 = []),
              this.$15.forEach(function (t, n, r) {
                (e.$32(t), e.$11.bumpCounter("publish_from_buffer." + t.topic));
              }));
          }),
          (a.$23 = function (t) {
            (t === "Connecting"
              ? (this.$14.forEach(function (e) {
                  e.ack.reject(r("err")("Client Reconnecting - " + e.topic));
                }),
                (this.$14 = []))
              : t === "TransportConnected" && this.$37(),
              this.$19("_changeState", "Connection state = " + t),
              this.$38(t, this.$7));
          }),
          (a.$39 = function (t, n) {
            (this.$13 && this.$13.canPublish() && this.$37(),
              this.$19(
                "_changeLPStatus",
                "LP status = " + t + ", LP Request status = " + n,
              ),
              this.$38(this.$6, t));
          }),
          (a.$38 = function (t, n) {
            var e = this.$10.mqttStateFromConnectionState(t);
            (this.$13 && this.$13.canPublish() && (e = "Connected"),
              (this.$6 = t),
              (e !== this.$5 || n != this.$7) &&
                ((this.$5 = e), (this.$7 = n), this.$40(e)));
          }),
          (a.$40 = function (t) {
            for (var e of this.$3) e.onMQTTStateChanged(t);
          }),
          (a.$20 = function () {
            var e = this,
              t = [];
            return (
              this.$4.forEach(function (n) {
                try {
                  var o = n.getPublishMessages();
                  t.push.apply(t, o);
                } catch (t) {
                  (e.$11.logError(
                    r("getErrorSafe")(t),
                    "ConnectPayload provider exception",
                  ),
                    e.$11.bumpCounter("connectPayloadProvider_error"));
                }
              }),
              t
            );
          }),
          (a.$18 = function () {
            var e = this;
            o("MqttEnv").Env.genGk(
              o("MqttEnv").MqttGkNames.mqtt_ws_polling_enabled,
            ) &&
              !r("MetaConfig")._("262") &&
              this.$2 &&
              this.$2 != "" &&
              r("requireDeferred")("MqttLongPollingRunner")
                .__setRef("MqttChannel")
                .onReady(function (t) {
                  var n = new t(
                    e.$2,
                    e.$12,
                    e.$10.hasFatal(),
                    e.$10.hasConnectSuccess(),
                    function (t, n, r) {
                      return e.$22(t, n, r);
                    },
                    function () {
                      var t = Array.from(e.$8.keys()),
                        n = Array.from(e.$9.keys());
                      return Array.from(new Set(t.concat(n)));
                    },
                    function () {
                      return e.$20();
                    },
                    function (t) {
                      e.$36(t);
                    },
                    function (t, n) {
                      e.$39(t, n);
                    },
                  );
                  (n.start(),
                    e.$10.addHook(n),
                    n.addHook(e.$16),
                    (e.$13 = n),
                    e.$11.debugTrace(
                      "MqttChannel",
                      "longPollingRunner loaded",
                    ));
                });
          }),
          (a.$19 = function (t, n) {
            this.$11.debugTrace(t, "Mqtt channel: " + n);
          }),
          (a.setForegroundState = function (t) {
            this.$12 && this.$12.setForegroundState(t);
          }),
          (a.setChatVisibility = function (t) {
            this.$12 && this.$12.setChatVisibility(t);
          }),
          (a.getEndpointCapabilities = function () {
            return this.$12.getEndpointCapabilities();
          }),
          (a.setEndpointCapabilities = function (t) {
            this.$12.setEndpointCapabilities(t);
          }),
          (a.getConnection_OnlyForTests = function () {
            return this.$10;
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
