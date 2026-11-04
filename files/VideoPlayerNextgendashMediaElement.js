__d(
  "VideoPlayerNextgendashMediaElement",
  [
    "VideoPlayerNextgendashMediaUtils",
    "VideoPlayerNextgendashStateMachine",
    "deepEquals",
    "nextgendasherr",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["currentTime", "seeking"],
      s = ["currentTime", "seeking"],
      u = 200;
    function c(e, t, n) {
      return (
        e.some(function (e) {
          return e[0] <= t && t >= e[1] - n && t <= e[1];
        }) &&
        e.some(function (e) {
          return e[0] > t;
        })
      );
    }
    function d(e) {
      var t = e.bufferedRangeCount,
        n = e.ended,
        r = e.frozenMs,
        o = e.hasError,
        a = e.isLivePlayback,
        i = e.paused,
        l = e.seeking,
        s = e.thresholdMs;
      return a && s > 0 && l && !o && !i && !n && t > 0 && r >= s;
    }
    var m = 0.5;
    function p(e, t, n) {
      return e ? n : t;
    }
    function _(e) {
      return e > m;
    }
    var f = 0.02;
    function g(e) {
      var t = e.isLivePlayback,
        n = e.lastNudgeTargetSec,
        r = e.nudged,
        o = e.playheadSec,
        a = e.playheadSecPrev,
        i = e.prevNudges;
      return r
        ? i + 1
        : o === a || (t && n != null && Math.abs(o - n) <= f)
          ? i
          : 0;
    }
    function h(e, t) {
      return e.some(function (e) {
        return o("VideoPlayerNextgendashMediaUtils").isWithinRange(e, t, 0);
      });
    }
    var y = o("VideoPlayerNextgendashStateMachine").defineStateMachine(
      null,
      function () {
        return {
          consecutiveNudges: 0,
          enteredBufferingFromPlayback: !1,
          isBuffering: !1,
          isBufferingInitial: !0,
          lastBufferingEndPerfMs: null,
          lastNonZeroNonErrorCurrentTimeSec: null,
          lastPlayheadSyncPerfMs: null,
          lastStallNudgeTargetSec: null,
          mediaElement: null,
          mediaElementSnapshot: null,
          mediaElementSnapshotBeforeErrorOccurred: null,
          mediaElementSnapshotClock: null,
          mediaElementUnsubscribe: null,
          mediaSource: null,
          mediaSourceHandle: null,
          mediaSourceIndex: null,
          playheadLastMovedClock: null,
          playheadLastObserved: null,
          playheadWatchdogTimer: null,
          state: "idle",
        };
      },
      function (t) {
        var n = t.args,
          a = n.getWorkaroundForSegmentBufferedInsufficientlyMediaTimeRanges,
          i = n.logPlayerWarning,
          l = n.onBufferingChanged,
          c = n.onDeliberateDetachForUnmount,
          d = n.onMediaSourceAttachedChanged,
          m = n.onRequestRecoveryFromSourceReset,
          p = t.env,
          _ = t.event,
          f = t.eventClock,
          g = t.sendToSelf,
          h = t.state,
          y = t.thisName,
          v = t.thisSm,
          S = function () {
            g({ type: "_playhead_watchdog" });
          },
          R = function (t, n, r) {
            var e = h.mediaElement;
            if (e != null) {
              if (p.config.disableBufferGapSkipping) {
                i(
                  o("nextgendasherr").nextgendasherr(
                    p,
                    "VideoPlayerNextgendashMediaElementBufferGapSkipDisabled",
                    "Buffers: %s, playhead: %s, would have skipped to: %s, reason: %s",
                    JSON.stringify(n.buffered),
                    n.currentTime,
                    t,
                    r,
                  ),
                );
                return;
              }
              p.host.mediaElementSetPlayhead(p, e, t);
              var a = t - n.currentTime;
              a >= p.config.gapSkipMinLogThresholdSec &&
                i(
                  o("nextgendasherr").nextgendasherr(
                    p,
                    "VideoPlayerNextgendashMediaElementSkippedBufferGap",
                    "Buffers: %s, playhead: %s, skipped to: %s, reason: %s",
                    JSON.stringify(n.buffered),
                    n.currentTime,
                    t,
                    r,
                  ),
                );
            }
          };
        switch (h.state) {
          case "idle":
            switch (_.type) {
              case "__enter":
                return;
              case "__exception":
                return;
              case "__dispose":
                return;
              case "update_media_element": {
                var L,
                  E = h.mediaElement,
                  k = h.mediaElementUnsubscribe,
                  I = (L = _.mediaElement) != null ? L : null;
                if (I === E) {
                  var T = h.mediaSourceIndex;
                  if (
                    I !== null &&
                    T !== null &&
                    (h.mediaSourceHandle !== null || h.mediaSource !== null)
                  ) {
                    var D = p.host.mediaElementCollectSnapshot(p, I);
                    if (!D.mediaSourceAttached) {
                      (i(
                        o("nextgendasherr").nextgendasherr(
                          p,
                          "VideoPlayerNextgendashMediaElementRequestingSourceRecoveryFromSourceReset",
                        ),
                      ),
                        m(T));
                      return;
                    }
                  }
                  p.logging.log(p, {
                    format:
                      "[" +
                      y +
                      "] Ignored " +
                      _.type +
                      " with the same mediaElement=%s",
                    params: [E],
                    type: "generic_info",
                  });
                  return;
                } else {
                  (k && k(),
                    E != null &&
                      (p.config.enableSkipRecoveryOnDeliberateDetach &&
                        I == null &&
                        h.mediaSourceIndex != null &&
                        (h.mediaSourceHandle !== null ||
                          h.mediaSource !== null) &&
                        c(h.mediaSourceIndex),
                      p.host.mediaElementSetSource(p, E, null)));
                  var x = null;
                  if (I != null) {
                    x = p.host.mediaElementSubscribe(
                      p,
                      I,
                      [
                        "durationchange",
                        "ended",
                        "error",
                        "pause",
                        "play",
                        "playing",
                        "progress",
                        "ratechange",
                        "seeked",
                        "seeking",
                        "timeupdate",
                        "volumechange",
                        "waiting",
                      ],
                      function (t) {
                        var n = t.domEventAdjustedClock,
                          a = t.domEventType,
                          i = t.eventTarget;
                        if (
                          p.config.playheadPredictIntervalMs > 0 &&
                          a === "timeupdate"
                        ) {
                          var l = v.state.lastPlayheadSyncPerfMs;
                          if (
                            l != null &&
                            p.host.clock().perfMs - l <
                              p.config.playheadPredictIntervalMs
                          )
                            return;
                        }
                        var u = p.host.mediaElementCollectSnapshot(p, i);
                        if (
                          p.config
                            .mediaElementSkipUpdateIfFullyBufferedAndOnlyPlayheadMoving
                        ) {
                          var c,
                            d = u != null ? u : {},
                            m = d.currentTime,
                            _ = d.seeking,
                            f = babelHelpers.objectWithoutPropertiesLoose(d, e),
                            h =
                              (c = v.state.mediaElementSnapshot) != null
                                ? c
                                : {},
                            y = h.currentTime,
                            C = h.seeking,
                            b = babelHelpers.objectWithoutPropertiesLoose(h, s);
                          if (
                            r("deepEquals")(f, b) &&
                            o(
                              "VideoPlayerNextgendashMediaUtils",
                            ).isFullyBuffered(u)
                          )
                            return;
                        }
                        g({
                          domEventAdjustedClock: n,
                          domEventType: a,
                          mediaElementSnapshot: u,
                          type: "_media_element_event",
                        });
                      },
                    );
                    var $ =
                      !p.config.skipPlayheadRestoreOnMediaElementChange &&
                      h.lastNonZeroNonErrorCurrentTimeSec != null &&
                      h.lastNonZeroNonErrorCurrentTimeSec !== 0;
                    h.mediaSourceHandle
                      ? p.host.mediaElementSetSource(
                          p,
                          I,
                          { mediaSourceHandle: h.mediaSourceHandle },
                          $
                            ? {
                                playheadMediaTimeSec:
                                  h.lastNonZeroNonErrorCurrentTimeSec,
                              }
                            : void 0,
                        )
                      : h.mediaSource
                        ? p.host.mediaElementSetSource(
                            p,
                            I,
                            { mediaSource: h.mediaSource },
                            $
                              ? {
                                  playheadMediaTimeSec:
                                    h.lastNonZeroNonErrorCurrentTimeSec,
                                }
                              : void 0,
                          )
                        : p.host.mediaElementSetSource(p, I, null);
                  }
                  var P =
                      I != null
                        ? p.host.mediaElementCollectSnapshot(p, I)
                        : null,
                    N = f;
                  return babelHelpers.extends(
                    {},
                    b(p.config, h, f, P, null, l),
                    C(p, h, S, a, R, d, P, N, _.type),
                    { mediaElement: I, mediaElementUnsubscribe: x },
                  );
                }
              }
              case "update_media_source": {
                var M,
                  w,
                  A,
                  F = h.mediaElement;
                if (F != null) {
                  var O =
                    !p.config.skipPlayheadRestoreOnMediaElementChange &&
                    h.lastNonZeroNonErrorCurrentTimeSec != null &&
                    h.lastNonZeroNonErrorCurrentTimeSec !== 0;
                  _.mediaSourceHandle
                    ? p.host.mediaElementSetSource(
                        p,
                        F,
                        { mediaSourceHandle: _.mediaSourceHandle },
                        O
                          ? {
                              playheadMediaTimeSec:
                                h.lastNonZeroNonErrorCurrentTimeSec,
                            }
                          : void 0,
                      )
                    : _.mediaSource
                      ? p.host.mediaElementSetSource(
                          p,
                          F,
                          { mediaSource: _.mediaSource },
                          O
                            ? {
                                playheadMediaTimeSec:
                                  h.lastNonZeroNonErrorCurrentTimeSec,
                              }
                            : void 0,
                        )
                      : p.host.mediaElementSetSource(p, F, null);
                }
                var B =
                    h.mediaElement != null
                      ? p.host.mediaElementCollectSnapshot(p, h.mediaElement)
                      : null,
                  W = f;
                return babelHelpers.extends(
                  {},
                  b(p.config, h, f, B, null, l),
                  C(p, h, S, a, R, d, B, W, _.type),
                  {
                    mediaSource: (M = _.mediaSource) != null ? M : null,
                    mediaSourceHandle:
                      (w = _.mediaSourceHandle) != null ? w : null,
                    mediaSourceIndex:
                      (A = _.mediaSourceIndex) != null ? A : null,
                  },
                );
              }
              case "_media_element_event": {
                var q,
                  U,
                  V =
                    (q = p.config
                      .mediaElementSkipFullWatchdogSnapshotsWhilePlaybackMoves
                      ? (U = h.playheadLastObserved) == null
                        ? void 0
                        : U.clock
                      : null) != null
                      ? q
                      : h.mediaElementSnapshotClock;
                if (V != null && _.domEventAdjustedClock.unixMs <= V.unixMs)
                  return;
                var H = _.mediaElementSnapshot,
                  G = _.domEventAdjustedClock;
                return babelHelpers.extends(
                  {},
                  b(p.config, h, f, H, _, l),
                  C(p, h, S, a, R, d, H, G, _.type + ":" + _.domEventType),
                  { lastPlayheadSyncPerfMs: f.perfMs },
                );
              }
              case "_playhead_watchdog": {
                var z = h.mediaElement,
                  j = h.mediaElementSnapshot,
                  K = h.mediaElementSnapshotClock,
                  Q = h.playheadLastObserved;
                if (
                  p.config
                    .mediaElementSkipFullWatchdogSnapshotsWhilePlaybackMoves &&
                  p.config.playheadPredictIntervalMs > 0 &&
                  p.config.mediaSinkType !== "WEBCODECS" &&
                  z != null &&
                  Q != null &&
                  j != null &&
                  K != null &&
                  j.error == null &&
                  !j.paused &&
                  !j.seeking &&
                  !j.ended &&
                  j.buffered.length > 0 &&
                  j.readyState >= 3 &&
                  !h.isBuffering &&
                  !h.isBufferingInitial &&
                  f.perfMs - K.perfMs + u < p.config.playheadPredictIntervalMs
                ) {
                  var X = p.host.mediaElementCollectOnlyPlayheadMediaTimeSec(
                    p,
                    z,
                  );
                  if (Number.isFinite(X) && X !== Q.mediaTimeSec)
                    return (
                      h.playheadWatchdogTimer != null &&
                        p.host.timers.clearTimeout(h.playheadWatchdogTimer),
                      babelHelpers.extends({}, h, {
                        consecutiveNudges: 0,
                        lastNonZeroNonErrorCurrentTimeSec:
                          X !== 0 ? X : h.lastNonZeroNonErrorCurrentTimeSec,
                        playheadLastMovedClock: f,
                        playheadLastObserved: { clock: f, mediaTimeSec: X },
                        playheadWatchdogTimer: p.host.timers.setTimeout(S, u),
                      })
                    );
                }
                var Y =
                    z != null ? p.host.mediaElementCollectSnapshot(p, z) : null,
                  J = f;
                return babelHelpers.extends(
                  {},
                  b(p.config, h, f, Y, null, l),
                  C(p, h, S, a, R, d, Y, J, _.type),
                  {
                    lastPlayheadSyncPerfMs: p.config
                      .mediaElementSkipFullWatchdogSnapshotsWhilePlaybackMoves
                      ? f.perfMs
                      : h.lastPlayheadSyncPerfMs,
                  },
                );
              }
              default:
                _.type;
                return;
            }
          case "__disposed__":
            switch (_.type) {
              case "__enter": {
                var Z = _.prevState,
                  ee = Z.mediaElement,
                  te = Z.mediaElementUnsubscribe,
                  ne = Z.playheadWatchdogTimer;
                (p.config.enableDisposalResourceCleanup &&
                  ne != null &&
                  p.host.timers.clearTimeout(ne),
                  te && te(),
                  ee != null && p.host.mediaElementSetSource(p, ee, null));
                return;
              }
              default:
                return;
            }
          default:
            h.state;
        }
      },
    );
    function C(e, t, n, r, a, i, l, s, m) {
      var f,
        y,
        C,
        b,
        S,
        R,
        L = t.mediaElement,
        E = t.mediaElementSnapshot,
        k = t.playheadLastMovedClock,
        I = t.playheadLastObserved,
        T = t.playheadWatchdogTimer;
      T != null && e.host.timers.clearTimeout(T);
      var D = (f = l == null ? void 0 : l.currentTime) != null ? f : 0,
        x =
          (y =
            (C = e.config
              .mediaElementSkipFullWatchdogSnapshotsWhilePlaybackMoves
              ? I == null
                ? void 0
                : I.mediaTimeSec
              : null) != null
              ? C
              : E == null
                ? void 0
                : E.currentTime) != null
            ? y
            : 0,
        $ = 200,
        P =
          e.config.isLivePlayback && e.config.liveGapSkipStallThresholdMs > 0
            ? e.config.liveGapSkipStallThresholdMs
            : $,
        N = D === x,
        M =
          l != null &&
          l.error == null &&
          !l.seeking &&
          !l.paused &&
          !l.ended &&
          l.buffered.length > 0,
        w = e.config.mediaElementSkipFullWatchdogSnapshotsWhilePlaybackMoves
          ? I != null
          : E != null,
        A = D !== x || (l != null && !w) ? s : null,
        F = null,
        O = r(),
        B =
          l != null &&
          !l.buffered.some(function (t) {
            return v(t, D, e.config.bufferedRangeStartToleranceSec);
          }),
        W =
          e.config.isLivePlayback &&
          e.config.liveGapSkipStuckAtRangeEndToleranceSec > 0 &&
          l != null &&
          c(l.buffered, D, e.config.liveGapSkipStuckAtRangeEndToleranceSec),
        q =
          l != null &&
          k != null &&
          d({
            bufferedRangeCount: l.buffered.length,
            ended: l.ended,
            frozenMs: s.perfMs - k.perfMs,
            hasError: l.error != null,
            isLivePlayback: e.config.isLivePlayback,
            paused: l.paused,
            seeking: l.seeking,
            thresholdMs: e.config.liveGapSkipStuckSeekRecoveryMs,
          });
      if (
        L != null &&
        l != null &&
        O != null &&
        N &&
        k != null &&
        s.perfMs - k.perfMs >= P &&
        (M || q) &&
        (B || W) &&
        (O.some(function (e) {
          return o("VideoPlayerNextgendashMediaUtils").isWithinRange(e, D, 0);
        }) ||
          (e.config.isLivePlayback &&
            l.buffered.some(function (e) {
              return e[0] > D;
            })))
      ) {
        var U,
          V =
            (U = l.buffered.find(function (e) {
              return e[0] > D;
            })) == null
              ? void 0
              : U[0];
        V != null &&
          (F = { reason: m + ":SegmentBufferedInsufficiently", timeSec: V });
      }
      var H = 500,
        G = null,
        z =
          l == null
            ? void 0
            : l.buffered.find(function (e) {
                return o("VideoPlayerNextgendashMediaUtils").isWithinRange(
                  e,
                  D,
                  0,
                );
              }),
        j = z != null ? z[1] - D : 0,
        K =
          e.config.isLivePlayback &&
          (l == null ? void 0 : l.playbackRate) === 0;
      if (
        F == null &&
        p(
          e.config.isLivePlayback,
          e.config.playheadStallRecoveryEnabled,
          e.config.livePlayheadStallRecoveryEnabled,
        ) &&
        L != null &&
        l != null &&
        N &&
        k != null &&
        s.perfMs - k.perfMs >= H &&
        M &&
        l.readyState >= 4 &&
        l.buffered.some(function (e) {
          return o("VideoPlayerNextgendashMediaUtils").isWithinRange(e, D, 0);
        }) &&
        (!e.config.isLivePlayback || _(j)) &&
        !K
      ) {
        var Q =
          t.consecutiveNudges === 0
            ? 0.01
            : t.consecutiveNudges === 1
              ? 0.1
              : 0.5;
        ((F = {
          reason: m + ":StallRecoveryNudge:attempt" + (t.consecutiveNudges + 1),
          timeSec: D + Q,
        }),
          (G = F.timeSec));
      }
      var X = 3e3,
        Y = D + 0.1;
      (F == null &&
        (e.config.segmentStallRecoveryEnabled ||
          (e.config.isLivePlayback && e.config.liveStallRecoveryEnabled)) &&
        L != null &&
        l != null &&
        N &&
        k != null &&
        s.perfMs - k.perfMs >= X &&
        M &&
        l.readyState < 4 &&
        !K &&
        t.lastNonZeroNonErrorCurrentTimeSec != null &&
        h(l.buffered, Y) &&
        (F = { reason: m + ":SegmentStallRecovery", timeSec: Y }),
        F != null && l != null && a(F.timeSec, l, F.reason));
      var J = g({
          isLivePlayback: e.config.isLivePlayback,
          lastNudgeTargetSec: t.lastStallNudgeTargetSec,
          nudged: F != null,
          playheadSec: D,
          playheadSecPrev: x,
          prevNudges: t.consecutiveNudges,
        }),
        Z = G != null ? G : J === 0 ? null : t.lastStallNudgeTargetSec,
        ee =
          e.config.mediaSinkType !== "WEBCODECS" &&
          (M ||
            (N &&
              ((l == null ? void 0 : l.seeking) === !0 ||
                (l == null ? void 0 : l.buffered.length) === 0)))
            ? e.host.timers.setTimeout(n, u)
            : null,
        te = (b = A != null ? A : k) != null ? b : null,
        ne = (S = l == null ? void 0 : l.mediaSourceAttached) != null ? S : !1,
        re = (R = E == null ? void 0 : E.mediaSourceAttached) != null ? R : !1;
      return (
        ne !== re &&
          e.workQueue.enqueueWork(function () {
            i(s, ne);
          }),
        {
          consecutiveNudges: J,
          lastNonZeroNonErrorCurrentTimeSec:
            l != null &&
            l.error == null &&
            l.currentTime != null &&
            l.currentTime !== 0
              ? l.currentTime
              : t.lastNonZeroNonErrorCurrentTimeSec,
          lastStallNudgeTargetSec: Z,
          mediaElementSnapshot: l,
          mediaElementSnapshotBeforeErrorOccurred:
            l == null || E == null
              ? t.mediaElementSnapshotBeforeErrorOccurred
              : E.error == null && l.error != null
                ? E
                : E.error != null && l.error == null
                  ? null
                  : t.mediaElementSnapshotBeforeErrorOccurred,
          mediaElementSnapshotClock: s,
          playheadLastMovedClock: te,
          playheadLastObserved:
            e.config.mediaElementSkipFullWatchdogSnapshotsWhilePlaybackMoves &&
            l != null
              ? { clock: s, mediaTimeSec: D }
              : null,
          playheadWatchdogTimer: ee,
        }
      );
    }
    function b(e, t, n, r, o, a) {
      var i = t.isBuffering,
        l = t.isBufferingInitial,
        s = t.lastBufferingEndPerfMs,
        u = t.enteredBufferingFromPlayback;
      if (t.isBuffering) {
        var c =
            e.isLivePlayback && e.liveBufferingEndBufferAheadSec > 0
              ? e.liveBufferingEndBufferAheadSec
              : e.bufferingEndBufferAheadSec,
          d =
            e.isLivePlayback && e.liveBufferingEndStartUnpauseBufferAheadSec > 0
              ? e.liveBufferingEndStartUnpauseBufferAheadSec
              : e.bufferingEndStartUnpauseBufferAheadSec,
          m = !t.enteredBufferingFromPlayback && d > 0 ? d : c,
          p =
            e.isLivePlayback && e.liveBufferingEndRecentStallBufferAheadSec > 0
              ? e.liveBufferingEndRecentStallBufferAheadSec
              : e.bufferingEndRecentStallBufferAheadSec,
          _ =
            e.isLivePlayback && e.liveBufferingEndRecentStallTimeoutMs > 0
              ? e.liveBufferingEndRecentStallTimeoutMs
              : e.bufferingEndRecentStallTimeoutMs;
        (p > 0 &&
          _ > 0 &&
          t.lastBufferingEndPerfMs != null &&
          n.perfMs - t.lastBufferingEndPerfMs < _ &&
          (m = p),
          (r == null ||
            r.paused ||
            S(r, m, e.bufferedRangeStartToleranceSec)) &&
            ((i = !1),
            (s = n.perfMs),
            l &&
              ((o == null ? void 0 : o.domEventType) === "play" ||
                (o == null ? void 0 : o.domEventType) === "playing" ||
                (r == null ? void 0 : r.paused) === !1) &&
              (l = !1)));
      } else
        r != null &&
          !r.paused &&
          !S(
            r,
            e.bufferingBeginBufferAheadSec,
            e.bufferedRangeStartToleranceSec,
          ) &&
          ((u =
            t.mediaElementSnapshot != null && !t.mediaElementSnapshot.paused),
          (i = !0));
      var f =
        !t.isBuffering && i
          ? "started"
          : t.isBuffering && !i
            ? "stopped"
            : null;
      if (f != null) {
        var g;
        a({
          changeDirection: f,
          domEventAdjustedClock:
            (g = o == null ? void 0 : o.domEventAdjustedClock) != null ? g : n,
          isInitial: t.isBufferingInitial,
        });
      }
      return babelHelpers.extends({}, t, {
        enteredBufferingFromPlayback: u,
        isBuffering: i,
        isBufferingInitial: l,
        lastBufferingEndPerfMs: s,
      });
    }
    function v(e, t, n) {
      return e[0] - n <= t && t <= e[1];
    }
    function S(e, t, n) {
      for (
        var r = 0.2,
          o = e.currentTime,
          a = e.duration,
          i = !e.seeking && e.readyState >= 2 ? n : 0,
          l = null,
          s = 0;
        s < e.buffered.length;
        s++
      ) {
        var u = e.buffered[s];
        if (v(u, o, i)) {
          l = u;
          break;
        }
      }
      var c =
        a !== "NOT_A_NUMBER" &&
        ((l != null && Math.abs(l[1] - a) <= r) || Math.abs(o - a) <= r);
      return c || (l != null && l[1] - Math.max(o, l[0]) > t);
    }
    ((l.internal_isPlayheadStuckAtBufferedRangeEndWithIslandAhead = c),
      (l.internal_isPlayheadStuckInRecoverySeek = d),
      (l.internal_shouldRunPlayheadStallRecovery = p),
      (l.internal_isLiveNudgeBufferPresent = _),
      (l.internal_getNextConsecutiveStallNudges = g),
      (l.internal_isNudgeTargetWithinBuffered = h),
      (l.VideoPlayerNextgendashMediaElementSM = y));
  },
  98,
);
