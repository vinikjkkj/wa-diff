__d(
  "MqttConnectionHookCollection",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e() {
        this.$1 = new Set();
      }
      var t = e.prototype;
      return (
        (t.addHook = function (t) {
          this.$1.add(t);
        }),
        (t.removeHook = function (t) {
          this.$1.delete(t);
        }),
        (t.onConnectAttempt = function () {
          this.$1.forEach(function (e) {
            e.onConnectAttempt == null || e.onConnectAttempt();
          });
        }),
        (t.onConnectFailure = function () {
          this.$1.forEach(function (e) {
            e.onConnectFailure == null || e.onConnectFailure();
          });
        }),
        (t.onConnected = function () {
          this.$1.forEach(function (e) {
            e.onConnected == null || e.onConnected();
          });
        }),
        (t.onConnectSuccess = function () {
          this.$1.forEach(function (e) {
            e.onConnectSuccess == null || e.onConnectSuccess();
          });
        }),
        (t.onConnectionLost = function () {
          this.$1.forEach(function (e) {
            e.onConnectionLost == null || e.onConnectionLost();
          });
        }),
        (t.onConnectionDisconnect = function () {
          this.$1.forEach(function (e) {
            e.onConnectionDisconnect == null || e.onConnectionDisconnect();
          });
        }),
        (t.onSubscribe = function (t) {
          this.$1.forEach(function (e) {
            e.onSubscribe == null || e.onSubscribe(t);
          });
        }),
        (t.onUnsubscribe = function (t) {
          this.$1.forEach(function (e) {
            e.onUnsubscribe == null || e.onUnsubscribe(t);
          });
        }),
        (t.onPublish = function (t) {
          this.$1.forEach(function (e) {
            e.onPublish == null || e.onPublish(t);
          });
        }),
        (t.onMessage = function (t) {
          this.$1.forEach(function (e) {
            e.onMessage == null || e.onMessage(t);
          });
        }),
        (t.onWSFatal = function () {
          this.$1.forEach(function (e) {
            e.onWSFatal == null || e.onWSFatal();
          });
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
