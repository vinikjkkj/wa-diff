__d(
  "oz-player/manifests/SegmentTemplateSegmentsContainer",
  [
    "oz-player/manifests/OzSegmentOptions",
    "oz-player/shims/OzEventEmitter",
    "oz-player/shims/OzURI",
    "oz-player/shims/ozvariant",
    "oz-player/utils/OzNumericalHelper",
    "oz-player/utils/OzNumericalRangeUtil",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e-4,
      s = (function () {
        function t(e, t, n, o, a, i) {
          (i === void 0 && (i = !1),
            (this.$7 = new (r("oz-player/shims/OzEventEmitter"))()),
            (this.$10 = null),
            (this.$8 = e),
            (this.$2 = t),
            (this.$3 = n),
            (this.$1 = a),
            (this.$4 = o),
            (this.$5 = this.$11(this.$4)),
            (this.$6 = i),
            (this.$9 = this.$8.getNumber("live_numerical_error_epsilon")));
        }
        var n = t.prototype;
        return (
          (n.getSegmentByTime = function (t) {
            for (
              var e = this.$12(t),
                n = e * this.$3,
                r = null,
                a = this.$4.length - 1;
              a >= 0;
              a--
            ) {
              var i = this.$4[a];
              if (
                o("oz-player/utils/OzNumericalHelper").lessThanOrEqual(
                  i.t + i.d * (i.r + 1),
                  n,
                  this.$9,
                )
              )
                break;
              r = i;
            }
            if (
              r === null ||
              o("oz-player/utils/OzNumericalHelper").greaterThan(
                r.t,
                n,
                this.$9,
              )
            )
              return null;
            var l = Math.max(0, Math.floor((n - r.t + this.$9) / r.d));
            return this.$13(r, l);
          }),
          (n.getSegment = function (t) {
            for (var e = 0, n = t; n >= 0 && e < this.$4.length; ) {
              var r = this.$4[e],
                o = r.r,
                a = o + 1;
              if (n >= a) {
                ((n -= a), e++);
                continue;
              }
              break;
            }
            var i = this.$4[e];
            return i ? this.$13(i, n) : null;
          }),
          (n.getSegmentAfter = function (t) {
            var e = t.getTimeRange().endTime;
            return this.getSegmentByTime(e);
          }),
          (n.getPredictedSegmentAfter = function (t) {
            return null;
          }),
          (n.canPredict = function () {
            return !1;
          }),
          (n.canApproximateId = function () {
            return !1;
          }),
          (n.isEndingSegment = function (n) {
            if (!this.$4 || !this.$4.length || !this.$6) return !1;
            var t = this.$4[this.$4.length - 1],
              r = t.r,
              o = this.$13(t, r);
            return (
              Math.abs(
                o.getTimeRange().startTime - n.getTimeRange().startTime,
              ) +
                Math.abs(o.getTimeRange().endTime - n.getTimeRange().endTime) <
              e
            );
          }),
          (n.updateWith = function (n) {
            (n instanceof t || r("oz-player/shims/ozvariant")(0, 646),
              (this.$6 = n.$6),
              this.$14(n.$4),
              this.$15(n.$4),
              this.$7.emit("segment_updated"));
          }),
          (n.getTimeRanges = function () {
            return this.$10 ? this.$16(this.$5, this.$10) : this.$5;
          }),
          (n.blockTimeRange = function (t) {
            this.$10 = t;
          }),
          (n.$16 = function (t, n) {
            return o("oz-player/utils/OzNumericalRangeUtil")
              .diffSortedRanges(
                this.$8,
                t.map(function (e) {
                  return { rangeStart: e.startTime, rangeEnd: e.endTime };
                }),
                { rangeStart: n.startTime, rangeEnd: n.endTime },
              )
              .map(function (e) {
                return {
                  startTime: e.rangeStart,
                  endTime: e.rangeEnd == null ? 1 / 0 : e.rangeEnd,
                };
              });
          }),
          (n.addUpdateListener = function (t) {
            return this.$7.addListener("segment_updated", t);
          }),
          (n.$12 = function (t) {
            var e = t,
              n = o(
                "oz-player/utils/OzNumericalRangeUtil",
              ).findCurrentRangeIndex(
                this.$8,
                t,
                this.getTimeRanges().map(function (e) {
                  return { rangeStart: e.startTime, rangeEnd: e.endTime };
                }),
              );
            if (n === -1) {
              var r = o(
                "oz-player/utils/OzNumericalRangeUtil",
              ).findNextRangeIndex(
                t,
                this.getTimeRanges().map(function (e) {
                  return { rangeStart: e.startTime, rangeEnd: e.endTime };
                }),
              );
              r !== -1 && (e = this.getTimeRanges()[r].startTime);
            }
            return e;
          }),
          (n.$14 = function (t) {
            var e;
            (e = this.$4).splice.apply(e, [0, this.$4.length].concat(t));
          }),
          (n.$15 = function (t) {
            var e = this.$11(t),
              n = o("oz-player/utils/OzNumericalRangeUtil").mergeSortedRanges(
                this.$5
                  .map(function (e) {
                    return { rangeStart: e.startTime, rangeEnd: e.endTime };
                  })
                  .concat(
                    e.map(function (e) {
                      return { rangeStart: e.startTime, rangeEnd: e.endTime };
                    }),
                  ),
              );
            this.$5 = n.map(function (e) {
              return {
                startTime: e.rangeStart,
                endTime: e.rangeEnd == null ? 1 / 0 : e.rangeEnd,
              };
            });
          }),
          (n.$11 = function (t) {
            var e = this,
              n = o("oz-player/utils/OzNumericalRangeUtil").mergeSortedRanges(
                this.$4.map(function (t) {
                  var n = e.$13(t, 0).getTimeRange().startTime,
                    r = e.$13(t, t.r).getTimeRange().endTime;
                  return { rangeStart: n, rangeEnd: r };
                }),
              );
            return n.map(function (e) {
              var t = e.rangeEnd,
                n = e.rangeStart;
              return (
                (t = t == null ? 1 / 0 : t),
                { startTime: n, endTime: t }
              );
            });
          }),
          (n.$13 = function (t, n) {
            var e = this;
            n === void 0 && (n = 0);
            var o = t.d,
              a = t.id,
              i = t.r,
              l = t.t,
              s = l + o * n,
              u = this.$8.getBool("use_scf_timebased_segments"),
              c = a != null ? a - (i - n) : null,
              d = new (r("oz-player/manifests/OzSegmentOptions"))();
            return {
              getData: function () {
                return null;
              },
              getURI: function () {
                var t = "";
                e.$1 != null && c != null
                  ? (t = e.$1.replace("$Number$", c.toString()))
                  : c != null &&
                      e.$2.indexOf("$Number$") !== -1 &&
                      e.$8.getBool("parse_number_templated_uri")
                    ? (t = e.$2.replace("$Number$", c.toString()))
                    : (t = e.$2.replace("$Time$", s.toString()));
                var n = new (r("oz-player/shims/OzURI"))(t);
                return (u && n.addQueryData("_nc_scf", 1), n);
              },
              getTimeRange: function () {
                return { startTime: s / e.$3, endTime: (s + o) / e.$3 };
              },
              getByteRange: function () {
                return null;
              },
              getSequenceNumber: function () {
                return null;
              },
              getOptions: function () {
                return d;
              },
            };
          }),
          (n.getSegmentGroups = function () {
            return this.$4;
          }),
          (n.getEndingSegment = function () {
            if (this.$4.length === 0) return null;
            var e = this.$4[this.$4.length - 1],
              t = e.r;
            return this.$13(e, t);
          }),
          (n.forceParseIfNotParsed = function () {}),
          (n.getMaxGopSec = function () {
            return null;
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
