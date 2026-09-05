__d(
  "oz-player/parsers/OzSidxSegmentsParser",
  [
    "oz-player/loggings/OzLoggingUtils",
    "oz-player/manifests/OzSegmentOptions",
    "oz-player/manifests/OzZeroTimeRangeSegment",
    "oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter",
    "oz-player/parsers/OzMp4SidxParser",
    "oz-player/parsers/OzSidxSegmentsContainer",
    "oz-player/parsers/OzWebmSidxParser",
    "oz-player/shims/OzEventEmitter",
    "oz-player/shims/OzMaybeNativePromise",
    "oz-player/shims/OzURI",
    "oz-player/utils/OzErrorEmitter",
    "oz-player/utils/OzReadableStreamUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.split("-");
      return {
        startByte: Number.parseInt(t[0], 10),
        endByte: Number.parseInt(t[1], 10),
      };
    }
    var s = (function () {
      function t(e, t, n, o, a, i, l) {
        ((this.$6 = new (r("oz-player/utils/OzErrorEmitter"))()),
          (this.$7 = []),
          (this.$9 = new (r("oz-player/shims/OzEventEmitter"))()),
          (this.$1 = t),
          (this.$2 = new (r("oz-player/shims/OzURI"))(n)),
          (this.$3 = o),
          (this.$5 = a),
          (this.$4 = i),
          (this.$8 = l
            .cloneContext()
            .setType(a === "video" || a === "audio" ? a + ";sidx" : "sidx")),
          (this.$10 = e));
      }
      var n = t.prototype;
      return (
        (n.onError = function (t) {
          return this.$6.onError(t);
        }),
        (n.parseInitializationSegment = function () {
          var t = this,
            n = this.$1.Initialization[0].$.range,
            o = e(n),
            a = new (r("oz-player/manifests/OzSegmentOptions"))();
          return this.$10.getBool("sidx_parser_memory_optimization")
            ? new (r("oz-player/manifests/OzZeroTimeRangeSegment"))(
                this.$2,
                o.startByte,
                o.endByte,
              )
            : {
                getData: function () {
                  return null;
                },
                getURI: function () {
                  return t.$2;
                },
                getTimeRange: function () {
                  return { startTime: 0, endTime: 0 };
                },
                getByteRange: function () {
                  return o;
                },
                getSequenceNumber: function () {
                  return null;
                },
                getOptions: function () {
                  return a;
                },
              };
        }),
        (n.parseSegmentsContainer = function () {
          var e = this,
            t = this.$11();
          return (
            o(
              "oz-player/loggings/OzLoggingUtils",
            ).monitorPromiseAndLogOperation(t, this.$8, "process_sidx"),
            t.catch(function (t) {
              e.$6.emitError(t);
            }),
            new (r("oz-player/parsers/OzSidxSegmentsContainer"))(function () {
              return e.$7;
            }, this.$9)
          );
        }),
        (n.$12 = function (t, n, a) {
          var e = new (r("oz-player/manifests/OzZeroTimeRangeSegment"))(
              t,
              n.startByte,
              n.endByte,
            ),
            i = this.$5 + ";sidx",
            l = this.$4.request({
              debugName: "OzSidxSegmentsParser/sidx/" + this.$5,
              segments: [e],
              pipeThroughRangeStreamProviders: [
                r(
                  "oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter",
                )(i, this.$4.getBandwidthEstimator()),
              ],
              loggerProvider: this.$8,
              requestOptions: {
                networkTimeoutMs: null,
                retryAttempts_SIDX_USE_ONLY: this.$10.getNumber(
                  "sidx_segment_retry_attempts",
                ),
                retryTimeoutMs_SIDX_USE_ONLY: this.$10.getNumber(
                  "sidx_segment_retry_interval_ms",
                ),
              },
              mediaStreamType: a,
            }),
            s = l.getStream().getReader();
          return o("oz-player/utils/OzReadableStreamUtils").pumpAllData(s);
        }),
        (n.$11 = function () {
          var t = this,
            n = this.$1.$.indexRange,
            a = e(n),
            i = [this.$12(this.$2, a, null)],
            l;
          if (this.$3 === "webm") {
            var s = e(this.$1.Initialization[0].$.range);
            (i.push(this.$12(this.$2, s, null)),
              (l = r("oz-player/shims/OzMaybeNativePromise")
                .all(i)
                .then(function (e) {
                  var n = e[0],
                    r = e[1];
                  t.$7 = o("oz-player/parsers/OzWebmSidxParser").parse(
                    t.$10,
                    t.$2,
                    n,
                    r,
                  );
                })));
          } else
            l = i[0].then(function (e) {
              t.$7 = o("oz-player/parsers/OzMp4SidxParser").parse(
                t.$10,
                t.$2,
                a.startByte,
                e,
              );
            });
          return l.then(function () {
            t.$9.emit("segment_updated");
          });
        }),
        t
      );
    })();
    l.default = s;
  },
  98,
);
