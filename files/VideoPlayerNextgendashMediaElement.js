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
          u = n.onMediaSourceAttachedChanged,
          c = n.onRequestRecoveryFromSourceReset,
          d = t.env,
          m = t.event,
          p = t.eventClock,
          _ = t.sendToSelf,
          f = t.state,
          y = t.thisName,
          C = t.thisSm,
          b = function () {
            _({ type: "_playhead_watchdog" });
          },
          v = function (t, n, r) {
            var e = f.mediaElement;
            if (e != null) {
              d.host.mediaElementSetPlayhead(d, e, t);
              var a = t - n.currentTime;
              a >= d.config.gapSkipMinLogThresholdSec &&
                i(
                  o("nextgendasherr").nextgendasherr(
                    d,
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
        switch (f.state) {
          case "idle":
            switch (m.type) {
              case "__enter":
                return;
              case "__exception":
                return;
              case "__dispose":
                return;
              case "update_media_element": {
                var S,
                  R = f.mediaElement,
                  L = f.mediaElementUnsubscribe,
                  E = (S = m.mediaElement) != null ? S : null;
                if (E === R) {
                  var k = f.mediaSourceIndex;
                  if (
                    E !== null &&
                    k !== null &&
                    (f.mediaSourceHandle !== null || f.mediaSource !== null)
                  ) {
                    var I = d.host.mediaElementCollectSnapshot(d, E);
                    if (!I.mediaSourceAttached) {
                      (i(
                        o("nextgendasherr").nextgendasherr(
                          d,
                          "VideoPlayerNextgendashMediaElementRequestingSourceRecoveryFromSourceReset",
                        ),
                      ),
                        c(k));
                      return;
                    }
                  }
                  d.logging.log(d, {
                    format:
                      "[" +
                      y +
                      "] Ignored " +
                      m.type +
                      " with the same mediaElement=%s",
                    params: [R],
                    type: "generic_info",
                  });
                  return;
                } else {
                  (L && L(),
                    R != null && d.host.mediaElementSetSource(d, R, null));
                  var T = null;
                  if (E != null) {
                    T = d.host.mediaElementSubscribe(
                      d,
                      E,
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
                          d.config.playheadPredictIntervalMs > 0 &&
                          a === "timeupdate"
                        ) {
                          var l = C.state.lastPlayheadSyncPerfMs;
                          if (
                            l != null &&
                            d.host.clock().perfMs - l <
                              d.config.playheadPredictIntervalMs
                          )
                            return;
                        }
                        var u = d.host.mediaElementCollectSnapshot(d, i);
                        if (
                          d.config
                            .mediaElementSkipUpdateIfFullyBufferedAndOnlyPlayheadMoving
                        ) {
                          var c,
                            m = u != null ? u : {},
                            p = m.currentTime,
                            f = m.seeking,
                            g = babelHelpers.objectWithoutPropertiesLoose(m, e),
                            h =
                              (c = C.state.mediaElementSnapshot) != null
                                ? c
                                : {},
                            y = h.currentTime,
                            b = h.seeking,
                            v = babelHelpers.objectWithoutPropertiesLoose(h, s);
                          if (
                            r("deepEquals")(g, v) &&
                            o(
                              "VideoPlayerNextgendashMediaUtils",
                            ).isFullyBuffered(u)
                          )
                            return;
                        }
                        _({
                          domEventAdjustedClock: n,
                          domEventType: a,
                          mediaElementSnapshot: u,
                          type: "_media_element_event",
                        });
                      },
                    );
                    var D =
                      !d.config.skipPlayheadRestoreOnMediaElementChange &&
                      f.lastNonZeroNonErrorCurrentTimeSec != null &&
                      f.lastNonZeroNonErrorCurrentTimeSec !== 0;
                    f.mediaSourceHandle
                      ? d.host.mediaElementSetSource(
                          d,
                          E,
                          { mediaSourceHandle: f.mediaSourceHandle },
                          D
                            ? {
                                playheadMediaTimeSec:
                                  f.lastNonZeroNonErrorCurrentTimeSec,
                              }
                            : void 0,
                        )
                      : f.mediaSource
                        ? d.host.mediaElementSetSource(
                            d,
                            E,
                            { mediaSource: f.mediaSource },
                            D
                              ? {
                                  playheadMediaTimeSec:
                                    f.lastNonZeroNonErrorCurrentTimeSec,
                                }
                              : void 0,
                          )
                        : d.host.mediaElementSetSource(d, E, null);
                  }
                  var x =
                      E != null
                        ? d.host.mediaElementCollectSnapshot(d, E)
                        : null,
                    $ = p;
                  return babelHelpers.extends(
                    {},
                    h(d.config, f, p, x, null, l),
                    g(d, f, b, a, v, u, x, $, m.type),
                    { mediaElement: E, mediaElementUnsubscribe: T },
                  );
                }
              }
              case "update_media_source": {
                var P,
                  N,
                  M,
                  w = f.mediaElement;
                if (w != null) {
                  var A =
                    !d.config.skipPlayheadRestoreOnMediaElementChange &&
                    f.lastNonZeroNonErrorCurrentTimeSec != null &&
                    f.lastNonZeroNonErrorCurrentTimeSec !== 0;
                  m.mediaSourceHandle
                    ? d.host.mediaElementSetSource(
                        d,
                        w,
                        { mediaSourceHandle: m.mediaSourceHandle },
                        A
                          ? {
                              playheadMediaTimeSec:
                                f.lastNonZeroNonErrorCurrentTimeSec,
                            }
                          : void 0,
                      )
                    : m.mediaSource
                      ? d.host.mediaElementSetSource(
                          d,
                          w,
                          { mediaSource: m.mediaSource },
                          A
                            ? {
                                playheadMediaTimeSec:
                                  f.lastNonZeroNonErrorCurrentTimeSec,
                              }
                            : void 0,
                        )
                      : d.host.mediaElementSetSource(d, w, null);
                }
                var F =
                    f.mediaElement != null
                      ? d.host.mediaElementCollectSnapshot(d, f.mediaElement)
                      : null,
                  O = p;
                return babelHelpers.extends(
                  {},
                  h(d.config, f, p, F, null, l),
                  g(d, f, b, a, v, u, F, O, m.type),
                  {
                    mediaSource: (P = m.mediaSource) != null ? P : null,
                    mediaSourceHandle:
                      (N = m.mediaSourceHandle) != null ? N : null,
                    mediaSourceIndex:
                      (M = m.mediaSourceIndex) != null ? M : null,
                  },
                );
              }
              case "_media_element_event": {
                if (
                  f.mediaElementSnapshotClock != null &&
                  m.domEventAdjustedClock.unixMs <=
                    f.mediaElementSnapshotClock.unixMs
                )
                  return;
                var B = m.mediaElementSnapshot,
                  W = m.domEventAdjustedClock;
                return babelHelpers.extends(
                  {},
                  h(d.config, f, p, B, m, l),
                  g(d, f, b, a, v, u, B, W, m.type + ":" + m.domEventType),
                  { lastPlayheadSyncPerfMs: p.perfMs },
                );
              }
              case "_playhead_watchdog": {
                var q =
                    f.mediaElement != null
                      ? d.host.mediaElementCollectSnapshot(d, f.mediaElement)
                      : null,
                  U = p;
                return babelHelpers.extends(
                  {},
                  h(d.config, f, p, q, null, l),
                  g(d, f, b, a, v, u, q, U, m.type),
                );
              }
              default:
                m.type;
                return;
            }
          case "__disposed__":
            switch (m.type) {
              case "__enter": {
                var V = m.prevState,
                  H = V.mediaElement,
                  G = V.mediaElementUnsubscribe,
                  z = V.playheadWatchdogTimer;
                (d.config.enableDisposalResourceCleanup &&
                  z != null &&
                  d.host.timers.clearTimeout(z),
                  G && G(),
                  H != null && d.host.mediaElementSetSource(d, H, null));
                return;
              }
              default:
                return;
            }
          default:
            f.state;
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
