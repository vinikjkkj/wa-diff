__d(
  "VideoPlayerImplementationEngineAPI",
  [
    "CurrentUser",
    "FBLogger",
    "MediaPlaybackCompoundEventStateMachineLogger",
    "RunComet",
    "VideoPlayerBanzaiLogFlusher",
    "VideoPlayerCaptionsController",
    "VideoPlayerImplementationControllerImpl",
    "VideoPlayerImplementationEngineStateMachineWithEffects",
    "VideoPlayerImplementationEngineVideoElementAPI",
    "VideoPlayerImplementationStateMachine",
    "VideoPlayerImplementationStateMachineLogger",
    "VideoPlayerUsageLogging",
    "clearTimeout",
    "cr:506",
    "cr:543",
    "deepEquals",
    "getErrorSafe",
    "gkx",
    "performanceNow",
    "setTimeout",
    "useConcurrentAutoplayManagementAPI",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      var t = e.concurrentAutoplayManagementAPI,
        n = e.createExposedState,
        r = e.debugAPI,
        a = e.fullscreenControllerRef,
        i = e.loggerToSNAPL,
        l = e.loggerToVPL,
        s = e.machine,
        u = e.subscribers,
        c = e.videoElementAPIRef,
        d = e.videoPlayerPassiveViewabilityInfo,
        m = {
          logVPLEvent_DO_NOT_USE: function (t, n) {
            l.logVPLEvent({
              eventType: t,
              logDataOverrides: n,
              state: s.getCurrentState(),
            });
          },
          setLoggingToSNAPLAdditionalData: function (t) {
            i == null || i.setLoggingToSNAPLAdditionalData(t);
          },
          setLoggingToVPLAdditionalData: function (t, n) {
            l.setLoggingToVPLAdditionalData(t, n);
          },
        };
      return o(
        "VideoPlayerImplementationControllerImpl",
      ).createVideoPlayerImplementationControllerImpl({
        concurrentAutoplayManagementAPI: t,
        debugAPI: r,
        exitPictureInPictureImpl: function () {
          s.dispatch({ type: "controller_picture_in_picture_exit_requested" });
        },
        fullscreenControllerRef: a,
        getCurrentExposedState: function () {
          return n(s.getCurrentState());
        },
        getCurrentIsDesktopPictureInPicture: function () {
          var e;
          return (e =
            s.getCurrentState().controlledState.isDesktopPictureInPicture) !=
            null
            ? e
            : !1;
        },
        getCurrentIsFullscreen: function () {
          var e = a.current;
          return e ? e.getIsFullscreen() : !1;
        },
        getCurrentLiveRewindPlayheadPosition: function () {
          var e,
            t = s.getCurrentState(),
            n = t.controlledState,
            r = n.isLiveRewindActive,
            o = n.seekableRanges,
            a = n.seekTargetPosition;
          if (!r || a == null) return null;
          var i = (e = o == null ? void 0 : o.end(0)) != null ? e : 0;
          return a - i;
        },
        getCurrentPlayheadPosition: function () {
          var e,
            t,
            n,
            r = 0;
          return (e =
            (t = (n = c.current) == null ? void 0 : n.getPlayheadPosition()) !=
            null
              ? t
              : s.getCurrentState().uncontrolledState
                  .videoElementPlayheadPosition) != null
            ? e
            : r;
        },
        internal_getCurrentStateMachineState: function () {
          return s.getCurrentState();
        },
        internal_injectFatalError: function (t) {
          s.dispatch({
            payload: { fatalError: t },
            type: "controller_inject_fatal_error",
          });
        },
        loggerAPI: m,
        pauseImpl: function (t) {
          s.dispatch({
            payload: { reason: t },
            type: "controller_pause_requested",
          });
        },
        playImpl: function (t) {
          s.dispatch({
            payload: { reason: t },
            type: "controller_play_requested",
          });
        },
        registerEmsgObserverImpl: function (t) {
          s.dispatch({ payload: { token: t }, type: "register_emsg_observer" });
        },
        requestPictureInPictureImpl: function () {
          s.dispatch({ type: "controller_picture_in_picture_requested" });
        },
        scrubBeginImpl: function () {
          s.dispatch({ type: "controller_scrub_begin_requested" });
        },
        scrubEndImpl: function (t) {
          s.dispatch({
            payload: { seekTargetPosition: t },
            type: "controller_scrub_end_requested",
          });
        },
        seekImpl: function (t) {
          s.dispatch({
            payload: { seekTargetPosition: t },
            type: "controller_seek_requested",
          });
        },
        selectVideoQualityImpl: function (t) {
          s.dispatch({
            payload: { selectedVideoQuality: t },
            type: "controller_quality_requested",
          });
        },
        selectVideoVariantImpl: function (t) {
          s.dispatch({
            payload: { selectedVideoVariant: t },
            type: "controller_video_variant_requested",
          });
        },
        setCaptionsDisplayStyleImpl: function (t) {
          s.dispatch({
            payload: { captionDisplayStyle: t },
            type: "controller_set_caption_display_style_requested",
          });
        },
        setCaptionsUrlImpl: function (t) {
          s.dispatch({
            payload: { captionsUrl: t },
            type: "controller_set_captions_url_requested",
          });
        },
        setCaptionsVisibleImpl: function (t) {
          s.dispatch({
            payload: { captionsVisible: t },
            type: "controller_set_captions_visible_requested",
          });
        },
        setIsLiveRewindActiveImpl: function (t) {
          s.dispatch({
            payload: { isLiveRewindActive: t },
            type: "controller_set_is_live_rewind_active_requested",
          });
        },
        setLatencyLevelImpl: function (t) {
          s.dispatch({
            payload: { latencyLevel: t },
            type: "controller_set_latency_level_requested",
          });
        },
        setMutedImpl: function (t, n) {
          s.dispatch({
            payload: { muted: t, reason: n },
            type: "controller_muted_requested",
          });
        },
        setPictureInPictureStateImpl: function (t) {
          s.dispatch({
            payload: { isInPictureInPictureMode: t },
            type: "controller_set_picture_in_picture_state_requested",
          });
        },
        setPlaybackRateImpl: function (t) {
          s.dispatch({
            payload: { playbackRate: t },
            type: "controller_set_playback_rate",
          });
        },
        setVolumeImpl: function (t) {
          s.dispatch({
            payload: { volume: t },
            type: "controller_volume_requested",
          });
        },
        subscribers: u,
        unregisterEmsgObserverImpl: function (t) {
          s.dispatch({
            payload: { token: t },
            type: "unregister_emsg_observer",
          });
        },
        videoElementAPIRef: c,
        videoPlayerPassiveViewabilityInfo: d,
      });
    }
    function u(e) {
      var t = e.current;
      if (t == null)
        throw r("FBLogger")("comet_video_player").mustfixThrow(
          "Attempted to access VideoElementAPI while it is not available.",
        );
      return t;
    }
    function c(e, t, n, r) {
      (e !== t.current &&
        (n.current && (n.current.remove(), (n.current = null)),
        (t.current = e)),
        t.current &&
          !n.current &&
          (n.current = t.current.subscribe(function () {
            r.dispatch({ type: "notify_fullscreen_changed" });
          })));
    }
    function d(e, t, n) {
      (t.current && (t.current.remove(), (t.current = null)),
        e != null &&
          (t.current = e.subscribe(function () {
            n.dispatch({ type: "notify_viewability_changed" });
          })));
    }
    function m(e) {
      var t = e.coreVideoPlayerMetaData,
        n = e.engineMetadata,
        r = e.state,
        o = r.controlledState,
        a = o.activeCaptions,
        i = o.activeEmsgBoxes,
        l = o.bufferedRanges,
        s = o.captionDisplayStyle,
        u = o.captionsLoaded,
        c = o.captionsVisible,
        d = o.dimensions,
        m = o.domEventsLatestPerfMs,
        p = o.error,
        _ = o.hasPlayEverBeenRequested,
        f = o.implementationSeekSourcePosition,
        g = o.inbandCaptionsAutogenerated,
        h = o.isDesktopPictureInPicture,
        y = o.isLiveRewindActive,
        C = o.lastMuteReason,
        b = o.lastPauseReason,
        v = o.lastPlayedTimeMs,
        S = o.lastPlayReason,
        R = o.latencyLevel,
        L = o.loopCount,
        E = o.loopCurrent,
        k = o.muted,
        I = o.playbackState,
        T = o.scrubbing,
        D = o.seekableRanges,
        x = o.seeking,
        $ = o.seekTargetPosition,
        P = o.selectedVideoQuality,
        N = o.streamingFormat,
        M = o.streamInterrupted,
        w = o.targetPlaybackRate,
        A = o.ullIneligibilityReason,
        F = o.volume,
        O = o.watchTimeMs,
        B = r.uncontrolledState,
        W = B.availableAudioTracks,
        q = B.availableQualities,
        U = B.availableVideoTracks,
        V = B.currentPlayingAudioTrackID,
        H = B.currentPlayingVideoQuality,
        G = B.currentPlayingVideoTrackID,
        z = B.isDRM,
        j = B.isFullscreen,
        K = B.isLiveRewindAvailable,
        Q = B.targetAudioTrack,
        X = B.targetVideoQuality,
        Y = B.videoElementDuration,
        J = B.videoElementLastBufferEndPosition,
        Z = B.videoProjection,
        ee = B.videoRepresentationID,
        te = I === "ended",
        ne = I === "paused" || te,
        re = I === "playing",
        oe = !1,
        ae = I === "stalling",
        ie = {
          activeCaptions: a,
          activeEmsgBoxes: i,
          availableAudioTracks: W,
          availableVideoQualities: q,
          availableVideoTracks: U,
          bufferedRanges: l,
          bufferEnd: J != null ? J : 0,
          captionDisplayStyle: s,
          captionsLoaded: u,
          captionsVisible: c,
          currentAudioTrackID: V != null ? V : null,
          currentVideoQuality: H != null ? H : "",
          currentVideoTrackID: G != null ? G : null,
          domEventsLatestPerfMs: m,
          duration: Y != null ? Y : 0,
          ended: te,
          error: p,
          hasPlayEverBeenRequested: _,
          inbandCaptionsAutogenerated: g,
          inPlayStalling: oe,
          internal_coreVideoPlayerMetaData: t,
          isAbrEnabled: n.isAbrEnabled,
          isDesktopPictureInPicture: h != null ? h : !1,
          isDRM: z != null ? z : null,
          isFullscreen: j != null ? j : !1,
          isLiveRewindActive: y,
          isLiveRewindAvailable: K != null ? K : !1,
          lastMuteReason: C,
          lastPauseReason: b,
          lastPlayedTimeMs: v,
          lastPlayReason: S,
          latencyLevel: R,
          loopCount: L,
          loopCurrent: E,
          muted: k,
          paused: ne,
          playerInstanceKey: n.playerInstanceKey,
          playerVersion: r.playerVersion,
          playerViewportDimensions: d,
          playing: re,
          scrubbing: T,
          seekableRanges: D,
          seeking: x,
          seekSourcePosition: f,
          seekTargetPosition: $,
          selectedVideoQuality: P,
          stalling: ae,
          streamingFormat: N,
          streamInterrupted: M,
          targetAudioTrack: Q,
          targetPlaybackRate: w,
          targetVideoQuality: X,
          ullIneligibilityReason: A,
          videoFBID: t.videoFBID,
          videoPixelsAspectRatio: t.videoPixelsAspectRatio,
          videoProjection: Z,
          videoRepresentationID: ee,
          volume: F,
          watchTimeMs: O,
        };
      return ie;
    }
    var p = function () {},
      _ = !1;
    r("gkx")("13250") &&
      ((_ = !0),
      (p = function (t, n) {
        var e = t.debugLogId,
          r = t.engineMetadata;
        try {
          for (
            var o,
              a = arguments.length,
              i = new Array(a > 2 ? a - 2 : 0),
              l = 2;
            l < a;
            l++
          )
            i[l - 2] = arguments[l];
          (o = window.console).info.apply(
            o,
            [
              "[" + e + "][VideoPlayerEngine:" + r.playerVersion + "]" + n,
            ].concat(i),
          );
        } catch (e) {}
      }));
    function f(e) {
      var t = e.debugLogId,
        n = e.initialProps,
        a = e.loggingConfig,
        i = e.videoLiveTraceRef,
        l = a.loggingToVPLEnabled == null ? !0 : a.loggingToVPLEnabled,
        s = o(
          "VideoPlayerImplementationStateMachineLogger",
        ).createVideoPlayerImplementationStateMachineLogger({
          debugLogId: t,
          initialCoreVideoPlayerMetaData: n.coreVideoPlayerMetaData,
          initialLoggingMetaData: n.loggingMetaData,
          videoLiveTraceRef: i,
        }),
        u = new (r("VideoPlayerBanzaiLogFlusher"))(t, s),
        c =
          a.loggingToSNAPLEnabled == null
            ? r("gkx")("8610")
            : a.loggingToSNAPLEnabled,
        d = a.loggingToSNAPLCreateMetadataProvider,
        m = c
          ? o(
              "MediaPlaybackCompoundEventStateMachineLogger",
            ).createMediaPlaybackCompoundEventStateMachineLogger({
              debugLogId: t,
              initialCoreVideoPlayerMetaData: n.coreVideoPlayerMetaData,
              initialLoggingMetaData: n.loggingMetaData,
              metadataProvider: d == null ? void 0 : d(),
            })
          : null,
        p = a.loggingToSNAPLCreateLogFlusher,
        _ = m != null && p != null ? p(t, m) : null;
      return (
        m != null &&
          _ == null &&
          r("FBLogger")("comet_video_player").warn(
            "SNAPL enabled without flusher. playerSuborigin=%s",
            n.coreVideoPlayerMetaData.subOrigin,
          ),
        {
          logFlusherToSNAPL: _,
          logFlusherToVPL: u,
          loggerToSNAPL: m,
          loggerToVPL: s,
          loggingToSNAPLEnabled: c,
          loggingToVPLEnabled: l,
        }
      );
    }
    function g(e) {
      return (
        e.sideLoadCaptionsExpectedFromProps ||
        e.sideLoadCaptionsUrlFromProps != null
      );
    }
    function h(e) {
      var t;
      return (
        e.inbandCaptionsExpectedFromProps &&
        ((t = e.inbandCaptionsExpectedFromManifest) != null ? t : !1)
      );
    }
    function y(e) {
      var t;
      return (t = e.inbandCaptionsAutogeneratedFromManifest) != null ? t : !1;
    }
    function C(e) {
      var t = e.logFlusherToSNAPL,
        n = e.logFlusherToVPL,
        r = e.loggingConfig,
        o = e.loggingToSNAPLEnabled,
        a = e.loggingToVPLEnabled;
      (!a || r.disableLogging === !0
        ? n.discardLogsWithoutFlushing()
        : n.flushLogs(),
        !o || r.disableLogging === !0
          ? t == null || t.discardLogsWithoutFlushing()
          : t == null || t.flushLogs());
    }
    function b(e, t, n) {
      if (r("gkx")("11945")) {
        var o = function () {
            t.dispatch({
              payload: { isInPictureInPictureMode: !0 },
              type: "controller_set_picture_in_picture_state_requested",
            });
          },
          a = function () {
            t.dispatch({
              payload: { isInPictureInPictureMode: !1 },
              type: "controller_set_picture_in_picture_state_requested",
            });
          };
        (e.addEventListener("enterpictureinpicture", o),
          e.addEventListener("leavepictureinpicture", a),
          n.push(
            {
              remove: function () {
                return e.removeEventListener("enterpictureinpicture", o);
              },
            },
            {
              remove: function () {
                return e.removeEventListener("leavepictureinpicture", a);
              },
            },
          ));
      }
    }
    function v(e, t) {
      r("gkx")("18183") &&
        (e
          ? (t.current == null ||
              e !== t.current.getUnderlyingVideoElement()) &&
            (t.current = o(
              "VideoPlayerImplementationEngineVideoElementAPI",
            ).createVideoPlayerImplementationEngineVideoElementAPI(e))
          : (t.current = null));
    }
    function S(e, t) {
      return r("gkx")("24349")
        ? e.controlledState.mountState === "mounted_onscreen" ||
            e.controlledState.mountState === "mounted_offscreen"
        : t === "mounted";
    }
    function R(t) {
      var a,
        i,
        l = t.createDebugAPI,
        u = t.createVideoPlayerError,
        R = t.destroyEngineParts,
        L = t.engineCreateArgs,
        E = t.engineExtrasAPI,
        k = t.engineMetadata,
        I = t.handleVideoElementChanged,
        T = t.handleVideoInfoChange,
        D = L.checkInDOM,
        x = L.handleFatalError,
        $ = L.initialProps,
        P = L.setExposedStateInReact,
        N = $.loggingMetaData.instanceKey,
        M = "#" + ((e || (e = r("performanceNow")))() * 1e3).toFixed(0),
        w = N + ";vid=" + $.coreVideoPlayerMetaData.videoFBID + ";" + M;
      (o("VideoPlayerUsageLogging").countEngineInstantiated(k.playerVersion),
        o("VideoPlayerUsageLogging").logEngineInstantiatedDetailed(
          k.playerVersion,
          $.coreVideoPlayerMetaData.subOrigin,
          $.coreVideoPlayerMetaData.videoFBID,
          N,
        ));
      var A = function () {};
      if (_) {
        var F = { debugLogId: w, engineMetadata: k };
        ((A = function (t) {
          for (
            var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r];
          return p.apply(void 0, [F, t].concat(n));
        }),
          A("[creating]", $));
      }
      var O = $.coreVideoPlayerMetaData,
        B = O.broadcastId,
        W = O.isLiveStreaming,
        q = O.isLiveTraceEnabled,
        U = {
          current:
            W && q && B != null && n("cr:543") != null
              ? new (n("cr:543"))(B, N, r("CurrentUser").getAccountID())
              : null,
        },
        V = $.coreVideoPlayerMetaData.loggingConfig,
        H = f({
          debugLogId: w,
          initialProps: $,
          loggingConfig: V,
          videoLiveTraceRef: U,
        }),
        G = H.logFlusherToSNAPL,
        z = H.logFlusherToVPL,
        j = H.loggerToSNAPL,
        K = H.loggerToVPL,
        Q = H.loggingToSNAPLEnabled,
        X = H.loggingToVPLEnabled,
        Y = { current: $.coreVideoPlayerMetaData },
        J = { current: (a = $.fullscreenController) != null ? a : null },
        Z = { current: null },
        ee = o(
          "useConcurrentAutoplayManagementAPI",
        ).createConcurrentAutoplayManagementAPI(),
        te = [],
        ne = function () {
          (te.forEach(function (e) {
            e();
          }),
            C({
              logFlusherToSNAPL: G,
              logFlusherToVPL: z,
              loggingConfig: V,
              loggingToSNAPLEnabled: Q,
              loggingToVPLEnabled: X,
            }));
        },
        re = { current: $.onExposedStateChanged },
        oe = { current: null },
        ae = null,
        ie = {
          current: {
            inbandCaptionsAutogeneratedFromManifest: !1,
            inbandCaptionsExpectedFromManifest: !1,
            inbandCaptionsExpectedFromProps:
              $.coreVideoPlayerMetaData.inbandCaptionsExpected,
            representationCaptionsExpectedFromManifest: !1,
            sideLoadCaptionsExpectedFromProps:
              $.coreVideoPlayerMetaData.sideLoadCaptionsExpected,
            sideLoadCaptionsUrlFromProps:
              (i = $.coreVideoPlayerMetaData.sideLoadCaptionsUrl) != null
                ? i
                : null,
          },
        },
        le = { current: null },
        se = { current: null },
        ue = [],
        ce = [],
        de = "before_mounted",
        me = { current: null },
        pe = function (t) {
          var e = m({
            coreVideoPlayerMetaData: Y.current,
            engineMetadata: k,
            state: t,
          });
          return e;
        },
        _e = { current: null },
        fe = { current: null },
        ge = function (t) {
          if (S(t, de)) {
            if (t === _e.current) return;
            var e = pe(t);
            if (fe.current != null && r("deepEquals")(fe.current, e)) return;
            ((_e.current = t), (fe.current = e), P(e));
            var n = re.current;
            n &&
              n({
                implementationController: we,
                implementationExposedState: e,
              });
          }
        },
        he = function (t, n, r) {
          (K.handleStateMachine(t, n, r),
            j == null || j.handleStateMachine(t, n, r),
            ge(n),
            ne());
        },
        ye = function (t, n) {},
        Ce = function (t) {
          ye(t, "state_machine_fatal_error");
        },
        be = o(
          "VideoPlayerImplementationEngineStateMachineWithEffects",
        ).createVideoPlayerImplementationEngineStateMachineWithEffects({
          alwaysShowCaptions: !!$.coreVideoPlayerMetaData.alwaysShowCaptions,
          areCaptionsAutogenerated:
            !!$.coreVideoPlayerMetaData.areCaptionsAutogenerated,
          captionDisplayStyle: $.coreVideoPlayerMetaData.captionDisplayStyle,
          captionsControllerRef: Z,
          debugLogId: w,
          dimensions: $.dimensions,
          engineExtrasAPI: E,
          engineMetadata: k,
          fullscreenControllerRef: J,
          handleFatalError: Ce,
          handleStateMachine: he,
          videoElementAPIRef: me,
          videoLiveTraceRef: U,
          videoPlayerPassiveViewabilityInfo:
            $.videoPlayerPassiveViewabilityInfo,
        }),
        ve = !1,
        Se = function (t) {
          var e = oe.current != null,
            n = me.current != null;
          (ue.forEach(function (e) {
            return e.remove();
          }),
            (ue.length = 0),
            be.dispatch({
              payload: {
                reason: t,
                videoElementAPIExisted: n,
                videoElementExisted: e,
              },
              type: "implementation_engine_destroy_requested",
            }));
          var o = ["destroyEngine(" + t + ")"];
          try {
            if (ve)
              _ && A("[destroyEngineParts] skip callChain:" + o.join(":"));
            else {
              ((ve = !0),
                _ && A("[destroyEngineParts] begin callChain:" + o.join(":")));
              try {
                R(o);
              } finally {
                _ && A("[destroyEngineParts] end callChain:" + o.join(":"));
              }
            }
          } catch (o) {
            var a = r("getErrorSafe")(o);
            try {
              var i = r("FBLogger")("comet_video_player").catching(a),
                l = $.coreVideoPlayerMetaData.videoFBID;
              (l != null && (i = i.addMetadata("COMET_VIDEO", "VIDEO_ID", l)),
                (i = i.addMetadata(
                  "COMET_VIDEO",
                  "VIDEO_IMPLEMENTATION_DEBUG_DATA",
                  JSON.stringify({
                    destroy_reason: t,
                    player_instance_key: N,
                    player_version: k.playerVersion,
                    video_element_api_existed: n,
                    video_element_existed: e,
                  }),
                )),
                i.warn("Error thrown by destroyEngineParts: %s", a.message));
            } catch (e) {}
          }
          var s = Z.current;
          (s != null &&
            (be.getCurrentState().controlledState.captionsLoaded &&
              be.dispatch({ type: "captions_unloaded" }),
            (Z.current = null),
            s.destroy()),
            c(null, J, le, be),
            d(null, se, be),
            be.dispatch({
              payload: {
                reason: t,
                videoElementAPIExisted: n,
                videoElementExisted: e,
              },
              type: "implementation_engine_destroyed",
            }),
            e &&
              (r("gkx")("17338") || r("gkx")("18183")) &&
              Ie(null, ["destroy", t]));
        };
      ye = function (t, n) {
        var e = u(t, n);
        (be.dispatch({
          payload: { fatalError: e },
          type: "implementation_fatal_error",
        }),
          Se("implementation_fatal_error"),
          x(e));
      };
      var Re = function (t) {
          var e = g(t),
            n = h(t),
            r = y(t),
            a = Z.current;
          (r !== y(ie.current) &&
            be.dispatch({
              payload: { inbandCaptionsAutogenerated: r },
              type: "inband_captions_autogenerated_changed",
            }),
            a != null
              ? n !== h(ie.current) &&
                (a.updateInbandCaptionsExpected(n),
                !n &&
                  be.getCurrentState().controlledState.captionsLoaded &&
                  be.dispatch({ type: "captions_unloaded" }))
              : (e || n) &&
                a == null &&
                (Z.current = o(
                  "VideoPlayerCaptionsController",
                ).createCaptionsController({
                  captionsUrl: e ? t.sideLoadCaptionsUrlFromProps : null,
                  inbandCaptionsExpected: n,
                  onCaptionsLoaded: function () {
                    be.dispatch({ type: "captions_loaded" });
                  },
                })),
            (ie.current = t));
        },
        Le = function (t) {
          E != null &&
            t &&
            t.width > 0 &&
            t.height > 0 &&
            (E.setDimensions(t),
            be.dispatch({
              payload: { dimensions: { height: t.height, width: t.width } },
              type: "player_dimensions_changed",
            }));
        },
        Ee = function (t) {
          t !== be.getCurrentState().controlledState.loopCount &&
            be.dispatch({
              payload: { loopCount: t },
              type: "loop_count_change_requested",
            });
        },
        ke = function (t) {
          (_ && A("[cleanupVideoElement]"),
            "srcObject" in t && (t.srcObject = null),
            t.removeAttribute("src"),
            ce.forEach(function (e) {
              return e.remove();
            }),
            (ce.length = 0));
        },
        Ie = function (t, o) {
          if (oe.current !== t) {
            (_ &&
              A("[handleVideoElement] callChain:" + o.join(":"), {
                videoElementMaybe: t,
              }),
              t != null &&
                oe.current != null &&
                oe.current !== t &&
                r("FBLogger")("comet_video_player").mustfix(
                  "The video element was recreated",
                ),
              ae != null && ae());
            var e = oe.current;
            if (
              (e && ke(e),
              (oe.current = t),
              v(t, me),
              n("cr:506") != null && t != null && (ae = n("cr:506")(t, w)),
              t != null)
            ) {
              (b(t, be, ce),
                be.dispatch({ type: "implementation_video_node_mounted" }));
              var a = [].concat(o, ["handleVideoElement(non-null)"]);
              try {
                (_ &&
                  A(
                    "[handleVideoElementChanged(non-null)] begin callChain:" +
                      a.join(":"),
                    { videoElementMaybe: t },
                  ),
                  I(t, a));
              } finally {
                _ &&
                  A(
                    "[handleVideoElementChanged(non-null)] end callChain:" +
                      a.join(":"),
                    { videoElementMaybe: t },
                  );
              }
            } else {
              be.dispatch({ type: "implementation_video_node_unmounted" });
              var i = [].concat(o, ["handleVideoElement(null)"]);
              try {
                (_ &&
                  A(
                    "[handleVideoElementChanged(null)] begin callChain:" +
                      i.join(":"),
                    { videoElementMaybe: t },
                  ),
                  I(null, i));
              } finally {
                _ &&
                  A(
                    "[handleVideoElementChanged(null)] end callChain:" +
                      i.join(":"),
                    { videoElementMaybe: t },
                  );
              }
            }
          }
        },
        Te = $.loggingMetaData.instanceKey,
        De = function (t) {
          var e, n;
          if (
            ((re.current = t.onExposedStateChanged),
            (Y.current = t.coreVideoPlayerMetaData),
            !!S(be.getCurrentState(), de))
          ) {
            if (
              (_ &&
                (t.loggingMetaData.instanceKey !== Te &&
                  (A(
                    "[handleReactPropsChanged][WARNING] instanceKey changed from " +
                      Te +
                      " to " +
                      t.loggingMetaData.instanceKey,
                  ),
                  (Te = t.loggingMetaData.instanceKey)),
                A("[handleReactPropsChanged]", t)),
              c((e = t.fullscreenController) != null ? e : null, J, le, be),
              d(
                (n = t.videoPlayerPassiveViewabilityInfo) != null ? n : null,
                se,
                be,
              ),
              !T(t))
            ) {
              var r,
                o,
                a = {
                  inbandCaptionsAutogeneratedFromManifest:
                    ie.current.inbandCaptionsAutogeneratedFromManifest,
                  inbandCaptionsExpectedFromManifest:
                    ie.current.inbandCaptionsExpectedFromManifest,
                  inbandCaptionsExpectedFromProps:
                    t.coreVideoPlayerMetaData.inbandCaptionsExpected,
                  representationCaptionsExpectedFromManifest:
                    ie.current.representationCaptionsExpectedFromManifest,
                  sideLoadCaptionsExpectedFromProps:
                    t.coreVideoPlayerMetaData.sideLoadCaptionsExpected,
                  sideLoadCaptionsUrlFromProps:
                    (r = t.coreVideoPlayerMetaData.sideLoadCaptionsUrl) != null
                      ? r
                      : null,
                };
              (Re(a),
                Le(t.dimensions),
                Ee((o = t.coreVideoPlayerMetaData.loopCount) != null ? o : 0));
            }
            be.dispatch({
              payload: {
                coreVideoPlayerMetaData: t.coreVideoPlayerMetaData,
                loggingMetaData: t.loggingMetaData,
              },
              type: "notify_logging_metadata_change",
            });
          }
        },
        xe = null,
        $e = function () {
          var e = be.getCurrentState().controlledState.mountState;
          switch (e) {
            case "before_mounted": {
              (ue.push(
                o("RunComet").onUnload(function () {
                  Se("page_unload");
                }),
              ),
                be.dispatch({ type: "implementation_mounted" }),
                I(oe.current, ["handleReactEffectInit(before_mounted)"]));
              break;
            }
            case "mounted_onscreen":
              break;
            case "mounted_offscreen": {
              (r("clearTimeout")(xe),
                (xe = null),
                be.dispatch({ type: "implementation_onscreen" }));
              break;
            }
            case "unmounted":
              break;
            default:
          }
        },
        Pe = function () {
          var e = function () {
              if (
                (r("clearTimeout")(xe),
                (xe = null),
                be.getCurrentState().controlledState.mountState !== "unmounted")
              ) {
                var t = D();
                t
                  ? (xe = r("setTimeout")(e, 1e3))
                  : (be.dispatch({
                      payload: { reason: "react_effect_cleanup" },
                      type: "implementation_unmounted",
                    }),
                    Se("implementation_unmounted:react_effect_cleanup"));
              }
            },
            t = be.getCurrentState().controlledState.mountState;
          switch (t) {
            case "before_mounted":
              break;
            case "mounted_onscreen": {
              (be.dispatch({ type: "implementation_offscreen" }), e());
              break;
            }
            case "mounted_offscreen": {
              e();
              break;
            }
            case "unmounted":
              break;
          }
        },
        Ne = function () {
          S(be.getCurrentState(), de) ||
            ((de = "mounted"),
            ue.push(
              o("RunComet").onUnload(function () {
                Se("page_unload");
              }),
            ),
            be.dispatch({ type: "implementation_mounted" }),
            I(oe.current, ["handleReactMount"]));
        },
        Me = function () {
          S(be.getCurrentState(), de) &&
            ((de = "unmounted"),
            be.dispatch({
              payload: { reason: "react_effect_cleanup" },
              type: "implementation_unmounted",
            }),
            Se("implementation_unmounted:react_effect_cleanup"));
        },
        we = s({
          concurrentAutoplayManagementAPI: ee,
          createExposedState: pe,
          debugAPI: l({
            getVideoElementAPI: function () {
              return me.current;
            },
            loggerToVPL: K,
          }),
          fullscreenControllerRef: J,
          loggerToSNAPL: j,
          loggerToVPL: K,
          machine: be,
          subscribers: te,
          videoElementAPIRef: me,
          videoPlayerPassiveViewabilityInfo:
            $.videoPlayerPassiveViewabilityInfo,
        }),
        Ae = o(
          "VideoPlayerImplementationStateMachine",
        ).createReactVideoElementCallbacksForStateMachine(be, Ie),
        Fe = pe(be.getInitialState()),
        Oe = _
          ? function (e, t) {
              return function () {
                A("[" + t + "] begin");
                try {
                  e();
                } finally {
                  A("[" + t + "] end");
                }
              };
            }
          : function (e, t) {
              return e;
            },
        Be = {
          handleOnBeforeUnload: function () {
            $.coreVideoPlayerMetaData.loggingConfig
              .enablePauseAndFlushOnBeforeUnload === !0 &&
              (j == null || j.logPausedOnBeforeUnload(be.getCurrentState()),
              G == null || G.flushLogs(!0));
          },
          handleReactEffectCleanup: r("gkx")("24349")
            ? Oe(Pe, "handleReactEffectCleanup")
            : Oe(Me, "handleReactEffectCleanup->handleReactUnmount"),
          handleReactEffectInit: r("gkx")("24349")
            ? Oe($e, "handleReactEffectInit")
            : Oe(Ne, "handleReactEffectInit->handleReactMount"),
          handleReactPropsChanged: De,
          implementationController: we,
          initialExposedState: Fe,
          logFlusherToVPL: z,
          machine: be,
          notifySubscribers: ne,
          videoElementCallbacks: Ae,
          videoElementRefCallback: function (t) {
            (t == null && r("gkx")("17338")) ||
              Ie(t, ["videoElementRefCallback"]);
          },
        };
      return (
        _ && A("[created]", { engine: Be, machine: be, videoElementRef: oe }),
        {
          debugLog: A,
          engine: Be,
          getCaptionsInfo: function () {
            return ie.current;
          },
          getVideoElement: function () {
            return oe.current;
          },
          getVideoLiveTrace: function () {
            return U.current;
          },
          handleCaptionsInfoChange: Re,
          handleFatalImplementationError: ye,
          loggerToVPL: K,
          machine: be,
          videoElementAPIRef: me,
        }
      );
    }
    ((l.ensureVideoElementAPI = u),
      (l.internal_createVideoPlayerImplementationExposedStateFromStateMachineState =
        m),
      (l.createVideoPlayerImplementationEngine = R));
  },
  98,
);
