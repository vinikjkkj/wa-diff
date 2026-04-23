__d(
  "BladeRunnerSocket",
  [
    "BladeRunnerEventHandler",
    "BladeRunnerLogger",
    "BladeRunnerStreamStatus",
    "BladeRunnerTypes",
    "BladeRunnerTypesInternal",
    "CurrentUser",
    "FBMqttChannel",
    "MqttPublishListener",
    "Promise",
    "RequestStreamE2EClientLoggerEvent",
    "RequestStreamE2EClientLoggerMessageType",
    "RequestStreamE2ELogger",
    "RequestStreamTransport",
    "RtiRequestStreamE2eClientFalcoEvent",
    "getErrorSafe",
    "justknobx",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "Connected",
      u = "Disconnected",
      c = "/br_sr",
      d = "/sr_res",
      m = null;
    function p(e) {
      var t, n;
      switch (e.type) {
        case o("BladeRunnerTypes").StreamFrameType.REQUEST:
          return (t = e.request) == null ? void 0 : t.getInstrumentationData();
        case o("BladeRunnerTypes").StreamFrameType.DATA:
          return (n = e.data) == null ? void 0 : n.getInstrumentationData();
      }
      return null;
    }
    function _(e) {
      switch (e.type) {
        case o("BladeRunnerTypes").StreamFrameType.REQUEST:
          return r("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM;
        case o("BladeRunnerTypes").StreamFrameType.DATA:
          return r("RequestStreamE2EClientLoggerMessageType").AMENDMENT;
      }
      return null;
    }
    function f(e) {
      if (e === null) return null;
      switch (e) {
        case o("BladeRunnerStreamStatus").StreamStatus.ACCEPTED:
          return "Accepted";
        case o("BladeRunnerStreamStatus").StreamStatus.REJECTED:
          return "Rejected";
        case o("BladeRunnerStreamStatus").StreamStatus.STARTED:
          return "Started";
        case o("BladeRunnerStreamStatus").StreamStatus.STOPPED:
          return "Stopped";
        case o("BladeRunnerStreamStatus").StreamStatus.CLOSED:
          return "Closed";
      }
      return null;
    }
    function g(e) {
      var t,
        n = {};
      return (
        e == null ||
          (t = e.frames) == null ||
          t.forEach(function (e) {
            if (
              e.type === o("BladeRunnerTypes").StreamFrameType.STATUS_UPDATE
            ) {
              var t,
                r = (t = e.statusUpdate) == null ? void 0 : t.status,
                a = f(r);
              a !== null && (n.flow_status = a);
            }
          }),
        n
      );
    }
    function h(e, t) {
      var n, r;
      switch (e.type) {
        case o("BladeRunnerTypes").StreamFrameType.REQUEST:
          t.data_base64_size =
            (n = e.request) == null ||
            (n = n.payload) == null ||
            (n = n.length) == null
              ? void 0
              : n.toString();
          break;
        case o("BladeRunnerTypes").StreamFrameType.DATA:
          t.data_base64_size =
            (r = e.data) == null || (r = r.rawDataSize()) == null
              ? void 0
              : r.toString();
          break;
      }
      return null;
    }
    function y(e, t, n) {
      var a,
        i = p(e);
      if (i != null) {
        var l = _(e);
        if (l != null) {
          var s = null;
          switch (t) {
            case o("MqttPublishListener").MqttPublishEvent.SENT:
              s = r("RequestStreamE2EClientLoggerEvent").SENT;
              break;
            case o("MqttPublishListener").MqttPublishEvent.ACKED:
              s = r("RequestStreamE2EClientLoggerEvent").PUBACK;
              break;
            case o("MqttPublishListener").MqttPublishEvent.NOT_ACKED:
            case o("MqttPublishListener").MqttPublishEvent.NOT_CONNECTED:
            case o("MqttPublishListener").MqttPublishEvent.PUBLISH_ERROR:
              ((s = r("RequestStreamE2EClientLoggerEvent").FAILURE),
                n.reason == null && (n.reason = t));
              break;
          }
          if (s != null)
            if (
              (h(e, n),
              ((a = e.request) == null ? void 0 : a.e2eLogger) != null &&
                i.clientLoggingDisabled == null)
            ) {
              var u;
              (u = e.request) == null ||
                u.e2eLogger.logE2EEvent(l, s, n, i.auxId);
            } else
              o("RequestStreamE2ELogger").logRequestStreamE2EEventStatic(
                r("RtiRequestStreamE2eClientFalcoEvent"),
                i,
                o("RequestStreamTransport").RequestStreamTransport.WEB_BR_MQTT,
                l,
                s,
                n,
              );
        }
      }
    }
    var C = (function () {
      function t(e) {
        ((this.$1 = []),
          (this.$2 = 0),
          (this.$3 = 0),
          (this.$4 = null),
          (this.$5 = 0),
          (this.$6 = new Map()),
          (this.$7 = e != null ? e : r("FBMqttChannel")),
          (this.$8 = new Map()),
          r("BladeRunnerLogger").setClientSessionId(r("uuidv4")()),
          this.$9());
      }
      t.get = function () {
        return (m == null && (m = new t(r("FBMqttChannel"))), m);
      };
      var a = t.prototype;
      return (
        (a.sendNewStreamRequest = function (n, o) {
          var e = new (r("BladeRunnerEventHandler"))(n, o, this),
            a = n.getRequest();
          if ((this.$6.set(a.streamId, e), !this.$10())) {
            this.$11(e, a.streamId);
            return;
          }
          this.getStreamCount() <= t.maxStreamCount
            ? this.$12(a)
            : (r("BladeRunnerLogger").bumpCounter(
                "socket_request_throttled_max_streams",
              ),
              r("BladeRunnerLogger").warn(
                "Maximum stream count reached, will not send request: " +
                  JSON.stringify(n.getRequest().getHeaders()),
              ),
              this.$11(e, a.streamId));
        }),
        (a.sendRetryStreamRequest = function (t) {
          this.$12(t.getRequest());
        }),
        (a.sendCancel = function (t) {
          r("BladeRunnerLogger").bumpCounter("socket_send_cancel");
          var e = new (o(
            "BladeRunnerTypesInternal",
          ).GatewayStreamStatusUpdate)();
          ((e.streamId = t.streamId),
            (e.status = o("BladeRunnerStreamStatus").StreamStatus.CLOSED),
            this.$13(e, t),
            this.removeStream(t.streamId));
        }),
        (a.sendAmendment = function (t, n, a) {
          r("BladeRunnerLogger").bumpCounter("socket_send_amendment");
          var e = new (o("BladeRunnerTypesInternal").GatewayStreamData)();
          ((e.streamId = t),
            e.setData(n),
            a != null && (e.instrumentationData = a),
            this.$14(e));
        }),
        (a.sendAmendmentWithAck = function (a, i, l) {
          var t = this;
          r("BladeRunnerLogger").bumpCounter("socket_send_amendment");
          var s = this.$15(),
            u = new (o("BladeRunnerTypesInternal").GatewayStreamData)();
          ((u.streamId = a),
            u.setData(i),
            (u.shouldAck = !0),
            (u.dataId = s),
            l != null && (u.instrumentationData = l));
          var c = new (e || (e = n("Promise")))(function (e, n) {
            t.$8.set(s, { resolve: e, reject: n });
          });
          return (this.$14(u), c);
        }),
        (a.$14 = function (t) {
          (this.$1.push(
            o("BladeRunnerTypesInternal").GatewayStreamFrame.newDataFrame(t),
          ),
            this.$16());
        }),
        (a.sendDataAcks = function (t) {
          (r("BladeRunnerLogger").bumpCounter("socket_send_data_ack", t.length),
            this.$17(t));
        }),
        (a.removeStream = function (t) {
          this.$6.delete(t);
        }),
        (a.getStreamCount = function () {
          return this.$6.size;
        }),
        (a.getNextStreamId = function () {
          return (this.$5++, this.$5);
        }),
        (a.onMQTTStateChanged = function (t) {
          (this.$16(),
            !((t != u && t != s) || this.$4 == t) &&
              ((this.$4 = t),
              r("BladeRunnerLogger").info("MQTTStateChanged: " + t),
              t == u
                ? (r("BladeRunnerLogger").bumpCounter(
                    "mqtt_state_disconnected",
                  ),
                  this.$18())
                : t == s &&
                  r("BladeRunnerLogger").bumpCounter("mqtt_state_connected")));
        }),
        (a.$12 = function (t) {
          if (
            (r("BladeRunnerLogger").bumpCounter("socket_send_request"),
            this.$1.push(
              o("BladeRunnerTypesInternal").GatewayStreamFrame.newRequestFrame(
                t,
              ),
            ),
            !this.$16())
          ) {
            var e;
            (e = t.e2eLogger) == null ||
              e.logE2EEvent(
                r("RequestStreamE2EClientLoggerMessageType").REQUEST_STREAM,
                r("RequestStreamE2EClientLoggerEvent").FAILURE,
                { reason: "MQTT Not Connected" },
              );
          }
        }),
        (a.$13 = function (t, n) {
          if (
            (this.$1.push(
              o(
                "BladeRunnerTypesInternal",
              ).GatewayStreamFrame.newStatusUpdateFrame(t),
            ),
            this.$16())
          ) {
            var e;
            (e = n.e2eLogger) == null ||
              e.logE2EEvent(
                r("RequestStreamE2EClientLoggerMessageType").CANCEL,
                r("RequestStreamE2EClientLoggerEvent").SENT,
              );
          }
        }),
        (a.$17 = function (t) {
          for (var e of t)
            this.$1.push(
              o("BladeRunnerTypesInternal").GatewayStreamFrame.newDataAckFrame(
                e,
              ),
            );
          this.$16();
        }),
        (a.$19 = function () {
          return (this.$2++, this.$2);
        }),
        (a.$15 = function () {
          return (this.$3++, this.$3);
        }),
        (a.$16 = function () {
          var e = !1;
          if (this.$7.getConnectionState() === s && this.$1.length > 0)
            try {
              (this.$20(this.$1), (e = !0));
            } catch (e) {
            } finally {
              this.$1 = [];
            }
          return e;
        }),
        (a.$20 = function (t) {
          var e = this,
            n = new (o("BladeRunnerTypesInternal").GatewayStreamBatch)(
              this.$19(),
              t,
            ),
            a = n.write();
          if (a.length > this.$21()) {
            var i = Math.floor(t.length / 2);
            if (i === 0) {
              t.forEach(function (e) {
                return y(
                  e,
                  o("MqttPublishListener").MqttPublishEvent.PUBLISH_ERROR,
                  { reason: "too long" },
                );
              });
              var l = new Error("Publish is too long: " + a.length);
              throw (l.stack, this.$22(n, l, "Publish is too long"), l);
            }
            (this.$20(t.slice(0, i)), this.$20(t.slice(i, t.length)));
          } else
            try {
              r("BladeRunnerLogger").info(
                "send message to " + c + " (" + a.length + " bytes)",
              );
              var s = { qos: 1, skipBuffer: !1 };
              if (n.isInstrumented()) {
                var u = Date.now();
                s.listener = {
                  onEvent: function (n) {
                    var e = (Date.now() - u).toString();
                    t.forEach(function (t) {
                      y(t, n, { latency: e });
                    });
                  },
                };
              }
              (this.$7.publish(c, a, s).catch(function (t) {
                e.$22(n, t, "Failed publishing to MQTT");
              }),
                r("BladeRunnerLogger").bumpCounter("mqtt_publish_success"));
            } catch (e) {
              var d = r("getErrorSafe")(e);
              throw (this.$22(n, d, "Failed publishing to MQTT"), d);
            }
        }),
        (a.$9 = function () {
          var e = this;
          (r("BladeRunnerLogger").info(
            "Starting socket with endpoint " +
              this.$7.getEndpoint() +
              " useragent " +
              navigator.userAgent,
          ),
            this.onMQTTStateChanged(this.$7.getConnectionState()),
            this.$7.subscribeChannelEvents({
              onMQTTStateChanged: function (n) {
                e.onMQTTStateChanged(n);
              },
              onJSError: function (t) {
                var e =
                  t != null && typeof t.isRecoverable == "boolean"
                    ? t.isRecoverable
                    : !1;
                e
                  ? r("BladeRunnerLogger").bumpCounter(
                      "mqtt_channel_recoverable_error",
                    )
                  : (r("BladeRunnerLogger").warn(
                      "JS error in MQTTChannel: " +
                        (typeof t == "object" && t != null
                          ? t.toString()
                          : "unknown error") +
                        ", " +
                        JSON.stringify(t),
                    ),
                    r("BladeRunnerLogger").bumpCounter("mqtt_channel_error"));
              },
            }),
            this.$7.subscribe(c, function (e) {
              var t = new Error(
                "Unexpected response: " + c + " " + e.toString(),
              );
              throw (t.stack, t);
            }),
            this.$7.subscribe(d, function (t) {
              e.$23(t);
            }));
        }),
        (a.$23 = function (t) {
          var e = o("BladeRunnerTypesInternal").GatewayStreamBatch.read(t);
          this.processBatch(e);
        }),
        (a.$22 = function (t, n, a) {
          for (var e of t.getFrames())
            if (e.type === o("BladeRunnerTypes").StreamFrameType.REQUEST) {
              var i = e.getRequest(),
                l = this.$6.get(i.streamId);
              l != null &&
                this.$24(
                  l,
                  i.streamId,
                  o("BladeRunnerStreamStatus").StreamStatus.CLOSED,
                  !0,
                  null,
                );
            } else if (e.type === o("BladeRunnerTypes").StreamFrameType.DATA) {
              var s = e.getData(),
                u = s.dataId;
              if (s.shouldAck != null && s.shouldAck && u != null) {
                var c = new (o(
                  "BladeRunnerTypesInternal",
                ).GatewayStreamDataAck)();
                ((c.streamId = s.streamId),
                  (c.dataId = u),
                  (c.success = !1),
                  (c.code = o(
                    "BladeRunnerTypesInternal",
                  ).GatewayStreamDataAck.ACK_CODE_FAILED_TO_LAND),
                  (c.message = a),
                  this.$25(c));
              }
            }
          (r("BladeRunnerLogger").info(
            "Failed publishing to MQTT: " + n.message,
          ),
            r("BladeRunnerLogger").bumpCounter("mqtt_publish_error"));
        }),
        (a.$25 = function (t) {
          var e = this.$8.get(t.dataId);
          e != null &&
            (this.$8.delete(t.dataId),
            t.success
              ? e.resolve(!0)
              : t.code ===
                  o("BladeRunnerTypesInternal").GatewayStreamDataAck
                    .ACK_CODE_LANDED_BUT_NOT_ACCEPTED
                ? e.resolve(!1)
                : e.reject(t.message));
        }),
        (a.processBatch = function (t) {
          try {
            (o("RequestStreamE2ELogger").logRequestStreamE2EEventStatic(
              r("RtiRequestStreamE2eClientFalcoEvent"),
              t.getInstrumentationData(),
              o("RequestStreamTransport").RequestStreamTransport.WEB_BR_MQTT,
              r("RequestStreamE2EClientLoggerMessageType").RESPONSE,
              r("RequestStreamE2EClientLoggerEvent").RECEIVED,
              g(t),
              t.getInstrumentationDataDfTraceId(),
            ),
              r("BladeRunnerLogger").bumpCounter("socket_process_batch"));
            var e = JSON.stringify(t);
            r("BladeRunnerLogger").info(
              "Received batch (" + e.length + " bytes)",
            );
            var n = null;
            for (var a of t.getFrames()) {
              var i = a.getStreamId();
              if ((n == null && (n = i), i != null && n != i)) {
                var l = new Error(
                  "Received batch with frames for multiple streams",
                );
                throw (l.stack, l);
              }
              a.type == o("BladeRunnerTypes").StreamFrameType.DATA_ACK &&
                this.$25(a.getDataAck());
            }
            if (n != null) {
              var s = this.$6.get(n);
              s != null
                ? s.onProxyResponse(t)
                : r("BladeRunnerLogger").info(
                    "Received batch with frames for unknown stream id: " + n,
                  );
            } else r("BladeRunnerLogger").info("Received batch with no frames");
          } catch (e) {
            var u = r("getErrorSafe")(e);
            throw (
              r("BladeRunnerLogger").exception(
                u,
                "Failed processing batch from MQTT",
              ),
              r("BladeRunnerLogger").bumpCounter("socket_process_batch_error"),
              u
            );
          }
        }),
        (a.$18 = function () {
          this.$6.forEach(function (e, t, n) {
            e.onDisconnect();
          });
        }),
        (a.$11 = function (t, n) {
          this.$24(
            t,
            n,
            o("BladeRunnerStreamStatus").StreamStatus.REJECTED,
            !1,
            0,
          );
        }),
        (a.$24 = function (t, n, r, a, i) {
          var e = new (o(
            "BladeRunnerTypesInternal",
          ).GatewayStreamStatusUpdate)();
          ((e.streamId = n),
            (e.status = r),
            (e.shouldRetry = a),
            (e.retryDelayMs = i));
          var l = new (o("BladeRunnerTypesInternal").GatewayStreamBatch)(null, [
            o(
              "BladeRunnerTypesInternal",
            ).GatewayStreamFrame.newStatusUpdateFrame(e),
          ]);
          t.onProxyResponse(l);
        }),
        (a.$10 = function () {
          return r("CurrentUser").isLoggedIn()
            ? !0
            : (r("BladeRunnerLogger").bumpCounter(
                "request_stream_user_logged_out",
              ),
              !1);
        }),
        (a.$21 = function () {
          var e = 1048576,
            t = 512 * 1024;
          try {
            var n = r("justknobx")._("317");
            t = n * e;
          } catch (e) {}
          return Math.max(t - 1024, 0);
        }),
        t
      );
    })();
    ((C.maxStreamCount = 2e3), (l.default = C));
  },
  98,
);
