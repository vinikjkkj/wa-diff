__d(
  "VideoPlayerNextgendashPlaybackLoop",
  [
    "Promise",
    "VideoPlayerNextgendashABR",
    "VideoPlayerNextgendashFetchedResource",
    "VideoPlayerNextgendashHostAPI",
    "VideoPlayerNextgendashManifestParser",
    "VideoPlayerNextgendashMediaUtils",
    "VideoPlayerNextgendashMp4SidxParser",
    "VideoPlayerNextgendashQPL",
    "VideoPlayerNextgendashStateMachine",
    "VideoPlayerNextgendashURLUtils",
    "VideoPlayerNextgendashWebmSidxParser",
    "deepEquals",
    "emptyFunction",
    "nextgendasherr",
    "videoUrlUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["buffer"],
      s = [
        "abortIsPendingUpdateEnd",
        "errorIsPendingUpdateEnd",
        "qplSubspanEnd",
      ],
      u = [
        "abortIsPendingUpdateEnd",
        "errorIsPendingUpdateEnd",
        "qplSubspanEnd",
      ],
      c = [
        "abortIsPendingUpdateEnd",
        "errorIsPendingUpdateEnd",
        "qplSubspanEnd",
      ],
      d = ["buffer"],
      m,
      p = [],
      _ = new Uint8Array(0);
    function f(e, t) {
      return e.config.optimizeAutoDisposeTraversal
        ? o(
            "VideoPlayerNextgendashStateMachine",
          ).skipAutoDisposeInsideThisObject(t)
        : t;
    }
    var g = 0.2,
      h = 30,
      y = 0.5,
      C = 6,
      b = 8,
      v = 1,
      S = 13,
      R = 6e4,
      L = 0.6,
      E = 0.001,
      k = 5e3,
      I = 128,
      T =
        "VideoPlayerNextgendashHostAPISourceBufferAppendBufferQuotaExceededException",
      D =
        /VideoPlayerNextgendashHostAPISourceBufferAppendBufferQuotaExceededException(?:\/|$)/,
      x = 30;
    function $(e, t, n) {
      if (e.paused || e.playbackRate === 0 || e.readyState < 3)
        return e.currentTime;
      var r = (t - e.currentTimeAbsoluteMs) / 1e3,
        o = n != null ? Math.min(Math.max(0, r), n) : Math.max(0, r),
        a = e.currentTime + o * e.playbackRate;
      return typeof e.duration == "number" ? Math.min(a, e.duration) : a;
    }
    function P(e, t) {
      var n,
        r =
          (n = t == null ? void 0 : t.currentTime) != null
            ? n
            : e.config.startTimestampSec;
      return e.config.isLivePlayback &&
        r === 0 &&
        e.config.startTimestampSec > 0
        ? e.config.startTimestampSec
        : t != null && e.config.playheadPredictIntervalMs > 0
          ? $(
              t,
              e.host.clockPerfOriginMs + e.host.clock().perfMs,
              e.config.playheadPredictIntervalMs / 1e3,
            )
          : r;
    }
    function N(e, t) {
      if (t != null && e.poolTrackingID != null) {
        var n;
        return (n = t.getFetchState(e.poolTrackingID)) != null
          ? n
          : { state: "submitted_to_pool" };
      } else if (e.responseFetch != null) return e.responseFetch.state;
      return null;
    }
    var M = {
      audioLang: null,
      audioRole: null,
      videoLang: null,
      videoRole: null,
    };
    function w(e) {
      switch (e.operationType) {
        case "append_operation": {
          var t = e.appendInfo;
          switch (t.appendInfoType) {
            case "init":
              return "append:init:" + t.representationId;
            case "data":
              return (
                "append:data:" +
                t.representationId +
                ":" +
                ("segment=" + t.segment.segmentId + ":") +
                ("media=" +
                  o("VideoPlayerNextgendashMediaUtils").debugStringifyTimeRange(
                    t.segment.mediaTimeRange,
                  ) +
                  ":") +
                ("bytes=" + t.dataByteRangeStart + "+" + t.dataByteRangeLength)
              );
            default:
          }
          break;
        }
        case "remove_operation":
          return (
            "remove:" +
            o("VideoPlayerNextgendashMediaUtils").debugStringifyTimeRange(
              e.removeRange,
            )
          );
        default:
      }
      return "unknown";
    }
    function A(e, t, n) {
      if (
        (n === void 0 && (n = k),
        e == null || e.operationState !== "wait_updateend")
      )
        return !1;
      var r = e.operationTiming.started;
      return r == null
        ? !1
        : o(
            "VideoPlayerNextgendashHostAPI",
          ).diffVideoPlayerNextgendashClockstamp(t, r).unixMs >= n;
    }
    function F(e, t) {
      return t.type === "BaseURLByteRange"
        ? o("VideoPlayerNextgendashURLUtils").addByteRangeParamsToURL(
            e,
            t.baseURL,
            t.byteRange,
          )
        : t.type === "BaseURLInitURL"
          ? o("VideoPlayerNextgendashURLUtils").combineSegmentTemplateURL(
              t.baseURL,
              t.initURL,
            )
          : o("VideoPlayerNextgendashURLUtils").combineSegmentTemplateURL(
              t.baseURL,
              t.relativeURL,
            );
    }
    var O = o("VideoPlayerNextgendashStateMachine").defineStateMachine(
      null,
      function (e) {
        var t,
          n = e.args,
          r = n.playerStateFromMain,
          a = n.sendMediaSourceToMain,
          i = e.env,
          l = e.eventClock,
          s = e.sendToSelf,
          u = {
            debugPlaybackLoopRecentChanges: [],
            fetchDemands: [],
            loopState: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject({
              loopIteration: 0,
              loopReasons: be(i, 0, p, "0:initial"),
              loopScheduledToUnixMs: l.unixMs,
              loopTimerDelayMs: null,
              loopTimerID: null,
            }),
            mediaSourceState: he(i, s, a, null),
            playerStateFromMain: r,
            playerWarningDedupMap: f(i, new Map()),
            recoveringFromMediaError: null,
            recoveringFromMediaErrorAttempt: 0,
            state: "playing",
            streams: [],
            volatilityState: i.config.enableDynamicBufferWatermarks
              ? f(i, {
                  abrSwitchTimestamps: [],
                  bandwidthSamples: [],
                  lastBandwidthDiagnosticsSignature: null,
                  pendingSpeculativeSidxKeys: new Map(),
                })
              : null,
          };
        return (t = Se(i, u, u.loopState.loopIteration, e)) != null ? t : u;
      },
      function (e) {
        var t = e.args,
          n = t.sendMediaSourceToMain,
          r = t.sendPlayerWarningToMain,
          a = e.env,
          i = e.event,
          l = e.eventClock,
          s = e.sendToSelf,
          u = e.state;
        function c(e) {
          function t(e, t) {
            e.state === "playing" &&
              e.streams.forEach(function (e) {
                e.sourceBufferState != null &&
                  t(e.sourceBufferState.sourceBufferCleanup);
              });
          }
          u.state !== "playing" &&
            e.loopState.loopTimerID != null &&
            a.host.timers.clearTimeout(e.loopState.loopTimerID);
          var n = new Set();
          (t(e, function (e) {
            n.add(e);
          }),
            u.state !== "__disposed__" &&
              t(u, function (e) {
                n.delete(e);
              }),
            n.forEach(function (e) {
              return e();
            }));
        }
        var d = 3;
        function m(e, t) {
          var i = e.recoveringFromMediaError,
            l = e.recoveringFromMediaErrorAttempt;
          if (i != null || l >= d) {
            var u = [];
            throw (
              i != null && u.push("already attempting a recovery"),
              l >= d && u.push("already reached max attempts"),
              o("nextgendasherr").nextgendasherrFromCause(
                a,
                t,
                "VideoPlayerNextgendashInvalidStartErrorRecoveryAttempt",
                "Invalid attempt to start error recovery: " + u.join(" and "),
              )
            );
          }
          var c = e,
            m = c,
            p = m.mediaSourceState;
          p.mediaSourceCleanup();
          var _ = he(a, s, n, p.mediaSourceIndex);
          return (
            r(
              o("nextgendasherr").nextgendasherrFromCause(
                a,
                t,
                "VideoPlayerNextgendashPlaybackLoopRecoveringFromError",
                "Replacing MediaSource #%s with #%s",
                p.mediaSourceIndex,
                _.mediaSourceIndex,
              ),
            ),
            (c = babelHelpers.extends({}, c, {
              debugPlaybackLoopRecentChanges: Ce(
                c.debugPlaybackLoopRecentChanges,
                [
                  "recoveringFromError:" + t.name,
                  "mediaSourceState:replace:" +
                    p.mediaSourceIndex +
                    "-->" +
                    _.mediaSourceIndex,
                ],
              ),
              mediaSourceState: _,
              recoveringFromMediaError: t,
              recoveringFromMediaErrorAttempt:
                c.recoveringFromMediaErrorAttempt + 1,
              streams: c.streams.map(function (e) {
                return e.sourceBufferState != null
                  ? (e.sourceBufferState.sourceBufferCleanup(),
                    babelHelpers.extends({}, e, {
                      appendState: o(
                        "VideoPlayerNextgendashStateMachine",
                      ).skipAutoDisposeInsideThisObject({
                        appendChain: null,
                        currSourceBufferOperation: null,
                        lastAppendOperation: null,
                        lastRemoveOperation: null,
                        lastSourceBufferOperation: null,
                        pendingAppendOperations: [],
                        pendingRemoveOperations: [],
                        sourceBufferRanges: [],
                        sourceBufferRangesAnnotated: [],
                        workaroundForSegmentBufferedInsufficiently: [],
                      }),
                      sourceBufferState: null,
                    }))
                  : e;
              }),
            })),
            c
          );
        }
        switch (u.state) {
          case "playing":
            switch (i.type) {
              case "__enter": {
                c(i.prevState);
                return;
              }
              case "__exception":
                return;
              case "__dispose":
                return;
              case "_fetch_transitioned":
                return se(a, e, i.type + ":" + i.requestID, 0, u);
              case "update_player_state_from_main": {
                var p,
                  _,
                  f,
                  g = o(
                    "VideoPlayerNextgendashStateMachine",
                  ).skipAutoDisposeInsideThisObject(i.playerStateFromMain),
                  h = babelHelpers.extends({}, u, { playerStateFromMain: g }),
                  y = h.playerStateFromMain.dashManifestData;
                if (
                  (y == null ? void 0 : y.createdAt.perfMs) !==
                  ((p = u.playerStateFromMain.dashManifestData) == null
                    ? void 0
                    : p.createdAt.perfMs)
                ) {
                  var C,
                    b,
                    v = [],
                    S =
                      (y == null ? void 0 : y.metadata.manifestType) ===
                      "dynamic",
                    R =
                      (C =
                        (b = h.playerStateFromMain.mediaElementSnapshot) == null
                          ? void 0
                          : b.currentTime) != null
                        ? C
                        : null;
                  ((h = babelHelpers.extends({}, h, {
                    streams: h.streams.map(function (e) {
                      var t = wt(a, v, e, y);
                      if (S) {
                        var n = {};
                        for (var r of t.playableRepresentations)
                          if (r.segmentsInfo.type === "SegmentTemplate") {
                            var i = r.segmentsInfo,
                              l = a.config.enableLive
                                ? i.segmentTimelinePredictive
                                : null,
                              s = Et(i, !0),
                              u = xt(a, t.type, r.representationId, s, !0),
                              c = t.sidxByRepresentationId[r.representationId],
                              d =
                                c != null
                                  ? c.filter(function (e) {
                                      return e.isPredictiveSegment !== !0;
                                    })
                                  : c,
                              m = void 0;
                            if (d != null && d.length > 0 && u.length > 0) {
                              var p = d[d.length - 1],
                                _ = p.mediaTimeRange[1],
                                f = p.segmentId,
                                g = [];
                              for (var h of u)
                                if (h.mediaTimeRange[0] >= _ - E) {
                                  var C = f + 1 + g.length;
                                  g.push(
                                    babelHelpers.extends({}, h, {
                                      segmentId: C,
                                    }),
                                  );
                                }
                              m = [].concat(d, g);
                            } else m = u;
                            ((m = kt(m, R, a.config.liveLookbackBufferSec)),
                              (n[r.representationId] =
                                l != null ? Dt(l, m, i.timescale) : m));
                          } else
                            t.sidxByRepresentationId[r.representationId] !=
                              null &&
                              (n[r.representationId] =
                                t.sidxByRepresentationId[r.representationId]);
                        t = babelHelpers.extends({}, t, {
                          sidxByRepresentationId: o(
                            "VideoPlayerNextgendashStateMachine",
                          ).skipAutoDisposeInsideThisObject(n),
                        });
                      }
                      return t;
                    }),
                  })),
                    (h = babelHelpers.extends({}, h, {
                      debugPlaybackLoopRecentChanges: Ce(
                        h.debugPlaybackLoopRecentChanges,
                        v,
                      ),
                    })));
                }
                var L = (_ = g.mediaElementSnapshot) == null ? void 0 : _.error;
                if (
                  L != null &&
                  !h.recoveringFromMediaError &&
                  h.recoveringFromMediaErrorAttempt < d
                )
                  h = m(
                    h,
                    o("nextgendasherr").nextgendasherrFromMediaError(a, L),
                  );
                else if (
                  h.recoveringFromMediaError &&
                  g.mediaElementSnapshot != null &&
                  g.mediaElementSnapshot.error == null &&
                  g.mediaSourceIndexApplied ===
                    h.mediaSourceState.mediaSourceIndex
                ) {
                  var k = h,
                    I = k.recoveringFromMediaError;
                  (r(
                    o("nextgendasherr").nextgendasherrFromCause(
                      a,
                      I,
                      "VideoPlayerNextgendashPlaybackLoopRecoveredFromMediaError",
                    ),
                  ),
                    (h = babelHelpers.extends({}, h, {
                      debugPlaybackLoopRecentChanges: Ce(
                        h.debugPlaybackLoopRecentChanges,
                        ["recoveringFromMediaError:" + I.name + ":recovered"],
                      ),
                      recoveringFromMediaError: null,
                      streams: h.streams.map(function (e) {
                        return e.streamFatalError != null
                          ? babelHelpers.extends({}, e, {
                              streamFatalError: null,
                            })
                          : e;
                      }),
                    })));
                } else if (
                  L != null &&
                  !h.recoveringFromMediaError &&
                  h.recoveringFromMediaErrorAttempt >= d &&
                  a.config.fatalErrorOnMediaErrorRecoveryCapReached
                )
                  return (
                    s({
                      exception: o("nextgendasherr").nextgendasherrFromCause(
                        a,
                        o("nextgendasherr").nextgendasherrFromMediaError(a, L),
                        "VideoPlayerNextgendashPlaybackLoopMediaErrorRecoveryAttemptsExhausted",
                        "Reached media error recovery attempt cap (%s) with media element still in error",
                        d,
                      ),
                      type: "__exception",
                    }),
                    h
                  );
                return (f = se(a, e, i.type + ":" + i.reason, 0, h)) != null
                  ? f
                  : h;
              }
              case "request_recovery_from_source_reset": {
                var T,
                  D = u,
                  x =
                    "SourceResetRecoveryRequest:" +
                    i.mediaSourceIndex +
                    ":" +
                    D.mediaSourceState.mediaSourceIndex;
                if (i.mediaSourceIndex !== D.mediaSourceState.mediaSourceIndex)
                  D = babelHelpers.extends({}, D, {
                    debugPlaybackLoopRecentChanges: Ce(
                      D.debugPlaybackLoopRecentChanges,
                      [x + "->mediaSourceIndexMismatch"],
                    ),
                  });
                else if (
                  !D.recoveringFromMediaError &&
                  D.recoveringFromMediaErrorAttempt < d
                )
                  D = m(
                    babelHelpers.extends({}, D, {
                      debugPlaybackLoopRecentChanges: Ce(
                        D.debugPlaybackLoopRecentChanges,
                        [x + "->beginErrorRecoveryDueToElementSourceReset"],
                      ),
                    }),
                    o("nextgendasherr").nextgendasherr(
                      a,
                      "VideoPlayerNextgendashPlaybackLoopElementSourceResetAsError",
                    ),
                  );
                else {
                  var $ = [];
                  (D.recoveringFromMediaError &&
                    $.push("StillAttemptingPreviousRecovery"),
                    D.recoveringFromMediaErrorAttempt >= d &&
                      $.push("ReachedRetryCap"),
                    (D = babelHelpers.extends({}, D, {
                      debugPlaybackLoopRecentChanges: Ce(
                        D.debugPlaybackLoopRecentChanges,
                        [x + "->" + $.join(":")],
                      ),
                    })));
                }
                return (T = se(a, e, "" + i.type, 0, D)) != null ? T : D;
              }
              case "_media_source_event": {
                var P,
                  N = u,
                  M =
                    "mediaSourceEvent:" +
                    i.mediaSourceIndex +
                    ":" +
                    i.mediaSourceEventType;
                if (
                  i.mediaSource !== N.mediaSourceState.mediaSource ||
                  i.mediaSourceIndex !== N.mediaSourceState.mediaSourceIndex
                )
                  N = babelHelpers.extends({}, N, {
                    debugPlaybackLoopRecentChanges: Ce(
                      N.debugPlaybackLoopRecentChanges,
                      [
                        M +
                          "->mediaSourceMismatch:" +
                          N.mediaSourceState.mediaSourceIndex,
                      ],
                    ),
                  });
                else if (
                  N.mediaSourceState.waitingForFirstSourceopen &&
                  i.mediaSourceEventType === "sourceopen"
                )
                  N = babelHelpers.extends({}, N, {
                    debugPlaybackLoopRecentChanges: Ce(
                      N.debugPlaybackLoopRecentChanges,
                      [M + "->first"],
                    ),
                    mediaSourceState: babelHelpers.extends(
                      {},
                      N.mediaSourceState,
                      { waitingForFirstSourceopen: !1 },
                    ),
                  });
                else if (i.mediaSourceEventType === "sourceclose")
                  if (
                    !N.recoveringFromMediaError &&
                    N.recoveringFromMediaErrorAttempt < d
                  )
                    N = m(
                      babelHelpers.extends({}, N, {
                        debugPlaybackLoopRecentChanges: Ce(
                          N.debugPlaybackLoopRecentChanges,
                          [M + "->beginErrorRecoveryBeforeSeeingMediaError"],
                        ),
                      }),
                      o("nextgendasherr").nextgendasherr(
                        a,
                        "VideoPlayerNextgendashPlaybackLoopSourceCloseEventAsError",
                      ),
                    );
                  else {
                    var F = [];
                    if (
                      (N.recoveringFromMediaError &&
                        F.push("StillAttemptingPreviousRecovery"),
                      N.recoveringFromMediaErrorAttempt >= d &&
                        F.push("ReachedRetryCap"),
                      (N = babelHelpers.extends({}, N, {
                        debugPlaybackLoopRecentChanges: Ce(
                          N.debugPlaybackLoopRecentChanges,
                          [M + "->" + F.join(":")],
                        ),
                      })),
                      !N.recoveringFromMediaError &&
                        N.recoveringFromMediaErrorAttempt >= d &&
                        a.config.fatalErrorOnMediaErrorRecoveryCapReached)
                    )
                      return (
                        s({
                          exception: o("nextgendasherr").nextgendasherr(
                            a,
                            "VideoPlayerNextgendashPlaybackLoopSourceCloseRecoveryAttemptsExhausted",
                            "MediaSource closed after reaching recovery attempt cap (%s)",
                            d,
                          ),
                          type: "__exception",
                        }),
                        N
                      );
                  }
                else
                  N = babelHelpers.extends({}, N, {
                    debugPlaybackLoopRecentChanges: Ce(
                      N.debugPlaybackLoopRecentChanges,
                      [M],
                    ),
                  });
                return (P = se(
                  a,
                  e,
                  i.type + ":" + i.mediaSourceEventType,
                  0,
                  N,
                )) != null
                  ? P
                  : N;
              }
              case "_source_buffer_event": {
                var O = u.streams.find(function (e) {
                    var t;
                    return (
                      ((t = e.sourceBufferState) == null
                        ? void 0
                        : t.sourceBuffer) === i.sourceBuffer
                    );
                  }),
                  B =
                    O == null
                      ? void 0
                      : O.appendState.currSourceBufferOperation;
                if (O != null && B != null) {
                  var W = !1,
                    q = [],
                    U = u.streams.map(function (e) {
                      var t, n;
                      if (e !== O) return e;
                      var o = ut(
                        a,
                        r,
                        e,
                        q,
                        i,
                        l,
                        (t =
                          (n = u.playerStateFromMain.mediaElementSnapshot) ==
                          null
                            ? void 0
                            : n.currentTime) != null
                          ? t
                          : 0,
                        function () {
                          return lt(a, e.sourceBufferState);
                        },
                      );
                      return o != null
                        ? ((W = !0), babelHelpers.extends({}, e, o))
                        : e;
                    }),
                    V = babelHelpers.extends({}, u, {
                      debugPlaybackLoopRecentChanges: Ce(
                        u.debugPlaybackLoopRecentChanges,
                        q,
                      ),
                      streams: U,
                    });
                  if (W) {
                    var H;
                    return (H = se(
                      a,
                      e,
                      i.type +
                        ":" +
                        i.sourceBufferEventType +
                        ":" +
                        B.operationState +
                        ":stateHasChanged",
                      0,
                      V,
                    )) != null
                      ? H
                      : V;
                  } else
                    return a.config.disablePlaybackLoopSchedulingOnTimer
                      ? u
                      : se(
                          a,
                          e,
                          i.type +
                            ":" +
                            i.sourceBufferEventType +
                            ":" +
                            B.operationState +
                            ":!stateHasChanged",
                          ae,
                          u,
                        );
                } else
                  return a.config.disablePlaybackLoopSchedulingOnTimer
                    ? u
                    : se(
                        a,
                        e,
                        i.type +
                          ":" +
                          i.sourceBufferEventType +
                          ":null_currSourceBufferOperation",
                        ae,
                        u,
                      );
              }
              case "_observe_and_act": {
                var G =
                    a.config.isLivePlayback &&
                    u.recoveringFromMediaError == null
                      ? u.streams.find(function (e) {
                          return A(e.appendState.currSourceBufferOperation, l);
                        })
                      : null,
                  z =
                    G == null
                      ? void 0
                      : G.appendState.currSourceBufferOperation;
                if (
                  G != null &&
                  z != null &&
                  z.operationState === "wait_updateend"
                ) {
                  var j,
                    K,
                    Q,
                    X,
                    Y = z.operationTiming,
                    J = Y.started;
                  if (J == null) return Se(a, u, i.loopIteration, e);
                  var Z = o(
                      "VideoPlayerNextgendashHostAPI",
                    ).diffVideoPlayerNextgendashClockstamp(l, J).unixMs,
                    ee = o("nextgendasherr").nextgendasherr(
                      a,
                      "VideoPlayerNextgendashPlaybackLoopLiveSourceBufferOperationTimedOut",
                      "%s:%s SourceBuffer operation stuck in wait_updateend for %sms: %s",
                      G.type,
                      (j = G.targetRepresentationId) != null
                        ? j
                        : "no_target_representation",
                      Z,
                      w(z),
                    ),
                    te =
                      "liveSourceBufferOperationTimedOut:" +
                      G.type +
                      ":" +
                      ((K = G.targetRepresentationId) != null
                        ? K
                        : "no_target_representation") +
                      ":" +
                      Z +
                      "ms";
                  if (u.recoveringFromMediaErrorAttempt < d) {
                    var ne,
                      re = babelHelpers.extends({}, u, {
                        debugPlaybackLoopRecentChanges: Ce(
                          u.debugPlaybackLoopRecentChanges,
                          [te + "->beginErrorRecovery:" + w(z)],
                        ),
                      }),
                      oe = m(re, ee);
                    return (ne = se(
                      a,
                      e,
                      i.type + ":liveSourceBufferOperationTimedOut",
                      0,
                      oe,
                    )) != null
                      ? ne
                      : oe;
                  }
                  var ie = babelHelpers.extends({}, u, {
                    debugPlaybackLoopRecentChanges: Ce(
                      u.debugPlaybackLoopRecentChanges,
                      [
                        "liveSourceBufferOperationTimedOut:" +
                          G.type +
                          ":" +
                          ((Q = G.targetRepresentationId) != null
                            ? Q
                            : "no_target_representation") +
                          "->ReachedRetryCap",
                      ],
                    ),
                  });
                  return a.config.fatalErrorOnMediaErrorRecoveryCapReached
                    ? (s({
                        exception: o("nextgendasherr").nextgendasherrFromCause(
                          a,
                          ee,
                          "VideoPlayerNextgendashPlaybackLoopLiveSourceBufferOperationTimeoutRecoveryAttemptsExhausted",
                          "Reached media error recovery attempt cap (%s) with SourceBuffer operation still stuck in wait_updateend",
                          d,
                        ),
                        type: "__exception",
                      }),
                      ie)
                    : (X = se(
                          a,
                          e,
                          i.type +
                            ":liveSourceBufferOperationTimedOutReachedRetryCap",
                          ae,
                          ie,
                        )) != null
                      ? X
                      : ie;
                }
                return Se(a, u, i.loopIteration, e);
              }
              default:
                i.type;
                return;
            }
          case "__disposed__": {
            switch (i.type) {
              case "__enter": {
                (c(i.prevState),
                  a.config.enableDisposalResourceCleanup &&
                    i.prevState.mediaSourceState.mediaSourceCleanup());
                return;
              }
            }
            return;
          }
          default:
            u.state;
            return;
        }
      },
    );
    function B(e, t, n, r, a) {
      var i = a.templateNumber,
        l = a.templateTime,
        s = r;
      for (var u of [
        ["Number", i],
        ["Time", l],
      ]) {
        var c = u[0],
          d = u[1],
          m = new RegExp("\\$" + c + "\\$", "g");
        if (m.test(s)) {
          if (d == null)
            throw o("nextgendasherr").nextgendasherr(
              e,
              "VideoPlayerNextgendashPlaybackLoopSegmentURLTemplateMissingValue/" +
                c,
              "%s:%s - Unable to build URL for segment data#%s: missing value for $" +
                c +
                "$",
              t,
              n,
              a.segmentId,
            );
          s = s.replace(m, String(d));
        }
      }
      return s;
    }
    function W(e, t) {
      return e.slice().sort(function (e, n) {
        var r = t.indexOf(e.representationId);
        r === -1 && (r = Number.POSITIVE_INFINITY);
        var o = t.indexOf(n.representationId);
        return (
          o === -1 && (o = Number.POSITIVE_INFINITY),
          r < o
            ? -1
            : r > o
              ? 1
              : e.demandedAtClock.perfMs - n.demandedAtClock.perfMs < 0.001
                ? e.fetchDemandOrder - n.fetchDemandOrder
                : e.demandedAtClock.perfMs - n.demandedAtClock.perfMs
        );
      });
    }
    function q(e) {
      for (var t of e.dataKeyToResponseByteRange.keys())
        if (!t.startsWith("init-") && !t.startsWith("sidx-")) return !1;
      return !0;
    }
    function U(e, t, n, r, o, a) {
      for (var i = 0; i < t.length; ++i) {
        var l = t[i],
          s = N(l, a);
        if (s != null) {
          var u = null;
          if (s.state !== "failed")
            if (s.state === "aborted" || s.state === "__disposed__")
              u = "EvictedAbortedOrInvalid";
            else if (
              s.state === "submitted_to_pool" ||
              s.state === "__null__" ||
              s.state === "waiting_start" ||
              s.state === "waiting_retry_or_failed" ||
              s.state === "waiting_start_from_retry" ||
              s.state === "waiting_headers" ||
              s.state === "waiting_data"
            ) {
              var c = q(l);
              if (c) {
                var d;
                n.set(
                  l.streamType,
                  ((d = n.get(l.streamType)) != null ? d : 0) + 1,
                );
              } else {
                var m;
                r.set(
                  l.streamType,
                  ((m = r.get(l.streamType)) != null ? m : 0) + 1,
                );
              }
            } else s.state === "completed" || s.state;
          u != null &&
            (o.push(
              "evictedFetch:" +
                Array.from(l.dataKeyToResponseByteRange.keys()).join("+") +
                ":" +
                u,
            ),
            a != null &&
              l.poolTrackingID != null &&
              a.disposeFetch(l.poolTrackingID),
            (t[i] = babelHelpers.extends({}, l, {
              evictedClock: e.host.clock(),
              evictedReason: u,
              poolTrackingID: null,
              responseFetch: null,
            })));
        }
      }
    }
    var V = 5 * 1e3;
    function H(e, t) {
      if (e.config.isLivePlayback) return !1;
      var n = o("videoUrlUtils").parseCdnUrlParams(t).expirationDate;
      return n != null && n.getTime() - V <= e.host.clock().unixMs;
    }
    function G(e, t) {
      return (
        H(e, t.baseURL) || (t.type === "BaseURLInitURL" && H(e, t.initURL))
      );
    }
    function z(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (r[0] <= t && t <= r[1]) return (r[1] - t) * 1e3;
      }
      return 0;
    }
    function j(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (r[0] <= t && t <= r[1]) return Math.max(t, r[1]);
      }
      return t;
    }
    function K(e, t, n) {
      return e !== void 0 && t < n && St(e, [t, n], g);
    }
    function Q(e, t, n) {
      return e !== void 0 && t >= n && St(e, [n, t], g);
    }
    function X(e, t, n) {
      if (t == null || n == null) return !0;
      var r = e.segmentsInfo;
      if (r.type !== "SegmentTemplate") return !0;
      var o = j(t, n),
        a = Et(r, !0),
        i = a.find(function (e) {
          return e.mediaTimeRange[1] > o - E;
        });
      return i != null && i.mediaTimeRange[0] <= o + g;
    }
    function Y(e, t) {
      return t ? (e < 2e3 ? 3 : e < 5e3 ? 2 : 1) : 1;
    }
    function J(e, t, n) {
      n === void 0 && (n = 3e4);
      var r = e.filter(function (e) {
        return t - e < n;
      });
      return Math.min(r.length / 3, 1);
    }
    function Z(e, t, n) {
      n === void 0 && (n = R);
      var r = e.filter(function (e) {
        return t - e.timestamp < n;
      });
      if (r.length < 3) return 0;
      var o =
        r.reduce(function (e, t) {
          return e + t.bandwidth;
        }, 0) / r.length;
      if (o === 0) return 0;
      var a =
          r.reduce(function (e, t) {
            return e + Math.pow(t.bandwidth - o, 2);
          }, 0) / r.length,
        i = Math.sqrt(a) / o;
      return Math.min(Math.max((i - 0.1) / 0.4, 0), 1);
    }
    function ee(e, t, n, r) {
      var o = e,
        a = t;
      n != null &&
        n.bandwidthEstimate > 0 &&
        (t == null ||
          n.bandwidthEstimate !== t.bandwidthEstimate ||
          n.bandwidthTotalWeight !== t.bandwidthTotalWeight) &&
        ((o = [].concat(o, [{ bandwidth: n.bandwidthEstimate, timestamp: r }])),
        (a = {
          bandwidthEstimate: n.bandwidthEstimate,
          bandwidthTotalWeight: n.bandwidthTotalWeight,
        }));
      var i = r - R;
      return (
        o.some(function (e) {
          return e.timestamp <= i;
        }) &&
          (o = o.filter(function (e) {
            return e.timestamp > i;
          })),
        { bandwidthSamples: o, lastBandwidthDiagnosticsSignature: a }
      );
    }
    function te(e, t, n) {
      n === void 0 && (n = 1e4);
      var r = e
        .filter(function (e) {
          return t - e.timestamp < n;
        })
        .sort(function (e, t) {
          return e.timestamp - t.timestamp;
        });
      if (r.length < 3)
        return { confidence: 0, slopePerSecond: 0, trend: "stable" };
      var o = r.length,
        a =
          r.reduce(function (e, t) {
            return e + t.timestamp;
          }, 0) / o,
        i =
          r.reduce(function (e, t) {
            return e + t.bandwidth;
          }, 0) / o,
        l = 0,
        s = 0;
      for (var u of r) {
        var c = u.timestamp - a;
        ((l += c * (u.bandwidth - i)), (s += c * c));
      }
      var d = s !== 0 ? l / s : 0,
        m = d * 1e3,
        p = i * 0.05,
        _;
      m > p ? (_ = "increasing") : m < -p ? (_ = "decreasing") : (_ = "stable");
      var f = r[o - 1].timestamp - r[0].timestamp,
        g = Math.min(f / 1e4, 1),
        h = Math.min(o / 10, 1),
        y = (g + h) / 2;
      return { confidence: y, slopePerSecond: m, trend: _ };
    }
    function ne(e, t, n, r, o) {
      if (t.length <= 1) return null;
      var a = te(n, o),
        i = a.confidence,
        l = a.slopePerSecond,
        s = a.trend;
      if (i < 0.5 || s === "stable") return null;
      var u = 10,
        c = r + l * u,
        d = c * 0.9,
        m = [].concat(t).sort(function (e, t) {
          return e.bandwidth - t.bandwidth;
        }),
        p = m[0];
      for (var _ of m)
        if (_.bandwidth <= d) p = _;
        else break;
      return p.representationId === e
        ? null
        : { confidence: i, representation: p, trend: s };
    }
    function re(e, t, n, r, o, a, i, l) {
      for (var s = 2, u = 1, c = 1, d = 0; d < t.length; ++d) {
        var m = t[d];
        if (!(m.responseFetch != null || m.poolTrackingID != null)) {
          if (e.config.enableCdnUrlRefresh && G(e, m.requestInfoArgs)) {
            m.isAwaitingUrlRefresh ||
              (t[d] = babelHelpers.extends({}, m, {
                isAwaitingUrlRefresh: !0,
              }));
            continue;
          }
          var p = q(m),
            _ =
              e.config.enableCombinedInitSidxFetch ||
              (!p && e.config.enableAdaptiveConcurrentSegmentFetching),
            f = void 0,
            g = void 0;
          if (_) {
            var h, y;
            if (
              ((f = p
                ? (h = n.get(m.streamType)) != null
                  ? h
                  : 0
                : (y = r.get(m.streamType)) != null
                  ? y
                  : 0),
              p)
            )
              g = s;
            else if (e.config.enableAdaptiveConcurrentSegmentFetching) {
              var C,
                b,
                v = (C = i.get(m.streamType)) != null ? C : 0,
                S = (b = l.get(m.streamType)) != null ? b : !1;
              g = Y(v, S);
            } else g = u;
          } else {
            var R,
              L,
              E =
                ((R = n.get(m.streamType)) != null ? R : 0) +
                ((L = r.get(m.streamType)) != null ? L : 0);
            ((f = E), (g = c));
          }
          if (f < g) {
            if (p) {
              var k;
              n.set(
                m.streamType,
                ((k = n.get(m.streamType)) != null ? k : 0) + 1,
              );
            } else {
              var I;
              r.set(
                m.streamType,
                ((I = r.get(m.streamType)) != null ? I : 0) + 1,
              );
            }
            var T = o(m);
            (a.push(
              "newFetch:" +
                Array.from(m.dataKeyToResponseByteRange.keys()).join("+"),
            ),
              typeof T == "string"
                ? (t[d] = babelHelpers.extends({}, m, {
                    evictedClock: null,
                    evictedReason: null,
                    poolTrackingID: T,
                    responseFetch: null,
                  }))
                : (t[d] = babelHelpers.extends({}, m, {
                    evictedClock: null,
                    evictedReason: null,
                    poolTrackingID: null,
                    responseFetch: T,
                  })));
          }
        }
      }
    }
    function oe(e, t, n, r, a, i, l) {
      var s = new Map(),
        u = new Map();
      U(e, n, s, u, r, t.args.fetchPoolAPI);
      var c =
        e.config.trackScrollPosition && e.config.qplEnabled ? new Map() : null;
      function d(n) {
        if (c != null && a != null && a.distanceToViewport !== 0) {
          var r = a.scrollDirection,
            i =
              (a.distanceToViewport > 0 && r === "up") ||
              (a.distanceToViewport < 0 && r === "down");
          if (i) {
            var l,
              s = Math.abs(a.distanceToViewport),
              u =
                s < 0.5 ? "near" : s < 1.5 ? "mid" : s < 3 ? "far" : "very_far";
            c.set(u, ((l = c.get(u)) != null ? l : 0) + 1);
          }
        }
        var d = t.args,
          m = t.makeChildSm,
          p = t.sendToOther,
          _ = t.sendToSelf,
          f = F(e, n.requestInfoArgs);
        if (d.fetchPoolAPI != null) {
          var g = d.fetchPoolAPI.submitFetchRequest(
            babelHelpers.extends({}, n.requestDraft, { requestInfo: f }),
            function (e, t, r) {
              _(
                {
                  requestID: n.requestDraft.requestID,
                  type: "_fetch_transitioned",
                },
                r,
              );
            },
          );
          return g;
        } else {
          var h = m(
            "fetch-" + n.requestDraft.requestID,
            o("VideoPlayerNextgendashFetchedResource")
              .VideoPlayerNextgendashFetchedResourceSM,
            {
              onTransitioned: function (t, r, o) {
                _(
                  {
                    requestID: n.requestDraft.requestID,
                    type: "_fetch_transitioned",
                  },
                  o,
                );
              },
              request: babelHelpers.extends({}, n.requestDraft, {
                requestCreatedClock: e.host.clock(),
                requestInfo: f,
              }),
            },
          );
          return (p(h, { type: "start" }), h);
        }
      }
      if ((re(e, n, s, u, d, r, i, l), c != null && c.size > 0)) {
        var m,
          p,
          _,
          f,
          g = o("VideoPlayerNextgendashQPL").qplStartPlayingApi(e);
        g.point("fetch_offscreen_scrolling_away", {
          int: {
            countFar: (m = c.get("far")) != null ? m : 0,
            countMid: (p = c.get("mid")) != null ? p : 0,
            countNear: (_ = c.get("near")) != null ? _ : 0,
            countVeryFar: (f = c.get("very_far")) != null ? f : 0,
          },
        });
      }
      return n;
    }
    var ae = 1e3,
      ie = 20;
    function le(e, t, n) {
      return Math.max(0, e, t ? n : 0);
    }
    function se(e, t, a, i, l, s) {
      s === void 0 && (s = 0);
      var u = t.args.sendPlayerWarningToMain,
        c = t.sendToSelf,
        d = e.host.clock().unixMs,
        p = d + i,
        _ = l.loopState;
      if (_.loopScheduledToUnixMs == null || p < _.loopScheduledToUnixMs) {
        var f = _.loopTimerID;
        f != null && (e.host.timers.clearTimeout(f), (f = null));
        var g = le(
            p - d,
            e.config.isLivePlayback,
            e.config.liveObserveAndActMinDelayMs,
          ),
          h = l.loopState.loopIteration + 1,
          y = l.debugPlaybackLoopRecentChanges,
          C =
            h +
            ":" +
            a +
            ":" +
            (g <= 0 ? "immediately" : "new_timer=" + g + "ms"),
          b = function () {
            try {
              c({ loopIteration: h, reason: C, type: "_observe_and_act" });
            } catch (t) {
              u(
                o("nextgendasherr").nextgendasherrFromCause(
                  e,
                  t,
                  "VideoPlayerNextgendashPlaybackLoopScheduleObserveAndActUnexpectedException",
                  'Caught exception from sendToSelf({loopIteration:%s,reason:"%s"})',
                  h,
                  C,
                  "debugPlaybackLoopRecentChanges:\n " + y.join("\n "),
                ),
              );
            }
          },
          v = babelHelpers.extends({}, l, {
            loopState: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends({}, _, {
                loopReasons: be(e, _.loopIteration, _.loopReasons, C),
                loopScheduledToUnixMs: d + g,
                loopTimerDelayMs: g,
                loopTimerID: g > 0 ? e.host.timers.setTimeout(b, g) : null,
              }),
            ),
          });
        return g > 0
          ? v
          : s >= ie
            ? (u(
                o("nextgendasherr").nextgendasherr(
                  e,
                  "VideoPlayerNextgendashPlaybackLoopScheduleObserveAndActRecursion",
                  "Too many recursive iterations: %s %s %s",
                  s,
                  "loopReasons=" + v.loopState.loopReasons.join(","),
                  "debugPlaybackLoopRecentChanges:\n " +
                    v.debugPlaybackLoopRecentChanges.join("\n "),
                ),
              ),
              (m || (m = n("Promise")))
                .resolve()
                .then(b)
                .catch(r("emptyFunction")),
              v)
            : Se(e, v, h, t, s);
      } else return;
    }
    var ue = " ** ",
      ce = /^(.*)[ ][*][*][ ](\d+)$/;
    function de(e) {
      var t = [],
        n = null,
        r = 0;
      for (var o of e) {
        var a = o.includes(ue) ? ce.exec(o) : null,
          i = 1;
        if (a != null) {
          var l = parseInt(a[2], 10);
          isNaN(l) || (i = l);
        }
        var s = (a != null ? a[1] : "") || o;
        if (n === s) {
          r += i;
          continue;
        }
        (me(t, n, r), (n = s), (r = i));
      }
      return (me(t, n, r), t);
    }
    function me(e, t, n) {
      t != null && e.push("" + t + (n === 1 ? "" : " ** " + n));
    }
    function pe(e, t, n, r) {
      return n ? e : Math.max(0, t - r);
    }
    function _e(e, t, n, r) {
      var a;
      if (
        !e.host.mediaSourceEndOfStreamCallIsExpectedToBeSafeAndNotNoop(
          e,
          t.mediaSourceState.mediaSource,
          t.playerStateFromMain.mediaElementSnapshot,
        )
      ) {
        n.push(
          "endOfStream skipped: !mediaSourceEndOfStreamCallIsExpectedToBeSafeAndNotNoop",
        );
        return;
      }
      var i =
          (a = t.playerStateFromMain.dashManifestData) == null
            ? void 0
            : a.metadata.manifestType,
        l =
          e.config.liveEndedTransitionOnStallEnabled &&
          e.config.isLivePlayback &&
          e.config.enableLive &&
          i === "static",
        s = r || l,
        u = [],
        c = [];
      t.streams.forEach(function (t) {
        if (!(t.type !== "video" && t.type !== "audio")) {
          if (t.targetRepresentationId == null || t.sourceBufferState == null) {
            var n = [];
            (t.targetRepresentationId == null &&
              n.push("NullTargetRepresentationId"),
              t.sourceBufferState == null && n.push("NullSourceBufferState"));
            var r = n.join("And");
            throw o("nextgendasherr").nextgendasherr(
              e,
              "VideoPlayerNextgendashEndOfStreamRequiredStreamNotSetup/" + r,
              "%s:%s - Unable to endOfStream() for required stream that is not setup: %s",
              t.type,
              t.targetRepresentationId,
              n.join(" and "),
            );
          }
          var a = !1,
            i,
            l = t.appendState.sourceBufferRanges,
            c =
              t.targetRepresentationId != null
                ? t.sidxByRepresentationId[t.targetRepresentationId]
                : null;
          if (c != null) {
            var d;
            ((i = c.findLast(function (e) {
              return e.isEndingSegment;
            })),
              i == null &&
                s &&
                (i = c.findLast(function (e) {
                  return e.isPredictiveSegment !== !0;
                })));
            var m = (d = i) == null ? void 0 : d.mediaTimeRange;
            if (m != null) {
              var p = i,
                _ =
                  s &&
                  p != null &&
                  t.appendState.workaroundForSegmentBufferedInsufficiently.some(
                    function (e) {
                      return (
                        e.representationId === t.targetRepresentationId &&
                        we(e.segment, p)
                      );
                    },
                  ),
                f = pe(m[0], m[1], _, e.config.endOfStreamBufferToleranceSec);
              l.some(function (e) {
                return o("VideoPlayerNextgendashMediaUtils").isWithinRange(
                  e,
                  f,
                );
              }) && (a = !0);
            }
          }
          u.push(a);
        }
      });
      var d =
        u.length > 0 &&
        u.every(function (e) {
          return e;
        });
      d
        ? (e.host.mediaSourceEndOfStream(
            e,
            t.mediaSourceState.mediaSource,
            t.playerStateFromMain.mediaElementSnapshot,
          ),
          n.push("endOfStream call attempted"))
        : n.push("endOfStream skipped: !shouldCallEndOfStreamAll");
    }
    var fe = 2e3;
    function ge(e, t, n, r, a) {
      var i, l;
      if (t.recoveringFromMediaError || r.streamFatalError != null)
        return { abortFurtherStreamProcessing: !0, stream: r };
      var s = r.appendState.lastSourceBufferOperation,
        u = s != null && s.operationState === "errored" ? s.error : null,
        c =
          (i =
            s != null && s.operationState === "errored"
              ? s.waitForMediaElementErrorUntilUnixMs
              : null) != null
            ? i
            : 0,
        d =
          (l = t.playerStateFromMain.mediaElementSnapshot) == null
            ? void 0
            : l.error;
      if (u && !d) {
        var m;
        if (n.unixMs < c) {
          var p;
          return (
            a.push(
              r.type +
                ":" +
                ((p = r.targetRepresentationId) != null
                  ? p
                  : "no_target_representation") +
                ":lastSourceBufferOperationErrorWaitForMediaError:" +
                (c - n.unixMs) +
                "ms",
            ),
            { abortFurtherStreamProcessing: !0, stream: r }
          );
        }
        var _ = e.host.mediaSourceCollectSnapshot(
          e,
          t.mediaSourceState.mediaSource,
        ).readyState;
        if (_ !== "open") {
          var f;
          return (
            a.push(
              r.type +
                ":" +
                ((f = r.targetRepresentationId) != null
                  ? f
                  : "no_target_representation") +
                ":lastSourceBufferOperationErrorSuppressed:mediaSourceReadyState=" +
                _,
            ),
            { abortFurtherStreamProcessing: !0, stream: r }
          );
        }
        return (
          a.push(
            r.type +
              ":" +
              ((m = r.targetRepresentationId) != null
                ? m
                : "no_target_representation") +
              ":streamFatalError:" +
              u.name,
          ),
          {
            abortFurtherStreamProcessing: !0,
            stream: babelHelpers.extends({}, r, { streamFatalError: u }),
          }
        );
      }
      if (d) {
        var g,
          h,
          y = o("nextgendasherr").nextgendasherrFromMediaError(e, d),
          C =
            u && y
              ? o("nextgendasherr").nextgendasherrFromCause.apply(
                  void 0,
                  [e, u, y.name, y.messageFormat].concat(y.messageParams),
                )
              : (g = u != null ? u : y) != null
                ? g
                : o("nextgendasherr").nextgendasherr(
                    e,
                    "VideoPlayerNextgendashPlaybackLoopUnknownStreamFatalError",
                  );
        return (
          a.push(
            r.type +
              ":" +
              ((h = r.targetRepresentationId) != null
                ? h
                : "no_target_representation") +
              ":streamFatalError:" +
              C.name,
          ),
          {
            abortFurtherStreamProcessing: !0,
            stream: babelHelpers.extends({}, r, { streamFatalError: C }),
          }
        );
      }
      return { abortFurtherStreamProcessing: !1, stream: r };
    }
    function he(e, t, n, r) {
      var a = r != null ? r + 1 : 0,
        i = e.host.mediaSourceCreate(e, function (e) {
          var n = e.domEventType,
            r = e.eventTarget;
          t({
            mediaSource: r,
            mediaSourceEventType: n,
            mediaSourceIndex: a,
            type: "_media_source_event",
          });
        }),
        l = i[0],
        s = i[1];
      return (
        n(l, a),
        o("VideoPlayerNextgendashStateMachine").skipAutoDisposeInsideThisObject(
          {
            mediaSource: l,
            mediaSourceCleanup: s,
            mediaSourceIndex: a,
            waitingForFirstSourceopen: !0,
          },
        )
      );
    }
    var ye = 60;
    function Ce(e, t) {
      return t.length === 0
        ? e
        : o(
            "VideoPlayerNextgendashStateMachine",
          ).skipAutoDisposeInsideThisObject(
            [].concat(e.slice(0, -1), de([].concat(e.slice(-1), t))).slice(-ye),
          );
    }
    function be(e, t, n, r) {
      return e.config.logStallDetailsAsPlayerWarning ||
        e.config.debugViz ||
        e.config.debugLog
        ? (r != null ? n.concat([r]) : n).filter(function (e) {
            return (
              e.startsWith(String(t + 1) + ":") ||
              e.startsWith(String(t) + ":") ||
              e.startsWith(String(t - 1) + ":") ||
              e.startsWith(String(t - 2) + ":")
            );
          })
        : p;
    }
    function ve(e) {
      return new Set(
        e
          .filter(function (e) {
            return e.isAwaitingUrlRefresh;
          })
          .map(function (e) {
            var t = [e.requestInfoArgs.baseURL];
            return (
              e.requestInfoArgs.type === "BaseURLInitURL" &&
                t.push(e.requestInfoArgs.initURL),
              t
            );
          })
          .flat(),
      );
    }
    function Se(e, t, n, r, a) {
      var i, l;
      a === void 0 && (a = 0);
      var s = r.eventClock,
        u = r.sendToSelf,
        c = r.args.requestUrlRefresh;
      if (!(n < t.loopState.loopIteration)) {
        var d = t.loopState.loopTimerID;
        d != null && (e.host.timers.clearTimeout(d), (d = null));
        var m = t.playerStateFromMain.dashManifestData,
          p = 10,
          _ = 10,
          g = [],
          S = [],
          E = 0,
          k = s,
          I = k,
          T = e.config.enableCdnUrlRefresh ? ve(t.fetchDemands) : null,
          D = t.fetchDemands,
          x = t.streams,
          $ = x,
          N = !1,
          M = !1,
          w = function () {
            (++E, ($ = x), (N = !1), (M = !1), (S.length = 0));
            try {
              if (m) {
                var a = P(e, t.playerStateFromMain.mediaElementSnapshot),
                  i = Ve({
                    enableLive: e.config.enableLive,
                    fellBehindWindowSec: h,
                    followEdgeActive: e.config.liveFollowEdgeActive,
                    hardFellBehindWindowSec:
                      e.config.liveFellBehindHardRefetchDriftSec,
                    hardStarvationBufferAheadSec: b,
                    isLivePlayback: e.config.isLivePlayback,
                    pairedRefetchEnabled:
                      e.config.liveFellBehindPairedRefetchEnabled,
                    playheadMediaTimeSec: a,
                    proactiveDriftSec: e.config.liveProactiveRefetchDriftSec,
                    refetchBehindEdgeSec: C,
                    refetchEnabled: e.config.liveFellBehindWindowRefetchEnabled,
                    starvationBufferAheadSec: y,
                    streams: $.filter(function (e) {
                      return e.type === "video" || e.type === "audio";
                    }).map(function (e) {
                      var t =
                        e.targetRepresentationId != null
                          ? e.sidxByRepresentationId[e.targetRepresentationId]
                          : null;
                      return {
                        bufferedAheadSec: We(
                          e.appendState.sourceBufferRanges,
                          a,
                        ),
                        confirmedLiveEdgeMediaTimeSec: Fe(t),
                      };
                    }),
                  }),
                  l = ["video", "audio"]
                    .map(function (a, l) {
                      var s = $.find(function (e) {
                        return e.type === a;
                      });
                      if (s != null && s.streamFatalError != null) return s;
                      var u =
                          a === "video"
                            ? m.manifestRepresentations.video.length > 0 &&
                              !m.audioOnly
                            : a === "audio"
                              ? m.manifestRepresentations.audio.length > 0 ||
                                m.audioOnly
                              : !1,
                        c = u ? s : void 0;
                      c == null &&
                        u &&
                        (a === "video"
                          ? ((c = {
                              appendState: o(
                                "VideoPlayerNextgendashStateMachine",
                              ).skipAutoDisposeInsideThisObject({
                                appendChain: null,
                                currSourceBufferOperation: null,
                                lastAppendOperation: null,
                                lastRemoveOperation: null,
                                lastSourceBufferOperation: null,
                                pendingAppendOperations: [],
                                pendingRemoveOperations: [],
                                sourceBufferRanges: [],
                                sourceBufferRangesAnnotated: [],
                                workaroundForSegmentBufferedInsufficiently: [],
                              }),
                              blockedRepresentations: f(e, {}),
                              manifestRepresentationsCount: 0,
                              playableRepresentations: [],
                              prevSelectedMediaVariant: null,
                              prevSelectedVideoQualityDisplayLabel: null,
                              quotaExceededBufferTargetRatio: 1,
                              quotaExceededLastRewardedCreatedMs: 0,
                              sidxByRepresentationId: {},
                              sourceBufferState: null,
                              streamFatalError: null,
                              targetRepresentationId: null,
                              targetRepresentationReason: null,
                              targetVariantRepresentationIds: f(e, []),
                              type: "video",
                              videoABRState: null,
                              videoABRStateClock: null,
                              videoABRSwitchClock: null,
                            }),
                            (c = wt(e, S, c, m)))
                          : a === "audio" &&
                            ((c = {
                              appendState: o(
                                "VideoPlayerNextgendashStateMachine",
                              ).skipAutoDisposeInsideThisObject({
                                appendChain: null,
                                currSourceBufferOperation: null,
                                lastAppendOperation: null,
                                lastRemoveOperation: null,
                                lastSourceBufferOperation: null,
                                pendingAppendOperations: [],
                                pendingRemoveOperations: [],
                                sourceBufferRanges: [],
                                sourceBufferRangesAnnotated: [],
                                workaroundForSegmentBufferedInsufficiently: [],
                              }),
                              blockedRepresentations: f(e, {}),
                              manifestRepresentationsCount: 0,
                              playableRepresentations: [],
                              prevSelectedMediaVariant: null,
                              prevSelectedVideoQualityDisplayLabel: null,
                              quotaExceededBufferTargetRatio: 1,
                              quotaExceededLastRewardedCreatedMs: 0,
                              sidxByRepresentationId: {},
                              sourceBufferState: null,
                              streamFatalError: null,
                              targetRepresentationId: null,
                              targetRepresentationReason: null,
                              targetVariantRepresentationIds: f(e, []),
                              type: "audio",
                            }),
                            (c = wt(e, S, c, m))));
                      var d =
                        s == null && c != null
                          ? "added"
                          : s != null && c == null
                            ? "removed"
                            : c !== s
                              ? "replaced"
                              : null;
                      if (
                        (d != null &&
                          ((N = !0),
                          S.push(
                            a +
                              ":" +
                              d +
                              ":manifestRepresentations=" +
                              ot(m.manifestRepresentations[a]),
                          )),
                        c != null)
                      ) {
                        var p = c,
                          _ = S.length;
                        try {
                          var g = ke(
                            e,
                            t,
                            m,
                            r,
                            c,
                            D,
                            n * 1e4 + l * 100 + E - 1,
                            i,
                            S,
                          );
                          ((D = g.fetchDemands), (c = g.stream));
                        } catch (t) {
                          var h = o("nextgendasherr").nextgendasherrFromCause(
                            e,
                            t,
                            "VideoPlayerNextgendashPlaybackLoopObserveAndActException",
                          );
                          (S.push(c.type + ":streamFatalError:" + h.name),
                            (c = babelHelpers.extends({}, c, {
                              streamFatalError: h,
                            })));
                        }
                        if (
                          c.streamFatalError != null &&
                          c.streamFatalError !== p.streamFatalError
                        ) {
                          var y;
                          ((M = !0),
                            e.logging.log(e, {
                              error: c.streamFatalError,
                              format: "%s:%s - new streamFatalError",
                              params: [
                                c.type,
                                (y = c.targetRepresentationId) != null
                                  ? y
                                  : "no_target_representation",
                              ],
                              type: "generic_error",
                            }));
                        }
                        if (c !== p && ((N = !0), S.length === _)) {
                          var C = Object.keys(p)
                            .map(function (e) {
                              return c != null && c[e] !== p[e] ? e : null;
                            })
                            .filter(Boolean);
                          S.push(
                            c.type + ":changeWithoutReason:" + C.join(","),
                          );
                        }
                      }
                      return c;
                    })
                    .filter(Boolean);
                N && (x = l);
              } else {
                if ($.length > 0)
                  throw o("nextgendasherr").nextgendasherr(
                    e,
                    "VideoPlayerNextgendashPlaybackLoopManifestDataDisappeared",
                  );
                return 1;
              }
            } finally {
              ((I = e.host.clock()), x !== $ && g.push.apply(g, S));
            }
          };
        e: do if (w()) break e;
        while (
          N &&
          !M &&
          E < p &&
          o(
            "VideoPlayerNextgendashHostAPI",
          ).diffVideoPlayerNextgendashClockstamp(I, k).perfMs < _
        );
        var A = [];
        if (!M) {
          var F = W(
            D,
            e.config.fetchInitSidxOfAllRepresentations
              ? x
                  .map(function (e) {
                    return e.targetRepresentationId;
                  })
                  .filter(Boolean)
              : [],
          );
          e.config.enableCdnUrlRefresh &&
            (F = F.map(function (e) {
              if (!e.isAwaitingUrlRefresh) return e;
              var t = m.manifestRepresentations[e.streamType].find(
                function (t) {
                  return t.representationId === e.representationId;
                },
              );
              if (t == null) return e;
              var n;
              return (
                e.requestInfoArgs.type === "BaseURLInitURL" &&
                t.segmentsInfo.initURL != null
                  ? (n = babelHelpers.extends({}, e.requestInfoArgs, {
                      baseURL: t.segmentsInfo.baseURL,
                      initURL: t.segmentsInfo.initURL,
                    }))
                  : (n = babelHelpers.extends({}, e.requestInfoArgs, {
                      baseURL: t.segmentsInfo.baseURL,
                    })),
                babelHelpers.extends({}, e, { requestInfoArgs: n })
              );
            }));
          var O = new Map(),
            B = new Map(),
            q = t.playerStateFromMain.mediaElementSnapshot,
            U = P(e, q);
          for (var V of x) {
            var H = z(V.appendState.sourceBufferRanges, U);
            (O.set(V.type, H),
              B.set(V.type, V.appendState.appendChain != null));
          }
          if (
            ((D = oe(
              e,
              r,
              F,
              A,
              t.playerStateFromMain.scrollPositionInfo,
              O,
              B,
            )),
            e.config.enableCdnUrlRefresh)
          ) {
            var G = Array.from(ve(D)).filter(function (e) {
              return T != null && !T.has(e);
            });
            G.length > 0 &&
              c(
                G.map(function (e) {
                  return { url: e };
                }),
              );
          }
        }
        var j = t.volatilityState,
          K = t.volatilityState;
        if (e.config.enableDynamicBufferWatermarks && K != null) {
          var Q = s.unixMs,
            X = Q - R,
            Y = K.abrSwitchTimestamps,
            J = K.bandwidthSamples,
            Z = !1,
            te = function (n) {
              var e = t.streams.find(function (e) {
                return e.type === n.type;
              });
              e != null &&
                n.targetRepresentationId != null &&
                e.targetRepresentationId != null &&
                n.targetRepresentationId !== e.targetRepresentationId &&
                (n.targetRepresentationReason === "abr_switch" ||
                  n.targetRepresentationReason === "selected_switch") &&
                ((Y = [].concat(Y, [Q])), (Z = !0));
            };
          for (var re of x) te(re);
          var ie = e.host.networkDiagnosticsReadBandwidth(
              e.config.enableBandwidthDiagnosticsFallback,
            ),
            le = ee(J, K.lastBandwidthDiagnosticsSignature, ie, Q),
            ue = le.lastBandwidthDiagnosticsSignature;
          ((le.bandwidthSamples !== J ||
            ue !== K.lastBandwidthDiagnosticsSignature) &&
            ((J = le.bandwidthSamples), (Z = !0)),
            Y.some(function (e) {
              return e <= X;
            }) &&
              ((Y = Y.filter(function (e) {
                return e > X;
              })),
              (Z = !0)),
            Z &&
              (j = f(e, {
                abrSwitchTimestamps: Y,
                bandwidthSamples: J,
                lastBandwidthDiagnosticsSignature: ue,
                pendingSpeculativeSidxKeys: K.pendingSpeculativeSidxKeys,
              })));
        }
        if (e.config.enablePredictiveSidxPrefetch && j != null && m != null) {
          var ce = e.host.networkDiagnosticsReadBandwidth(
            e.config.enableBandwidthDiagnosticsFallback,
          );
          if (ce != null && ce.bandwidthEstimate > 0) {
            var de = null,
              me = function () {
                var t = fe.type;
                if (t !== "video" && t !== "audio") return 0;
                var r = fe.playableRepresentations;
                if (r.length <= 1) return 0;
                var o = fe.targetRepresentationId;
                if (o == null) return 0;
                var a = ne(
                  o,
                  r,
                  j.bandwidthSamples,
                  ce.bandwidthEstimate,
                  s.unixMs,
                );
                if (a != null && a.confidence > L) {
                  var i = a.representation;
                  if (i.segmentsInfo.type === "SegmentBase") {
                    var l = $e(i),
                      u = fe.sidxByRepresentationId[i.representationId] != null,
                      c = D.some(function (e) {
                        return e.activeDemands.has(l);
                      });
                    if (!u && !c) {
                      var d,
                        m,
                        p =
                          (d = (m = de) == null ? void 0 : m.get(t)) != null
                            ? d
                            : j.pendingSpeculativeSidxKeys.get(t);
                      if (p != null && p !== l) {
                        var _ = D.some(function (e) {
                          return (
                            e.activeDemands.has(p) &&
                            e.activeDemands.size === 1 &&
                            e.responseFetch == null
                          );
                        });
                        if (_) {
                          var f = Xe(D, function (e) {
                            return e === p;
                          });
                          f != null && (D = f);
                        }
                      }
                      var g = n * 1e4 + 1e6;
                      ((D = [].concat(D, [Pe(e, g, i)])),
                        de == null &&
                          (de = new Map(j.pendingSpeculativeSidxKeys)),
                        de.set(t, l));
                    }
                  }
                }
              },
              pe;
            for (var fe of x) pe = me();
            de != null &&
              (j = f(
                e,
                babelHelpers.extends({}, j, { pendingSpeculativeSidxKeys: de }),
              ));
          }
        }
        var ge =
            (i = t.playerStateFromMain.mediaElementSnapshot) == null
              ? void 0
              : i.currentTime,
          he = null;
        if (
          e.config.liveEndedTransitionOnStallEnabled &&
          e.config.isLivePlayback &&
          e.config.enableLive &&
          ge != null
        ) {
          var ye = !1,
            Se = !0,
            Re = null;
          for (var Le of x)
            if (!(Le.type !== "video" && Le.type !== "audio")) {
              ye = !0;
              var Ee =
                  Le.targetRepresentationId != null
                    ? Le.sidxByRepresentationId[Le.targetRepresentationId]
                    : null,
                Ie = Oe({
                  playheadMediaTimeSec: ge,
                  sidx: Ee,
                  toleranceSec: v,
                });
              if (Ie == null) {
                Se = !1;
                break;
              }
              Re = Re == null ? Ie : Math.min(Re, Ie);
            }
          he = ye && Se ? Re : null;
        }
        var Te = Be({
            confirmSec: e.config.liveEndedStallConfirmSec,
            drainedTailEndSec: he,
            enabled: e.config.liveEndedTransitionOnStallEnabled,
            enableLive: e.config.enableLive,
            isLivePlayback: e.config.isLivePlayback,
            manifestType:
              (l = t.playerStateFromMain.dashManifestData) == null
                ? void 0
                : l.metadata.manifestType,
            nowUnixMs: e.host.clock().unixMs,
            prev: t.liveEndedStallState,
          }),
          De = Te.confirmed,
          xe = Te.next,
          Ne = babelHelpers.extends({}, t, {
            debugPlaybackLoopRecentChanges: Ce(
              t.debugPlaybackLoopRecentChanges,
              g.concat(A),
            ),
            fetchDemands: D,
            liveEndedStallState: xe,
            loopState: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends({}, t.loopState, {
                loopIteration: n,
                loopReasons: be(e, n, t.loopState.loopReasons),
                loopScheduledToUnixMs: null,
                loopTimerDelayMs: null,
                loopTimerID: d,
              }),
            ),
            streams: x,
            volatilityState: j,
          }),
          Me = [],
          we = !1,
          Ae = !1;
        if (
          (Ne.streams.forEach(function (e) {
            (e.type !== "video" && e.type !== "audio") ||
              ((e.appendState.currSourceBufferOperation != null ||
                e.appendState.pendingAppendOperations.length !== 0 ||
                e.appendState.pendingRemoveOperations.length !== 0) &&
                (we = !0),
              e.streamFatalError != null && (Ae = !0));
          }),
          we || Ae || Ne.recoveringFromMediaError != null)
        )
          Me.push(
            "endOfStream skipped: " +
              [
                we ? "current or pending operation" : null,
                Ae ? "pending stream fatal error(s)" : null,
                Ne.recoveringFromMediaError != null
                  ? "recovering from MediaError " +
                    Ne.recoveringFromMediaError.name
                  : null,
              ]
                .filter(Boolean)
                .join(", "),
          );
        else
          try {
            _e(e, Ne, Me, De);
          } catch (t) {
            return (
              u({
                exception: o("nextgendasherr").nextgendasherrFromCause(
                  e,
                  t,
                  "VideoPlayerNextgendashPlaybackLoopCheckAndCallEndOfStreamError",
                  "%s",
                  "debugPlaybackLoopRecentChanges:\n " +
                    Ne.debugPlaybackLoopRecentChanges.join("\n "),
                  "endOfStreamDebugReasons:\n " + Me.join("\n "),
                ),
                type: "__exception",
              }),
              Ne
            );
          }
        Me.length === 0 && Me.push("endOfStream: checked, unknown result");
        var qe = babelHelpers.extends({}, Ne, {
          debugPlaybackLoopRecentChanges: Ce(
            Ne.debugPlaybackLoopRecentChanges,
            Me,
          ),
        });
        if (M)
          return (
            u({
              exception: o("nextgendasherr").nextgendasherrFromMultipleCauses(
                e,
                qe.streams
                  .map(function (e) {
                    return e.streamFatalError != null
                      ? [e.type, e.streamFatalError]
                      : null;
                  })
                  .filter(Boolean),
                "VideoPlayerNextgendashPlaybackLoopStreamFatalErrors",
                "%s",
                "debugPlaybackLoopRecentChanges:\n " +
                  qe.debugPlaybackLoopRecentChanges
                    .concat(
                      qe.recoveringFromMediaErrorAttempt > 0
                        ? [
                            "recoveringFromMediaErrorAttempt:" +
                              qe.recoveringFromMediaErrorAttempt,
                          ]
                        : [],
                    )
                    .join("\n "),
              ),
              type: "__exception",
            }),
            qe
          );
        if (qe.streams !== t.streams) {
          var Ue;
          return (Ue = se(
            e,
            r,
            "streamsChanged:(" + g.join(",") + ")",
            0,
            qe,
            a + 1,
          )) != null
            ? Ue
            : qe;
        } else {
          var He;
          return e.config.disablePlaybackLoopSchedulingOnTimer
            ? qe
            : (He = se(e, r, "!streamsChanged", 10 * ae, qe, a + 1)) != null
              ? He
              : qe;
        }
      }
    }
    function Re(e, t, n) {
      var r = e,
        a = r.sourceBufferState;
      if (a != null && t !== a.mediaSourceIndex) {
        var i;
        (n.push(
          r.type +
            ":" +
            ((i = r.targetRepresentationId) != null
              ? i
              : "no_target_representation") +
            ":sourceBufferState:reset:" +
            a.mediaSourceIndex +
            "-->" +
            t,
        ),
          a.sourceBufferCleanup(),
          (a = null),
          (r = babelHelpers.extends({}, r, {
            appendState: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject({
              appendChain: null,
              currSourceBufferOperation: null,
              lastAppendOperation: null,
              lastRemoveOperation: null,
              lastSourceBufferOperation: null,
              pendingAppendOperations: [],
              pendingRemoveOperations: [],
              sourceBufferRanges: [],
              sourceBufferRangesAnnotated: [],
              workaroundForSegmentBufferedInsufficiently: [],
            }),
            sourceBufferState: null,
          })));
      }
      return r;
    }
    function Le(e, t, n, r, a, i, l, s, u) {
      var c,
        d = t,
        m = n,
        p = r,
        _ = a.representationId,
        f = De(a),
        g = Ke(m, f, s, !0),
        h = g == null ? void 0 : g.fetchState,
        y = g == null || (c = g.responseInfo) == null ? void 0 : c.buffer;
      if (y == null && h != null && h.state === "completed")
        return (
          (d = At(
            e,
            l,
            u,
            d,
            i,
            _,
            o("nextgendasherr").nextgendasherr(
              e,
              "VideoPlayerNextgendashPlaybackLoopInitFetchBufferExtractionFailed",
              "%s:%s - Failed to extract init buffer from the completed response; mimeCodecs=%s",
              d.type,
              _,
              a.mimeCodecsParsed.mimeCodecs,
            ),
          )),
          {
            abortFurtherProcessing: !0,
            fetchDemandOrderNext: p,
            fetchDemands: m,
            initBuffer: null,
            stream: d,
          }
        );
      if (h != null && h.state === "failed")
        return (
          (d = At(
            e,
            l,
            u,
            d,
            i,
            _,
            o("nextgendasherr").nextgendasherrFromCause(
              e,
              h.error,
              "VideoPlayerNextgendashPlaybackLoopInitFetchFailed",
              "%s:%s - Failed to fetch init; mimeCodecs=%s",
              d.type,
              _,
              a.mimeCodecsParsed.mimeCodecs,
            ),
          )),
          {
            abortFurtherProcessing: !0,
            fetchDemandOrderNext: p,
            fetchDemands: m,
            initBuffer: null,
            stream: d,
          }
        );
      if (g == null) {
        var C =
          e.config.enableCombinedInitSidxFetch &&
          a.segmentsInfo.type === "SegmentBase" &&
          d.sidxByRepresentationId[_] == null &&
          Ke(m, $e(a), s, !1) == null;
        C
          ? (m = [].concat(m, [Ne(e, ++p, a)]))
          : (m = [].concat(m, [xe(e, ++p, a)]));
      }
      return {
        abortFurtherProcessing: !1,
        fetchDemandOrderNext: p,
        fetchDemands: m,
        initBuffer: y,
        stream: d,
      };
    }
    function Ee(e, t, n, r, a, i) {
      var l = t,
        s = l.sourceBufferState;
      if (s == null)
        try {
          var u = e.host.mediaSourceAddSourceBuffer(
            e,
            n.mediaSource,
            r,
            function (e) {
              var t = e.domEventType,
                n = e.eventTarget;
              a({
                debugStreamType: l.type,
                sourceBuffer: n,
                sourceBufferEventType: t,
                type: "_source_buffer_event",
              });
            },
            n.waitingForFirstSourceopen,
          );
          if (u != null) {
            var c = u[0],
              d = u[1];
            ((s = {
              lastAppendedInitBuffer: null,
              mediaSourceIndex: n.mediaSourceIndex,
              sourceBuffer: c,
              sourceBufferCleanup: d,
              sourceBufferMimeCodecsParsed: r.mimeCodecsParsed,
            }),
              i.push(
                l.type +
                  ":" +
                  r.representationId +
                  ":sourceBufferState:new:" +
                  o(
                    "VideoPlayerNextgendashMediaUtils",
                  ).debugStringifyMimeCodecs(s.sourceBufferMimeCodecsParsed),
              ),
              (l = babelHelpers.extends({}, l, { sourceBufferState: s })));
          }
        } catch (t) {
          throw o("nextgendasherr").nextgendasherrFromCause(
            e,
            t,
            "VideoPlayerNextgendashPlaybackLoopAddSourceBufferException",
          );
        }
      return l;
    }
    function ke(e, t, n, r, a, i, l, s, u) {
      var c,
        d,
        m,
        p,
        f,
        v,
        R,
        L,
        E,
        k,
        I,
        T,
        D = r.args,
        $ = D.prefetchResult,
        w = D.sendPlayerWarningToMain,
        A = r.eventClock,
        F = r.sendToSelf,
        O = i,
        B = l * 1e4,
        W = ge(e, t, A, a, u),
        q = W.abortFurtherStreamProcessing,
        U = W.stream;
      if (U.streamFatalError != null || q)
        return { fetchDemands: O, stream: U };
      U = Re(U, t.mediaSourceState.mediaSourceIndex, u);
      var V = U.appendState.sourceBufferRanges,
        H = null,
        G = n.manifestRepresentations[U.type].find(function (e) {
          return e.representationId === U.targetRepresentationId;
        }),
        z = U.targetRepresentationReason,
        j = !1;
      if (G != null)
        switch (U.type) {
          case "video": {
            var K,
              Q = t.playerStateFromMain.selectedMediaVariant;
            j = ht(
              Q,
              Q != null ? Q : M,
              (K = U.prevSelectedMediaVariant) != null ? K : M,
              t.playerStateFromMain.selectedVideoQualityDisplayLabel,
              U.prevSelectedVideoQualityDisplayLabel,
            );
            break;
          }
          case "audio": {
            var X,
              Y = t.playerStateFromMain.selectedMediaVariant;
            j = yt(
              Y,
              Y != null ? Y : M,
              (X = U.prevSelectedMediaVariant) != null ? X : M,
            );
            break;
          }
        }
      if (G == null || j) {
        var ee = bt(
          e,
          w,
          t.playerWarningDedupMap,
          A,
          t.playerStateFromMain,
          n,
          $,
          V,
          U,
          u,
        );
        ((H = ee.prevTargetRepresentation),
          (U = ee.stream),
          (G = ee.targetRepresentation),
          (z = ee.targetRepresentationReason));
      }
      var te = H,
        ne = G,
        re = z,
        oe = ne.representationId;
      U = Ee(e, U, t.mediaSourceState, ne, F, u);
      var ae = U.sourceBufferState,
        ie = Le(e, U, O, B, ne, n, w, r.args.fetchPoolAPI, u);
      if (ie != null && ie.abortFurtherProcessing)
        return { fetchDemands: ie.fetchDemands, stream: ie.stream };
      ie != null &&
        ((U = ie.stream), (O = ie.fetchDemands), (B = ie.fetchDemandOrderNext));
      var le = ie == null ? void 0 : ie.initBuffer,
        se = U.sidxByRepresentationId[oe],
        ue = ne.segmentsInfo,
        ce = $e(ne),
        de = Ke(O, ce, r.args.fetchPoolAPI, !0),
        me = de == null ? void 0 : de.fetchState,
        pe = de == null || (c = de.responseInfo) == null ? void 0 : c.buffer;
      if (se == null && pe != null) {
        var _e = ne.mimeCodecsParsed.containerType,
          fe = null;
        try {
          switch (_e) {
            case "mp4": {
              var he =
                ue.type === "SegmentBase" ? ue.indexByteRange.byteOffset : null;
              if (he == null)
                throw o("nextgendasherr").nextgendasherr(
                  e,
                  "VideoPlayerNextgendashPlaybackLoopSidxParseMp4MissingSidxByteOffset",
                );
              fe = o("VideoPlayerNextgendashMp4SidxParser").parseMp4Sidx(
                e,
                pe,
                he,
              );
              break;
            }
            case "webm": {
              le != null
                ? (fe = o("VideoPlayerNextgendashWebmSidxParser").parseWebmSidx(
                    e,
                    pe,
                    le,
                  ))
                : (fe = null);
              break;
            }
            default:
              throw o("nextgendasherr").nextgendasherr(
                e,
                "VideoPlayerNextgendashPlaybackLoopSidxParseUnexpectedContainerType",
                "Unexpected container type for sidx parsing: %s",
                _e,
              );
          }
        } catch (t) {
          return (
            (U = At(
              e,
              w,
              u,
              U,
              n,
              oe,
              o("nextgendasherr").nextgendasherrFromCause(
                e,
                t,
                "VideoPlayerNextgendashPlaybackLoopSidxParseFailed",
                "%s:%s - Failed to parse sidx; mimeCodecs=%s",
                U.type,
                oe,
                ne.mimeCodecsParsed.mimeCodecs,
              ),
            )),
            { fetchDemands: O, stream: U }
          );
        }
        var ye = fe;
        if (ye != null) {
          var Ce, be;
          ((se = xt(
            e,
            U.type,
            oe,
            ye.map(function (e, t) {
              return {
                isEndingSegment: t === ye.length - 1,
                mediaFileByteRange: e.mediaFileByteRange,
                mediaTimeRange: e.mediaTimeRange,
                segmentId: t,
              };
            }),
            !1,
          )),
            u.push(
              U.type + ":" + oe + ":sidx/buffer:" + ye.length + ":" + se.length,
            ),
            (U = babelHelpers.extends({}, U, {
              sidxByRepresentationId: o(
                "VideoPlayerNextgendashStateMachine",
              ).skipAutoDisposeInsideThisObject(
                babelHelpers.extends(
                  {},
                  U.sidxByRepresentationId,
                  ((Ce = {}), (Ce[oe] = se), Ce),
                ),
              ),
            })),
            (O =
              (be = Xe(
                O,
                function (e) {
                  return e === ce;
                },
                r.args.fetchPoolAPI,
              )) != null
                ? be
                : O));
        }
      } else {
        if (pe == null && me != null && me.state === "completed")
          return (
            (U = At(
              e,
              w,
              u,
              U,
              n,
              oe,
              o("nextgendasherr").nextgendasherr(
                e,
                "VideoPlayerNextgendashPlaybackLoopSidxFetchBufferExtractionFailed",
                "%s:%s - Failed to extract sidx buffer from the completed response; mimeCodecs=%s",
                U.type,
                oe,
                ne.mimeCodecsParsed.mimeCodecs,
              ),
            )),
            { fetchDemands: O, stream: U }
          );
        if (se == null && me != null && me.state === "failed")
          return (
            (U = At(
              e,
              w,
              u,
              U,
              n,
              oe,
              o("nextgendasherr").nextgendasherrFromCause(
                e,
                me.error,
                "VideoPlayerNextgendashPlaybackLoopSidxFetchFailed",
                "%s:%s - Failed to fetch sidx; mimeCodecs=%s",
                U.type,
                oe,
                ne.mimeCodecsParsed.mimeCodecs,
              ),
            )),
            { fetchDemands: O, stream: U }
          );
        if (se == null && ue.type === "SegmentTemplate") {
          var ve,
            Se = n.metadata.manifestType === "dynamic",
            ke = Et(ue, Se),
            Me = e.config.enableLive ? ue.segmentTimelinePredictive : null;
          se = xt(e, U.type, oe, ke, Se);
          var Oe = Me != null ? Dt(Me, se, ue.timescale) : se;
          (u.push(
            U.type +
              ":" +
              oe +
              ":sidx/template" +
              (Me != null ? "/predictive" : "") +
              ":" +
              ke.length +
              ":" +
              Oe.length,
          ),
            (U = babelHelpers.extends({}, U, {
              sidxByRepresentationId: o(
                "VideoPlayerNextgendashStateMachine",
              ).skipAutoDisposeInsideThisObject(
                babelHelpers.extends(
                  {},
                  U.sidxByRepresentationId,
                  ((ve = {}), (ve[oe] = Oe), ve),
                ),
              ),
            })));
        } else if (se == null && de == null) {
          var Be;
          O = [].concat(
            (Be = Xe(
              O,
              function (e) {
                return e !== ce && e.startsWith("sidx-" + ne.type + "-");
              },
              r.args.fetchPoolAPI,
            )) != null
              ? Be
              : O,
            [Pe(e, ++B, ne)],
          );
        }
      }
      var Ve = se,
        He = t.playerStateFromMain.mediaElementSnapshot,
        Ye = P(e, He);
      if (
        ((d = U.appendState.appendChain) == null ? void 0 : d.mediaTail) != null
      ) {
        var Ze = Pt(
          e,
          U.type,
          oe,
          U.appendState.appendChain,
          Ye,
          V,
          t.mediaSourceState.mediaSource,
          u,
        );
        Ze !== U.appendState.appendChain &&
          (U = babelHelpers.extends({}, U, {
            appendState: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends({}, U.appendState, { appendChain: Ze }),
            ),
          }));
      }
      var tt =
        te != null &&
        (((m = ne.role) != null ? m : null) !==
          ((p = te.role) != null ? p : null) ||
          ((f = ne.lang) != null ? f : null) !==
            ((v = te.lang) != null ? v : null));
      if (
        te != null &&
        oe !== te.representationId &&
        (re === "selected_switch" || tt)
      ) {
        var nt = 5,
          rt = tt ? 0 : Ye + nt,
          ot = [rt, Number.POSITIVE_INFINITY],
          at = {
            operationState: "wait_start",
            operationTiming: { created: e.host.clock() },
            operationType: "remove_operation",
            removeRange: ot,
          };
        (u.push(
          U.type +
            ":" +
            oe +
            ":pendingRemoveOperations:newRemoveOperation:" +
            o("VideoPlayerNextgendashMediaUtils").debugStringifyTimeRange(
              at.removeRange,
            ),
        ),
          (U = babelHelpers.extends({}, U, {
            appendState: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends({}, U.appendState, {
                pendingAppendOperations: [],
                pendingRemoveOperations: [].concat(
                  U.appendState.pendingRemoveOperations,
                  [at],
                ),
              }),
            ),
          })));
      }
      if (
        e.config.isLivePlayback &&
        e.config.liveBackBufferRetentionSec > 0 &&
        U.sourceBufferState != null &&
        U.appendState.currSourceBufferOperation == null &&
        U.appendState.pendingAppendOperations.length === 0 &&
        U.appendState.pendingRemoveOperations.length === 0
      ) {
        var it = qe(V, Ye, e.config.liveBackBufferRetentionSec, x);
        if (
          it != null &&
          e.host.mediaSourceCollectSnapshot(e, t.mediaSourceState.mediaSource)
            .readyState === "open"
        ) {
          var lt = {
            operationState: "wait_start",
            operationTiming: { created: e.host.clock() },
            operationType: "remove_operation",
            removeRange: [0, it],
          };
          (u.push(
            U.type +
              ":" +
              oe +
              ":pendingRemoveOperations:newLiveBackBufferRemoveOperation:" +
              o("VideoPlayerNextgendashMediaUtils").debugStringifyTimeRange(
                lt.removeRange,
              ),
          ),
            (U = babelHelpers.extends({}, U, {
              appendState: o(
                "VideoPlayerNextgendashStateMachine",
              ).skipAutoDisposeInsideThisObject(
                babelHelpers.extends({}, U.appendState, {
                  pendingRemoveOperations: [].concat(
                    U.appendState.pendingRemoveOperations,
                    [lt],
                  ),
                }),
              ),
            })));
        }
      }
      var st =
        (R =
          (L =
            (E =
              U.appendState.pendingAppendOperations[
                U.appendState.pendingAppendOperations.length - 1
              ]) == null
              ? void 0
              : E.appendInfo.representationId) != null
            ? L
            : U.appendState.currSourceBufferOperation != null &&
                U.appendState.currSourceBufferOperation.operationType ===
                  "append_operation"
              ? U.appendState.currSourceBufferOperation.appendInfo
                  .representationId
              : null) != null
          ? R
          : U.appendState.lastAppendOperation != null &&
              U.appendState.lastAppendOperation.operationState === "succeeded"
            ? U.appendState.lastAppendOperation.appendInfo.representationId
            : null;
      if (ae != null && oe !== st && le != null) {
        var ut = {
          appendInfo: {
            appendInfoType: "init",
            mimeCodecsParsed: ne.mimeCodecsParsed,
            representationId: oe,
          },
          buffer: le,
          operationState: "wait_start",
          operationTiming: { created: e.host.clock() },
          operationType: "append_operation",
        };
        (u.push(
          U.type +
            ":" +
            oe +
            ":pendingAppendOperations:initAppendOperation:" +
            et(ut.appendInfo),
        ),
          (U = babelHelpers.extends({}, U, {
            appendState: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends({}, U.appendState, {
                pendingAppendOperations: [ut],
              }),
            ),
          })));
      }
      var ct = 16.924449682236,
        dt = e.config.isLivePlayback ? 20 : 22,
        mt =
          t.playerStateFromMain.mediaElementSnapshot == null
            ? "initial"
            : t.playerStateFromMain.mediaElementSnapshot.paused
              ? "paused"
              : "playing",
        pt = {
          initial: ct,
          paused: e.config.bufferAheadTargetPausedSec,
          playing: dt,
        }[mt],
        _t = e.config.enableQuotaExceededRecovery
          ? Math.max(
              e.config.quotaExceededMinBufferTargetSec,
              pt * U.quotaExceededBufferTargetRatio,
            )
          : pt,
        ft = _t,
        gt = t.volatilityState;
      if (
        e.config.enableDynamicBufferWatermarks &&
        mt === "playing" &&
        gt != null
      ) {
        var Ct = A.unixMs,
          vt = J(gt.abrSwitchTimestamps, Ct),
          St = Z(gt.bandwidthSamples, Ct),
          kt = Math.max(vt, St),
          $t = kt * S,
          wt = e.config.enableQuotaExceededRecovery
            ? $t * U.quotaExceededBufferTargetRatio
            : $t;
        ft = _t + wt;
      }
      var Bt =
          (k = U.appendState.appendChain) == null
            ? void 0
            : k.playheadMinimumTimeSec,
        Wt = Fe(Ve),
        qt = We(V, Ye),
        Ut = Ue({
          bufferedAheadSec: qt,
          enableLive: e.config.enableLive,
          fellBehindWindowSec: h,
          followEdgeActive: e.config.liveFollowEdgeActive,
          hardFellBehindWindowSec: e.config.liveFellBehindHardRefetchDriftSec,
          hardStarvationBufferAheadSec: b,
          isLivePlayback: e.config.isLivePlayback,
          liveEdgeMediaTimeSec: Wt,
          playheadMediaTimeSec: Ye,
          proactiveDriftSec: e.config.liveProactiveRefetchDriftSec,
          refetchEnabled: e.config.liveFellBehindWindowRefetchEnabled,
          starvationBufferAheadSec: y,
        }),
        Vt =
          e.config.liveFellBehindPairedRefetchEnabled &&
          e.config.isLivePlayback &&
          e.config.enableLive &&
          e.config.liveFollowEdgeActive
            ? s
            : null,
        Ht = qt != null ? Ye + qt : Ye,
        Gt = Vt != null && Ht < Vt - g,
        zt = Ut || Gt,
        jt = Vt != null ? Vt : Wt != null ? Wt - C : null,
        Kt =
          zt && jt != null
            ? jt
            : Bt != null && Bt > Ye
              ? Bt - g
              : U.appendState.appendChain != null
                ? Ye - g
                : Ye,
        Qt = zt && Wt != null ? Wt + ft : Ye + ft,
        Xt =
          U.appendState.currSourceBufferOperation != null &&
          U.appendState.currSourceBufferOperation.operationType ===
            "append_operation"
            ? U.appendState.currSourceBufferOperation.appendInfo
                .appendInfoType === "data" &&
              U.appendState.currSourceBufferOperation.appendInfo
                .dataByteRangeLength > 0
              ? U.appendState.currSourceBufferOperation.appendInfo
              : null
            : U.appendState.lastAppendOperation != null &&
                U.appendState.lastAppendOperation.operationState ===
                  "succeeded" &&
                U.appendState.lastAppendOperation.appendInfo.appendInfoType ===
                  "data" &&
                U.appendState.lastAppendOperation.appendInfo
                  .dataByteRangeLength > 0
              ? U.appendState.lastAppendOperation.appendInfo
              : null;
      function Yt(t, n) {
        return Lt(
          U.appendState.appendChain,
          t,
          n,
          e.config.isLivePlayback && e.config.liveTimeBasedAppendAnchorEnabled,
        );
      }
      var Jt = Ve != null ? Ve : [],
        Zt = Jt.filter(function (e) {
          if (
            !Rt(V, e) &&
            !U.appendState.workaroundForSegmentBufferedInsufficiently.some(
              function (t) {
                return t.representationId === oe && we(t.segment, e);
              },
            )
          ) {
            if (e.isEndingSegment && Ye > e.mediaTimeRange[1])
              return !Yt(oe, e);
            var t = o("VideoPlayerNextgendashMediaUtils").isWithinRange(
              e.mediaTimeRange,
              Kt,
            );
            if (t) return !Yt(oe, e);
            var n = o("VideoPlayerNextgendashMediaUtils").isWithinRange(
              e.mediaTimeRange,
              Qt,
            );
            if (n) return !Yt(oe, e);
            var r = Kt <= e.mediaTimeRange[0] && e.mediaTimeRange[1] <= Qt;
            if (r) return !Yt(oe, e);
          }
          return !1;
        }),
        en = ue.type === "SegmentTemplate" ? ue : null,
        tn =
          (I = en == null ? void 0 : en.segmentTimelinePredictive) != null
            ? I
            : null,
        nn = Ve != null && Ve.length > 0 ? Ve[Ve.length - 1] : null,
        rn = en != null ? It(en) : null;
      if (
        e.config.isLivePlayback &&
        e.config.enableLive &&
        Zt.length === 0 &&
        Ve != null &&
        en != null &&
        tn != null &&
        nn != null &&
        Tt(nn, tn, e.config.liveRollingPdashReseedAfterStripEnabled, rn, Qt)
      ) {
        var on = nn.isPredictiveSegment !== !0,
          an = Dt(tn, Ve, en.timescale);
        if (an.length > Ve.length) {
          var ln;
          ((U = babelHelpers.extends({}, U, {
            sidxByRepresentationId: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends(
                {},
                U.sidxByRepresentationId,
                ((ln = {}), (ln[oe] = an), ln),
              ),
            ),
          })),
            (Ve = an));
          var sn = an[an.length - 1];
          ((Zt = [sn]),
            u.push(
              U.type +
                ":" +
                oe +
                ":" +
                (on ? "rolling_pdash_reseed" : "rolling_pdash") +
                ":" +
                String(sn.templateNumber),
            ));
        }
      }
      var un = new Set(),
        cn = null;
      if (Zt.length > 1 && ne.segmentsInfo.type === "SegmentBase") {
        for (var dn = [], mn = 0; mn < Zt.length; ++mn) {
          var pn = Zt[mn],
            _n = Ge(ne, pn);
          un.add(_n);
          var fn = Qe(e, cn != null ? cn : O, _n);
          ((cn = fn != null ? fn : cn), fn == null && dn.push(pn));
        }
        for (
          var gn =
              $ != null && $.prefetchedRepresentationIds.includes(oe)
                ? [0]
                : [],
            hn = Ie(dn, gn),
            yn = 0;
          yn < hn.length;
          ++yn
        ) {
          var Cn = hn[yn];
          ((cn = cn != null ? cn : [].concat(O)), cn.push(je(e, ++B, ne, Cn)));
        }
      } else
        Zt.forEach(function (t) {
          var n = Ge(ne, t);
          un.add(n);
          var r = Qe(e, cn != null ? cn : O, n);
          ((cn = r != null ? r : cn),
            r == null &&
              ((cn = cn != null ? cn : [].concat(O)),
              cn.push(ze(e, ++B, ne, t))));
        });
      {
        var bn = new Set();
        ((cn != null ? cn : O).forEach(function (t) {
          var r = A.perfMs - t.demandedAtClock.perfMs,
            o = 0;
          r < o ||
            t.activeDemands.forEach(function (t) {
              t.startsWith("segment-" + U.type + "-") &&
                !un.has(t) &&
                ![
                  Xt,
                  U.appendState.currSourceBufferOperation != null &&
                  U.appendState.currSourceBufferOperation.operationType ===
                    "append_operation"
                    ? U.appendState.currSourceBufferOperation.appendInfo
                    : null,
                ]
                  .concat(
                    U.appendState.pendingAppendOperations.map(function (e) {
                      return e.appendInfo;
                    }),
                  )
                  .filter(Boolean)
                  .some(function (r) {
                    var o = Te(
                      e,
                      n.manifestRepresentations[U.type],
                      r.representationId,
                    );
                    switch (r.appendInfoType) {
                      case "init":
                        return t === De(o);
                      case "data":
                        return t === Ge(o, r.segment);
                      default:
                        r.appendInfoType;
                    }
                  }) &&
                bn.add(t);
            });
        }),
          bn.size > 0 &&
            (cn = Xe(
              cn != null ? cn : O,
              function (e) {
                return bn.has(e);
              },
              r.args.fetchPoolAPI,
            )));
      }
      {
        var vn = cn != null ? cn : O,
          Sn = r.args.fetchPoolAPI,
          Rn = vn.reduce(
            function (e, t) {
              if (t.streamType === U.type && t.activeDemands.size > 0) {
                var n = N(t, Sn);
                if (n == null) e.unfulfilledDemandsCountForThisStream += 1;
                else {
                  var r = n.state;
                  r !== "completed" &&
                    r !== "aborted" &&
                    r !== "failed" &&
                    r !== "__null__" &&
                    r !== "__disposed__" &&
                    (e.inflightFetchesCountForThisStream += 1);
                }
              }
              return e;
            },
            {
              inflightFetchesCountForThisStream: 0,
              unfulfilledDemandsCountForThisStream: 0,
            },
          );
        if (
          Rn.inflightFetchesCountForThisStream === 0 &&
          Rn.unfulfilledDemandsCountForThisStream > 0
        ) {
          var Ln = bt(
            e,
            w,
            t.playerWarningDedupMap,
            A,
            t.playerStateFromMain,
            n,
            $,
            V,
            U,
            u,
          );
          if (Ln.stream.targetRepresentationId !== U.targetRepresentationId)
            return { fetchDemands: O, stream: Ln.stream };
          U = Ln.stream;
        }
      }
      if (
        e.config.fetchInitSidxOfAllRepresentations &&
        oe != null &&
        U.playableRepresentations.length > 1 &&
        ((T = t.playerStateFromMain.mediaElementSnapshot) == null
          ? void 0
          : T.bufferedFully) !== !0
      ) {
        for (var En of U.playableRepresentations)
          if (En.representationId !== oe) {
            var kn =
                Ke(cn != null ? cn : O, De(En), r.args.fetchPoolAPI, !1) !=
                null,
              In =
                U.sidxByRepresentationId[En.representationId] != null ||
                Ke(cn != null ? cn : O, $e(En), r.args.fetchPoolAPI, !1) !=
                  null;
            if (!kn || !In) {
              var Tn =
                e.config.enableCombinedInitSidxFetch &&
                En.segmentsInfo.type === "SegmentBase" &&
                !kn &&
                !In;
              Tn
                ? ((cn = cn != null ? cn : [].concat(O)),
                  cn.push(Ne(e, ++B, En)))
                : (kn ||
                    ((cn = cn != null ? cn : [].concat(O)),
                    cn.push(xe(e, ++B, En))),
                  In ||
                    ((cn = cn != null ? cn : [].concat(O)),
                    cn.push(Pe(e, ++B, En))));
            }
          }
      }
      if (
        ((O = cn != null ? cn : O),
        !(
          U.appendState.pendingAppendOperations.length > 0 ||
          U.appendState.currSourceBufferOperation != null
        ))
      ) {
        var Dn = null;
        if (Xt != null)
          Dn = {
            dataByteRangeStart: Xt.dataByteRangeStart + Xt.dataByteRangeLength,
            incompleteChunkedAppendInfo: Xt,
            mimeCodecsParsed: Xt.mimeCodecsParsed,
            representationId: Xt.representationId,
            segment: Xt.segment,
          };
        else if (Zt.length > 0) {
          var xn = Zt[0];
          Dn = {
            dataByteRangeStart: 0,
            incompleteChunkedAppendInfo: null,
            mimeCodecsParsed: ne.mimeCodecsParsed,
            representationId: oe,
            segment: xn,
          };
        }
        var $n = Dn;
        if ($n != null) {
          if (
            U.appendState.appendChain != null &&
            U.appendState.appendChain.representationId === $n.representationId
          ) {
            var Pn = Te(
                e,
                n.manifestRepresentations[U.type],
                $n.representationId,
              ),
              Nn = Ge(Pn, $n.segment),
              Mn = Ke(O, Nn, r.args.fetchPoolAPI);
            if (Mn == null)
              throw o("nextgendasherr").nextgendasherr(
                e,
                $n.incompleteChunkedAppendInfo != null
                  ? "VideoPlayerNextgendashPlaybackLoopMissingFetchDemandForSegmentToContinueChunkedAppend"
                  : "VideoPlayerNextgendashPlaybackLoopMissingFetchDemandForSegmentToAppend",
                "%s:%s - nextAppendInfo=%s segmentFetchDemandKey=%s fetchDemands=%s",
                U.type,
                oe != null ? oe : "no_target_representation",
                JSON.stringify($n),
                Nn,
                Je(O),
              );
            var wn = null,
              An = Mn.fetchState;
            An != null && An.state === "failed"
              ? (wn = o("nextgendasherr").nextgendasherrFromCause(
                  e,
                  An.error,
                  "VideoPlayerNextgendashPlaybackLoopSegmentFetchFailed",
                  "%s:%s - Fetch failed for media segment needed to append; segmentFetchDemandKey=%s nextAppendInfo=%s",
                  U.type,
                  oe,
                  Nn,
                  JSON.stringify($n),
                ))
              : An != null &&
                An.state === "aborted" &&
                (wn = o("nextgendasherr").nextgendasherr(
                  e,
                  "VideoPlayerNextgendashPlaybackLoopSegmentFetchAborted",
                  "%s:%s - Fetch aborted for media segment needed to append; segmentFetchDemandKey=%s nextAppendInfo=%s",
                  U.type,
                  oe,
                  Nn,
                  JSON.stringify($n),
                ));
            var Fn = Mn == null ? void 0 : Mn.responseInfo;
            if (wn != null) {
              if ($n.segment.isPredictiveSegment === !0) {
                var On = U.sidxByRepresentationId[$n.representationId];
                if (On != null) {
                  var Bn;
                  ((U = babelHelpers.extends({}, U, {
                    sidxByRepresentationId: o(
                      "VideoPlayerNextgendashStateMachine",
                    ).skipAutoDisposeInsideThisObject(
                      babelHelpers.extends(
                        {},
                        U.sidxByRepresentationId,
                        ((Bn = {}),
                        (Bn[$n.representationId] = On.filter(function (e) {
                          return e.isPredictiveSegment !== !0;
                        })),
                        Bn),
                      ),
                    ),
                  })),
                    u.push(
                      U.type +
                        ":" +
                        $n.representationId +
                        ":predictive_segment_fetch_failed",
                    ));
                }
                return (
                  (O = O.filter(function (e) {
                    return e.requestDraft.requestID !== Nn;
                  })),
                  { fetchDemands: O, stream: U }
                );
              }
              return (
                (U = At(e, w, u, U, n, oe, wn)),
                { fetchDemands: O, stream: U }
              );
            } else if (Fn != null) {
              if (Ae($n.segment, $n.dataByteRangeStart, Fn)) {
                var Wn = U.sidxByRepresentationId[$n.representationId];
                if (Wn != null) {
                  var qn;
                  ((U = babelHelpers.extends({}, U, {
                    sidxByRepresentationId: o(
                      "VideoPlayerNextgendashStateMachine",
                    ).skipAutoDisposeInsideThisObject(
                      babelHelpers.extends(
                        {},
                        U.sidxByRepresentationId,
                        ((qn = {}),
                        (qn[$n.representationId] = Wn.filter(function (e) {
                          return e.isPredictiveSegment !== !0;
                        })),
                        qn),
                      ),
                    ),
                  })),
                    u.push(
                      U.type +
                        ":" +
                        $n.representationId +
                        ":predictive_segment_fetch_empty",
                    ));
                }
                return (
                  (O = O.filter(function (e) {
                    return e.requestDraft.requestID !== Nn;
                  })),
                  { fetchDemands: O, stream: U }
                );
              }
              var Un = $n.segment.mediaFileByteRange.byteLength,
                Vn =
                  Fn.isFetchComplete ||
                  (Fn.responseByteRange.byteLength != null &&
                    Fn.chunksByteLength >=
                      Fn.responseByteRange.byteOffset +
                        Fn.responseByteRange.byteLength),
                Hn = 6,
                Gn = 1e5,
                zn = Vn
                  ? null
                  : e.config.dataAppendOperationMinBytes === "ozplayer-like"
                    ? Hn > 0 && Un != null && Un > 0
                      ? Math.ceil(Un / Hn)
                      : Gn > 0
                        ? Gn
                        : null
                    : e.config.dataAppendOperationMinBytes,
                jn = Fn.responseByteRange.byteOffset + $n.dataByteRangeStart,
                Kn =
                  Fn.responseByteRange.byteLength != null
                    ? Fn.responseByteRange.byteLength - $n.dataByteRangeStart
                    : null,
                Qn = Nt(
                  Fn.chunks,
                  jn,
                  zn != null ? (Kn != null ? Math.min(Kn, zn) : zn) : Kn,
                ),
                Xn = null;
              if (Qn != null && (zn === null || Qn.copyTotalBytesCount >= zn)) {
                if (((Xn = Mt(Fn.chunks, Qn)), Xn == null))
                  throw o("nextgendasherr").nextgendasherr(
                    e,
                    "VideoPlayerNextgendashPlaybackLoopFailedToCombineChunksToAppend",
                    "%s/data#%s - Failed to copy %sB from chunks #%s(%sB)..#%s(%sB) into an append buffer (out of %s chunks of total %sB).",
                    $n.representationId,
                    $n.segment.segmentId,
                    Qn.copyTotalBytesCount,
                    Qn.startChunkIndex,
                    Qn.startChunkByteOffset,
                    Qn.endChunkIndex,
                    Qn.endChunkBytesCount,
                    Fn.chunks.length,
                    Fn.chunksByteLength,
                  );
              } else Vn && (Xn = _);
              if (Xn != null) {
                var Yn = {
                    appendInfoType: "data",
                    dataByteRangeLength: Xn.byteLength,
                    dataByteRangeStart: $n.dataByteRangeStart,
                    mimeCodecsParsed: $n.mimeCodecsParsed,
                    representationId: $n.representationId,
                    segment: $n.segment,
                  },
                  Jn = {
                    appendInfo: Yn,
                    buffer: Xn,
                    operationState: "wait_start",
                    operationTiming: { created: e.host.clock() },
                    operationType: "append_operation",
                  };
                (u.push(
                  U.type +
                    ":" +
                    oe +
                    ":pendingAppendOperations:dataAppendOperation:" +
                    et(Yn),
                ),
                  (U = babelHelpers.extends({}, U, {
                    appendState: o(
                      "VideoPlayerNextgendashStateMachine",
                    ).skipAutoDisposeInsideThisObject(
                      babelHelpers.extends({}, U.appendState, {
                        pendingAppendOperations: [].concat(
                          U.appendState.pendingAppendOperations,
                          [Jn],
                        ),
                      }),
                    ),
                  })));
              }
            }
          }
        }
      }
      var Zn = Ft(e, w, U, u, ne, t.mediaSourceState.mediaSource, Ye);
      Zn != null && (U = babelHelpers.extends({}, U, Zn));
      var er = Ot(e, w, U, u, ne, Ye, t.mediaSourceState.mediaSource);
      er != null && (U = babelHelpers.extends({}, U, er));
      var tr = U.appendState.lastSourceBufferOperation;
      if (
        e.config.enableQuotaExceededRecovery &&
        U.quotaExceededBufferTargetRatio < 1 &&
        tr != null &&
        tr.operationState === "succeeded" &&
        tr.operationType === "append_operation" &&
        tr.operationTiming.created.unixMs !==
          U.quotaExceededLastRewardedCreatedMs
      ) {
        var nr = Math.min(
          1,
          U.quotaExceededBufferTargetRatio +
            e.config.quotaExceededBufferTargetReward,
        );
        U = babelHelpers.extends({}, U, {
          quotaExceededBufferTargetRatio: nr,
          quotaExceededLastRewardedCreatedMs: tr.operationTiming.created.unixMs,
        });
      }
      return { fetchDemands: O, stream: U };
    }
    function Ie(e, t) {
      for (var n = [], r = 0; r < e.length; ++r) {
        var o = e[r];
        if (n.length === 0) n.push([o]);
        else {
          var a = n[n.length - 1],
            i = a[a.length - 1],
            l =
              i.mediaFileByteRange.byteLength != null &&
              o.mediaFileByteRange.byteOffset ===
                i.mediaFileByteRange.byteOffset +
                  i.mediaFileByteRange.byteLength &&
              !t.includes(i.segmentId);
          l ? a.push(o) : n.push([o]);
        }
      }
      return n;
    }
    function Te(e, t, n) {
      var r = t.find(function (e) {
        return e.representationId === n;
      });
      if (r == null)
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashPlaybackLoopUnableToFindRepresentation",
          'In %s manifestRepresentations, missing one with ID "%s"',
          t.length,
          n,
        );
      return r;
    }
    function De(e) {
      return "init-" + e.type + "-" + e.representationId;
    }
    function xe(e, t, n) {
      var r = De(n),
        a =
          n.segmentsInfo.type === "SegmentBase"
            ? {
                byteLength: n.segmentsInfo.initByteRange.byteLength,
                byteOffset: 0,
              }
            : { byteLength: null, byteOffset: 0 },
        i = o(
          "VideoPlayerNextgendashStateMachine",
        ).skipAutoDisposeInsideThisObject(new Map([[r, a]]));
      return {
        activeDemands: o(
          "VideoPlayerNextgendashStateMachine",
        ).skipAutoDisposeInsideThisObject(new Set(i.keys())),
        dataKeyToResponseByteRange: i,
        demandedAtClock: e.host.clock(),
        evictedClock: null,
        evictedReason: null,
        fetchDemandOrder: t,
        poolTrackingID: null,
        representationId: n.representationId,
        requestDraft: o(
          "VideoPlayerNextgendashStateMachine",
        ).skipAutoDisposeInsideThisObject({
          qplName: n.type + "_init",
          reportToBandwidthEstimator: !0,
          requestID: r,
          responseMode: "buffer",
        }),
        requestInfoArgs:
          n.segmentsInfo.type === "SegmentBase"
            ? {
                baseURL: n.segmentsInfo.baseURL,
                byteRange: n.segmentsInfo.initByteRange,
                type: "BaseURLByteRange",
              }
            : {
                baseURL: n.segmentsInfo.baseURL,
                initURL: n.segmentsInfo.initURL,
                type: "BaseURLInitURL",
              },
        responseFetch: null,
        streamType: n.type,
      };
    }
    function $e(e) {
      return "sidx-" + e.type + "-" + e.representationId;
    }
    function Pe(e, t, n) {
      var r = n.segmentsInfo;
      if (r.type !== "SegmentBase")
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashPlaybackLoopSidxFetchUnknown",
          "%s:%s - sidx fetch unknown (" + r.type + ")",
          n.type,
          n.representationId,
        );
      var a = $e(n),
        i = { byteLength: r.indexByteRange.byteLength, byteOffset: 0 },
        l = o(
          "VideoPlayerNextgendashStateMachine",
        ).skipAutoDisposeInsideThisObject(new Map([[a, i]]));
      return {
        activeDemands: o(
          "VideoPlayerNextgendashStateMachine",
        ).skipAutoDisposeInsideThisObject(new Set(l.keys())),
        dataKeyToResponseByteRange: l,
        demandedAtClock: e.host.clock(),
        evictedClock: null,
        evictedReason: null,
        fetchDemandOrder: t,
        poolTrackingID: null,
        representationId: n.representationId,
        requestDraft: o(
          "VideoPlayerNextgendashStateMachine",
        ).skipAutoDisposeInsideThisObject({
          qplName: n.type + "_sidx",
          reportToBandwidthEstimator: !0,
          requestID: a,
          responseMode: "buffer",
        }),
        requestInfoArgs: {
          baseURL: r.baseURL,
          byteRange: r.indexByteRange,
          type: "BaseURLByteRange",
        },
        responseFetch: null,
        streamType: n.type,
      };
    }
    function Ne(e, t, n) {
      var r = n.segmentsInfo;
      if (r.type !== "SegmentBase")
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashPlaybackLoopCombinedInitSidxFetchUnknown",
          "%s:%s - combined init+sidx fetch unknown (" + r.type + ")",
          n.type,
          n.representationId,
        );
      var a = De(n),
        i = $e(n),
        l = r.initByteRange,
        s = r.indexByteRange,
        u = Math.min(l.byteOffset, s.byteOffset),
        c = l.byteOffset + l.byteLength,
        d = s.byteOffset + s.byteLength,
        m = Math.max(c, d),
        p = m - u,
        _ = o(
          "VideoPlayerNextgendashStateMachine",
        ).skipAutoDisposeInsideThisObject(
          new Map([
            [a, { byteLength: l.byteLength, byteOffset: l.byteOffset - u }],
            [i, { byteLength: s.byteLength, byteOffset: s.byteOffset - u }],
          ]),
        );
      return {
        activeDemands: o(
          "VideoPlayerNextgendashStateMachine",
        ).skipAutoDisposeInsideThisObject(new Set(_.keys())),
        dataKeyToResponseByteRange: _,
        demandedAtClock: e.host.clock(),
        evictedClock: null,
        evictedReason: null,
        fetchDemandOrder: t,
        poolTrackingID: null,
        representationId: n.representationId,
        requestDraft: o(
          "VideoPlayerNextgendashStateMachine",
        ).skipAutoDisposeInsideThisObject({
          qplName: n.type + "_init_sidx_combined",
          reportToBandwidthEstimator: !0,
          requestID: "init_sidx-" + n.type + "-" + n.representationId,
          responseMode: "buffer",
        }),
        requestInfoArgs: {
          baseURL: r.baseURL,
          byteRange: { byteLength: p, byteOffset: u },
          type: "BaseURLByteRange",
        },
        responseFetch: null,
        streamType: n.type,
      };
    }
    function Me(e) {
      return e.templateTime != null ? "t" + e.templateTime : "" + e.segmentId;
    }
    function we(e, t) {
      return e.templateTime != null && t.templateTime != null
        ? e.templateTime === t.templateTime
        : e.segmentId === t.segmentId;
    }
    function Ae(e, t, n) {
      return (
        e.isPredictiveSegment === !0 &&
        t === 0 &&
        n.isFetchComplete &&
        n.chunksByteLength === 0
      );
    }
    function Fe(e) {
      if (e == null) return null;
      for (var t = e.length - 1; t >= 0; t--) {
        var n = e[t];
        if (n.isPredictiveSegment !== !0) return n.mediaTimeRange[1];
      }
      return null;
    }
    function Oe(e) {
      var t = e.playheadMediaTimeSec,
        n = e.sidx,
        r = e.toleranceSec,
        o = Fe(n);
      return o == null ? null : t >= o - r ? o : null;
    }
    function Be(e) {
      var t = e.confirmSec,
        n = e.drainedTailEndSec,
        r = e.enabled,
        o = e.enableLive,
        a = e.isLivePlayback,
        i = e.manifestType,
        l = e.nowUnixMs,
        s = e.prev;
      if (!r || !a || !o || i !== "dynamic" || n == null)
        return { confirmed: !1, next: null };
      var u =
          s != null && s.tailEndSec === n
            ? s
            : { sinceUnixMs: l, tailEndSec: n },
        c = t > 0 && l - u.sinceUnixMs >= t * 1e3;
      return { confirmed: c, next: u };
    }
    function We(e, t) {
      if (e == null) return null;
      for (var n of e) if (n[0] <= t && t <= n[1]) return n[1] - t;
      return 0;
    }
    function qe(e, t, n, r) {
      var o;
      if (n <= 0 || e == null) return null;
      var a = (o = e[0]) == null ? void 0 : o[0];
      if (a == null) return null;
      var i = t - n;
      return i - a >= r ? i : null;
    }
    function Ue(e) {
      var t = e.bufferedAheadSec,
        n = e.enableLive,
        r = e.fellBehindWindowSec,
        o = e.followEdgeActive,
        a = o === void 0 ? !0 : o,
        i = e.hardFellBehindWindowSec,
        l = e.hardStarvationBufferAheadSec,
        s = e.isLivePlayback,
        u = e.liveEdgeMediaTimeSec,
        c = e.playheadMediaTimeSec,
        d = e.proactiveDriftSec,
        m = d === void 0 ? 0 : d,
        p = e.refetchEnabled,
        _ = e.starvationBufferAheadSec;
      if (!p || !s || !n || u == null || t == null) return !1;
      var f = u - c;
      return (m > 0 && a && f > m) || (i > 0 && a && f > i && t < l)
        ? !0
        : t > _
          ? !1
          : f > r;
    }
    function Ve(e) {
      var t = e.enableLive,
        n = e.fellBehindWindowSec,
        r = e.followEdgeActive,
        o = e.hardFellBehindWindowSec,
        a = e.hardStarvationBufferAheadSec,
        i = e.isLivePlayback,
        l = e.pairedRefetchEnabled,
        s = e.playheadMediaTimeSec,
        u = e.proactiveDriftSec,
        c = e.refetchBehindEdgeSec,
        d = e.refetchEnabled,
        m = e.starvationBufferAheadSec,
        p = e.streams;
      if (!l || !i || !t) return null;
      var _ = null;
      for (var f of p) {
        var g = f.confirmedLiveEdgeMediaTimeSec;
        if (
          g != null &&
          Ue({
            bufferedAheadSec: f.bufferedAheadSec,
            enableLive: t,
            fellBehindWindowSec: n,
            followEdgeActive: r,
            hardFellBehindWindowSec: o,
            hardStarvationBufferAheadSec: a,
            isLivePlayback: i,
            liveEdgeMediaTimeSec: g,
            playheadMediaTimeSec: s,
            proactiveDriftSec: u,
            refetchEnabled: d,
            starvationBufferAheadSec: m,
          })
        ) {
          var h = g - c;
          _ = _ == null ? h : Math.min(_, h);
        }
      }
      return _;
    }
    function He(e, t) {
      var n = e.some(function (e) {
          return (
            e.representationId === t.representationId &&
            we(e.segment, t.segment)
          );
        }),
        r = n ? e : [].concat(e, [t]);
      return r.length > I ? r.slice(r.length - I) : r;
    }
    function Ge(e, t) {
      return "segment-" + e.type + "-" + e.representationId + "-" + Me(t);
    }
    function ze(e, t, n, r) {
      var a = n.segmentsInfo,
        i = Ge(n, r),
        l =
          n.segmentsInfo.type === "SegmentBase"
            ? { byteLength: r.mediaFileByteRange.byteLength, byteOffset: 0 }
            : { byteLength: null, byteOffset: 0 },
        s = o(
          "VideoPlayerNextgendashStateMachine",
        ).skipAutoDisposeInsideThisObject(new Map([[i, l]]));
      return {
        activeDemands: o(
          "VideoPlayerNextgendashStateMachine",
        ).skipAutoDisposeInsideThisObject(new Set(s.keys())),
        dataKeyToResponseByteRange: s,
        demandedAtClock: e.host.clock(),
        evictedClock: null,
        evictedReason: null,
        fetchDemandOrder: t,
        poolTrackingID: null,
        representationId: n.representationId,
        requestDraft: o(
          "VideoPlayerNextgendashStateMachine",
        ).skipAutoDisposeInsideThisObject({
          qplName: n.type + "_segment",
          reportToBandwidthEstimator: !0,
          requestID: i,
          responseMode: "stream",
        }),
        requestInfoArgs:
          a.type === "SegmentBase"
            ? {
                baseURL: a.baseURL,
                byteRange: r.mediaFileByteRange,
                type: "BaseURLByteRange",
              }
            : {
                baseURL: a.baseURL,
                relativeURL: B(
                  e,
                  n.type,
                  n.representationId,
                  r.isPredictiveSegment === !0 &&
                    a.segmentTimelinePredictive != null
                    ? a.segmentTimelinePredictive.segmentURLTemplate
                    : a.segmentURLTemplate,
                  r,
                ),
                type: "BaseURLRelativeURL",
              },
        responseFetch: null,
        streamType: n.type,
      };
    }
    function je(e, t, n, r) {
      if (r.length === 0)
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashPlaybackLoopGroupOfSegmentsFetchEmptySegments",
          "%s:%s - Group of segments fetch empty segments",
          n.type,
          n.representationId,
        );
      if (r.length === 1) return ze(e, t, n, r[0]);
      var a = n.segmentsInfo;
      if (a.type !== "SegmentBase")
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashPlaybackLoopGroupOfSegmentsFetchUnsupported",
          "%s:%s - Group of segments fetch unsupported (" + a.type + ")",
          n.type,
          n.representationId,
        );
      var i = r[0].mediaFileByteRange,
        l = r[r.length - 1].mediaFileByteRange,
        s = o(
          "VideoPlayerNextgendashStateMachine",
        ).skipAutoDisposeInsideThisObject(
          new Map(
            r.map(function (e) {
              return [
                Ge(n, e),
                {
                  byteLength: e.mediaFileByteRange.byteLength,
                  byteOffset: e.mediaFileByteRange.byteOffset - i.byteOffset,
                },
              ];
            }),
          ),
        );
      return {
        activeDemands: o(
          "VideoPlayerNextgendashStateMachine",
        ).skipAutoDisposeInsideThisObject(new Set(s.keys())),
        dataKeyToResponseByteRange: s,
        demandedAtClock: e.host.clock(),
        evictedClock: null,
        evictedReason: null,
        fetchDemandOrder: t,
        poolTrackingID: null,
        representationId: n.representationId,
        requestDraft: o(
          "VideoPlayerNextgendashStateMachine",
        ).skipAutoDisposeInsideThisObject({
          qplName: n.type + "_segment_group",
          reportToBandwidthEstimator: !0,
          requestID:
            "segment-" +
            n.type +
            "-" +
            n.representationId +
            "-" +
            r
              .map(function (e) {
                return e.segmentId;
              })
              .join(","),
          responseMode: "stream",
        }),
        requestInfoArgs: {
          baseURL: a.baseURL,
          byteRange: {
            byteLength:
              l.byteLength != null ? l.byteOffset + l.byteLength : null,
            byteOffset: i.byteOffset,
          },
          type: "BaseURLByteRange",
        },
        responseFetch: null,
        streamType: n.type,
      };
    }
    function Ke(e, t, n, r) {
      r === void 0 && (r = !1);
      for (var o = !1, a = null, i = 0; i < e.length; ++i) {
        var l = e[i],
          s = l.dataKeyToResponseByteRange.get(t);
        if (s != null) {
          o = !0;
          var u = N(l, n);
          if (u != null) {
            a = {
              fetchState: u,
              responseByteRange: s,
              responseFetchDataState:
                u.state === "waiting_data" || u.state === "completed"
                  ? u.responseData.state
                  : null,
            };
            break;
          }
        }
      }
      if (a == null) return o ? { fetchState: null, responseInfo: null } : null;
      var c = a,
        d = c.fetchState,
        m = c.responseByteRange,
        p = c.responseFetchDataState;
      if (
        m != null &&
        p != null &&
        (p.state === "reading_stream" ||
          p.state === "done_stream" ||
          p.state === "done_buffer")
      ) {
        var _ = p.state === "done_stream" || p.state === "done_buffer",
          f = p.state === "done_buffer" ? [p.buffer] : p.chunks,
          g =
            p.state === "done_buffer"
              ? p.buffer.byteLength
              : p.dataBytesLengthTotal,
          h = null;
        if (
          r &&
          (_ || (m.byteLength != null && g >= m.byteOffset + m.byteLength))
        ) {
          var y = Nt(f, m.byteOffset, m.byteLength);
          h = y != null ? Mt(f, y) : null;
        }
        return {
          fetchState: d,
          responseInfo: {
            buffer: h,
            chunks: f,
            chunksByteLength: g,
            isFetchComplete: _,
            responseByteRange: m,
          },
        };
      }
      return { fetchState: d, responseInfo: null };
    }
    function Qe(e, t, n) {
      for (var r = null, a = 0; a < t.length; ++a) {
        var i = t[a];
        if (i.dataKeyToResponseByteRange.has(n)) {
          var l = new Set(i.activeDemands);
          (l.add(n),
            (r = r != null ? r : [].concat(t)),
            (r[a] = babelHelpers.extends({}, i, {
              activeDemands: o(
                "VideoPlayerNextgendashStateMachine",
              ).skipAutoDisposeInsideThisObject(l),
              demandedAtClock: e.host.clock(),
            })));
        }
      }
      return r;
    }
    function Xe(e, t, n) {
      var r = !1,
        a = e.map(function (e) {
          var a = null;
          return (
            e.activeDemands.forEach(function (n) {
              t(n) &&
                ((a = a != null ? a : new Set(e.activeDemands)), a.delete(n));
            }),
            a != null
              ? ((r = !0),
                a.size === 0
                  ? (n != null &&
                      e.poolTrackingID != null &&
                      n.disposeFetch(e.poolTrackingID),
                    null)
                  : babelHelpers.extends({}, e, {
                      activeDemands: o(
                        "VideoPlayerNextgendashStateMachine",
                      ).skipAutoDisposeInsideThisObject(a),
                    }))
              : e
          );
        });
      return r ? a.filter(Boolean) : null;
    }
    function Ye(e, t, n) {
      return e.map(function (e) {
        var r,
          o,
          a = N(e, n),
          i = a == null ? void 0 : a.state,
          l = t
            ? {
                pf:
                  a != null && (r = a.prefetchResultState) != null ? r : void 0,
                rc:
                  a != null &&
                  a.state !== "__null__" &&
                  a.state !== "__disposed__" &&
                  a.state !== "submitted_to_pool"
                    ? a.request.requestCreatedClock
                    : void 0,
                ttfb:
                  (a == null ? void 0 : a.state) === "waiting_data" ||
                  (a == null ? void 0 : a.state) === "completed"
                    ? a.responseHeader.httpHeadersReceivedClock.perfMs -
                      a.requestStartedClock.perfMs
                    : void 0,
                ttlb:
                  (a == null ? void 0 : a.state) === "completed"
                    ? a.requestCompletedClock.perfMs -
                      a.requestStartedClock.perfMs
                    : void 0,
                ttrs:
                  (a == null ? void 0 : a.state) === "waiting_headers" ||
                  (a == null ? void 0 : a.state) === "waiting_data" ||
                  (a == null ? void 0 : a.state) === "completed"
                    ? a.requestStartedClock.perfMs -
                      a.request.requestCreatedClock.perfMs
                    : void 0,
              }
            : void 0,
          s =
            a == null || (o = a.responseData) == null ? void 0 : o.state.state,
          u = Array.from(e.dataKeyToResponseByteRange.entries()).map(
            function (e) {
              var t = e[0],
                n = e[1];
              return [t, Ze(n)];
            },
          );
        return [u, i, s, l];
      });
    }
    function Je(e, t) {
      return (t === void 0 && (t = !1), JSON.stringify(Ye(e, t)));
    }
    function Ze(e) {
      return (
        "[" +
        e.byteOffset +
        "B.." +
        (e.byteLength != null
          ? e.byteOffset + e.byteLength - 1 + "B=" + e.byteLength + "B"
          : "EOF") +
        "]"
      );
    }
    function et(e) {
      switch (e.appendInfoType) {
        case "init":
          return (
            e.representationId +
            "/init#" +
            o("VideoPlayerNextgendashMediaUtils").debugStringifyMimeCodecs(
              e.mimeCodecsParsed,
            )
          );
        case "data":
          return (
            e.representationId +
            "/data#" +
            e.segment.segmentId +
            o("VideoPlayerNextgendashMediaUtils").debugStringifyTimeRange(
              e.segment.mediaTimeRange,
              e.segment.isEndingSegment,
            ) +
            Ze(e.segment.mediaFileByteRange) +
            "<" +
            (e.segment.mediaFileByteRange.byteOffset + e.dataByteRangeStart) +
            "B" +
            (e.dataByteRangeLength > 0
              ? ".." +
                (e.segment.mediaFileByteRange.byteOffset +
                  e.dataByteRangeStart +
                  e.dataByteRangeLength -
                  1) +
                "B=" +
                e.dataByteRangeLength +
                "B"
              : "X") +
            ">"
          );
        default:
          return (e.appendInfoType, "");
      }
    }
    function tt(e) {
      var t = e.segment.mediaFileByteRange.byteLength;
      return (
        e.dataByteRangeLength === 0 ||
        (t != null && e.dataByteRangeStart + e.dataByteRangeLength >= t)
      );
    }
    function nt(e) {
      return e == null
        ? "null"
        : e.representationId +
            "[" +
            e.playheadMinimumTimeSec +
            "s.." +
            (e.mediaTail != null
              ? e.mediaTail.mediaTimeSec +
                "s;data#" +
                e.mediaTail.segmentId +
                "]"
              : "null]");
    }
    function rt(e) {
      return (
        Object.entries(e)
          .map(function (e) {
            var t = e[0],
              n = e[1];
            return [t, n == null ? void 0 : n.name].join(":");
          })
          .join(",") || "none"
      );
    }
    function ot(e) {
      return (
        e
          .map(function (e) {
            var t = [e.lang, e.role].filter(Boolean).join("+");
            return (
              e.representationId +
              ":" +
              o("VideoPlayerNextgendashMediaUtils").debugStringifyMimeCodecs(
                e.mimeCodecsParsed,
              ) +
              (t !== "" ? ":" + t : "")
            );
          })
          .join(",") || "none"
      );
    }
    function at(e) {
      return (
        e
          .map(function (e) {
            var t, n;
            return (
              e.representationId +
              ":" +
              ((t = e.lang) != null ? t : "null") +
              "+" +
              ((n = e.role) != null ? n : "null")
            );
          })
          .join(",") || "none"
      );
    }
    function it(e) {
      return (
        e
          .map(function (e) {
            var t, n;
            return (
              e.representationId +
              ":" +
              ((t = e.lang) != null ? t : "null") +
              "+" +
              ((n = e.role) != null ? n : "null")
            );
          })
          .join(",") || "none"
      );
    }
    function lt(e, t) {
      return t != null
        ? e.host.sourceBufferSnapshotBuffered(e, t.sourceBuffer)
        : void 0;
    }
    function st(e) {
      return (
        "MSreadyState:" +
        e.readyState +
        ",MSduration:" +
        e.duration +
        ",SBSUpdating:[" +
        (e.sourceBuffersUpdating
          ? e.sourceBuffersUpdating
              .map(function (e) {
                return e ? "T" : "F";
              })
              .join("")
          : "") +
        "]" +
        (e.exception != null ? "MSexception:" + e.exception.name : "")
      );
    }
    function ut(t, n, r, a, i, l, m, p) {
      var _ = r.appendState,
        f = _.currSourceBufferOperation;
      if (f == null) return null;
      var h = null,
        y = null,
        C = null,
        b = (function () {
          function a(e) {
            e === void 0 && (e = "");
            var n =
              "VideoPlayerNextgendashPlaybackLoopUnexpectedSourceBufferEvent[" +
              f.operationState +
              "]<--" +
              i.sourceBufferEventType +
              e;
            throw i.exception != null
              ? o("nextgendasherr").nextgendasherrFromCause(t, i.exception, n)
              : o("nextgendasherr").nextgendasherr(t, n);
          }
          switch (f.operationState) {
            case "wait_start": {
              var m = function (n) {
                if (t.config.qplEnabled) {
                  var e = o("VideoPlayerNextgendashQPL").qplStartPlayingApi(t),
                    a = e.subspan(
                      f.operationType === "append_operation"
                        ? "mse_append_" +
                            r.type +
                            "_" +
                            f.appendInfo.appendInfoType
                        : f.operationType === "remove_operation"
                          ? "mse_remove_" + r.type
                          : "mse_" + f.operationType,
                      f.operationType === "append_operation"
                        ? f.appendInfo.appendInfoType === "data"
                          ? {
                              int: {
                                byteLength: f.buffer.byteLength,
                                dataByteRangeLength:
                                  f.appendInfo.dataByteRangeLength,
                                dataByteRangeStart:
                                  f.appendInfo.dataByteRangeStart,
                                segmentId: f.appendInfo.segment.segmentId,
                              },
                            }
                          : { int: { byteLength: f.buffer.byteLength } }
                        : f.operationType === "remove_operation"
                          ? {
                              string: {
                                removeRange: o(
                                  "VideoPlayerNextgendashMediaUtils",
                                ).debugStringifyTimeRange(f.removeRange),
                              },
                            }
                          : void 0,
                      o("VideoPlayerNextgendashQPL").qplTimestampFromClockstamp(
                        t,
                        n,
                      ),
                    );
                  return function (e, t) {
                    return a(
                      o("VideoPlayerNextgendashQPL").qplAnnotationsMerge(
                        {
                          string: {
                            sourceBufferRangesAfterFinish: y
                              ? o(
                                  "VideoPlayerNextgendashMediaUtils",
                                ).debugStringifyTimeRanges(y)
                              : void 0,
                          },
                        },
                        e,
                      ),
                      t,
                    );
                  };
                }
              };
              switch (i.sourceBufferEventType) {
                case "_started": {
                  var _ = babelHelpers.extends({}, f.operationTiming, {
                      started: l,
                    }),
                    g = m(_.started);
                  return babelHelpers.extends({}, f, {
                    debugSourceBufferRangesAfterStart: void 0,
                    operationState: "wait_updateend",
                    operationTiming: _,
                    qplSubspanEnd: g,
                  });
                }
                case "_exception": {
                  y = p();
                  var b = babelHelpers.extends({}, f.operationTiming, {
                      ended: l,
                      started: l,
                    }),
                    v = o("nextgendasherr").nextgendasherrFromCause(
                      t,
                      i.exception,
                      "VideoPlayerNextgendashPlaybackLoopSourceBufferException",
                    ),
                    S = m(b.started);
                  return (
                    S &&
                      S(
                        o("VideoPlayerNextgendashQPL").qplAnnotationsForError(
                          v,
                        ),
                        o(
                          "VideoPlayerNextgendashQPL",
                        ).qplTimestampFromClockstamp(t, b.ended),
                      ),
                    babelHelpers.extends({}, f, {
                      error: v,
                      operationState: "errored",
                      operationTiming: b,
                      waitForMediaElementErrorUntilUnixMs: l.unixMs + fe,
                    })
                  );
                }
                case "_finished": {
                  var R, L;
                  if (
                    f.operationType !== "append_operation" ||
                    f.appendInfo.appendInfoType !== "data" ||
                    f.appendInfo.dataByteRangeLength > 0
                  )
                    throw a("NotDataEndSegmentAppendOperation");
                  var E = f.appendInfo.segment,
                    k = f.buffer,
                    I = babelHelpers.objectWithoutPropertiesLoose(f, e);
                  if (((y = p()), y != null && !Rt(y, E))) {
                    var T;
                    ((h = {
                      representationId: f.appendInfo.representationId,
                      segment: E,
                    }),
                      n(
                        o("nextgendasherr").nextgendasherr(
                          t,
                          "VideoPlayerNextgendashPlaybackLoopSegmentBufferedInsufficiently",
                          "%s:%s - After finishing append of %s its media time range %s is missing from SourceBuffer: %s",
                          r.type,
                          (T = r.targetRepresentationId) != null
                            ? T
                            : "no_target_representation",
                          et(f.appendInfo),
                          JSON.stringify(E.mediaTimeRange),
                          JSON.stringify(y),
                        ),
                      ));
                  }
                  I.operationType === "append_operation" &&
                    I.appendInfo.appendInfoType === "data" &&
                    (C = I.appendInfo);
                  var D = babelHelpers.extends({}, f.operationTiming, {
                      ended: l,
                      started: l,
                    }),
                    x = m(D.started);
                  return (
                    x &&
                      x(
                        void 0,
                        o(
                          "VideoPlayerNextgendashQPL",
                        ).qplTimestampFromClockstamp(t, D.ended),
                      ),
                    babelHelpers.extends({}, I, {
                      debugSourceBufferRangesAfterFinish: void 0,
                      debugSourceBufferRangesAfterStart: void 0,
                      operationState: "succeeded",
                      operationTiming: D,
                    })
                  );
                }
                default:
                  throw (i.sourceBufferEventType, a());
              }
            }
            case "wait_updateend":
              switch (i.sourceBufferEventType) {
                case "_exception": {
                  var $ = f.abortIsPendingUpdateEnd,
                    P = f.errorIsPendingUpdateEnd,
                    N = f.qplSubspanEnd,
                    M = babelHelpers.objectWithoutPropertiesLoose(f, s);
                  y = p();
                  var w =
                      "VideoPlayerNextgendashPlaybackLoopSourceBufferExceptionWhileAwaitingUpdateEnd" +
                      ($ ? "AfterAbort" : ""),
                    A = P
                      ? o("nextgendasherr").nextgendasherrFromMultipleCauses(
                          t,
                          [
                            ["InitialError", P],
                            ["LaterError", i.exception],
                          ],
                          w,
                        )
                      : o("nextgendasherr").nextgendasherrFromCause(
                          t,
                          i.exception,
                          w,
                        ),
                    F = babelHelpers.extends({}, f.operationTiming, {
                      ended: l,
                    });
                  return (
                    N &&
                      N(
                        o("VideoPlayerNextgendashQPL").qplAnnotationsForError(
                          A,
                        ),
                        o(
                          "VideoPlayerNextgendashQPL",
                        ).qplTimestampFromClockstamp(t, F.ended),
                      ),
                    babelHelpers.extends({}, M, {
                      error: A,
                      operationState: "errored",
                      operationTiming: F,
                      waitForMediaElementErrorUntilUnixMs: l.unixMs + fe,
                    })
                  );
                }
                case "_finished": {
                  var O, B;
                  if (f.operationType !== "remove_operation")
                    throw a("NotRemoveOperation");
                  var W = f.abortIsPendingUpdateEnd,
                    q = f.errorIsPendingUpdateEnd,
                    U = f.qplSubspanEnd,
                    V = babelHelpers.objectWithoutPropertiesLoose(f, u);
                  y = p();
                  var H = babelHelpers.extends({}, V.operationTiming, {
                    ended: l,
                  });
                  return (
                    U &&
                      U(
                        void 0,
                        o(
                          "VideoPlayerNextgendashQPL",
                        ).qplTimestampFromClockstamp(t, H.ended),
                      ),
                    babelHelpers.extends({}, V, {
                      debugSourceBufferRangesAfterFinish: void 0,
                      debugSourceBufferRangesAfterStart: void 0,
                      operationState: "succeeded",
                      operationTiming: H,
                    })
                  );
                }
                case "updateend": {
                  var G = f.abortIsPendingUpdateEnd,
                    z = f.errorIsPendingUpdateEnd,
                    j = f.qplSubspanEnd,
                    K = babelHelpers.objectWithoutPropertiesLoose(f, c),
                    Q =
                      K.operationType === "append_operation" &&
                      K.appendInfo.appendInfoType === "init" &&
                      t.config.isLivePlayback &&
                      r.type === "video" &&
                      r.targetRepresentationReason === "abr_switch_live_tail";
                  (G || z || K.operationType === "remove_operation" || Q) &&
                    (y = p());
                  var X = babelHelpers.extends({}, f.operationTiming, {
                    ended: l,
                  });
                  if (z)
                    return (
                      j &&
                        j(
                          o("VideoPlayerNextgendashQPL").qplAnnotationsForError(
                            z,
                          ),
                          o(
                            "VideoPlayerNextgendashQPL",
                          ).qplTimestampFromClockstamp(t, X.ended),
                        ),
                      babelHelpers.extends({}, K, {
                        debugSourceBufferRangesAfterFinish: void 0,
                        error: z,
                        operationState: "errored",
                        operationTiming: X,
                        waitForMediaElementErrorUntilUnixMs: l.unixMs + fe,
                      })
                    );
                  var Y = K.buffer,
                    J = babelHelpers.objectWithoutPropertiesLoose(K, d);
                  if (G) {
                    var Z = o("nextgendasherr").nextgendasherr(
                      t,
                      "VideoPlayerNextgendashPlaybackLoopSourceBufferOperationAborted",
                    );
                    return (
                      j &&
                        j(
                          o("VideoPlayerNextgendashQPL").qplAnnotationsForError(
                            Z,
                          ),
                          o(
                            "VideoPlayerNextgendashQPL",
                          ).qplTimestampFromClockstamp(t, X.ended),
                        ),
                      babelHelpers.extends({}, J, {
                        debugSourceBufferRangesAfterFinish: void 0,
                        operationState: "aborted",
                        operationTiming: X,
                      })
                    );
                  }
                  return (
                    f.operationType === "append_operation" &&
                      f.appendInfo.appendInfoType === "data" &&
                      (C = f.appendInfo),
                    j &&
                      j(
                        void 0,
                        o(
                          "VideoPlayerNextgendashQPL",
                        ).qplTimestampFromClockstamp(t, X.ended),
                      ),
                    babelHelpers.extends({}, J, {
                      debugSourceBufferRangesAfterFinish: void 0,
                      operationState: "succeeded",
                      operationTiming: X,
                    })
                  );
                }
                case "error": {
                  if (f.errorIsPendingUpdateEnd) throw a("SecondErrorEvent");
                  if (f.abortIsPendingUpdateEnd) throw a("ErrorAfterAbort");
                  return babelHelpers.extends({}, f, {
                    errorIsPendingUpdateEnd: o("nextgendasherr").nextgendasherr(
                      t,
                      "VideoPlayerNextgendashPlaybackLoopSourceBufferErrorEvent",
                    ),
                  });
                }
                case "abort": {
                  if (f.abortIsPendingUpdateEnd) throw a("SecondAbortEvent");
                  if (f.errorIsPendingUpdateEnd) throw a("AbortAfterError");
                  return babelHelpers.extends({}, f, {
                    abortIsPendingUpdateEnd: !0,
                  });
                }
                default:
                  throw (i.sourceBufferEventType, a());
              }
            default:
              throw (f.operationState, a());
          }
        })(),
        v = h,
        S =
          b.operationState === "succeeded" ||
          b.operationState === "errored" ||
          b.operationState === "aborted",
        R = b !== f ? (S ? null : b) : _.currSourceBufferOperation,
        L = b !== f && S ? b : _.lastSourceBufferOperation;
      if (
        R !== _.currSourceBufferOperation ||
        L !== _.lastSourceBufferOperation
      ) {
        var E,
          k,
          I,
          T =
            L != null && L.operationType === "append_operation"
              ? L
              : _.lastAppendOperation,
          D =
            L != null && L.operationType === "remove_operation"
              ? L
              : _.lastRemoveOperation,
          x = _.appendChain,
          $ =
            L != null &&
            L.operationType === "append_operation" &&
            L.operationState === "succeeded"
              ? L.appendInfo.appendInfoType === "init"
                ? {
                    playheadMinimumTimeSec:
                      t.config.isLivePlayback &&
                      r.type === "video" &&
                      r.targetRepresentationReason === "abr_switch_live_tail" &&
                      y != null
                        ? j(y, m)
                        : m,
                    representationId: L.appendInfo.representationId,
                  }
                : tt(L.appendInfo)
                  ? x != null &&
                    x.playheadMinimumTimeSec >
                      L.appendInfo.segment.mediaTimeRange[1] + g
                    ? {
                        playheadMinimumTimeSec: m,
                        representationId: L.appendInfo.representationId,
                      }
                    : x != null
                      ? L.appendInfo.segment.isPredictiveSegment === !0
                        ? x
                        : {
                            mediaTail: {
                              mediaTimeSec:
                                L.appendInfo.segment.mediaTimeRange[1],
                              segmentId: L.appendInfo.segment.segmentId,
                            },
                            playheadMinimumTimeSec: x.playheadMinimumTimeSec,
                            representationId: x.representationId,
                          }
                      : x
                  : x
              : x,
          P = ct(
            _.sourceBufferRangesAnnotated,
            y,
            (E = C) == null ? void 0 : E.segment.mediaTimeRange,
            (k = C) == null ? void 0 : k.representationId,
            r.manifestRepresentationsCount,
          ),
          N =
            "" +
            f.operationType +
            (f.operationType === "append_operation"
              ? "/" + et(f.appendInfo)
              : "") +
            ":" +
            f.operationState +
            "--" +
            i.sourceBufferEventType +
            (i.sourceBufferEventType === "_exception"
              ? "/" + i.exception.name
              : "") +
            "-->" +
            b.operationState +
            (b.operationState === "wait_updateend"
              ? (b.errorIsPendingUpdateEnd ? ",errorIsPendingUpdateEnd" : "") +
                (b.abortIsPendingUpdateEnd ? ",abortIsPendingUpdateEnd" : "")
              : b.operationState === "errored"
                ? ",waitForMediaElementError"
                : "") +
            (v != null ? ",SegmentBufferedInsufficiently" : ""),
          M =
            r.type +
            ":" +
            ((I = r.targetRepresentationId) != null
              ? I
              : "no_target_representation") +
            ":";
        return (
          a.push(M + "handleSourceBufferEvent:" + N),
          T !== _.lastAppendOperation &&
            a.push(
              M +
                "...:lastAppendOperation:" +
                (T != null ? et(T.appendInfo) : "null"),
            ),
          D !== _.lastRemoveOperation &&
            a.push(
              M +
                "...:lastRemoveOperation:" +
                (D != null
                  ? o(
                      "VideoPlayerNextgendashMediaUtils",
                    ).debugStringifyTimeRange(D.removeRange)
                  : "null"),
            ),
          $ !== x && a.push(M + "...:appendChain:" + nt(x) + "-->" + nt($)),
          {
            appendState: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends({}, _, {
                appendChain: $,
                currSourceBufferOperation: R,
                lastAppendOperation: T,
                lastRemoveOperation: D,
                lastSourceBufferOperation: L,
                sourceBufferRanges: y != null ? y : _.sourceBufferRanges,
                sourceBufferRangesAnnotated:
                  P != null ? P : _.sourceBufferRangesAnnotated,
                workaroundForSegmentBufferedInsufficiently:
                  v != null
                    ? He(
                        r.appendState
                          .workaroundForSegmentBufferedInsufficiently,
                        v,
                      )
                    : r.appendState.workaroundForSegmentBufferedInsufficiently,
              }),
            ),
          }
        );
      }
      return null;
    }
    function ct(e, t, n, r, o) {
      if (t == null) return null;
      var a = e[0],
        i = a != null ? a[2] : null,
        l = Math.max(
          o,
          r != null || i != null ? (r != null && i != null ? 2 : 1) : 0,
        );
      if (l === 1 && t.length > 0) {
        var s;
        return (
          (i = (s = i != null ? i : r) != null ? s : null),
          t.map(function (e) {
            var t = e[0],
              n = e[1];
            return [t, n, i];
          })
        );
      } else if (l > 1 && t.length > 0) {
        var u = new Set(),
          c,
          d,
          m;
        for (c = 0, d = t.length; c < d; ++c)
          ((m = t[c]), u.add(m[0]), u.add(m[1]));
        for (c = 0, d = e.length; c < d; ++c)
          ((m = e[c]), u.add(m[0]), u.add(m[1]));
        n != null && (u.add(n[0]), u.add(n[1]));
        var p = Array.from(u).sort(function (e, t) {
            return e - t;
          }),
          _ = [],
          f,
          g,
          h;
        for (c = 0, d = p.length - 1; c < d; ++c)
          if (
            ((f = p[c]),
            (g = p[c + 1]),
            t.some(function (e) {
              return e[0] <= f && g <= e[1];
            }))
          ) {
            var y, C;
            ((h = (f + g) / 2),
              (i =
                (y =
                  (C = e.find(function (e) {
                    return e[0] <= h && h <= e[1];
                  })) == null
                    ? void 0
                    : C[2]) != null
                  ? y
                  : null),
              i == null && n != null && r != null && (i = r),
              (a = _[_.length - 1]),
              i == null && a != null && a[1] === f
                ? (_[_.length - 1] = [a[0], g, a[2]])
                : a != null && a[1] === f && a[2] === i
                  ? (_[_.length - 1] = [a[0], g, i])
                  : _.push([f, g, i]));
          }
        return _;
      } else return e.length > 0 ? [] : null;
    }
    function dt(e) {
      var t = new Map();
      for (var n of e) {
        var r = o(
          "VideoPlayerNextgendashManifestParser",
        ).getDisplayLabelFromVideoRepresentation(n);
        t.has(r) || t.set(r, n);
      }
      return Array.from(t.values());
    }
    function mt(e, t, n) {
      var r = function (n, r) {
          return e.filter(function (e) {
            return e.lang === n && e.role === r;
          });
        },
        o = [],
        a = r(t, n);
      if (a.length === 0) {
        var i = (t != null ? t : "null") + "+" + (n != null ? n : "null"),
          l = e.map(function (e) {
            return e.lang;
          });
        (l.includes(t) && l.unshift(t), (l = Array.from(new Set(l))));
        for (
          var s = Array.from(
              new Set(
                e.map(function (e) {
                  return e.role;
                }),
              ),
            ),
            u = 0;
          a.length === 0 && u < l.length;
          ++u
        )
          for (var c = l[u], d = 0; a.length === 0 && d < s.length; ++d) {
            var m = s[d];
            (c !== t || m !== n) &&
              (o.push(
                (c === t ? "sameLang" : "lang#" + u) +
                  "+" +
                  (m === n ? "sameRole" : "role#" + d) +
                  ";" +
                  i +
                  "-->" +
                  (c != null ? c : "null") +
                  "+" +
                  (m != null ? m : "null"),
              ),
              (a = r(c, m)));
          }
        var p = e[0];
        if (a.length === 0 && p != null) {
          var _, f;
          (o.push(
            "firstRepresentation;" +
              i +
              "-->" +
              p.representationId +
              ":" +
              ((_ = p.lang) != null ? _ : "null") +
              "+" +
              ((f = p.role) != null ? f : "null"),
          ),
            (a = [p]));
        }
      }
      return { debugFallbacksTried: o, filteredRepresentations: a };
    }
    function pt(e, t) {
      var n = mt(e, t.videoLang, t.videoRole),
        r = n.debugFallbacksTried,
        o = n.filteredRepresentations;
      return { debugFallbacksTried: r, representationsByVariant: dt(o) };
    }
    function _t(e, t) {
      var n = e.some(function (e) {
          return (
            t == null ||
            o(
              "VideoPlayerNextgendashManifestParser",
            ).getDisplayLabelFromVideoRepresentation(e) === t
          );
        }),
        r = e.filter(function (e) {
          return n
            ? t == null ||
                o(
                  "VideoPlayerNextgendashManifestParser",
                ).getDisplayLabelFromVideoRepresentation(e) === t
            : !0;
        });
      return r;
    }
    function ft(e, t) {
      var n = mt(e, t.audioLang, t.audioRole),
        r = n.debugFallbacksTried,
        o = n.filteredRepresentations;
      return { debugFallbacksTried: r, representationsByVariant: o };
    }
    function gt(e, t, n, a, i, l, s, u, c, d, m, p, _, g, h, y, C, b, v, S) {
      var R,
        L =
          (R = l.find(function (e) {
            return e.representationId === c;
          })) != null
            ? R
            : null,
        E,
        k = L,
        I = h,
        T = y,
        D = C,
        x = p != null ? p : M,
        $ = pt(s, x),
        P = $.debugFallbacksTried,
        N = $.representationsByVariant,
        w = f(
          e,
          N.map(function (e) {
            return e.representationId;
          }),
        ),
        A = _t(N, _);
      if (
        (P.length > 0 &&
          !P.every(function (e) {
            return e.startsWith("lang#0+sameRole;null+null-->");
          })) ||
        A.length === 0
      ) {
        var F,
          O = [
            "video",
            s.length,
            x.videoLang,
            x.videoRole,
            x.audioLang,
            x.audioRole,
            _,
          ].join(":"),
          B = 1 + ((F = n.get(O)) != null ? F : 0);
        if ((n.set(O, B), B === 1)) {
          var W = at(l),
            q = at(s),
            U = at(N),
            V = at(A);
          t(
            o("nextgendasherr").nextgendasherr(
              e,
              A.length === 0
                ? "VideoPlayerNextgendashPlaybackLoopRepresentationAllFiltered[video]"
                : "VideoPlayerNextgendashPlaybackLoopRepresentationFallback[video]",
              "%s:%s - No representations for variant, " +
                (A.length === 0 ? "all filtered" : "fallback applied") +
                ". %s %s %s %s %s %s %s %s",
              "video",
              c != null ? c : "no_target_representation",
              "selectedVariant=" + JSON.stringify(p),
              "targetVariant=" + (x === p ? "same" : JSON.stringify(x)),
              "manifestRepresentations=" + W,
              "playableRepresentations=" + (q === W ? "same" : q),
              "blockedRepresentations=" + rt(u),
              "targetVariantRepresentations=" + U,
              "filteredRepresentations=" + (V === U ? "same" : V),
              "fallbacksTried=" + P.join(";"),
            ),
          );
        }
      }
      var H = d != null ? d : M,
        G = ht(p, x, H, _, m);
      if (A.length > 0) {
        var z = null;
        if (h == null && g != null) {
          var j = A.filter(function (e) {
            var t;
            return (t = g.prefetchedRepresentationIds.includes(
              e.representationId,
            )) != null
              ? t
              : !1;
          });
          if (j.length > 0) {
            var K = j[0];
            ((I = f(e, {
              bestRepresentationId: K.representationId,
              bestRepresentationIsPrefetched: !0,
              hasMadeInitialDecision: !1,
              lastEvaluationReason: null,
            })),
              (T = g.prefetchStartedAt),
              (z = K),
              (k = K),
              (E = "prefetch"));
          }
        } else {
          var Q;
          z =
            (Q = A.find(function (e) {
              return (
                e.representationId ===
                (h == null ? void 0 : h.bestRepresentationId)
              );
            })) != null
              ? Q
              : null;
        }
        var Y = 5e3,
          J = 1e3,
          Z = 5e3,
          ee = e.config.enableSplitAbrEvalSwitchIntervals,
          te = ee ? J : Y,
          ne = Z,
          re =
            y != null &&
            o(
              "VideoPlayerNextgendashHostAPI",
            ).diffVideoPlayerNextgendashClockstamp(a, y).unixMs > te,
          oe =
            !ee ||
            C == null ||
            o(
              "VideoPlayerNextgendashHostAPI",
            ).diffVideoPlayerNextgendashClockstamp(a, C).unixMs > ne,
          ae = G || k == null || z == null || (re && oe);
        if (ae) {
          var ie,
            le = i(e, A, h),
            se = le.bestRepresentation,
            ue = !r("deepEquals")(le.nextABRState, h);
          if (
            (ue && (I = f(e, le.nextABRState)),
            (ee || ue || e.config.enableStableAbrEvaluationCooldown) &&
              (T = e.host.clock()),
            se != null &&
              se.representationId !==
                ((ie = k) == null ? void 0 : ie.representationId))
          ) {
            var ce = !G && k != null && se.bandwidth > k.bandwidth,
              de = b && ce,
              me = !de || X(se, S, v);
            me
              ? ((k = se),
                ee && (D = e.host.clock()),
                G
                  ? (E = "selected_switch")
                  : de
                    ? (E = "abr_switch_live_tail")
                    : (E = "abr_switch"))
              : k != null
                ? (E = "abr_keep")
                : (E = "null_no_representation_from_abr");
          } else
            k != null
              ? G
                ? (E = "selected_keep")
                : (E = "abr_keep")
              : G
                ? (E = "selected_keep")
                : k != null
                  ? (E = "keep_prev_no_representation_from_abr")
                  : (E = "null_no_representation_from_abr");
        } else E == null && (E = "abr_skip");
      } else
        k != null
          ? (E = "keep_prev")
          : l.length > 0
            ? (E = "null_no_representations_for_variant")
            : (E = "null_no_representations_in_manifest");
      return {
        prevTargetRepresentation: L,
        targetRepresentation: k,
        targetRepresentationReason: E,
        targetVariantRepresentationIds: w,
        videoABRState: I,
        videoABRStateClock: T,
        videoABRSwitchClock: D,
      };
    }
    function ht(e, t, n, r, o) {
      return (
        (e != null &&
          (t.videoLang !== n.videoLang || t.videoRole !== n.videoRole)) ||
        (r != null && r !== o)
      );
    }
    function yt(e, t, n) {
      return (
        e != null &&
        (t.audioLang !== n.audioLang || t.audioRole !== n.audioRole)
      );
    }
    function Ct(e, t, n, r, a, i, l, s, u) {
      var c,
        d =
          (c = r.find(function (e) {
            return e.representationId === l;
          })) != null
            ? c
            : null,
        m,
        p = d,
        _ = u != null ? u : M,
        g = ft(a, _),
        h = g.debugFallbacksTried,
        y = g.representationsByVariant,
        C = f(
          e,
          y.map(function (e) {
            return e.representationId;
          }),
        ),
        b = y;
      if (
        (h.length > 0 &&
          !h.every(function (e) {
            return e.startsWith("lang#0+sameRole;null+null-->");
          })) ||
        b.length === 0
      ) {
        var v,
          S = [
            "audio",
            a.length,
            _.videoLang,
            _.videoRole,
            _.audioLang,
            _.audioRole,
          ].join(":"),
          R = 1 + ((v = n.get(S)) != null ? v : 0);
        if ((n.set(S, R), R === 1)) {
          var L = it(r),
            E = it(a),
            k = it(y),
            I = it(b);
          t(
            o("nextgendasherr").nextgendasherr(
              e,
              b.length === 0
                ? "VideoPlayerNextgendashPlaybackLoopRepresentationAllFiltered[audio]"
                : "VideoPlayerNextgendashPlaybackLoopRepresentationFallback[audio]",
              "%s:%s - No representations for variant, " +
                (b.length === 0 ? "all filtered" : "fallback applied") +
                ". %s %s %s %s %s %s %s %s",
              "audio",
              l != null ? l : "no_target_representation",
              "selectedVariant=" + JSON.stringify(u),
              "targetVariant=" + (_ === u ? "same" : JSON.stringify(_)),
              "manifestRepresentations=" + L,
              "playableRepresentations=" + (E === L ? "same" : E),
              "blockedRepresentations=" + rt(i),
              "targetVariantRepresentations=" + k,
              "filteredRepresentations=" + (I === k ? "same" : I),
              "fallbacksTried=" + h.join(";"),
            ),
          );
        }
      }
      var T = s != null ? s : M,
        D = yt(u, _, T);
      if (b.length > 0) {
        var x,
          $ = b
            .slice()
            .sort(function (e, t) {
              return t.bandwidth - e.bandwidth;
            })
            .find(function (e) {
              return !0;
            });
        $ != null &&
        $.representationId !== ((x = p) == null ? void 0 : x.representationId)
          ? ((p = $), D ? (m = "selected_switch") : (m = "abr_switch"))
          : p != null
            ? D
              ? (m = "selected_keep")
              : (m = "abr_keep")
            : D
              ? (m = "selected_keep")
              : p != null
                ? (m = "keep_prev_no_representation_from_abr")
                : (m = "null_no_representation_from_abr");
      } else
        p != null
          ? (m = "keep_prev")
          : r.length > 0
            ? (m = "null_no_representations_for_variant")
            : (m = "null_no_representations_in_manifest");
      return {
        prevTargetRepresentation: d,
        targetRepresentation: p,
        targetRepresentationReason: m,
        targetVariantRepresentationIds: C,
      };
    }
    function bt(e, t, n, r, a, i, l, s, u, c) {
      var d = u,
        m,
        p,
        _,
        g;
      if (d.type === "video") {
        var h,
          y,
          C,
          b = P(e, a.mediaElementSnapshot),
          v = gt(
            e,
            t,
            n,
            r,
            function (t, n, r) {
              var i, u;
              return o(
                "VideoPlayerNextgendashABR",
              ).evaluateVideoPlayerNextgendashABRForVideo(n, {
                abrConfig: a.abrConfig,
                bandwidthDiagnostics: e.host.networkDiagnosticsReadBandwidth(
                  e.config.enableBandwidthDiagnosticsFallback,
                ),
                cacheQualityScoreInRepresentation:
                  e.config.cacheQualityScoreInRepresentation,
                devicePixelRatio: a.devicePixelRatio,
                isDocumentHidden: a.isDocumentHidden,
                mediaDurationSec:
                  (i =
                    (u = a.mediaElementSnapshot) == null
                      ? void 0
                      : u.duration) != null
                    ? i
                    : "NOT_A_NUMBER",
                playerDimensions: a.playerViewportDimensions,
                playheadMediaTimeSec: b,
                prefetchResult: l,
                sourceBufferBufferedRangesSec: s,
                useSimpleBandwidthEstimate: e.config.useSimpleBandwidthEstimate,
              });
            },
            i.manifestRepresentations.video,
            d.playableRepresentations,
            d.blockedRepresentations,
            d.targetRepresentationId,
            d.prevSelectedMediaVariant,
            d.prevSelectedVideoQualityDisplayLabel,
            a.selectedMediaVariant,
            a.selectedVideoQualityDisplayLabel,
            l,
            d.videoABRState,
            d.videoABRStateClock,
            d.videoABRSwitchClock,
            e.config.isLivePlayback,
            b,
            s,
          );
        if (
          ((m = v.prevTargetRepresentation),
          (_ = v.targetRepresentation),
          (p = v.targetRepresentationReason),
          (g = v.targetVariantRepresentationIds),
          (h = v.videoABRState),
          (y = v.videoABRStateClock),
          (C = v.videoABRSwitchClock),
          h !== d.videoABRState ||
            y !== d.videoABRStateClock ||
            C !== d.videoABRSwitchClock)
        ) {
          var S, R, L, E, k, I, T, D;
          (c.push(
            d.type +
              ":" +
              ((S = d.targetRepresentationId) != null
                ? S
                : "no_target_representation") +
              ":videoABRState:" +
              (((R = h) == null ? void 0 : R.bestRepresentationId) !==
              ((L = d.videoABRState) == null ? void 0 : L.bestRepresentationId)
                ? (E = (k = h) == null ? void 0 : k.bestRepresentationId) !=
                  null
                  ? E
                  : "no_best_representation"
                : "best_representation_unchanged") +
              (((I = h) == null ? void 0 : I.bestRepresentationIsPrefetched) ===
              !0
                ? "(prefetched)"
                : "") +
              ":" +
              ((T = (D = h) == null ? void 0 : D.lastEvaluationReason) != null
                ? T
                : "?"),
          ),
            (d = babelHelpers.extends({}, d, {
              videoABRState: h,
              videoABRStateClock: y,
              videoABRSwitchClock: C,
            })));
        }
      } else if (d.type === "audio") {
        var x = Ct(
          e,
          t,
          n,
          i.manifestRepresentations.audio,
          d.playableRepresentations,
          d.blockedRepresentations,
          d.targetRepresentationId,
          d.prevSelectedMediaVariant,
          a.selectedMediaVariant,
        );
        ((m = x.prevTargetRepresentation),
          (_ = x.targetRepresentation),
          (p = x.targetRepresentationReason),
          (g = x.targetVariantRepresentationIds));
      } else {
        var $, N;
        (d.type,
          (p = "unexpected_stream_type"),
          (g = f(
            e,
            ($ =
              (N = i.manifestRepresentations[d.type]) == null
                ? void 0
                : N.map(function (e) {
                    return e.representationId;
                  })) != null
              ? $
              : [],
          )));
      }
      if (_ == null) {
        var M;
        throw (
          d.type === "video"
            ? (M = i.manifestRepresentations.video)
            : d.type === "audio"
              ? (M = i.manifestRepresentations.audio)
              : d.type,
          (M = M != null ? M : []),
          o("nextgendasherr").nextgendasherr(
            e,
            "VideoPlayerNextgendashPlaybackLoopNoTargetRepresentation[" +
              d.type +
              "]",
            "%s:%s - Unable to select representation (" + p + "). %s",
            d.type,
            m != null ? m.representationId : "no_target_representation",
            "manifestRepresentations=" +
              (M.map(function (e) {
                return e.representationId;
              }).join(",") || "none"),
            "blockedRepresentations=" + rt(d.blockedRepresentations),
          )
        );
      }
      return {
        prevTargetRepresentation: m,
        stream: vt(
          e,
          d,
          c,
          m,
          _,
          p,
          g,
          a.selectedMediaVariant,
          a.selectedVideoQualityDisplayLabel,
        ),
        targetRepresentation: _,
        targetRepresentationReason: p,
      };
    }
    function vt(e, t, n, r, a, i, l, s, u) {
      if (a != null && a.type !== t.type)
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashPlaybackLoopRepresentationTypeMismatch",
          "Unexpected representation type " +
            a.type +
            " for stream of type " +
            t.type,
        );
      if (
        (a == null ? void 0 : a.representationId) !==
        (r == null ? void 0 : r.representationId)
      ) {
        var c, d, m, p;
        return (
          n.push(
            t.type +
              ":" +
              ((c = t.targetRepresentationId) != null
                ? c
                : "no_target_representation") +
              ":switchRepresentation:" +
              i +
              ":" +
              ((d = r == null ? void 0 : r.representationId) != null
                ? d
                : "null") +
              "->" +
              ((m = a == null ? void 0 : a.representationId) != null
                ? m
                : "null"),
          ),
          babelHelpers.extends({}, t, {
            prevSelectedMediaVariant: s,
            prevSelectedVideoQualityDisplayLabel: u,
            targetRepresentationId:
              (p = a == null ? void 0 : a.representationId) != null ? p : null,
            targetRepresentationReason: i,
            targetVariantRepresentationIds: l,
          })
        );
      } else return t;
    }
    function St(e, t, n) {
      for (var r = 0, a = e.length; r < a; ++r) {
        var i = e[r];
        if (
          o("VideoPlayerNextgendashMediaUtils").isWithinRange(i, t[0], n) &&
          o("VideoPlayerNextgendashMediaUtils").isWithinRange(i, t[1], n)
        )
          return !0;
      }
      return !1;
    }
    function Rt(e, t) {
      return (
        St(e, t.mediaTimeRange, 0.05) ||
        (t.isEndingSegment && St(e, t.mediaTimeRange, 0.05))
      );
    }
    function Lt(e, t, n, r) {
      return e == null || t !== e.representationId || e.mediaTail == null
        ? !1
        : r
          ? n.mediaTimeRange[1] <= e.mediaTail.mediaTimeSec + E
          : n.segmentId <= e.mediaTail.segmentId;
    }
    function Et(e, t) {
      for (
        var n = [],
          r = e.segmentTimeline,
          a = e.startNumber,
          i = e.timescale,
          l = r.every(function (e) {
            return e.id != null;
          }),
          s = r.length,
          u = 0;
        u < s;
        ++u
      )
        for (var c = r[u], d = c.r + 1, m = 0; m < d; ++m) {
          var p = n.length,
            _ = l && c.id != null ? c.id - (c.r - m) : (a != null ? a : 0) + p,
            f = c.t + m * c.d;
          n.push({
            isEndingSegment: u === s - 1 && m === d - 1 && !t,
            mediaFileByteRange: o("VideoPlayerNextgendashMediaUtils")
              .ZERO_TO_EOF_OPEN_ENDED_BYTE_RANGE,
            mediaTimeRange: [(c.t + m * c.d) / i, (c.t + (m + 1) * c.d) / i],
            segmentId: p,
            templateNumber: _,
            templateTime: f,
          });
        }
      return n;
    }
    function kt(e, t, n) {
      if (n <= 0 || t == null || e.length <= 1) return e;
      for (
        var r = t - n, o = 0;
        o < e.length - 1 && e[o].mediaTimeRange[1] <= r;
      )
        o++;
      return o === 0 ? e : e.slice(o);
    }
    function It(e) {
      var t = e.segmentTimeline,
        n = e.timescale;
      if (t.length === 0) return null;
      var r = t[t.length - 1];
      return (r.t + (r.r + 1) * r.d) / n;
    }
    function Tt(e, t, n, r, o) {
      return e.mediaTimeRange[1] > o + E
        ? !1
        : e.isPredictiveSegment === !0
          ? !0
          : n &&
            t.endNumber != null &&
            r != null &&
            e.mediaTimeRange[1] >= r - E;
    }
    function Dt(e, t, n) {
      var r = t[t.length - 1];
      if (r == null || e.endNumber == null) return t;
      var a =
          r.isPredictiveSegment === !0 && r.templateNumber != null
            ? r.templateNumber + 1
            : e.endNumber + 1,
        i = r.mediaTimeRange[1] - r.mediaTimeRange[0],
        l = e.segmentAverageDuration != null ? e.segmentAverageDuration / n : i,
        s = r.mediaTimeRange[1],
        u = Math.round(s * n);
      return t.concat([
        {
          isEndingSegment: !1,
          isPredictiveSegment: !0,
          mediaFileByteRange: o("VideoPlayerNextgendashMediaUtils")
            .ZERO_TO_EOF_OPEN_ENDED_BYTE_RANGE,
          mediaTimeRange: [s, s + l],
          segmentId: r.segmentId + 1,
          templateNumber: a,
          templateTime: u,
        },
      ]);
    }
    function xt(e, t, n, r, a) {
      var i = a ? $t(r) : r,
        l = void 0,
        s = void 0,
        u = function (t, n) {
          return Math.abs(t - n) > 0.001;
        };
      return i.filter(function (r, c) {
        if (s !== void 0 && r.segmentId <= s)
          throw o("nextgendasherr").nextgendasherr(
            e,
            "VideoPlayerNextgendashPlaybackLoopBadSegmentIdSequenceInSidx",
            "%s:%s - sidx segmentId %s duplicates or decreases from previous %s",
            t,
            n,
            r.segmentId,
            s,
          );
        if (((s = r.segmentId), r.mediaTimeRange[1] < r.mediaTimeRange[0]))
          throw o("nextgendasherr").nextgendasherr(
            e,
            "VideoPlayerNextgendashPlaybackLoopFoundNegativeSegmentDurationFromSidx",
            "%s:%s - sidx segmentId %s for time %ss - %ss has negative duration %s",
            t,
            n,
            r.segmentId,
            r.mediaTimeRange[0],
            r.mediaTimeRange[1],
            r.mediaTimeRange[1] - r.mediaTimeRange[0],
          );
        if (l !== void 0 && u(r.mediaTimeRange[0], l))
          throw o("nextgendasherr").nextgendasherr(
            e,
            "VideoPlayerNextgendashPlaybackLoopFoundNonContinuousMediaTimeRangesFromSidx",
            "%s:%s - sidx segmentId %s start time %s too far from previous segment's end time %s",
            t,
            n,
            r.segmentId,
            r.mediaTimeRange[0],
            l,
          );
        l = r.mediaTimeRange[1];
        var d = r.mediaTimeRange[1] <= 0;
        if (d && r.isEndingSegment)
          throw o("nextgendasherr").nextgendasherr(
            e,
            "VideoPlayerNextgendashPlaybackLoopFoundNonPositiveRepresentationEndTimeFromSidx",
            "%s:%s - sidx segmentId %s isEndingSegment with non-positive end time %s",
            t,
            n,
            r.segmentId,
            r.mediaTimeRange[1],
          );
        if (!a && r.isEndingSegment !== (c === i.length - 1))
          throw o("nextgendasherr").nextgendasherr(
            e,
            "VideoPlayerNextgendashPlaybackLoopSidxHasBadEndingSegmentFlag",
            "%s:%s - sidx with segment count %s has segmentId %s incorrectly marked as " +
              (r.isEndingSegment ? "ending" : "not ending"),
            t,
            n,
            i.length,
            r.segmentId,
          );
        return !d;
      });
    }
    function $t(e) {
      for (
        var t = e.length > 0 ? e.length - 1 : 0, n = e.length - 1;
        n > 0;
        n--
      ) {
        var r = e[n - 1],
          o = e[n];
        if (Math.abs(o.mediaTimeRange[0] - r.mediaTimeRange[1]) > 0.001) break;
        t = n - 1;
      }
      return t === 0 ? e : e.slice(t);
    }
    function Pt(e, t, n, r, a, i, l, s) {
      if (r.mediaTail == null) return r;
      var u = r.playheadMinimumTimeSec,
        c = r.mediaTail.mediaTimeSec;
      if (u > c + g)
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashPlaybackLoopIncoherentAppendChain",
          "%s:%s - appendChain.playheadMinimumTimeSec %ss > appendChain.mediaTail.mediaTimeSec %ss",
          t,
          n,
          u,
          c,
        );
      if (!o("VideoPlayerNextgendashMediaUtils").isWithinRange([u, c + g], a)) {
        if (
          e.config.isLivePlayback &&
          (K(i, a, u) ||
            (e.config.liveAppendChainForwardCoveredEscapeEnabled && Q(i, a, c)))
        )
          return r;
        var d = {
          playheadMinimumTimeSec: a,
          representationId: r.representationId,
        };
        return (
          s.push(
            t +
              ":" +
              n +
              ":appendChain:" +
              nt(r) +
              "-->" +
              nt(d) +
              "(playhead_outside)",
          ),
          d
        );
      }
      if (Math.abs(c - u) > g) {
        var m = [u, Math.max(a, c - g)];
        if (i === void 0 || !St(i, m, 0)) {
          var p = {
            playheadMinimumTimeSec: a,
            representationId: r.representationId,
          };
          return (
            s.push(
              t +
                ":" +
                n +
                ":appendChain:" +
                nt(r) +
                "-->" +
                nt(p) +
                "(GapFoundIn" +
                o("VideoPlayerNextgendashMediaUtils").debugStringifyTimeRange(
                  m,
                ) +
                ":ActualBuffered" +
                (i != null
                  ? o(
                      "VideoPlayerNextgendashMediaUtils",
                    ).debugStringifyTimeRanges(i)
                  : "Unavailable") +
                ":MSEstate=" +
                st(e.host.mediaSourceCollectSnapshot(e, l)) +
                ")",
            ),
            p
          );
        }
      }
      return r;
    }
    function Nt(e, t, n) {
      for (
        var r = null,
          o = null,
          a = null,
          i = null,
          l = null,
          s = 0,
          u = e.length,
          c = 0;
        s < u;
        ++s
      ) {
        var d = e[s],
          m = c + d.byteLength;
        if (
          (r == null && t >= c && t < m && ((r = s), (o = t - c)),
          r != null && o != null)
        ) {
          a = s;
          var p = n != null ? Math.min(t + n, m) : m;
          if (((l = p - t), (i = p - Math.max(t, c)), n != null && l >= n))
            break;
        }
        c = m;
      }
      return r == null ||
        o == null ||
        a == null ||
        i == null ||
        l == null ||
        l === 0
        ? null
        : {
            copyTotalBytesCount: l,
            endChunkBytesCount: i,
            endChunkIndex: a,
            startChunkByteOffset: o,
            startChunkIndex: r,
          };
    }
    function Mt(e, t) {
      var n = t.startChunkByteOffset,
        r = t.startChunkIndex,
        o = t.copyTotalBytesCount,
        a = t.endChunkBytesCount,
        i = t.endChunkIndex,
        l = null;
      if (i === r)
        return (
          (l =
            n === 0 && a === e[r].byteLength ? e[r] : e[r].subarray(n, n + a)),
          l
        );
      for (; l == null && i > r; )
        try {
          l = new Uint8Array(new ArrayBuffer(o));
        } catch (t) {
          ((l = null),
            (o -= a),
            i--,
            (a = e[i].byteLength - (i === r ? n : 0)));
        }
      if (l != null)
        for (var s = 0, u = r; u <= i; ++u) {
          var c = e[u],
            d =
              u === r || u === i
                ? c.subarray(u === r ? n : 0, u === i ? a : c.byteLength)
                : c;
          (l.set(d, s), (s += d.byteLength));
        }
      return l;
    }
    function wt(e, t, n, r, a) {
      var i,
        l,
        s,
        u =
          (i = r == null ? void 0 : r.manifestRepresentations[n.type]) != null
            ? i
            : [],
        c =
          (l =
            u == null
              ? void 0
              : u.filter(function (e) {
                  return n.blockedRepresentations[e.representationId] == null;
                })) != null
            ? l
            : [],
        d = null;
      if (u.length > 0 && c.length === 0) {
        var m,
          p = ot(u),
          _ = ot(c),
          f = [
            "VideoPlayerNextgendashPlaybackLoopBlockedAllRepresentations[" +
              n.type +
              "]",
            "%s:%s - Blocked all representations: %s %s %s",
            n.type,
            (m = n.targetRepresentationId) != null
              ? m
              : "no_target_representation",
            "manifestRepresentations=" + p,
            "playableRepresentations=" + (_ === p ? "same" : _),
            "blockedRepresentations=" + rt(n.blockedRepresentations),
          ];
        d =
          a != null
            ? o("nextgendasherr").nextgendasherrFromCause.apply(
                void 0,
                [e, a].concat(f),
              )
            : o("nextgendasherr").nextgendasherr.apply(void 0, [e].concat(f));
      }
      if (
        (t.push(
          n.type +
            ":" +
            ((s = n.targetRepresentationId) != null
              ? s
              : "no_target_representation") +
            ":playableRepresentations:" +
            c.length +
            "-of-" +
            u.length,
        ),
        d != null)
      ) {
        var g;
        t.push(
          n.type +
            ":" +
            ((g = n.targetRepresentationId) != null
              ? g
              : "no_target_representation") +
            ":streamFatalError:" +
            d.name,
        );
      }
      var h = {
        targetRepresentationId: n.targetRepresentationId,
        targetRepresentationReason: n.targetRepresentationReason,
      };
      if (
        e.config.resetTargetRepresentationWhenItGetsBlocked &&
        n.targetRepresentationId != null &&
        n.blockedRepresentations[n.targetRepresentationId] != null
      ) {
        var y;
        (t.push(
          n.type +
            ":" +
            ((y = n.targetRepresentationId) != null
              ? y
              : "no_target_representation") +
            ":targetRepresentationId:blocked",
        ),
          (h = {
            targetRepresentationId: null,
            targetRepresentationReason: "null_blocked_representation",
          }));
      }
      return babelHelpers.extends({}, n, h, {
        manifestRepresentationsCount: u.length,
        playableRepresentations: o(
          "VideoPlayerNextgendashStateMachine",
        ).skipAutoDisposeInsideThisObject(c),
        streamFatalError: d != null ? d : n.streamFatalError,
      });
    }
    function At(e, t, n, r, a, i, l) {
      var s,
        u,
        c = r.blockedRepresentations[i];
      return (
        t(
          e.config.resetTargetRepresentationWhenItGetsBlocked
            ? o("nextgendasherr").nextgendasherrFromCause(
                e,
                l,
                c != null
                  ? "VideoPlayerNextgendashPlaybackLoopRepresentationBlockedAgain"
                  : "VideoPlayerNextgendashPlaybackLoopRepresentationBlocked",
                c != null
                  ? "%s:%s - Previously: " + c.name + " %s"
                  : "%s:%s - %s",
                r.type,
                i,
                "blockedRepresentations=" + rt(r.blockedRepresentations),
              )
            : l,
        ),
        n.push(
          r.type +
            ":" +
            ((s = r.targetRepresentationId) != null
              ? s
              : "no_target_representation") +
            ":blockedRepresentations+" +
            i +
            ":" +
            l.name,
        ),
        wt(
          e,
          n,
          babelHelpers.extends({}, r, {
            blockedRepresentations: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends(
                {},
                r.blockedRepresentations,
                ((u = {}), (u[i] = l), u),
              ),
            ),
          }),
          a,
          l,
        )
      );
    }
    function Ft(e, t, n, r, a, i, l) {
      var s = n.appendState,
        u = s.pendingRemoveOperations,
        c = u[0],
        d = n.sourceBufferState;
      if (
        s.currSourceBufferOperation == null &&
        c != null &&
        c.operationState === "wait_start" &&
        d != null
      ) {
        if (e.config.reopenEndedMediaSourceOnRepresentationSwitch) {
          var m = e.host.mediaSourceCollectSnapshot(e, i);
          if (
            m.readyState === "ended" &&
            d.lastAppendedInitBuffer != null &&
            s.appendChain != null
          ) {
            var p = a.representationId,
              _ = {
                appendInfo: {
                  appendInfoType: "init",
                  mimeCodecsParsed: d.sourceBufferMimeCodecsParsed,
                  representationId: s.appendChain.representationId,
                },
                buffer: d.lastAppendedInitBuffer,
                operationState: "wait_start",
                operationTiming: { created: e.host.clock() },
                operationType: "append_operation",
              };
            return (
              r.push(
                n.type + ":" + p + ":reopenEndedMediaSource:queuedInitAppend",
              ),
              {
                appendState: o(
                  "VideoPlayerNextgendashStateMachine",
                ).skipAutoDisposeInsideThisObject(
                  babelHelpers.extends({}, s, {
                    pendingAppendOperations: [_].concat(
                      s.pendingAppendOperations,
                    ),
                  }),
                ),
              }
            );
          }
        }
        var f = a.representationId,
          g = c.removeRange,
          h = e.host.mediaSourceGetDuration(e, i);
        h !== "NOT_A_NUMBER" &&
          c.removeRange[0] > h &&
          (c = babelHelpers.extends({}, c, {
            removeRange: [0, c.removeRange[1]],
          }));
        var y = {
          appendState: o(
            "VideoPlayerNextgendashStateMachine",
          ).skipAutoDisposeInsideThisObject(
            babelHelpers.extends({}, s, {
              currSourceBufferOperation: c,
              pendingRemoveOperations: u.slice(1),
            }),
          ),
        };
        r.push(
          n.type +
            ":" +
            f +
            ":pendingRemoveOperations:currSourceBufferOperation:" +
            o("VideoPlayerNextgendashMediaUtils").debugStringifyTimeRange(
              c.removeRange,
            ) +
            (c.removeRange !== g
              ? ":adjustedFrom=" +
                o("VideoPlayerNextgendashMediaUtils").debugStringifyTimeRange(g)
              : ""),
        );
        var C = void 0;
        try {
          var b = ut(
            e,
            t,
            {
              appendState: y.appendState,
              manifestRepresentationsCount: n.manifestRepresentationsCount,
              targetRepresentationId: n.targetRepresentationId,
              type: n.type,
            },
            r,
            {
              debugStreamType: n.type,
              sourceBuffer: d.sourceBuffer,
              sourceBufferEventType: "_started",
              type: "_source_buffer_event",
            },
            e.host.clock(),
            l,
            function () {
              return lt(e, d);
            },
          );
          (b != null && (y = babelHelpers.extends({}, y, b)),
            e.host.sourceBufferRemove(e, i, d.sourceBuffer, {
              mimeCodecsParsed: a.mimeCodecsParsed,
              removeRange: c.removeRange,
              representationId: f,
              type: n.type,
            }));
        } catch (a) {
          if (
            ((C = o("nextgendasherr").nextgendasherrFromCause(
              e,
              a,
              "VideoPlayerNextgendashPlaybackLoopSourceBufferRemoveException",
            )),
            C.name ===
              "VideoPlayerNextgendashPlaybackLoopSourceBufferRemoveException/HostAPISourceBufferRemoveNoopNothingBuffered")
          ) {
            C = void 0;
            var v = ut(
              e,
              t,
              {
                appendState: y.appendState,
                manifestRepresentationsCount: n.manifestRepresentationsCount,
                targetRepresentationId: n.targetRepresentationId,
                type: n.type,
              },
              r,
              {
                debugStreamType: n.type,
                sourceBuffer: d.sourceBuffer,
                sourceBufferEventType: "_finished",
                type: "_source_buffer_event",
              },
              e.host.clock(),
              l,
              function () {
                return lt(e, d);
              },
            );
            v != null && (y = babelHelpers.extends({}, y, v));
          }
        }
        if (C != null) {
          var S = ut(
            e,
            t,
            {
              appendState: y.appendState,
              manifestRepresentationsCount: n.manifestRepresentationsCount,
              targetRepresentationId: n.targetRepresentationId,
              type: n.type,
            },
            r,
            {
              debugStreamType: n.type,
              exception: C,
              sourceBuffer: d.sourceBuffer,
              sourceBufferEventType: "_exception",
              type: "_source_buffer_event",
            },
            e.host.clock(),
            l,
            function () {
              return lt(e, d);
            },
          );
          S != null && (y = babelHelpers.extends({}, y, S));
        }
        return y;
      }
      return null;
    }
    function Ot(e, t, n, r, a, i, l) {
      var s = n.appendState,
        u = s.pendingRemoveOperations,
        c = s.pendingAppendOperations,
        d = c[0],
        m = n.sourceBufferState,
        p = a.representationId,
        _ = !1;
      if (
        e.config.reopenEndedMediaSourceOnRepresentationSwitch &&
        u.length > 0 &&
        d != null &&
        d.appendInfo.appendInfoType === "init"
      ) {
        var f = e.host.mediaSourceCollectSnapshot(e, l);
        f.readyState === "ended" && (_ = !0);
      }
      if (
        s.currSourceBufferOperation == null &&
        (u.length <= 0 || _) &&
        d != null &&
        d.operationState === "wait_start" &&
        m != null
      ) {
        var g,
          h = d.appendInfo;
        if (
          h.appendInfoType !== "init" &&
          ((g = s.appendChain) == null ? void 0 : g.representationId) !==
            h.representationId
        ) {
          var y;
          throw o("nextgendasherr").nextgendasherr(
            e,
            "VideoPlayerNextgendashPlaybackLoopDataRepresentationIdMismatchesLastInit",
            "%s: Dequeued append operation appendInfoType %s representationId %s mismatches last init segment representationId %s, targetRepresentationId %s",
            n.type,
            h.appendInfoType,
            h.representationId,
            (y = s.appendChain) == null ? void 0 : y.representationId,
            p,
          );
        }
        var C = {
          appendState: o(
            "VideoPlayerNextgendashStateMachine",
          ).skipAutoDisposeInsideThisObject(
            babelHelpers.extends({}, n.appendState, {
              currSourceBufferOperation: d,
              pendingAppendOperations: c.slice(1),
            }),
          ),
          sourceBufferState: m,
        };
        if (
          (r.push(
            n.type +
              ":" +
              p +
              ":pendingAppendOperations:currSourceBufferOperation:" +
              et(d.appendInfo),
          ),
          h.appendInfoType === "data" && h.dataByteRangeLength === 0)
        ) {
          var b = ut(
            e,
            t,
            {
              appendState: C.appendState,
              manifestRepresentationsCount: n.manifestRepresentationsCount,
              targetRepresentationId: n.targetRepresentationId,
              type: n.type,
            },
            r,
            {
              debugStreamType: n.type,
              sourceBuffer: m.sourceBuffer,
              sourceBufferEventType: "_finished",
              type: "_source_buffer_event",
            },
            e.host.clock(),
            i,
            function () {
              return lt(e, m);
            },
          );
          b != null && (C = babelHelpers.extends({}, C, b));
        } else {
          var v;
          try {
            var S = ut(
              e,
              t,
              {
                appendState: C.appendState,
                manifestRepresentationsCount: n.manifestRepresentationsCount,
                targetRepresentationId: n.targetRepresentationId,
                type: n.type,
              },
              r,
              {
                debugStreamType: n.type,
                sourceBuffer: m.sourceBuffer,
                sourceBufferEventType: "_started",
                type: "_source_buffer_event",
              },
              e.host.clock(),
              i,
              function () {
                return lt(e, m);
              },
            );
            (S != null && (C = babelHelpers.extends({}, C, S)),
              h.appendInfoType === "init" &&
                (r.push(
                  n.type +
                    ":" +
                    p +
                    ":abort:MSEbefore=" +
                    st(e.host.mediaSourceCollectSnapshot(e, l)),
                ),
                e.host.sourceBufferAbort(e, l, m.sourceBuffer, {
                  mimeCodecsParsed: h.mimeCodecsParsed,
                  representationId: h.representationId,
                  type: n.type,
                })));
            var R = h.mimeCodecsParsed,
              L = m.sourceBufferMimeCodecsParsed,
              E = R.contentType !== L.contentType,
              k = R.containerType !== L.containerType,
              I = R.codecFamily !== L.codecFamily;
            ((E || k || I) &&
              (r.push(
                n.type +
                  ":" +
                  p +
                  ":sourceBufferState:changeType:" +
                  o(
                    "VideoPlayerNextgendashMediaUtils",
                  ).debugStringifyMimeCodecs(m.sourceBufferMimeCodecsParsed) +
                  "-->" +
                  o(
                    "VideoPlayerNextgendashMediaUtils",
                  ).debugStringifyMimeCodecs(h.mimeCodecsParsed) +
                  ":MSEbefore=" +
                  st(e.host.mediaSourceCollectSnapshot(e, l)),
              ),
              e.host.sourceBufferChangeType(e, m.sourceBuffer, {
                mimeCodecsParsed: h.mimeCodecsParsed,
                mimeCodecsParsedBeforeChangeType:
                  m.sourceBufferMimeCodecsParsed,
                representationId: h.representationId,
                type: n.type,
              }),
              (m = babelHelpers.extends({}, m, {
                sourceBufferMimeCodecsParsed: h.mimeCodecsParsed,
              })),
              (C = babelHelpers.extends({}, C, { sourceBufferState: m }))),
              r.push(
                n.type +
                  ":" +
                  p +
                  ":append:MSEbefore=" +
                  st(e.host.mediaSourceCollectSnapshot(e, l)),
              ),
              e.host.sourceBufferAppendBuffer(e, l, m.sourceBuffer, d.buffer, {
                mimeCodecsParsed: h.mimeCodecsParsed,
                representationId: h.representationId,
                type: n.type,
              }),
              h.appendInfoType === "init" &&
                e.config.reopenEndedMediaSourceOnRepresentationSwitch &&
                ((m = babelHelpers.extends({}, m, {
                  lastAppendedInitBuffer: d.buffer,
                })),
                (C = babelHelpers.extends({}, C, { sourceBufferState: m }))));
          } catch (a) {
            var x =
              e.config.enableQuotaExceededRecovery &&
              a instanceof Error &&
              (a.name === T ||
                (e.config.enableQuotaExceededRecoveryForCompositeErrors &&
                  D.test(a.name)));
            if (x) {
              t(
                o("nextgendasherr").nextgendasherrFromCause(
                  e,
                  a,
                  "VideoPlayerNextgendashPlaybackLoopSourceBufferAppendQuotaExceededRecovery",
                ),
              );
              var $ = e.host.clock(),
                P = Math.max(
                  0,
                  n.quotaExceededBufferTargetRatio -
                    e.config.quotaExceededBufferTargetPenalty,
                ),
                N = [0, Math.max(0, i)];
              return (
                r.push(
                  n.type +
                    ":quotaExceededRecovery:ratio=" +
                    P.toFixed(2) +
                    ":clearBuffer:0-" +
                    i.toFixed(2),
                ),
                (C = {
                  appendState: o(
                    "VideoPlayerNextgendashStateMachine",
                  ).skipAutoDisposeInsideThisObject(
                    babelHelpers.extends({}, n.appendState, {
                      currSourceBufferOperation: null,
                      pendingAppendOperations: [],
                      pendingRemoveOperations: [].concat(
                        n.appendState.pendingRemoveOperations,
                        [
                          {
                            operationState: "wait_start",
                            operationTiming: { created: $ },
                            operationType: "remove_operation",
                            removeRange: N,
                          },
                        ],
                      ),
                    }),
                  ),
                  quotaExceededBufferTargetRatio: P,
                  sourceBufferState: m,
                }),
                C
              );
            }
            v = o("nextgendasherr").nextgendasherrFromCause(
              e,
              a,
              "VideoPlayerNextgendashPlaybackLoopSourceBufferAppendException",
            );
          }
          if (v != null) {
            var M = ut(
              e,
              t,
              {
                appendState: C.appendState,
                manifestRepresentationsCount: n.manifestRepresentationsCount,
                targetRepresentationId: n.targetRepresentationId,
                type: n.type,
              },
              r,
              {
                debugStreamType: n.type,
                exception: v,
                sourceBuffer: m.sourceBuffer,
                sourceBufferEventType: "_exception",
                type: "_source_buffer_event",
              },
              e.host.clock(),
              i,
              function () {
                return lt(e, m);
              },
            );
            M != null && (C = babelHelpers.extends({}, C, M));
          }
        }
        return C;
      }
      return null;
    }
    ((l.internal_predictPlayhead = $),
      (l.internal_getPlayheadTimeSec = P),
      (l.originalMediaVariant = M),
      (l.internal_isSourceBufferOperationTimedOut = A),
      (l.VideoPlayerNextgendashPlaybackLoopSM = O),
      (l.internal_substituteParamsInSegmentURLTemplate = B),
      (l.internal_prioritizeFetchDemands = W),
      (l.internal_evictFetchDemandsByFetchState = U),
      (l.internal_getLiveABRTailSwitchAnchorTimeSec = j),
      (l.internal_isLiveAppendChainAheadOfPlayheadCoveredByBuffer = K),
      (l.internal_isPlayheadCoveredByBufferAheadOfAppendChainTail = Q),
      (l.internal_canLiveABRTailSwitchAppendAtBufferedTail = X),
      (l.internal_computeABRVolatility = J),
      (l.internal_computeNetworkVolatility = Z),
      (l.internal_updateBandwidthVolatilitySamples = ee),
      (l.internal_computeBandwidthTrend = te),
      (l.internal_evaluateSidxPrefetchTarget = ne),
      (l.internal_startFetchRequestsForFetchDemands = re),
      (l.internal_fulfillFetchDemands = oe),
      (l.internal_clampObserveAndActDelayMs = le),
      (l.internal_coalesceAdjacentDebugLogLines = de),
      (l.internal_getEndOfStreamCheckpointSec = pe),
      (l.internal_groupSegmentsToFetch = Ie),
      (l.internal_makeSegmentFetchKeyIdPart = Me),
      (l.internal_isSameSegmentIdentity = we),
      (l.internal_isEmptyCompletePredictiveSegmentFetch = Ae),
      (l.internal_getConfirmedSidxLiveEdgeTimeSec = Fe),
      (l.internal_getStreamDrainedConfirmedTailEndSec = Oe),
      (l.internal_updateLiveEndedByStallState = Be),
      (l.internal_getBufferedAheadSecForPlayhead = We),
      (l.internal_getBackBufferRemoveEndSec = qe),
      (l.internal_shouldRefetchAtLiveEdge = Ue),
      (l.internal_computePairedRefetchAnchorSec = Ve),
      (l.internal_addBoundedWorkaroundForSegmentBufferedInsufficiently = He),
      (l.makeSegmentFetchDataKey = Ge),
      (l.findDataForDataKey = Ke),
      (l.debugPrepareFetchDemands = Ye),
      (l.internal_handleSourceBufferEvent = ut),
      (l.internal_updateSourceBufferRangesAnnotated = ct),
      (l.internal_filterVideoRepresentationsByVariant = pt),
      (l.internal_filterAudioRepresentationsByVariant = ft),
      (l.internal_selectTargetVideoRepresentation = gt),
      (l.internal_selectTargetAudioRepresentation = Ct),
      (l.internal_checkRangeBufferedWithoutGap = St),
      (l.internal_isSegmentBeforeAppendAnchor = Lt),
      (l.internal_makeSidxFromSegmentTemplate = Et),
      (l.internal_trimSidxToLiveLookbackBuffer = kt),
      (l.internal_getSegmentTemplateLiveEdgeMediaTimeSec = It),
      (l.internal_canExtendPredictiveChainFromTail = Tt),
      (l.internal_addPredictiveSegmentsToSidx = Dt),
      (l.internal_validateAndNormalizeSidx = xt),
      (l.internal_selectDataChunksToAppend = Nt),
      (l.internal_combineDataChunksIntoContiguousBuffer = Mt),
      (l.internal_blockRepresentationInStream = At),
      (l.internal_startPendingRemoveOperation = Ft),
      (l.internal_startPendingAppendOperation = Ot));
  },
  98,
);
