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
    "VideoPlayerNextgendashWorkQueue",
    "clearTimeout",
    "cr:11335",
    "cr:37915",
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
        if (n("cr:37915").mediaSourceCanConstructInDedicatedWorker(e))
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
          host: { clock: n("cr:37915").clock },
          loggingState: { metadata: babelHelpers.extends({}, p) },
        },
        virtualWorkerHostAPI: n("cr:37915"),
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
        ).createVideoPlayerNextgendashWorkQueue(n("cr:37915").scheduleToRun),
        t = n("cr:9718") == null ? void 0 : n("cr:9718")(g, e);
      return (
        (f = o(
          "VideoPlayerNextgendashPrefetchConnection",
        ).createVideoPlayerNextgendashPrefetchConnection({
          config: v(),
          hostAPI: n("cr:37915"),
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
    function R(e) {
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
    function L(e) {
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
        ).createVideoPlayerNextgendashWorkQueue(n("cr:37915").scheduleToRun),
        C = n("cr:9718") == null ? void 0 : n("cr:9718")(c, h),
        b = n("cr:11335") ? new (n("cr:11335"))() : null,
        L = { current: null },
        k = { current: null },
        I = { current: null },
        T = [],
        D = null,
        x = null,
        $ = v(),
        P = a.coreVideoPlayerMetaData.isVideoBroadcast;
      (($.disableZeroPlaybackRateWhileBuffering = o(
        "VideoPlayerNextgendashEngineConfig",
      ).isVideoPlayerNextgendashVODOnlyConfigEnabled(
        $.disableZeroPlaybackRateWhileBuffering,
        P,
      )),
        ($.sidxDisableShiftingMediaTimeRangesByEarliestPresentationTime = o(
          "VideoPlayerNextgendashEngineConfig",
        ).isVideoPlayerNextgendashVODOnlyConfigEnabled(
          $.sidxDisableShiftingMediaTimeRangesByEarliestPresentationTime,
          P,
        )),
        ($.startTimestampSec = a.coreVideoPlayerMetaData.startTimestamp));
      var N = {
          config: $,
          host: n("cr:37915"),
          logging: o(
            "VideoPlayerNextgendashLoggingAPI",
          ).combineLoggingDestinations([
            $.qplEnabled
              ? o(
                  "VideoPlayerNextgendashLoggingDestinationQPLFromEngine",
                ).createVideoPlayerNextgendashLoggingDestinationQPLFromEngine(
                  L,
                  k,
                )
              : void 0,
            o(
              "VideoPlayerNextgendashLoggingDestinationEngineWarning",
            ).createVideoPlayerNextgendashLoggingDestinationEngineWarning(
              function (e) {
                (M &&
                  M.point(
                    "warning",
                    o("VideoPlayerNextgendashQPL").qplAnnotationsForError(
                      E(N, e),
                    ),
                  ),
                  I.current != null
                    ? I.current.dispatch({
                        payload: { warningError: e },
                        type: "implementation_warning",
                      })
                    : T.push(e));
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
              nextgendashCreatedAt: n("cr:37915").clock(),
              nextgendashInstanceIndex: u,
              playerInstanceKey: l,
              playerSubOrigin: s,
              videoFBID: i,
            }),
          },
          workQueue: h,
        },
        M = N.config.qplEnabled
          ? o("VideoPlayerNextgendashQPL").qplStartPlayingApi(N)
          : null;
      ((k.current = M), M == null || M.start());
      var w = a.coreVideoPlayerMetaData.expiredVideoUrlRefreshHandler,
        A = null,
        F = null,
        O = null,
        B = o(
          "VideoPlayerNextgendashMain",
        ).VideoPlayerNextgendashMainSM.createSM(
          "VideoPlayerNextgendashMain",
          N,
          null,
          {
            abrConfig: o(
              "VideoPlayerNextgendashEngineConfig",
            ).createVideoPlayerNextgendashABRConfig({
              videoPreferredMinimumSmallestDimension: y(a.minQualityPreference),
            }),
            audioOnly: a.coreVideoPlayerMetaData.audioOnly === !0,
            initialExpiredVideoUrlRefreshHandlerState:
              w != null ? { handler: R(w), identity: w } : null,
            initialMediaVariantIfLangExistsInManifest:
              a.initialAudioUserPreferredLanguage != null
                ? {
                    audioLang: a.initialAudioUserPreferredLanguage,
                    audioRole: "dub",
                    videoLang: N.config.enableLipSync
                      ? a.initialAudioUserPreferredLanguage
                      : null,
                    videoRole: N.config.enableLipSync ? "dub" : null,
                  }
                : null,
            nextgendashInstanceIndex: u,
            onBufferingChanged: function (t) {
              var e = t.changeDirection,
                n = t.domEventAdjustedClock,
                r = t.isInitial;
              (A != null && (A(), (A = null)),
                e === "started"
                  ? ((A = M == null ? void 0 : M.subspan("buffering")),
                    z.dispatch({
                      payload: {
                        bufferingType: r ? "start/unpause" : "in_play",
                        disableZeroPlaybackRate: N.config
                          .disableZeroPlaybackRateWhileBuffering
                          ? !0
                          : void 0,
                      },
                      type: "buffering_begin_requested",
                    }))
                  : e === "stopped" &&
                    z.dispatch({
                      payload: { domEventPerfTimestamp: n.perfMs },
                      type: "buffering_end_requested",
                    }));
            },
            onError: function (t) {
              (M &&
                M.point(
                  "error",
                  o("VideoPlayerNextgendashQPL").qplAnnotationsForError(t),
                ),
                g == null && (g = t),
                C
                  ? (C.setHalted(t.name),
                    h.enqueueWork(function () {
                      G(t, "comet_nextgendash_main_error");
                    }))
                  : G(t, "comet_nextgendash_main_error"));
            },
            onManifestUpdated: function () {
              (M == null || M.point("manifest_updated"),
                z.dispatch({
                  payload: {
                    selectedVideoQuality: q.getUserSelectedVideoQuality(),
                  },
                  type: "implementation_engine_qualities_changed",
                }));
            },
            onMediaSourceAttachedChanged: function (t, n) {
              if (
                (F != null && (F(), (F = null)),
                n && (F = M == null ? void 0 : M.subspan("media_source")),
                !r("gkx")("18183"))
              ) {
                var e,
                  i =
                    (e = B.state.mediaElement) == null
                      ? void 0
                      : e.state.mediaElement,
                  l =
                    i != null
                      ? o(
                          "VideoPlayerNextgendashHostAPI",
                        ).unopaqueVideoPlayerNextgendashHostMediaElement(i)
                      : null;
                (l == null ||
                  j.current == null ||
                  l !== j.current.getUnderlyingVideoElement()) &&
                  (j.current =
                    l != null
                      ? o(
                          "VideoPlayerImplementationEngineVideoElementAPI",
                        ).createVideoPlayerImplementationEngineVideoElementAPI(
                          l,
                        )
                      : null);
              }
              if (n && !f) {
                ((f = !0),
                  z.dispatch({
                    payload: {
                      selectedVideoQuality: q.getUserSelectedVideoQuality(),
                    },
                    type: "implementation_engine_initialized",
                  }));
                {
                  var s = a.coreVideoPlayerMetaData.startTimestamp;
                  s > 0 &&
                    z.dispatch({
                      payload: { seekTargetPosition: s },
                      type: "controller_seek_requested",
                    });
                }
              }
            },
            onSendHaltedToWorkerChanged:
              C == null ? void 0 : C.onSendHaltedToWorkerChanged,
            onVideoRepresentationChanged: function (t, n) {
              (M &&
                M.point("video_representation_changed", {
                  string: {
                    fromVideoRepresentationId: String(t),
                    toVideoRepresentationId: String(n),
                  },
                }),
                z.dispatch({ payload: {}, type: "representation_changed" }));
            },
            playerInstanceKey: l,
            playerSubOrigin: s,
            playerViewportDimensionsInitial: a.dimensions,
            prefetchResultInitial:
              _ != null && _.length > 0
                ? {
                    prefetchedRepresentationIds: _,
                    prefetchStartedAt: N.host.clock(),
                  }
                : null,
            videoFBID: i,
            workerPortFactories: m,
            workerTypeInitial: d,
          },
        );
      L.current = B;
      function W() {
        var e;
        return (e = j.current) != null ? e : null;
      }
      var q = o(
          "VideoPlayerNextgendashEngineExtrasAPI",
        ).createVideoPlayerNextgendashEngineExtrasAPI({
          getVideoElementAPI: W,
          mainSm: B,
        }),
        U = null,
        V = o(
          "VideoPlayerImplementationEngineAPI",
        ).createVideoPlayerImplementationEngine({
          createDebugAPI: function (t) {
            var e = t.getVideoElementAPI,
              n = t.loggerToVPL;
            return b == null
              ? void 0
              : b.createDebugAPI({
                  engineExtrasAPI: q,
                  getConfig: function () {
                    return a.experimentationConfig;
                  },
                  getVideoElementAPI: e,
                  loggerToVPL: n,
                  mainSm: B,
                });
          },
          createVideoPlayerError: function (t, n) {
            var e = o("nextgendasherr").nextgendasherrFromNextgendasherr(t);
            return e != null
              ? o(
                  "VideoPlayerNextgendashEngineErrors",
                ).createVideoPlayerErrorFromNextgendashEngine(N, e, n)
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
              if ((M == null || M.point("destroy"), r("gkx")("18183"))) {
                var e, t;
                (M == null || M.endWithAbort(),
                  (e = D) == null || e.remove(),
                  (D = null),
                  (t = x) == null || t.remove(),
                  (x = null));
              }
              (B.sendEvent({ reason: "destroyEngineParts", type: "__dispose" }),
                C == null || C.disconnect());
            }
          },
          engineCreateArgs: e,
          engineExtrasAPI: q,
          engineMetadata: {
            isAbrEnabled: !0,
            playerInstanceKey: a.loggingMetaData.instanceKey,
            playerVersion: "comet_nextgendash",
            streamingFormat: "dash",
          },
          handleVideoElementChanged: function (t, n) {
            (O != null && (O(), (O = null)),
              t != null
                ? ((O = M == null ? void 0 : M.subspan("video_element")),
                  U != null && (r("clearTimeout")(U), (U = null)),
                  B.sendEvent({
                    mediaElement: o(
                      "VideoPlayerNextgendashHostAPI",
                    ).opaqueVideoPlayerNextgendashHostMediaElement(t),
                    type: "update_media_element",
                  }))
                : N.config.enableMediaElementUnmountNotification &&
                  B.sendEvent({
                    mediaElement: null,
                    type: "update_media_element",
                  }));
          },
          handleVideoInfoChange: function (t) {
            if (
              B.state.state !== "__null__" &&
              B.state.state !== "__disposed__"
            ) {
              var e,
                n = B.state;
              (t.dimensions.height !== n.playerViewportDimensions.height ||
                t.dimensions.width !== n.playerViewportDimensions.width) &&
                B.sendEvent({
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
                B.sendEvent({
                  expiredVideoUrlRefreshHandlerState:
                    o != null ? { handler: R(o), identity: o } : null,
                  type: "update_expired_video_url_refresh_handler",
                }),
                $.trackScrollPosition &&
                  t.videoPlayerScrollPositionAPI != null &&
                  n.scrollPositionAPI !== t.videoPlayerScrollPositionAPI &&
                  B.sendEvent({
                    scrollPositionAPI: t.videoPlayerScrollPositionAPI,
                    type: "update_scroll_position_api",
                  }));
            }
            return !1;
          },
        }),
        H = V.engine,
        G = V.handleFatalImplementationError,
        z = V.machine,
        j = V.videoElementAPIRef;
      I.current = z;
      for (var K of T)
        z.dispatch({
          payload: { warningError: K },
          type: "implementation_warning",
        });
      if (
        ((T.length = 0),
        (a.manifest != null || a.manifestUrl != null) &&
          B.sendEvent({
            dashManifestUrl: a.manifestUrl,
            dashManifestXmlString: a.manifest,
            type: "update_dash_manifest",
          }),
        M)
      ) {
        var Q = void 0,
          X = null,
          Y = null,
          J = function () {
            var e = z.getCurrentState().controlledState,
              t = e.error,
              n = e.playbackState;
            if (n !== Q) {
              if (
                (X != null &&
                  (t != null || n !== "paused") &&
                  (X(), (X = null)),
                Y != null &&
                  (t != null || n !== "stalling") &&
                  (Y(), (Y = null)),
                t != null)
              ) {
                var r;
                (M.endWithError(g != null ? g : E(N, t)),
                  (r = D) == null || r.remove(),
                  (D = null));
              } else if (n === "playing") {
                var o;
                (M.endWithSuccess(), (o = D) == null || o.remove(), (D = null));
              } else
                n === "paused"
                  ? (X = M.subspan("paused"))
                  : n === "stalling" && (Y = M.subspan("stalling"));
              Q = n;
            }
          };
        ((D = H.implementationController.subscribe(J)), J());
      }
      if (N.config.logStallDetailsAsPlayerWarning) {
        var Z = void 0,
          ee = null,
          te = function () {
            var e = z.getCurrentState().controlledState,
              t = e.error,
              n = e.playbackState;
            if (n !== Z) {
              if (
                ((t != null || n !== "stalling") &&
                  ee != null &&
                  (r("clearTimeout")(ee), (ee = null)),
                t != null)
              ) {
                var o;
                ((o = x) == null || o.remove(), (x = null));
              } else if (n === "stalling" && ee == null) {
                var a = N.host.clock(),
                  i = 200;
                ee = r("setTimeout")(function () {
                  B.sendEvent({
                    stallStartClock: a,
                    type: "debug_log_stall_details",
                  });
                }, i);
              }
              Z = n;
            }
          };
        ((x = H.implementationController.subscribe(te)), te());
      }
      return (M == null || M.point("engine_created"), H);
    }
    function E(e, t) {
      return o("nextgendasherr").nextgendasherr.apply(
        void 0,
        [e, t.errorName, t.errorMessageFormat].concat(t.errorMessageParams),
      );
    }
    ((l.preloadVideoPlayerNextgendashWorker = _),
      (l.prefetchUsingNextgendash = C),
      (l.releasePrefetchUsingNextgendash = b),
      (l.createVideoPlayerNextgendashEngine = L));
  },
  98,
);
