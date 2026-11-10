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
          fatalErrorOnMediaErrorRecoveryCapReached: r("gkx")("5957"),
          fetchHighPri: !0,
          fetchInitSidxOfAllRepresentations: r("gkx")("898"),
          guardSourceBufferOpsWithReadyStateCheck:
            r("gkx")("21333") || r("gkx")("17440"),
          handleUpdateDashManifestInWaitingStates: r("gkx")("6924"),
          isTypeSupportedIncludeContentAttributes: r("gkx")("18943"),
          liveAbrDuringSlowSegmentFetchEnabled: r("gkx")("5049"),
          liveAbrLookAheadFromPlayhead: r("gkx")("5049"),
          liveAbrTailSwitchAllowPredictiveContinuation: r("gkx")("5049"),
          liveAppendChainForwardCoveredEscapeEnabled: r("gkx")("5049"),
          liveBackBufferRetentionSec: r("gkx")("5049")
            ? 60
            : t.liveBackBufferRetentionSec,
          liveBandwidthDiagnosticsFallbackEnabled: r("gkx")("5049"),
          liveBandwidthSampleRequiresContinuousTransfer: r("gkx")("5049"),
          liveBufferingEndRecentStallBufferAheadSec: r("gkx")("5049")
            ? 2
            : t.liveBufferingEndRecentStallBufferAheadSec,
          liveBufferingEndRecentStallTimeoutMs: r("gkx")("5049")
            ? 8e3
            : t.liveBufferingEndRecentStallTimeoutMs,
          liveEndedStallConfirmSec: r("gkx")("5049")
            ? 60
            : t.liveEndedStallConfirmSec,
          liveEndedTransitionOnStallEnabled: r("gkx")("5049"),
          liveFellBehindEdgeReseekDriftSec: r("gkx")("5049")
            ? 30
            : t.liveFellBehindEdgeReseekDriftSec,
          liveFellBehindPairedRefetchEnabled: r("gkx")("5049"),
          liveFellBehindWindowRefetchEnabled: r("gkx")("5049"),
          liveForceWorkerKickOnStallEnabled: r("gkx")("5049"),
          liveGapSkipStuckAtRangeEndToleranceSec: r("gkx")("5049")
            ? 1.5
            : t.liveGapSkipStuckAtRangeEndToleranceSec,
          liveGapSkipStuckSeekRecoveryMs: r("gkx")("5049")
            ? 2e3
            : t.liveGapSkipStuckSeekRecoveryMs,
          liveLatencyPlaybackRateEnabled:
            r("gkx")("7763") && e.mediaSinkType === "MSE",
          liveLookbackBufferSec: r("gkx")("5049")
            ? 30
            : t.liveLookbackBufferSec,
          liveNoProgressWatchdogThresholdSec: r("gkx")("5049")
            ? 8
            : t.liveNoProgressWatchdogThresholdSec,
          liveObserveAndActMinDelayMs: r("gkx")("5049")
            ? 4
            : t.liveObserveAndActMinDelayMs,
          liveOfflineRetryMaxDelayMs: r("gkx")("5049")
            ? 1e3
            : t.liveOfflineRetryMaxDelayMs,
          livePausedEdgeRefetchSuspendEnabled: r("gkx")("5049"),
          livePlayheadStallRecoveryEnabled: r("gkx")("5049"),
          livePredictiveSegmentFetchKeyByNumber: r("gkx")("5049"),
          liveProactiveEdgeReseekEnabled: r("gkx")("5049"),
          liveProactiveEdgeReseekToIslandEnabled: r("gkx")("5049"),
          liveReleasePastStateMachineStates: r("gkx")("5049"),
          liveSegmentFetchNetworkFailureToleranceMs: r("gkx")("5049")
            ? 6e4
            : t.liveSegmentFetchNetworkFailureToleranceMs,
          liveSegmentFetchRetryNetworkFailuresIndefinitely: r("gkx")("5049"),
          liveSetSeekableRangeEnabled: r("gkx")("5049"),
          liveStallRecoveryEnabled: r("gkx")("5049"),
          liveStallReseekToEdgeAfterKicks: r("gkx")("5049")
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
        S = o(
          "VideoPlayerNextgendashWorkQueue",
        ).createVideoPlayerNextgendashWorkQueue(i.scheduleToRun),
        R = n("cr:9718") == null ? void 0 : n("cr:9718")(_, S),
        L = n("cr:11335") ? new (n("cr:11335"))() : null,
        E = { current: null },
        k = { current: null },
        T = { current: null },
        D = [],
        x = null,
        A = null,
        O = null,
        W = $(i),
        q = a.coreVideoPlayerMetaData.isLiveStreaming === !0 && W.enableLive;
      O = o(
        "VideoPlayerNextgendashSmartPlayerStaticSignals",
      ).subscribeVideoPlayerNextgendashSmartPlayerStaticSignals(W, function () {
        var e = E.current;
        e != null &&
          e.state.state !== "__null__" &&
          e.state.state !== "__disposed__" &&
          e.sendEvent({ type: "update_config_from_env" });
      });
      var U = a.coreVideoPlayerMetaData.isVideoBroadcast;
      ((W.disableZeroPlaybackRateWhileBuffering =
        o(
          "VideoPlayerNextgendashEngineConfig",
        ).isVideoPlayerNextgendashVODOnlyConfigEnabled(
          W.disableZeroPlaybackRateWhileBuffering,
          U,
        ) ||
        W.mediaSinkType === "EMSS" ||
        W.mediaSinkType === "HYBRID"),
        W.mediaSinkType === "EMSS" &&
          ((W.disableBufferGapSkipping = !0),
          (W.enableDisposalResourceCleanup = !0),
          (W.bufferAheadTargetNoMediaElementSec = 9.9)),
        W.mediaSinkType === "WEBCODECS" &&
          ((W.disableZeroPlaybackRateWhileBuffering = !0),
          (W.bufferAheadTargetNoMediaElementSec = 4.9),
          (W.enableMediaElementUnmountNotification = !0),
          (W.enableSkipRecoveryOnDeliberateDetach = !0),
          (W.enableDisposalResourceCleanup = !0)),
        (W.nativeNextFirstMediaPrewarm =
          W.mediaSinkType === "HYBRID" &&
          U !== !0 &&
          a.hybridNativeNextFirstMediaPrewarm === !0));
      var V = W.mediaSinkType === "WEBCODECS",
        H = V
          ? o(
              "VideoPlayerNextgendashWebCodecsDimensions",
            ).capVideoPlayerNextgendashWebCodecsDimensions(a.dimensions)
          : a.dimensions;
      ((W.sidxDisableShiftingMediaTimeRangesByEarliestPresentationTime = o(
        "VideoPlayerNextgendashEngineConfig",
      ).isVideoPlayerNextgendashVODOnlyConfigEnabled(
        W.sidxDisableShiftingMediaTimeRangesByEarliestPresentationTime,
        U,
      )),
        (W.startTimestampSec = a.coreVideoPlayerMetaData.startTimestamp));
      var G = {
          config: W,
          host: i,
          logging: o(
            "VideoPlayerNextgendashLoggingAPI",
          ).combineLoggingDestinations([
            W.qplEnabled
              ? o(
                  "VideoPlayerNextgendashLoggingDestinationQPLFromEngine",
                ).createVideoPlayerNextgendashLoggingDestinationQPLFromEngine(
                  E,
                  k,
                )
              : void 0,
            o(
              "VideoPlayerNextgendashLoggingDestinationEngineWarning",
            ).createVideoPlayerNextgendashLoggingDestinationEngineWarning(
              function (e) {
                (z &&
                  z.point(
                    "warning",
                    o("VideoPlayerNextgendashQPL").qplAnnotationsForError(
                      B(G, e),
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
            R == null ? void 0 : R.loggingDestination,
            L == null ? void 0 : L.loggingDestination,
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
          workQueue: S,
        },
        z = G.config.qplEnabled
          ? o("VideoPlayerNextgendashQPL").qplStartPlayingApi(G)
          : null;
      ((k.current = z), z == null || z.start());
      var j = a.coreVideoPlayerMetaData.expiredVideoUrlRefreshHandler,
        K = null,
        Q = null,
        X = null,
        Y = !1,
        J = o(
          "VideoPlayerNextgendashMain",
        ).VideoPlayerNextgendashMainSM.createSM(
          "VideoPlayerNextgendashMain",
          G,
          null,
          {
            abrConfig: o(
              "VideoPlayerNextgendashEngineConfig",
            ).createVideoPlayerNextgendashABRConfig({
              videoPreferredMinimumSmallestDimension: I(a.minQualityPreference),
            }),
            audioOnly: a.coreVideoPlayerMetaData.audioOnly === !0,
            initialExpiredVideoUrlRefreshHandlerState:
              j != null ? { handler: M(j), identity: j } : null,
            initialMediaVariantIfLangExistsInManifest:
              a.initialAudioUserPreferredLanguage != null
                ? {
                    audioLang: a.initialAudioUserPreferredLanguage,
                    audioRole: "dub",
                    videoLang: G.config.enableLipSync
                      ? a.initialAudioUserPreferredLanguage
                      : null,
                    videoRole: G.config.enableLipSync ? "dub" : null,
                  }
                : null,
            nextgendashInstanceIndex: m,
            onBufferingChanged: function (t) {
              var e = t.changeDirection,
                n = t.domEventAdjustedClock,
                r = t.isInitial;
              (K != null && (K(), (K = null)),
                e === "started"
                  ? ((K = z == null ? void 0 : z.subspan("buffering")),
                    ae.dispatch({
                      payload: {
                        bufferingType: r ? "start/unpause" : "in_play",
                        disableZeroPlaybackRate: G.config
                          .disableZeroPlaybackRateWhileBuffering
                          ? !0
                          : void 0,
                      },
                      type: "buffering_begin_requested",
                    }))
                  : e === "stopped" &&
                    ae.dispatch({
                      payload: { domEventPerfTimestamp: n.perfMs },
                      type: "buffering_end_requested",
                    }));
            },
            onError: function (t) {
              ((G.config.nativeNextFirstMediaPrewarm = !1),
                z &&
                  z.point(
                    "error",
                    o("VideoPlayerNextgendashQPL").qplAnnotationsForError(t),
                  ),
                v == null && (v = t),
                R
                  ? (R.setHalted(t.name),
                    S.enqueueWork(function () {
                      oe(t, "comet_nextgendash_main_error");
                    }))
                  : oe(t, "comet_nextgendash_main_error"));
            },
            onManifestUpdated: function () {
              (z == null || z.point("manifest_updated"),
                ae.dispatch({
                  payload: {
                    selectedVideoQuality: ee.getUserSelectedVideoQuality(),
                  },
                  type: "implementation_engine_qualities_changed",
                }));
            },
            onMediaSourceAttachedChanged: function (t, n) {
              if (
                ((b = n),
                n || C == null || C(),
                Q != null && (Q(), (Q = null)),
                n && (Q = z == null ? void 0 : z.subspan("media_source")),
                !r("gkx")("19514"))
              ) {
                var e,
                  i =
                    (e = J.state.mediaElement) == null
                      ? void 0
                      : e.state.mediaElement,
                  l =
                    i != null
                      ? o(
                          "VideoPlayerNextgendashHostAPI",
                        ).unopaqueVideoPlayerNextgendashHostMediaElement(i)
                      : null;
                (l == null ||
                  ie.current == null ||
                  l !== ie.current.getUnderlyingVideoElement()) &&
                  (ie.current =
                    l != null
                      ? N(
                          W,
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
                  ae.dispatch({
                    payload: {
                      selectedVideoQuality: ee.getUserSelectedVideoQuality(),
                    },
                    type: "implementation_engine_initialized",
                  }));
                {
                  var e = a.coreVideoPlayerMetaData.startTimestamp;
                  e > 0 &&
                    ae.dispatch({
                      payload: { seekTargetPosition: e },
                      type: "controller_seek_requested",
                    });
                }
              };
              if (n && !y && C == null) {
                var u = function () {
                    var e,
                      t =
                        (e = J.state.mediaElement) == null
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
              R == null ? void 0 : R.onSendHaltedToWorkerChanged,
            onVideoRepresentationChanged: function (t, n) {
              (z &&
                z.point("video_representation_changed", {
                  string: {
                    fromVideoRepresentationId: String(t),
                    toVideoRepresentationId: String(n),
                  },
                }),
                ae.dispatch({ payload: {}, type: "representation_changed" }));
            },
            playerInstanceKey: u,
            playerSubOrigin: c,
            playerViewportDimensionsInitial: H,
            prefetchResultInitial:
              h != null && h.length > 0
                ? {
                    prefetchedRepresentationIds: h,
                    prefetchStartedAt: G.host.clock(),
                  }
                : null,
            videoFBID: s,
            workerPortFactories: f,
            workerTypeInitial: l,
          },
        );
      E.current = J;
      function Z() {
        var e;
        return (e = ie.current) != null ? e : null;
      }
      var ee = o(
          "VideoPlayerNextgendashEngineExtrasAPI",
        ).createVideoPlayerNextgendashEngineExtrasAPI({
          getVideoElementAPI: Z,
          mainSm: J,
        }),
        te = null,
        ne = o(
          "VideoPlayerImplementationEngineAPI",
        ).createVideoPlayerImplementationEngine({
          createDebugAPI: function (t) {
            var e = t.getVideoElementAPI,
              n = t.loggerToVPL;
            return L == null
              ? void 0
              : L.createDebugAPI({
                  engineExtrasAPI: ee,
                  getConfig: function () {
                    return a.experimentationConfig;
                  },
                  getVideoElementAPI: e,
                  loggerToVPL: n,
                  mainSm: J,
                });
          },
          createVideoPlayerError: function (t, n) {
            var e = o("nextgendasherr").nextgendasherrFromNextgendasherr(t);
            return e != null
              ? o(
                  "VideoPlayerNextgendashEngineErrors",
                ).createVideoPlayerErrorFromNextgendashEngine(G, e, n)
              : o(
                  "VideoPlayerImplementationErrors",
                ).createVideoPlayerErrorFromGenericError(
                  "VideoPlayerFatalCaughtByNextgendashEngine",
                  t,
                  n,
                );
          },
          destroyEngineParts: function () {
            ((G.config.nativeNextFirstMediaPrewarm = !1), e());
            function e() {
              if (
                (z == null || z.point("destroy"),
                C == null || C(),
                O == null || O(),
                (O = null),
                r("gkx")("19514"))
              ) {
                var e, t;
                (z == null || z.endWithAbort(),
                  (e = x) == null || e.remove(),
                  (x = null),
                  (t = A) == null || t.remove(),
                  (A = null));
              }
              (J.sendEvent({ reason: "destroyEngineParts", type: "__dispose" }),
                R == null || R.disconnect());
            }
          },
          engineCreateArgs: e,
          engineExtrasAPI: ee,
          engineMetadata: {
            isAbrEnabled: !0,
            mediaSinkType: W.mediaSinkType,
            playerInstanceKey: a.loggingMetaData.instanceKey,
            playerVersion:
              W.mediaSinkType === "EMSS"
                ? "comet_nextgendash_wasm"
                : "comet_nextgendash",
            streamingFormat: "dash",
          },
          handleVideoElementChanged: function (t, n) {
            ((t != null || Y) && (G.config.nativeNextFirstMediaPrewarm = !1),
              t != null && (Y = !0),
              X != null && (X(), (X = null)),
              t != null
                ? ((X = z == null ? void 0 : z.subspan("video_element")),
                  te != null && (r("clearTimeout")(te), (te = null)),
                  J.sendEvent({
                    mediaElement: o(
                      "VideoPlayerNextgendashHostAPI",
                    ).opaqueVideoPlayerNextgendashHostMediaElement(t),
                    type: "update_media_element",
                  }))
                : G.config.enableMediaElementUnmountNotification &&
                  J.sendEvent({
                    mediaElement: null,
                    type: "update_media_element",
                  }));
          },
          handleVideoInfoChange: function (t) {
            if (
              (t.hybridNativeNextFirstMediaPrewarm !== !0 &&
                G.config.nativeNextFirstMediaPrewarm &&
                ((G.config.nativeNextFirstMediaPrewarm = !1),
                J.state.state !== "__null__" &&
                  J.state.state !== "__disposed__" &&
                  J.sendEvent({ type: "update_config_from_env" })),
              J.state.state !== "__null__" && J.state.state !== "__disposed__")
            ) {
              var e,
                n = J.state,
                r = V
                  ? o(
                      "VideoPlayerNextgendashWebCodecsDimensions",
                    ).capVideoPlayerNextgendashWebCodecsDimensions(t.dimensions)
                  : t.dimensions;
              (r.height !== n.playerViewportDimensions.height ||
                r.width !== n.playerViewportDimensions.width) &&
                J.sendEvent({
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
                J.sendEvent({
                  expiredVideoUrlRefreshHandlerState:
                    i != null ? { handler: M(i), identity: i } : null,
                  type: "update_expired_video_url_refresh_handler",
                }),
                W.trackScrollPosition &&
                  t.videoPlayerScrollPositionAPI != null &&
                  n.scrollPositionAPI !== t.videoPlayerScrollPositionAPI &&
                  J.sendEvent({
                    scrollPositionAPI: t.videoPlayerScrollPositionAPI,
                    type: "update_scroll_position_api",
                  }));
            }
            return !1;
          },
        }),
        re = ne.engine,
        oe = ne.handleFatalImplementationError,
        ae = ne.machine,
        ie = ne.videoElementAPIRef;
      T.current = ae;
      for (var le of D)
        ae.dispatch({
          payload: { warningError: le },
          type: "implementation_warning",
        });
      if (
        ((D.length = 0),
        (a.manifest != null || a.manifestUrl != null) &&
          J.sendEvent({
            dashManifestUrl: a.manifestUrl,
            dashManifestXmlString: a.manifest,
            type: "update_dash_manifest",
          }),
        z)
      ) {
        var se = void 0,
          ue = null,
          ce = null,
          de = function () {
            var e = ae.getCurrentState().controlledState,
              t = e.error,
              n = e.playbackState;
            if (n !== se) {
              if (
                (ue != null &&
                  (t != null || n !== "paused") &&
                  (ue(), (ue = null)),
                ce != null &&
                  (t != null || n !== "stalling") &&
                  (ce(), (ce = null)),
                t != null)
              ) {
                var r;
                (z.endWithError(v != null ? v : B(G, t)),
                  (r = x) == null || r.remove(),
                  (x = null));
              } else if (n === "playing") {
                var o;
                (z.endWithSuccess(), (o = x) == null || o.remove(), (x = null));
              } else
                n === "paused"
                  ? (ue = z.subspan("paused"))
                  : n === "stalling" && (ce = z.subspan("stalling"));
              se = n;
            }
          };
        ((x = re.implementationController.subscribe(de)), de());
      }
      if (G.config.logStallDetailsAsPlayerWarning) {
        var me = void 0,
          pe = null,
          _e = function () {
            var e = ae.getCurrentState().controlledState,
              t = e.error,
              n = e.playbackState;
            if (n !== me) {
              if (
                ((t != null || n !== "stalling") &&
                  pe != null &&
                  (r("clearTimeout")(pe), (pe = null)),
                t != null)
              ) {
                var o;
                ((o = A) == null || o.remove(), (A = null));
              } else if (n === "stalling" && pe == null) {
                var a = G.host.clock(),
                  i = 200;
                pe = r("setTimeout")(function () {
                  J.sendEvent({
                    stallStartClock: a,
                    type: "debug_log_stall_details",
                  });
                }, i);
              }
              me = n;
            }
          };
        ((A = re.implementationController.subscribe(_e)), _e());
      }
      return (z == null || z.point("engine_created"), re);
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
      (l.getVideoPlayerNextgendashEngineHostAPI = w),
      (l.internal_isMediaLoadPendingWhileHidden = F),
      (l.createVideoPlayerNextgendashEngine = O));
  },
  98,
);
