__d(
  "oz-player/strategies/OzStartupBufferTargetStrategy",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$1 = e), (this.$3 = t));
      }
      var t = e.prototype;
      return (
        (t.isActive = function () {
          var e = this.$1.isPlaying();
          return (e && (this.$2 = !0), !this.$2);
        }),
        (t.getBufferTarget = function () {
          return this.$3.getNumber("pre_start_buffer_ahead_target");
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
