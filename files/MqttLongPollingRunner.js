__d(
  "MqttLongPollingRunner",
  [
    "MqttEnv",
    "MqttFetchClient",
    "MqttLongPollingClient",
    "MqttLongPollingHookCollection",
    "MqttTypes",
    "MqttUtils",
    "MqttWebSocketUtils",
    "Promise",
    "exponentialBackoff",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 4,
      u = 1e3,
      c = 3e3,
      d = "mqtt_should_longpoll",
      m = "last_lp",
      p = "yes",
      _ = "no",
      f = (function () {
        function t(e, t, n, a, i, l, s, u, c) {
          var d = this;
          ((this.$23 = function () {
            try {
              if (!d.$30()) return;
              d.$5.debugTrace(
                "LongPollingRunner",
                "_startPollingIfNecessary called",
              );
              var e = d.$31();
              d.$14 = e;
              var t = d.$9(),
                n = d.$10(),
                a = t.filter(function (t) {
                  return e.isTopicSupported(t);
                }),
                i = n.filter(function (t) {
                  return e.isTopicSupported(t.topic);
                });
              if (a.length === 0 && i.length === 0) {
                (d.$5.debugTrace(
                  "LongPollingRunner",
                  "Poll skipped, nothing to do",
                ),
                  (d.$14 = null),
                  o("MqttEnv").Env.setTimeout(function () {
                    d.$23();
                  }, 1e3));
                return;
              }
              var l = o("MqttUtils").generateSessionId();
              (e.run(
                d.$6,
                l,
                d.$7.gen(l, a, i),
                d.$7,
                function () {
                  return d.$32();
                },
                function (e) {
                  return d.$33(e);
                },
                function () {
                  return d.$34();
                },
                function (e) {
                  return d.$35(e);
                },
              ),
                d.$19.onPollRequestSent());
              var s = a.join(","),
                u = i
                  .map(function (e) {
                    return e.topic;
                  })
                  .join(",");
              d.$5.debugTrace(
                "LongPollingRunner",
                "Making a poll request to " +
                  d.$6 +
                  ". SubscribedTopics:" +
                  s +
                  ". Publishes:" +
                  u,
              );
            } catch (e) {
              var c = r("getErrorSafe")(e);
              (d.$5.logErrorWarn(c, "lp_js_error"),
                d.$11(
                  new (o("MqttTypes").MqttChannelError)(!1, "js error lp", c),
                ),
                d.$35("lp_js_error"));
            }
          }),
            (this.$6 = e),
            (this.$7 = t),
            (this.$1 = a),
            (this.$2 = 0),
            (this.$3 = n),
            (this.$4 = o("MqttWebSocketUtils").hasWSSupport()),
            (this.$5 = o("MqttEnv").Env.getLoggerInstance()),
            (this.$8 = i),
            (this.$9 = l),
            (this.$10 = s),
            (this.$11 = u),
            (this.$12 = c),
            (this.$13 = !1),
            (this.$14 = null),
            (this.$15 = "LPInactive"),
            (this.$16 = "NotSent"),
            (this.$17 = 0),
            (this.$19 = new (r("MqttLongPollingHookCollection"))()),
            (this.$18 = r("exponentialBackoff")(this.$23, this)),
            (this.$20 = 0),
            (this.$21 = _));
          var m = o("MqttEnv").Env.genGk(
              o("MqttEnv").MqttGkNames.mqtt_lp_use_fetch,
            ),
            p = r("MqttFetchClient").isSupported();
          (m
            ? this.$5.bumpCounter("fetch_gk_pass")
            : this.$5.bumpCounter("fetch_gk_fail"),
            p
              ? this.$5.bumpCounter("fetch_api_supported")
              : this.$5.bumpCounter("fetch_api_not_supported"),
            (this.$22 = m && p));
        }
        var a = t.prototype;
        return (
          (a.addHook = function (t) {
            this.$19.addHook(t);
          }),
          (a.start = function () {
            var e = this;
            ((this.$21 = o("MqttEnv").Env.configRead(m, _)),
              this.$5.debugTrace(
                "LongPollingRunner",
                "Runner loaded, last status " + this.$21,
              ),
              (this.$20 = Date.now()),
              this.$23(),
              o("MqttEnv").Env.setTimeout(function () {
                e.$23();
              }, u + 100),
              o("MqttEnv").Env.setTimeout(function () {
                e.$23();
              }, c + 100));
          }),
          (a.shutdown = function () {
            (this.$5.debugTrace("LongPollingRunner", "Shutdown called"),
              this.$14 && this.$14.abort(),
              this.$19.onPollShutdownAbort(),
              (this.$14 = null));
          }),
          (a.canPublish = function () {
            return this.$15 === "LPActive" && this.$16 === "ReceivingData";
          }),
          (a.publish = function (t, n, r) {
            return this.$24(t, n);
          }),
          (a.publishBinary = function (t, n, r) {
            return this.$24(t, n);
          }),
          (a.$24 = function (r, a) {
            return o("MqttEnv").Env.genGk(
              o("MqttEnv").MqttGkNames.mqtt_enable_publish_over_polling,
            ) &&
              this.$14 &&
              this.$14.isTopicSupported(r)
              ? typeof a == "string"
                ? this.$14.publish(r, a)
                : this.$14.publishBinary(r, a)
              : (e || (e = n("Promise"))).reject();
          }),
          (a.onConnectAttempt = function () {}),
          (a.onConnectFailure = function () {
            (this.$2++, this.$23());
          }),
          (a.onConnected = function () {}),
          (a.onConnectSuccess = function () {
            ((this.$1 = !0), o("MqttEnv").Env.configWrite(m, null));
          }),
          (a.onConnectionLost = function () {}),
          (a.onConnectionDisconnect = function () {}),
          (a.onSubscribe = function (t) {}),
          (a.onUnsubscribe = function (t) {}),
          (a.onPublish = function (t) {}),
          (a.onMessage = function (t) {}),
          (a.onWSFatal = function () {
            ((this.$3 = !0), this.$23());
          }),
          (a.getStatus = function () {
            return this.$15;
          }),
          (a.getRequestStatus = function () {
            return this.$16;
          }),
          (a.$25 = function (t) {
            t !== this.$15 &&
              (this.$5.debugTrace(
                "LongPollingRunner",
                "status changed to " + t + " from " + this.$15,
              ),
              (this.$15 = t),
              this.$12(this.$15, this.$16));
          }),
          (a.$26 = function (t) {
            this.$22 &&
              t !== this.$16 &&
              (this.$5.debugTrace(
                "LongPollingRunner",
                "request status changed to " + t + " from " + this.$16,
              ),
              (this.$16 = t),
              this.$12(this.$15, this.$16));
          }),
          (a.$27 = function () {
            this.$17 = 0;
          }),
          (a.$28 = function () {
            (this.$17++, this.$17 >= s && this.$25("LPError"));
          }),
          (a.$29 = function () {
            var e,
              t = (e = o("MqttEnv")).Env.genGk(e.MqttGkNames.mqtt_lp_no_delay),
              n = e.Env.genGk(e.MqttGkNames.mqtt_ws_polling_enabled),
              r = e.Env.genGk(e.MqttGkNames.mqtt_fast_lp);
            if (
              (this.$5.debugTrace(
                "LongPollingRunner",
                "_shouldPoll? pollNow:" +
                  String(t) +
                  " enabled:" +
                  String(n) +
                  " fastPoll:" +
                  String(r) +
                  " hasWSSupport:" +
                  String(this.$4) +
                  " hasWsSuccessBefore:" +
                  String(this.$1) +
                  " failureCount:" +
                  this.$2 +
                  " wsFatal:" +
                  String(this.$3),
              ),
              !n)
            )
              return !1;
            if (t) return (this.$5.bumpCounter(d + ".nd"), !0);
            if (!this.$4) return (this.$5.bumpCounter(d + ".na"), !0);
            if (this.$3) return (this.$5.bumpCounter(d + ".fatal"), !0);
            if (this.$1) return !1;
            if (r) {
              var a = Date.now() - this.$20;
              if (this.$21 === p) {
                if (this.$2 >= 1) return !0;
                if (a > u) return (this.$5.bumpCounter(d + ".fastdelay"), !0);
              } else if (a > c)
                return (this.$5.bumpCounter(d + ".regulardelay"), !0);
            }
            return this.$2 >= 3
              ? (this.$5.bumpCounter(d + ".failure"), !0)
              : !1;
          }),
          (a.$30 = function () {
            if (this.$14 != null) return !1;
            var e = this.$29();
            return (
              !this.$13 &&
                e &&
                (this.$5.bumpCounter("polling_kickin"),
                (this.$13 = !0),
                this.$25("LPActive"),
                this.$27()),
              this.$13 &&
                !e &&
                (this.$5.bumpCounter("polling_stopped"),
                (this.$13 = !1),
                this.$25("LPInactive"),
                this.$27()),
              e
            );
          }),
          (a.$31 = function () {
            return this.$22
              ? (this.$5.debugTrace(
                  "LongPollingRunner",
                  "Creating polling client using Fetch API",
                ),
                new (r("MqttFetchClient"))())
              : (this.$5.debugTrace(
                  "LongPollingRunner",
                  "Creating regular Polling client",
                ),
                new (r("MqttLongPollingClient"))());
          }),
          (a.$32 = function () {
            (this.$5.debugTrace("LongPollingRunner", "Poll success"),
              this.$19.onPollRequestSuccess(),
              this.$18.reset(),
              this.$25("LPActive"),
              this.$27(),
              o("MqttEnv").Env.configWrite(m, p),
              this.$26("ReceivingData"));
          }),
          (a.$33 = function (t) {
            var e = t
              .map(function (e) {
                return e.topic;
              })
              .join(",");
            this.$5.debugTrace(
              "LongPollingRunner",
              "Poll response received, message received:" + e,
            );
            for (var n of t)
              (this.$19.onPollResponse(n.topic),
                this.$8(n.topic, n.payload, n.qos));
          }),
          (a.$34 = function () {
            (this.$5.debugTrace("LongPollingRunner", "Poll finish"),
              this.$19.onPollFinish(),
              this.$14 && this.$14.abort(),
              (this.$14 = null),
              this.$23(),
              this.$26("NotSent"));
          }),
          (a.$35 = function (t) {
            (this.$19.onPollRequestFailed(t),
              this.$14 && this.$14.abort(),
              (this.$14 = null),
              this.$18(),
              this.$28(),
              this.$26("NotSent"));
          }),
          t
        );
      })();
    l.default = f;
  },
  98,
);
