__d(
  "VideoPlayerOzImplementationEngine",
  [
    "CometDASHPrefetchCacheManager",
    "ErrorMetadata",
    "VideoPlayerImplementationEngineAPI",
    "VideoPlayerImplementationEngineVideoElementAPI",
    "VideoPlayerImplementationErrors",
    "VideoPlayerImplementationLoadSequenceManager",
    "VideoPlayerODS",
    "VideoPlayerOzImplementationEngineExtrasAPI",
    "VideoPlayerOzImplementationEnginePartsImplFunction",
    "VideoPlayerOzImplementationEnginePartsImplUtils",
    "VideoPlayerOzImplementationLatencyLevelManager",
    "VideoPlayerOzPlayerModuleLoaderDeferredForDisplay",
    "cr:1157",
    "err",
    "gkx",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = !1;
    function s(e) {
      var t = e.initialProps,
        a = { current: null },
        i = { current: null },
        l = { current: null },
        s = { current: null },
        u = { current: null },
        c = { current: null },
        d = { current: null },
        m = { current: null },
        p = { current: null },
        _ = { current: null },
        f = { current: null },
        g = { current: null },
        h = { current: null },
        y = { current: null };
      function C() {
        var e;
        return (e = d.current) != null ? e : null;
      }
      function b() {
        var e;
        return (e = c.current) != null ? e : null;
      }
      function v() {
        var e, t;
        return (e =
          (t = i.current) == null ? void 0 : t.experimentationConfig) != null
          ? e
          : null;
      }
      function S() {
        var e;
        return (e = X.current) != null ? e : null;
      }
      function R() {
        var e;
        return (e = h.current) != null ? e : null;
      }
      var L;
      n("cr:1157") && (L = new (n("cr:1157"))());
      var E = "comet_oz",
        k = t.loggingMetaData.instanceKey,
        I = t.initiateLivePlaybackFromStart,
        T = function (t, n) {
          return n.manifestXmlStringInitial !== null
            ? t.manifestXmlStringInitial !== n.manifestXmlStringInitial
            : t.manifestUrl !== n.manifestUrl;
        },
        D = function (t, n) {
          return t.videoFBID !== n.videoFBID;
        },
        x = function (t) {
          return t.getBool("use_full_player_if_cached", !1) &&
            r("VideoPlayerOzPlayerModuleLoaderDeferredForDisplay")
            ? r(
                "VideoPlayerOzPlayerModuleLoaderDeferredForDisplay",
              )().getModuleIfRequireable()
            : null;
        },
        $ = function (t, n, r) {
          (n != null
            ? (i.current = babelHelpers.extends({}, t, {
                manifestXmlStringResolved: n,
              }))
            : (i.current = t),
            Q.dispatch({
              type: "implementation_engine_oz_manifest_downloading",
            }),
            (u.current = x(t.experimentationConfig)),
            M(u.current, [].concat(r, ["proceedWithOzManifestDownloading"])));
        },
        P = function (t) {
          var e,
            n,
            i,
            l = t.manifestUrl,
            s = t.manifest,
            u = null;
          r("CometDASHPrefetchCacheManager") &&
            t.coreVideoPlayerMetaData.videoFBID != null &&
            (u = r("CometDASHPrefetchCacheManager").get(
              t.coreVideoPlayerMetaData.videoFBID,
            ));
          var c = {
              VideoPlayerShakaPerformanceLoggerClass:
                t.coreVideoPlayerMetaData
                  .VideoPlayerShakaPerformanceLoggerClass,
              accessToken: t.loggingMetaData.accessToken,
              audioOnly: t.coreVideoPlayerMetaData.audioOnly,
              experimentationConfig: t.experimentationConfig,
              graphQLVideoDRMInfo:
                t.coreVideoPlayerMetaData.graphQLVideoDRMInfo,
              graphQLVideoP2PSettings:
                t.coreVideoPlayerMetaData.graphQLVideoP2PSettings,
              initialAudioUserPreferredLanguage:
                t.initialAudioUserPreferredLanguage,
              manifestUrl: l != null ? l : null,
              manifestXmlStringInitial: s != null ? s : null,
              minQualityPreference: t.minQualityPreference,
              ozPrefetchCache: u,
              videoFBID: t.coreVideoPlayerMetaData.videoFBID,
              videoPlayerShakaPerformanceLoggerBuilder:
                t.coreVideoPlayerMetaData
                  .videoPlayerShakaPerformanceLoggerBuilder,
            },
            d = a.current,
            m =
              (e = h.current) != null
                ? e
                : new (r("VideoPlayerOzImplementationLatencyLevelManager"))(
                    t.experimentationConfig,
                    Q,
                    B,
                  );
          ((h.current = m),
            (y.current =
              (n = t.coreVideoPlayerMetaData.playerFormat) != null ? n : null),
            m.updatePlayerFormat(
              (i = t.coreVideoPlayerMetaData.playerFormat) != null ? i : null,
            ),
            m.updateBroadcastLatencySensitivity(
              t.coreVideoPlayerMetaData.broadcastLatencySensitivity,
            ));
          var p = !1;
          if (d == null) p = !0;
          else if (d != null && !D(c, d) && T(c, d)) {
            var _ = 14;
            (o("VideoPlayerODS").bumpEntityKey(
              "OzImplementation",
              "manifest_reloaded",
              _,
            ),
              (p = !1));
          } else if (d != null && D(c, d)) {
            var f,
              g = r("err")(
                "videoFBID changed after player initialization: %s",
                JSON.stringify({
                  subOrigin: t.coreVideoPlayerMetaData.subOrigin,
                  toVideoFBID: c.videoFBID,
                }),
              );
            g.name = "VideoPlayerOzImplementationVideoFBIDChanged";
            var C = (f = g.metadata) != null ? f : new (r("ErrorMetadata"))();
            throw (
              d.videoFBID != null &&
                C.addEntry("COMET_VIDEO", "VIDEO_ID", d.videoFBID),
              (g.metadata = C),
              (g.project = "comet_video_player"),
              g
            );
          }
          if (!p) return !1;
          if (
            ((l = c.manifestUrl),
            (s = c.manifestXmlStringInitial),
            s == null && l == null)
          ) {
            var b,
              v = r("err")(
                "Empty manifestXmlStringInitial and manifestUrl: %s",
                JSON.stringify({
                  manifestUrl: l,
                  manifestXmlStringInitial: s,
                  subOrigin: t.coreVideoPlayerMetaData.subOrigin,
                }),
              );
            v.name = "VideoPlayerOzImplementationManifestEmpty";
            var S = (b = v.metadata) != null ? b : new (r("ErrorMetadata"))();
            throw (
              c.videoFBID != null &&
                S.addEntry("COMET_VIDEO", "VIDEO_ID", c.videoFBID),
              (v.metadata = S),
              (v.project = "comet_video_player"),
              v
            );
          }
          return (
            (a.current = c),
            $(c, s, [
              "handleVideoInfoChangeForOzImplementation",
              "downloadManifestInOz",
            ]),
            !0
          );
        },
        N = function (t, n) {
          var e = function (r) {
              s.current === t &&
                ((u.current = r),
                M(r, [].concat(n, ["handleOzPlayerModuleLoadSuccess"])));
            },
            o = function (n) {
              s.current === t && j(n, "oz_player_module_load_failed");
            };
          ((s.current = t), r("promiseDone")(t, e, o));
        },
        M = function (t, n) {
          var e = H(),
            a = i.current;
          if (!(e == null || a == null)) {
            var l = r("gkx")("18183")
                ? o("VideoPlayerImplementationEngineAPI").ensureVideoElementAPI(
                    X,
                  )
                : (X.current = o(
                    "VideoPlayerImplementationEngineVideoElementAPI",
                  ).createVideoPlayerImplementationEngineVideoElementAPI(e)),
              s = a.experimentationConfig;
            t
              ? w(
                  t,
                  e,
                  l,
                  a,
                  [].concat(n, [
                    "proceedWithResolvedVideoInfo",
                    "OzPlayerModuleFromRef",
                  ]),
                )
              : (s.getBool(
                  "instantiate_buffering_detector_before_quick_starter",
                  !1,
                ) &&
                  o(
                    "VideoPlayerOzImplementationEnginePartsImplUtils",
                  ).createOzBufferingDetector(
                    e,
                    l,
                    a.experimentationConfig,
                    Q,
                    d,
                    K,
                  ),
                N(
                  r(
                    "VideoPlayerOzPlayerModuleLoaderDeferredForDisplay",
                  )().load(),
                  [].concat(n, [
                    "proceedWithResolvedVideoInfo",
                    "VideoPlayerOzPlayerModuleLoaderAsync",
                  ]),
                ));
          }
        },
        w = function (n, a, i, s, u) {
          try {
            var e = {
                OzPlayerClass: n,
                callChain: [].concat(u, [
                  "proceedWithResolvedVideoInfoAndOzPlayerModuleSync",
                ]),
                destroyOzPlayerPartsRef: g,
                engineDebugAPI: L,
                engineExtrasAPI: B,
                getCaptionsInfo: V,
                getLatencyLevelManager: R,
                getVideoLiveTrace: G,
                handleCaptionsInfoChange: z,
                handleFatalImplementationError: j,
                initialProps: t,
                loggerToVPL: K,
                machine: Q,
                ozBufferingDetectorRef: d,
                playerFormatForDPLRef: y,
                playerVersion: E,
                resolvedVideoInfo: s,
                videoElement: a,
              },
              h = v(),
              C = t.coreVideoPlayerMetaData.loadSequence;
            (h && h.getNumber("load_sequence_max_delay_ms", 0) > 0 && C != null
              ? (f.current = r(
                  "VideoPlayerImplementationLoadSequenceManager",
                ).schedule(h, C, function () {
                  return (
                    o(
                      "VideoPlayerOzImplementationEnginePartsImplFunction",
                    ).proceedWithOzPlayerCreation(
                      babelHelpers.extends({}, e, {
                        hivePluginRef: m,
                        initiateLivePlaybackFromStart: I,
                        overrideOzRequestImplementationRef: _,
                        ozPlayerRef: c,
                        p2pSessionLoggerRef: p,
                        videoElementAPI: i,
                      }),
                    ),
                    i.getCanPlayPromise()
                  );
                }))
              : o(
                  "VideoPlayerOzImplementationEnginePartsImplFunction",
                ).proceedWithOzPlayerCreation(
                  babelHelpers.extends({}, e, {
                    hivePluginRef: m,
                    initiateLivePlaybackFromStart: I,
                    overrideOzRequestImplementationRef: _,
                    ozPlayerRef: c,
                    p2pSessionLoggerRef: p,
                    videoElementAPI: i,
                  }),
                ),
              (l.current = s));
          } catch (e) {
            j(e, "oz_player_create_exception");
          }
        };
      function A(e) {
        var t = g.current;
        (t != null && ((g.current = null), t(e)),
          f.current != null && (f.current(), (f.current = null)));
      }
      function F() {}
      function O() {
        ((s.current = null), (u.current = null));
      }
      var B = o(
          "VideoPlayerOzImplementationEngineExtrasAPI",
        ).createVideoPlayerOzImplementationEngineExtrasAPI({
          getConfig: v,
          getOzPlayer: b,
          getVideoElementAPI: S,
        }),
        W = o(
          "VideoPlayerImplementationEngineAPI",
        ).createVideoPlayerImplementationEngine({
          createDebugAPI: function (t) {
            var e = t.getVideoElementAPI,
              n = t.loggerToVPL;
            return L
              ? L.createDebugAPI({
                  engineExtrasAPI: B,
                  getConfig: function () {
                    var e, t;
                    return (e =
                      (t = l.current) == null
                        ? void 0
                        : t.experimentationConfig) != null
                      ? e
                      : null;
                  },
                  getManifest: function () {
                    var e, t;
                    return (e =
                      (t = l.current) == null
                        ? void 0
                        : t.manifestXmlStringResolved) != null
                      ? e
                      : null;
                  },
                  getManifestUrl: function () {
                    var e, t;
                    return (e =
                      (t = l.current) == null ? void 0 : t.manifestUrl) != null
                      ? e
                      : null;
                  },
                  getOzBufferingDetector: C,
                  getOzPlayer: b,
                  getVideoElementAPI: e,
                  loggerToVPL: n,
                })
              : null;
          },
          createVideoPlayerError: o("VideoPlayerImplementationErrors")
            .createVideoPlayerErrorFromOzImplementationError,
          destroyEngineParts: function (t) {
            (A([].concat(t, ["destroyEngineParts"])), O());
          },
          engineCreateArgs: e,
          engineExtrasAPI: B,
          engineMetadata: {
            isAbrEnabled: !0,
            playerInstanceKey: k,
            playerVersion: E,
            streamingFormat: "dash",
          },
          handleVideoElementChanged: function (t, n) {
            t != null &&
              M(u.current, [].concat(n, ["handleVideoElementMounted"]));
          },
          handleVideoInfoChange: P,
        }),
        q = W.debugLog,
        U = W.engine,
        V = W.getCaptionsInfo,
        H = W.getVideoElement,
        G = W.getVideoLiveTrace,
        z = W.handleCaptionsInfoChange,
        j = W.handleFatalImplementationError,
        K = W.loggerToVPL,
        Q = W.machine,
        X = W.videoElementAPIRef;
      return U;
    }
    l.createVideoPlayerOzImplementationEngine = s;
  },
  98,
);
