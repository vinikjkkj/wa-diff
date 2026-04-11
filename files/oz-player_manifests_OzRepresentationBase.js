__d(
  "oz-player/manifests/OzRepresentationBase",
  [
    "oz-player/parsers/getMIMECodecs",
    "oz-player/shims/ozvariant",
    "oz-player/utils/OzErrorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n, r, o, a, i, l, s, u, c, d, m) {
        ((this.$1 = e),
          (this.$2 = t),
          (this.$11 = n),
          (this.$6 = i),
          (this.$3 = r),
          (this.$4 = o),
          (this.$5 = a),
          (this.$7 = l),
          (this.$8 = s),
          (this.$9 = u),
          (this.$10 = c),
          (this.$12 = d),
          (this.$13 = m));
      }
      var t = e.prototype;
      return (
        (t.getContentProtectionXml = function () {
          return this.$2;
        }),
        (t.getID = function () {
          return this.$11;
        }),
        (t.getBandwidth = function () {
          return this.$10;
        }),
        (t.getMimeCodecs = function () {
          return r("oz-player/parsers/getMIMECodecs")(this.$3, this.$4);
        }),
        (t.getMimeType = function () {
          return this.$3;
        }),
        (t.getCodecs = function () {
          return this.$4;
        }),
        (t.getVariantKey = function () {
          return this.$5;
        }),
        (t.getLang = function () {
          return this.$6;
        }),
        (t.getRole = function () {
          return this.$7;
        }),
        (t.getDisplayLabel = function () {
          return this.$11;
        }),
        (t.getInitSegment = function () {
          return this.$8;
        }),
        (t.getCustomFieldFirstSegment = function () {
          return this.$12;
        }),
        (t.getCustomField = function (t) {
          if (this.$13 == null || !this.$13[t])
            throw o("oz-player/utils/OzErrorUtils").createOzError({
              type: "OZ_REPRESENTATION_PARSER",
              description: "Custom field " + t + " is not specified by caller",
              extra: { code: "OZ_RP-8" },
            });
          var e = this.$13[t];
          try {
            return e(this.$1);
          } catch (e) {
            return null;
          }
        }),
        (t.updateWith = function (n) {
          (n instanceof e || r("oz-player/shims/ozvariant")(0, 229),
            this.$9.updateWith(n.$9));
        }),
        (t.getSegmentByTime = function (t) {
          return this.$9.getSegmentByTime(t);
        }),
        (t.getSegment = function (t) {
          return this.$9.getSegment(t);
        }),
        (t.getPredictedSegmentAfter = function (t) {
          return this.$9.getPredictedSegmentAfter(t);
        }),
        (t.canPredict = function () {
          return this.$9.canPredict();
        }),
        (t.canApproximateId = function () {
          return this.$9.canApproximateId();
        }),
        (t.getSegmentAfter = function (t) {
          return this.$9.getSegmentAfter(t);
        }),
        (t.isEndingSegment = function (t) {
          return this.$9.isEndingSegment(t);
        }),
        (t.addUpdateListener = function (t) {
          return this.$9.addUpdateListener(t);
        }),
        (t.getTimeRanges = function () {
          return this.$9.getTimeRanges();
        }),
        (t.blockTimeRange = function (t) {
          this.$9.blockTimeRange(t);
        }),
        (t.getEndingSegment = function () {
          return this.$9.getEndingSegment();
        }),
        (t.getMaxGopSec = function () {
          return this.$9.getMaxGopSec();
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
