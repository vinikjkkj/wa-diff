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
    "VideoPlayerNextgendashSmartPlayerStaticSignals",
    "VideoPlayerNextgendashWebCodecsDimensions",
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
        workerEnvConfig: R(),
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
        t = n("cr:9718") == null ? void 0 : n("cr:9718")(g, e),
        r = R();
      return (
        o(
          "VideoPlayerNextgendashSmartPlayerStaticSignals",
        ).subscribeVideoPlayerNextgendashSmartPlayerStaticSignals(
          r,
          function () {},
        ),
        (f = o(
          "VideoPlayerNextgendashPrefetchConnection",
        ).createVideoPlayerNextgendashPrefetchConnection({
          config: r,
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
    function y() {
      return r("gkx")("26980");
    }
    function C(e) {
      return e == null && !y() && r("gkx")("16361")
        ? 540
        : e == null && r("gkx")("21918")
          ? 480
          : r("gkx")("2312")
            ? { "%future added value": 0, HD: 720, SD: 0, UHD: 1080, "": 0 }[
                e != null ? e : ""
              ]
            : 0;
    }
    function b(e) {
      h().prefetch(
        e,
        o(
          "VideoPlayerNextgendashEngineConfig",
        ).createVideoPlayerNextgendashABRConfig({
          videoPreferredMinimumSmallestDimension: C(null),
        }),
      );
    }
    function v(e) {
      h().releasePrefetchKey(e);
    }
    var S = 5e6;
    function R() {
      var e = o("VideoPlayerNextgendashEnvironment").createDefaultConfig(),
        t = y();
      return babelHelpers.extends({}, e, {
        bandwidthDiagnosticsFallbackDefaultEstimate: t ? S : null,
        blockDuplicatePrefetch: r("gkx")("25126"),
        bufferAheadTargetNoMediaElementSec: r("gkx")("26985")
          ? 4
          : e.bufferAheadTargetNoMediaElementSec,
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
        dataAppendOperationMinBytes: r("gkx")("16681")
          ? null
          : e.dataAppendOperationMinBytes,
        debugLog: r("gkx")("17339"),
        debugOverlay: r("gkx")("26608"),
        debugViz: r("gkx")("17340"),
        disableFallbackFromRealWorkerAfterLinked: !0,
        disablePlaybackLoopSchedulingOnTimer: r("gkx")("16690"),
        disableZeroPlaybackRateWhileBuffering: r("gkx")("4185"),
        eagerResyncOnMediaElementAttach: r("gkx")("17429"),
        enableAdaptiveConcurrentSegmentFetching: r("gkx")("8486"),
        enableBandwidthDiagnosticsFallback: r("gkx")("23799") || t,
        enableCdnUrlRefresh: r("gkx")("17628"),
        enableCombinedInitSidxFetch: r("gkx")("17649"),
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
        enableQuotaExceededRecovery: r("gkx")("17813"),
        enableQuotaExceededRecoveryForCompositeErrors: r("gkx")("15535"),
        enableSkipRecoveryOnDeliberateDetach: r("gkx")("26845"),
        enableSplitAbrEvalSwitchIntervals: r("gkx")("18082"),
        enableStableAbrEvaluationCooldown: r("gkx")("12312"),
        enableStreamReaderFailureRecovery: r("gkx")("12428"),
        enableSuppressIdleTransitions: r("gkx")("7814"),
        enableTasosBwe: r("gkx")("1093"),
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
        reopenEndedMediaSourceOnRepresentationSwitch: r("gkx")("18169"),
        resetTargetRepresentationWhenItGetsBlocked: r("gkx")("18461"),
        retryShorterForUnrecoverableHTTP: r("gkx")("18768"),
        segmentStallRecoveryEnabled: r("gkx")("19141"),
        sidxDisableShiftingMediaTimeRangesByEarliestPresentationTime:
          r("gkx")("19380"),
        skipPlayheadRestoreOnMediaElementChange: r("gkx")("17440"),
        trackScrollPosition: r("gkx")("20629"),
        useExponentialBackoffRetryStrategy: r("gkx")("19401"),
        webCodecsVideoInWorker: r("gkx")("12553"),
      });
    }
    var L = 0;
    function E(e, t, n) {
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
    function k(e) {
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
    function I(e) {
      var t,
        a = e.initialProps,
        i = a.coreVideoPlayerMetaData.videoFBID,
        l = String(a.loggingMetaData.instanceKey),
        s = (t = a.coreVideoPlayerMetaData.subOrigin) != null ? t : void 0,
        u = L++,
        c = "#" + u + "::" + l,
        _ = a.coreVideoPlayerMetaData.initialRepresentationIds,
        f = !1,
        g = null,
        h = o(
          "VideoPlayerNextgendashWorkQueue",
        ).createVideoPlayerNextgendashWorkQueue(n("cr:3020").scheduleToRun),
        y = n("cr:9718") == null ? void 0 : n("cr:9718")(c, h),
        b = n("cr:11335") ? new (n("cr:11335"))() : null,
        v = { current: null },
        S = { current: null },
        I = { current: null },
        D = [],
        x = null,
        $ = null,
        P = null,
        N = R();
      P = o(
        "VideoPlayerNextgendashSmartPlayerStaticSignals",
      ).subscribeVideoPlayerNextgendashSmartPlayerStaticSignals(N, function () {
        var e = v.current;
        e != null &&
          e.state.state !== "__null__" &&
          e.state.state !== "__disposed__" &&
          e.sendEvent({ type: "update_config_from_env" });
      });
      var M = a.coreVideoPlayerMetaData.isVideoBroadcast;
      ((N.disableZeroPlaybackRateWhileBuffering =
        o(
          "VideoPlayerNextgendashEngineConfig",
        ).isVideoPlayerNextgendashVODOnlyConfigEnabled(
          N.disableZeroPlaybackRateWhileBuffering,
          M,
        ) || N.mediaSinkType === "EMSS"),
        N.mediaSinkType === "EMSS" &&
          ((N.disableBufferGapSkipping = !0),
          (N.enableDisposalResourceCleanup = !0),
          (N.bufferAheadTargetNoMediaElementSec = 9.9)),
        N.mediaSinkType === "WEBCODECS" &&
          ((N.disableZeroPlaybackRateWhileBuffering = !0),
          (N.bufferAheadTargetNoMediaElementSec = 9.9),
          (N.enableMediaElementUnmountNotification = !0),
          (N.enableSkipRecoveryOnDeliberateDetach = !0),
          (N.enableDisposalResourceCleanup = !0)));
      var w = N.mediaSinkType === "WEBCODECS",
        A = w
          ? o(
              "VideoPlayerNextgendashWebCodecsDimensions",
            ).capVideoPlayerNextgendashWebCodecsDimensions(a.dimensions)
          : a.dimensions;
      ((N.sidxDisableShiftingMediaTimeRangesByEarliestPresentationTime = o(
        "VideoPlayerNextgendashEngineConfig",
      ).isVideoPlayerNextgendashVODOnlyConfigEnabled(
        N.sidxDisableShiftingMediaTimeRangesByEarliestPresentationTime,
        M,
      )),
        (N.startTimestampSec = a.coreVideoPlayerMetaData.startTimestamp));
      var F = {
          config: N,
          host: n("cr:3020"),
          logging: o(
            "VideoPlayerNextgendashLoggingAPI",
          ).combineLoggingDestinations([
            N.qplEnabled
              ? o(
                  "VideoPlayerNextgendashLoggingDestinationQPLFromEngine",
                ).createVideoPlayerNextgendashLoggingDestinationQPLFromEngine(
                  v,
                  S,
                )
              : void 0,
            o(
              "VideoPlayerNextgendashLoggingDestinationEngineWarning",
            ).createVideoPlayerNextgendashLoggingDestinationEngineWarning(
              function (e) {
                (O &&
                  O.point(
                    "warning",
                    o("VideoPlayerNextgendashQPL").qplAnnotationsForError(
                      T(F, e),
                    ),
                  ),
                  I.current != null
                    ? I.current.dispatch({
                        payload: { warningError: e },
                        type: "implementation_warning",
                      })
                    : D.push(e));
              },
            ),
            n("cr:9712"),
            y == null ? void 0 : y.loggingDestination,
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
        O = F.config.qplEnabled
          ? o("VideoPlayerNextgendashQPL").qplStartPlayingApi(F)
          : null;
      ((S.current = O), O == null || O.start());
      var B = a.coreVideoPlayerMetaData.expiredVideoUrlRefreshHandler,
        W = null,
        q = null,
        U = null,
        V = o(
          "VideoPlayerNextgendashMain",
        ).VideoPlayerNextgendashMainSM.createSM(
          "VideoPlayerNextgendashMain",
          F,
          null,
          {
            abrConfig: o(
              "VideoPlayerNextgendashEngineConfig",
            ).createVideoPlayerNextgendashABRConfig({
              videoPreferredMinimumSmallestDimension: C(a.minQualityPreference),
            }),
            audioOnly: a.coreVideoPlayerMetaData.audioOnly === !0,
            initialExpiredVideoUrlRefreshHandlerState:
              B != null ? { handler: k(B), identity: B } : null,
            initialMediaVariantIfLangExistsInManifest:
              a.initialAudioUserPreferredLanguage != null
                ? {
                    audioLang: a.initialAudioUserPreferredLanguage,
                    audioRole: "dub",
                    videoLang: F.config.enableLipSync
                      ? a.initialAudioUserPreferredLanguage
                      : null,
                    videoRole: F.config.enableLipSync ? "dub" : null,
                  }
                : null,
            nextgendashInstanceIndex: u,
            onBufferingChanged: function (t) {
              var e = t.changeDirection,
                n = t.domEventAdjustedClock,
                r = t.isInitial;
              (W != null && (W(), (W = null)),
                e === "started"
                  ? ((W = O == null ? void 0 : O.subspan("buffering")),
                    X.dispatch({
                      payload: {
                        bufferingType: r ? "start/unpause" : "in_play",
                        disableZeroPlaybackRate: F.config
                          .disableZeroPlaybackRateWhileBuffering
                          ? !0
                          : void 0,
                      },
                      type: "buffering_begin_requested",
                    }))
                  : e === "stopped" &&
                    X.dispatch({
                      payload: { domEventPerfTimestamp: n.perfMs },
                      type: "buffering_end_requested",
                    }));
            },
            onError: function (t) {
              (O &&
                O.point(
                  "error",
                  o("VideoPlayerNextgendashQPL").qplAnnotationsForError(t),
                ),
                g == null && (g = t),
                y
                  ? (y.setHalted(t.name),
                    h.enqueueWork(function () {
                      Q(t, "comet_nextgendash_main_error");
                    }))
                  : Q(t, "comet_nextgendash_main_error"));
            },
            onManifestUpdated: function () {
              (O == null || O.point("manifest_updated"),
                X.dispatch({
                  payload: {
                    selectedVideoQuality: G.getUserSelectedVideoQuality(),
                  },
                  type: "implementation_engine_qualities_changed",
                }));
            },
            onMediaSourceAttachedChanged: function (t, n) {
              if (
                (q != null && (q(), (q = null)),
                n && (q = O == null ? void 0 : O.subspan("media_source")),
                !r("gkx")("19514"))
              ) {
                var e,
                  i =
                    (e = V.state.mediaElement) == null
                      ? void 0
                      : e.state.mediaElement,
                  l =
                    i != null
                      ? o(
                          "VideoPlayerNextgendashHostAPI",
                        ).unopaqueVideoPlayerNextgendashHostMediaElement(i)
                      : null;
                (l == null ||
                  Y.current == null ||
                  l !== Y.current.getUnderlyingVideoElement()) &&
                  (Y.current =
                    l != null
                      ? E(
                          N,
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
                  X.dispatch({
                    payload: {
                      selectedVideoQuality: G.getUserSelectedVideoQuality(),
                    },
                    type: "implementation_engine_initialized",
                  }));
                {
                  var s = a.coreVideoPlayerMetaData.startTimestamp;
                  s > 0 &&
                    X.dispatch({
                      payload: { seekTargetPosition: s },
                      type: "controller_seek_requested",
                    });
                }
              }
            },
            onSendHaltedToWorkerChanged:
              y == null ? void 0 : y.onSendHaltedToWorkerChanged,
            onVideoRepresentationChanged: function (t, n) {
              (O &&
                O.point("video_representation_changed", {
                  string: {
                    fromVideoRepresentationId: String(t),
                    toVideoRepresentationId: String(n),
                  },
                }),
                X.dispatch({ payload: {}, type: "representation_changed" }));
            },
            playerInstanceKey: l,
            playerSubOrigin: s,
            playerViewportDimensionsInitial: A,
            prefetchResultInitial:
              _ != null && _.length > 0
                ? {
                    prefetchedRepresentationIds: _,
                    prefetchStartedAt: F.host.clock(),
                  }
                : null,
            videoFBID: i,
            workerPortFactories: m,
            workerTypeInitial: d,
          },
        );
      v.current = V;
      function H() {
        var e;
        return (e = Y.current) != null ? e : null;
      }
      var G = o(
          "VideoPlayerNextgendashEngineExtrasAPI",
        ).createVideoPlayerNextgendashEngineExtrasAPI({
          getVideoElementAPI: H,
          mainSm: V,
        }),
        z = null,
        j = o(
          "VideoPlayerImplementationEngineAPI",
        ).createVideoPlayerImplementationEngine({
          createDebugAPI: function (t) {
            var e = t.getVideoElementAPI,
              n = t.loggerToVPL;
            return b == null
              ? void 0
              : b.createDebugAPI({
                  engineExtrasAPI: G,
                  getConfig: function () {
                    return a.experimentationConfig;
                  },
                  getVideoElementAPI: e,
                  loggerToVPL: n,
                  mainSm: V,
                });
          },
          createVideoPlayerError: function (t, n) {
            var e = o("nextgendasherr").nextgendasherrFromNextgendasherr(t);
            return e != null
              ? o(
                  "VideoPlayerNextgendashEngineErrors",
                ).createVideoPlayerErrorFromNextgendashEngine(F, e, n)
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
              if (
                (O == null || O.point("destroy"),
                P == null || P(),
                (P = null),
                r("gkx")("19514"))
              ) {
                var e, t;
                (O == null || O.endWithAbort(),
                  (e = x) == null || e.remove(),
                  (x = null),
                  (t = $) == null || t.remove(),
                  ($ = null));
              }
              (V.sendEvent({ reason: "destroyEngineParts", type: "__dispose" }),
                y == null || y.disconnect());
            }
          },
          engineCreateArgs: e,
          engineExtrasAPI: G,
          engineMetadata: {
            isAbrEnabled: !0,
            playerInstanceKey: a.loggingMetaData.instanceKey,
            playerVersion:
              N.mediaSinkType === "EMSS"
                ? "comet_nextgendash_wasm"
                : "comet_nextgendash",
            streamingFormat: "dash",
          },
          handleVideoElementChanged: function (t, n) {
            (U != null && (U(), (U = null)),
              t != null
                ? ((U = O == null ? void 0 : O.subspan("video_element")),
                  z != null && (r("clearTimeout")(z), (z = null)),
                  V.sendEvent({
                    mediaElement: o(
                      "VideoPlayerNextgendashHostAPI",
                    ).opaqueVideoPlayerNextgendashHostMediaElement(t),
                    type: "update_media_element",
                  }))
                : F.config.enableMediaElementUnmountNotification &&
                  V.sendEvent({
                    mediaElement: null,
                    type: "update_media_element",
                  }));
          },
          handleVideoInfoChange: function (t) {
            if (
              V.state.state !== "__null__" &&
              V.state.state !== "__disposed__"
            ) {
              var e,
                n = V.state,
                r = w
                  ? o(
                      "VideoPlayerNextgendashWebCodecsDimensions",
                    ).capVideoPlayerNextgendashWebCodecsDimensions(t.dimensions)
                  : t.dimensions;
              (r.height !== n.playerViewportDimensions.height ||
                r.width !== n.playerViewportDimensions.width) &&
                V.sendEvent({
                  playerViewportDimensions: r,
                  type: "update_player_viewport_dimensions",
                });
              var a = n.dashManifestParsed.state,
                i = t.coreVideoPlayerMetaData.expiredVideoUrlRefreshHandler,
                l =
                  (e = a.expiredVideoUrlRefreshHandlerState) == null
                    ? void 0
                    : e.identity;
              (a.state !== "__null__" &&
                a.state !== "__disposed__" &&
                (l == null ? i != null : l !== i) &&
                V.sendEvent({
                  expiredVideoUrlRefreshHandlerState:
                    i != null ? { handler: k(i), identity: i } : null,
                  type: "update_expired_video_url_refresh_handler",
                }),
                N.trackScrollPosition &&
                  t.videoPlayerScrollPositionAPI != null &&
                  n.scrollPositionAPI !== t.videoPlayerScrollPositionAPI &&
                  V.sendEvent({
                    scrollPositionAPI: t.videoPlayerScrollPositionAPI,
                    type: "update_scroll_position_api",
                  }));
            }
            return !1;
          },
        }),
        K = j.engine,
        Q = j.handleFatalImplementationError,
        X = j.machine,
        Y = j.videoElementAPIRef;
      I.current = X;
      for (var J of D)
        X.dispatch({
          payload: { warningError: J },
          type: "implementation_warning",
        });
      if (
        ((D.length = 0),
        (a.manifest != null || a.manifestUrl != null) &&
          V.sendEvent({
            dashManifestUrl: a.manifestUrl,
            dashManifestXmlString: a.manifest,
            type: "update_dash_manifest",
          }),
        O)
      ) {
        var Z = void 0,
          ee = null,
          te = null,
          ne = function () {
            var e = X.getCurrentState().controlledState,
              t = e.error,
              n = e.playbackState;
            if (n !== Z) {
              if (
                (ee != null &&
                  (t != null || n !== "paused") &&
                  (ee(), (ee = null)),
                te != null &&
                  (t != null || n !== "stalling") &&
                  (te(), (te = null)),
                t != null)
              ) {
                var r;
                (O.endWithError(g != null ? g : T(F, t)),
                  (r = x) == null || r.remove(),
                  (x = null));
              } else if (n === "playing") {
                var o;
                (O.endWithSuccess(), (o = x) == null || o.remove(), (x = null));
              } else
                n === "paused"
                  ? (ee = O.subspan("paused"))
                  : n === "stalling" && (te = O.subspan("stalling"));
              Z = n;
            }
          };
        ((x = K.implementationController.subscribe(ne)), ne());
      }
      if (F.config.logStallDetailsAsPlayerWarning) {
        var re = void 0,
          oe = null,
          ae = function () {
            var e = X.getCurrentState().controlledState,
              t = e.error,
              n = e.playbackState;
            if (n !== re) {
              if (
                ((t != null || n !== "stalling") &&
                  oe != null &&
                  (r("clearTimeout")(oe), (oe = null)),
                t != null)
              ) {
                var o;
                ((o = $) == null || o.remove(), ($ = null));
              } else if (n === "stalling" && oe == null) {
                var a = F.host.clock(),
                  i = 200;
                oe = r("setTimeout")(function () {
                  V.sendEvent({
                    stallStartClock: a,
                    type: "debug_log_stall_details",
                  });
                }, i);
              }
              re = n;
            }
          };
        (($ = K.implementationController.subscribe(ae)), ae());
      }
      return (O == null || O.point("engine_created"), K);
    }
    function T(e, t) {
      return o("nextgendasherr").nextgendasherr.apply(
        void 0,
        [e, t.errorName, t.errorMessageFormat].concat(t.errorMessageParams),
      );
    }
    ((l.preloadVideoPlayerNextgendashWorker = _),
      (l.prefetchUsingNextgendash = b),
      (l.releasePrefetchUsingNextgendash = v),
      (l.createVideoPlayerNextgendashEngine = I));
  },
  98,
);
