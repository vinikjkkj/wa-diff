__d(
  "oz-player/strategies/OzPausedStreamSegmentsCountStrategy",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$1 = e), (this.$2 = t));
      }
      var t = e.prototype;
      return (
        (t.isActive = function () {
          return !this.$1.isPlaying();
        }),
        (t.getSegmentsCount = function (t, n, r) {
          return this.$2.getNumber("paused_stream_segments_count");
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
