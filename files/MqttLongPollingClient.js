__d(
  "MqttLongPollingClient",
  [
    "MqttEnv",
    "MqttProtocolCodec",
    "MqttUserName",
    "Promise",
    "XHRRequest",
    "getCrossOriginTransport",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 12e4,
      u = "simple_pull",
      c = "longpolling_",
      d = (function () {
        function t() {
          ((this.$3 = ""),
            (this.$4 = 0),
            (this.$2 = o("MqttEnv").Env.getLoggerInstance()),
            (this.$1 = "Ready"),
            (this.$5 = ""),
            (this.$6 = new (r("MqttUserName"))("", 0, 1, "", 0, !0)),
            (this.$7 = function () {}),
            (this.$8 = function (e) {}),
            (this.$9 = function () {}),
            (this.$10 = function (e) {}),
            (this.$11 = 0),
            (this.$12 = null),
            (this.$13 = new Set([
              "/t_ms",
              "/messenger_sync_get_diffs",
              "/messenger_sync_create_queue",
              "/webrtc",
              "/rtc_multi",
            ])));
        }
        var a = t.prototype;
        return (
          (a.run = function (t, n, r, o, a, i, l, s) {
            ((this.$3 = t),
              (this.$4 = n),
              (this.$5 = r),
              (this.$6 = o),
              (this.$7 = a),
              (this.$8 = i),
              (this.$9 = l),
              (this.$10 = s),
              this.$14(this.$5));
          }),
          (a.isTopicSupported = function (t) {
            return this.$13.has(t);
          }),
          (a.publish = function (r, o) {
            return (e || (e = n("Promise"))).reject("not supported");
          }),
          (a.publishBinary = function (r, o) {
            return (e || (e = n("Promise"))).reject("not supported");
          }),
          (a.abort = function () {
            this.$12 != null && this.$12.abort("Disconnected");
          }),
          (a.$15 = function (t, n) {
            this.$1 !== t &&
              ((this.$1 = t),
              t === "Error" && n != null && this.$10(n),
              this.$2.debugTrace("LongPollingClient", "_changeStatus : " + t));
          }),
          (a.$16 = function (t) {
            if (this.$1 === "RequestSend") {
              if (!t) {
                this.$17("EmptyResponse", null);
                return;
              }
              (this.$7(),
                this.$2.bumpCounter(c + "success"),
                this.$18(!0, null),
                this.$15("ResponseReceived"));
              var e = o("MqttProtocolCodec").decodeByteMessages(
                  new Uint8Array(t),
                ),
                n = e.messages
                  .filter(function (e) {
                    return (
                      e instanceof o("MqttProtocolCodec").WireMessage.Publish
                    );
                  })
                  .map(function (e) {
                    if (
                      e instanceof o("MqttProtocolCodec").WireMessage.Publish
                    ) {
                      var t = e;
                      return {
                        topic: t.topic,
                        payload: t.payloadMessage,
                        qos: t.qos,
                      };
                    } else return {};
                  });
              (this.$8(n), this.$9());
            }
          }),
          (a.$17 = function (t, n) {
            var e = n != null ? n.message : "null";
            (this.$2.debugTrace(
              "LongPollingClient Error",
              "Poll failed with error:" + t + ", errorMsg:" + e,
            ),
              this.$18(!1, t + ":" + e),
              this.$2.bumpCounter(c + "error." + t),
              this.$15("Error", t));
          }),
          (a.$18 = function (t, n) {
            this.$2.eventLogPull({
              pullEventName: u,
              sessionID: this.$4,
              status: t,
              duration: Date.now() - this.$11,
              hostname: this.$3,
              errorMessage: n,
            });
          }),
          (a.$14 = function (t) {
            var e = this;
            if (!(this.$1 !== "Ready" || this.$12)) {
              this.$2.bumpCounter(c + "request");
              try {
                ((this.$11 = Date.now()),
                  (this.$12 = new (r("XHRRequest"))(this.$3)
                    .setResponseType("arraybuffer")
                    .setRawData(t)
                    .setTransportBuilder(
                      r("getCrossOriginTransport").withCredentials,
                    )
                    .setResponseHandler(function (t) {
                      return e.$16(t);
                    })
                    .setNetworkFailureHandler(function (t) {
                      e.$17("Network", t);
                    })
                    .setErrorHandler(function (t) {
                      e.$17("Error", t);
                    })
                    .setAbortHandler(function (t) {
                      e.$17("Abort", null);
                    })
                    .setTimeoutHandler(function () {
                      e.$17("Timeout", null);
                    })
                    .setTimeout(s)
                    .send()),
                  this.$15("RequestSend"));
              } catch (e) {
                this.$17("Error", r("getErrorSafe")(e));
              }
            }
          }),
          t
        );
      })();
    l.default = d;
  },
  98,
);
