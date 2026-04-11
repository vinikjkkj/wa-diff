__d(
  "oz-player/manifests/OzZeroTimeRangeSegment",
  ["oz-player/manifests/OzSegmentOptions"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        ((this.$4 = new (r("oz-player/manifests/OzSegmentOptions"))()),
          (this.$1 = e),
          (this.$2 = t),
          (this.$3 = n));
      }
      var t = e.prototype;
      return (
        (t.getData = function () {
          return null;
        }),
        (t.getURI = function () {
          return this.$1;
        }),
        (t.getTimeRange = function () {
          return { startTime: 0, endTime: 0 };
        }),
        (t.getByteRange = function () {
          return { startByte: this.$2, endByte: this.$3 };
        }),
        (t.getSequenceNumber = function () {
          return null;
        }),
        (t.getOptions = function () {
          return this.$4;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
