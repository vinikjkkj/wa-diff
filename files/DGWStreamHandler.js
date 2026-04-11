__d(
  "DGWStreamHandler",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t, n, r, o) {
        ((this.$2 = e),
          (this.$3 = t),
          (this.$4 = n),
          (this.$5 = r),
          (this.$6 = o),
          (this.$1 = !0));
      }
      var t = e.prototype;
      return (
        (t.onClose = function (t) {
          this.$1 && this.$2(t);
        }),
        (t.onDataReceived = function (t) {
          this.$1 && this.$3(t);
        }),
        (t.onError = function (t) {
          this.$1 && this.$4(t);
        }),
        (t.onStreamMustDrain = function (t, n) {
          this.$1 && this.$5(t, n);
        }),
        (t.onServerHasFinishedSendingData = function (t) {
          this.$1 && this.$6(t);
        }),
        (t.stop = function () {
          this.$1 = !1;
        }),
        (t.isStopped = function () {
          return !this.$1;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
