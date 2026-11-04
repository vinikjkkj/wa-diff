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
      E = 1,
      k = 3,
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
      F = 6e4,
      O = 1,
      B = 3;
    function W(e, t) {
      return (e == null ? void 0 : e.code) === B && t ? O : A;
    }
    function q(e, t, n) {
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
    function U(e, t) {
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
          ? q(
              t,
              e.host.clockPerfOriginMs + e.host.clock().perfMs,
              e.config.playheadPredictIntervalMs / 1e3,
            )
          : r;
    }
    function V(e, t) {
      if (t != null && e.poolTrackingID != null) {
        var n;
        return (n = t.getFetchState(e.poolTrackingID)) != null
          ? n
          : { state: "submitted_to_pool" };
      } else if (e.responseFetch != null) return e.responseFetch.state;
      return null;
    }
    var H = {
      audioLang: null,
      audioRole: null,
      videoLang: null,
      videoRole: null,
    };
    function G(e) {
      return e.byteLength;
    }
    function z(e) {
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
    function j(e) {
      var t = e.attempt,
        n = e.attemptStartedClock,
        r = e.eventClock,
        a = e.isLivePlayback,
        i = e.isRecovering;
      return (
        a &&
        !i &&
        t > 0 &&
        n != null &&
        o("VideoPlayerNextgendashHostAPI").diffVideoPlayerNextgendashClockstamp(
          r,
          n,
        ).perfMs >= F
      );
    }
    function K(e, t, n) {
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
    function Q(e, t) {
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
    function X(e, t) {
      return function (n, r, o) {
        e({ requestID: t, type: "_fetch_transitioned" }, o);
      };
    }
    var Y = o("VideoPlayerNextgendashStateMachine").defineStateMachine(
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
              loopReasons: we(i, 0, h, "0:initial"),
              loopScheduledToUnixMs: l.unixMs,
              loopTimerDelayMs: null,
              loopTimerID: null,
            }),
            mediaSourceState: Pe(i, s, a, null, r.dashManifestData),
            playerStateFromMain: r,
            playerWarningDedupMap: C(i, new Map()),
            recoveringFromMediaError: null,
            recoveringFromMediaErrorAttempt: 0,
            recoveringFromMediaErrorAttemptStartedClock: null,
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
        return (t = Fe(i, u, u.loopState.loopIteration, e)) != null ? t : u;
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
          var p = Pe(
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
              debugPlaybackLoopRecentChanges: Me(
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
              recoveringFromMediaErrorAttemptStartedClock: i.host.clock(),
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
                return Se(i, t, l.type + ":" + l.requestID, 0, c);
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
                  ($e(i, y),
                  i.config.mediaSinkType === "HYBRID" &&
                    c.playerStateFromMain.dashManifestData == null &&
                    y != null &&
                    (c.mediaSourceState.mediaSourceCleanup(),
                    (h = babelHelpers.extends({}, h, {
                      mediaSourceState: Pe(
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
                    v,
                    S = [],
                    R =
                      (y == null ? void 0 : y.metadata.manifestType) ===
                      "dynamic",
                    L =
                      i.config.isLivePlayback &&
                      i.config.enableLive &&
                      (y == null ? void 0 : y.metadata.manifestType) ===
                        "static" &&
                      ((C = c.playerStateFromMain.dashManifestData) == null
                        ? void 0
                        : C.metadata.manifestType) === "dynamic",
                    E =
                      (b =
                        (v = h.playerStateFromMain.mediaElementSnapshot) == null
                          ? void 0
                          : v.currentTime) != null
                        ? b
                        : null;
                  ((h = babelHelpers.extends({}, h, {
                    streams: h.streams.map(function (e) {
                      var t = tn(i, S, e, y);
                      if (R || L) {
                        var n = {};
                        for (var r of t.playableRepresentations)
                          if (r.segmentsInfo.type === "SegmentTemplate") {
                            var a = r.segmentsInfo,
                              l = i.config.enableLive
                                ? a.segmentTimelinePredictive
                                : null,
                              s = Ut(a, !0),
                              u = Xt(i, t.type, r.representationId, s, !0),
                              c = t.sidxByRepresentationId[r.representationId],
                              d = Vt(c != null ? c : [], u);
                            if (L) {
                              n[r.representationId] = Ht(
                                d.type === "merged"
                                  ? d.sidx
                                  : c != null
                                    ? c
                                    : [],
                              );
                              continue;
                            }
                            if (d.type === "timeline_reset")
                              throw o("nextgendasherr").nextgendasherr(
                                i,
                                "VideoPlayerNextgendashPlaybackLoopLiveTimelineReset",
                                "%s:%s - refreshed timeline ends at %s, before the indexed window starts at %s",
                                t.type,
                                r.representationId,
                                d.freshEndSec,
                                d.existingStartSec,
                              );
                            var m = d.sidx;
                            ((m = Gt(m, E, i.config.liveLookbackBufferSec)),
                              (n[r.representationId] =
                                l != null ? Qt(l, m, a.timescale) : m));
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
                      debugPlaybackLoopRecentChanges: Me(
                        h.debugPlaybackLoopRecentChanges,
                        S,
                      ),
                    })));
                }
                var k = (_ = g.mediaElementSnapshot) == null ? void 0 : _.error,
                  I = W(k, i.config.fatalErrorOnMediaErrorRecoveryCapReached);
                if (
                  k != null &&
                  !h.recoveringFromMediaError &&
                  h.recoveringFromMediaErrorAttempt < I
                )
                  h = m(
                    h,
                    o("nextgendasherr").nextgendasherrFromMediaError(i, k),
                  );
                else if (
                  h.recoveringFromMediaError &&
                  g.mediaElementSnapshot != null &&
                  g.mediaElementSnapshot.error == null &&
                  g.mediaSourceIndexApplied ===
                    h.mediaSourceState.mediaSourceIndex
                ) {
                  var T = h,
                    D = T.recoveringFromMediaError;
                  (a(
                    o("nextgendasherr").nextgendasherrFromCause(
                      i,
                      D,
                      "VideoPlayerNextgendashPlaybackLoopRecoveredFromMediaError",
                    ),
                  ),
                    (h = babelHelpers.extends({}, h, {
                      debugPlaybackLoopRecentChanges: Me(
                        h.debugPlaybackLoopRecentChanges,
                        ["recoveringFromMediaError:" + D.name + ":recovered"],
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
                  k != null &&
                  !h.recoveringFromMediaError &&
                  h.recoveringFromMediaErrorAttempt >= I &&
                  i.config.fatalErrorOnMediaErrorRecoveryCapReached
                )
                  return (
                    u({
                      exception: o("nextgendasherr").nextgendasherrFromCause(
                        i,
                        o("nextgendasherr").nextgendasherrFromMediaError(i, k),
                        "VideoPlayerNextgendashPlaybackLoopMediaErrorRecoveryAttemptsExhausted",
                        "Reached media error recovery attempt cap (%s) with media element still in error",
                        I,
                      ),
                      type: "__exception",
                    }),
                    h
                  );
                return (f = Se(i, t, l.type + ":" + l.reason, 0, h)) != null
                  ? f
                  : h;
              }
              case "notify_deliberate_detach_for_unmount": {
                var x,
                  $ = c,
                  P =
                    "DeliberateDetachForUnmount:" +
                    l.mediaSourceIndex +
                    ":" +
                    $.mediaSourceState.mediaSourceIndex;
                return (
                  l.mediaSourceIndex === $.mediaSourceState.mediaSourceIndex
                    ? ($ = babelHelpers.extends({}, $, {
                        debugPlaybackLoopRecentChanges: Me(
                          $.debugPlaybackLoopRecentChanges,
                          [P + "->expectSourceClose"],
                        ),
                        expectSourceCloseForMediaSourceIndex:
                          l.mediaSourceIndex,
                      }))
                    : ($ = babelHelpers.extends({}, $, {
                        debugPlaybackLoopRecentChanges: Me(
                          $.debugPlaybackLoopRecentChanges,
                          [P + "->mediaSourceIndexMismatch"],
                        ),
                      })),
                  (x = Se(i, t, "" + l.type, 0, $)) != null ? x : $
                );
              }
              case "request_recovery_from_source_reset": {
                var N,
                  M = c,
                  w =
                    "SourceResetRecoveryRequest:" +
                    l.mediaSourceIndex +
                    ":" +
                    M.mediaSourceState.mediaSourceIndex;
                if (l.mediaSourceIndex !== M.mediaSourceState.mediaSourceIndex)
                  M = babelHelpers.extends({}, M, {
                    debugPlaybackLoopRecentChanges: Me(
                      M.debugPlaybackLoopRecentChanges,
                      [w + "->mediaSourceIndexMismatch"],
                    ),
                  });
                else if (
                  !M.recoveringFromMediaError &&
                  M.recoveringFromMediaErrorAttempt < A
                )
                  M = m(
                    babelHelpers.extends({}, M, {
                      debugPlaybackLoopRecentChanges: Me(
                        M.debugPlaybackLoopRecentChanges,
                        [w + "->beginErrorRecoveryDueToElementSourceReset"],
                      ),
                    }),
                    o("nextgendasherr").nextgendasherr(
                      i,
                      "VideoPlayerNextgendashPlaybackLoopElementSourceResetAsError",
                    ),
                  );
                else {
                  var F = [];
                  (M.recoveringFromMediaError &&
                    F.push("StillAttemptingPreviousRecovery"),
                    M.recoveringFromMediaErrorAttempt >= A &&
                      F.push("ReachedRetryCap"),
                    (M = babelHelpers.extends({}, M, {
                      debugPlaybackLoopRecentChanges: Me(
                        M.debugPlaybackLoopRecentChanges,
                        [w + "->" + F.join(":")],
                      ),
                    })));
                }
                return (N = Se(i, t, "" + l.type, 0, M)) != null ? N : M;
              }
              case "_media_source_event": {
                var O,
                  B = c,
                  q =
                    "mediaSourceEvent:" +
                    l.mediaSourceIndex +
                    ":" +
                    l.mediaSourceEventType;
                if (
                  l.mediaSource !== B.mediaSourceState.mediaSource ||
                  l.mediaSourceIndex !== B.mediaSourceState.mediaSourceIndex
                )
                  B = babelHelpers.extends(
                    {},
                    B,
                    {
                      debugPlaybackLoopRecentChanges: Me(
                        B.debugPlaybackLoopRecentChanges,
                        [
                          q +
                            "->mediaSourceMismatch:" +
                            B.mediaSourceState.mediaSourceIndex,
                        ],
                      ),
                    },
                    l.mediaSourceEventType === "sourceclose" &&
                      B.expectSourceCloseForMediaSourceIndex ===
                        l.mediaSourceIndex
                      ? { expectSourceCloseForMediaSourceIndex: null }
                      : null,
                  );
                else if (
                  B.mediaSourceState.waitingForFirstSourceopen &&
                  l.mediaSourceEventType === "sourceopen"
                )
                  B = babelHelpers.extends({}, B, {
                    debugPlaybackLoopRecentChanges: Me(
                      B.debugPlaybackLoopRecentChanges,
                      [q + "->first"],
                    ),
                    expectSourceCloseForMediaSourceIndex: null,
                    mediaSourceState: babelHelpers.extends(
                      {},
                      B.mediaSourceState,
                      { waitingForFirstSourceopen: !1 },
                    ),
                  });
                else if (l.mediaSourceEventType === "sourceclose")
                  if (
                    B.expectSourceCloseForMediaSourceIndex != null &&
                    B.expectSourceCloseForMediaSourceIndex ===
                      l.mediaSourceIndex
                  )
                    B = babelHelpers.extends({}, B, {
                      debugPlaybackLoopRecentChanges: Me(
                        B.debugPlaybackLoopRecentChanges,
                        [q + "->expectedDetachForUnmount"],
                      ),
                      expectSourceCloseForMediaSourceIndex: null,
                    });
                  else if (
                    !B.recoveringFromMediaError &&
                    B.recoveringFromMediaErrorAttempt < A
                  )
                    B = m(
                      babelHelpers.extends({}, B, {
                        debugPlaybackLoopRecentChanges: Me(
                          B.debugPlaybackLoopRecentChanges,
                          [q + "->beginErrorRecoveryBeforeSeeingMediaError"],
                        ),
                      }),
                      o("nextgendasherr").nextgendasherr(
                        i,
                        "VideoPlayerNextgendashPlaybackLoopSourceCloseEventAsError",
                      ),
                    );
                  else {
                    var U = [];
                    if (
                      (B.recoveringFromMediaError &&
                        U.push("StillAttemptingPreviousRecovery"),
                      B.recoveringFromMediaErrorAttempt >= A &&
                        U.push("ReachedRetryCap"),
                      (B = babelHelpers.extends({}, B, {
                        debugPlaybackLoopRecentChanges: Me(
                          B.debugPlaybackLoopRecentChanges,
                          [q + "->" + U.join(":")],
                        ),
                      })),
                      !B.recoveringFromMediaError &&
                        B.recoveringFromMediaErrorAttempt >= A &&
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
                        B
                      );
                  }
                else
                  B = babelHelpers.extends(
                    {},
                    B,
                    {
                      debugPlaybackLoopRecentChanges: Me(
                        B.debugPlaybackLoopRecentChanges,
                        [q],
                      ),
                    },
                    l.mediaSourceEventType === "sourceopen"
                      ? { expectSourceCloseForMediaSourceIndex: null }
                      : null,
                  );
                return (O = Se(
                  i,
                  t,
                  l.type + ":" + l.mediaSourceEventType,
                  0,
                  B,
                )) != null
                  ? O
                  : B;
              }
              case "_native_sidx_result": {
                var V,
                  H,
                  G = l.parse,
                  Q = G.representation,
                  X = c.streams.find(function (e) {
                    return e.nativeSidxParse === G;
                  });
                if (
                  X == null ||
                  G.mediaSourceIndex !== c.mediaSourceState.mediaSourceIndex
                )
                  return;
                var Y = X.nativeSidxParse,
                  J = babelHelpers.objectWithoutPropertiesLoose(X, e),
                  Z = J,
                  ee = [];
                if (l.result === "failed") {
                  var te = c.playerStateFromMain.dashManifestData;
                  te != null &&
                    (Z = nn(i, a, ee, Z, te, Q.representationId, l.error));
                } else {
                  var ne,
                    re,
                    oe,
                    ae,
                    ie,
                    le = l.items,
                    se = i.config
                      .sidxDisableShiftingMediaTimeRangesByEarliestPresentationTime
                      ? 0
                      : ((ne = (re = le[0]) == null ? void 0 : re.startTicks) !=
                        null
                          ? ne
                          : 0) /
                        ((oe = (ae = le[0]) == null ? void 0 : ae.timescale) !=
                        null
                          ? oe
                          : 1),
                    ue = Xt(
                      i,
                      Z.type,
                      Q.representationId,
                      le.map(function (e, t) {
                        return {
                          isEndingSegment: t === le.length - 1,
                          mediaFileByteRange: {
                            byteLength: e.byteLength,
                            byteOffset: e.byteOffset,
                          },
                          mediaTimeRange: [
                            e.startTicks / e.timescale - se,
                            (e.startTicks + e.durationTicks) / e.timescale - se,
                          ],
                          segmentId: t,
                        };
                      }),
                      !1,
                    );
                  ((Z = babelHelpers.extends({}, Z, {
                    sidxByRepresentationId: o(
                      "VideoPlayerNextgendashStateMachine",
                    ).skipAutoDisposeInsideThisObject(
                      babelHelpers.extends(
                        {},
                        Z.sidxByRepresentationId,
                        ((ie = {}), (ie[Q.representationId] = ue), ie),
                      ),
                    ),
                  })),
                    ee.push(
                      Z.type +
                        ":" +
                        Q.representationId +
                        ":sidx/native:" +
                        le.length +
                        ":" +
                        ue.length,
                    ));
                }
                var ce = babelHelpers.extends({}, c, {
                  debugPlaybackLoopRecentChanges: Me(
                    c.debugPlaybackLoopRecentChanges,
                    ee,
                  ),
                  fetchDemands:
                    (V = mt(
                      c.fetchDemands,
                      function (e) {
                        return e === ze(Q);
                      },
                      t.args.fetchPoolAPI,
                    )) != null
                      ? V
                      : c.fetchDemands,
                  streams: c.streams.map(function (e) {
                    return e === X ? Z : e;
                  }),
                });
                return Z.streamFatalError != null && X.streamFatalError == null
                  ? (u({
                      exception: o(
                        "nextgendasherr",
                      ).nextgendasherrFromMultipleCauses(
                        i,
                        ce.streams
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
                    ce)
                  : (H = Se(i, t, l.type, 0, ce)) != null
                    ? H
                    : ce;
              }
              case "_source_buffer_event": {
                var de = c.streams.find(function (e) {
                    var t;
                    return (
                      ((t = e.sourceBufferState) == null
                        ? void 0
                        : t.sourceBuffer) === l.sourceBuffer
                    );
                  }),
                  me =
                    de == null
                      ? void 0
                      : de.appendState.currSourceBufferOperation;
                if (de != null && me != null) {
                  var pe = !1,
                    _e = [],
                    fe = c.streams.map(function (e) {
                      var t, n;
                      if (e !== de) return e;
                      var r = Et(
                        i,
                        a,
                        e,
                        _e,
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
                          return Rt(i, e.sourceBufferState);
                        },
                      );
                      return r != null
                        ? ((pe = !0), babelHelpers.extends({}, e, r))
                        : e;
                    }),
                    ge = babelHelpers.extends({}, c, {
                      debugPlaybackLoopRecentChanges: Me(
                        c.debugPlaybackLoopRecentChanges,
                        _e,
                      ),
                      streams: fe,
                    });
                  if (pe) {
                    var he;
                    return (he = Se(
                      i,
                      t,
                      l.type +
                        ":" +
                        l.sourceBufferEventType +
                        ":" +
                        me.operationState +
                        ":stateHasChanged",
                      0,
                      ge,
                    )) != null
                      ? he
                      : ge;
                  } else
                    return i.config.disablePlaybackLoopSchedulingOnTimer
                      ? c
                      : Se(
                          i,
                          t,
                          l.type +
                            ":" +
                            l.sourceBufferEventType +
                            ":" +
                            me.operationState +
                            ":!stateHasChanged",
                          Ce,
                          c,
                        );
                } else
                  return i.config.disablePlaybackLoopSchedulingOnTimer
                    ? c
                    : Se(
                        i,
                        t,
                        l.type +
                          ":" +
                          l.sourceBufferEventType +
                          ":null_currSourceBufferOperation",
                        Ce,
                        c,
                      );
              }
              case "_observe_and_act": {
                var ye = j({
                    attempt: c.recoveringFromMediaErrorAttempt,
                    attemptStartedClock:
                      c.recoveringFromMediaErrorAttemptStartedClock,
                    eventClock: s,
                    isLivePlayback: i.config.isLivePlayback,
                    isRecovering: c.recoveringFromMediaError != null,
                  })
                    ? babelHelpers.extends({}, c, {
                        recoveringFromMediaErrorAttempt: 0,
                      })
                    : c,
                  be =
                    i.config.isLivePlayback &&
                    ye.recoveringFromMediaError == null
                      ? ye.streams.find(function (e) {
                          return K(e.appendState.currSourceBufferOperation, s);
                        })
                      : null,
                  ve =
                    be == null
                      ? void 0
                      : be.appendState.currSourceBufferOperation;
                if (
                  be != null &&
                  ve != null &&
                  ve.operationState === "wait_updateend"
                ) {
                  var Re,
                    Le,
                    Ee,
                    ke = ve.operationTiming,
                    Ie = ke.started;
                  if (Ie == null) return Fe(i, ye, l.loopIteration, t);
                  var Te = o(
                      "VideoPlayerNextgendashHostAPI",
                    ).diffVideoPlayerNextgendashClockstamp(s, Ie).unixMs,
                    De = o("nextgendasherr").nextgendasherr(
                      i,
                      "VideoPlayerNextgendashPlaybackLoopLiveSourceBufferOperationTimedOut",
                      "%s:%s SourceBuffer operation stuck in wait_updateend for %sms: %s",
                      be.type,
                      (Re = be.targetRepresentationId) != null
                        ? Re
                        : "no_target_representation",
                      Te,
                      z(ve),
                    ),
                    xe =
                      "liveSourceBufferOperationTimedOut:" +
                      be.type +
                      ":" +
                      ((Le = be.targetRepresentationId) != null
                        ? Le
                        : "no_target_representation") +
                      ":" +
                      Te +
                      "ms";
                  if (ye.recoveringFromMediaErrorAttempt < A) {
                    var Ne,
                      we = babelHelpers.extends({}, ye, {
                        debugPlaybackLoopRecentChanges: Me(
                          ye.debugPlaybackLoopRecentChanges,
                          [xe + "->beginErrorRecovery:" + z(ve)],
                        ),
                      }),
                      Ae = m(we, De);
                    return (Ne = Se(
                      i,
                      t,
                      l.type + ":liveSourceBufferOperationTimedOut",
                      0,
                      Ae,
                    )) != null
                      ? Ne
                      : Ae;
                  }
                  var Oe = babelHelpers.extends({}, ye, {
                    debugPlaybackLoopRecentChanges: Me(
                      ye.debugPlaybackLoopRecentChanges,
                      [
                        "liveSourceBufferOperationTimedOut:" +
                          be.type +
                          ":" +
                          ((Ee = be.targetRepresentationId) != null
                            ? Ee
                            : "no_target_representation") +
                          "->ReachedRetryCap",
                      ],
                    ),
                  });
                  return (
                    u({
                      exception: o("nextgendasherr").nextgendasherrFromCause(
                        i,
                        De,
                        "VideoPlayerNextgendashPlaybackLoopLiveSourceBufferOperationTimeoutRecoveryAttemptsExhausted",
                        "Reached media error recovery attempt cap (%s) with SourceBuffer operation still stuck in wait_updateend",
                        A,
                      ),
                      type: "__exception",
                    }),
                    Oe
                  );
                }
                return Fe(i, ye, l.loopIteration, t);
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
    function J(e, t, n, r, a) {
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
    function Z(e, t) {
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
    function ee(e) {
      for (var t of e.dataKeyToResponseByteRange.keys())
        if (!t.startsWith("init-") && !t.startsWith("sidx-")) return !1;
      return !0;
    }
    function te(e, t, n, r, o, a) {
      for (var i = 0; i < t.length; ++i) {
        var l = t[i],
          s = V(l, a);
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
              var c = ee(l);
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
    var ne = 5 * 1e3;
    function re(e, t) {
      if (e.config.isLivePlayback) return !1;
      var n = o("videoUrlUtils").parseCdnUrlParams(t).expirationDate;
      return n != null && n.getTime() - ne <= e.host.clock().unixMs;
    }
    function oe(e, t) {
      return (
        re(e, t.baseURL) || (t.type === "BaseURLInitURL" && re(e, t.initURL))
      );
    }
    function ae(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (r[0] <= t && t <= r[1]) return (r[1] - t) * 1e3;
      }
      return 0;
    }
    function ie(e, t) {
      return e > 0 ? e : t;
    }
    function le(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (r[0] <= t && t <= r[1]) return Math.max(t, r[1]);
      }
      return t;
    }
    function se(e, t, n) {
      return e !== void 0 && t < n && Bt(e, [t, n], b);
    }
    function ue(e, t, n) {
      return e !== void 0 && t >= n && Bt(e, [n, t], b);
    }
    function ce(e, t, n) {
      if (t == null || n == null) return !0;
      var r = e.segmentsInfo;
      if (r.type !== "SegmentTemplate") return !0;
      var o = le(t, n),
        a = Ut(r, !0),
        i = a.find(function (e) {
          return e.mediaTimeRange[1] > o - x;
        });
      return i != null && i.mediaTimeRange[0] <= o + b;
    }
    function de(e, t) {
      return t ? (e < 2e3 ? 3 : e < 5e3 ? 2 : 1) : 1;
    }
    function me(e, t, n) {
      n === void 0 && (n = 3e4);
      var r = e.filter(function (e) {
        return t - e < n;
      });
      return Math.min(r.length / 3, 1);
    }
    function pe(e, t, n) {
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
    function _e(e, t, n, r) {
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
    function fe(e, t, n) {
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
    function ge(e, t, n, r, o) {
      if (t.length <= 1) return null;
      var a = fe(n, o),
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
    function he(e, t, n, r, o, a, i, l) {
      for (var s = 2, u = 1, c = 1, d = 0; d < t.length; ++d) {
        var m = t[d];
        if (!(m.responseFetch != null || m.poolTrackingID != null)) {
          if (e.config.enableCdnUrlRefresh && oe(e, m.requestInfoArgs)) {
            m.isAwaitingUrlRefresh ||
              (t[d] = babelHelpers.extends({}, m, {
                isAwaitingUrlRefresh: !0,
              }));
            continue;
          }
          var p = ee(m),
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
              g = de(v, S);
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
    function ye(e, t, n, r, a, i, l) {
      var s = new Map(),
        u = new Map();
      te(e, n, s, u, r, t.args.fetchPoolAPI);
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
          f = Q(e, n.requestInfoArgs),
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
            e.config.releasePastStateMachineStates
              ? X(_, n.requestDraft.requestID)
              : function (e, t, r) {
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
              onTransitioned: e.config.releasePastStateMachineStates
                ? X(_, n.requestDraft.requestID)
                : function (e, t, r) {
                    _(
                      {
                        requestID: n.requestDraft.requestID,
                        type: "_fetch_transitioned",
                      },
                      r,
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
      if ((he(e, n, s, u, d, r, i, l), c != null && c.size > 0)) {
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
    var Ce = 1e3,
      be = 20;
    function ve(e, t, n) {
      return Math.max(0, e, t ? n : 0);
    }
    function Se(e, t, a, i, l, s) {
      s === void 0 && (s = 0);
      var u = t.args.sendPlayerWarningToMain,
        c = t.sendToSelf,
        d = e.host.clock().unixMs,
        m = d + i,
        p = l.loopState;
      if (p.loopScheduledToUnixMs == null || m < p.loopScheduledToUnixMs) {
        var _ = p.loopTimerID;
        _ != null && (e.host.timers.clearTimeout(_), (_ = null));
        var f = ve(
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
                loopReasons: we(e, p.loopIteration, p.loopReasons, C),
                loopScheduledToUnixMs: d + f,
                loopTimerDelayMs: f,
                loopTimerID: f > 0 ? e.host.timers.setTimeout(b, f) : null,
              }),
            ),
          });
        return f > 0
          ? v
          : s >= be
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
            : Fe(e, v, h, t, s);
      } else return;
    }
    var Re = " ** ",
      Le = /^(.*)[ ][*][*][ ](\d+)$/;
    function Ee(e) {
      var t = [],
        n = null,
        r = 0;
      for (var o of e) {
        var a = o.includes(Re) ? Le.exec(o) : null,
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
        (ke(t, n, r), (n = s), (r = i));
      }
      return (ke(t, n, r), t);
    }
    function ke(e, t, n) {
      t != null && e.push("" + t + (n === 1 ? "" : " ** " + n));
    }
    function Ie(e, t, n, r) {
      return n ? e : Math.max(0, t - r);
    }
    function Te(e, t, n, r) {
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
            var a = n.join("And");
            throw o("nextgendasherr").nextgendasherr(
              e,
              "VideoPlayerNextgendashEndOfStreamRequiredStreamNotSetup/" + a,
              "%s:%s - Unable to endOfStream() for required stream that is not setup: %s",
              t.type,
              t.targetRepresentationId,
              n.join(" and "),
            );
          }
          var i = !1,
            l,
            c = t.appendState.sourceBufferRanges,
            d =
              t.targetRepresentationId != null
                ? t.sidxByRepresentationId[t.targetRepresentationId]
                : null;
          if (d != null) {
            var m;
            ((l = d.findLast(function (e) {
              return e.isEndingSegment;
            })),
              l == null &&
                s &&
                (l = d.findLast(function (e) {
                  return e.isPredictiveSegment !== !0;
                })));
            var p = (m = l) == null ? void 0 : m.mediaTimeRange;
            if (p != null) {
              var _ = l,
                f =
                  r ||
                  (s &&
                    _ != null &&
                    t.appendState.workaroundForSegmentBufferedInsufficiently.some(
                      function (e) {
                        return (
                          e.representationId === t.targetRepresentationId &&
                          Xe(e.segment, _)
                        );
                      },
                    )),
                g = Ie(p[0], p[1], f, e.config.endOfStreamBufferToleranceSec);
              c.some(function (e) {
                return o("VideoPlayerNextgendashMediaUtils").isWithinRange(
                  e,
                  g,
                );
              }) && (i = !0);
            }
          }
          u.push(i);
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
    var De = 2e3;
    function xe(e, t, n, r, a) {
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
    function $e(e, t) {
      if (
        !(e.host.nativeMedia == null || t == null) &&
        (t.metadata.manifestType === "dynamic" ||
          ["video", "audio"].some(function (e) {
            return t.manifestRepresentations[e].some(function (e) {
              return (
                e.segmentsInfo.type !== "SegmentBase" ||
                e.mimeCodecsParsed.containerType !== "mp4"
              );
            });
          }))
      )
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashPlaybackLoopNativeManifestUnsupported",
          "Native playback requires MP4 SegmentBase VOD",
        );
    }
    function Pe(e, t, n, r, a) {
      $e(e, a);
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
    var Ne = 60;
    function Me(e, t) {
      return t.length === 0
        ? e
        : o(
            "VideoPlayerNextgendashStateMachine",
          ).skipAutoDisposeInsideThisObject(
            [].concat(e.slice(0, -1), Ee([].concat(e.slice(-1), t))).slice(-Ne),
          );
    }
    function we(e, t, n, r) {
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
    function Ae(e) {
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
    function Fe(e, t, n, r, a) {
      var i, l;
      a === void 0 && (a = 0);
      var s = r.eventClock,
        u = r.sendToSelf,
        c = r.args.requestUrlRefresh;
      if (!(n < t.loopState.loopIteration)) {
        var d = t.loopState.loopTimerID;
        d != null && (e.host.timers.clearTimeout(d), (d = null));
        var m = t.playerStateFromMain.dashManifestData;
        $e(e, m);
        var p = 10,
          _ = 10,
          f = [],
          g = [],
          h = 0,
          y = s,
          b = y,
          v = e.config.enableCdnUrlRefresh ? Ae(t.fetchDemands) : null,
          k = t.fetchDemands,
          I = t.streams,
          x = I,
          $ = !1,
          P = !1,
          N = function () {
            (++h, (x = I), ($ = !1), (P = !1), (g.length = 0));
            try {
              if (m) {
                var a = U(e, t.playerStateFromMain.mediaElementSnapshot),
                  i = at({
                    enableLive: e.config.enableLive,
                    fellBehindWindowSec: S,
                    followEdgeActive: e.config.liveFollowEdgeActive,
                    isLivePlayback: e.config.isLivePlayback,
                    pairedRefetchEnabled:
                      e.config.liveFellBehindPairedRefetchEnabled,
                    playheadMediaTimeSec: a,
                    proactiveDriftSec:
                      e.config.liveFellBehindEdgeReseekDriftSec,
                    refetchBehindEdgeSec: L,
                    refetchEnabled: e.config.liveFellBehindWindowRefetchEnabled,
                    starvationBufferAheadSec: R,
                    streams: x
                      .filter(function (e) {
                        return e.type === "video" || e.type === "audio";
                      })
                      .map(function (e) {
                        var t =
                          e.targetRepresentationId != null
                            ? e.sidxByRepresentationId[e.targetRepresentationId]
                            : null;
                        return {
                          bufferedAheadSec: nt(
                            e.appendState.sourceBufferRanges,
                            a,
                          ),
                          confirmedLiveEdgeMediaTimeSec: Ze(t),
                        };
                      }),
                  }),
                  l = ["video", "audio"]
                    .map(function (a, l) {
                      var s = x.find(function (e) {
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
                              predictiveTemplateNumberLastFailed: null,
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
                            (c = tn(e, g, c, m)))
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
                              predictiveTemplateNumberLastFailed: null,
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
                            (c = tn(e, g, c, m))));
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
                          (($ = !0),
                          g.push(
                            a +
                              ":" +
                              d +
                              ":manifestRepresentations=" +
                              bt(m.manifestRepresentations[a]),
                          )),
                        c != null)
                      ) {
                        var p = c,
                          _ = g.length;
                        try {
                          var f = qe(
                            e,
                            t,
                            m,
                            r,
                            c,
                            k,
                            n * 1e4 + l * 100 + h - 1,
                            i,
                            g,
                          );
                          ((k = f.fetchDemands), (c = f.stream));
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
                          ((P = !0),
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
                        if (c !== p && (($ = !0), g.length === _)) {
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
                $ && (I = l);
              } else {
                if (x.length > 0)
                  throw o("nextgendasherr").nextgendasherr(
                    e,
                    "VideoPlayerNextgendashPlaybackLoopManifestDataDisappeared",
                  );
                return 1;
              }
            } finally {
              ((b = e.host.clock()), I !== x && f.push.apply(f, g));
            }
          };
        e: do if (N()) break e;
        while (
          $ &&
          !P &&
          h < p &&
          o(
            "VideoPlayerNextgendashHostAPI",
          ).diffVideoPlayerNextgendashClockstamp(b, y).perfMs < _
        );
        var M = [];
        if (!P) {
          var w = Z(
            k,
            e.config.fetchInitSidxOfAllRepresentations
              ? I.map(function (e) {
                  return e.targetRepresentationId;
                }).filter(Boolean)
              : [],
          );
          e.config.enableCdnUrlRefresh &&
            (w = w.map(function (e) {
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
          var A = new Map(),
            F = new Map(),
            O = t.playerStateFromMain.mediaElementSnapshot,
            B = U(e, O);
          for (var W of I) {
            var q = ae(W.appendState.sourceBufferRanges, B);
            (A.set(W.type, q),
              F.set(W.type, W.appendState.appendChain != null));
          }
          if (
            ((k = ye(
              e,
              r,
              w,
              M,
              t.playerStateFromMain.scrollPositionInfo,
              A,
              F,
            )),
            e.config.enableCdnUrlRefresh)
          ) {
            var V = Array.from(Ae(k)).filter(function (e) {
              return v != null && !v.has(e);
            });
            V.length > 0 &&
              c(
                V.map(function (e) {
                  return { url: e };
                }),
              );
          }
        }
        var H = t.volatilityState,
          G = t.volatilityState;
        if (e.config.enableDynamicBufferWatermarks && G != null) {
          var z = s.unixMs,
            j = z - T,
            K = G.abrSwitchTimestamps,
            Q = G.bandwidthSamples,
            X = !1,
            Y = function (n) {
              var e = t.streams.find(function (e) {
                return e.type === n.type;
              });
              e != null &&
                n.targetRepresentationId != null &&
                e.targetRepresentationId != null &&
                n.targetRepresentationId !== e.targetRepresentationId &&
                (n.targetRepresentationReason === "abr_switch" ||
                  n.targetRepresentationReason === "selected_switch") &&
                ((K = [].concat(K, [z])), (X = !0));
            };
          for (var J of I) Y(J);
          var ee = e.host.networkDiagnosticsReadBandwidth(
              e.config.enableBandwidthDiagnosticsFallback,
              e.config.bandwidthDiagnosticsFallbackDefaultEstimate,
            ),
            te = _e(Q, G.lastBandwidthDiagnosticsSignature, ee, z),
            ne = te.lastBandwidthDiagnosticsSignature;
          ((te.bandwidthSamples !== Q ||
            ne !== G.lastBandwidthDiagnosticsSignature) &&
            ((Q = te.bandwidthSamples), (X = !0)),
            K.some(function (e) {
              return e <= j;
            }) &&
              ((K = K.filter(function (e) {
                return e > j;
              })),
              (X = !0)),
            X &&
              (H = C(e, {
                abrSwitchTimestamps: K,
                bandwidthSamples: Q,
                lastBandwidthDiagnosticsSignature: ne,
                pendingSpeculativeSidxKeys: G.pendingSpeculativeSidxKeys,
              })));
        }
        if (e.config.enablePredictiveSidxPrefetch && H != null && m != null) {
          var re = e.host.networkDiagnosticsReadBandwidth(
            e.config.enableBandwidthDiagnosticsFallback,
            e.config.bandwidthDiagnosticsFallbackDefaultEstimate,
          );
          if (re != null && re.bandwidthEstimate > 0) {
            var oe = null,
              ie = function () {
                var t = se.type;
                if (t !== "video" && t !== "audio") return 0;
                var r = se.playableRepresentations;
                if (r.length <= 1) return 0;
                var o = se.targetRepresentationId;
                if (o == null) return 0;
                var a = ge(
                  o,
                  r,
                  H.bandwidthSamples,
                  re.bandwidthEstimate,
                  s.unixMs,
                );
                if (a != null && a.confidence > D) {
                  var i = a.representation;
                  if (i.segmentsInfo.type === "SegmentBase") {
                    var l = ze(i),
                      u = se.sidxByRepresentationId[i.representationId] != null,
                      c = k.some(function (e) {
                        return e.activeDemands.has(l);
                      });
                    if (!u && !c) {
                      var d,
                        m,
                        p =
                          (d = (m = oe) == null ? void 0 : m.get(t)) != null
                            ? d
                            : H.pendingSpeculativeSidxKeys.get(t);
                      if (p != null && p !== l) {
                        var _ = k.some(function (e) {
                          return (
                            e.activeDemands.has(p) &&
                            e.activeDemands.size === 1 &&
                            e.responseFetch == null
                          );
                        });
                        if (_) {
                          var f = mt(k, function (e) {
                            return e === p;
                          });
                          f != null && (k = f);
                        }
                      }
                      var g = n * 1e4 + 1e6;
                      ((k = [].concat(k, [je(e, g, i)])),
                        oe == null &&
                          (oe = new Map(H.pendingSpeculativeSidxKeys)),
                        oe.set(t, l));
                    }
                  }
                }
              },
              le;
            for (var se of I) le = ie();
            oe != null &&
              (H = C(
                e,
                babelHelpers.extends({}, H, { pendingSpeculativeSidxKeys: oe }),
              ));
          }
        }
        var ue =
            (i = t.playerStateFromMain.mediaElementSnapshot) == null
              ? void 0
              : i.currentTime,
          ce = null;
        if (
          e.config.liveEndedTransitionOnStallEnabled &&
          e.config.isLivePlayback &&
          e.config.enableLive &&
          ue != null
        ) {
          var de = !1,
            me = !0,
            pe = null;
          for (var fe of I)
            if (!(fe.type !== "video" && fe.type !== "audio")) {
              de = !0;
              var he =
                  fe.targetRepresentationId != null
                    ? fe.sidxByRepresentationId[fe.targetRepresentationId]
                    : null,
                be = et({
                  playheadMediaTimeSec: ue,
                  sidx: he,
                  toleranceSec: E,
                });
              if (be == null) {
                me = !1;
                break;
              }
              pe = pe == null ? be : Math.min(pe, be);
            }
          ce = de && me ? pe : null;
        }
        var ve = tt({
            confirmSec: e.config.liveEndedStallConfirmSec,
            drainedTailEndSec: ce,
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
          Re = ve.confirmed,
          Le = ve.next,
          Ee = babelHelpers.extends({}, t, {
            debugPlaybackLoopRecentChanges: Me(
              t.debugPlaybackLoopRecentChanges,
              f.concat(M),
            ),
            fetchDemands: k,
            liveEndedStallState: Le,
            loopState: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends({}, t.loopState, {
                loopIteration: n,
                loopReasons: we(e, n, t.loopState.loopReasons),
                loopScheduledToUnixMs: null,
                loopTimerDelayMs: null,
                loopTimerID: d,
              }),
            ),
            streams: I,
            volatilityState: H,
          }),
          ke = [],
          Ie = !1,
          De = !1;
        if (
          (Ee.streams.forEach(function (e) {
            (e.type !== "video" && e.type !== "audio") ||
              ((e.appendState.currSourceBufferOperation != null ||
                e.appendState.pendingAppendOperations.length !== 0 ||
                e.appendState.pendingRemoveOperations.length !== 0) &&
                (Ie = !0),
              e.streamFatalError != null && (De = !0));
          }),
          Ie || De || Ee.recoveringFromMediaError != null)
        )
          ke.push(
            "endOfStream skipped: " +
              [
                Ie ? "current or pending operation" : null,
                De ? "pending stream fatal error(s)" : null,
                Ee.recoveringFromMediaError != null
                  ? "recovering from MediaError " +
                    Ee.recoveringFromMediaError.name
                  : null,
              ]
                .filter(Boolean)
                .join(", "),
          );
        else
          try {
            Te(e, Ee, ke, Re);
          } catch (t) {
            return (
              u({
                exception: o("nextgendasherr").nextgendasherrFromCause(
                  e,
                  t,
                  "VideoPlayerNextgendashPlaybackLoopCheckAndCallEndOfStreamError",
                  "%s",
                  "debugPlaybackLoopRecentChanges:\n " +
                    Ee.debugPlaybackLoopRecentChanges.join("\n "),
                  "endOfStreamDebugReasons:\n " + ke.join("\n "),
                ),
                type: "__exception",
              }),
              Ee
            );
          }
        ke.length === 0 && ke.push("endOfStream: checked, unknown result");
        var xe = babelHelpers.extends({}, Ee, {
          debugPlaybackLoopRecentChanges: Me(
            Ee.debugPlaybackLoopRecentChanges,
            ke,
          ),
        });
        if (P)
          return (
            u({
              exception: o("nextgendasherr").nextgendasherrFromMultipleCauses(
                e,
                xe.streams
                  .map(function (e) {
                    return e.streamFatalError != null
                      ? [e.type, e.streamFatalError]
                      : null;
                  })
                  .filter(Boolean),
                "VideoPlayerNextgendashPlaybackLoopStreamFatalErrors",
                "%s",
                "debugPlaybackLoopRecentChanges:\n " +
                  xe.debugPlaybackLoopRecentChanges
                    .concat(
                      xe.recoveringFromMediaErrorAttempt > 0
                        ? [
                            "recoveringFromMediaErrorAttempt:" +
                              xe.recoveringFromMediaErrorAttempt,
                          ]
                        : [],
                    )
                    .join("\n "),
              ),
              type: "__exception",
            }),
            xe
          );
        if (xe.streams !== t.streams) {
          var Pe;
          return (Pe = Se(
            e,
            r,
            "streamsChanged:(" + f.join(",") + ")",
            0,
            xe,
            a + 1,
          )) != null
            ? Pe
            : xe;
        } else {
          var Ne;
          return e.config.disablePlaybackLoopSchedulingOnTimer
            ? xe
            : (Ne = Se(e, r, "!streamsChanged", 10 * Ce, xe, a + 1)) != null
              ? Ne
              : xe;
        }
      }
    }
    function Oe(e, t, n) {
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
    function Be(e, t, n, r, a, i, l, s, u) {
      var c,
        d,
        m = t,
        p = n,
        _ = r,
        f = a.representationId,
        g = He(a);
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
            (h = mt(
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
      var y = ct(p, g, s, !0),
        C = y == null ? void 0 : y.fetchState,
        b = y == null || (d = y.responseInfo) == null ? void 0 : d.buffer;
      if (b == null && C != null && C.state === "completed")
        return (
          (m = nn(
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
          (m = nn(
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
          ct(p, ze(a), s, !1) == null;
        v
          ? (p = [].concat(p, [Ke(e, ++_, a)]))
          : (p = [].concat(p, [Ge(e, ++_, a)]));
      }
      return {
        abortFurtherProcessing: !1,
        fetchDemandOrderNext: _,
        fetchDemands: p,
        initBuffer: b,
        stream: m,
      };
    }
    function We(e, t, n, r, a, i) {
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
    function qe(e, t, n, a, i, l, s, u, c) {
      var d,
        m,
        p,
        _,
        f,
        g,
        h,
        C,
        E,
        k,
        T,
        D,
        x,
        $,
        P,
        N = a.args,
        M = N.prefetchResult,
        A = N.sendPlayerWarningToMain,
        F = a.eventClock,
        O = a.sendToSelf,
        B = l,
        W = s * 1e4,
        q = xe(e, t, F, i, c),
        z = q.abortFurtherStreamProcessing,
        j = q.stream;
      if (j.streamFatalError != null || z)
        return { fetchDemands: B, stream: j };
      j = Oe(j, t.mediaSourceState.mediaSourceIndex, c);
      var K = j.appendState.sourceBufferRanges,
        Q = null,
        X = n.manifestRepresentations[j.type].find(function (e) {
          return e.representationId === j.targetRepresentationId;
        }),
        Y = j.targetRepresentationReason,
        J = !1;
      if (X != null)
        switch (j.type) {
          case "video": {
            var Z,
              ee = t.playerStateFromMain.selectedMediaVariant;
            J = Mt(
              ee,
              ee != null ? ee : H,
              (Z = j.prevSelectedMediaVariant) != null ? Z : H,
              t.playerStateFromMain.selectedVideoQualityDisplayLabel,
              j.prevSelectedVideoQualityDisplayLabel,
            );
            break;
          }
          case "audio": {
            var te,
              ne = t.playerStateFromMain.selectedMediaVariant;
            J = wt(
              ne,
              ne != null ? ne : H,
              (te = j.prevSelectedMediaVariant) != null ? te : H,
            );
            break;
          }
        }
      if (X == null || J) {
        var re = Ft(
          e,
          A,
          t.playerWarningDedupMap,
          F,
          t.playerStateFromMain,
          n,
          M,
          K,
          j,
          c,
        );
        ((Q = re.prevTargetRepresentation),
          (j = re.stream),
          (X = re.targetRepresentation),
          (Y = re.targetRepresentationReason));
      }
      var oe = Q,
        ae = X,
        le = Y,
        se = ae.representationId;
      j = We(e, j, t.mediaSourceState, ae, O, c);
      var ue = j.sourceBufferState,
        ce = Be(e, j, B, W, ae, n, A, a.args.fetchPoolAPI, c);
      if (ce != null && ce.abortFurtherProcessing)
        return { fetchDemands: ce.fetchDemands, stream: ce.stream };
      ce != null &&
        ((j = ce.stream), (B = ce.fetchDemands), (W = ce.fetchDemandOrderNext));
      var de = ce == null ? void 0 : ce.initBuffer,
        _e = j.sidxByRepresentationId[se],
        fe = ae.segmentsInfo,
        ge = ze(ae),
        he = ct(B, ge, a.args.fetchPoolAPI, !0),
        ye = he == null ? void 0 : he.fetchState,
        Ce = he == null ? void 0 : he.responseInfo,
        be = Ce == null ? void 0 : Ce.buffer;
      if (_e == null && (Ce == null ? void 0 : Ce.kind) === "native") {
        var ve, Se;
        if (fe.type !== "SegmentBase")
          throw o("nextgendasherr").nextgendasherr(
            e,
            "VideoPlayerNextgendashPlaybackLoopNativeSidxUnsupported",
          );
        if (
          ((ve = j.nativeSidxParse) == null ? void 0 : ve.representation) !==
            ae ||
          ((Se = j.nativeSidxParse) == null ? void 0 : Se.mediaSourceIndex) !==
            t.mediaSourceState.mediaSourceIndex
        ) {
          var Re = {
            mediaSourceIndex: t.mediaSourceState.mediaSourceIndex,
            representation: ae,
          };
          j = babelHelpers.extends({}, j, { nativeSidxParse: Re });
          var Le = Ce.buffer;
          r("promiseDone")(
            Le.body.parseIndex({
              byteLength: Le.byteLength,
              byteOffset: Le.byteOffset,
              fileOffset: fe.indexByteRange.byteOffset,
            }),
            function (e) {
              return O({
                items: e,
                parse: Re,
                result: "parsed",
                type: "_native_sidx_result",
              });
            },
            function (t) {
              return O({
                error: o("nextgendasherr").nextgendasherrFromCause(
                  e,
                  t,
                  "VideoPlayerNextgendashPlaybackLoopSidxParseFailed",
                ),
                parse: Re,
                result: "failed",
                type: "_native_sidx_result",
              });
            },
          );
        }
      } else if (_e == null && be instanceof Uint8Array) {
        var Ee = ae.mimeCodecsParsed.containerType,
          ke = null;
        try {
          switch (Ee) {
            case "mp4": {
              var Ie =
                fe.type === "SegmentBase" ? fe.indexByteRange.byteOffset : null;
              if (Ie == null)
                throw o("nextgendasherr").nextgendasherr(
                  e,
                  "VideoPlayerNextgendashPlaybackLoopSidxParseMp4MissingSidxByteOffset",
                );
              ke = o("VideoPlayerNextgendashMp4SidxParser").parseMp4Sidx(
                e,
                be,
                Ie,
              );
              break;
            }
            case "webm": {
              de instanceof Uint8Array
                ? (ke = o("VideoPlayerNextgendashWebmSidxParser").parseWebmSidx(
                    e,
                    be,
                    de,
                  ))
                : (ke = null);
              break;
            }
            default:
              throw o("nextgendasherr").nextgendasherr(
                e,
                "VideoPlayerNextgendashPlaybackLoopSidxParseUnexpectedContainerType",
                "Unexpected container type for sidx parsing: %s",
                Ee,
              );
          }
        } catch (t) {
          return (
            (j = nn(
              e,
              A,
              c,
              j,
              n,
              se,
              o("nextgendasherr").nextgendasherrFromCause(
                e,
                t,
                "VideoPlayerNextgendashPlaybackLoopSidxParseFailed",
                "%s:%s - Failed to parse sidx; mimeCodecs=%s",
                j.type,
                se,
                ae.mimeCodecsParsed.mimeCodecs,
              ),
            )),
            { fetchDemands: B, stream: j }
          );
        }
        var Te = ke;
        if (Te != null) {
          var De, $e;
          ((_e = Xt(
            e,
            j.type,
            se,
            Te.map(function (e, t) {
              return {
                isEndingSegment: t === Te.length - 1,
                mediaFileByteRange: e.mediaFileByteRange,
                mediaTimeRange: e.mediaTimeRange,
                segmentId: t,
              };
            }),
            !1,
          )),
            c.push(
              j.type + ":" + se + ":sidx/buffer:" + Te.length + ":" + _e.length,
            ),
            (j = babelHelpers.extends({}, j, {
              sidxByRepresentationId: o(
                "VideoPlayerNextgendashStateMachine",
              ).skipAutoDisposeInsideThisObject(
                babelHelpers.extends(
                  {},
                  j.sidxByRepresentationId,
                  ((De = {}), (De[se] = _e), De),
                ),
              ),
            })),
            (B =
              ($e = mt(
                B,
                function (e) {
                  return e === ge;
                },
                a.args.fetchPoolAPI,
              )) != null
                ? $e
                : B));
        }
      } else {
        if (be == null && ye != null && ye.state === "completed")
          return (
            (j = nn(
              e,
              A,
              c,
              j,
              n,
              se,
              o("nextgendasherr").nextgendasherr(
                e,
                "VideoPlayerNextgendashPlaybackLoopSidxFetchBufferExtractionFailed",
                "%s:%s - Failed to extract sidx buffer from the completed response; mimeCodecs=%s",
                j.type,
                se,
                ae.mimeCodecsParsed.mimeCodecs,
              ),
            )),
            { fetchDemands: B, stream: j }
          );
        if (_e == null && ye != null && ye.state === "failed")
          return (
            (j = nn(
              e,
              A,
              c,
              j,
              n,
              se,
              o("nextgendasherr").nextgendasherrFromCause(
                e,
                ye.error,
                "VideoPlayerNextgendashPlaybackLoopSidxFetchFailed",
                "%s:%s - Failed to fetch sidx; mimeCodecs=%s",
                j.type,
                se,
                ae.mimeCodecsParsed.mimeCodecs,
              ),
            )),
            { fetchDemands: B, stream: j }
          );
        if (_e == null && fe.type === "SegmentTemplate") {
          var Pe,
            Ne = n.metadata.manifestType === "dynamic",
            Me = Ut(fe, Ne),
            we = e.config.enableLive ? fe.segmentTimelinePredictive : null;
          _e = Xt(e, j.type, se, Me, Ne);
          var Ae = we != null ? Qt(we, _e, fe.timescale) : _e;
          (c.push(
            j.type +
              ":" +
              se +
              ":sidx/template" +
              (we != null ? "/predictive" : "") +
              ":" +
              Me.length +
              ":" +
              Ae.length,
          ),
            (j = babelHelpers.extends({}, j, {
              sidxByRepresentationId: o(
                "VideoPlayerNextgendashStateMachine",
              ).skipAutoDisposeInsideThisObject(
                babelHelpers.extends(
                  {},
                  j.sidxByRepresentationId,
                  ((Pe = {}), (Pe[se] = Ae), Pe),
                ),
              ),
            })));
        } else if (_e == null && he == null) {
          var Fe;
          B = [].concat(
            (Fe = mt(
              B,
              function (e) {
                return e !== ge && e.startsWith("sidx-" + ae.type + "-");
              },
              a.args.fetchPoolAPI,
            )) != null
              ? Fe
              : B,
            [je(e, ++W, ae)],
          );
        }
      }
      var qe = _e,
        Qe = t.playerStateFromMain.mediaElementSnapshot,
        et = U(e, Qe);
      if (
        ((d = j.appendState.appendChain) == null ? void 0 : d.mediaTail) != null
      ) {
        var tt = Jt(
          e,
          j.type,
          se,
          j.appendState.appendChain,
          et,
          K,
          t.mediaSourceState.mediaSource,
          c,
        );
        tt !== j.appendState.appendChain &&
          (j = babelHelpers.extends({}, j, {
            appendState: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends({}, j.appendState, { appendChain: tt }),
            ),
          }));
      }
      var at =
        oe != null &&
        (((m = ae.role) != null ? m : null) !==
          ((p = oe.role) != null ? p : null) ||
          ((_ = ae.lang) != null ? _ : null) !==
            ((f = oe.lang) != null ? f : null));
      if (
        oe != null &&
        se !== oe.representationId &&
        (le === "selected_switch" || at)
      ) {
        var it = 5,
          pt = at ? 0 : et + it,
          ft = [pt, Number.POSITIVE_INFINITY],
          ht = {
            operationState: "wait_start",
            operationTiming: { created: e.host.clock() },
            operationType: "remove_operation",
            removeRange: ft,
          };
        (c.push(
          j.type +
            ":" +
            se +
            ":pendingRemoveOperations:newRemoveOperation:" +
            o("VideoPlayerNextgendashMediaUtils").debugStringifyTimeRange(
              ht.removeRange,
            ),
        ),
          (j = babelHelpers.extends({}, j, {
            appendState: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends({}, j.appendState, {
                pendingAppendOperations: [],
                pendingRemoveOperations: [].concat(
                  j.appendState.pendingRemoveOperations,
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
        j.sourceBufferState != null &&
        j.appendState.currSourceBufferOperation == null &&
        j.appendState.pendingAppendOperations.length === 0 &&
        j.appendState.pendingRemoveOperations.length === 0
      ) {
        var bt = rt(
          K,
          et,
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
            j.type +
              ":" +
              se +
              ":pendingRemoveOperations:newLiveBackBufferRemoveOperation:" +
              o("VideoPlayerNextgendashMediaUtils").debugStringifyTimeRange(
                vt.removeRange,
              ),
          ),
            (j = babelHelpers.extends({}, j, {
              appendState: o(
                "VideoPlayerNextgendashStateMachine",
              ).skipAutoDisposeInsideThisObject(
                babelHelpers.extends({}, j.appendState, {
                  pendingRemoveOperations: [].concat(
                    j.appendState.pendingRemoveOperations,
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
              j.appendState.pendingAppendOperations[
                j.appendState.pendingAppendOperations.length - 1
              ]) == null
              ? void 0
              : C.appendInfo.representationId) != null
            ? h
            : j.appendState.currSourceBufferOperation != null &&
                j.appendState.currSourceBufferOperation.operationType ===
                  "append_operation"
              ? j.appendState.currSourceBufferOperation.appendInfo
                  .representationId
              : null) != null
          ? g
          : j.appendState.lastAppendOperation != null &&
              j.appendState.lastAppendOperation.operationState === "succeeded"
            ? j.appendState.lastAppendOperation.appendInfo.representationId
            : null;
      if (ue != null && se !== St && de != null) {
        var Rt = {
          appendInfo: {
            appendInfoType: "init",
            mimeCodecsParsed: ae.mimeCodecsParsed,
            representationId: se,
          },
          buffer: de,
          operationState: "wait_start",
          operationTiming: { created: e.host.clock() },
          operationType: "append_operation",
        };
        (c.push(
          j.type +
            ":" +
            se +
            ":pendingAppendOperations:initAppendOperation:" +
            gt(Rt.appendInfo),
        ),
          (j = babelHelpers.extends({}, j, {
            appendState: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends({}, j.appendState, {
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
            : ie(e.config.bufferAheadTargetNoMediaElementSec, Lt),
          paused: e.config.bufferAheadTargetPausedSec,
          playing: (E = e.config.bufferAheadTargetPlayingSec) != null ? E : Et,
        }[kt],
        Tt =
          e.config.enableQuotaExceededRecovery && !yt
            ? Math.max(
                e.config.quotaExceededMinBufferTargetSec,
                It * j.quotaExceededBufferTargetRatio,
              )
            : It,
        Dt = Tt,
        xt = t.volatilityState;
      if (
        e.config.enableDynamicBufferWatermarks &&
        !yt &&
        kt === "playing" &&
        xt != null
      ) {
        var $t = F.unixMs,
          Pt = me(xt.abrSwitchTimestamps, $t),
          Nt = pe(xt.bandwidthSamples, $t),
          At = Math.max(Pt, Nt),
          Ot = At * I,
          Bt = e.config.enableQuotaExceededRecovery
            ? Ot * j.quotaExceededBufferTargetRatio
            : Ot;
        Dt = Tt + Bt;
      }
      var Vt =
          (k = j.appendState.appendChain) == null
            ? void 0
            : k.playheadMinimumTimeSec,
        Ht = Ze(qe),
        Gt = nt(K, et),
        Yt = ot({
          bufferedAheadSec: Gt,
          enableLive: e.config.enableLive,
          fellBehindWindowSec: S,
          followEdgeActive: e.config.liveFollowEdgeActive,
          isLivePlayback: e.config.isLivePlayback,
          liveEdgeMediaTimeSec: Ht,
          playheadMediaTimeSec: et,
          proactiveDriftSec: e.config.liveFellBehindEdgeReseekDriftSec,
          refetchEnabled: e.config.liveFellBehindWindowRefetchEnabled,
          starvationBufferAheadSec: R,
        }),
        tn =
          e.config.liveFellBehindPairedRefetchEnabled &&
          e.config.isLivePlayback &&
          e.config.enableLive &&
          e.config.liveFollowEdgeActive
            ? u
            : null,
        an = Gt != null ? et + Gt : et,
        ln = tn != null && an < tn - b,
        sn = Yt || ln,
        un = tn != null ? tn : Ht != null ? Ht - L : null,
        cn =
          sn && un != null
            ? un
            : Vt != null && Vt > et
              ? Vt - b
              : j.appendState.appendChain != null
                ? et - b
                : et,
        dn = sn && Ht != null ? Ht + Dt : et + Dt,
        mn =
          j.appendState.currSourceBufferOperation != null &&
          j.appendState.currSourceBufferOperation.operationType ===
            "append_operation"
            ? j.appendState.currSourceBufferOperation.appendInfo
                .appendInfoType === "data" &&
              j.appendState.currSourceBufferOperation.appendInfo
                .dataByteRangeLength > 0
              ? j.appendState.currSourceBufferOperation.appendInfo
              : null
            : j.appendState.lastAppendOperation != null &&
                j.appendState.lastAppendOperation.operationState ===
                  "succeeded" &&
                j.appendState.lastAppendOperation.appendInfo.appendInfoType ===
                  "data" &&
                j.appendState.lastAppendOperation.appendInfo
                  .dataByteRangeLength > 0
              ? j.appendState.lastAppendOperation.appendInfo
              : null;
      function pn(t, n) {
        return qt(
          j.appendState.appendChain,
          t,
          n,
          e.config.isLivePlayback && e.config.liveTimeBasedAppendAnchorEnabled,
        );
      }
      var _n = qe != null ? qe : [],
        fn =
          yt &&
          t.playerStateFromMain.mediaSourceIndexApplied ===
            t.mediaSourceState.mediaSourceIndex &&
          t.playerStateFromMain.mediaElementSnapshot != null,
        gn =
          fn &&
          ((T = t.playerStateFromMain.mediaElementSnapshot) == null
            ? void 0
            : T.seeking) === !0 &&
          Number.isFinite(et) &&
          et >= 0 &&
          K != null &&
          !K.some(function (e) {
            var t = e[0],
              n = e[1];
            return t <= et && et < n;
          }),
        hn = yt && Dt <= 0,
        yn =
          hn &&
          ((D = t.playerStateFromMain.mediaElementSnapshot) == null
            ? void 0
            : D.paused) === !0 &&
          t.playerStateFromMain.mediaSourceIndexApplied ===
            t.mediaSourceState.mediaSourceIndex,
        Cn =
          yn &&
          ((x = t.playerStateFromMain.mediaElementSnapshot) == null
            ? void 0
            : x.seeking) === !0,
        bn = Math.round(et * 1e3);
      function vn(e) {
        return Math.abs(Math.round(e * 1e3) - bn) <= 1;
      }
      function Sn(e) {
        return (
          gn &&
          e.segment.mediaTimeRange[0] <= et &&
          et < e.segment.mediaTimeRange[1] &&
          (e.nativeSeekRetry == null || !vn(e.nativeSeekRetry.targetSec))
        );
      }
      function Rn(e) {
        var t;
        if (
          !fn ||
          ((t = e.nativeSeekRetry) == null ? void 0 : t.pending) !== !0 ||
          !vn(e.nativeSeekRetry.targetSec)
        )
          return !1;
        var n = lt(ae, e.segment);
        return B.some(function (e) {
          if (e.isNativeSeek !== !0 || !e.activeDemands.has(n)) return !1;
          var t = V(e, a.args.fetchPoolAPI);
          return t == null
            ? e.evictedClock == null
            : t.state !== "failed" &&
                t.state !== "aborted" &&
                t.state !== "__disposed__";
        });
      }
      var Ln = _n.filter(function (e) {
          if (hn && !yn) return !1;
          if (
            !Wt(K, e) &&
            !j.appendState.workaroundForSegmentBufferedInsufficiently.some(
              function (t) {
                return (
                  t.representationId === se &&
                  Xe(t.segment, e) &&
                  !Sn(t) &&
                  !Rn(t)
                );
              },
            )
          ) {
            if (hn) {
              var t = lt(ae, e),
                n = B.some(function (e) {
                  return e.isNativeSeek === !0 && e.activeDemands.has(t);
                });
              return (
                (Cn || n) &&
                ((e.mediaTimeRange[0] <= et + v && et <= e.mediaTimeRange[1]) ||
                  (e.isEndingSegment && et > e.mediaTimeRange[1])) &&
                !pn(se, e)
              );
            }
            if (e.isEndingSegment && et > e.mediaTimeRange[1])
              return !pn(se, e);
            var r = o("VideoPlayerNextgendashMediaUtils").isWithinRange(
              e.mediaTimeRange,
              cn,
            );
            if (r) return !pn(se, e);
            var a = o("VideoPlayerNextgendashMediaUtils").isWithinRange(
              e.mediaTimeRange,
              dn,
            );
            if (a) return !pn(se, e);
            var i = cn <= e.mediaTimeRange[0] && e.mediaTimeRange[1] <= dn;
            if (i) return !pn(se, e);
          }
          return !1;
        }),
        En = fe.type === "SegmentTemplate" ? fe : null,
        kn =
          ($ = En == null ? void 0 : En.segmentTimelinePredictive) != null
            ? $
            : null,
        In = qe != null && qe.length > 0 ? qe[qe.length - 1] : null,
        Tn = En != null ? zt(En) : null;
      if (
        e.config.isLivePlayback &&
        e.config.enableLive &&
        Ln.length === 0 &&
        qe != null &&
        En != null &&
        kn != null &&
        In != null &&
        jt(In, kn, e.config.liveRollingPdashReseedAfterStripEnabled, Tn, dn) &&
        Kt(In, kn) !== j.predictiveTemplateNumberLastFailed
      ) {
        var Dn = In.isPredictiveSegment !== !0,
          xn = Qt(kn, qe, En.timescale);
        if (xn.length > qe.length) {
          var $n;
          ((j = babelHelpers.extends({}, j, {
            sidxByRepresentationId: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends(
                {},
                j.sidxByRepresentationId,
                (($n = {}), ($n[se] = xn), $n),
              ),
            ),
          })),
            (qe = xn));
          var Pn = xn[xn.length - 1];
          ((Ln = [Pn]),
            c.push(
              j.type +
                ":" +
                se +
                ":" +
                (Dn ? "rolling_pdash_reseed" : "rolling_pdash") +
                ":" +
                String(Pn.templateNumber),
            ));
        }
      }
      var Nn = new Set(),
        Mn = null,
        wn = j.appendState.workaroundForSegmentBufferedInsufficiently.find(
          function (e) {
            return (
              e.representationId === se &&
              (Sn(e) || Rn(e)) &&
              Ln.some(function (t) {
                return Xe(t, e.segment);
              })
            );
          },
        );
      if (
        !hn &&
        wn == null &&
        Ln.length > 1 &&
        ae.segmentsInfo.type === "SegmentBase"
      ) {
        for (var An, Fn = [], On = 0; On < Ln.length; ++On) {
          var Bn = Ln[On],
            Wn = lt(ae, Bn);
          Nn.add(Wn);
          var qn = dt(e, Mn != null ? Mn : B, Wn);
          ((Mn = qn != null ? qn : Mn), qn == null && Fn.push(Bn));
        }
        for (
          var Un =
              M != null && M.prefetchedRepresentationIds.includes(se)
                ? [0]
                : [],
            Vn = Ue(
              Fn,
              Un,
              e.host.nativeMedia != null
                ? (An =
                    e.host.nativeMedia.getMaxBodyBytes == null
                      ? void 0
                      : e.host.nativeMedia.getMaxBodyBytes()) != null
                  ? An
                  : 16 * 1024 * 1024
                : void 0,
            ),
            Hn = 0;
          Hn < Vn.length;
          ++Hn
        ) {
          var Gn = Vn[Hn];
          ((Mn = Mn != null ? Mn : [].concat(B)), Mn.push(ut(e, ++W, ae, Gn)));
        }
      } else
        Ln.forEach(function (t) {
          var n = lt(ae, t);
          Nn.add(n);
          var r = dt(e, Mn != null ? Mn : B, n);
          Mn = r != null ? r : Mn;
          var o = Cn || (wn != null && Xe(wn.segment, t));
          (o &&
            r != null &&
            (Mn = r.map(function (e) {
              return e.activeDemands.has(n)
                ? babelHelpers.extends({}, e, { isNativeSeek: !0 })
                : e;
            })),
            r == null &&
              ((Mn = Mn != null ? Mn : [].concat(B)),
              Mn.push(
                babelHelpers.extends(
                  {},
                  st(e, ++W, ae, t),
                  o ? { isNativeSeek: !0 } : {},
                ),
              )));
        });
      {
        var zn = new Set();
        ((Mn != null ? Mn : B).forEach(function (t) {
          var r = F.perfMs - t.demandedAtClock.perfMs,
            o = 0;
          r < o ||
            t.activeDemands.forEach(function (t) {
              t.startsWith("segment-" + j.type + "-") &&
                !Nn.has(t) &&
                ![
                  mn,
                  j.appendState.currSourceBufferOperation != null &&
                  j.appendState.currSourceBufferOperation.operationType ===
                    "append_operation"
                    ? j.appendState.currSourceBufferOperation.appendInfo
                    : null,
                ]
                  .concat(
                    j.appendState.pendingAppendOperations.map(function (e) {
                      return e.appendInfo;
                    }),
                  )
                  .filter(Boolean)
                  .some(function (r) {
                    var o = Ve(
                      e,
                      n.manifestRepresentations[j.type],
                      r.representationId,
                    );
                    switch (r.appendInfoType) {
                      case "init":
                        return t === He(o);
                      case "data":
                        return t === lt(o, r.segment);
                      default:
                        r.appendInfoType;
                    }
                  }) &&
                zn.add(t);
            });
        }),
          zn.size > 0 &&
            (Mn = mt(
              Mn != null ? Mn : B,
              function (e) {
                return zn.has(e);
              },
              a.args.fetchPoolAPI,
            )));
      }
      {
        var jn = Mn != null ? Mn : B,
          Kn = a.args.fetchPoolAPI,
          Qn = jn.reduce(
            function (e, t) {
              if (t.streamType === j.type && t.activeDemands.size > 0) {
                var n = V(t, Kn);
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
          Qn.inflightFetchesCountForThisStream === 0 &&
          Qn.unfulfilledDemandsCountForThisStream > 0
        ) {
          var Xn = Ft(
            e,
            A,
            t.playerWarningDedupMap,
            F,
            t.playerStateFromMain,
            n,
            M,
            K,
            j,
            c,
          );
          if (Xn.stream.targetRepresentationId !== j.targetRepresentationId)
            return { fetchDemands: B, stream: Xn.stream };
          j = Xn.stream;
        }
      }
      if (
        e.config.fetchInitSidxOfAllRepresentations &&
        se != null &&
        j.playableRepresentations.length > 1 &&
        ((P = t.playerStateFromMain.mediaElementSnapshot) == null
          ? void 0
          : P.bufferedFully) !== !0
      ) {
        for (var Yn of j.playableRepresentations)
          if (Yn.representationId !== se) {
            var Jn =
                ct(Mn != null ? Mn : B, He(Yn), a.args.fetchPoolAPI, !1) !=
                null,
              Zn =
                j.sidxByRepresentationId[Yn.representationId] != null ||
                ct(Mn != null ? Mn : B, ze(Yn), a.args.fetchPoolAPI, !1) !=
                  null;
            if (!Jn || !Zn) {
              var er =
                e.config.enableCombinedInitSidxFetch &&
                Yn.segmentsInfo.type === "SegmentBase" &&
                !Jn &&
                !Zn;
              er
                ? ((Mn = Mn != null ? Mn : [].concat(B)),
                  Mn.push(Ke(e, ++W, Yn)))
                : (Jn ||
                    ((Mn = Mn != null ? Mn : [].concat(B)),
                    Mn.push(Ge(e, ++W, Yn))),
                  Zn ||
                    ((Mn = Mn != null ? Mn : [].concat(B)),
                    Mn.push(je(e, ++W, Yn))));
            }
          }
      }
      B = Mn != null ? Mn : B;
      var tr = j.appendState.workaroundForSegmentBufferedInsufficiently;
      if (
        (tr.some(function (e) {
          var t;
          return (
            (((t = e.nativeSeekRetry) == null ? void 0 : t.pending) === !0 &&
              !Rn(e)) ||
            (e === wn && Sn(e))
          );
        }) &&
          (j = babelHelpers.extends({}, j, {
            appendState: babelHelpers.extends({}, j.appendState, {
              workaroundForSegmentBufferedInsufficiently: tr.map(function (e) {
                var t = e.nativeSeekRetry;
                return e === wn &&
                  Sn(e) &&
                  B.some(function (t) {
                    return (
                      t.isNativeSeek === !0 &&
                      t.activeDemands.has(lt(ae, e.segment))
                    );
                  })
                  ? babelHelpers.extends({}, e, {
                      nativeSeekRetry: { pending: !0, targetSec: bn / 1e3 },
                    })
                  : t != null && t.pending && !Rn(e)
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
          j.appendState.pendingAppendOperations.length > 0 ||
          j.appendState.currSourceBufferOperation != null
        ))
      ) {
        var nr = null;
        if (mn != null)
          nr = {
            dataByteRangeStart: mn.dataByteRangeStart + mn.dataByteRangeLength,
            incompleteChunkedAppendInfo: mn,
            mimeCodecsParsed: mn.mimeCodecsParsed,
            representationId: mn.representationId,
            segment: mn.segment,
          };
        else if (Ln.length > 0) {
          var rr = Ln[0];
          nr = {
            dataByteRangeStart: 0,
            incompleteChunkedAppendInfo: null,
            mimeCodecsParsed: ae.mimeCodecsParsed,
            representationId: se,
            segment: rr,
          };
        }
        var or = nr;
        if (or != null) {
          if (
            j.appendState.appendChain != null &&
            j.appendState.appendChain.representationId === or.representationId
          ) {
            var ar = Ve(
                e,
                n.manifestRepresentations[j.type],
                or.representationId,
              ),
              ir = lt(ar, or.segment),
              lr = ct(B, ir, a.args.fetchPoolAPI);
            if (
              lr == null &&
              or.incompleteChunkedAppendInfo != null &&
              or.segment.isPredictiveSegment === !0
            )
              return (
                c.push(
                  j.type +
                    ":" +
                    or.representationId +
                    ":abandon_incomplete_predictive_append:" +
                    String(or.segment.templateNumber),
                ),
                (j = babelHelpers.extends({}, j, {
                  appendState: o(
                    "VideoPlayerNextgendashStateMachine",
                  ).skipAutoDisposeInsideThisObject(
                    babelHelpers.extends({}, j.appendState, {
                      lastAppendOperation: null,
                    }),
                  ),
                })),
                { fetchDemands: B, stream: j }
              );
            if (lr == null)
              throw o("nextgendasherr").nextgendasherr(
                e,
                or.incompleteChunkedAppendInfo != null
                  ? "VideoPlayerNextgendashPlaybackLoopMissingFetchDemandForSegmentToContinueChunkedAppend"
                  : "VideoPlayerNextgendashPlaybackLoopMissingFetchDemandForSegmentToAppend",
                "%s:%s - nextAppendInfo=%s segmentFetchDemandKey=%s fetchDemands=%s",
                j.type,
                se != null ? se : "no_target_representation",
                JSON.stringify(or),
                ir,
                _t(B),
              );
            var sr = null,
              ur = lr.fetchState;
            ur != null && ur.state === "failed"
              ? (sr = o("nextgendasherr").nextgendasherrFromCause(
                  e,
                  ur.error,
                  "VideoPlayerNextgendashPlaybackLoopSegmentFetchFailed",
                  "%s:%s - Fetch failed for media segment needed to append; segmentFetchDemandKey=%s nextAppendInfo=%s",
                  j.type,
                  se,
                  ir,
                  JSON.stringify(or),
                ))
              : ur != null &&
                ur.state === "aborted" &&
                (sr = o("nextgendasherr").nextgendasherr(
                  e,
                  "VideoPlayerNextgendashPlaybackLoopSegmentFetchAborted",
                  "%s:%s - Fetch aborted for media segment needed to append; segmentFetchDemandKey=%s nextAppendInfo=%s",
                  j.type,
                  se,
                  ir,
                  JSON.stringify(or),
                ));
            var cr = lr == null ? void 0 : lr.responseInfo;
            if (sr != null) {
              var dr,
                mr =
                  (dr = j.liveSegmentFetchFailingSinceUnixMs) != null
                    ? dr
                    : F.unixMs;
              if (
                or.segment.isPredictiveSegment !== !0 &&
                Ye({
                  enableLive: e.config.enableLive,
                  errorName: sr.name,
                  failingSinceUnixMs: mr,
                  isLivePlayback: e.config.isLivePlayback,
                  nowUnixMs: F.unixMs,
                  toleranceMs:
                    e.config.liveSegmentFetchNetworkFailureToleranceMs,
                })
              )
                return (
                  c.push(
                    j.type +
                      ":" +
                      or.representationId +
                      ":live_segment_fetch_failed_retry:" +
                      ir,
                  ),
                  (j = babelHelpers.extends({}, j, {
                    appendState:
                      or.incompleteChunkedAppendInfo != null
                        ? o(
                            "VideoPlayerNextgendashStateMachine",
                          ).skipAutoDisposeInsideThisObject(
                            babelHelpers.extends({}, j.appendState, {
                              lastAppendOperation: null,
                            }),
                          )
                        : j.appendState,
                    liveSegmentFetchFailingSinceUnixMs: mr,
                  })),
                  (B = B.filter(function (e) {
                    return e.requestDraft.requestID !== ir;
                  })),
                  { fetchDemands: B, stream: j }
                );
              if (or.segment.isPredictiveSegment === !0) {
                var pr = j.sidxByRepresentationId[or.representationId];
                if (pr != null) {
                  var _r, fr;
                  ((j = babelHelpers.extends({}, j, {
                    predictiveTemplateNumberLastFailed:
                      (_r = or.segment.templateNumber) != null ? _r : null,
                    sidxByRepresentationId: o(
                      "VideoPlayerNextgendashStateMachine",
                    ).skipAutoDisposeInsideThisObject(
                      babelHelpers.extends(
                        {},
                        j.sidxByRepresentationId,
                        ((fr = {}),
                        (fr[or.representationId] = pr.filter(function (e) {
                          return e.isPredictiveSegment !== !0;
                        })),
                        fr),
                      ),
                    ),
                  })),
                    c.push(
                      j.type +
                        ":" +
                        or.representationId +
                        ":predictive_segment_fetch_failed",
                    ));
                }
                return (
                  (B = B.filter(function (e) {
                    return e.requestDraft.requestID !== ir;
                  })),
                  { fetchDemands: B, stream: j }
                );
              }
              return (
                (j = nn(e, A, c, j, n, se, sr)),
                { fetchDemands: B, stream: j }
              );
            } else if (cr != null) {
              if (
                (j.liveSegmentFetchFailingSinceUnixMs != null &&
                  (j = babelHelpers.extends({}, j, {
                    liveSegmentFetchFailingSinceUnixMs: null,
                  })),
                Je(or.segment, or.dataByteRangeStart, cr))
              ) {
                var gr = j.sidxByRepresentationId[or.representationId];
                if (gr != null) {
                  var hr, yr;
                  ((j = babelHelpers.extends({}, j, {
                    predictiveTemplateNumberLastFailed:
                      (hr = or.segment.templateNumber) != null ? hr : null,
                    sidxByRepresentationId: o(
                      "VideoPlayerNextgendashStateMachine",
                    ).skipAutoDisposeInsideThisObject(
                      babelHelpers.extends(
                        {},
                        j.sidxByRepresentationId,
                        ((yr = {}),
                        (yr[or.representationId] = gr.filter(function (e) {
                          return e.isPredictiveSegment !== !0;
                        })),
                        yr),
                      ),
                    ),
                  })),
                    c.push(
                      j.type +
                        ":" +
                        or.representationId +
                        ":predictive_segment_fetch_empty",
                    ));
                }
                return (
                  (B = B.filter(function (e) {
                    return e.requestDraft.requestID !== ir;
                  })),
                  { fetchDemands: B, stream: j }
                );
              }
              var Cr = or.segment.mediaFileByteRange.byteLength,
                br =
                  cr.isFetchComplete ||
                  (cr.responseByteRange.byteLength != null &&
                    cr.chunksByteLength >=
                      cr.responseByteRange.byteOffset +
                        cr.responseByteRange.byteLength),
                vr = 6,
                Sr = 1e5,
                Rr = br
                  ? null
                  : e.config.dataAppendOperationMinBytes === "ozplayer-like"
                    ? vr > 0 && Cr != null && Cr > 0
                      ? Math.ceil(Cr / vr)
                      : Sr > 0
                        ? Sr
                        : null
                    : e.config.dataAppendOperationMinBytes,
                Lr = cr.responseByteRange.byteOffset + or.dataByteRangeStart,
                Er =
                  cr.responseByteRange.byteLength != null
                    ? cr.responseByteRange.byteLength - or.dataByteRangeStart
                    : null,
                kr =
                  cr.kind === "native"
                    ? null
                    : Zt(
                        cr.chunks,
                        Lr,
                        Rr != null ? (Er != null ? Math.min(Er, Rr) : Rr) : Er,
                      ),
                Ir = null;
              if (cr.kind === "native") {
                var Tr = cr.buffer.body;
                if (
                  Er == null ||
                  !Number.isSafeInteger(Er) ||
                  Er < 0 ||
                  !Number.isSafeInteger(Lr) ||
                  Lr < 0 ||
                  Lr + Er > Tr.byteLength
                )
                  throw o("nextgendasherr").nextgendasherr(
                    e,
                    "VideoPlayerNextgendashPlaybackLoopNativeAppendRangeInvalid",
                  );
                Ir =
                  Er === 0
                    ? y
                    : {
                        body: Tr,
                        byteLength: Er,
                        byteOffset: Lr,
                        kind: "native",
                      };
              } else if (
                kr != null &&
                (Rr === null || kr.copyTotalBytesCount >= Rr)
              ) {
                if (((Ir = en(cr.chunks, kr)), Ir == null))
                  throw o("nextgendasherr").nextgendasherr(
                    e,
                    "VideoPlayerNextgendashPlaybackLoopFailedToCombineChunksToAppend",
                    "%s/data#%s - Failed to copy %sB from chunks #%s(%sB)..#%s(%sB) into an append buffer (out of %s chunks of total %sB).",
                    or.representationId,
                    or.segment.segmentId,
                    kr.copyTotalBytesCount,
                    kr.startChunkIndex,
                    kr.startChunkByteOffset,
                    kr.endChunkIndex,
                    kr.endChunkBytesCount,
                    cr.chunks.length,
                    cr.chunksByteLength,
                  );
              } else br && (Ir = y);
              if (Ir != null) {
                var Dr = {
                    appendInfoType: "data",
                    dataByteRangeLength: G(Ir),
                    dataByteRangeStart: or.dataByteRangeStart,
                    mimeCodecsParsed: or.mimeCodecsParsed,
                    representationId: or.representationId,
                    segment: or.segment,
                  },
                  xr = {
                    appendInfo: Dr,
                    buffer: Ir,
                    operationState: "wait_start",
                    operationTiming: { created: e.host.clock() },
                    operationType: "append_operation",
                  };
                (c.push(
                  j.type +
                    ":" +
                    se +
                    ":pendingAppendOperations:dataAppendOperation:" +
                    gt(Dr),
                ),
                  (j = babelHelpers.extends({}, j, {
                    appendState: o(
                      "VideoPlayerNextgendashStateMachine",
                    ).skipAutoDisposeInsideThisObject(
                      babelHelpers.extends({}, j.appendState, {
                        pendingAppendOperations: [].concat(
                          j.appendState.pendingAppendOperations,
                          [xr],
                        ),
                      }),
                    ),
                  })));
              }
            } else if (
              e.host.nativeMedia != null &&
              (ur == null ? void 0 : ur.state) === "completed"
            )
              throw o("nextgendasherr").nextgendasherr(
                e,
                "VideoPlayerNextgendashPlaybackLoopNativeSegmentRangeInvalid",
              );
          }
        }
      }
      var $r = rn(e, A, j, c, ae, t.mediaSourceState.mediaSource, et);
      $r != null && (j = babelHelpers.extends({}, j, $r));
      var Pr = on(e, A, j, c, ae, et, t.mediaSourceState.mediaSource);
      Pr != null && (j = babelHelpers.extends({}, j, Pr));
      var Nr = j.appendState.lastSourceBufferOperation;
      if (
        e.config.enableQuotaExceededRecovery &&
        j.quotaExceededBufferTargetRatio < 1 &&
        Nr != null &&
        Nr.operationState === "succeeded" &&
        Nr.operationType === "append_operation" &&
        Nr.operationTiming.created.unixMs !==
          j.quotaExceededLastRewardedCreatedMs
      ) {
        var Mr = Math.min(
          1,
          j.quotaExceededBufferTargetRatio +
            e.config.quotaExceededBufferTargetReward,
        );
        j = babelHelpers.extends({}, j, {
          quotaExceededBufferTargetRatio: Mr,
          quotaExceededLastRewardedCreatedMs: Nr.operationTiming.created.unixMs,
        });
      }
      return { fetchDemands: B, stream: j };
    }
    function Ue(e, t, n) {
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
    function Ve(e, t, n) {
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
    function He(e) {
      return "init-" + e.type + "-" + e.representationId;
    }
    function Ge(e, t, n) {
      var r = He(n),
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
    function ze(e) {
      return "sidx-" + e.type + "-" + e.representationId;
    }
    function je(e, t, n) {
      var r = n.segmentsInfo;
      if (r.type !== "SegmentBase")
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashPlaybackLoopSidxFetchUnknown",
          "%s:%s - sidx fetch unknown (" + r.type + ")",
          n.type,
          n.representationId,
        );
      var a = ze(n),
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
    function Ke(e, t, n) {
      var r = n.segmentsInfo;
      if (r.type !== "SegmentBase")
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashPlaybackLoopCombinedInitSidxFetchUnknown",
          "%s:%s - combined init+sidx fetch unknown (" + r.type + ")",
          n.type,
          n.representationId,
        );
      var a = He(n),
        i = ze(n),
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
    function Qe(e) {
      return e.templateTime != null ? "t" + e.templateTime : "" + e.segmentId;
    }
    function Xe(e, t) {
      return e.templateTime != null && t.templateTime != null
        ? e.templateTime === t.templateTime
        : e.segmentId === t.segmentId;
    }
    function Ye(e) {
      if (
        !e.isLivePlayback ||
        !e.enableLive ||
        e.toleranceMs <= 0 ||
        e.nowUnixMs - e.failingSinceUnixMs > e.toleranceMs
      )
        return !1;
      var t = e.errorName.match(/FetchHTTP(\d{3})/);
      return t != null
        ? Number(t[1]) >= 500
        : /FetchedResource(FetchFailure|Offline|NativeRejection|NativeOffline|FetchException)|FetchResponseStreamReader/.test(
            e.errorName,
          );
    }
    function Je(e, t, n) {
      return (
        e.isPredictiveSegment === !0 &&
        t === 0 &&
        n.isFetchComplete &&
        n.chunksByteLength === 0
      );
    }
    function Ze(e) {
      if (e == null) return null;
      for (var t = e.length - 1; t >= 0; t--) {
        var n = e[t];
        if (n.isPredictiveSegment !== !0) return n.mediaTimeRange[1];
      }
      return null;
    }
    function et(e) {
      var t = e.playheadMediaTimeSec,
        n = e.sidx,
        r = e.toleranceSec,
        o = Ze(n);
      return o == null ? null : t >= o - r ? o : null;
    }
    function tt(e) {
      var t = e.confirmSec,
        n = e.drainedTailEndSec,
        r = e.enabled,
        o = e.enableLive,
        a = e.isLivePlayback,
        i = e.manifestType,
        l = e.nowUnixMs,
        s = e.prev;
      if (
        !r ||
        !a ||
        !o ||
        (i !== "dynamic" && i !== "static") ||
        t <= 0 ||
        n == null
      )
        return { confirmed: !1, next: null };
      var u = i === "static" ? Math.min(t, k) : t,
        c =
          s != null && s.tailEndSec === n
            ? s
            : { sinceUnixMs: l, tailEndSec: n },
        d = l - c.sinceUnixMs >= u * 1e3;
      return { confirmed: d, next: c };
    }
    function nt(e, t) {
      if (e == null) return null;
      for (var n of e) if (n[0] <= t && t <= n[1]) return n[1] - t;
      return 0;
    }
    function rt(e, t, n, r) {
      var o;
      if (n <= 0 || e == null) return null;
      var a = (o = e[0]) == null ? void 0 : o[0];
      if (a == null) return null;
      var i = t - n;
      return i - a >= r ? i : null;
    }
    function ot(e) {
      var t = e.bufferedAheadSec,
        n = e.enableLive,
        r = e.fellBehindWindowSec,
        o = e.followEdgeActive,
        a = o === void 0 ? !0 : o,
        i = e.isLivePlayback,
        l = e.liveEdgeMediaTimeSec,
        s = e.playheadMediaTimeSec,
        u = e.proactiveDriftSec,
        c = u === void 0 ? 0 : u,
        d = e.refetchEnabled,
        m = e.starvationBufferAheadSec;
      if (!d || !i || !n || l == null || t == null) return !1;
      var p = l - s;
      return c > 0 && a && p > c ? !0 : t > m ? !1 : p > r;
    }
    function at(e) {
      var t = e.enableLive,
        n = e.fellBehindWindowSec,
        r = e.followEdgeActive,
        o = e.isLivePlayback,
        a = e.pairedRefetchEnabled,
        i = e.playheadMediaTimeSec,
        l = e.proactiveDriftSec,
        s = e.refetchBehindEdgeSec,
        u = e.refetchEnabled,
        c = e.starvationBufferAheadSec,
        d = e.streams;
      if (!a || !o || !t) return null;
      var m = null;
      for (var p of d) {
        var _ = p.confirmedLiveEdgeMediaTimeSec;
        if (
          _ != null &&
          ot({
            bufferedAheadSec: p.bufferedAheadSec,
            enableLive: t,
            fellBehindWindowSec: n,
            followEdgeActive: r,
            isLivePlayback: o,
            liveEdgeMediaTimeSec: _,
            playheadMediaTimeSec: i,
            proactiveDriftSec: l,
            refetchEnabled: u,
            starvationBufferAheadSec: c,
          })
        ) {
          var f = _ - s;
          m = m == null ? f : Math.min(m, f);
        }
      }
      return m;
    }
    function it(e, t) {
      var n = e.findIndex(function (e) {
          return (
            e.representationId === t.representationId &&
            Xe(e.segment, t.segment)
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
    function lt(e, t) {
      return "segment-" + e.type + "-" + e.representationId + "-" + Qe(t);
    }
    function st(e, t, n, r) {
      var a = n.segmentsInfo,
        i = lt(n, r),
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
                relativeURL: J(
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
    function ut(e, t, n, r) {
      if (r.length === 0)
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashPlaybackLoopGroupOfSegmentsFetchEmptySegments",
          "%s:%s - Group of segments fetch empty segments",
          n.type,
          n.representationId,
        );
      if (r.length === 1) return st(e, t, n, r[0]);
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
                lt(n, e),
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
    function ct(e, t, n, r) {
      r === void 0 && (r = !1);
      for (var o = !1, a = null, i = 0; i < e.length; ++i) {
        var l = e[i],
          s = l.dataKeyToResponseByteRange.get(t);
        if (s != null) {
          o = !0;
          var u = V(l, n);
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
          y = p.state === "done_buffer" ? G(p.buffer) : p.dataBytesLengthTotal,
          C = null;
        if (
          r &&
          (g || (m.byteLength != null && y >= m.byteOffset + m.byteLength))
        ) {
          var b = Zt(h, m.byteOffset, m.byteLength);
          C = b != null ? en(h, b) : null;
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
    function dt(e, t, n) {
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
    function mt(e, t, n) {
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
    function pt(e, t, n) {
      return e.map(function (e) {
        var r,
          o,
          a = V(e, n),
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
              return [t, ft(n)];
            },
          );
        return [u, i, s, l];
      });
    }
    function _t(e, t) {
      return (t === void 0 && (t = !1), JSON.stringify(pt(e, t)));
    }
    function ft(e) {
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
    function gt(e) {
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
            ft(e.segment.mediaFileByteRange) +
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
    function ht(e) {
      var t = e.segment.mediaFileByteRange.byteLength;
      return (
        e.dataByteRangeLength === 0 ||
        (t != null && e.dataByteRangeStart + e.dataByteRangeLength >= t)
      );
    }
    function yt(e) {
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
    function Ct(e) {
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
    function bt(e) {
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
    function vt(e) {
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
    function St(e) {
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
    function Rt(e, t) {
      return t != null
        ? e.host.sourceBufferSnapshotBuffered(e, t.sourceBuffer)
        : void 0;
    }
    function Lt(e) {
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
    function Et(e, t, n, r, a, i, l, g) {
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
                                byteLength: G(y.buffer),
                                dataByteRangeLength: t.dataByteRangeLength,
                                dataByteRangeStart: t.dataByteRangeStart,
                                segmentId: t.segment.segmentId,
                              },
                            }
                          : { int: { byteLength: G(y.buffer) } }
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
                    waitForMediaElementErrorUntilUnixMs: i.unixMs + De,
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
                  if (((v = g()), v != null && !Wt(v, $))) {
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
                          gt(y.appendInfo),
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
                  var H = babelHelpers.extends({}, W, {
                    error: U,
                    operationState: "errored",
                    operationTiming: V,
                    waitForMediaElementErrorUntilUnixMs: i.unixMs + De,
                  });
                  if (H.operationType === "append_operation") {
                    var z = H.buffer,
                      j = babelHelpers.objectWithoutPropertiesLoose(H, d);
                    return babelHelpers.extends({}, j, {
                      buffer: z instanceof Uint8Array ? z : void 0,
                    });
                  }
                  return H;
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
                      waitForMediaElementErrorUntilUnixMs: i.unixMs + De,
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
                        ? le(v, l)
                        : l,
                    representationId: I.appendInfo.representationId,
                  }
                : ht(I.appendInfo)
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
          w = kt(
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
              ? "/" + gt(y.appendInfo)
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
                ($ != null ? gt($.appendInfo) : "null"),
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
          M !== N && r.push(F + "...:appendChain:" + yt(N) + "-->" + yt(M)));
        var O =
          L != null
            ? it(h.workaroundForSegmentBufferedInsufficiently, L)
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
              Xe(e.segment, B.segment)
            );
          }) &&
            (O = O.map(function (e) {
              var t = e.nativeSeekRetry;
              return t != null &&
                t.pending &&
                e.representationId === B.representationId &&
                Xe(e.segment, B.segment)
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
    function kt(e, t, n, r, o) {
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
    function It(e) {
      var t = new Map();
      for (var n of e) {
        var r = o(
          "VideoPlayerNextgendashManifestParser",
        ).getDisplayLabelFromVideoRepresentation(n);
        t.has(r) || t.set(r, n);
      }
      return Array.from(t.values());
    }
    function Tt(e, t, n) {
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
    function Dt(e, t) {
      var n = Tt(e, t.videoLang, t.videoRole),
        r = n.debugFallbacksTried,
        o = n.filteredRepresentations;
      return { debugFallbacksTried: r, representationsByVariant: It(o) };
    }
    function xt(e, t) {
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
    function $t(e, t) {
      var n = Tt(e, t.audioLang, t.audioRole),
        r = n.debugFallbacksTried,
        o = n.filteredRepresentations;
      return { debugFallbacksTried: r, representationsByVariant: o };
    }
    function Pt(e, t, n) {
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
    function Nt(e, t, n, a, i, l, s, u, c, d, m, p, _, f, g, h, y, b, v, S) {
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
        ((k = I.representations), Pt(e, n, I));
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
        M = p != null ? p : H,
        w = Dt(k, M),
        A = w.debugFallbacksTried,
        F = w.representationsByVariant,
        O = C(
          e,
          F.map(function (e) {
            return e.representationId;
          }),
        ),
        B = xt(F, _);
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
          var V = vt(l),
            G = vt(k),
            z = vt(F),
            j = vt(B);
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
              "manifestRepresentations=" + V,
              "playableRepresentations=" + (G === V ? "same" : G),
              "blockedRepresentations=" + Ct(u),
              "targetVariantRepresentations=" + z,
              "filteredRepresentations=" + (j === z ? "same" : j),
              "fallbacksTried=" + A.join(";"),
            ),
          );
        }
      }
      var K = d != null ? d : H,
        Q = Mt(p, M, K, _, m);
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
          le =
            !re ||
            y == null ||
            o(
              "VideoPlayerNextgendashHostAPI",
            ).diffVideoPlayerNextgendashClockstamp(a, y).unixMs > ae,
          se = Q || x == null || X == null || (ie && le);
        if (se) {
          var ue,
            de = i(e, B, g),
            me = de.bestRepresentation,
            pe = !r("deepEquals")(de.nextABRState, g);
          if (
            (pe && ($ = C(e, de.nextABRState)),
            (re || pe || e.config.enableStableAbrEvaluationCooldown) &&
              (P = e.host.clock()),
            me != null &&
              me.representationId !==
                ((ue = x) == null ? void 0 : ue.representationId))
          ) {
            var _e = !Q && x != null && me.bandwidth > x.bandwidth,
              fe = b && _e,
              ge = !fe || ce(me, S, v);
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
    function Mt(e, t, n, r, o) {
      return (
        (e != null &&
          (t.videoLang !== n.videoLang || t.videoRole !== n.videoRole)) ||
        (r != null && r !== o)
      );
    }
    function wt(e, t, n) {
      return (
        e != null &&
        (t.audioLang !== n.audioLang || t.audioRole !== n.audioRole)
      );
    }
    function At(e, t, n, r, a, i, l, s, u) {
      var c,
        d =
          (c = r.find(function (e) {
            return e.representationId === l;
          })) != null
            ? c
            : null,
        m,
        p = d,
        _ = u != null ? u : H,
        f = $t(a, _),
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
          var L = St(r),
            E = St(a),
            k = St(h),
            I = St(b);
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
              "blockedRepresentations=" + Ct(i),
              "targetVariantRepresentations=" + k,
              "filteredRepresentations=" + (I === k ? "same" : I),
              "fallbacksTried=" + g.join(";"),
            ),
          );
        }
      }
      var T = s != null ? s : H,
        D = wt(u, _, T);
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
    function Ft(e, t, n, r, a, i, l, s, u, c) {
      var d = u,
        m,
        p,
        _,
        f;
      if (d.type === "video") {
        var g,
          h,
          y,
          b = U(e, a.mediaElementSnapshot),
          v = Nt(
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
        var x = At(
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
            "blockedRepresentations=" + Ct(d.blockedRepresentations),
          )
        );
      }
      return {
        prevTargetRepresentation: m,
        stream: Ot(
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
    function Ot(e, t, n, r, a, i, l, s, u) {
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
    function Bt(e, t, n) {
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
    function Wt(e, t) {
      return (
        Bt(e, t.mediaTimeRange, 0.05) ||
        (t.isEndingSegment && Bt(e, t.mediaTimeRange, 0.05))
      );
    }
    function qt(e, t, n, r) {
      return e == null || t !== e.representationId || e.mediaTail == null
        ? !1
        : r
          ? n.mediaTimeRange[1] <= e.mediaTail.mediaTimeSec + x
          : n.segmentId <= e.mediaTail.segmentId;
    }
    function Ut(e, t) {
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
    function Vt(e, t) {
      var n = e.filter(function (e) {
        return e.isPredictiveSegment !== !0;
      });
      if (t.length === 0) return { sidx: n, type: "merged" };
      var r = e[e.length - 1];
      if (n.length === 0)
        return r == null
          ? { sidx: t, type: "merged" }
          : {
              sidx: t.map(function (e, t) {
                return babelHelpers.extends({}, e, {
                  segmentId: r.segmentId + 1 + t,
                });
              }),
              type: "merged",
            };
      var o = n[0].mediaTimeRange[0],
        a = t[t.length - 1].mediaTimeRange[1];
      if (a < o - x)
        return { existingStartSec: o, freshEndSec: a, type: "timeline_reset" };
      var i = n[n.length - 1],
        l = i.mediaTimeRange[1],
        s = [];
      for (var u of t)
        u.mediaTimeRange[0] >= l - x &&
          s.push(
            babelHelpers.extends({}, u, {
              segmentId: i.segmentId + 1 + s.length,
            }),
          );
      return { sidx: [].concat(n, s), type: "merged" };
    }
    function Ht(e) {
      var t = e.filter(function (e) {
        return e.isPredictiveSegment !== !0;
      });
      return t.length === 0
        ? e
        : t.map(function (e, n) {
            var r = n === t.length - 1;
            return e.isEndingSegment === r
              ? e
              : babelHelpers.extends({}, e, { isEndingSegment: r });
          });
    }
    function Gt(e, t, n) {
      if (n <= 0 || t == null || e.length <= 1) return e;
      for (
        var r = t - n, o = 0;
        o < e.length - 1 && e[o].mediaTimeRange[1] <= r;
      )
        o++;
      return o === 0 ? e : e.slice(o);
    }
    function zt(e) {
      var t = e.segmentTimeline,
        n = e.timescale;
      if (t.length === 0) return null;
      var r = t[t.length - 1];
      return (r.t + (r.r + 1) * r.d) / n;
    }
    function jt(e, t, n, r, o) {
      return e.mediaTimeRange[1] > o + x
        ? !1
        : e.isPredictiveSegment === !0
          ? !0
          : n &&
            t.endNumber != null &&
            r != null &&
            e.mediaTimeRange[1] >= r - x;
    }
    function Kt(e, t) {
      return e.isPredictiveSegment === !0 && e.templateNumber != null
        ? e.templateNumber + 1
        : t.endNumber != null
          ? t.endNumber + 1
          : null;
    }
    function Qt(e, t, n) {
      var r = t[t.length - 1];
      if (r == null || e.endNumber == null) return t;
      var a = Kt(r, e);
      if (a == null) return t;
      var i = r.mediaTimeRange[1] - r.mediaTimeRange[0],
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
    function Xt(e, t, n, r, a) {
      var i = a ? Yt(r) : r,
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
    function Yt(e) {
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
    function Jt(e, t, n, r, a, i, l, s) {
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
          (se(i, a, u) ||
            (e.config.liveAppendChainForwardCoveredEscapeEnabled &&
              ue(i, a, c)))
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
              yt(r) +
              "-->" +
              yt(d) +
              "(playhead_outside)",
          ),
          d
        );
      }
      if (Math.abs(c - u) > b) {
        var m = [u, Math.max(a, c - b)];
        if (i === void 0 || !Bt(i, m, 0)) {
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
                yt(r) +
                "-->" +
                yt(p) +
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
                Lt(e.host.mediaSourceCollectSnapshot(e, l)) +
                ")",
            ),
            p
          );
        }
      }
      return r;
    }
    function Zt(e, t, n) {
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
    function en(e, t) {
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
    function tn(e, t, n, r, a) {
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
          p = bt(u),
          _ = bt(c),
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
            "blockedRepresentations=" + Ct(n.blockedRepresentations),
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
    function nn(e, t, n, r, a, i, l) {
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
                "blockedRepresentations=" + Ct(r.blockedRepresentations),
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
        tn(
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
    function rn(e, t, n, r, a, i, l) {
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
          var b = Et(
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
              return Rt(e, d);
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
            var v = Et(
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
                return Rt(e, d);
              },
            );
            v != null && (y = babelHelpers.extends({}, y, v));
          }
        }
        if (C != null) {
          var S = Et(
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
              return Rt(e, d);
            },
          );
          S != null && (y = babelHelpers.extends({}, y, S));
        }
        return y;
      }
      return null;
    }
    function on(e, t, n, r, a, i, l) {
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
              gt(d.appendInfo),
          ),
          h.appendInfoType === "data" && h.dataByteRangeLength === 0)
        ) {
          var b = Et(
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
              return Rt(e, m);
            },
          );
          b != null && (C = babelHelpers.extends({}, C, b));
        } else {
          var v;
          try {
            var S = Et(
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
                return Rt(e, m);
              },
            );
            (S != null && (C = babelHelpers.extends({}, C, S)),
              h.appendInfoType === "init" &&
                (r.push(
                  n.type +
                    ":" +
                    p +
                    ":abort:MSEbefore=" +
                    Lt(e.host.mediaSourceCollectSnapshot(e, l)),
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
                  Lt(e.host.mediaSourceCollectSnapshot(e, l)),
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
                  Lt(e.host.mediaSourceCollectSnapshot(e, l)),
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
            var A = Et(
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
                return Rt(e, m);
              },
            );
            A != null && (C = babelHelpers.extends({}, C, A));
          }
        }
        return C;
      }
      return null;
    }
    ((l.internal_getMediaErrorRecoveryAttemptsCap = W),
      (l.internal_predictPlayhead = q),
      (l.internal_getPlayheadTimeSec = U),
      (l.originalMediaVariant = H),
      (l.internal_shouldResetLiveRecoveryAttempts = j),
      (l.internal_isSourceBufferOperationTimedOut = K),
      (l.VideoPlayerNextgendashPlaybackLoopSM = Y),
      (l.internal_substituteParamsInSegmentURLTemplate = J),
      (l.internal_prioritizeFetchDemands = Z),
      (l.internal_evictFetchDemandsByFetchState = te),
      (l.internal_getNoMediaElementBufferAheadTargetSec = ie),
      (l.internal_getLiveABRTailSwitchAnchorTimeSec = le),
      (l.internal_isLiveAppendChainAheadOfPlayheadCoveredByBuffer = se),
      (l.internal_isPlayheadCoveredByBufferAheadOfAppendChainTail = ue),
      (l.internal_canLiveABRTailSwitchAppendAtBufferedTail = ce),
      (l.internal_computeABRVolatility = me),
      (l.internal_computeNetworkVolatility = pe),
      (l.internal_updateBandwidthVolatilitySamples = _e),
      (l.internal_computeBandwidthTrend = fe),
      (l.internal_evaluateSidxPrefetchTarget = ge),
      (l.internal_startFetchRequestsForFetchDemands = he),
      (l.internal_fulfillFetchDemands = ye),
      (l.internal_clampObserveAndActDelayMs = ve),
      (l.internal_coalesceAdjacentDebugLogLines = Ee),
      (l.internal_getEndOfStreamCheckpointSec = Ie),
      (l.internal_groupSegmentsToFetch = Ue),
      (l.internal_makeSegmentFetchKeyIdPart = Qe),
      (l.internal_isSameSegmentIdentity = Xe),
      (l.internal_shouldRetryLiveSegmentAfterFetchFailure = Ye),
      (l.internal_isEmptyCompletePredictiveSegmentFetch = Je),
      (l.internal_getConfirmedSidxLiveEdgeTimeSec = Ze),
      (l.internal_getStreamDrainedConfirmedTailEndSec = et),
      (l.internal_updateLiveEndedByStallState = tt),
      (l.internal_getBufferedAheadSecForPlayhead = nt),
      (l.internal_getBackBufferRemoveEndSec = rt),
      (l.internal_shouldRefetchAtLiveEdge = ot),
      (l.internal_computePairedRefetchAnchorSec = at),
      (l.internal_addBoundedWorkaroundForSegmentBufferedInsufficiently = it),
      (l.makeSegmentFetchDataKey = lt),
      (l.internal_makeGroupOfSegmentsFetchDemand = ut),
      (l.findDataForDataKey = ct),
      (l.debugPrepareFetchDemands = pt),
      (l.internal_handleSourceBufferEvent = Et),
      (l.internal_updateSourceBufferRangesAnnotated = kt),
      (l.internal_filterVideoRepresentationsByVariant = Dt),
      (l.internal_filterAudioRepresentationsByVariant = $t),
      (l.internal_selectTargetVideoRepresentation = Nt),
      (l.internal_selectTargetAudioRepresentation = At),
      (l.internal_checkRangeBufferedWithoutGap = Bt),
      (l.internal_isSegmentBeforeAppendAnchor = qt),
      (l.internal_makeSidxFromSegmentTemplate = Ut),
      (l.internal_mergeLiveSidx = Vt),
      (l.internal_finalizeLiveSidxAtStaticFlip = Ht),
      (l.internal_trimSidxToLiveLookbackBuffer = Gt),
      (l.internal_getSegmentTemplateLiveEdgeMediaTimeSec = zt),
      (l.internal_canExtendPredictiveChainFromTail = jt),
      (l.internal_getNextPredictiveTemplateNumber = Kt),
      (l.internal_addPredictiveSegmentsToSidx = Qt),
      (l.internal_validateAndNormalizeSidx = Xt),
      (l.internal_selectDataChunksToAppend = Zt),
      (l.internal_combineDataChunksIntoContiguousBuffer = en),
      (l.internal_blockRepresentationInStream = nn),
      (l.internal_startPendingRemoveOperation = rn),
      (l.internal_startPendingAppendOperation = on));
  },
  98,
);
