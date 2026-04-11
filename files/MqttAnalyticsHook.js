__d(
  "MqttAnalyticsHook",
  ["MqttEnv", "MqttGlobalStreamCounter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e() {
        ((this.$1 = o("MqttEnv").Env.getLoggerInstance()),
          (this.$2 = o("MqttGlobalStreamCounter").getInstance()),
          (this.$3 = 0),
          (this.$4 = 0),
          (this.$5 = 0),
          (this.$6 = 0),
          this.$1.bumpCounter("session_start"),
          o("MqttEnv").Env.isUserLoggedInNow() ||
            this.$1.bumpCounter("session_start.logout"));
      }
      var t = e.prototype;
      return (
        (t.onConnectAttempt = function () {
          (this.$1.bumpCounter("ws_connect_attempt"),
            this.$2.streamRequested());
        }),
        (t.onConnectFailure = function () {
          (this.$4++,
            this.$1.bumpCounter("ws_connect_failure"),
            this.$1.debugTrace(
              "connect",
              "Connect failed existing streams count " +
                this.$2.getGlobalState().totalConnectionStreams,
            ),
            this.$2.streamClosed());
        }),
        (t.onConnected = function () {
          this.$1.bumpCounter("ws_connect_connected");
        }),
        (t.onConnectSuccess = function () {
          (this.$3 === 0 && this.$1.bumpCounter("ws_connect_first_success"),
            this.$3++,
            this.$1.bumpCounter("ws_connect_success"));
        }),
        (t.onConnectionLost = function () {
          this.$1.bumpCounter("ws_disconnect");
        }),
        (t.onConnectionDisconnect = function () {
          this.$2.streamClosed();
        }),
        (t.onSubscribe = function (t) {}),
        (t.onUnsubscribe = function (t) {}),
        (t.onPublish = function (t) {
          this.$1.bumpCounter("ws_publish." + t);
        }),
        (t.onMessage = function (t) {
          this.$1.bumpCounter("message_arrived." + t);
        }),
        (t.onWSFatal = function () {
          this.$1.bumpCounter("ws_fatal");
        }),
        (t.onPollRequestSent = function () {
          (this.$1.bumpCounter("polling_request_send"),
            this.$2.streamRequested());
        }),
        (t.onPollRequestSuccess = function () {
          (this.$1.bumpCounter("polling_request_succeed"),
            this.$5 === 0 && this.$1.bumpCounter("polling_first_success"),
            this.$5++);
        }),
        (t.onPollResponse = function (t) {
          this.$1.bumpCounter("lp.message_arrived." + t);
        }),
        (t.onPollFinish = function () {
          (this.$1.bumpCounter("polling_request_finish"),
            this.$2.streamRequested());
        }),
        (t.onPollRequestFailed = function (t) {
          (this.$1.bumpCounter("polling_request_failed"),
            this.$1.bumpCounter("polling_request_failed_" + t),
            this.$6++,
            this.$1.debugTrace(
              "PollRequest",
              "Request failed existing streams count " +
                this.$2.getGlobalState().totalConnectionStreams,
            ),
            this.$2.streamClosed());
        }),
        (t.onPollShutdownAbort = function () {
          this.$2.streamClosed();
        }),
        (t.onTabClose = function () {
          this.$2.tabClosed();
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
