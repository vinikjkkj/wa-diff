__d(
  "MqttLongPollingHookCollection",
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
        (t.onPollRequestSent = function () {
          this.$1.forEach(function (e) {
            e.onPollRequestSent();
          });
        }),
        (t.onPollRequestSuccess = function () {
          this.$1.forEach(function (e) {
            e.onPollRequestSuccess();
          });
        }),
        (t.onPollResponse = function (t) {
          this.$1.forEach(function (e) {
            e.onPollResponse(t);
          });
        }),
        (t.onPollFinish = function () {
          this.$1.forEach(function (e) {
            e.onPollFinish();
          });
        }),
        (t.onPollRequestFailed = function (t) {
          this.$1.forEach(function (e) {
            e.onPollRequestFailed(t);
          });
        }),
        (t.onPollShutdownAbort = function () {
          this.$1.forEach(function (e) {
            e.onPollShutdownAbort();
          });
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
