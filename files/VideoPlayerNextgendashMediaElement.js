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
    function f(e, t) {
      return e.some(function (e) {
        return o("VideoPlayerNextgendashMediaUtils").isWithinRange(e, t, 0);
      });
    }
    var g = o("VideoPlayerNextgendashStateMachine").defineStateMachine(
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
          C = t.state,
          b = t.thisName,
          v = t.thisSm,
          S = function () {
            g({ type: "_playhead_watchdog" });
          },
          R = function (t, n, r) {
            var e = C.mediaElement;
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
        switch (C.state) {
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
                  E = C.mediaElement,
                  k = C.mediaElementUnsubscribe,
                  I = (L = _.mediaElement) != null ? L : null;
                if (I === E) {
                  var T = C.mediaSourceIndex;
                  if (
                    I !== null &&
                    T !== null &&
                    (C.mediaSourceHandle !== null || C.mediaSource !== null)
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
                      b +
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
                        C.mediaSourceIndex != null &&
                        (C.mediaSourceHandle !== null ||
                          C.mediaSource !== null) &&
                        c(C.mediaSourceIndex),
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
                      C.lastNonZeroNonErrorCurrentTimeSec != null &&
                      C.lastNonZeroNonErrorCurrentTimeSec !== 0;
                    C.mediaSourceHandle
                      ? p.host.mediaElementSetSource(
                          p,
                          I,
                          { mediaSourceHandle: C.mediaSourceHandle },
                          $
                            ? {
                                playheadMediaTimeSec:
                                  C.lastNonZeroNonErrorCurrentTimeSec,
                              }
                            : void 0,
                        )
                      : C.mediaSource
                        ? p.host.mediaElementSetSource(
                            p,
                            I,
                            { mediaSource: C.mediaSource },
                            $
                              ? {
                                  playheadMediaTimeSec:
                                    C.lastNonZeroNonErrorCurrentTimeSec,
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
                    y(p.config, C, f, P, null, l),
                    h(p, C, S, a, R, d, P, N, _.type),
                    { mediaElement: I, mediaElementUnsubscribe: x },
                  );
                }
              }
              case "update_media_source": {
                var M,
                  w,
                  A,
                  F = C.mediaElement;
                if (F != null) {
                  var O =
                    !p.config.skipPlayheadRestoreOnMediaElementChange &&
                    C.lastNonZeroNonErrorCurrentTimeSec != null &&
                    C.lastNonZeroNonErrorCurrentTimeSec !== 0;
                  _.mediaSourceHandle
                    ? p.host.mediaElementSetSource(
                        p,
                        F,
                        { mediaSourceHandle: _.mediaSourceHandle },
                        O
                          ? {
                              playheadMediaTimeSec:
                                C.lastNonZeroNonErrorCurrentTimeSec,
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
                                  C.lastNonZeroNonErrorCurrentTimeSec,
                              }
                            : void 0,
                        )
                      : p.host.mediaElementSetSource(p, F, null);
                }
                var B =
                    C.mediaElement != null
                      ? p.host.mediaElementCollectSnapshot(p, C.mediaElement)
                      : null,
                  W = f;
                return babelHelpers.extends(
                  {},
                  y(p.config, C, f, B, null, l),
                  h(p, C, S, a, R, d, B, W, _.type),
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
                      ? (U = C.playheadLastObserved) == null
                        ? void 0
                        : U.clock
                      : null) != null
                      ? q
                      : C.mediaElementSnapshotClock;
                if (V != null && _.domEventAdjustedClock.unixMs <= V.unixMs)
                  return;
                var H = _.mediaElementSnapshot,
                  G = _.domEventAdjustedClock;
                return babelHelpers.extends(
                  {},
                  y(p.config, C, f, H, _, l),
                  h(p, C, S, a, R, d, H, G, _.type + ":" + _.domEventType),
                  { lastPlayheadSyncPerfMs: f.perfMs },
                );
              }
              case "_playhead_watchdog": {
                var z = C.mediaElement,
                  j = C.mediaElementSnapshot,
                  K = C.mediaElementSnapshotClock,
                  Q = C.playheadLastObserved;
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
                  !C.isBuffering &&
                  !C.isBufferingInitial &&
                  f.perfMs - K.perfMs + u < p.config.playheadPredictIntervalMs
                ) {
                  var X = p.host.mediaElementCollectOnlyPlayheadMediaTimeSec(
                    p,
                    z,
                  );
                  if (Number.isFinite(X) && X !== Q.mediaTimeSec)
                    return (
                      C.playheadWatchdogTimer != null &&
                        p.host.timers.clearTimeout(C.playheadWatchdogTimer),
                      babelHelpers.extends({}, C, {
                        consecutiveNudges: 0,
                        lastNonZeroNonErrorCurrentTimeSec:
                          X !== 0 ? X : C.lastNonZeroNonErrorCurrentTimeSec,
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
                  y(p.config, C, f, Y, null, l),
                  h(p, C, S, a, R, d, Y, J, _.type),
                  {
                    lastPlayheadSyncPerfMs: p.config
                      .mediaElementSkipFullWatchdogSnapshotsWhilePlaybackMoves
                      ? f.perfMs
                      : C.lastPlayheadSyncPerfMs,
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
            C.state;
        }
      },
    );
    function h(e, t, n, r, a, i, l, s, m) {
      var g,
        h,
        y,
        b,
        v,
        S,
        R = t.mediaElement,
        L = t.mediaElementSnapshot,
        E = t.playheadLastMovedClock,
        k = t.playheadLastObserved,
        I = t.playheadWatchdogTimer;
      I != null && e.host.timers.clearTimeout(I);
      var T = (g = l == null ? void 0 : l.currentTime) != null ? g : 0,
        D =
          (h =
            (y = e.config
              .mediaElementSkipFullWatchdogSnapshotsWhilePlaybackMoves
              ? k == null
                ? void 0
                : k.mediaTimeSec
              : null) != null
              ? y
              : L == null
                ? void 0
                : L.currentTime) != null
            ? h
            : 0,
        x = 200,
        $ =
          e.config.isLivePlayback && e.config.liveGapSkipStallThresholdMs > 0
            ? e.config.liveGapSkipStallThresholdMs
            : x,
        P = T === D,
        N =
          l != null &&
          l.error == null &&
          !l.seeking &&
          !l.paused &&
          !l.ended &&
          l.buffered.length > 0,
        M = e.config.mediaElementSkipFullWatchdogSnapshotsWhilePlaybackMoves
          ? k != null
          : L != null,
        w = T !== D || (l != null && !M) ? s : null,
        A = null,
        F = r(),
        O =
          l != null &&
          !l.buffered.some(function (t) {
            return C(t, T, e.config.bufferedRangeStartToleranceSec);
          }),
        B =
          e.config.isLivePlayback &&
          e.config.liveGapSkipStuckAtRangeEndToleranceSec > 0 &&
          l != null &&
          c(l.buffered, T, e.config.liveGapSkipStuckAtRangeEndToleranceSec),
        W =
          l != null &&
          E != null &&
          d({
            bufferedRangeCount: l.buffered.length,
            ended: l.ended,
            frozenMs: s.perfMs - E.perfMs,
            hasError: l.error != null,
            isLivePlayback: e.config.isLivePlayback,
            paused: l.paused,
            seeking: l.seeking,
            thresholdMs: e.config.liveGapSkipStuckSeekRecoveryMs,
          });
      if (
        R != null &&
        l != null &&
        F != null &&
        P &&
        E != null &&
        s.perfMs - E.perfMs >= $ &&
        (N || W) &&
        (O || B) &&
        (F.some(function (e) {
          return o("VideoPlayerNextgendashMediaUtils").isWithinRange(e, T, 0);
        }) ||
          (e.config.isLivePlayback &&
            l.buffered.some(function (e) {
              return e[0] > T;
            })))
      ) {
        var q,
          U =
            (q = l.buffered.find(function (e) {
              return e[0] > T;
            })) == null
              ? void 0
              : q[0];
        U != null &&
          (A = { reason: m + ":SegmentBufferedInsufficiently", timeSec: U });
      }
      var V = 500,
        H =
          l == null
            ? void 0
            : l.buffered.find(function (e) {
                return o("VideoPlayerNextgendashMediaUtils").isWithinRange(
                  e,
                  T,
                  0,
                );
              }),
        G = H != null ? H[1] - T : 0;
      if (
        A == null &&
        p(
          e.config.isLivePlayback,
          e.config.playheadStallRecoveryEnabled,
          e.config.livePlayheadStallRecoveryEnabled,
        ) &&
        R != null &&
        l != null &&
        P &&
        E != null &&
        s.perfMs - E.perfMs >= V &&
        N &&
        l.readyState >= 4 &&
        l.buffered.some(function (e) {
          return o("VideoPlayerNextgendashMediaUtils").isWithinRange(e, T, 0);
        }) &&
        (!e.config.isLivePlayback || _(G))
      ) {
        var z =
          t.consecutiveNudges === 0
            ? 0.01
            : t.consecutiveNudges === 1
              ? 0.1
              : 0.5;
        A = {
          reason: m + ":StallRecoveryNudge:attempt" + (t.consecutiveNudges + 1),
          timeSec: T + z,
        };
      }
      var j = 3e3,
        K = T + 0.1;
      (A == null &&
        (e.config.segmentStallRecoveryEnabled ||
          (e.config.isLivePlayback && e.config.liveStallRecoveryEnabled)) &&
        R != null &&
        l != null &&
        P &&
        E != null &&
        s.perfMs - E.perfMs >= j &&
        N &&
        l.readyState < 4 &&
        t.lastNonZeroNonErrorCurrentTimeSec != null &&
        f(l.buffered, K) &&
        (A = { reason: m + ":SegmentStallRecovery", timeSec: K }),
        A != null && l != null && a(A.timeSec, l, A.reason));
      var Q =
          A != null
            ? t.consecutiveNudges + 1
            : T !== D
              ? 0
              : t.consecutiveNudges,
        X =
          e.config.mediaSinkType !== "WEBCODECS" &&
          (N ||
            (P &&
              ((l == null ? void 0 : l.seeking) === !0 ||
                (l == null ? void 0 : l.buffered.length) === 0)))
            ? e.host.timers.setTimeout(n, u)
            : null,
        Y = (b = w != null ? w : E) != null ? b : null,
        J = (v = l == null ? void 0 : l.mediaSourceAttached) != null ? v : !1,
        Z = (S = L == null ? void 0 : L.mediaSourceAttached) != null ? S : !1;
      return (
        J !== Z &&
          e.workQueue.enqueueWork(function () {
            i(s, J);
          }),
        {
          consecutiveNudges: Q,
          lastNonZeroNonErrorCurrentTimeSec:
            l != null &&
            l.error == null &&
            l.currentTime != null &&
            l.currentTime !== 0
              ? l.currentTime
              : t.lastNonZeroNonErrorCurrentTimeSec,
          mediaElementSnapshot: l,
          mediaElementSnapshotBeforeErrorOccurred:
            l == null || L == null
              ? t.mediaElementSnapshotBeforeErrorOccurred
              : L.error == null && l.error != null
                ? L
                : L.error != null && l.error == null
                  ? null
                  : t.mediaElementSnapshotBeforeErrorOccurred,
          mediaElementSnapshotClock: s,
          playheadLastMovedClock: Y,
          playheadLastObserved:
            e.config.mediaElementSkipFullWatchdogSnapshotsWhilePlaybackMoves &&
            l != null
              ? { clock: s, mediaTimeSec: T }
              : null,
          playheadWatchdogTimer: X,
        }
      );
    }
    function y(e, t, n, r, o, a) {
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
            b(r, m, e.bufferedRangeStartToleranceSec)) &&
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
          !b(
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
    function C(e, t, n) {
      return e[0] - n <= t && t <= e[1];
    }
    function b(e, t, n) {
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
        if (C(u, o, i)) {
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
      (l.internal_isNudgeTargetWithinBuffered = f),
      (l.VideoPlayerNextgendashMediaElementSM = g));
  },
  98,
);
