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
      return e === "MSE_TRACK_REUSE" && !t;
    }
    function b(e, t) {
      return e.config.optimizeAutoDisposeTraversal
        ? o(
            "VideoPlayerNextgendashStateMachine",
          ).skipAutoDisposeInsideThisObject(t)
        : t;
    }
    var v = 0.2,
      S = 0.1,
      R = 30,
      L = 0.5,
      E = 6,
      k = 1,
      I = 3,
      T = 13,
      D = 6e4,
      x = 0.6,
      $ = 0.001,
      P = 5e3,
      N = 128,
      M =
        "VideoPlayerNextgendashHostAPISourceBufferAppendBufferQuotaExceededException",
      w =
        /VideoPlayerNextgendashHostAPISourceBufferAppendBufferQuotaExceededException(?:\/|$)/,
      A = 30,
      F = 3,
      O = 6e4,
      B = 1,
      W = 3;
    function q(e, t) {
      return (e == null ? void 0 : e.code) === W && t ? B : F;
    }
    function U(e, t, n) {
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
    function V(e, t) {
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
          ? U(
              t,
              e.host.clockPerfOriginMs + e.host.clock().perfMs,
              e.config.playheadPredictIntervalMs / 1e3,
            )
          : r;
    }
    function H(e, t) {
      if (t != null && e.poolTrackingID != null) {
        var n;
        return (n = t.getFetchState(e.poolTrackingID)) != null
          ? n
          : { state: "submitted_to_pool" };
      } else if (e.responseFetch != null) return e.responseFetch.state;
      return null;
    }
    function G(e, t, n) {
      return e.some(function (e) {
        if (!e.activeDemands.has(t) || e.evictedClock != null) return !1;
        var r = H(e, n);
        return (
          r == null ||
          (r.state !== "failed" &&
            r.state !== "aborted" &&
            r.state !== "__disposed__")
        );
      });
    }
    var z = {
      audioLang: null,
      audioRole: null,
      videoLang: null,
      videoRole: null,
    };
    function j(e) {
      return e.byteLength;
    }
    function K(e) {
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
    function Q(e) {
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
        ).perfMs >= O
      );
    }
    function X(e, t, n) {
      if (
        (n === void 0 && (n = P),
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
    function Y(e, t) {
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
    function J(e, t) {
      return function (n, r, o) {
        e({ requestID: t, type: "_fetch_transitioned" }, o);
      };
    }
    var Z = o("VideoPlayerNextgendashStateMachine").defineStateMachine(
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
              loopReasons: Be(i, 0, h, "0:initial"),
              loopScheduledToUnixMs: l.unixMs,
              loopTimerDelayMs: null,
              loopTimerID: null,
            }),
            mediaSourceState: Ae(i, s, a, null, r.dashManifestData),
            playerStateFromMain: r,
            playerWarningDedupMap: b(i, new Map()),
            recoveringFromMediaError: null,
            recoveringFromMediaErrorAttempt: 0,
            recoveringFromMediaErrorAttemptStartedClock: null,
            state: "playing",
            streams: [],
            volatilityState: i.config.enableDynamicBufferWatermarks
              ? b(i, {
                  abrSwitchTimestamps: [],
                  bandwidthSamples: [],
                  lastBandwidthDiagnosticsSignature: null,
                  pendingSpeculativeSidxKeys: new Map(),
                })
              : null,
          };
        return (t = qe(i, u, u.loopState.loopIteration, e)) != null ? t : u;
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
          if (n != null || l >= F) {
            var s = [];
            throw (
              n != null && s.push("already attempting a recovery"),
              l >= F && s.push("already reached max attempts"),
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
          var p = Ae(
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
              debugPlaybackLoopRecentChanges: Oe(
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
                return ke(i, t, l.type + ":" + l.requestID, 0, c);
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
                  (we(i, y),
                  i.config.mediaSinkType === "HYBRID" &&
                    c.playerStateFromMain.dashManifestData == null &&
                    y != null &&
                    (c.mediaSourceState.mediaSourceCleanup(),
                    (h = babelHelpers.extends({}, h, {
                      mediaSourceState: Ae(
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
                        var t = vn(i, S, e, y);
                        if (R || L) {
                          var n = {};
                          for (var r of t.playableRepresentations)
                            if (r.segmentsInfo.type === "SegmentTemplate") {
                              var a = r.segmentsInfo,
                                l = i.config.enableLive
                                  ? a.segmentTimelinePredictive
                                  : null,
                                s = sn(a, !0),
                                u = gn(i, t.type, r.representationId, s, !0),
                                c =
                                  t.sidxByRepresentationId[r.representationId],
                                d = un(c != null ? c : [], u);
                              if (L) {
                                n[r.representationId] = cn(
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
                              ((m = dn(m, E, i.config.liveLookbackBufferSec)),
                                (n[r.representationId] =
                                  l != null
                                    ? fn(
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
                      debugPlaybackLoopRecentChanges: Oe(
                        h.debugPlaybackLoopRecentChanges,
                        S,
                      ),
                    })),
                    R &&
                      i.config.isLivePlayback &&
                      i.config.liveSetSeekableRangeEnabled &&
                      i.config.mediaSinkType === "MSE")
                  ) {
                    var k = dt(h.streams);
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
                  T = q(I, i.config.fatalErrorOnMediaErrorRecoveryCapReached);
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
                      debugPlaybackLoopRecentChanges: Oe(
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
                return (f = ke(i, t, l.type + ":" + l.reason, 0, h)) != null
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
                        debugPlaybackLoopRecentChanges: Oe(
                          P.debugPlaybackLoopRecentChanges,
                          [N + "->expectSourceClose"],
                        ),
                        expectSourceCloseForMediaSourceIndex:
                          l.mediaSourceIndex,
                      }))
                    : (P = babelHelpers.extends({}, P, {
                        debugPlaybackLoopRecentChanges: Oe(
                          P.debugPlaybackLoopRecentChanges,
                          [N + "->mediaSourceIndexMismatch"],
                        ),
                      })),
                  ($ = ke(i, t, "" + l.type, 0, P)) != null ? $ : P
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
                    debugPlaybackLoopRecentChanges: Oe(
                      w.debugPlaybackLoopRecentChanges,
                      [A + "->mediaSourceIndexMismatch"],
                    ),
                  });
                else if (
                  !w.recoveringFromMediaError &&
                  w.recoveringFromMediaErrorAttempt < F
                )
                  w = m(
                    babelHelpers.extends({}, w, {
                      debugPlaybackLoopRecentChanges: Oe(
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
                  var O = [];
                  (w.recoveringFromMediaError &&
                    O.push("StillAttemptingPreviousRecovery"),
                    w.recoveringFromMediaErrorAttempt >= F &&
                      O.push("ReachedRetryCap"),
                    (w = babelHelpers.extends({}, w, {
                      debugPlaybackLoopRecentChanges: Oe(
                        w.debugPlaybackLoopRecentChanges,
                        [A + "->" + O.join(":")],
                      ),
                    })));
                }
                return (M = ke(i, t, "" + l.type, 0, w)) != null ? M : w;
              }
              case "_media_source_event": {
                var B,
                  W = c,
                  U =
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
                      debugPlaybackLoopRecentChanges: Oe(
                        W.debugPlaybackLoopRecentChanges,
                        [
                          U +
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
                    debugPlaybackLoopRecentChanges: Oe(
                      W.debugPlaybackLoopRecentChanges,
                      [U + "->first"],
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
                      debugPlaybackLoopRecentChanges: Oe(
                        W.debugPlaybackLoopRecentChanges,
                        [U + "->expectedDetachForUnmount"],
                      ),
                      expectSourceCloseForMediaSourceIndex: null,
                    });
                  else if (
                    !W.recoveringFromMediaError &&
                    W.recoveringFromMediaErrorAttempt < F
                  )
                    W = m(
                      babelHelpers.extends({}, W, {
                        debugPlaybackLoopRecentChanges: Oe(
                          W.debugPlaybackLoopRecentChanges,
                          [U + "->beginErrorRecoveryBeforeSeeingMediaError"],
                        ),
                      }),
                      o("nextgendasherr").nextgendasherr(
                        i,
                        "VideoPlayerNextgendashPlaybackLoopSourceCloseEventAsError",
                      ),
                    );
                  else {
                    var V = [];
                    if (
                      (W.recoveringFromMediaError &&
                        V.push("StillAttemptingPreviousRecovery"),
                      W.recoveringFromMediaErrorAttempt >= F &&
                        V.push("ReachedRetryCap"),
                      (W = babelHelpers.extends({}, W, {
                        debugPlaybackLoopRecentChanges: Oe(
                          W.debugPlaybackLoopRecentChanges,
                          [U + "->" + V.join(":")],
                        ),
                      })),
                      !W.recoveringFromMediaError &&
                        W.recoveringFromMediaErrorAttempt >= F &&
                        i.config.fatalErrorOnMediaErrorRecoveryCapReached)
                    )
                      return (
                        u({
                          exception: o("nextgendasherr").nextgendasherr(
                            i,
                            "VideoPlayerNextgendashPlaybackLoopSourceCloseRecoveryAttemptsExhausted",
                            "MediaSource closed after reaching recovery attempt cap (%s)",
                            F,
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
                      debugPlaybackLoopRecentChanges: Oe(
                        W.debugPlaybackLoopRecentChanges,
                        [U],
                      ),
                    },
                    l.mediaSourceEventType === "sourceopen"
                      ? { expectSourceCloseForMediaSourceIndex: null }
                      : null,
                  );
                return (B = ke(
                  i,
                  t,
                  l.type + ":" + l.mediaSourceEventType,
                  0,
                  W,
                )) != null
                  ? B
                  : W;
              }
              case "_native_sidx_result": {
                var H,
                  G,
                  z = l.parse,
                  j = z.representation,
                  Y = c.streams.find(function (e) {
                    return e.nativeSidxParse === z;
                  });
                if (
                  Y == null ||
                  z.mediaSourceIndex !== c.mediaSourceState.mediaSourceIndex
                )
                  return;
                var J = Y.nativeSidxParse,
                  Z = babelHelpers.objectWithoutPropertiesLoose(Y, e),
                  ee = Z,
                  te = [];
                if (l.result === "failed") {
                  var ne = c.playerStateFromMain.dashManifestData;
                  ne != null &&
                    (ee = Sn(i, a, te, ee, ne, j.representationId, l.error));
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
                    ce = gn(
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
                  debugPlaybackLoopRecentChanges: Oe(
                    c.debugPlaybackLoopRecentChanges,
                    te,
                  ),
                  fetchDemands:
                    (H = $t(
                      c.fetchDemands,
                      function (e) {
                        return e === Ye(j);
                      },
                      t.args.fetchPoolAPI,
                    )) != null
                      ? H
                      : c.fetchDemands,
                  streams: c.streams.map(function (e) {
                    return e === Y ? ee : e;
                  }),
                });
                return ee.streamFatalError != null && Y.streamFatalError == null
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
                  : (G = ke(i, t, l.type, 0, de)) != null
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
                      var r = Ht(
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
                          return Ut(i, e.sourceBufferState);
                        },
                      );
                      return r != null
                        ? ((_e = !0), babelHelpers.extends({}, e, r))
                        : e;
                    }),
                    he = babelHelpers.extends({}, c, {
                      debugPlaybackLoopRecentChanges: Oe(
                        c.debugPlaybackLoopRecentChanges,
                        fe,
                      ),
                      streams: ge,
                    });
                  if (_e) {
                    var ye;
                    return (ye = ke(
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
                      : ke(
                          i,
                          t,
                          l.type +
                            ":" +
                            l.sourceBufferEventType +
                            ":" +
                            pe.operationState +
                            ":!stateHasChanged",
                          Re,
                          c,
                        );
                } else
                  return i.config.disablePlaybackLoopSchedulingOnTimer
                    ? c
                    : ke(
                        i,
                        t,
                        l.type +
                          ":" +
                          l.sourceBufferEventType +
                          ":null_currSourceBufferOperation",
                        Re,
                        c,
                      );
              }
              case "_observe_and_act": {
                var Ce = Q({
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
                          return X(e.appendState.currSourceBufferOperation, s);
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
                    Le,
                    Ee,
                    Ie = ve.operationTiming,
                    Te = Ie.started;
                  if (Te == null) return qe(i, Ce, l.loopIteration, t);
                  var De = o(
                      "VideoPlayerNextgendashHostAPI",
                    ).diffVideoPlayerNextgendashClockstamp(s, Te).unixMs,
                    xe = o("nextgendasherr").nextgendasherr(
                      i,
                      "VideoPlayerNextgendashPlaybackLoopLiveSourceBufferOperationTimedOut",
                      "%s:%s SourceBuffer operation stuck in wait_updateend for %sms: %s",
                      be.type,
                      (Se = be.targetRepresentationId) != null
                        ? Se
                        : "no_target_representation",
                      De,
                      K(ve),
                    ),
                    $e =
                      "liveSourceBufferOperationTimedOut:" +
                      be.type +
                      ":" +
                      ((Le = be.targetRepresentationId) != null
                        ? Le
                        : "no_target_representation") +
                      ":" +
                      De +
                      "ms";
                  if (Ce.recoveringFromMediaErrorAttempt < F) {
                    var Pe,
                      Ne = babelHelpers.extends({}, Ce, {
                        debugPlaybackLoopRecentChanges: Oe(
                          Ce.debugPlaybackLoopRecentChanges,
                          [$e + "->beginErrorRecovery:" + K(ve)],
                        ),
                      }),
                      Me = m(Ne, xe);
                    return (Pe = ke(
                      i,
                      t,
                      l.type + ":liveSourceBufferOperationTimedOut",
                      0,
                      Me,
                    )) != null
                      ? Pe
                      : Me;
                  }
                  var Fe = babelHelpers.extends({}, Ce, {
                    debugPlaybackLoopRecentChanges: Oe(
                      Ce.debugPlaybackLoopRecentChanges,
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
                        xe,
                        "VideoPlayerNextgendashPlaybackLoopLiveSourceBufferOperationTimeoutRecoveryAttemptsExhausted",
                        "Reached media error recovery attempt cap (%s) with SourceBuffer operation still stuck in wait_updateend",
                        F,
                      ),
                      type: "__exception",
                    }),
                    Fe
                  );
                }
                return qe(i, Ce, l.loopIteration, t);
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
    function ee(e, t, n, r, a) {
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
    function te(e, t) {
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
    function ne(e) {
      for (var t of e.dataKeyToResponseByteRange.keys())
        if (!t.startsWith("init-") && !t.startsWith("sidx-")) return !1;
      return !0;
    }
    function re(e, t, n, r, o, a) {
      for (var i = 0; i < t.length; ++i) {
        var l = t[i],
          s = H(l, a);
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
              var c = ne(l);
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
    var oe = 5 * 1e3;
    function ae(e, t) {
      if (e.config.isLivePlayback) return !1;
      var n = o("videoUrlUtils").parseCdnUrlParams(t).expirationDate;
      return n != null && n.getTime() - oe <= e.host.clock().unixMs;
    }
    function ie(e, t) {
      return (
        !e.config.enableLive ||
        o("VideoPlayerNextgendashURLUtils").isAbsoluteUrl(t)
      );
    }
    function le(e, t) {
      return (
        ae(e, t.baseURL) ||
        (t.type === "BaseURLInitURL" && ie(e, t.initURL) && ae(e, t.initURL))
      );
    }
    function se(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (r[0] <= t && t <= r[1]) return (r[1] - t) * 1e3;
      }
      return 0;
    }
    function ue(e, t) {
      return e > 0 ? e : t;
    }
    function ce(e, t) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        if (r[0] <= t && t <= r[1]) return Math.max(t, r[1]);
      }
      return t;
    }
    function de(e, t, n) {
      return e !== void 0 && t < n && on(e, [t, n], v);
    }
    function me(e, t, n) {
      return e !== void 0 && t >= n && on(e, [n, t], v);
    }
    var pe = 2;
    function _e(e, t, n, r) {
      if ((r === void 0 && (r = !1), t == null || n == null)) return !0;
      var o = e.segmentsInfo;
      if (o.type !== "SegmentTemplate") return !0;
      var a = ce(t, n),
        i = sn(o, !0),
        l = i.find(function (e) {
          return e.mediaTimeRange[1] > a - $;
        }),
        s = o.segmentTimelinePredictive,
        u = i[i.length - 1];
      if (l == null && r && s != null && s.endNumber != null && u != null) {
        var c =
          s.segmentAverageDuration != null
            ? s.segmentAverageDuration / o.timescale
            : u.mediaTimeRange[1] - u.mediaTimeRange[0];
        return u.mediaTimeRange[1] + pe * c >= a - v;
      }
      return l != null && l.mediaTimeRange[0] <= a + v;
    }
    function fe(e, t) {
      return t ? (e < 2e3 ? 3 : e < 5e3 ? 2 : 1) : 1;
    }
    function ge(e, t, n) {
      n === void 0 && (n = 3e4);
      var r = e.filter(function (e) {
        return t - e < n;
      });
      return Math.min(r.length / 3, 1);
    }
    function he(e, t, n) {
      n === void 0 && (n = D);
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
    function ye(e, t, n, r) {
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
      var i = r - D;
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
    function Ce(e, t, n) {
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
    function be(e, t, n, r, o) {
      if (t.length <= 1) return null;
      var a = Ce(n, o),
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
    function ve(e, t, n, r, o, a, i, l) {
      for (var s = 2, u = 1, c = 1, d = 0; d < t.length; ++d) {
        var m = t[d];
        if (!(m.responseFetch != null || m.poolTrackingID != null)) {
          if (e.config.enableCdnUrlRefresh && le(e, m.requestInfoArgs)) {
            m.isAwaitingUrlRefresh ||
              (t[d] = babelHelpers.extends({}, m, {
                isAwaitingUrlRefresh: !0,
              }));
            continue;
          }
          var p = ne(m),
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
              g = fe(v, S);
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
    function Se(e, t, n, r, a, i, l) {
      var s = new Map(),
        u = new Map();
      re(e, n, s, u, r, t.args.fetchPoolAPI);
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
          f = Y(e, n.requestInfoArgs),
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
              ? J(_, n.requestDraft.requestID)
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
                ? J(_, n.requestDraft.requestID)
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
      if ((ve(e, n, s, u, d, r, i, l), c != null && c.size > 0)) {
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
    var Re = 1e3,
      Le = 20;
    function Ee(e, t, n) {
      return Math.max(0, e, t ? n : 0);
    }
    function ke(e, t, a, i, l, s) {
      s === void 0 && (s = 0);
      var u = t.args.sendPlayerWarningToMain,
        c = t.sendToSelf,
        d = e.host.clock().unixMs,
        m = d + i,
        p = l.loopState;
      if (p.loopScheduledToUnixMs == null || m < p.loopScheduledToUnixMs) {
        var _ = p.loopTimerID;
        _ != null && (e.host.timers.clearTimeout(_), (_ = null));
        var f = Ee(
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
                loopReasons: Be(e, p.loopIteration, p.loopReasons, C),
                loopScheduledToUnixMs: d + f,
                loopTimerDelayMs: f,
                loopTimerID: f > 0 ? e.host.timers.setTimeout(b, f) : null,
              }),
            ),
          });
        return f > 0
          ? v
          : s >= Le
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
            : qe(e, v, h, t, s);
      } else return;
    }
    var Ie = " ** ",
      Te = /^(.*)[ ][*][*][ ](\d+)$/;
    function De(e) {
      var t = [],
        n = null,
        r = 0;
      for (var o of e) {
        var a = o.includes(Ie) ? Te.exec(o) : null,
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
        (xe(t, n, r), (n = s), (r = i));
      }
      return (xe(t, n, r), t);
    }
    function xe(e, t, n) {
      t != null && e.push("" + t + (n === 1 ? "" : " ** " + n));
    }
    function $e(e, t, n, r) {
      return n ? e : Math.max(0, t - r);
    }
    function Pe(e, t, n, r) {
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
                          tt(e.segment, _)
                        );
                      },
                    )),
                g = $e(p[0], p[1], f, e.config.endOfStreamBufferToleranceSec);
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
    var Ne = 2e3;
    function Me(e, t, n, r, a) {
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
    function we(e, t) {
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
    function Ae(e, t, n, r, a) {
      we(e, a);
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
    var Fe = 60;
    function Oe(e, t) {
      return t.length === 0
        ? e
        : o(
            "VideoPlayerNextgendashStateMachine",
          ).skipAutoDisposeInsideThisObject(
            [].concat(e.slice(0, -1), De([].concat(e.slice(-1), t))).slice(-Fe),
          );
    }
    function Be(e, t, n, r) {
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
    function We(e, t) {
      return new Set(
        t
          .filter(function (e) {
            return e.isAwaitingUrlRefresh;
          })
          .map(function (t) {
            var n = [t.requestInfoArgs.baseURL];
            return (
              t.requestInfoArgs.type === "BaseURLInitURL" &&
                ie(e, t.requestInfoArgs.initURL) &&
                n.push(t.requestInfoArgs.initURL),
              n
            );
          })
          .flat(),
      );
    }
    function qe(e, t, n, r, a) {
      var i, l;
      a === void 0 && (a = 0);
      var s = r.eventClock,
        u = r.sendToSelf,
        c = r.args.requestUrlRefresh;
      if (!(n < t.loopState.loopIteration)) {
        var d = t.loopState.loopTimerID;
        d != null && (e.host.timers.clearTimeout(d), (d = null));
        var m = t.playerStateFromMain.dashManifestData;
        we(e, m);
        var p = 10,
          _ = 10,
          f = [],
          g = [],
          h = 0,
          y = s,
          C = y,
          v = e.config.enableCdnUrlRefresh ? We(e, t.fetchDemands) : null,
          S = t.fetchDemands,
          I = t.streams,
          T = I,
          $ = !1,
          P = !1,
          N = function () {
            (++h, (T = I), ($ = !1), (P = !1), (g.length = 0));
            try {
              if (m) {
                var a = V(e, t.playerStateFromMain.mediaElementSnapshot),
                  i = Lt({
                    enableLive: e.config.enableLive,
                    fellBehindWindowSec: R,
                    followEdgeActive: e.config.liveFollowEdgeActive,
                    isLivePlayback: e.config.isLivePlayback,
                    pairedRefetchEnabled:
                      e.config.liveFellBehindPairedRefetchEnabled &&
                      !St(
                        e.config.livePausedEdgeRefetchSuspendEnabled,
                        t.playerStateFromMain.mediaElementSnapshot,
                      ),
                    playheadMediaTimeSec: a,
                    proactiveDriftSec:
                      e.config.liveFellBehindEdgeReseekDriftSec,
                    refetchBehindEdgeSec: E,
                    refetchEnabled:
                      e.config.liveFellBehindWindowRefetchEnabled &&
                      !St(
                        e.config.livePausedEdgeRefetchSuspendEnabled,
                        t.playerStateFromMain.mediaElementSnapshot,
                      ),
                    starvationBufferAheadSec: L,
                    streams: T.filter(function (e) {
                      return e.type === "video" || e.type === "audio";
                    }).map(function (e) {
                      var t =
                        e.targetRepresentationId != null
                          ? e.sidxByRepresentationId[e.targetRepresentationId]
                          : null;
                      return {
                        bufferedAheadSec: bt(
                          e.appendState.sourceBufferRanges,
                          a,
                        ),
                        confirmedLiveEdgeMediaTimeSec: ct(t),
                      };
                    }),
                  }),
                  l = ["video", "audio"]
                    .map(function (a, l) {
                      var s = T.find(function (e) {
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
                              appliedPresentationTimeOffsetSec: He(
                                e,
                                m.manifestRepresentations.video,
                              ),
                              blockedRepresentations: b(e, {}),
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
                              targetVariantRepresentationIds: b(e, []),
                              type: "video",
                              videoABRState: null,
                              videoABRStateClock: null,
                              videoABRSwitchClock: null,
                            }),
                            (c = vn(e, g, c, m)))
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
                              appliedPresentationTimeOffsetSec: He(
                                e,
                                m.manifestRepresentations.audio,
                              ),
                              blockedRepresentations: b(e, {}),
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
                              targetVariantRepresentationIds: b(e, []),
                              type: "audio",
                            }),
                            (c = vn(e, g, c, m))));
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
                              Bt(m.manifestRepresentations[a]),
                          )),
                        c != null)
                      ) {
                        var p = c,
                          _ = g.length;
                        try {
                          var f = ze(
                            e,
                            t,
                            m,
                            r,
                            c,
                            S,
                            n * 1e4 + l * 100 + h - 1,
                            i,
                            g,
                          );
                          ((S = f.fetchDemands), (c = f.stream));
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
                          var C;
                          ((P = !0),
                            e.logging.log(e, {
                              error: c.streamFatalError,
                              format: "%s:%s - new streamFatalError",
                              params: [
                                c.type,
                                (C = c.targetRepresentationId) != null
                                  ? C
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
                if (T.length > 0)
                  throw o("nextgendasherr").nextgendasherr(
                    e,
                    "VideoPlayerNextgendashPlaybackLoopManifestDataDisappeared",
                  );
                return 1;
              }
            } finally {
              ((C = e.host.clock()), I !== T && f.push.apply(f, g));
            }
          };
        e: do if (N()) break e;
        while (
          $ &&
          !P &&
          h < p &&
          o(
            "VideoPlayerNextgendashHostAPI",
          ).diffVideoPlayerNextgendashClockstamp(C, y).perfMs < _
        );
        var M = [];
        if (!P) {
          var w = te(
            S,
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
            B = V(e, O);
          for (var W of I) {
            var q = se(W.appendState.sourceBufferRanges, B);
            (A.set(W.type, q),
              F.set(W.type, W.appendState.appendChain != null));
          }
          if (
            ((S = Se(
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
            var U = Array.from(We(e, S)).filter(function (e) {
              return v != null && !v.has(e);
            });
            U.length > 0 &&
              c(
                U.map(function (e) {
                  return { url: e };
                }),
              );
          }
        }
        var H = t.volatilityState,
          G = t.volatilityState;
        if (e.config.enableDynamicBufferWatermarks && G != null) {
          var z = s.unixMs,
            j = z - D,
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
          var Z = e.host.networkDiagnosticsReadBandwidth(
              e.config.enableBandwidthDiagnosticsFallback,
              e.config.bandwidthDiagnosticsFallbackDefaultEstimate,
            ),
            ee = ye(Q, G.lastBandwidthDiagnosticsSignature, Z, z),
            ne = ee.lastBandwidthDiagnosticsSignature;
          ((ee.bandwidthSamples !== Q ||
            ne !== G.lastBandwidthDiagnosticsSignature) &&
            ((Q = ee.bandwidthSamples), (X = !0)),
            K.some(function (e) {
              return e <= j;
            }) &&
              ((K = K.filter(function (e) {
                return e > j;
              })),
              (X = !0)),
            X &&
              (H = b(e, {
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
              ae = function () {
                var t = le.type;
                if (t !== "video" && t !== "audio") return 0;
                var r = le.playableRepresentations;
                if (r.length <= 1) return 0;
                var o = le.targetRepresentationId;
                if (o == null) return 0;
                var a = be(
                  o,
                  r,
                  H.bandwidthSamples,
                  re.bandwidthEstimate,
                  s.unixMs,
                );
                if (a != null && a.confidence > x) {
                  var i = a.representation;
                  if (i.segmentsInfo.type === "SegmentBase") {
                    var l = Ye(i),
                      u = le.sidxByRepresentationId[i.representationId] != null,
                      c = S.some(function (e) {
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
                        var _ = S.some(function (e) {
                          return (
                            e.activeDemands.has(p) &&
                            e.activeDemands.size === 1 &&
                            e.responseFetch == null
                          );
                        });
                        if (_) {
                          var f = $t(S, function (e) {
                            return e === p;
                          });
                          f != null && (S = f);
                        }
                      }
                      var g = n * 1e4 + 1e6;
                      ((S = [].concat(S, [Je(e, g, i)])),
                        oe == null &&
                          (oe = new Map(H.pendingSpeculativeSidxKeys)),
                        oe.set(t, l));
                    }
                  }
                }
              },
              ie;
            for (var le of I) ie = ae();
            oe != null &&
              (H = b(
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
          for (var _e of I)
            if (!(_e.type !== "video" && _e.type !== "audio")) {
              de = !0;
              var fe =
                  _e.targetRepresentationId != null
                    ? _e.sidxByRepresentationId[_e.targetRepresentationId]
                    : null,
                ge = mt({
                  playheadMediaTimeSec: ue,
                  sidx: fe,
                  toleranceSec: k,
                });
              if (ge == null) {
                me = !1;
                break;
              }
              pe = pe == null ? ge : Math.min(pe, ge);
            }
          ce = de && me ? pe : null;
        }
        var he = pt({
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
          Ce = he.confirmed,
          ve = he.next,
          Le = babelHelpers.extends({}, t, {
            debugPlaybackLoopRecentChanges: Oe(
              t.debugPlaybackLoopRecentChanges,
              f.concat(M),
            ),
            fetchDemands: S,
            liveEndedStallState: ve,
            loopState: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends({}, t.loopState, {
                loopIteration: n,
                loopReasons: Be(e, n, t.loopState.loopReasons),
                loopScheduledToUnixMs: null,
                loopTimerDelayMs: null,
                loopTimerID: d,
              }),
            ),
            streams: I,
            volatilityState: H,
          }),
          Ee = [],
          Ie = !1,
          Te = !1;
        if (
          (Le.streams.forEach(function (e) {
            (e.type !== "video" && e.type !== "audio") ||
              ((e.appendState.currSourceBufferOperation != null ||
                e.appendState.pendingAppendOperations.length !== 0 ||
                e.appendState.pendingRemoveOperations.length !== 0) &&
                (Ie = !0),
              e.streamFatalError != null && (Te = !0));
          }),
          Ie || Te || Le.recoveringFromMediaError != null)
        )
          Ee.push(
            "endOfStream skipped: " +
              [
                Ie ? "current or pending operation" : null,
                Te ? "pending stream fatal error(s)" : null,
                Le.recoveringFromMediaError != null
                  ? "recovering from MediaError " +
                    Le.recoveringFromMediaError.name
                  : null,
              ]
                .filter(Boolean)
                .join(", "),
          );
        else
          try {
            Pe(e, Le, Ee, Ce);
          } catch (t) {
            return (
              u({
                exception: o("nextgendasherr").nextgendasherrFromCause(
                  e,
                  t,
                  "VideoPlayerNextgendashPlaybackLoopCheckAndCallEndOfStreamError",
                  "%s",
                  "debugPlaybackLoopRecentChanges:\n " +
                    Le.debugPlaybackLoopRecentChanges.join("\n "),
                  "endOfStreamDebugReasons:\n " + Ee.join("\n "),
                ),
                type: "__exception",
              }),
              Le
            );
          }
        Ee.length === 0 && Ee.push("endOfStream: checked, unknown result");
        var De = babelHelpers.extends({}, Le, {
          debugPlaybackLoopRecentChanges: Oe(
            Le.debugPlaybackLoopRecentChanges,
            Ee,
          ),
        });
        if (P)
          return (
            u({
              exception: o("nextgendasherr").nextgendasherrFromMultipleCauses(
                e,
                De.streams
                  .map(function (e) {
                    return e.streamFatalError != null
                      ? [e.type, e.streamFatalError]
                      : null;
                  })
                  .filter(Boolean),
                "VideoPlayerNextgendashPlaybackLoopStreamFatalErrors",
                "%s",
                "debugPlaybackLoopRecentChanges:\n " +
                  De.debugPlaybackLoopRecentChanges
                    .concat(
                      De.recoveringFromMediaErrorAttempt > 0
                        ? [
                            "recoveringFromMediaErrorAttempt:" +
                              De.recoveringFromMediaErrorAttempt,
                          ]
                        : [],
                    )
                    .join("\n "),
              ),
              type: "__exception",
            }),
            De
          );
        if (De.streams !== t.streams) {
          var xe;
          return (xe = ke(
            e,
            r,
            "streamsChanged:(" + f.join(",") + ")",
            0,
            De,
            a + 1,
          )) != null
            ? xe
            : De;
        } else {
          var $e;
          return e.config.disablePlaybackLoopSchedulingOnTimer
            ? De
            : ($e = ke(e, r, "!streamsChanged", 10 * Re, De, a + 1)) != null
              ? $e
              : De;
        }
      }
    }
    function Ue(e, t, n) {
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
    function Ve(e, t, n, r, a, i, l, s, u) {
      var c,
        d,
        m = t,
        p = n,
        _ = r,
        f = a.representationId,
        g = Qe(a);
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
            (h = $t(
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
      var y = Dt(p, g, s, !0),
        C = y == null ? void 0 : y.fetchState,
        b = y == null || (d = y.responseInfo) == null ? void 0 : d.buffer;
      if (b == null && C != null && C.state === "completed")
        return (
          (m = Sn(
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
          ot({
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
                (E = $t(
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
                liveOutageFailedRepresentationIds: it(
                  m.liveOutageFailedRepresentationIds,
                  f,
                ),
                liveSegmentFetchFailingSinceUnixMs: L,
              }),
            }
          );
        }
        return (
          (m = Sn(e, l, u, m, i, f, S)),
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
          Dt(p, Ye(a), s, !1) == null;
        k
          ? (p = [].concat(p, [Ze(e, ++_, a)]))
          : (p = [].concat(p, [Xe(e, ++_, a)]));
      }
      return {
        abortFurtherProcessing: !1,
        fetchDemandOrderNext: _,
        fetchDemands: p,
        initBuffer: b,
        stream: m,
      };
    }
    function He(e, t) {
      if (
        !e.config.applyManifestPresentationTimeOffset ||
        e.config.mediaSinkType !== "MSE"
      )
        return null;
      var n = t.map(function (e) {
          var t,
            n = e.mimeCodecsParsed,
            r = e.segmentsInfo;
          return n.containerType === "mp4" && r.type === "SegmentBase"
            ? Math.floor(
                ((t = r.presentationTimeOffsetSec) != null ? t : 0) * 1e6,
              ) / 1e6
            : 0;
        }),
        r = n[0];
      return r != null &&
        r > 0 &&
        n.every(function (e) {
          return e === r;
        })
        ? r
        : null;
    }
    function Ge(e, t, n, r, a, i) {
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
              d = u[1],
              m = l,
              p = m.appliedPresentationTimeOffsetSec;
            if (p != null)
              try {
                e.host.sourceBufferSetTimestampOffset(e, c, {
                  representationId: r.representationId,
                  timestampOffsetSec: -p,
                  type: l.type,
                });
              } catch (e) {
                throw (d(), e);
              }
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
    function ze(e, t, n, a, i, l, s, u, c) {
      var d,
        m,
        p,
        _,
        f,
        g,
        h,
        b,
        k,
        I,
        D,
        x,
        $,
        P,
        N,
        M = a.args,
        w = M.prefetchResult,
        F = M.sendPlayerWarningToMain,
        O = a.eventClock,
        B = a.sendToSelf,
        W = l,
        q = s * 1e4,
        U = Me(e, t, O, i, c),
        K = U.abortFurtherStreamProcessing,
        Q = U.stream;
      if (Q.streamFatalError != null || K)
        return { fetchDemands: W, stream: Q };
      Q = Ue(Q, t.mediaSourceState.mediaSourceIndex, c);
      var X = Q.appendState.sourceBufferRanges,
        Y = null,
        J = n.manifestRepresentations[Q.type].find(function (e) {
          return e.representationId === Q.targetRepresentationId;
        }),
        Z = Q.targetRepresentationReason,
        ee = !1;
      if (J != null)
        switch (Q.type) {
          case "video": {
            var te,
              ne = t.playerStateFromMain.selectedMediaVariant;
            ee = Zt(
              ne,
              ne != null ? ne : z,
              (te = Q.prevSelectedMediaVariant) != null ? te : z,
              t.playerStateFromMain.selectedVideoQualityDisplayLabel,
              Q.prevSelectedVideoQualityDisplayLabel,
            );
            break;
          }
          case "audio": {
            var re,
              oe = t.playerStateFromMain.selectedMediaVariant;
            ee = en(
              oe,
              oe != null ? oe : z,
              (re = Q.prevSelectedMediaVariant) != null ? re : z,
            );
            break;
          }
        }
      if (J == null || ee) {
        var ae = nn(
          e,
          F,
          t.playerWarningDedupMap,
          O,
          t.playerStateFromMain,
          n,
          w,
          X,
          Q,
          c,
        );
        ((Y = ae.prevTargetRepresentation),
          (Q = ae.stream),
          (J = ae.targetRepresentation),
          (Z = ae.targetRepresentationReason));
      }
      var ie = Y,
        le = J,
        se = Z,
        ce = le.representationId;
      Q = Ge(e, Q, t.mediaSourceState, le, B, c);
      var de = Q.sourceBufferState,
        me = Ve(e, Q, W, q, le, n, F, a.args.fetchPoolAPI, c);
      if (me != null && me.abortFurtherProcessing)
        return { fetchDemands: me.fetchDemands, stream: me.stream };
      me != null &&
        ((Q = me.stream), (W = me.fetchDemands), (q = me.fetchDemandOrderNext));
      var pe = me == null ? void 0 : me.initBuffer,
        _e = Q.sidxByRepresentationId[ce],
        fe = le.segmentsInfo,
        ye = Ye(le),
        Ce = Dt(W, ye, a.args.fetchPoolAPI, !0),
        be = Ce == null ? void 0 : Ce.fetchState,
        ve = Ce == null ? void 0 : Ce.responseInfo,
        Se = ve == null ? void 0 : ve.buffer;
      if (_e == null && (ve == null ? void 0 : ve.kind) === "native") {
        var Re, Le;
        if (fe.type !== "SegmentBase")
          throw o("nextgendasherr").nextgendasherr(
            e,
            "VideoPlayerNextgendashPlaybackLoopNativeSidxUnsupported",
          );
        if (
          ((Re = Q.nativeSidxParse) == null ? void 0 : Re.representation) !==
            le ||
          ((Le = Q.nativeSidxParse) == null ? void 0 : Le.mediaSourceIndex) !==
            t.mediaSourceState.mediaSourceIndex
        ) {
          var Ee = {
            mediaSourceIndex: t.mediaSourceState.mediaSourceIndex,
            representation: le,
          };
          Q = babelHelpers.extends({}, Q, { nativeSidxParse: Ee });
          var ke = ve.buffer;
          r("promiseDone")(
            ke.body.parseIndex({
              byteLength: ke.byteLength,
              byteOffset: ke.byteOffset,
              fileOffset: fe.indexByteRange.byteOffset,
            }),
            function (e) {
              return B({
                items: e,
                parse: Ee,
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
                parse: Ee,
                result: "failed",
                type: "_native_sidx_result",
              });
            },
          );
        }
      } else if (_e == null && Se instanceof Uint8Array) {
        var Ie = le.mimeCodecsParsed.containerType,
          Te = null;
        try {
          switch (Ie) {
            case "mp4": {
              var De =
                fe.type === "SegmentBase" ? fe.indexByteRange.byteOffset : null;
              if (De == null)
                throw o("nextgendasherr").nextgendasherr(
                  e,
                  "VideoPlayerNextgendashPlaybackLoopSidxParseMp4MissingSidxByteOffset",
                );
              Te = o("VideoPlayerNextgendashMp4SidxParser").parseMp4Sidx(
                e,
                Se,
                De,
                Q.appliedPresentationTimeOffsetSec,
              );
              break;
            }
            case "webm": {
              pe instanceof Uint8Array
                ? (Te = o("VideoPlayerNextgendashWebmSidxParser").parseWebmSidx(
                    e,
                    Se,
                    pe,
                  ))
                : (Te = null);
              break;
            }
            default:
              throw o("nextgendasherr").nextgendasherr(
                e,
                "VideoPlayerNextgendashPlaybackLoopSidxParseUnexpectedContainerType",
                "Unexpected container type for sidx parsing: %s",
                Ie,
              );
          }
        } catch (t) {
          return (
            (Q = Sn(
              e,
              F,
              c,
              Q,
              n,
              ce,
              o("nextgendasherr").nextgendasherrFromCause(
                e,
                t,
                "VideoPlayerNextgendashPlaybackLoopSidxParseFailed",
                "%s:%s - Failed to parse sidx; mimeCodecs=%s",
                Q.type,
                ce,
                le.mimeCodecsParsed.mimeCodecs,
              ),
            )),
            { fetchDemands: W, stream: Q }
          );
        }
        var xe = Te;
        if (xe != null) {
          var $e, Pe;
          ((_e = gn(
            e,
            Q.type,
            ce,
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
              Q.type + ":" + ce + ":sidx/buffer:" + xe.length + ":" + _e.length,
            ),
            (Q = babelHelpers.extends({}, Q, {
              sidxByRepresentationId: o(
                "VideoPlayerNextgendashStateMachine",
              ).skipAutoDisposeInsideThisObject(
                babelHelpers.extends(
                  {},
                  Q.sidxByRepresentationId,
                  (($e = {}), ($e[ce] = _e), $e),
                ),
              ),
            })),
            (W =
              (Pe = $t(
                W,
                function (e) {
                  return e === ye;
                },
                a.args.fetchPoolAPI,
              )) != null
                ? Pe
                : W));
        }
      } else {
        if (Se == null && be != null && be.state === "completed")
          return (
            (Q = Sn(
              e,
              F,
              c,
              Q,
              n,
              ce,
              o("nextgendasherr").nextgendasherr(
                e,
                "VideoPlayerNextgendashPlaybackLoopSidxFetchBufferExtractionFailed",
                "%s:%s - Failed to extract sidx buffer from the completed response; mimeCodecs=%s",
                Q.type,
                ce,
                le.mimeCodecsParsed.mimeCodecs,
              ),
            )),
            { fetchDemands: W, stream: Q }
          );
        if (_e == null && be != null && be.state === "failed")
          return (
            (Q = Sn(
              e,
              F,
              c,
              Q,
              n,
              ce,
              o("nextgendasherr").nextgendasherrFromCause(
                e,
                be.error,
                "VideoPlayerNextgendashPlaybackLoopSidxFetchFailed",
                "%s:%s - Failed to fetch sidx; mimeCodecs=%s",
                Q.type,
                ce,
                le.mimeCodecsParsed.mimeCodecs,
              ),
            )),
            { fetchDemands: W, stream: Q }
          );
        if (_e == null && fe.type === "SegmentTemplate") {
          var Ne,
            we = n.metadata.manifestType === "dynamic",
            Ae = sn(fe, we),
            Fe = e.config.enableLive ? fe.segmentTimelinePredictive : null;
          _e = gn(e, Q.type, ce, Ae, we || e.config.isLivePlayback);
          var Oe =
            Fe != null
              ? fn(
                  Fe,
                  _e,
                  fe.timescale,
                  e.config.isLivePlayback &&
                    e.config.livePredictiveSegmentFetchKeyByNumber,
                )
              : _e;
          (c.push(
            Q.type +
              ":" +
              ce +
              ":sidx/template" +
              (Fe != null ? "/predictive" : "") +
              ":" +
              Ae.length +
              ":" +
              Oe.length,
          ),
            (Q = babelHelpers.extends({}, Q, {
              sidxByRepresentationId: o(
                "VideoPlayerNextgendashStateMachine",
              ).skipAutoDisposeInsideThisObject(
                babelHelpers.extends(
                  {},
                  Q.sidxByRepresentationId,
                  ((Ne = {}), (Ne[ce] = Oe), Ne),
                ),
              ),
            })));
        } else if (_e == null && Ce == null) {
          var Be;
          W = [].concat(
            (Be = $t(
              W,
              function (e) {
                return e !== ye && e.startsWith("sidx-" + le.type + "-");
              },
              a.args.fetchPoolAPI,
            )) != null
              ? Be
              : W,
            [Je(e, ++q, le)],
          );
        }
      }
      var We = _e,
        qe = t.playerStateFromMain.mediaElementSnapshot,
        He = V(e, qe);
      if (
        ((d = Q.appendState.appendChain) == null ? void 0 : d.mediaTail) != null
      ) {
        var ze = yn(
          e,
          Q.type,
          ce,
          Q.appendState.appendChain,
          He,
          X,
          t.mediaSourceState.mediaSource,
          c,
        );
        ze !== Q.appendState.appendChain &&
          (Q = babelHelpers.extends({}, Q, {
            appendState: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends({}, Q.appendState, { appendChain: ze }),
            ),
          }));
      }
      var et =
        ie != null &&
        (((m = le.role) != null ? m : null) !==
          ((p = ie.role) != null ? p : null) ||
          ((_ = le.lang) != null ? _ : null) !==
            ((f = ie.lang) != null ? f : null));
      if (
        ie != null &&
        ce !== ie.representationId &&
        (se === "selected_switch" || et)
      ) {
        var nt = 5,
          rt = et ? 0 : He + nt,
          at = [rt, Number.POSITIVE_INFINITY],
          dt = {
            operationState: "wait_start",
            operationTiming: { created: e.host.clock() },
            operationType: "remove_operation",
            removeRange: at,
          };
        (c.push(
          Q.type +
            ":" +
            ce +
            ":pendingRemoveOperations:newRemoveOperation:" +
            o("VideoPlayerNextgendashMediaUtils").debugStringifyTimeRange(
              dt.removeRange,
            ),
        ),
          (Q = babelHelpers.extends({}, Q, {
            appendState: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends({}, Q.appendState, {
                pendingAppendOperations: [],
                pendingRemoveOperations: [].concat(
                  Q.appendState.pendingRemoveOperations,
                  [dt],
                ),
              }),
            ),
          })));
      }
      var mt = e.config.mediaSinkType === "HYBRID" && !e.config.isLivePlayback,
        pt = mt
          ? e.config.nativeBackBufferRetentionSec
          : e.config.isLivePlayback
            ? e.config.liveBackBufferRetentionSec
            : 0;
      if (
        pt > 0 &&
        Q.sourceBufferState != null &&
        Q.appendState.currSourceBufferOperation == null &&
        Q.appendState.pendingAppendOperations.length === 0 &&
        Q.appendState.pendingRemoveOperations.length === 0
      ) {
        var _t = vt(
          X,
          He,
          pt,
          mt ? e.config.nativeBackBufferMinRemovableSec : A,
        );
        if (
          _t != null &&
          e.host.mediaSourceCollectSnapshot(e, t.mediaSourceState.mediaSource)
            .readyState === "open"
        ) {
          var ft = {
            operationState: "wait_start",
            operationTiming: { created: e.host.clock() },
            operationType: "remove_operation",
            removeRange: [0, _t],
          };
          (c.push(
            Q.type +
              ":" +
              ce +
              ":pendingRemoveOperations:newLiveBackBufferRemoveOperation:" +
              o("VideoPlayerNextgendashMediaUtils").debugStringifyTimeRange(
                ft.removeRange,
              ),
          ),
            (Q = babelHelpers.extends({}, Q, {
              appendState: o(
                "VideoPlayerNextgendashStateMachine",
              ).skipAutoDisposeInsideThisObject(
                babelHelpers.extends({}, Q.appendState, {
                  pendingRemoveOperations: [].concat(
                    Q.appendState.pendingRemoveOperations,
                    [ft],
                  ),
                }),
              ),
            })));
        }
      }
      var gt =
        (g =
          (h =
            (b =
              Q.appendState.pendingAppendOperations[
                Q.appendState.pendingAppendOperations.length - 1
              ]) == null
              ? void 0
              : b.appendInfo.representationId) != null
            ? h
            : Q.appendState.currSourceBufferOperation != null &&
                Q.appendState.currSourceBufferOperation.operationType ===
                  "append_operation"
              ? Q.appendState.currSourceBufferOperation.appendInfo
                  .representationId
              : null) != null
          ? g
          : Q.appendState.lastAppendOperation != null &&
              Q.appendState.lastAppendOperation.operationState === "succeeded"
            ? Q.appendState.lastAppendOperation.appendInfo.representationId
            : null;
      if (de != null && ce !== gt && pe != null) {
        var Ct = {
          appendInfo: {
            appendInfoType: "init",
            mimeCodecsParsed: le.mimeCodecsParsed,
            representationId: ce,
          },
          buffer: pe,
          operationState: "wait_start",
          operationTiming: { created: e.host.clock() },
          operationType: "append_operation",
        };
        (c.push(
          Q.type +
            ":" +
            ce +
            ":pendingAppendOperations:initAppendOperation:" +
            wt(Ct.appendInfo),
        ),
          (Q = babelHelpers.extends({}, Q, {
            appendState: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends({}, Q.appendState, {
                pendingAppendOperations: [Ct],
              }),
            ),
          })));
      }
      var Lt = 16.924449682236,
        Et = e.config.isLivePlayback ? 20 : 22,
        Pt =
          t.playerStateFromMain.mediaElementSnapshot == null
            ? "initial"
            : t.playerStateFromMain.mediaElementSnapshot.paused
              ? "paused"
              : "playing",
        Mt = {
          initial: mt
            ? Math.max(0, e.config.bufferAheadTargetNoMediaElementSec)
            : ue(e.config.bufferAheadTargetNoMediaElementSec, Lt),
          paused: e.config.bufferAheadTargetPausedSec,
          playing: (k = e.config.bufferAheadTargetPlayingSec) != null ? k : Et,
        }[Pt],
        At =
          e.config.enableQuotaExceededRecovery && !mt
            ? Math.max(
                e.config.quotaExceededMinBufferTargetSec,
                Mt * Q.quotaExceededBufferTargetRatio,
              )
            : Mt,
        Ft = At,
        Ot = t.volatilityState;
      if (
        e.config.enableDynamicBufferWatermarks &&
        !mt &&
        Pt === "playing" &&
        Ot != null
      ) {
        var Bt = O.unixMs,
          Wt = ge(Ot.abrSwitchTimestamps, Bt),
          qt = he(Ot.bandwidthSamples, Bt),
          Ut = Math.max(Wt, qt),
          Vt = Ut * T,
          Ht = e.config.enableQuotaExceededRecovery
            ? Vt * Q.quotaExceededBufferTargetRatio
            : Vt;
        Ft = At + Ht;
      }
      var Gt =
          (I = Q.appendState.appendChain) == null
            ? void 0
            : I.playheadMinimumTimeSec,
        zt = ct(We),
        jt = St(
          e.config.livePausedEdgeRefetchSuspendEnabled,
          t.playerStateFromMain.mediaElementSnapshot,
        ),
        Kt = bt(X, He),
        Qt = Rt({
          bufferedAheadSec: Kt,
          enableLive: e.config.enableLive,
          fellBehindWindowSec: R,
          followEdgeActive: e.config.liveFollowEdgeActive,
          isLivePlayback: e.config.isLivePlayback,
          liveEdgeMediaTimeSec: zt,
          playheadMediaTimeSec: He,
          proactiveDriftSec: e.config.liveFellBehindEdgeReseekDriftSec,
          refetchEnabled: e.config.liveFellBehindWindowRefetchEnabled && !jt,
          starvationBufferAheadSec: L,
        }),
        Xt =
          e.config.liveFellBehindPairedRefetchEnabled &&
          !jt &&
          e.config.isLivePlayback &&
          e.config.enableLive &&
          e.config.liveFollowEdgeActive
            ? u
            : null,
        Yt = Kt != null ? He + Kt : He,
        Jt = Xt != null && Yt < Xt - v,
        tn = Qt || Jt,
        on = Xt != null ? Xt : zt != null ? zt - E : null,
        un =
          tn && on != null
            ? on
            : Gt != null && Gt > He
              ? Gt - v
              : Q.appendState.appendChain != null
                ? He - v
                : He,
        cn = tn && zt != null ? zt + Ft : He + Ft,
        dn =
          Q.appendState.currSourceBufferOperation != null &&
          Q.appendState.currSourceBufferOperation.operationType ===
            "append_operation"
            ? Q.appendState.currSourceBufferOperation.appendInfo
                .appendInfoType === "data" &&
              Q.appendState.currSourceBufferOperation.appendInfo
                .dataByteRangeLength > 0
              ? Q.appendState.currSourceBufferOperation.appendInfo
              : null
            : Q.appendState.lastAppendOperation != null &&
                Q.appendState.lastAppendOperation.operationState ===
                  "succeeded" &&
                Q.appendState.lastAppendOperation.appendInfo.appendInfoType ===
                  "data" &&
                Q.appendState.lastAppendOperation.appendInfo
                  .dataByteRangeLength > 0
              ? Q.appendState.lastAppendOperation.appendInfo
              : null;
      function hn(t, n) {
        return ln(
          Q.appendState.appendChain,
          t,
          n,
          e.config.isLivePlayback && e.config.liveTimeBasedAppendAnchorEnabled,
        );
      }
      var vn = We != null ? We : [],
        En =
          mt &&
          t.playerStateFromMain.mediaSourceIndexApplied ===
            t.mediaSourceState.mediaSourceIndex &&
          t.playerStateFromMain.mediaElementSnapshot != null,
        kn =
          En &&
          ((D = t.playerStateFromMain.mediaElementSnapshot) == null
            ? void 0
            : D.seeking) === !0 &&
          Number.isFinite(He) &&
          He >= 0 &&
          X != null &&
          !X.some(function (e) {
            var t = e[0],
              n = e[1];
            return t <= He && He < n;
          }),
        In = mt && Ft <= 0,
        Tn =
          In &&
          ((x = t.playerStateFromMain.mediaElementSnapshot) == null
            ? void 0
            : x.paused) === !0 &&
          t.playerStateFromMain.mediaSourceIndexApplied ===
            t.mediaSourceState.mediaSourceIndex,
        Dn =
          Tn &&
          (($ = t.playerStateFromMain.mediaElementSnapshot) == null
            ? void 0
            : $.seeking) === !0,
        xn =
          e.config.nativeNextFirstMediaPrewarm && vn.length > 0
            ? kt(le, vn[0])
            : null,
        $n = Q.appendState.appendChain,
        Pn =
          e.config.nativeNextFirstMediaPrewarm &&
          Pt === "initial" &&
          In &&
          !En &&
          He === 0 &&
          xn != null &&
          (Q.nativeNextFirstMediaKey == null
            ? $n == null ||
              ($n.mediaTail == null &&
                $n.playheadMinimumTimeSec === 0 &&
                $n.representationId === ce)
            : Q.nativeNextFirstMediaKey === xn &&
              G(W, xn, a.args.fetchPoolAPI)),
        Nn = Math.round(He * 1e3);
      function Mn(e) {
        return Math.abs(Math.round(e * 1e3) - Nn) <= 1;
      }
      function wn(e) {
        return (
          kn &&
          e.segment.mediaTimeRange[0] <= He &&
          He < e.segment.mediaTimeRange[1] &&
          (e.nativeSeekRetry == null || !Mn(e.nativeSeekRetry.targetSec))
        );
      }
      function An(e) {
        var t;
        if (
          !En ||
          ((t = e.nativeSeekRetry) == null ? void 0 : t.pending) !== !0 ||
          !Mn(e.nativeSeekRetry.targetSec)
        )
          return !1;
        var n = kt(le, e.segment);
        return W.some(function (e) {
          if (e.isNativeSeek !== !0 || !e.activeDemands.has(n)) return !1;
          var t = H(e, a.args.fetchPoolAPI);
          return t == null
            ? e.evictedClock == null
            : t.state !== "failed" &&
                t.state !== "aborted" &&
                t.state !== "__disposed__";
        });
      }
      var Fn = vn.filter(function (e) {
          if (In && !Tn)
            return (
              Pn &&
              e === vn[0] &&
              !an(X, e) &&
              !Q.appendState.workaroundForSegmentBufferedInsufficiently.some(
                function (t) {
                  return t.representationId === ce && tt(t.segment, e);
                },
              ) &&
              !hn(ce, e)
            );
          if (
            !an(X, e) &&
            !Q.appendState.workaroundForSegmentBufferedInsufficiently.some(
              function (t) {
                return (
                  t.representationId === ce &&
                  tt(t.segment, e) &&
                  !wn(t) &&
                  !An(t)
                );
              },
            )
          ) {
            if (In) {
              var t = kt(le, e),
                n = W.some(function (e) {
                  return e.isNativeSeek === !0 && e.activeDemands.has(t);
                });
              return (
                (Dn || n) &&
                ((e.mediaTimeRange[0] <= He + S && He <= e.mediaTimeRange[1]) ||
                  (e.isEndingSegment && He > e.mediaTimeRange[1])) &&
                !hn(ce, e)
              );
            }
            if (e.isEndingSegment && He > e.mediaTimeRange[1])
              return !hn(ce, e);
            var r = o("VideoPlayerNextgendashMediaUtils").isWithinRange(
              e.mediaTimeRange,
              un,
            );
            if (r) return !hn(ce, e);
            var a = o("VideoPlayerNextgendashMediaUtils").isWithinRange(
              e.mediaTimeRange,
              cn,
            );
            if (a) return !hn(ce, e);
            var i = un <= e.mediaTimeRange[0] && e.mediaTimeRange[1] <= cn;
            if (i) return !hn(ce, e);
          }
          return !1;
        }),
        On = fe.type === "SegmentTemplate" ? fe : null,
        Bn =
          (P = On == null ? void 0 : On.segmentTimelinePredictive) != null
            ? P
            : null,
        Wn = We != null && We.length > 0 ? We[We.length - 1] : null,
        qn = On != null ? mn(On) : null;
      if (
        e.config.isLivePlayback &&
        e.config.enableLive &&
        Fn.length === 0 &&
        We != null &&
        On != null &&
        Bn != null &&
        Wn != null &&
        pn(Wn, Bn, e.config.liveRollingPdashReseedAfterStripEnabled, qn, cn) &&
        _n(Wn, Bn) !== Q.predictiveTemplateNumberLastFailed
      ) {
        var Un = Wn.isPredictiveSegment !== !0,
          Vn = fn(
            Bn,
            We,
            On.timescale,
            e.config.isLivePlayback &&
              e.config.livePredictiveSegmentFetchKeyByNumber,
          );
        if (Vn.length > We.length) {
          var Hn;
          ((Q = babelHelpers.extends({}, Q, {
            sidxByRepresentationId: o(
              "VideoPlayerNextgendashStateMachine",
            ).skipAutoDisposeInsideThisObject(
              babelHelpers.extends(
                {},
                Q.sidxByRepresentationId,
                ((Hn = {}), (Hn[ce] = Vn), Hn),
              ),
            ),
          })),
            (We = Vn));
          var Gn = Vn[Vn.length - 1];
          ((Fn = [Gn]),
            c.push(
              Q.type +
                ":" +
                ce +
                ":" +
                (Un ? "rolling_pdash_reseed" : "rolling_pdash") +
                ":" +
                String(Gn.templateNumber),
            ));
        }
      }
      var zn = new Set(),
        jn = null,
        Kn = Q.appendState.workaroundForSegmentBufferedInsufficiently.find(
          function (e) {
            return (
              e.representationId === ce &&
              (wn(e) || An(e)) &&
              Fn.some(function (t) {
                return tt(t, e.segment);
              })
            );
          },
        );
      if (
        !In &&
        Kn == null &&
        Fn.length > 1 &&
        le.segmentsInfo.type === "SegmentBase"
      ) {
        for (var Qn, Xn = [], Yn = 0; Yn < Fn.length; ++Yn) {
          var Jn = Fn[Yn],
            Zn = kt(le, Jn);
          zn.add(Zn);
          var er = xt(e, jn != null ? jn : W, Zn);
          ((jn = er != null ? er : jn), er == null && Xn.push(Jn));
        }
        for (
          var tr =
              w != null && w.prefetchedRepresentationIds.includes(ce)
                ? [0]
                : [],
            nr = je(
              Xn,
              tr,
              e.host.nativeMedia != null
                ? (Qn =
                    e.host.nativeMedia.getMaxBodyBytes == null
                      ? void 0
                      : e.host.nativeMedia.getMaxBodyBytes()) != null
                  ? Qn
                  : 16 * 1024 * 1024
                : void 0,
            ),
            rr = 0;
          rr < nr.length;
          ++rr
        ) {
          var or = nr[rr];
          ((jn = jn != null ? jn : [].concat(W)), jn.push(Tt(e, ++q, le, or)));
        }
      } else
        Fn.forEach(function (t) {
          var n = kt(le, t);
          zn.add(n);
          var r = xt(e, jn != null ? jn : W, n);
          jn = r != null ? r : jn;
          var o = Dn || (Kn != null && tt(Kn.segment, t));
          (o &&
            r != null &&
            (jn = r.map(function (e) {
              return e.activeDemands.has(n)
                ? babelHelpers.extends({}, e, { isNativeSeek: !0 })
                : e;
            })),
            r == null &&
              ((jn = jn != null ? jn : [].concat(W)),
              jn.push(
                babelHelpers.extends(
                  {},
                  It(e, ++q, le, t),
                  o ? { isNativeSeek: !0 } : {},
                ),
              )));
        });
      {
        var ar = new Set();
        ((jn != null ? jn : W).forEach(function (t) {
          var r = O.perfMs - t.demandedAtClock.perfMs,
            o = 0;
          r < o ||
            t.activeDemands.forEach(function (t) {
              t.startsWith("segment-" + Q.type + "-") &&
                !zn.has(t) &&
                ![
                  dn,
                  Q.appendState.currSourceBufferOperation != null &&
                  Q.appendState.currSourceBufferOperation.operationType ===
                    "append_operation"
                    ? Q.appendState.currSourceBufferOperation.appendInfo
                    : null,
                ]
                  .concat(
                    Q.appendState.pendingAppendOperations.map(function (e) {
                      return e.appendInfo;
                    }),
                  )
                  .filter(Boolean)
                  .some(function (r) {
                    var o = Ke(
                      e,
                      n.manifestRepresentations[Q.type],
                      r.representationId,
                    );
                    switch (r.appendInfoType) {
                      case "init":
                        return t === Qe(o);
                      case "data":
                        return t === kt(o, r.segment);
                      default:
                        r.appendInfoType;
                    }
                  }) &&
                ar.add(t);
            });
        }),
          ar.size > 0 &&
            (jn = $t(
              jn != null ? jn : W,
              function (e) {
                return ar.has(e);
              },
              a.args.fetchPoolAPI,
            )));
      }
      {
        var ir = jn != null ? jn : W,
          lr = a.args.fetchPoolAPI,
          sr = ir.reduce(
            function (e, t) {
              if (t.streamType === Q.type && t.activeDemands.size > 0) {
                var n = H(t, lr);
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
          ur =
            e.config.isLivePlayback &&
            e.config.liveAbrDuringSlowSegmentFetchEnabled &&
            Q.type === "video" &&
            Q.appendState.currSourceBufferOperation == null &&
            sr.inflightFetchesCountForThisStream > 0
              ? ht(ir, lr, Q, le, bt(X, He), O.perfMs)
              : null,
          cr =
            ur != null
              ? yt(
                  Q.playableRepresentations,
                  Q.targetVariantRepresentationIds,
                  t.playerStateFromMain.selectedVideoQualityDisplayLabel !=
                    null,
                  le.bandwidth,
                  ur.bandwidthSample,
                )
              : null;
        if (ur != null && cr != null) {
          var dr;
          ur.hasReportedBandwidthSample ||
            e.host.networkDiagnosticsUpdate({
              bandwidthSample: ur.bandwidthSample,
              clock: O,
            });
          var mr = "segment-" + Q.type + "-" + ce + "-";
          c.push(
            Q.type +
              ":" +
              ce +
              ":live_slow_fetch_downswitch:" +
              cr.representationId,
          );
          var pr = rn(
            e,
            Q,
            c,
            le,
            cr,
            "abr_switch",
            Q.targetVariantRepresentationIds,
            Q.prevSelectedMediaVariant,
            Q.prevSelectedVideoQualityDisplayLabel,
          );
          return {
            fetchDemands:
              (dr = $t(
                ir,
                function (e) {
                  var t;
                  return (
                    e.startsWith(mr) &&
                    ((t = Dt(ir, e, lr, !1)) == null ||
                    (t = t.fetchState) == null
                      ? void 0
                      : t.state) !== "completed"
                  );
                },
                lr,
              )) != null
                ? dr
                : ir,
            stream: babelHelpers.extends({}, pr, {
              appendState:
                dn != null && dn.representationId === ce
                  ? o(
                      "VideoPlayerNextgendashStateMachine",
                    ).skipAutoDisposeInsideThisObject(
                      babelHelpers.extends({}, Q.appendState, {
                        lastAppendOperation: null,
                      }),
                    )
                  : Q.appendState,
              liveSlowFetchEvaluatedFetchDataKey: ur.fetchDataKey,
            }),
          };
        }
        if (
          (ur != null &&
            (Q = babelHelpers.extends({}, Q, {
              liveSlowFetchEvaluatedFetchDataKey: ur.fetchDataKey,
            })),
          sr.inflightFetchesCountForThisStream === 0 &&
            sr.unfulfilledDemandsCountForThisStream > 0)
        ) {
          var _r = nn(
            e,
            F,
            t.playerWarningDedupMap,
            O,
            t.playerStateFromMain,
            n,
            w,
            X,
            Q,
            c,
          );
          if (_r.stream.targetRepresentationId !== Q.targetRepresentationId)
            return { fetchDemands: W, stream: _r.stream };
          Q = _r.stream;
        }
      }
      if (
        e.config.fetchInitSidxOfAllRepresentations &&
        ce != null &&
        Q.playableRepresentations.length > 1 &&
        ((N = t.playerStateFromMain.mediaElementSnapshot) == null
          ? void 0
          : N.bufferedFully) !== !0
      ) {
        for (var fr of Q.playableRepresentations)
          if (fr.representationId !== ce) {
            var gr =
                Dt(jn != null ? jn : W, Qe(fr), a.args.fetchPoolAPI, !1) !=
                null,
              hr =
                Q.sidxByRepresentationId[fr.representationId] != null ||
                Dt(jn != null ? jn : W, Ye(fr), a.args.fetchPoolAPI, !1) !=
                  null;
            if (!gr || !hr) {
              var yr =
                e.config.enableCombinedInitSidxFetch &&
                fr.segmentsInfo.type === "SegmentBase" &&
                !gr &&
                !hr;
              yr
                ? ((jn = jn != null ? jn : [].concat(W)),
                  jn.push(Ze(e, ++q, fr)))
                : (gr ||
                    ((jn = jn != null ? jn : [].concat(W)),
                    jn.push(Xe(e, ++q, fr))),
                  hr ||
                    ((jn = jn != null ? jn : [].concat(W)),
                    jn.push(Je(e, ++q, fr))));
            }
          }
      }
      ((W = jn != null ? jn : W),
        Pn &&
          Q.nativeNextFirstMediaKey == null &&
          xn != null &&
          G(W, xn, a.args.fetchPoolAPI) &&
          ((Q = babelHelpers.extends({}, Q, { nativeNextFirstMediaKey: xn })),
          c.push(Q.type + ":nativeNextFirstMediaDemand")));
      var Cr = Q.appendState.workaroundForSegmentBufferedInsufficiently;
      if (
        (Cr.some(function (e) {
          var t;
          return (
            (((t = e.nativeSeekRetry) == null ? void 0 : t.pending) === !0 &&
              !An(e)) ||
            (e === Kn && wn(e))
          );
        }) &&
          (Q = babelHelpers.extends({}, Q, {
            appendState: babelHelpers.extends({}, Q.appendState, {
              workaroundForSegmentBufferedInsufficiently: Cr.map(function (e) {
                var t = e.nativeSeekRetry;
                return e === Kn &&
                  wn(e) &&
                  W.some(function (t) {
                    return (
                      t.isNativeSeek === !0 &&
                      t.activeDemands.has(kt(le, e.segment))
                    );
                  })
                  ? babelHelpers.extends({}, e, {
                      nativeSeekRetry: { pending: !0, targetSec: Nn / 1e3 },
                    })
                  : t != null && t.pending && !An(e)
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
          Q.appendState.pendingAppendOperations.length > 0 ||
          Q.appendState.currSourceBufferOperation != null
        ))
      ) {
        var br = null;
        if (dn != null)
          br = {
            dataByteRangeStart: dn.dataByteRangeStart + dn.dataByteRangeLength,
            incompleteChunkedAppendInfo: dn,
            mimeCodecsParsed: dn.mimeCodecsParsed,
            representationId: dn.representationId,
            segment: dn.segment,
          };
        else if (Fn.length > 0) {
          var vr = Fn[0];
          br = {
            dataByteRangeStart: 0,
            incompleteChunkedAppendInfo: null,
            mimeCodecsParsed: le.mimeCodecsParsed,
            representationId: ce,
            segment: vr,
          };
        }
        var Sr = br;
        if (Sr != null) {
          if (
            Q.appendState.appendChain != null &&
            Q.appendState.appendChain.representationId === Sr.representationId
          ) {
            var Rr = Ke(
                e,
                n.manifestRepresentations[Q.type],
                Sr.representationId,
              ),
              Lr = kt(Rr, Sr.segment),
              Er = Dt(W, Lr, a.args.fetchPoolAPI);
            if (
              Er == null &&
              Sr.incompleteChunkedAppendInfo != null &&
              Sr.segment.isPredictiveSegment === !0
            )
              return (
                c.push(
                  Q.type +
                    ":" +
                    Sr.representationId +
                    ":abandon_incomplete_predictive_append:" +
                    String(Sr.segment.templateNumber),
                ),
                (Q = babelHelpers.extends({}, Q, {
                  appendState: o(
                    "VideoPlayerNextgendashStateMachine",
                  ).skipAutoDisposeInsideThisObject(
                    babelHelpers.extends({}, Q.appendState, {
                      lastAppendOperation: null,
                    }),
                  ),
                })),
                { fetchDemands: W, stream: Q }
              );
            if (Er == null)
              throw o("nextgendasherr").nextgendasherr(
                e,
                Sr.incompleteChunkedAppendInfo != null
                  ? "VideoPlayerNextgendashPlaybackLoopMissingFetchDemandForSegmentToContinueChunkedAppend"
                  : "VideoPlayerNextgendashPlaybackLoopMissingFetchDemandForSegmentToAppend",
                "%s:%s - nextAppendInfo=%s segmentFetchDemandKey=%s fetchDemands=%s",
                Q.type,
                ce != null ? ce : "no_target_representation",
                JSON.stringify(Sr),
                Lr,
                Nt(W),
              );
            var kr = null,
              Ir = Er.fetchState;
            Ir != null && Ir.state === "failed"
              ? (kr = o("nextgendasherr").nextgendasherrFromCause(
                  e,
                  Ir.error,
                  "VideoPlayerNextgendashPlaybackLoopSegmentFetchFailed",
                  "%s:%s - Fetch failed for media segment needed to append; segmentFetchDemandKey=%s nextAppendInfo=%s",
                  Q.type,
                  ce,
                  Lr,
                  JSON.stringify(Sr),
                ))
              : Ir != null &&
                Ir.state === "aborted" &&
                (kr = o("nextgendasherr").nextgendasherr(
                  e,
                  "VideoPlayerNextgendashPlaybackLoopSegmentFetchAborted",
                  "%s:%s - Fetch aborted for media segment needed to append; segmentFetchDemandKey=%s nextAppendInfo=%s",
                  Q.type,
                  ce,
                  Lr,
                  JSON.stringify(Sr),
                ));
            var Tr = Er == null ? void 0 : Er.responseInfo,
              Dr =
                Sr.segment.isPredictiveSegment !== !0 &&
                Sr.segment.fetchKeyNumber != null &&
                W.some(function (e) {
                  return (
                    e.requestDraft.requestID === Lr &&
                    e.isPredictiveSegmentFetch === !0
                  );
                }),
              xr = function (t) {
                return (
                  c.push(
                    Q.type + ":" + Sr.representationId + ":" + t + ":" + Lr,
                  ),
                  {
                    fetchDemands: W.filter(function (e) {
                      return e.requestDraft.requestID !== Lr;
                    }),
                    stream:
                      Sr.incompleteChunkedAppendInfo != null
                        ? babelHelpers.extends({}, Q, {
                            appendState: o(
                              "VideoPlayerNextgendashStateMachine",
                            ).skipAutoDisposeInsideThisObject(
                              babelHelpers.extends({}, Q.appendState, {
                                lastAppendOperation: null,
                              }),
                            ),
                          })
                        : Q,
                  }
                );
              };
            if (kr != null) {
              var $r;
              if (Dr)
                return xr("confirmed_segment_predictive_fetch_failed_refetch");
              var Pr =
                ($r = Q.liveSegmentFetchFailingSinceUnixMs) != null
                  ? $r
                  : O.unixMs;
              if (
                Sr.segment.isPredictiveSegment !== !0 &&
                ot({
                  enableLive: e.config.enableLive,
                  errorName: kr.name,
                  failingSinceUnixMs: Pr,
                  isLastPlayableRepresentation:
                    Q.playableRepresentations.length <= 1,
                  isLivePlayback: e.config.isLivePlayback,
                  nowUnixMs: O.unixMs,
                  retryIndefinitely:
                    e.config.liveSegmentFetchRetryNetworkFailuresIndefinitely,
                  toleranceMs:
                    e.config.liveSegmentFetchNetworkFailureToleranceMs,
                })
              )
                return (
                  c.push(
                    Q.type +
                      ":" +
                      Sr.representationId +
                      ":live_segment_fetch_failed_retry:" +
                      Lr,
                  ),
                  (Q = babelHelpers.extends({}, Q, {
                    appendState:
                      Sr.incompleteChunkedAppendInfo != null
                        ? o(
                            "VideoPlayerNextgendashStateMachine",
                          ).skipAutoDisposeInsideThisObject(
                            babelHelpers.extends({}, Q.appendState, {
                              lastAppendOperation: null,
                            }),
                          )
                        : Q.appendState,
                    liveOutageFailedRepresentationIds: it(
                      Q.liveOutageFailedRepresentationIds,
                      Sr.representationId,
                    ),
                    liveSegmentFetchFailingSinceUnixMs: Pr,
                  })),
                  (W = W.filter(function (e) {
                    return e.requestDraft.requestID !== Lr;
                  })),
                  { fetchDemands: W, stream: Q }
                );
              if (Sr.segment.isPredictiveSegment === !0) {
                var Nr = Q.sidxByRepresentationId[Sr.representationId];
                if (Nr != null) {
                  var Mr, wr;
                  ((Q = babelHelpers.extends({}, Q, {
                    predictiveTemplateNumberLastFailed:
                      (Mr = Sr.segment.templateNumber) != null ? Mr : null,
                    sidxByRepresentationId: o(
                      "VideoPlayerNextgendashStateMachine",
                    ).skipAutoDisposeInsideThisObject(
                      babelHelpers.extends(
                        {},
                        Q.sidxByRepresentationId,
                        ((wr = {}),
                        (wr[Sr.representationId] = Nr.filter(function (e) {
                          return e.isPredictiveSegment !== !0;
                        })),
                        wr),
                      ),
                    ),
                  })),
                    c.push(
                      Q.type +
                        ":" +
                        Sr.representationId +
                        ":predictive_segment_fetch_failed",
                    ));
                }
                return (
                  (W = W.filter(function (e) {
                    return e.requestDraft.requestID !== Lr;
                  })),
                  { fetchDemands: W, stream: Q }
                );
              }
              return (
                (Q = Sn(e, F, c, Q, n, ce, kr)),
                { fetchDemands: W, stream: Q }
              );
            } else if (Tr != null) {
              if (Q.liveSegmentFetchFailingSinceUnixMs != null) {
                var Ar = lt(
                  Q.liveOutageFailedRepresentationIds,
                  Sr.representationId,
                );
                ((Q = babelHelpers.extends({}, Q, {
                  liveOutageFailedRepresentationIds: null,
                  liveSegmentFetchFailingSinceUnixMs: null,
                })),
                  Ar && (Q = st(e, c, Q, n)));
              }
              if (
                Dr &&
                ut(
                  babelHelpers.extends({}, Sr.segment, {
                    isPredictiveSegment: !0,
                  }),
                  Sr.dataByteRangeStart,
                  Tr,
                )
              )
                return xr("confirmed_segment_predictive_fetch_empty_refetch");
              if (ut(Sr.segment, Sr.dataByteRangeStart, Tr)) {
                var Fr = Q.sidxByRepresentationId[Sr.representationId];
                if (Fr != null) {
                  var Or, Br;
                  ((Q = babelHelpers.extends({}, Q, {
                    predictiveTemplateNumberLastFailed:
                      (Or = Sr.segment.templateNumber) != null ? Or : null,
                    sidxByRepresentationId: o(
                      "VideoPlayerNextgendashStateMachine",
                    ).skipAutoDisposeInsideThisObject(
                      babelHelpers.extends(
                        {},
                        Q.sidxByRepresentationId,
                        ((Br = {}),
                        (Br[Sr.representationId] = Fr.filter(function (e) {
                          return e.isPredictiveSegment !== !0;
                        })),
                        Br),
                      ),
                    ),
                  })),
                    c.push(
                      Q.type +
                        ":" +
                        Sr.representationId +
                        ":predictive_segment_fetch_empty",
                    ));
                }
                return (
                  (W = W.filter(function (e) {
                    return e.requestDraft.requestID !== Lr;
                  })),
                  { fetchDemands: W, stream: Q }
                );
              }
              var Wr = Sr.segment.mediaFileByteRange.byteLength,
                qr =
                  Tr.isFetchComplete ||
                  (Tr.responseByteRange.byteLength != null &&
                    Tr.chunksByteLength >=
                      Tr.responseByteRange.byteOffset +
                        Tr.responseByteRange.byteLength),
                Ur = 6,
                Vr = 1e5,
                Hr = qr
                  ? null
                  : e.config.dataAppendOperationMinBytes === "ozplayer-like"
                    ? Ur > 0 && Wr != null && Wr > 0
                      ? Math.ceil(Wr / Ur)
                      : Vr > 0
                        ? Vr
                        : null
                    : e.config.dataAppendOperationMinBytes,
                Gr = Tr.responseByteRange.byteOffset + Sr.dataByteRangeStart,
                zr =
                  Tr.responseByteRange.byteLength != null
                    ? Tr.responseByteRange.byteLength - Sr.dataByteRangeStart
                    : null,
                jr =
                  Tr.kind === "native"
                    ? null
                    : Cn(
                        Tr.chunks,
                        Gr,
                        Hr != null ? (zr != null ? Math.min(zr, Hr) : Hr) : zr,
                      ),
                Kr = C(e.config.mediaSinkType, qr),
                Qr = null;
              if (!Kr && Tr.kind === "native") {
                var Xr = Tr.buffer.body;
                if (
                  zr == null ||
                  !Number.isSafeInteger(zr) ||
                  zr < 0 ||
                  !Number.isSafeInteger(Gr) ||
                  Gr < 0 ||
                  Gr + zr > Xr.byteLength
                )
                  throw o("nextgendasherr").nextgendasherr(
                    e,
                    "VideoPlayerNextgendashPlaybackLoopNativeAppendRangeInvalid",
                  );
                Qr =
                  zr === 0
                    ? y
                    : {
                        body: Xr,
                        byteLength: zr,
                        byteOffset: Gr,
                        kind: "native",
                      };
              } else if (
                !Kr &&
                Tr.kind !== "native" &&
                jr != null &&
                (Hr === null || jr.copyTotalBytesCount >= Hr)
              ) {
                if (((Qr = bn(Tr.chunks, jr)), Qr == null))
                  throw o("nextgendasherr").nextgendasherr(
                    e,
                    "VideoPlayerNextgendashPlaybackLoopFailedToCombineChunksToAppend",
                    "%s/data#%s - Failed to copy %sB from chunks #%s(%sB)..#%s(%sB) into an append buffer (out of %s chunks of total %sB).",
                    Sr.representationId,
                    Sr.segment.segmentId,
                    jr.copyTotalBytesCount,
                    jr.startChunkIndex,
                    jr.startChunkByteOffset,
                    jr.endChunkIndex,
                    jr.endChunkBytesCount,
                    Tr.chunks.length,
                    Tr.chunksByteLength,
                  );
              } else qr && (Qr = y);
              if (Qr != null) {
                var Yr = {
                    appendInfoType: "data",
                    dataByteRangeLength: j(Qr),
                    dataByteRangeStart: Sr.dataByteRangeStart,
                    mimeCodecsParsed: Sr.mimeCodecsParsed,
                    representationId: Sr.representationId,
                    segment: Sr.segment,
                  },
                  Jr = {
                    appendInfo: Yr,
                    buffer: Qr,
                    operationState: "wait_start",
                    operationTiming: { created: e.host.clock() },
                    operationType: "append_operation",
                  };
                (c.push(
                  Q.type +
                    ":" +
                    ce +
                    ":pendingAppendOperations:dataAppendOperation:" +
                    wt(Yr),
                ),
                  (Q = babelHelpers.extends({}, Q, {
                    appendState: o(
                      "VideoPlayerNextgendashStateMachine",
                    ).skipAutoDisposeInsideThisObject(
                      babelHelpers.extends({}, Q.appendState, {
                        pendingAppendOperations: [].concat(
                          Q.appendState.pendingAppendOperations,
                          [Jr],
                        ),
                      }),
                    ),
                  })));
              }
            } else if (
              e.host.nativeMedia != null &&
              (Ir == null ? void 0 : Ir.state) === "completed"
            )
              throw o("nextgendasherr").nextgendasherr(
                e,
                "VideoPlayerNextgendashPlaybackLoopNativeSegmentRangeInvalid",
              );
          }
        }
      }
      var Zr = Rn(e, F, Q, c, le, t.mediaSourceState.mediaSource, He);
      Zr != null && (Q = babelHelpers.extends({}, Q, Zr));
      var eo = Ln(e, F, Q, c, le, He, t.mediaSourceState.mediaSource);
      eo != null && (Q = babelHelpers.extends({}, Q, eo));
      var to = Q.appendState.lastSourceBufferOperation;
      if (
        e.config.enableQuotaExceededRecovery &&
        Q.quotaExceededBufferTargetRatio < 1 &&
        to != null &&
        to.operationState === "succeeded" &&
        to.operationType === "append_operation" &&
        to.operationTiming.created.unixMs !==
          Q.quotaExceededLastRewardedCreatedMs
      ) {
        var no = Math.min(
          1,
          Q.quotaExceededBufferTargetRatio +
            e.config.quotaExceededBufferTargetReward,
        );
        Q = babelHelpers.extends({}, Q, {
          quotaExceededBufferTargetRatio: no,
          quotaExceededLastRewardedCreatedMs: to.operationTiming.created.unixMs,
        });
      }
      return { fetchDemands: W, stream: Q };
    }
    function je(e, t, n) {
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
    function Ke(e, t, n) {
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
    function Qe(e) {
      return "init-" + e.type + "-" + e.representationId;
    }
    function Xe(e, t, n) {
      var r = Qe(n),
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
    function Ye(e) {
      return "sidx-" + e.type + "-" + e.representationId;
    }
    function Je(e, t, n) {
      var r = n.segmentsInfo;
      if (r.type !== "SegmentBase")
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashPlaybackLoopSidxFetchUnknown",
          "%s:%s - sidx fetch unknown (" + r.type + ")",
          n.type,
          n.representationId,
        );
      var a = Ye(n),
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
    function Ze(e, t, n) {
      var r = n.segmentsInfo;
      if (r.type !== "SegmentBase")
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashPlaybackLoopCombinedInitSidxFetchUnknown",
          "%s:%s - combined init+sidx fetch unknown (" + r.type + ")",
          n.type,
          n.representationId,
        );
      var a = Qe(n),
        i = Ye(n),
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
    function et(e) {
      return e.fetchKeyNumber != null
        ? "n" + e.fetchKeyNumber
        : e.templateTime != null
          ? "t" + e.templateTime
          : "" + e.segmentId;
    }
    function tt(e, t) {
      return e.fetchKeyNumber != null && t.fetchKeyNumber != null
        ? e.fetchKeyNumber === t.fetchKeyNumber
        : e.templateTime != null && t.templateTime != null
          ? e.templateTime === t.templateTime
          : e.segmentId === t.segmentId;
    }
    var nt = 600 * 1e3;
    function rt(e) {
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
    function ot(e) {
      if (!e.isLivePlayback || !e.enableLive || e.toleranceMs <= 0) return !1;
      var t = rt(e.errorName);
      if (t == null) return !1;
      var n = e.nowUnixMs - e.failingSinceUnixMs;
      return n <= e.toleranceMs
        ? !0
        : e.retryIndefinitely
          ? t === "without_response" ||
            (e.isLastPlayableRepresentation && n <= nt)
          : !1;
    }
    function at(e) {
      return Object.keys(e).filter(function (t) {
        var n = e[t];
        return n != null && rt(n.name) != null;
      });
    }
    function it(e, t) {
      var n = e != null ? e : [];
      return n.includes(t) ? n : [].concat(n, [t]);
    }
    function lt(e, t) {
      var n;
      return (n = e == null ? void 0 : e.includes(t)) != null ? n : !1;
    }
    function st(e, t, n, r) {
      var a =
        e.config.isLivePlayback &&
        e.config.liveSegmentFetchRetryNetworkFailuresIndefinitely &&
        n.playableRepresentations.length <= 1
          ? at(n.blockedRepresentations)
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
        vn(
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
    function ut(e, t, n) {
      return (
        e.isPredictiveSegment === !0 &&
        t === 0 &&
        n.isFetchComplete &&
        n.chunksByteLength === 0
      );
    }
    function ct(e) {
      if (e == null) return null;
      for (var t = e.length - 1; t >= 0; t--) {
        var n = e[t];
        if (n.isPredictiveSegment !== !0) return n.mediaTimeRange[1];
      }
      return null;
    }
    function dt(e) {
      var t = null;
      for (var n of e) {
        var r = ct(
          n.targetRepresentationId != null
            ? n.sidxByRepresentationId[n.targetRepresentationId]
            : null,
        );
        if (r == null) return null;
        t = t == null ? r : Math.min(t, r);
      }
      return t;
    }
    function mt(e) {
      var t = e.playheadMediaTimeSec,
        n = e.sidx,
        r = e.toleranceSec,
        o = ct(n);
      return o == null ? null : t >= o - r ? o : null;
    }
    function pt(e) {
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
      var u = i === "static" ? Math.min(t, I) : t,
        c =
          s != null && s.tailEndSec === n
            ? s
            : { sinceUnixMs: l, tailEndSec: n },
        d = l - c.sinceUnixMs >= u * 1e3;
      return { confirmed: d, next: c };
    }
    var _t = 3e3,
      ft = 1,
      gt = 0.8;
    function ht(e, t, n, r, o, a) {
      if (
        o == null ||
        o >= ft ||
        !n.playableRepresentations.some(function (e) {
          return e.bandwidth < r.bandwidth;
        })
      )
        return null;
      var i = "segment-" + n.type + "-" + r.representationId + "-";
      for (var l of e) {
        var s = l.requestDraft.requestID;
        if (
          !(
            l.streamType !== n.type ||
            !s.startsWith(i) ||
            s === n.liveSlowFetchEvaluatedFetchDataKey
          )
        ) {
          var u = H(l, t);
          if (!(u == null || u.state !== "waiting_data")) {
            var c = u.responseData.state;
            if (c.state === "reading_stream") {
              var d = a - c.startedReadingClock.perfMs;
              if (!(d < _t)) {
                var m = { bytes: c.dataBytesLengthTotal, timeInMs: d },
                  p = c.predictiveResponseChunkBytes,
                  _ = c.predictiveResponseChunkArrivedPerfMs;
                if (
                  (p != null &&
                    _ != null &&
                    (m = {
                      bytes: p,
                      timeInMs: _ - c.startedReadingClock.perfMs,
                    }),
                  m.timeInMs > 0 &&
                    (m.bytes * 8e3) / m.timeInMs < r.bandwidth * gt)
                )
                  return {
                    bandwidthSample: m,
                    fetchDataKey: s,
                    hasReportedBandwidthSample: c.hasReportedBandwidthSample,
                  };
              }
            }
          }
        }
      }
      return null;
    }
    function yt(e, t, n, r, o) {
      if (n) return null;
      var a = o.timeInMs > 0 ? (o.bytes * 8e3) / o.timeInMs : 0,
        i = null,
        l = null;
      for (var s of e)
        s.bandwidth >= r ||
          (t.length > 0 && !t.includes(s.representationId)) ||
          ((i == null || s.bandwidth < i.bandwidth) && (i = s),
          s.bandwidth <= a * gt &&
            (l == null || s.bandwidth > l.bandwidth) &&
            (l = s));
      return l != null ? l : i;
    }
    function Ct(e) {
      return (
        e.enableBandwidthDiagnosticsFallback ||
        (e.isLivePlayback && e.liveBandwidthDiagnosticsFallbackEnabled)
      );
    }
    function bt(e, t) {
      if (e == null) return null;
      for (var n of e) if (n[0] <= t && t <= n[1]) return n[1] - t;
      return 0;
    }
    function vt(e, t, n, r) {
      var o;
      if (n <= 0 || e == null) return null;
      var a = (o = e[0]) == null ? void 0 : o[0];
      if (a == null) return null;
      var i = t - n;
      return i - a >= r ? i : null;
    }
    function St(e, t) {
      return e && (t == null || t.paused);
    }
    function Rt(e) {
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
    function Lt(e) {
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
          Rt({
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
    function Et(e, t) {
      var n = e.findIndex(function (e) {
          return (
            e.representationId === t.representationId &&
            tt(e.segment, t.segment)
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
      return o.length > N ? o.slice(o.length - N) : o;
    }
    function kt(e, t) {
      return "segment-" + e.type + "-" + e.representationId + "-" + et(t);
    }
    function It(e, t, n, r) {
      var a = n.segmentsInfo,
        i = kt(n, r),
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
        r.isPredictiveSegment === !0 ? { isPredictiveSegmentFetch: !0 } : null,
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
                  relativeURL: ee(
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
        },
      );
    }
    function Tt(e, t, n, r) {
      if (r.length === 0)
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashPlaybackLoopGroupOfSegmentsFetchEmptySegments",
          "%s:%s - Group of segments fetch empty segments",
          n.type,
          n.representationId,
        );
      if (r.length === 1) return It(e, t, n, r[0]);
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
                kt(n, e),
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
    function Dt(e, t, n, r) {
      r === void 0 && (r = !1);
      for (var o = !1, a = null, i = 0; i < e.length; ++i) {
        var l = e[i],
          s = l.dataKeyToResponseByteRange.get(t);
        if (s != null) {
          o = !0;
          var u = H(l, n);
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
          y = p.state === "done_buffer" ? j(p.buffer) : p.dataBytesLengthTotal,
          C = null;
        if (
          r &&
          (g || (m.byteLength != null && y >= m.byteOffset + m.byteLength))
        ) {
          var b = Cn(h, m.byteOffset, m.byteLength);
          C = b != null ? bn(h, b) : null;
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
    function xt(e, t, n) {
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
    function $t(e, t, n) {
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
    function Pt(e, t, n) {
      return e.map(function (e) {
        var r,
          o,
          a = H(e, n),
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
              return [t, Mt(n)];
            },
          );
        return [u, i, s, l];
      });
    }
    function Nt(e, t) {
      return (t === void 0 && (t = !1), JSON.stringify(Pt(e, t)));
    }
    function Mt(e) {
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
    function wt(e) {
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
            Mt(e.segment.mediaFileByteRange) +
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
    function At(e) {
      var t = e.segment.mediaFileByteRange.byteLength;
      return (
        e.dataByteRangeLength === 0 ||
        (t != null && e.dataByteRangeStart + e.dataByteRangeLength >= t)
      );
    }
    function Ft(e) {
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
    function Ot(e) {
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
    function Bt(e) {
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
    function Wt(e) {
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
    function qt(e) {
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
    function Ut(e, t) {
      return t != null
        ? e.host.sourceBufferSnapshotBuffered(e, t.sourceBuffer)
        : void 0;
    }
    function Vt(e) {
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
    function Ht(e, t, n, r, a, i, l, g) {
      var h = n.appendState,
        y = h.currSourceBufferOperation;
      if (y == null) return null;
      var C = null,
        b = null,
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
                                byteLength: j(y.buffer),
                                dataByteRangeLength: t.dataByteRangeLength,
                                dataByteRangeStart: t.dataByteRangeStart,
                                segmentId: t.segment.segmentId,
                              },
                            }
                          : { int: { byteLength: j(y.buffer) } }
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
                    v = l(h.started);
                  return babelHelpers.extends({}, y, {
                    debugSourceBufferRangesAfterStart: void 0,
                    operationState: "wait_updateend",
                    operationTiming: h,
                    qplSubspanEnd: v,
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
                    waitForMediaElementErrorUntilUnixMs: i.unixMs + Ne,
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
                  if (((b = g()), b != null && !an(b, $))) {
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
                          wt(y.appendInfo),
                          JSON.stringify($.mediaTimeRange),
                          JSON.stringify(b),
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
                    waitForMediaElementErrorUntilUnixMs: i.unixMs + Ne,
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
                  var K, Q;
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
                      waitForMediaElementErrorUntilUnixMs: i.unixMs + Ne,
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
                      b != null
                        ? ce(b, l)
                        : l,
                    representationId: I.appendInfo.representationId,
                  }
                : At(I.appendInfo)
                  ? N != null &&
                    N.playheadMinimumTimeSec >
                      I.appendInfo.segment.mediaTimeRange[1] + v
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
          w = Gt(
            h.sourceBufferRangesAnnotated,
            b,
            (T = S) == null ? void 0 : T.segment.mediaTimeRange,
            (D = S) == null ? void 0 : D.representationId,
            n.manifestRepresentationsCount,
          ),
          A =
            "" +
            y.operationType +
            (y.operationType === "append_operation"
              ? "/" + wt(y.appendInfo)
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
                ($ != null ? wt($.appendInfo) : "null"),
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
          M !== N && r.push(F + "...:appendChain:" + Ft(N) + "-->" + Ft(M)));
        var O =
          L != null
            ? Et(h.workaroundForSegmentBufferedInsufficiently, L)
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
              tt(e.segment, B.segment)
            );
          }) &&
            (O = O.map(function (e) {
              var t = e.nativeSeekRetry;
              return t != null &&
                t.pending &&
                e.representationId === B.representationId &&
                tt(e.segment, B.segment)
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
    function Gt(e, t, n, r, o) {
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
    function zt(e) {
      var t = new Map();
      for (var n of e) {
        var r = o(
          "VideoPlayerNextgendashManifestParser",
        ).getDisplayLabelFromVideoRepresentation(n);
        t.has(r) || t.set(r, n);
      }
      return Array.from(t.values());
    }
    function jt(e, t, n) {
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
    function Kt(e, t) {
      var n = jt(e, t.videoLang, t.videoRole),
        r = n.debugFallbacksTried,
        o = n.filteredRepresentations;
      return { debugFallbacksTried: r, representationsByVariant: zt(o) };
    }
    function Qt(e, t) {
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
    function Xt(e, t) {
      var n = jt(e, t.audioLang, t.audioRole),
        r = n.debugFallbacksTried,
        o = n.filteredRepresentations;
      return { debugFallbacksTried: r, representationsByVariant: o };
    }
    function Yt(e, t, n) {
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
    function Jt(e, t, n, a, i, l, s, u, c, d, m, p, _, f, g, h, y, C, v, S) {
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
        ((k = I.representations), Yt(e, n, I));
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
        M = p != null ? p : z,
        w = Kt(k, M),
        A = w.debugFallbacksTried,
        F = w.representationsByVariant,
        O = b(
          e,
          F.map(function (e) {
            return e.representationId;
          }),
        ),
        B = Qt(F, _);
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
          var V = Wt(l),
            H = Wt(k),
            G = Wt(F),
            j = Wt(B);
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
              "blockedRepresentations=" + Ot(u),
              "targetVariantRepresentations=" + G,
              "filteredRepresentations=" + (j === G ? "same" : j),
              "fallbacksTried=" + A.join(";"),
            ),
          );
        }
      }
      var K = d != null ? d : z,
        Q = Zt(p, M, K, _, m);
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
            (($ = b(e, {
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
            ce = i(e, B, g),
            de = ce.bestRepresentation,
            me = !r("deepEquals")(ce.nextABRState, g);
          if (
            (me && ($ = b(e, ce.nextABRState)),
            (re || me || e.config.enableStableAbrEvaluationCooldown) &&
              (P = e.host.clock()),
            de != null &&
              de.representationId !==
                ((ue = x) == null ? void 0 : ue.representationId))
          ) {
            var pe = !Q && x != null && de.bandwidth > x.bandwidth,
              fe = C && pe,
              ge =
                !fe ||
                _e(
                  de,
                  S,
                  v,
                  e.config.liveAbrTailSwitchAllowPredictiveContinuation,
                );
            ge
              ? ((x = de),
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
    function Zt(e, t, n, r, o) {
      return (
        (e != null &&
          (t.videoLang !== n.videoLang || t.videoRole !== n.videoRole)) ||
        (r != null && r !== o)
      );
    }
    function en(e, t, n) {
      return (
        e != null &&
        (t.audioLang !== n.audioLang || t.audioRole !== n.audioRole)
      );
    }
    function tn(e, t, n, r, a, i, l, s, u) {
      var c,
        d =
          (c = r.find(function (e) {
            return e.representationId === l;
          })) != null
            ? c
            : null,
        m,
        p = d,
        _ = u != null ? u : z,
        f = Xt(a, _),
        g = f.debugFallbacksTried,
        h = f.representationsByVariant,
        y = b(
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
          var L = qt(r),
            E = qt(a),
            k = qt(h),
            I = qt(C);
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
              "blockedRepresentations=" + Ot(i),
              "targetVariantRepresentations=" + k,
              "filteredRepresentations=" + (I === k ? "same" : I),
              "fallbacksTried=" + g.join(";"),
            ),
          );
        }
      }
      var T = s != null ? s : z,
        D = en(u, _, T);
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
    function nn(e, t, n, r, a, i, l, s, u, c) {
      var d = u,
        m,
        p,
        _,
        f;
      if (d.type === "video") {
        var g,
          h,
          y,
          C = V(e, a.mediaElementSnapshot),
          v = Jt(
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
                  Ct(e.config),
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
        var x = tn(
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
          (f = b(
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
            "blockedRepresentations=" + Ot(d.blockedRepresentations),
          )
        );
      }
      return {
        prevTargetRepresentation: m,
        stream: rn(
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
    function rn(e, t, n, r, a, i, l, s, u) {
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
    function on(e, t, n) {
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
    function an(e, t) {
      return (
        on(e, t.mediaTimeRange, 0.05) ||
        (t.isEndingSegment && on(e, t.mediaTimeRange, 0.05))
      );
    }
    function ln(e, t, n, r) {
      return e == null || t !== e.representationId || e.mediaTail == null
        ? !1
        : r
          ? n.mediaTimeRange[1] <= e.mediaTail.mediaTimeSec + $
          : n.segmentId <= e.mediaTail.segmentId;
    }
    function sn(e, t) {
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
    function un(e, t) {
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
      if (l < i - $)
        return { existingStartSec: i, freshEndSec: l, type: "timeline_reset" };
      var s = n[n.length - 1],
        u = s.mediaTimeRange[1],
        c = [];
      for (var d of t)
        d.mediaTimeRange[0] >= u - $ &&
          c.push(
            babelHelpers.extends({}, o(d, c.length), {
              segmentId: s.segmentId + 1 + c.length,
            }),
          );
      return { sidx: [].concat(n, c), type: "merged" };
    }
    function cn(e) {
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
    function dn(e, t, n) {
      if (n <= 0 || t == null || e.length <= 1) return e;
      for (
        var r = t - n, o = 0;
        o < e.length - 1 && e[o].mediaTimeRange[1] <= r;
      )
        o++;
      return o === 0 ? e : e.slice(o);
    }
    function mn(e) {
      var t = e.segmentTimeline,
        n = e.timescale;
      if (t.length === 0) return null;
      var r = t[t.length - 1];
      return (r.t + (r.r + 1) * r.d) / n;
    }
    function pn(e, t, n, r, o) {
      return e.mediaTimeRange[1] > o + $
        ? !1
        : e.isPredictiveSegment === !0
          ? !0
          : n &&
            t.endNumber != null &&
            r != null &&
            e.mediaTimeRange[1] >= r - $;
    }
    function _n(e, t) {
      return e.isPredictiveSegment === !0 && e.templateNumber != null
        ? e.templateNumber + 1
        : t.endNumber != null
          ? t.endNumber + 1
          : null;
    }
    function fn(e, t, n, r) {
      r === void 0 && (r = !1);
      var a = t[t.length - 1];
      if (a == null || e.endNumber == null) return t;
      var i = _n(a, e);
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
    function gn(e, t, n, r, a) {
      var i = a ? hn(r) : r,
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
    function hn(e) {
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
    function yn(e, t, n, r, a, i, l, s) {
      if (r.mediaTail == null) return r;
      var u = r.playheadMinimumTimeSec,
        c = r.mediaTail.mediaTimeSec;
      if (u > c + v)
        throw o("nextgendasherr").nextgendasherr(
          e,
          "VideoPlayerNextgendashPlaybackLoopIncoherentAppendChain",
          "%s:%s - appendChain.playheadMinimumTimeSec %ss > appendChain.mediaTail.mediaTimeSec %ss",
          t,
          n,
          u,
          c,
        );
      if (!o("VideoPlayerNextgendashMediaUtils").isWithinRange([u, c + v], a)) {
        if (
          e.config.isLivePlayback &&
          (de(i, a, u) ||
            (e.config.liveAppendChainForwardCoveredEscapeEnabled &&
              me(i, a, c)))
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
              Ft(r) +
              "-->" +
              Ft(d) +
              "(playhead_outside)",
          ),
          d
        );
      }
      if (Math.abs(c - u) > v) {
        var m = [u, Math.max(a, c - v)];
        if (i === void 0 || !on(i, m, 0)) {
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
                Ft(r) +
                "-->" +
                Ft(p) +
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
                Vt(e.host.mediaSourceCollectSnapshot(e, l)) +
                ")",
            ),
            p
          );
        }
      }
      return r;
    }
    function Cn(e, t, n) {
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
    function bn(e, t) {
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
    function vn(e, t, n, r, a) {
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
          p = Bt(u),
          _ = Bt(c),
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
            "blockedRepresentations=" + Ot(n.blockedRepresentations),
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
    function Sn(e, t, n, r, a, i, l) {
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
                "blockedRepresentations=" + Ot(r.blockedRepresentations),
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
        vn(
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
    function Rn(e, t, n, r, a, i, l) {
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
          var b = Ht(
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
              return Ut(e, d);
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
            var v = Ht(
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
                return Ut(e, d);
              },
            );
            v != null && (y = babelHelpers.extends({}, y, v));
          }
        }
        if (C != null) {
          var S = Ht(
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
              return Ut(e, d);
            },
          );
          S != null && (y = babelHelpers.extends({}, y, S));
        }
        return y;
      }
      return null;
    }
    function Ln(e, t, n, r, a, i, l) {
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
              wt(d.appendInfo),
          ),
          h.appendInfoType === "data" && h.dataByteRangeLength === 0)
        ) {
          var b = Ht(
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
              return Ut(e, m);
            },
          );
          b != null && (C = babelHelpers.extends({}, C, b));
        } else {
          var v;
          try {
            var S = Ht(
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
                return Ut(e, m);
              },
            );
            (S != null && (C = babelHelpers.extends({}, C, S)),
              h.appendInfoType === "init" &&
                (r.push(
                  n.type +
                    ":" +
                    p +
                    ":abort:MSEbefore=" +
                    Vt(e.host.mediaSourceCollectSnapshot(e, l)),
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
                  Vt(e.host.mediaSourceCollectSnapshot(e, l)),
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
                  Vt(e.host.mediaSourceCollectSnapshot(e, l)),
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
              (a.name === M ||
                (e.config.enableQuotaExceededRecoveryForCompositeErrors &&
                  w.test(a.name)));
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
            var A = Ht(
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
                return Ut(e, m);
              },
            );
            A != null && (C = babelHelpers.extends({}, C, A));
          }
        }
        return C;
      }
      return null;
    }
    ((l.internal_shouldWaitForTrackReuseCompleteSegment = C),
      (l.internal_getMediaErrorRecoveryAttemptsCap = q),
      (l.internal_predictPlayhead = U),
      (l.internal_getPlayheadTimeSec = V),
      (l.originalMediaVariant = z),
      (l.internal_shouldResetLiveRecoveryAttempts = Q),
      (l.internal_isSourceBufferOperationTimedOut = X),
      (l.VideoPlayerNextgendashPlaybackLoopSM = Z),
      (l.internal_substituteParamsInSegmentURLTemplate = ee),
      (l.internal_prioritizeFetchDemands = te),
      (l.internal_evictFetchDemandsByFetchState = re),
      (l.internal_isInitURLRefreshedSeparately = ie),
      (l.internal_isRequestInfoArgsExpiredOrSoonExpiring = le),
      (l.internal_getNoMediaElementBufferAheadTargetSec = ue),
      (l.internal_getLiveABRTailSwitchAnchorTimeSec = ce),
      (l.internal_isLiveAppendChainAheadOfPlayheadCoveredByBuffer = de),
      (l.internal_isPlayheadCoveredByBufferAheadOfAppendChainTail = me),
      (l.internal_canLiveABRTailSwitchAppendAtBufferedTail = _e),
      (l.internal_computeABRVolatility = ge),
      (l.internal_computeNetworkVolatility = he),
      (l.internal_updateBandwidthVolatilitySamples = ye),
      (l.internal_computeBandwidthTrend = Ce),
      (l.internal_evaluateSidxPrefetchTarget = be),
      (l.internal_startFetchRequestsForFetchDemands = ve),
      (l.internal_fulfillFetchDemands = Se),
      (l.internal_clampObserveAndActDelayMs = Ee),
      (l.internal_coalesceAdjacentDebugLogLines = De),
      (l.internal_getEndOfStreamCheckpointSec = $e),
      (l.internal_getStreamPresentationTimeOffsetSec = He),
      (l.internal_groupSegmentsToFetch = je),
      (l.internal_makeSegmentFetchKeyIdPart = et),
      (l.internal_isSameSegmentIdentity = tt),
      (l.internal_classifyLiveRetryableFetchError = rt),
      (l.internal_shouldRetryLiveSegmentAfterFetchFailure = ot),
      (l.internal_getLiveRepresentationsToUnblockAfterOutage = at),
      (l.internal_withLiveOutageFailedRepresentation = it),
      (l.internal_isLiveOutageStreamWide = lt),
      (l.internal_isEmptyCompletePredictiveSegmentFetch = ut),
      (l.internal_getConfirmedSidxLiveEdgeTimeSec = ct),
      (l.internal_getLiveSeekableRangeEndSec = dt),
      (l.internal_getStreamDrainedConfirmedTailEndSec = mt),
      (l.internal_updateLiveEndedByStallState = pt),
      (l.internal_findSlowLiveSegmentFetch = ht),
      (l.internal_selectLiveSlowFetchDownswitchRepresentation = yt),
      (l.internal_isABRBandwidthDiagnosticsFallbackEnabled = Ct),
      (l.internal_getBufferedAheadSecForPlayhead = bt),
      (l.internal_getBackBufferRemoveEndSec = vt),
      (l.internal_isLiveEdgeRefetchSuspended = St),
      (l.internal_shouldRefetchAtLiveEdge = Rt),
      (l.internal_computePairedRefetchAnchorSec = Lt),
      (l.internal_addBoundedWorkaroundForSegmentBufferedInsufficiently = Et),
      (l.makeSegmentFetchDataKey = kt),
      (l.internal_makeGroupOfSegmentsFetchDemand = Tt),
      (l.findDataForDataKey = Dt),
      (l.debugPrepareFetchDemands = Pt),
      (l.internal_handleSourceBufferEvent = Ht),
      (l.internal_updateSourceBufferRangesAnnotated = Gt),
      (l.internal_filterVideoRepresentationsByVariant = Kt),
      (l.internal_filterAudioRepresentationsByVariant = Xt),
      (l.internal_selectTargetVideoRepresentation = Jt),
      (l.internal_selectTargetAudioRepresentation = tn),
      (l.internal_checkRangeBufferedWithoutGap = on),
      (l.internal_isSegmentBeforeAppendAnchor = ln),
      (l.internal_makeSidxFromSegmentTemplate = sn),
      (l.internal_mergeLiveSidx = un),
      (l.internal_finalizeLiveSidxAtStaticFlip = cn),
      (l.internal_trimSidxToLiveLookbackBuffer = dn),
      (l.internal_getSegmentTemplateLiveEdgeMediaTimeSec = mn),
      (l.internal_canExtendPredictiveChainFromTail = pn),
      (l.internal_getNextPredictiveTemplateNumber = _n),
      (l.internal_addPredictiveSegmentsToSidx = fn),
      (l.internal_validateAndNormalizeSidx = gn),
      (l.internal_selectDataChunksToAppend = Cn),
      (l.internal_combineDataChunksIntoContiguousBuffer = bn),
      (l.internal_blockRepresentationInStream = Sn),
      (l.internal_startPendingRemoveOperation = Rn),
      (l.internal_startPendingAppendOperation = Ln));
  },
  98,
);
