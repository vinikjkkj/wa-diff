__d(
  "oz-player/playback_controls/OzLiveLatencyManager",
  [
    "oz-player/playback_controls/OzSteadyStateManager",
    "oz-player/shims/OzDOMEventListener",
    "oz-player/shims/OzSubscriptionsHandler",
    "oz-player/shims/ozThrottle",
    "oz-player/utils/OzSourceBufferUtil",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = this;
        ((this.$8 = new (r("oz-player/shims/OzSubscriptionsHandler"))()),
          (this.$9 = null),
          (this.$10 = !1),
          (this.$11 = null),
          (this.$12 = null),
          (this.$13 = null),
          (this.$14 = !0));
        var n = e.bufferingDetector,
          o = e.config,
          a = e.getUserSelectedPlaybackRate,
          i = e.loggerProvider,
          l = e.mpd,
          s = e.playbackState,
          u = e.video;
        if (
          ((this.$1 = o),
          (this.$2 = l),
          (this.$3 = s),
          (this.$15 = a),
          o.getNumber("steadystate_minbuffer_buckets") > 0 &&
            (this.$7 = new (r(
              "oz-player/playback_controls/OzSteadyStateManager",
            ))(
              this.$1.getNumber("steadystate_minbuffer_buckets"),
              this.$1.getNumber("steadystate_minbuffer_buckets_sec"),
            )),
          n != null &&
            (this.$8.addSubscriptions(
              n.addListener("enterBuffering", function (e) {
                var n;
                if (e === "in_play") {
                  var r;
                  ((t.$9 = 0), (r = t.$7) == null || r.reset());
                }
                ((t.$10 = !1), (n = t.$6) == null || n.log(), (t.$6 = null));
              }),
            ),
            this.$8.addSubscriptions(
              n.addListener("leaveBuffering", function () {
                (t.$9 === 0 && (t.$9 = Date.now()), (t.$10 = !1));
              }),
            )),
          (this.$4 = u),
          (this.$5 = i),
          this.$16())
        ) {
          var c;
          this.$8.addSubscriptions(
            (c = r("oz-player/shims/OzDOMEventListener")).listenDOMEvent(
              this.$4,
              "timeupdate",
              r("oz-player/shims/ozThrottle")(function () {
                (t.$17(), t.$18());
              }, this.$1.getNumber("playhead_manager_timeupdate_throttle_ms")),
            ),
            c.listenDOMEvent(this.$4, "waiting", function () {
              t.$17();
            }),
            c.listenDOMEvent(this.$4, "durationchange", function () {
              t.$17();
            }),
            c.listenDOMEvent(this.$4, "seeking", function () {
              var e;
              ((t.$13 = Date.now()),
                (t.$11 = null),
                (e = t.$7) == null || e.reset());
            }),
            c.listenDOMEvent(this.$4, "playing", function () {
              ((t.$13 = Date.now()), (t.$11 = null));
            }),
            c.listenDOMEvent(u, "pause", function () {
              var e;
              return (e = t.$7) == null ? void 0 : e.reset();
            }),
          );
        }
      }
      var t = e.prototype;
      return (
        (t.enabled = function () {
          var e = this.$1.getNumber("catchup_timeout_after_buffering_sec");
          return (
            e === 0 ||
            this.$9 == null ||
            (this.$9 !== 0 && this.$9 + e * 1e3 <= Date.now())
          );
        }),
        (t.isBehindPreferredLiveHeadLatencyWithTolerance = function () {
          return (
            this.$3.getCurrentTime() <
            this.getInitialPlayHeadPosition() -
              this.getPreferredLiveHeadLatencyToleranceSec()
          );
        }),
        (t.$19 = function () {
          return this.$3.getCurrentTime() < this.getInitialPlayHeadPosition();
        }),
        (t.$20 = function () {
          var e,
            t = (e = this.$7) == null ? void 0 : e.min();
          return (
            !this.$21() &&
            t != null &&
            t > this.$1.getNumber("steadystate_minbuffer_sec")
          );
        }),
        (t.getInitialPlayHeadPosition = function () {
          return (
            this.getLiveHeadTimeSec() - this.getPreferredLiveHeadLatencySec()
          );
        }),
        (t.getLiveHeadTimeSec = function () {
          var e,
            t = this.$22();
          return (
            (t == null || (e = t.getEndingSegment()) == null
              ? void 0
              : e.getTimeRange().endTime) || 0
          );
        }),
        (t.$21 = function () {
          return (
            this.$9 != null &&
            this.$1.getBool("latencymanager_stalled_edgelatency_sec_on")
          );
        }),
        (t.getPreferredLiveHeadLatencySec = function () {
          var e = this.$21()
              ? this.$1.getNumber("latencymanager_stalled_edgelatency_sec")
              : this.$1.getNumber(
                  "pdash_download_cursor_catchup_threshold_sec",
                ),
            t = this.$23(e);
          return (
            this.$5
              .getOperationLogger("latency_manager")
              .setPreferredEdgeLatency(t * 1e3),
            t
          );
        }),
        (t.getPreferredLiveHeadLatencyToleranceSec = function () {
          return this.$1.getNumber(
            "pdash_download_cursor_catchup_tolerance_sec",
          );
        }),
        (t.shouldEnableManifestTimeRangeCatchup = function () {
          return !this.$1.getNumber(
            "pdash_download_cursor_catchup_threshold_sec",
          );
        }),
        (t.shouldEnableCursorBasedCatchup = function () {
          var e = this.$2.getVideoRepresentations()[0],
            t = e && e.canPredict();
          return (
            t &&
            this.$1.getNumber("pdash_download_cursor_catchup_threshold_sec") > 0
          );
        }),
        (t.setEnableCatchup = function (t) {
          var e = this.$14;
          (!this.$14 && t === !0 && (this.$9 = null),
            (this.$14 = t),
            this.$1.getBool("fix_live_rewind_user_selected_playback_speed") &&
              t !== e &&
              this.$18());
        }),
        (t.$24 = function (t, n, r) {
          var e = this.$1.getNumber("playback_speed_min_sharpness_factor"),
            o = (t * 2) / (1 + Math.pow(Math.E, -(r - n) * e));
          return 1 - t + o;
        }),
        (t.$16 = function () {
          return (
            !this.$1.getBool("playback_speed_latency_adjustment_disabled") &&
            (this.$1.getNumber("playback_speed_latency_adjustment_rate") > 0 ||
              this.$1.getNumber(
                "playback_speed_latency_slowdown_adjustment_rate",
              ) > 0 ||
              this.$1.getNumber(
                "playback_speed_latency_speedup_adjustment_rate",
              ) > 0)
          );
        }),
        (t.$17 = function () {
          var e,
            t = o(
              "oz-player/utils/OzSourceBufferUtil",
            ).getBufferAheadInBufferedRanges(
              o(
                "oz-player/utils/OzSourceBufferUtil",
              ).convertToBufferedTimeRangeArray(this.$4.buffered),
              this.$3.getCurrentTime(),
              this.$1,
            ).bufferAheadSec;
          (e = this.$7) == null || e.addSample(t);
        }),
        (t.$18 = function () {
          var e = o(
              "oz-player/utils/OzSourceBufferUtil",
            ).getBufferAheadInBufferedRanges(
              o(
                "oz-player/utils/OzSourceBufferUtil",
              ).convertToBufferedTimeRangeArray(this.$4.buffered),
              this.$3.getCurrentTime(),
              this.$1,
            ),
            t = e.bufferAheadSec,
            n = e.bufferedOffset;
          this.$25(t, n);
        }),
        (t.$25 = function (t, n) {
          var e = this.$1.getNumber("playback_speed_enabled_delay_sec"),
            r = this.$1.getNumber("playback_speed_min_buffer_sec");
          t > r && (this.$10 = !0);
          var o = this.$1.getNumber("playback_speed_min_duration_sec"),
            a = this.$1.getNumber("playback_speed_restore_min_duration_sec"),
            i = this.$1.getNumber("playback_speed_latency_adjustment_rate"),
            l = this.$1.getNumber(
              "playback_speed_latency_slowdown_adjustment_rate",
            ),
            s = this.$1.getNumber(
              "playback_speed_latency_speedup_adjustment_rate",
            );
          if (this.$4.playbackRate === 0) {
            var u;
            ((u = this.$6) == null || u.log(), (this.$6 = null));
          } else if (
            this.$14 &&
            this.$10 &&
            t < r &&
            (i > 0 || l > 0) &&
            n === 0 &&
            (e === 0 || (this.$13 != null && this.$13 + e * 1e3 < Date.now()))
          ) {
            var c = l > 0 ? 1 - l : this.$24(i, r, t);
            (this.$6 == null &&
              (this.$6 = this.$5
                .getOperationLogger("latency_manager")
                .start()
                .setInitiator("speed_adjustment")
                .setReason("slow")
                .setUserInfo({
                  newPlaybackRate: String(c),
                  oldPlaybackRate: String(this.$4.playbackRate),
                })),
              this.$26(c));
          } else if (
            this.$14 &&
            this.$10 &&
            (this.$19() || this.$20()) &&
            s > 0 &&
            n === 0 &&
            (this.$12 == null || this.$12 + a * 1e3 < Date.now()) &&
            (e === 0 || (this.$13 != null && this.$13 + e * 1e3 < Date.now()))
          ) {
            var d = 1 + s;
            (this.$6 == null &&
              (this.$6 = this.$5
                .getOperationLogger("latency_manager")
                .start()
                .setInitiator("speed_adjustment")
                .setReason("fast")
                .setUserInfo({
                  newPlaybackRate: String(d),
                  oldPlaybackRate: String(this.$4.playbackRate),
                })),
              this.$26(d));
          } else if (
            this.$14 === !1 ||
            this.$11 == null ||
            this.$11 + o * 1e3 < Date.now()
          ) {
            var m,
              p = this.$4.playbackRate;
            (this.$1.getBool("fix_live_rewind_user_selected_playback_speed")
              ? (this.$4.playbackRate = this.$14 === !1 ? this.$15() : 1)
              : (this.$4.playbackRate = 1),
              (m = this.$6) == null || m.log(),
              (this.$6 = null),
              p !== this.$4.playbackRate && (this.$12 = Date.now()));
          }
        }),
        (t.$26 = function (t) {
          try {
            ((this.$4.playbackRate = t), (this.$11 = Date.now()));
          } catch (t) {
            var e;
            ((e = this.$6) == null || e.setError(t).setResult("failed").log(),
              (this.$6 = null));
          }
        }),
        (t.$22 = function () {
          var e = this.$2
            .getVideoRepresentations()
            .concat(this.$2.getAudioRepresentations());
          return e.length === 0
            ? null
            : e.reduce(function (e, t) {
                var n, r;
                return (((n = e.getEndingSegment()) == null
                  ? void 0
                  : n.getTimeRange().endTime) || 0) >
                  (((r = t.getEndingSegment()) == null
                    ? void 0
                    : r.getTimeRange().endTime) || 0)
                  ? e
                  : t;
              });
        }),
        (t.$23 = function (t) {
          var e, n;
          if (t <= 0) return t;
          var r = this.$22(),
            o =
              r == null || (e = r.getEndingSegment()) == null
                ? void 0
                : e.getTimeRange();
          if (!o) return t;
          var a =
            r == null ||
            (n = r.getSegmentByTime((o == null ? void 0 : o.endTime) - t)) ==
              null
              ? void 0
              : n.getTimeRange();
          return a
            ? (o == null ? void 0 : o.endTime) -
                (a == null ? void 0 : a.startTime)
            : t;
        }),
        (t.destroy = function () {
          this.$8.release();
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
