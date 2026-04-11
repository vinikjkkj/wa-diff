__d(
  "MqttProtocolClient",
  [
    "ErrorSerializer",
    "MqttEnv",
    "MqttProtocolCodec",
    "MqttProtocolUtils",
    "MqttTypes",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 20,
      s = 6e4,
      u = (function () {
        function t(e) {
          var t = this;
          ((this.$12 = function (e, n, r) {
            (n === void 0 && (n = null),
              t.$9.bumpCounter(
                "protocol.debug.disconnect.internal." + e.errorName,
              ),
              t.$9.bumpCounter("protocol.debug.disconnect.internal"));
            var a = t.$5,
              i = t.$2,
              l = i.onConnectFailure,
              s = i.onConnectionLost;
            (t.setConnected(!1),
              t.$14(),
              a
                ? o("MqttEnv").Env.scheduleCallback(function () {
                    s(e, n);
                  })
                : o("MqttEnv").Env.scheduleCallback(function () {
                    l(
                      t.$11,
                      new (o("MqttTypes").ConnectFailure)(
                        e,
                        r != null ? r : -1,
                      ),
                      n,
                    );
                  }));
          }),
            (this.$13 = function (e) {
              var n = t.$6;
              if (n == null)
                return (
                  t.$9.bumpCounter(
                    "protocol.socket_send.failed.socket_null.<message type>",
                  ),
                  0
                );
              if (n.readyState !== n.OPEN)
                return (
                  t.$9.bumpCounter(
                    "protocol.socket_send.failed.socket_not_open.<message type>",
                  ),
                  0
                );
              var r = e.encode(),
                o = r.byteLength;
              return (n.send(r), o);
            }),
            (this.$3 = e),
            (this.$2 = {
              getKeepAliveIntervalSeconds: function () {
                return 10;
              },
              getKeepAliveTimeoutSeconds: function () {
                return 10;
              },
              ignoreSubProtocol: !1,
              mqttVersion: 3,
              onConnectFailure: function (t, n, r) {},
              onConnection: function () {},
              onConnectionLost: function (t, n) {},
              onConnectSuccess: function (t) {},
              onMessageArrived: function (t, n, r) {},
              onMessageDelivered: function (t) {},
              userName: "",
            }),
            (this.$1 = "mqttwsclient"),
            (this.$4 = 0),
            (this.$5 = !1),
            (this.$9 = o("MqttEnv").Env.getLoggerInstance()),
            (this.$11 = 0));
        }
        var n = t.prototype;
        return (
          (n.connect = function (n) {
            var t = this;
            if (this.$5)
              throw r("err")("Invalid state: connect - already connected");
            ((this.$2 = n),
              this.setConnected(!1),
              this.$7 != null &&
                (o("MqttEnv").Env.clearTimeout(this.$7), (this.$7 = null)),
              (this.$7 = o("MqttEnv").Env.setTimeout(function () {
                (t.$9.bumpCounter("protocol.error.connect.timeout"),
                  t.$12(o("MqttTypes").MqttErrors.CONNECT_TIMEOUT));
              }, e * 1e3)),
              (this.$6 = o("MqttEnv").Env.createSocket(this.$3)),
              (this.$6.binaryType = "arraybuffer"),
              (this.$6.onopen = function () {
                (t.setConnected(!0),
                  t.$9.debugTrace(
                    "Socket-Open",
                    "MQTTProtocolClient Socket Open",
                  ),
                  (t.$11 = t.$13(
                    new (o("MqttProtocolCodec").WireMessage.Connect)(t.$1, n),
                  )),
                  n.onConnection());
              }),
              (this.$6.onmessage = function (e) {
                var n = e.data;
                if (!(n instanceof ArrayBuffer)) {
                  (t.$9.bumpCounter("protocol.error.onmessage.type"),
                    t.$12(o("MqttTypes").MqttErrors.INVALID_DATA_TYPE));
                  return;
                }
                try {
                  var a = new Uint8Array(n);
                  t.$10 != null &&
                    ((a = o("MqttProtocolUtils").concatBuffers(t.$10, a)),
                    t.$9.bumpCounter("protocol.debug.usingMessagesBuffer"),
                    delete t.$10,
                    (t.$10 = null));
                  var i = o("MqttProtocolCodec").decodeByteMessages(a),
                    l = i.messages;
                  t.$10 = i.remaining;
                  for (var s = 0; s < l.length; s++) t.handleMessage(l[s]);
                } catch (e) {
                  var u = r("getErrorSafe")(e);
                  ((t.$10 = null),
                    t.$9.logError(
                      u,
                      o("MqttTypes").MqttErrors.SOCKET_MESSAGE.errorMessage,
                    ),
                    t.$9.bumpCounter("protocol.error.onmessage.parse"),
                    t.$12(o("MqttTypes").MqttErrors.SOCKET_MESSAGE, u.message));
                }
              }),
              (this.$6.onerror = function (e) {
                (t.$9.bumpCounter("protocol.error.socket"),
                  t.$9.debugTrace(
                    "Socket-Error",
                    "MQTTProtocolClient Socket Error",
                  ));
                var n =
                  typeof e == "object" &&
                  e != null &&
                  "error" in e &&
                  !("message" in e)
                    ? e.error
                    : e;
                t.$12(
                  o("MqttTypes").MqttErrors.SOCKET_ERROR,
                  r("ErrorSerializer").toReadableMessage(r("getErrorSafe")(n)),
                );
              }),
              (this.$6.onclose = function (e) {
                (t.$9.bumpCounter("protocol.socket.close"),
                  e.wasClean ||
                    t.$9.debugTrace(
                      "Socket-Unclean-Close",
                      "MQTTProtocolClient error code: " +
                        e.code +
                        " reason: " +
                        e.reason,
                    ),
                  t.$12(
                    o("MqttTypes").MqttErrors.SOCKET_CLOSE,
                    e.code + " : " + e.reason,
                  ));
              }),
              this.$8 != null && this.$8.cancel(),
              (this.$8 = new (o("MqttProtocolUtils").Pinger)(
                n.getKeepAliveIntervalSeconds,
                n.getKeepAliveTimeoutSeconds,
                this.$13.bind(
                  this,
                  new (o("MqttProtocolCodec").WireMessage.Ping)("PINGREQ"),
                ),
                function (e, n) {
                  return t.$12(o("MqttTypes").MqttErrors.PING_TIMEOUT, e, n);
                },
              )));
          }),
          (n.$14 = function () {
            var e = this;
            (this.setConnected(!1),
              this.$8 != null && this.$8.cancel(),
              this.$7 != null &&
                (o("MqttEnv").Env.clearTimeout(this.$7), (this.$7 = null)),
              this.$6 != null &&
                ((this.$6.onopen = function (t) {
                  e.$9.debugTrace(
                    "Socket Open After Teardown",
                    "Socket opening after teardown",
                  );
                }),
                (this.$6.onmessage = function (e) {}),
                (this.$6.onerror = function (e) {}),
                (this.$6.onclose = function (t) {
                  e.$9.debugTrace(
                    "Socket Close After Teardown",
                    "code: " + t.code + ", reason: " + t.reason,
                  );
                }),
                this.$6.close(),
                (this.$6 = null)),
              (this.$2.onConnectSuccess = function (e) {}),
              (this.$2.onConnectFailure = function (e, t) {}),
              (this.$2.onConnection = function () {}),
              (this.$2.onConnectionLost = function (e) {}),
              (this.$2.onMessageArrived = function (e, t, n) {}),
              (this.$2.onMessageDelivered = function (e) {}));
          }),
          (n.disconnect = function (t) {
            if (
              this.$6 == null ||
              this.$6.readyState !== this.$6.OPEN ||
              !this.$5
            ) {
              this.$14();
              return;
            }
            (this.$13(new (o("MqttProtocolCodec").WireMessage.Disconnect)()),
              this.$9.bumpCounter("protocol.debug.disconnect"),
              this.$12(t));
          }),
          (n.isConnected = function () {
            return this.$5;
          }),
          (n.setConnected = function (t) {
            this.$5 = t;
          }),
          (n.subscribe = function (t) {
            if (!this.$5)
              throw (
                this.$9.bumpCounter("protocol.error.subscribe.notconnected"),
                r("err")("Invalid state: subscribe - not connected")
              );
            this.$9.bumpCounter("protocol.subscribe." + t);
            var e = new (o("MqttProtocolCodec").WireMessage.Subscription)(
              "SUBSCRIBE",
              t,
              0,
              this.$15(),
            );
            this.$13(e);
          }),
          (n.unsubscribe = function (t) {
            if (!this.$5)
              throw (
                this.$9.bumpCounter("protocol.error.unsubscribe.notconnected"),
                r("err")("Invalid state: unsubscribe - not connected")
              );
            this.$9.bumpCounter("protocol.unsubscribe." + t);
            var e = new (o("MqttProtocolCodec").WireMessage.Subscription)(
              "UNSUBSCRIBE",
              t,
              0,
              this.$15(),
            );
            this.$13(e);
          }),
          (n.publish = function (t, n, r) {
            return this.$16(
              t,
              o("MqttProtocolCodec").createMessageWithString(n),
              r,
            );
          }),
          (n.publishBinary = function (t, n, r) {
            return this.$16(
              t,
              o("MqttProtocolCodec").createMessageWithBytes(n),
              r,
            );
          }),
          (n.$16 = function (t, n, r) {
            (this.$5 ||
              this.$9.bumpCounter("protocol.error.publish.notconnected"),
              this.$9.bumpCounter("protocol.publish." + t));
            var e = this.$15(),
              a = new (o("MqttProtocolCodec").WireMessage.Publish)(t, n, r, e);
            return (this.$13(a), e);
          }),
          (n.$15 = function () {
            return (++this.$4 === s && (this.$4 = 1), this.$4);
          }),
          (n.handleMessage = function (t) {
            var e = this;
            switch (t.messageType) {
              case o("MqttProtocolCodec").MESSAGE_TYPE.CONNACK:
                if (
                  (this.$7 != null &&
                    (o("MqttEnv").Env.clearTimeout(this.$7), (this.$7 = null)),
                  t instanceof o("MqttProtocolCodec").WireMessage.ConnAck)
                ) {
                  var n = t;
                  if (n.returnCode !== 0) {
                    (this.$9.bumpCounter(
                      "protocol.error.connack.invalidreturncode",
                    ),
                      this.setConnected(!1),
                      this.$12(
                        o("MqttTypes").MqttErrors.CONNACK_FAILURE,
                        "connack code=" + n.returnCode,
                        n.returnCode,
                      ));
                    return;
                  }
                  (o("MqttEnv").Env.scheduleCallback(function () {
                    e.$2.onConnectSuccess(e.$11);
                  }),
                    this.$8 != null && this.$8.reset());
                }
                break;
              case o("MqttProtocolCodec").MESSAGE_TYPE.PUBLISH:
                if (t instanceof o("MqttProtocolCodec").WireMessage.Publish) {
                  var a = t;
                  o("MqttEnv").Env.scheduleCallback(function () {
                    e.$2.onMessageArrived(a.topic, a.payloadMessage, a.qos);
                  });
                  var i = a.messageIdentifier;
                  if (
                    (this.$9.bumpCounter("protocol.publish.received"),
                    a.qos === 1 && i != null)
                  ) {
                    var l = new (o(
                      "MqttProtocolCodec",
                    ).WireMessage.PubAckUnsubAck)("PUBACK", i);
                    this.$13(l);
                  }
                }
                break;
              case o("MqttProtocolCodec").MESSAGE_TYPE.PUBACK:
                if (
                  t instanceof o("MqttProtocolCodec").WireMessage.PubAckUnsubAck
                ) {
                  var s = t,
                    u = s.messageIdentifier;
                  (this.$9.bumpCounter("protocol.puback.received"),
                    o("MqttEnv").Env.scheduleCallback(function () {
                      e.$2.onMessageDelivered(u);
                    }));
                }
                break;
              case o("MqttProtocolCodec").MESSAGE_TYPE.PINGRESP:
                this.$8 != null && this.$8.reset();
                break;
              case o("MqttProtocolCodec").MESSAGE_TYPE.DISCONNECT:
                this.$12(o("MqttTypes").MqttErrors.SERVER_DISCONNECT);
                break;
              case o("MqttProtocolCodec").MESSAGE_TYPE.SUBACK:
                this.$9.bumpCounter("protocol.suback.received");
                break;
              case o("MqttProtocolCodec").MESSAGE_TYPE.UNSUBACK:
                this.$9.bumpCounter("protocol.unsuback.received");
                break;
              default:
                (this.$9.logError(
                  r("err")(
                    "MqttProtocolClient: Received unhandled message type: " +
                      t.messageType,
                  ),
                  "Received unhandled message type",
                ),
                  this.$9.bumpCounter(
                    "protocol.error.handlemessage.unsupportedtype",
                  ));
                break;
            }
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
