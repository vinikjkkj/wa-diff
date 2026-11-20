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
      g = ["predictedURLNumber"],
      h,
      y = [],
      C = new Uint8Array(0);
    function b(e, t) {
      return e === "MSE_TRACK_REUSE" && !t;
    }
    function v(e, t) {
      return e.config.optimizeAutoDisposeTraversal
        ? o(
            "VideoPlayerNextgendashStateMachine",
          ).skipAutoDisposeInsideThisObject(t)
        : t;
    }
    var S = 0.001,
      R = 0.2,
      L = 0.1,
      E = 30,
      k = 0.5,
      I = 6,
      T = 1,
      D = 3,
      x = 13,
      $ = 6e4,
      P = 0.6,
      N = 0.001,
      M = 5e3,
      w = 128,
      A =
        "VideoPlayerNextgendashHostAPISourceBufferAppendBufferQuotaExceededException",
      F =
        /VideoPlayerNextgendashHostAPISourceBufferAppendBufferQuotaExceededException(?:\/|$)/,
      O = 30,
      B = 3,
      W = 6e4,
      q = 1,
      U = 3;
    function V(e, t) {
      return (e == null ? void 0 : e.code) === U && t ? q : B;
    }
    function H(e, t, n) {
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
    function G(e, t) {
      var n,
        r =
          (n = t == null ? void 0 : t.currentTime) != null
            ? n
            : e.config.startTimestampSec;
      return (e.config.isLivePlayback || e.config.vodStartTimestampPending) &&
        r === 0 &&
        e.config.startTimestampSec > 0
        ? e.config.startTimestampSec
        : t != null && e.config.playheadPredictIntervalMs > 0
          ? H(
              t,
              e.host.clockPerfOriginMs + e.host.clock().perfMs,
              e.config.playheadPredictIntervalMs / 1e3,
            )
          : r;
    }
    function z(e, t) {
      if (t != null && e.poolTrackingID != null) {
        var n;
        return (n = t.getFetchState(e.poolTrackingID)) != null
          ? n
          : { state: "submitted_to_pool" };
      } else if (e.responseFetch != null) return e.responseFetch.state;
      return null;
    }
    function j(e, t, n) {
      return e.some(function (e) {
        if (!e.activeDemands.has(t) || e.evictedClock != null) return !1;
        var r = z(e, n);
        return (
          r == null ||
          (r.state !== "failed" &&
            r.state !== "aborted" &&
            r.state !== "__disposed__")
        );
      });
    }
    var K = {
      audioLang: null,
      audioRole: null,
      videoLang: null,
      videoRole: null,
    };
    function Q(e) {
      return e.byteLength;
    }
    function X(e) {
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
    function Y(e) {
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
        ).perfMs >= W
      );
    }
    function J(e, t, n) {
      if (
        (n === void 0 && (n = M),
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
    function Z(e, t) {
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
    function ee(e, t) {
      return function (n, r, o) {
        e({ requestID: t, type: "_fetch_transitioned" }, o);
      };
    }
    var te = o("VideoPlayerNextgendashStateMachine").defineStateMachine(
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
              loopReasons: Ue(i, 0, y, "0:initial"),
              loopScheduledToUnixMs: l.unixMs,
              loopTimerDelayMs: null,
              loopTimerID: null,
            }),
            mediaSourceState: Be(i, s, a, null, r.dashManifestData),
            playerStateFromMain: r,
            playerWarningDedupMap: v(i, new Map()),
            recoveringFromMediaError: null,
            recoveringFromMediaErrorAttempt: 0,
            recoveringFromMediaErrorAttemptStartedClock: null,
            state: "playing",
            streams: [],
            volatilityState: i.config.enableDynamicBufferWatermarks
              ? v(i, {
                  abrSwitchTimestamps: [],
                  bandwidthSamples: [],
                  lastBandwidthDiagnosticsSignature: null,
                  pendingSpeculativeSidxKeys: new Map(),
                })
              : null,
          };
        return (t = He(i, u, u.loopState.loopIteration, e)) != null ? t : u;
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
          if (n != null || l >= B) {
            var s = [];
            throw (
              n != null && s.push("already attempting a recovery"),
              l >= B && s.push("already reached max attempts"),
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
          var p = Be(
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
              debugPlaybackLoopRecentChanges: qe(
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
                return De(i, t, l.type + ":" + l.requestID, 0, c);
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
                  (Oe(i, y),
                  i.config.mediaSinkType === "HYBRID" &&
                    c.playerStateFromMain.dashManifestData == null &&
                    y != null &&
                    (c.mediaSourceState.mediaSourceCleanup(),
                    (h = babelHelpers.extends({}, h, {
                      mediaSourceState: Be(
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
                  if (
                    ((h = babelHelpers.extends({}, h, {
                      streams: h.streams.map(function (e) {
                        var t = Dn(i, S, e, y);
                        if (R || L) {
                          var n = {};
                          for (var r of t.playableRepresentations)
                            if (r.segmentsInfo.type === "SegmentTemplate") {
                              var a = r.segmentsInfo,
                                l = i.config.enableLive
                                  ? a.segmentTimelinePredictive
                                  : null,
                                s =
                                  i.config.isLivePlayback &&
                                  i.config
                                    .liveListedSegmentsUsePredictedURLEnabled &&
                                  t.listedSegmentsPredictedURLFailed !== !0
                                    ? bn(pn(a, !0), l)
                                    : pn(a, !0),
                                u = Ln(i, t.type, r.representationId, s, !0),
                                c =
                                  t.sidxByRepresentationId[r.representationId],
                                d = _n(c != null ? c : [], u);
                              if (L) {
                                n[r.representationId] = fn(
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
                              ((m = gn(m, E, i.config.liveLookbackBufferSec)),
                                (n[r.representationId] =
                                  l != null
                                    ? Rn(
                                        l,
                                        m,
                                        a.timescale,
                                        i.config.isLivePlayback &&
                                          i.config
                                            .livePredictiveSegmentFetchKeyByNumber,
                                      )
                                    : m));
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
                      debugPlaybackLoopRecentChanges: qe(
                        h.debugPlaybackLoopRecentChanges,
                        S,
                      ),
                    })),
                    R &&
                      i.config.isLivePlayback &&
                      i.config.liveSetSeekableRangeEnabled &&
                      i.config.mediaSinkType === "MSE")
                  ) {
                    var k = pt(h.streams);
                    k != null &&
                      (i.host.mediaSourceSetLiveSeekableRange == null ||
                        i.host.mediaSourceSetLiveSeekableRange(
                          i,
                          h.mediaSourceState.mediaSource,
                          0,
                          k,
                        ));
                  }
                }
                var I = (_ = g.mediaElementSnapshot) == null ? void 0 : _.error,
                  T = V(I, i.config.fatalErrorOnMediaErrorRecoveryCapReached);
                if (
                  I != null &&
                  !h.recoveringFromMediaError &&
                  h.recoveringFromMediaErrorAttempt < T
                )
                  h = m(
                    h,
                    o("nextgendasherr").nextgendasherrFromMediaError(i, I),
                  );
                else if (
                  h.recoveringFromMediaError &&
                  g.mediaElementSnapshot != null &&
                  g.mediaElementSnapshot.error == null &&
                  g.mediaSourceIndexApplied ===
                    h.mediaSourceState.mediaSourceIndex
                ) {
                  var D = h,
                    x = D.recoveringFromMediaError;
                  (a(
                    o("nextgendasherr").nextgendasherrFromCause(
                      i,
                      x,
                      "VideoPlayerNextgendashPlaybackLoopRecoveredFromMediaError",
                    ),
                  ),
                    (h = babelHelpers.extends({}, h, {
                      debugPlaybackLoopRecentChanges: qe(
                        h.debugPlaybackLoopRecentChanges,
                        ["recoveringFromMediaError:" + x.name + ":recovered"],
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
                  I != null &&
                  !h.recoveringFromMediaError &&
                  h.recoveringFromMediaErrorAttempt >= T &&
                  i.config.fatalErrorOnMediaErrorRecoveryCapReached
                )
                  return (
                    u({
                      exception: o("nextgendasherr").nextgendasherrFromCause(
                        i,
                        o("nextgendasherr").nextgendasherrFromMediaError(i, I),
                        "VideoPlayerNextgendashPlaybackLoopMediaErrorRecoveryAttemptsExhausted",
                        "Reached media error recovery attempt cap (%s) with media element still in error",
                        T,
                      ),
                      type: "__exception",
                    }),
                    h
                  );
                return (f = De(i, t, l.type + ":" + l.reason, 0, h)) != null
                  ? f
                  : h;
              }
              case "notify_deliberate_detach_for_unmount": {
                var $,
                  P = c,
                  N =
                    "DeliberateDetachForUnmount:" +
                    l.mediaSourceIndex +
                    ":" +
                    P.mediaSourceState.mediaSourceIndex;
                return (
                  l.mediaSourceIndex === P.mediaSourceState.mediaSourceIndex
                    ? (P = babelHelpers.extends({}, P, {
                        debugPlaybackLoopRecentChanges: qe(
                          P.debugPlaybackLoopRecentChanges,
                          [N + "->expectSourceClose"],
                        ),
                        expectSourceCloseForMediaSourceIndex:
                          l.mediaSourceIndex,
                      }))
                    : (P = babelHelpers.extends({}, P, {
                        debugPlaybackLoopRecentChanges: qe(
                          P.debugPlaybackLoopRecentChanges,
                          [N + "->mediaSourceIndexMismatch"],
                        ),
                      })),
                  ($ = De(i, t, "" + l.type, 0, P)) != null ? $ : P
                );
              }
              case "request_recovery_from_source_reset": {
                var M,
                  w = c,
                  A =
                    "SourceResetRecoveryRequest:" +
                    l.mediaSourceIndex +
                    ":" +
                    w.mediaSourceState.mediaSourceIndex;
                if (l.mediaSourceIndex !== w.mediaSourceState.mediaSourceIndex)
                  w = babelHelpers.extends({}, w, {
                    debugPlaybackLoopRecentChanges: qe(
                      w.debugPlaybackLoopRecentChanges,
                      [A + "->mediaSourceIndexMismatch"],
                    ),
                  });
                else if (
                  !w.recoveringFromMediaError &&
                  w.recoveringFromMediaErrorAttempt < B
                )
                  w = m(
                    babelHelpers.extends({}, w, {
                      debugPlaybackLoopRecentChanges: qe(
                        w.debugPlaybackLoopRecentChanges,
                        [A + "->beginErrorRecoveryDueToElementSourceReset"],
                      ),
                    }),
                    o("nextgendasherr").nextgendasherr(
                      i,
                      "VideoPlayerNextgendashPlaybackLoopElementSourceResetAsError",
                    ),
                  );
                else {
                  var F = [];
                  (w.recoveringFromMediaError &&
                    F.push("StillAttemptingPreviousRecovery"),
                    w.recoveringFromMediaErrorAttempt >= B &&
                      F.push("ReachedRetryCap"),
                    (w = babelHelpers.extends({}, w, {
                      debugPlaybackLoopRecentChanges: qe(
                        w.debugPlaybackLoopRecentChanges,
                        [A + "->" + F.join(":")],
                      ),
                    })));
                }
                return (M = De(i, t, "" + l.type, 0, w)) != null ? M : w;
              }
              case "_media_source_event": {
                var O,
                  W = c,
                  q =
                    "mediaSourceEvent:" +
                    l.mediaSourceIndex +
                    ":" +
                    l.mediaSourceEventType;
                if (
                  l.mediaSource !== W.mediaSourceState.mediaSource ||
                  l.mediaSourceIndex !== W.mediaSourceState.mediaSourceIndex
                )
                  W = babelHelpers.extends(
                    {},
                    W,
                    {
                      debugPlaybackLoopRecentChanges: qe(
                        W.debugPlaybackLoopRecentChanges,
                        [
                          q +
                            "->mediaSourceMismatch:" +
                            W.mediaSourceState.mediaSourceIndex,
                        ],
                      ),
                    },
                    l.mediaSourceEventType === "sourceclose" &&
                      W.expectSourceCloseForMediaSourceIndex ===
                        l.mediaSourceIndex
                      ? { expectSourceCloseForMediaSourceIndex: null }
                      : null,
                  );
                else if (
                  W.mediaSourceState.waitingForFirstSourceopen &&
                  l.mediaSourceEventType === "sourceopen"
                )
                  W = babelHelpers.extends({}, W, {
                    debugPlaybackLoopRecentChanges: qe(
                      W.debugPlaybackLoopRecentChanges,
                      [q + "->first"],
                    ),
                    expectSourceCloseForMediaSourceIndex: null,
                    mediaSourceState: babelHelpers.extends(
                      {},
                      W.mediaSourceState,
                      { waitingForFirstSourceopen: !1 },
                    ),
                  });
                else if (l.mediaSourceEventType === "sourceclose")
                  if (
                    W.expectSourceCloseForMediaSourceIndex != null &&
                    W.expectSourceCloseForMediaSourceIndex ===
                      l.mediaSourceIndex
                  )
                    W = babelHelpers.extends({}, W, {
                      debugPlaybackLoopRecentChanges: qe(
                        W.debugPlaybackLoopRecentChanges,
                        [q + "->expectedDetachForUnmount"],
                      ),
                      expectSourceCloseForMediaSourceIndex: null,
                    });
                  else if (
                    !W.recoveringFromMediaError &&
                    W.recoveringFromMediaErrorAttempt < B
                  )
                    W = m(
                      babelHelpers.extends({}, W, {
                        debugPlaybackLoopRecentChanges: qe(
                          W.debugPlaybackLoopRecentChanges,
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
                      (W.recoveringFromMediaError &&
                        U.push("StillAttemptingPreviousRecovery"),
                      W.recoveringFromMediaErrorAttempt >= B &&
                        U.push("ReachedRetryCap"),
                      (W = babelHelpers.extends({}, W, {
                        debugPlaybackLoopRecentChanges: qe(
                          W.debugPlaybackLoopRecentChanges,
                          [q + "->" + U.join(":")],
                        ),
                      })),
                      !W.recoveringFromMediaError &&
                        W.recoveringFromMediaErrorAttempt >= B &&
                        i.config.fatalErrorOnMediaErrorRecoveryCapReached)
                    )
                      return (
                        u({
                          exception: o("nextgendasherr").nextgendasherr(
                            i,
                            "VideoPlayerNextgendashPlaybackLoopSourceCloseRecoveryAttemptsExhausted",
                            "MediaSource closed after reaching recovery attempt cap (%s)",
                            B,
                          ),
                          type: "__exception",
                        }),
                        W
                      );
                  }
                else
                  W = babelHelpers.extends(
                    {},
                    W,
                    {
                      debugPlaybackLoopRecentChanges: qe(
                        W.debugPlaybackLoopRecentChanges,
                        [q],
                      ),
                    },
                    l.mediaSourceEventType === "sourceopen"
                      ? { expectSourceCloseForMediaSourceIndex: null }
                      : null,
                  );
                return (O = De(
                  i,
                  t,
                  l.type + ":" + l.mediaSourceEventType,
                  0,
                  W,
                )) != null
                  ? O
                  : W;
              }
              case "_native_sidx_result": {
                var H,
                  G,
                  z = l.parse,
                  j = z.representation,
                  K = c.streams.find(function (e) {
                    return e.nativeSidxParse === z;
                  });
                if (
                  K == null ||
                  z.mediaSourceIndex !== c.mediaSourceState.mediaSourceIndex
                )
                  return;
                var Q = K.nativeSidxParse,
                  Z = babelHelpers.objectWithoutPropertiesLoose(K, e),
                  ee = Z,
                  te = [];
                if (l.result === "failed") {
                  var ne = c.playerStateFromMain.dashManifestData;
                  ne != null &&
                    (ee = xn(i, a, te, ee, ne, j.representationId, l.error));
                } else {
                  var re,
                    oe,
                    ae,
                    ie,
                    le,
                    se = l.items,
                    ue = i.config
                      .sidxDisableShiftingMediaTimeRangesByEarliestPresentationTime
                      ? 0
                      : ((re = (oe = se[0]) == null ? void 0 : oe.startTicks) !=
                        null
                          ? re
                          : 0) /
                        ((ae = (ie = se[0]) == null ? void 0 : ie.timescale) !=
                        null
                          ? ae
                          : 1),
                    ce = Ln(
                      i,
                      ee.type,
                      j.representationId,
                      se.map(function (e, t) {
                        return {
                          isEndingSegment: t === se.length - 1,
                          mediaFileByteRange: {
                            byteLength: e.byteLength,
                            byteOffset: e.byteOffset,
                          },
                          mediaTimeRange: [
                            e.startTicks / e.timescale - ue,
                            (e.startTicks + e.durationTicks) / e.timescale - ue,
                          ],
                          segmentId: t,
                        };
                      }),
                      !1,
                    );
                  ((ee = babelHelpers.extends({}, ee, {
                    sidxByRepresentationId: o(
                      "VideoPlayerNextgendashStateMachine",
                    ).skipAutoDisposeInsideThisObject(
                      babelHelpers.extends(
                        {},
                        ee.sidxByRepresentationId,
                        ((le = {}), (le[j.representationId] = ce), le),
                      ),
                    ),
                  })),
                    te.push(
                      ee.type +
                        ":" +
                        j.representationId +
                        ":sidx/native:" +
                        se.length +
                        ":" +
                        ce.length,
                    ));
                }
                var de = babelHelpers.extends({}, c, {
                  debugPlaybackLoopRecentChanges: qe(
                    c.debugPlaybackLoopRecentChanges,
                    te,
                  ),
                  fetchDemands:
                    (H = At(
                      c.fetchDemands,
                      function (e) {
                        return e === Ze(j);
                      },
                      t.args.fetchPoolAPI,
                    )) != null
                      ? H
                      : c.fetchDemands,
                  streams: c.streams.map(function (e) {
                    return e === K ? ee : e;
                  }),
                });
                return ee.streamFatalError != null && K.streamFatalError == null
                  ? (u({
                      exception: o(
                        "nextgendasherr",
                      ).nextgendasherrFromMultipleCauses(
                        i,
                        de.streams
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
                    de)
                  : (G = De(i, t, l.type, 0, de)) != null
                    ? G
                    : de;
              }
              case "_source_buffer_event": {
                var me = c.streams.find(function (e) {
                    var t;
                    return (
                      ((t = e.sourceBufferState) == null
                        ? void 0
                        : t.sourceBuffer) === l.sourceBuffer
                    );
                  }),
                  pe =
                    me == null
                      ? void 0
                      : me.appendState.currSourceBufferOperation;
                if (me != null && pe != null) {
                  var _e = !1,
                    fe = [],
                    ge = c.streams.map(function (e) {
                      var t, n;
                      if (e !== me) return e;
                      var r = Qt(
                        i,
                        a,
                        e,
                        fe,
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
                          return jt(i, e.sourceBufferState);
                        },
                      );
                      return r != null
                        ? ((_e = !0), babelHelpers.extends({}, e, r))
                        : e;
                    }),
                    he = babelHelpers.extends({}, c, {
                      debugPlaybackLoopRecentChanges: qe(
                        c.debugPlaybackLoopRecentChanges,
                        fe,
                      ),
                      streams: ge,
                    });
                  if (_e) {
                    var ye;
                    return (ye = De(
                      i,
                      t,
                      l.type +
                        ":" +
                        l.sourceBufferEventType +
                        ":" +
                        pe.operationState +
                        ":stateHasChanged",
                      0,
                      he,
                    )) != null
                      ? ye
                      : he;
                  } else
                    return i.config.disablePlaybackLoopSchedulingOnTimer
                      ? c
                      : De(
                          i,
                          t,
                          l.type +
                            ":" +
                            l.sourceBufferEventType +
                            ":" +
                            pe.operationState +
                            ":!stateHasChanged",
                          ke,
                          c,
                        );
                } else
                  return i.config.disablePlaybackLoopSchedulingOnTimer
                    ? c
                    : De(
                        i,
                        t,
                        l.type +
                          ":" +
                          l.sourceBufferEventType +
                          ":null_currSourceBufferOperation",
                        ke,
                        c,
                      );
              }
              case "_observe_and_act": {
                var Ce = Y({
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
                    Ce.recoveringFromMediaError == null
                      ? Ce.streams.find(function (e) {
                          return J(e.appendState.currSourceBufferOperation, s);
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
                  var Se,
                    Re,
                    Le,
                    Ee = ve.operationTiming,
                    Ie = Ee.started;
                  if (Ie == null) return He(i, Ce, l.loopIteration, t);
                  var Te = o(
                      "VideoPlayerNextgendashHostAPI",
                    ).diffVideoPlayerNextgendashClockstamp(s, Ie).unixMs,
                    xe = o("nextgendasherr").nextgendasherr(
                      i,
                      "VideoPlayerNextgendashPlaybackLoopLiveSourceBufferOperationTimedOut",
                      "%s:%s SourceBuffer operation stuck in wait_updateend for %sms: %s",
                      be.type,
                      (Se = be.targetRepresentationId) != null
                        ? Se
                        : "no_target_representation",
                      Te,
                      X(ve),
                    ),
                    $e =
                      "liveSourceBufferOperationTimedOut:" +
                      be.type +
                      ":" +
                      ((Re = be.targetRepresentationId) != null
                        ? Re
                        : "no_target_representation") +
                      ":" +
                      Te +
                      "ms";
                  if (Ce.recoveringFromMediaErrorAttempt < B) {
                    var Pe,
                      Ne = babelHelpers.extends({}, Ce, {
                        debugPlaybackLoopRecentChanges: qe(
                          Ce.debugPlaybackLoopRecentChanges,
                          [$e + "->beginErrorRecovery:" + X(ve)],
                        ),
                      }),
                      Me = m(Ne, xe);
                    return (Pe = De(
                      i,
                      t,
                      l.type + ":liveSourceBufferOperationTimedOut",
                      0,
                      Me,
                    )) != null
                      ? Pe
                      : Me;
                  }
                  var we = babelHelpers.extends({}, Ce, {
                    debugPlaybackLoopRecentChanges: qe(
                      Ce.debugPlaybackLoopRecentChanges,
                      [
                        "liveSourceBufferOperationTimedOut:" +
                          be.type +
                          ":" +
                          ((Le = be.targetRepresentationId) != null
                            ? Le
                            : "no_target_representation") +
                          "->ReachedRetryCap",
                      ],
                    ),
                  });
                  return (
                    u({
                      exception: o("nextgendasherr").nextgendasherrFromCause(
                        i,
                        xe,
                        "VideoPlayerNextgendashPlaybackLoopLiveSourceBufferOperationTimeoutRecoveryAttemptsExhausted",
                        "Reached media error recovery attempt cap (%s) with SourceBuffer operation still stuck in wait_updateend",
                        B,
                      ),
                      type: "__exception",
                    }),
                    we
                  );
                }
                return He(i, Ce, l.loopIteration, t);
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
    function ne(e, t, n, r, a) {
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
    function re(e, t, n, r, o) {
      var a = r.segmentTimelinePredictive;
      return a != null && o.isPredictiveSegment === !0
        ? ne(e, t, n, a.segmentURLTemplate, o)
        : a != null && o.predictedURLNumber != null
          ? ne(
              e,
              t,
              n,
              a.segmentURLTemplate,
              babelHelpers.extends({}, o, {
                templateNumber: o.predictedURLNumber,
              }),
            )
          : ne(e, t, n, r.segmentURLTemplate, o);
    }
    function oe(e, t) {
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
    function ae(e) {
      for (var t of e.dataKeyToResponseByteRange.keys())
        if (!t.startsWith("init-") && !t.startsWith("sidx-")) return !1;
      return !0;
    }
    function ie(e, t, n, r, o, a) {
      for (var i = 0; i < t.length; ++i) {
        var l = t[i],
          s = z(l, a);
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
              var c = ae(l);
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
    var le = 5 * 1e3;
    function se(e, t) {
      if (e.config.isLivePlayback) return !1;
      var n = o("videoUrlUtils").parseCdnUrlParams(t).expirationDate;
      return n != null && n.getTime() - le <= e.host.clock().unixMs;
    }
    function ue(e, t) {
      return (
        !e.config.enableLive ||
        o("VideoPlayerNextgendashURLUtils").isAbsoluteUrl(t)
      );
    }
    function ce(e, t) {
      return (
        se(e, t.baseURL) ||
        (t.type === "BaseURLInitURL" && ue(e, t.initURL) && se(e, t.initURL))
      );
    }
    function de(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (r[0] <= t && t <= r[1]) return (r[1] - t) * 1e3;
      }
      return 0;
    }
    function me(e, t) {
      return e > 0 ? e : t;
    }
    function pe(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (r[0] <= t && t <= r[1]) return Math.max(t, r[1]);
      }
      return t;
    }
    function _e(e, t, n) {
      return e !== void 0 && t < n && cn(e, [t, n], R);
    }
    function fe(e, t, n) {
      return e !== void 0 && t >= n && cn(e, [n, t], R);
    }
    var ge = 2;
    function he(e, t, n, r) {
      if ((r === void 0 && (r = !1), t == null || n == null)) return !0;
      var o = e.segmentsInfo;
      if (o.type !== "SegmentTemplate") return !0;
      var a = pe(t, n),
        i = pn(o, !0),
        l = i.find(function (e) {
          return e.mediaTimeRange[1] > a - N;
        }),
        s = o.segmentTimelinePredictive,
        u = i[i.length - 1];
      if (l == null && r && s != null && s.endNumber != null && u != null) {
        var c =
          s.segmentAverageDuration != null
            ? s.segmentAverageDuration / o.timescale
            : u.mediaTimeRange[1] - u.mediaTimeRange[0];
        return u.mediaTimeRange[1] + ge * c >= a - R;
      }
      return l != null && l.mediaTimeRange[0] <= a + R;
    }
    function ye(e, t) {
      return t ? (e < 2e3 ? 3 : e < 5e3 ? 2 : 1) : 1;
    }
    function Ce(e, t, n) {
      n === void 0 && (n = 3e4);
      var r = e.filter(function (e) {
        return t - e < n;
      });
      return Math.min(r.length / 3, 1);
    }
    function be(e, t, n) {
      n === void 0 && (n = $);
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
    function ve(e, t, n, r) {
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
      var i = r - $;
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
    function Se(e, t, n) {
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
    function Re(e, t, n, r, o) {
      if (t.length <= 1) return null;
      var a = Se(n, o),
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
    function Le(e, t, n, r, o, a, i, l) {
      for (var s = 2, u = 1, c = 1, d = 0; d < t.length; ++d) {
        var m = t[d];
        if (!(m.responseFetch != null || m.poolTrackingID != null)) {
          if (e.config.enableCdnUrlRefresh && ce(e, m.requestInfoArgs)) {
            m.isAwaitingUrlRefresh ||
              (t[d] = babelHelpers.extends({}, m, {
                isAwaitingUrlRefresh: !0,
              }));
            continue;
          }
          var p = ae(m),
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
              g = ye(v, S);
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
    function Ee(e, t, n, r, a, i, l) {
      var s = new Map(),
        u = new Map();
      ie(e, n, s, u, r, t.args.fetchPoolAPI);
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
          f = Z(e, n.requestInfoArgs),
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
              ? ee(_, n.requestDraft.requestID)
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
                ? ee(_, n.requestDraft.requestID)
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
      if ((Le(e, n, s, u, d, r, i, l), c != null && c.size > 0)) {
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
    var ke = 1e3,
      Ie = 20;
    function Te(e, t, n) {
      return Math.max(0, e, t ? n : 0);
    }
    function De(e, t, a, i, l, s) {
      s === void 0 && (s = 0);
      var u = t.args.sendPlayerWarningToMain,
        c = t.sendToSelf,
        d = e.host.clock().unixMs,
        m = d + i,
        p = l.loopState;
      if (p.loopScheduledToUnixMs == null || m < p.loopScheduledToUnixMs) {
        var _ = p.loopTimerID;
        _ != null && (e.host.timers.clearTimeout(_), (_ = null));
        var f = Te(
            m - d,
            e.config.isLivePlayback,
            e.config.liveObserveAndActMinDelayMs,
          ),
          g = l.loopState.loopIteration + 1,
          y = l.debugPlaybackLoopRecentChanges,
          C =
            g +
            ":" +
            a +
            ":" +
            (f <= 0 ? "immediately" : "new_timer=" + f + "ms"),
          b = function () {
            try {
              c({ loopIteration: g, reason: C, type: "_observe_and_act" });
            } catch (t) {
              u(
                o("nextgendasherr").nextgendasherrFromCause(
                  e,
                  t,
                  "VideoPlayerNextgendashPlaybackLoopScheduleObserveAndActUnexpectedException",
                  'Caught exception from sendToSelf({loopIteration:%s,reason:"%s"})',
                  g,
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
                loopReasons: Ue(e, p.loopIteration, p.loopReasons, C),
                loopScheduledToUnixMs: d + f,
                loopTimerDelayMs: f,
                loopTimerID: f > 0 ? e.host.timers.setTimeout(b, f) : null,
              }),
            ),
          });
        return f > 0
          ? v
          : s >= Ie
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
              (h || (h = n("Promise")))
                .resolve()
                .then(b)
                .catch(r("emptyFunction")),
              v)
            : He(e, v, g, t, s);
      } else return;
    }
    var xe = " ** ",
      $e = /^(.*)[ ][*][*][ ](\d+)$/;
    function Pe(e) {
      var t = [],
        n = null,
        r = 0;
      for (var o of e) {
        var a = o.includes(xe) ? $e.exec(o) : null,
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
        (Ne(t, n, r), (n = s), (r = i));
      }
      return (Ne(t, n, r), t);
    }
    function Ne(e, t, n) {
      t != null && e.push("" + t + (n === 1 ? "" : " ** " + n));
    }
    function Me(e, t, n, r) {
      return n ? e : Math.max(0, t - r);
    }
    function we(e, t, n, r) {
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
                          rt(e.segment, _)
                        );
                      },
                    )),
                g = Me(p[0], p[1], f, e.config.endOfStreamBufferToleranceSec);
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
    var Ae = 2e3;
    function Fe(e, t, n, r, a) {
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
    function Oe(e, t) {
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
    function Be(e, t, n, r, a) {
      Oe(e, a);
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
    var We = 60;
    function qe(e, t) {
      return t.length === 0
        ? e
        : o(
            "VideoPlayerNextgendashStateMachine",
          ).skipAutoDisposeInsideThisObject(
            [].concat(e.slice(0, -1), Pe([].concat(e.slice(-1), t))).slice(-We),
          );
    }
    function Ue(e, t, n, r) {
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
        : y;
    }
    function Ve(e, t) {
      return new Set(
        t
          .filter(function (e) {
            return e.isAwaitingUrlRefresh;
          })
          .map(function (t) {
            var n = [t.requestInfoArgs.baseURL];
            return (
              t.requestInfoArgs.type === "BaseURLInitURL" &&
                ue(e, t.requestInfoArgs.initURL) &&
                n.push(t.requestInfoArgs.initURL),
              n
            );
          })
          .flat(),
      );
    }
    function He(e, t, n, r, a) {
      var i, l;
      a === void 0 && (a = 0);
      var s = r.eventClock,
        u = r.sendToSelf,
        c = r.args.requestUrlRefresh;
      if (!(n < t.loopState.loopIteration)) {
        var d = t.loopState.loopTimerID;
        d != null && (e.host.timers.clearTimeout(d), (d = null));
        var m = t.playerStateFromMain.dashManifestData;
        Oe(e, m);
        var p = 10,
          _ = 10,
          f = [],
          g = [],
          h = 0,
          y = s,
          C = y,
          b = e.config.enableCdnUrlRefresh ? Ve(e, t.fetchDemands) : null,
          S = t.fetchDemands,
          R = t.streams,
          L = R,
          D = !1,
          x = !1,
          N = function () {
            (++h, (L = R), (D = !1), (x = !1), (g.length = 0));
            try {
              if (m) {
                var a = G(e, t.playerStateFromMain.mediaElementSnapshot),
                  i = Dt({
                    enableLive: e.config.enableLive,
                    fellBehindWindowSec: E,
                    followEdgeActive: e.config.liveFollowEdgeActive,
                    isLivePlayback: e.config.isLivePlayback,
                    pairedRefetchEnabled:
                      e.config.liveFellBehindPairedRefetchEnabled &&
                      !kt(
                        e.config.livePausedEdgeRefetchSuspendEnabled,
                        t.playerStateFromMain.mediaElementSnapshot,
                      ),
                    playheadMediaTimeSec: a,
                    proactiveDriftSec:
                      e.config.liveFellBehindEdgeReseekDriftSec,
                    refetchBehindEdgeSec: I,
                    refetchEnabled:
                      e.config.liveFellBehindWindowRefetchEnabled &&
                      !kt(
                        e.config.livePausedEdgeRefetchSuspendEnabled,
                        t.playerStateFromMain.mediaElementSnapshot,
                      ),
                    starvationBufferAheadSec: k,
                    streams: L.filter(function (e) {
                      return e.type === "video" || e.type === "audio";
                    }).map(function (e) {
                      var t =
                        e.targetRepresentationId != null
                          ? e.sidxByRepresentationId[e.targetRepresentationId]
                          : null;
                      return {
                        bufferedAheadSec: Lt(
                          e.appendState.sourceBufferRanges,
                          a,
                        ),
                        confirmedLiveEdgeMediaTimeSec: mt(t),
                      };
                    }),
                  }),
                  l = null,
                  s = ["video", "audio"]
                    .map(function (s, u) {
                      var c = L.find(function (e) {
                        return e.type === s;
                      });
                      if (c != null && c.streamFatalError != null) return c;
                      var d =
                          s === "video"
                            ? m.manifestRepresentations.video.length > 0 &&
                              !m.audioOnly
                            : s === "audio"
                              ? m.manifestRepresentations.audio.length > 0 ||
                                m.audioOnly
                              : !1,
                        p = d ? c : void 0;
                      p == null &&
                        d &&
                        (s === "video"
                          ? ((p = {
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
                              blockedRepresentations: v(e, {}),
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
                              targetVariantRepresentationIds: v(e, []),
                              type: "video",
                              videoABRState: null,
                              videoABRStateClock: null,
                              videoABRSwitchClock: null,
                            }),
                            (p = Dn(e, g, p, m)))
                          : s === "audio" &&
                            ((p = {
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
                              blockedRepresentations: v(e, {}),
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
                              targetVariantRepresentationIds: v(e, []),
                              type: "audio",
                            }),
                            (p = Dn(e, g, p, m))));
                      var _ =
                        c == null && p != null
                          ? "added"
                          : c != null && p == null
                            ? "removed"
                            : p !== c
                              ? "replaced"
                              : null;
                      if (
                        (_ != null &&
                          ((D = !0),
                          g.push(
                            s +
                              ":" +
                              _ +
                              ":manifestRepresentations=" +
                              Ht(m.manifestRepresentations[s]),
                          )),
                        p != null)
                      ) {
                        var f = p,
                          y = g.length;
                        try {
                          var C,
                            b,
                            R = Ke(
                              e,
                              t,
                              m,
                              r,
                              p,
                              S,
                              n * 1e4 + u * 100 + h - 1,
                              i,
                              s === "audio"
                                ? Tt({
                                    audioBufferedRangesSec:
                                      p.appendState.sourceBufferRanges,
                                    enabled:
                                      e.config.emssSeekPrerollAudioFetch &&
                                      l != null,
                                    isLivePlayback: e.config.isLivePlayback,
                                    playheadMediaTimeSec: a,
                                    seeking:
                                      ((C =
                                        t.playerStateFromMain
                                          .mediaElementSnapshot) == null
                                        ? void 0
                                        : C.seeking) === !0,
                                    videoSegments:
                                      ((b = l) == null
                                        ? void 0
                                        : b.targetRepresentationId) != null
                                        ? l.sidxByRepresentationId[
                                            l.targetRepresentationId
                                          ]
                                        : null,
                                  })
                                : null,
                              g,
                            );
                          ((S = R.fetchDemands),
                            (p = R.stream),
                            s === "video" && (l = p));
                        } catch (t) {
                          var E = o("nextgendasherr").nextgendasherrFromCause(
                            e,
                            t,
                            "VideoPlayerNextgendashPlaybackLoopObserveAndActException",
                          );
                          (g.push(p.type + ":streamFatalError:" + E.name),
                            (p = babelHelpers.extends({}, p, {
                              streamFatalError: E,
                            })));
                        }
                        if (
                          p.streamFatalError != null &&
                          p.streamFatalError !== f.streamFatalError
                        ) {
                          var k;
                          ((x = !0),
                            e.logging.log(e, {
                              error: p.streamFatalError,
                              format: "%s:%s - new streamFatalError",
                              params: [
                                p.type,
                                (k = p.targetRepresentationId) != null
                                  ? k
                                  : "no_target_representation",
                              ],
                              type: "generic_error",
                            }));
                        }
                        if (p !== f && ((D = !0), g.length === y)) {
                          var I = Object.keys(f)
                            .map(function (e) {
                              return p != null && p[e] !== f[e] ? e : null;
                            })
                            .filter(Boolean);
                          g.push(
                            p.type + ":changeWithoutReason:" + I.join(","),
                          );
                        }
                      }
                      return p;
                    })
                    .filter(Boolean);
                D && (R = s);
              } else {
                if (L.length > 0)
                  throw o("nextgendasherr").nextgendasherr(
                    e,
                    "VideoPlayerNextgendashPlaybackLoopManifestDataDisappeared",
                  );
                return 1;
              }
            } finally {
              ((C = e.host.clock()), R !== L && f.push.apply(f, g));
            }
          };
        e: do if (N()) break e;
        while (
          D &&
          !x &&
          h < p &&
          o(
            "VideoPlayerNextgendashHostAPI",
          ).diffVideoPlayerNextgendashClockstamp(C, y).perfMs < _
        );
        var M = [];
        if (!x) {
          var w = oe(
            S,
            e.config.fetchInitSidxOfAllRepresentations
              ? R.map(function (e) {
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
            B = G(e, O);
          for (var W of R) {
            var q = de(W.appendState.sourceBufferRanges, B);
            (A.set(W.type, q),
              F.set(W.type, W.appendState.appendChain != null));
          }
          if (
            ((S = Ee(
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
            var U = Array.from(Ve(e, S)).filter(function (e) {
              return b != null && !b.has(e);
            });
            U.length > 0 &&
              c(
                U.map(function (e) {
                  return { url: e };
                }),
              );
          }
        }
        var V = t.volatilityState,
          H = t.volatilityState;
        if (e.config.enableDynamicBufferWatermarks && H != null) {
          var z = s.unixMs,
            j = z - $,
            K = H.abrSwitchTimestamps,
            Q = H.bandwidthSamples,
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
          for (var J of R) Y(J);
          var Z = e.host.networkDiagnosticsReadBandwidth(
              e.config.enableBandwidthDiagnosticsFallback,
              e.config.bandwidthDiagnosticsFallbackDefaultEstimate,
            ),
            ee = ve(Q, H.lastBandwidthDiagnosticsSignature, Z, z),
            te = ee.lastBandwidthDiagnosticsSignature;
          ((ee.bandwidthSamples !== Q ||
            te !== H.lastBandwidthDiagnosticsSignature) &&
            ((Q = ee.bandwidthSamples), (X = !0)),
            K.some(function (e) {
              return e <= j;
            }) &&
              ((K = K.filter(function (e) {
                return e > j;
              })),
              (X = !0)),
            X &&
              (V = v(e, {
                abrSwitchTimestamps: K,
                bandwidthSamples: Q,
                lastBandwidthDiagnosticsSignature: te,
                pendingSpeculativeSidxKeys: H.pendingSpeculativeSidxKeys,
              })));
        }
        if (e.config.enablePredictiveSidxPrefetch && V != null && m != null) {
          var ne = e.host.networkDiagnosticsReadBandwidth(
            e.config.enableBandwidthDiagnosticsFallback,
            e.config.bandwidthDiagnosticsFallbackDefaultEstimate,
          );
          if (ne != null && ne.bandwidthEstimate > 0) {
            var re = null,
              ae = function () {
                var t = le.type;
                if (t !== "video" && t !== "audio") return 0;
                var r = le.playableRepresentations;
                if (r.length <= 1) return 0;
                var o = le.targetRepresentationId;
                if (o == null) return 0;
                var a = Re(
                  o,
                  r,
                  V.bandwidthSamples,
                  ne.bandwidthEstimate,
                  s.unixMs,
                );
                if (a != null && a.confidence > P) {
                  var i = a.representation;
                  if (i.segmentsInfo.type === "SegmentBase") {
                    var l = Ze(i),
                      u = le.sidxByRepresentationId[i.representationId] != null,
                      c = S.some(function (e) {
                        return e.activeDemands.has(l);
                      });
                    if (!u && !c) {
                      var d,
                        m,
                        p =
                          (d = (m = re) == null ? void 0 : m.get(t)) != null
                            ? d
                            : V.pendingSpeculativeSidxKeys.get(t);
                      if (p != null && p !== l) {
                        var _ = S.some(function (e) {
                          return (
                            e.activeDemands.has(p) &&
                            e.activeDemands.size === 1 &&
                            e.responseFetch == null
                          );
                        });
                        if (_) {
                          var f = At(S, function (e) {
                            return e === p;
                          });
                          f != null && (S = f);
                        }
                      }
                      var g = n * 1e4 + 1e6;
                      ((S = [].concat(S, [et(e, g, i)])),
                        re == null &&
                          (re = new Map(V.pendingSpeculativeSidxKeys)),
                        re.set(t, l));
                    }
                  }
                }
              },
              ie;
            for (var le of R) ie = ae();
            re != null &&
              (V = v(
                e,
                babelHelpers.extends({}, V, { pendingSpeculativeSidxKeys: re }),
              ));
          }
        }
        var se =
            (i = t.playerStateFromMain.mediaElementSnapshot) == null
              ? void 0
              : i.currentTime,
          ue = null;
        if (
          e.config.liveEndedTransitionOnStallEnabled &&
          e.config.isLivePlayback &&
          e.config.enableLive &&
          se != null
        ) {
          var ce = !1,
            me = !0,
            pe = null;
          for (var _e of R)
            if (!(_e.type !== "video" && _e.type !== "audio")) {
              ce = !0;
              var fe =
                  _e.targetRepresentationId != null
                    ? _e.sidxByRepresentationId[_e.targetRepresentationId]
                    : null,
                ge = _t({
                  playheadMediaTimeSec: se,
                  sidx: fe,
                  toleranceSec: T,
                });
              if (ge == null) {
                me = !1;
                break;
              }
              pe = pe == null ? ge : Math.min(pe, ge);
            }
          ue = ce && me ? pe : null;
        }
        var he = ft({
            confirmSec: e.config.liveEndedStallConfirmSec,
            drainedTailEndSec: ue,
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
          ye = he.confirmed,
          Ce = he.next,
          be = babelHelpers.extends({}, t, {
            debugPlaybackLoopRecentChanges: qe(
              t.debugPlaybackLoopRecentChanges,
              f.concat(M),
            ),
            fetchDemands: S,
            liveEndedStallState: Ce,
            loopState: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends({}, t.loopState, {
                loopIteration: n,
                loopReasons: Ue(e, n, t.loopState.loopReasons),
                loopScheduledToUnixMs: null,
                loopTimerDelayMs: null,
                loopTimerID: d,
              }),
            ),
            streams: R,
            volatilityState: V,
          }),
          Se = [],
          Le = !1,
          Ie = !1;
        if (
          (be.streams.forEach(function (e) {
            (e.type !== "video" && e.type !== "audio") ||
              ((e.appendState.currSourceBufferOperation != null ||
                e.appendState.pendingAppendOperations.length !== 0 ||
                e.appendState.pendingRemoveOperations.length !== 0) &&
                (Le = !0),
              e.streamFatalError != null && (Ie = !0));
          }),
          Le || Ie || be.recoveringFromMediaError != null)
        )
          Se.push(
            "endOfStream skipped: " +
              [
                Le ? "current or pending operation" : null,
                Ie ? "pending stream fatal error(s)" : null,
                be.recoveringFromMediaError != null
                  ? "recovering from MediaError " +
                    be.recoveringFromMediaError.name
                  : null,
              ]
                .filter(Boolean)
                .join(", "),
          );
        else
          try {
            we(e, be, Se, ye);
          } catch (t) {
            return (
              u({
                exception: o("nextgendasherr").nextgendasherrFromCause(
                  e,
                  t,
                  "VideoPlayerNextgendashPlaybackLoopCheckAndCallEndOfStreamError",
                  "%s",
                  "debugPlaybackLoopRecentChanges:\n " +
                    be.debugPlaybackLoopRecentChanges.join("\n "),
                  "endOfStreamDebugReasons:\n " + Se.join("\n "),
                ),
                type: "__exception",
              }),
              be
            );
          }
        Se.length === 0 && Se.push("endOfStream: checked, unknown result");
        var Te = babelHelpers.extends({}, be, {
          debugPlaybackLoopRecentChanges: qe(
            be.debugPlaybackLoopRecentChanges,
            Se,
          ),
        });
        if (x)
          return (
            u({
              exception: o("nextgendasherr").nextgendasherrFromMultipleCauses(
                e,
                Te.streams
                  .map(function (e) {
                    return e.streamFatalError != null
                      ? [e.type, e.streamFatalError]
                      : null;
                  })
                  .filter(Boolean),
                "VideoPlayerNextgendashPlaybackLoopStreamFatalErrors",
                "%s",
                "debugPlaybackLoopRecentChanges:\n " +
                  Te.debugPlaybackLoopRecentChanges
                    .concat(
                      Te.recoveringFromMediaErrorAttempt > 0
                        ? [
                            "recoveringFromMediaErrorAttempt:" +
                              Te.recoveringFromMediaErrorAttempt,
                          ]
                        : [],
                    )
                    .join("\n "),
              ),
              type: "__exception",
            }),
            Te
          );
        if (Te.streams !== t.streams) {
          var xe;
          return (xe = De(
            e,
            r,
            "streamsChanged:(" + f.join(",") + ")",
            0,
            Te,
            a + 1,
          )) != null
            ? xe
            : Te;
        } else {
          var $e;
          return e.config.disablePlaybackLoopSchedulingOnTimer
            ? Te
            : ($e = De(e, r, "!streamsChanged", 10 * ke, Te, a + 1)) != null
              ? $e
              : Te;
        }
      }
    }
    function Ge(e, t, n) {
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
    function ze(e, t, n, r, a, i, l, s, u) {
      var c,
        d,
        m = t,
        p = n,
        _ = r,
        f = a.representationId,
        g = Ye(a);
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
            (h = At(
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
      var y = Mt(p, g, s, !0),
        C = y == null ? void 0 : y.fetchState,
        b = y == null || (d = y.responseInfo) == null ? void 0 : d.buffer;
      if (b == null && C != null && C.state === "completed")
        return (
          (m = xn(
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
      if (C != null && C.state === "failed") {
        var v,
          S = o("nextgendasherr").nextgendasherrFromCause(
            e,
            C.error,
            "VideoPlayerNextgendashPlaybackLoopInitFetchFailed",
            "%s:%s - Failed to fetch init; mimeCodecs=%s",
            m.type,
            f,
            a.mimeCodecsParsed.mimeCodecs,
          ),
          R = e.host.clock().unixMs,
          L = (v = m.liveSegmentFetchFailingSinceUnixMs) != null ? v : R;
        if (
          it({
            enableLive: e.config.enableLive,
            errorName: S.name,
            failingSinceUnixMs: L,
            isLastPlayableRepresentation: m.playableRepresentations.length <= 1,
            isLivePlayback: e.config.isLivePlayback,
            nowUnixMs: R,
            retryIndefinitely:
              e.config.liveSegmentFetchRetryNetworkFailuresIndefinitely,
            toleranceMs: e.config.liveSegmentFetchNetworkFailureToleranceMs,
          })
        ) {
          var E;
          return (
            u.push(m.type + ":" + f + ":live_init_fetch_failed_retry"),
            {
              abortFurtherProcessing: !0,
              fetchDemandOrderNext: _,
              fetchDemands:
                (E = At(
                  p,
                  function (e) {
                    return e === g;
                  },
                  s,
                )) != null
                  ? E
                  : p,
              initBuffer: null,
              stream: babelHelpers.extends({}, m, {
                liveOutageFailedRepresentationIds: st(
                  m.liveOutageFailedRepresentationIds,
                  f,
                ),
                liveSegmentFetchFailingSinceUnixMs: L,
              }),
            }
          );
        }
        return (
          (m = xn(e, l, u, m, i, f, S)),
          {
            abortFurtherProcessing: !0,
            fetchDemandOrderNext: _,
            fetchDemands: p,
            initBuffer: null,
            stream: m,
          }
        );
      } else if (y == null) {
        var k =
          e.config.enableCombinedInitSidxFetch &&
          a.segmentsInfo.type === "SegmentBase" &&
          m.sidxByRepresentationId[f] == null &&
          Mt(p, Ze(a), s, !1) == null;
        k
          ? (p = [].concat(p, [tt(e, ++_, a)]))
          : (p = [].concat(p, [Je(e, ++_, a)]));
      }
      return {
        abortFurtherProcessing: !1,
        fetchDemandOrderNext: _,
        fetchDemands: p,
        initBuffer: b,
        stream: m,
      };
    }
    function je(e, t, n, r, a, i) {
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
    function Ke(e, t, n, a, i, l, s, u, c, d) {
      var m,
        p,
        _,
        f,
        g,
        h,
        y,
        v,
        S,
        T,
        D,
        $,
        P,
        N,
        M,
        w = a.args,
        A = w.prefetchResult,
        F = w.sendPlayerWarningToMain,
        B = a.eventClock,
        W = a.sendToSelf,
        q = l,
        U = s * 1e4,
        V = Fe(e, t, B, i, d),
        H = V.abortFurtherStreamProcessing,
        X = V.stream;
      if (X.streamFatalError != null || H)
        return { fetchDemands: q, stream: X };
      X = Ge(X, t.mediaSourceState.mediaSourceIndex, d);
      var Y = X.appendState.sourceBufferRanges,
        J = null,
        Z = n.manifestRepresentations[X.type].find(function (e) {
          return e.representationId === X.targetRepresentationId;
        }),
        ee = X.targetRepresentationReason,
        te = !1;
      if (Z != null)
        switch (X.type) {
          case "video": {
            var ne,
              re = t.playerStateFromMain.selectedMediaVariant;
            te = on(
              re,
              re != null ? re : K,
              (ne = X.prevSelectedMediaVariant) != null ? ne : K,
              t.playerStateFromMain.selectedVideoQualityDisplayLabel,
              X.prevSelectedVideoQualityDisplayLabel,
            );
            break;
          }
          case "audio": {
            var oe,
              ae = t.playerStateFromMain.selectedMediaVariant;
            te = an(
              ae,
              ae != null ? ae : K,
              (oe = X.prevSelectedMediaVariant) != null ? oe : K,
            );
            break;
          }
        }
      if (Z == null || te) {
        var ie = sn(
          e,
          F,
          t.playerWarningDedupMap,
          B,
          t.playerStateFromMain,
          n,
          A,
          Y,
          X,
          d,
        );
        ((J = ie.prevTargetRepresentation),
          (X = ie.stream),
          (Z = ie.targetRepresentation),
          (ee = ie.targetRepresentationReason));
      }
      var le = J,
        se = Z,
        ue = ee,
        ce = se.representationId;
      X = je(e, X, t.mediaSourceState, se, W, d);
      var de = X.sourceBufferState,
        pe = ze(e, X, q, U, se, n, F, a.args.fetchPoolAPI, d);
      if (pe != null && pe.abortFurtherProcessing)
        return { fetchDemands: pe.fetchDemands, stream: pe.stream };
      pe != null &&
        ((X = pe.stream), (q = pe.fetchDemands), (U = pe.fetchDemandOrderNext));
      var _e = pe == null ? void 0 : pe.initBuffer,
        fe = X.sidxByRepresentationId[ce],
        ge = se.segmentsInfo,
        he = Ze(se),
        ye = Mt(q, he, a.args.fetchPoolAPI, !0),
        ve = ye == null ? void 0 : ye.fetchState,
        Se = ye == null ? void 0 : ye.responseInfo,
        Re = Se == null ? void 0 : Se.buffer;
      if (fe == null && (Se == null ? void 0 : Se.kind) === "native") {
        var Le, Ee;
        if (ge.type !== "SegmentBase")
          throw o("nextgendasherr").nextgendasherr(
            e,
            "VideoPlayerNextgendashPlaybackLoopNativeSidxUnsupported",
          );
        if (
          ((Le = X.nativeSidxParse) == null ? void 0 : Le.representation) !==
            se ||
          ((Ee = X.nativeSidxParse) == null ? void 0 : Ee.mediaSourceIndex) !==
            t.mediaSourceState.mediaSourceIndex
        ) {
          var ke = {
            mediaSourceIndex: t.mediaSourceState.mediaSourceIndex,
            representation: se,
          };
          X = babelHelpers.extends({}, X, { nativeSidxParse: ke });
          var Ie = Se.buffer;
          r("promiseDone")(
            Ie.body.parseIndex({
              byteLength: Ie.byteLength,
              byteOffset: Ie.byteOffset,
              fileOffset: ge.indexByteRange.byteOffset,
            }),
            function (e) {
              return W({
                items: e,
                parse: ke,
                result: "parsed",
                type: "_native_sidx_result",
              });
            },
            function (t) {
              return W({
                error: o("nextgendasherr").nextgendasherrFromCause(
                  e,
                  t,
                  "VideoPlayerNextgendashPlaybackLoopSidxParseFailed",
                ),
                parse: ke,
                result: "failed",
                type: "_native_sidx_result",
              });
            },
          );
        }
      } else if (fe == null && Re instanceof Uint8Array) {
        var Te = se.mimeCodecsParsed.containerType,
          De = null;
        try {
          switch (Te) {
            case "mp4": {
              var xe =
                ge.type === "SegmentBase" ? ge.indexByteRange.byteOffset : null;
              if (xe == null)
                throw o("nextgendasherr").nextgendasherr(
                  e,
                  "VideoPlayerNextgendashPlaybackLoopSidxParseMp4MissingSidxByteOffset",
                );
              De = o("VideoPlayerNextgendashMp4SidxParser").parseMp4Sidx(
                e,
                Re,
                xe,
              );
              break;
            }
            case "webm": {
              _e instanceof Uint8Array
                ? (De = o("VideoPlayerNextgendashWebmSidxParser").parseWebmSidx(
                    e,
                    Re,
                    _e,
                  ))
                : (De = null);
              break;
            }
            default:
              throw o("nextgendasherr").nextgendasherr(
                e,
                "VideoPlayerNextgendashPlaybackLoopSidxParseUnexpectedContainerType",
                "Unexpected container type for sidx parsing: %s",
                Te,
              );
          }
        } catch (t) {
          return (
            (X = xn(
              e,
              F,
              d,
              X,
              n,
              ce,
              o("nextgendasherr").nextgendasherrFromCause(
                e,
                t,
                "VideoPlayerNextgendashPlaybackLoopSidxParseFailed",
                "%s:%s - Failed to parse sidx; mimeCodecs=%s",
                X.type,
                ce,
                se.mimeCodecsParsed.mimeCodecs,
              ),
            )),
            { fetchDemands: q, stream: X }
          );
        }
        var $e = De;
        if ($e != null) {
          var Pe, Ne;
          ((fe = Ln(
            e,
            X.type,
            ce,
            $e.map(function (e, t) {
              return {
                isEndingSegment: t === $e.length - 1,
                mediaFileByteRange: e.mediaFileByteRange,
                mediaTimeRange: e.mediaTimeRange,
                segmentId: t,
              };
            }),
            !1,
          )),
            d.push(
              X.type + ":" + ce + ":sidx/buffer:" + $e.length + ":" + fe.length,
            ),
            (X = babelHelpers.extends({}, X, {
              sidxByRepresentationId: o(
                "VideoPlayerNextgendashStateMachine",
              ).skipAutoDisposeInsideThisObject(
                babelHelpers.extends(
                  {},
                  X.sidxByRepresentationId,
                  ((Pe = {}), (Pe[ce] = fe), Pe),
                ),
              ),
            })),
            (q =
              (Ne = At(
                q,
                function (e) {
                  return e === he;
                },
                a.args.fetchPoolAPI,
              )) != null
                ? Ne
                : q));
        }
      } else {
        if (Re == null && ve != null && ve.state === "completed")
          return (
            (X = xn(
              e,
              F,
              d,
              X,
              n,
              ce,
              o("nextgendasherr").nextgendasherr(
                e,
                "VideoPlayerNextgendashPlaybackLoopSidxFetchBufferExtractionFailed",
                "%s:%s - Failed to extract sidx buffer from the completed response; mimeCodecs=%s",
                X.type,
                ce,
                se.mimeCodecsParsed.mimeCodecs,
              ),
            )),
            { fetchDemands: q, stream: X }
          );
        if (fe == null && ve != null && ve.state === "failed")
          return (
            (X = xn(
              e,
              F,
              d,
              X,
              n,
              ce,
              o("nextgendasherr").nextgendasherrFromCause(
                e,
                ve.error,
                "VideoPlayerNextgendashPlaybackLoopSidxFetchFailed",
                "%s:%s - Failed to fetch sidx; mimeCodecs=%s",
                X.type,
                ce,
                se.mimeCodecsParsed.mimeCodecs,
              ),
            )),
            { fetchDemands: q, stream: X }
          );
        if (fe == null && ge.type === "SegmentTemplate") {
          var Me,
            we = n.metadata.manifestType === "dynamic",
            Ae = e.config.enableLive ? ge.segmentTimelinePredictive : null,
            Oe =
              we &&
              e.config.liveListedSegmentsUsePredictedURLEnabled &&
              X.listedSegmentsPredictedURLFailed !== !0
                ? bn(pn(ge, we), Ae)
                : pn(ge, we);
          fe = Ln(e, X.type, ce, Oe, we || e.config.isLivePlayback);
          var Be =
            Ae != null
              ? Rn(
                  Ae,
                  fe,
                  ge.timescale,
                  e.config.isLivePlayback &&
                    e.config.livePredictiveSegmentFetchKeyByNumber,
                )
              : fe;
          (d.push(
            X.type +
              ":" +
              ce +
              ":sidx/template" +
              (Ae != null ? "/predictive" : "") +
              ":" +
              Oe.length +
              ":" +
              Be.length,
          ),
            (X = babelHelpers.extends({}, X, {
              sidxByRepresentationId: o(
                "VideoPlayerNextgendashStateMachine",
              ).skipAutoDisposeInsideThisObject(
                babelHelpers.extends(
                  {},
                  X.sidxByRepresentationId,
                  ((Me = {}), (Me[ce] = Be), Me),
                ),
              ),
            })));
        } else if (fe == null && ye == null) {
          var We;
          q = [].concat(
            (We = At(
              q,
              function (e) {
                return e !== he && e.startsWith("sidx-" + se.type + "-");
              },
              a.args.fetchPoolAPI,
            )) != null
              ? We
              : q,
            [et(e, ++U, se)],
          );
        }
      }
      var qe = fe,
        Ue = t.playerStateFromMain.mediaElementSnapshot,
        Ve = G(e, Ue);
      if (
        ((m = X.appendState.appendChain) == null ? void 0 : m.mediaTail) != null
      ) {
        var He = kn(
          e,
          X.type,
          ce,
          X.appendState.appendChain,
          Ve,
          Y,
          t.mediaSourceState.mediaSource,
          d,
        );
        He !== X.appendState.appendChain &&
          (X = babelHelpers.extends({}, X, {
            appendState: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends({}, X.appendState, { appendChain: He }),
            ),
          }));
      }
      var Ke =
        le != null &&
        (((p = se.role) != null ? p : null) !==
          ((_ = le.role) != null ? _ : null) ||
          ((f = se.lang) != null ? f : null) !==
            ((g = le.lang) != null ? g : null));
      if (
        le != null &&
        ce !== le.representationId &&
        (ue === "selected_switch" || Ke)
      ) {
        var nt = 5,
          ot = Ke ? 0 : Ve + nt,
          at = [ot, Number.POSITIVE_INFINITY],
          lt = {
            operationState: "wait_start",
            operationTiming: { created: e.host.clock() },
            operationType: "remove_operation",
            removeRange: at,
          };
        (d.push(
          X.type +
            ":" +
            ce +
            ":pendingRemoveOperations:newRemoveOperation:" +
            o("VideoPlayerNextgendashMediaUtils").debugStringifyTimeRange(
              lt.removeRange,
            ),
        ),
          (X = babelHelpers.extends({}, X, {
            appendState: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends({}, X.appendState, {
                pendingAppendOperations: [],
                pendingRemoveOperations: [].concat(
                  X.appendState.pendingRemoveOperations,
                  [lt],
                ),
              }),
            ),
          })));
      }
      var pt = e.config.mediaSinkType === "HYBRID" && !e.config.isLivePlayback,
        _t = pt
          ? e.config.nativeBackBufferRetentionSec
          : e.config.isLivePlayback
            ? e.config.liveBackBufferRetentionSec
            : 0;
      if (
        _t > 0 &&
        X.sourceBufferState != null &&
        X.appendState.currSourceBufferOperation == null &&
        X.appendState.pendingAppendOperations.length === 0 &&
        X.appendState.pendingRemoveOperations.length === 0
      ) {
        var ft = Et(
          Y,
          Ve,
          _t,
          pt ? e.config.nativeBackBufferMinRemovableSec : O,
        );
        if (
          ft != null &&
          e.host.mediaSourceCollectSnapshot(e, t.mediaSourceState.mediaSource)
            .readyState === "open"
        ) {
          var gt = {
            operationState: "wait_start",
            operationTiming: { created: e.host.clock() },
            operationType: "remove_operation",
            removeRange: [0, ft],
          };
          (d.push(
            X.type +
              ":" +
              ce +
              ":pendingRemoveOperations:newLiveBackBufferRemoveOperation:" +
              o("VideoPlayerNextgendashMediaUtils").debugStringifyTimeRange(
                gt.removeRange,
              ),
          ),
            (X = babelHelpers.extends({}, X, {
              appendState: o(
                "VideoPlayerNextgendashStateMachine",
              ).skipAutoDisposeInsideThisObject(
                babelHelpers.extends({}, X.appendState, {
                  pendingRemoveOperations: [].concat(
                    X.appendState.pendingRemoveOperations,
                    [gt],
                  ),
                }),
              ),
            })));
        }
      }
      var ht =
        (h =
          (y =
            (v =
              X.appendState.pendingAppendOperations[
                X.appendState.pendingAppendOperations.length - 1
              ]) == null
              ? void 0
              : v.appendInfo.representationId) != null
            ? y
            : X.appendState.currSourceBufferOperation != null &&
                X.appendState.currSourceBufferOperation.operationType ===
                  "append_operation"
              ? X.appendState.currSourceBufferOperation.appendInfo
                  .representationId
              : null) != null
          ? h
          : X.appendState.lastAppendOperation != null &&
              X.appendState.lastAppendOperation.operationState === "succeeded"
            ? X.appendState.lastAppendOperation.appendInfo.representationId
            : null;
      if (de != null && ce !== ht && _e != null) {
        var yt = {
          appendInfo: {
            appendInfoType: "init",
            mimeCodecsParsed: se.mimeCodecsParsed,
            representationId: ce,
          },
          buffer: _e,
          operationState: "wait_start",
          operationTiming: { created: e.host.clock() },
          operationType: "append_operation",
        };
        (d.push(
          X.type +
            ":" +
            ce +
            ":pendingAppendOperations:initAppendOperation:" +
            Wt(yt.appendInfo),
        ),
          (X = babelHelpers.extends({}, X, {
            appendState: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends({}, X.appendState, {
                pendingAppendOperations: [yt],
              }),
            ),
          })));
      }
      var Rt = 16.924449682236,
        Tt = e.config.isLivePlayback ? 20 : 22,
        Dt =
          t.playerStateFromMain.mediaElementSnapshot == null
            ? "initial"
            : t.playerStateFromMain.mediaElementSnapshot.paused
              ? "paused"
              : "playing",
        xt = {
          initial: pt
            ? Math.max(
                0,
                e.config.bufferAheadTargetNoMediaElementSec,
                e.config.nativeNextFirstMediaPrewarm
                  ? e.config.nativeNextPrewarmBufferAheadSec
                  : 0,
              )
            : me(e.config.bufferAheadTargetNoMediaElementSec, Rt),
          paused: e.config.bufferAheadTargetPausedSec,
          playing: (S = e.config.bufferAheadTargetPlayingSec) != null ? S : Tt,
        }[Dt],
        Ft =
          e.config.enableQuotaExceededRecovery && !pt
            ? Math.max(
                e.config.quotaExceededMinBufferTargetSec,
                xt * X.quotaExceededBufferTargetRatio,
              )
            : xt,
        Bt = Ft,
        qt = t.volatilityState;
      if (
        e.config.enableDynamicBufferWatermarks &&
        !pt &&
        Dt === "playing" &&
        qt != null
      ) {
        var Ut = B.unixMs,
          Vt = Ce(qt.abrSwitchTimestamps, Ut),
          Ht = be(qt.bandwidthSamples, Ut),
          Gt = Math.max(Vt, Ht),
          zt = Gt * x,
          jt = e.config.enableQuotaExceededRecovery
            ? zt * X.quotaExceededBufferTargetRatio
            : zt;
        Bt = Ft + jt;
      }
      var Kt =
          (T = X.appendState.appendChain) == null
            ? void 0
            : T.playheadMinimumTimeSec,
        Qt = mt(qe),
        Xt = kt(
          e.config.livePausedEdgeRefetchSuspendEnabled,
          t.playerStateFromMain.mediaElementSnapshot,
        ),
        Yt = Lt(Y, Ve),
        Jt = It({
          bufferedAheadSec: Yt,
          enableLive: e.config.enableLive,
          fellBehindWindowSec: E,
          followEdgeActive: e.config.liveFollowEdgeActive,
          isLivePlayback: e.config.isLivePlayback,
          liveEdgeMediaTimeSec: Qt,
          playheadMediaTimeSec: Ve,
          proactiveDriftSec: e.config.liveFellBehindEdgeReseekDriftSec,
          refetchEnabled: e.config.liveFellBehindWindowRefetchEnabled && !Xt,
          starvationBufferAheadSec: k,
        }),
        Zt =
          e.config.liveFellBehindPairedRefetchEnabled &&
          !Xt &&
          e.config.isLivePlayback &&
          e.config.enableLive &&
          e.config.liveFollowEdgeActive
            ? u
            : null,
        en = Yt != null ? Ve + Yt : Ve,
        tn = Zt != null && en < Zt - R,
        nn = Jt || tn,
        rn = Zt != null ? Zt : Qt != null ? Qt - I : null,
        ln =
          nn && rn != null
            ? rn
            : Kt != null && Kt > Ve
              ? Kt - R
              : X.appendState.appendChain != null
                ? Ve - R
                : Ve,
        cn = typeof c == "number" ? c : null,
        _n = cn != null ? Math.min(ln, cn) : ln;
      function fn(e) {
        return (
          cn != null && e.mediaTimeRange[1] > cn && e.mediaTimeRange[0] < Ve
        );
      }
      var gn = nn && Qt != null ? Qt + Bt : Ve + Bt,
        En =
          X.appendState.currSourceBufferOperation != null &&
          X.appendState.currSourceBufferOperation.operationType ===
            "append_operation"
            ? X.appendState.currSourceBufferOperation.appendInfo
                .appendInfoType === "data" &&
              X.appendState.currSourceBufferOperation.appendInfo
                .dataByteRangeLength > 0
              ? X.appendState.currSourceBufferOperation.appendInfo
              : null
            : X.appendState.lastAppendOperation != null &&
                X.appendState.lastAppendOperation.operationState ===
                  "succeeded" &&
                X.appendState.lastAppendOperation.appendInfo.appendInfoType ===
                  "data" &&
                X.appendState.lastAppendOperation.appendInfo
                  .dataByteRangeLength > 0
              ? X.appendState.lastAppendOperation.appendInfo
              : null;
      function Dn(t, n) {
        return fn(n)
          ? !1
          : mn(
              X.appendState.appendChain,
              t,
              n,
              e.config.isLivePlayback &&
                e.config.liveTimeBasedAppendAnchorEnabled,
            );
      }
      var Nn = qe != null ? qe : [],
        Mn =
          pt &&
          t.playerStateFromMain.mediaSourceIndexApplied ===
            t.mediaSourceState.mediaSourceIndex &&
          t.playerStateFromMain.mediaElementSnapshot != null,
        wn =
          Mn &&
          ((D = t.playerStateFromMain.mediaElementSnapshot) == null
            ? void 0
            : D.seeking) === !0 &&
          Number.isFinite(Ve) &&
          Ve >= 0 &&
          Y != null &&
          !Y.some(function (e) {
            var t = e[0],
              n = e[1];
            return t <= Ve && Ve < n;
          }),
        An = pt && Bt <= 0,
        Fn =
          An &&
          (($ = t.playerStateFromMain.mediaElementSnapshot) == null
            ? void 0
            : $.paused) === !0 &&
          t.playerStateFromMain.mediaSourceIndexApplied ===
            t.mediaSourceState.mediaSourceIndex,
        On =
          Fn &&
          ((P = t.playerStateFromMain.mediaElementSnapshot) == null
            ? void 0
            : P.seeking) === !0,
        Bn =
          e.config.nativeNextFirstMediaPrewarm && Nn.length > 0
            ? $t(se, Nn[0])
            : null,
        Wn = X.appendState.appendChain,
        qn =
          e.config.nativeNextFirstMediaPrewarm &&
          Dt === "initial" &&
          An &&
          !Mn &&
          Ve === 0 &&
          Bn != null &&
          (X.nativeNextFirstMediaKey == null
            ? Wn == null ||
              (Wn.mediaTail == null &&
                Wn.playheadMinimumTimeSec === 0 &&
                Wn.representationId === ce)
            : X.nativeNextFirstMediaKey === Bn &&
              j(q, Bn, a.args.fetchPoolAPI)),
        Un =
          pt &&
          e.config.nativeHandoverFetchHold &&
          e.host.mediaSourceCollectSnapshot(e, t.mediaSourceState.mediaSource)
            .nativeFetchHeld === !0,
        Vn = Math.round(Ve * 1e3);
      function Hn(e) {
        return Math.abs(Math.round(e * 1e3) - Vn) <= 1;
      }
      function Gn(e) {
        return (
          wn &&
          e.segment.mediaTimeRange[0] <= Ve &&
          Ve < e.segment.mediaTimeRange[1] &&
          (e.nativeSeekRetry == null || !Hn(e.nativeSeekRetry.targetSec))
        );
      }
      function zn(e) {
        var t;
        if (
          !Mn ||
          ((t = e.nativeSeekRetry) == null ? void 0 : t.pending) !== !0 ||
          !Hn(e.nativeSeekRetry.targetSec)
        )
          return !1;
        var n = $t(se, e.segment);
        return q.some(function (e) {
          if (e.isNativeSeek !== !0 || !e.activeDemands.has(n)) return !1;
          var t = z(e, a.args.fetchPoolAPI);
          return t == null
            ? e.evictedClock == null
            : t.state !== "failed" &&
                t.state !== "aborted" &&
                t.state !== "__disposed__";
        });
      }
      var jn = Nn.filter(function (e) {
          if (c === "defer" || (Un && !j(q, $t(se, e), a.args.fetchPoolAPI)))
            return !1;
          if (An && !Fn)
            return (
              qn &&
              e === Nn[0] &&
              !dn(Y, e) &&
              !X.appendState.workaroundForSegmentBufferedInsufficiently.some(
                function (t) {
                  return t.representationId === ce && rt(t.segment, e);
                },
              ) &&
              !Dn(ce, e)
            );
          if (
            !dn(Y, e) &&
            !X.appendState.workaroundForSegmentBufferedInsufficiently.some(
              function (t) {
                return (
                  t.representationId === ce &&
                  rt(t.segment, e) &&
                  !Gn(t) &&
                  !zn(t)
                );
              },
            )
          ) {
            if (An) {
              var t = $t(se, e),
                n = q.some(function (e) {
                  return e.isNativeSeek === !0 && e.activeDemands.has(t);
                });
              return (
                (On || n) &&
                ((e.mediaTimeRange[0] <= Ve + L && Ve <= e.mediaTimeRange[1]) ||
                  (e.isEndingSegment && Ve > e.mediaTimeRange[1])) &&
                !Dn(ce, e)
              );
            }
            if (e.isEndingSegment && Ve > e.mediaTimeRange[1])
              return !Dn(ce, e);
            var r = o("VideoPlayerNextgendashMediaUtils").isWithinRange(
              e.mediaTimeRange,
              _n,
            );
            if (r) return !Dn(ce, e);
            var i = o("VideoPlayerNextgendashMediaUtils").isWithinRange(
              e.mediaTimeRange,
              gn,
            );
            if (i) return !Dn(ce, e);
            var l = _n <= e.mediaTimeRange[0] && e.mediaTimeRange[1] <= gn;
            if (l) return !Dn(ce, e);
          }
          return !1;
        }),
        Kn = ge.type === "SegmentTemplate" ? ge : null,
        Qn =
          (N = Kn == null ? void 0 : Kn.segmentTimelinePredictive) != null
            ? N
            : null,
        Xn = qe != null && qe.length > 0 ? qe[qe.length - 1] : null,
        Yn = Kn != null ? hn(Kn) : null;
      if (
        e.config.isLivePlayback &&
        e.config.enableLive &&
        jn.length === 0 &&
        qe != null &&
        Kn != null &&
        Qn != null &&
        Xn != null &&
        yn(Xn, Qn, e.config.liveRollingPdashReseedAfterStripEnabled, Yn, gn) &&
        Cn(Xn, Qn) !== X.predictiveTemplateNumberLastFailed
      ) {
        var Jn = Xn.isPredictiveSegment !== !0,
          Zn = Rn(
            Qn,
            qe,
            Kn.timescale,
            e.config.isLivePlayback &&
              e.config.livePredictiveSegmentFetchKeyByNumber,
          );
        if (Zn.length > qe.length) {
          var er;
          ((X = babelHelpers.extends({}, X, {
            sidxByRepresentationId: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends(
                {},
                X.sidxByRepresentationId,
                ((er = {}), (er[ce] = Zn), er),
              ),
            ),
          })),
            (qe = Zn));
          var tr = Zn[Zn.length - 1];
          ((jn = [tr]),
            d.push(
              X.type +
                ":" +
                ce +
                ":" +
                (Jn ? "rolling_pdash_reseed" : "rolling_pdash") +
                ":" +
                String(tr.templateNumber),
            ));
        }
      }
      var nr = new Set(),
        rr = null,
        or = X.appendState.workaroundForSegmentBufferedInsufficiently.find(
          function (e) {
            return (
              e.representationId === ce &&
              (Gn(e) || zn(e)) &&
              jn.some(function (t) {
                return rt(t, e.segment);
              })
            );
          },
        );
      if (
        !An &&
        or == null &&
        jn.length > 1 &&
        se.segmentsInfo.type === "SegmentBase"
      ) {
        for (var ar, ir = [], lr = 0; lr < jn.length; ++lr) {
          var sr = jn[lr],
            ur = $t(se, sr);
          nr.add(ur);
          var cr = wt(e, rr != null ? rr : q, ur);
          ((rr = cr != null ? cr : rr), cr == null && ir.push(sr));
        }
        for (
          var dr =
              A != null && A.prefetchedRepresentationIds.includes(ce)
                ? [0]
                : [],
            mr = Qe(
              ir,
              dr,
              e.host.nativeMedia != null
                ? (ar =
                    e.host.nativeMedia.getMaxBodyBytes == null
                      ? void 0
                      : e.host.nativeMedia.getMaxBodyBytes()) != null
                  ? ar
                  : 16 * 1024 * 1024
                : void 0,
            ),
            pr = 0;
          pr < mr.length;
          ++pr
        ) {
          var _r = mr[pr];
          ((rr = rr != null ? rr : [].concat(q)), rr.push(Nt(e, ++U, se, _r)));
        }
      } else
        jn.forEach(function (t) {
          var n = $t(se, t);
          nr.add(n);
          var r = wt(e, rr != null ? rr : q, n);
          rr = r != null ? r : rr;
          var o = On || (or != null && rt(or.segment, t));
          (o &&
            r != null &&
            (rr = r.map(function (e) {
              return e.activeDemands.has(n)
                ? babelHelpers.extends({}, e, { isNativeSeek: !0 })
                : e;
            })),
            r == null &&
              ((rr = rr != null ? rr : [].concat(q)),
              rr.push(
                babelHelpers.extends(
                  {},
                  Pt(e, ++U, se, t),
                  o ? { isNativeSeek: !0 } : {},
                ),
              )));
        });
      {
        var fr = new Set();
        ((rr != null ? rr : q).forEach(function (t) {
          var r = B.perfMs - t.demandedAtClock.perfMs,
            o = 0;
          r < o ||
            t.activeDemands.forEach(function (t) {
              t.startsWith("segment-" + X.type + "-") &&
                !nr.has(t) &&
                ![
                  En,
                  X.appendState.currSourceBufferOperation != null &&
                  X.appendState.currSourceBufferOperation.operationType ===
                    "append_operation"
                    ? X.appendState.currSourceBufferOperation.appendInfo
                    : null,
                ]
                  .concat(
                    X.appendState.pendingAppendOperations.map(function (e) {
                      return e.appendInfo;
                    }),
                  )
                  .filter(Boolean)
                  .some(function (r) {
                    var o = Xe(
                      e,
                      n.manifestRepresentations[X.type],
                      r.representationId,
                    );
                    switch (r.appendInfoType) {
                      case "init":
                        return t === Ye(o);
                      case "data":
                        return t === $t(o, r.segment);
                      default:
                        r.appendInfoType;
                    }
                  }) &&
                fr.add(t);
            });
        }),
          fr.size > 0 &&
            (rr = At(
              rr != null ? rr : q,
              function (e) {
                return fr.has(e);
              },
              a.args.fetchPoolAPI,
            )));
      }
      {
        var gr = rr != null ? rr : q,
          hr = a.args.fetchPoolAPI,
          yr = gr.reduce(
            function (e, t) {
              if (t.streamType === X.type && t.activeDemands.size > 0) {
                var n = z(t, hr);
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
          ),
          Cr =
            e.config.isLivePlayback &&
            e.config.liveAbrDuringSlowSegmentFetchEnabled &&
            X.type === "video" &&
            X.appendState.currSourceBufferOperation == null &&
            yr.inflightFetchesCountForThisStream > 0
              ? vt(
                  gr,
                  hr,
                  X,
                  se,
                  Lt(Y, Ve),
                  B.perfMs,
                  e.config.liveAbrSlowFetchDownswitchHoldEnabled,
                )
              : null,
          br =
            Cr != null
              ? St(
                  X.playableRepresentations,
                  X.targetVariantRepresentationIds,
                  t.playerStateFromMain.selectedVideoQualityDisplayLabel !=
                    null,
                  se.bandwidth,
                  Cr.bandwidthSample,
                )
              : null;
        if (Cr != null && br != null) {
          var vr;
          Cr.hasReportedBandwidthSample ||
            e.host.networkDiagnosticsUpdate({
              bandwidthSample: Cr.bandwidthSample,
              clock: B,
            });
          var Sr = "segment-" + X.type + "-" + ce + "-";
          d.push(
            X.type +
              ":" +
              ce +
              ":live_slow_fetch_downswitch:" +
              br.representationId,
          );
          var Rr = un(
            e,
            X,
            d,
            se,
            br,
            "abr_switch",
            X.targetVariantRepresentationIds,
            X.prevSelectedMediaVariant,
            X.prevSelectedVideoQualityDisplayLabel,
          );
          return {
            fetchDemands:
              (vr = At(
                gr,
                function (e) {
                  var t;
                  return (
                    e.startsWith(Sr) &&
                    ((t = Mt(gr, e, hr, !1)) == null ||
                    (t = t.fetchState) == null
                      ? void 0
                      : t.state) !== "completed"
                  );
                },
                hr,
              )) != null
                ? vr
                : gr,
            stream: babelHelpers.extends({}, Rr, {
              appendState:
                En != null && En.representationId === ce
                  ? o(
                      "VideoPlayerNextgendashStateMachine",
                    ).skipAutoDisposeInsideThisObject(
                      babelHelpers.extends({}, X.appendState, {
                        lastAppendOperation: null,
                      }),
                    )
                  : X.appendState,
              liveSlowFetchEvaluatedFetchDataKey: Cr.fetchDataKey,
              liveSlowFetchEvaluatedReadingStartPerfMs: Cr.readingStartPerfMs,
              liveSlowFetchUpswitchHoldUntilPerfMs: e.config
                .liveAbrSlowFetchDownswitchHoldEnabled
                ? B.perfMs + Ct
                : null,
            }),
          };
        }
        if (
          (Cr != null &&
            (X = babelHelpers.extends({}, X, {
              liveSlowFetchEvaluatedFetchDataKey: Cr.fetchDataKey,
              liveSlowFetchEvaluatedReadingStartPerfMs: Cr.readingStartPerfMs,
            })),
          yr.inflightFetchesCountForThisStream === 0 &&
            yr.unfulfilledDemandsCountForThisStream > 0)
        ) {
          var Lr,
            Er = sn(
              e,
              F,
              t.playerWarningDedupMap,
              B,
              t.playerStateFromMain,
              n,
              A,
              Y,
              X,
              d,
            ),
            kr =
              Er.stream.targetRepresentationId !== X.targetRepresentationId
                ? X.playableRepresentations.find(function (e) {
                    return (
                      e.representationId === Er.stream.targetRepresentationId
                    );
                  })
                : null;
          if (
            !(
              kr != null &&
              bt({
                fromBandwidth: se.bandwidth,
                holdUntilPerfMs:
                  (Lr = X.liveSlowFetchUpswitchHoldUntilPerfMs) != null
                    ? Lr
                    : null,
                nowPerfMs: B.perfMs,
                toBandwidth: kr.bandwidth,
              })
            )
          ) {
            if (Er.stream.targetRepresentationId !== X.targetRepresentationId)
              return { fetchDemands: q, stream: Er.stream };
            X = Er.stream;
          }
        }
      }
      if (
        e.config.fetchInitSidxOfAllRepresentations &&
        ce != null &&
        X.playableRepresentations.length > 1 &&
        ((M = t.playerStateFromMain.mediaElementSnapshot) == null
          ? void 0
          : M.bufferedFully) !== !0
      ) {
        for (var Ir of X.playableRepresentations)
          if (Ir.representationId !== ce) {
            var Tr =
                Mt(rr != null ? rr : q, Ye(Ir), a.args.fetchPoolAPI, !1) !=
                null,
              Dr =
                X.sidxByRepresentationId[Ir.representationId] != null ||
                Mt(rr != null ? rr : q, Ze(Ir), a.args.fetchPoolAPI, !1) !=
                  null;
            if (!Tr || !Dr) {
              var xr =
                e.config.enableCombinedInitSidxFetch &&
                Ir.segmentsInfo.type === "SegmentBase" &&
                !Tr &&
                !Dr;
              xr
                ? ((rr = rr != null ? rr : [].concat(q)),
                  rr.push(tt(e, ++U, Ir)))
                : (Tr ||
                    ((rr = rr != null ? rr : [].concat(q)),
                    rr.push(Je(e, ++U, Ir))),
                  Dr ||
                    ((rr = rr != null ? rr : [].concat(q)),
                    rr.push(et(e, ++U, Ir))));
            }
          }
      }
      ((q = rr != null ? rr : q),
        qn &&
          X.nativeNextFirstMediaKey == null &&
          Bn != null &&
          j(q, Bn, a.args.fetchPoolAPI) &&
          ((X = babelHelpers.extends({}, X, { nativeNextFirstMediaKey: Bn })),
          d.push(X.type + ":nativeNextFirstMediaDemand")));
      var $r = X.appendState.workaroundForSegmentBufferedInsufficiently;
      if (
        ($r.some(function (e) {
          var t;
          return (
            (((t = e.nativeSeekRetry) == null ? void 0 : t.pending) === !0 &&
              !zn(e)) ||
            (e === or && Gn(e))
          );
        }) &&
          (X = babelHelpers.extends({}, X, {
            appendState: babelHelpers.extends({}, X.appendState, {
              workaroundForSegmentBufferedInsufficiently: $r.map(function (e) {
                var t = e.nativeSeekRetry;
                return e === or &&
                  Gn(e) &&
                  q.some(function (t) {
                    return (
                      t.isNativeSeek === !0 &&
                      t.activeDemands.has($t(se, e.segment))
                    );
                  })
                  ? babelHelpers.extends({}, e, {
                      nativeSeekRetry: { pending: !0, targetSec: Vn / 1e3 },
                    })
                  : t != null && t.pending && !zn(e)
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
          X.appendState.pendingAppendOperations.length > 0 ||
          X.appendState.currSourceBufferOperation != null
        ))
      ) {
        var Pr = null;
        if (En != null)
          Pr = {
            dataByteRangeStart: En.dataByteRangeStart + En.dataByteRangeLength,
            incompleteChunkedAppendInfo: En,
            mimeCodecsParsed: En.mimeCodecsParsed,
            representationId: En.representationId,
            segment: En.segment,
          };
        else if (jn.length > 0) {
          var Nr = jn[0];
          Pr = {
            dataByteRangeStart: 0,
            incompleteChunkedAppendInfo: null,
            mimeCodecsParsed: se.mimeCodecsParsed,
            representationId: ce,
            segment: Nr,
          };
        }
        var Mr = Pr;
        if (Mr != null) {
          if (
            X.appendState.appendChain != null &&
            X.appendState.appendChain.representationId === Mr.representationId
          ) {
            var wr = Xe(
                e,
                n.manifestRepresentations[X.type],
                Mr.representationId,
              ),
              Ar = $t(wr, Mr.segment),
              Fr = Mt(q, Ar, a.args.fetchPoolAPI);
            if (
              Fr == null &&
              Mr.incompleteChunkedAppendInfo != null &&
              Mr.segment.isPredictiveSegment === !0
            )
              return (
                d.push(
                  X.type +
                    ":" +
                    Mr.representationId +
                    ":abandon_incomplete_predictive_append:" +
                    String(Mr.segment.templateNumber),
                ),
                (X = babelHelpers.extends({}, X, {
                  appendState: o(
                    "VideoPlayerNextgendashStateMachine",
                  ).skipAutoDisposeInsideThisObject(
                    babelHelpers.extends({}, X.appendState, {
                      lastAppendOperation: null,
                    }),
                  ),
                })),
                { fetchDemands: q, stream: X }
              );
            if (Fr == null)
              throw o("nextgendasherr").nextgendasherr(
                e,
                Mr.incompleteChunkedAppendInfo != null
                  ? "VideoPlayerNextgendashPlaybackLoopMissingFetchDemandForSegmentToContinueChunkedAppend"
                  : "VideoPlayerNextgendashPlaybackLoopMissingFetchDemandForSegmentToAppend",
                "%s:%s - nextAppendInfo=%s segmentFetchDemandKey=%s fetchDemands=%s",
                X.type,
                ce != null ? ce : "no_target_representation",
                JSON.stringify(Mr),
                Ar,
                Ot(q),
              );
            var Or = null,
              Br = Fr.fetchState;
            Br != null && Br.state === "failed"
              ? (Or = o("nextgendasherr").nextgendasherrFromCause(
                  e,
                  Br.error,
                  "VideoPlayerNextgendashPlaybackLoopSegmentFetchFailed",
                  "%s:%s - Fetch failed for media segment needed to append; segmentFetchDemandKey=%s nextAppendInfo=%s",
                  X.type,
                  ce,
                  Ar,
                  JSON.stringify(Mr),
                ))
              : Br != null &&
                Br.state === "aborted" &&
                (Or = o("nextgendasherr").nextgendasherr(
                  e,
                  "VideoPlayerNextgendashPlaybackLoopSegmentFetchAborted",
                  "%s:%s - Fetch aborted for media segment needed to append; segmentFetchDemandKey=%s nextAppendInfo=%s",
                  X.type,
                  ce,
                  Ar,
                  JSON.stringify(Mr),
                ));
            var Wr = Fr == null ? void 0 : Fr.responseInfo,
              qr =
                Mr.segment.isPredictiveSegment !== !0 &&
                Mr.segment.fetchKeyNumber != null &&
                q.some(function (e) {
                  return (
                    e.requestDraft.requestID === Ar &&
                    e.isPredictiveSegmentFetch === !0
                  );
                }),
              Ur = function (t) {
                return (
                  d.push(
                    X.type + ":" + Mr.representationId + ":" + t + ":" + Ar,
                  ),
                  {
                    fetchDemands: q.filter(function (e) {
                      return e.requestDraft.requestID !== Ar;
                    }),
                    stream:
                      Mr.incompleteChunkedAppendInfo != null
                        ? babelHelpers.extends({}, X, {
                            appendState: o(
                              "VideoPlayerNextgendashStateMachine",
                            ).skipAutoDisposeInsideThisObject(
                              babelHelpers.extends({}, X.appendState, {
                                lastAppendOperation: null,
                              }),
                            ),
                          })
                        : X,
                  }
                );
              },
              Vr = function (t) {
                var e = {};
                for (var n of Object.keys(X.sidxByRepresentationId)) {
                  var r = X.sidxByRepresentationId[n];
                  e[n] = r == null ? r : Sn(r);
                }
                X = babelHelpers.extends({}, X, {
                  listedSegmentsPredictedURLFailed: !0,
                  sidxByRepresentationId: o(
                    "VideoPlayerNextgendashStateMachine",
                  ).skipAutoDisposeInsideThisObject(e),
                });
                var i = Ur(t),
                  l = i.fetchDemands,
                  s = i.stream;
                return {
                  fetchDemands: l.filter(function (e) {
                    var t;
                    return (
                      e.isListedSegmentPredictedURLFetch !== !0 ||
                      ((t = z(e, a.args.fetchPoolAPI)) == null
                        ? void 0
                        : t.state) === "completed"
                    );
                  }),
                  stream: s,
                };
              },
              Hr =
                Mr.segment.isPredictiveSegment !== !0 &&
                Mr.segment.predictedURLNumber != null;
            if (Hr && vn(Br))
              return Vr("listed_segment_predicted_url_fetch_retrying_refetch");
            if (Or != null) {
              var Gr;
              if (qr)
                return Ur("confirmed_segment_predictive_fetch_failed_refetch");
              if (Hr)
                return Vr("listed_segment_predicted_url_fetch_failed_refetch");
              var zr =
                (Gr = X.liveSegmentFetchFailingSinceUnixMs) != null
                  ? Gr
                  : B.unixMs;
              if (
                Mr.segment.isPredictiveSegment !== !0 &&
                it({
                  enableLive: e.config.enableLive,
                  errorName: Or.name,
                  failingSinceUnixMs: zr,
                  isLastPlayableRepresentation:
                    X.playableRepresentations.length <= 1,
                  isLivePlayback: e.config.isLivePlayback,
                  nowUnixMs: B.unixMs,
                  retryIndefinitely:
                    e.config.liveSegmentFetchRetryNetworkFailuresIndefinitely,
                  toleranceMs:
                    e.config.liveSegmentFetchNetworkFailureToleranceMs,
                })
              )
                return (
                  d.push(
                    X.type +
                      ":" +
                      Mr.representationId +
                      ":live_segment_fetch_failed_retry:" +
                      Ar,
                  ),
                  (X = babelHelpers.extends({}, X, {
                    appendState:
                      Mr.incompleteChunkedAppendInfo != null
                        ? o(
                            "VideoPlayerNextgendashStateMachine",
                          ).skipAutoDisposeInsideThisObject(
                            babelHelpers.extends({}, X.appendState, {
                              lastAppendOperation: null,
                            }),
                          )
                        : X.appendState,
                    liveOutageFailedRepresentationIds: st(
                      X.liveOutageFailedRepresentationIds,
                      Mr.representationId,
                    ),
                    liveSegmentFetchFailingSinceUnixMs: zr,
                  })),
                  (q = q.filter(function (e) {
                    return e.requestDraft.requestID !== Ar;
                  })),
                  { fetchDemands: q, stream: X }
                );
              if (Mr.segment.isPredictiveSegment === !0) {
                var jr = X.sidxByRepresentationId[Mr.representationId];
                if (jr != null) {
                  var Kr, Qr;
                  ((X = babelHelpers.extends({}, X, {
                    predictiveTemplateNumberLastFailed:
                      (Kr = Mr.segment.templateNumber) != null ? Kr : null,
                    sidxByRepresentationId: o(
                      "VideoPlayerNextgendashStateMachine",
                    ).skipAutoDisposeInsideThisObject(
                      babelHelpers.extends(
                        {},
                        X.sidxByRepresentationId,
                        ((Qr = {}),
                        (Qr[Mr.representationId] = jr.filter(function (e) {
                          return e.isPredictiveSegment !== !0;
                        })),
                        Qr),
                      ),
                    ),
                  })),
                    d.push(
                      X.type +
                        ":" +
                        Mr.representationId +
                        ":predictive_segment_fetch_failed",
                    ));
                }
                return (
                  (q = q.filter(function (e) {
                    return e.requestDraft.requestID !== Ar;
                  })),
                  { fetchDemands: q, stream: X }
                );
              }
              return (
                (X = xn(e, F, d, X, n, ce, Or)),
                { fetchDemands: q, stream: X }
              );
            } else if (Wr != null) {
              if (X.liveSegmentFetchFailingSinceUnixMs != null) {
                var Xr = ut(
                  X.liveOutageFailedRepresentationIds,
                  Mr.representationId,
                );
                ((X = babelHelpers.extends({}, X, {
                  liveOutageFailedRepresentationIds: null,
                  liveSegmentFetchFailingSinceUnixMs: null,
                })),
                  Xr && (X = ct(e, d, X, n)));
              }
              if (
                qr &&
                dt(
                  babelHelpers.extends({}, Mr.segment, {
                    isPredictiveSegment: !0,
                  }),
                  Mr.dataByteRangeStart,
                  Wr,
                )
              )
                return Ur("confirmed_segment_predictive_fetch_empty_refetch");
              if (
                Hr &&
                dt(
                  babelHelpers.extends({}, Mr.segment, {
                    isPredictiveSegment: !0,
                  }),
                  Mr.dataByteRangeStart,
                  Wr,
                )
              )
                return Vr("listed_segment_predicted_url_fetch_empty_refetch");
              if (dt(Mr.segment, Mr.dataByteRangeStart, Wr)) {
                var Yr = X.sidxByRepresentationId[Mr.representationId];
                if (Yr != null) {
                  var Jr, Zr;
                  ((X = babelHelpers.extends({}, X, {
                    predictiveTemplateNumberLastFailed:
                      (Jr = Mr.segment.templateNumber) != null ? Jr : null,
                    sidxByRepresentationId: o(
                      "VideoPlayerNextgendashStateMachine",
                    ).skipAutoDisposeInsideThisObject(
                      babelHelpers.extends(
                        {},
                        X.sidxByRepresentationId,
                        ((Zr = {}),
                        (Zr[Mr.representationId] = Yr.filter(function (e) {
                          return e.isPredictiveSegment !== !0;
                        })),
                        Zr),
                      ),
                    ),
                  })),
                    d.push(
                      X.type +
                        ":" +
                        Mr.representationId +
                        ":predictive_segment_fetch_empty",
                    ));
                }
                return (
                  (q = q.filter(function (e) {
                    return e.requestDraft.requestID !== Ar;
                  })),
                  { fetchDemands: q, stream: X }
                );
              }
              var eo = Mr.segment.mediaFileByteRange.byteLength,
                to =
                  Wr.isFetchComplete ||
                  (Wr.responseByteRange.byteLength != null &&
                    Wr.chunksByteLength >=
                      Wr.responseByteRange.byteOffset +
                        Wr.responseByteRange.byteLength),
                no = 6,
                ro = 1e5,
                oo = to
                  ? null
                  : e.config.dataAppendOperationMinBytes === "ozplayer-like"
                    ? no > 0 && eo != null && eo > 0
                      ? Math.ceil(eo / no)
                      : ro > 0
                        ? ro
                        : null
                    : e.config.dataAppendOperationMinBytes,
                ao = Wr.responseByteRange.byteOffset + Mr.dataByteRangeStart,
                io =
                  Wr.responseByteRange.byteLength != null
                    ? Wr.responseByteRange.byteLength - Mr.dataByteRangeStart
                    : null,
                lo =
                  Wr.kind === "native"
                    ? null
                    : In(
                        Wr.chunks,
                        ao,
                        oo != null ? (io != null ? Math.min(io, oo) : oo) : io,
                      ),
                so = b(e.config.mediaSinkType, to),
                uo = null;
              if (!so && Wr.kind === "native") {
                var co = Wr.buffer.body;
                if (
                  io == null ||
                  !Number.isSafeInteger(io) ||
                  io < 0 ||
                  !Number.isSafeInteger(ao) ||
                  ao < 0 ||
                  ao + io > co.byteLength
                )
                  throw o("nextgendasherr").nextgendasherr(
                    e,
                    "VideoPlayerNextgendashPlaybackLoopNativeAppendRangeInvalid",
                  );
                uo =
                  io === 0
                    ? C
                    : {
                        body: co,
                        byteLength: io,
                        byteOffset: ao,
                        kind: "native",
                      };
              } else if (
                !so &&
                Wr.kind !== "native" &&
                lo != null &&
                (oo === null || lo.copyTotalBytesCount >= oo)
              ) {
                if (((uo = Tn(Wr.chunks, lo)), uo == null))
                  throw o("nextgendasherr").nextgendasherr(
                    e,
                    "VideoPlayerNextgendashPlaybackLoopFailedToCombineChunksToAppend",
                    "%s/data#%s - Failed to copy %sB from chunks #%s(%sB)..#%s(%sB) into an append buffer (out of %s chunks of total %sB).",
                    Mr.representationId,
                    Mr.segment.segmentId,
                    lo.copyTotalBytesCount,
                    lo.startChunkIndex,
                    lo.startChunkByteOffset,
                    lo.endChunkIndex,
                    lo.endChunkBytesCount,
                    Wr.chunks.length,
                    Wr.chunksByteLength,
                  );
              } else to && (uo = C);
              if (uo != null) {
                var mo = {
                    appendInfoType: "data",
                    dataByteRangeLength: Q(uo),
                    dataByteRangeStart: Mr.dataByteRangeStart,
                    mimeCodecsParsed: Mr.mimeCodecsParsed,
                    representationId: Mr.representationId,
                    segment: Mr.segment,
                  },
                  po = {
                    appendInfo: mo,
                    buffer: uo,
                    operationState: "wait_start",
                    operationTiming: { created: e.host.clock() },
                    operationType: "append_operation",
                  };
                (d.push(
                  X.type +
                    ":" +
                    ce +
                    ":pendingAppendOperations:dataAppendOperation:" +
                    Wt(mo),
                ),
                  (X = babelHelpers.extends({}, X, {
                    appendState: o(
                      "VideoPlayerNextgendashStateMachine",
                    ).skipAutoDisposeInsideThisObject(
                      babelHelpers.extends({}, X.appendState, {
                        pendingAppendOperations: [].concat(
                          X.appendState.pendingAppendOperations,
                          [po],
                        ),
                      }),
                    ),
                  })));
              }
            } else if (
              e.host.nativeMedia != null &&
              (Br == null ? void 0 : Br.state) === "completed"
            )
              throw o("nextgendasherr").nextgendasherr(
                e,
                "VideoPlayerNextgendashPlaybackLoopNativeSegmentRangeInvalid",
              );
          }
        }
      }
      var _o = $n(e, F, X, d, se, t.mediaSourceState.mediaSource, Ve);
      _o != null && (X = babelHelpers.extends({}, X, _o));
      var fo = Pn(e, F, X, d, se, Ve, t.mediaSourceState.mediaSource);
      fo != null && (X = babelHelpers.extends({}, X, fo));
      var go = X.appendState.lastSourceBufferOperation;
      if (
        e.config.enableQuotaExceededRecovery &&
        X.quotaExceededBufferTargetRatio < 1 &&
        go != null &&
        go.operationState === "succeeded" &&
        go.operationType === "append_operation" &&
        go.operationTiming.created.unixMs !==
          X.quotaExceededLastRewardedCreatedMs
      ) {
        var ho = Math.min(
          1,
          X.quotaExceededBufferTargetRatio +
            e.config.quotaExceededBufferTargetReward,
        );
        X = babelHelpers.extends({}, X, {
          quotaExceededBufferTargetRatio: ho,
          quotaExceededLastRewardedCreatedMs: go.operationTiming.created.unixMs,
        });
      }
      return { fetchDemands: q, stream: X };
    }
    function Qe(e, t, n) {
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
    function Xe(e, t, n) {
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
    function Ye(e) {
      return "init-" + e.type + "-" + e.representationId;
    }
    function Je(e, t, n) {
      var r = Ye(n),
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
    function Ze(e) {
      return "sidx-" + e.type + "-" + e.representationId;
    }
    function et(e, t, n) {
      var r = n.segmentsInfo;
      if (r.type !== "SegmentBase")
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashPlaybackLoopSidxFetchUnknown",
          "%s:%s - sidx fetch unknown (" + r.type + ")",
          n.type,
          n.representationId,
        );
      var a = Ze(n),
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
    function tt(e, t, n) {
      var r = n.segmentsInfo;
      if (r.type !== "SegmentBase")
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashPlaybackLoopCombinedInitSidxFetchUnknown",
          "%s:%s - combined init+sidx fetch unknown (" + r.type + ")",
          n.type,
          n.representationId,
        );
      var a = Ye(n),
        i = Ze(n),
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
    function nt(e) {
      return e.fetchKeyNumber != null
        ? "n" + e.fetchKeyNumber
        : e.templateTime != null
          ? "t" + e.templateTime
          : "" + e.segmentId;
    }
    function rt(e, t) {
      return e.fetchKeyNumber != null && t.fetchKeyNumber != null
        ? e.fetchKeyNumber === t.fetchKeyNumber
        : e.templateTime != null && t.templateTime != null
          ? e.templateTime === t.templateTime
          : e.segmentId === t.segmentId;
    }
    var ot = 600 * 1e3;
    function at(e) {
      var t = e.match(/FetchHTTP(\d{3})/);
      return t != null
        ? Number(t[1]) >= 500
          ? "server_error"
          : null
        : /FetchedResource(FetchFailure|Offline|NativeRejection|NativeOffline|FetchException)|FetchResponseStreamReader/.test(
              e,
            )
          ? "without_response"
          : null;
    }
    function it(e) {
      if (!e.isLivePlayback || !e.enableLive || e.toleranceMs <= 0) return !1;
      var t = at(e.errorName);
      if (t == null) return !1;
      var n = e.nowUnixMs - e.failingSinceUnixMs;
      return n <= e.toleranceMs
        ? !0
        : e.retryIndefinitely
          ? t === "without_response" ||
            (e.isLastPlayableRepresentation && n <= ot)
          : !1;
    }
    function lt(e) {
      return Object.keys(e).filter(function (t) {
        var n = e[t];
        return n != null && at(n.name) != null;
      });
    }
    function st(e, t) {
      var n = e != null ? e : [];
      return n.includes(t) ? n : [].concat(n, [t]);
    }
    function ut(e, t) {
      var n;
      return (n = e == null ? void 0 : e.includes(t)) != null ? n : !1;
    }
    function ct(e, t, n, r) {
      var a =
        e.config.isLivePlayback &&
        e.config.liveSegmentFetchRetryNetworkFailuresIndefinitely &&
        n.playableRepresentations.length <= 1
          ? lt(n.blockedRepresentations)
          : [];
      if (a.length === 0) return n;
      var i = babelHelpers.extends({}, n.blockedRepresentations);
      for (var l of a) delete i[l];
      return (
        t.push(
          n.type +
            ":blockedRepresentations-" +
            a.join(",") +
            ":live_outage_recovered",
        ),
        Dn(
          e,
          t,
          babelHelpers.extends({}, n, {
            blockedRepresentations: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(i),
          }),
          r,
        )
      );
    }
    function dt(e, t, n) {
      return (
        e.isPredictiveSegment === !0 &&
        t === 0 &&
        n.isFetchComplete &&
        n.chunksByteLength === 0
      );
    }
    function mt(e) {
      if (e == null) return null;
      for (var t = e.length - 1; t >= 0; t--) {
        var n = e[t];
        if (n.isPredictiveSegment !== !0) return n.mediaTimeRange[1];
      }
      return null;
    }
    function pt(e) {
      var t = null;
      for (var n of e) {
        var r = mt(
          n.targetRepresentationId != null
            ? n.sidxByRepresentationId[n.targetRepresentationId]
            : null,
        );
        if (r == null) return null;
        t = t == null ? r : Math.min(t, r);
      }
      return t;
    }
    function _t(e) {
      var t = e.playheadMediaTimeSec,
        n = e.sidx,
        r = e.toleranceSec,
        o = mt(n);
      return o == null ? null : t >= o - r ? o : null;
    }
    function ft(e) {
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
      var u = i === "static" ? Math.min(t, D) : t,
        c =
          s != null && s.tailEndSec === n
            ? s
            : { sinceUnixMs: l, tailEndSec: n },
        d = l - c.sinceUnixMs >= u * 1e3;
      return { confirmed: d, next: c };
    }
    var gt = 3e3,
      ht = 1,
      yt = 0.8,
      Ct = 2e4;
    function bt(e) {
      var t = e.fromBandwidth,
        n = e.holdUntilPerfMs,
        r = e.nowPerfMs,
        o = e.toBandwidth;
      return n != null && r < n && o > t;
    }
    function vt(e, t, n, r, o, a, i) {
      if (
        o == null ||
        o >= ht ||
        !n.playableRepresentations.some(function (e) {
          return e.bandwidth < r.bandwidth;
        })
      )
        return null;
      var l = "segment-" + n.type + "-" + r.representationId + "-";
      for (var s of e) {
        var u = s.requestDraft.requestID;
        if (
          !(
            s.streamType !== n.type ||
            !u.startsWith(l) ||
            (!i && u === n.liveSlowFetchEvaluatedFetchDataKey)
          )
        ) {
          var c = z(s, t);
          if (!(c == null || c.state !== "waiting_data")) {
            var d = c.responseData.state;
            if (d.state === "reading_stream") {
              var m = d.startedReadingClock.perfMs;
              if (
                !(
                  i &&
                  u === n.liveSlowFetchEvaluatedFetchDataKey &&
                  m === n.liveSlowFetchEvaluatedReadingStartPerfMs
                )
              ) {
                var p = a - m;
                if (!(p < gt)) {
                  var _ = { bytes: d.dataBytesLengthTotal, timeInMs: p },
                    f = d.predictiveResponseChunkBytes,
                    g = d.predictiveResponseChunkArrivedPerfMs;
                  if (
                    (f != null &&
                      g != null &&
                      (_ = { bytes: f, timeInMs: g - m }),
                    _.timeInMs > 0 &&
                      (_.bytes * 8e3) / _.timeInMs < r.bandwidth * yt)
                  )
                    return {
                      bandwidthSample: _,
                      fetchDataKey: u,
                      hasReportedBandwidthSample: d.hasReportedBandwidthSample,
                      readingStartPerfMs: m,
                    };
                }
              }
            }
          }
        }
      }
      return null;
    }
    function St(e, t, n, r, o) {
      if (n) return null;
      var a = o.timeInMs > 0 ? (o.bytes * 8e3) / o.timeInMs : 0,
        i = null,
        l = null;
      for (var s of e)
        s.bandwidth >= r ||
          (t.length > 0 && !t.includes(s.representationId)) ||
          ((i == null || s.bandwidth < i.bandwidth) && (i = s),
          s.bandwidth <= a * yt &&
            (l == null || s.bandwidth > l.bandwidth) &&
            (l = s));
      return l != null ? l : i;
    }
    function Rt(e) {
      return (
        e.enableBandwidthDiagnosticsFallback ||
        (e.isLivePlayback && e.liveBandwidthDiagnosticsFallbackEnabled)
      );
    }
    function Lt(e, t) {
      if (e == null) return null;
      for (var n of e) if (n[0] <= t && t <= n[1]) return n[1] - t;
      return 0;
    }
    function Et(e, t, n, r) {
      var o;
      if (n <= 0 || e == null) return null;
      var a = (o = e[0]) == null ? void 0 : o[0];
      if (a == null) return null;
      var i = t - n;
      return i - a >= r ? i : null;
    }
    function kt(e, t) {
      return e && (t == null || t.paused);
    }
    function It(e) {
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
    function Tt(e) {
      var t = e.audioBufferedRangesSec,
        n = e.enabled,
        r = e.isLivePlayback,
        o = e.playheadMediaTimeSec,
        a = e.seeking,
        i = e.videoSegments;
      if (!n || r || !a || !(o > 0)) return null;
      if (i == null) return "defer";
      var l = i.find(function (e) {
        var t = e.mediaTimeRange,
          n = t[0],
          r = t[1];
        return n <= o && o < r;
      });
      if (l == null || l.mediaTimeRange[0] >= o) return null;
      var s = l.mediaTimeRange[0],
        u = (t != null ? t : []).some(function (e) {
          var t = e[0],
            n = e[1];
          return t <= s && n >= o;
        });
      return u ? null : Math.max(0, s - R);
    }
    function Dt(e) {
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
          It({
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
    function xt(e, t) {
      var n = e.findIndex(function (e) {
          return (
            e.representationId === t.representationId &&
            rt(e.segment, t.segment)
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
      return o.length > w ? o.slice(o.length - w) : o;
    }
    function $t(e, t) {
      return "segment-" + e.type + "-" + e.representationId + "-" + nt(t);
    }
    function Pt(e, t, n, r) {
      var a = n.segmentsInfo,
        i = $t(n, r),
        l =
          n.segmentsInfo.type === "SegmentBase"
            ? { byteLength: r.mediaFileByteRange.byteLength, byteOffset: 0 }
            : { byteLength: null, byteOffset: 0 },
        s = o(
          "VideoPlayerNextgendashStateMachine",
        ).skipAutoDisposeInsideThisObject(new Map([[i, l]]));
      return babelHelpers.extends(
        {
          activeDemands: o(
            "VideoPlayerNextgendashStateMachine",
          ).skipAutoDisposeInsideThisObject(new Set(s.keys())),
          dataKeyToResponseByteRange: s,
          demandedAtClock: e.host.clock(),
          evictedClock: null,
          evictedReason: null,
          fetchDemandOrder: t,
        },
        r.isPredictiveSegment === !0
          ? { isPredictiveSegmentFetch: !0 }
          : r.predictedURLNumber != null &&
              a.type === "SegmentTemplate" &&
              a.segmentTimelinePredictive != null
            ? { isListedSegmentPredictedURLFetch: !0 }
            : null,
        {
          poolTrackingID: null,
          representationId: n.representationId,
          requestDraft: o(
            "VideoPlayerNextgendashStateMachine",
          ).skipAutoDisposeInsideThisObject({
            bandwidthSampleServerPacedBitsPerSecond:
              r.isPredictiveSegment === !0 &&
              e.config.isLivePlayback &&
              e.config.liveBandwidthSampleRequiresContinuousTransfer
                ? n.bandwidth
                : null,
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
                  relativeURL: re(e, n.type, n.representationId, a, r),
                  type: "BaseURLRelativeURL",
                },
          responseFetch: null,
          streamType: n.type,
        },
      );
    }
    function Nt(e, t, n, r) {
      if (r.length === 0)
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashPlaybackLoopGroupOfSegmentsFetchEmptySegments",
          "%s:%s - Group of segments fetch empty segments",
          n.type,
          n.representationId,
        );
      if (r.length === 1) return Pt(e, t, n, r[0]);
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
                $t(n, e),
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
    function Mt(e, t, n, r) {
      r === void 0 && (r = !1);
      for (var o = !1, a = null, i = 0; i < e.length; ++i) {
        var l = e[i],
          s = l.dataKeyToResponseByteRange.get(t);
        if (s != null) {
          o = !0;
          var u = z(l, n);
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
          y = p.state === "done_buffer" ? Q(p.buffer) : p.dataBytesLengthTotal,
          C = null;
        if (
          r &&
          (g || (m.byteLength != null && y >= m.byteOffset + m.byteLength))
        ) {
          var b = In(h, m.byteOffset, m.byteLength);
          C = b != null ? Tn(h, b) : null;
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
    function wt(e, t, n) {
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
    function At(e, t, n) {
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
    function Ft(e, t, n) {
      return e.map(function (e) {
        var r,
          o,
          a = z(e, n),
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
              return [t, Bt(n)];
            },
          );
        return [u, i, s, l];
      });
    }
    function Ot(e, t) {
      return (t === void 0 && (t = !1), JSON.stringify(Ft(e, t)));
    }
    function Bt(e) {
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
    function Wt(e) {
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
            Bt(e.segment.mediaFileByteRange) +
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
    function qt(e) {
      var t = e.segment.mediaFileByteRange.byteLength;
      return (
        e.dataByteRangeLength === 0 ||
        (t != null && e.dataByteRangeStart + e.dataByteRangeLength >= t)
      );
    }
    function Ut(e) {
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
    function Vt(e) {
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
    function Ht(e) {
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
    function Gt(e) {
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
    function zt(e) {
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
    function jt(e, t) {
      return t != null
        ? e.host.sourceBufferSnapshotBuffered(e, t.sourceBuffer)
        : void 0;
    }
    function Kt(e) {
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
    function Qt(e, t, n, r, a, i, l, g) {
      var h = n.appendState,
        y = h.currSourceBufferOperation;
      if (y == null) return null;
      var C = null,
        b = null,
        v = null,
        S = (function () {
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
                                byteLength: Q(y.buffer),
                                dataByteRangeLength: t.dataByteRangeLength,
                                dataByteRangeStart: t.dataByteRangeStart,
                                segmentId: t.segment.segmentId,
                              },
                            }
                          : { int: { byteLength: Q(y.buffer) } }
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
                            sourceBufferRangesAfterFinish: b
                              ? o(
                                  "VideoPlayerNextgendashMediaUtils",
                                ).debugStringifyTimeRanges(b)
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
                    S = l(h.started);
                  return babelHelpers.extends({}, y, {
                    debugSourceBufferRangesAfterStart: void 0,
                    operationState: "wait_updateend",
                    operationTiming: h,
                    qplSubspanEnd: S,
                  });
                }
                case "_exception": {
                  b = g();
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
                    waitForMediaElementErrorUntilUnixMs: i.unixMs + Ae,
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
                  if (((b = g()), b != null && !dn(b, $))) {
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
                          Wt(y.appendInfo),
                          JSON.stringify($.mediaTimeRange),
                          JSON.stringify(b),
                        ),
                      ));
                  }
                  N.operationType === "append_operation" &&
                    N.appendInfo.appendInfoType === "data" &&
                    (v = N.appendInfo);
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
                  b = g();
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
                    waitForMediaElementErrorUntilUnixMs: i.unixMs + Ae,
                  });
                  if (H.operationType === "append_operation") {
                    var G = H.buffer,
                      z = babelHelpers.objectWithoutPropertiesLoose(H, d);
                    return babelHelpers.extends({}, z, {
                      buffer: G instanceof Uint8Array ? G : void 0,
                    });
                  }
                  return H;
                }
                case "_finished": {
                  var j, K;
                  if (y.operationType !== "remove_operation")
                    throw r("NotRemoveOperation");
                  var X = y.abortIsPendingUpdateEnd,
                    Y = y.errorIsPendingUpdateEnd,
                    J = y.qplSubspanEnd,
                    Z = babelHelpers.objectWithoutPropertiesLoose(y, m);
                  b = g();
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
                    (b = g());
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
                      waitForMediaElementErrorUntilUnixMs: i.unixMs + Ae,
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
                      (v = y.appendInfo),
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
          S.operationState === "succeeded" ||
          S.operationState === "errored" ||
          S.operationState === "aborted",
        k = S !== y ? (E ? null : S) : h.currSourceBufferOperation,
        I = S !== y && E ? S : h.lastSourceBufferOperation;
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
                      b != null
                        ? pe(b, l)
                        : l,
                    representationId: I.appendInfo.representationId,
                  }
                : qt(I.appendInfo)
                  ? N != null &&
                    N.playheadMinimumTimeSec >
                      I.appendInfo.segment.mediaTimeRange[1] + R
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
          w = Xt(
            h.sourceBufferRangesAnnotated,
            b,
            (T = v) == null ? void 0 : T.segment.mediaTimeRange,
            (D = v) == null ? void 0 : D.representationId,
            n.manifestRepresentationsCount,
          ),
          A =
            "" +
            y.operationType +
            (y.operationType === "append_operation"
              ? "/" + Wt(y.appendInfo)
              : "") +
            ":" +
            y.operationState +
            "--" +
            a.sourceBufferEventType +
            (a.sourceBufferEventType === "_exception"
              ? "/" + a.exception.name
              : "") +
            "-->" +
            S.operationState +
            (S.operationState === "wait_updateend"
              ? (S.errorIsPendingUpdateEnd ? ",errorIsPendingUpdateEnd" : "") +
                (S.abortIsPendingUpdateEnd ? ",abortIsPendingUpdateEnd" : "")
              : S.operationState === "errored"
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
                ($ != null ? Wt($.appendInfo) : "null"),
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
          M !== N && r.push(F + "...:appendChain:" + Ut(N) + "-->" + Ut(M)));
        var O =
          L != null
            ? xt(h.workaroundForSegmentBufferedInsufficiently, L)
            : h.workaroundForSegmentBufferedInsufficiently;
        if (
          E &&
          S.operationType === "append_operation" &&
          S.appendInfo.appendInfoType === "data" &&
          (S.appendInfo.dataByteRangeLength === 0 ||
            S.operationState !== "succeeded")
        ) {
          var B = S.appendInfo;
          O.some(function (e) {
            var t;
            return (
              ((t = e.nativeSeekRetry) == null ? void 0 : t.pending) === !0 &&
              e.representationId === B.representationId &&
              rt(e.segment, B.segment)
            );
          }) &&
            (O = O.map(function (e) {
              var t = e.nativeSeekRetry;
              return t != null &&
                t.pending &&
                e.representationId === B.representationId &&
                rt(e.segment, B.segment)
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
              sourceBufferRanges: b != null ? b : h.sourceBufferRanges,
              sourceBufferRangesAnnotated:
                w != null ? w : h.sourceBufferRangesAnnotated,
              workaroundForSegmentBufferedInsufficiently: O,
            }),
          ),
        };
      }
      return null;
    }
    function Xt(e, t, n, r, o) {
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
    function Yt(e) {
      var t = new Map();
      for (var n of e) {
        var r = o(
          "VideoPlayerNextgendashManifestParser",
        ).getDisplayLabelFromVideoRepresentation(n);
        t.has(r) || t.set(r, n);
      }
      return Array.from(t.values());
    }
    function Jt(e, t, n) {
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
    function Zt(e, t) {
      var n = Jt(e, t.videoLang, t.videoRole),
        r = n.debugFallbacksTried,
        o = n.filteredRepresentations;
      return { debugFallbacksTried: r, representationsByVariant: Yt(o) };
    }
    function en(e, t) {
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
    function tn(e, t) {
      var n = Jt(e, t.audioLang, t.audioRole),
        r = n.debugFallbacksTried,
        o = n.filteredRepresentations;
      return { debugFallbacksTried: r, representationsByVariant: o };
    }
    function nn(e, t, n) {
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
    function rn(e, t, n, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C, b, S) {
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
        ((k = I.representations), nn(e, n, I));
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
        M = p != null ? p : K,
        w = Zt(k, M),
        A = w.debugFallbacksTried,
        F = w.representationsByVariant,
        O = v(
          e,
          F.map(function (e) {
            return e.representationId;
          }),
        ),
        B = en(F, _);
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
          var V = Gt(l),
            H = Gt(k),
            G = Gt(F),
            z = Gt(B);
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
              "playableRepresentations=" + (H === V ? "same" : H),
              "blockedRepresentations=" + Vt(u),
              "targetVariantRepresentations=" + G,
              "filteredRepresentations=" + (z === G ? "same" : z),
              "fallbacksTried=" + A.join(";"),
            ),
          );
        }
      }
      var j = d != null ? d : K,
        Q = on(p, M, j, _, m);
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
            (($ = v(e, {
              bestRepresentationId: J.representationId,
              bestRepresentationIsPrefetched: !0,
              hasMadeInitialDecision: !1,
              lastEvaluationReason: null,
            })),
              (P =
                e.config.mediaSinkType === "WEBCODECS" ||
                e.config.mediaSinkType === "HYBRID"
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
            ce = i(e, B, g),
            de = ce.bestRepresentation,
            me = !r("deepEquals")(ce.nextABRState, g);
          if (
            (me && ($ = v(e, ce.nextABRState)),
            (re || me || e.config.enableStableAbrEvaluationCooldown) &&
              (P = e.host.clock()),
            de != null &&
              de.representationId !==
                ((ue = x) == null ? void 0 : ue.representationId))
          ) {
            var pe = !Q && x != null && de.bandwidth > x.bandwidth,
              _e = C && pe,
              fe =
                !_e ||
                he(
                  de,
                  S,
                  b,
                  e.config.liveAbrTailSwitchAllowPredictiveContinuation,
                );
            fe
              ? ((x = de),
                re && (N = e.host.clock()),
                Q
                  ? (D = "selected_switch")
                  : _e
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
    function on(e, t, n, r, o) {
      return (
        (e != null &&
          (t.videoLang !== n.videoLang || t.videoRole !== n.videoRole)) ||
        (r != null && r !== o)
      );
    }
    function an(e, t, n) {
      return (
        e != null &&
        (t.audioLang !== n.audioLang || t.audioRole !== n.audioRole)
      );
    }
    function ln(e, t, n, r, a, i, l, s, u) {
      var c,
        d =
          (c = r.find(function (e) {
            return e.representationId === l;
          })) != null
            ? c
            : null,
        m,
        p = d,
        _ = u != null ? u : K,
        f = tn(a, _),
        g = f.debugFallbacksTried,
        h = f.representationsByVariant,
        y = v(
          e,
          h.map(function (e) {
            return e.representationId;
          }),
        ),
        C = h;
      if (
        (g.length > 0 &&
          !g.every(function (e) {
            return e.startsWith("lang#0+sameRole;null+null-->");
          })) ||
        C.length === 0
      ) {
        var b,
          S = [
            "audio",
            a.length,
            _.videoLang,
            _.videoRole,
            _.audioLang,
            _.audioRole,
          ].join(":"),
          R = 1 + ((b = n.get(S)) != null ? b : 0);
        if ((n.set(S, R), R === 1)) {
          var L = zt(r),
            E = zt(a),
            k = zt(h),
            I = zt(C);
          t(
            o("nextgendasherr").nextgendasherr(
              e,
              C.length === 0
                ? "VideoPlayerNextgendashPlaybackLoopRepresentationAllFiltered[audio]"
                : "VideoPlayerNextgendashPlaybackLoopRepresentationFallback[audio]",
              "%s:%s - No representations for variant, " +
                (C.length === 0 ? "all filtered" : "fallback applied") +
                ". %s %s %s %s %s %s %s %s",
              "audio",
              l != null ? l : "no_target_representation",
              "selectedVariant=" + JSON.stringify(u),
              "targetVariant=" + (_ === u ? "same" : JSON.stringify(_)),
              "manifestRepresentations=" + L,
              "playableRepresentations=" + (E === L ? "same" : E),
              "blockedRepresentations=" + Vt(i),
              "targetVariantRepresentations=" + k,
              "filteredRepresentations=" + (I === k ? "same" : I),
              "fallbacksTried=" + g.join(";"),
            ),
          );
        }
      }
      var T = s != null ? s : K,
        D = an(u, _, T);
      if (C.length > 0) {
        var x,
          $ = C.slice()
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
    function sn(e, t, n, r, a, i, l, s, u, c) {
      var d = u,
        m,
        p,
        _,
        f;
      if (d.type === "video") {
        var g,
          h,
          y,
          C = G(e, a.mediaElementSnapshot),
          b = rn(
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
                  Rt(e.config),
                  e.config.bandwidthDiagnosticsFallbackDefaultEstimate,
                ),
                cacheQualityScoreInRepresentation:
                  e.config.cacheQualityScoreInRepresentation,
                devicePixelRatio: a.devicePixelRatio,
                isDocumentHidden: a.isDocumentHidden,
                isLookAheadFromPlayhead:
                  e.config.isLivePlayback &&
                  e.config.liveAbrLookAheadFromPlayhead,
                mediaDurationSec:
                  (i =
                    (u = a.mediaElementSnapshot) == null
                      ? void 0
                      : u.duration) != null
                    ? i
                    : "NOT_A_NUMBER",
                playerDimensions: a.playerViewportDimensions,
                playheadMediaTimeSec: C,
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
            C,
            s,
          );
        if (
          ((m = b.prevTargetRepresentation),
          (_ = b.targetRepresentation),
          (p = b.targetRepresentationReason),
          (f = b.targetVariantRepresentationIds),
          (g = b.videoABRState),
          (h = b.videoABRStateClock),
          (y = b.videoABRSwitchClock),
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
        var x = ln(
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
          (f = v(
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
            "blockedRepresentations=" + Vt(d.blockedRepresentations),
          )
        );
      }
      return {
        prevTargetRepresentation: m,
        stream: un(
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
    function un(e, t, n, r, a, i, l, s, u) {
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
    function cn(e, t, n) {
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
    function dn(e, t) {
      return (
        cn(e, t.mediaTimeRange, 0.05) ||
        (t.isEndingSegment && cn(e, t.mediaTimeRange, 0.05))
      );
    }
    function mn(e, t, n, r) {
      return e == null || t !== e.representationId || e.mediaTail == null
        ? !1
        : r
          ? n.mediaTimeRange[1] <= e.mediaTail.mediaTimeSec + N
          : n.segmentId <= e.mediaTail.segmentId;
    }
    function pn(e, t) {
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
    function _n(e, t) {
      var n = e.filter(function (e) {
        return e.isPredictiveSegment !== !0;
      });
      if (t.length === 0) return { sidx: n, type: "merged" };
      var r = e.filter(function (e) {
          return e.isPredictiveSegment === !0;
        }),
        o = function (t, n) {
          var e = r[n],
            o = e == null ? void 0 : e.fetchKeyNumber;
          if (e == null || o == null) return t;
          var a =
            0.5 *
            Math.min(
              t.mediaTimeRange[1] - t.mediaTimeRange[0],
              e.mediaTimeRange[1] - e.mediaTimeRange[0],
            );
          return Math.abs(t.mediaTimeRange[0] - e.mediaTimeRange[0]) <= a
            ? babelHelpers.extends({}, t, { fetchKeyNumber: o })
            : t;
        },
        a = e[e.length - 1];
      if (n.length === 0)
        return a == null
          ? { sidx: t, type: "merged" }
          : {
              sidx: t.map(function (e, t) {
                return babelHelpers.extends({}, o(e, t), {
                  segmentId: a.segmentId + 1 + t,
                });
              }),
              type: "merged",
            };
      var i = n[0].mediaTimeRange[0],
        l = t[t.length - 1].mediaTimeRange[1];
      if (l < i - N)
        return { existingStartSec: i, freshEndSec: l, type: "timeline_reset" };
      var s = n[n.length - 1],
        u = s.mediaTimeRange[1],
        c = [];
      for (var d of t)
        d.mediaTimeRange[0] >= u - N &&
          c.push(
            babelHelpers.extends({}, o(d, c.length), {
              segmentId: s.segmentId + 1 + c.length,
            }),
          );
      return { sidx: [].concat(n, c), type: "merged" };
    }
    function fn(e) {
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
    function gn(e, t, n) {
      if (n <= 0 || t == null || e.length <= 1) return e;
      for (
        var r = t - n, o = 0;
        o < e.length - 1 && e[o].mediaTimeRange[1] <= r;
      )
        o++;
      return o === 0 ? e : e.slice(o);
    }
    function hn(e) {
      var t = e.segmentTimeline,
        n = e.timescale;
      if (t.length === 0) return null;
      var r = t[t.length - 1];
      return (r.t + (r.r + 1) * r.d) / n;
    }
    function yn(e, t, n, r, o) {
      return e.mediaTimeRange[1] > o + N
        ? !1
        : e.isPredictiveSegment === !0
          ? !0
          : n &&
            t.endNumber != null &&
            r != null &&
            e.mediaTimeRange[1] >= r - N;
    }
    function Cn(e, t) {
      return e.isPredictiveSegment === !0 && e.templateNumber != null
        ? e.templateNumber + 1
        : t.endNumber != null
          ? t.endNumber + 1
          : null;
    }
    function bn(e, t) {
      var n,
        r = t == null ? void 0 : t.endNumber;
      if (r == null || e.length === 0) return e;
      for (
        var o = (n = t == null ? void 0 : t.startNumber) != null ? n : 0,
          a = e.slice(),
          i = a.length - 1;
        i >= 0;
        --i
      ) {
        var l = r - (a.length - 1 - i),
          s = a[i + 1];
        if (
          l < o ||
          (s != null &&
            Math.abs(a[i].mediaTimeRange[1] - s.mediaTimeRange[0]) > S)
        )
          break;
        a[i] = babelHelpers.extends({}, a[i], { predictedURLNumber: l });
      }
      return a;
    }
    function vn(e) {
      if (e == null) return !1;
      switch (e.state) {
        case "waiting_retry_or_failed":
        case "waiting_start_from_retry":
          return !0;
        case "waiting_start":
        case "waiting_headers":
          return e.retryLogic != null;
        default:
          return !1;
      }
    }
    function Sn(e) {
      return e.some(function (e) {
        return e.predictedURLNumber != null;
      })
        ? e.map(function (e) {
            if (e.predictedURLNumber == null) return e;
            var t = e.predictedURLNumber,
              n = babelHelpers.objectWithoutPropertiesLoose(e, g);
            return n;
          })
        : e;
    }
    function Rn(e, t, n, r) {
      r === void 0 && (r = !1);
      var a = t[t.length - 1];
      if (a == null || e.endNumber == null) return t;
      var i = Cn(a, e);
      if (i == null) return t;
      var l = a.mediaTimeRange[1] - a.mediaTimeRange[0],
        s = e.segmentAverageDuration != null ? e.segmentAverageDuration / n : l,
        u = a.mediaTimeRange[1],
        c = Math.round(u * n);
      return t.concat([
        babelHelpers.extends({}, r ? { fetchKeyNumber: i } : null, {
          isEndingSegment: !1,
          isPredictiveSegment: !0,
          mediaFileByteRange: o("VideoPlayerNextgendashMediaUtils")
            .ZERO_TO_EOF_OPEN_ENDED_BYTE_RANGE,
          mediaTimeRange: [u, u + s],
          segmentId: a.segmentId + 1,
          templateNumber: i,
          templateTime: c,
        }),
      ]);
    }
    function Ln(e, t, n, r, a) {
      var i = a ? En(r) : r,
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
    function En(e) {
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
    function kn(e, t, n, r, a, i, l, s) {
      if (r.mediaTail == null) return r;
      var u = r.playheadMinimumTimeSec,
        c = r.mediaTail.mediaTimeSec;
      if (u > c + R)
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashPlaybackLoopIncoherentAppendChain",
          "%s:%s - appendChain.playheadMinimumTimeSec %ss > appendChain.mediaTail.mediaTimeSec %ss",
          t,
          n,
          u,
          c,
        );
      if (!o("VideoPlayerNextgendashMediaUtils").isWithinRange([u, c + R], a)) {
        if (
          e.config.isLivePlayback &&
          (_e(i, a, u) ||
            (e.config.liveAppendChainForwardCoveredEscapeEnabled &&
              fe(i, a, c)))
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
              Ut(r) +
              "-->" +
              Ut(d) +
              "(playhead_outside)",
          ),
          d
        );
      }
      if (Math.abs(c - u) > R) {
        var m = [u, Math.max(a, c - R)];
        if (i === void 0 || !cn(i, m, 0)) {
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
                Ut(r) +
                "-->" +
                Ut(p) +
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
                Kt(e.host.mediaSourceCollectSnapshot(e, l)) +
                ")",
            ),
            p
          );
        }
      }
      return r;
    }
    function In(e, t, n) {
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
    function Tn(e, t) {
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
    function Dn(e, t, n, r, a) {
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
          p = Ht(u),
          _ = Ht(c),
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
            "blockedRepresentations=" + Vt(n.blockedRepresentations),
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
    function xn(e, t, n, r, a, i, l) {
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
                "blockedRepresentations=" + Vt(r.blockedRepresentations),
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
        Dn(
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
    function $n(e, t, n, r, a, i, l) {
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
          var b = Qt(
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
              return jt(e, d);
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
            var v = Qt(
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
                return jt(e, d);
              },
            );
            v != null && (y = babelHelpers.extends({}, y, v));
          }
        }
        if (C != null) {
          var S = Qt(
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
              return jt(e, d);
            },
          );
          S != null && (y = babelHelpers.extends({}, y, S));
        }
        return y;
      }
      return null;
    }
    function Pn(e, t, n, r, a, i, l) {
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
              Wt(d.appendInfo),
          ),
          h.appendInfoType === "data" && h.dataByteRangeLength === 0)
        ) {
          var b = Qt(
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
              return jt(e, m);
            },
          );
          b != null && (C = babelHelpers.extends({}, C, b));
        } else {
          var v;
          try {
            var S = Qt(
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
                return jt(e, m);
              },
            );
            (S != null && (C = babelHelpers.extends({}, C, S)),
              h.appendInfoType === "init" &&
                (r.push(
                  n.type +
                    ":" +
                    p +
                    ":abort:MSEbefore=" +
                    Kt(e.host.mediaSourceCollectSnapshot(e, l)),
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
                  Kt(e.host.mediaSourceCollectSnapshot(e, l)),
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
                  Kt(e.host.mediaSourceCollectSnapshot(e, l)),
              ));
            var T = babelHelpers.extends(
              {
                mimeCodecsParsed: h.mimeCodecsParsed,
                representationId: h.representationId,
                type: n.type,
              },
              e.config.mediaSinkType === "MSE_TRACK_REUSE"
                ? {
                    height: a.type === "video" ? a.height : void 0,
                    isInitializationSegment: h.appendInfoType === "init",
                    mediaTimeRange:
                      h.appendInfoType === "data"
                        ? h.segment.mediaTimeRange
                        : void 0,
                    width: a.type === "video" ? a.width : void 0,
                  }
                : {},
            );
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
              (a.name === A ||
                (e.config.enableQuotaExceededRecoveryForCompositeErrors &&
                  F.test(a.name)));
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
            var M = Qt(
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
                return jt(e, m);
              },
            );
            M != null && (C = babelHelpers.extends({}, C, M));
          }
        }
        return C;
      }
      return null;
    }
    ((l.internal_shouldWaitForTrackReuseCompleteSegment = b),
      (l.internal_getMediaErrorRecoveryAttemptsCap = V),
      (l.internal_predictPlayhead = H),
      (l.internal_getPlayheadTimeSec = G),
      (l.originalMediaVariant = K),
      (l.internal_shouldResetLiveRecoveryAttempts = Y),
      (l.internal_isSourceBufferOperationTimedOut = J),
      (l.VideoPlayerNextgendashPlaybackLoopSM = te),
      (l.internal_substituteParamsInSegmentURLTemplate = ne),
      (l.internal_makeSegmentTemplateRelativeURL = re),
      (l.internal_prioritizeFetchDemands = oe),
      (l.internal_evictFetchDemandsByFetchState = ie),
      (l.internal_isInitURLRefreshedSeparately = ue),
      (l.internal_isRequestInfoArgsExpiredOrSoonExpiring = ce),
      (l.internal_getNoMediaElementBufferAheadTargetSec = me),
      (l.internal_getLiveABRTailSwitchAnchorTimeSec = pe),
      (l.internal_isLiveAppendChainAheadOfPlayheadCoveredByBuffer = _e),
      (l.internal_isPlayheadCoveredByBufferAheadOfAppendChainTail = fe),
      (l.internal_canLiveABRTailSwitchAppendAtBufferedTail = he),
      (l.internal_computeABRVolatility = Ce),
      (l.internal_computeNetworkVolatility = be),
      (l.internal_updateBandwidthVolatilitySamples = ve),
      (l.internal_computeBandwidthTrend = Se),
      (l.internal_evaluateSidxPrefetchTarget = Re),
      (l.internal_startFetchRequestsForFetchDemands = Le),
      (l.internal_fulfillFetchDemands = Ee),
      (l.internal_clampObserveAndActDelayMs = Te),
      (l.internal_coalesceAdjacentDebugLogLines = Pe),
      (l.internal_getEndOfStreamCheckpointSec = Me),
      (l.internal_groupSegmentsToFetch = Qe),
      (l.internal_makeSegmentFetchKeyIdPart = nt),
      (l.internal_isSameSegmentIdentity = rt),
      (l.internal_classifyLiveRetryableFetchError = at),
      (l.internal_shouldRetryLiveSegmentAfterFetchFailure = it),
      (l.internal_getLiveRepresentationsToUnblockAfterOutage = lt),
      (l.internal_withLiveOutageFailedRepresentation = st),
      (l.internal_isLiveOutageStreamWide = ut),
      (l.internal_isEmptyCompletePredictiveSegmentFetch = dt),
      (l.internal_getConfirmedSidxLiveEdgeTimeSec = mt),
      (l.internal_getLiveSeekableRangeEndSec = pt),
      (l.internal_getStreamDrainedConfirmedTailEndSec = _t),
      (l.internal_updateLiveEndedByStallState = ft),
      (l.internal_isLiveUpswitchHeldAfterSlowFetch = bt),
      (l.internal_findSlowLiveSegmentFetch = vt),
      (l.internal_selectLiveSlowFetchDownswitchRepresentation = St),
      (l.internal_isABRBandwidthDiagnosticsFallbackEnabled = Rt),
      (l.internal_getBufferedAheadSecForPlayhead = Lt),
      (l.internal_getBackBufferRemoveEndSec = Et),
      (l.internal_isLiveEdgeRefetchSuspended = kt),
      (l.internal_shouldRefetchAtLiveEdge = It),
      (l.internal_computeSeekPrerollAudioAnchorSec = Tt),
      (l.internal_computePairedRefetchAnchorSec = Dt),
      (l.internal_addBoundedWorkaroundForSegmentBufferedInsufficiently = xt),
      (l.makeSegmentFetchDataKey = $t),
      (l.internal_makeGroupOfSegmentsFetchDemand = Nt),
      (l.findDataForDataKey = Mt),
      (l.debugPrepareFetchDemands = Ft),
      (l.internal_handleSourceBufferEvent = Qt),
      (l.internal_updateSourceBufferRangesAnnotated = Xt),
      (l.internal_filterVideoRepresentationsByVariant = Zt),
      (l.internal_filterAudioRepresentationsByVariant = tn),
      (l.internal_selectTargetVideoRepresentation = rn),
      (l.internal_selectTargetAudioRepresentation = ln),
      (l.internal_checkRangeBufferedWithoutGap = cn),
      (l.internal_isSegmentBeforeAppendAnchor = mn),
      (l.internal_makeSidxFromSegmentTemplate = pn),
      (l.internal_mergeLiveSidx = _n),
      (l.internal_finalizeLiveSidxAtStaticFlip = fn),
      (l.internal_trimSidxToLiveLookbackBuffer = gn),
      (l.internal_getSegmentTemplateLiveEdgeMediaTimeSec = hn),
      (l.internal_canExtendPredictiveChainFromTail = yn),
      (l.internal_getNextPredictiveTemplateNumber = Cn),
      (l.internal_addPredictedURLNumbersToSidx = bn),
      (l.internal_isFetchRetryingAfterFailedAttempt = vn),
      (l.internal_removePredictedURLNumbersFromSidx = Sn),
      (l.internal_addPredictiveSegmentsToSidx = Rn),
      (l.internal_validateAndNormalizeSidx = Ln),
      (l.internal_selectDataChunksToAppend = In),
      (l.internal_combineDataChunksIntoContiguousBuffer = Tn),
      (l.internal_blockRepresentationInStream = xn),
      (l.internal_startPendingRemoveOperation = $n),
      (l.internal_startPendingAppendOperation = Pn));
  },
  98,
);
