__d(
  "VideoPlayerNextgendashEngine",
  [
    "Promise",
    "SiteData",
    "VideoPlayerImplementationEngineAPI",
    "VideoPlayerImplementationEngineVideoElementAPI",
    "VideoPlayerImplementationErrors",
    "VideoPlayerNextgendashConnectionMainToWorker",
    "VideoPlayerNextgendashConnectionPortToVirtualWorker",
    "VideoPlayerNextgendashEngineConfig",
    "VideoPlayerNextgendashEngineErrors",
    "VideoPlayerNextgendashEngineExtrasAPI",
    "VideoPlayerNextgendashEnvironment",
    "VideoPlayerNextgendashHostAPI",
    "VideoPlayerNextgendashLoggingAPI",
    "VideoPlayerNextgendashLoggingDestinationEngineWarning",
    "VideoPlayerNextgendashLoggingDestinationFBLogger",
    "VideoPlayerNextgendashLoggingDestinationODSFromEngine",
    "VideoPlayerNextgendashLoggingDestinationQPLFromEngine",
    "VideoPlayerNextgendashMain",
    "VideoPlayerNextgendashPrefetchConnection",
    "VideoPlayerNextgendashQPL",
    "VideoPlayerNextgendashRedundantPlayheadWrite",
    "VideoPlayerNextgendashWorkQueue",
    "clearTimeout",
    "cr:11335",
    "cr:3020",
    "cr:39935",
    "cr:39936",
    "cr:9712",
    "cr:9718",
    "gkx",
    "guid",
    "nextgendasherr",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    function c() {
      if (r("gkx")("9512")) {
        var e = r("gkx")("7137") ? "ManagedMediaSource" : "MediaSource";
        if (n("cr:3020").mediaSourceCanConstructInDedicatedWorker(e))
          return r("gkx")("4484") ? "RealWorkerV2" : "RealWorker";
      }
      return "VirtualWorker";
    }
    var d = c();
    d === "VirtualWorker" &&
      o(
        "VideoPlayerNextgendashConnectionPortToVirtualWorker",
      ).preloadWorkerEnvironmentJSResourceWhenVirtualWorkerOnly();
    var m = {
        RealWorker:
          (e =
            n("cr:39936") == null
              ? void 0
              : n("cr:39936")
                  .createVideoPlayerNextgendashConnectionPortToRealWorker) !=
          null
            ? e
            : null,
        RealWorkerV2:
          (s =
            n("cr:39935") == null
              ? void 0
              : n("cr:39935")
                  .createVideoPlayerNextgendashConnectionPortToRealWorkerV2) !=
          null
            ? s
            : null,
        VirtualWorker: o("VideoPlayerNextgendashConnectionPortToVirtualWorker")
          .createVideoPlayerNextgendashConnectionPortToVirtualWorker,
      },
      p = {
        clientRev: r("SiteData").client_revision,
        cometEnv: r("SiteData").comet_env,
      };
    function _() {
      o("VideoPlayerNextgendashConnectionMainToWorker").preloadWorker({
        envForErrors: {
          host: { clock: n("cr:3020").clock },
          loggingState: { metadata: babelHelpers.extends({}, p) },
        },
        virtualWorkerHostAPI: n("cr:3020"),
        workerEnvConfig: v(),
        workerPortFactories: m,
        workerType: d,
      });
    }
    var f = null,
      g = "ngdprefetch-" + r("guid")();
    function h() {
      if (f != null) return f;
      _();
      var e = o(
          "VideoPlayerNextgendashWorkQueue",
        ).createVideoPlayerNextgendashWorkQueue(n("cr:3020").scheduleToRun),
        t = n("cr:9718") == null ? void 0 : n("cr:9718")(g, e);
      return (
        (f = o(
          "VideoPlayerNextgendashPrefetchConnection",
        ).createVideoPlayerNextgendashPrefetchConnection({
          config: v(),
          hostAPI: n("cr:3020"),
          instanceKey: g,
          loggingDestinations: [
            o(
              "VideoPlayerNextgendashLoggingDestinationFBLogger",
            ).createVideoPlayerNextgendashLoggingDestinationFBLogger(),
            n("cr:9712"),
            t == null ? void 0 : t.loggingDestination,
          ],
          siteMetadata: p,
          workerPortFactories: m,
          workerType: d,
          workQueue: e,
        })),
        f
      );
    }
    function y(e) {
      return e == null && r("gkx")("16361")
        ? 540
        : e == null && r("gkx")("21918")
          ? 480
          : r("gkx")("2312")
            ? { "%future added value": 0, HD: 720, SD: 0, UHD: 1080, "": 0 }[
                e != null ? e : ""
              ]
            : 0;
    }
    function C(e) {
      h().prefetch(
        e,
        o(
          "VideoPlayerNextgendashEngineConfig",
        ).createVideoPlayerNextgendashABRConfig({
          videoPreferredMinimumSmallestDimension: y(null),
        }),
      );
    }
    function b(e) {
      h().releasePrefetchKey(e);
    }
    function v() {
      var e = o("VideoPlayerNextgendashEnvironment").createDefaultConfig();
      return babelHelpers.extends({}, e, {
        blockDuplicatePrefetch: r("gkx")("25126"),
        bufferingBeginBufferAheadSec: r("gkx")("7137")
          ? 0.1
          : e.bufferingBeginBufferAheadSec,
        bufferingEndBufferAheadSec: r("gkx")("4924")
          ? e.bufferingEndBufferAheadSec
          : r("gkx")("7137")
            ? 0.2
            : e.bufferingEndBufferAheadSec,
        bufferingEndRecentStallBufferAheadSec: r("gkx")("419")
          ? 3
          : e.bufferingEndRecentStallBufferAheadSec,
        bufferingEndRecentStallTimeoutMs: r("gkx")("419")
          ? 1e4
          : e.bufferingEndRecentStallTimeoutMs,
        cacheQualityScoreInRepresentation: r("gkx")("8789"),
        dataAppendOperationMinBytes: r("gkx")("19511")
          ? null
          : e.dataAppendOperationMinBytes,
        debugLog: r("gkx")("17339"),
        debugOverlay: r("gkx")("26608"),
        debugViz: r("gkx")("17340"),
        disableFallbackFromRealWorkerAfterLinked: !0,
        disablePlaybackLoopSchedulingOnTimer: r("gkx")("6615"),
        disableZeroPlaybackRateWhileBuffering: r("gkx")("4185"),
        eagerResyncOnMediaElementAttach: r("gkx")("25313"),
        enableAdaptiveConcurrentSegmentFetching: r("gkx")("8486"),
        enableBandwidthDiagnosticsFallback: r("gkx")("23799"),
        enableCdnUrlRefresh: r("gkx")("14068"),
        enableCombinedInitSidxFetch: r("gkx")("18184"),
        enableDisposalResourceCleanup: r("gkx")("11526"),
        enableDynamicBufferWatermarks: r("gkx")("11395"),
        enableFBPrefetchCacheKeyNormalization: r("gkx")("18280"),
        enableFetchPool: r("gkx")("21866"),
        enableFilterFailedPrefetchBootstrap: r("gkx")("11654"),
        enableLipSync: r("gkx")("3922") || r("gkx")("7221"),
        enableLive: r("gkx")("5049"),
        enableMediaElementUnmountNotification: r("gkx")("17440"),
        enableNonOverlappingStreamBandwidthSampling: r("gkx")("15502"),
        enablePlayerScopedWorkerToMainEventCoalescing: r("gkx")("18614"),
        enablePredictiveSidxPrefetch: r("gkx")("4970"),
        enablePrefetchBandwidthSampling: r("gkx")("12118"),
        enablePrefetchCacheKeyNormalization: r("gkx")("4090"),
        enableQuotaExceededRecovery: r("gkx")("25887"),
        enableQuotaExceededRecoveryForCompositeErrors: r("gkx")("15535"),
        enableSplitAbrEvalSwitchIntervals: r("gkx")("18082"),
        enableStableAbrEvaluationCooldown: r("gkx")("12312"),
        enableStreamReaderFailureRecovery: r("gkx")("12428"),
        enableSuppressIdleTransitions: r("gkx")("7814"),
        enableTasosBwe: r("gkx")("1093"),
        endOfStreamBufferToleranceSec: r("gkx")("5397")
          ? 0.05
          : e.endOfStreamBufferToleranceSec,
        fatalErrorOnMediaErrorRecoveryCapReached: r("gkx")("5957"),
        fetchHighPri: !0,
        fetchInitSidxOfAllRepresentations: r("gkx")("898"),
        guardSourceBufferOpsWithReadyStateCheck:
          r("gkx")("21333") || r("gkx")("17440"),
        handleUpdateDashManifestInWaitingStates: r("gkx")("6924"),
        isTypeSupportedIncludeContentAttributes: r("gkx")("18943"),
        liveAppendChainForwardCoveredEscapeEnabled: r("gkx")("7763"),
        liveBackBufferRetentionSec: r("gkx")("7763")
          ? 60
          : e.liveBackBufferRetentionSec,
        liveBufferingEndRecentStallBufferAheadSec: r("gkx")("7763")
          ? 2
          : e.liveBufferingEndRecentStallBufferAheadSec,
        liveBufferingEndRecentStallTimeoutMs: r("gkx")("7763")
          ? 8e3
          : e.liveBufferingEndRecentStallTimeoutMs,
        liveEndedStallConfirmSec: r("gkx")("7763")
          ? 10
          : e.liveEndedStallConfirmSec,
        liveEndedTransitionOnStallEnabled: r("gkx")("7763"),
        liveFellBehindEdgeReseekDriftSec: r("gkx")("7763")
          ? 30
          : e.liveFellBehindEdgeReseekDriftSec,
        liveFellBehindHardRefetchDriftSec: r("gkx")("7763")
          ? 60
          : e.liveFellBehindHardRefetchDriftSec,
        liveFellBehindPairedRefetchEnabled: r("gkx")("7763"),
        liveFellBehindWindowRefetchEnabled: r("gkx")("7763"),
        liveForceWorkerKickOnStallEnabled: r("gkx")("7763"),
        liveGapSkipStuckAtRangeEndToleranceSec: r("gkx")("7763")
          ? 1.5
          : e.liveGapSkipStuckAtRangeEndToleranceSec,
        liveGapSkipStuckSeekRecoveryMs: r("gkx")("7763")
          ? 2e3
          : e.liveGapSkipStuckSeekRecoveryMs,
        liveLookbackBufferSec: r("gkx")("7763") ? 30 : e.liveLookbackBufferSec,
        liveNoProgressWatchdogThresholdSec: r("gkx")("7763")
          ? 8
          : e.liveNoProgressWatchdogThresholdSec,
        liveObserveAndActMinDelayMs: r("gkx")("7763")
          ? 4
          : e.liveObserveAndActMinDelayMs,
        livePlayheadStallRecoveryEnabled: r("gkx")("7763"),
        liveProactiveEdgeReseekEnabled: r("gkx")("7763"),
        liveProactiveRefetchDriftSec: r("gkx")("7763")
          ? 24
          : e.liveProactiveRefetchDriftSec,
        liveStallRecoveryEnabled: r("gkx")("7763"),
        liveStallReseekToEdgeAfterKicks: r("gkx")("7763")
          ? 3
          : e.liveStallReseekToEdgeAfterKicks,
        logStallDetailsAsPlayerWarning: r("gkx")("20111"),
        maxConcurrentPrefetchTasks: r("gkx")("10899")
          ? 2
          : r("gkx")("10183")
            ? 5
            : -1,
        mediaElementSkipUpdateIfFullyBufferedAndOnlyPlayheadMoving:
          r("gkx")("19158"),
        mediaSinkType: n("cr:3020").mediaSinkType,
        optimizeAutoDisposeTraversal: r("gkx")("21151") || r("gkx")("17440"),
        playheadPredictIntervalMs:
          r("gkx")("12741") || r("gkx")("17440") ? 3e3 : 0,
        playheadStallRecoveryEnabled: r("gkx")("15564"),
        preferredMediaSourceAPIType: r("gkx")("7137")
          ? "ManagedMediaSource"
          : "MediaSource",
        prefetchResolutionThreshold: r("gkx")("16054")
          ? 1080
          : e.prefetchResolutionThreshold,
        qplEnabled: r("gkx")("19263"),
        reopenEndedMediaSourceOnRepresentationSwitch: r("gkx")("21728"),
        resetTargetRepresentationWhenItGetsBlocked: r("gkx")("19128"),
        retryShorterForUnrecoverableHTTP: r("gkx")("173"),
        segmentStallRecoveryEnabled: r("gkx")("4177"),
        sidxDisableShiftingMediaTimeRangesByEarliestPresentationTime:
          r("gkx")("19380"),
        skipPlayheadRestoreOnMediaElementChange: r("gkx")("17440"),
        trackScrollPosition: r("gkx")("20629"),
        useExponentialBackoffRetryStrategy: r("gkx")("8495"),
      });
    }
    var S = 0;
    function R(e, t, n) {
      return e.mediaSinkType !== "EMSS"
        ? n
        : babelHelpers.extends({}, n, {
            setPlayheadPosition: function (r) {
              o(
                "VideoPlayerNextgendashRedundantPlayheadWrite",
              ).isRedundantPlayheadWrite(t, r) || n.setPlayheadPosition(r);
            },
          });
    }
    function L(e) {
      return function (t) {
        var r = t.url;
        return new (u || (u = n("Promise")))(function (t) {
          e(r)
            .then(function (e) {
              var n = e.reason,
                r = e.refreshedUrl;
              r != null
                ? t({ ok: !0, refreshedUrl: r })
                : t({ failureReason: n != null ? n : "unspecified", ok: !1 });
            })
            .catch(function (e) {
              throw e;
            });
        });
      };
    }
    function E(e) {
      var t,
        a = e.initialProps,
        i = a.coreVideoPlayerMetaData.videoFBID,
        l = String(a.loggingMetaData.instanceKey),
        s = (t = a.coreVideoPlayerMetaData.subOrigin) != null ? t : void 0,
        u = S++,
        c = "#" + u + "::" + l,
        _ = a.coreVideoPlayerMetaData.initialRepresentationIds,
        f = !1,
        g = null,
        h = o(
          "VideoPlayerNextgendashWorkQueue",
        ).createVideoPlayerNextgendashWorkQueue(n("cr:3020").scheduleToRun),
        C = n("cr:9718") == null ? void 0 : n("cr:9718")(c, h),
        b = n("cr:11335") ? new (n("cr:11335"))() : null,
        E = { current: null },
        I = { current: null },
        T = { current: null },
        D = [],
        x = null,
        $ = null,
        P = v(),
        N = a.coreVideoPlayerMetaData.isVideoBroadcast;
      ((P.disableZeroPlaybackRateWhileBuffering =
        o(
          "VideoPlayerNextgendashEngineConfig",
        ).isVideoPlayerNextgendashVODOnlyConfigEnabled(
          P.disableZeroPlaybackRateWhileBuffering,
          N,
        ) || P.mediaSinkType === "EMSS"),
        P.mediaSinkType === "EMSS" &&
          ((P.disableBufferGapSkipping = !0),
          (P.enableDisposalResourceCleanup = !0)),
        (P.sidxDisableShiftingMediaTimeRangesByEarliestPresentationTime = o(
          "VideoPlayerNextgendashEngineConfig",
        ).isVideoPlayerNextgendashVODOnlyConfigEnabled(
          P.sidxDisableShiftingMediaTimeRangesByEarliestPresentationTime,
          N,
        )),
        (P.startTimestampSec = a.coreVideoPlayerMetaData.startTimestamp));
      var M = {
          config: P,
          host: n("cr:3020"),
          logging: o(
            "VideoPlayerNextgendashLoggingAPI",
          ).combineLoggingDestinations([
            P.qplEnabled
              ? o(
                  "VideoPlayerNextgendashLoggingDestinationQPLFromEngine",
                ).createVideoPlayerNextgendashLoggingDestinationQPLFromEngine(
                  E,
                  I,
                )
              : void 0,
            o(
              "VideoPlayerNextgendashLoggingDestinationEngineWarning",
            ).createVideoPlayerNextgendashLoggingDestinationEngineWarning(
              function (e) {
                (w &&
                  w.point(
                    "warning",
                    o("VideoPlayerNextgendashQPL").qplAnnotationsForError(
                      k(M, e),
                    ),
                  ),
                  T.current != null
                    ? T.current.dispatch({
                        payload: { warningError: e },
                        type: "implementation_warning",
                      })
                    : D.push(e));
              },
            ),
            n("cr:9712"),
            C == null ? void 0 : C.loggingDestination,
            b == null ? void 0 : b.loggingDestination,
            o(
              "VideoPlayerNextgendashLoggingDestinationODSFromEngine",
            ).createVideoPlayerNextgendashLoggingDestinationODSFromEngine(),
            o(
              "VideoPlayerNextgendashLoggingDestinationFBLogger",
            ).createVideoPlayerNextgendashLoggingDestinationFBLogger(),
          ]),
          loggingState: {
            logstampPrefix: c,
            logstampTint: (u % 5) / 5,
            metadata: babelHelpers.extends({}, p, {
              nextgendashCreatedAt: n("cr:3020").clock(),
              nextgendashInstanceIndex: u,
              playerInstanceKey: l,
              playerSubOrigin: s,
              videoFBID: i,
            }),
          },
          workQueue: h,
        },
        w = M.config.qplEnabled
          ? o("VideoPlayerNextgendashQPL").qplStartPlayingApi(M)
          : null;
      ((I.current = w), w == null || w.start());
      var A = a.coreVideoPlayerMetaData.expiredVideoUrlRefreshHandler,
        F = null,
        O = null,
        B = null,
        W = o(
          "VideoPlayerNextgendashMain",
        ).VideoPlayerNextgendashMainSM.createSM(
          "VideoPlayerNextgendashMain",
          M,
          null,
          {
            abrConfig: o(
              "VideoPlayerNextgendashEngineConfig",
            ).createVideoPlayerNextgendashABRConfig({
              videoPreferredMinimumSmallestDimension: y(a.minQualityPreference),
            }),
            audioOnly: a.coreVideoPlayerMetaData.audioOnly === !0,
            initialExpiredVideoUrlRefreshHandlerState:
              A != null ? { handler: L(A), identity: A } : null,
            initialMediaVariantIfLangExistsInManifest:
              a.initialAudioUserPreferredLanguage != null
                ? {
                    audioLang: a.initialAudioUserPreferredLanguage,
                    audioRole: "dub",
                    videoLang: M.config.enableLipSync
                      ? a.initialAudioUserPreferredLanguage
                      : null,
                    videoRole: M.config.enableLipSync ? "dub" : null,
                  }
                : null,
            nextgendashInstanceIndex: u,
            onBufferingChanged: function (t) {
              var e = t.changeDirection,
                n = t.domEventAdjustedClock,
                r = t.isInitial;
              (F != null && (F(), (F = null)),
                e === "started"
                  ? ((F = w == null ? void 0 : w.subspan("buffering")),
                    j.dispatch({
                      payload: {
                        bufferingType: r ? "start/unpause" : "in_play",
                        disableZeroPlaybackRate: M.config
                          .disableZeroPlaybackRateWhileBuffering
                          ? !0
                          : void 0,
                      },
                      type: "buffering_begin_requested",
                    }))
                  : e === "stopped" &&
                    j.dispatch({
                      payload: { domEventPerfTimestamp: n.perfMs },
                      type: "buffering_end_requested",
                    }));
            },
            onError: function (t) {
              (w &&
                w.point(
                  "error",
                  o("VideoPlayerNextgendashQPL").qplAnnotationsForError(t),
                ),
                g == null && (g = t),
                C
                  ? (C.setHalted(t.name),
                    h.enqueueWork(function () {
                      z(t, "comet_nextgendash_main_error");
                    }))
                  : z(t, "comet_nextgendash_main_error"));
            },
            onManifestUpdated: function () {
              (w == null || w.point("manifest_updated"),
                j.dispatch({
                  payload: {
                    selectedVideoQuality: U.getUserSelectedVideoQuality(),
                  },
                  type: "implementation_engine_qualities_changed",
                }));
            },
            onMediaSourceAttachedChanged: function (t, n) {
              if (
                (O != null && (O(), (O = null)),
                n && (O = w == null ? void 0 : w.subspan("media_source")),
                !r("gkx")("18183"))
              ) {
                var e,
                  i =
                    (e = W.state.mediaElement) == null
                      ? void 0
                      : e.state.mediaElement,
                  l =
                    i != null
                      ? o(
                          "VideoPlayerNextgendashHostAPI",
                        ).unopaqueVideoPlayerNextgendashHostMediaElement(i)
                      : null;
                (l == null ||
                  K.current == null ||
                  l !== K.current.getUnderlyingVideoElement()) &&
                  (K.current =
                    l != null
                      ? R(
                          P,
                          l,
                          o(
                            "VideoPlayerImplementationEngineVideoElementAPI",
                          ).createVideoPlayerImplementationEngineVideoElementAPI(
                            l,
                          ),
                        )
                      : null);
              }
              if (n && !f) {
                ((f = !0),
                  j.dispatch({
                    payload: {
                      selectedVideoQuality: U.getUserSelectedVideoQuality(),
                    },
                    type: "implementation_engine_initialized",
                  }));
                {
                  var s = a.coreVideoPlayerMetaData.startTimestamp;
                  s > 0 &&
                    j.dispatch({
                      payload: { seekTargetPosition: s },
                      type: "controller_seek_requested",
                    });
                }
              }
            },
            onSendHaltedToWorkerChanged:
              C == null ? void 0 : C.onSendHaltedToWorkerChanged,
            onVideoRepresentationChanged: function (t, n) {
              (w &&
                w.point("video_representation_changed", {
                  string: {
                    fromVideoRepresentationId: String(t),
                    toVideoRepresentationId: String(n),
                  },
                }),
                j.dispatch({ payload: {}, type: "representation_changed" }));
            },
            playerInstanceKey: l,
            playerSubOrigin: s,
            playerViewportDimensionsInitial: a.dimensions,
            prefetchResultInitial:
              _ != null && _.length > 0
                ? {
                    prefetchedRepresentationIds: _,
                    prefetchStartedAt: M.host.clock(),
                  }
                : null,
            videoFBID: i,
            workerPortFactories: m,
            workerTypeInitial: d,
          },
        );
      E.current = W;
      function q() {
        var e;
        return (e = K.current) != null ? e : null;
      }
      var U = o(
          "VideoPlayerNextgendashEngineExtrasAPI",
        ).createVideoPlayerNextgendashEngineExtrasAPI({
          getVideoElementAPI: q,
          mainSm: W,
        }),
        V = null,
        H = o(
          "VideoPlayerImplementationEngineAPI",
        ).createVideoPlayerImplementationEngine({
          createDebugAPI: function (t) {
            var e = t.getVideoElementAPI,
              n = t.loggerToVPL;
            return b == null
              ? void 0
              : b.createDebugAPI({
                  engineExtrasAPI: U,
                  getConfig: function () {
                    return a.experimentationConfig;
                  },
                  getVideoElementAPI: e,
                  loggerToVPL: n,
                  mainSm: W,
                });
          },
          createVideoPlayerError: function (t, n) {
            var e = o("nextgendasherr").nextgendasherrFromNextgendasherr(t);
            return e != null
              ? o(
                  "VideoPlayerNextgendashEngineErrors",
                ).createVideoPlayerErrorFromNextgendashEngine(M, e, n)
              : o(
                  "VideoPlayerImplementationErrors",
                ).createVideoPlayerErrorFromGenericError(
                  "VideoPlayerFatalCaughtByNextgendashEngine",
                  t,
                  n,
                );
          },
          destroyEngineParts: function () {
            e();
            function e() {
              if ((w == null || w.point("destroy"), r("gkx")("18183"))) {
                var e, t;
                (w == null || w.endWithAbort(),
                  (e = x) == null || e.remove(),
                  (x = null),
                  (t = $) == null || t.remove(),
                  ($ = null));
              }
              (W.sendEvent({ reason: "destroyEngineParts", type: "__dispose" }),
                C == null || C.disconnect());
            }
          },
          engineCreateArgs: e,
          engineExtrasAPI: U,
          engineMetadata: {
            isAbrEnabled: !0,
            playerInstanceKey: a.loggingMetaData.instanceKey,
            playerVersion:
              P.mediaSinkType === "EMSS"
                ? "comet_nextgendash_wasm"
                : "comet_nextgendash",
            streamingFormat: "dash",
          },
          handleVideoElementChanged: function (t, n) {
            (B != null && (B(), (B = null)),
              t != null
                ? ((B = w == null ? void 0 : w.subspan("video_element")),
                  V != null && (r("clearTimeout")(V), (V = null)),
                  W.sendEvent({
                    mediaElement: o(
                      "VideoPlayerNextgendashHostAPI",
                    ).opaqueVideoPlayerNextgendashHostMediaElement(t),
                    type: "update_media_element",
                  }))
                : M.config.enableMediaElementUnmountNotification &&
                  W.sendEvent({
                    mediaElement: null,
                    type: "update_media_element",
                  }));
          },
          handleVideoInfoChange: function (t) {
            if (
              W.state.state !== "__null__" &&
              W.state.state !== "__disposed__"
            ) {
              var e,
                n = W.state;
              (t.dimensions.height !== n.playerViewportDimensions.height ||
                t.dimensions.width !== n.playerViewportDimensions.width) &&
                W.sendEvent({
                  playerViewportDimensions: t.dimensions,
                  type: "update_player_viewport_dimensions",
                });
              var r = n.dashManifestParsed.state,
                o = t.coreVideoPlayerMetaData.expiredVideoUrlRefreshHandler,
                a =
                  (e = r.expiredVideoUrlRefreshHandlerState) == null
                    ? void 0
                    : e.identity;
              (r.state !== "__null__" &&
                r.state !== "__disposed__" &&
                (a == null ? o != null : a !== o) &&
                W.sendEvent({
                  expiredVideoUrlRefreshHandlerState:
                    o != null ? { handler: L(o), identity: o } : null,
                  type: "update_expired_video_url_refresh_handler",
                }),
                P.trackScrollPosition &&
                  t.videoPlayerScrollPositionAPI != null &&
                  n.scrollPositionAPI !== t.videoPlayerScrollPositionAPI &&
                  W.sendEvent({
                    scrollPositionAPI: t.videoPlayerScrollPositionAPI,
                    type: "update_scroll_position_api",
                  }));
            }
            return !1;
          },
        }),
        G = H.engine,
        z = H.handleFatalImplementationError,
        j = H.machine,
        K = H.videoElementAPIRef;
      T.current = j;
      for (var Q of D)
        j.dispatch({
          payload: { warningError: Q },
          type: "implementation_warning",
        });
      if (
        ((D.length = 0),
        (a.manifest != null || a.manifestUrl != null) &&
          W.sendEvent({
            dashManifestUrl: a.manifestUrl,
            dashManifestXmlString: a.manifest,
            type: "update_dash_manifest",
          }),
        w)
      ) {
        var X = void 0,
          Y = null,
          J = null,
          Z = function () {
            var e = j.getCurrentState().controlledState,
              t = e.error,
              n = e.playbackState;
            if (n !== X) {
              if (
                (Y != null &&
                  (t != null || n !== "paused") &&
                  (Y(), (Y = null)),
                J != null &&
                  (t != null || n !== "stalling") &&
                  (J(), (J = null)),
                t != null)
              ) {
                var r;
                (w.endWithError(g != null ? g : k(M, t)),
                  (r = x) == null || r.remove(),
                  (x = null));
              } else if (n === "playing") {
                var o;
                (w.endWithSuccess(), (o = x) == null || o.remove(), (x = null));
              } else
                n === "paused"
                  ? (Y = w.subspan("paused"))
                  : n === "stalling" && (J = w.subspan("stalling"));
              X = n;
            }
          };
        ((x = G.implementationController.subscribe(Z)), Z());
      }
      if (M.config.logStallDetailsAsPlayerWarning) {
        var ee = void 0,
          te = null,
          ne = function () {
            var e = j.getCurrentState().controlledState,
              t = e.error,
              n = e.playbackState;
            if (n !== ee) {
              if (
                ((t != null || n !== "stalling") &&
                  te != null &&
                  (r("clearTimeout")(te), (te = null)),
                t != null)
              ) {
                var o;
                ((o = $) == null || o.remove(), ($ = null));
              } else if (n === "stalling" && te == null) {
                var a = M.host.clock(),
                  i = 200;
                te = r("setTimeout")(function () {
                  W.sendEvent({
                    stallStartClock: a,
                    type: "debug_log_stall_details",
                  });
                }, i);
              }
              ee = n;
            }
          };
        (($ = G.implementationController.subscribe(ne)), ne());
      }
      return (w == null || w.point("engine_created"), G);
    }
    function k(e, t) {
      return o("nextgendasherr").nextgendasherr.apply(
        void 0,
        [e, t.errorName, t.errorMessageFormat].concat(t.errorMessageParams),
      );
    }
    ((l.preloadVideoPlayerNextgendashWorker = _),
      (l.prefetchUsingNextgendash = C),
      (l.releasePrefetchUsingNextgendash = b),
      (l.createVideoPlayerNextgendashEngine = E));
  },
  98,
);
