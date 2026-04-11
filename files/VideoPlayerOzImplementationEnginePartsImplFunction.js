__d(
  "VideoPlayerOzImplementationEnginePartsImplFunction",
  [
    "CometThrottle",
    "ConstUriUtils",
    "Deferred",
    "FBLogger",
    "JSResourceForInteraction",
    "NetworkStatus",
    "OzActiveActiveFailoverNetworkRequestStreamHandler",
    "OzBufferVTTCaptionsVisibleStrategy",
    "OzCDNSignedQueryParams",
    "OzCustomParsers",
    "OzCustomRepresentationParsers",
    "OzOneSemanticHandler",
    "OzOneSemanticHandlerUtils",
    "OzPredictedSegmentTimelineParser",
    "OzVideoLiveTraceNetworkRequestStreamHandler",
    "Promise",
    "QE2Logger",
    "TimeRanges",
    "VideoPlayerConnectionQuality",
    "VideoPlayerImplementationErrors",
    "VideoPlayerODS",
    "VideoPlayerOzImplementationEnginePartsImplUtils",
    "clearTimeout",
    "cr:1836099",
    "cr:1871597",
    "cr:1947728",
    "cr:1993377",
    "getErrorSafe",
    "getOzPlaybackRestrictions",
    "gkx",
    "justknobx",
    "md5",
    "oz-player/configs/OzConfigUtils",
    "oz-player/networks/OzBandwidthEstimator",
    "oz-player/networks/OzClockSyncNetworkRequestStreamHandler",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("JSResourceForInteraction")("VideoPlayerEmsg").__setRef(
        "VideoPlayerOzImplementationEnginePartsImplFunction",
      ),
      u = 1e4,
      c = null,
      d = null;
    n("cr:1836099") &&
      ((c = n("cr:1836099").getHiveConfig()), (d = n("cr:1836099").HiveOz));
    function m(t) {
      var a,
        i,
        l = t.OzPlayerClass,
        m = t.callChain,
        p = t.destroyOzPlayerPartsRef,
        _ = t.engineDebugAPI,
        f = t.engineExtrasAPI,
        g = t.getCaptionsInfo,
        h = t.getLatencyLevelManager,
        y = t.getVideoLiveTrace,
        C = t.handleCaptionsInfoChange,
        b = t.handleFatalImplementationError,
        v = t.hivePluginRef,
        S = t.initialProps,
        R = t.initiateLivePlaybackFromStart,
        L = t.loggerToVPL,
        E = t.machine,
        k = t.overrideOzRequestImplementationRef,
        I = t.ozBufferingDetectorRef,
        T = t.ozPlayerRef,
        D = t.p2pSessionLoggerRef,
        x = t.playerFormatForDPLRef,
        $ = t.playerVersion,
        P = t.resolvedVideoInfo,
        N = t.videoElement,
        M = t.videoElementAPI,
        w = { current: !1 },
        A = { current: null },
        F = { current: null };
      p.current = function (t) {
        var e = I.current;
        e && ((I.current = null), e.destroy());
        var n = T.current;
        if (n) {
          (_ && _.handleOzPlayerChanged(null, M), (T.current = null));
          try {
            n.destroy([].concat(t, ["destroyOzPlayerParts"]).join(":")).catch(
              function (e) {
                var t = r("getErrorSafe")(e);
                r("FBLogger")("comet_video_player")
                  .catching(t)
                  .mustfix("Error in ozPlayer.destroy (async): %s", t.message);
              },
            );
          } catch (e) {
            var o = r("getErrorSafe")(e);
            r("FBLogger")("comet_video_player")
              .catching(o)
              .mustfix("Error in ozPlayer.destroy: %s", o.message);
          }
        }
        var a = A.current;
        (a && ((A.current = null), a()),
          F.current && (F.current = null),
          Ue(),
          v.current != null && (v.current = null),
          D.current && (D.current = null),
          k.current && (k.current = null));
      };
      var O = P.accessToken,
        B = P.audioOnly,
        W = P.experimentationConfig,
        q = P.graphQLVideoDRMInfo,
        U = P.graphQLVideoP2PSettings,
        V = P.manifestUrl,
        H = P.manifestXmlStringResolved,
        G = P.minQualityPreference,
        z = P.ozPrefetchCache,
        j = P.videoFBID,
        K = S.coreVideoPlayerMetaData.loggingConfig,
        Q =
          K.disableLogging === !0
            ? null
            : P.VideoPlayerShakaPerformanceLoggerClass,
        X = !!S.coreVideoPlayerMetaData.isLiveStreaming,
        Y = !!(
          (a = S.coreVideoPlayerMetaData.isClientTriggeredTraceEnabled) !=
            null && a
        ),
        J = function (t) {
          return f.getEstimatedBandwidth();
        },
        Z = function () {
          return f.getApproximateFBLSToPlayerDisplayLatency();
        },
        ee = function () {
          W.setContext(
            "connection_quality",
            o("VideoPlayerConnectionQuality").evaluate(function () {
              return J(X);
            }),
          );
        },
        te = function () {
          var e = W.getNumber(
            "connection_quality_context_throttle_frequency",
            0,
          );
          if (e === 0) return null;
          var t = r("CometThrottle")(ee, e),
            n = r("oz-player/networks/OzBandwidthEstimator").addListener(
              "bandwidth_sampled",
              t,
            );
          return function () {
            (n.remove(), t.cancel());
          };
        };
      A.current = te();
      var ne = o(
          "VideoPlayerOzImplementationEnginePartsImplUtils",
        ).createOzDrmProviders({
          accessToken: O,
          graphQLVideoDRMInfo: q,
          videoFBID: j,
        }),
        re = function () {
          return E.getCurrentState().controlledState.captionsVisible;
        },
        oe = [];
      W.getBool("use_vtt_captions_visible_buffer_strategy", !0) &&
        oe.push(new (r("OzBufferVTTCaptionsVisibleStrategy"))(re));
      var ae = function () {
          return E.getCurrentState().controlledState.dimensions;
        },
        ie = function () {
          var e;
          return (e = x.current) != null ? e : "unknown";
        },
        le = o(
          "VideoPlayerOzImplementationEnginePartsImplUtils",
        ).createOzPerfLoggerProviders({
          VideoPlayerShakaPerformanceLoggerClass: Q,
          accessToken: O,
          disableLogging: K.disableLogging === !0,
          getApproximateFBLSToPlayerDisplayLatency: Z,
          getBandwidthEstimate: J,
          getPlayerDimensions: ae,
          getPlayerFormat: ie,
          playbackIsLiveStreaming: X,
          playerInstanceCount:
            S.loggingMetaData.playerImplementationInstanceCountRef.current,
          playerInstanceKey: S.loggingMetaData.instanceKey,
          playerSuborigin: S.coreVideoPlayerMetaData.subOrigin,
          playerVersion: $,
          videoElement: N,
          videoFBID: j,
          videoPlayerShakaPerformanceLoggerBuilder:
            P.videoPlayerShakaPerformanceLoggerBuilder,
        });
      if (
        (F.current == null && (F.current = new (r("OzCDNSignedQueryParams"))()),
        U && j != null)
      ) {
        var se,
          ue = U.community_info,
          ce = U.config,
          de = U.hive_initialization_options,
          me = (D.current =
            (se = D.current) != null
              ? se
              : n("cr:1871597")
                ? new (n("cr:1871597"))(j, ue)
                : null);
        try {
          if (v.current == null) {
            me && me.logEnableP2P();
            var pe = function (t) {
                D.current && D.current.logHiveError(t);
              },
              _e = function (t) {
                var e = T.current;
                (e && e.injectExternalDebugEvent("P2PTech", t.tech),
                  D.current && D.current.logSessionActive(t.tech));
              },
              fe = function (t) {
                var e = T.current;
                (e && e.injectExternalDebugEvent("P2PStats", t),
                  D.current && D.current.setCurrentHiveStats(t));
              },
              ge = function (t) {
                var e = t.state,
                  n = E.getCurrentState(),
                  r = n.controlledState,
                  o = r.playbackState;
                if (v.current != null && e === "CLOSED") {
                  Ue();
                  var a = T.current;
                  a &&
                    o !== "ended" &&
                    (w.current && V != null
                      ? a.updatePlayerRunTimeConfig({ manifestUrl: V })
                      : a.load(V));
                }
              },
              he = {
                HiveJava: {},
                HiveJS: {
                  maximumTrimming: { dash: void 0, hls: void 0 },
                  renderStatsCallback: fe,
                },
                debugLevel: "off",
                hiveTechOrder: ["HiveJS", "StatsJS", "HiveJava"],
                onActiveSession: _e,
                onError: pe,
                onSessionStateChange: ge,
                telemetryId: me ? me.getSessionID() : 0,
              },
              ye = W.getNumber("hive_maximum_trimming_seconds", 0);
            if (
              (ye > 0 && (he.HiveJS.maximumTrimming = { dash: ye, hls: ye }),
              de)
            ) {
              var Ce = de.HiveJava,
                be = de.debugLevel,
                ve = de.hiveTechOrder;
              ((he.hiveTechOrder = ve.slice()),
                (he.HiveJava = Ce ? { minVersion: Ce.minVersion } : {}),
                (he.debugLevel = be != null ? be : he.debugLevel));
            }
            if (
              ce.disable_hivejava_for_livevc === !0 &&
              V != null &&
              V.startsWith("https://livestream-lookaside")
            ) {
              var Se = he.hiveTechOrder.indexOf("HiveJava");
              Se >= 0 && he.hiveTechOrder.splice(Se, 1);
            }
            if (c) c.SensitiveInfo.restrictedConnectivityInfo = !0;
            else
              throw r("FBLogger")("comet_video_player").mustfixThrow(
                "HiveConfig does not exist",
              );
            if (d) v.current = new d(he);
            else
              throw r("FBLogger")("comet_video_player").mustfixThrow(
                "HiveOz does not exist",
              );
            if (v.current != null) {
              if (!n("cr:1947728"))
                throw r("FBLogger")("comet_video_player").mustfixThrow(
                  "OzConfigurableRequestImplementation does not exist",
                );
              k.current = n("cr:1947728")(
                v.current.getRequestImplementation(),
                { inferResponseStatusIsOK: !0, inferResponseStatusIsOk2xx: !1 },
              );
            }
          }
        } catch (e) {
          var Re = r("getErrorSafe")(e);
          (me && me.logError(Re), Ue());
        }
      }
      var Le = [
        new (r("OzVideoLiveTraceNetworkRequestStreamHandler"))(
          function (e, t, n) {
            var r = y();
            r != null && r.handleHeadersAndBody(e, t, n);
          },
          W.getBool("live_trace_parse_emsg", !1),
        ),
        new (r("oz-player/networks/OzClockSyncNetworkRequestStreamHandler"))(),
      ];
      r("OzActiveActiveFailoverNetworkRequestStreamHandler") &&
        Le.push(
          new (r("OzActiveActiveFailoverNetworkRequestStreamHandler"))(
            function (e, t) {
              var n = T.current,
                r = e.headers;
              if (n && r) {
                var a = parseInt(r.get("x-fb-video-replica"), 10);
                L.logVPLEvent({
                  eventType: "replica_switch",
                  logDataOverrides: {
                    error_code: e.status.toString(),
                    error_user_info: JSON.stringify({
                      failover_response_code: e.status.toString(),
                      replica: a,
                      url: t,
                    }),
                  },
                  state: E.getCurrentState(),
                });
                var i = n.getMpdUrl();
                if (i != null) {
                  var l = o("ConstUriUtils").getUri(i);
                  if (l) {
                    var s = l.addQueryParam("replica", a);
                    s &&
                      (Ue(),
                      n.updatePlayerRunTimeConfig({
                        manifestUrl: s.toString(),
                        resetStreamAnchor: !0,
                      }));
                  }
                }
              }
            },
          ),
        );
      var Ee = S.coreVideoPlayerMetaData.expiredVideoUrlRefreshHandler,
        ke = S.loggingMetaData.instanceKey,
        Ie = r("gkx")("24353"),
        Te = r("gkx")("24354") || r("gkx")("24355"),
        De = X ? Ie : Te,
        xe = r("gkx")("4927");
      W.getBool("log_exposure_on_oz_initialization", !1) &&
        o("QE2Logger").logExposureForUser("www_videos_html5_mpeg_dash");
      var $e = {
          audioOnly: B != null ? B : !1,
          bufferEndLimit:
            S.coreVideoPlayerMetaData.bufferEndLimit != null
              ? S.coreVideoPlayerMetaData.bufferEndLimit
              : null,
          bufferingDetector: (i = I.current) != null ? i : void 0,
          config: o(
            "oz-player/configs/OzConfigUtils",
          ).provideConfigWithDefaults(W),
          configureCustomRequestParametersForSegment: function (t) {
            var e = null;
            if (X && Y) {
              var n = t.getByteRange(),
                o = n
                  ? n.startByte +
                    ", " +
                    (n.endByte != null ? n.endByte : "null")
                  : "null",
                a = r("md5")(t.getURI().toString() + o);
              ((e = e != null ? e : {}),
                a != null && (e = babelHelpers.extends({}, e, { _nc_tsid: a })),
                (e = babelHelpers.extends({}, e, { _nc_e2e: "live" })));
            }
            return e;
          },
          customParsers: o("OzCustomParsers").createOzCustomParser(),
          customRepresentationParsers: o(
            "OzCustomRepresentationParsers",
          ).createOzCustomRepresentationParsers({ ozConfig: W }),
          customSegmentTimelineParser: W.getBool("enable_predictive_dash", !1)
            ? new (r("OzPredictedSegmentTimelineParser"))()
            : void 0,
          customVTTBufferTargetStrategies: oe,
          debugCreateInitiator: []
            .concat(m, ["proceedWithOzPlayerCreation"])
            .join(":"),
          drmProviders: ne,
          getCustomRequestParametersForURI: function (t) {
            return o(
              "VideoPlayerOzImplementationEnginePartsImplUtils",
            ).getCustomRequestParametersForURI(t, {
              experimentationConfig: W,
              getCurrentVideoRepresentation: function () {
                var e = T.current;
                return e == null ? void 0 : e.getCurrentVideoRepresentation();
              },
              getOzCDNSignedQueryParams: function () {
                return F.current;
              },
              isClientTriggeredTraceEnabled: Y,
              playbackIsLiveStreaming: X,
              playbackSessionId: ke,
              shouldRefresh403: De,
            });
          },
          getOverrideOzRequestImplementation: function () {
            return k.current;
          },
          getShouldIncludeCredentials: W.getBool(
            "use_oz_credentials_provider",
            !1,
          )
            ? o("VideoPlayerOzImplementationEnginePartsImplUtils")
                .checkShouldIncludeCredentials
            : null,
          getUserSelectedPlaybackRate: function () {
            return E.getCurrentState().controlledState.targetPlaybackRate;
          },
          getVideoDimensions: ae,
          initialPlaybackPositionForDynamicMpd: o(
            "VideoPlayerOzImplementationEnginePartsImplUtils",
          ).calculateInitialPlaybackPositionForDynamicMpd(
            W,
            S.coreVideoPlayerMetaData.desiredLatencyMs,
          ),
          initialRepresentationIDs:
            S.coreVideoPlayerMetaData.initialRepresentationIds,
          initiateLivePlaybackFromStart: R,
          isClientTriggeredTraceEnabled: Y,
          liveheadFallBehindBlockMargin: o(
            "VideoPlayerOzImplementationEnginePartsImplUtils",
          ).calculateLiveheadFallBehindBlockMargin(
            W,
            S.coreVideoPlayerMetaData.desiredLatencyMs,
          ),
          liveheadFallBehindBlockThreshold: o(
            "VideoPlayerOzImplementationEnginePartsImplUtils",
          ).calculateLiveheadFallBehindBlockThreshold(
            W,
            S.coreVideoPlayerMetaData.desiredLatencyMs,
            S.coreVideoPlayerMetaData.latencyToleranceMs,
          ),
          loggerConfig: {
            isOzDevConsoleEnabled: r("gkx")("24356"),
            observedOperationLoggers: [],
            perfLoggerProviders: le,
          },
          mpdUrl: V,
          networkRequestFetchPriority: "high",
          networkRequestStreamHandlers: Le,
          networkRequestStreamRetryHandler: De
            ? function (t, o, a) {
                var i = t.headers,
                  l = i == null ? void 0 : i.get("x-fb-url-refresh"),
                  s = F.current;
                if (t.status === 403 && s != null) {
                  L.logVPLEvent({
                    eventType: "video_cdn_url_expired",
                    logDataOverrides: {
                      error_user_info: JSON.stringify({ expired_url: a }),
                    },
                    state: E.getCurrentState(),
                  });
                  var u =
                    l != null && n("cr:1993377") != null
                      ? {
                          name: "refreshShortExpiryVideoUrl",
                          promise: n("cr:1993377")(l),
                        }
                      : Ee != null
                        ? {
                            name: "expiredVideoUrlRefreshHandler",
                            promise: Ee(a),
                          }
                        : null;
                  if (u != null)
                    return u.promise
                      .then(function (e) {
                        var t,
                          n,
                          a = (t = e.refreshedUrl) != null ? t : null,
                          i = (n = e.reason) != null ? n : null;
                        if (a != null && a !== "")
                          return (
                            L.logVPLEvent({
                              eventType: "video_cdn_url_refreshed",
                              logDataOverrides: {
                                error_user_info: JSON.stringify({
                                  refresh_handler: u.name,
                                  refreshed_url: a,
                                }),
                              },
                              state: E.getCurrentState(),
                            }),
                            s.update(a),
                            o(a)
                          );
                        throw r("FBLogger")("comet_video_player").mustfixThrow(
                          "%s refreshedUrl is %s, reason: %s",
                          u.name,
                          a === "" ? "an empty string" : "null",
                          i != null ? i : "null",
                        );
                      })
                      .catch(function (e) {
                        var t = r("getErrorSafe")(e);
                        throw (
                          L.logVPLEvent({
                            eventType: "video_cdn_url_refresh_error",
                            logDataOverrides: {
                              error_description: t.message,
                              error_user_info: JSON.stringify({
                                expired_url: a,
                                refresh_handler: u.name,
                                refresh_url: l,
                              }),
                            },
                            state: E.getCurrentState(),
                          }),
                          t
                        );
                      });
                }
                return (e || (e = n("Promise"))).resolve(t);
              }
            : null,
          networkRequestUrlRefreshHandler: xe
            ? S.coreVideoPlayerMetaData.expiredVideoUrlRefreshHandler
            : null,
          prefetchCache: W.getBool("use_prefetch_cache", !1) ? z : null,
          rawMpdXml: v.current != null ? void 0 : H,
          seekHandler: null,
          setCustomFetchStreamLoggingAttributes: function (t, n, a) {
            t.setIsOnline(r("NetworkStatus").isOnline());
            var e = a == null ? void 0 : a.headers;
            if (e)
              try {
                (t.setProxyStatusHeader(e.get("proxy-status")),
                  t.setDynamicStatusHeader(e.get("x-fb-dynamic-status")));
              } catch (e) {}
            o(
              "OzOneSemanticHandlerUtils",
            ).setOneSemanticFetchStreamLoggingAttributes(t, n, a);
          },
          shouldBlockStatusCode5xx: !X,
          startTimeStamp: W.getBool("fix_start_timestamp", !1)
            ? S.coreVideoPlayerMetaData.startTimestamp
            : 0,
          userPreferenceLang: S.initialAudioUserPreferredLanguage,
          videoAbrManagerFactory: o(
            "VideoPlayerOzImplementationEnginePartsImplUtils",
          ).getVideoAbrManagerFactory(X),
          videoNode: N,
          videoPlaybackRestrictions: r("getOzPlaybackRestrictions")(G, W),
        },
        Pe = new l($e);
      ((T.current = Pe),
        I.current &&
          I.current.attachPerfLoggerProvider(Pe.getPerfLoggerProvider()));
      var Ne = S.loggingMetaData.playerImplementationInstanceCountRef;
      (Ne.current++,
        Pe.onError(function (e) {
          (Q && Q.flushQueuedLogs(), b(e, "oz_player_error"));
        }),
        r("justknobx")._("3727") ||
          Pe.onWarning(function (e) {
            Q && Q.flushQueuedLogs();
            var t = o(
              "VideoPlayerImplementationErrors",
            ).createVideoPlayerErrorFromOzImplementationError(
              e,
              "oz_player_warning",
            );
            E.dispatch({
              payload: { warningError: t },
              type: "implementation_warning",
            });
          }),
        Pe.addListener("switchVideoRepresentation", function () {
          E.dispatch({ payload: {}, type: "representation_changed" });
        }));
      var Me = function (t) {
        if (W.getBool("enable_error_recovery_attempt_logging", !1)) {
          var e = o(
            "VideoPlayerImplementationErrors",
          ).createVideoPlayerErrorFromOzImplementationError(
            t,
            "oz_player_stream_error_retry",
          );
          E.dispatch({
            payload: { recoverableError: e },
            type: "error_recovery_attempt",
          });
        }
      };
      (Pe.addListener("manifestFetchError", function (e) {
        o("OzOneSemanticHandler").handleManifestFetchErrorEvent(W, e);
      }),
        Pe.addListener("manifestFetchErrorRetry", function (e) {
          Me(e);
        }),
        Pe.addListener("streamError", function (e) {
          return o("OzOneSemanticHandler").handleStreamErrorEvent(W, e);
        }),
        Pe.addListener("streamErrorRetry", function (e) {
          var t;
          (((t = e.getExtra()) == null ? void 0 : t.mimeType) !==
            "application" ||
            W.getBool("enable_era_logging_for_application_stream", !0)) &&
            Me(e);
        }),
        Pe.addListener("streamInterruptAt", function () {
          E.dispatch({ type: "stream_interrupted" });
        }),
        Pe.addListener("streamResumedAt", function () {
          E.dispatch({ type: "stream_resumed" });
        }),
        Pe.addListener("streamGoneBeforeStart", function () {
          (Ue(), E.dispatch({ type: "stream_gone_before_start" }));
        }),
        Pe.addListener("streamEnd", function () {
          (Ue(), E.dispatch({ type: "stream_ended" }));
        }),
        Pe.addListener("videoNodeErrorRetry", function (e) {
          if (W.getBool("enable_error_recovery_attempt_logging", !1)) {
            var t = o(
              "VideoPlayerImplementationErrors",
            ).createVideoPlayerErrorFromOzImplementationVideoNodeError(
              e,
              "oz_player_stream_error_retry",
            );
            E.dispatch({
              payload: { recoverableError: t },
              type: "error_recovery_attempt",
            });
          }
        }),
        Pe.addListener("enterBuffering", function (e) {
          E.dispatch({
            payload: { bufferingType: e },
            type: "buffering_begin_requested",
          });
        }),
        Pe.addListener("leaveBuffering", function (e) {
          E.dispatch({
            payload: { domEventPerfTimestamp: e.domEventPerfTimestamp },
            type: "buffering_end_requested",
          });
        }),
        _ && _.handleOzPlayerChanged(Pe, M));
      var we = function () {
          var e = g(),
            t = {
              inbandCaptionsAutogeneratedFromManifest:
                f.getInbandCaptionsAutogeneratedFromManifest(),
              inbandCaptionsExpectedFromManifest:
                f.getInbandCaptionsExpectedFromManifest(),
              inbandCaptionsExpectedFromProps:
                e == null ? void 0 : e.inbandCaptionsExpectedFromProps,
              representationCaptionsExpectedFromManifest:
                f.getRepresentationCaptionsExpectedFromManifest(),
              sideLoadCaptionsExpectedFromProps:
                e == null ? void 0 : e.sideLoadCaptionsExpectedFromProps,
              sideLoadCaptionsUrlFromProps:
                e == null ? void 0 : e.sideLoadCaptionsUrlFromProps,
            },
            n = E.getCurrentState(),
            r = n.controlledState;
          (t.inbandCaptionsExpectedFromManifest !== r.captionsLoaded ||
            t.inbandCaptionsAutogeneratedFromManifest !==
              r.inbandCaptionsAutogenerated) &&
            C(t);
        },
        Ae = function (t, n) {
          var e = t.getCustomField("timescale"),
            r = typeof e == "number" ? e : 0;
          E.dispatch({
            payload: { timescale: r, videoBytes: n },
            type: "cea608_bytes_received",
          });
        },
        Fe = function () {
          var e = f.getVideoRepresentations();
          if (e != null && e.length > 0) {
            var t = e[0].getTimeRanges();
            if (t != null && t.length > 0) {
              var n = t[0].startTime,
                o = Math.max(
                  t[t.length - 1].endTime -
                    W.getNumber("live_rewind_seek_to_live_delta", 8),
                  n,
                );
              E.dispatch({
                payload: {
                  seekableRanges: new (r("TimeRanges"))([
                    { endTime: o, startTime: n },
                  ]),
                },
                type: "seekable_ranges_changed",
              });
            }
          }
        },
        Oe = function () {
          var e = Pe.getMpd();
          if (e) {
            var t = e.getCustomField("loapStreamType"),
              n = y();
            typeof t == "number" && n != null && n.setStreamType(t);
          }
        },
        Be = function (t) {
          if (t != null) {
            var e = o("ConstUriUtils").getUri(t);
            if (e) {
              var n = e.getQueryParam("lvp");
              return n === "1";
            }
          }
          return !1;
        },
        We = function (t) {
          var e = function () {
            (Fe(), we(), Oe());
          };
          (t.addListener("updated", e), e());
          var n = [],
            a = function (t) {
              L.logVPLEvent({
                eventType: "imf",
                logDataOverrides: t,
                state: E.getCurrentState(),
              });
            },
            i = function (t, n, r) {
              var e = t.parseEmsgBoxesFromMP4Segment,
                o = e(r, j, n.getID(), N.currentTime, a);
              o.length > 0 &&
                E.dispatch({
                  payload: { emsgBoxes: o },
                  type: "emsg_boxes_parsed",
                });
            },
            l = function (t) {
              for (var e = n.shift(); e; )
                (i.apply(void 0, [t].concat(e)), (e = n.shift()));
            };
          if (
            (Pe.updatePlayerRunTimeConfig({
              audioStreamDataHandler: function () {
                var e = E.getCurrentState();
                if (e.controlledState.emsgObserverTokens.size > 0) {
                  for (
                    var t = s.getModuleIfRequireable(),
                      o = arguments.length,
                      a = new Array(o),
                      u = 0;
                    u < o;
                    u++
                  )
                    a[u] = arguments[u];
                  t != null
                    ? (l(t), i.apply(void 0, [t].concat(a)))
                    : (n.push(a),
                      s
                        .load()
                        .then(function (e) {
                          l(e);
                        })
                        .catch(function (e) {
                          (r("FBLogger")("comet_video_player")
                            .catching(r("getErrorSafe")(e))
                            .warn("Failed to load VideoPlayerEmsg"),
                            (n.length = 0));
                        }));
                }
              },
              videoStreamDataHandler: Ae,
            }),
            f.isPredictiveDash())
          ) {
            W.setContext("streaming_implementation", "pdash");
            var u = h();
            u && u.maybeUpdateLatencyLevel();
          }
          var c = "mos",
            d = W.getBool("is_csvqm_enabled", !1);
          if (d && !X) {
            var m = f.getVideoRepresentations(),
              p =
                m == null
                  ? void 0
                  : m.every(function (e) {
                      return e.getQualityScoreCurveString("csvqm") != null;
                    });
            p === !0 && (c = "csvqm");
          }
          (W.setContext("quality_score_type", c),
            o("VideoPlayerODS").bumpEntityKey(
              "comet_video_player",
              c === "csvqm"
                ? "OzImplementation.quality_score_type_csvqm"
                : "OzImplementation.quality_score_type_mos",
              14,
            ));
          {
            var _ = g();
            C({
              inbandCaptionsAutogeneratedFromManifest:
                f.getInbandCaptionsAutogeneratedFromManifest(),
              inbandCaptionsExpectedFromManifest:
                f.getInbandCaptionsExpectedFromManifest(),
              inbandCaptionsExpectedFromProps:
                _ == null ? void 0 : _.inbandCaptionsExpectedFromProps,
              representationCaptionsExpectedFromManifest:
                f.getRepresentationCaptionsExpectedFromManifest(),
              sideLoadCaptionsExpectedFromProps:
                _ == null ? void 0 : _.sideLoadCaptionsExpectedFromProps,
              sideLoadCaptionsUrlFromProps:
                _ == null ? void 0 : _.sideLoadCaptionsUrlFromProps,
            });
          }
        };
      (Pe.addListener("vttCaptionsUpdated", function (e, t) {
        var n = "webvtt",
          r = E.getCurrentState().controlledState.captionFormat;
        (n !== r &&
          E.dispatch({
            payload: { captionFormat: n },
            type: "controller_set_caption_format_requested",
          }),
          E.dispatch({
            payload: { activeCaptions: e, captionsLocale: t },
            type: "controller_set_active_captions_requested",
          }));
      }),
        Pe.addListener("mpdParsed", function (e) {
          f.isPredictiveDash() &&
            W.setContext("streaming_implementation", "pdash");
        }),
        Pe.addListener("mpdReady", function (e) {
          ((w.current = !0),
            We(e),
            E.dispatch({
              payload: {
                selectedVideoQuality: f.getUserSelectedVideoQuality(),
              },
              type: "implementation_engine_initialized",
            }));
        }),
        Pe.addListener("representationBlocked", function (e) {
          E.dispatch({
            payload: { blockedRepresentationID: e },
            type: "implementation_engine_representation_blocked",
          });
        }));
      var qe = null;
      function Ue() {
        r("clearTimeout")(qe);
        var e = v.current,
          t = D.current;
        if (e != null) {
          ((v.current = null), (D.current = null), (k.current = null));
          try {
            (e != null && e.closeHiveSession(), t && t.logEndSession());
          } catch (e) {
            var n = r("getErrorSafe")(e);
            t && t.logError(n);
          }
        }
      }
      var Ve = v.current,
        He = U == null ? void 0 : U.ticket;
      if (V != null && U && Ve != null && He != null) {
        var Ge = Pe.getPerfLoggerProvider();
        Ge && Ge.setIsP2pPlayback(!0);
        var ze = V.substring(V.indexOf("?")),
          je = Ve.initSession(He + ze, Pe, N),
          Ke = new (r("Deferred"))();
        ((qe = r("setTimeout")(function () {
          Ke.reject(
            new Error("Hive initialization timed out after " + u + "ms"),
          );
        }, u)),
          je
            .then(function (e) {
              Ke.resolve(e);
            })
            .catch(function (e) {
              Ke.reject(e);
            }),
          Ke.getPromise()
            .then(function (e) {
              r("clearTimeout")(qe);
              var t = e.manifest,
                n = e.tech,
                o = D.current;
              (t !== V && o && o.logManifestMismatch(t, V),
                o && o.logSessionInit(n, t),
                L.setLoggingToVPLAdditionalData("is_p2p_playback", !0),
                L.setLoggingToVPLAdditionalData("is_live_preview", Be(t)),
                Pe.load(t));
            })
            .catch(function (e) {
              r("clearTimeout")(qe);
              var t = D.current;
              (t && t.logError(e),
                Ue(),
                L.setLoggingToVPLAdditionalData("is_live_preview", Be(V)),
                Pe.load(V));
            }));
      } else
        (L.setLoggingToVPLAdditionalData("is_p2p_playback", !1),
          L.setLoggingToVPLAdditionalData("is_live_preview", Be(V)),
          Pe.load(V));
    }
    l.proceedWithOzPlayerCreation = m;
  },
  98,
);
