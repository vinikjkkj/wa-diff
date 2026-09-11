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
      s = ["currentTime", "seeking"];
    function u(e, t, n) {
      return (
        e.some(function (e) {
          return e[0] <= t && t >= e[1] - n && t <= e[1];
        }) &&
        e.some(function (e) {
          return e[0] > t;
        })
      );
    }
    function c(e) {
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
    var d = 0.5;
    function m(e, t, n) {
      return e ? n : t;
    }
    function p(e) {
      return e > d;
    }
    function _(e, t) {
      return e.some(function (e) {
        return o("VideoPlayerNextgendashMediaUtils").isWithinRange(e, t, 0);
      });
    }
    var f = o("VideoPlayerNextgendashStateMachine").defineStateMachine(
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
          playheadWatchdogTimer: null,
          state: "idle",
        };
      },
      function (t) {
        var n = t.args,
          a = n.getWorkaroundForSegmentBufferedInsufficientlyMediaTimeRanges,
          i = n.logPlayerWarning,
          l = n.onBufferingChanged,
          u = n.onDeliberateDetachForUnmount,
          c = n.onMediaSourceAttachedChanged,
          d = n.onRequestRecoveryFromSourceReset,
          m = t.env,
          p = t.event,
          _ = t.eventClock,
          f = t.sendToSelf,
          y = t.state,
          C = t.thisName,
          b = t.thisSm,
          v = function () {
            f({ type: "_playhead_watchdog" });
          },
          S = function (t, n, r) {
            var e = y.mediaElement;
            if (e != null) {
              if (m.config.disableBufferGapSkipping) {
                i(
                  o("nextgendasherr").nextgendasherr(
                    m,
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
              m.host.mediaElementSetPlayhead(m, e, t);
              var a = t - n.currentTime;
              a >= m.config.gapSkipMinLogThresholdSec &&
                i(
                  o("nextgendasherr").nextgendasherr(
                    m,
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
        switch (y.state) {
          case "idle":
            switch (p.type) {
              case "__enter":
                return;
              case "__exception":
                return;
              case "__dispose":
                return;
              case "update_media_element": {
                var R,
                  L = y.mediaElement,
                  E = y.mediaElementUnsubscribe,
                  k = (R = p.mediaElement) != null ? R : null;
                if (k === L) {
                  var I = y.mediaSourceIndex;
                  if (
                    k !== null &&
                    I !== null &&
                    (y.mediaSourceHandle !== null || y.mediaSource !== null)
                  ) {
                    var T = m.host.mediaElementCollectSnapshot(m, k);
                    if (!T.mediaSourceAttached) {
                      (i(
                        o("nextgendasherr").nextgendasherr(
                          m,
                          "VideoPlayerNextgendashMediaElementRequestingSourceRecoveryFromSourceReset",
                        ),
                      ),
                        d(I));
                      return;
                    }
                  }
                  m.logging.log(m, {
                    format:
                      "[" +
                      C +
                      "] Ignored " +
                      p.type +
                      " with the same mediaElement=%s",
                    params: [L],
                    type: "generic_info",
                  });
                  return;
                } else {
                  (E && E(),
                    L != null &&
                      (m.config.enableSkipRecoveryOnDeliberateDetach &&
                        k == null &&
                        y.mediaSourceIndex != null &&
                        (y.mediaSourceHandle !== null ||
                          y.mediaSource !== null) &&
                        u(y.mediaSourceIndex),
                      m.host.mediaElementSetSource(m, L, null)));
                  var D = null;
                  if (k != null) {
                    D = m.host.mediaElementSubscribe(
                      m,
                      k,
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
                          m.config.playheadPredictIntervalMs > 0 &&
                          a === "timeupdate"
                        ) {
                          var l = b.state.lastPlayheadSyncPerfMs;
                          if (
                            l != null &&
                            m.host.clock().perfMs - l <
                              m.config.playheadPredictIntervalMs
                          )
                            return;
                        }
                        var u = m.host.mediaElementCollectSnapshot(m, i);
                        if (
                          m.config
                            .mediaElementSkipUpdateIfFullyBufferedAndOnlyPlayheadMoving
                        ) {
                          var c,
                            d = u != null ? u : {},
                            p = d.currentTime,
                            _ = d.seeking,
                            g = babelHelpers.objectWithoutPropertiesLoose(d, e),
                            h =
                              (c = b.state.mediaElementSnapshot) != null
                                ? c
                                : {},
                            y = h.currentTime,
                            C = h.seeking,
                            v = babelHelpers.objectWithoutPropertiesLoose(h, s);
                          if (
                            r("deepEquals")(g, v) &&
                            o(
                              "VideoPlayerNextgendashMediaUtils",
                            ).isFullyBuffered(u)
                          )
                            return;
                        }
                        f({
                          domEventAdjustedClock: n,
                          domEventType: a,
                          mediaElementSnapshot: u,
                          type: "_media_element_event",
                        });
                      },
                    );
                    var x =
                      !m.config.skipPlayheadRestoreOnMediaElementChange &&
                      y.lastNonZeroNonErrorCurrentTimeSec != null &&
                      y.lastNonZeroNonErrorCurrentTimeSec !== 0;
                    y.mediaSourceHandle
                      ? m.host.mediaElementSetSource(
                          m,
                          k,
                          { mediaSourceHandle: y.mediaSourceHandle },
                          x
                            ? {
                                playheadMediaTimeSec:
                                  y.lastNonZeroNonErrorCurrentTimeSec,
                              }
                            : void 0,
                        )
                      : y.mediaSource
                        ? m.host.mediaElementSetSource(
                            m,
                            k,
                            { mediaSource: y.mediaSource },
                            x
                              ? {
                                  playheadMediaTimeSec:
                                    y.lastNonZeroNonErrorCurrentTimeSec,
                                }
                              : void 0,
                          )
                        : m.host.mediaElementSetSource(m, k, null);
                  }
                  var $ =
                      k != null
                        ? m.host.mediaElementCollectSnapshot(m, k)
                        : null,
                    P = _;
                  return babelHelpers.extends(
                    {},
                    h(m.config, y, _, $, null, l),
                    g(m, y, v, a, S, c, $, P, p.type),
                    { mediaElement: k, mediaElementUnsubscribe: D },
                  );
                }
              }
              case "update_media_source": {
                var N,
                  M,
                  w,
                  A = y.mediaElement;
                if (A != null) {
                  var F =
                    !m.config.skipPlayheadRestoreOnMediaElementChange &&
                    y.lastNonZeroNonErrorCurrentTimeSec != null &&
                    y.lastNonZeroNonErrorCurrentTimeSec !== 0;
                  p.mediaSourceHandle
                    ? m.host.mediaElementSetSource(
                        m,
                        A,
                        { mediaSourceHandle: p.mediaSourceHandle },
                        F
                          ? {
                              playheadMediaTimeSec:
                                y.lastNonZeroNonErrorCurrentTimeSec,
                            }
                          : void 0,
                      )
                    : p.mediaSource
                      ? m.host.mediaElementSetSource(
                          m,
                          A,
                          { mediaSource: p.mediaSource },
                          F
                            ? {
                                playheadMediaTimeSec:
                                  y.lastNonZeroNonErrorCurrentTimeSec,
                              }
                            : void 0,
                        )
                      : m.host.mediaElementSetSource(m, A, null);
                }
                var O =
                    y.mediaElement != null
                      ? m.host.mediaElementCollectSnapshot(m, y.mediaElement)
                      : null,
                  B = _;
                return babelHelpers.extends(
                  {},
                  h(m.config, y, _, O, null, l),
                  g(m, y, v, a, S, c, O, B, p.type),
                  {
                    mediaSource: (N = p.mediaSource) != null ? N : null,
                    mediaSourceHandle:
                      (M = p.mediaSourceHandle) != null ? M : null,
                    mediaSourceIndex:
                      (w = p.mediaSourceIndex) != null ? w : null,
                  },
                );
              }
              case "_media_element_event": {
                if (
                  y.mediaElementSnapshotClock != null &&
                  p.domEventAdjustedClock.unixMs <=
                    y.mediaElementSnapshotClock.unixMs
                )
                  return;
                var W = p.mediaElementSnapshot,
                  q = p.domEventAdjustedClock;
                return babelHelpers.extends(
                  {},
                  h(m.config, y, _, W, p, l),
                  g(m, y, v, a, S, c, W, q, p.type + ":" + p.domEventType),
                  { lastPlayheadSyncPerfMs: _.perfMs },
                );
              }
              case "_playhead_watchdog": {
                var U =
                    y.mediaElement != null
                      ? m.host.mediaElementCollectSnapshot(m, y.mediaElement)
                      : null,
                  V = _;
                return babelHelpers.extends(
                  {},
                  h(m.config, y, _, U, null, l),
                  g(m, y, v, a, S, c, U, V, p.type),
                );
              }
              default:
                p.type;
                return;
            }
          case "__disposed__":
            switch (p.type) {
              case "__enter": {
                var H = p.prevState,
                  G = H.mediaElement,
                  z = H.mediaElementUnsubscribe,
                  j = H.playheadWatchdogTimer;
                (m.config.enableDisposalResourceCleanup &&
                  j != null &&
                  m.host.timers.clearTimeout(j),
                  z && z(),
                  G != null && m.host.mediaElementSetSource(m, G, null));
                return;
              }
              default:
                return;
            }
          default:
            y.state;
        }
      },
    );
    function g(e, t, n, r, a, i, l, s, d) {
      var f,
        g,
        h,
        y,
        C,
        b = t.mediaElement,
        v = t.mediaElementSnapshot,
        S = t.playheadLastMovedClock,
        R = t.playheadWatchdogTimer;
      R != null && e.host.timers.clearTimeout(R);
      var L = (f = l == null ? void 0 : l.currentTime) != null ? f : 0,
        E = (g = v == null ? void 0 : v.currentTime) != null ? g : 0,
        k = 200,
        I =
          e.config.isLivePlayback && e.config.liveGapSkipStallThresholdMs > 0
            ? e.config.liveGapSkipStallThresholdMs
            : k,
        T = L === E,
        D =
          l != null &&
          l.error == null &&
          !l.seeking &&
          !l.paused &&
          !l.ended &&
          l.buffered.length > 0,
        x = L !== E || (l != null && v == null) ? s : null,
        $ = null,
        P = r(),
        N =
          l != null &&
          !l.buffered.some(function (e) {
            return o("VideoPlayerNextgendashMediaUtils").isWithinRange(e, L, 0);
          }),
        M =
          e.config.isLivePlayback &&
          e.config.liveGapSkipStuckAtRangeEndToleranceSec > 0 &&
          l != null &&
          u(l.buffered, L, e.config.liveGapSkipStuckAtRangeEndToleranceSec),
        w =
          l != null &&
          S != null &&
          c({
            bufferedRangeCount: l.buffered.length,
            ended: l.ended,
            frozenMs: s.perfMs - S.perfMs,
            hasError: l.error != null,
            isLivePlayback: e.config.isLivePlayback,
            paused: l.paused,
            seeking: l.seeking,
            thresholdMs: e.config.liveGapSkipStuckSeekRecoveryMs,
          });
      if (
        b != null &&
        l != null &&
        P != null &&
        T &&
        S != null &&
        s.perfMs - S.perfMs >= I &&
        (D || w) &&
        (N || M) &&
        (P.some(function (e) {
          return o("VideoPlayerNextgendashMediaUtils").isWithinRange(e, L, 0);
        }) ||
          (e.config.isLivePlayback &&
            l.buffered.some(function (e) {
              return e[0] > L;
            })))
      ) {
        var A,
          F =
            (A = l.buffered.find(function (e) {
              return e[0] > L;
            })) == null
              ? void 0
              : A[0];
        F != null &&
          ($ = { reason: d + ":SegmentBufferedInsufficiently", timeSec: F });
      }
      var O = 500,
        B =
          l == null
            ? void 0
            : l.buffered.find(function (e) {
                return o("VideoPlayerNextgendashMediaUtils").isWithinRange(
                  e,
                  L,
                  0,
                );
              }),
        W = B != null ? B[1] - L : 0;
      if (
        $ == null &&
        m(
          e.config.isLivePlayback,
          e.config.playheadStallRecoveryEnabled,
          e.config.livePlayheadStallRecoveryEnabled,
        ) &&
        b != null &&
        l != null &&
        T &&
        S != null &&
        s.perfMs - S.perfMs >= O &&
        D &&
        l.readyState >= 4 &&
        l.buffered.some(function (e) {
          return o("VideoPlayerNextgendashMediaUtils").isWithinRange(e, L, 0);
        }) &&
        (!e.config.isLivePlayback || p(W))
      ) {
        var q =
          t.consecutiveNudges === 0
            ? 0.01
            : t.consecutiveNudges === 1
              ? 0.1
              : 0.5;
        $ = {
          reason: d + ":StallRecoveryNudge:attempt" + (t.consecutiveNudges + 1),
          timeSec: L + q,
        };
      }
      var U = 3e3,
        V = L + 0.1;
      ($ == null &&
        (e.config.segmentStallRecoveryEnabled ||
          (e.config.isLivePlayback && e.config.liveStallRecoveryEnabled)) &&
        b != null &&
        l != null &&
        T &&
        S != null &&
        s.perfMs - S.perfMs >= U &&
        D &&
        l.readyState < 4 &&
        t.lastNonZeroNonErrorCurrentTimeSec != null &&
        _(l.buffered, V) &&
        ($ = { reason: d + ":SegmentStallRecovery", timeSec: V }),
        $ != null && l != null && a($.timeSec, l, $.reason));
      var H =
          $ != null
            ? t.consecutiveNudges + 1
            : L !== E
              ? 0
              : t.consecutiveNudges,
        G = 200,
        z =
          D ||
          (T &&
            ((l == null ? void 0 : l.seeking) === !0 ||
              (l == null ? void 0 : l.buffered.length) === 0))
            ? e.host.timers.setTimeout(n, G)
            : null,
        j = (h = x != null ? x : S) != null ? h : null,
        K = (y = l == null ? void 0 : l.mediaSourceAttached) != null ? y : !1,
        Q = (C = v == null ? void 0 : v.mediaSourceAttached) != null ? C : !1;
      return (
        K !== Q &&
          e.workQueue.enqueueWork(function () {
            i(s, K);
          }),
        {
          consecutiveNudges: H,
          lastNonZeroNonErrorCurrentTimeSec:
            l != null &&
            l.error == null &&
            l.currentTime != null &&
            l.currentTime !== 0
              ? l.currentTime
              : t.lastNonZeroNonErrorCurrentTimeSec,
          mediaElementSnapshot: l,
          mediaElementSnapshotBeforeErrorOccurred:
            l == null || v == null
              ? t.mediaElementSnapshotBeforeErrorOccurred
              : v.error == null && l.error != null
                ? v
                : v.error != null && l.error == null
                  ? null
                  : t.mediaElementSnapshotBeforeErrorOccurred,
          mediaElementSnapshotClock: s,
          playheadLastMovedClock: j,
          playheadWatchdogTimer: z,
        }
      );
    }
    function h(e, t, n, r, o, a) {
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
          (r == null || r.paused || y(r, m)) &&
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
          !y(r, e.bufferingBeginBufferAheadSec) &&
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
    function y(e, t) {
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
    ((l.internal_isPlayheadStuckAtBufferedRangeEndWithIslandAhead = u),
      (l.internal_isPlayheadStuckInRecoverySeek = c),
      (l.internal_shouldRunPlayheadStallRecovery = m),
      (l.internal_isLiveNudgeBufferPresent = p),
      (l.internal_isNudgeTargetWithinBuffered = _),
      (l.VideoPlayerNextgendashMediaElementSM = f));
  },
  98,
);
