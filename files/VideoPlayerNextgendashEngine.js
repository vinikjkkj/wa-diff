__d(
  "VideoPlayerNextgendashEngine",
  [
    "ExecutionEnvironment",
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
    "cr:18606",
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
    var e,
      s,
      u,
      c,
      d,
      m = n("cr:18606") != null ? n("cr:18606")(n("cr:3020")) : n("cr:3020");
    (d || (d = r("ExecutionEnvironment"))).canUseDOM &&
      r("gkx")("12553") &&
      (m.warmMediaSink == null || m.warmMediaSink());
    function p(e) {
      if ((e === void 0 && (e = m), e.mediaSinkType === "HYBRID"))
        return n("cr:39935") != null ? "RealWorkerV2" : "VirtualWorker";
      if (e.mediaSinkConnectToWorker != null) return "RealWorkerV2";
      if (r("gkx")("9512")) {
        var t = r("gkx")("7137") ? "ManagedMediaSource" : "MediaSource";
        if (e.mediaSourceCanConstructInDedicatedWorker(t))
          return r("gkx")("4484") ? "RealWorkerV2" : "RealWorker";
      }
      return "VirtualWorker";
    }
    var _ = p();
    _ === "VirtualWorker" &&
      o(
        "VideoPlayerNextgendashConnectionPortToVirtualWorker",
      ).preloadWorkerEnvironmentJSResourceWhenVirtualWorkerOnly();
    var f = {
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
      g = {
        clientRev: r("SiteData").client_revision,
        cometEnv: r("SiteData").comet_env,
      };
    function h(e) {
      e === void 0 && (e = !1);
      var t = e ? n("cr:624") : m;
      t != null &&
        o("VideoPlayerNextgendashConnectionMainToWorker").preloadWorker({
          envForErrors: {
            host: { clock: t.clock },
            loggingState: { metadata: babelHelpers.extends({}, g) },
          },
          virtualWorkerHostAPI: t,
          workerEnvConfig: $(t),
          workerPortFactories: f,
          workerType: p(t),
        });
    }
    var y = null,
      C = null,
      b = "airwave",
      v = !1,
      S = !1;
    function R() {
      return r("gkx")("19309") && r("gkx")("18263");
    }
    var L = "ngdprefetch-" + r("guid")();
    function E(e) {
      e === void 0 && (e = !1);
      var t = e ? C : y;
      if (t != null) return t;
      var r = e ? n("cr:624") : m;
      if (r == null)
        throw o("nextgendasherr").nextgendasherr(
          { host: { clock: m.clock }, loggingState: { metadata: {} } },
          "VideoPlayerNextgendashNativePrefetchUnavailable",
        );
      h(e);
      var a = o(
          "VideoPlayerNextgendashWorkQueue",
        ).createVideoPlayerNextgendashWorkQueue(r.scheduleToRun),
        i = n("cr:9718") == null ? void 0 : n("cr:9718")(L, a),
        l = $(r),
        s = o(
          "VideoPlayerNextgendashPrefetchConnection",
        ).createVideoPlayerNextgendashPrefetchConnection({
          config: l,
          hostAPI: r,
          instanceKey: L,
          loggingDestinations: [
            o(
              "VideoPlayerNextgendashLoggingDestinationFBLogger",
            ).createVideoPlayerNextgendashLoggingDestinationFBLogger(),
            n("cr:9712"),
            i == null ? void 0 : i.loggingDestination,
          ],
          siteMetadata: g,
          workerPortFactories: f,
          workerType: p(r),
          workQueue: a,
        });
      return (
        o(
          "VideoPlayerNextgendashSmartPlayerStaticSignals",
        ).subscribeVideoPlayerNextgendashSmartPlayerStaticSignals(
          l,
          function () {},
        ),
        e ? (C = s) : (y = s),
        s
      );
    }
    function k() {
      return r("gkx")("26980");
    }
    function I(e) {
      return e == null && !k() && r("gkx")("16361")
        ? 540
        : e == null && r("gkx")("21918")
          ? 480
          : r("gkx")("2312")
            ? { "%future added value": 0, HD: 720, SD: 0, UHD: 1080, "": 0 }[
                e != null ? e : ""
              ]
            : 0;
    }
    function T(e, t) {
      var r = (t == null ? void 0 : t.nativeOnly) === !0;
      if (!(r && n("cr:624") == null)) {
        var a = E(r),
          i;
        if (R()) {
          i = b;
          var l = r ? S : v;
          l ||
            (r ? (S = !0) : (v = !0),
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
            videoPreferredMinimumSmallestDimension: I(null),
          }),
          void 0,
          i,
        );
      }
    }
    function D(e, t) {
      var n;
      if ((t == null ? void 0 : t.nativeOnly) === !0) {
        var r;
        (r = C) == null ||
          r.releasePrefetchKey(
            o(
              "VideoPlayerNextgendashWorkerPrefetchCache",
            ).getVideoPlayerNextgendashPrefetchKeyForSink(e, "HYBRID"),
          );
        return;
      }
      (n = y) == null || n.releasePrefetchKey(e);
    }
    var x = 5e6;
    function $(e) {
      e === void 0 && (e = m);
      var t = o("VideoPlayerNextgendashEnvironment").createDefaultConfig(),
        a = k();
      return babelHelpers.extends(
        {},
        t,
        {
          applyManifestPresentationTimeOffset: r("gkx")("28782"),
          bandwidthDiagnosticsFallbackDefaultEstimate: a ? x : null,
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
          enableOwnedBandwidthEstimator: e === m && n("cr:18606") != null,
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
            ? 60
            : t.liveEndedStallConfirmSec,
          liveEndedTransitionOnStallEnabled: r("gkx")("7763"),
          liveFellBehindEdgeReseekDriftSec: r("gkx")("7763")
            ? 30
            : t.liveFellBehindEdgeReseekDriftSec,
          liveFellBehindPairedRefetchEnabled: r("gkx")("7763"),
          liveFellBehindWindowRefetchEnabled: r("gkx")("7763"),
          liveForceWorkerKickOnStallEnabled: r("gkx")("7763"),
          liveGapSkipStuckAtRangeEndToleranceSec: r("gkx")("7763")
            ? 1.5
            : t.liveGapSkipStuckAtRangeEndToleranceSec,
          liveGapSkipStuckSeekRecoveryMs: r("gkx")("7763")
            ? 2e3
            : t.liveGapSkipStuckSeekRecoveryMs,
          liveLatencyPlaybackRateEnabled:
            r("gkx")("7763") && e.mediaSinkType === "MSE",
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
          liveSegmentFetchNetworkFailureToleranceMs: r("gkx")("7763")
            ? 6e4
            : t.liveSegmentFetchNetworkFailureToleranceMs,
          liveStallRecoveryEnabled: r("gkx")("7763"),
          liveStallReseekToEdgeAfterKicks: r("gkx")("7763")
            ? 3
            : t.liveStallReseekToEdgeAfterKicks,
          logStallDetailsAsPlayerWarning: r("gkx")("20111"),
          maxConcurrentPrefetchTasks: R()
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
          realWorkerConnectTimeoutMs: r("gkx")("7763")
            ? 1e4
            : t.realWorkerConnectTimeoutMs,
          realWorkerV2SkipHasteResponsePreloader:
            e.mediaSinkConnectToWorker != null ||
            t.realWorkerV2SkipHasteResponsePreloader,
          reduceStateMachineEventOverhead: r("gkx")("2977"),
          releaseParsedManifestXML: r("gkx")("28847"),
          releasePastStateMachineStates: r("gkx")("22384"),
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
    var P = 0;
    function N(e, t, n) {
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
    function M(e) {
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
    function w(e) {
      if (!e) return m;
      if (n("cr:624") == null)
        throw o("nextgendasherr").nextgendasherr(
          { host: { clock: m.clock }, loggingState: { metadata: {} } },
          "VideoPlayerNextgendashHybridHostUnavailable",
        );
      return n("cr:624");
    }
    function A(e) {
      var t,
        a = e.initialProps,
        i = w(a.hybridNativeMedia === !0),
        l = p(i),
        s = a.coreVideoPlayerMetaData.videoFBID,
        u = String(a.loggingMetaData.instanceKey),
        c = (t = a.coreVideoPlayerMetaData.subOrigin) != null ? t : void 0,
        d = P++,
        m = "#" + d + "::" + u,
        _ = a.coreVideoPlayerMetaData.initialRepresentationIds,
        h = !1,
        y = null,
        C = o(
          "VideoPlayerNextgendashWorkQueue",
        ).createVideoPlayerNextgendashWorkQueue(i.scheduleToRun),
        b = n("cr:9718") == null ? void 0 : n("cr:9718")(m, C),
        v = n("cr:11335") ? new (n("cr:11335"))() : null,
        S = { current: null },
        R = { current: null },
        L = { current: null },
        E = [],
        k = null,
        T = null,
        D = null,
        x = $(i);
      D = o(
        "VideoPlayerNextgendashSmartPlayerStaticSignals",
      ).subscribeVideoPlayerNextgendashSmartPlayerStaticSignals(x, function () {
        var e = S.current;
        e != null &&
          e.state.state !== "__null__" &&
          e.state.state !== "__disposed__" &&
          e.sendEvent({ type: "update_config_from_env" });
      });
      var A = a.coreVideoPlayerMetaData.isVideoBroadcast;
      ((x.disableZeroPlaybackRateWhileBuffering =
        o(
          "VideoPlayerNextgendashEngineConfig",
        ).isVideoPlayerNextgendashVODOnlyConfigEnabled(
          x.disableZeroPlaybackRateWhileBuffering,
          A,
        ) ||
        x.mediaSinkType === "EMSS" ||
        x.mediaSinkType === "HYBRID"),
        x.mediaSinkType === "EMSS" &&
          ((x.disableBufferGapSkipping = !0),
          (x.enableDisposalResourceCleanup = !0),
          (x.bufferAheadTargetNoMediaElementSec = 9.9)),
        x.mediaSinkType === "WEBCODECS" &&
          ((x.disableZeroPlaybackRateWhileBuffering = !0),
          (x.bufferAheadTargetNoMediaElementSec = 4.9),
          (x.enablePrefetchCacheKeyNormalization = !0),
          (x.enableMediaElementUnmountNotification = !0),
          (x.enableSkipRecoveryOnDeliberateDetach = !0),
          (x.enableDisposalResourceCleanup = !0)));
      var O = x.mediaSinkType === "WEBCODECS",
        B = O
          ? o(
              "VideoPlayerNextgendashWebCodecsDimensions",
            ).capVideoPlayerNextgendashWebCodecsDimensions(a.dimensions)
          : a.dimensions;
      ((x.sidxDisableShiftingMediaTimeRangesByEarliestPresentationTime = o(
        "VideoPlayerNextgendashEngineConfig",
      ).isVideoPlayerNextgendashVODOnlyConfigEnabled(
        x.sidxDisableShiftingMediaTimeRangesByEarliestPresentationTime,
        A,
      )),
        (x.startTimestampSec = a.coreVideoPlayerMetaData.startTimestamp));
      var W = {
          config: x,
          host: i,
          logging: o(
            "VideoPlayerNextgendashLoggingAPI",
          ).combineLoggingDestinations([
            x.qplEnabled
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
                      F(W, e),
                    ),
                  ),
                  L.current != null
                    ? L.current.dispatch({
                        payload: { warningError: e },
                        type: "implementation_warning",
                      })
                    : E.push(e));
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
            logstampPrefix: m,
            logstampTint: (d % 5) / 5,
            metadata: babelHelpers.extends({}, g, {
              nextgendashCreatedAt: i.clock(),
              nextgendashInstanceIndex: d,
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
              videoPreferredMinimumSmallestDimension: I(a.minQualityPreference),
            }),
            audioOnly: a.coreVideoPlayerMetaData.audioOnly === !0,
            initialExpiredVideoUrlRefreshHandlerState:
              U != null ? { handler: M(U), identity: U } : null,
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
            nextgendashInstanceIndex: d,
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
                      ? N(
                          x,
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
              _ != null && _.length > 0
                ? {
                    prefetchedRepresentationIds: _,
                    prefetchStartedAt: W.host.clock(),
                  }
                : null,
            videoFBID: s,
            workerPortFactories: f,
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
                D == null || D(),
                (D = null),
                r("gkx")("19514"))
              ) {
                var e, t;
                (q == null || q.endWithAbort(),
                  (e = k) == null || e.remove(),
                  (k = null),
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
              x.mediaSinkType === "EMSS"
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
                    i != null ? { handler: M(i), identity: i } : null,
                  type: "update_expired_video_url_refresh_handler",
                }),
                x.trackScrollPosition &&
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
      for (var te of E)
        Z.dispatch({
          payload: { warningError: te },
          type: "implementation_warning",
        });
      if (
        ((E.length = 0),
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
                (q.endWithError(y != null ? y : F(W, t)),
                  (r = k) == null || r.remove(),
                  (k = null));
              } else if (n === "playing") {
                var o;
                (q.endWithSuccess(), (o = k) == null || o.remove(), (k = null));
              } else
                n === "paused"
                  ? (re = q.subspan("paused"))
                  : n === "stalling" && (oe = q.subspan("stalling"));
              ne = n;
            }
          };
        ((k = Y.implementationController.subscribe(ae)), ae());
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
    function F(e, t) {
      return o("nextgendasherr").nextgendasherr.apply(
        void 0,
        [e, t.errorName, t.errorMessageFormat].concat(t.errorMessageParams),
      );
    }
    ((l.preloadVideoPlayerNextgendashWorker = h),
      (l.prefetchUsingNextgendash = T),
      (l.releasePrefetchUsingNextgendash = D),
      (l.getVideoPlayerNextgendashEngineHostAPI = w),
      (l.createVideoPlayerNextgendashEngine = A));
  },
  98,
);
