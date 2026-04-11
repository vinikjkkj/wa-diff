__d(
  "oz-player/manifests/OzDataSegment",
  ["oz-player/manifests/OzSegmentOptions"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n, o, a) {
        ((this.$6 = new (r("oz-player/manifests/OzSegmentOptions"))()),
          (this.$1 = e),
          (this.$2 = t),
          (this.$3 = n),
          (this.$4 = o),
          (this.$5 = a));
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
          return { startTime: this.$2, endTime: this.$3 };
        }),
        (t.getByteRange = function () {
          return { startByte: this.$4, endByte: this.$5 };
        }),
        (t.getSequenceNumber = function () {
          return null;
        }),
        (t.getOptions = function () {
          return this.$6;
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
