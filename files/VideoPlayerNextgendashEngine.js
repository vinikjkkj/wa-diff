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
    "VideoPlayerNextgendashFetchedResource",
    "VideoPlayerNextgendashHostAPI",
    "VideoPlayerNextgendashHostAPIComet",
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
    "cr:22420",
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
      m,
      p = n("cr:18606") != null ? n("cr:18606")(n("cr:3020")) : n("cr:3020"),
      _ =
        p.mediaSinkType === "EMSS"
          ? n("cr:18606") != null
            ? n("cr:18606")(r("VideoPlayerNextgendashHostAPIComet"))
            : r("VideoPlayerNextgendashHostAPIComet")
          : null;
    (m || (m = r("ExecutionEnvironment"))).canUseDOM &&
      r("gkx")("12553") &&
      (p.warmMediaSink == null || p.warmMediaSink());
    function f(e) {
      if ((e === void 0 && (e = p), e === _)) return "VirtualWorker";
      if (e.mediaSinkType === "HYBRID")
        return n("cr:39935") != null ? "RealWorkerV2" : "VirtualWorker";
      if (e.mediaSinkConnectToWorker != null) return "RealWorkerV2";
      if (r("gkx")("9512")) {
        var t = r("gkx")("7137") ? "ManagedMediaSource" : "MediaSource";
        if (e.mediaSourceCanConstructInDedicatedWorker(t))
          return r("gkx")("4484") ? "RealWorkerV2" : "RealWorker";
      }
      return "VirtualWorker";
    }
    var g = f();
    g === "VirtualWorker" &&
      o(
        "VideoPlayerNextgendashConnectionPortToVirtualWorker",
      ).preloadWorkerEnvironmentJSResourceWhenVirtualWorkerOnly();
    var h = {
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
            (u =
              (c = n("cr:39935") != null ? n("cr:39935") : n("cr:17758")) !=
              null
                ? c
                : n("cr:22420")) == null
              ? void 0
              : u.createVideoPlayerNextgendashConnectionPortToRealWorkerV2) !=
          null
            ? s
            : null,
        VirtualWorker: o("VideoPlayerNextgendashConnectionPortToVirtualWorker")
          .createVideoPlayerNextgendashConnectionPortToVirtualWorker,
      },
      y = {
        clientRev: r("SiteData").client_revision,
        cometEnv: r("SiteData").comet_env,
      };
    function C(e) {
      e === void 0 && (e = !1);
      var t = e ? n("cr:624") : p;
      t != null &&
        o("VideoPlayerNextgendashConnectionMainToWorker").preloadWorker({
          envForErrors: {
            host: { clock: t.clock },
            loggingState: { metadata: babelHelpers.extends({}, y) },
          },
          virtualWorkerHostAPI: t,
          workerEnvConfig: N(t),
          workerPortFactories: h,
          workerType: f(t),
        });
    }
    var b = null,
      v = null,
      S = "airwave",
      R = !1,
      L = !1;
    function E() {
      return r("gkx")("19309") && r("gkx")("18263");
    }
    var k = "ngdprefetch-" + r("guid")();
    function I(e) {
      e === void 0 && (e = !1);
      var t = e ? v : b;
      if (t != null) return t;
      var r = e ? n("cr:624") : p;
      if (r == null)
        throw o("nextgendasherr").nextgendasherr(
          { host: { clock: p.clock }, loggingState: { metadata: {} } },
          "VideoPlayerNextgendashNativePrefetchUnavailable",
        );
      C(e);
      var a = N(r),
        i = o(
          "VideoPlayerNextgendashWorkQueue",
        ).createVideoPlayerNextgendashWorkQueue(
          r.scheduleToRun,
          a.enableWorkerOptimizations,
        ),
        l = n("cr:9718") == null ? void 0 : n("cr:9718")(k, i),
        s = o(
          "VideoPlayerNextgendashPrefetchConnection",
        ).createVideoPlayerNextgendashPrefetchConnection({
          config: a,
          hostAPI: r,
          instanceKey: k,
          loggingDestinations: [
            o(
              "VideoPlayerNextgendashLoggingDestinationFBLogger",
            ).createVideoPlayerNextgendashLoggingDestinationFBLogger(),
            n("cr:9712"),
            l == null ? void 0 : l.loggingDestination,
          ],
          siteMetadata: y,
          workerPortFactories: h,
          workerType: f(r),
          workQueue: i,
        });
      return (
        o(
          "VideoPlayerNextgendashSmartPlayerStaticSignals",
        ).subscribeVideoPlayerNextgendashSmartPlayerStaticSignals(
          a,
          function () {},
        ),
        e ? (v = s) : (b = s),
        s
      );
    }
    function T() {
      return r("gkx")("26980");
    }
    function D(e) {
      return e == null && !T() && r("gkx")("16361")
        ? 540
        : e == null && r("gkx")("21918")
          ? 480
          : r("gkx")("2312")
            ? { "%future added value": 0, HD: 720, SD: 0, UHD: 1080, "": 0 }[
                e != null ? e : ""
              ]
            : 0;
    }
    function x(e, t) {
      var r = (t == null ? void 0 : t.nativeOnly) === !0;
      if (!(r && n("cr:624") == null)) {
        var a = I(r),
          i;
        if (E()) {
          i = S;
          var l = r ? L : R;
          l ||
            (r ? (L = !0) : (R = !0),
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
            videoPreferredMinimumSmallestDimension: D(null),
          }),
          void 0,
          i,
        );
      }
    }
    function $(e, t) {
      var n;
      if ((t == null ? void 0 : t.nativeOnly) === !0) {
        var r;
        (r = v) == null ||
          r.releasePrefetchKey(
            o(
              "VideoPlayerNextgendashWorkerPrefetchCache",
            ).getVideoPlayerNextgendashPrefetchKeyForSink(e, "HYBRID"),
          );
        return;
      }
      (n = b) == null || n.releasePrefetchKey(e);
    }
    var P = 5e6;
    function N(e) {
      var t, a;
      e === void 0 && (e = p);
      var i = o("VideoPlayerNextgendashEnvironment").createDefaultConfig(),
        l = T();
      return babelHelpers.extends(
        {},
        i,
        {
          bandwidthDiagnosticsFallbackDefaultEstimate: l ? P : null,
          blockDuplicatePrefetch: r("gkx")("25126"),
          bufferAheadTargetNoMediaElementSec:
            (t = o(
              "VideoPlayerNextgendashTrackReuseBufferTarget",
            ).getVideoPlayerNextgendashTrackReuseBufferTarget(
              e.mediaSinkType,
            )) != null
              ? t
              : r("gkx")("26985") || (r("gkx")("17440") && r("gkx")("18263"))
                ? 4
                : i.bufferAheadTargetNoMediaElementSec,
          bufferAheadTargetPlayingSec:
            (a = o(
              "VideoPlayerNextgendashTrackReuseBufferTarget",
            ).getVideoPlayerNextgendashTrackReusePlayingBufferTarget(
              e.mediaSinkType,
            )) != null
              ? a
              : i.bufferAheadTargetPlayingSec,
          bufferedRangeStartToleranceSec: o(
            "VideoPlayerNextgendashEngineConfig",
          ).getVideoPlayerNextgendashLGBufferedRangeStartToleranceSec(
            r("gkx")("28286"),
            e.mediaSinkType,
          ),
          bufferingBeginBufferAheadSec: r("gkx")("7137")
            ? 0.1
            : i.bufferingBeginBufferAheadSec,
          bufferingEndBufferAheadSec: r("gkx")("4924")
            ? i.bufferingEndBufferAheadSec
            : r("gkx")("7137")
              ? 0.2
              : i.bufferingEndBufferAheadSec,
          bufferingEndRecentStallBufferAheadSec: r("gkx")("419")
            ? 3
            : i.bufferingEndRecentStallBufferAheadSec,
          bufferingEndRecentStallTimeoutMs: r("gkx")("419")
            ? 1e4
            : i.bufferingEndRecentStallTimeoutMs,
          cacheQualityScoreInRepresentation: r("gkx")("8789"),
          connectVirtualWorkerOnFallbackWhileWaiting: r("gkx")("7763"),
          dataAppendOperationMinBytes: r("gkx")("16681")
            ? null
            : i.dataAppendOperationMinBytes,
          debugLog: r("gkx")("17339"),
          debugOverlay: r("gkx")("26608"),
          debugViz: r("gkx")("17340"),
          disableFallbackFromRealWorkerAfterLinked: !0,
          disablePlaybackLoopSchedulingOnTimer: r("gkx")("16690"),
          disableZeroPlaybackRateWhileBuffering: r("gkx")("18773"),
          eagerResyncOnMediaElementAttach: r("gkx")("17429"),
          enableAdaptiveConcurrentSegmentFetching: r("gkx")("8486"),
          enableBandwidthDiagnosticsFallback: r("gkx")("18797") || l,
          enableCdnUrlRefresh: r("gkx")("17628"),
          enableCombinedInitSidxFetch: r("gkx")("17649"),
          enableDisposalResourceCleanup: r("gkx")("11526"),
          enableDynamicBufferWatermarks: r("gkx")("11395"),
          enableExactSegmentGroupByteRange: r("gkx")("21518"),
          enableFBPrefetchCacheKeyNormalization: r("gkx")("18280"),
          enableFetchPool: r("gkx")("21866"),
          enableFilterFailedPrefetchBootstrap: r("gkx")("11654"),
          enableLipSync: r("gkx")("3922") || r("gkx")("7221"),
          enableLive: r("gkx")("5049"),
          enableMediaElementUnmountNotification: r("gkx")("17440"),
          enableOwnedBandwidthEstimator:
            (e === p || e === _) && n("cr:18606") != null,
          enablePredictiveSidxPrefetch: r("gkx")("4970"),
          enablePrefetchBandwidthSampling: r("gkx")("12118"),
          enablePrefetchCacheKeyNormalization:
            r("gkx")("4090") || e.mediaSinkType === "WEBCODECS",
          enableQuotaExceededRecovery: r("gkx")("17813"),
          enableQuotaExceededRecoveryForCompositeErrors: r("gkx")("18823"),
          enableSkipRecoveryOnDeliberateDetach: r("gkx")("26845"),
          enableSmartPlayerStaticCapabilityFiltering: r("gkx")("2081"),
          enableSplitAbrEvalSwitchIntervals: r("gkx")("18082"),
          enableStableAbrEvaluationCooldown: r("gkx")("12312"),
          enableStreamReaderFailureRecovery: r("gkx")("18892"),
          enableSuppressIdleTransitions: r("gkx")("18893"),
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
            : i.liveBackBufferRetentionSec,
          liveBandwidthDiagnosticsFallbackEnabled: r("gkx")("5049"),
          liveBandwidthSampleRequiresContinuousTransfer: r("gkx")("5049"),
          liveBroadcastGoneOnHttp410Enabled: r("gkx")("7763"),
          liveBufferingEndRecentStallBufferAheadSec: r("gkx")("5049")
            ? 2
            : i.liveBufferingEndRecentStallBufferAheadSec,
          liveBufferingEndRecentStallTimeoutMs: r("gkx")("5049")
            ? 8e3
            : i.liveBufferingEndRecentStallTimeoutMs,
          liveEndedStallConfirmSec: r("gkx")("5049")
            ? 60
            : i.liveEndedStallConfirmSec,
          liveEndedTransitionOnStallEnabled: r("gkx")("5049"),
          liveFellBehindEdgeReseekDriftSec: r("gkx")("5049")
            ? 30
            : i.liveFellBehindEdgeReseekDriftSec,
          liveFellBehindPairedRefetchEnabled: r("gkx")("5049"),
          liveFellBehindWindowRefetchEnabled: r("gkx")("5049"),
          liveForceWorkerKickOnStallEnabled: r("gkx")("5049"),
          liveGapSkipStuckAtRangeEndToleranceSec: r("gkx")("5049")
            ? 1.5
            : i.liveGapSkipStuckAtRangeEndToleranceSec,
          liveGapSkipStuckSeekRecoveryMs: r("gkx")("5049")
            ? 2e3
            : i.liveGapSkipStuckSeekRecoveryMs,
          liveLatencyCatchUpSeekEnabled:
            r("gkx")("7763") && e.mediaSinkType === "MSE",
          liveLatencyPlaybackRateEnabled:
            r("gkx")("7763") && e.mediaSinkType === "MSE",
          liveListedSegmentsUsePredictedURLEnabled: r("gkx")("7763"),
          liveLookbackBufferSec: r("gkx")("5049")
            ? 30
            : i.liveLookbackBufferSec,
          liveNoProgressWatchdogThresholdSec: r("gkx")("5049")
            ? 8
            : i.liveNoProgressWatchdogThresholdSec,
          liveObserveAndActMinDelayMs: r("gkx")("5049")
            ? 4
            : i.liveObserveAndActMinDelayMs,
          liveOfflineRetryMaxDelayMs: r("gkx")("5049")
            ? 1e3
            : i.liveOfflineRetryMaxDelayMs,
          livePausedEdgeRefetchSuspendEnabled: r("gkx")("5049"),
          livePlayheadStallRecoveryEnabled: r("gkx")("5049"),
          livePredictiveSegmentFetchKeyByNumber: r("gkx")("5049"),
          liveProactiveEdgeReseekEnabled: r("gkx")("5049"),
          liveProactiveEdgeReseekToIslandEnabled: r("gkx")("5049"),
          liveRefreshInlineManifestImmediatelyEnabled: r("gkx")("7763"),
          liveReleasePastStateMachineStates: r("gkx")("5049"),
          liveSegmentFetchNetworkFailureToleranceMs: r("gkx")("5049")
            ? 6e4
            : i.liveSegmentFetchNetworkFailureToleranceMs,
          liveSegmentFetchRetryNetworkFailuresIndefinitely: r("gkx")("5049"),
          liveSetSeekableRangeEnabled: r("gkx")("5049"),
          liveStallRecoveryEnabled: r("gkx")("5049"),
          liveStallReseekToEdgeAfterKicks: r("gkx")("5049")
            ? 3
            : i.liveStallReseekToEdgeAfterKicks,
          liveStartFromLatestParsedManifestEnabled: r("gkx")("7763"),
          liveStartPositionNearSegmentStartEnabled:
            r("gkx")("7763") && e.mediaSinkType === "MSE",
          liveStartSeekWhenBufferedEnabled:
            r("gkx")("7763") && e.mediaSinkType === "MSE",
          logStallDetailsAsPlayerWarning: r("gkx")("20111"),
          maxConcurrentPrefetchTasks: E()
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
            : i.prefetchCacheMaxEntries,
          prefetchResolutionThreshold: r("gkx")("16054")
            ? 1080
            : i.prefetchResolutionThreshold,
          qplEnabled: r("gkx")("19263"),
          realWorkerConnectTimeoutMs: r("gkx")("7763")
            ? 1e4
            : i.realWorkerConnectTimeoutMs,
          realWorkerV2SkipHasteResponsePreloader:
            e.mediaSinkConnectToWorker != null ||
            i.realWorkerV2SkipHasteResponsePreloader,
          reduceStateMachineEventOverhead: r("gkx")("2977"),
          releaseParsedManifestXML: r("gkx")("28847"),
          releasePastStateMachineStates: r("gkx")("5042"),
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
    var M = 0;
    function w(e, t, r, o) {
      if (e.config.mediaSinkType === "MSE_TRACK_REUSE") {
        var a = null,
          i = function () {
            if (a != null) return a;
            var r = e.host.mediaElementCollectSnapshot(e, t);
            return (
              (a = r),
              (d || (d = n("Promise"))).resolve().then(function () {
                a === r && (a = null);
              }),
              r
            );
          };
        return babelHelpers.extends({}, o, {
          getBufferedRanges: function () {
            return i().buffered.map(function (e) {
              var t = e[0],
                n = e[1];
              return { endTime: n, startTime: t };
            });
          },
          getDuration: function () {
            var e = i().duration;
            return e === "NOT_A_NUMBER" ? 0 : e;
          },
          getEnded: function () {
            return i().ended;
          },
          getLastBufferEndPosition: function () {
            var e,
              t,
              n = i().buffered;
            return (e = (t = n[n.length - 1]) == null ? void 0 : t[1]) != null
              ? e
              : 0;
          },
          getPlayheadPosition: function () {
            return e.host.mediaElementCollectOnlyPlayheadMediaTimeSec(e, t);
          },
          setPlayheadPosition: function (r) {
            ((a = null), e.host.mediaElementSetPlayhead(e, t, r));
          },
        });
      }
      return e.config.mediaSinkType !== "EMSS"
        ? o
        : babelHelpers.extends({}, o, {
            getPlayheadPosition: function () {
              return e.host.mediaElementCollectOnlyPlayheadMediaTimeSec(e, t);
            },
            setPlayheadPosition: function (r) {
              e.host.mediaElementSetPlayhead(e, t, r);
            },
          });
    }
    function A(e) {
      return function (t) {
        var r = t.url;
        return new (d || (d = n("Promise")))(function (t) {
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
    function F(e, t) {
      if ((t === void 0 && (t = !1), !e)) return t && _ != null ? _ : p;
      if (n("cr:624") == null)
        throw o("nextgendasherr").nextgendasherr(
          { host: { clock: p.clock }, loggingState: { metadata: {} } },
          "VideoPlayerNextgendashHybridHostUnavailable",
        );
      return n("cr:624");
    }
    var O = 1;
    function B(e, t) {
      return e === "hidden" && t < O;
    }
    function W(e) {
      return (
        e.isLiveBroadcastGoneOnHttp410 &&
        !e.hadPlayableMedia &&
        /(^|\/)FetchHTTP410$/.test(e.errorName)
      );
    }
    function q(e) {
      var t,
        a,
        i = e.initialProps,
        l = F(
          i.hybridNativeMedia === !0,
          i.coreVideoPlayerMetaData.isLiveStreaming === !0,
        ),
        s = f(l),
        u = i.coreVideoPlayerMetaData.videoFBID,
        c = String(i.loggingMetaData.instanceKey),
        d = (t = i.coreVideoPlayerMetaData.subOrigin) != null ? t : void 0,
        p = M++,
        _ = "#" + p + "::" + c,
        g = i.coreVideoPlayerMetaData.initialRepresentationIds,
        C = !1,
        b = null,
        v = !1,
        S = null,
        R = N(l),
        L = o(
          "VideoPlayerNextgendashWorkQueue",
        ).createVideoPlayerNextgendashWorkQueue(
          l.scheduleToRun,
          R.enableWorkerOptimizations,
        ),
        E = n("cr:9718") == null ? void 0 : n("cr:9718")(_, L),
        k = n("cr:11335") ? new (n("cr:11335"))() : null,
        I = { current: null },
        T = { current: null },
        x = { current: null },
        $ = [],
        P = null,
        O = null,
        q = null,
        V = null,
        H = i.coreVideoPlayerMetaData.isLiveStreaming === !0 && R.enableLive;
      V = o(
        "VideoPlayerNextgendashSmartPlayerStaticSignals",
      ).subscribeVideoPlayerNextgendashSmartPlayerStaticSignals(R, function () {
        var e = I.current;
        e != null &&
          e.state.state !== "__null__" &&
          e.state.state !== "__disposed__" &&
          e.sendEvent({ type: "update_config_from_env" });
      });
      var G = i.coreVideoPlayerMetaData.isVideoBroadcast;
      ((R.disableZeroPlaybackRateWhileBuffering =
        o(
          "VideoPlayerNextgendashEngineConfig",
        ).isVideoPlayerNextgendashVODOnlyConfigEnabled(
          R.disableZeroPlaybackRateWhileBuffering,
          G,
        ) ||
        R.mediaSinkType === "EMSS" ||
        R.mediaSinkType === "HYBRID" ||
        R.mediaSinkType === "MSE_TRACK_REUSE"),
        R.mediaSinkType === "EMSS" &&
          ((R.emssSeekPrerollAudioFetch = !0),
          (R.disableBufferGapSkipping = !0),
          (R.enableDisposalResourceCleanup = !0),
          (R.bufferAheadTargetNoMediaElementSec = 9.9)),
        R.mediaSinkType === "WEBCODECS" &&
          ((R.disableZeroPlaybackRateWhileBuffering = !0),
          (R.bufferAheadTargetNoMediaElementSec = 4.9),
          (R.enableMediaElementUnmountNotification = !0),
          (R.enableSkipRecoveryOnDeliberateDetach = !0),
          (R.enableDisposalResourceCleanup = !0)),
        (R.isLiveStreamingFromProduct =
          i.coreVideoPlayerMetaData.isLiveStreaming === !0),
        (R.nativeNextFirstMediaPrewarm =
          R.mediaSinkType === "HYBRID" &&
          G !== !0 &&
          i.hybridNativeNextFirstMediaPrewarm === !0),
        (R.nativeNextPrewarmBufferAheadSec = R.nativeNextFirstMediaPrewarm
          ? Math.max(
              0,
              (a = i.hybridNativeNextPrewarmBufferAheadSec) != null ? a : 0,
            )
          : 0),
        (R.nativeHandoverFetchHold =
          R.mediaSinkType === "HYBRID" &&
          G !== !0 &&
          i.hybridNativeHandoverFetchHold === !0));
      var z = R.mediaSinkType === "WEBCODECS",
        j = z
          ? o(
              "VideoPlayerNextgendashWebCodecsDimensions",
            ).capVideoPlayerNextgendashWebCodecsDimensions(i.dimensions)
          : i.dimensions;
      ((R.sidxDisableShiftingMediaTimeRangesByEarliestPresentationTime = o(
        "VideoPlayerNextgendashEngineConfig",
      ).isVideoPlayerNextgendashVODOnlyConfigEnabled(
        R.sidxDisableShiftingMediaTimeRangesByEarliestPresentationTime,
        G,
      )),
        (R.startTimestampSec = i.coreVideoPlayerMetaData.startTimestamp),
        (R.vodStartTimestampPending =
          G !== !0 &&
          R.startTimestampSec > 0 &&
          i.coreVideoPlayerMetaData.startTimestampAfterMediaAttach === !0));
      var K = !R.vodStartTimestampPending,
        Q = {
          config: R,
          host: l,
          logging: o(
            "VideoPlayerNextgendashLoggingAPI",
          ).combineLoggingDestinations([
            R.qplEnabled
              ? o(
                  "VideoPlayerNextgendashLoggingDestinationQPLFromEngine",
                ).createVideoPlayerNextgendashLoggingDestinationQPLFromEngine(
                  I,
                  T,
                )
              : void 0,
            o(
              "VideoPlayerNextgendashLoggingDestinationEngineWarning",
            ).createVideoPlayerNextgendashLoggingDestinationEngineWarning(
              function (e) {
                (X &&
                  X.point(
                    "warning",
                    o("VideoPlayerNextgendashQPL").qplAnnotationsForError(
                      U(Q, e),
                    ),
                  ),
                  x.current != null
                    ? x.current.dispatch({
                        payload: { warningError: e },
                        type: "implementation_warning",
                      })
                    : $.push(e));
              },
            ),
            n("cr:9712"),
            E == null ? void 0 : E.loggingDestination,
            k == null ? void 0 : k.loggingDestination,
            o(
              "VideoPlayerNextgendashLoggingDestinationODSFromEngine",
            ).createVideoPlayerNextgendashLoggingDestinationODSFromEngine(),
            o(
              "VideoPlayerNextgendashLoggingDestinationFBLogger",
            ).createVideoPlayerNextgendashLoggingDestinationFBLogger(),
          ]),
          loggingState: {
            logstampPrefix: _,
            logstampTint: (p % 5) / 5,
            metadata: babelHelpers.extends({}, y, {
              nextgendashCreatedAt: l.clock(),
              nextgendashInstanceIndex: p,
              playerInstanceKey: c,
              playerSubOrigin: d,
              videoFBID: u,
            }),
          },
          workQueue: L,
        },
        X = Q.config.qplEnabled
          ? o("VideoPlayerNextgendashQPL").qplStartPlayingApi(Q)
          : null;
      ((T.current = X), X == null || X.start());
      var Y = i.coreVideoPlayerMetaData.expiredVideoUrlRefreshHandler,
        J = null,
        Z = null,
        ee = null,
        te = !1,
        ne = o(
          "VideoPlayerNextgendashMain",
        ).VideoPlayerNextgendashMainSM.createSM(
          "VideoPlayerNextgendashMain",
          Q,
          null,
          {
            abrConfig: o(
              "VideoPlayerNextgendashEngineConfig",
            ).createVideoPlayerNextgendashABRConfig({
              videoPreferredMinimumSmallestDimension: D(i.minQualityPreference),
            }),
            audioOnly: i.coreVideoPlayerMetaData.audioOnly === !0,
            initialExpiredVideoUrlRefreshHandlerState:
              Y != null ? { handler: A(Y), identity: Y } : null,
            initialMediaVariantIfLangExistsInManifest:
              i.initialAudioUserPreferredLanguage != null
                ? {
                    audioLang: i.initialAudioUserPreferredLanguage,
                    audioRole: "dub",
                    videoLang: Q.config.enableLipSync
                      ? i.initialAudioUserPreferredLanguage
                      : null,
                    videoRole: Q.config.enableLipSync ? "dub" : null,
                  }
                : null,
            nextgendashInstanceIndex: p,
            onBufferingChanged: function (t) {
              var e = t.changeDirection,
                n = t.domEventAdjustedClock,
                r = t.isInitial;
              (J != null && (J(), (J = null)),
                e === "started"
                  ? ((J = X == null ? void 0 : X.subspan("buffering")),
                    ue.dispatch({
                      payload: {
                        bufferingType: r ? "start/unpause" : "in_play",
                        disableZeroPlaybackRate: Q.config
                          .disableZeroPlaybackRateWhileBuffering
                          ? !0
                          : void 0,
                      },
                      type: "buffering_begin_requested",
                    }))
                  : e === "stopped" &&
                    ue.dispatch({
                      payload: { domEventPerfTimestamp: n.perfMs },
                      type: "buffering_end_requested",
                    }));
            },
            onError: function (t) {
              if (
                ((Q.config.nativeNextFirstMediaPrewarm = !1),
                X &&
                  X.point(
                    "error",
                    o("VideoPlayerNextgendashQPL").qplAnnotationsForError(t),
                  ),
                S == null && (S = t),
                W({
                  errorName: t.name,
                  hadPlayableMedia:
                    ue.getCurrentState().controlledState.domEventsLatestPerfMs
                      .loadeddata != null,
                  isLiveBroadcastGoneOnHttp410: o(
                    "VideoPlayerNextgendashFetchedResource",
                  ).internal_isLiveBroadcastGoneOnHttp410(Q.config),
                }))
              ) {
                (ue.dispatch({ type: "stream_gone_before_start" }),
                  q != null ||
                    (q = le.implementationController.subscribe(function () {
                      ue.getCurrentState().controlledState.playbackState !==
                        "ended" &&
                        ue.dispatch({ type: "stream_gone_before_start" });
                    })));
                return;
              }
              E
                ? (E.setHalted(t.name),
                  L.enqueueWork(function () {
                    se(t, "comet_nextgendash_main_error");
                  }))
                : se(t, "comet_nextgendash_main_error");
            },
            onManifestUpdated: function () {
              (X == null || X.point("manifest_updated"),
                ue.dispatch({
                  payload: {
                    selectedVideoQuality: oe.getUserSelectedVideoQuality(),
                  },
                  type: "implementation_engine_qualities_changed",
                }));
            },
            onMediaSourceAttachedChanged: function (t, n) {
              if (
                ((v = n),
                n || b == null || b(),
                Z != null && (Z(), (Z = null)),
                n && (Z = X == null ? void 0 : X.subspan("media_source")),
                !r("gkx")("19514"))
              ) {
                var e,
                  a =
                    (e = ne.state.mediaElement) == null
                      ? void 0
                      : e.state.mediaElement,
                  l =
                    a != null
                      ? o(
                          "VideoPlayerNextgendashHostAPI",
                        ).unopaqueVideoPlayerNextgendashHostMediaElement(a)
                      : null;
                (l == null ||
                  ce.current == null ||
                  l !== ce.current.getUnderlyingVideoElement()) &&
                  (ce.current =
                    l != null && a != null
                      ? w(
                          Q,
                          a,
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
                ((C = !0),
                  ue.dispatch({
                    payload: {
                      selectedVideoQuality: oe.getUserSelectedVideoQuality(),
                    },
                    type: "implementation_engine_initialized",
                  }));
                {
                  var e = i.coreVideoPlayerMetaData.startTimestamp;
                  e > 0 &&
                    K &&
                    ue.dispatch({
                      payload: { seekTargetPosition: e },
                      type: "controller_seek_requested",
                    });
                }
              };
              if (n && !C && b == null) {
                var u = function () {
                    var e,
                      t =
                        (e = ne.state.mediaElement) == null
                          ? void 0
                          : e.state.mediaElement;
                    return t != null
                      ? o(
                          "VideoPlayerNextgendashHostAPI",
                        ).unopaqueVideoPlayerNextgendashHostMediaElement(t)
                      : null;
                  },
                  c = (m || (m = r("ExecutionEnvironment"))).canUseDOM
                    ? document
                    : null,
                  d = function () {
                    var e = u();
                    return (
                      c != null &&
                      e != null &&
                      B(c.visibilityState, e.readyState)
                    );
                  };
                if (H && c != null && d()) {
                  var p = function () {
                    v && !d() && (b == null || b(), C || s());
                  };
                  (c.addEventListener("visibilitychange", p),
                    c.addEventListener("loadedmetadata", p, !0),
                    (b = function () {
                      (c.removeEventListener("visibilitychange", p),
                        c.removeEventListener("loadedmetadata", p, !0),
                        (b = null));
                    }));
                } else s();
              }
            },
            onMP4InspectorCapture:
              k == null ? void 0 : k.receiveMP4InspectorCapture,
            onSendHaltedToWorkerChanged:
              E == null ? void 0 : E.onSendHaltedToWorkerChanged,
            onVideoRepresentationChanged: function (t, n) {
              (X &&
                X.point("video_representation_changed", {
                  string: {
                    fromVideoRepresentationId: String(t),
                    toVideoRepresentationId: String(n),
                  },
                }),
                ue.dispatch({ payload: {}, type: "representation_changed" }));
            },
            playerInstanceKey: c,
            playerSubOrigin: d,
            playerViewportDimensionsInitial: j,
            prefetchResultInitial:
              g != null && g.length > 0
                ? {
                    prefetchedRepresentationIds: g,
                    prefetchStartedAt: Q.host.clock(),
                  }
                : null,
            videoFBID: u,
            workerPortFactories: h,
            workerTypeInitial: s,
          },
        );
      I.current = ne;
      function re() {
        var e;
        return (e = ce.current) != null ? e : null;
      }
      var oe = o(
          "VideoPlayerNextgendashEngineExtrasAPI",
        ).createVideoPlayerNextgendashEngineExtrasAPI({
          getVideoElementAPI: re,
          mainSm: ne,
        }),
        ae = null,
        ie = o(
          "VideoPlayerImplementationEngineAPI",
        ).createVideoPlayerImplementationEngine({
          createDebugAPI: function (t) {
            var e = t.getVideoElementAPI,
              n = t.loggerToVPL;
            return k == null
              ? void 0
              : k.createDebugAPI({
                  engineExtrasAPI: oe,
                  getConfig: function () {
                    return i.experimentationConfig;
                  },
                  getVideoElementAPI: e,
                  loggerToVPL: n,
                  mainSm: ne,
                });
          },
          createVideoPlayerError: function (t, n) {
            var e = o("nextgendasherr").nextgendasherrFromNextgendasherr(t);
            return e != null
              ? o(
                  "VideoPlayerNextgendashEngineErrors",
                ).createVideoPlayerErrorFromNextgendashEngine(Q, e, n)
              : o(
                  "VideoPlayerImplementationErrors",
                ).createVideoPlayerErrorFromGenericError(
                  "VideoPlayerFatalCaughtByNextgendashEngine",
                  t,
                  n,
                );
          },
          destroyEngineParts: function () {
            ((Q.config.nativeNextFirstMediaPrewarm = !1), e());
            function e() {
              var e;
              if (
                (X == null || X.point("destroy"),
                b == null || b(),
                V == null || V(),
                (V = null),
                r("gkx")("19514"))
              ) {
                var t, n;
                (X == null || X.endWithAbort(),
                  (t = P) == null || t.remove(),
                  (P = null),
                  (n = O) == null || n.remove(),
                  (O = null));
              }
              ((e = q) == null || e.remove(),
                (q = null),
                k == null || k.dispose(),
                ne.sendEvent({
                  reason: "destroyEngineParts",
                  type: "__dispose",
                }),
                E == null || E.disconnect());
            }
          },
          engineCreateArgs: e,
          engineExtrasAPI: oe,
          engineMetadata: {
            isAbrEnabled: !0,
            mediaSinkType: R.mediaSinkType,
            playerInstanceKey: i.loggingMetaData.instanceKey,
            playerVersion:
              R.mediaSinkType === "EMSS"
                ? "comet_nextgendash_wasm"
                : "comet_nextgendash",
            streamingFormat: "dash",
          },
          handleVideoElementChanged: function (t, n) {
            if (
              ((t != null || te) && (Q.config.nativeNextFirstMediaPrewarm = !1),
              t != null && (te = !0),
              ee != null && (ee(), (ee = null)),
              t != null)
            ) {
              var e;
              ((ee = X == null ? void 0 : X.subspan("video_element")),
                ae != null && (r("clearTimeout")(ae), (ae = null)),
                Q.config.mediaSinkType === "MSE_TRACK_REUSE" &&
                  ((e = ce.current) == null
                    ? void 0
                    : e.getUnderlyingVideoElement()) === t &&
                  (ce.current = w(
                    Q,
                    o(
                      "VideoPlayerNextgendashHostAPI",
                    ).opaqueVideoPlayerNextgendashHostMediaElement(t),
                    t,
                    o(
                      "VideoPlayerImplementationEngineVideoElementAPI",
                    ).createVideoPlayerImplementationEngineVideoElementAPI(t),
                  )),
                ne.sendEvent({
                  mediaElement: o(
                    "VideoPlayerNextgendashHostAPI",
                  ).opaqueVideoPlayerNextgendashHostMediaElement(t),
                  type: "update_media_element",
                }));
            } else
              Q.config.enableMediaElementUnmountNotification &&
                ne.sendEvent({
                  mediaElement: null,
                  type: "update_media_element",
                });
          },
          handleVideoInfoChange: function (t) {
            if (
              (t.hybridNativeNextFirstMediaPrewarm !== !0 &&
                Q.config.nativeNextFirstMediaPrewarm &&
                ((Q.config.nativeNextFirstMediaPrewarm = !1),
                ne.state.state !== "__null__" &&
                  ne.state.state !== "__disposed__" &&
                  ne.sendEvent({ type: "update_config_from_env" })),
              ne.state.state !== "__null__" &&
                ne.state.state !== "__disposed__")
            ) {
              var e,
                n = ne.state,
                r = z
                  ? o(
                      "VideoPlayerNextgendashWebCodecsDimensions",
                    ).capVideoPlayerNextgendashWebCodecsDimensions(t.dimensions)
                  : t.dimensions;
              (r.height !== n.playerViewportDimensions.height ||
                r.width !== n.playerViewportDimensions.width) &&
                ne.sendEvent({
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
                ne.sendEvent({
                  expiredVideoUrlRefreshHandlerState:
                    i != null ? { handler: A(i), identity: i } : null,
                  type: "update_expired_video_url_refresh_handler",
                }),
                R.trackScrollPosition &&
                  t.videoPlayerScrollPositionAPI != null &&
                  n.scrollPositionAPI !== t.videoPlayerScrollPositionAPI &&
                  ne.sendEvent({
                    scrollPositionAPI: t.videoPlayerScrollPositionAPI,
                    type: "update_scroll_position_api",
                  }));
            }
            return !1;
          },
        }),
        le = ie.engine,
        se = ie.handleFatalImplementationError,
        ue = ie.machine,
        ce = ie.videoElementAPIRef;
      x.current = ue;
      for (var de of $)
        ue.dispatch({
          payload: { warningError: de },
          type: "implementation_warning",
        });
      if (
        (($.length = 0),
        (i.manifest != null || i.manifestUrl != null) &&
          ne.sendEvent({
            dashManifestUrl: i.manifestUrl,
            dashManifestXmlString: i.manifest,
            type: "update_dash_manifest",
          }),
        X)
      ) {
        var me = void 0,
          pe = null,
          _e = null,
          fe = function () {
            var e = ue.getCurrentState().controlledState,
              t = e.error,
              n = e.playbackState;
            if (n !== me) {
              if (
                (pe != null &&
                  (t != null || n !== "paused") &&
                  (pe(), (pe = null)),
                _e != null &&
                  (t != null || n !== "stalling") &&
                  (_e(), (_e = null)),
                t != null)
              ) {
                var r;
                (X.endWithError(S != null ? S : U(Q, t)),
                  (r = P) == null || r.remove(),
                  (P = null));
              } else if (n === "playing") {
                var o;
                (X.endWithSuccess(), (o = P) == null || o.remove(), (P = null));
              } else
                n === "paused"
                  ? (pe = X.subspan("paused"))
                  : n === "stalling" && (_e = X.subspan("stalling"));
              me = n;
            }
          };
        ((P = le.implementationController.subscribe(fe)), fe());
      }
      if (Q.config.logStallDetailsAsPlayerWarning) {
        var ge = void 0,
          he = null,
          ye = function () {
            var e = ue.getCurrentState().controlledState,
              t = e.error,
              n = e.playbackState;
            if (n !== ge) {
              if (
                ((t != null || n !== "stalling") &&
                  he != null &&
                  (r("clearTimeout")(he), (he = null)),
                t != null)
              ) {
                var o;
                ((o = O) == null || o.remove(), (O = null));
              } else if (n === "stalling" && he == null) {
                var a = Q.host.clock(),
                  i = 200;
                he = r("setTimeout")(function () {
                  ne.sendEvent({
                    stallStartClock: a,
                    type: "debug_log_stall_details",
                  });
                }, i);
              }
              ge = n;
            }
          };
        ((O = le.implementationController.subscribe(ye)), ye());
      }
      return (X == null || X.point("engine_created"), le);
    }
    function U(e, t) {
      return o("nextgendasherr").nextgendasherr.apply(
        void 0,
        [e, t.errorName, t.errorMessageFormat].concat(t.errorMessageParams),
      );
    }
    ((l.preloadVideoPlayerNextgendashWorker = C),
      (l.prefetchUsingNextgendash = x),
      (l.releasePrefetchUsingNextgendash = $),
      (l.internal_wrapVideoElementAPIForMediaSink = w),
      (l.getVideoPlayerNextgendashEngineHostAPI = F),
      (l.internal_isMediaLoadPendingWhileHidden = B),
      (l.internal_isLiveBroadcastGoneBeforeStart = W),
      (l.createVideoPlayerNextgendashEngine = q));
  },
  98,
);
