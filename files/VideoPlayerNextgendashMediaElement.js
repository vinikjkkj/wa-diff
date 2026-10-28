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
        C,
        b,
        v,
        S = t.mediaElement,
        R = t.mediaElementSnapshot,
        L = t.playheadLastMovedClock,
        E = t.playheadLastObserved,
        k = t.playheadWatchdogTimer;
      k != null && e.host.timers.clearTimeout(k);
      var I = (g = l == null ? void 0 : l.currentTime) != null ? g : 0,
        T =
          (h =
            (y = e.config
              .mediaElementSkipFullWatchdogSnapshotsWhilePlaybackMoves
              ? E == null
                ? void 0
                : E.mediaTimeSec
              : null) != null
              ? y
              : R == null
                ? void 0
                : R.currentTime) != null
            ? h
            : 0,
        D = 200,
        x =
          e.config.isLivePlayback && e.config.liveGapSkipStallThresholdMs > 0
            ? e.config.liveGapSkipStallThresholdMs
            : D,
        $ = I === T,
        P =
          l != null &&
          l.error == null &&
          !l.seeking &&
          !l.paused &&
          !l.ended &&
          l.buffered.length > 0,
        N = e.config.mediaElementSkipFullWatchdogSnapshotsWhilePlaybackMoves
          ? E != null
          : R != null,
        M = I !== T || (l != null && !N) ? s : null,
        w = null,
        A = r(),
        F =
          l != null &&
          !l.buffered.some(function (e) {
            return o("VideoPlayerNextgendashMediaUtils").isWithinRange(e, I, 0);
          }),
        O =
          e.config.isLivePlayback &&
          e.config.liveGapSkipStuckAtRangeEndToleranceSec > 0 &&
          l != null &&
          c(l.buffered, I, e.config.liveGapSkipStuckAtRangeEndToleranceSec),
        B =
          l != null &&
          L != null &&
          d({
            bufferedRangeCount: l.buffered.length,
            ended: l.ended,
            frozenMs: s.perfMs - L.perfMs,
            hasError: l.error != null,
            isLivePlayback: e.config.isLivePlayback,
            paused: l.paused,
            seeking: l.seeking,
            thresholdMs: e.config.liveGapSkipStuckSeekRecoveryMs,
          });
      if (
        S != null &&
        l != null &&
        A != null &&
        $ &&
        L != null &&
        s.perfMs - L.perfMs >= x &&
        (P || B) &&
        (F || O) &&
        (A.some(function (e) {
          return o("VideoPlayerNextgendashMediaUtils").isWithinRange(e, I, 0);
        }) ||
          (e.config.isLivePlayback &&
            l.buffered.some(function (e) {
              return e[0] > I;
            })))
      ) {
        var W,
          q =
            (W = l.buffered.find(function (e) {
              return e[0] > I;
            })) == null
              ? void 0
              : W[0];
        q != null &&
          (w = { reason: m + ":SegmentBufferedInsufficiently", timeSec: q });
      }
      var U = 500,
        V =
          l == null
            ? void 0
            : l.buffered.find(function (e) {
                return o("VideoPlayerNextgendashMediaUtils").isWithinRange(
                  e,
                  I,
                  0,
                );
              }),
        H = V != null ? V[1] - I : 0;
      if (
        w == null &&
        p(
          e.config.isLivePlayback,
          e.config.playheadStallRecoveryEnabled,
          e.config.livePlayheadStallRecoveryEnabled,
        ) &&
        S != null &&
        l != null &&
        $ &&
        L != null &&
        s.perfMs - L.perfMs >= U &&
        P &&
        l.readyState >= 4 &&
        l.buffered.some(function (e) {
          return o("VideoPlayerNextgendashMediaUtils").isWithinRange(e, I, 0);
        }) &&
        (!e.config.isLivePlayback || _(H))
      ) {
        var G =
          t.consecutiveNudges === 0
            ? 0.01
            : t.consecutiveNudges === 1
              ? 0.1
              : 0.5;
        w = {
          reason: m + ":StallRecoveryNudge:attempt" + (t.consecutiveNudges + 1),
          timeSec: I + G,
        };
      }
      var z = 3e3,
        j = I + 0.1;
      (w == null &&
        (e.config.segmentStallRecoveryEnabled ||
          (e.config.isLivePlayback && e.config.liveStallRecoveryEnabled)) &&
        S != null &&
        l != null &&
        $ &&
        L != null &&
        s.perfMs - L.perfMs >= z &&
        P &&
        l.readyState < 4 &&
        t.lastNonZeroNonErrorCurrentTimeSec != null &&
        f(l.buffered, j) &&
        (w = { reason: m + ":SegmentStallRecovery", timeSec: j }),
        w != null && l != null && a(w.timeSec, l, w.reason));
      var K =
          w != null
            ? t.consecutiveNudges + 1
            : I !== T
              ? 0
              : t.consecutiveNudges,
        Q =
          e.config.mediaSinkType !== "WEBCODECS" &&
          (P ||
            ($ &&
              ((l == null ? void 0 : l.seeking) === !0 ||
                (l == null ? void 0 : l.buffered.length) === 0)))
            ? e.host.timers.setTimeout(n, u)
            : null,
        X = (C = M != null ? M : L) != null ? C : null,
        Y = (b = l == null ? void 0 : l.mediaSourceAttached) != null ? b : !1,
        J = (v = R == null ? void 0 : R.mediaSourceAttached) != null ? v : !1;
      return (
        Y !== J &&
          e.workQueue.enqueueWork(function () {
            i(s, Y);
          }),
        {
          consecutiveNudges: K,
          lastNonZeroNonErrorCurrentTimeSec:
            l != null &&
            l.error == null &&
            l.currentTime != null &&
            l.currentTime !== 0
              ? l.currentTime
              : t.lastNonZeroNonErrorCurrentTimeSec,
          mediaElementSnapshot: l,
          mediaElementSnapshotBeforeErrorOccurred:
            l == null || R == null
              ? t.mediaElementSnapshotBeforeErrorOccurred
              : R.error == null && l.error != null
                ? R
                : R.error != null && l.error == null
                  ? null
                  : t.mediaElementSnapshotBeforeErrorOccurred,
          mediaElementSnapshotClock: s,
          playheadLastMovedClock: X,
          playheadLastObserved:
            e.config.mediaElementSkipFullWatchdogSnapshotsWhilePlaybackMoves &&
            l != null
              ? { clock: s, mediaTimeSec: I }
              : null,
          playheadWatchdogTimer: Q,
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
          (r == null || r.paused || C(r, m)) &&
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
          !C(r, e.bufferingBeginBufferAheadSec) &&
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
    function C(e, t) {
      for (
        var n = 0.2, r = e.currentTime, o = e.duration, a = null, i = 0;
        i < e.buffered.length;
        i++
      ) {
        var l = e.buffered[i];
        if (l[0] <= r && r <= l[1]) {
          a = l;
          break;
        }
      }
      var s =
        o !== "NOT_A_NUMBER" &&
        ((a != null && Math.abs(a[1] - o) <= n) || Math.abs(r - o) <= n);
      return s || (a != null && a[1] - r > t);
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
