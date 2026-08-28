__d(
  "ZenonSignalingMessage",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$1 = e), (this.$2 = t));
      }
      var t = e.prototype;
      return (
        (t.getHeader = function () {
          return this.$1;
        }),
        (t.getEvents = function () {
          return this.$2;
        }),
        (t.setSignalingID = function (t) {
          this.$1.signalingID = t;
        }),
        (t.setRetryCount = function (t) {
          this.$1.retryCount = t;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
