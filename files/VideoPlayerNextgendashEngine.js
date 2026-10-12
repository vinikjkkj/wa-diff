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
        dataAppendOperationMinBytes: r("gkx")("5751")
          ? null
          : e.dataAppendOperationMinBytes,
        debugLog: r("gkx")("17339"),
        debugOverlay: r("gkx")("26608"),
        debugViz: r("gkx")("17340"),
        disableFallbackFromRealWorkerAfterLinked: !0,
        disablePlaybackLoopSchedulingOnTimer: r("gkx")("5795"),
        disableZeroPlaybackRateWhileBuffering: r("gkx")("4185"),
        eagerResyncOnMediaElementAttach: r("gkx")("6091"),
        enableAdaptiveConcurrentSegmentFetching: r("gkx")("8486"),
        enableBandwidthDiagnosticsFallback: r("gkx")("23799") || t,
        enableCdnUrlRefresh: r("gkx")("6370"),
        enableCombinedInitSidxFetch: r("gkx")("6701"),
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
        enableQuotaExceededRecovery: r("gkx")("6862"),
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
        reopenEndedMediaSourceOnRepresentationSwitch: r("gkx")("8280"),
        resetTargetRepresentationWhenItGetsBlocked: r("gkx")("8531"),
        retryShorterForUnrecoverableHTTP: r("gkx")("10018"),
        segmentStallRecoveryEnabled: r("gkx")("10027"),
        sidxDisableShiftingMediaTimeRangesByEarliestPresentationTime:
          r("gkx")("19380"),
        skipPlayheadRestoreOnMediaElementChange: r("gkx")("17440"),
        trackScrollPosition: r("gkx")("20629"),
        useExponentialBackoffRetryStrategy: r("gkx")("11270"),
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
        (N.sidxDisableShiftingMediaTimeRangesByEarliestPresentationTime = o(
          "VideoPlayerNextgendashEngineConfig",
        ).isVideoPlayerNextgendashVODOnlyConfigEnabled(
          N.sidxDisableShiftingMediaTimeRangesByEarliestPresentationTime,
          M,
        )),
        (N.startTimestampSec = a.coreVideoPlayerMetaData.startTimestamp));
      var w = {
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
                (A &&
                  A.point(
                    "warning",
                    o("VideoPlayerNextgendashQPL").qplAnnotationsForError(
                      T(w, e),
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
        A = w.config.qplEnabled
          ? o("VideoPlayerNextgendashQPL").qplStartPlayingApi(w)
          : null;
      ((S.current = A), A == null || A.start());
      var F = a.coreVideoPlayerMetaData.expiredVideoUrlRefreshHandler,
        O = null,
        B = null,
        W = null,
        q = o(
          "VideoPlayerNextgendashMain",
        ).VideoPlayerNextgendashMainSM.createSM(
          "VideoPlayerNextgendashMain",
          w,
          null,
          {
            abrConfig: o(
              "VideoPlayerNextgendashEngineConfig",
            ).createVideoPlayerNextgendashABRConfig({
              videoPreferredMinimumSmallestDimension: C(a.minQualityPreference),
            }),
            audioOnly: a.coreVideoPlayerMetaData.audioOnly === !0,
            initialExpiredVideoUrlRefreshHandlerState:
              F != null ? { handler: k(F), identity: F } : null,
            initialMediaVariantIfLangExistsInManifest:
              a.initialAudioUserPreferredLanguage != null
                ? {
                    audioLang: a.initialAudioUserPreferredLanguage,
                    audioRole: "dub",
                    videoLang: w.config.enableLipSync
                      ? a.initialAudioUserPreferredLanguage
                      : null,
                    videoRole: w.config.enableLipSync ? "dub" : null,
                  }
                : null,
            nextgendashInstanceIndex: u,
            onBufferingChanged: function (t) {
              var e = t.changeDirection,
                n = t.domEventAdjustedClock,
                r = t.isInitial;
              (O != null && (O(), (O = null)),
                e === "started"
                  ? ((O = A == null ? void 0 : A.subspan("buffering")),
                    K.dispatch({
                      payload: {
                        bufferingType: r ? "start/unpause" : "in_play",
                        disableZeroPlaybackRate: w.config
                          .disableZeroPlaybackRateWhileBuffering
                          ? !0
                          : void 0,
                      },
                      type: "buffering_begin_requested",
                    }))
                  : e === "stopped" &&
                    K.dispatch({
                      payload: { domEventPerfTimestamp: n.perfMs },
                      type: "buffering_end_requested",
                    }));
            },
            onError: function (t) {
              (A &&
                A.point(
                  "error",
                  o("VideoPlayerNextgendashQPL").qplAnnotationsForError(t),
                ),
                g == null && (g = t),
                y
                  ? (y.setHalted(t.name),
                    h.enqueueWork(function () {
                      j(t, "comet_nextgendash_main_error");
                    }))
                  : j(t, "comet_nextgendash_main_error"));
            },
            onManifestUpdated: function () {
              (A == null || A.point("manifest_updated"),
                K.dispatch({
                  payload: {
                    selectedVideoQuality: V.getUserSelectedVideoQuality(),
                  },
                  type: "implementation_engine_qualities_changed",
                }));
            },
            onMediaSourceAttachedChanged: function (t, n) {
              if (
                (B != null && (B(), (B = null)),
                n && (B = A == null ? void 0 : A.subspan("media_source")),
                !r("gkx")("11322"))
              ) {
                var e,
                  i =
                    (e = q.state.mediaElement) == null
                      ? void 0
                      : e.state.mediaElement,
                  l =
                    i != null
                      ? o(
                          "VideoPlayerNextgendashHostAPI",
                        ).unopaqueVideoPlayerNextgendashHostMediaElement(i)
                      : null;
                (l == null ||
                  Q.current == null ||
                  l !== Q.current.getUnderlyingVideoElement()) &&
                  (Q.current =
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
                  K.dispatch({
                    payload: {
                      selectedVideoQuality: V.getUserSelectedVideoQuality(),
                    },
                    type: "implementation_engine_initialized",
                  }));
                {
                  var s = a.coreVideoPlayerMetaData.startTimestamp;
                  s > 0 &&
                    K.dispatch({
                      payload: { seekTargetPosition: s },
                      type: "controller_seek_requested",
                    });
                }
              }
            },
            onSendHaltedToWorkerChanged:
              y == null ? void 0 : y.onSendHaltedToWorkerChanged,
            onVideoRepresentationChanged: function (t, n) {
              (A &&
                A.point("video_representation_changed", {
                  string: {
                    fromVideoRepresentationId: String(t),
                    toVideoRepresentationId: String(n),
                  },
                }),
                K.dispatch({ payload: {}, type: "representation_changed" }));
            },
            playerInstanceKey: l,
            playerSubOrigin: s,
            playerViewportDimensionsInitial: a.dimensions,
            prefetchResultInitial:
              _ != null && _.length > 0
                ? {
                    prefetchedRepresentationIds: _,
                    prefetchStartedAt: w.host.clock(),
                  }
                : null,
            videoFBID: i,
            workerPortFactories: m,
            workerTypeInitial: d,
          },
        );
      v.current = q;
      function U() {
        var e;
        return (e = Q.current) != null ? e : null;
      }
      var V = o(
          "VideoPlayerNextgendashEngineExtrasAPI",
        ).createVideoPlayerNextgendashEngineExtrasAPI({
          getVideoElementAPI: U,
          mainSm: q,
        }),
        H = null,
        G = o(
          "VideoPlayerImplementationEngineAPI",
        ).createVideoPlayerImplementationEngine({
          createDebugAPI: function (t) {
            var e = t.getVideoElementAPI,
              n = t.loggerToVPL;
            return b == null
              ? void 0
              : b.createDebugAPI({
                  engineExtrasAPI: V,
                  getConfig: function () {
                    return a.experimentationConfig;
                  },
                  getVideoElementAPI: e,
                  loggerToVPL: n,
                  mainSm: q,
                });
          },
          createVideoPlayerError: function (t, n) {
            var e = o("nextgendasherr").nextgendasherrFromNextgendasherr(t);
            return e != null
              ? o(
                  "VideoPlayerNextgendashEngineErrors",
                ).createVideoPlayerErrorFromNextgendashEngine(w, e, n)
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
                (A == null || A.point("destroy"),
                P == null || P(),
                (P = null),
                r("gkx")("11322"))
              ) {
                var e, t;
                (A == null || A.endWithAbort(),
                  (e = x) == null || e.remove(),
                  (x = null),
                  (t = $) == null || t.remove(),
                  ($ = null));
              }
              (q.sendEvent({ reason: "destroyEngineParts", type: "__dispose" }),
                y == null || y.disconnect());
            }
          },
          engineCreateArgs: e,
          engineExtrasAPI: V,
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
            (W != null && (W(), (W = null)),
              t != null
                ? ((W = A == null ? void 0 : A.subspan("video_element")),
                  H != null && (r("clearTimeout")(H), (H = null)),
                  q.sendEvent({
                    mediaElement: o(
                      "VideoPlayerNextgendashHostAPI",
                    ).opaqueVideoPlayerNextgendashHostMediaElement(t),
                    type: "update_media_element",
                  }))
                : w.config.enableMediaElementUnmountNotification &&
                  q.sendEvent({
                    mediaElement: null,
                    type: "update_media_element",
                  }));
          },
          handleVideoInfoChange: function (t) {
            if (
              q.state.state !== "__null__" &&
              q.state.state !== "__disposed__"
            ) {
              var e,
                n = q.state;
              (t.dimensions.height !== n.playerViewportDimensions.height ||
                t.dimensions.width !== n.playerViewportDimensions.width) &&
                q.sendEvent({
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
                q.sendEvent({
                  expiredVideoUrlRefreshHandlerState:
                    o != null ? { handler: k(o), identity: o } : null,
                  type: "update_expired_video_url_refresh_handler",
                }),
                N.trackScrollPosition &&
                  t.videoPlayerScrollPositionAPI != null &&
                  n.scrollPositionAPI !== t.videoPlayerScrollPositionAPI &&
                  q.sendEvent({
                    scrollPositionAPI: t.videoPlayerScrollPositionAPI,
                    type: "update_scroll_position_api",
                  }));
            }
            return !1;
          },
        }),
        z = G.engine,
        j = G.handleFatalImplementationError,
        K = G.machine,
        Q = G.videoElementAPIRef;
      I.current = K;
      for (var X of D)
        K.dispatch({
          payload: { warningError: X },
          type: "implementation_warning",
        });
      if (
        ((D.length = 0),
        (a.manifest != null || a.manifestUrl != null) &&
          q.sendEvent({
            dashManifestUrl: a.manifestUrl,
            dashManifestXmlString: a.manifest,
            type: "update_dash_manifest",
          }),
        A)
      ) {
        var Y = void 0,
          J = null,
          Z = null,
          ee = function () {
            var e = K.getCurrentState().controlledState,
              t = e.error,
              n = e.playbackState;
            if (n !== Y) {
              if (
                (J != null &&
                  (t != null || n !== "paused") &&
                  (J(), (J = null)),
                Z != null &&
                  (t != null || n !== "stalling") &&
                  (Z(), (Z = null)),
                t != null)
              ) {
                var r;
                (A.endWithError(g != null ? g : T(w, t)),
                  (r = x) == null || r.remove(),
                  (x = null));
              } else if (n === "playing") {
                var o;
                (A.endWithSuccess(), (o = x) == null || o.remove(), (x = null));
              } else
                n === "paused"
                  ? (J = A.subspan("paused"))
                  : n === "stalling" && (Z = A.subspan("stalling"));
              Y = n;
            }
          };
        ((x = z.implementationController.subscribe(ee)), ee());
      }
      if (w.config.logStallDetailsAsPlayerWarning) {
        var te = void 0,
          ne = null,
          re = function () {
            var e = K.getCurrentState().controlledState,
              t = e.error,
              n = e.playbackState;
            if (n !== te) {
              if (
                ((t != null || n !== "stalling") &&
                  ne != null &&
                  (r("clearTimeout")(ne), (ne = null)),
                t != null)
              ) {
                var o;
                ((o = $) == null || o.remove(), ($ = null));
              } else if (n === "stalling" && ne == null) {
                var a = w.host.clock(),
                  i = 200;
                ne = r("setTimeout")(function () {
                  q.sendEvent({
                    stallStartClock: a,
                    type: "debug_log_stall_details",
                  });
                }, i);
              }
              te = n;
            }
          };
        (($ = z.implementationController.subscribe(re)), re());
      }
      return (A == null || A.point("engine_created"), z);
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
