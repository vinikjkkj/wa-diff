__d(
  "PredictedSegmentTemplateSegmentsContainer",
  [
    "oz-player/manifests/OzSegmentOptions",
    "oz-player/manifests/SegmentTemplateSegmentsContainer",
    "oz-player/shims/OzURI",
    "oz-player/shims/ozvariant",
    "oz-player/utils/OzNumericalHelper",
    "oz-player/utils/OzNumericalRangeUtil",
    "oz-player/utils/OzUrlHelper",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n, r, o, a, i, l, s, u, c) {
        var d;
        (c === void 0 && (c = !1),
          (d = e.call(this, t, n, o, a, null, c) || this),
          (d.$PredictedSegmentTemplateSegmentsContainer$p_9 = 0),
          (d.$PredictedSegmentTemplateSegmentsContainer$p_11 = null),
          (d.$PredictedSegmentTemplateSegmentsContainer$p_10 = r),
          (d.$PredictedSegmentTemplateSegmentsContainer$p_8 = c),
          (d.$PredictedSegmentTemplateSegmentsContainer$p_12 = a),
          (d.$PredictedSegmentTemplateSegmentsContainer$p_7 = t),
          (d.$PredictedSegmentTemplateSegmentsContainer$p_5 = o),
          (d.$PredictedSegmentTemplateSegmentsContainer$p_1 = i),
          (d.$PredictedSegmentTemplateSegmentsContainer$p_3 = s),
          (d.$PredictedSegmentTemplateSegmentsContainer$p_2 = l),
          (d.$PredictedSegmentTemplateSegmentsContainer$p_4 = u),
          (d.$PredictedSegmentTemplateSegmentsContainer$p_6 = t.getNumber(
            "live_numerical_error_epsilon",
          )));
        for (
          var m = 0;
          m < d.$PredictedSegmentTemplateSegmentsContainer$p_12.length;
          m++
        )
          d.$PredictedSegmentTemplateSegmentsContainer$p_9 = Math.max(
            d.$PredictedSegmentTemplateSegmentsContainer$p_12[m].d,
            d.$PredictedSegmentTemplateSegmentsContainer$p_9,
          );
        return d;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.$PredictedSegmentTemplateSegmentsContainer$p_13 = function () {
          return this.$PredictedSegmentTemplateSegmentsContainer$p_2 != null &&
            this.$PredictedSegmentTemplateSegmentsContainer$p_4 != null
            ? {
                predictedAverageDuration:
                  this.$PredictedSegmentTemplateSegmentsContainer$p_4,
                predictedMediaStartNumber:
                  this.$PredictedSegmentTemplateSegmentsContainer$p_2,
              }
            : null;
        }),
        (n.$PredictedSegmentTemplateSegmentsContainer$p_14 = function (
          t,
          n,
          a,
        ) {
          var e = this;
          !Number.isNaN(a) || r("oz-player/shims/ozvariant")(0, 54238);
          var i =
              this.$PredictedSegmentTemplateSegmentsContainer$p_1.indexOf(
                "%24Number%24",
              ) === -1
                ? this.$PredictedSegmentTemplateSegmentsContainer$p_1.replace(
                    "$Number$",
                    a.toString(),
                  )
                : this.$PredictedSegmentTemplateSegmentsContainer$p_1.replace(
                    "%24Number%24",
                    a.toString(),
                  ),
            l = this.$PredictedSegmentTemplateSegmentsContainer$p_7
              .getLegacyConfig()
              .getString("cdn_experiment_id", ""),
            s = this.$PredictedSegmentTemplateSegmentsContainer$p_7
              .getLegacyConfig()
              .getNumber("use_dvl_with_timeout_ms", 0),
            u = new (r("oz-player/manifests/OzSegmentOptions"))();
          return {
            getByteRange: function () {
              return null;
            },
            getData: function () {
              return null;
            },
            getOptions: function () {
              return u;
            },
            getSequenceNumber: function () {
              return a;
            },
            getTimeRange: function () {
              return { endTime: n, startTime: t };
            },
            getURI: function () {
              var t = new (r("oz-player/shims/OzURI"))(i);
              l.length !== 0 && t.addQueryData("_nc_expid", l);
              var n = u.isDVLEnabled();
              return (
                n &&
                  s > 0 &&
                  e.$PredictedSegmentTemplateSegmentsContainer$p_10 != null &&
                  (t.addQueryData(
                    "_nc_dinfo-manifest-url",
                    o("oz-player/utils/OzUrlHelper").stripToPathAndQueryOnly(
                      e.$PredictedSegmentTemplateSegmentsContainer$p_10,
                    ),
                  ),
                  t.addQueryData("_nc_dinfo-timeout", s)),
                t
              );
            },
          };
        }),
        (n.updateWith = function (o) {
          (o instanceof t || r("oz-player/shims/ozvariant")(0, 646),
            (this.$PredictedSegmentTemplateSegmentsContainer$p_3 =
              o.$PredictedSegmentTemplateSegmentsContainer$p_3),
            (this.$PredictedSegmentTemplateSegmentsContainer$p_1 =
              o.$PredictedSegmentTemplateSegmentsContainer$p_1),
            e.prototype.updateWith.call(this, o),
            (this.$PredictedSegmentTemplateSegmentsContainer$p_12 =
              o.$PredictedSegmentTemplateSegmentsContainer$p_12),
            (this.$PredictedSegmentTemplateSegmentsContainer$p_8 =
              o.$PredictedSegmentTemplateSegmentsContainer$p_8));
          for (
            var n = 0;
            n < this.$PredictedSegmentTemplateSegmentsContainer$p_12.length;
            n++
          )
            this.$PredictedSegmentTemplateSegmentsContainer$p_9 = Math.max(
              this.$PredictedSegmentTemplateSegmentsContainer$p_12[n].d,
              this.$PredictedSegmentTemplateSegmentsContainer$p_9,
            );
        }),
        (n.getSegmentByTime = function (t) {
          return this.canApproximateId()
            ? this.$PredictedSegmentTemplateSegmentsContainer$p_15(t)
            : this.$PredictedSegmentTemplateSegmentsContainer$p_16(t);
        }),
        (n.getPredictedSegmentAfter = function (t) {
          var e = t != null ? t.getSequenceNumber() : null;
          return e != null && this.canPredict()
            ? this.$PredictedSegmentTemplateSegmentsContainer$p_14(0, 0, e + 1)
            : null;
        }),
        (n.blockTimeRange = function (n) {
          ((this.$PredictedSegmentTemplateSegmentsContainer$p_11 = n),
            e.prototype.blockTimeRange.call(this, n));
        }),
        (n.getTimeRanges = function () {
          var t = this.$PredictedSegmentTemplateSegmentsContainer$p_13();
          if (t) {
            var n = [
                {
                  endTime:
                    (this.$PredictedSegmentTemplateSegmentsContainer$p_12[
                      this.$PredictedSegmentTemplateSegmentsContainer$p_12
                        .length - 1
                    ].t +
                      this.$PredictedSegmentTemplateSegmentsContainer$p_12[
                        this.$PredictedSegmentTemplateSegmentsContainer$p_12
                          .length - 1
                      ].d) /
                    this.$PredictedSegmentTemplateSegmentsContainer$p_5,
                  startTime:
                    (this.$PredictedSegmentTemplateSegmentsContainer$p_12[0].t -
                      t.predictedAverageDuration -
                      (this.$PredictedSegmentTemplateSegmentsContainer$p_3 -
                        this.$PredictedSegmentTemplateSegmentsContainer$p_12
                          .length -
                        Number(
                          this.$PredictedSegmentTemplateSegmentsContainer$p_2,
                        )) *
                        Number(t.predictedAverageDuration)) /
                    this.$PredictedSegmentTemplateSegmentsContainer$p_5,
                },
              ],
              r = this.$PredictedSegmentTemplateSegmentsContainer$p_11;
            return r == null
              ? n
              : o("oz-player/utils/OzNumericalRangeUtil")
                  .diffSortedRanges(
                    this.$PredictedSegmentTemplateSegmentsContainer$p_7,
                    n.map(function (e) {
                      return { rangeEnd: e.endTime, rangeStart: e.startTime };
                    }),
                    { rangeEnd: r.endTime, rangeStart: r.startTime },
                  )
                  .map(function (e) {
                    return {
                      endTime: e.rangeEnd == null ? 1 / 0 : e.rangeEnd,
                      startTime: e.rangeStart,
                    };
                  });
          } else return e.prototype.getTimeRanges.call(this);
        }),
        (n.canPredict = function () {
          return !0;
        }),
        (n.canApproximateId = function () {
          var e = this.$PredictedSegmentTemplateSegmentsContainer$p_13();
          return e != null;
        }),
        (n.$PredictedSegmentTemplateSegmentsContainer$p_16 = function (t) {
          var e = null,
            n = t * this.$PredictedSegmentTemplateSegmentsContainer$p_5,
            a =
              this.$PredictedSegmentTemplateSegmentsContainer$p_12.length > 0
                ? this.$PredictedSegmentTemplateSegmentsContainer$p_12[
                    this.$PredictedSegmentTemplateSegmentsContainer$p_12
                      .length - 1
                  ].t +
                  this.$PredictedSegmentTemplateSegmentsContainer$p_12[
                    this.$PredictedSegmentTemplateSegmentsContainer$p_12
                      .length - 1
                  ].d
                : null,
            i = this.$PredictedSegmentTemplateSegmentsContainer$p_7
              .getLegacyConfig()
              .getNumber("pdash_future_edgelatency_gops", 0);
          if (
            a != null &&
            a <= n &&
            i !== 0 &&
            n < a + this.$PredictedSegmentTemplateSegmentsContainer$p_9 * i
          ) {
            var l =
                n -
                (this.$PredictedSegmentTemplateSegmentsContainer$p_12[
                  this.$PredictedSegmentTemplateSegmentsContainer$p_12.length -
                    1
                ].t +
                  this.$PredictedSegmentTemplateSegmentsContainer$p_12[
                    this.$PredictedSegmentTemplateSegmentsContainer$p_12
                      .length - 1
                  ].d),
              s = this.$PredictedSegmentTemplateSegmentsContainer$p_9
                ? 0
                : Math.floor(
                    l / this.$PredictedSegmentTemplateSegmentsContainer$p_9,
                  );
            return this.$PredictedSegmentTemplateSegmentsContainer$p_14(
              0,
              0,
              this.$PredictedSegmentTemplateSegmentsContainer$p_3 + 1 + s,
            );
          }
          for (
            var u = 0, c = 0;
            this.$PredictedSegmentTemplateSegmentsContainer$p_12.length -
              1 -
              c >=
            0;
            c++
          ) {
            var d =
              this.$PredictedSegmentTemplateSegmentsContainer$p_12[
                this.$PredictedSegmentTemplateSegmentsContainer$p_12.length -
                  1 -
                  c
              ];
            if (
              (d.r === 0 || r("oz-player/shims/ozvariant")(0, 18769),
              o("oz-player/utils/OzNumericalHelper").lessThanOrEqual(
                d.t + d.d * (d.r + 1),
                n,
                this.$PredictedSegmentTemplateSegmentsContainer$p_6,
              ))
            )
              break;
            ((e = d), (u = c));
          }
          return e === null || (i > 0 && n < e.t)
            ? null
            : this.$PredictedSegmentTemplateSegmentsContainer$p_14(
                e.t / this.$PredictedSegmentTemplateSegmentsContainer$p_5,
                (e.t + e.d) /
                  this.$PredictedSegmentTemplateSegmentsContainer$p_5,
                this.$PredictedSegmentTemplateSegmentsContainer$p_3 - u,
              );
        }),
        (n.$PredictedSegmentTemplateSegmentsContainer$p_15 = function (t) {
          var e = t * this.$PredictedSegmentTemplateSegmentsContainer$p_5,
            n = this.getTimeRanges();
          if (
            o("oz-player/utils/OzNumericalHelper").greaterThan(
              n[0].startTime,
              t,
            )
          )
            return null;
          if (
            o("oz-player/utils/OzNumericalHelper").lessThanOrEqual(
              this.$PredictedSegmentTemplateSegmentsContainer$p_12[0].t,
              e,
            )
          )
            return this.$PredictedSegmentTemplateSegmentsContainer$p_16(t);
          var r = Math.ceil(
              (this.$PredictedSegmentTemplateSegmentsContainer$p_12[0].t - e) /
                Number(this.$PredictedSegmentTemplateSegmentsContainer$p_4),
            ),
            a = Math.max(
              Number(this.$PredictedSegmentTemplateSegmentsContainer$p_2),
              this.$PredictedSegmentTemplateSegmentsContainer$p_3 -
                this.$PredictedSegmentTemplateSegmentsContainer$p_12.length +
                1 -
                r,
            );
          return this.$PredictedSegmentTemplateSegmentsContainer$p_14(
            t,
            t +
              Number(this.$PredictedSegmentTemplateSegmentsContainer$p_4) /
                this.$PredictedSegmentTemplateSegmentsContainer$p_5,
            a,
          );
        }),
        (n.isEndingSegment = function (n) {
          if (!this.$PredictedSegmentTemplateSegmentsContainer$p_8) return !1;
          var t = n.getSequenceNumber();
          return t != null
            ? t >= this.$PredictedSegmentTemplateSegmentsContainer$p_3
            : e.prototype.isEndingSegment.call(this, n);
        }),
        (n.getEndingSegment = function () {
          if (this.$PredictedSegmentTemplateSegmentsContainer$p_12.length === 0)
            return null;
          var e =
            this.$PredictedSegmentTemplateSegmentsContainer$p_12[
              this.$PredictedSegmentTemplateSegmentsContainer$p_12.length - 1
            ];
          return this.$PredictedSegmentTemplateSegmentsContainer$p_14(
            e.t / this.$PredictedSegmentTemplateSegmentsContainer$p_5,
            (e.t + e.d) / this.$PredictedSegmentTemplateSegmentsContainer$p_5,
            this.$PredictedSegmentTemplateSegmentsContainer$p_3,
          );
        }),
        (n.getMaxGopSec = function () {
          return (
            this.$PredictedSegmentTemplateSegmentsContainer$p_9 /
            this.$PredictedSegmentTemplateSegmentsContainer$p_5
          );
        }),
        t
      );
    })(r("oz-player/manifests/SegmentTemplateSegmentsContainer"));
    l.default = e;
  },
  98,
);
