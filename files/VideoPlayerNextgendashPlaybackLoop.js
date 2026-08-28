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
      x = 30,
      $ = 3,
      P = 1,
      N = 3;
    function M(e, t) {
      return (e == null ? void 0 : e.code) === N && t ? P : $;
    }
    function w(e, t, n) {
      if (e.paused || e.playbackRate === 0 || e.readyState < 3)
        return e.currentTime;
      var r = (t - e.currentTimeAbsoluteMs) / 1e3,
        o = n != null ? Math.min(Math.max(0, r), n) : Math.max(0, r),
        a = e.currentTime + o * e.playbackRate;
      return typeof e.duration == "number" ? Math.min(a, e.duration) : a;
    }
    function A(e, t) {
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
          ? w(
              t,
              e.host.clockPerfOriginMs + e.host.clock().perfMs,
              e.config.playheadPredictIntervalMs / 1e3,
            )
          : r;
    }
    function F(e, t) {
      if (t != null && e.poolTrackingID != null) {
        var n;
        return (n = t.getFetchState(e.poolTrackingID)) != null
          ? n
          : { state: "submitted_to_pool" };
      } else if (e.responseFetch != null) return e.responseFetch.state;
      return null;
    }
    var O = {
      audioLang: null,
      audioRole: null,
      videoLang: null,
      videoRole: null,
    };
    function B(e) {
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
    function W(e, t, n) {
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
    function q(e, t) {
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
    var U = o("VideoPlayerNextgendashStateMachine").defineStateMachine(
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
              loopReasons: Le(i, 0, p, "0:initial"),
              loopScheduledToUnixMs: l.unixMs,
              loopTimerDelayMs: null,
              loopTimerID: null,
            }),
            mediaSourceState: ve(i, s, a, null),
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
        return (t = ke(i, u, u.loopState.loopIteration, e)) != null ? t : u;
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
        function d(e, t) {
          var i = e.recoveringFromMediaError,
            l = e.recoveringFromMediaErrorAttempt;
          if (i != null || l >= $) {
            var u = [];
            throw (
              i != null && u.push("already attempting a recovery"),
              l >= $ && u.push("already reached max attempts"),
              o("nextgendasherr").nextgendasherrFromCause(
                a,
                t,
                "VideoPlayerNextgendashInvalidStartErrorRecoveryAttempt",
                "Invalid attempt to start error recovery: " + u.join(" and "),
              )
            );
          }
          var c = e,
            d = c,
            m = d.mediaSourceState;
          m.mediaSourceCleanup();
          var p = ve(a, s, n, m.mediaSourceIndex);
          return (
            r(
              o("nextgendasherr").nextgendasherrFromCause(
                a,
                t,
                "VideoPlayerNextgendashPlaybackLoopRecoveringFromError",
                "Replacing MediaSource #%s with #%s",
                m.mediaSourceIndex,
                p.mediaSourceIndex,
              ),
            ),
            (c = babelHelpers.extends({}, c, {
              debugPlaybackLoopRecentChanges: Re(
                c.debugPlaybackLoopRecentChanges,
                [
                  "recoveringFromError:" + t.name,
                  "mediaSourceState:replace:" +
                    m.mediaSourceIndex +
                    "-->" +
                    p.mediaSourceIndex,
                ],
              ),
              mediaSourceState: p,
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
                return me(a, e, i.type + ":" + i.requestID, 0, u);
              case "update_player_state_from_main": {
                var m,
                  p,
                  _,
                  f = o(
                    "VideoPlayerNextgendashStateMachine",
                  ).skipAutoDisposeInsideThisObject(i.playerStateFromMain),
                  g = babelHelpers.extends({}, u, { playerStateFromMain: f }),
                  h = g.playerStateFromMain.dashManifestData;
                if (
                  (h == null ? void 0 : h.createdAt.perfMs) !==
                  ((m = u.playerStateFromMain.dashManifestData) == null
                    ? void 0
                    : m.createdAt.perfMs)
                ) {
                  var y,
                    C,
                    b = [],
                    v =
                      (h == null ? void 0 : h.metadata.manifestType) ===
                      "dynamic",
                    S =
                      (y =
                        (C = g.playerStateFromMain.mediaElementSnapshot) == null
                          ? void 0
                          : C.currentTime) != null
                        ? y
                        : null;
                  ((g = babelHelpers.extends({}, g, {
                    streams: g.streams.map(function (e) {
                      var t = Bt(a, b, e, h);
                      if (v) {
                        var n = {};
                        for (var r of t.playableRepresentations)
                          if (r.segmentsInfo.type === "SegmentTemplate") {
                            var i = r.segmentsInfo,
                              l = a.config.enableLive
                                ? i.segmentTimelinePredictive
                                : null,
                              s = Dt(i, !0),
                              u = Mt(a, t.type, r.representationId, s, !0),
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
                              for (var y of u)
                                if (y.mediaTimeRange[0] >= _ - E) {
                                  var C = f + 1 + g.length;
                                  g.push(
                                    babelHelpers.extends({}, y, {
                                      segmentId: C,
                                    }),
                                  );
                                }
                              m = [].concat(d, g);
                            } else m = u;
                            ((m = xt(m, S, a.config.liveLookbackBufferSec)),
                              (n[r.representationId] =
                                l != null ? Nt(l, m, i.timescale) : m));
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
                    (g = babelHelpers.extends({}, g, {
                      debugPlaybackLoopRecentChanges: Re(
                        g.debugPlaybackLoopRecentChanges,
                        b,
                      ),
                    })));
                }
                var R = (p = f.mediaElementSnapshot) == null ? void 0 : p.error,
                  L = M(R, a.config.fatalErrorOnMediaErrorRecoveryCapReached);
                if (
                  R != null &&
                  !g.recoveringFromMediaError &&
                  g.recoveringFromMediaErrorAttempt < L
                )
                  g = d(
                    g,
                    o("nextgendasherr").nextgendasherrFromMediaError(a, R),
                  );
                else if (
                  g.recoveringFromMediaError &&
                  f.mediaElementSnapshot != null &&
                  f.mediaElementSnapshot.error == null &&
                  f.mediaSourceIndexApplied ===
                    g.mediaSourceState.mediaSourceIndex
                ) {
                  var k = g,
                    I = k.recoveringFromMediaError;
                  (r(
                    o("nextgendasherr").nextgendasherrFromCause(
                      a,
                      I,
                      "VideoPlayerNextgendashPlaybackLoopRecoveredFromMediaError",
                    ),
                  ),
                    (g = babelHelpers.extends({}, g, {
                      debugPlaybackLoopRecentChanges: Re(
                        g.debugPlaybackLoopRecentChanges,
                        ["recoveringFromMediaError:" + I.name + ":recovered"],
                      ),
                      recoveringFromMediaError: null,
                      streams: g.streams.map(function (e) {
                        return e.streamFatalError != null
                          ? babelHelpers.extends({}, e, {
                              streamFatalError: null,
                            })
                          : e;
                      }),
                    })));
                } else if (
                  R != null &&
                  !g.recoveringFromMediaError &&
                  g.recoveringFromMediaErrorAttempt >= L &&
                  a.config.fatalErrorOnMediaErrorRecoveryCapReached
                )
                  return (
                    s({
                      exception: o("nextgendasherr").nextgendasherrFromCause(
                        a,
                        o("nextgendasherr").nextgendasherrFromMediaError(a, R),
                        "VideoPlayerNextgendashPlaybackLoopMediaErrorRecoveryAttemptsExhausted",
                        "Reached media error recovery attempt cap (%s) with media element still in error",
                        L,
                      ),
                      type: "__exception",
                    }),
                    g
                  );
                return (_ = me(a, e, i.type + ":" + i.reason, 0, g)) != null
                  ? _
                  : g;
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
                    debugPlaybackLoopRecentChanges: Re(
                      D.debugPlaybackLoopRecentChanges,
                      [x + "->mediaSourceIndexMismatch"],
                    ),
                  });
                else if (
                  !D.recoveringFromMediaError &&
                  D.recoveringFromMediaErrorAttempt < $
                )
                  D = d(
                    babelHelpers.extends({}, D, {
                      debugPlaybackLoopRecentChanges: Re(
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
                  var P = [];
                  (D.recoveringFromMediaError &&
                    P.push("StillAttemptingPreviousRecovery"),
                    D.recoveringFromMediaErrorAttempt >= $ &&
                      P.push("ReachedRetryCap"),
                    (D = babelHelpers.extends({}, D, {
                      debugPlaybackLoopRecentChanges: Re(
                        D.debugPlaybackLoopRecentChanges,
                        [x + "->" + P.join(":")],
                      ),
                    })));
                }
                return (T = me(a, e, "" + i.type, 0, D)) != null ? T : D;
              }
              case "_media_source_event": {
                var N,
                  w = u,
                  A =
                    "mediaSourceEvent:" +
                    i.mediaSourceIndex +
                    ":" +
                    i.mediaSourceEventType;
                if (
                  i.mediaSource !== w.mediaSourceState.mediaSource ||
                  i.mediaSourceIndex !== w.mediaSourceState.mediaSourceIndex
                )
                  w = babelHelpers.extends({}, w, {
                    debugPlaybackLoopRecentChanges: Re(
                      w.debugPlaybackLoopRecentChanges,
                      [
                        A +
                          "->mediaSourceMismatch:" +
                          w.mediaSourceState.mediaSourceIndex,
                      ],
                    ),
                  });
                else if (
                  w.mediaSourceState.waitingForFirstSourceopen &&
                  i.mediaSourceEventType === "sourceopen"
                )
                  w = babelHelpers.extends({}, w, {
                    debugPlaybackLoopRecentChanges: Re(
                      w.debugPlaybackLoopRecentChanges,
                      [A + "->first"],
                    ),
                    mediaSourceState: babelHelpers.extends(
                      {},
                      w.mediaSourceState,
                      { waitingForFirstSourceopen: !1 },
                    ),
                  });
                else if (i.mediaSourceEventType === "sourceclose")
                  if (
                    !w.recoveringFromMediaError &&
                    w.recoveringFromMediaErrorAttempt < $
                  )
                    w = d(
                      babelHelpers.extends({}, w, {
                        debugPlaybackLoopRecentChanges: Re(
                          w.debugPlaybackLoopRecentChanges,
                          [A + "->beginErrorRecoveryBeforeSeeingMediaError"],
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
                      (w.recoveringFromMediaError &&
                        F.push("StillAttemptingPreviousRecovery"),
                      w.recoveringFromMediaErrorAttempt >= $ &&
                        F.push("ReachedRetryCap"),
                      (w = babelHelpers.extends({}, w, {
                        debugPlaybackLoopRecentChanges: Re(
                          w.debugPlaybackLoopRecentChanges,
                          [A + "->" + F.join(":")],
                        ),
                      })),
                      !w.recoveringFromMediaError &&
                        w.recoveringFromMediaErrorAttempt >= $ &&
                        a.config.fatalErrorOnMediaErrorRecoveryCapReached)
                    )
                      return (
                        s({
                          exception: o("nextgendasherr").nextgendasherr(
                            a,
                            "VideoPlayerNextgendashPlaybackLoopSourceCloseRecoveryAttemptsExhausted",
                            "MediaSource closed after reaching recovery attempt cap (%s)",
                            $,
                          ),
                          type: "__exception",
                        }),
                        w
                      );
                  }
                else
                  w = babelHelpers.extends({}, w, {
                    debugPlaybackLoopRecentChanges: Re(
                      w.debugPlaybackLoopRecentChanges,
                      [A],
                    ),
                  });
                return (N = me(
                  a,
                  e,
                  i.type + ":" + i.mediaSourceEventType,
                  0,
                  w,
                )) != null
                  ? N
                  : w;
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
                  q =
                    O == null
                      ? void 0
                      : O.appendState.currSourceBufferOperation;
                if (O != null && q != null) {
                  var U = !1,
                    V = [],
                    H = u.streams.map(function (e) {
                      var t, n;
                      if (e !== O) return e;
                      var o = pt(
                        a,
                        r,
                        e,
                        V,
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
                          return dt(a, e.sourceBufferState);
                        },
                      );
                      return o != null
                        ? ((U = !0), babelHelpers.extends({}, e, o))
                        : e;
                    }),
                    G = babelHelpers.extends({}, u, {
                      debugPlaybackLoopRecentChanges: Re(
                        u.debugPlaybackLoopRecentChanges,
                        V,
                      ),
                      streams: H,
                    });
                  if (U) {
                    var z;
                    return (z = me(
                      a,
                      e,
                      i.type +
                        ":" +
                        i.sourceBufferEventType +
                        ":" +
                        q.operationState +
                        ":stateHasChanged",
                      0,
                      G,
                    )) != null
                      ? z
                      : G;
                  } else
                    return a.config.disablePlaybackLoopSchedulingOnTimer
                      ? u
                      : me(
                          a,
                          e,
                          i.type +
                            ":" +
                            i.sourceBufferEventType +
                            ":" +
                            q.operationState +
                            ":!stateHasChanged",
                          ue,
                          u,
                        );
                } else
                  return a.config.disablePlaybackLoopSchedulingOnTimer
                    ? u
                    : me(
                        a,
                        e,
                        i.type +
                          ":" +
                          i.sourceBufferEventType +
                          ":null_currSourceBufferOperation",
                        ue,
                        u,
                      );
              }
              case "_observe_and_act": {
                var j =
                    a.config.isLivePlayback &&
                    u.recoveringFromMediaError == null
                      ? u.streams.find(function (e) {
                          return W(e.appendState.currSourceBufferOperation, l);
                        })
                      : null,
                  K =
                    j == null
                      ? void 0
                      : j.appendState.currSourceBufferOperation;
                if (
                  j != null &&
                  K != null &&
                  K.operationState === "wait_updateend"
                ) {
                  var Q,
                    X,
                    Y,
                    J,
                    Z = K.operationTiming,
                    ee = Z.started;
                  if (ee == null) return ke(a, u, i.loopIteration, e);
                  var te = o(
                      "VideoPlayerNextgendashHostAPI",
                    ).diffVideoPlayerNextgendashClockstamp(l, ee).unixMs,
                    ne = o("nextgendasherr").nextgendasherr(
                      a,
                      "VideoPlayerNextgendashPlaybackLoopLiveSourceBufferOperationTimedOut",
                      "%s:%s SourceBuffer operation stuck in wait_updateend for %sms: %s",
                      j.type,
                      (Q = j.targetRepresentationId) != null
                        ? Q
                        : "no_target_representation",
                      te,
                      B(K),
                    ),
                    re =
                      "liveSourceBufferOperationTimedOut:" +
                      j.type +
                      ":" +
                      ((X = j.targetRepresentationId) != null
                        ? X
                        : "no_target_representation") +
                      ":" +
                      te +
                      "ms";
                  if (u.recoveringFromMediaErrorAttempt < $) {
                    var oe,
                      ae = babelHelpers.extends({}, u, {
                        debugPlaybackLoopRecentChanges: Re(
                          u.debugPlaybackLoopRecentChanges,
                          [re + "->beginErrorRecovery:" + B(K)],
                        ),
                      }),
                      ie = d(ae, ne);
                    return (oe = me(
                      a,
                      e,
                      i.type + ":liveSourceBufferOperationTimedOut",
                      0,
                      ie,
                    )) != null
                      ? oe
                      : ie;
                  }
                  var le = babelHelpers.extends({}, u, {
                    debugPlaybackLoopRecentChanges: Re(
                      u.debugPlaybackLoopRecentChanges,
                      [
                        "liveSourceBufferOperationTimedOut:" +
                          j.type +
                          ":" +
                          ((Y = j.targetRepresentationId) != null
                            ? Y
                            : "no_target_representation") +
                          "->ReachedRetryCap",
                      ],
                    ),
                  });
                  return a.config.fatalErrorOnMediaErrorRecoveryCapReached
                    ? (s({
                        exception: o("nextgendasherr").nextgendasherrFromCause(
                          a,
                          ne,
                          "VideoPlayerNextgendashPlaybackLoopLiveSourceBufferOperationTimeoutRecoveryAttemptsExhausted",
                          "Reached media error recovery attempt cap (%s) with SourceBuffer operation still stuck in wait_updateend",
                          $,
                        ),
                        type: "__exception",
                      }),
                      le)
                    : (J = me(
                          a,
                          e,
                          i.type +
                            ":liveSourceBufferOperationTimedOutReachedRetryCap",
                          ue,
                          le,
                        )) != null
                      ? J
                      : le;
                }
                return ke(a, u, i.loopIteration, e);
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
    function V(e, t, n, r, a) {
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
    function H(e, t) {
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
    function G(e) {
      for (var t of e.dataKeyToResponseByteRange.keys())
        if (!t.startsWith("init-") && !t.startsWith("sidx-")) return !1;
      return !0;
    }
    function z(e, t, n, r, o, a) {
      for (var i = 0; i < t.length; ++i) {
        var l = t[i],
          s = F(l, a);
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
              var c = G(l);
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
    var j = 5 * 1e3;
    function K(e, t) {
      if (e.config.isLivePlayback) return !1;
      var n = o("videoUrlUtils").parseCdnUrlParams(t).expirationDate;
      return n != null && n.getTime() - j <= e.host.clock().unixMs;
    }
    function Q(e, t) {
      return (
        K(e, t.baseURL) || (t.type === "BaseURLInitURL" && K(e, t.initURL))
      );
    }
    function X(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (r[0] <= t && t <= r[1]) return (r[1] - t) * 1e3;
      }
      return 0;
    }
    function Y(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (r[0] <= t && t <= r[1]) return Math.max(t, r[1]);
      }
      return t;
    }
    function J(e, t, n) {
      return e !== void 0 && t < n && kt(e, [t, n], g);
    }
    function Z(e, t, n) {
      return e !== void 0 && t >= n && kt(e, [n, t], g);
    }
    function ee(e, t, n) {
      if (t == null || n == null) return !0;
      var r = e.segmentsInfo;
      if (r.type !== "SegmentTemplate") return !0;
      var o = Y(t, n),
        a = Dt(r, !0),
        i = a.find(function (e) {
          return e.mediaTimeRange[1] > o - E;
        });
      return i != null && i.mediaTimeRange[0] <= o + g;
    }
    function te(e, t) {
      return t ? (e < 2e3 ? 3 : e < 5e3 ? 2 : 1) : 1;
    }
    function ne(e, t, n) {
      n === void 0 && (n = 3e4);
      var r = e.filter(function (e) {
        return t - e < n;
      });
      return Math.min(r.length / 3, 1);
    }
    function re(e, t, n) {
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
    function oe(e, t, n, r) {
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
    function ae(e, t, n) {
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
    function ie(e, t, n, r, o) {
      if (t.length <= 1) return null;
      var a = ae(n, o),
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
    function le(e, t, n, r, o, a, i, l) {
      for (var s = 2, u = 1, c = 1, d = 0; d < t.length; ++d) {
        var m = t[d];
        if (!(m.responseFetch != null || m.poolTrackingID != null)) {
          if (e.config.enableCdnUrlRefresh && Q(e, m.requestInfoArgs)) {
            m.isAwaitingUrlRefresh ||
              (t[d] = babelHelpers.extends({}, m, {
                isAwaitingUrlRefresh: !0,
              }));
            continue;
          }
          var p = G(m),
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
              g = te(v, S);
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
    function se(e, t, n, r, a, i, l) {
      var s = new Map(),
        u = new Map();
      z(e, n, s, u, r, t.args.fetchPoolAPI);
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
          f = q(e, n.requestInfoArgs);
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
      if ((le(e, n, s, u, d, r, i, l), c != null && c.size > 0)) {
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
    var ue = 1e3,
      ce = 20;
    function de(e, t, n) {
      return Math.max(0, e, t ? n : 0);
    }
    function me(e, t, a, i, l, s) {
      s === void 0 && (s = 0);
      var u = t.args.sendPlayerWarningToMain,
        c = t.sendToSelf,
        d = e.host.clock().unixMs,
        p = d + i,
        _ = l.loopState;
      if (_.loopScheduledToUnixMs == null || p < _.loopScheduledToUnixMs) {
        var f = _.loopTimerID;
        f != null && (e.host.timers.clearTimeout(f), (f = null));
        var g = de(
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
                loopReasons: Le(e, _.loopIteration, _.loopReasons, C),
                loopScheduledToUnixMs: d + g,
                loopTimerDelayMs: g,
                loopTimerID: g > 0 ? e.host.timers.setTimeout(b, g) : null,
              }),
            ),
          });
        return g > 0
          ? v
          : s >= ce
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
            : ke(e, v, h, t, s);
      } else return;
    }
    var pe = " ** ",
      _e = /^(.*)[ ][*][*][ ](\d+)$/;
    function fe(e) {
      var t = [],
        n = null,
        r = 0;
      for (var o of e) {
        var a = o.includes(pe) ? _e.exec(o) : null,
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
        (ge(t, n, r), (n = s), (r = i));
      }
      return (ge(t, n, r), t);
    }
    function ge(e, t, n) {
      t != null && e.push("" + t + (n === 1 ? "" : " ** " + n));
    }
    function he(e, t, n, r) {
      return n ? e : Math.max(0, t - r);
    }
    function ye(e, t, n, r) {
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
                        Be(e.segment, p)
                      );
                    },
                  ),
                f = he(m[0], m[1], _, e.config.endOfStreamBufferToleranceSec);
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
    var Ce = 2e3;
    function be(e, t, n, r, a) {
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
    function ve(e, t, n, r) {
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
    var Se = 60;
    function Re(e, t) {
      return t.length === 0
        ? e
        : o(
            "VideoPlayerNextgendashStateMachine",
          ).skipAutoDisposeInsideThisObject(
            [].concat(e.slice(0, -1), fe([].concat(e.slice(-1), t))).slice(-Se),
          );
    }
    function Le(e, t, n, r) {
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
    function Ee(e) {
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
    function ke(e, t, n, r, a) {
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
          T = e.config.enableCdnUrlRefresh ? Ee(t.fetchDemands) : null,
          D = t.fetchDemands,
          x = t.streams,
          $ = x,
          P = !1,
          N = !1,
          M = function () {
            (++E, ($ = x), (P = !1), (N = !1), (S.length = 0));
            try {
              if (m) {
                var a = A(e, t.playerStateFromMain.mediaElementSnapshot),
                  i = je({
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
                        bufferedAheadSec: He(
                          e.appendState.sourceBufferRanges,
                          a,
                        ),
                        confirmedLiveEdgeMediaTimeSec: qe(t),
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
                            (c = Bt(e, S, c, m)))
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
                            (c = Bt(e, S, c, m))));
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
                          ((P = !0),
                          S.push(
                            a +
                              ":" +
                              d +
                              ":manifestRepresentations=" +
                              st(m.manifestRepresentations[a]),
                          )),
                        c != null)
                      ) {
                        var p = c,
                          _ = S.length;
                        try {
                          var g = xe(
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
                          ((N = !0),
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
                        if (c !== p && ((P = !0), S.length === _)) {
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
                P && (x = l);
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
        e: do if (M()) break e;
        while (
          P &&
          !N &&
          E < p &&
          o(
            "VideoPlayerNextgendashHostAPI",
          ).diffVideoPlayerNextgendashClockstamp(I, k).perfMs < _
        );
        var w = [];
        if (!N) {
          var F = H(
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
            W = t.playerStateFromMain.mediaElementSnapshot,
            q = A(e, W);
          for (var U of x) {
            var V = X(U.appendState.sourceBufferRanges, q);
            (O.set(U.type, V),
              B.set(U.type, U.appendState.appendChain != null));
          }
          if (
            ((D = se(
              e,
              r,
              F,
              w,
              t.playerStateFromMain.scrollPositionInfo,
              O,
              B,
            )),
            e.config.enableCdnUrlRefresh)
          ) {
            var G = Array.from(Ee(D)).filter(function (e) {
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
        var z = t.volatilityState,
          j = t.volatilityState;
        if (e.config.enableDynamicBufferWatermarks && j != null) {
          var K = s.unixMs,
            Q = K - R,
            Y = j.abrSwitchTimestamps,
            J = j.bandwidthSamples,
            Z = !1,
            ee = function (n) {
              var e = t.streams.find(function (e) {
                return e.type === n.type;
              });
              e != null &&
                n.targetRepresentationId != null &&
                e.targetRepresentationId != null &&
                n.targetRepresentationId !== e.targetRepresentationId &&
                (n.targetRepresentationReason === "abr_switch" ||
                  n.targetRepresentationReason === "selected_switch") &&
                ((Y = [].concat(Y, [K])), (Z = !0));
            };
          for (var te of x) ee(te);
          var ne = e.host.networkDiagnosticsReadBandwidth(
              e.config.enableBandwidthDiagnosticsFallback,
            ),
            re = oe(J, j.lastBandwidthDiagnosticsSignature, ne, K),
            ae = re.lastBandwidthDiagnosticsSignature;
          ((re.bandwidthSamples !== J ||
            ae !== j.lastBandwidthDiagnosticsSignature) &&
            ((J = re.bandwidthSamples), (Z = !0)),
            Y.some(function (e) {
              return e <= Q;
            }) &&
              ((Y = Y.filter(function (e) {
                return e > Q;
              })),
              (Z = !0)),
            Z &&
              (z = f(e, {
                abrSwitchTimestamps: Y,
                bandwidthSamples: J,
                lastBandwidthDiagnosticsSignature: ae,
                pendingSpeculativeSidxKeys: j.pendingSpeculativeSidxKeys,
              })));
        }
        if (e.config.enablePredictiveSidxPrefetch && z != null && m != null) {
          var le = e.host.networkDiagnosticsReadBandwidth(
            e.config.enableBandwidthDiagnosticsFallback,
          );
          if (le != null && le.bandwidthEstimate > 0) {
            var ce = null,
              de = function () {
                var t = _e.type;
                if (t !== "video" && t !== "audio") return 0;
                var r = _e.playableRepresentations;
                if (r.length <= 1) return 0;
                var o = _e.targetRepresentationId;
                if (o == null) return 0;
                var a = ie(
                  o,
                  r,
                  z.bandwidthSamples,
                  le.bandwidthEstimate,
                  s.unixMs,
                );
                if (a != null && a.confidence > L) {
                  var i = a.representation;
                  if (i.segmentsInfo.type === "SegmentBase") {
                    var l = we(i),
                      u = _e.sidxByRepresentationId[i.representationId] != null,
                      c = D.some(function (e) {
                        return e.activeDemands.has(l);
                      });
                    if (!u && !c) {
                      var d,
                        m,
                        p =
                          (d = (m = ce) == null ? void 0 : m.get(t)) != null
                            ? d
                            : z.pendingSpeculativeSidxKeys.get(t);
                      if (p != null && p !== l) {
                        var _ = D.some(function (e) {
                          return (
                            e.activeDemands.has(p) &&
                            e.activeDemands.size === 1 &&
                            e.responseFetch == null
                          );
                        });
                        if (_) {
                          var f = et(D, function (e) {
                            return e === p;
                          });
                          f != null && (D = f);
                        }
                      }
                      var g = n * 1e4 + 1e6;
                      ((D = [].concat(D, [Ae(e, g, i)])),
                        ce == null &&
                          (ce = new Map(z.pendingSpeculativeSidxKeys)),
                        ce.set(t, l));
                    }
                  }
                }
              },
              pe;
            for (var _e of x) pe = de();
            ce != null &&
              (z = f(
                e,
                babelHelpers.extends({}, z, { pendingSpeculativeSidxKeys: ce }),
              ));
          }
        }
        var fe =
            (i = t.playerStateFromMain.mediaElementSnapshot) == null
              ? void 0
              : i.currentTime,
          ge = null;
        if (
          e.config.liveEndedTransitionOnStallEnabled &&
          e.config.isLivePlayback &&
          e.config.enableLive &&
          fe != null
        ) {
          var he = !1,
            Ce = !0,
            be = null;
          for (var ve of x)
            if (!(ve.type !== "video" && ve.type !== "audio")) {
              he = !0;
              var Se =
                  ve.targetRepresentationId != null
                    ? ve.sidxByRepresentationId[ve.targetRepresentationId]
                    : null,
                ke = Ue({
                  playheadMediaTimeSec: fe,
                  sidx: Se,
                  toleranceSec: v,
                });
              if (ke == null) {
                Ce = !1;
                break;
              }
              be = be == null ? ke : Math.min(be, ke);
            }
          ge = he && Ce ? be : null;
        }
        var Ie = Ve({
            confirmSec: e.config.liveEndedStallConfirmSec,
            drainedTailEndSec: ge,
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
          Te = Ie.confirmed,
          De = Ie.next,
          $e = babelHelpers.extends({}, t, {
            debugPlaybackLoopRecentChanges: Re(
              t.debugPlaybackLoopRecentChanges,
              g.concat(w),
            ),
            fetchDemands: D,
            liveEndedStallState: De,
            loopState: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends({}, t.loopState, {
                loopIteration: n,
                loopReasons: Le(e, n, t.loopState.loopReasons),
                loopScheduledToUnixMs: null,
                loopTimerDelayMs: null,
                loopTimerID: d,
              }),
            ),
            streams: x,
            volatilityState: z,
          }),
          Pe = [],
          Ne = !1,
          Me = !1;
        if (
          ($e.streams.forEach(function (e) {
            (e.type !== "video" && e.type !== "audio") ||
              ((e.appendState.currSourceBufferOperation != null ||
                e.appendState.pendingAppendOperations.length !== 0 ||
                e.appendState.pendingRemoveOperations.length !== 0) &&
                (Ne = !0),
              e.streamFatalError != null && (Me = !0));
          }),
          Ne || Me || $e.recoveringFromMediaError != null)
        )
          Pe.push(
            "endOfStream skipped: " +
              [
                Ne ? "current or pending operation" : null,
                Me ? "pending stream fatal error(s)" : null,
                $e.recoveringFromMediaError != null
                  ? "recovering from MediaError " +
                    $e.recoveringFromMediaError.name
                  : null,
              ]
                .filter(Boolean)
                .join(", "),
          );
        else
          try {
            ye(e, $e, Pe, Te);
          } catch (t) {
            return (
              u({
                exception: o("nextgendasherr").nextgendasherrFromCause(
                  e,
                  t,
                  "VideoPlayerNextgendashPlaybackLoopCheckAndCallEndOfStreamError",
                  "%s",
                  "debugPlaybackLoopRecentChanges:\n " +
                    $e.debugPlaybackLoopRecentChanges.join("\n "),
                  "endOfStreamDebugReasons:\n " + Pe.join("\n "),
                ),
                type: "__exception",
              }),
              $e
            );
          }
        Pe.length === 0 && Pe.push("endOfStream: checked, unknown result");
        var Fe = babelHelpers.extends({}, $e, {
          debugPlaybackLoopRecentChanges: Re(
            $e.debugPlaybackLoopRecentChanges,
            Pe,
          ),
        });
        if (N)
          return (
            u({
              exception: o("nextgendasherr").nextgendasherrFromMultipleCauses(
                e,
                Fe.streams
                  .map(function (e) {
                    return e.streamFatalError != null
                      ? [e.type, e.streamFatalError]
                      : null;
                  })
                  .filter(Boolean),
                "VideoPlayerNextgendashPlaybackLoopStreamFatalErrors",
                "%s",
                "debugPlaybackLoopRecentChanges:\n " +
                  Fe.debugPlaybackLoopRecentChanges
                    .concat(
                      Fe.recoveringFromMediaErrorAttempt > 0
                        ? [
                            "recoveringFromMediaErrorAttempt:" +
                              Fe.recoveringFromMediaErrorAttempt,
                          ]
                        : [],
                    )
                    .join("\n "),
              ),
              type: "__exception",
            }),
            Fe
          );
        if (Fe.streams !== t.streams) {
          var Oe;
          return (Oe = me(
            e,
            r,
            "streamsChanged:(" + g.join(",") + ")",
            0,
            Fe,
            a + 1,
          )) != null
            ? Oe
            : Fe;
        } else {
          var Be;
          return e.config.disablePlaybackLoopSchedulingOnTimer
            ? Fe
            : (Be = me(e, r, "!streamsChanged", 10 * ue, Fe, a + 1)) != null
              ? Be
              : Fe;
        }
      }
    }
    function Ie(e, t, n) {
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
    function Te(e, t, n, r, a, i, l, s, u) {
      var c,
        d = t,
        m = n,
        p = r,
        _ = a.representationId,
        f = Ne(a),
        g = Je(m, f, s, !0),
        h = g == null ? void 0 : g.fetchState,
        y = g == null || (c = g.responseInfo) == null ? void 0 : c.buffer;
      if (y == null && h != null && h.state === "completed")
        return (
          (d = Wt(
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
          (d = Wt(
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
          Je(m, we(a), s, !1) == null;
        C
          ? (m = [].concat(m, [Fe(e, ++p, a)]))
          : (m = [].concat(m, [Me(e, ++p, a)]));
      }
      return {
        abortFurtherProcessing: !1,
        fetchDemandOrderNext: p,
        fetchDemands: m,
        initBuffer: y,
        stream: d,
      };
    }
    function De(e, t, n, r, a, i) {
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
    function xe(e, t, n, r, a, i, l, s, u) {
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
        P = D.sendPlayerWarningToMain,
        N = r.eventClock,
        M = r.sendToSelf,
        w = i,
        B = l * 1e4,
        W = be(e, t, N, a, u),
        q = W.abortFurtherStreamProcessing,
        U = W.stream;
      if (U.streamFatalError != null || q)
        return { fetchDemands: w, stream: U };
      U = Ie(U, t.mediaSourceState.mediaSourceIndex, u);
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
            j = vt(
              Q,
              Q != null ? Q : O,
              (K = U.prevSelectedMediaVariant) != null ? K : O,
              t.playerStateFromMain.selectedVideoQualityDisplayLabel,
              U.prevSelectedVideoQualityDisplayLabel,
            );
            break;
          }
          case "audio": {
            var X,
              Y = t.playerStateFromMain.selectedMediaVariant;
            j = St(
              Y,
              Y != null ? Y : O,
              (X = U.prevSelectedMediaVariant) != null ? X : O,
            );
            break;
          }
        }
      if (G == null || j) {
        var J = Lt(
          e,
          P,
          t.playerWarningDedupMap,
          N,
          t.playerStateFromMain,
          n,
          $,
          V,
          U,
          u,
        );
        ((H = J.prevTargetRepresentation),
          (U = J.stream),
          (G = J.targetRepresentation),
          (z = J.targetRepresentationReason));
      }
      var Z = H,
        ee = G,
        te = z,
        oe = ee.representationId;
      U = De(e, U, t.mediaSourceState, ee, M, u);
      var ae = U.sourceBufferState,
        ie = Te(e, U, w, B, ee, n, P, r.args.fetchPoolAPI, u);
      if (ie != null && ie.abortFurtherProcessing)
        return { fetchDemands: ie.fetchDemands, stream: ie.stream };
      ie != null &&
        ((U = ie.stream), (w = ie.fetchDemands), (B = ie.fetchDemandOrderNext));
      var le = ie == null ? void 0 : ie.initBuffer,
        se = U.sidxByRepresentationId[oe],
        ue = ee.segmentsInfo,
        ce = we(ee),
        de = Je(w, ce, r.args.fetchPoolAPI, !0),
        me = de == null ? void 0 : de.fetchState,
        pe = de == null || (c = de.responseInfo) == null ? void 0 : c.buffer;
      if (se == null && pe != null) {
        var _e = ee.mimeCodecsParsed.containerType,
          fe = null;
        try {
          switch (_e) {
            case "mp4": {
              var ge =
                ue.type === "SegmentBase" ? ue.indexByteRange.byteOffset : null;
              if (ge == null)
                throw o("nextgendasherr").nextgendasherr(
                  e,
                  "VideoPlayerNextgendashPlaybackLoopSidxParseMp4MissingSidxByteOffset",
                );
              fe = o("VideoPlayerNextgendashMp4SidxParser").parseMp4Sidx(
                e,
                pe,
                ge,
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
            (U = Wt(
              e,
              P,
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
                ee.mimeCodecsParsed.mimeCodecs,
              ),
            )),
            { fetchDemands: w, stream: U }
          );
        }
        var he = fe;
        if (he != null) {
          var ye, Ce;
          ((se = Mt(
            e,
            U.type,
            oe,
            he.map(function (e, t) {
              return {
                isEndingSegment: t === he.length - 1,
                mediaFileByteRange: e.mediaFileByteRange,
                mediaTimeRange: e.mediaTimeRange,
                segmentId: t,
              };
            }),
            !1,
          )),
            u.push(
              U.type + ":" + oe + ":sidx/buffer:" + he.length + ":" + se.length,
            ),
            (U = babelHelpers.extends({}, U, {
              sidxByRepresentationId: o(
                "VideoPlayerNextgendashStateMachine",
              ).skipAutoDisposeInsideThisObject(
                babelHelpers.extends(
                  {},
                  U.sidxByRepresentationId,
                  ((ye = {}), (ye[oe] = se), ye),
                ),
              ),
            })),
            (w =
              (Ce = et(
                w,
                function (e) {
                  return e === ce;
                },
                r.args.fetchPoolAPI,
              )) != null
                ? Ce
                : w));
        }
      } else {
        if (pe == null && me != null && me.state === "completed")
          return (
            (U = Wt(
              e,
              P,
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
                ee.mimeCodecsParsed.mimeCodecs,
              ),
            )),
            { fetchDemands: w, stream: U }
          );
        if (se == null && me != null && me.state === "failed")
          return (
            (U = Wt(
              e,
              P,
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
                ee.mimeCodecsParsed.mimeCodecs,
              ),
            )),
            { fetchDemands: w, stream: U }
          );
        if (se == null && ue.type === "SegmentTemplate") {
          var ve,
            Se = n.metadata.manifestType === "dynamic",
            Re = Dt(ue, Se),
            Le = e.config.enableLive ? ue.segmentTimelinePredictive : null;
          se = Mt(e, U.type, oe, Re, Se);
          var Ee = Le != null ? Nt(Le, se, ue.timescale) : se;
          (u.push(
            U.type +
              ":" +
              oe +
              ":sidx/template" +
              (Le != null ? "/predictive" : "") +
              ":" +
              Re.length +
              ":" +
              Ee.length,
          ),
            (U = babelHelpers.extends({}, U, {
              sidxByRepresentationId: o(
                "VideoPlayerNextgendashStateMachine",
              ).skipAutoDisposeInsideThisObject(
                babelHelpers.extends(
                  {},
                  U.sidxByRepresentationId,
                  ((ve = {}), (ve[oe] = Ee), ve),
                ),
              ),
            })));
        } else if (se == null && de == null) {
          var ke;
          w = [].concat(
            (ke = et(
              w,
              function (e) {
                return e !== ce && e.startsWith("sidx-" + ee.type + "-");
              },
              r.args.fetchPoolAPI,
            )) != null
              ? ke
              : w,
            [Ae(e, ++B, ee)],
          );
        }
      }
      var xe = se,
        Oe = t.playerStateFromMain.mediaElementSnapshot,
        Ue = A(e, Oe);
      if (
        ((d = U.appendState.appendChain) == null ? void 0 : d.mediaTail) != null
      ) {
        var Ve = At(
          e,
          U.type,
          oe,
          U.appendState.appendChain,
          Ue,
          V,
          t.mediaSourceState.mediaSource,
          u,
        );
        Ve !== U.appendState.appendChain &&
          (U = babelHelpers.extends({}, U, {
            appendState: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends({}, U.appendState, { appendChain: Ve }),
            ),
          }));
      }
      var je =
        Z != null &&
        (((m = ee.role) != null ? m : null) !==
          ((p = Z.role) != null ? p : null) ||
          ((f = ee.lang) != null ? f : null) !==
            ((v = Z.lang) != null ? v : null));
      if (
        Z != null &&
        oe !== Z.representationId &&
        (te === "selected_switch" || je)
      ) {
        var Ke = 5,
          tt = je ? 0 : Ue + Ke,
          rt = [tt, Number.POSITIVE_INFINITY],
          at = {
            operationState: "wait_start",
            operationTiming: { created: e.host.clock() },
            operationType: "remove_operation",
            removeRange: rt,
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
        var it = Ge(V, Ue, e.config.liveBackBufferRetentionSec, x);
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
            mimeCodecsParsed: ee.mimeCodecsParsed,
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
            ot(ut.appendInfo),
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
        var ht = N.unixMs,
          yt = ne(gt.abrSwitchTimestamps, ht),
          Ct = re(gt.bandwidthSamples, ht),
          bt = Math.max(yt, Ct),
          Rt = bt * S,
          Et = e.config.enableQuotaExceededRecovery
            ? Rt * U.quotaExceededBufferTargetRatio
            : Rt;
        ft = _t + Et;
      }
      var kt =
          (k = U.appendState.appendChain) == null
            ? void 0
            : k.playheadMinimumTimeSec,
        xt = qe(xe),
        wt = He(V, Ue),
        Bt = ze({
          bufferedAheadSec: wt,
          enableLive: e.config.enableLive,
          fellBehindWindowSec: h,
          followEdgeActive: e.config.liveFollowEdgeActive,
          hardFellBehindWindowSec: e.config.liveFellBehindHardRefetchDriftSec,
          hardStarvationBufferAheadSec: b,
          isLivePlayback: e.config.isLivePlayback,
          liveEdgeMediaTimeSec: xt,
          playheadMediaTimeSec: Ue,
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
        Ht = wt != null ? Ue + wt : Ue,
        Gt = Vt != null && Ht < Vt - g,
        zt = Bt || Gt,
        jt = Vt != null ? Vt : xt != null ? xt - C : null,
        Kt =
          zt && jt != null
            ? jt
            : kt != null && kt > Ue
              ? kt - g
              : U.appendState.appendChain != null
                ? Ue - g
                : Ue,
        Qt = zt && xt != null ? xt + ft : Ue + ft,
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
        return Tt(
          U.appendState.appendChain,
          t,
          n,
          e.config.isLivePlayback && e.config.liveTimeBasedAppendAnchorEnabled,
        );
      }
      var Jt = xe != null ? xe : [],
        Zt = Jt.filter(function (e) {
          if (
            !It(V, e) &&
            !U.appendState.workaroundForSegmentBufferedInsufficiently.some(
              function (t) {
                return t.representationId === oe && Be(t.segment, e);
              },
            )
          ) {
            if (e.isEndingSegment && Ue > e.mediaTimeRange[1])
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
        nn = xe != null && xe.length > 0 ? xe[xe.length - 1] : null,
        rn = en != null ? $t(en) : null;
      if (
        e.config.isLivePlayback &&
        e.config.enableLive &&
        Zt.length === 0 &&
        xe != null &&
        en != null &&
        tn != null &&
        nn != null &&
        Pt(nn, tn, e.config.liveRollingPdashReseedAfterStripEnabled, rn, Qt)
      ) {
        var on = nn.isPredictiveSegment !== !0,
          an = Nt(tn, xe, en.timescale);
        if (an.length > xe.length) {
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
            (xe = an));
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
      if (Zt.length > 1 && ee.segmentsInfo.type === "SegmentBase") {
        for (var dn = [], mn = 0; mn < Zt.length; ++mn) {
          var pn = Zt[mn],
            _n = Qe(ee, pn);
          un.add(_n);
          var fn = Ze(e, cn != null ? cn : w, _n);
          ((cn = fn != null ? fn : cn), fn == null && dn.push(pn));
        }
        for (
          var gn =
              $ != null && $.prefetchedRepresentationIds.includes(oe)
                ? [0]
                : [],
            hn = $e(dn, gn),
            yn = 0;
          yn < hn.length;
          ++yn
        ) {
          var Cn = hn[yn];
          ((cn = cn != null ? cn : [].concat(w)), cn.push(Ye(e, ++B, ee, Cn)));
        }
      } else
        Zt.forEach(function (t) {
          var n = Qe(ee, t);
          un.add(n);
          var r = Ze(e, cn != null ? cn : w, n);
          ((cn = r != null ? r : cn),
            r == null &&
              ((cn = cn != null ? cn : [].concat(w)),
              cn.push(Xe(e, ++B, ee, t))));
        });
      {
        var bn = new Set();
        ((cn != null ? cn : w).forEach(function (t) {
          var r = N.perfMs - t.demandedAtClock.perfMs,
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
                    var o = Pe(
                      e,
                      n.manifestRepresentations[U.type],
                      r.representationId,
                    );
                    switch (r.appendInfoType) {
                      case "init":
                        return t === Ne(o);
                      case "data":
                        return t === Qe(o, r.segment);
                      default:
                        r.appendInfoType;
                    }
                  }) &&
                bn.add(t);
            });
        }),
          bn.size > 0 &&
            (cn = et(
              cn != null ? cn : w,
              function (e) {
                return bn.has(e);
              },
              r.args.fetchPoolAPI,
            )));
      }
      {
        var vn = cn != null ? cn : w,
          Sn = r.args.fetchPoolAPI,
          Rn = vn.reduce(
            function (e, t) {
              if (t.streamType === U.type && t.activeDemands.size > 0) {
                var n = F(t, Sn);
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
          var Ln = Lt(
            e,
            P,
            t.playerWarningDedupMap,
            N,
            t.playerStateFromMain,
            n,
            $,
            V,
            U,
            u,
          );
          if (Ln.stream.targetRepresentationId !== U.targetRepresentationId)
            return { fetchDemands: w, stream: Ln.stream };
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
                Je(cn != null ? cn : w, Ne(En), r.args.fetchPoolAPI, !1) !=
                null,
              In =
                U.sidxByRepresentationId[En.representationId] != null ||
                Je(cn != null ? cn : w, we(En), r.args.fetchPoolAPI, !1) !=
                  null;
            if (!kn || !In) {
              var Tn =
                e.config.enableCombinedInitSidxFetch &&
                En.segmentsInfo.type === "SegmentBase" &&
                !kn &&
                !In;
              Tn
                ? ((cn = cn != null ? cn : [].concat(w)),
                  cn.push(Fe(e, ++B, En)))
                : (kn ||
                    ((cn = cn != null ? cn : [].concat(w)),
                    cn.push(Me(e, ++B, En))),
                  In ||
                    ((cn = cn != null ? cn : [].concat(w)),
                    cn.push(Ae(e, ++B, En))));
            }
          }
      }
      if (
        ((w = cn != null ? cn : w),
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
            mimeCodecsParsed: ee.mimeCodecsParsed,
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
            var Pn = Pe(
                e,
                n.manifestRepresentations[U.type],
                $n.representationId,
              ),
              Nn = Qe(Pn, $n.segment),
              Mn = Je(w, Nn, r.args.fetchPoolAPI);
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
                nt(w),
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
                  (w = w.filter(function (e) {
                    return e.requestDraft.requestID !== Nn;
                  })),
                  { fetchDemands: w, stream: U }
                );
              }
              return (
                (U = Wt(e, P, u, U, n, oe, wn)),
                { fetchDemands: w, stream: U }
              );
            } else if (Fn != null) {
              if (We($n.segment, $n.dataByteRangeStart, Fn)) {
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
                  (w = w.filter(function (e) {
                    return e.requestDraft.requestID !== Nn;
                  })),
                  { fetchDemands: w, stream: U }
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
                Qn = Ft(
                  Fn.chunks,
                  jn,
                  zn != null ? (Kn != null ? Math.min(Kn, zn) : zn) : Kn,
                ),
                Xn = null;
              if (Qn != null && (zn === null || Qn.copyTotalBytesCount >= zn)) {
                if (((Xn = Ot(Fn.chunks, Qn)), Xn == null))
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
                    ot(Yn),
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
      var Zn = qt(e, P, U, u, ee, t.mediaSourceState.mediaSource, Ue);
      Zn != null && (U = babelHelpers.extends({}, U, Zn));
      var er = Ut(e, P, U, u, ee, Ue, t.mediaSourceState.mediaSource);
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
      return { fetchDemands: w, stream: U };
    }
    function $e(e, t) {
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
    function Pe(e, t, n) {
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
    function Ne(e) {
      return "init-" + e.type + "-" + e.representationId;
    }
    function Me(e, t, n) {
      var r = Ne(n),
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
    function we(e) {
      return "sidx-" + e.type + "-" + e.representationId;
    }
    function Ae(e, t, n) {
      var r = n.segmentsInfo;
      if (r.type !== "SegmentBase")
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashPlaybackLoopSidxFetchUnknown",
          "%s:%s - sidx fetch unknown (" + r.type + ")",
          n.type,
          n.representationId,
        );
      var a = we(n),
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
    function Fe(e, t, n) {
      var r = n.segmentsInfo;
      if (r.type !== "SegmentBase")
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashPlaybackLoopCombinedInitSidxFetchUnknown",
          "%s:%s - combined init+sidx fetch unknown (" + r.type + ")",
          n.type,
          n.representationId,
        );
      var a = Ne(n),
        i = we(n),
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
    function Oe(e) {
      return e.templateTime != null ? "t" + e.templateTime : "" + e.segmentId;
    }
    function Be(e, t) {
      return e.templateTime != null && t.templateTime != null
        ? e.templateTime === t.templateTime
        : e.segmentId === t.segmentId;
    }
    function We(e, t, n) {
      return (
        e.isPredictiveSegment === !0 &&
        t === 0 &&
        n.isFetchComplete &&
        n.chunksByteLength === 0
      );
    }
    function qe(e) {
      if (e == null) return null;
      for (var t = e.length - 1; t >= 0; t--) {
        var n = e[t];
        if (n.isPredictiveSegment !== !0) return n.mediaTimeRange[1];
      }
      return null;
    }
    function Ue(e) {
      var t = e.playheadMediaTimeSec,
        n = e.sidx,
        r = e.toleranceSec,
        o = qe(n);
      return o == null ? null : t >= o - r ? o : null;
    }
    function Ve(e) {
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
    function He(e, t) {
      if (e == null) return null;
      for (var n of e) if (n[0] <= t && t <= n[1]) return n[1] - t;
      return 0;
    }
    function Ge(e, t, n, r) {
      var o;
      if (n <= 0 || e == null) return null;
      var a = (o = e[0]) == null ? void 0 : o[0];
      if (a == null) return null;
      var i = t - n;
      return i - a >= r ? i : null;
    }
    function ze(e) {
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
    function je(e) {
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
          ze({
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
    function Ke(e, t) {
      var n = e.some(function (e) {
          return (
            e.representationId === t.representationId &&
            Be(e.segment, t.segment)
          );
        }),
        r = n ? e : [].concat(e, [t]);
      return r.length > I ? r.slice(r.length - I) : r;
    }
    function Qe(e, t) {
      return "segment-" + e.type + "-" + e.representationId + "-" + Oe(t);
    }
    function Xe(e, t, n, r) {
      var a = n.segmentsInfo,
        i = Qe(n, r),
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
                relativeURL: V(
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
    function Ye(e, t, n, r) {
      if (r.length === 0)
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashPlaybackLoopGroupOfSegmentsFetchEmptySegments",
          "%s:%s - Group of segments fetch empty segments",
          n.type,
          n.representationId,
        );
      if (r.length === 1) return Xe(e, t, n, r[0]);
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
                Qe(n, e),
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
    function Je(e, t, n, r) {
      r === void 0 && (r = !1);
      for (var o = !1, a = null, i = 0; i < e.length; ++i) {
        var l = e[i],
          s = l.dataKeyToResponseByteRange.get(t);
        if (s != null) {
          o = !0;
          var u = F(l, n);
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
          var y = Ft(f, m.byteOffset, m.byteLength);
          h = y != null ? Ot(f, y) : null;
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
    function Ze(e, t, n) {
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
    function et(e, t, n) {
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
    function tt(e, t, n) {
      return e.map(function (e) {
        var r,
          o,
          a = F(e, n),
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
              return [t, rt(n)];
            },
          );
        return [u, i, s, l];
      });
    }
    function nt(e, t) {
      return (t === void 0 && (t = !1), JSON.stringify(tt(e, t)));
    }
    function rt(e) {
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
    function ot(e) {
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
            rt(e.segment.mediaFileByteRange) +
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
    function at(e) {
      var t = e.segment.mediaFileByteRange.byteLength;
      return (
        e.dataByteRangeLength === 0 ||
        (t != null && e.dataByteRangeStart + e.dataByteRangeLength >= t)
      );
    }
    function it(e) {
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
    function lt(e) {
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
    function st(e) {
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
    function ut(e) {
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
    function ct(e) {
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
    function dt(e, t) {
      return t != null
        ? e.host.sourceBufferSnapshotBuffered(e, t.sourceBuffer)
        : void 0;
    }
    function mt(e) {
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
    function pt(t, n, r, a, i, l, m, p) {
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
                      waitForMediaElementErrorUntilUnixMs: l.unixMs + Ce,
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
                  if (((y = p()), y != null && !It(y, E))) {
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
                          ot(f.appendInfo),
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
                      waitForMediaElementErrorUntilUnixMs: l.unixMs + Ce,
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
                        waitForMediaElementErrorUntilUnixMs: l.unixMs + Ce,
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
                        ? Y(y, m)
                        : m,
                    representationId: L.appendInfo.representationId,
                  }
                : at(L.appendInfo)
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
          P = _t(
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
              ? "/" + ot(f.appendInfo)
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
                (T != null ? ot(T.appendInfo) : "null"),
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
          $ !== x && a.push(M + "...:appendChain:" + it(x) + "-->" + it($)),
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
                    ? Ke(
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
    function _t(e, t, n, r, o) {
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
    function ft(e) {
      var t = new Map();
      for (var n of e) {
        var r = o(
          "VideoPlayerNextgendashManifestParser",
        ).getDisplayLabelFromVideoRepresentation(n);
        t.has(r) || t.set(r, n);
      }
      return Array.from(t.values());
    }
    function gt(e, t, n) {
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
    function ht(e, t) {
      var n = gt(e, t.videoLang, t.videoRole),
        r = n.debugFallbacksTried,
        o = n.filteredRepresentations;
      return { debugFallbacksTried: r, representationsByVariant: ft(o) };
    }
    function yt(e, t) {
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
    function Ct(e, t) {
      var n = gt(e, t.audioLang, t.audioRole),
        r = n.debugFallbacksTried,
        o = n.filteredRepresentations;
      return { debugFallbacksTried: r, representationsByVariant: o };
    }
    function bt(e, t, n, a, i, l, s, u, c, d, m, p, _, g, h, y, C, b, v, S) {
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
        x = p != null ? p : O,
        $ = ht(s, x),
        P = $.debugFallbacksTried,
        N = $.representationsByVariant,
        M = f(
          e,
          N.map(function (e) {
            return e.representationId;
          }),
        ),
        w = yt(N, _);
      if (
        (P.length > 0 &&
          !P.every(function (e) {
            return e.startsWith("lang#0+sameRole;null+null-->");
          })) ||
        w.length === 0
      ) {
        var A,
          F = [
            "video",
            s.length,
            x.videoLang,
            x.videoRole,
            x.audioLang,
            x.audioRole,
            _,
          ].join(":"),
          B = 1 + ((A = n.get(F)) != null ? A : 0);
        if ((n.set(F, B), B === 1)) {
          var W = ut(l),
            q = ut(s),
            U = ut(N),
            V = ut(w);
          t(
            o("nextgendasherr").nextgendasherr(
              e,
              w.length === 0
                ? "VideoPlayerNextgendashPlaybackLoopRepresentationAllFiltered[video]"
                : "VideoPlayerNextgendashPlaybackLoopRepresentationFallback[video]",
              "%s:%s - No representations for variant, " +
                (w.length === 0 ? "all filtered" : "fallback applied") +
                ". %s %s %s %s %s %s %s %s",
              "video",
              c != null ? c : "no_target_representation",
              "selectedVariant=" + JSON.stringify(p),
              "targetVariant=" + (x === p ? "same" : JSON.stringify(x)),
              "manifestRepresentations=" + W,
              "playableRepresentations=" + (q === W ? "same" : q),
              "blockedRepresentations=" + lt(u),
              "targetVariantRepresentations=" + U,
              "filteredRepresentations=" + (V === U ? "same" : V),
              "fallbacksTried=" + P.join(";"),
            ),
          );
        }
      }
      var H = d != null ? d : O,
        G = vt(p, x, H, _, m);
      if (w.length > 0) {
        var z = null;
        if (h == null && g != null) {
          var j = w.filter(function (e) {
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
            (Q = w.find(function (e) {
              return (
                e.representationId ===
                (h == null ? void 0 : h.bestRepresentationId)
              );
            })) != null
              ? Q
              : null;
        }
        var X = 5e3,
          Y = 1e3,
          J = 5e3,
          Z = e.config.enableSplitAbrEvalSwitchIntervals,
          te = Z ? Y : X,
          ne = J,
          re =
            y != null &&
            o(
              "VideoPlayerNextgendashHostAPI",
            ).diffVideoPlayerNextgendashClockstamp(a, y).unixMs > te,
          oe =
            !Z ||
            C == null ||
            o(
              "VideoPlayerNextgendashHostAPI",
            ).diffVideoPlayerNextgendashClockstamp(a, C).unixMs > ne,
          ae = G || k == null || z == null || (re && oe);
        if (ae) {
          var ie,
            le = i(e, w, h),
            se = le.bestRepresentation,
            ue = !r("deepEquals")(le.nextABRState, h);
          if (
            (ue && (I = f(e, le.nextABRState)),
            (Z || ue || e.config.enableStableAbrEvaluationCooldown) &&
              (T = e.host.clock()),
            se != null &&
              se.representationId !==
                ((ie = k) == null ? void 0 : ie.representationId))
          ) {
            var ce = !G && k != null && se.bandwidth > k.bandwidth,
              de = b && ce,
              me = !de || ee(se, S, v);
            me
              ? ((k = se),
                Z && (D = e.host.clock()),
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
        targetVariantRepresentationIds: M,
        videoABRState: I,
        videoABRStateClock: T,
        videoABRSwitchClock: D,
      };
    }
    function vt(e, t, n, r, o) {
      return (
        (e != null &&
          (t.videoLang !== n.videoLang || t.videoRole !== n.videoRole)) ||
        (r != null && r !== o)
      );
    }
    function St(e, t, n) {
      return (
        e != null &&
        (t.audioLang !== n.audioLang || t.audioRole !== n.audioRole)
      );
    }
    function Rt(e, t, n, r, a, i, l, s, u) {
      var c,
        d =
          (c = r.find(function (e) {
            return e.representationId === l;
          })) != null
            ? c
            : null,
        m,
        p = d,
        _ = u != null ? u : O,
        g = Ct(a, _),
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
          var L = ct(r),
            E = ct(a),
            k = ct(y),
            I = ct(b);
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
              "blockedRepresentations=" + lt(i),
              "targetVariantRepresentations=" + k,
              "filteredRepresentations=" + (I === k ? "same" : I),
              "fallbacksTried=" + h.join(";"),
            ),
          );
        }
      }
      var T = s != null ? s : O,
        D = St(u, _, T);
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
    function Lt(e, t, n, r, a, i, l, s, u, c) {
      var d = u,
        m,
        p,
        _,
        g;
      if (d.type === "video") {
        var h,
          y,
          C,
          b = A(e, a.mediaElementSnapshot),
          v = bt(
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
        var x = Rt(
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
        var $, P;
        (d.type,
          (p = "unexpected_stream_type"),
          (g = f(
            e,
            ($ =
              (P = i.manifestRepresentations[d.type]) == null
                ? void 0
                : P.map(function (e) {
                    return e.representationId;
                  })) != null
              ? $
              : [],
          )));
      }
      if (_ == null) {
        var N;
        throw (
          d.type === "video"
            ? (N = i.manifestRepresentations.video)
            : d.type === "audio"
              ? (N = i.manifestRepresentations.audio)
              : d.type,
          (N = N != null ? N : []),
          o("nextgendasherr").nextgendasherr(
            e,
            "VideoPlayerNextgendashPlaybackLoopNoTargetRepresentation[" +
              d.type +
              "]",
            "%s:%s - Unable to select representation (" + p + "). %s",
            d.type,
            m != null ? m.representationId : "no_target_representation",
            "manifestRepresentations=" +
              (N.map(function (e) {
                return e.representationId;
              }).join(",") || "none"),
            "blockedRepresentations=" + lt(d.blockedRepresentations),
          )
        );
      }
      return {
        prevTargetRepresentation: m,
        stream: Et(
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
    function Et(e, t, n, r, a, i, l, s, u) {
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
    function kt(e, t, n) {
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
    function It(e, t) {
      return (
        kt(e, t.mediaTimeRange, 0.05) ||
        (t.isEndingSegment && kt(e, t.mediaTimeRange, 0.05))
      );
    }
    function Tt(e, t, n, r) {
      return e == null || t !== e.representationId || e.mediaTail == null
        ? !1
        : r
          ? n.mediaTimeRange[1] <= e.mediaTail.mediaTimeSec + E
          : n.segmentId <= e.mediaTail.segmentId;
    }
    function Dt(e, t) {
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
    function xt(e, t, n) {
      if (n <= 0 || t == null || e.length <= 1) return e;
      for (
        var r = t - n, o = 0;
        o < e.length - 1 && e[o].mediaTimeRange[1] <= r;
      )
        o++;
      return o === 0 ? e : e.slice(o);
    }
    function $t(e) {
      var t = e.segmentTimeline,
        n = e.timescale;
      if (t.length === 0) return null;
      var r = t[t.length - 1];
      return (r.t + (r.r + 1) * r.d) / n;
    }
    function Pt(e, t, n, r, o) {
      return e.mediaTimeRange[1] > o + E
        ? !1
        : e.isPredictiveSegment === !0
          ? !0
          : n &&
            t.endNumber != null &&
            r != null &&
            e.mediaTimeRange[1] >= r - E;
    }
    function Nt(e, t, n) {
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
    function Mt(e, t, n, r, a) {
      var i = a ? wt(r) : r,
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
    function wt(e) {
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
    function At(e, t, n, r, a, i, l, s) {
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
          (J(i, a, u) ||
            (e.config.liveAppendChainForwardCoveredEscapeEnabled && Z(i, a, c)))
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
              it(r) +
              "-->" +
              it(d) +
              "(playhead_outside)",
          ),
          d
        );
      }
      if (Math.abs(c - u) > g) {
        var m = [u, Math.max(a, c - g)];
        if (i === void 0 || !kt(i, m, 0)) {
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
                it(r) +
                "-->" +
                it(p) +
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
                mt(e.host.mediaSourceCollectSnapshot(e, l)) +
                ")",
            ),
            p
          );
        }
      }
      return r;
    }
    function Ft(e, t, n) {
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
    function Ot(e, t) {
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
    function Bt(e, t, n, r, a) {
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
          p = st(u),
          _ = st(c),
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
            "blockedRepresentations=" + lt(n.blockedRepresentations),
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
    function Wt(e, t, n, r, a, i, l) {
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
                "blockedRepresentations=" + lt(r.blockedRepresentations),
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
        Bt(
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
    function qt(e, t, n, r, a, i, l) {
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
          var b = pt(
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
              return dt(e, d);
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
            var v = pt(
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
                return dt(e, d);
              },
            );
            v != null && (y = babelHelpers.extends({}, y, v));
          }
        }
        if (C != null) {
          var S = pt(
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
              return dt(e, d);
            },
          );
          S != null && (y = babelHelpers.extends({}, y, S));
        }
        return y;
      }
      return null;
    }
    function Ut(e, t, n, r, a, i, l) {
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
              ot(d.appendInfo),
          ),
          h.appendInfoType === "data" && h.dataByteRangeLength === 0)
        ) {
          var b = pt(
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
              return dt(e, m);
            },
          );
          b != null && (C = babelHelpers.extends({}, C, b));
        } else {
          var v;
          try {
            var S = pt(
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
                return dt(e, m);
              },
            );
            (S != null && (C = babelHelpers.extends({}, C, S)),
              h.appendInfoType === "init" &&
                (r.push(
                  n.type +
                    ":" +
                    p +
                    ":abort:MSEbefore=" +
                    mt(e.host.mediaSourceCollectSnapshot(e, l)),
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
                  mt(e.host.mediaSourceCollectSnapshot(e, l)),
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
                  mt(e.host.mediaSourceCollectSnapshot(e, l)),
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
            var M = pt(
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
                return dt(e, m);
              },
            );
            M != null && (C = babelHelpers.extends({}, C, M));
          }
        }
        return C;
      }
      return null;
    }
    ((l.internal_getMediaErrorRecoveryAttemptsCap = M),
      (l.internal_predictPlayhead = w),
      (l.internal_getPlayheadTimeSec = A),
      (l.originalMediaVariant = O),
      (l.internal_isSourceBufferOperationTimedOut = W),
      (l.VideoPlayerNextgendashPlaybackLoopSM = U),
      (l.internal_substituteParamsInSegmentURLTemplate = V),
      (l.internal_prioritizeFetchDemands = H),
      (l.internal_evictFetchDemandsByFetchState = z),
      (l.internal_getLiveABRTailSwitchAnchorTimeSec = Y),
      (l.internal_isLiveAppendChainAheadOfPlayheadCoveredByBuffer = J),
      (l.internal_isPlayheadCoveredByBufferAheadOfAppendChainTail = Z),
      (l.internal_canLiveABRTailSwitchAppendAtBufferedTail = ee),
      (l.internal_computeABRVolatility = ne),
      (l.internal_computeNetworkVolatility = re),
      (l.internal_updateBandwidthVolatilitySamples = oe),
      (l.internal_computeBandwidthTrend = ae),
      (l.internal_evaluateSidxPrefetchTarget = ie),
      (l.internal_startFetchRequestsForFetchDemands = le),
      (l.internal_fulfillFetchDemands = se),
      (l.internal_clampObserveAndActDelayMs = de),
      (l.internal_coalesceAdjacentDebugLogLines = fe),
      (l.internal_getEndOfStreamCheckpointSec = he),
      (l.internal_groupSegmentsToFetch = $e),
      (l.internal_makeSegmentFetchKeyIdPart = Oe),
      (l.internal_isSameSegmentIdentity = Be),
      (l.internal_isEmptyCompletePredictiveSegmentFetch = We),
      (l.internal_getConfirmedSidxLiveEdgeTimeSec = qe),
      (l.internal_getStreamDrainedConfirmedTailEndSec = Ue),
      (l.internal_updateLiveEndedByStallState = Ve),
      (l.internal_getBufferedAheadSecForPlayhead = He),
      (l.internal_getBackBufferRemoveEndSec = Ge),
      (l.internal_shouldRefetchAtLiveEdge = ze),
      (l.internal_computePairedRefetchAnchorSec = je),
      (l.internal_addBoundedWorkaroundForSegmentBufferedInsufficiently = Ke),
      (l.makeSegmentFetchDataKey = Qe),
      (l.findDataForDataKey = Je),
      (l.debugPrepareFetchDemands = tt),
      (l.internal_handleSourceBufferEvent = pt),
      (l.internal_updateSourceBufferRangesAnnotated = _t),
      (l.internal_filterVideoRepresentationsByVariant = ht),
      (l.internal_filterAudioRepresentationsByVariant = Ct),
      (l.internal_selectTargetVideoRepresentation = bt),
      (l.internal_selectTargetAudioRepresentation = Rt),
      (l.internal_checkRangeBufferedWithoutGap = kt),
      (l.internal_isSegmentBeforeAppendAnchor = Tt),
      (l.internal_makeSidxFromSegmentTemplate = Dt),
      (l.internal_trimSidxToLiveLookbackBuffer = xt),
      (l.internal_getSegmentTemplateLiveEdgeMediaTimeSec = $t),
      (l.internal_canExtendPredictiveChainFromTail = Pt),
      (l.internal_addPredictiveSegmentsToSidx = Nt),
      (l.internal_validateAndNormalizeSidx = Mt),
      (l.internal_selectDataChunksToAppend = Ft),
      (l.internal_combineDataChunksIntoContiguousBuffer = Ot),
      (l.internal_blockRepresentationInStream = Wt),
      (l.internal_startPendingRemoveOperation = qt),
      (l.internal_startPendingAppendOperation = Ut));
  },
  98,
);
