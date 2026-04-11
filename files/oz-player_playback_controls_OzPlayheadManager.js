__d(
  "oz-player/playback_controls/OzPlayheadManager",
  [
    "oz-player/shims/OzDOMEventListener",
    "oz-player/shims/OzEventEmitter",
    "oz-player/shims/OzSubscriptionsHandler",
    "oz-player/shims/ozThrottle",
    "oz-player/shims/ozvariant",
    "oz-player/strategies/LiveheadSeekaheadStrategy",
    "oz-player/utils/OzNumericalRangeUtil",
    "oz-player/utils/OzSourceBufferUtil",
    "oz-player/utils/OzTimelineGapUtil",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
        function e(e) {
          ((this.$1 = e.perfLoggerProvider),
            (this.$2 = e.video),
            (this.$4 = e.config));
        }
        var t = e.prototype;
        return (
          (t.markState = function (t, n) {
            var e = o(
                "oz-player/utils/OzSourceBufferUtil",
              ).convertToBufferedTimeRangeArray(this.$2.buffered),
              r = this.$3;
            if (r == null) {
              this.$3 = e;
              return;
            }
            var a = o(
                "oz-player/utils/OzSourceBufferUtil",
              ).getBufferAheadInBufferedRanges(e, n.getCurrentTime(), this.$4),
              i = o(
                "oz-player/utils/OzSourceBufferUtil",
              ).getBufferAheadInBufferedRanges(r, n.getCurrentTime(), this.$4);
            (i.bufferedOffset !== -1 &&
              a.bufferedOffset === -1 &&
              this.$1
                .getOperationLogger("playhead_adjustment")
                .setError("buffer_deleted")
                .setResult("failed")
                .setUserInfo({
                  vidSeeking: String(this.$2.seeking),
                  vidErrCode: this.$2.error ? String(this.$2.error.code) : null,
                })
                .setInitiator(t)
                .log(),
              (this.$3 = e));
          }),
          e
        );
      })(),
      s = (function () {
        function e(e) {
          ((this.$5 = !1),
            (this.$6 = {}),
            (this.$1 = e.perfLoggerProvider),
            (this.$2 = e.video));
        }
        var t = e.prototype;
        return (
          (t.markState = function (t, n) {
            var e = this;
            if (this.$2.paused) {
              ((this.$3 = null),
                (this.$4 = null),
                (this.$5 = !1),
                (this.$6 = {}));
              return;
            }
            ((this.$3 == null || this.$2.currentTime > this.$3) &&
              ((this.$4 = Date.now()),
              (this.$3 = this.$2.currentTime),
              (this.$5 = !1),
              (this.$6 = {})),
              (this.$6[t] = this.$6[t] == null ? 1 : this.$6[t] + 1));
            var r = this.$4;
            if (
              !this.$5 &&
              !this.$2.paused &&
              r != null &&
              r + 1e4 < Date.now()
            ) {
              this.$5 = !0;
              var o = {};
              (Object.keys(this.$6).forEach(function (t) {
                o[t] = String(e.$6[t]);
              }),
                this.$1
                  .getOperationLogger("playhead_adjustment")
                  .setError("not_advancing")
                  .setResult("failed")
                  .setLength(Date.now() - r)
                  .setUserInfo(
                    babelHelpers.extends({}, o, n, {
                      lastCurrentTime: String(this.$3),
                      lastCurrentTimeChanged: String(r - Date.now()),
                      vidSeeking: String(this.$2.seeking),
                      vidErrCode: this.$2.error
                        ? String(this.$2.error.code)
                        : null,
                    }),
                  )
                  .setInitiator(t)
                  .log());
            }
          }),
          e
        );
      })(),
      u = (function (t) {
        function n(n) {
          var a;
          ((a = t.call(this) || this),
            (a.$OzPlayheadManager$p_2 = new (r(
              "oz-player/shims/OzSubscriptionsHandler",
            ))()),
            (a.$OzPlayheadManager$p_3 = new (r(
              "oz-player/shims/OzSubscriptionsHandler",
            ))()),
            (a.$OzPlayheadManager$p_4 = new Set()),
            (a.$OzPlayheadManager$p_10 = new Set()),
            (a.$OzPlayheadManager$p_12 = function (e) {
              a.$OzPlayheadManager$p_1.currentTime = e;
            }),
            (a.$OzPlayheadManager$p_14 = !1),
            (a.$OzPlayheadManager$p_15 = !1),
            (a.$OzPlayheadManager$p_16 = !0),
            (a.$OzPlayheadManager$p_17 = !1),
            (a.$OzPlayheadManager$p_23 = function (e, t) {
              if (
                (t === void 0 && (t = null),
                !(
                  a.$OzPlayheadManager$p_20 != null &&
                  !a.$OzPlayheadManager$p_20.shouldEnableManifestTimeRangeCatchup()
                ))
              ) {
                var n = a.$OzPlayheadManager$p_9;
                if (
                  n &&
                  n.isEnabled(
                    a.$OzPlayheadManager$p_1,
                    a.$OzPlayheadManager$p_8,
                  )
                ) {
                  var r = n.computeNewPlayheadPosition(
                    a.$OzPlayheadManager$p_1,
                    a.$OzPlayheadManager$p_8,
                  );
                  if (typeof r == "number") {
                    a.$OzPlayheadManager$p_27(
                      r,
                      "live_catch_up_strategy",
                      e,
                      t,
                    );
                    return;
                  }
                }
                var i = a.$OzPlayheadManager$p_6.getNumber(
                  "auto_seek_playhead_slack",
                );
                if (i !== 0) {
                  var l = a.$OzPlayheadManager$p_5;
                  if (l) {
                    var s = a.$OzPlayheadManager$p_7.getCurrentTime(),
                      u = l.getTimeRanges().map(function (e) {
                        return { rangeStart: e.startTime, rangeEnd: e.endTime };
                      }),
                      c = o(
                        "oz-player/utils/OzNumericalRangeUtil",
                      ).findNextRangeIndex(s, u);
                    if (
                      (o("oz-player/utils/OzTimelineGapUtil").isNearGap(
                        s,
                        l.getTimeRanges(),
                        a.$OzPlayheadManager$p_6,
                      ) ||
                        o("oz-player/utils/OzTimelineGapUtil").isInGap(
                          s,
                          l.getTimeRanges(),
                          a.$OzPlayheadManager$p_6,
                        )) &&
                      c !== -1
                    ) {
                      var d = u[c];
                      a.$OzPlayheadManager$p_27(
                        d.rangeStart + i,
                        "jump_over_timeline_gap",
                        e,
                        t,
                      );
                    }
                  }
                }
              }
            }));
          var i = n.canSupportSkipVideobufferGaps,
            l = n.config,
            u = n.dynamicVideoLibrary,
            c = n.initialPlaybackPosition,
            d = n.liveLatencyManager,
            m = n.mpd,
            p = n.perfLoggerProvider,
            _ = n.playbackState,
            f = n.playheadCatchup,
            g = n.seekHandler,
            h = n.video;
          return (
            (a.$OzPlayheadManager$p_1 = h),
            (a.$OzPlayheadManager$p_6 = l),
            (a.$OzPlayheadManager$p_7 = _),
            (a.$OzPlayheadManager$p_8 = m),
            (a.$OzPlayheadManager$p_9 = f),
            (a.$OzPlayheadManager$p_11 = p),
            g && (a.$OzPlayheadManager$p_12 = g),
            (a.$OzPlayheadManager$p_17 = i),
            (a.$OzPlayheadManager$p_20 = d),
            (a.$OzPlayheadManager$p_13 = c),
            (a.$OzPlayheadManager$p_21 = u),
            (a.$OzPlayheadManager$p_18 = new s({
              video: h,
              perfLoggerProvider: p,
            })),
            (a.$OzPlayheadManager$p_19 = new e({
              video: h,
              perfLoggerProvider: p,
              config: l,
            })),
            a.$OzPlayheadManager$p_2.addSubscriptions(
              r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
                a.$OzPlayheadManager$p_1,
                "durationchange",
                function () {
                  (a.setPlaybackPositionOnFirstDurationChange(
                    "durationchange",
                    a.$OzPlayheadManager$p_1.duration,
                  ),
                    a.$OzPlayheadManager$p_23("durationchange"),
                    a.$OzPlayheadManager$p_24("durationchange"));
                },
              ),
              r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
                a.$OzPlayheadManager$p_1,
                "pause",
                function () {
                  a.$OzPlayheadManager$p_23("pause");
                },
              ),
              r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
                a.$OzPlayheadManager$p_1,
                "play",
                function () {
                  a.$OzPlayheadManager$p_23("play");
                },
              ),
              r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
                a.$OzPlayheadManager$p_1,
                "playing",
                function () {
                  a.$OzPlayheadManager$p_23("playing");
                },
              ),
              r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
                a.$OzPlayheadManager$p_1,
                "waiting",
                function () {
                  a.$OzPlayheadManager$p_24("waiting");
                },
              ),
              r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
                a.$OzPlayheadManager$p_1,
                "timeupdate",
                r("oz-player/shims/ozThrottle")(function () {
                  (a.$OzPlayheadManager$p_23("timeupdate"),
                    a.$OzPlayheadManager$p_6.getBool(
                      "playhead_manager_buffered_timerange_update_on_timeupdate",
                    ) && a.$OzPlayheadManager$p_24("timeupdate"));
                }, a.$OzPlayheadManager$p_6.getNumber("playhead_manager_timeupdate_throttle_ms")),
              ),
              r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
                a.$OzPlayheadManager$p_1,
                "seeking",
                function () {
                  a.$OzPlayheadManager$p_22 = Date.now();
                },
              ),
            ),
            a
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.$OzPlayheadManager$p_25 = function () {
            return this.$OzPlayheadManager$p_1.playbackRate === 0;
          }),
          (a.observeSourceBufferState = function (t, n) {
            var e = this;
            (!this.$OzPlayheadManager$p_4.has(t) ||
              r("oz-player/shims/ozvariant")(0, 4179),
              this.$OzPlayheadManager$p_4.add(t),
              this.$OzPlayheadManager$p_2.addSubscriptions(
                t.addEventListener("buffer_updated", function () {
                  (e.$OzPlayheadManager$p_26(t, n),
                    e.$OzPlayheadManager$p_6.getBool(
                      "skip_videobuffer_gaps_on_buffer_updated",
                    ) &&
                      e.$OzPlayheadManager$p_17 &&
                      e.$OzPlayheadManager$p_24("buffer_updated"));
                }),
              ));
          }),
          (a.$OzPlayheadManager$p_26 = function (t, n) {
            var e = [];
            (this.$OzPlayheadManager$p_4.forEach(function (t) {
              var n = t.getBufferedRanges();
              n.length && e.push(n[0]);
            }),
              e.length > 0 && this.$OzPlayheadManager$p_10.add(t));
            var r = this.$OzPlayheadManager$p_1.currentTime,
              a = o(
                "oz-player/strategies/LiveheadSeekaheadStrategy",
              ).computeSeekAhead(r, e),
              i = this.$OzPlayheadManager$p_6.getNumber(
                "timeline_offset_threshold",
              );
            a > 0 &&
              (i === 0 || a < i) &&
              this.$OzPlayheadManager$p_27(
                this.$OzPlayheadManager$p_1.currentTime + a,
                "first_available_buffer",
                "source_buffer",
                n,
              );
          }),
          (a.setTimeRangeProvider = function (t) {
            var e = this;
            (this.$OzPlayheadManager$p_3.release(),
              this.$OzPlayheadManager$p_3.engage(),
              this.$OzPlayheadManager$p_3.addSubscriptions(
                t.addUpdateListener(function () {
                  e.$OzPlayheadManager$p_23("time_range_updated");
                }),
              ),
              (this.$OzPlayheadManager$p_5 = t),
              this.$OzPlayheadManager$p_23("time_range_set"));
          }),
          (a.resetCurrentTime = function () {
            ((this.$OzPlayheadManager$p_15 = !1),
              this.setPlaybackPositionOnFirstDurationChange(
                "reset",
                this.$OzPlayheadManager$p_1.duration,
              ));
          }),
          (a.setPlaybackPositionOnFirstDurationChange = function (t, n) {
            if (
              this.$OzPlayheadManager$p_13 !== 0 &&
              !this.$OzPlayheadManager$p_15 &&
              !isNaN(n) &&
              n !== 1 / 0
            ) {
              var e =
                this.$OzPlayheadManager$p_13 > 0
                  ? this.$OzPlayheadManager$p_13
                  : n + this.$OzPlayheadManager$p_13;
              if (this.$OzPlayheadManager$p_20 != null) {
                var r;
                e =
                  (r = this.$OzPlayheadManager$p_20) == null
                    ? void 0
                    : r.getInitialPlayHeadPosition();
              }
              if (
                ((this.$OzPlayheadManager$p_15 = !0),
                this.$OzPlayheadManager$p_6.getBool(
                  "playhead_manager_clamp_initial_playback_position",
                ))
              ) {
                var o,
                  a =
                    (o = this.$OzPlayheadManager$p_5) == null
                      ? void 0
                      : o.getTimeRanges();
                a != null &&
                  a.length > 0 &&
                  a[0].startTime > e &&
                  (e = a[0].startTime);
              }
              (this.$OzPlayheadManager$p_27(e, "initial_playback_position", t),
                this.emit("initialPlaybackPositionSet", e));
            }
          }),
          (a.$OzPlayheadManager$p_24 = function (t) {
            var e,
              n,
              r = this;
            if (
              this.$OzPlayheadManager$p_6.getBool("skip_videobuffer_gaps") &&
              this.$OzPlayheadManager$p_17
            ) {
              var a = this.$OzPlayheadManager$p_6.getNumber(
                "playhead_manager_buffered_auto_seek_playhead_slack",
              );
              if (a !== 0) {
                for (
                  var i = this.$OzPlayheadManager$p_7.getCurrentTime(),
                    l = [],
                    s = 0;
                  s < this.$OzPlayheadManager$p_1.buffered.length;
                  s++
                )
                  l.push({
                    startTime: this.$OzPlayheadManager$p_1.buffered.start(s),
                    endTime: this.$OzPlayheadManager$p_1.buffered.end(s),
                  });
                var u = l.map(function (e) {
                  return { rangeStart: e.startTime, rangeEnd: e.endTime };
                });
                this.$OzPlayheadManager$p_19 &&
                  this.$OzPlayheadManager$p_19.markState(
                    t,
                    this.$OzPlayheadManager$p_7,
                  );
                var c = o(
                    "oz-player/utils/OzNumericalRangeUtil",
                  ).findNextRangeIndex(i, u),
                  d = o(
                    "oz-player/utils/OzNumericalRangeUtil",
                  ).findCurrentRangeIndex(this.$OzPlayheadManager$p_6, i, u),
                  m = this.$OzPlayheadManager$p_16
                    ? 0
                    : this.$OzPlayheadManager$p_6.getNumber(
                        "skip_videobuffer_gaps_max_gap_size_sec",
                      ),
                  p = this.$OzPlayheadManager$p_6.getNumber(
                    "playhead_manager_buffered_is_near_gap_threshold",
                  ),
                  _ = this.$OzPlayheadManager$p_6.getNumber(
                    "playhead_manager_buffered_numerical_error",
                  ),
                  f =
                    (e = this.$OzPlayheadManager$p_21) == null
                      ? void 0
                      : e.getLastSegmentStartPTS(),
                  g = f != null ? f / 1e3 : null,
                  h =
                    (n = this.$OzPlayheadManager$p_21) == null
                      ? void 0
                      : n.getLast200RequestedUrlDecisionMinTime(),
                  y =
                    g != null
                      ? o(
                          "oz-player/utils/OzNumericalRangeUtil",
                        ).findCurrentRangeIndex(
                          this.$OzPlayheadManager$p_6,
                          g,
                          u,
                        )
                      : -1,
                  C = y >= 0 ? u[y] : null,
                  b = function (n) {
                    var e =
                      r.$OzPlayheadManager$p_22 == null ||
                      h == null ||
                      r.$OzPlayheadManager$p_22 < h;
                    return (
                      !e &&
                        n != null &&
                        r.$OzPlayheadManager$p_11
                          .getOperationLogger("playhead_adjustment")
                          .setError("ignore_before_seek_main_" + n)
                          .setResult("failed")
                          .setInitiator(t)
                          .setUserInfo({
                            last200RequestedUrlDecisionMinTime: String(h),
                            lastSeekTime: String(r.$OzPlayheadManager$p_22),
                          })
                          .log(),
                      e
                    );
                  };
                if (
                  g != null &&
                  this.$OzPlayheadManager$p_25() &&
                  this.$OzPlayheadManager$p_16 == !1 &&
                  b("buf")
                ) {
                  if (
                    g < i &&
                    C != null &&
                    C.rangeStart <= g &&
                    C.rangeEnd != null &&
                    C.rangeEnd > g
                  ) {
                    this.$OzPlayheadManager$p_27(
                      g,
                      "reverse_jump_over_buffer_gap",
                      t,
                      null,
                      {
                        lastSegmentStartPTS: String(f),
                        last200RequestedUrlDecisionMinTime: String(h),
                        lastSeekTime: String(this.$OzPlayheadManager$p_22),
                      },
                    );
                    return;
                  }
                  if (C != null && y != d) {
                    this.$OzPlayheadManager$p_27(
                      C.rangeStart,
                      "jump_over_buffer_gap_last_dl_range",
                      t,
                      null,
                      {
                        lastSegmentStartPTS: String(f),
                        last200RequestedUrlDecisionMinTime: String(h),
                        lastSeekTime: String(this.$OzPlayheadManager$p_22),
                      },
                    );
                    return;
                  }
                }
                if (
                  (o("oz-player/utils/OzTimelineGapUtil").isNearGap(
                    i,
                    l,
                    this.$OzPlayheadManager$p_6,
                    _,
                    p,
                  ) ||
                    o("oz-player/utils/OzTimelineGapUtil").isInGap(
                      i,
                      l,
                      this.$OzPlayheadManager$p_6,
                      _,
                    )) &&
                  c !== -1 &&
                  (m === 0 || u[c].rangeStart - i < m) &&
                  (this.$OzPlayheadManager$p_16 == !0 || b("main"))
                ) {
                  var v = u[c];
                  this.$OzPlayheadManager$p_6.getBool(
                    "enable_alternative_audio_tracks",
                  ) &&
                  this.$OzPlayheadManager$p_8.isStaticMpd() &&
                  v.rangeStart !== 0 &&
                  v.rangeEnd === this.$OzPlayheadManager$p_7.getDuration()
                    ? this.$OzPlayheadManager$p_27(
                        0,
                        "do_not_jump_over_buffer_gap",
                        t,
                        null,
                        {
                          lastSegmentStartPTS: String(f),
                          last200RequestedUrlDecisionMinTime: String(h),
                          lastSeekTime: String(this.$OzPlayheadManager$p_22),
                        },
                      )
                    : this.$OzPlayheadManager$p_27(
                        v.rangeStart + a,
                        "jump_over_buffer_gap",
                        t,
                        null,
                        {
                          lastSegmentStartPTS: String(f),
                          last200RequestedUrlDecisionMinTime: String(h),
                          lastSeekTime: String(this.$OzPlayheadManager$p_22),
                        },
                      );
                  return;
                }
                this.$OzPlayheadManager$p_18 &&
                  this.$OzPlayheadManager$p_18.markState(t, {
                    nextBufferedRangeIndex: String(c),
                    limitMaxGapSize: String(m),
                    rangeStart: c !== -1 ? String(u[c].rangeStart) : null,
                    isNearGapThreshold: String(p),
                    numericalError: String(_),
                  });
              }
            }
          }),
          (a.setEnableLiveheadCatchup = function (t) {
            this.$OzPlayheadManager$p_16 = t;
          }),
          (a.destroy = function () {
            (this.$OzPlayheadManager$p_2.release(),
              this.$OzPlayheadManager$p_3.release(),
              this.$OzPlayheadManager$p_4.clear());
          }),
          (a.$OzPlayheadManager$p_27 = function (t, n, r, o, a) {
            var e = t - this.$OzPlayheadManager$p_1.currentTime,
              i = this.$OzPlayheadManager$p_6.getNumber("seek_ahead_epsilon");
            (i > 0 && Math.abs(e) <= i) ||
              (this.$OzPlayheadManager$p_11
                .getOperationLogger("playhead_adjustment")
                .setLength(Math.round(t * 1e3))
                .setReason(n)
                .setInitiator(r)
                .setType(o)
                .setUserInfo(
                  babelHelpers.extends({}, a, {
                    seekAdjustment: String(Math.round(e * 1e3)),
                  }),
                )
                .log(),
              this.$OzPlayheadManager$p_12(t),
              n === "initial_playback_position" &&
                (this.$OzPlayheadManager$p_14 = !0));
          }),
          n
        );
      })(r("oz-player/shims/OzEventEmitter"));
    l.default = u;
  },
  98,
);
