__d(
  "oz-player/strategies/OzBufferTargetBoundedStreamSegmentsCountStrategy",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.$1 = e), (this.$2 = t));
      }
      var t = e.prototype;
      return (
        (t.isActive = function (t) {
          return !t.isPlaying();
        }),
        (t.getSegmentsCount = function (t, n, r) {
          for (
            var e = t.getCurrentTime(),
              o = this.$1.computeBufferTarget(),
              a = 1,
              i = n,
              l = n.getTimeRange().startTime;
            i !== null && l < o + e && ((i = r.getSegmentAfter(i)), !!i);
          )
            ((l = i.getTimeRange().startTime), a++);
          return a;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
