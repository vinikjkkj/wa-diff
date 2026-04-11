__d(
  "oz-player/parsers/OzSegmentTemplateParser",
  [
    "oz-player/manifests/OzSegmentOptions",
    "oz-player/parsers/OzDefaultSegmentTimelineParser",
    "oz-player/shims/OzURI",
    "oz-player/utils/OzUrlHelper",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e(e, t) {
          ((this.$3 = new (r("oz-player/manifests/OzSegmentOptions"))()),
            (this.$2 = e),
            (this.$1 = t));
        }
        var t = e.prototype;
        return (
          (t.getData = function () {
            return this.$1;
          }),
          (t.getTimeRange = function () {
            return { startTime: 0, endTime: 0 };
          }),
          (t.getByteRange = function () {
            return null;
          }),
          (t.getURI = function () {
            return this.$2;
          }),
          (t.getSequenceNumber = function () {
            return null;
          }),
          (t.getOptions = function () {
            return this.$3;
          }),
          e
        );
      })(),
      s = (function () {
        function t(e, t, n, o, a) {
          ((this.$2 = n),
            (this.$1 = t),
            (this.$3 = e),
            o
              ? (this.$4 = o)
              : (this.$4 = new (r(
                  "oz-player/parsers/OzDefaultSegmentTimelineParser",
                ))()),
            (this.$5 = a));
        }
        var n = t.prototype;
        return (
          (n.parseInitializationSegment = function () {
            var t = o("oz-player/utils/OzUrlHelper").joinUrlPaths(
              this.$2.baseUrl,
              this.$1.$.initialization,
            );
            return new e(new (r("oz-player/shims/OzURI"))(t), this.$5);
          }),
          (n.parseSegmentsContainer = function () {
            return this.$4.parseSegmentsContainer(this.$3, this.$2, this.$1);
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
