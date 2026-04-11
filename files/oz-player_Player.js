__d(
  "oz-player/Player",
  [
    "Promise",
    "oz-player/configs/OzPlayerConfig",
    "oz-player/drm/OzDrmManager",
    "oz-player/loggings/OzDevConsolePerfLogger",
    "oz-player/loggings/OzLoggingUtils",
    "oz-player/loggings/OzMultiDestinationPerfLogger",
    "oz-player/loggings/OzOperationLoggerObserver",
    "oz-player/manifests/OzDynamicVideoLibrary",
    "oz-player/manifests/OzVideoRepresentation",
    "oz-player/media_source/MediaSourceManager",
    "oz-player/media_source/OzMediaSeekableRangeManager",
    "oz-player/networks/OzBandwidthEstimator",
    "oz-player/networks/OzClientClock",
    "oz-player/networks/OzNetworkManager",
    "oz-player/parsers/OzMpdParser",
    "oz-player/parsers/OzMpdUpdater",
    "oz-player/parsers/OzXmlParserImplDOMParser",
    "oz-player/playback_controls/OzClearSourceBufferOnSeekManager",
    "oz-player/playback_controls/OzLiveLatencyManager",
    "oz-player/playback_controls/OzPlaybackTimeRangeManager",
    "oz-player/playback_controls/OzPlayheadManager",
    "oz-player/shims/OzEventEmitter",
    "oz-player/shims/OzMaybeNativePromise",
    "oz-player/shims/OzPerformance",
    "oz-player/shims/OzSubscriptionsHandler",
    "oz-player/shims/OzUuid",
    "oz-player/shims/ozClearTimeout",
    "oz-player/shims/ozReportUnexpectedError",
    "oz-player/shims/ozSetTimeoutAcrossTransitions",
    "oz-player/shims/ozvariant",
    "oz-player/states/OzObservedPlaybackState",
    "oz-player/states/OzPositionToViewport",
    "oz-player/strategies/OzAbrManager",
    "oz-player/strategies/OzBandwidthBoundaryStreamSegmentsCountStrategy",
    "oz-player/strategies/OzBlockedRepresentationsManager",
    "oz-player/strategies/OzBufferAheadPriorityStrategy",
    "oz-player/strategies/OzBufferAheadTargetStrategy",
    "oz-player/strategies/OzBufferEndLimitStrategy",
    "oz-player/strategies/OzBufferTargetBoundedStreamSegmentsCountStrategy",
    "oz-player/strategies/OzBufferTargetCalculator",
    "oz-player/strategies/OzBufferTargetCalculatorQuotaExceededConstraint",
    "oz-player/strategies/OzBufferingDetector",
    "oz-player/strategies/OzPausedStreamSegmentsCountStrategy",
    "oz-player/strategies/OzPlayheadAtInterruptionDetector",
    "oz-player/strategies/OzPlayingStatePriorityStrategy",
    "oz-player/strategies/OzPositionToViewportPriorityStrategy",
    "oz-player/strategies/OzPriorityCalculator",
    "oz-player/strategies/OzSingleCodecRestriction",
    "oz-player/strategies/OzStaleManifestBufferTargetStrategy",
    "oz-player/strategies/OzStartupBufferTargetStrategy",
    "oz-player/strategies/OzStaticStreamSegmentsStrategy",
    "oz-player/strategies/OzStreamSegmentsCountCalculator",
    "oz-player/strategies/OzSupportedMimeCodecsRestriction",
    "oz-player/streams/OzEndOfStreamWatcher",
    "oz-player/streams/OzHandleUserRepresentationSwitch",
    "oz-player/streams/OzMediaStream",
    "oz-player/streams/OzPredictedSegmentLocator",
    "oz-player/utils/OzCustomErrorCode",
    "oz-player/utils/OzErrorEmitter",
    "oz-player/utils/OzErrorUtils",
    "oz-player/utils/OzIbrUtils",
    "oz-player/utils/OzMimeUtil",
    "oz-player/utils/OzMpdUtils",
    "oz-player/utils/OzPlaybackRestrictionsUtils",
    "oz-player/utils/OzReadableStreamUtils",
    "oz-player/utils/getRepresentationInCache",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return (e || r("oz-player/shims/ozvariant")(0, 21876), e);
    }
    var u = "av01",
      c = "vp09",
      d = "avc1",
      m = (function (t) {
        function a(e) {
          var n;
          ((n = t.call(this) || this),
            (n.$Player$p_5 = new Map()),
            (n.$Player$p_6 = new Map()),
            (n.$Player$p_9 = void 0),
            (n.$Player$p_10 = new (r(
              "oz-player/shims/OzSubscriptionsHandler",
            ))()),
            (n.$Player$p_11 = new (r("oz-player/utils/OzErrorEmitter"))()),
            (n.$Player$p_12 = new (r("oz-player/utils/OzErrorEmitter"))()),
            (n.$Player$p_19 = void 0),
            (n.$Player$p_25 = []),
            (n.$Player$p_26 = void 0),
            (n.$Player$p_27 = void 0),
            (n.$Player$p_32 = null),
            (n.$Player$p_33 = null),
            (n.$Player$p_43 = null),
            (n.$Player$p_51 = !1),
            (n.$Player$p_54 = 0),
            (n.$Player$p_55 = null),
            (n.$Player$p_56 = null),
            (n.$Player$p_57 = 0),
            (n.$Player$p_58 = null),
            (n.$Player$p_59 = null),
            (n.$Player$p_60 = !1),
            (n.$Player$p_63 = null),
            (n.$Player$p_64 = null),
            (n.$Player$p_70 = !1),
            (n.$Player$p_71 = !1),
            (n.$Player$p_76 = !1),
            (n.$Player$p_77 = null),
            (n.$Player$p_78 = !1),
            (n.$Player$p_89 = function () {
              var e = new (r("oz-player/parsers/OzXmlParserImplDOMParser"))();
              return e;
            }),
            (n.$Player$p_91 = function () {
              n.$Player$p_5.forEach(function (e) {
                return e.endStreamIfBufferedToEndTime();
              });
            }),
            (n.$Player$p_92 = function () {
              n.$Player$p_5.forEach(function (e) {
                return e.endStream("streamGone");
              });
            }));
          var a = e.audioOnly,
            i = a === void 0 ? !1 : a,
            l = e.bufferingDetector,
            s = e.videoNode,
            u = e.config,
            c = e.configMap,
            d = e.rawMpdXml,
            m = e.mpdUrl,
            p = m === void 0 ? null : m,
            _ = e.loggerConfig,
            f =
              _ === void 0
                ? {
                    perfLoggerProviders: [],
                    observedOperationLoggers: [],
                    isOzDevConsoleEnabled: !1,
                  }
                : _,
            g = e.bandwidthEstimatorOverride,
            h = g === void 0 ? null : g,
            y = e.customVTTBufferTargetStrategies,
            C = y === void 0 ? null : y,
            b = e.shouldBlockStatusCode5xx,
            v = b === void 0 ? !1 : b,
            S = e.prefetchCache,
            R = S === void 0 ? null : S,
            L = e.getOverrideOzRequestImplementation,
            E = L === void 0 ? null : L,
            k = e.getUserSelectedPlaybackRate,
            I = e.networkRequestStreamHandlers,
            T = e.networkRequestStreamRetryHandler,
            D = e.networkRequestUrlRefreshHandler,
            x = e.getShouldIncludeCredentials,
            $ = x === void 0 ? null : x,
            P = e.getCustomRequestParametersForURI,
            N = P === void 0 ? null : P,
            M = e.initialRepresentationIDs,
            w = M === void 0 ? [] : M,
            A = e.debugCreateInitiator,
            F = A === void 0 ? null : A,
            O = e.customParsers,
            B = O === void 0 ? new Map() : O,
            W = e.videoPlaybackRestrictions,
            q = W === void 0 ? [] : W,
            U = e.customSegmentTimelineParser,
            V = U === void 0 ? null : U,
            H = e.customRepresentationParsers,
            G = H === void 0 ? {} : H,
            z = e.networkRequestFetchPriority,
            j = z === void 0 ? "auto" : z,
            K = e.videoAbrManagerFactory,
            Q = K === void 0 ? null : K,
            X = e.seekHandler,
            Y = X === void 0 ? null : X,
            J = e.initialPlaybackPositionForDynamicMpd,
            Z = J === void 0 ? -20 : J,
            ee = e.liveheadFallBehindBlockThreshold,
            te = ee === void 0 ? 30 : ee,
            ne = e.liveheadFallBehindBlockMargin,
            re = ne === void 0 ? 5.9 : ne,
            oe = e.startTimeStamp,
            ae = oe === void 0 ? 0 : oe,
            ie = e.drmProviders,
            le = ie === void 0 ? [] : ie,
            se = e.getVideoDimensions,
            ue = se === void 0 ? null : se,
            ce = e.setCustomFetchStreamLoggingAttributes,
            de = ce === void 0 ? null : ce,
            me = e.bufferEndLimit,
            pe = me === void 0 ? null : me,
            _e = e.configureCustomRequestParametersForSegment,
            fe = _e === void 0 ? null : _e,
            ge = e.isClientTriggeredTraceEnabled,
            he = ge === void 0 ? !1 : ge,
            ye = e.enableImmediateQualityDownSwitch,
            Ce = ye === void 0 ? !1 : ye,
            be = e.userPreferenceLang,
            ve = be === void 0 ? null : be,
            Se = e.initiateLivePlaybackFromStart,
            Re = Se === void 0 ? !1 : Se;
          ((n.$Player$p_1 = C), (n.$Player$p_49 = F));
          var Le = f.observedOperationLoggers,
            Ee = f.perfLoggerProviders,
            ke = f.isOzDevConsoleEnabled;
          if (
            ((n.$Player$p_17 = ke || !1),
            (n.$Player$p_16 = new (o(
              "oz-player/loggings/OzMultiDestinationPerfLogger",
            ).OzMultiDestinationPerfLoggerProvider)(
              n.$Player$p_79().concat(Ee),
            )),
            (n.$Player$p_2 = i),
            (n.$Player$p_4 =
              u != null
                ? u
                : new (r("oz-player/configs/OzPlayerConfig"))(
                    c != null ? c : {},
                  )),
            (n.$Player$p_78 =
              n.$Player$p_4.getBool("enable_managed_media_source") &&
              !!window.ManagedMediaSource),
            (n.$Player$p_75 = n.$Player$p_78
              ? "changeType" in window.ManagedSourceBuffer.prototype
              : "changeType" in window.SourceBuffer.prototype),
            n.$Player$p_12.onError(function () {}),
            (n.$Player$p_22 = new (r(
              "oz-player/loggings/OzOperationLoggerObserver",
            ))()),
            n.$Player$p_22.observe(Le, n.$Player$p_16),
            n.$Player$p_16
              .getOperationLogger("player_initialization")
              .setInitiator("player-" + r("oz-player/shims/OzUuid")())
              .log(),
            (n.$Player$p_53 = E),
            (n.$Player$p_28 = B),
            (n.$Player$p_67 = new (r(
              "oz-player/strategies/OzBlockedRepresentationsManager",
            ))(n.$Player$p_4, v)),
            n.$Player$p_10.addSubscriptions(
              n.$Player$p_67.onRepresentationBlocked(function (e) {
                n.emit("representationBlocked", e);
              }),
            ),
            (n.$Player$p_31 = [
              n.$Player$p_67,
              new (r("oz-player/strategies/OzSupportedMimeCodecsRestriction"))(
                n.$Player$p_78,
              ),
            ].concat(q)),
            n.$Player$p_75 ||
              n.$Player$p_31.push(
                new (r("oz-player/strategies/OzSingleCodecRestriction"))(),
              ),
            (n.$Player$p_29 = G),
            (n.$Player$p_30 = V),
            (n.$Player$p_35 = Q),
            (n.$Player$p_36 = Y),
            (n.$Player$p_37 = ae),
            (n.$Player$p_38 = Re ? ae : Z),
            (n.$Player$p_41 =
              k != null
                ? k
                : function () {
                    return 1;
                  }),
            (n.$Player$p_39 = te),
            (n.$Player$p_42 = re),
            (n.$Player$p_66 = pe),
            (n.$Player$p_69 = he),
            (n.$Player$p_71 = Ce),
            (n.$Player$p_47 = le),
            (n.$Player$p_63 = de),
            (n.$Player$p_3 = s),
            (n.$Player$p_7 = new (r(
              "oz-player/media_source/MediaSourceManager",
            ))({
              videoNode: n.$Player$p_3,
              config: n.$Player$p_4,
              perfLoggerProvider: n.$Player$p_16,
              isChangeTypeSupported: n.$Player$p_75,
              useManagedMediaSource: n.$Player$p_78,
              handleVttCaptionsUpdated: function (t) {
                var e,
                  r =
                    (e = n.$Player$p_5.get("caption")) == null ||
                    (e = e.getCurrentRepresentation()) == null
                      ? void 0
                      : e.getLang();
                n.emit("vttCaptionsUpdated", t, r);
              },
              onClearVideoNodeError: function () {
                n.$Player$p_80();
              },
              onRetryVideoElementError: function (t) {
                n.emit("videoNodeErrorRetry", t);
              },
            })),
            n.$Player$p_7.onError(function (e) {
              n.$Player$p_11.emitError(e);
            }),
            n.$Player$p_4.getBool("clear_on_seek"))
          ) {
            var Ie = new (r(
              "oz-player/playback_controls/OzClearSourceBufferOnSeekManager",
            ))(n.$Player$p_3, n.$Player$p_4, n.$Player$p_5, n.$Player$p_16);
            (Ie.maybeOverwriteVideoCurrentTimeProperty(),
              n.$Player$p_10.addSubscriptions(
                Ie.onError(n.$Player$p_11.emitError),
              ),
              (n.$Player$p_64 = Ie));
          }
          n.$Player$p_24 = R;
          var Te = n.$Player$p_24 && n.$Player$p_24.getCachedRepresentations();
          return (
            (n.$Player$p_25 = Te || w),
            (n.$Player$p_65 = new (r(
              "oz-player/manifests/OzDynamicVideoLibrary",
            ))({ config: n.$Player$p_4 })),
            (n.$Player$p_44 = I),
            (n.$Player$p_45 = $),
            (n.$Player$p_46 = N),
            (n.$Player$p_68 = fe),
            (n.$Player$p_77 =
              h != null ? h : r("oz-player/networks/OzBandwidthEstimator")),
            (n.$Player$p_13 = new (r("oz-player/networks/OzNetworkManager"))({
              config: n.$Player$p_4,
              prefetchCache: n.$Player$p_24,
              networkRequestStreamHandlers: n.$Player$p_44,
              getOverrideOzRequestImplementation: n.$Player$p_53,
              getShouldIncludeCredentials: n.$Player$p_45,
              getCustomRequestParametersForURI: n.$Player$p_46,
              networkRequestFetchPriority: j,
              networkRequestStreamRetryHandler: T,
              networkRequestUrlRefreshHandler: D,
              setCustomFetchStreamLoggingAttributes: n.$Player$p_63,
              dynamicVideoLibrary: n.$Player$p_65,
              configureCustomRequestParametersForSegment: n.$Player$p_68,
              onResourceTimingBufferFull: function () {
                n.$Player$p_81();
              },
              bandwidthEstimator: n.$Player$p_77,
            })),
            (n.$Player$p_18 = p),
            (n.$Player$p_8 = d),
            (n.$Player$p_14 = new (r(
              "oz-player/states/OzObservedPlaybackState",
            ))(n.$Player$p_4, n.$Player$p_3, n.$Player$p_16)),
            (n.$Player$p_52 = ue),
            (n.$Player$p_15 = new (r("oz-player/streams/OzEndOfStreamWatcher"))(
              n.$Player$p_7,
              n.$Player$p_4,
            )),
            n.$Player$p_10.addSubscriptions(
              n.$Player$p_15.addListener("streamEnd", function () {
                ((n.$Player$p_51 = !0), n.emit("streamEnd"));
              }),
            ),
            (n.$Player$p_50 = l != null ? l : n.$Player$p_82()),
            n.$Player$p_4.getNumber("pixels_below_viewport_to_observe") > 0 &&
              (n.$Player$p_61 = new (r(
                "oz-player/states/OzPositionToViewport",
              ))(n.$Player$p_3, n.$Player$p_4)),
            (n.$Player$p_72 = ve),
            (n.$Player$p_73 = null),
            (n.$Player$p_74 = { lang: null, role: null }),
            n
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.$Player$p_81 = function () {
            this.$Player$p_70 ||
              (r("oz-player/shims/ozReportUnexpectedError")(
                o("oz-player/utils/OzErrorUtils").createOzError({
                  type: "OZ_JAVASCRIPT_NATIVE",
                  description: "ResourceTiming buffer is full",
                }),
                "ResourceTiming buffer is full",
                "warn",
              ),
              (this.$Player$p_70 = !0));
          }),
          (i.$Player$p_83 = function (t) {
            var e = this;
            this.$Player$p_84();
            var n = o(
              "oz-player/loggings/OzLoggingUtils",
            ).executeOperationAndLog(
              this.$Player$p_16.cloneContext().setInitiator(this.$Player$p_49),
              "parse_manifest",
              function (n) {
                var r,
                  a,
                  i = e.$Player$p_85(t),
                  l = String(
                    (r = i.getCustomField("currentServerTimeMs")) != null
                      ? r
                      : "",
                  ),
                  s = String(
                    (a = i.getCustomField("lastVideoFrameTs")) != null ? a : "",
                  ),
                  u = {
                    currentServerTimeMs: l,
                    ingestLastVideoFrameTs: s,
                    nowMs: String(Date.now()),
                  },
                  c = o("oz-player/utils/OzMpdUtils").getMpdLastTimeRange(
                    i,
                    e.$Player$p_4,
                  ),
                  d = c && c.endTime != 0 ? c.endTime : null;
                return (
                  n
                    .setLiveheadPosition(d)
                    .setLiveheadSeqNumMpd(
                      o("oz-player/utils/OzMpdUtils").getMpdLastSequenceNumber(
                        i,
                      ),
                    )
                    .setManifestType(i.isStaticMpd() ? "static" : "dynamic")
                    .setIsMixedCodecManifest(e.$Player$p_76)
                    .setIsTemplatedManifest(
                      !!i.getCustomField("isLiveTemplated"),
                    )
                    .setUserInfo(u),
                  i
                );
              },
            );
            this.$Player$p_86(n);
          }),
          (i.$Player$p_86 = function (t) {
            var e = this,
              n,
              a;
            if (
              ((this.$Player$p_9 = s(t)),
              this.$Player$p_4.getBool("player_emit_mpdparsed_early") &&
                this.emit("mpdParsed", t),
              (this.$Player$p_26 = this.$Player$p_87()),
              (this.$Player$p_27 = this.$Player$p_88()),
              this.$Player$p_67.setAvailableRepresentationsCount(
                t.getVideoRepresentations().length,
              ),
              this.$Player$p_18 != null)
            ) {
              var i = new (r("oz-player/parsers/OzMpdUpdater"))(
                this.$Player$p_4,
                t,
                this.$Player$p_13,
                this.$Player$p_14,
                this.$Player$p_16,
                {
                  mpdUrl: null,
                  createXmlParser: this.$Player$p_89,
                  customParsers: this.$Player$p_28,
                  customRepresentationParsers: this.$Player$p_29,
                  customSegmentTimelineParser: this.$Player$p_30,
                },
                this.$Player$p_48,
                this.$Player$p_69,
                this.$Player$p_78,
              );
              (this.$Player$p_90(i),
                this.$Player$p_10.addSubscriptions(
                  i.onError(this.$Player$p_11.emitError),
                  i.addListener("manifestFetchError", function (t) {
                    return e.emit("manifestFetchError", t);
                  }),
                  i.addListener("manifestFetchErrorRetry", function (t) {
                    return e.emit("manifestFetchErrorRetry", t);
                  }),
                  i.addListener("streamTransitionToStatic", this.$Player$p_91),
                  i.addListener("streamGone", this.$Player$p_92),
                ),
                i.setupUpdateLoop(),
                (this.$Player$p_21 = i));
            }
            (this.$Player$p_4.getBool("use_live_latency_manager")
              ? t.isStaticMpd()
                ? (this.$Player$p_37 = this.$Player$p_37)
                : ((this.$Player$p_40 = new (r(
                    "oz-player/playback_controls/OzLiveLatencyManager",
                  ))({
                    config: this.$Player$p_4,
                    mpd: t,
                    playbackState: this.$Player$p_14,
                    bufferingDetector: this.$Player$p_50,
                    video: this.$Player$p_3,
                    loggerProvider: this.$Player$p_16,
                    getUserSelectedPlaybackRate: this.$Player$p_41,
                  })),
                  (this.$Player$p_37 =
                    this.$Player$p_40.getPreferredLiveHeadLatencySec() * -1))
              : (this.$Player$p_37 = t.isStaticMpd()
                  ? this.$Player$p_37
                  : this.$Player$p_93(t)),
              (this.$Player$p_19 = new (r(
                "oz-player/playback_controls/OzPlayheadManager",
              ))({
                video: this.$Player$p_3,
                mpd: t,
                dynamicVideoLibrary: this.$Player$p_65,
                playheadCatchup: this.$Player$p_34,
                playbackState: this.$Player$p_14,
                config: this.$Player$p_4,
                perfLoggerProvider: this.$Player$p_16,
                seekHandler: this.$Player$p_36,
                initialPlaybackPosition: this.$Player$p_37,
                canSupportSkipVideobufferGaps:
                  (n =
                    (a = this.$Player$p_64) == null
                      ? void 0
                      : a.getCurrentTimePropertyOverwriteSuccess()) != null
                    ? n
                    : !1,
                liveLatencyManager: this.$Player$p_40,
              })),
              (this.$Player$p_20 = new (r(
                "oz-player/playback_controls/OzPlaybackTimeRangeManager",
              ))({
                config: this.$Player$p_4,
                video: this.$Player$p_3,
                mpd: t,
                liveheadFallBehindBlockThreshold: this.$Player$p_39,
                liveheadFallBehindBlockMargin: this.$Player$p_42,
                playbackState: this.$Player$p_14,
                perfLoggerProvider: this.$Player$p_16,
              })),
              this.$Player$p_94().catch(function (t) {
                var n = o("oz-player/utils/OzErrorUtils").isOzError(t)
                  ? t
                  : null;
                e.$Player$p_11.emitError(
                  o("oz-player/utils/OzErrorUtils").createOzError({
                    type: "OZ_INITIALIZATION",
                    description: "Failed to setup streams: " + String(t),
                    extra: babelHelpers.extends(
                      {},
                      n == null ? void 0 : n.getExtra(),
                      {
                        originalError: t,
                        code: r(
                          "oz-player/utils/OzCustomErrorCode",
                        ).SETUP_STREAMS_PROMISE_REJECTION.toString(),
                      },
                    ),
                  }),
                );
              }),
              this.emit("mpdReady", t));
          }),
          (i.load = function (t) {
            var e = this;
            this.$Player$p_18 = t;
            try {
              var n = this.$Player$p_8;
              n != null
                ? this.$Player$p_83(n)
                : t != null
                  ? this.$Player$p_95(t)
                      .then(function (t) {
                        if (e.$Player$p_60) {
                          ((e.$Player$p_60 = !1), e.load(e.$Player$p_18));
                          return;
                        }
                        ((e.$Player$p_8 = t),
                          (e.$Player$p_54 = 0),
                          e.$Player$p_83(t));
                      })
                      .catch(function (n) {
                        if (e.$Player$p_60) {
                          ((e.$Player$p_60 = !1), e.load(e.$Player$p_18));
                          return;
                        }
                        var r = o("oz-player/utils/OzErrorUtils").isOzError(n)
                            ? n
                            : null,
                          a = o("oz-player/utils/OzErrorUtils").createOzError({
                            type: "OZ_INITIALIZATION",
                            description:
                              "Failed to setup player with fetched MPD: " +
                              String(n),
                            extra: babelHelpers.extends(
                              {},
                              r == null ? void 0 : r.getExtra(),
                              { originalError: n, url: t },
                            ),
                          });
                        e.$Player$p_96(a, t);
                      })
                  : this.$Player$p_11.emitError(
                      o("oz-player/utils/OzErrorUtils").createOzError({
                        type: "OZ_INITIALIZATION",
                        description:
                          "Cannot start Oz without a raw mpd xml or mpd url",
                      }),
                    );
            } catch (e) {
              var r = o("oz-player/utils/OzErrorUtils").isOzError(e) ? e : null;
              this.$Player$p_11.emitError(
                o("oz-player/utils/OzErrorUtils").createOzError({
                  type: "OZ_INITIALIZATION",
                  description: "Failed to setup player: " + String(e),
                  extra: babelHelpers.extends(
                    {},
                    r == null ? void 0 : r.getExtra(),
                    { originalError: e },
                  ),
                }),
              );
            }
          }),
          (i.$Player$p_93 = function (t) {
            var e,
              n,
              r =
                (e = t.getVideoRepresentations()[0].getMaxGopSec()) != null
                  ? e
                  : 0,
              o =
                (n = t.getVideoRepresentations()[0].getEndingSegment()) == null
                  ? void 0
                  : n.getTimeRange(),
              a = o != null ? o.endTime - o.startTime : 0;
            return (
              a > 0 && (r = a),
              Math.min(
                this.$Player$p_38 +
                  this.$Player$p_4.getNumber(
                    "dynamic_mpd_initial_playback_position_offset_modifier",
                  ),
                -1 *
                  r *
                  this.$Player$p_4.getNumber(
                    "pdash_download_cursor_catchup_threshold_gop_multiplier",
                  ),
              )
            );
          }),
          (i.$Player$p_95 = function (t) {
            this.$Player$p_54++;
            var e = this.$Player$p_13.requestRawUrl({
                debugName: "OzPlayer/fetchMpdXml/mpd",
                url: t,
                options: null,
                loggerProvider: this.$Player$p_16,
              }),
              n = e.getStream().getReader();
            return o("oz-player/utils/OzReadableStreamUtils").pumpString(n);
          }),
          (i.$Player$p_97 = function () {
            this.$Player$p_55 != null &&
              (r("oz-player/shims/ozClearTimeout")(this.$Player$p_55),
              (this.$Player$p_55 = null));
          }),
          (i.$Player$p_96 = function (t, n) {
            var e = this,
              o = !0,
              a = this.$Player$p_54 - 1,
              i = t.getExtra().code;
            this.$Player$p_56 !== i
              ? ((this.$Player$p_56 = i), (this.$Player$p_57 = 1))
              : this.$Player$p_57++;
            var l = function () {
                o = !1;
              },
              s = {
                endStream: function () {
                  (l(), (e.$Player$p_51 = !0), e.emit("streamGoneBeforeStart"));
                },
                consecutiveFailuresForErrorCode: this.$Player$p_57,
                error: t,
                isInitialRequest: !0,
                retry: function (o) {
                  (l(),
                    e.$Player$p_97(),
                    (e.$Player$p_55 = r(
                      "oz-player/shims/ozSetTimeoutAcrossTransitions",
                    )(
                      function () {
                        (e.$Player$p_97(), e.load(n));
                      },
                      (o == null ? void 0 : o.waitMs) != null
                        ? o == null
                          ? void 0
                          : o.waitMs
                        : 1e3,
                    )));
                },
                retryAttemptCount: a,
              };
            (this.$Player$p_4.getNumber(
              "initial_manifest_request_retry_count",
            ) > 0 && this.emit("manifestFetchError", s),
              o && this.$Player$p_11.emitError(t));
          }),
          (i.updatePlayerRunTimeConfig = function (t) {
            var e = t.applicationStreamDataHandler,
              n = t.audioStreamDataHandler,
              r = t.manifestUrl,
              o = t.resetStreamAnchor,
              a = t.videoStreamDataHandler;
            if (a !== void 0) {
              var i = this.$Player$p_5.get("video");
              i && i.updateRunTimeConfigs({ streamDataHandler: a });
            }
            if (o !== void 0) {
              var l,
                s = this.$Player$p_5.get("video");
              s && s.updateRunTimeConfigs({ resetStreamAnchor: o });
              var u = this.$Player$p_5.get("audio");
              (u && u.updateRunTimeConfigs({ resetStreamAnchor: o }),
                (l = this.$Player$p_19) == null || l.resetCurrentTime());
            }
            if (n !== void 0) {
              var c = this.$Player$p_5.get("audio");
              c && c.updateRunTimeConfigs({ streamDataHandler: n });
            }
            if (e !== void 0) {
              var d = this.$Player$p_5.get("caption");
              d &&
                d.updateRunTimeConfigs({
                  streamDataHandler: e,
                  resetStreamAnchor: o,
                });
            }
            r != null && r !== "" && this.$Player$p_98(r);
          }),
          (i.$Player$p_99 = function (t, n) {
            var e = this,
              r = t.getMimeCodecs(),
              a = this.$Player$p_7.createSourceBufferManager(
                n + "/" + t.getMimeType() + "/" + t.getCodecs(),
                r,
                n,
                t.getInitSegment().getData(),
              );
            this.$Player$p_100(a, n, t);
            var i = a.then(function (t) {
              return (
                e.$Player$p_50 &&
                  n !== "caption" &&
                  e.$Player$p_50.setSourceBufferState(
                    n,
                    t.getSourceBufferState(),
                  ),
                t
              );
            });
            return (
              o(
                "oz-player/loggings/OzLoggingUtils",
              ).monitorPromiseAndLogOperation(
                i,
                this.$Player$p_16,
                "source_attach",
                function (e) {
                  e.setType(n);
                },
              ),
              i.then(function (t) {
                if (n !== "caption") {
                  var r;
                  (r = e.$Player$p_19) == null ||
                    r.observeSourceBufferState(t.getSourceBufferState(), n);
                }
              })
            );
          }),
          (i.isDrm = function () {
            var e = this.$Player$p_48;
            if (e != null) {
              var t = e.hasContentProtections();
              return t != null ? t : !1;
            }
            return !1;
          }),
          (i.$Player$p_84 = function () {
            var e = this.$Player$p_47;
            if (e.length > 0) {
              var t = (this.$Player$p_48 = new (o(
                "oz-player/drm/OzDrmManager",
              ).OzDrmManager)(this.$Player$p_16, this.$Player$p_3, {
                maxStartEMEAttempts: this.$Player$p_4.getNumber(
                  "max_start_eme_attempts",
                ),
                throwNoLicenseError: !0,
              }));
              (e.forEach(function (e) {
                t.addProvider(e);
              }),
                this.$Player$p_10.addSubscriptions(
                  t.onError(this.$Player$p_11.emitError),
                ));
            }
          }),
          (i.$Player$p_101 = function (t) {
            var e = this,
              n = s(this.$Player$p_9),
              o = [
                this.$Player$p_4,
                t,
                this.$Player$p_102(),
                this.$Player$p_31,
                this.$Player$p_14,
                window.devicePixelRatio || 1,
                function () {
                  return e.$Player$p_103();
                },
                n.isStaticMpd() ? "static" : "dynamic",
                this.$Player$p_16,
              ],
              a = this.$Player$p_35 && this.$Player$p_35.apply(this, o);
            return a != null
              ? a
              : babelHelpers.construct(
                  r("oz-player/strategies/OzAbrManager"),
                  o,
                );
          }),
          (i.$Player$p_104 = function (t) {
            return t === "caption";
          }),
          (i.$Player$p_100 = function (t, n, a) {
            var e = this,
              i = s(this.$Player$p_9),
              l = this.$Player$p_6.get(n),
              u = new (r("oz-player/streams/OzMediaStream"))({
                config: this.$Player$p_4,
                sourceBufferManagerPromise: t,
                networkManager: this.$Player$p_13,
                playbackState: this.$Player$p_14,
                endOfStreamWatcher: n !== "caption" ? this.$Player$p_15 : null,
                bufferTargetCalculator: this.$Player$p_105(n),
                priorityCalculator: this.$Player$p_106(),
                streamSegmentsCountCalculator: this.$Player$p_107(n),
                abrManager: l,
                representation: a,
                loggerProvider: this.$Player$p_16.cloneContext().setType(n),
                segmentLocator: this.$Player$p_62,
                setCustomFetchStreamLoggingAttributes: this.$Player$p_63,
                blockedRepresentationsManager: this.$Player$p_67,
                dynamicVideoLibrary: this.$Player$p_65,
                shouldAppendOncePerStream: this.$Player$p_104(n),
                mediaStreamType: n,
                warningEmitter: this.$Player$p_12,
                mpd: i,
              });
            (this.$Player$p_37 === 0
              ? u.start()
              : (s(this.$Player$p_9),
                this.$Player$p_19 &&
                  this.$Player$p_10.addSubscriptions(
                    this.$Player$p_19.addListener(
                      "initialPlaybackPositionSet",
                      function () {
                        u.start();
                      },
                    ),
                  )),
              this.$Player$p_10.addSubscriptions(
                u.onError(this.$Player$p_11.emitError),
              ),
              this.$Player$p_23 &&
                this.$Player$p_10.addSubscriptions(
                  this.$Player$p_23.listenToMediaStreamInitAppended(u),
                ),
              n === "video" &&
                ((this.$Player$p_33 = new (r(
                  "oz-player/streams/OzHandleUserRepresentationSwitch",
                ))(
                  this.$Player$p_4,
                  this.$Player$p_14,
                  o(
                    "oz-player/utils/OzPlaybackRestrictionsUtils",
                  ).applyVideoPlaybackRestrictions(
                    this.$Player$p_31,
                    this.$Player$p_103(),
                    this.$Player$p_102(),
                  ),
                  u,
                  t,
                  this.$Player$p_71,
                )),
                this.$Player$p_10.addSubscriptions(
                  this.$Player$p_33.onError(this.$Player$p_11.emitError),
                )),
              this.$Player$p_5.set(n, u),
              this.$Player$p_10.addSubscriptions(
                u.addListener("switchRepresentation", function () {
                  var t,
                    r,
                    o,
                    a = u.getCurrentRepresentation();
                  ((t = e.$Player$p_23) == null || t.setTimeRangeProvider(a),
                    (r = e.$Player$p_19) == null || r.setTimeRangeProvider(a),
                    (o = e.$Player$p_20) == null || o.setTimeRangeProvider(a),
                    n === "video" && e.emit("switchVideoRepresentation"));
                }),
                u.addListener("SegmentAppended", function (t) {
                  e.$Player$p_108("SegmentAppended", t);
                }),
                u.addListener("streamError", function (t) {
                  e.emit("streamError", t);
                }),
                u.addListener("streamErrorRetry", function (t) {
                  e.emit("streamErrorRetry", t);
                }),
              ));
          }),
          (i.$Player$p_109 = function () {
            return this.$Player$p_66 != null
              ? [
                  new (r("oz-player/strategies/OzBufferEndLimitStrategy"))(
                    this.$Player$p_3,
                    this.$Player$p_66,
                  ),
                ]
              : [
                  new (r(
                    "oz-player/strategies/OzStaleManifestBufferTargetStrategy",
                  ))(s(this.$Player$p_9), this.$Player$p_4),
                  new (r("oz-player/strategies/OzStartupBufferTargetStrategy"))(
                    this.$Player$p_14,
                    this.$Player$p_4,
                  ),
                  new (r("oz-player/strategies/OzBufferAheadTargetStrategy"))(
                    this.$Player$p_4,
                  ),
                ];
          }),
          (i.$Player$p_110 = function () {
            return this.$Player$p_66 == null
              ? [
                  new (r(
                    "oz-player/strategies/OzBufferTargetCalculatorQuotaExceededConstraint",
                  ))({
                    config: this.$Player$p_4,
                    minimumBufferTargetSec: this.$Player$p_4.getNumber(
                      "buffer_target_constraint_minimum_sec",
                    ),
                  }),
                ]
              : [];
          }),
          (i.$Player$p_111 = function () {
            return this.$Player$p_66 == null
              ? [
                  new (r(
                    "oz-player/strategies/OzBufferTargetCalculatorQuotaExceededConstraint",
                  ))({ config: this.$Player$p_4, minimumBufferTargetSec: 0 }),
                ]
              : [];
          }),
          (i.$Player$p_87 = function () {
            return new (r("oz-player/strategies/OzBufferTargetCalculator"))(
              this.$Player$p_109(),
              this.$Player$p_110(),
            );
          }),
          (i.$Player$p_88 = function () {
            return this.$Player$p_1 != null
              ? new (r("oz-player/strategies/OzBufferTargetCalculator"))(
                  [].concat(this.$Player$p_1, this.$Player$p_109()),
                  this.$Player$p_111(),
                )
              : this.$Player$p_87();
          }),
          (i.$Player$p_105 = function (t) {
            var e = t === "caption" ? this.$Player$p_27 : this.$Player$p_26;
            return (e || r("oz-player/shims/ozvariant")(0, 76764, t), e);
          }),
          (i.$Player$p_90 = function (t) {
            var e = this;
            if (
              this.$Player$p_4.getNumber(
                "stream_interrupt_check_mpd_stale_count_threshold",
              ) > 0
            ) {
              var n = this.$Player$p_50,
                o = new (r(
                  "oz-player/strategies/OzPlayheadAtInterruptionDetector",
                ))(this.$Player$p_3, n);
              (this.$Player$p_10.addSubscriptions(
                o.addListener("playheadAtInterruption", function (t) {
                  (e.$Player$p_16
                    .getOperationLogger("stream_interrupted")
                    .log(),
                    e.emit("streamInterruptAt", t));
                }),
                t.addListener("streamInterruptAt", function (t) {
                  var n;
                  ((n = e.$Player$p_50) == null || n.notifyStreamInterrupted(),
                    o.notifyStreamInterrupted(t));
                }),
                t.addListener("streamResumedAt", function (t) {
                  var n;
                  (e.$Player$p_16.getOperationLogger("stream_resumed").log(),
                    (n = e.$Player$p_50) == null || n.notifyStreamResumed(),
                    o.notifyStreamResumed(),
                    e.emit("streamResumedAt", t));
                }),
              ),
                (this.$Player$p_32 = o));
            }
          }),
          (i.$Player$p_106 = function () {
            var e = [
              new (r("oz-player/strategies/OzPlayingStatePriorityStrategy"))(
                this.$Player$p_14,
              ),
              new (r("oz-player/strategies/OzBufferAheadPriorityStrategy"))(
                this.$Player$p_4,
                this.$Player$p_14,
              ),
            ].concat(
              this.$Player$p_4.getNumber("pixels_below_viewport_to_observe") >
                0 && this.$Player$p_61 != null
                ? new (r(
                    "oz-player/strategies/OzPositionToViewportPriorityStrategy",
                  ))(this.$Player$p_61, this.$Player$p_4)
                : [],
            );
            return new (r("oz-player/strategies/OzPriorityCalculator"))(e);
          }),
          (i.$Player$p_107 = function (t) {
            var e = [
              new (r("oz-player/strategies/OzStaticStreamSegmentsStrategy"))(
                this.$Player$p_4,
              ),
              new (r(
                "oz-player/strategies/OzBufferTargetBoundedStreamSegmentsCountStrategy",
              ))(this.$Player$p_105(t), this.$Player$p_4),
            ];
            return (
              this.$Player$p_4.getNumber("paused_stream_segments_count") !==
                0 &&
                e.push(
                  new (r(
                    "oz-player/strategies/OzPausedStreamSegmentsCountStrategy",
                  ))(this.$Player$p_14, this.$Player$p_4),
                ),
              t === "video" &&
                e.push(
                  new (r(
                    "oz-player/strategies/OzBandwidthBoundaryStreamSegmentsCountStrategy",
                  ))(this.$Player$p_4, this.$Player$p_102()),
                ),
              new (r("oz-player/strategies/OzStreamSegmentsCountCalculator"))(e)
            );
          }),
          (i.onError = function (t) {
            return this.$Player$p_11.onError(t);
          }),
          (i.onWarning = function (t) {
            return this.$Player$p_12.onError(t);
          }),
          (i.getSelectedVideoQuality = function () {
            var e = this.$Player$p_9;
            if (!e || this.$Player$p_2) return null;
            var t = this.$Player$p_5.get("video"),
              n = t && t.getCurrentRepresentation();
            if (n instanceof r("oz-player/manifests/OzVideoRepresentation"))
              return n.getDisplayLabel();
            var o = this.$Player$p_102(),
              a = o[0];
            return a ? a.getDisplayLabel() : null;
          }),
          (i.getTargetAudioTrack = function () {
            var e = this.$Player$p_9;
            if (!e) return null;
            var t = this.$Player$p_5.get("audio"),
              n = t && t.getCurrentRepresentation();
            if (n) {
              var r;
              return {
                id: n.getID(),
                displayLabel: n.getDisplayLabel(),
                lang: (r = n.getLang()) != null ? r : null,
                role: n.getRole(),
                mimeCodecs: n.getMimeCodecs(),
                variantKey: n.getVariantKey(),
              };
            }
            var o = this.$Player$p_112(),
              a = o[0];
            return a ? a.getAudioTrack() : null;
          }),
          (i.getCurrentPlayingVideoVariant = function () {
            return this.$Player$p_73;
          }),
          (i.getTargetVideoVariant = function () {
            return this.$Player$p_74;
          }),
          (i.switchToVideoQuality = function (t) {
            var e = this.$Player$p_102().find(function (e) {
              return e.getDisplayLabel() === t;
            });
            if (e) {
              var n = this.$Player$p_5.get("video");
              n && (n.switchRepresentation(e), n.disableAdaptation());
            }
          }),
          (i.switchToVideoVariant = function (t) {
            var e, n, a, i;
            if (
              ((this.$Player$p_74 =
                t === null ? { lang: null, role: null } : t),
              this.$Player$p_74.lang ===
                ((e = (n = this.$Player$p_73) == null ? void 0 : n.lang) != null
                  ? e
                  : null) &&
                this.$Player$p_74.role ===
                  ((a = (i = this.$Player$p_73) == null ? void 0 : i.role) !=
                  null
                    ? a
                    : null))
            ) {
              var l, s, u, c;
              r("oz-player/shims/ozReportUnexpectedError")(
                o("oz-player/utils/OzErrorUtils").createOzError({
                  type: "OZ_SWITCH_VARIANT",
                  description:
                    "switchToVideoVariant switch to the same lang: " +
                    ((l = this.$Player$p_74.lang) != null
                      ? l
                      : "default lang") +
                    ", same role: " +
                    ((s = this.$Player$p_74.role) != null ? s : "default role"),
                }),
                "switchToVideoVariant switch to the same lang: " +
                  ((u = this.$Player$p_74.lang) != null ? u : "default lang") +
                  ", same role: " +
                  ((c = this.$Player$p_74.role) != null ? c : "default role"),
                "warn",
              );
              return;
            } else if (this.$Player$p_9) {
              if (!this.$Player$p_113(this.$Player$p_74.lang)) {
                var d, m, p, _;
                r("oz-player/shims/ozReportUnexpectedError")(
                  o("oz-player/utils/OzErrorUtils").createOzError({
                    type: "OZ_SWITCH_VARIANT",
                    description:
                      "switchToVideoVariant lang not exist in mpd: " +
                      ((d = this.$Player$p_74.lang) != null
                        ? d
                        : "default lang") +
                      ", same role: " +
                      ((m = this.$Player$p_74.role) != null
                        ? m
                        : "default role"),
                  }),
                  "switchToVideoVariant lang not exist in mpd: " +
                    ((p = this.$Player$p_74.lang) != null
                      ? p
                      : "default lang") +
                    ", same role: " +
                    ((_ = this.$Player$p_74.role) != null ? _ : "default role"),
                  "warn",
                );
                return;
              }
            } else {
              r("oz-player/shims/ozReportUnexpectedError")(
                o("oz-player/utils/OzErrorUtils").createOzError({
                  type: "OZ_SWITCH_VARIANT",
                  description: "switchToVideoVariant mpd is void",
                }),
                "switchToVideoVariant mpd is void",
                "warn",
              );
              return;
            }
            (this.$Player$p_114(),
              this.$Player$p_4.getBool("enable_lip_sync_abr_select_quality") &&
                this.$Player$p_4.getBool("enable_alternative_audio_tracks") &&
                this.$Player$p_75 &&
                this.$Player$p_115(),
              (this.$Player$p_73 = this.$Player$p_74));
          }),
          (i.$Player$p_114 = function () {
            var e = this.$Player$p_112()[0];
            if (e) {
              var t = this.$Player$p_5.get("audio");
              t &&
                (t.switchRepresentation(e, [
                  0,
                  this.$Player$p_14.getDuration(),
                ]),
                t.disableAdaptation());
            }
          }),
          (i.$Player$p_115 = function () {
            var e = this.$Player$p_5.get("video");
            if (e) {
              var t = e.getCurrentRepresentation();
              if (
                !(
                  t.getLang() === this.$Player$p_74.lang &&
                  t.getRole() === this.$Player$p_74.role
                )
              ) {
                var n = this.$Player$p_102();
                if (n.length === 0) {
                  r("oz-player/shims/ozReportUnexpectedError")(
                    o("oz-player/utils/OzErrorUtils").createOzError({
                      type: "OZ_SWITCH_VARIANT",
                      description:
                        "switchVideoByTargetVariant no representations with target variant: " +
                        JSON.stringify(this.$Player$p_74),
                    }),
                    "switchVideoByTargetVariant no representations with target variant: " +
                      JSON.stringify(this.$Player$p_74),
                    "warn",
                  );
                  return;
                }
                var a,
                  i = this.$Player$p_6.get("video");
                if (
                  (i
                    ? (i.updateRepresentations(n),
                      (a = i.getBestRepresentation()))
                    : (a = n[0]),
                  !a)
                ) {
                  r("oz-player/shims/ozReportUnexpectedError")(
                    o("oz-player/utils/OzErrorUtils").createOzError({
                      type: "OZ_SWITCH_VARIANT",
                      description:
                        "switchVideoByTargetVariant unable to update representations given target variant: " +
                        JSON.stringify(this.$Player$p_74),
                    }),
                    "switchVideoByTargetVariant unable to update representations given target variant: " +
                      JSON.stringify(this.$Player$p_74),
                  );
                  return;
                }
                e.switchRepresentation(a, [0, this.$Player$p_14.getDuration()]);
              }
            }
          }),
          (i.getIsVideoQualityAdaptationEnabled = function () {
            var e = this.$Player$p_5.get("video");
            return e ? e.getIsAdaptationEnabled() : !1;
          }),
          (i.enableVideoQualityAdaptation = function () {
            var e = this.$Player$p_5.get("video");
            e && e.enableAdaptation();
          }),
          (i.getVideoQualities = function () {
            var e = this,
              t = this.$Player$p_9;
            if (!t) return [];
            var n = this.$Player$p_102().filter(function (t) {
                var n;
                return !(
                  (n = e.$Player$p_67) != null && n.isBlocked(t.getID())
                );
              }),
              r = n.some(function (e) {
                return (
                  o("oz-player/utils/OzMimeUtil").getParsedCodecFamily(
                    e.getCodecs(),
                  ) === u
                );
              }),
              a = n.some(function (e) {
                return (
                  o("oz-player/utils/OzMimeUtil").getParsedCodecFamily(
                    e.getCodecs(),
                  ) === c
                );
              }),
              i = r
                ? n.filter(function (e) {
                    return (
                      o("oz-player/utils/OzMimeUtil").getParsedCodecFamily(
                        e.getCodecs(),
                      ) === u
                    );
                  })
                : a
                  ? n.filter(function (e) {
                      return (
                        o("oz-player/utils/OzMimeUtil").getParsedCodecFamily(
                          e.getCodecs(),
                        ) === c
                      );
                    })
                  : n.filter(function (e) {
                      return (
                        o("oz-player/utils/OzMimeUtil").getParsedCodecFamily(
                          e.getCodecs(),
                        ) === d
                      );
                    });
            return i
              .sort(function (e, t) {
                return e.getBandwidth() - t.getBandwidth();
              })
              .map(function (e) {
                return e.getDisplayLabel();
              });
          }),
          (i.getVideoTracks = function () {
            var e = this,
              t = this.$Player$p_9;
            return t
              ? this.$Player$p_102()
                  .filter(function (t) {
                    var n;
                    return !(
                      (n = e.$Player$p_67) != null && n.isBlocked(t.getID())
                    );
                  })
                  .map(function (e) {
                    return {
                      mimeCodecs: e.getMimeCodecs(),
                      codec: e.getCodecs(),
                      codecFamily: o(
                        "oz-player/utils/OzMimeUtil",
                      ).getParsedCodecFamily(e.getMimeCodecs()),
                      displayLabel: e.getDisplayLabel(),
                      qualityLabel: e.getDisplayLabel(),
                      height: e.getHeight(),
                      id: e.getID(),
                      qualityScoreCurveString:
                        e.getQualityScoreCurveString("csvqm"),
                      width: e.getWidth(),
                      lang: e.getLang(),
                      role: e.getRole(),
                      variantKey: e.getVariantKey(),
                    };
                  })
              : [];
          }),
          (i.getAudioTracks = function () {
            var e = this,
              t = this.$Player$p_9;
            return t
              ? t
                  .getAudioRepresentations()
                  .filter(function (t) {
                    var n;
                    return !(
                      (n = e.$Player$p_67) != null && n.isBlocked(t.getID())
                    );
                  })
                  .map(function (e) {
                    return e.getAudioTrack();
                  })
              : [];
          }),
          (i.setEnableLiveheadCatchup = function (t) {
            var e;
            if (this.$Player$p_20) {
              var n;
              (t
                ? this.$Player$p_16
                    .getOperationLogger("live_catchup_enabled")
                    .setIsLatencyCachupEnabled(!0)
                    .log()
                : this.$Player$p_16
                    .getOperationLogger("live_catchup_disabled")
                    .setIsLatencyCachupEnabled(!1)
                    .log(),
                (n = this.$Player$p_20) == null ||
                  n.setTimelineBlockingEnabled(t));
            }
            (this.$Player$p_5.forEach(function (e) {
              e.setEnableLiveheadCatchup(t);
            }),
              (e = this.$Player$p_19) == null || e.setEnableLiveheadCatchup(t));
          }),
          (i.$Player$p_94 = function () {
            var t = this;
            if (
              this.$Player$p_4.getBool("enable_alternative_audio_tracks") &&
              this.$Player$p_113(this.$Player$p_72)
            ) {
              var r;
              this.$Player$p_74 = babelHelpers.extends({}, this.$Player$p_74, {
                lang: (r = this.$Player$p_72) != null ? r : null,
                role: this.$Player$p_72 != null ? "dub" : null,
              });
            }
            var a = this.$Player$p_102()[0];
            this.$Player$p_62 =
              (a &&
                a.canPredict() &&
                this.$Player$p_4.getBool("pdash_use_pdash_segmentlocator")) ||
              (a && a.canApproximateId())
                ? new (o(
                    "oz-player/streams/OzPredictedSegmentLocator",
                  ).OzPredictedSegmentLocator)({
                    videoNode: this.$Player$p_3,
                    liveLatencyManager: this.$Player$p_40,
                    loggerProvider: this.$Player$p_16,
                    dynamicVideoLibrary: this.$Player$p_65,
                  })
                : null;
            var i = this.$Player$p_2
                ? [
                    this.$Player$p_116({ liveConfigsFromAudioStream: !0 }),
                    this.$Player$p_117(),
                  ]
                : [
                    this.$Player$p_118(),
                    this.$Player$p_116({ liveConfigsFromAudioStream: !1 }),
                    this.$Player$p_117(),
                  ],
              l = [];
            return (e || (e = n("Promise"))).all(i).then(function () {
              var e = t.$Player$p_5.get("video"),
                n = t.$Player$p_5.get("audio"),
                r = t.$Player$p_5.get("caption");
              (e && l.push(e.getCurrentRepresentation()),
                n && l.push(n.getCurrentRepresentation()),
                r && l.push(r.getCurrentRepresentation()),
                l.forEach(function (e) {
                  t.$Player$p_10.addSubscriptions(
                    e.addUpdateListener(function () {
                      t.$Player$p_108("SegmentIndexesUpdated", l);
                    }),
                  );
                }),
                t.$Player$p_108("InitialSegmentIndexes", l),
                t.$Player$p_3 &&
                  t.$Player$p_3.style &&
                  (t.$Player$p_3.style.display = t.$Player$p_2
                    ? "none"
                    : "block"),
                (t.$Player$p_73 = t.$Player$p_74),
                t.emit("initialized"));
            });
          }),
          (i.$Player$p_119 = function (t) {
            if (!t.getTimeRanges().length) {
              this.$Player$p_16
                .getOperationLogger("playhead_adjustment")
                .setInitiator("setup_initial_duration")
                .setResult("failed")
                .log();
              return;
            }
            var e = t.getTimeRanges()[t.getTimeRanges().length - 1].endTime;
            this.$Player$p_7.updateDuration(e, !0);
          }),
          (i.$Player$p_120 = function (t) {
            var e, n, o;
            ((this.$Player$p_23 = new (r(
              "oz-player/media_source/OzMediaSeekableRangeManager",
            ))(this.$Player$p_7, this.$Player$p_4)),
              this.$Player$p_119(t),
              (e = this.$Player$p_23) == null || e.setTimeRangeProvider(t),
              (n = this.$Player$p_19) == null || n.setTimeRangeProvider(t),
              (o = this.$Player$p_20) == null || o.setTimeRangeProvider(t));
          }),
          (i.$Player$p_118 = function () {
            var e = this.$Player$p_102();
            if (!e.length)
              return r("oz-player/shims/OzMaybeNativePromise").reject(
                o("oz-player/utils/OzErrorUtils").createOzError({
                  type: "OZ_INITIALIZATION",
                  description: "No video representations in the manifest",
                  extra: {
                    code: r(
                      "oz-player/utils/OzCustomErrorCode",
                    ).SETUP_STREAMS_PROMISE_REJECTION.toString(),
                  },
                }),
              );
            var t = o(
              "oz-player/utils/OzPlaybackRestrictionsUtils",
            ).applyVideoPlaybackRestrictions(
              this.$Player$p_31,
              this.$Player$p_103(),
              e,
            );
            if (!t.length) {
              var n = e.map(function (e) {
                return (
                  e.getDisplayLabel() +
                  "@" +
                  e.getWidth() +
                  "x" +
                  e.getHeight() +
                  "(" +
                  e.getMimeCodecs() +
                  ")"
                );
              });
              return r("oz-player/shims/OzMaybeNativePromise").reject(
                o("oz-player/utils/OzErrorUtils").createOzError({
                  type: "OZ_INITIALIZATION",
                  description:
                    "Restricted all video representations: " + n.join(", "),
                  extra: {
                    code: r(
                      "oz-player/utils/OzCustomErrorCode",
                    ).SETUP_STREAMS_PROMISE_REJECTION.toString(),
                  },
                }),
              );
            }
            this.$Player$p_120(t[0]);
            var a = this.$Player$p_121(t);
            a &&
              this.$Player$p_4.getBool("enable_abr_logging") &&
              this.$Player$p_16
                .getOperationLogger(
                  "video_stream_setup_initial_representation_from_prefetch",
                )
                .setResult("success")
                .setReason("player_initialized")
                .setRepresentationID(a.getID())
                .setPreviousRepresentationID(null)
                .setUserInfo({
                  initialRepresentationIDs: JSON.stringify(this.$Player$p_25),
                })
                .setType("video")
                .setInitiator("Player")
                .log();
            var i = this.$Player$p_101(a || t[0]);
            return (
              this.$Player$p_6.set("video", i),
              a || (a = i.getBestRepresentation()),
              this.$Player$p_99(a || t[0], "video")
            );
          }),
          (i.$Player$p_102 = function () {
            var e = this.$Player$p_9;
            if (!e) return [];
            var t = e.getVideoRepresentations();
            if (
              this.$Player$p_4.getBool("enable_lip_sync_abr_select_quality") &&
              this.$Player$p_4.getBool("enable_alternative_audio_tracks") &&
              this.$Player$p_75
            ) {
              var n = e.getVideoRepresentationsByVariant(this.$Player$p_74);
              t =
                n.length > 0
                  ? n
                  : e.getVideoRepresentationsByVariant({
                      lang: null,
                      role: null,
                    });
            }
            var r = o(
              "oz-player/utils/OzPlaybackRestrictionsUtils",
            ).applyVideoPlaybackRestrictions(
              this.$Player$p_31,
              this.$Player$p_103(),
              t,
            );
            return t.filter(function (e) {
              return r.includes(e);
            });
          }),
          (i.$Player$p_112 = function () {
            var e = this.$Player$p_9;
            return e
              ? this.$Player$p_4.getBool("enable_alternative_audio_tracks")
                ? e.getAudioRepresentationsByVariant(this.$Player$p_74)
                : e.getAudioRepresentations()
              : [];
          }),
          (i.$Player$p_113 = function (t) {
            var e = this.$Player$p_9;
            if (!e) return !1;
            var n = e.getAudioRepresentations();
            if (t == null) return !0;
            if (
              this.$Player$p_4.getBool("enable_alternative_audio_tracks") &&
              e.isStaticMpd()
            ) {
              var r = -1;
              return (
                (r = n.findIndex(function (e) {
                  return e.getLang() === t;
                })),
                r > -1
              );
            }
            return !1;
          }),
          (i.$Player$p_116 = function (t) {
            var e = this,
              n = t.liveConfigsFromAudioStream,
              o = n === void 0 ? !1 : n,
              a = s(this.$Player$p_9),
              i = a.getAudioRepresentations();
            o && this.$Player$p_120(i[0]);
            var l = -1;
            if (
              (this.$Player$p_4.getBool("enable_alternative_audio_tracks") &&
                i.length > 1 &&
                a.isStaticMpd() &&
                this.$Player$p_72 != null &&
                (l = i.findIndex(function (t) {
                  return t.getLang() === e.$Player$p_72;
                })),
              i.length)
            ) {
              var u =
                  l > -1
                    ? l
                    : i.findIndex(function (e) {
                        return e.getLang() == null && e.getRole() == null;
                      }),
                c = u > -1 ? u : 0;
              return this.$Player$p_99(
                l >= 0 && l < i.length ? i[l] : this.$Player$p_122(i) || i[c],
                "audio",
              );
            }
            return r("oz-player/shims/OzMaybeNativePromise").resolve();
          }),
          (i.$Player$p_117 = function () {
            var e = s(this.$Player$p_9),
              t = e.getApplicationRepresentations();
            return t.length
              ? this.$Player$p_99(t[0], "caption")
              : r("oz-player/shims/OzMaybeNativePromise").resolve();
          }),
          (i.getMpd = function () {
            return this.$Player$p_9;
          }),
          (i.destroy = function (o) {
            var t,
              a,
              i = this,
              l = this.$Player$p_16
                .getOperationLogger("unload")
                .setInitiator(o)
                .start();
            ((t = this.$Player$p_64) == null || t.destroy(),
              this.$Player$p_97(),
              this.$Player$p_5.forEach(function (e) {
                e.destroy();
              }),
              this.$Player$p_33 &&
                (this.$Player$p_33.destroy(), (this.$Player$p_33 = null)),
              (this.$Player$p_5 = new Map()),
              this.$Player$p_10.release(),
              this.$Player$p_10.engage(),
              this.$Player$p_14.destroy(),
              this.$Player$p_19 && this.$Player$p_19.destroy(),
              this.$Player$p_40 &&
                (this.$Player$p_40.destroy(), (this.$Player$p_40 = null)),
              this.$Player$p_20 &&
                (this.$Player$p_20.destroy(), (this.$Player$p_20 = null)),
              this.$Player$p_48 && this.$Player$p_48.destroy(),
              this.$Player$p_61 && this.$Player$p_61.destroy(),
              this.$Player$p_13 && this.$Player$p_13.destroy(),
              this.$Player$p_52 && (this.$Player$p_52 = null),
              this.$Player$p_7 && this.$Player$p_7.detach(),
              this.$Player$p_3.pause(),
              this.$Player$p_4.getBool("enable_revoke_object_url_on_destroy") &&
                URL.revokeObjectURL(this.$Player$p_3.src),
              this.$Player$p_3.setAttribute("src", ""),
              this.$Player$p_3.removeAttribute("src"),
              this.$Player$p_3.removeAttribute("srcObject"));
            var s = (e || (e = n("Promise"))).resolve();
            return (
              typeof this.$Player$p_3.setMediaKeys == "function" &&
                (s = this.$Player$p_3.setMediaKeys(null)),
              this.$Player$p_21 && this.$Player$p_21.destroy(),
              this.$Player$p_32 && this.$Player$p_32.destroy(),
              this.$Player$p_22.destroy(),
              (a = this.$Player$p_23) == null || a.destroy(),
              this.$Player$p_50 && this.$Player$p_50.destroy(),
              this.$Player$p_67 && this.$Player$p_67.destroy(),
              l.log(),
              this.emit("destroyed"),
              s
                .catch(function (e) {
                  r("oz-player/shims/ozReportUnexpectedError")(
                    e,
                    "Player.destroy",
                    "warn",
                  );
                })
                .then(function () {
                  i.$Player$p_3.load();
                })
            );
          }),
          (i.$Player$p_121 = function (t) {
            var e = this,
              n = t.find(function (t) {
                return e.$Player$p_25.indexOf(t.getID()) !== -1;
              });
            return (
              n ||
                (n = r("oz-player/utils/getRepresentationInCache")(
                  t,
                  this.$Player$p_24,
                )),
              n || null
            );
          }),
          (i.$Player$p_122 = function (t) {
            var e = this,
              n,
              a = t.find(function (t) {
                return e.$Player$p_25.indexOf(t.getID()) !== -1;
              });
            return (
              a ||
                (a = r("oz-player/utils/getRepresentationInCache")(
                  t,
                  this.$Player$p_24,
                )),
              !a &&
                !((n = this.$Player$p_9) != null && n.isStaticMpd()) &&
                t.length > 1 &&
                (a = o(
                  "oz-player/utils/OzIbrUtils",
                ).getInitialAudioRepresentation(
                  t,
                  this.$Player$p_4,
                  this.$Player$p_16,
                )),
              a || null
            );
          }),
          (i.$Player$p_123 = function (t) {
            return null;
          }),
          (i.$Player$p_85 = function (t) {
            var e = new (r("oz-player/parsers/OzMpdParser"))({
                config: this.$Player$p_4,
                ozParserContext: {
                  mpdUrl: this.$Player$p_18,
                  createXmlParser: this.$Player$p_89,
                  customParsers: this.$Player$p_28,
                  customRepresentationParsers: this.$Player$p_29,
                  customSegmentTimelineParser: this.$Player$p_30,
                },
                networkManager: this.$Player$p_13,
                perfLoggerProvider: this.$Player$p_16,
                drmManager: this.$Player$p_48,
                initialRepresentationIDs: this.$Player$p_25,
                blockedRepresentationsManager: this.$Player$p_67,
                enableAlternativeAudioTracks: this.$Player$p_4.getBool(
                  "enable_alternative_audio_tracks",
                ),
                useManagedMediaSource: this.$Player$p_78,
              }),
              n = e.parse(t);
            this.$Player$p_10.addSubscriptions(
              e.onError(this.$Player$p_11.emitError),
            );
            var a = o(
              "oz-player/utils/OzPlaybackRestrictionsUtils",
            ).applyVideoPlaybackRestrictions(
              this.$Player$p_31,
              this.$Player$p_103(),
              n.getVideoRepresentations(),
            );
            if (a.length > 1) {
              var i = o("oz-player/utils/OzMimeUtil").getParsedCodecFamily(
                a[0].getMimeCodecs(),
              );
              this.$Player$p_76 = !a.reduce(function (e, t) {
                return (
                  e &&
                  o("oz-player/utils/OzMimeUtil").getParsedCodecFamily(
                    t.getMimeCodecs(),
                  ) === i
                );
              }, !0);
            }
            return n;
          }),
          (i.$Player$p_79 = function () {
            var e = [];
            return (
              this.$Player$p_17 &&
                e.push(
                  new (o(
                    "oz-player/loggings/OzDevConsolePerfLogger",
                  ).OzDevConsolePerfLoggerProvider)(),
                ),
              e
            );
          }),
          (i.$Player$p_124 = function (t, n) {
            var e = this.$Player$p_5.get(n);
            return e ? e.getRepresentationIDAtTime(t) : null;
          }),
          (i.getAudioRepresentationIDAtTime = function (t) {
            return this.$Player$p_124(t, "audio");
          }),
          (i.getVideoRepresentationIDAtTime = function (t) {
            return this.$Player$p_124(t, "video");
          }),
          (i.getCurrentVideoRepresentation = function () {
            return this.$Player$p_125("video");
          }),
          (i.getCurrentAudioRepresentation = function () {
            return this.$Player$p_125("audio");
          }),
          (i.getCurrentPlayingAudioTrackID = function () {
            var e = this.getCurrentAudioRepresentation();
            return e == null ? void 0 : e.getID();
          }),
          (i.$Player$p_125 = function (t) {
            var e,
              n = this.$Player$p_124(this.$Player$p_14.getCurrentTime(), t),
              r = this.$Player$p_9;
            if (!r) return null;
            var o = [];
            return (
              t === "audio"
                ? (o = this.$Player$p_112())
                : t === "video" && (o = this.$Player$p_102()),
              (e = o.find(function (e) {
                return e.getID() === n;
              })) != null
                ? e
                : null
            );
          }),
          (i.getSelectedVideoRepresentation = function () {
            var e = this.$Player$p_5.get("video");
            return e != null ? e.getCurrentRepresentation() : null;
          }),
          (i.getSelectedAudioRepresentation = function () {
            var e = this.$Player$p_5.get("audio");
            return e != null ? e.getCurrentRepresentation() : null;
          }),
          (i.getDebug = function () {
            var e = this,
              t = this.$Player$p_5.get("video"),
              n = this.$Player$p_5.get("audio"),
              r = this.$Player$p_5.get("caption"),
              o,
              a,
              i,
              l,
              u,
              c,
              d;
            if (t) {
              var m, p;
              if (
                ((o =
                  (m = t.getDebug()) == null
                    ? void 0
                    : m.MediaStreamAbrManager),
                (a =
                  (p = t.getDebug()) == null ? void 0 : p.SourceBufferManager),
                a)
              ) {
                var _;
                i = (_ = a.getDebug()) == null ? void 0 : _.SourceBuffer;
              }
            }
            if (n) {
              var f;
              if (
                ((l =
                  (f = n.getDebug()) == null ? void 0 : f.SourceBufferManager),
                l)
              ) {
                var g;
                u = (g = l.getDebug()) == null ? void 0 : g.SourceBuffer;
              }
            }
            if (r) {
              var h;
              if (
                ((c =
                  (h = r.getDebug()) == null ? void 0 : h.SourceBufferManager),
                c)
              ) {
                var y;
                d = (y = c.getDebug()) == null ? void 0 : y.SourceBuffer;
              }
            }
            return {
              getManifest: function () {
                return s(e.$Player$p_9);
              },
              DashManifestParsed: this.$Player$p_9,
              VideoSourceStream: t,
              VideoAbrManager: o,
              VideoBufferManager: a,
              VideoSourceBuffer: i,
              AudioSourceStream: n,
              AudioBufferManager: l,
              AudioSourceBuffer: u,
              CaptionSourceStream: r,
              CaptionBufferManager: c,
              CaptionSourceBuffer: d,
            };
          }),
          (i.injectExternalDebugEvent = function (t, n) {
            this.$Player$p_108(t, n);
          }),
          (i.$Player$p_108 = function (t, n) {
            this.emit("debug/dashPlayerEvent", {
              detail: { type: t, event: n },
            });
          }),
          (i.$Player$p_82 = function () {
            var e = this,
              t = new (r("oz-player/strategies/OzBufferingDetector"))(
                this.$Player$p_3,
                this.$Player$p_4.getLegacyConfig(),
                function () {
                  return e.$Player$p_51 ? e.$Player$p_3.duration : 1 / 0;
                },
              );
            return (
              t.attachPerfLoggerProvider(this.$Player$p_16),
              this.$Player$p_10.addSubscriptions(
                t.addListener("enterBuffering", function (t) {
                  e.emit("enterBuffering", t);
                }),
                t.addListener("leaveBuffering", function (t) {
                  e.emit("leaveBuffering", t);
                }),
              ),
              t
            );
          }),
          (i.$Player$p_103 = function () {
            var e = this.$Player$p_52
              ? this.$Player$p_52()
              : {
                  width: this.$Player$p_3.offsetWidth,
                  height: this.$Player$p_3.offsetHeight,
                };
            return e;
          }),
          (i.getMpdUrl = function () {
            return this.$Player$p_18;
          }),
          (i.$Player$p_98 = function (t) {
            var e = this;
            this.$Player$p_18 = t;
            var n = this.$Player$p_9;
            if (n) {
              (n.updateLocation(t),
                this.$Player$p_43 &&
                  (this.$Player$p_10.releaseOne(this.$Player$p_43),
                  (this.$Player$p_43 = null)));
              var r = function () {
                (e.$Player$p_43 &&
                  (e.$Player$p_10.releaseOne(e.$Player$p_43),
                  (e.$Player$p_43 = null)),
                  e.$Player$p_5.forEach(function (t, r) {
                    var o = t.getCurrentRepresentation(),
                      a = o.getDisplayLabel(),
                      i = (
                        r === "video"
                          ? e.$Player$p_102()
                          : n.getAudioRepresentations()
                      ).slice();
                    if (r === "video") {
                      var l = e.$Player$p_6.get(r);
                      l && l.updateRepresentations(e.$Player$p_102());
                    }
                    var s = i[0];
                    (i.forEach(function (e) {
                      var t = e.getDisplayLabel();
                      t === a && (s = e);
                    }),
                      t.switchRepresentation(s),
                      t.restartLoopBody());
                  }));
              };
              ((this.$Player$p_43 = n.addListener("updated", r)),
                this.$Player$p_10.addSubscriptions(this.$Player$p_43));
            } else {
              this.$Player$p_60 = !0;
              return;
            }
          }),
          (i.getPerfLoggerProvider = function () {
            return this.$Player$p_16;
          }),
          (i.getApproximateFBLSToPlayerDisplayLatency = function () {
            var e,
              t,
              n,
              r,
              o = Number(
                (e =
                  (t = this.$Player$p_9) == null
                    ? void 0
                    : t.getCustomField("lastVideoFrameTs")) != null
                  ? e
                  : void 0,
              ),
              a = Number(
                (n =
                  (r = this.$Player$p_9) == null
                    ? void 0
                    : r.getCustomField("currentServerTimeMs")) != null
                  ? n
                  : void 0,
              ),
              i = this.$Player$p_126(o, a),
              l = this.$Player$p_127(o, a);
            return { latencyFromClockSync: l, latencyFromMpdUpdate: i };
          }),
          (i.$Player$p_126 = function (t, n) {
            if (!this.$Player$p_14.getCurrentTime() || isNaN(t) || isNaN(n))
              return null;
            var e = 0;
            this.$Player$p_58 === t
              ? (e =
                  (r("oz-player/shims/OzPerformance").now() -
                    Number(this.$Player$p_59)) /
                  1e3)
              : ((this.$Player$p_59 = r("oz-player/shims/OzPerformance").now()),
                (this.$Player$p_58 = t));
            var o = t / 1e3 + e - this.$Player$p_14.getCurrentTime();
            return o;
          }),
          (i.$Player$p_127 = function (t, n) {
            var e;
            if (
              !this.$Player$p_14.getCurrentTime() ||
              isNaN(t) ||
              isNaN(n) ||
              r("oz-player/networks/OzClientClock").getClientClockOffsetMs() ==
                null ||
              !r("oz-player/networks/OzClientClock").getClientClockOffsetMs()
            )
              return null;
            var o =
                this.$Player$p_14.getCurrentTimeUpdateTime() +
                ((e = r(
                  "oz-player/networks/OzClientClock",
                ).getClientClockOffsetMs()) != null
                  ? e
                  : 0),
              a = n,
              i = this.$Player$p_14.getCurrentTime() * 1e3,
              l = t,
              s = (o - a - (i - l)) / 1e3;
            return s;
          }),
          (i.$Player$p_80 = function () {
            this.$Player$p_5.forEach(function (e) {
              e.restartLoopBody();
              var t = e.getCurrentRepresentation();
              e.switchRepresentation(t);
            });
          }),
          a
        );
      })(r("oz-player/shims/OzEventEmitter"));
    l.default = m;
  },
  98,
);
