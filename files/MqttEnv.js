__d(
  "MqttEnv",
  ["MqttEnvWebSocket", "clearTimeout", "setTimeout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = Object.freeze({
        mqtt_waterfall_log_client_sampling: 1,
        mqtt_ws_polling_enabled: 3,
        mqtt_lp_use_fetch: 9,
        mqtt_fast_lp: 11,
        mqtt_lp_no_delay: 12,
        mqtt_enable_publish_over_polling: 13,
        mqttweb_global_connection_counter: 15,
      }),
      s = (function () {
        function e() {
          ((this.$1 = null),
            (this.$2 = null),
            (this.$3 = null),
            (this.$4 = null),
            (this.$5 = null),
            (this.$6 = null),
            (this.$7 = null),
            (this.$8 = null),
            (this.$9 = null),
            (this.$10 = null),
            (this.$11 = null));
        }
        var t = e.prototype;
        return (
          (t.random = function () {
            return this.$1 != null ? this.$1() : Math.random();
          }),
          (t.isUserLoggedInNow = function () {
            return this.$2 != null ? this.$2() : !0;
          }),
          (t.setIsUserLoggedInNow = function (t) {
            this.$2 = t;
          }),
          (t.clearTimeout = function (t) {
            if (this.$3 != null) {
              this.$3(t);
              return;
            }
            r("clearTimeout")(t);
          }),
          (t.setTimeout = function (t, n) {
            for (
              var e = arguments.length, o = new Array(e > 2 ? e - 2 : 0), a = 2;
              a < e;
              a++
            )
              o[a - 2] = arguments[a];
            return this.$4 != null
              ? this.$4.apply(null, arguments)
              : r("setTimeout").apply(null, arguments);
          }),
          (t.getLoggerInstance = function () {
            return this.$5 != null ? this.$5() : u.getInstance();
          }),
          (t.genGk = function (t) {
            return this.$6 != null ? this.$6(t) : !1;
          }),
          (t.createSocket = function (t, n) {
            return this.$7 != null
              ? this.$7(t, n)
              : o("MqttEnvWebSocket").createWebSocket(t);
          }),
          (t.scheduleCallback = function (t) {
            return this.$8 != null ? this.$8(t) : t();
          }),
          (t.scheduleLoggingCallback = function (t) {
            return this.$9 != null ? this.$9(t) : t();
          }),
          (t.configRead = function (t, n) {
            return this.$10 != null ? this.$10(t, n) : n;
          }),
          (t.configWrite = function (t, n) {
            this.$11 != null && this.$11(t, n);
          }),
          (t.initialize = function (t, n, r, o, a, i, l, s, u, c, d) {
            ((this.$1 = t),
              (this.$2 = n),
              (this.$3 = r),
              (this.$4 = o),
              (this.$5 = a),
              (this.$6 = i),
              (this.$7 = l),
              (this.$8 = s),
              (this.$9 = u),
              (this.$10 = c),
              (this.$11 = d));
          }),
          e
        );
      })(),
      u = (function () {
        function e() {}
        e.getInstance = function () {
          return new e();
        };
        var t = e.prototype;
        return (
          (t.setAppId = function (t) {}),
          (t.eventLogConnect = function (t) {}),
          (t.eventLogPull = function (t) {}),
          (t.eventLogPullFinish = function (t) {}),
          (t.eventLogDisconnect = function (t) {}),
          (t.eventLogOutgoingPublish = function (t) {}),
          (t.eventLogIncomingPublish = function (t) {}),
          (t.eventLogPublishTimeout = function (t) {}),
          (t.eventLogMiscellaneousError = function (t) {}),
          (t.logIfLoggedOut = function () {}),
          (t.logError = function (t) {}),
          (t.logErrorWarn = function (t) {}),
          (t.logWarn = function (t) {}),
          (t.debugTrace = function (t) {}),
          (t.bumpCounter = function (t) {}),
          (t.getBrowserConnectivity = function () {
            return !0;
          }),
          e
        );
      })(),
      c = new s();
    function d(e) {
      c.setIsUserLoggedInNow(e);
    }
    ((l.MqttGkNames = e), (l.Env = c), (l.setIsUserLoggedInNow = d));
  },
  98,
);
