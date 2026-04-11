__d(
  "oz-player/playback_controls/OzPlaybackTimeRangeManager",
  [
    "oz-player/shims/OzSubscriptionsHandler",
    "oz-player/utils/OzBufferingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t = this;
        ((this.$4 = null),
          (this.$5 = 0),
          (this.$6 = 0),
          (this.$7 = !0),
          (this.$8 = 0),
          (this.$9 = 0),
          (this.$10 = !1),
          (this.$12 = 0),
          (this.$13 = 0),
          (this.$15 = new (r("oz-player/shims/OzSubscriptionsHandler"))()),
          (this.$17 = function () {
            t.$10 != t.$14.isPlaying() &&
              (t.$14.isPlaying() && (t.$11 = Date.now()),
              (t.$10 = t.$14.isPlaying()));
          }));
        var n = e.config,
          o = e.liveheadFallBehindBlockMargin,
          a = e.liveheadFallBehindBlockThreshold,
          i = e.mpd,
          l = e.perfLoggerProvider,
          s = e.playbackState,
          u = e.video;
        ((this.$1 = n),
          (this.$2 = u),
          (this.$3 = i),
          (this.$8 = a),
          (this.$9 = o),
          (this.$14 = s),
          (this.$16 = l),
          this.$1.getNumber("catchup_timeout_after_play_sec") !== 0 &&
            this.$15.addSubscriptions(
              this.$14.addEventListener("play", this.$17),
              this.$14.addEventListener("pause", this.$17),
            ));
      }
      var t = e.prototype;
      return (
        (t.setTimelineBlockingEnabled = function (t) {
          ((this.$7 = t), this.$7 || this.$3.unblockTimeRange());
        }),
        (t.setTimeRangeProvider = function (t) {
          var e = this;
          (this.$4 != null && this.$4.remove(),
            (this.$4 = t.addUpdateListener(function () {
              var n = t.getTimeRanges(),
                r = 0;
              if (n.length !== 0) {
                var o = n[n.length - 1];
                r = o.endTime;
              }
              e.$18(r);
            })));
        }),
        (t.$18 = function (t) {
          var e;
          if (
            this.$7 &&
            this.$5 !== t &&
            ((this.$5 = t), !(this.$2.currentTime <= this.$6))
          ) {
            var n = this.$1.getBool(
                "catchup_use_timeline_range_end_time_as_end",
              )
                ? t
                : this.$2.duration,
              r =
                this.$1.getNumber(
                  "overwrite_livehead_fall_behind_block_threshold",
                ) !== 0
                  ? this.$1.getNumber(
                      "overwrite_livehead_fall_behind_block_threshold",
                    )
                  : this.$8,
              a =
                this.$1.getNumber("overwrite_live_time_range_block_margin") !==
                0
                  ? this.$1.getNumber("overwrite_live_time_range_block_margin")
                  : this.$9;
            (this.$17(),
              this.$1.getBool(
                "reset_catchup_timeout_after_play_sec_on_overwrite",
              ) &&
                (this.$13 != a || this.$12 != r) &&
                ((this.$13 = a), (this.$12 = r), (this.$11 = Date.now())));
            var i =
              this.$1.getNumber("catchup_timeout_after_play_sec") === 0 ||
              Date.now() - ((e = this.$11) != null ? e : 0) <
                this.$1.getNumber("catchup_timeout_after_play_sec") * 1e3;
            if (
              i &&
              this.$1.getNumber(
                "pdash_download_cursor_catchup_threshold_sec",
              ) === 0 &&
              a !== 0 &&
              r !== 0 &&
              n - this.$2.currentTime > r
            ) {
              for (var l = [], s = 0; s < this.$2.buffered.length; s++)
                l.push({
                  startTime: this.$2.buffered.start(s),
                  endTime: this.$2.buffered.end(s),
                });
              var u = o(
                "oz-player/utils/OzBufferingUtils",
              ).getBufferAheadFromCurrentTime(this.$2.currentTime, l);
              this.$6 = this.$2.currentTime + Math.min(u, a);
              var c = { startTime: this.$6, endTime: n - a };
              (this.$16
                .getOperationLogger("latency_manager")
                .setInitiator("time_range_manager")
                .setReason("blocked_range")
                .setLength(c.endTime - c.startTime)
                .setUserInfo({
                  blockedRangeStart: String(c.startTime),
                  blockedRangeEnd: String(c.endTime),
                })
                .log(),
                this.$3.blockTimeRange(c));
            }
          }
        }),
        (t.destroy = function () {
          (this.$4 != null && (this.$4.remove(), (this.$4 = null)),
            this.$15.release());
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
