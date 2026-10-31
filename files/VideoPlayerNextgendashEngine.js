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
    "VideoPlayerNextgendashWorkerPrefetchCache",
    "clearTimeout",
    "cr:11335",
    "cr:17758",
    "cr:3020",
    "cr:39935",
    "cr:39936",
    "cr:624",
    "cr:9712",
    "cr:9718",
    "gkx",
    "guid",
    "nextgendasherr",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    function d(e) {
      if ((e === void 0 && (e = n("cr:3020")), e.mediaSinkType === "HYBRID"))
        return n("cr:39935") != null ? "RealWorkerV2" : "VirtualWorker";
      if (e.mediaSinkConnectToWorker != null) return "RealWorkerV2";
      if (r("gkx")("9512")) {
        var t = r("gkx")("7137") ? "ManagedMediaSource" : "MediaSource";
        if (e.mediaSourceCanConstructInDedicatedWorker(t))
          return r("gkx")("4484") ? "RealWorkerV2" : "RealWorker";
      }
      return "VirtualWorker";
    }
    var m = d();
    m === "VirtualWorker" &&
      o(
        "VideoPlayerNextgendashConnectionPortToVirtualWorker",
      ).preloadWorkerEnvironmentJSResourceWhenVirtualWorkerOnly();
    var p = {
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
            (u = n("cr:39935") != null ? n("cr:39935") : n("cr:17758")) == null
              ? void 0
              : u.createVideoPlayerNextgendashConnectionPortToRealWorkerV2) !=
          null
            ? s
            : null,
        VirtualWorker: o("VideoPlayerNextgendashConnectionPortToVirtualWorker")
          .createVideoPlayerNextgendashConnectionPortToVirtualWorker,
      },
      _ = {
        clientRev: r("SiteData").client_revision,
        cometEnv: r("SiteData").comet_env,
      };
    function f(e) {
      e === void 0 && (e = !1);
      var t = n(e ? "cr:624" : "cr:3020");
      t != null &&
        o("VideoPlayerNextgendashConnectionMainToWorker").preloadWorker({
          envForErrors: {
            host: { clock: t.clock },
            loggingState: { metadata: babelHelpers.extends({}, _) },
          },
          virtualWorkerHostAPI: t,
          workerEnvConfig: D(t),
          workerPortFactories: p,
          workerType: d(t),
        });
    }
    var g = null,
      h = null,
      y = "airwave",
      C = !1,
      b = !1;
    function v() {
      return r("gkx")("19309") && r("gkx")("18263");
    }
    var S = "ngdprefetch-" + r("guid")();
    function R(e) {
      e === void 0 && (e = !1);
      var t = e ? h : g;
      if (t != null) return t;
      var r = n(e ? "cr:624" : "cr:3020");
      if (r == null)
        throw o("nextgendasherr").nextgendasherr(
          {
            host: { clock: n("cr:3020").clock },
            loggingState: { metadata: {} },
          },
          "VideoPlayerNextgendashNativePrefetchUnavailable",
        );
      f(e);
      var a = o(
          "VideoPlayerNextgendashWorkQueue",
        ).createVideoPlayerNextgendashWorkQueue(r.scheduleToRun),
        i = n("cr:9718") == null ? void 0 : n("cr:9718")(S, a),
        l = D(r),
        s = o(
          "VideoPlayerNextgendashPrefetchConnection",
        ).createVideoPlayerNextgendashPrefetchConnection({
          config: l,
          hostAPI: r,
          instanceKey: S,
          loggingDestinations: [
            o(
              "VideoPlayerNextgendashLoggingDestinationFBLogger",
            ).createVideoPlayerNextgendashLoggingDestinationFBLogger(),
            n("cr:9712"),
            i == null ? void 0 : i.loggingDestination,
          ],
          siteMetadata: _,
          workerPortFactories: p,
          workerType: d(r),
          workQueue: a,
        });
      return (
        o(
          "VideoPlayerNextgendashSmartPlayerStaticSignals",
        ).subscribeVideoPlayerNextgendashSmartPlayerStaticSignals(
          l,
          function () {},
        ),
        e ? (h = s) : (g = s),
        s
      );
    }
    function L() {
      return r("gkx")("26980");
    }
    function E(e) {
      return e == null && !L() && r("gkx")("16361")
        ? 540
        : e == null && r("gkx")("21918")
          ? 480
          : r("gkx")("2312")
            ? { "%future added value": 0, HD: 720, SD: 0, UHD: 1080, "": 0 }[
                e != null ? e : ""
              ]
            : 0;
    }
    function k(e, t) {
      var r = (t == null ? void 0 : t.nativeOnly) === !0;
      if (!(r && n("cr:624") == null)) {
        var a = R(r),
          i;
        if (v()) {
          i = y;
          var l = r ? b : C;
          l ||
            (r ? (b = !0) : (C = !0),
            a.sendPrefetchGroupAction({ groupId: i, type: "start" }));
        }
        a.prefetch(
          r
            ? babelHelpers.extends({}, e, {
                prefetchKey: o(
                  "VideoPlayerNextgendashWorkerPrefetchCache",
                ).getVideoPlayerNextgendashPrefetchKeyForSink(
                  e.prefetchKey,
                  "HYBRID",
                ),
              })
            : e,
          o(
            "VideoPlayerNextgendashEngineConfig",
          ).createVideoPlayerNextgendashABRConfig({
            videoPreferredMinimumSmallestDimension: E(null),
          }),
          void 0,
          i,
        );
      }
    }
    function I(e, t) {
      var n;
      if ((t == null ? void 0 : t.nativeOnly) === !0) {
        var r;
        (r = h) == null ||
          r.releasePrefetchKey(
            o(
              "VideoPlayerNextgendashWorkerPrefetchCache",
            ).getVideoPlayerNextgendashPrefetchKeyForSink(e, "HYBRID"),
          );
        return;
      }
      (n = g) == null || n.releasePrefetchKey(e);
    }
    var T = 5e6;
    function D(e) {
      e === void 0 && (e = n("cr:3020"));
      var t = o("VideoPlayerNextgendashEnvironment").createDefaultConfig(),
        a = L();
      return babelHelpers.extends(
        {},
        t,
        {
          bandwidthDiagnosticsFallbackDefaultEstimate: a ? T : null,
          blockDuplicatePrefetch: r("gkx")("25126"),
          bufferAheadTargetNoMediaElementSec:
            r("gkx")("26985") || (r("gkx")("17440") && r("gkx")("18263"))
              ? 4
              : t.bufferAheadTargetNoMediaElementSec,
          bufferedRangeStartToleranceSec: o(
            "VideoPlayerNextgendashEngineConfig",
          ).getVideoPlayerNextgendashLGBufferedRangeStartToleranceSec(
            r("gkx")("28286"),
            e.mediaSinkType,
          ),
          bufferingBeginBufferAheadSec: r("gkx")("7137")
            ? 0.1
            : t.bufferingBeginBufferAheadSec,
          bufferingEndBufferAheadSec: r("gkx")("4924")
            ? t.bufferingEndBufferAheadSec
            : r("gkx")("7137")
              ? 0.2
              : t.bufferingEndBufferAheadSec,
          bufferingEndRecentStallBufferAheadSec: r("gkx")("419")
            ? 3
            : t.bufferingEndRecentStallBufferAheadSec,
          bufferingEndRecentStallTimeoutMs: r("gkx")("419")
            ? 1e4
            : t.bufferingEndRecentStallTimeoutMs,
          cacheQualityScoreInRepresentation: r("gkx")("8789"),
          dataAppendOperationMinBytes: r("gkx")("16681")
            ? null
            : t.dataAppendOperationMinBytes,
          debugLog: r("gkx")("17339"),
          debugOverlay: r("gkx")("26608"),
          debugViz: r("gkx")("17340"),
          disableFallbackFromRealWorkerAfterLinked: !0,
          disablePlaybackLoopSchedulingOnTimer: r("gkx")("16690"),
          disableZeroPlaybackRateWhileBuffering: r("gkx")("4185"),
          eagerResyncOnMediaElementAttach: r("gkx")("17429"),
          enableAdaptiveConcurrentSegmentFetching: r("gkx")("8486"),
          enableBandwidthDiagnosticsFallback: r("gkx")("23799") || a,
          enableCdnUrlRefresh: r("gkx")("17628"),
          enableCombinedInitSidxFetch: r("gkx")("17649"),
          enableDisposalResourceCleanup: r("gkx")("11526"),
          enableDynamicBufferWatermarks: r("gkx")("11395"),
          enableExactSegmentGroupByteRange: r("gkx")("28035"),
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
          enableSmartPlayerStaticCapabilityFiltering: r("gkx")("2081"),
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
            : t.liveBackBufferRetentionSec,
          liveBufferingEndRecentStallBufferAheadSec: r("gkx")("7763")
            ? 2
            : t.liveBufferingEndRecentStallBufferAheadSec,
          liveBufferingEndRecentStallTimeoutMs: r("gkx")("7763")
            ? 8e3
            : t.liveBufferingEndRecentStallTimeoutMs,
          liveEndedStallConfirmSec: r("gkx")("7763")
            ? 10
            : t.liveEndedStallConfirmSec,
          liveEndedTransitionOnStallEnabled: r("gkx")("7763"),
          liveFellBehindEdgeReseekDriftSec: r("gkx")("7763")
            ? 30
            : t.liveFellBehindEdgeReseekDriftSec,
          liveFellBehindHardRefetchDriftSec: r("gkx")("7763")
            ? 60
            : t.liveFellBehindHardRefetchDriftSec,
          liveFellBehindPairedRefetchEnabled: r("gkx")("7763"),
          liveFellBehindWindowRefetchEnabled: r("gkx")("7763"),
          liveForceWorkerKickOnStallEnabled: r("gkx")("7763"),
          liveGapSkipStuckAtRangeEndToleranceSec: r("gkx")("7763")
            ? 1.5
            : t.liveGapSkipStuckAtRangeEndToleranceSec,
          liveGapSkipStuckSeekRecoveryMs: r("gkx")("7763")
            ? 2e3
            : t.liveGapSkipStuckSeekRecoveryMs,
          liveLookbackBufferSec: r("gkx")("7763")
            ? 30
            : t.liveLookbackBufferSec,
          liveNoProgressWatchdogThresholdSec: r("gkx")("7763")
            ? 8
            : t.liveNoProgressWatchdogThresholdSec,
          liveObserveAndActMinDelayMs: r("gkx")("7763")
            ? 4
            : t.liveObserveAndActMinDelayMs,
          livePlayheadStallRecoveryEnabled: r("gkx")("7763"),
          liveProactiveEdgeReseekEnabled: r("gkx")("7763"),
          liveProactiveRefetchDriftSec: r("gkx")("7763")
            ? 24
            : t.liveProactiveRefetchDriftSec,
          liveStallRecoveryEnabled: r("gkx")("7763"),
          liveStallReseekToEdgeAfterKicks: r("gkx")("7763")
            ? 3
            : t.liveStallReseekToEdgeAfterKicks,
          logStallDetailsAsPlayerWarning: r("gkx")("20111"),
          maxConcurrentPrefetchTasks: v()
            ? 5
            : r("gkx")("10899")
              ? 2
              : r("gkx")("10183")
                ? 5
                : -1,
          mediaElementSkipFullWatchdogSnapshotsWhilePlaybackMoves:
            r("gkx")("17440") && r("gkx")("18263"),
          mediaElementSkipUpdateIfFullyBufferedAndOnlyPlayheadMoving:
            r("gkx")("19158"),
          mediaSinkType: e.mediaSinkType,
          optimizeAutoDisposeTraversal: r("gkx")("21151") || r("gkx")("17440"),
          playheadPredictIntervalMs:
            r("gkx")("12741") || r("gkx")("17440") ? 3e3 : 0,
          playheadStallRecoveryEnabled: r("gkx")("15564"),
          preferredMediaSourceAPIType: r("gkx")("7137")
            ? "ManagedMediaSource"
            : "MediaSource",
          prefetchCacheMaxEntries: r("gkx")("17440")
            ? 10
            : t.prefetchCacheMaxEntries,
          prefetchResolutionThreshold: r("gkx")("16054")
            ? 1080
            : t.prefetchResolutionThreshold,
          qplEnabled: r("gkx")("19263"),
          realWorkerV2SkipHasteResponsePreloader:
            e.mediaSinkConnectToWorker != null ||
            t.realWorkerV2SkipHasteResponsePreloader,
          reduceStateMachineEventOverhead: r("gkx")("2977"),
          reopenEndedMediaSourceOnRepresentationSwitch: r("gkx")("18169"),
          resetTargetRepresentationWhenItGetsBlocked: r("gkx")("18461"),
          retryShorterForUnrecoverableHTTP: r("gkx")("18768"),
          segmentStallRecoveryEnabled: r("gkx")("19141"),
          sidxDisableShiftingMediaTimeRangesByEarliestPresentationTime:
            r("gkx")("19380"),
          skipEndOfStreamWhileBlockedTargetAwaitsReselection: r("gkx")("27821"),
          skipPlayheadRestoreOnMediaElementChange: r("gkx")("17440"),
          trackScrollPosition: r("gkx")("20629"),
          useExponentialBackoffRetryStrategy: r("gkx")("19401"),
          webCodecsVideoInWorker: r("gkx")("12553"),
        },
        e.mediaSinkType === "HYBRID"
          ? {
              bufferAheadTargetNoMediaElementSec: 0,
              bufferAheadTargetPausedSec: 0,
              bufferAheadTargetPlayingSec: 9.9,
              disableZeroPlaybackRateWhileBuffering: !0,
              enableDisposalResourceCleanup: !0,
              enableMediaElementUnmountNotification: !0,
              nativeBackBufferMinRemovableSec: 5,
              nativeBackBufferRetentionSec: 5,
            }
          : {},
      );
    }
    var x = 0;
    function $(e, t, n) {
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
    function P(e) {
      return function (t) {
        var r = t.url;
        return new (c || (c = n("Promise")))(function (t) {
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
    function N(e) {
      if (!e) return n("cr:3020");
      if (n("cr:624") == null)
        throw o("nextgendasherr").nextgendasherr(
          {
            host: { clock: n("cr:3020").clock },
            loggingState: { metadata: {} },
          },
          "VideoPlayerNextgendashHybridHostUnavailable",
        );
      return n("cr:624");
    }
    function M(e) {
      var t,
        a = e.initialProps,
        i = N(a.hybridNativeMedia === !0),
        l = d(i),
        s = a.coreVideoPlayerMetaData.videoFBID,
        u = String(a.loggingMetaData.instanceKey),
        c = (t = a.coreVideoPlayerMetaData.subOrigin) != null ? t : void 0,
        m = x++,
        f = "#" + m + "::" + u,
        g = a.coreVideoPlayerMetaData.initialRepresentationIds,
        h = !1,
        y = null,
        C = o(
          "VideoPlayerNextgendashWorkQueue",
        ).createVideoPlayerNextgendashWorkQueue(i.scheduleToRun),
        b = n("cr:9718") == null ? void 0 : n("cr:9718")(f, C),
        v = n("cr:11335") ? new (n("cr:11335"))() : null,
        S = { current: null },
        R = { current: null },
        L = { current: null },
        k = [],
        I = null,
        T = null,
        M = null,
        A = D(i);
      M = o(
        "VideoPlayerNextgendashSmartPlayerStaticSignals",
      ).subscribeVideoPlayerNextgendashSmartPlayerStaticSignals(A, function () {
        var e = S.current;
        e != null &&
          e.state.state !== "__null__" &&
          e.state.state !== "__disposed__" &&
          e.sendEvent({ type: "update_config_from_env" });
      });
      var F = a.coreVideoPlayerMetaData.isVideoBroadcast;
      ((A.disableZeroPlaybackRateWhileBuffering =
        o(
          "VideoPlayerNextgendashEngineConfig",
        ).isVideoPlayerNextgendashVODOnlyConfigEnabled(
          A.disableZeroPlaybackRateWhileBuffering,
          F,
        ) ||
        A.mediaSinkType === "EMSS" ||
        A.mediaSinkType === "HYBRID"),
        A.mediaSinkType === "EMSS" &&
          ((A.disableBufferGapSkipping = !0),
          (A.enableDisposalResourceCleanup = !0),
          (A.bufferAheadTargetNoMediaElementSec = 9.9)),
        A.mediaSinkType === "WEBCODECS" &&
          ((A.disableZeroPlaybackRateWhileBuffering = !0),
          (A.bufferAheadTargetNoMediaElementSec = 4.9),
          (A.enablePrefetchCacheKeyNormalization = !0),
          (A.enableMediaElementUnmountNotification = !0),
          (A.enableSkipRecoveryOnDeliberateDetach = !0),
          (A.enableDisposalResourceCleanup = !0)));
      var O = A.mediaSinkType === "WEBCODECS",
        B = O
          ? o(
              "VideoPlayerNextgendashWebCodecsDimensions",
            ).capVideoPlayerNextgendashWebCodecsDimensions(a.dimensions)
          : a.dimensions;
      ((A.sidxDisableShiftingMediaTimeRangesByEarliestPresentationTime = o(
        "VideoPlayerNextgendashEngineConfig",
      ).isVideoPlayerNextgendashVODOnlyConfigEnabled(
        A.sidxDisableShiftingMediaTimeRangesByEarliestPresentationTime,
        F,
      )),
        (A.startTimestampSec = a.coreVideoPlayerMetaData.startTimestamp));
      var W = {
          config: A,
          host: i,
          logging: o(
            "VideoPlayerNextgendashLoggingAPI",
          ).combineLoggingDestinations([
            A.qplEnabled
              ? o(
                  "VideoPlayerNextgendashLoggingDestinationQPLFromEngine",
                ).createVideoPlayerNextgendashLoggingDestinationQPLFromEngine(
                  S,
                  R,
                )
              : void 0,
            o(
              "VideoPlayerNextgendashLoggingDestinationEngineWarning",
            ).createVideoPlayerNextgendashLoggingDestinationEngineWarning(
              function (e) {
                (q &&
                  q.point(
                    "warning",
                    o("VideoPlayerNextgendashQPL").qplAnnotationsForError(
                      w(W, e),
                    ),
                  ),
                  L.current != null
                    ? L.current.dispatch({
                        payload: { warningError: e },
                        type: "implementation_warning",
                      })
                    : k.push(e));
              },
            ),
            n("cr:9712"),
            b == null ? void 0 : b.loggingDestination,
            v == null ? void 0 : v.loggingDestination,
            o(
              "VideoPlayerNextgendashLoggingDestinationODSFromEngine",
            ).createVideoPlayerNextgendashLoggingDestinationODSFromEngine(),
            o(
              "VideoPlayerNextgendashLoggingDestinationFBLogger",
            ).createVideoPlayerNextgendashLoggingDestinationFBLogger(),
          ]),
          loggingState: {
            logstampPrefix: f,
            logstampTint: (m % 5) / 5,
            metadata: babelHelpers.extends({}, _, {
              nextgendashCreatedAt: i.clock(),
              nextgendashInstanceIndex: m,
              playerInstanceKey: u,
              playerSubOrigin: c,
              videoFBID: s,
            }),
          },
          workQueue: C,
        },
        q = W.config.qplEnabled
          ? o("VideoPlayerNextgendashQPL").qplStartPlayingApi(W)
          : null;
      ((R.current = q), q == null || q.start());
      var U = a.coreVideoPlayerMetaData.expiredVideoUrlRefreshHandler,
        V = null,
        H = null,
        G = null,
        z = o(
          "VideoPlayerNextgendashMain",
        ).VideoPlayerNextgendashMainSM.createSM(
          "VideoPlayerNextgendashMain",
          W,
          null,
          {
            abrConfig: o(
              "VideoPlayerNextgendashEngineConfig",
            ).createVideoPlayerNextgendashABRConfig({
              videoPreferredMinimumSmallestDimension: E(a.minQualityPreference),
            }),
            audioOnly: a.coreVideoPlayerMetaData.audioOnly === !0,
            initialExpiredVideoUrlRefreshHandlerState:
              U != null ? { handler: P(U), identity: U } : null,
            initialMediaVariantIfLangExistsInManifest:
              a.initialAudioUserPreferredLanguage != null
                ? {
                    audioLang: a.initialAudioUserPreferredLanguage,
                    audioRole: "dub",
                    videoLang: W.config.enableLipSync
                      ? a.initialAudioUserPreferredLanguage
                      : null,
                    videoRole: W.config.enableLipSync ? "dub" : null,
                  }
                : null,
            nextgendashInstanceIndex: m,
            onBufferingChanged: function (t) {
              var e = t.changeDirection,
                n = t.domEventAdjustedClock,
                r = t.isInitial;
              (V != null && (V(), (V = null)),
                e === "started"
                  ? ((V = q == null ? void 0 : q.subspan("buffering")),
                    Z.dispatch({
                      payload: {
                        bufferingType: r ? "start/unpause" : "in_play",
                        disableZeroPlaybackRate: W.config
                          .disableZeroPlaybackRateWhileBuffering
                          ? !0
                          : void 0,
                      },
                      type: "buffering_begin_requested",
                    }))
                  : e === "stopped" &&
                    Z.dispatch({
                      payload: { domEventPerfTimestamp: n.perfMs },
                      type: "buffering_end_requested",
                    }));
            },
            onError: function (t) {
              (q &&
                q.point(
                  "error",
                  o("VideoPlayerNextgendashQPL").qplAnnotationsForError(t),
                ),
                y == null && (y = t),
                b
                  ? (b.setHalted(t.name),
                    C.enqueueWork(function () {
                      J(t, "comet_nextgendash_main_error");
                    }))
                  : J(t, "comet_nextgendash_main_error"));
            },
            onManifestUpdated: function () {
              (q == null || q.point("manifest_updated"),
                Z.dispatch({
                  payload: {
                    selectedVideoQuality: K.getUserSelectedVideoQuality(),
                  },
                  type: "implementation_engine_qualities_changed",
                }));
            },
            onMediaSourceAttachedChanged: function (t, n) {
              if (
                (H != null && (H(), (H = null)),
                n && (H = q == null ? void 0 : q.subspan("media_source")),
                !r("gkx")("19514"))
              ) {
                var e,
                  i =
                    (e = z.state.mediaElement) == null
                      ? void 0
                      : e.state.mediaElement,
                  l =
                    i != null
                      ? o(
                          "VideoPlayerNextgendashHostAPI",
                        ).unopaqueVideoPlayerNextgendashHostMediaElement(i)
                      : null;
                (l == null ||
                  ee.current == null ||
                  l !== ee.current.getUnderlyingVideoElement()) &&
                  (ee.current =
                    l != null
                      ? $(
                          A,
                          l,
                          o(
                            "VideoPlayerImplementationEngineVideoElementAPI",
                          ).createVideoPlayerImplementationEngineVideoElementAPI(
                            l,
                          ),
                        )
                      : null);
              }
              if (n && !h) {
                ((h = !0),
                  Z.dispatch({
                    payload: {
                      selectedVideoQuality: K.getUserSelectedVideoQuality(),
                    },
                    type: "implementation_engine_initialized",
                  }));
                {
                  var s = a.coreVideoPlayerMetaData.startTimestamp;
                  s > 0 &&
                    Z.dispatch({
                      payload: { seekTargetPosition: s },
                      type: "controller_seek_requested",
                    });
                }
              }
            },
            onSendHaltedToWorkerChanged:
              b == null ? void 0 : b.onSendHaltedToWorkerChanged,
            onVideoRepresentationChanged: function (t, n) {
              (q &&
                q.point("video_representation_changed", {
                  string: {
                    fromVideoRepresentationId: String(t),
                    toVideoRepresentationId: String(n),
                  },
                }),
                Z.dispatch({ payload: {}, type: "representation_changed" }));
            },
            playerInstanceKey: u,
            playerSubOrigin: c,
            playerViewportDimensionsInitial: B,
            prefetchResultInitial:
              g != null && g.length > 0
                ? {
                    prefetchedRepresentationIds: g,
                    prefetchStartedAt: W.host.clock(),
                  }
                : null,
            videoFBID: s,
            workerPortFactories: p,
            workerTypeInitial: l,
          },
        );
      S.current = z;
      function j() {
        var e;
        return (e = ee.current) != null ? e : null;
      }
      var K = o(
          "VideoPlayerNextgendashEngineExtrasAPI",
        ).createVideoPlayerNextgendashEngineExtrasAPI({
          getVideoElementAPI: j,
          mainSm: z,
        }),
        Q = null,
        X = o(
          "VideoPlayerImplementationEngineAPI",
        ).createVideoPlayerImplementationEngine({
          createDebugAPI: function (t) {
            var e = t.getVideoElementAPI,
              n = t.loggerToVPL;
            return v == null
              ? void 0
              : v.createDebugAPI({
                  engineExtrasAPI: K,
                  getConfig: function () {
                    return a.experimentationConfig;
                  },
                  getVideoElementAPI: e,
                  loggerToVPL: n,
                  mainSm: z,
                });
          },
          createVideoPlayerError: function (t, n) {
            var e = o("nextgendasherr").nextgendasherrFromNextgendasherr(t);
            return e != null
              ? o(
                  "VideoPlayerNextgendashEngineErrors",
                ).createVideoPlayerErrorFromNextgendashEngine(W, e, n)
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
                (q == null || q.point("destroy"),
                M == null || M(),
                (M = null),
                r("gkx")("19514"))
              ) {
                var e, t;
                (q == null || q.endWithAbort(),
                  (e = I) == null || e.remove(),
                  (I = null),
                  (t = T) == null || t.remove(),
                  (T = null));
              }
              (z.sendEvent({ reason: "destroyEngineParts", type: "__dispose" }),
                b == null || b.disconnect());
            }
          },
          engineCreateArgs: e,
          engineExtrasAPI: K,
          engineMetadata: {
            isAbrEnabled: !0,
            playerInstanceKey: a.loggingMetaData.instanceKey,
            playerVersion:
              A.mediaSinkType === "EMSS"
                ? "comet_nextgendash_wasm"
                : "comet_nextgendash",
            streamingFormat: "dash",
          },
          handleVideoElementChanged: function (t, n) {
            (G != null && (G(), (G = null)),
              t != null
                ? ((G = q == null ? void 0 : q.subspan("video_element")),
                  Q != null && (r("clearTimeout")(Q), (Q = null)),
                  z.sendEvent({
                    mediaElement: o(
                      "VideoPlayerNextgendashHostAPI",
                    ).opaqueVideoPlayerNextgendashHostMediaElement(t),
                    type: "update_media_element",
                  }))
                : W.config.enableMediaElementUnmountNotification &&
                  z.sendEvent({
                    mediaElement: null,
                    type: "update_media_element",
                  }));
          },
          handleVideoInfoChange: function (t) {
            if (
              z.state.state !== "__null__" &&
              z.state.state !== "__disposed__"
            ) {
              var e,
                n = z.state,
                r = O
                  ? o(
                      "VideoPlayerNextgendashWebCodecsDimensions",
                    ).capVideoPlayerNextgendashWebCodecsDimensions(t.dimensions)
                  : t.dimensions;
              (r.height !== n.playerViewportDimensions.height ||
                r.width !== n.playerViewportDimensions.width) &&
                z.sendEvent({
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
                z.sendEvent({
                  expiredVideoUrlRefreshHandlerState:
                    i != null ? { handler: P(i), identity: i } : null,
                  type: "update_expired_video_url_refresh_handler",
                }),
                A.trackScrollPosition &&
                  t.videoPlayerScrollPositionAPI != null &&
                  n.scrollPositionAPI !== t.videoPlayerScrollPositionAPI &&
                  z.sendEvent({
                    scrollPositionAPI: t.videoPlayerScrollPositionAPI,
                    type: "update_scroll_position_api",
                  }));
            }
            return !1;
          },
        }),
        Y = X.engine,
        J = X.handleFatalImplementationError,
        Z = X.machine,
        ee = X.videoElementAPIRef;
      L.current = Z;
      for (var te of k)
        Z.dispatch({
          payload: { warningError: te },
          type: "implementation_warning",
        });
      if (
        ((k.length = 0),
        (a.manifest != null || a.manifestUrl != null) &&
          z.sendEvent({
            dashManifestUrl: a.manifestUrl,
            dashManifestXmlString: a.manifest,
            type: "update_dash_manifest",
          }),
        q)
      ) {
        var ne = void 0,
          re = null,
          oe = null,
          ae = function () {
            var e = Z.getCurrentState().controlledState,
              t = e.error,
              n = e.playbackState;
            if (n !== ne) {
              if (
                (re != null &&
                  (t != null || n !== "paused") &&
                  (re(), (re = null)),
                oe != null &&
                  (t != null || n !== "stalling") &&
                  (oe(), (oe = null)),
                t != null)
              ) {
                var r;
                (q.endWithError(y != null ? y : w(W, t)),
                  (r = I) == null || r.remove(),
                  (I = null));
              } else if (n === "playing") {
                var o;
                (q.endWithSuccess(), (o = I) == null || o.remove(), (I = null));
              } else
                n === "paused"
                  ? (re = q.subspan("paused"))
                  : n === "stalling" && (oe = q.subspan("stalling"));
              ne = n;
            }
          };
        ((I = Y.implementationController.subscribe(ae)), ae());
      }
      if (W.config.logStallDetailsAsPlayerWarning) {
        var ie = void 0,
          le = null,
          se = function () {
            var e = Z.getCurrentState().controlledState,
              t = e.error,
              n = e.playbackState;
            if (n !== ie) {
              if (
                ((t != null || n !== "stalling") &&
                  le != null &&
                  (r("clearTimeout")(le), (le = null)),
                t != null)
              ) {
                var o;
                ((o = T) == null || o.remove(), (T = null));
              } else if (n === "stalling" && le == null) {
                var a = W.host.clock(),
                  i = 200;
                le = r("setTimeout")(function () {
                  z.sendEvent({
                    stallStartClock: a,
                    type: "debug_log_stall_details",
                  });
                }, i);
              }
              ie = n;
            }
          };
        ((T = Y.implementationController.subscribe(se)), se());
      }
      return (q == null || q.point("engine_created"), Y);
    }
    function w(e, t) {
      return o("nextgendasherr").nextgendasherr.apply(
        void 0,
        [e, t.errorName, t.errorMessageFormat].concat(t.errorMessageParams),
      );
    }
    ((l.preloadVideoPlayerNextgendashWorker = f),
      (l.prefetchUsingNextgendash = k),
      (l.releasePrefetchUsingNextgendash = I),
      (l.getVideoPlayerNextgendashEngineHostAPI = N),
      (l.createVideoPlayerNextgendashEngine = M));
  },
  98,
);
