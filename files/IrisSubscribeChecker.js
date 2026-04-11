__d(
  "IrisSubscribeChecker",
  ["IrisSubscribeCheckerUtils", "MqttEnv"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.$1 = o("MqttEnv").Env.getLoggerInstance()),
          (this.$2 = null),
          (this.$3 = !1),
          (this.$4 = !1),
          (this.$5 = !1),
          (this.$6 = o(
            "IrisSubscribeCheckerUtils",
          ).getIrisSubscribeCheckerInitialRunningState()),
          (this.$7 = 0),
          (this.$8 = e));
      }
      var t = e.prototype;
      return (
        (t.start = function () {
          this.$6 = !0;
        }),
        (t.stop = function () {
          ((this.$6 = !1), this.$9());
        }),
        (t.onConnectAttempt = function () {}),
        (t.onConnectFailure = function () {
          this.$9();
        }),
        (t.onConnected = function () {
          var e = this;
          (this.$7++,
            this.$9(),
            (this.$3 = !1),
            (this.$4 = !1),
            (this.$5 = !1),
            this.$6 &&
              (this.$2 = o("MqttEnv").Env.setTimeout(function () {
                e.$10();
              }, 8e3)));
        }),
        (t.onConnectSuccess = function () {}),
        (t.onConnectionLost = function () {
          this.$9();
        }),
        (t.onConnectionDisconnect = function () {}),
        (t.onSubscribe = function (t) {
          t === "/t_ms" && (this.$3 = !0);
        }),
        (t.onUnsubscribe = function (t) {}),
        (t.onPublish = function (t) {
          (t === "/messenger_sync_get_diffs" ||
            t === "/messenger_sync_create_queue") &&
            ((this.$4 = !0), this.$3 && ((this.$5 = !0), this.$9()));
        }),
        (t.onMessage = function (t) {}),
        (t.onWSFatal = function () {}),
        (t.$9 = function () {
          this.$2 && (o("MqttEnv").Env.clearTimeout(this.$2), (this.$2 = null));
        }),
        (t.$10 = function () {
          if (this.$4 === !1) {
            var e =
              this.$7 == 1
                ? "no_iris_session_initialConnect"
                : "no_iris_session";
            (this.$1.bumpCounter(e),
              this.$8()
                ? this.$1.bumpCounter(e + ".withProvider")
                : this.$1.bumpCounter(e + ".withoutProvider"),
              this.$3 === !0
                ? this.$1.bumpCounter(e + ".withTopicSubscribe")
                : this.$1.bumpCounter(e + ".withoutTopicSubscribe"));
          }
          (this.$3 === !1 && this.$1.bumpCounter("no_iris_topic_subscribe"),
            this.$3 === !0 &&
              this.$4 === !0 &&
              this.$5 === !1 &&
              this.$1.bumpCounter("session_before_topic_subscribe"));
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
