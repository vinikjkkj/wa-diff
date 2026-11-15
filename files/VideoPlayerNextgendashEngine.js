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
    "VideoPlayerNextgendashSmartPlayerStaticSignals",
    "VideoPlayerNextgendashTrackReuseBufferTarget",
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
      var a = $(r),
        i = o(
          "VideoPlayerNextgendashWorkQueue",
        ).createVideoPlayerNextgendashWorkQueue(
          r.scheduleToRun,
          a.enableWorkerOptimizations,
        ),
        l = n("cr:9718") == null ? void 0 : n("cr:9718")(L, i),
        s = o(
          "VideoPlayerNextgendashPrefetchConnection",
        ).createVideoPlayerNextgendashPrefetchConnection({
          config: a,
          hostAPI: r,
          instanceKey: L,
          loggingDestinations: [
            o(
              "VideoPlayerNextgendashLoggingDestinationFBLogger",
            ).createVideoPlayerNextgendashLoggingDestinationFBLogger(),
            n("cr:9712"),
            l == null ? void 0 : l.loggingDestination,
          ],
          siteMetadata: g,
          workerPortFactories: f,
          workerType: p(r),
          workQueue: i,
        });
      return (
        o(
          "VideoPlayerNextgendashSmartPlayerStaticSignals",
        ).subscribeVideoPlayerNextgendashSmartPlayerStaticSignals(
          a,
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
      var t;
      e === void 0 && (e = m);
      var a = o("VideoPlayerNextgendashEnvironment").createDefaultConfig(),
        i = k();
      return babelHelpers.extends(
        {},
        a,
        {
          bandwidthDiagnosticsFallbackDefaultEstimate: i ? x : null,
          blockDuplicatePrefetch: r("gkx")("25126"),
          bufferAheadTargetNoMediaElementSec:
            (t = r("VideoPlayerNextgendashTrackReuseBufferTarget")(
              e.mediaSinkType,
            )) != null
              ? t
              : r("gkx")("26985") || (r("gkx")("17440") && r("gkx")("18263"))
                ? 4
                : a.bufferAheadTargetNoMediaElementSec,
          bufferedRangeStartToleranceSec: o(
            "VideoPlayerNextgendashEngineConfig",
          ).getVideoPlayerNextgendashLGBufferedRangeStartToleranceSec(
            r("gkx")("28286"),
            e.mediaSinkType,
          ),
          bufferingBeginBufferAheadSec: r("gkx")("7137")
            ? 0.1
            : a.bufferingBeginBufferAheadSec,
          bufferingEndBufferAheadSec: r("gkx")("4924")
            ? a.bufferingEndBufferAheadSec
            : r("gkx")("7137")
              ? 0.2
              : a.bufferingEndBufferAheadSec,
          bufferingEndRecentStallBufferAheadSec: r("gkx")("419")
            ? 3
            : a.bufferingEndRecentStallBufferAheadSec,
          bufferingEndRecentStallTimeoutMs: r("gkx")("419")
            ? 1e4
            : a.bufferingEndRecentStallTimeoutMs,
          cacheQualityScoreInRepresentation: r("gkx")("8789"),
          connectVirtualWorkerOnFallbackWhileWaiting: r("gkx")("7763"),
          dataAppendOperationMinBytes: r("gkx")("16681")
            ? null
            : a.dataAppendOperationMinBytes,
          debugLog: r("gkx")("17339"),
          debugOverlay: r("gkx")("26608"),
          debugViz: r("gkx")("17340"),
          disableFallbackFromRealWorkerAfterLinked: !0,
          disablePlaybackLoopSchedulingOnTimer: r("gkx")("16690"),
          disableZeroPlaybackRateWhileBuffering: r("gkx")("4185"),
          eagerResyncOnMediaElementAttach: r("gkx")("17429"),
          enableAdaptiveConcurrentSegmentFetching: r("gkx")("8486"),
          enableBandwidthDiagnosticsFallback: r("gkx")("23799") || i,
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
          enablePrefetchCacheKeyNormalization:
            r("gkx")("4090") || e.mediaSinkType === "WEBCODECS",
          enableQuotaExceededRecovery: r("gkx")("17813"),
          enableQuotaExceededRecoveryForCompositeErrors: r("gkx")("15535"),
          enableSkipRecoveryOnDeliberateDetach: r("gkx")("26845"),
          enableSmartPlayerStaticCapabilityFiltering: r("gkx")("2081"),
          enableSplitAbrEvalSwitchIntervals: r("gkx")("18082"),
          enableStableAbrEvaluationCooldown: r("gkx")("12312"),
          enableStreamReaderFailureRecovery: r("gkx")("12428"),
          enableSuppressIdleTransitions: r("gkx")("7814"),
          enableTasosBwe: r("gkx")("1093"),
          enableVirtualWorkerMessageQueue: r("gkx")("29048"),
          enableWorkerOptimizations: r("gkx")("29300"),
          fatalErrorOnMediaErrorRecoveryCapReached: r("gkx")("5957"),
          fetchHighPri: !0,
          fetchInitSidxOfAllRepresentations: r("gkx")("898"),
          guardSourceBufferOpsWithReadyStateCheck:
            r("gkx")("21333") || r("gkx")("17440"),
          handleUpdateDashManifestInWaitingStates: r("gkx")("6924"),
          isTypeSupportedIncludeContentAttributes: r("gkx")("18943"),
          liveAbrDuringSlowSegmentFetchEnabled: r("gkx")("5049"),
          liveAbrLookAheadFromPlayhead: r("gkx")("5049"),
          liveAbrSlowFetchDownswitchHoldEnabled: r("gkx")("5049"),
          liveAbrTailSwitchAllowPredictiveContinuation: r("gkx")("5049"),
          liveAppendChainForwardCoveredEscapeEnabled: r("gkx")("5049"),
          liveBackBufferRetentionSec: r("gkx")("5049")
            ? 60
            : a.liveBackBufferRetentionSec,
          liveBandwidthDiagnosticsFallbackEnabled: r("gkx")("5049"),
          liveBandwidthSampleRequiresContinuousTransfer: r("gkx")("5049"),
          liveBufferingEndRecentStallBufferAheadSec: r("gkx")("5049")
            ? 2
            : a.liveBufferingEndRecentStallBufferAheadSec,
          liveBufferingEndRecentStallTimeoutMs: r("gkx")("5049")
            ? 8e3
            : a.liveBufferingEndRecentStallTimeoutMs,
          liveEndedStallConfirmSec: r("gkx")("5049")
            ? 60
            : a.liveEndedStallConfirmSec,
          liveEndedTransitionOnStallEnabled: r("gkx")("5049"),
          liveFellBehindEdgeReseekDriftSec: r("gkx")("5049")
            ? 30
            : a.liveFellBehindEdgeReseekDriftSec,
          liveFellBehindPairedRefetchEnabled: r("gkx")("5049"),
          liveFellBehindWindowRefetchEnabled: r("gkx")("5049"),
          liveForceWorkerKickOnStallEnabled: r("gkx")("5049"),
          liveGapSkipStuckAtRangeEndToleranceSec: r("gkx")("5049")
            ? 1.5
            : a.liveGapSkipStuckAtRangeEndToleranceSec,
          liveGapSkipStuckSeekRecoveryMs: r("gkx")("5049")
            ? 2e3
            : a.liveGapSkipStuckSeekRecoveryMs,
          liveLatencyCatchUpSeekEnabled:
            r("gkx")("7763") && e.mediaSinkType === "MSE",
          liveLatencyPlaybackRateEnabled:
            r("gkx")("7763") && e.mediaSinkType === "MSE",
          liveLookbackBufferSec: r("gkx")("5049")
            ? 30
            : a.liveLookbackBufferSec,
          liveNoProgressWatchdogThresholdSec: r("gkx")("5049")
            ? 8
            : a.liveNoProgressWatchdogThresholdSec,
          liveObserveAndActMinDelayMs: r("gkx")("5049")
            ? 4
            : a.liveObserveAndActMinDelayMs,
          liveOfflineRetryMaxDelayMs: r("gkx")("5049")
            ? 1e3
            : a.liveOfflineRetryMaxDelayMs,
          livePausedEdgeRefetchSuspendEnabled: r("gkx")("5049"),
          livePlayheadStallRecoveryEnabled: r("gkx")("5049"),
          livePredictiveSegmentFetchKeyByNumber: r("gkx")("5049"),
          liveProactiveEdgeReseekEnabled: r("gkx")("5049"),
          liveProactiveEdgeReseekToIslandEnabled: r("gkx")("5049"),
          liveReleasePastStateMachineStates: r("gkx")("5049"),
          liveSegmentFetchNetworkFailureToleranceMs: r("gkx")("5049")
            ? 6e4
            : a.liveSegmentFetchNetworkFailureToleranceMs,
          liveSegmentFetchRetryNetworkFailuresIndefinitely: r("gkx")("5049"),
          liveSetSeekableRangeEnabled: r("gkx")("5049"),
          liveStallRecoveryEnabled: r("gkx")("5049"),
          liveStallReseekToEdgeAfterKicks: r("gkx")("5049")
            ? 3
            : a.liveStallReseekToEdgeAfterKicks,
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
            : a.prefetchCacheMaxEntries,
          prefetchResolutionThreshold: r("gkx")("16054")
            ? 1080
            : a.prefetchResolutionThreshold,
          qplEnabled: r("gkx")("19263"),
          realWorkerConnectTimeoutMs: r("gkx")("7763")
            ? 1e4
            : a.realWorkerConnectTimeoutMs,
          realWorkerV2SkipHasteResponsePreloader:
            e.mediaSinkConnectToWorker != null ||
            a.realWorkerV2SkipHasteResponsePreloader,
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
          webCodecsAudioInWorker: r("gkx")("12553"),
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
    function N(e, t, n, r) {
      if (e.config.mediaSinkType === "MSE_TRACK_REUSE") {
        var o = function () {
          return e.host.mediaElementCollectSnapshot(e, t);
        };
        return babelHelpers.extends({}, r, {
          getBufferedRanges: function () {
            return o().buffered.map(function (e) {
              var t = e[0],
                n = e[1];
              return { endTime: n, startTime: t };
            });
          },
          getDuration: function () {
            var e = o().duration;
            return e === "NOT_A_NUMBER" ? 0 : e;
          },
          getEnded: function () {
            return o().ended;
          },
          getLastBufferEndPosition: function () {
            var e,
              t,
              n = o().buffered;
            return (e = (t = n[n.length - 1]) == null ? void 0 : t[1]) != null
              ? e
              : 0;
          },
          getPlayheadPosition: function () {
            return e.host.mediaElementCollectOnlyPlayheadMediaTimeSec(e, t);
          },
          setPlayheadPosition: function (r) {
            e.host.mediaElementSetPlayhead(e, t, r);
          },
        });
      }
      return e.config.mediaSinkType !== "EMSS"
        ? r
        : babelHelpers.extends({}, r, {
            getPlayheadPosition: function () {
              return e.host.mediaElementCollectOnlyPlayheadMediaTimeSec(e, t);
            },
            setPlayheadPosition: function (r) {
              e.host.mediaElementSetPlayhead(e, t, r);
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
    var A = 1;
    function F(e, t) {
      return e === "hidden" && t < A;
    }
    function O(e) {
      var t,
        a = e.initialProps,
        i = w(a.hybridNativeMedia === !0),
        l = p(i),
        s = a.coreVideoPlayerMetaData.videoFBID,
        u = String(a.loggingMetaData.instanceKey),
        c = (t = a.coreVideoPlayerMetaData.subOrigin) != null ? t : void 0,
        m = P++,
        _ = "#" + m + "::" + u,
        h = a.coreVideoPlayerMetaData.initialRepresentationIds,
        y = !1,
        C = null,
        b = !1,
        v = null,
        S = $(i),
        R = o(
          "VideoPlayerNextgendashWorkQueue",
        ).createVideoPlayerNextgendashWorkQueue(
          i.scheduleToRun,
          S.enableWorkerOptimizations,
        ),
        L = n("cr:9718") == null ? void 0 : n("cr:9718")(_, R),
        E = n("cr:11335") ? new (n("cr:11335"))() : null,
        k = { current: null },
        T = { current: null },
        D = { current: null },
        x = [],
        A = null,
        O = null,
        W = null,
        q = a.coreVideoPlayerMetaData.isLiveStreaming === !0 && S.enableLive;
      W = o(
        "VideoPlayerNextgendashSmartPlayerStaticSignals",
      ).subscribeVideoPlayerNextgendashSmartPlayerStaticSignals(S, function () {
        var e = k.current;
        e != null &&
          e.state.state !== "__null__" &&
          e.state.state !== "__disposed__" &&
          e.sendEvent({ type: "update_config_from_env" });
      });
      var U = a.coreVideoPlayerMetaData.isVideoBroadcast;
      ((S.disableZeroPlaybackRateWhileBuffering =
        o(
          "VideoPlayerNextgendashEngineConfig",
        ).isVideoPlayerNextgendashVODOnlyConfigEnabled(
          S.disableZeroPlaybackRateWhileBuffering,
          U,
        ) ||
        S.mediaSinkType === "EMSS" ||
        S.mediaSinkType === "HYBRID"),
        S.mediaSinkType === "EMSS" &&
          ((S.emssSeekPrerollAudioFetch = !0),
          (S.disableBufferGapSkipping = !0),
          (S.enableDisposalResourceCleanup = !0),
          (S.bufferAheadTargetNoMediaElementSec = 9.9)),
        S.mediaSinkType === "WEBCODECS" &&
          ((S.disableZeroPlaybackRateWhileBuffering = !0),
          (S.bufferAheadTargetNoMediaElementSec = 4.9),
          (S.enableMediaElementUnmountNotification = !0),
          (S.enableSkipRecoveryOnDeliberateDetach = !0),
          (S.enableDisposalResourceCleanup = !0)),
        (S.nativeNextFirstMediaPrewarm =
          S.mediaSinkType === "HYBRID" &&
          U !== !0 &&
          a.hybridNativeNextFirstMediaPrewarm === !0));
      var V = S.mediaSinkType === "WEBCODECS",
        H = V
          ? o(
              "VideoPlayerNextgendashWebCodecsDimensions",
            ).capVideoPlayerNextgendashWebCodecsDimensions(a.dimensions)
          : a.dimensions;
      ((S.sidxDisableShiftingMediaTimeRangesByEarliestPresentationTime = o(
        "VideoPlayerNextgendashEngineConfig",
      ).isVideoPlayerNextgendashVODOnlyConfigEnabled(
        S.sidxDisableShiftingMediaTimeRangesByEarliestPresentationTime,
        U,
      )),
        (S.startTimestampSec = a.coreVideoPlayerMetaData.startTimestamp),
        (S.vodStartTimestampPending =
          U !== !0 &&
          S.startTimestampSec > 0 &&
          a.coreVideoPlayerMetaData.startTimestampAfterMediaAttach === !0));
      var G = !S.vodStartTimestampPending,
        z = {
          config: S,
          host: i,
          logging: o(
            "VideoPlayerNextgendashLoggingAPI",
          ).combineLoggingDestinations([
            S.qplEnabled
              ? o(
                  "VideoPlayerNextgendashLoggingDestinationQPLFromEngine",
                ).createVideoPlayerNextgendashLoggingDestinationQPLFromEngine(
                  k,
                  T,
                )
              : void 0,
            o(
              "VideoPlayerNextgendashLoggingDestinationEngineWarning",
            ).createVideoPlayerNextgendashLoggingDestinationEngineWarning(
              function (e) {
                (j &&
                  j.point(
                    "warning",
                    o("VideoPlayerNextgendashQPL").qplAnnotationsForError(
                      B(z, e),
                    ),
                  ),
                  D.current != null
                    ? D.current.dispatch({
                        payload: { warningError: e },
                        type: "implementation_warning",
                      })
                    : x.push(e));
              },
            ),
            n("cr:9712"),
            L == null ? void 0 : L.loggingDestination,
            E == null ? void 0 : E.loggingDestination,
            o(
              "VideoPlayerNextgendashLoggingDestinationODSFromEngine",
            ).createVideoPlayerNextgendashLoggingDestinationODSFromEngine(),
            o(
              "VideoPlayerNextgendashLoggingDestinationFBLogger",
            ).createVideoPlayerNextgendashLoggingDestinationFBLogger(),
          ]),
          loggingState: {
            logstampPrefix: _,
            logstampTint: (m % 5) / 5,
            metadata: babelHelpers.extends({}, g, {
              nextgendashCreatedAt: i.clock(),
              nextgendashInstanceIndex: m,
              playerInstanceKey: u,
              playerSubOrigin: c,
              videoFBID: s,
            }),
          },
          workQueue: R,
        },
        j = z.config.qplEnabled
          ? o("VideoPlayerNextgendashQPL").qplStartPlayingApi(z)
          : null;
      ((T.current = j), j == null || j.start());
      var K = a.coreVideoPlayerMetaData.expiredVideoUrlRefreshHandler,
        Q = null,
        X = null,
        Y = null,
        J = !1,
        Z = o(
          "VideoPlayerNextgendashMain",
        ).VideoPlayerNextgendashMainSM.createSM(
          "VideoPlayerNextgendashMain",
          z,
          null,
          {
            abrConfig: o(
              "VideoPlayerNextgendashEngineConfig",
            ).createVideoPlayerNextgendashABRConfig({
              videoPreferredMinimumSmallestDimension: I(a.minQualityPreference),
            }),
            audioOnly: a.coreVideoPlayerMetaData.audioOnly === !0,
            initialExpiredVideoUrlRefreshHandlerState:
              K != null ? { handler: M(K), identity: K } : null,
            initialMediaVariantIfLangExistsInManifest:
              a.initialAudioUserPreferredLanguage != null
                ? {
                    audioLang: a.initialAudioUserPreferredLanguage,
                    audioRole: "dub",
                    videoLang: z.config.enableLipSync
                      ? a.initialAudioUserPreferredLanguage
                      : null,
                    videoRole: z.config.enableLipSync ? "dub" : null,
                  }
                : null,
            nextgendashInstanceIndex: m,
            onBufferingChanged: function (t) {
              var e = t.changeDirection,
                n = t.domEventAdjustedClock,
                r = t.isInitial;
              (Q != null && (Q(), (Q = null)),
                e === "started"
                  ? ((Q = j == null ? void 0 : j.subspan("buffering")),
                    ie.dispatch({
                      payload: {
                        bufferingType: r ? "start/unpause" : "in_play",
                        disableZeroPlaybackRate: z.config
                          .disableZeroPlaybackRateWhileBuffering
                          ? !0
                          : void 0,
                      },
                      type: "buffering_begin_requested",
                    }))
                  : e === "stopped" &&
                    ie.dispatch({
                      payload: { domEventPerfTimestamp: n.perfMs },
                      type: "buffering_end_requested",
                    }));
            },
            onError: function (t) {
              ((z.config.nativeNextFirstMediaPrewarm = !1),
                j &&
                  j.point(
                    "error",
                    o("VideoPlayerNextgendashQPL").qplAnnotationsForError(t),
                  ),
                v == null && (v = t),
                L
                  ? (L.setHalted(t.name),
                    R.enqueueWork(function () {
                      ae(t, "comet_nextgendash_main_error");
                    }))
                  : ae(t, "comet_nextgendash_main_error"));
            },
            onManifestUpdated: function () {
              (j == null || j.point("manifest_updated"),
                ie.dispatch({
                  payload: {
                    selectedVideoQuality: te.getUserSelectedVideoQuality(),
                  },
                  type: "implementation_engine_qualities_changed",
                }));
            },
            onMediaSourceAttachedChanged: function (t, n) {
              if (
                ((b = n),
                n || C == null || C(),
                X != null && (X(), (X = null)),
                n && (X = j == null ? void 0 : j.subspan("media_source")),
                !r("gkx")("19514"))
              ) {
                var e,
                  i =
                    (e = Z.state.mediaElement) == null
                      ? void 0
                      : e.state.mediaElement,
                  l =
                    i != null
                      ? o(
                          "VideoPlayerNextgendashHostAPI",
                        ).unopaqueVideoPlayerNextgendashHostMediaElement(i)
                      : null;
                (l == null ||
                  le.current == null ||
                  l !== le.current.getUnderlyingVideoElement()) &&
                  (le.current =
                    l != null && i != null
                      ? N(
                          z,
                          i,
                          l,
                          o(
                            "VideoPlayerImplementationEngineVideoElementAPI",
                          ).createVideoPlayerImplementationEngineVideoElementAPI(
                            l,
                          ),
                        )
                      : null);
              }
              var s = function () {
                ((y = !0),
                  ie.dispatch({
                    payload: {
                      selectedVideoQuality: te.getUserSelectedVideoQuality(),
                    },
                    type: "implementation_engine_initialized",
                  }));
                {
                  var e = a.coreVideoPlayerMetaData.startTimestamp;
                  e > 0 &&
                    G &&
                    ie.dispatch({
                      payload: { seekTargetPosition: e },
                      type: "controller_seek_requested",
                    });
                }
              };
              if (n && !y && C == null) {
                var u = function () {
                    var e,
                      t =
                        (e = Z.state.mediaElement) == null
                          ? void 0
                          : e.state.mediaElement;
                    return t != null
                      ? o(
                          "VideoPlayerNextgendashHostAPI",
                        ).unopaqueVideoPlayerNextgendashHostMediaElement(t)
                      : null;
                  },
                  c = (d || (d = r("ExecutionEnvironment"))).canUseDOM
                    ? document
                    : null,
                  m = function () {
                    var e = u();
                    return (
                      c != null &&
                      e != null &&
                      F(c.visibilityState, e.readyState)
                    );
                  };
                if (q && c != null && m()) {
                  var p = function () {
                    b && !m() && (C == null || C(), y || s());
                  };
                  (c.addEventListener("visibilitychange", p),
                    c.addEventListener("loadedmetadata", p, !0),
                    (C = function () {
                      (c.removeEventListener("visibilitychange", p),
                        c.removeEventListener("loadedmetadata", p, !0),
                        (C = null));
                    }));
                } else s();
              }
            },
            onSendHaltedToWorkerChanged:
              L == null ? void 0 : L.onSendHaltedToWorkerChanged,
            onVideoRepresentationChanged: function (t, n) {
              (j &&
                j.point("video_representation_changed", {
                  string: {
                    fromVideoRepresentationId: String(t),
                    toVideoRepresentationId: String(n),
                  },
                }),
                ie.dispatch({ payload: {}, type: "representation_changed" }));
            },
            playerInstanceKey: u,
            playerSubOrigin: c,
            playerViewportDimensionsInitial: H,
            prefetchResultInitial:
              h != null && h.length > 0
                ? {
                    prefetchedRepresentationIds: h,
                    prefetchStartedAt: z.host.clock(),
                  }
                : null,
            videoFBID: s,
            workerPortFactories: f,
            workerTypeInitial: l,
          },
        );
      k.current = Z;
      function ee() {
        var e;
        return (e = le.current) != null ? e : null;
      }
      var te = o(
          "VideoPlayerNextgendashEngineExtrasAPI",
        ).createVideoPlayerNextgendashEngineExtrasAPI({
          getVideoElementAPI: ee,
          mainSm: Z,
        }),
        ne = null,
        re = o(
          "VideoPlayerImplementationEngineAPI",
        ).createVideoPlayerImplementationEngine({
          createDebugAPI: function (t) {
            var e = t.getVideoElementAPI,
              n = t.loggerToVPL;
            return E == null
              ? void 0
              : E.createDebugAPI({
                  engineExtrasAPI: te,
                  getConfig: function () {
                    return a.experimentationConfig;
                  },
                  getVideoElementAPI: e,
                  loggerToVPL: n,
                  mainSm: Z,
                });
          },
          createVideoPlayerError: function (t, n) {
            var e = o("nextgendasherr").nextgendasherrFromNextgendasherr(t);
            return e != null
              ? o(
                  "VideoPlayerNextgendashEngineErrors",
                ).createVideoPlayerErrorFromNextgendashEngine(z, e, n)
              : o(
                  "VideoPlayerImplementationErrors",
                ).createVideoPlayerErrorFromGenericError(
                  "VideoPlayerFatalCaughtByNextgendashEngine",
                  t,
                  n,
                );
          },
          destroyEngineParts: function () {
            ((z.config.nativeNextFirstMediaPrewarm = !1), e());
            function e() {
              if (
                (j == null || j.point("destroy"),
                C == null || C(),
                W == null || W(),
                (W = null),
                r("gkx")("19514"))
              ) {
                var e, t;
                (j == null || j.endWithAbort(),
                  (e = A) == null || e.remove(),
                  (A = null),
                  (t = O) == null || t.remove(),
                  (O = null));
              }
              (Z.sendEvent({ reason: "destroyEngineParts", type: "__dispose" }),
                L == null || L.disconnect());
            }
          },
          engineCreateArgs: e,
          engineExtrasAPI: te,
          engineMetadata: {
            isAbrEnabled: !0,
            mediaSinkType: S.mediaSinkType,
            playerInstanceKey: a.loggingMetaData.instanceKey,
            playerVersion:
              S.mediaSinkType === "EMSS"
                ? "comet_nextgendash_wasm"
                : "comet_nextgendash",
            streamingFormat: "dash",
          },
          handleVideoElementChanged: function (t, n) {
            ((t != null || J) && (z.config.nativeNextFirstMediaPrewarm = !1),
              t != null && (J = !0),
              Y != null && (Y(), (Y = null)),
              t != null
                ? ((Y = j == null ? void 0 : j.subspan("video_element")),
                  ne != null && (r("clearTimeout")(ne), (ne = null)),
                  Z.sendEvent({
                    mediaElement: o(
                      "VideoPlayerNextgendashHostAPI",
                    ).opaqueVideoPlayerNextgendashHostMediaElement(t),
                    type: "update_media_element",
                  }))
                : z.config.enableMediaElementUnmountNotification &&
                  Z.sendEvent({
                    mediaElement: null,
                    type: "update_media_element",
                  }));
          },
          handleVideoInfoChange: function (t) {
            if (
              (t.hybridNativeNextFirstMediaPrewarm !== !0 &&
                z.config.nativeNextFirstMediaPrewarm &&
                ((z.config.nativeNextFirstMediaPrewarm = !1),
                Z.state.state !== "__null__" &&
                  Z.state.state !== "__disposed__" &&
                  Z.sendEvent({ type: "update_config_from_env" })),
              Z.state.state !== "__null__" && Z.state.state !== "__disposed__")
            ) {
              var e,
                n = Z.state,
                r = V
                  ? o(
                      "VideoPlayerNextgendashWebCodecsDimensions",
                    ).capVideoPlayerNextgendashWebCodecsDimensions(t.dimensions)
                  : t.dimensions;
              (r.height !== n.playerViewportDimensions.height ||
                r.width !== n.playerViewportDimensions.width) &&
                Z.sendEvent({
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
                Z.sendEvent({
                  expiredVideoUrlRefreshHandlerState:
                    i != null ? { handler: M(i), identity: i } : null,
                  type: "update_expired_video_url_refresh_handler",
                }),
                S.trackScrollPosition &&
                  t.videoPlayerScrollPositionAPI != null &&
                  n.scrollPositionAPI !== t.videoPlayerScrollPositionAPI &&
                  Z.sendEvent({
                    scrollPositionAPI: t.videoPlayerScrollPositionAPI,
                    type: "update_scroll_position_api",
                  }));
            }
            return !1;
          },
        }),
        oe = re.engine,
        ae = re.handleFatalImplementationError,
        ie = re.machine,
        le = re.videoElementAPIRef;
      D.current = ie;
      for (var se of x)
        ie.dispatch({
          payload: { warningError: se },
          type: "implementation_warning",
        });
      if (
        ((x.length = 0),
        (a.manifest != null || a.manifestUrl != null) &&
          Z.sendEvent({
            dashManifestUrl: a.manifestUrl,
            dashManifestXmlString: a.manifest,
            type: "update_dash_manifest",
          }),
        j)
      ) {
        var ue = void 0,
          ce = null,
          de = null,
          me = function () {
            var e = ie.getCurrentState().controlledState,
              t = e.error,
              n = e.playbackState;
            if (n !== ue) {
              if (
                (ce != null &&
                  (t != null || n !== "paused") &&
                  (ce(), (ce = null)),
                de != null &&
                  (t != null || n !== "stalling") &&
                  (de(), (de = null)),
                t != null)
              ) {
                var r;
                (j.endWithError(v != null ? v : B(z, t)),
                  (r = A) == null || r.remove(),
                  (A = null));
              } else if (n === "playing") {
                var o;
                (j.endWithSuccess(), (o = A) == null || o.remove(), (A = null));
              } else
                n === "paused"
                  ? (ce = j.subspan("paused"))
                  : n === "stalling" && (de = j.subspan("stalling"));
              ue = n;
            }
          };
        ((A = oe.implementationController.subscribe(me)), me());
      }
      if (z.config.logStallDetailsAsPlayerWarning) {
        var pe = void 0,
          _e = null,
          fe = function () {
            var e = ie.getCurrentState().controlledState,
              t = e.error,
              n = e.playbackState;
            if (n !== pe) {
              if (
                ((t != null || n !== "stalling") &&
                  _e != null &&
                  (r("clearTimeout")(_e), (_e = null)),
                t != null)
              ) {
                var o;
                ((o = O) == null || o.remove(), (O = null));
              } else if (n === "stalling" && _e == null) {
                var a = z.host.clock(),
                  i = 200;
                _e = r("setTimeout")(function () {
                  Z.sendEvent({
                    stallStartClock: a,
                    type: "debug_log_stall_details",
                  });
                }, i);
              }
              pe = n;
            }
          };
        ((O = oe.implementationController.subscribe(fe)), fe());
      }
      return (j == null || j.point("engine_created"), oe);
    }
    function B(e, t) {
      return o("nextgendasherr").nextgendasherr.apply(
        void 0,
        [e, t.errorName, t.errorMessageFormat].concat(t.errorMessageParams),
      );
    }
    ((l.preloadVideoPlayerNextgendashWorker = h),
      (l.prefetchUsingNextgendash = T),
      (l.releasePrefetchUsingNextgendash = D),
      (l.internal_wrapVideoElementAPIForMediaSink = N),
      (l.getVideoPlayerNextgendashEngineHostAPI = w),
      (l.internal_isMediaLoadPendingWhileHidden = F),
      (l.createVideoPlayerNextgendashEngine = O));
  },
  98,
);
