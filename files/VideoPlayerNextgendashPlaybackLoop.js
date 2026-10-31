__d(
  "VideoPlayerNextgendashPlaybackLoop",
  [
    "Promise",
    "VideoPlayerNextgendashABR",
    "VideoPlayerNextgendashDecodeCapabilityMatcher",
    "VideoPlayerNextgendashFetchedResource",
    "VideoPlayerNextgendashHostAPI",
    "VideoPlayerNextgendashManifestParser",
    "VideoPlayerNextgendashMediaUtils",
    "VideoPlayerNextgendashMp4SidxParser",
    "VideoPlayerNextgendashQPL",
    "VideoPlayerNextgendashStateMachine",
    "VideoPlayerNextgendashURLUtils",
    "VideoPlayerNextgendashWebCodecsDimensions",
    "VideoPlayerNextgendashWebmSidxParser",
    "deepEquals",
    "emptyFunction",
    "nextgendasherr",
    "promiseDone",
    "videoUrlUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["nativeSidxParse"],
      s = ["buffer"],
      u = ["buffer"],
      c = [
        "abortIsPendingUpdateEnd",
        "errorIsPendingUpdateEnd",
        "qplSubspanEnd",
      ],
      d = ["buffer"],
      m = [
        "abortIsPendingUpdateEnd",
        "errorIsPendingUpdateEnd",
        "qplSubspanEnd",
      ],
      p = [
        "abortIsPendingUpdateEnd",
        "errorIsPendingUpdateEnd",
        "qplSubspanEnd",
      ],
      _ = ["buffer"],
      f = ["buffer"],
      g,
      h = [],
      y = new Uint8Array(0);
    function C(e, t) {
      return e.config.optimizeAutoDisposeTraversal
        ? o(
            "VideoPlayerNextgendashStateMachine",
          ).skipAutoDisposeInsideThisObject(t)
        : t;
    }
    var b = 0.2,
      v = 0.1,
      S = 30,
      R = 0.5,
      L = 6,
      E = 8,
      k = 1,
      I = 13,
      T = 6e4,
      D = 0.6,
      x = 0.001,
      $ = 5e3,
      P = 128,
      N =
        "VideoPlayerNextgendashHostAPISourceBufferAppendBufferQuotaExceededException",
      M =
        /VideoPlayerNextgendashHostAPISourceBufferAppendBufferQuotaExceededException(?:\/|$)/,
      w = 30,
      A = 3,
      F = 1,
      O = 3;
    function B(e, t) {
      return (e == null ? void 0 : e.code) === O && t ? F : A;
    }
    function W(e, t, n) {
      if (
        e.paused ||
        e.playbackRate === 0 ||
        !Number.isFinite(e.playbackRate) ||
        e.readyState < 3
      )
        return e.currentTime;
      var r = (t - e.currentTimeAbsoluteMs) / 1e3,
        o = n != null ? Math.min(Math.max(0, r), n) : Math.max(0, r),
        a = e.currentTime + o * e.playbackRate;
      return typeof e.duration == "number" ? Math.min(a, e.duration) : a;
    }
    function q(e, t) {
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
          ? W(
              t,
              e.host.clockPerfOriginMs + e.host.clock().perfMs,
              e.config.playheadPredictIntervalMs / 1e3,
            )
          : r;
    }
    function U(e, t) {
      if (t != null && e.poolTrackingID != null) {
        var n;
        return (n = t.getFetchState(e.poolTrackingID)) != null
          ? n
          : { state: "submitted_to_pool" };
      } else if (e.responseFetch != null) return e.responseFetch.state;
      return null;
    }
    var V = {
      audioLang: null,
      audioRole: null,
      videoLang: null,
      videoRole: null,
    };
    function H(e) {
      return e.byteLength;
    }
    function G(e) {
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
    function z(e, t, n) {
      if (
        (n === void 0 && (n = $),
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
    function j(e, t) {
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
    var K = o("VideoPlayerNextgendashStateMachine").defineStateMachine(
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
            expectSourceCloseForMediaSourceIndex: null,
            fetchDemands: [],
            loopState: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject({
              loopIteration: 0,
              loopReasons: Pe(i, 0, h, "0:initial"),
              loopScheduledToUnixMs: l.unixMs,
              loopTimerDelayMs: null,
              loopTimerID: null,
            }),
            mediaSourceState: De(i, s, a, null, r.dashManifestData),
            playerStateFromMain: r,
            playerWarningDedupMap: C(i, new Map()),
            recoveringFromMediaError: null,
            recoveringFromMediaErrorAttempt: 0,
            state: "playing",
            streams: [],
            volatilityState: i.config.enableDynamicBufferWatermarks
              ? C(i, {
                  abrSwitchTimestamps: [],
                  bandwidthSamples: [],
                  lastBandwidthDiagnosticsSignature: null,
                  pendingSpeculativeSidxKeys: new Map(),
                })
              : null,
          };
        return (t = Me(i, u, u.loopState.loopIteration, e)) != null ? t : u;
      },
      function (t) {
        var n = t.args,
          r = n.sendMediaSourceToMain,
          a = n.sendPlayerWarningToMain,
          i = t.env,
          l = t.event,
          s = t.eventClock,
          u = t.sendToSelf,
          c = t.state;
        function d(e) {
          function t(e, t) {
            e.state === "playing" &&
              e.streams.forEach(function (e) {
                e.sourceBufferState != null &&
                  t(e.sourceBufferState.sourceBufferCleanup);
              });
          }
          c.state !== "playing" &&
            e.loopState.loopTimerID != null &&
            i.host.timers.clearTimeout(e.loopState.loopTimerID);
          var n = new Set();
          (t(e, function (e) {
            n.add(e);
          }),
            c.state !== "__disposed__" &&
              t(c, function (e) {
                n.delete(e);
              }),
            n.forEach(function (e) {
              return e();
            }));
        }
        function m(e, t) {
          var n = e.recoveringFromMediaError,
            l = e.recoveringFromMediaErrorAttempt;
          if (n != null || l >= A) {
            var s = [];
            throw (
              n != null && s.push("already attempting a recovery"),
              l >= A && s.push("already reached max attempts"),
              o("nextgendasherr").nextgendasherrFromCause(
                i,
                t,
                "VideoPlayerNextgendashInvalidStartErrorRecoveryAttempt",
                "Invalid attempt to start error recovery: " + s.join(" and "),
              )
            );
          }
          var c = e,
            d = c,
            m = d.mediaSourceState;
          m.mediaSourceCleanup();
          var p = De(
            i,
            u,
            r,
            m.mediaSourceIndex,
            c.playerStateFromMain.dashManifestData,
          );
          return (
            a(
              o("nextgendasherr").nextgendasherrFromCause(
                i,
                t,
                "VideoPlayerNextgendashPlaybackLoopRecoveringFromError",
                "Replacing MediaSource #%s with #%s",
                m.mediaSourceIndex,
                p.mediaSourceIndex,
              ),
            ),
            (c = babelHelpers.extends({}, c, {
              debugPlaybackLoopRecentChanges: $e(
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
        switch (c.state) {
          case "playing":
            switch (l.type) {
              case "__enter": {
                d(l.prevState);
                return;
              }
              case "__exception":
                return;
              case "__dispose":
                return;
              case "_fetch_transitioned":
                return Ce(i, t, l.type + ":" + l.requestID, 0, c);
              case "update_player_state_from_main": {
                var p,
                  _,
                  f,
                  g = o(
                    "VideoPlayerNextgendashStateMachine",
                  ).skipAutoDisposeInsideThisObject(l.playerStateFromMain),
                  h = babelHelpers.extends({}, c, { playerStateFromMain: g }),
                  y = h.playerStateFromMain.dashManifestData;
                if (
                  (Te(i, y),
                  i.config.mediaSinkType === "HYBRID" &&
                    c.playerStateFromMain.dashManifestData == null &&
                    y != null &&
                    (c.mediaSourceState.mediaSourceCleanup(),
                    (h = babelHelpers.extends({}, h, {
                      mediaSourceState: De(
                        i,
                        u,
                        r,
                        c.mediaSourceState.mediaSourceIndex,
                        y,
                      ),
                    }))),
                  (y == null ? void 0 : y.createdAt.perfMs) !==
                    ((p = c.playerStateFromMain.dashManifestData) == null
                      ? void 0
                      : p.createdAt.perfMs))
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
                      var t = Kt(i, v, e, y);
                      if (S) {
                        var n = {};
                        for (var r of t.playableRepresentations)
                          if (r.segmentsInfo.type === "SegmentTemplate") {
                            var a = r.segmentsInfo,
                              l = i.config.enableLive
                                ? a.segmentTimelinePredictive
                                : null,
                              s = Ot(a, !0),
                              u = Vt(i, t.type, r.representationId, s, !0),
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
                                if (h.mediaTimeRange[0] >= _ - x) {
                                  var C = f + 1 + g.length;
                                  g.push(
                                    babelHelpers.extends({}, h, {
                                      segmentId: C,
                                    }),
                                  );
                                }
                              m = [].concat(d, g);
                            } else m = u;
                            ((m = Bt(m, R, i.config.liveLookbackBufferSec)),
                              (n[r.representationId] =
                                l != null ? Ut(l, m, a.timescale) : m));
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
                      debugPlaybackLoopRecentChanges: $e(
                        h.debugPlaybackLoopRecentChanges,
                        v,
                      ),
                    })));
                }
                var L = (_ = g.mediaElementSnapshot) == null ? void 0 : _.error,
                  E = B(L, i.config.fatalErrorOnMediaErrorRecoveryCapReached);
                if (
                  L != null &&
                  !h.recoveringFromMediaError &&
                  h.recoveringFromMediaErrorAttempt < E
                )
                  h = m(
                    h,
                    o("nextgendasherr").nextgendasherrFromMediaError(i, L),
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
                  (a(
                    o("nextgendasherr").nextgendasherrFromCause(
                      i,
                      I,
                      "VideoPlayerNextgendashPlaybackLoopRecoveredFromMediaError",
                    ),
                  ),
                    (h = babelHelpers.extends({}, h, {
                      debugPlaybackLoopRecentChanges: $e(
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
                  h.recoveringFromMediaErrorAttempt >= E &&
                  i.config.fatalErrorOnMediaErrorRecoveryCapReached
                )
                  return (
                    u({
                      exception: o("nextgendasherr").nextgendasherrFromCause(
                        i,
                        o("nextgendasherr").nextgendasherrFromMediaError(i, L),
                        "VideoPlayerNextgendashPlaybackLoopMediaErrorRecoveryAttemptsExhausted",
                        "Reached media error recovery attempt cap (%s) with media element still in error",
                        E,
                      ),
                      type: "__exception",
                    }),
                    h
                  );
                return (f = Ce(i, t, l.type + ":" + l.reason, 0, h)) != null
                  ? f
                  : h;
              }
              case "notify_deliberate_detach_for_unmount": {
                var T,
                  D = c,
                  $ =
                    "DeliberateDetachForUnmount:" +
                    l.mediaSourceIndex +
                    ":" +
                    D.mediaSourceState.mediaSourceIndex;
                return (
                  l.mediaSourceIndex === D.mediaSourceState.mediaSourceIndex
                    ? (D = babelHelpers.extends({}, D, {
                        debugPlaybackLoopRecentChanges: $e(
                          D.debugPlaybackLoopRecentChanges,
                          [$ + "->expectSourceClose"],
                        ),
                        expectSourceCloseForMediaSourceIndex:
                          l.mediaSourceIndex,
                      }))
                    : (D = babelHelpers.extends({}, D, {
                        debugPlaybackLoopRecentChanges: $e(
                          D.debugPlaybackLoopRecentChanges,
                          [$ + "->mediaSourceIndexMismatch"],
                        ),
                      })),
                  (T = Ce(i, t, "" + l.type, 0, D)) != null ? T : D
                );
              }
              case "request_recovery_from_source_reset": {
                var P,
                  N = c,
                  M =
                    "SourceResetRecoveryRequest:" +
                    l.mediaSourceIndex +
                    ":" +
                    N.mediaSourceState.mediaSourceIndex;
                if (l.mediaSourceIndex !== N.mediaSourceState.mediaSourceIndex)
                  N = babelHelpers.extends({}, N, {
                    debugPlaybackLoopRecentChanges: $e(
                      N.debugPlaybackLoopRecentChanges,
                      [M + "->mediaSourceIndexMismatch"],
                    ),
                  });
                else if (
                  !N.recoveringFromMediaError &&
                  N.recoveringFromMediaErrorAttempt < A
                )
                  N = m(
                    babelHelpers.extends({}, N, {
                      debugPlaybackLoopRecentChanges: $e(
                        N.debugPlaybackLoopRecentChanges,
                        [M + "->beginErrorRecoveryDueToElementSourceReset"],
                      ),
                    }),
                    o("nextgendasherr").nextgendasherr(
                      i,
                      "VideoPlayerNextgendashPlaybackLoopElementSourceResetAsError",
                    ),
                  );
                else {
                  var w = [];
                  (N.recoveringFromMediaError &&
                    w.push("StillAttemptingPreviousRecovery"),
                    N.recoveringFromMediaErrorAttempt >= A &&
                      w.push("ReachedRetryCap"),
                    (N = babelHelpers.extends({}, N, {
                      debugPlaybackLoopRecentChanges: $e(
                        N.debugPlaybackLoopRecentChanges,
                        [M + "->" + w.join(":")],
                      ),
                    })));
                }
                return (P = Ce(i, t, "" + l.type, 0, N)) != null ? P : N;
              }
              case "_media_source_event": {
                var F,
                  O = c,
                  W =
                    "mediaSourceEvent:" +
                    l.mediaSourceIndex +
                    ":" +
                    l.mediaSourceEventType;
                if (
                  l.mediaSource !== O.mediaSourceState.mediaSource ||
                  l.mediaSourceIndex !== O.mediaSourceState.mediaSourceIndex
                )
                  O = babelHelpers.extends(
                    {},
                    O,
                    {
                      debugPlaybackLoopRecentChanges: $e(
                        O.debugPlaybackLoopRecentChanges,
                        [
                          W +
                            "->mediaSourceMismatch:" +
                            O.mediaSourceState.mediaSourceIndex,
                        ],
                      ),
                    },
                    l.mediaSourceEventType === "sourceclose" &&
                      O.expectSourceCloseForMediaSourceIndex ===
                        l.mediaSourceIndex
                      ? { expectSourceCloseForMediaSourceIndex: null }
                      : null,
                  );
                else if (
                  O.mediaSourceState.waitingForFirstSourceopen &&
                  l.mediaSourceEventType === "sourceopen"
                )
                  O = babelHelpers.extends({}, O, {
                    debugPlaybackLoopRecentChanges: $e(
                      O.debugPlaybackLoopRecentChanges,
                      [W + "->first"],
                    ),
                    expectSourceCloseForMediaSourceIndex: null,
                    mediaSourceState: babelHelpers.extends(
                      {},
                      O.mediaSourceState,
                      { waitingForFirstSourceopen: !1 },
                    ),
                  });
                else if (l.mediaSourceEventType === "sourceclose")
                  if (
                    O.expectSourceCloseForMediaSourceIndex != null &&
                    O.expectSourceCloseForMediaSourceIndex ===
                      l.mediaSourceIndex
                  )
                    O = babelHelpers.extends({}, O, {
                      debugPlaybackLoopRecentChanges: $e(
                        O.debugPlaybackLoopRecentChanges,
                        [W + "->expectedDetachForUnmount"],
                      ),
                      expectSourceCloseForMediaSourceIndex: null,
                    });
                  else if (
                    !O.recoveringFromMediaError &&
                    O.recoveringFromMediaErrorAttempt < A
                  )
                    O = m(
                      babelHelpers.extends({}, O, {
                        debugPlaybackLoopRecentChanges: $e(
                          O.debugPlaybackLoopRecentChanges,
                          [W + "->beginErrorRecoveryBeforeSeeingMediaError"],
                        ),
                      }),
                      o("nextgendasherr").nextgendasherr(
                        i,
                        "VideoPlayerNextgendashPlaybackLoopSourceCloseEventAsError",
                      ),
                    );
                  else {
                    var q = [];
                    if (
                      (O.recoveringFromMediaError &&
                        q.push("StillAttemptingPreviousRecovery"),
                      O.recoveringFromMediaErrorAttempt >= A &&
                        q.push("ReachedRetryCap"),
                      (O = babelHelpers.extends({}, O, {
                        debugPlaybackLoopRecentChanges: $e(
                          O.debugPlaybackLoopRecentChanges,
                          [W + "->" + q.join(":")],
                        ),
                      })),
                      !O.recoveringFromMediaError &&
                        O.recoveringFromMediaErrorAttempt >= A &&
                        i.config.fatalErrorOnMediaErrorRecoveryCapReached)
                    )
                      return (
                        u({
                          exception: o("nextgendasherr").nextgendasherr(
                            i,
                            "VideoPlayerNextgendashPlaybackLoopSourceCloseRecoveryAttemptsExhausted",
                            "MediaSource closed after reaching recovery attempt cap (%s)",
                            A,
                          ),
                          type: "__exception",
                        }),
                        O
                      );
                  }
                else
                  O = babelHelpers.extends(
                    {},
                    O,
                    {
                      debugPlaybackLoopRecentChanges: $e(
                        O.debugPlaybackLoopRecentChanges,
                        [W],
                      ),
                    },
                    l.mediaSourceEventType === "sourceopen"
                      ? { expectSourceCloseForMediaSourceIndex: null }
                      : null,
                  );
                return (F = Ce(
                  i,
                  t,
                  l.type + ":" + l.mediaSourceEventType,
                  0,
                  O,
                )) != null
                  ? F
                  : O;
              }
              case "_native_sidx_result": {
                var U,
                  V,
                  H = l.parse,
                  j = H.representation,
                  K = c.streams.find(function (e) {
                    return e.nativeSidxParse === H;
                  });
                if (
                  K == null ||
                  H.mediaSourceIndex !== c.mediaSourceState.mediaSourceIndex
                )
                  return;
                var Q = K.nativeSidxParse,
                  X = babelHelpers.objectWithoutPropertiesLoose(K, e),
                  Y = X,
                  J = [];
                if (l.result === "failed") {
                  var Z = c.playerStateFromMain.dashManifestData;
                  Z != null &&
                    (Y = Qt(i, a, J, Y, Z, j.representationId, l.error));
                } else {
                  var ee,
                    te,
                    ne,
                    re,
                    oe,
                    ae = l.items,
                    ie = i.config
                      .sidxDisableShiftingMediaTimeRangesByEarliestPresentationTime
                      ? 0
                      : ((ee = (te = ae[0]) == null ? void 0 : te.startTicks) !=
                        null
                          ? ee
                          : 0) /
                        ((ne = (re = ae[0]) == null ? void 0 : re.timescale) !=
                        null
                          ? ne
                          : 1),
                    le = Vt(
                      i,
                      Y.type,
                      j.representationId,
                      ae.map(function (e, t) {
                        return {
                          isEndingSegment: t === ae.length - 1,
                          mediaFileByteRange: {
                            byteLength: e.byteLength,
                            byteOffset: e.byteOffset,
                          },
                          mediaTimeRange: [
                            e.startTicks / e.timescale - ie,
                            (e.startTicks + e.durationTicks) / e.timescale - ie,
                          ],
                          segmentId: t,
                        };
                      }),
                      !1,
                    );
                  ((Y = babelHelpers.extends({}, Y, {
                    sidxByRepresentationId: o(
                      "VideoPlayerNextgendashStateMachine",
                    ).skipAutoDisposeInsideThisObject(
                      babelHelpers.extends(
                        {},
                        Y.sidxByRepresentationId,
                        ((oe = {}), (oe[j.representationId] = le), oe),
                      ),
                    ),
                  })),
                    J.push(
                      Y.type +
                        ":" +
                        j.representationId +
                        ":sidx/native:" +
                        ae.length +
                        ":" +
                        le.length,
                    ));
                }
                var se = babelHelpers.extends({}, c, {
                  debugPlaybackLoopRecentChanges: $e(
                    c.debugPlaybackLoopRecentChanges,
                    J,
                  ),
                  fetchDemands:
                    (U = st(
                      c.fetchDemands,
                      function (e) {
                        return e === Ve(j);
                      },
                      t.args.fetchPoolAPI,
                    )) != null
                      ? U
                      : c.fetchDemands,
                  streams: c.streams.map(function (e) {
                    return e === K ? Y : e;
                  }),
                });
                return Y.streamFatalError != null && K.streamFatalError == null
                  ? (u({
                      exception: o(
                        "nextgendasherr",
                      ).nextgendasherrFromMultipleCauses(
                        i,
                        se.streams
                          .map(function (e) {
                            return e.streamFatalError != null
                              ? [e.type, e.streamFatalError]
                              : null;
                          })
                          .filter(Boolean),
                        "VideoPlayerNextgendashPlaybackLoopStreamFatalErrors",
                      ),
                      type: "__exception",
                    }),
                    se)
                  : (V = Ce(i, t, l.type, 0, se)) != null
                    ? V
                    : se;
              }
              case "_source_buffer_event": {
                var ue = c.streams.find(function (e) {
                    var t;
                    return (
                      ((t = e.sourceBufferState) == null
                        ? void 0
                        : t.sourceBuffer) === l.sourceBuffer
                    );
                  }),
                  ce =
                    ue == null
                      ? void 0
                      : ue.appendState.currSourceBufferOperation;
                if (ue != null && ce != null) {
                  var de = !1,
                    me = [],
                    pe = c.streams.map(function (e) {
                      var t, n;
                      if (e !== ue) return e;
                      var r = vt(
                        i,
                        a,
                        e,
                        me,
                        l,
                        s,
                        (t =
                          (n = c.playerStateFromMain.mediaElementSnapshot) ==
                          null
                            ? void 0
                            : n.currentTime) != null
                          ? t
                          : 0,
                        function () {
                          return Ct(i, e.sourceBufferState);
                        },
                      );
                      return r != null
                        ? ((de = !0), babelHelpers.extends({}, e, r))
                        : e;
                    }),
                    _e = babelHelpers.extends({}, c, {
                      debugPlaybackLoopRecentChanges: $e(
                        c.debugPlaybackLoopRecentChanges,
                        me,
                      ),
                      streams: pe,
                    });
                  if (de) {
                    var fe;
                    return (fe = Ce(
                      i,
                      t,
                      l.type +
                        ":" +
                        l.sourceBufferEventType +
                        ":" +
                        ce.operationState +
                        ":stateHasChanged",
                      0,
                      _e,
                    )) != null
                      ? fe
                      : _e;
                  } else
                    return i.config.disablePlaybackLoopSchedulingOnTimer
                      ? c
                      : Ce(
                          i,
                          t,
                          l.type +
                            ":" +
                            l.sourceBufferEventType +
                            ":" +
                            ce.operationState +
                            ":!stateHasChanged",
                          ge,
                          c,
                        );
                } else
                  return i.config.disablePlaybackLoopSchedulingOnTimer
                    ? c
                    : Ce(
                        i,
                        t,
                        l.type +
                          ":" +
                          l.sourceBufferEventType +
                          ":null_currSourceBufferOperation",
                        ge,
                        c,
                      );
              }
              case "_observe_and_act": {
                var he =
                    i.config.isLivePlayback &&
                    c.recoveringFromMediaError == null
                      ? c.streams.find(function (e) {
                          return z(e.appendState.currSourceBufferOperation, s);
                        })
                      : null,
                  ye =
                    he == null
                      ? void 0
                      : he.appendState.currSourceBufferOperation;
                if (
                  he != null &&
                  ye != null &&
                  ye.operationState === "wait_updateend"
                ) {
                  var be,
                    ve,
                    Se,
                    Re,
                    Le = ye.operationTiming,
                    Ee = Le.started;
                  if (Ee == null) return Me(i, c, l.loopIteration, t);
                  var ke = o(
                      "VideoPlayerNextgendashHostAPI",
                    ).diffVideoPlayerNextgendashClockstamp(s, Ee).unixMs,
                    Ie = o("nextgendasherr").nextgendasherr(
                      i,
                      "VideoPlayerNextgendashPlaybackLoopLiveSourceBufferOperationTimedOut",
                      "%s:%s SourceBuffer operation stuck in wait_updateend for %sms: %s",
                      he.type,
                      (be = he.targetRepresentationId) != null
                        ? be
                        : "no_target_representation",
                      ke,
                      G(ye),
                    ),
                    xe =
                      "liveSourceBufferOperationTimedOut:" +
                      he.type +
                      ":" +
                      ((ve = he.targetRepresentationId) != null
                        ? ve
                        : "no_target_representation") +
                      ":" +
                      ke +
                      "ms";
                  if (c.recoveringFromMediaErrorAttempt < A) {
                    var Pe,
                      Ne = babelHelpers.extends({}, c, {
                        debugPlaybackLoopRecentChanges: $e(
                          c.debugPlaybackLoopRecentChanges,
                          [xe + "->beginErrorRecovery:" + G(ye)],
                        ),
                      }),
                      we = m(Ne, Ie);
                    return (Pe = Ce(
                      i,
                      t,
                      l.type + ":liveSourceBufferOperationTimedOut",
                      0,
                      we,
                    )) != null
                      ? Pe
                      : we;
                  }
                  var Ae = babelHelpers.extends({}, c, {
                    debugPlaybackLoopRecentChanges: $e(
                      c.debugPlaybackLoopRecentChanges,
                      [
                        "liveSourceBufferOperationTimedOut:" +
                          he.type +
                          ":" +
                          ((Se = he.targetRepresentationId) != null
                            ? Se
                            : "no_target_representation") +
                          "->ReachedRetryCap",
                      ],
                    ),
                  });
                  return i.config.fatalErrorOnMediaErrorRecoveryCapReached
                    ? (u({
                        exception: o("nextgendasherr").nextgendasherrFromCause(
                          i,
                          Ie,
                          "VideoPlayerNextgendashPlaybackLoopLiveSourceBufferOperationTimeoutRecoveryAttemptsExhausted",
                          "Reached media error recovery attempt cap (%s) with SourceBuffer operation still stuck in wait_updateend",
                          A,
                        ),
                        type: "__exception",
                      }),
                      Ae)
                    : (Re = Ce(
                          i,
                          t,
                          l.type +
                            ":liveSourceBufferOperationTimedOutReachedRetryCap",
                          ge,
                          Ae,
                        )) != null
                      ? Re
                      : Ae;
                }
                return Me(i, c, l.loopIteration, t);
              }
              default:
                l.type;
                return;
            }
          case "__disposed__": {
            switch (l.type) {
              case "__enter": {
                (d(l.prevState),
                  i.config.enableDisposalResourceCleanup &&
                    l.prevState.mediaSourceState.mediaSourceCleanup());
                return;
              }
            }
            return;
          }
          default:
            c.state;
            return;
        }
      },
    );
    function Q(e, t, n, r, a) {
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
    function X(e, t) {
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
    function Y(e) {
      for (var t of e.dataKeyToResponseByteRange.keys())
        if (!t.startsWith("init-") && !t.startsWith("sidx-")) return !1;
      return !0;
    }
    function J(e, t, n, r, o, a) {
      for (var i = 0; i < t.length; ++i) {
        var l = t[i],
          s = U(l, a);
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
              var c = Y(l);
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
    var Z = 5 * 1e3;
    function ee(e, t) {
      if (e.config.isLivePlayback) return !1;
      var n = o("videoUrlUtils").parseCdnUrlParams(t).expirationDate;
      return n != null && n.getTime() - Z <= e.host.clock().unixMs;
    }
    function te(e, t) {
      return (
        ee(e, t.baseURL) || (t.type === "BaseURLInitURL" && ee(e, t.initURL))
      );
    }
    function ne(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (r[0] <= t && t <= r[1]) return (r[1] - t) * 1e3;
      }
      return 0;
    }
    function re(e, t) {
      return e > 0 ? e : t;
    }
    function oe(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (r[0] <= t && t <= r[1]) return Math.max(t, r[1]);
      }
      return t;
    }
    function ae(e, t, n) {
      return e !== void 0 && t < n && wt(e, [t, n], b);
    }
    function ie(e, t, n) {
      return e !== void 0 && t >= n && wt(e, [n, t], b);
    }
    function le(e, t, n) {
      if (t == null || n == null) return !0;
      var r = e.segmentsInfo;
      if (r.type !== "SegmentTemplate") return !0;
      var o = oe(t, n),
        a = Ot(r, !0),
        i = a.find(function (e) {
          return e.mediaTimeRange[1] > o - x;
        });
      return i != null && i.mediaTimeRange[0] <= o + b;
    }
    function se(e, t) {
      return t ? (e < 2e3 ? 3 : e < 5e3 ? 2 : 1) : 1;
    }
    function ue(e, t, n) {
      n === void 0 && (n = 3e4);
      var r = e.filter(function (e) {
        return t - e < n;
      });
      return Math.min(r.length / 3, 1);
    }
    function ce(e, t, n) {
      n === void 0 && (n = T);
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
    function de(e, t, n, r) {
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
      var i = r - T;
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
    function me(e, t, n) {
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
    function pe(e, t, n, r, o) {
      if (t.length <= 1) return null;
      var a = me(n, o),
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
    function _e(e, t, n, r, o, a, i, l) {
      for (var s = 2, u = 1, c = 1, d = 0; d < t.length; ++d) {
        var m = t[d];
        if (!(m.responseFetch != null || m.poolTrackingID != null)) {
          if (e.config.enableCdnUrlRefresh && te(e, m.requestInfoArgs)) {
            m.isAwaitingUrlRefresh ||
              (t[d] = babelHelpers.extends({}, m, {
                isAwaitingUrlRefresh: !0,
              }));
            continue;
          }
          var p = Y(m),
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
              g = se(v, S);
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
    function fe(e, t, n, r, a, i, l) {
      var s = new Map(),
        u = new Map();
      J(e, n, s, u, r, t.args.fetchPoolAPI);
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
          f = j(e, n.requestInfoArgs),
          g =
            e.host.nativeMedia != null
              ? {
                  nativeExpectedBodyBytes:
                    n.requestInfoArgs.type === "BaseURLByteRange"
                      ? n.requestInfoArgs.byteRange.byteLength
                      : null,
                }
              : null;
        if (d.fetchPoolAPI != null) {
          var h = d.fetchPoolAPI.submitFetchRequest(
            babelHelpers.extends({}, n.requestDraft, g, { requestInfo: f }),
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
          return h;
        } else {
          var y = m(
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
              request: babelHelpers.extends({}, n.requestDraft, g, {
                requestCreatedClock: e.host.clock(),
                requestInfo: f,
              }),
            },
          );
          return (p(y, { type: "start" }), y);
        }
      }
      if ((_e(e, n, s, u, d, r, i, l), c != null && c.size > 0)) {
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
    var ge = 1e3,
      he = 20;
    function ye(e, t, n) {
      return Math.max(0, e, t ? n : 0);
    }
    function Ce(e, t, a, i, l, s) {
      s === void 0 && (s = 0);
      var u = t.args.sendPlayerWarningToMain,
        c = t.sendToSelf,
        d = e.host.clock().unixMs,
        m = d + i,
        p = l.loopState;
      if (p.loopScheduledToUnixMs == null || m < p.loopScheduledToUnixMs) {
        var _ = p.loopTimerID;
        _ != null && (e.host.timers.clearTimeout(_), (_ = null));
        var f = ye(
            m - d,
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
            (f <= 0 ? "immediately" : "new_timer=" + f + "ms"),
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
              babelHelpers.extends({}, p, {
                loopReasons: Pe(e, p.loopIteration, p.loopReasons, C),
                loopScheduledToUnixMs: d + f,
                loopTimerDelayMs: f,
                loopTimerID: f > 0 ? e.host.timers.setTimeout(b, f) : null,
              }),
            ),
          });
        return f > 0
          ? v
          : s >= he
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
              (g || (g = n("Promise")))
                .resolve()
                .then(b)
                .catch(r("emptyFunction")),
              v)
            : Me(e, v, h, t, s);
      } else return;
    }
    var be = " ** ",
      ve = /^(.*)[ ][*][*][ ](\d+)$/;
    function Se(e) {
      var t = [],
        n = null,
        r = 0;
      for (var o of e) {
        var a = o.includes(be) ? ve.exec(o) : null,
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
        (Re(t, n, r), (n = s), (r = i));
      }
      return (Re(t, n, r), t);
    }
    function Re(e, t, n) {
      t != null && e.push("" + t + (n === 1 ? "" : " ** " + n));
    }
    function Le(e, t, n, r) {
      return n ? e : Math.max(0, t - r);
    }
    function Ee(e, t, n, r) {
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
                        je(e.segment, p)
                      );
                    },
                  ),
                f = Le(m[0], m[1], _, e.config.endOfStreamBufferToleranceSec);
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
    var ke = 2e3;
    function Ie(e, t, n, r, a) {
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
    function Te(e, t) {
      if (
        !(e.host.nativeMedia == null || t == null) &&
        (t.metadata.manifestType === "dynamic" ||
          ["video", "audio"].some(function (e) {
            return t.manifestRepresentations[e].some(function (e) {
              var t, n;
              return (
                e.segmentsInfo.type !== "SegmentBase" ||
                e.mimeCodecsParsed.containerType !== "mp4" ||
                ((t = (n = e.contentProtections) == null ? void 0 : n.length) !=
                null
                  ? t
                  : 0) > 0
              );
            });
          }))
      )
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashPlaybackLoopNativeManifestUnsupported",
          "Native playback requires clear MP4 SegmentBase VOD",
        );
    }
    function De(e, t, n, r, a) {
      Te(e, a);
      var i = [];
      e.config.mediaSinkType === "HYBRID" &&
        a != null &&
        (a.manifestRepresentations.video.length > 0 && i.push("video"),
        a.manifestRepresentations.audio.length > 0 && i.push("audio"));
      var l = r != null ? r + 1 : 0,
        s = e.host.mediaSourceCreate(
          e,
          function (e) {
            var n = e.domEventType,
              r = e.eventTarget;
            t({
              mediaSource: r,
              mediaSourceEventType: n,
              mediaSourceIndex: l,
              type: "_media_source_event",
            });
          },
          e.config.mediaSinkType === "HYBRID"
            ? { expectedTrackKinds: i }
            : void 0,
        ),
        u = s[0],
        c = s[1];
      return (
        n(u, l),
        o("VideoPlayerNextgendashStateMachine").skipAutoDisposeInsideThisObject(
          {
            mediaSource: u,
            mediaSourceCleanup: c,
            mediaSourceIndex: l,
            waitingForFirstSourceopen: !0,
          },
        )
      );
    }
    var xe = 60;
    function $e(e, t) {
      return t.length === 0
        ? e
        : o(
            "VideoPlayerNextgendashStateMachine",
          ).skipAutoDisposeInsideThisObject(
            [].concat(e.slice(0, -1), Se([].concat(e.slice(-1), t))).slice(-xe),
          );
    }
    function Pe(e, t, n, r) {
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
        : h;
    }
    function Ne(e) {
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
    function Me(e, t, n, r, a) {
      var i, l;
      a === void 0 && (a = 0);
      var s = r.eventClock,
        u = r.sendToSelf,
        c = r.args.requestUrlRefresh;
      if (!(n < t.loopState.loopIteration)) {
        var d = t.loopState.loopTimerID;
        d != null && (e.host.timers.clearTimeout(d), (d = null));
        var m = t.playerStateFromMain.dashManifestData;
        Te(e, m);
        var p = 10,
          _ = 10,
          f = [],
          g = [],
          h = 0,
          y = s,
          b = y,
          v = e.config.enableCdnUrlRefresh ? Ne(t.fetchDemands) : null,
          I = t.fetchDemands,
          x = t.streams,
          $ = x,
          P = !1,
          N = !1,
          M = function () {
            (++h, ($ = x), (P = !1), (N = !1), (g.length = 0));
            try {
              if (m) {
                var a = q(e, t.playerStateFromMain.mediaElementSnapshot),
                  i = tt({
                    enableLive: e.config.enableLive,
                    fellBehindWindowSec: S,
                    followEdgeActive: e.config.liveFollowEdgeActive,
                    hardFellBehindWindowSec:
                      e.config.liveFellBehindHardRefetchDriftSec,
                    hardStarvationBufferAheadSec: E,
                    isLivePlayback: e.config.isLivePlayback,
                    pairedRefetchEnabled:
                      e.config.liveFellBehindPairedRefetchEnabled,
                    playheadMediaTimeSec: a,
                    proactiveDriftSec: e.config.liveProactiveRefetchDriftSec,
                    refetchBehindEdgeSec: L,
                    refetchEnabled: e.config.liveFellBehindWindowRefetchEnabled,
                    starvationBufferAheadSec: R,
                    streams: $.filter(function (e) {
                      return e.type === "video" || e.type === "audio";
                    }).map(function (e) {
                      var t =
                        e.targetRepresentationId != null
                          ? e.sidxByRepresentationId[e.targetRepresentationId]
                          : null;
                      return {
                        bufferedAheadSec: Je(
                          e.appendState.sourceBufferRanges,
                          a,
                        ),
                        confirmedLiveEdgeMediaTimeSec: Qe(t),
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
                              blockedRepresentations: C(e, {}),
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
                              targetVariantRepresentationIds: C(e, []),
                              type: "video",
                              videoABRState: null,
                              videoABRStateClock: null,
                              videoABRSwitchClock: null,
                            }),
                            (c = Kt(e, g, c, m)))
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
                              blockedRepresentations: C(e, {}),
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
                              targetVariantRepresentationIds: C(e, []),
                              type: "audio",
                            }),
                            (c = Kt(e, g, c, m))));
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
                          g.push(
                            a +
                              ":" +
                              d +
                              ":manifestRepresentations=" +
                              gt(m.manifestRepresentations[a]),
                          )),
                        c != null)
                      ) {
                        var p = c,
                          _ = g.length;
                        try {
                          var f = Oe(
                            e,
                            t,
                            m,
                            r,
                            c,
                            I,
                            n * 1e4 + l * 100 + h - 1,
                            i,
                            g,
                          );
                          ((I = f.fetchDemands), (c = f.stream));
                        } catch (t) {
                          var y = o("nextgendasherr").nextgendasherrFromCause(
                            e,
                            t,
                            "VideoPlayerNextgendashPlaybackLoopObserveAndActException",
                          );
                          (g.push(c.type + ":streamFatalError:" + y.name),
                            (c = babelHelpers.extends({}, c, {
                              streamFatalError: y,
                            })));
                        }
                        if (
                          c.streamFatalError != null &&
                          c.streamFatalError !== p.streamFatalError
                        ) {
                          var b;
                          ((N = !0),
                            e.logging.log(e, {
                              error: c.streamFatalError,
                              format: "%s:%s - new streamFatalError",
                              params: [
                                c.type,
                                (b = c.targetRepresentationId) != null
                                  ? b
                                  : "no_target_representation",
                              ],
                              type: "generic_error",
                            }));
                        }
                        if (c !== p && ((P = !0), g.length === _)) {
                          var v = Object.keys(p)
                            .map(function (e) {
                              return c != null && c[e] !== p[e] ? e : null;
                            })
                            .filter(Boolean);
                          g.push(
                            c.type + ":changeWithoutReason:" + v.join(","),
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
              ((b = e.host.clock()), x !== $ && f.push.apply(f, g));
            }
          };
        e: do if (M()) break e;
        while (
          P &&
          !N &&
          h < p &&
          o(
            "VideoPlayerNextgendashHostAPI",
          ).diffVideoPlayerNextgendashClockstamp(b, y).perfMs < _
        );
        var w = [];
        if (!N) {
          var A = X(
            I,
            e.config.fetchInitSidxOfAllRepresentations
              ? x
                  .map(function (e) {
                    return e.targetRepresentationId;
                  })
                  .filter(Boolean)
              : [],
          );
          e.config.enableCdnUrlRefresh &&
            (A = A.map(function (e) {
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
          var F = new Map(),
            O = new Map(),
            B = t.playerStateFromMain.mediaElementSnapshot,
            W = q(e, B);
          for (var U of x) {
            var V = ne(U.appendState.sourceBufferRanges, W);
            (F.set(U.type, V),
              O.set(U.type, U.appendState.appendChain != null));
          }
          if (
            ((I = fe(
              e,
              r,
              A,
              w,
              t.playerStateFromMain.scrollPositionInfo,
              F,
              O,
            )),
            e.config.enableCdnUrlRefresh)
          ) {
            var H = Array.from(Ne(I)).filter(function (e) {
              return v != null && !v.has(e);
            });
            H.length > 0 &&
              c(
                H.map(function (e) {
                  return { url: e };
                }),
              );
          }
        }
        var G = t.volatilityState,
          z = t.volatilityState;
        if (e.config.enableDynamicBufferWatermarks && z != null) {
          var j = s.unixMs,
            K = j - T,
            Q = z.abrSwitchTimestamps,
            Y = z.bandwidthSamples,
            J = !1,
            Z = function (n) {
              var e = t.streams.find(function (e) {
                return e.type === n.type;
              });
              e != null &&
                n.targetRepresentationId != null &&
                e.targetRepresentationId != null &&
                n.targetRepresentationId !== e.targetRepresentationId &&
                (n.targetRepresentationReason === "abr_switch" ||
                  n.targetRepresentationReason === "selected_switch") &&
                ((Q = [].concat(Q, [j])), (J = !0));
            };
          for (var ee of x) Z(ee);
          var te = e.host.networkDiagnosticsReadBandwidth(
              e.config.enableBandwidthDiagnosticsFallback,
              e.config.bandwidthDiagnosticsFallbackDefaultEstimate,
            ),
            re = de(Y, z.lastBandwidthDiagnosticsSignature, te, j),
            oe = re.lastBandwidthDiagnosticsSignature;
          ((re.bandwidthSamples !== Y ||
            oe !== z.lastBandwidthDiagnosticsSignature) &&
            ((Y = re.bandwidthSamples), (J = !0)),
            Q.some(function (e) {
              return e <= K;
            }) &&
              ((Q = Q.filter(function (e) {
                return e > K;
              })),
              (J = !0)),
            J &&
              (G = C(e, {
                abrSwitchTimestamps: Q,
                bandwidthSamples: Y,
                lastBandwidthDiagnosticsSignature: oe,
                pendingSpeculativeSidxKeys: z.pendingSpeculativeSidxKeys,
              })));
        }
        if (e.config.enablePredictiveSidxPrefetch && G != null && m != null) {
          var ae = e.host.networkDiagnosticsReadBandwidth(
            e.config.enableBandwidthDiagnosticsFallback,
            e.config.bandwidthDiagnosticsFallbackDefaultEstimate,
          );
          if (ae != null && ae.bandwidthEstimate > 0) {
            var ie = null,
              le = function () {
                var t = ue.type;
                if (t !== "video" && t !== "audio") return 0;
                var r = ue.playableRepresentations;
                if (r.length <= 1) return 0;
                var o = ue.targetRepresentationId;
                if (o == null) return 0;
                var a = pe(
                  o,
                  r,
                  G.bandwidthSamples,
                  ae.bandwidthEstimate,
                  s.unixMs,
                );
                if (a != null && a.confidence > D) {
                  var i = a.representation;
                  if (i.segmentsInfo.type === "SegmentBase") {
                    var l = Ve(i),
                      u = ue.sidxByRepresentationId[i.representationId] != null,
                      c = I.some(function (e) {
                        return e.activeDemands.has(l);
                      });
                    if (!u && !c) {
                      var d,
                        m,
                        p =
                          (d = (m = ie) == null ? void 0 : m.get(t)) != null
                            ? d
                            : G.pendingSpeculativeSidxKeys.get(t);
                      if (p != null && p !== l) {
                        var _ = I.some(function (e) {
                          return (
                            e.activeDemands.has(p) &&
                            e.activeDemands.size === 1 &&
                            e.responseFetch == null
                          );
                        });
                        if (_) {
                          var f = st(I, function (e) {
                            return e === p;
                          });
                          f != null && (I = f);
                        }
                      }
                      var g = n * 1e4 + 1e6;
                      ((I = [].concat(I, [He(e, g, i)])),
                        ie == null &&
                          (ie = new Map(G.pendingSpeculativeSidxKeys)),
                        ie.set(t, l));
                    }
                  }
                }
              },
              se;
            for (var ue of x) se = le();
            ie != null &&
              (G = C(
                e,
                babelHelpers.extends({}, G, { pendingSpeculativeSidxKeys: ie }),
              ));
          }
        }
        var ce =
            (i = t.playerStateFromMain.mediaElementSnapshot) == null
              ? void 0
              : i.currentTime,
          me = null;
        if (
          e.config.liveEndedTransitionOnStallEnabled &&
          e.config.isLivePlayback &&
          e.config.enableLive &&
          ce != null
        ) {
          var _e = !1,
            he = !0,
            ye = null;
          for (var be of x)
            if (!(be.type !== "video" && be.type !== "audio")) {
              _e = !0;
              var ve =
                  be.targetRepresentationId != null
                    ? be.sidxByRepresentationId[be.targetRepresentationId]
                    : null,
                Se = Xe({
                  playheadMediaTimeSec: ce,
                  sidx: ve,
                  toleranceSec: k,
                });
              if (Se == null) {
                he = !1;
                break;
              }
              ye = ye == null ? Se : Math.min(ye, Se);
            }
          me = _e && he ? ye : null;
        }
        var Re = Ye({
            confirmSec: e.config.liveEndedStallConfirmSec,
            drainedTailEndSec: me,
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
          Le = Re.confirmed,
          ke = Re.next,
          Ie = babelHelpers.extends({}, t, {
            debugPlaybackLoopRecentChanges: $e(
              t.debugPlaybackLoopRecentChanges,
              f.concat(w),
            ),
            fetchDemands: I,
            liveEndedStallState: ke,
            loopState: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends({}, t.loopState, {
                loopIteration: n,
                loopReasons: Pe(e, n, t.loopState.loopReasons),
                loopScheduledToUnixMs: null,
                loopTimerDelayMs: null,
                loopTimerID: d,
              }),
            ),
            streams: x,
            volatilityState: G,
          }),
          De = [],
          xe = !1,
          Me = !1,
          we = !1;
        if (
          (Ie.streams.forEach(function (t) {
            (t.type !== "video" && t.type !== "audio") ||
              ((t.appendState.currSourceBufferOperation != null ||
                t.appendState.pendingAppendOperations.length !== 0 ||
                t.appendState.pendingRemoveOperations.length !== 0) &&
                (xe = !0),
              t.streamFatalError != null && (Me = !0),
              e.config.skipEndOfStreamWhileBlockedTargetAwaitsReselection &&
                t.targetRepresentationId == null &&
                t.targetRepresentationReason ===
                  "null_blocked_representation" &&
                t.sourceBufferState != null &&
                (we = !0));
          }),
          xe || Me || we || Ie.recoveringFromMediaError != null)
        )
          De.push(
            "endOfStream skipped: " +
              [
                xe ? "current or pending operation" : null,
                Me ? "pending stream fatal error(s)" : null,
                we ? "target representation reset after block" : null,
                Ie.recoveringFromMediaError != null
                  ? "recovering from MediaError " +
                    Ie.recoveringFromMediaError.name
                  : null,
              ]
                .filter(Boolean)
                .join(", "),
          );
        else
          try {
            Ee(e, Ie, De, Le);
          } catch (t) {
            return (
              u({
                exception: o("nextgendasherr").nextgendasherrFromCause(
                  e,
                  t,
                  "VideoPlayerNextgendashPlaybackLoopCheckAndCallEndOfStreamError",
                  "%s",
                  "debugPlaybackLoopRecentChanges:\n " +
                    Ie.debugPlaybackLoopRecentChanges.join("\n "),
                  "endOfStreamDebugReasons:\n " + De.join("\n "),
                ),
                type: "__exception",
              }),
              Ie
            );
          }
        De.length === 0 && De.push("endOfStream: checked, unknown result");
        var Ae = babelHelpers.extends({}, Ie, {
          debugPlaybackLoopRecentChanges: $e(
            Ie.debugPlaybackLoopRecentChanges,
            De,
          ),
        });
        if (N)
          return (
            u({
              exception: o("nextgendasherr").nextgendasherrFromMultipleCauses(
                e,
                Ae.streams
                  .map(function (e) {
                    return e.streamFatalError != null
                      ? [e.type, e.streamFatalError]
                      : null;
                  })
                  .filter(Boolean),
                "VideoPlayerNextgendashPlaybackLoopStreamFatalErrors",
                "%s",
                "debugPlaybackLoopRecentChanges:\n " +
                  Ae.debugPlaybackLoopRecentChanges
                    .concat(
                      Ae.recoveringFromMediaErrorAttempt > 0
                        ? [
                            "recoveringFromMediaErrorAttempt:" +
                              Ae.recoveringFromMediaErrorAttempt,
                          ]
                        : [],
                    )
                    .join("\n "),
              ),
              type: "__exception",
            }),
            Ae
          );
        if (Ae.streams !== t.streams) {
          var Fe;
          return (Fe = Ce(
            e,
            r,
            "streamsChanged:(" + f.join(",") + ")",
            0,
            Ae,
            a + 1,
          )) != null
            ? Fe
            : Ae;
        } else {
          var Be;
          return e.config.disablePlaybackLoopSchedulingOnTimer
            ? Ae
            : (Be = Ce(e, r, "!streamsChanged", 10 * ge, Ae, a + 1)) != null
              ? Be
              : Ae;
        }
      }
    }
    function we(e, t, n) {
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
    function Ae(e, t, n, r, a, i, l, s, u) {
      var c,
        d,
        m = t,
        p = n,
        _ = r,
        f = a.representationId,
        g = qe(a);
      if (
        e.host.nativeMedia != null &&
        ((c = m.appendState.appendChain) == null
          ? void 0
          : c.representationId) === f
      ) {
        var h;
        return {
          abortFurtherProcessing: !1,
          fetchDemandOrderNext: _,
          fetchDemands:
            (h = st(
              p,
              function (e) {
                return e === g;
              },
              s,
            )) != null
              ? h
              : p,
          initBuffer: null,
          stream: m,
        };
      }
      var y = it(p, g, s, !0),
        C = y == null ? void 0 : y.fetchState,
        b = y == null || (d = y.responseInfo) == null ? void 0 : d.buffer;
      if (b == null && C != null && C.state === "completed")
        return (
          (m = Qt(
            e,
            l,
            u,
            m,
            i,
            f,
            o("nextgendasherr").nextgendasherr(
              e,
              "VideoPlayerNextgendashPlaybackLoopInitFetchBufferExtractionFailed",
              "%s:%s - Failed to extract init buffer from the completed response; mimeCodecs=%s",
              m.type,
              f,
              a.mimeCodecsParsed.mimeCodecs,
            ),
          )),
          {
            abortFurtherProcessing: !0,
            fetchDemandOrderNext: _,
            fetchDemands: p,
            initBuffer: null,
            stream: m,
          }
        );
      if (C != null && C.state === "failed")
        return (
          (m = Qt(
            e,
            l,
            u,
            m,
            i,
            f,
            o("nextgendasherr").nextgendasherrFromCause(
              e,
              C.error,
              "VideoPlayerNextgendashPlaybackLoopInitFetchFailed",
              "%s:%s - Failed to fetch init; mimeCodecs=%s",
              m.type,
              f,
              a.mimeCodecsParsed.mimeCodecs,
            ),
          )),
          {
            abortFurtherProcessing: !0,
            fetchDemandOrderNext: _,
            fetchDemands: p,
            initBuffer: null,
            stream: m,
          }
        );
      if (y == null) {
        var v =
          e.config.enableCombinedInitSidxFetch &&
          a.segmentsInfo.type === "SegmentBase" &&
          m.sidxByRepresentationId[f] == null &&
          it(p, Ve(a), s, !1) == null;
        v
          ? (p = [].concat(p, [Ge(e, ++_, a)]))
          : (p = [].concat(p, [Ue(e, ++_, a)]));
      }
      return {
        abortFurtherProcessing: !1,
        fetchDemandOrderNext: _,
        fetchDemands: p,
        initBuffer: b,
        stream: m,
      };
    }
    function Fe(e, t, n, r, a, i) {
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
    function Oe(e, t, n, a, i, l, s, u, c) {
      var d,
        m,
        p,
        _,
        f,
        g,
        h,
        C,
        k,
        T,
        D,
        x,
        $,
        P,
        N,
        M = a.args,
        A = M.prefetchResult,
        F = M.sendPlayerWarningToMain,
        O = a.eventClock,
        B = a.sendToSelf,
        W = l,
        G = s * 1e4,
        z = Ie(e, t, O, i, c),
        j = z.abortFurtherStreamProcessing,
        K = z.stream;
      if (K.streamFatalError != null || j)
        return { fetchDemands: W, stream: K };
      K = we(K, t.mediaSourceState.mediaSourceIndex, c);
      var Q = K.appendState.sourceBufferRanges,
        X = null,
        Y = n.manifestRepresentations[K.type].find(function (e) {
          return e.representationId === K.targetRepresentationId;
        }),
        J = K.targetRepresentationReason,
        Z = !1;
      if (Y != null)
        switch (K.type) {
          case "video": {
            var ee,
              te = t.playerStateFromMain.selectedMediaVariant;
            Z = xt(
              te,
              te != null ? te : V,
              (ee = K.prevSelectedMediaVariant) != null ? ee : V,
              t.playerStateFromMain.selectedVideoQualityDisplayLabel,
              K.prevSelectedVideoQualityDisplayLabel,
            );
            break;
          }
          case "audio": {
            var ne,
              oe = t.playerStateFromMain.selectedMediaVariant;
            Z = $t(
              oe,
              oe != null ? oe : V,
              (ne = K.prevSelectedMediaVariant) != null ? ne : V,
            );
            break;
          }
        }
      if (Y == null || Z) {
        var ae = Nt(
          e,
          F,
          t.playerWarningDedupMap,
          O,
          t.playerStateFromMain,
          n,
          A,
          Q,
          K,
          c,
        );
        ((X = ae.prevTargetRepresentation),
          (K = ae.stream),
          (Y = ae.targetRepresentation),
          (J = ae.targetRepresentationReason));
      }
      var ie = X,
        le = Y,
        se = J,
        de = le.representationId;
      K = Fe(e, K, t.mediaSourceState, le, B, c);
      var me = K.sourceBufferState,
        pe = Ae(e, K, W, G, le, n, F, a.args.fetchPoolAPI, c);
      if (pe != null && pe.abortFurtherProcessing)
        return { fetchDemands: pe.fetchDemands, stream: pe.stream };
      pe != null &&
        ((K = pe.stream), (W = pe.fetchDemands), (G = pe.fetchDemandOrderNext));
      var _e = pe == null ? void 0 : pe.initBuffer,
        fe = K.sidxByRepresentationId[de],
        ge = le.segmentsInfo,
        he = Ve(le),
        ye = it(W, he, a.args.fetchPoolAPI, !0),
        Ce = ye == null ? void 0 : ye.fetchState,
        be = ye == null ? void 0 : ye.responseInfo,
        ve = be == null ? void 0 : be.buffer;
      if (fe == null && (be == null ? void 0 : be.kind) === "native") {
        var Se, Re;
        if (ge.type !== "SegmentBase")
          throw o("nextgendasherr").nextgendasherr(
            e,
            "VideoPlayerNextgendashPlaybackLoopNativeSidxUnsupported",
          );
        if (
          ((Se = K.nativeSidxParse) == null ? void 0 : Se.representation) !==
            le ||
          ((Re = K.nativeSidxParse) == null ? void 0 : Re.mediaSourceIndex) !==
            t.mediaSourceState.mediaSourceIndex
        ) {
          var Le = {
            mediaSourceIndex: t.mediaSourceState.mediaSourceIndex,
            representation: le,
          };
          K = babelHelpers.extends({}, K, { nativeSidxParse: Le });
          var Ee = be.buffer;
          r("promiseDone")(
            Ee.body.parseIndex({
              byteLength: Ee.byteLength,
              byteOffset: Ee.byteOffset,
              fileOffset: ge.indexByteRange.byteOffset,
            }),
            function (e) {
              return B({
                items: e,
                parse: Le,
                result: "parsed",
                type: "_native_sidx_result",
              });
            },
            function (t) {
              return B({
                error: o("nextgendasherr").nextgendasherrFromCause(
                  e,
                  t,
                  "VideoPlayerNextgendashPlaybackLoopSidxParseFailed",
                ),
                parse: Le,
                result: "failed",
                type: "_native_sidx_result",
              });
            },
          );
        }
      } else if (fe == null && ve instanceof Uint8Array) {
        var ke = le.mimeCodecsParsed.containerType,
          Te = null;
        try {
          switch (ke) {
            case "mp4": {
              var De =
                ge.type === "SegmentBase" ? ge.indexByteRange.byteOffset : null;
              if (De == null)
                throw o("nextgendasherr").nextgendasherr(
                  e,
                  "VideoPlayerNextgendashPlaybackLoopSidxParseMp4MissingSidxByteOffset",
                );
              Te = o("VideoPlayerNextgendashMp4SidxParser").parseMp4Sidx(
                e,
                ve,
                De,
              );
              break;
            }
            case "webm": {
              _e instanceof Uint8Array
                ? (Te = o("VideoPlayerNextgendashWebmSidxParser").parseWebmSidx(
                    e,
                    ve,
                    _e,
                  ))
                : (Te = null);
              break;
            }
            default:
              throw o("nextgendasherr").nextgendasherr(
                e,
                "VideoPlayerNextgendashPlaybackLoopSidxParseUnexpectedContainerType",
                "Unexpected container type for sidx parsing: %s",
                ke,
              );
          }
        } catch (t) {
          return (
            (K = Qt(
              e,
              F,
              c,
              K,
              n,
              de,
              o("nextgendasherr").nextgendasherrFromCause(
                e,
                t,
                "VideoPlayerNextgendashPlaybackLoopSidxParseFailed",
                "%s:%s - Failed to parse sidx; mimeCodecs=%s",
                K.type,
                de,
                le.mimeCodecsParsed.mimeCodecs,
              ),
            )),
            { fetchDemands: W, stream: K }
          );
        }
        var xe = Te;
        if (xe != null) {
          var $e, Pe;
          ((fe = Vt(
            e,
            K.type,
            de,
            xe.map(function (e, t) {
              return {
                isEndingSegment: t === xe.length - 1,
                mediaFileByteRange: e.mediaFileByteRange,
                mediaTimeRange: e.mediaTimeRange,
                segmentId: t,
              };
            }),
            !1,
          )),
            c.push(
              K.type + ":" + de + ":sidx/buffer:" + xe.length + ":" + fe.length,
            ),
            (K = babelHelpers.extends({}, K, {
              sidxByRepresentationId: o(
                "VideoPlayerNextgendashStateMachine",
              ).skipAutoDisposeInsideThisObject(
                babelHelpers.extends(
                  {},
                  K.sidxByRepresentationId,
                  (($e = {}), ($e[de] = fe), $e),
                ),
              ),
            })),
            (W =
              (Pe = st(
                W,
                function (e) {
                  return e === he;
                },
                a.args.fetchPoolAPI,
              )) != null
                ? Pe
                : W));
        }
      } else {
        if (ve == null && Ce != null && Ce.state === "completed")
          return (
            (K = Qt(
              e,
              F,
              c,
              K,
              n,
              de,
              o("nextgendasherr").nextgendasherr(
                e,
                "VideoPlayerNextgendashPlaybackLoopSidxFetchBufferExtractionFailed",
                "%s:%s - Failed to extract sidx buffer from the completed response; mimeCodecs=%s",
                K.type,
                de,
                le.mimeCodecsParsed.mimeCodecs,
              ),
            )),
            { fetchDemands: W, stream: K }
          );
        if (fe == null && Ce != null && Ce.state === "failed")
          return (
            (K = Qt(
              e,
              F,
              c,
              K,
              n,
              de,
              o("nextgendasherr").nextgendasherrFromCause(
                e,
                Ce.error,
                "VideoPlayerNextgendashPlaybackLoopSidxFetchFailed",
                "%s:%s - Failed to fetch sidx; mimeCodecs=%s",
                K.type,
                de,
                le.mimeCodecsParsed.mimeCodecs,
              ),
            )),
            { fetchDemands: W, stream: K }
          );
        if (fe == null && ge.type === "SegmentTemplate") {
          var Ne,
            Me = n.metadata.manifestType === "dynamic",
            Oe = Ot(ge, Me),
            ze = e.config.enableLive ? ge.segmentTimelinePredictive : null;
          fe = Vt(e, K.type, de, Oe, Me);
          var Xe = ze != null ? Ut(ze, fe, ge.timescale) : fe;
          (c.push(
            K.type +
              ":" +
              de +
              ":sidx/template" +
              (ze != null ? "/predictive" : "") +
              ":" +
              Oe.length +
              ":" +
              Xe.length,
          ),
            (K = babelHelpers.extends({}, K, {
              sidxByRepresentationId: o(
                "VideoPlayerNextgendashStateMachine",
              ).skipAutoDisposeInsideThisObject(
                babelHelpers.extends(
                  {},
                  K.sidxByRepresentationId,
                  ((Ne = {}), (Ne[de] = Xe), Ne),
                ),
              ),
            })));
        } else if (fe == null && ye == null) {
          var Ye;
          W = [].concat(
            (Ye = st(
              W,
              function (e) {
                return e !== he && e.startsWith("sidx-" + le.type + "-");
              },
              a.args.fetchPoolAPI,
            )) != null
              ? Ye
              : W,
            [He(e, ++G, le)],
          );
        }
      }
      var tt = fe,
        nt = t.playerStateFromMain.mediaElementSnapshot,
        ut = q(e, nt);
      if (
        ((d = K.appendState.appendChain) == null ? void 0 : d.mediaTail) != null
      ) {
        var dt = Gt(
          e,
          K.type,
          de,
          K.appendState.appendChain,
          ut,
          Q,
          t.mediaSourceState.mediaSource,
          c,
        );
        dt !== K.appendState.appendChain &&
          (K = babelHelpers.extends({}, K, {
            appendState: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends({}, K.appendState, { appendChain: dt }),
            ),
          }));
      }
      var pt =
        ie != null &&
        (((m = le.role) != null ? m : null) !==
          ((p = ie.role) != null ? p : null) ||
          ((_ = le.lang) != null ? _ : null) !==
            ((f = ie.lang) != null ? f : null));
      if (
        ie != null &&
        de !== ie.representationId &&
        (se === "selected_switch" || pt)
      ) {
        var _t = 5,
          ft = pt ? 0 : ut + _t,
          gt = [ft, Number.POSITIVE_INFINITY],
          ht = {
            operationState: "wait_start",
            operationTiming: { created: e.host.clock() },
            operationType: "remove_operation",
            removeRange: gt,
          };
        (c.push(
          K.type +
            ":" +
            de +
            ":pendingRemoveOperations:newRemoveOperation:" +
            o("VideoPlayerNextgendashMediaUtils").debugStringifyTimeRange(
              ht.removeRange,
            ),
        ),
          (K = babelHelpers.extends({}, K, {
            appendState: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends({}, K.appendState, {
                pendingAppendOperations: [],
                pendingRemoveOperations: [].concat(
                  K.appendState.pendingRemoveOperations,
                  [ht],
                ),
              }),
            ),
          })));
      }
      var yt = e.config.mediaSinkType === "HYBRID" && !e.config.isLivePlayback,
        Ct = yt
          ? e.config.nativeBackBufferRetentionSec
          : e.config.isLivePlayback
            ? e.config.liveBackBufferRetentionSec
            : 0;
      if (
        Ct > 0 &&
        K.sourceBufferState != null &&
        K.appendState.currSourceBufferOperation == null &&
        K.appendState.pendingAppendOperations.length === 0 &&
        K.appendState.pendingRemoveOperations.length === 0
      ) {
        var bt = Ze(
          Q,
          ut,
          Ct,
          yt ? e.config.nativeBackBufferMinRemovableSec : w,
        );
        if (
          bt != null &&
          e.host.mediaSourceCollectSnapshot(e, t.mediaSourceState.mediaSource)
            .readyState === "open"
        ) {
          var vt = {
            operationState: "wait_start",
            operationTiming: { created: e.host.clock() },
            operationType: "remove_operation",
            removeRange: [0, bt],
          };
          (c.push(
            K.type +
              ":" +
              de +
              ":pendingRemoveOperations:newLiveBackBufferRemoveOperation:" +
              o("VideoPlayerNextgendashMediaUtils").debugStringifyTimeRange(
                vt.removeRange,
              ),
          ),
            (K = babelHelpers.extends({}, K, {
              appendState: o(
                "VideoPlayerNextgendashStateMachine",
              ).skipAutoDisposeInsideThisObject(
                babelHelpers.extends({}, K.appendState, {
                  pendingRemoveOperations: [].concat(
                    K.appendState.pendingRemoveOperations,
                    [vt],
                  ),
                }),
              ),
            })));
        }
      }
      var St =
        (g =
          (h =
            (C =
              K.appendState.pendingAppendOperations[
                K.appendState.pendingAppendOperations.length - 1
              ]) == null
              ? void 0
              : C.appendInfo.representationId) != null
            ? h
            : K.appendState.currSourceBufferOperation != null &&
                K.appendState.currSourceBufferOperation.operationType ===
                  "append_operation"
              ? K.appendState.currSourceBufferOperation.appendInfo
                  .representationId
              : null) != null
          ? g
          : K.appendState.lastAppendOperation != null &&
              K.appendState.lastAppendOperation.operationState === "succeeded"
            ? K.appendState.lastAppendOperation.appendInfo.representationId
            : null;
      if (me != null && de !== St && _e != null) {
        var Rt = {
          appendInfo: {
            appendInfoType: "init",
            mimeCodecsParsed: le.mimeCodecsParsed,
            representationId: de,
          },
          buffer: _e,
          operationState: "wait_start",
          operationTiming: { created: e.host.clock() },
          operationType: "append_operation",
        };
        (c.push(
          K.type +
            ":" +
            de +
            ":pendingAppendOperations:initAppendOperation:" +
            mt(Rt.appendInfo),
        ),
          (K = babelHelpers.extends({}, K, {
            appendState: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends({}, K.appendState, {
                pendingAppendOperations: [Rt],
              }),
            ),
          })));
      }
      var Lt = 16.924449682236,
        Et = e.config.isLivePlayback ? 20 : 22,
        kt =
          t.playerStateFromMain.mediaElementSnapshot == null
            ? "initial"
            : t.playerStateFromMain.mediaElementSnapshot.paused
              ? "paused"
              : "playing",
        It = {
          initial: yt
            ? Math.max(0, e.config.bufferAheadTargetNoMediaElementSec)
            : re(e.config.bufferAheadTargetNoMediaElementSec, Lt),
          paused: e.config.bufferAheadTargetPausedSec,
          playing: (k = e.config.bufferAheadTargetPlayingSec) != null ? k : Et,
        }[kt],
        Tt =
          e.config.enableQuotaExceededRecovery && !yt
            ? Math.max(
                e.config.quotaExceededMinBufferTargetSec,
                It * K.quotaExceededBufferTargetRatio,
              )
            : It,
        Dt = Tt,
        Pt = t.volatilityState;
      if (
        e.config.enableDynamicBufferWatermarks &&
        !yt &&
        kt === "playing" &&
        Pt != null
      ) {
        var Mt = O.unixMs,
          wt = ue(Pt.abrSwitchTimestamps, Mt),
          Bt = ce(Pt.bandwidthSamples, Mt),
          Ht = Math.max(wt, Bt),
          Kt = Ht * I,
          Jt = e.config.enableQuotaExceededRecovery
            ? Kt * K.quotaExceededBufferTargetRatio
            : Kt;
        Dt = Tt + Jt;
      }
      var Zt =
          (T = K.appendState.appendChain) == null
            ? void 0
            : T.playheadMinimumTimeSec,
        en = Qe(tt),
        tn = Je(Q, ut),
        nn = et({
          bufferedAheadSec: tn,
          enableLive: e.config.enableLive,
          fellBehindWindowSec: S,
          followEdgeActive: e.config.liveFollowEdgeActive,
          hardFellBehindWindowSec: e.config.liveFellBehindHardRefetchDriftSec,
          hardStarvationBufferAheadSec: E,
          isLivePlayback: e.config.isLivePlayback,
          liveEdgeMediaTimeSec: en,
          playheadMediaTimeSec: ut,
          proactiveDriftSec: e.config.liveProactiveRefetchDriftSec,
          refetchEnabled: e.config.liveFellBehindWindowRefetchEnabled,
          starvationBufferAheadSec: R,
        }),
        rn =
          e.config.liveFellBehindPairedRefetchEnabled &&
          e.config.isLivePlayback &&
          e.config.enableLive &&
          e.config.liveFollowEdgeActive
            ? u
            : null,
        on = tn != null ? ut + tn : ut,
        an = rn != null && on < rn - b,
        ln = nn || an,
        sn = rn != null ? rn : en != null ? en - L : null,
        un =
          ln && sn != null
            ? sn
            : Zt != null && Zt > ut
              ? Zt - b
              : K.appendState.appendChain != null
                ? ut - b
                : ut,
        cn = ln && en != null ? en + Dt : ut + Dt,
        dn =
          K.appendState.currSourceBufferOperation != null &&
          K.appendState.currSourceBufferOperation.operationType ===
            "append_operation"
            ? K.appendState.currSourceBufferOperation.appendInfo
                .appendInfoType === "data" &&
              K.appendState.currSourceBufferOperation.appendInfo
                .dataByteRangeLength > 0
              ? K.appendState.currSourceBufferOperation.appendInfo
              : null
            : K.appendState.lastAppendOperation != null &&
                K.appendState.lastAppendOperation.operationState ===
                  "succeeded" &&
                K.appendState.lastAppendOperation.appendInfo.appendInfoType ===
                  "data" &&
                K.appendState.lastAppendOperation.appendInfo
                  .dataByteRangeLength > 0
              ? K.appendState.lastAppendOperation.appendInfo
              : null;
      function mn(t, n) {
        return Ft(
          K.appendState.appendChain,
          t,
          n,
          e.config.isLivePlayback && e.config.liveTimeBasedAppendAnchorEnabled,
        );
      }
      var pn = tt != null ? tt : [],
        _n =
          yt &&
          t.playerStateFromMain.mediaSourceIndexApplied ===
            t.mediaSourceState.mediaSourceIndex &&
          t.playerStateFromMain.mediaElementSnapshot != null,
        fn =
          _n &&
          ((D = t.playerStateFromMain.mediaElementSnapshot) == null
            ? void 0
            : D.seeking) === !0 &&
          Number.isFinite(ut) &&
          ut >= 0 &&
          Q != null &&
          !Q.some(function (e) {
            var t = e[0],
              n = e[1];
            return t <= ut && ut < n;
          }),
        gn = yt && Dt <= 0,
        hn =
          gn &&
          ((x = t.playerStateFromMain.mediaElementSnapshot) == null
            ? void 0
            : x.paused) === !0 &&
          t.playerStateFromMain.mediaSourceIndexApplied ===
            t.mediaSourceState.mediaSourceIndex,
        yn =
          hn &&
          (($ = t.playerStateFromMain.mediaElementSnapshot) == null
            ? void 0
            : $.seeking) === !0,
        Cn = Math.round(ut * 1e3);
      function bn(e) {
        return Math.abs(Math.round(e * 1e3) - Cn) <= 1;
      }
      function vn(e) {
        return (
          fn &&
          e.segment.mediaTimeRange[0] <= ut &&
          ut < e.segment.mediaTimeRange[1] &&
          (e.nativeSeekRetry == null || !bn(e.nativeSeekRetry.targetSec))
        );
      }
      function Sn(e) {
        var t;
        if (
          !_n ||
          ((t = e.nativeSeekRetry) == null ? void 0 : t.pending) !== !0 ||
          !bn(e.nativeSeekRetry.targetSec)
        )
          return !1;
        var n = rt(le, e.segment);
        return W.some(function (e) {
          if (e.isNativeSeek !== !0 || !e.activeDemands.has(n)) return !1;
          var t = U(e, a.args.fetchPoolAPI);
          return t == null
            ? e.evictedClock == null
            : t.state !== "failed" &&
                t.state !== "aborted" &&
                t.state !== "__disposed__";
        });
      }
      var Rn = pn.filter(function (e) {
          if (gn && !hn) return !1;
          if (
            !At(Q, e) &&
            !K.appendState.workaroundForSegmentBufferedInsufficiently.some(
              function (t) {
                return (
                  t.representationId === de &&
                  je(t.segment, e) &&
                  !vn(t) &&
                  !Sn(t)
                );
              },
            )
          ) {
            if (gn) {
              var t = rt(le, e),
                n = W.some(function (e) {
                  return e.isNativeSeek === !0 && e.activeDemands.has(t);
                });
              return (
                (yn || n) &&
                ((e.mediaTimeRange[0] <= ut + v && ut <= e.mediaTimeRange[1]) ||
                  (e.isEndingSegment && ut > e.mediaTimeRange[1])) &&
                !mn(de, e)
              );
            }
            if (e.isEndingSegment && ut > e.mediaTimeRange[1])
              return !mn(de, e);
            var r = o("VideoPlayerNextgendashMediaUtils").isWithinRange(
              e.mediaTimeRange,
              un,
            );
            if (r) return !mn(de, e);
            var a = o("VideoPlayerNextgendashMediaUtils").isWithinRange(
              e.mediaTimeRange,
              cn,
            );
            if (a) return !mn(de, e);
            var i = un <= e.mediaTimeRange[0] && e.mediaTimeRange[1] <= cn;
            if (i) return !mn(de, e);
          }
          return !1;
        }),
        Ln = ge.type === "SegmentTemplate" ? ge : null,
        En =
          (P = Ln == null ? void 0 : Ln.segmentTimelinePredictive) != null
            ? P
            : null,
        kn = tt != null && tt.length > 0 ? tt[tt.length - 1] : null,
        In = Ln != null ? Wt(Ln) : null;
      if (
        e.config.isLivePlayback &&
        e.config.enableLive &&
        Rn.length === 0 &&
        tt != null &&
        Ln != null &&
        En != null &&
        kn != null &&
        qt(kn, En, e.config.liveRollingPdashReseedAfterStripEnabled, In, cn)
      ) {
        var Tn = kn.isPredictiveSegment !== !0,
          Dn = Ut(En, tt, Ln.timescale);
        if (Dn.length > tt.length) {
          var xn;
          ((K = babelHelpers.extends({}, K, {
            sidxByRepresentationId: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends(
                {},
                K.sidxByRepresentationId,
                ((xn = {}), (xn[de] = Dn), xn),
              ),
            ),
          })),
            (tt = Dn));
          var $n = Dn[Dn.length - 1];
          ((Rn = [$n]),
            c.push(
              K.type +
                ":" +
                de +
                ":" +
                (Tn ? "rolling_pdash_reseed" : "rolling_pdash") +
                ":" +
                String($n.templateNumber),
            ));
        }
      }
      var Pn = new Set(),
        Nn = null,
        Mn = K.appendState.workaroundForSegmentBufferedInsufficiently.find(
          function (e) {
            return (
              e.representationId === de &&
              (vn(e) || Sn(e)) &&
              Rn.some(function (t) {
                return je(t, e.segment);
              })
            );
          },
        );
      if (
        !gn &&
        Mn == null &&
        Rn.length > 1 &&
        le.segmentsInfo.type === "SegmentBase"
      ) {
        for (var wn, An = [], Fn = 0; Fn < Rn.length; ++Fn) {
          var On = Rn[Fn],
            Bn = rt(le, On);
          Pn.add(Bn);
          var Wn = lt(e, Nn != null ? Nn : W, Bn);
          ((Nn = Wn != null ? Wn : Nn), Wn == null && An.push(On));
        }
        for (
          var qn =
              A != null && A.prefetchedRepresentationIds.includes(de)
                ? [0]
                : [],
            Un = Be(
              An,
              qn,
              e.host.nativeMedia != null
                ? (wn =
                    e.host.nativeMedia.getMaxBodyBytes == null
                      ? void 0
                      : e.host.nativeMedia.getMaxBodyBytes()) != null
                  ? wn
                  : 16 * 1024 * 1024
                : void 0,
            ),
            Vn = 0;
          Vn < Un.length;
          ++Vn
        ) {
          var Hn = Un[Vn];
          ((Nn = Nn != null ? Nn : [].concat(W)), Nn.push(at(e, ++G, le, Hn)));
        }
      } else
        Rn.forEach(function (t) {
          var n = rt(le, t);
          Pn.add(n);
          var r = lt(e, Nn != null ? Nn : W, n);
          Nn = r != null ? r : Nn;
          var o = yn || (Mn != null && je(Mn.segment, t));
          (o &&
            r != null &&
            (Nn = r.map(function (e) {
              return e.activeDemands.has(n)
                ? babelHelpers.extends({}, e, { isNativeSeek: !0 })
                : e;
            })),
            r == null &&
              ((Nn = Nn != null ? Nn : [].concat(W)),
              Nn.push(
                babelHelpers.extends(
                  {},
                  ot(e, ++G, le, t),
                  o ? { isNativeSeek: !0 } : {},
                ),
              )));
        });
      {
        var Gn = new Set();
        ((Nn != null ? Nn : W).forEach(function (t) {
          var r = O.perfMs - t.demandedAtClock.perfMs,
            o = 0;
          r < o ||
            t.activeDemands.forEach(function (t) {
              t.startsWith("segment-" + K.type + "-") &&
                !Pn.has(t) &&
                ![
                  dn,
                  K.appendState.currSourceBufferOperation != null &&
                  K.appendState.currSourceBufferOperation.operationType ===
                    "append_operation"
                    ? K.appendState.currSourceBufferOperation.appendInfo
                    : null,
                ]
                  .concat(
                    K.appendState.pendingAppendOperations.map(function (e) {
                      return e.appendInfo;
                    }),
                  )
                  .filter(Boolean)
                  .some(function (r) {
                    var o = We(
                      e,
                      n.manifestRepresentations[K.type],
                      r.representationId,
                    );
                    switch (r.appendInfoType) {
                      case "init":
                        return t === qe(o);
                      case "data":
                        return t === rt(o, r.segment);
                      default:
                        r.appendInfoType;
                    }
                  }) &&
                Gn.add(t);
            });
        }),
          Gn.size > 0 &&
            (Nn = st(
              Nn != null ? Nn : W,
              function (e) {
                return Gn.has(e);
              },
              a.args.fetchPoolAPI,
            )));
      }
      {
        var zn = Nn != null ? Nn : W,
          jn = a.args.fetchPoolAPI,
          Kn = zn.reduce(
            function (e, t) {
              if (t.streamType === K.type && t.activeDemands.size > 0) {
                var n = U(t, jn);
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
          Kn.inflightFetchesCountForThisStream === 0 &&
          Kn.unfulfilledDemandsCountForThisStream > 0
        ) {
          var Qn = Nt(
            e,
            F,
            t.playerWarningDedupMap,
            O,
            t.playerStateFromMain,
            n,
            A,
            Q,
            K,
            c,
          );
          if (Qn.stream.targetRepresentationId !== K.targetRepresentationId)
            return { fetchDemands: W, stream: Qn.stream };
          K = Qn.stream;
        }
      }
      if (
        e.config.fetchInitSidxOfAllRepresentations &&
        de != null &&
        K.playableRepresentations.length > 1 &&
        ((N = t.playerStateFromMain.mediaElementSnapshot) == null
          ? void 0
          : N.bufferedFully) !== !0
      ) {
        for (var Xn of K.playableRepresentations)
          if (Xn.representationId !== de) {
            var Yn =
                it(Nn != null ? Nn : W, qe(Xn), a.args.fetchPoolAPI, !1) !=
                null,
              Jn =
                K.sidxByRepresentationId[Xn.representationId] != null ||
                it(Nn != null ? Nn : W, Ve(Xn), a.args.fetchPoolAPI, !1) !=
                  null;
            if (!Yn || !Jn) {
              var Zn =
                e.config.enableCombinedInitSidxFetch &&
                Xn.segmentsInfo.type === "SegmentBase" &&
                !Yn &&
                !Jn;
              Zn
                ? ((Nn = Nn != null ? Nn : [].concat(W)),
                  Nn.push(Ge(e, ++G, Xn)))
                : (Yn ||
                    ((Nn = Nn != null ? Nn : [].concat(W)),
                    Nn.push(Ue(e, ++G, Xn))),
                  Jn ||
                    ((Nn = Nn != null ? Nn : [].concat(W)),
                    Nn.push(He(e, ++G, Xn))));
            }
          }
      }
      W = Nn != null ? Nn : W;
      var er = K.appendState.workaroundForSegmentBufferedInsufficiently;
      if (
        (er.some(function (e) {
          var t;
          return (
            (((t = e.nativeSeekRetry) == null ? void 0 : t.pending) === !0 &&
              !Sn(e)) ||
            (e === Mn && vn(e))
          );
        }) &&
          (K = babelHelpers.extends({}, K, {
            appendState: babelHelpers.extends({}, K.appendState, {
              workaroundForSegmentBufferedInsufficiently: er.map(function (e) {
                var t = e.nativeSeekRetry;
                return e === Mn &&
                  vn(e) &&
                  W.some(function (t) {
                    return (
                      t.isNativeSeek === !0 &&
                      t.activeDemands.has(rt(le, e.segment))
                    );
                  })
                  ? babelHelpers.extends({}, e, {
                      nativeSeekRetry: { pending: !0, targetSec: Cn / 1e3 },
                    })
                  : t != null && t.pending && !Sn(e)
                    ? babelHelpers.extends({}, e, {
                        nativeSeekRetry: babelHelpers.extends({}, t, {
                          pending: !1,
                        }),
                      })
                    : e;
              }),
            }),
          })),
        !(
          K.appendState.pendingAppendOperations.length > 0 ||
          K.appendState.currSourceBufferOperation != null
        ))
      ) {
        var tr = null;
        if (dn != null)
          tr = {
            dataByteRangeStart: dn.dataByteRangeStart + dn.dataByteRangeLength,
            incompleteChunkedAppendInfo: dn,
            mimeCodecsParsed: dn.mimeCodecsParsed,
            representationId: dn.representationId,
            segment: dn.segment,
          };
        else if (Rn.length > 0) {
          var nr = Rn[0];
          tr = {
            dataByteRangeStart: 0,
            incompleteChunkedAppendInfo: null,
            mimeCodecsParsed: le.mimeCodecsParsed,
            representationId: de,
            segment: nr,
          };
        }
        var rr = tr;
        if (rr != null) {
          if (
            K.appendState.appendChain != null &&
            K.appendState.appendChain.representationId === rr.representationId
          ) {
            var or = We(
                e,
                n.manifestRepresentations[K.type],
                rr.representationId,
              ),
              ar = rt(or, rr.segment),
              ir = it(W, ar, a.args.fetchPoolAPI);
            if (ir == null)
              throw o("nextgendasherr").nextgendasherr(
                e,
                rr.incompleteChunkedAppendInfo != null
                  ? "VideoPlayerNextgendashPlaybackLoopMissingFetchDemandForSegmentToContinueChunkedAppend"
                  : "VideoPlayerNextgendashPlaybackLoopMissingFetchDemandForSegmentToAppend",
                "%s:%s - nextAppendInfo=%s segmentFetchDemandKey=%s fetchDemands=%s",
                K.type,
                de != null ? de : "no_target_representation",
                JSON.stringify(rr),
                ar,
                ct(W),
              );
            var lr = null,
              sr = ir.fetchState;
            sr != null && sr.state === "failed"
              ? (lr = o("nextgendasherr").nextgendasherrFromCause(
                  e,
                  sr.error,
                  "VideoPlayerNextgendashPlaybackLoopSegmentFetchFailed",
                  "%s:%s - Fetch failed for media segment needed to append; segmentFetchDemandKey=%s nextAppendInfo=%s",
                  K.type,
                  de,
                  ar,
                  JSON.stringify(rr),
                ))
              : sr != null &&
                sr.state === "aborted" &&
                (lr = o("nextgendasherr").nextgendasherr(
                  e,
                  "VideoPlayerNextgendashPlaybackLoopSegmentFetchAborted",
                  "%s:%s - Fetch aborted for media segment needed to append; segmentFetchDemandKey=%s nextAppendInfo=%s",
                  K.type,
                  de,
                  ar,
                  JSON.stringify(rr),
                ));
            var ur = ir == null ? void 0 : ir.responseInfo;
            if (lr != null) {
              if (rr.segment.isPredictiveSegment === !0) {
                var cr = K.sidxByRepresentationId[rr.representationId];
                if (cr != null) {
                  var dr;
                  ((K = babelHelpers.extends({}, K, {
                    sidxByRepresentationId: o(
                      "VideoPlayerNextgendashStateMachine",
                    ).skipAutoDisposeInsideThisObject(
                      babelHelpers.extends(
                        {},
                        K.sidxByRepresentationId,
                        ((dr = {}),
                        (dr[rr.representationId] = cr.filter(function (e) {
                          return e.isPredictiveSegment !== !0;
                        })),
                        dr),
                      ),
                    ),
                  })),
                    c.push(
                      K.type +
                        ":" +
                        rr.representationId +
                        ":predictive_segment_fetch_failed",
                    ));
                }
                return (
                  (W = W.filter(function (e) {
                    return e.requestDraft.requestID !== ar;
                  })),
                  { fetchDemands: W, stream: K }
                );
              }
              return (
                (K = Qt(e, F, c, K, n, de, lr)),
                { fetchDemands: W, stream: K }
              );
            } else if (ur != null) {
              if (Ke(rr.segment, rr.dataByteRangeStart, ur)) {
                var mr = K.sidxByRepresentationId[rr.representationId];
                if (mr != null) {
                  var pr;
                  ((K = babelHelpers.extends({}, K, {
                    sidxByRepresentationId: o(
                      "VideoPlayerNextgendashStateMachine",
                    ).skipAutoDisposeInsideThisObject(
                      babelHelpers.extends(
                        {},
                        K.sidxByRepresentationId,
                        ((pr = {}),
                        (pr[rr.representationId] = mr.filter(function (e) {
                          return e.isPredictiveSegment !== !0;
                        })),
                        pr),
                      ),
                    ),
                  })),
                    c.push(
                      K.type +
                        ":" +
                        rr.representationId +
                        ":predictive_segment_fetch_empty",
                    ));
                }
                return (
                  (W = W.filter(function (e) {
                    return e.requestDraft.requestID !== ar;
                  })),
                  { fetchDemands: W, stream: K }
                );
              }
              var _r = rr.segment.mediaFileByteRange.byteLength,
                fr =
                  ur.isFetchComplete ||
                  (ur.responseByteRange.byteLength != null &&
                    ur.chunksByteLength >=
                      ur.responseByteRange.byteOffset +
                        ur.responseByteRange.byteLength),
                gr = 6,
                hr = 1e5,
                yr = fr
                  ? null
                  : e.config.dataAppendOperationMinBytes === "ozplayer-like"
                    ? gr > 0 && _r != null && _r > 0
                      ? Math.ceil(_r / gr)
                      : hr > 0
                        ? hr
                        : null
                    : e.config.dataAppendOperationMinBytes,
                Cr = ur.responseByteRange.byteOffset + rr.dataByteRangeStart,
                br =
                  ur.responseByteRange.byteLength != null
                    ? ur.responseByteRange.byteLength - rr.dataByteRangeStart
                    : null,
                vr =
                  ur.kind === "native"
                    ? null
                    : zt(
                        ur.chunks,
                        Cr,
                        yr != null ? (br != null ? Math.min(br, yr) : yr) : br,
                      ),
                Sr = null;
              if (ur.kind === "native") {
                var Rr = ur.buffer.body;
                if (
                  br == null ||
                  !Number.isSafeInteger(br) ||
                  br < 0 ||
                  !Number.isSafeInteger(Cr) ||
                  Cr < 0 ||
                  Cr + br > Rr.byteLength
                )
                  throw o("nextgendasherr").nextgendasherr(
                    e,
                    "VideoPlayerNextgendashPlaybackLoopNativeAppendRangeInvalid",
                  );
                Sr =
                  br === 0
                    ? y
                    : {
                        body: Rr,
                        byteLength: br,
                        byteOffset: Cr,
                        kind: "native",
                      };
              } else if (
                vr != null &&
                (yr === null || vr.copyTotalBytesCount >= yr)
              ) {
                if (((Sr = jt(ur.chunks, vr)), Sr == null))
                  throw o("nextgendasherr").nextgendasherr(
                    e,
                    "VideoPlayerNextgendashPlaybackLoopFailedToCombineChunksToAppend",
                    "%s/data#%s - Failed to copy %sB from chunks #%s(%sB)..#%s(%sB) into an append buffer (out of %s chunks of total %sB).",
                    rr.representationId,
                    rr.segment.segmentId,
                    vr.copyTotalBytesCount,
                    vr.startChunkIndex,
                    vr.startChunkByteOffset,
                    vr.endChunkIndex,
                    vr.endChunkBytesCount,
                    ur.chunks.length,
                    ur.chunksByteLength,
                  );
              } else fr && (Sr = y);
              if (Sr != null) {
                var Lr = {
                    appendInfoType: "data",
                    dataByteRangeLength: H(Sr),
                    dataByteRangeStart: rr.dataByteRangeStart,
                    mimeCodecsParsed: rr.mimeCodecsParsed,
                    representationId: rr.representationId,
                    segment: rr.segment,
                  },
                  Er = {
                    appendInfo: Lr,
                    buffer: Sr,
                    operationState: "wait_start",
                    operationTiming: { created: e.host.clock() },
                    operationType: "append_operation",
                  };
                (c.push(
                  K.type +
                    ":" +
                    de +
                    ":pendingAppendOperations:dataAppendOperation:" +
                    mt(Lr),
                ),
                  (K = babelHelpers.extends({}, K, {
                    appendState: o(
                      "VideoPlayerNextgendashStateMachine",
                    ).skipAutoDisposeInsideThisObject(
                      babelHelpers.extends({}, K.appendState, {
                        pendingAppendOperations: [].concat(
                          K.appendState.pendingAppendOperations,
                          [Er],
                        ),
                      }),
                    ),
                  })));
              }
            } else if (
              e.host.nativeMedia != null &&
              (sr == null ? void 0 : sr.state) === "completed"
            )
              throw o("nextgendasherr").nextgendasherr(
                e,
                "VideoPlayerNextgendashPlaybackLoopNativeSegmentRangeInvalid",
              );
          }
        }
      }
      var kr = Xt(e, F, K, c, le, t.mediaSourceState.mediaSource, ut);
      kr != null && (K = babelHelpers.extends({}, K, kr));
      var Ir = Yt(e, F, K, c, le, ut, t.mediaSourceState.mediaSource);
      Ir != null && (K = babelHelpers.extends({}, K, Ir));
      var Tr = K.appendState.lastSourceBufferOperation;
      if (
        e.config.enableQuotaExceededRecovery &&
        K.quotaExceededBufferTargetRatio < 1 &&
        Tr != null &&
        Tr.operationState === "succeeded" &&
        Tr.operationType === "append_operation" &&
        Tr.operationTiming.created.unixMs !==
          K.quotaExceededLastRewardedCreatedMs
      ) {
        var Dr = Math.min(
          1,
          K.quotaExceededBufferTargetRatio +
            e.config.quotaExceededBufferTargetReward,
        );
        K = babelHelpers.extends({}, K, {
          quotaExceededBufferTargetRatio: Dr,
          quotaExceededLastRewardedCreatedMs: Tr.operationTiming.created.unixMs,
        });
      }
      return { fetchDemands: W, stream: K };
    }
    function Be(e, t, n) {
      for (var r = [], o = 0; o < e.length; ++o) {
        var a = e[o];
        if (r.length === 0) r.push([a]);
        else {
          var i = r[r.length - 1],
            l = i[i.length - 1],
            s =
              l.mediaFileByteRange.byteLength != null &&
              a.mediaFileByteRange.byteOffset ===
                l.mediaFileByteRange.byteOffset +
                  l.mediaFileByteRange.byteLength &&
              (n == null ||
                (a.mediaFileByteRange.byteLength != null &&
                  a.mediaFileByteRange.byteOffset +
                    a.mediaFileByteRange.byteLength -
                    i[0].mediaFileByteRange.byteOffset <=
                    n)) &&
              !t.includes(l.segmentId);
          s ? i.push(a) : r.push([a]);
        }
      }
      return r;
    }
    function We(e, t, n) {
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
    function qe(e) {
      return "init-" + e.type + "-" + e.representationId;
    }
    function Ue(e, t, n) {
      var r = qe(n),
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
    function Ve(e) {
      return "sidx-" + e.type + "-" + e.representationId;
    }
    function He(e, t, n) {
      var r = n.segmentsInfo;
      if (r.type !== "SegmentBase")
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashPlaybackLoopSidxFetchUnknown",
          "%s:%s - sidx fetch unknown (" + r.type + ")",
          n.type,
          n.representationId,
        );
      var a = Ve(n),
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
    function Ge(e, t, n) {
      var r = n.segmentsInfo;
      if (r.type !== "SegmentBase")
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashPlaybackLoopCombinedInitSidxFetchUnknown",
          "%s:%s - combined init+sidx fetch unknown (" + r.type + ")",
          n.type,
          n.representationId,
        );
      var a = qe(n),
        i = Ve(n),
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
    function ze(e) {
      return e.templateTime != null ? "t" + e.templateTime : "" + e.segmentId;
    }
    function je(e, t) {
      return e.templateTime != null && t.templateTime != null
        ? e.templateTime === t.templateTime
        : e.segmentId === t.segmentId;
    }
    function Ke(e, t, n) {
      return (
        e.isPredictiveSegment === !0 &&
        t === 0 &&
        n.isFetchComplete &&
        n.chunksByteLength === 0
      );
    }
    function Qe(e) {
      if (e == null) return null;
      for (var t = e.length - 1; t >= 0; t--) {
        var n = e[t];
        if (n.isPredictiveSegment !== !0) return n.mediaTimeRange[1];
      }
      return null;
    }
    function Xe(e) {
      var t = e.playheadMediaTimeSec,
        n = e.sidx,
        r = e.toleranceSec,
        o = Qe(n);
      return o == null ? null : t >= o - r ? o : null;
    }
    function Ye(e) {
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
    function Je(e, t) {
      if (e == null) return null;
      for (var n of e) if (n[0] <= t && t <= n[1]) return n[1] - t;
      return 0;
    }
    function Ze(e, t, n, r) {
      var o;
      if (n <= 0 || e == null) return null;
      var a = (o = e[0]) == null ? void 0 : o[0];
      if (a == null) return null;
      var i = t - n;
      return i - a >= r ? i : null;
    }
    function et(e) {
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
    function tt(e) {
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
          et({
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
    function nt(e, t) {
      var n = e.findIndex(function (e) {
          return (
            e.representationId === t.representationId &&
            je(e.segment, t.segment)
          );
        }),
        r = n >= 0 ? e[n].nativeSeekRetry : null,
        o =
          n < 0
            ? [].concat(e, [t])
            : (r == null ? void 0 : r.pending) === !0
              ? e.map(function (e, t) {
                  return t === n
                    ? babelHelpers.extends({}, e, {
                        nativeSeekRetry: babelHelpers.extends({}, r, {
                          pending: !1,
                        }),
                      })
                    : e;
                })
              : e;
      return o.length > P ? o.slice(o.length - P) : o;
    }
    function rt(e, t) {
      return "segment-" + e.type + "-" + e.representationId + "-" + ze(t);
    }
    function ot(e, t, n, r) {
      var a = n.segmentsInfo,
        i = rt(n, r),
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
                relativeURL: Q(
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
    function at(e, t, n, r) {
      if (r.length === 0)
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashPlaybackLoopGroupOfSegmentsFetchEmptySegments",
          "%s:%s - Group of segments fetch empty segments",
          n.type,
          n.representationId,
        );
      if (r.length === 1) return ot(e, t, n, r[0]);
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
                rt(n, e),
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
              l.byteLength != null
                ? l.byteOffset +
                  l.byteLength -
                  (e.host.nativeMedia != null ||
                  e.config.enableExactSegmentGroupByteRange
                    ? i.byteOffset
                    : 0)
                : null,
            byteOffset: i.byteOffset,
          },
          type: "BaseURLByteRange",
        },
        responseFetch: null,
        streamType: n.type,
      };
    }
    function it(e, t, n, r) {
      r === void 0 && (r = !1);
      for (var o = !1, a = null, i = 0; i < e.length; ++i) {
        var l = e[i],
          s = l.dataKeyToResponseByteRange.get(t);
        if (s != null) {
          o = !0;
          var u = U(l, n);
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
      if ((p == null ? void 0 : p.state) === "done_native") {
        var _ = p.nativeBody,
          f = m.byteLength;
        return f == null ||
          !Number.isSafeInteger(f) ||
          f < 0 ||
          !Number.isSafeInteger(m.byteOffset) ||
          m.byteOffset < 0 ||
          m.byteOffset + f > _.byteLength
          ? { fetchState: d, responseInfo: null }
          : {
              fetchState: d,
              responseInfo: {
                buffer: {
                  body: _,
                  byteLength: f,
                  byteOffset: m.byteOffset,
                  kind: "native",
                },
                chunksByteLength: _.byteLength,
                isFetchComplete: !0,
                kind: "native",
                responseByteRange: m,
              },
            };
      }
      if (
        m != null &&
        p != null &&
        (p.state === "reading_stream" ||
          p.state === "done_stream" ||
          p.state === "done_buffer")
      ) {
        var g = p.state === "done_stream" || p.state === "done_buffer",
          h = p.state === "done_buffer" ? [p.buffer] : p.chunks,
          y = p.state === "done_buffer" ? H(p.buffer) : p.dataBytesLengthTotal,
          C = null;
        if (
          r &&
          (g || (m.byteLength != null && y >= m.byteOffset + m.byteLength))
        ) {
          var b = zt(h, m.byteOffset, m.byteLength);
          C = b != null ? jt(h, b) : null;
        }
        return {
          fetchState: d,
          responseInfo: {
            buffer: C,
            chunks: h,
            chunksByteLength: y,
            isFetchComplete: g,
            responseByteRange: m,
          },
        };
      }
      return { fetchState: d, responseInfo: null };
    }
    function lt(e, t, n) {
      for (var r = null, a = 0; a < t.length; ++a) {
        var i = t[a];
        if (i.dataKeyToResponseByteRange.has(n)) {
          var l = i.activeDemands;
          if (!e.config.reduceStateMachineEventOverhead || !l.has(n)) {
            var s = new Set(i.activeDemands);
            (s.add(n),
              (l = o(
                "VideoPlayerNextgendashStateMachine",
              ).skipAutoDisposeInsideThisObject(s)));
          }
          ((r = r != null ? r : [].concat(t)),
            (r[a] = babelHelpers.extends({}, i, {
              activeDemands: l,
              demandedAtClock: e.host.clock(e),
            })));
        }
      }
      return r;
    }
    function st(e, t, n) {
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
    function ut(e, t, n) {
      return e.map(function (e) {
        var r,
          o,
          a = U(e, n),
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
              return [t, dt(n)];
            },
          );
        return [u, i, s, l];
      });
    }
    function ct(e, t) {
      return (t === void 0 && (t = !1), JSON.stringify(ut(e, t)));
    }
    function dt(e) {
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
    function mt(e) {
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
            dt(e.segment.mediaFileByteRange) +
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
    function pt(e) {
      var t = e.segment.mediaFileByteRange.byteLength;
      return (
        e.dataByteRangeLength === 0 ||
        (t != null && e.dataByteRangeStart + e.dataByteRangeLength >= t)
      );
    }
    function _t(e) {
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
    function ft(e) {
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
    function gt(e) {
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
    function ht(e) {
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
    function yt(e) {
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
    function Ct(e, t) {
      return t != null
        ? e.host.sourceBufferSnapshotBuffered(e, t.sourceBuffer)
        : void 0;
    }
    function bt(e) {
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
    function vt(e, t, n, r, a, i, l, g) {
      var h = n.appendState,
        y = h.currSourceBufferOperation;
      if (y == null) return null;
      var C = null,
        v = null,
        S = null,
        R = (function () {
          function r(t) {
            t === void 0 && (t = "");
            var n =
              "VideoPlayerNextgendashPlaybackLoopUnexpectedSourceBufferEvent[" +
              y.operationState +
              "]<--" +
              a.sourceBufferEventType +
              t;
            throw a.exception != null
              ? o("nextgendasherr").nextgendasherrFromCause(e, a.exception, n)
              : o("nextgendasherr").nextgendasherr(e, n);
          }
          switch (y.operationState) {
            case "wait_start": {
              var l = function (r) {
                if (e.config.qplEnabled) {
                  var t =
                      y.operationType === "append_operation"
                        ? y.appendInfo
                        : null,
                    a = o("VideoPlayerNextgendashQPL").qplStartPlayingApi(e),
                    i = a.subspan(
                      y.operationType === "append_operation"
                        ? "mse_append_" +
                            n.type +
                            "_" +
                            y.appendInfo.appendInfoType
                        : y.operationType === "remove_operation"
                          ? "mse_remove_" + n.type
                          : "mse_" + y.operationType,
                      y.operationType === "append_operation" && t != null
                        ? t.appendInfoType === "data"
                          ? {
                              int: {
                                byteLength: H(y.buffer),
                                dataByteRangeLength: t.dataByteRangeLength,
                                dataByteRangeStart: t.dataByteRangeStart,
                                segmentId: t.segment.segmentId,
                              },
                            }
                          : { int: { byteLength: H(y.buffer) } }
                        : y.operationType === "remove_operation"
                          ? {
                              string: {
                                removeRange: o(
                                  "VideoPlayerNextgendashMediaUtils",
                                ).debugStringifyTimeRange(y.removeRange),
                              },
                            }
                          : void 0,
                      o("VideoPlayerNextgendashQPL").qplTimestampFromClockstamp(
                        e,
                        r,
                      ),
                    );
                  return function (e, t) {
                    return i(
                      o("VideoPlayerNextgendashQPL").qplAnnotationsMerge(
                        {
                          string: {
                            sourceBufferRangesAfterFinish: v
                              ? o(
                                  "VideoPlayerNextgendashMediaUtils",
                                ).debugStringifyTimeRanges(v)
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
              switch (a.sourceBufferEventType) {
                case "_started": {
                  var h = babelHelpers.extends({}, y.operationTiming, {
                      started: i,
                    }),
                    b = l(h.started);
                  return babelHelpers.extends({}, y, {
                    debugSourceBufferRangesAfterStart: void 0,
                    operationState: "wait_updateend",
                    operationTiming: h,
                    qplSubspanEnd: b,
                  });
                }
                case "_exception": {
                  v = g();
                  var R = babelHelpers.extends({}, y.operationTiming, {
                      ended: i,
                      started: i,
                    }),
                    L = o("nextgendasherr").nextgendasherrFromCause(
                      e,
                      a.exception,
                      "VideoPlayerNextgendashPlaybackLoopSourceBufferException",
                    ),
                    E = l(R.started);
                  E &&
                    E(
                      o("VideoPlayerNextgendashQPL").qplAnnotationsForError(L),
                      o("VideoPlayerNextgendashQPL").qplTimestampFromClockstamp(
                        e,
                        R.ended,
                      ),
                    );
                  var k = babelHelpers.extends({}, y, {
                    error: L,
                    operationState: "errored",
                    operationTiming: R,
                    waitForMediaElementErrorUntilUnixMs: i.unixMs + ke,
                  });
                  if (k.operationType === "append_operation") {
                    var I = k.buffer,
                      T = babelHelpers.objectWithoutPropertiesLoose(k, s);
                    return babelHelpers.extends({}, T, {
                      buffer: I instanceof Uint8Array ? I : void 0,
                    });
                  }
                  return k;
                }
                case "_finished": {
                  var D, x;
                  if (
                    y.operationType !== "append_operation" ||
                    y.appendInfo.appendInfoType !== "data" ||
                    y.appendInfo.dataByteRangeLength > 0
                  )
                    throw r("NotDataEndSegmentAppendOperation");
                  var $ = y.appendInfo.segment,
                    P = y.buffer,
                    N = babelHelpers.objectWithoutPropertiesLoose(y, u);
                  if (((v = g()), v != null && !At(v, $))) {
                    var M;
                    ((C = {
                      representationId: y.appendInfo.representationId,
                      segment: $,
                    }),
                      t(
                        o("nextgendasherr").nextgendasherr(
                          e,
                          "VideoPlayerNextgendashPlaybackLoopSegmentBufferedInsufficiently",
                          "%s:%s - After finishing append of %s its media time range %s is missing from SourceBuffer: %s",
                          n.type,
                          (M = n.targetRepresentationId) != null
                            ? M
                            : "no_target_representation",
                          mt(y.appendInfo),
                          JSON.stringify($.mediaTimeRange),
                          JSON.stringify(v),
                        ),
                      ));
                  }
                  N.operationType === "append_operation" &&
                    N.appendInfo.appendInfoType === "data" &&
                    (S = N.appendInfo);
                  var w = babelHelpers.extends({}, y.operationTiming, {
                      ended: i,
                      started: i,
                    }),
                    A = l(w.started);
                  return (
                    A &&
                      A(
                        void 0,
                        o(
                          "VideoPlayerNextgendashQPL",
                        ).qplTimestampFromClockstamp(e, w.ended),
                      ),
                    babelHelpers.extends({}, N, {
                      debugSourceBufferRangesAfterFinish: void 0,
                      debugSourceBufferRangesAfterStart: void 0,
                      operationState: "succeeded",
                      operationTiming: w,
                    })
                  );
                }
                default:
                  throw (a.sourceBufferEventType, r());
              }
            }
            case "wait_updateend":
              switch (a.sourceBufferEventType) {
                case "_exception": {
                  var F = y.abortIsPendingUpdateEnd,
                    O = y.errorIsPendingUpdateEnd,
                    B = y.qplSubspanEnd,
                    W = babelHelpers.objectWithoutPropertiesLoose(y, c);
                  v = g();
                  var q =
                      "VideoPlayerNextgendashPlaybackLoopSourceBufferExceptionWhileAwaitingUpdateEnd" +
                      (F ? "AfterAbort" : ""),
                    U = O
                      ? o("nextgendasherr").nextgendasherrFromMultipleCauses(
                          e,
                          [
                            ["InitialError", O],
                            ["LaterError", a.exception],
                          ],
                          q,
                        )
                      : o("nextgendasherr").nextgendasherrFromCause(
                          e,
                          a.exception,
                          q,
                        ),
                    V = babelHelpers.extends({}, y.operationTiming, {
                      ended: i,
                    });
                  B &&
                    B(
                      o("VideoPlayerNextgendashQPL").qplAnnotationsForError(U),
                      o("VideoPlayerNextgendashQPL").qplTimestampFromClockstamp(
                        e,
                        V.ended,
                      ),
                    );
                  var G = babelHelpers.extends({}, W, {
                    error: U,
                    operationState: "errored",
                    operationTiming: V,
                    waitForMediaElementErrorUntilUnixMs: i.unixMs + ke,
                  });
                  if (G.operationType === "append_operation") {
                    var z = G.buffer,
                      j = babelHelpers.objectWithoutPropertiesLoose(G, d);
                    return babelHelpers.extends({}, j, {
                      buffer: z instanceof Uint8Array ? z : void 0,
                    });
                  }
                  return G;
                }
                case "_finished": {
                  var K, Q;
                  if (y.operationType !== "remove_operation")
                    throw r("NotRemoveOperation");
                  var X = y.abortIsPendingUpdateEnd,
                    Y = y.errorIsPendingUpdateEnd,
                    J = y.qplSubspanEnd,
                    Z = babelHelpers.objectWithoutPropertiesLoose(y, m);
                  v = g();
                  var ee = babelHelpers.extends({}, Z.operationTiming, {
                    ended: i,
                  });
                  return (
                    J &&
                      J(
                        void 0,
                        o(
                          "VideoPlayerNextgendashQPL",
                        ).qplTimestampFromClockstamp(e, ee.ended),
                      ),
                    babelHelpers.extends({}, Z, {
                      debugSourceBufferRangesAfterFinish: void 0,
                      debugSourceBufferRangesAfterStart: void 0,
                      operationState: "succeeded",
                      operationTiming: ee,
                    })
                  );
                }
                case "updateend": {
                  var te = y.abortIsPendingUpdateEnd,
                    ne = y.errorIsPendingUpdateEnd,
                    re = y.qplSubspanEnd,
                    oe = babelHelpers.objectWithoutPropertiesLoose(y, p),
                    ae =
                      oe.operationType === "append_operation" &&
                      oe.appendInfo.appendInfoType === "init" &&
                      e.config.isLivePlayback &&
                      n.type === "video" &&
                      n.targetRepresentationReason === "abr_switch_live_tail";
                  (te || ne || oe.operationType === "remove_operation" || ae) &&
                    (v = g());
                  var ie = babelHelpers.extends({}, y.operationTiming, {
                    ended: i,
                  });
                  if (ne) {
                    re &&
                      re(
                        o("VideoPlayerNextgendashQPL").qplAnnotationsForError(
                          ne,
                        ),
                        o(
                          "VideoPlayerNextgendashQPL",
                        ).qplTimestampFromClockstamp(e, ie.ended),
                      );
                    var le = babelHelpers.extends({}, oe, {
                      debugSourceBufferRangesAfterFinish: void 0,
                      error: ne,
                      operationState: "errored",
                      operationTiming: ie,
                      waitForMediaElementErrorUntilUnixMs: i.unixMs + ke,
                    });
                    if (le.operationType === "append_operation") {
                      var se = le.buffer,
                        ue = babelHelpers.objectWithoutPropertiesLoose(le, _);
                      return babelHelpers.extends({}, ue, {
                        buffer: se instanceof Uint8Array ? se : void 0,
                      });
                    }
                    return le;
                  }
                  var ce = oe.buffer,
                    de = babelHelpers.objectWithoutPropertiesLoose(oe, f);
                  if (te) {
                    var me = o("nextgendasherr").nextgendasherr(
                      e,
                      "VideoPlayerNextgendashPlaybackLoopSourceBufferOperationAborted",
                    );
                    return (
                      re &&
                        re(
                          o("VideoPlayerNextgendashQPL").qplAnnotationsForError(
                            me,
                          ),
                          o(
                            "VideoPlayerNextgendashQPL",
                          ).qplTimestampFromClockstamp(e, ie.ended),
                        ),
                      babelHelpers.extends({}, de, {
                        debugSourceBufferRangesAfterFinish: void 0,
                        operationState: "aborted",
                        operationTiming: ie,
                      })
                    );
                  }
                  return (
                    y.operationType === "append_operation" &&
                      y.appendInfo.appendInfoType === "data" &&
                      (S = y.appendInfo),
                    re &&
                      re(
                        void 0,
                        o(
                          "VideoPlayerNextgendashQPL",
                        ).qplTimestampFromClockstamp(e, ie.ended),
                      ),
                    babelHelpers.extends({}, de, {
                      debugSourceBufferRangesAfterFinish: void 0,
                      operationState: "succeeded",
                      operationTiming: ie,
                    })
                  );
                }
                case "error": {
                  if (y.errorIsPendingUpdateEnd) throw r("SecondErrorEvent");
                  if (y.abortIsPendingUpdateEnd) throw r("ErrorAfterAbort");
                  return babelHelpers.extends({}, y, {
                    errorIsPendingUpdateEnd: o("nextgendasherr").nextgendasherr(
                      e,
                      "VideoPlayerNextgendashPlaybackLoopSourceBufferErrorEvent",
                    ),
                  });
                }
                case "abort": {
                  if (y.abortIsPendingUpdateEnd) throw r("SecondAbortEvent");
                  if (y.errorIsPendingUpdateEnd) throw r("AbortAfterError");
                  return babelHelpers.extends({}, y, {
                    abortIsPendingUpdateEnd: !0,
                  });
                }
                default:
                  throw (a.sourceBufferEventType, r());
              }
            default:
              throw (y.operationState, r());
          }
        })(),
        L = C,
        E =
          R.operationState === "succeeded" ||
          R.operationState === "errored" ||
          R.operationState === "aborted",
        k = R !== y ? (E ? null : R) : h.currSourceBufferOperation,
        I = R !== y && E ? R : h.lastSourceBufferOperation;
      if (
        k !== h.currSourceBufferOperation ||
        I !== h.lastSourceBufferOperation
      ) {
        var T,
          D,
          x,
          $ =
            I != null && I.operationType === "append_operation"
              ? I
              : h.lastAppendOperation,
          P =
            I != null && I.operationType === "remove_operation"
              ? I
              : h.lastRemoveOperation,
          N = h.appendChain,
          M =
            I != null &&
            I.operationType === "append_operation" &&
            I.operationState === "succeeded"
              ? I.appendInfo.appendInfoType === "init"
                ? {
                    playheadMinimumTimeSec:
                      e.config.isLivePlayback &&
                      n.type === "video" &&
                      n.targetRepresentationReason === "abr_switch_live_tail" &&
                      v != null
                        ? oe(v, l)
                        : l,
                    representationId: I.appendInfo.representationId,
                  }
                : pt(I.appendInfo)
                  ? N != null &&
                    N.playheadMinimumTimeSec >
                      I.appendInfo.segment.mediaTimeRange[1] + b
                    ? {
                        playheadMinimumTimeSec: l,
                        representationId: I.appendInfo.representationId,
                      }
                    : N != null
                      ? I.appendInfo.segment.isPredictiveSegment === !0
                        ? N
                        : {
                            mediaTail: {
                              mediaTimeSec:
                                I.appendInfo.segment.mediaTimeRange[1],
                              segmentId: I.appendInfo.segment.segmentId,
                            },
                            playheadMinimumTimeSec: N.playheadMinimumTimeSec,
                            representationId: N.representationId,
                          }
                      : N
                  : N
              : N,
          w = St(
            h.sourceBufferRangesAnnotated,
            v,
            (T = S) == null ? void 0 : T.segment.mediaTimeRange,
            (D = S) == null ? void 0 : D.representationId,
            n.manifestRepresentationsCount,
          ),
          A =
            "" +
            y.operationType +
            (y.operationType === "append_operation"
              ? "/" + mt(y.appendInfo)
              : "") +
            ":" +
            y.operationState +
            "--" +
            a.sourceBufferEventType +
            (a.sourceBufferEventType === "_exception"
              ? "/" + a.exception.name
              : "") +
            "-->" +
            R.operationState +
            (R.operationState === "wait_updateend"
              ? (R.errorIsPendingUpdateEnd ? ",errorIsPendingUpdateEnd" : "") +
                (R.abortIsPendingUpdateEnd ? ",abortIsPendingUpdateEnd" : "")
              : R.operationState === "errored"
                ? ",waitForMediaElementError"
                : "") +
            (L != null ? ",SegmentBufferedInsufficiently" : ""),
          F =
            n.type +
            ":" +
            ((x = n.targetRepresentationId) != null
              ? x
              : "no_target_representation") +
            ":";
        (r.push(F + "handleSourceBufferEvent:" + A),
          $ !== h.lastAppendOperation &&
            r.push(
              F +
                "...:lastAppendOperation:" +
                ($ != null ? mt($.appendInfo) : "null"),
            ),
          P !== h.lastRemoveOperation &&
            r.push(
              F +
                "...:lastRemoveOperation:" +
                (P != null
                  ? o(
                      "VideoPlayerNextgendashMediaUtils",
                    ).debugStringifyTimeRange(P.removeRange)
                  : "null"),
            ),
          M !== N && r.push(F + "...:appendChain:" + _t(N) + "-->" + _t(M)));
        var O =
          L != null
            ? nt(h.workaroundForSegmentBufferedInsufficiently, L)
            : h.workaroundForSegmentBufferedInsufficiently;
        if (
          E &&
          R.operationType === "append_operation" &&
          R.appendInfo.appendInfoType === "data" &&
          (R.appendInfo.dataByteRangeLength === 0 ||
            R.operationState !== "succeeded")
        ) {
          var B = R.appendInfo;
          O.some(function (e) {
            var t;
            return (
              ((t = e.nativeSeekRetry) == null ? void 0 : t.pending) === !0 &&
              e.representationId === B.representationId &&
              je(e.segment, B.segment)
            );
          }) &&
            (O = O.map(function (e) {
              var t = e.nativeSeekRetry;
              return t != null &&
                t.pending &&
                e.representationId === B.representationId &&
                je(e.segment, B.segment)
                ? babelHelpers.extends({}, e, {
                    nativeSeekRetry: babelHelpers.extends({}, t, {
                      pending: !1,
                    }),
                  })
                : e;
            }));
        }
        return {
          appendState: o(
            "VideoPlayerNextgendashStateMachine",
          ).skipAutoDisposeInsideThisObject(
            babelHelpers.extends({}, h, {
              appendChain: M,
              currSourceBufferOperation: k,
              lastAppendOperation: $,
              lastRemoveOperation: P,
              lastSourceBufferOperation: I,
              sourceBufferRanges: v != null ? v : h.sourceBufferRanges,
              sourceBufferRangesAnnotated:
                w != null ? w : h.sourceBufferRangesAnnotated,
              workaroundForSegmentBufferedInsufficiently: O,
            }),
          ),
        };
      }
      return null;
    }
    function St(e, t, n, r, o) {
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
    function Rt(e) {
      var t = new Map();
      for (var n of e) {
        var r = o(
          "VideoPlayerNextgendashManifestParser",
        ).getDisplayLabelFromVideoRepresentation(n);
        t.has(r) || t.set(r, n);
      }
      return Array.from(t.values());
    }
    function Lt(e, t, n) {
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
    function Et(e, t) {
      var n = Lt(e, t.videoLang, t.videoRole),
        r = n.debugFallbacksTried,
        o = n.filteredRepresentations;
      return { debugFallbacksTried: r, representationsByVariant: Rt(o) };
    }
    function kt(e, t) {
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
    function It(e, t) {
      var n = Lt(e, t.audioLang, t.audioRole),
        r = n.debugFallbacksTried,
        o = n.filteredRepresentations;
      return { debugFallbacksTried: r, representationsByVariant: o };
    }
    function Tt(e, t, n) {
      if (!(!e.config.qplEnabled || n.outcome === "no_candidates")) {
        var r = "smart_player_static_capability_filter:" + n.outcome;
        t.has(r) ||
          (t.set(r, 1),
          o("VideoPlayerNextgendashQPL")
            .qplStartPlayingApi(e)
            .point("smart_player_static_capability_filter_" + n.outcome, {
              int: {
                candidateCount: n.candidateCount,
                matchedCount: n.matchedCount,
                retainedCount: n.representations.length,
              },
              string: { outcome: n.outcome },
            }));
      }
    }
    function Dt(e, t, n, a, i, l, s, u, c, d, m, p, _, f, g, h, y, b, v, S) {
      var R,
        L = e.config.enableSmartPlayerStaticCapabilityFiltering,
        E = l,
        k = s;
      if (L) {
        E = o(
          "VideoPlayerNextgendashDecodeCapabilityMatcher",
        ).filterVideoPlayerNextgendashRepresentationsByDecodeCapabilitiesWithResult(
          e.config.smartPlayerVideoDecodeCapabilities,
          l,
        ).representations;
        var I = o(
          "VideoPlayerNextgendashDecodeCapabilityMatcher",
        ).filterVideoPlayerNextgendashRepresentationsByDecodeCapabilitiesWithResult(
          e.config.smartPlayerVideoDecodeCapabilities,
          s,
        );
        ((k = I.representations), Tt(e, n, I));
      }
      var T =
          (R = l.find(function (e) {
            return e.representationId === c;
          })) != null
            ? R
            : null,
        D,
        x = T != null && E.includes(T) ? T : null,
        $ = g,
        P = h,
        N = y,
        M = p != null ? p : V,
        w = Et(k, M),
        A = w.debugFallbacksTried,
        F = w.representationsByVariant,
        O = C(
          e,
          F.map(function (e) {
            return e.representationId;
          }),
        ),
        B = kt(F, _);
      if (
        (A.length > 0 &&
          !A.every(function (e) {
            return e.startsWith("lang#0+sameRole;null+null-->");
          })) ||
        B.length === 0
      ) {
        var W,
          q = [
            "video",
            k.length,
            M.videoLang,
            M.videoRole,
            M.audioLang,
            M.audioRole,
            _,
          ].join(":"),
          U = 1 + ((W = n.get(q)) != null ? W : 0);
        if ((n.set(q, U), U === 1)) {
          var H = ht(l),
            G = ht(k),
            z = ht(F),
            j = ht(B);
          t(
            o("nextgendasherr").nextgendasherr(
              e,
              B.length === 0
                ? "VideoPlayerNextgendashPlaybackLoopRepresentationAllFiltered[video]"
                : "VideoPlayerNextgendashPlaybackLoopRepresentationFallback[video]",
              "%s:%s - No representations for variant, " +
                (B.length === 0 ? "all filtered" : "fallback applied") +
                ". %s %s %s %s %s %s %s %s",
              "video",
              c != null ? c : "no_target_representation",
              "selectedVariant=" + JSON.stringify(p),
              "targetVariant=" + (M === p ? "same" : JSON.stringify(M)),
              "manifestRepresentations=" + H,
              "playableRepresentations=" + (G === H ? "same" : G),
              "blockedRepresentations=" + ft(u),
              "targetVariantRepresentations=" + z,
              "filteredRepresentations=" + (j === z ? "same" : j),
              "fallbacksTried=" + A.join(";"),
            ),
          );
        }
      }
      var K = d != null ? d : V,
        Q = xt(p, M, K, _, m);
      if (B.length > 0) {
        var X = null;
        if (g == null && f != null) {
          var Y = B.filter(function (e) {
            var t;
            return (t = f.prefetchedRepresentationIds.includes(
              e.representationId,
            )) != null
              ? t
              : !1;
          });
          if (Y.length > 0) {
            var J = Y[0];
            (($ = C(e, {
              bestRepresentationId: J.representationId,
              bestRepresentationIsPrefetched: !0,
              hasMadeInitialDecision: !1,
              lastEvaluationReason: null,
            })),
              (P =
                e.config.mediaSinkType === "WEBCODECS"
                  ? a
                  : f.prefetchStartedAt),
              (X = J),
              (x = J),
              (D = "prefetch"));
          }
        } else {
          var Z;
          X =
            (Z = B.find(function (e) {
              return (
                e.representationId ===
                (g == null ? void 0 : g.bestRepresentationId)
              );
            })) != null
              ? Z
              : null;
        }
        var ee = 5e3,
          te = 1e3,
          ne = 5e3,
          re = e.config.enableSplitAbrEvalSwitchIntervals,
          oe = re ? te : ee,
          ae = ne,
          ie =
            h != null &&
            o(
              "VideoPlayerNextgendashHostAPI",
            ).diffVideoPlayerNextgendashClockstamp(a, h).unixMs > oe,
          se =
            !re ||
            y == null ||
            o(
              "VideoPlayerNextgendashHostAPI",
            ).diffVideoPlayerNextgendashClockstamp(a, y).unixMs > ae,
          ue = Q || x == null || X == null || (ie && se);
        if (ue) {
          var ce,
            de = i(e, B, g),
            me = de.bestRepresentation,
            pe = !r("deepEquals")(de.nextABRState, g);
          if (
            (pe && ($ = C(e, de.nextABRState)),
            (re || pe || e.config.enableStableAbrEvaluationCooldown) &&
              (P = e.host.clock()),
            me != null &&
              me.representationId !==
                ((ce = x) == null ? void 0 : ce.representationId))
          ) {
            var _e = !Q && x != null && me.bandwidth > x.bandwidth,
              fe = b && _e,
              ge = !fe || le(me, S, v);
            ge
              ? ((x = me),
                re && (N = e.host.clock()),
                Q
                  ? (D = "selected_switch")
                  : fe
                    ? (D = "abr_switch_live_tail")
                    : (D = "abr_switch"))
              : x != null
                ? (D = "abr_keep")
                : (D = "null_no_representation_from_abr");
          } else
            x != null
              ? Q
                ? (D = "selected_keep")
                : (D = "abr_keep")
              : Q
                ? (D = "selected_keep")
                : x != null
                  ? (D = "keep_prev_no_representation_from_abr")
                  : (D = "null_no_representation_from_abr");
        } else D == null && (D = "abr_skip");
      } else
        x != null
          ? (D = "keep_prev")
          : l.length > 0
            ? (D = "null_no_representations_for_variant")
            : (D = "null_no_representations_in_manifest");
      return {
        prevTargetRepresentation: T,
        targetRepresentation: x,
        targetRepresentationReason: D,
        targetVariantRepresentationIds: O,
        videoABRState: $,
        videoABRStateClock: P,
        videoABRSwitchClock: N,
      };
    }
    function xt(e, t, n, r, o) {
      return (
        (e != null &&
          (t.videoLang !== n.videoLang || t.videoRole !== n.videoRole)) ||
        (r != null && r !== o)
      );
    }
    function $t(e, t, n) {
      return (
        e != null &&
        (t.audioLang !== n.audioLang || t.audioRole !== n.audioRole)
      );
    }
    function Pt(e, t, n, r, a, i, l, s, u) {
      var c,
        d =
          (c = r.find(function (e) {
            return e.representationId === l;
          })) != null
            ? c
            : null,
        m,
        p = d,
        _ = u != null ? u : V,
        f = It(a, _),
        g = f.debugFallbacksTried,
        h = f.representationsByVariant,
        y = C(
          e,
          h.map(function (e) {
            return e.representationId;
          }),
        ),
        b = h;
      if (
        (g.length > 0 &&
          !g.every(function (e) {
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
          var L = yt(r),
            E = yt(a),
            k = yt(h),
            I = yt(b);
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
              "blockedRepresentations=" + ft(i),
              "targetVariantRepresentations=" + k,
              "filteredRepresentations=" + (I === k ? "same" : I),
              "fallbacksTried=" + g.join(";"),
            ),
          );
        }
      }
      var T = s != null ? s : V,
        D = $t(u, _, T);
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
        targetVariantRepresentationIds: y,
      };
    }
    function Nt(e, t, n, r, a, i, l, s, u, c) {
      var d = u,
        m,
        p,
        _,
        f;
      if (d.type === "video") {
        var g,
          h,
          y,
          b = q(e, a.mediaElementSnapshot),
          v = Dt(
            e,
            t,
            n,
            r,
            function (t, n, r) {
              var i,
                u,
                c =
                  t.config.mediaSinkType === "WEBCODECS"
                    ? o(
                        "VideoPlayerNextgendashWebCodecsDimensions",
                      ).filterVideoPlayerNextgendashWebCodecsRepresentations(n)
                    : n;
              return o(
                "VideoPlayerNextgendashABR",
              ).evaluateVideoPlayerNextgendashABRForVideo(c, {
                abrConfig: a.abrConfig,
                bandwidthDiagnostics: e.host.networkDiagnosticsReadBandwidth(
                  e.config.enableBandwidthDiagnosticsFallback,
                  e.config.bandwidthDiagnosticsFallbackDefaultEstimate,
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
          (f = v.targetVariantRepresentationIds),
          (g = v.videoABRState),
          (h = v.videoABRStateClock),
          (y = v.videoABRSwitchClock),
          g !== d.videoABRState ||
            h !== d.videoABRStateClock ||
            y !== d.videoABRSwitchClock)
        ) {
          var S, R, L, E, k, I, T, D;
          (c.push(
            d.type +
              ":" +
              ((S = d.targetRepresentationId) != null
                ? S
                : "no_target_representation") +
              ":videoABRState:" +
              (((R = g) == null ? void 0 : R.bestRepresentationId) !==
              ((L = d.videoABRState) == null ? void 0 : L.bestRepresentationId)
                ? (E = (k = g) == null ? void 0 : k.bestRepresentationId) !=
                  null
                  ? E
                  : "no_best_representation"
                : "best_representation_unchanged") +
              (((I = g) == null ? void 0 : I.bestRepresentationIsPrefetched) ===
              !0
                ? "(prefetched)"
                : "") +
              ":" +
              ((T = (D = g) == null ? void 0 : D.lastEvaluationReason) != null
                ? T
                : "?"),
          ),
            (d = babelHelpers.extends({}, d, {
              videoABRState: g,
              videoABRStateClock: h,
              videoABRSwitchClock: y,
            })));
        }
      } else if (d.type === "audio") {
        var x = Pt(
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
          (f = x.targetVariantRepresentationIds));
      } else {
        var $, P;
        (d.type,
          (p = "unexpected_stream_type"),
          (f = C(
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
            "blockedRepresentations=" + ft(d.blockedRepresentations),
          )
        );
      }
      return {
        prevTargetRepresentation: m,
        stream: Mt(
          e,
          d,
          c,
          m,
          _,
          p,
          f,
          a.selectedMediaVariant,
          a.selectedVideoQualityDisplayLabel,
        ),
        targetRepresentation: _,
        targetRepresentationReason: p,
      };
    }
    function Mt(e, t, n, r, a, i, l, s, u) {
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
    function wt(e, t, n) {
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
    function At(e, t) {
      return (
        wt(e, t.mediaTimeRange, 0.05) ||
        (t.isEndingSegment && wt(e, t.mediaTimeRange, 0.05))
      );
    }
    function Ft(e, t, n, r) {
      return e == null || t !== e.representationId || e.mediaTail == null
        ? !1
        : r
          ? n.mediaTimeRange[1] <= e.mediaTail.mediaTimeSec + x
          : n.segmentId <= e.mediaTail.segmentId;
    }
    function Ot(e, t) {
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
    function Bt(e, t, n) {
      if (n <= 0 || t == null || e.length <= 1) return e;
      for (
        var r = t - n, o = 0;
        o < e.length - 1 && e[o].mediaTimeRange[1] <= r;
      )
        o++;
      return o === 0 ? e : e.slice(o);
    }
    function Wt(e) {
      var t = e.segmentTimeline,
        n = e.timescale;
      if (t.length === 0) return null;
      var r = t[t.length - 1];
      return (r.t + (r.r + 1) * r.d) / n;
    }
    function qt(e, t, n, r, o) {
      return e.mediaTimeRange[1] > o + x
        ? !1
        : e.isPredictiveSegment === !0
          ? !0
          : n &&
            t.endNumber != null &&
            r != null &&
            e.mediaTimeRange[1] >= r - x;
    }
    function Ut(e, t, n) {
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
    function Vt(e, t, n, r, a) {
      var i = a ? Ht(r) : r,
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
    function Ht(e) {
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
    function Gt(e, t, n, r, a, i, l, s) {
      if (r.mediaTail == null) return r;
      var u = r.playheadMinimumTimeSec,
        c = r.mediaTail.mediaTimeSec;
      if (u > c + b)
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashPlaybackLoopIncoherentAppendChain",
          "%s:%s - appendChain.playheadMinimumTimeSec %ss > appendChain.mediaTail.mediaTimeSec %ss",
          t,
          n,
          u,
          c,
        );
      if (!o("VideoPlayerNextgendashMediaUtils").isWithinRange([u, c + b], a)) {
        if (
          e.config.isLivePlayback &&
          (ae(i, a, u) ||
            (e.config.liveAppendChainForwardCoveredEscapeEnabled &&
              ie(i, a, c)))
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
              _t(r) +
              "-->" +
              _t(d) +
              "(playhead_outside)",
          ),
          d
        );
      }
      if (Math.abs(c - u) > b) {
        var m = [u, Math.max(a, c - b)];
        if (i === void 0 || !wt(i, m, 0)) {
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
                _t(r) +
                "-->" +
                _t(p) +
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
                bt(e.host.mediaSourceCollectSnapshot(e, l)) +
                ")",
            ),
            p
          );
        }
      }
      return r;
    }
    function zt(e, t, n) {
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
    function jt(e, t) {
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
    function Kt(e, t, n, r, a) {
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
          p = gt(u),
          _ = gt(c),
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
            "blockedRepresentations=" + ft(n.blockedRepresentations),
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
    function Qt(e, t, n, r, a, i, l) {
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
                "blockedRepresentations=" + ft(r.blockedRepresentations),
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
        Kt(
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
    function Xt(e, t, n, r, a, i, l) {
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
          var b = vt(
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
              return Ct(e, d);
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
            var v = vt(
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
                return Ct(e, d);
              },
            );
            v != null && (y = babelHelpers.extends({}, y, v));
          }
        }
        if (C != null) {
          var S = vt(
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
              return Ct(e, d);
            },
          );
          S != null && (y = babelHelpers.extends({}, y, S));
        }
        return y;
      }
      return null;
    }
    function Yt(e, t, n, r, a, i, l) {
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
              mt(d.appendInfo),
          ),
          h.appendInfoType === "data" && h.dataByteRangeLength === 0)
        ) {
          var b = vt(
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
              return Ct(e, m);
            },
          );
          b != null && (C = babelHelpers.extends({}, C, b));
        } else {
          var v;
          try {
            var S = vt(
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
                return Ct(e, m);
              },
            );
            (S != null && (C = babelHelpers.extends({}, C, S)),
              h.appendInfoType === "init" &&
                (r.push(
                  n.type +
                    ":" +
                    p +
                    ":abort:MSEbefore=" +
                    bt(e.host.mediaSourceCollectSnapshot(e, l)),
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
                  bt(e.host.mediaSourceCollectSnapshot(e, l)),
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
                  bt(e.host.mediaSourceCollectSnapshot(e, l)),
              ));
            var T = {
              mimeCodecsParsed: h.mimeCodecsParsed,
              representationId: h.representationId,
              type: n.type,
            };
            if (d.buffer instanceof Uint8Array)
              e.host.sourceBufferAppendBuffer(
                e,
                l,
                m.sourceBuffer,
                d.buffer,
                T,
              );
            else {
              var D = e.host.sourceBufferAppendNativeBody;
              if (D == null)
                throw o("nextgendasherr").nextgendasherr(
                  e,
                  "VideoPlayerNextgendashPlaybackLoopNativeAppendUnavailable",
                );
              D(e, l, m.sourceBuffer, d.buffer, T);
            }
            h.appendInfoType === "init" &&
              d.buffer instanceof Uint8Array &&
              e.config.reopenEndedMediaSourceOnRepresentationSwitch &&
              ((m = babelHelpers.extends({}, m, {
                lastAppendedInitBuffer: d.buffer,
              })),
              (C = babelHelpers.extends({}, C, { sourceBufferState: m })));
          } catch (a) {
            var x =
              e.config.enableQuotaExceededRecovery &&
              a instanceof Error &&
              (a.name === N ||
                (e.config.enableQuotaExceededRecoveryForCompositeErrors &&
                  M.test(a.name)));
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
                w = [0, Math.max(0, i)];
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
                            removeRange: w,
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
            var A = vt(
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
                return Ct(e, m);
              },
            );
            A != null && (C = babelHelpers.extends({}, C, A));
          }
        }
        return C;
      }
      return null;
    }
    ((l.internal_getMediaErrorRecoveryAttemptsCap = B),
      (l.internal_predictPlayhead = W),
      (l.internal_getPlayheadTimeSec = q),
      (l.originalMediaVariant = V),
      (l.internal_isSourceBufferOperationTimedOut = z),
      (l.VideoPlayerNextgendashPlaybackLoopSM = K),
      (l.internal_substituteParamsInSegmentURLTemplate = Q),
      (l.internal_prioritizeFetchDemands = X),
      (l.internal_evictFetchDemandsByFetchState = J),
      (l.internal_getNoMediaElementBufferAheadTargetSec = re),
      (l.internal_getLiveABRTailSwitchAnchorTimeSec = oe),
      (l.internal_isLiveAppendChainAheadOfPlayheadCoveredByBuffer = ae),
      (l.internal_isPlayheadCoveredByBufferAheadOfAppendChainTail = ie),
      (l.internal_canLiveABRTailSwitchAppendAtBufferedTail = le),
      (l.internal_computeABRVolatility = ue),
      (l.internal_computeNetworkVolatility = ce),
      (l.internal_updateBandwidthVolatilitySamples = de),
      (l.internal_computeBandwidthTrend = me),
      (l.internal_evaluateSidxPrefetchTarget = pe),
      (l.internal_startFetchRequestsForFetchDemands = _e),
      (l.internal_fulfillFetchDemands = fe),
      (l.internal_clampObserveAndActDelayMs = ye),
      (l.internal_coalesceAdjacentDebugLogLines = Se),
      (l.internal_getEndOfStreamCheckpointSec = Le),
      (l.internal_groupSegmentsToFetch = Be),
      (l.internal_makeSegmentFetchKeyIdPart = ze),
      (l.internal_isSameSegmentIdentity = je),
      (l.internal_isEmptyCompletePredictiveSegmentFetch = Ke),
      (l.internal_getConfirmedSidxLiveEdgeTimeSec = Qe),
      (l.internal_getStreamDrainedConfirmedTailEndSec = Xe),
      (l.internal_updateLiveEndedByStallState = Ye),
      (l.internal_getBufferedAheadSecForPlayhead = Je),
      (l.internal_getBackBufferRemoveEndSec = Ze),
      (l.internal_shouldRefetchAtLiveEdge = et),
      (l.internal_computePairedRefetchAnchorSec = tt),
      (l.internal_addBoundedWorkaroundForSegmentBufferedInsufficiently = nt),
      (l.makeSegmentFetchDataKey = rt),
      (l.internal_makeGroupOfSegmentsFetchDemand = at),
      (l.findDataForDataKey = it),
      (l.debugPrepareFetchDemands = ut),
      (l.internal_handleSourceBufferEvent = vt),
      (l.internal_updateSourceBufferRangesAnnotated = St),
      (l.internal_filterVideoRepresentationsByVariant = Et),
      (l.internal_filterAudioRepresentationsByVariant = It),
      (l.internal_selectTargetVideoRepresentation = Dt),
      (l.internal_selectTargetAudioRepresentation = Pt),
      (l.internal_checkRangeBufferedWithoutGap = wt),
      (l.internal_isSegmentBeforeAppendAnchor = Ft),
      (l.internal_makeSidxFromSegmentTemplate = Ot),
      (l.internal_trimSidxToLiveLookbackBuffer = Bt),
      (l.internal_getSegmentTemplateLiveEdgeMediaTimeSec = Wt),
      (l.internal_canExtendPredictiveChainFromTail = qt),
      (l.internal_addPredictiveSegmentsToSidx = Ut),
      (l.internal_validateAndNormalizeSidx = Vt),
      (l.internal_selectDataChunksToAppend = zt),
      (l.internal_combineDataChunksIntoContiguousBuffer = jt),
      (l.internal_blockRepresentationInStream = Qt),
      (l.internal_startPendingRemoveOperation = Xt),
      (l.internal_startPendingAppendOperation = Yt));
  },
  98,
);
