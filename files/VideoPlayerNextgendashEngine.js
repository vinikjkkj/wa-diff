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
      m = n("cr:18606") != null ? n("cr:18606")(n("cr:3020")) : n("cr:3020"),
      p =
        m.mediaSinkType === "EMSS"
          ? n("cr:18606") != null
            ? n("cr:18606")(r("VideoPlayerNextgendashHostAPIComet"))
            : r("VideoPlayerNextgendashHostAPIComet")
          : null;
    (d || (d = r("ExecutionEnvironment"))).canUseDOM &&
      r("gkx")("12553") &&
      (m.warmMediaSink == null || m.warmMediaSink());
    function _(e) {
      if ((e === void 0 && (e = m), e === p)) return "VirtualWorker";
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
    var f = _();
    f === "VirtualWorker" &&
      o(
        "VideoPlayerNextgendashConnectionPortToVirtualWorker",
      ).preloadWorkerEnvironmentJSResourceWhenVirtualWorkerOnly();
    var g = {
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
      h = {
        clientRev: r("SiteData").client_revision,
        cometEnv: r("SiteData").comet_env,
      };
    function y(e) {
      e === void 0 && (e = !1);
      var t = e ? n("cr:624") : m;
      t != null &&
        o("VideoPlayerNextgendashConnectionMainToWorker").preloadWorker({
          envForErrors: {
            host: { clock: t.clock },
            loggingState: { metadata: babelHelpers.extends({}, h) },
          },
          virtualWorkerHostAPI: t,
          workerEnvConfig: P(t),
          workerPortFactories: g,
          workerType: _(t),
        });
    }
    var C = null,
      b = null,
      v = "airwave",
      S = !1,
      R = !1;
    function L() {
      return r("gkx")("19309") && r("gkx")("18263");
    }
    var E = "ngdprefetch-" + r("guid")();
    function k(e) {
      e === void 0 && (e = !1);
      var t = e ? b : C;
      if (t != null) return t;
      var r = e ? n("cr:624") : m;
      if (r == null)
        throw o("nextgendasherr").nextgendasherr(
          { host: { clock: m.clock }, loggingState: { metadata: {} } },
          "VideoPlayerNextgendashNativePrefetchUnavailable",
        );
      y(e);
      var a = P(r),
        i = o(
          "VideoPlayerNextgendashWorkQueue",
        ).createVideoPlayerNextgendashWorkQueue(
          r.scheduleToRun,
          a.enableWorkerOptimizations,
        ),
        l = n("cr:9718") == null ? void 0 : n("cr:9718")(E, i),
        s = o(
          "VideoPlayerNextgendashPrefetchConnection",
        ).createVideoPlayerNextgendashPrefetchConnection({
          config: a,
          hostAPI: r,
          instanceKey: E,
          loggingDestinations: [
            o(
              "VideoPlayerNextgendashLoggingDestinationFBLogger",
            ).createVideoPlayerNextgendashLoggingDestinationFBLogger(),
            n("cr:9712"),
            l == null ? void 0 : l.loggingDestination,
          ],
          siteMetadata: h,
          workerPortFactories: g,
          workerType: _(r),
          workQueue: i,
        });
      return (
        o(
          "VideoPlayerNextgendashSmartPlayerStaticSignals",
        ).subscribeVideoPlayerNextgendashSmartPlayerStaticSignals(
          a,
          function () {},
        ),
        e ? (b = s) : (C = s),
        s
      );
    }
    function I() {
      return r("gkx")("26980");
    }
    function T(e) {
      return e == null && !I() && r("gkx")("16361")
        ? 540
        : e == null && r("gkx")("21918")
          ? 480
          : r("gkx")("2312")
            ? { "%future added value": 0, HD: 720, SD: 0, UHD: 1080, "": 0 }[
                e != null ? e : ""
              ]
            : 0;
    }
    function D(e, t) {
      var r = (t == null ? void 0 : t.nativeOnly) === !0;
      if (!(r && n("cr:624") == null)) {
        var a = k(r),
          i;
        if (L()) {
          i = v;
          var l = r ? R : S;
          l ||
            (r ? (R = !0) : (S = !0),
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
            videoPreferredMinimumSmallestDimension: T(null),
          }),
          void 0,
          i,
        );
      }
    }
    function x(e, t) {
      var n;
      if ((t == null ? void 0 : t.nativeOnly) === !0) {
        var r;
        (r = b) == null ||
          r.releasePrefetchKey(
            o(
              "VideoPlayerNextgendashWorkerPrefetchCache",
            ).getVideoPlayerNextgendashPrefetchKeyForSink(e, "HYBRID"),
          );
        return;
      }
      (n = C) == null || n.releasePrefetchKey(e);
    }
    var $ = 5e6;
    function P(e) {
      var t;
      e === void 0 && (e = m);
      var a = o("VideoPlayerNextgendashEnvironment").createDefaultConfig(),
        i = I();
      return babelHelpers.extends(
        {},
        a,
        {
          bandwidthDiagnosticsFallbackDefaultEstimate: i ? $ : null,
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
          enableOwnedBandwidthEstimator:
            (e === m || e === p) && n("cr:18606") != null,
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
          liveStartFromLatestParsedManifestEnabled: r("gkx")("7763"),
          liveStartPositionNearSegmentStartEnabled:
            r("gkx")("7763") && e.mediaSinkType === "MSE",
          liveStartSeekWhenBufferedEnabled:
            r("gkx")("7763") && e.mediaSinkType === "MSE",
          logStallDetailsAsPlayerWarning: r("gkx")("20111"),
          maxConcurrentPrefetchTasks: L()
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
    var N = 0;
    function M(e, t, n, r) {
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
    function w(e) {
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
    function A(e, t) {
      if ((t === void 0 && (t = !1), !e)) return t && p != null ? p : m;
      if (n("cr:624") == null)
        throw o("nextgendasherr").nextgendasherr(
          { host: { clock: m.clock }, loggingState: { metadata: {} } },
          "VideoPlayerNextgendashHybridHostUnavailable",
        );
      return n("cr:624");
    }
    var F = 1;
    function O(e, t) {
      return e === "hidden" && t < F;
    }
    function B(e) {
      var t,
        a,
        i = e.initialProps,
        l = A(
          i.hybridNativeMedia === !0,
          i.coreVideoPlayerMetaData.isLiveStreaming === !0,
        ),
        s = _(l),
        u = i.coreVideoPlayerMetaData.videoFBID,
        c = String(i.loggingMetaData.instanceKey),
        m = (t = i.coreVideoPlayerMetaData.subOrigin) != null ? t : void 0,
        p = N++,
        f = "#" + p + "::" + c,
        y = i.coreVideoPlayerMetaData.initialRepresentationIds,
        C = !1,
        b = null,
        v = !1,
        S = null,
        R = P(l),
        L = o(
          "VideoPlayerNextgendashWorkQueue",
        ).createVideoPlayerNextgendashWorkQueue(
          l.scheduleToRun,
          R.enableWorkerOptimizations,
        ),
        E = n("cr:9718") == null ? void 0 : n("cr:9718")(f, L),
        k = n("cr:11335") ? new (n("cr:11335"))() : null,
        I = { current: null },
        D = { current: null },
        x = { current: null },
        $ = [],
        F = null,
        B = null,
        q = null,
        U = i.coreVideoPlayerMetaData.isLiveStreaming === !0 && R.enableLive;
      q = o(
        "VideoPlayerNextgendashSmartPlayerStaticSignals",
      ).subscribeVideoPlayerNextgendashSmartPlayerStaticSignals(R, function () {
        var e = I.current;
        e != null &&
          e.state.state !== "__null__" &&
          e.state.state !== "__disposed__" &&
          e.sendEvent({ type: "update_config_from_env" });
      });
      var V = i.coreVideoPlayerMetaData.isVideoBroadcast;
      ((R.disableZeroPlaybackRateWhileBuffering =
        o(
          "VideoPlayerNextgendashEngineConfig",
        ).isVideoPlayerNextgendashVODOnlyConfigEnabled(
          R.disableZeroPlaybackRateWhileBuffering,
          V,
        ) ||
        R.mediaSinkType === "EMSS" ||
        R.mediaSinkType === "HYBRID"),
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
        (R.nativeNextFirstMediaPrewarm =
          R.mediaSinkType === "HYBRID" &&
          V !== !0 &&
          i.hybridNativeNextFirstMediaPrewarm === !0),
        (R.nativeNextPrewarmBufferAheadSec = R.nativeNextFirstMediaPrewarm
          ? Math.max(
              0,
              (a = i.hybridNativeNextPrewarmBufferAheadSec) != null ? a : 0,
            )
          : 0));
      var H = R.mediaSinkType === "WEBCODECS",
        G = H
          ? o(
              "VideoPlayerNextgendashWebCodecsDimensions",
            ).capVideoPlayerNextgendashWebCodecsDimensions(i.dimensions)
          : i.dimensions;
      ((R.sidxDisableShiftingMediaTimeRangesByEarliestPresentationTime = o(
        "VideoPlayerNextgendashEngineConfig",
      ).isVideoPlayerNextgendashVODOnlyConfigEnabled(
        R.sidxDisableShiftingMediaTimeRangesByEarliestPresentationTime,
        V,
      )),
        (R.startTimestampSec = i.coreVideoPlayerMetaData.startTimestamp),
        (R.vodStartTimestampPending =
          V !== !0 &&
          R.startTimestampSec > 0 &&
          i.coreVideoPlayerMetaData.startTimestampAfterMediaAttach === !0));
      var z = !R.vodStartTimestampPending,
        j = {
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
                  D,
                )
              : void 0,
            o(
              "VideoPlayerNextgendashLoggingDestinationEngineWarning",
            ).createVideoPlayerNextgendashLoggingDestinationEngineWarning(
              function (e) {
                (K &&
                  K.point(
                    "warning",
                    o("VideoPlayerNextgendashQPL").qplAnnotationsForError(
                      W(j, e),
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
            logstampPrefix: f,
            logstampTint: (p % 5) / 5,
            metadata: babelHelpers.extends({}, h, {
              nextgendashCreatedAt: l.clock(),
              nextgendashInstanceIndex: p,
              playerInstanceKey: c,
              playerSubOrigin: m,
              videoFBID: u,
            }),
          },
          workQueue: L,
        },
        K = j.config.qplEnabled
          ? o("VideoPlayerNextgendashQPL").qplStartPlayingApi(j)
          : null;
      ((D.current = K), K == null || K.start());
      var Q = i.coreVideoPlayerMetaData.expiredVideoUrlRefreshHandler,
        X = null,
        Y = null,
        J = null,
        Z = !1,
        ee = o(
          "VideoPlayerNextgendashMain",
        ).VideoPlayerNextgendashMainSM.createSM(
          "VideoPlayerNextgendashMain",
          j,
          null,
          {
            abrConfig: o(
              "VideoPlayerNextgendashEngineConfig",
            ).createVideoPlayerNextgendashABRConfig({
              videoPreferredMinimumSmallestDimension: T(i.minQualityPreference),
            }),
            audioOnly: i.coreVideoPlayerMetaData.audioOnly === !0,
            initialExpiredVideoUrlRefreshHandlerState:
              Q != null ? { handler: w(Q), identity: Q } : null,
            initialMediaVariantIfLangExistsInManifest:
              i.initialAudioUserPreferredLanguage != null
                ? {
                    audioLang: i.initialAudioUserPreferredLanguage,
                    audioRole: "dub",
                    videoLang: j.config.enableLipSync
                      ? i.initialAudioUserPreferredLanguage
                      : null,
                    videoRole: j.config.enableLipSync ? "dub" : null,
                  }
                : null,
            nextgendashInstanceIndex: p,
            onBufferingChanged: function (t) {
              var e = t.changeDirection,
                n = t.domEventAdjustedClock,
                r = t.isInitial;
              (X != null && (X(), (X = null)),
                e === "started"
                  ? ((X = K == null ? void 0 : K.subspan("buffering")),
                    le.dispatch({
                      payload: {
                        bufferingType: r ? "start/unpause" : "in_play",
                        disableZeroPlaybackRate: j.config
                          .disableZeroPlaybackRateWhileBuffering
                          ? !0
                          : void 0,
                      },
                      type: "buffering_begin_requested",
                    }))
                  : e === "stopped" &&
                    le.dispatch({
                      payload: { domEventPerfTimestamp: n.perfMs },
                      type: "buffering_end_requested",
                    }));
            },
            onError: function (t) {
              ((j.config.nativeNextFirstMediaPrewarm = !1),
                K &&
                  K.point(
                    "error",
                    o("VideoPlayerNextgendashQPL").qplAnnotationsForError(t),
                  ),
                S == null && (S = t),
                E
                  ? (E.setHalted(t.name),
                    L.enqueueWork(function () {
                      ie(t, "comet_nextgendash_main_error");
                    }))
                  : ie(t, "comet_nextgendash_main_error"));
            },
            onManifestUpdated: function () {
              (K == null || K.point("manifest_updated"),
                le.dispatch({
                  payload: {
                    selectedVideoQuality: ne.getUserSelectedVideoQuality(),
                  },
                  type: "implementation_engine_qualities_changed",
                }));
            },
            onMediaSourceAttachedChanged: function (t, n) {
              if (
                ((v = n),
                n || b == null || b(),
                Y != null && (Y(), (Y = null)),
                n && (Y = K == null ? void 0 : K.subspan("media_source")),
                !r("gkx")("19514"))
              ) {
                var e,
                  a =
                    (e = ee.state.mediaElement) == null
                      ? void 0
                      : e.state.mediaElement,
                  l =
                    a != null
                      ? o(
                          "VideoPlayerNextgendashHostAPI",
                        ).unopaqueVideoPlayerNextgendashHostMediaElement(a)
                      : null;
                (l == null ||
                  se.current == null ||
                  l !== se.current.getUnderlyingVideoElement()) &&
                  (se.current =
                    l != null && a != null
                      ? M(
                          j,
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
                  le.dispatch({
                    payload: {
                      selectedVideoQuality: ne.getUserSelectedVideoQuality(),
                    },
                    type: "implementation_engine_initialized",
                  }));
                {
                  var e = i.coreVideoPlayerMetaData.startTimestamp;
                  e > 0 &&
                    z &&
                    le.dispatch({
                      payload: { seekTargetPosition: e },
                      type: "controller_seek_requested",
                    });
                }
              };
              if (n && !C && b == null) {
                var u = function () {
                    var e,
                      t =
                        (e = ee.state.mediaElement) == null
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
                      O(c.visibilityState, e.readyState)
                    );
                  };
                if (U && c != null && m()) {
                  var p = function () {
                    v && !m() && (b == null || b(), C || s());
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
            onSendHaltedToWorkerChanged:
              E == null ? void 0 : E.onSendHaltedToWorkerChanged,
            onVideoRepresentationChanged: function (t, n) {
              (K &&
                K.point("video_representation_changed", {
                  string: {
                    fromVideoRepresentationId: String(t),
                    toVideoRepresentationId: String(n),
                  },
                }),
                le.dispatch({ payload: {}, type: "representation_changed" }));
            },
            playerInstanceKey: c,
            playerSubOrigin: m,
            playerViewportDimensionsInitial: G,
            prefetchResultInitial:
              y != null && y.length > 0
                ? {
                    prefetchedRepresentationIds: y,
                    prefetchStartedAt: j.host.clock(),
                  }
                : null,
            videoFBID: u,
            workerPortFactories: g,
            workerTypeInitial: s,
          },
        );
      I.current = ee;
      function te() {
        var e;
        return (e = se.current) != null ? e : null;
      }
      var ne = o(
          "VideoPlayerNextgendashEngineExtrasAPI",
        ).createVideoPlayerNextgendashEngineExtrasAPI({
          getVideoElementAPI: te,
          mainSm: ee,
        }),
        re = null,
        oe = o(
          "VideoPlayerImplementationEngineAPI",
        ).createVideoPlayerImplementationEngine({
          createDebugAPI: function (t) {
            var e = t.getVideoElementAPI,
              n = t.loggerToVPL;
            return k == null
              ? void 0
              : k.createDebugAPI({
                  engineExtrasAPI: ne,
                  getConfig: function () {
                    return i.experimentationConfig;
                  },
                  getVideoElementAPI: e,
                  loggerToVPL: n,
                  mainSm: ee,
                });
          },
          createVideoPlayerError: function (t, n) {
            var e = o("nextgendasherr").nextgendasherrFromNextgendasherr(t);
            return e != null
              ? o(
                  "VideoPlayerNextgendashEngineErrors",
                ).createVideoPlayerErrorFromNextgendashEngine(j, e, n)
              : o(
                  "VideoPlayerImplementationErrors",
                ).createVideoPlayerErrorFromGenericError(
                  "VideoPlayerFatalCaughtByNextgendashEngine",
                  t,
                  n,
                );
          },
          destroyEngineParts: function () {
            ((j.config.nativeNextFirstMediaPrewarm = !1), e());
            function e() {
              if (
                (K == null || K.point("destroy"),
                b == null || b(),
                q == null || q(),
                (q = null),
                r("gkx")("19514"))
              ) {
                var e, t;
                (K == null || K.endWithAbort(),
                  (e = F) == null || e.remove(),
                  (F = null),
                  (t = B) == null || t.remove(),
                  (B = null));
              }
              (ee.sendEvent({
                reason: "destroyEngineParts",
                type: "__dispose",
              }),
                E == null || E.disconnect());
            }
          },
          engineCreateArgs: e,
          engineExtrasAPI: ne,
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
            ((t != null || Z) && (j.config.nativeNextFirstMediaPrewarm = !1),
              t != null && (Z = !0),
              J != null && (J(), (J = null)),
              t != null
                ? ((J = K == null ? void 0 : K.subspan("video_element")),
                  re != null && (r("clearTimeout")(re), (re = null)),
                  ee.sendEvent({
                    mediaElement: o(
                      "VideoPlayerNextgendashHostAPI",
                    ).opaqueVideoPlayerNextgendashHostMediaElement(t),
                    type: "update_media_element",
                  }))
                : j.config.enableMediaElementUnmountNotification &&
                  ee.sendEvent({
                    mediaElement: null,
                    type: "update_media_element",
                  }));
          },
          handleVideoInfoChange: function (t) {
            if (
              (t.hybridNativeNextFirstMediaPrewarm !== !0 &&
                j.config.nativeNextFirstMediaPrewarm &&
                ((j.config.nativeNextFirstMediaPrewarm = !1),
                ee.state.state !== "__null__" &&
                  ee.state.state !== "__disposed__" &&
                  ee.sendEvent({ type: "update_config_from_env" })),
              ee.state.state !== "__null__" &&
                ee.state.state !== "__disposed__")
            ) {
              var e,
                n = ee.state,
                r = H
                  ? o(
                      "VideoPlayerNextgendashWebCodecsDimensions",
                    ).capVideoPlayerNextgendashWebCodecsDimensions(t.dimensions)
                  : t.dimensions;
              (r.height !== n.playerViewportDimensions.height ||
                r.width !== n.playerViewportDimensions.width) &&
                ee.sendEvent({
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
                ee.sendEvent({
                  expiredVideoUrlRefreshHandlerState:
                    i != null ? { handler: w(i), identity: i } : null,
                  type: "update_expired_video_url_refresh_handler",
                }),
                R.trackScrollPosition &&
                  t.videoPlayerScrollPositionAPI != null &&
                  n.scrollPositionAPI !== t.videoPlayerScrollPositionAPI &&
                  ee.sendEvent({
                    scrollPositionAPI: t.videoPlayerScrollPositionAPI,
                    type: "update_scroll_position_api",
                  }));
            }
            return !1;
          },
        }),
        ae = oe.engine,
        ie = oe.handleFatalImplementationError,
        le = oe.machine,
        se = oe.videoElementAPIRef;
      x.current = le;
      for (var ue of $)
        le.dispatch({
          payload: { warningError: ue },
          type: "implementation_warning",
        });
      if (
        (($.length = 0),
        (i.manifest != null || i.manifestUrl != null) &&
          ee.sendEvent({
            dashManifestUrl: i.manifestUrl,
            dashManifestXmlString: i.manifest,
            type: "update_dash_manifest",
          }),
        K)
      ) {
        var ce = void 0,
          de = null,
          me = null,
          pe = function () {
            var e = le.getCurrentState().controlledState,
              t = e.error,
              n = e.playbackState;
            if (n !== ce) {
              if (
                (de != null &&
                  (t != null || n !== "paused") &&
                  (de(), (de = null)),
                me != null &&
                  (t != null || n !== "stalling") &&
                  (me(), (me = null)),
                t != null)
              ) {
                var r;
                (K.endWithError(S != null ? S : W(j, t)),
                  (r = F) == null || r.remove(),
                  (F = null));
              } else if (n === "playing") {
                var o;
                (K.endWithSuccess(), (o = F) == null || o.remove(), (F = null));
              } else
                n === "paused"
                  ? (de = K.subspan("paused"))
                  : n === "stalling" && (me = K.subspan("stalling"));
              ce = n;
            }
          };
        ((F = ae.implementationController.subscribe(pe)), pe());
      }
      if (j.config.logStallDetailsAsPlayerWarning) {
        var _e = void 0,
          fe = null,
          ge = function () {
            var e = le.getCurrentState().controlledState,
              t = e.error,
              n = e.playbackState;
            if (n !== _e) {
              if (
                ((t != null || n !== "stalling") &&
                  fe != null &&
                  (r("clearTimeout")(fe), (fe = null)),
                t != null)
              ) {
                var o;
                ((o = B) == null || o.remove(), (B = null));
              } else if (n === "stalling" && fe == null) {
                var a = j.host.clock(),
                  i = 200;
                fe = r("setTimeout")(function () {
                  ee.sendEvent({
                    stallStartClock: a,
                    type: "debug_log_stall_details",
                  });
                }, i);
              }
              _e = n;
            }
          };
        ((B = ae.implementationController.subscribe(ge)), ge());
      }
      return (K == null || K.point("engine_created"), ae);
    }
    function W(e, t) {
      return o("nextgendasherr").nextgendasherr.apply(
        void 0,
        [e, t.errorName, t.errorMessageFormat].concat(t.errorMessageParams),
      );
    }
    ((l.preloadVideoPlayerNextgendashWorker = y),
      (l.prefetchUsingNextgendash = D),
      (l.releasePrefetchUsingNextgendash = x),
      (l.internal_wrapVideoElementAPIForMediaSink = M),
      (l.getVideoPlayerNextgendashEngineHostAPI = A),
      (l.internal_isMediaLoadPendingWhileHidden = O),
      (l.createVideoPlayerNextgendashEngine = B));
  },
  98,
);
