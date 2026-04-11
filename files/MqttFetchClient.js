__d(
  "MqttFetchClient",
  [
    "MqttEnv",
    "MqttProtocolCodec",
    "MqttUserName",
    "MqttUtils",
    "Promise",
    "PromiseResult",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "fetch_pull",
      u = "fetch_pull_finish",
      c = "fetch_",
      d = 6e4,
      m = "action",
      p = "chunked",
      _ = "send",
      f = "true",
      g = 5,
      h = 20,
      y = 10,
      C = 5e3,
      b = typeof window != "undefined" ? window : self,
      v = (function () {
        function t() {
          ((this.$1 = ""),
            (this.$2 = o("MqttEnv").Env.getLoggerInstance()),
            (this.$3 = 0),
            (this.$4 = ""),
            (this.$5 = new (r("MqttUserName"))("", 0, 1, "", 0, !0)),
            (this.$6 = function () {}),
            (this.$7 = function (e) {}),
            (this.$8 = function () {}),
            (this.$9 = function (e) {}),
            (this.$10 = 0),
            (this.$11 = 0),
            (this.$12 = 0),
            (this.$13 = 0),
            (this.$14 = "Ready"),
            (this.$15 = []),
            (this.$16 = []),
            (this.$17 = null),
            (this.$18 = !1),
            (this.$19 = 0));
        }
        t.isSupported = function () {
          return typeof b.fetch == "function";
        };
        var a = t.prototype;
        return (
          (a.run = function (t, n, r, a, i, l, s, u) {
            var e = this;
            ((this.$1 = o("MqttUtils").endpointWithSessionId(t, n)),
              (this.$3 = n),
              (this.$4 = r),
              (this.$5 = a),
              (this.$6 = i),
              (this.$7 = l),
              (this.$8 = s),
              (this.$9 = u),
              o("MqttEnv").Env.setTimeout(function () {
                return e.$20();
              }, 0));
          }),
          (a.isTopicSupported = function (t) {
            return !0;
          }),
          (a.publish = function (t, n) {
            return this.$21(t, n);
          }),
          (a.publishBinary = function (t, n) {
            return this.$21(t, n);
          }),
          (a.$21 = function (o, a) {
            if (this.$14 !== "ReceivingData")
              return (
                this.$2.bumpCounter(c + "publish." + o + ".invalidstate"),
                (e || (e = n("Promise"))).reject("not connected")
              );
            this.$2.bumpCounter(c + "publish." + o + ".publish");
            var t = new (r("PromiseResult"))(),
              i = { topic: o, payload: a, promiseResult: t };
            return (this.$15.push(i), this.$22(), t.promise);
          }),
          (a.abort = function () {
            ((this.$6 = function () {}),
              (this.$7 = function (e) {}),
              (this.$8 = function () {}),
              (this.$9 = function (e) {}));
          }),
          (a.$23 = function (t) {
            var e = this;
            (t.forEach(function (t) {
              (e.$2.bumpCounter(c + "publish." + t.topic + ".resolved"),
                t.promiseResult.resolve());
            }),
              (this.$12 += t.length));
          }),
          (a.$24 = function (t, n) {
            var e = this;
            t.forEach(function (t) {
              (e.$2.bumpCounter(c + "publish." + t.topic + ".rejected"),
                t.promiseResult.reject(n));
            });
          }),
          (a.$25 = function (t, n, r, o) {
            var e = t
              .map(function (e) {
                return e.topic;
              })
              .join(",");
            (this.$2.debugTrace(
              "FetchClient",
              "Fetch publish request failed. Publishes:" + e + ", retry:" + r,
            ),
              this.$2.bumpCounter(c + "publish_request_failed"),
              this.$14 !== "ReceivingData" || r === g
                ? (this.$24(t, o),
                  (this.$18 = !1),
                  this.$2.bumpCounter(c + "publish_request_failed_final"),
                  this.$22())
                : this.$26(t, n, r + 1));
          }),
          (a.$27 = function (t, n, o, a) {
            if (!a.ok) {
              if (
                (this.$2.bumpCounter(
                  c + "publish_request_failed.http." + a.status,
                ),
                a.status === 409 && (this.$19++, this.$19 >= y))
              ) {
                (this.$2.bumpCounter(c + "409_reset"),
                  this.$28(r("err")("Too many 409 errors")));
                return;
              }
              this.$25(t, n, o, this.$29(a));
              return;
            }
            this.$2.bumpCounter(c + "publish_request_success");
            var e = t
              .map(function (e) {
                return e.topic;
              })
              .join(",");
            (this.$2.debugTrace(
              "FetchClient",
              "Fetch publish request success. Publishes:" + e + ", retry:" + o,
            ),
              this.$23(t),
              (this.$18 = !1),
              this.$22());
          }),
          (a.$22 = function () {
            if (
              this.$14 === "ReceivingData" &&
              !this.$18 &&
              !(this.$15.length === 0 && this.$16.length === 0)
            ) {
              this.$18 = !0;
              var e = this.$15.slice(0, h);
              ((this.$15 = this.$15.slice(h, this.$15.length)),
                this.$17 != null && o("MqttEnv").Env.clearTimeout(this.$17),
                (this.$17 = null));
              var t = this.$16.slice(0, h);
              ((this.$16 = this.$16.slice(h, this.$16.length)),
                this.$26(e, t, 0));
            }
          }),
          (a.$26 = function (t, n, r) {
            var e = this,
              a = t
                .map(function (e) {
                  return e.topic;
                })
                .join(",");
            this.$2.debugTrace(
              "FetchClient",
              "Fetch publish request sent. Publishes:" + a + ", retry:" + r,
            );
            var i = o("MqttUtils").endpointWithExtraParameter(this.$1, m, _),
              l = t.map(function (e) {
                return {
                  topic: e.topic,
                  payload: e.payload,
                  qos: 0,
                  messageId: o("MqttEnv").Env.random(),
                };
              }),
              s = this.$5.gen(this.$3, [], l, n);
            (this.$2.bumpCounter(c + "publish_request"),
              o("MqttUtils").promiseDoneWithTimeout(
                b.fetch(i, {
                  method: "POST",
                  mode: "cors",
                  cache: "no-cache",
                  credentials: "include",
                  referrer: "no-referrer",
                  body: s,
                  keepalive: !1,
                }),
                function (o) {
                  return e.$27(t, n, r, o);
                },
                function (o) {
                  return e.$25(t, n, r, o);
                },
                d,
              ));
          }),
          (a.$30 = function (t) {
            var e = t.message;
            (this.$2.debugTrace(
              "FetchClient",
              "Fetch request failed with error:" + e,
            ),
              this.$9(e),
              this.$31(!1, e),
              this.$2.bumpCounter(c + "error"),
              (this.$14 = "Error"));
          }),
          (a.$32 = function (t) {
            var e = this;
            this.$2.debugTrace("FetchClient", "Fetch response data received");
            var n = o("MqttProtocolCodec").decodeByteMessages(
                new Uint8Array(t),
              ),
              r = n.messages,
              a = r.filter(function (e) {
                return (
                  e.messageType === o("MqttProtocolCodec").MESSAGE_TYPE.PINGREQ
                );
              }),
              i = r
                .filter(function (e) {
                  return (
                    e.messageType ===
                    o("MqttProtocolCodec").MESSAGE_TYPE.PUBLISH
                  );
                })
                .map(function (t) {
                  if (
                    !(t instanceof o("MqttProtocolCodec").WireMessage.Publish)
                  )
                    return {};
                  var n = t;
                  return (
                    n.qos === 1 &&
                      n.messageIdentifier != null &&
                      (e.$16.push(n.messageIdentifier),
                      e.$17 == null &&
                        (e.$17 = o("MqttEnv").Env.setTimeout(function () {
                          e.$22();
                        }, C))),
                    { topic: n.topic, payload: n.payloadMessage, qos: n.qos }
                  );
                });
            for (var l of i) {
              var s;
              this.$2.bumpCounter(
                c + "response_" + ((s = l.topic) != null ? s : "void"),
              );
            }
            (i && i.length > 0 && ((this.$13 += i.length), this.$7(i)),
              a && a.length > 0 && this.$33());
          }),
          (a.$33 = function () {
            (this.$2.debugTrace("FetchClient", "Got server ping request"),
              this.$2.bumpCounter(c + "ping"));
          }),
          (a.$28 = function (t) {
            (this.$2.debugTrace(
              "FetchClient",
              "Fetch request ended: " + t.toString(),
            ),
              this.$2.bumpCounter(c + "done"),
              this.$34(t.message),
              this.$8(),
              (this.$14 = "Done"));
          }),
          (a.$35 = function (t, n, a) {
            var e = this;
            if (a != null)
              try {
                this.$32(a);
              } catch (e) {
                (this.$28(r("getErrorSafe")(e)),
                  this.$2.bumpCounter(c + "dataDecodeException"));
                return;
              }
            if (n) {
              this.$28(r("err")("EOF"));
              return;
            }
            o("MqttUtils").promiseDone(
              t.read(),
              function (n) {
                var r = n.done,
                  o = n.value;
                return e.$35(t, r, o);
              },
              function (t) {
                return e.$28(t);
              },
            );
          }),
          (a.$36 = function (t) {
            if (!t.ok) {
              (this.$2.bumpCounter(c + "error.http." + t.status),
                this.$30(this.$29(t)));
              return;
            }
            var e = t.body;
            if (!e) {
              this.$30(r("err")("Empty body"));
              return;
            }
            var n = e.getReader();
            (this.$6(),
              this.$2.bumpCounter(c + "success"),
              this.$31(!0, null),
              (this.$11 = Date.now()),
              (this.$14 = "ReceivingData"),
              this.$2.debugTrace("FetchClient", "Fetch request success"),
              this.$35(n, !1, null));
          }),
          (a.$34 = function (t) {
            this.$2.eventLogPullFinish({
              pullEventName: u,
              sessionID: this.$3,
              duration: Date.now() - this.$11,
              errorMessage: t,
              publishReceived: this.$13,
              publishSent: this.$12,
            });
          }),
          (a.$31 = function (t, n) {
            this.$2.eventLogPull({
              pullEventName: s,
              sessionID: this.$3,
              status: t,
              duration: Date.now() - this.$10,
              hostname: this.$1,
              errorMessage: n,
            });
          }),
          (a.$20 = function () {
            var e = this;
            if (this.$14 === "Ready") {
              (this.$2.debugTrace("FetchClient", "Sending fetch request"),
                this.$2.bumpCounter(c + "request"),
                (this.$10 = Date.now()));
              var t = o("MqttUtils").endpointWithExtraParameter(this.$1, p, f);
              o("MqttUtils").promiseDoneWithTimeout(
                b.fetch(t, {
                  method: "POST",
                  mode: "cors",
                  cache: "no-cache",
                  credentials: "include",
                  referrer: "no-referrer",
                  body: this.$4,
                  keepalive: !1,
                }),
                function (t) {
                  return e.$36(t);
                },
                function (t) {
                  return e.$30(t);
                },
                d,
              );
            }
          }),
          (a.$29 = function (t) {
            return r("err")("Http error, status=" + t.status);
          }),
          t
        );
      })();
    l.default = v;
  },
  98,
);
