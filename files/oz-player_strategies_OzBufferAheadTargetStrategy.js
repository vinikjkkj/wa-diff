__d(
  "oz-player/strategies/OzBufferAheadTargetStrategy",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.isActive = function () {
          return !0;
        }),
        (t.getBufferTarget = function () {
          return this.$1.getNumber("buffer_ahead_target");
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
