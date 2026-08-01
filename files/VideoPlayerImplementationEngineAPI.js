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
      var t = e.autoLoopSuspendedRef,
        n = e.concurrentAutoplayManagementAPI,
        r = e.createExposedState,
        a = e.debugAPI,
        i = e.fullscreenControllerRef,
        l = e.loggerToSNAPL,
        s = e.loggerToVPL,
        u = e.machine,
        c = e.setVideoElementImpl,
        d = e.subscribers,
        m = e.videoElementAPIRef,
        p = e.videoPlayerPassiveViewabilityInfo,
        _ = {
          logVPLEvent_DO_NOT_USE: function (t, n) {
            s.logVPLEvent({
              eventType: t,
              logDataOverrides: n,
              state: u.getCurrentState(),
            });
          },
          setLoggingToSNAPLAdditionalData: function (t) {
            l == null || l.setLoggingToSNAPLAdditionalData(t);
          },
          setLoggingToVPLAdditionalData: function (t, n) {
            s.setLoggingToVPLAdditionalData(t, n);
          },
        };
      return o(
        "VideoPlayerImplementationControllerImpl",
      ).createVideoPlayerImplementationControllerImpl({
        concurrentAutoplayManagementAPI: n,
        debugAPI: a,
        exitPictureInPictureImpl: function () {
          u.dispatch({ type: "controller_picture_in_picture_exit_requested" });
        },
        fullscreenControllerRef: i,
        getCurrentExposedState: function () {
          return r(u.getCurrentState());
        },
        getCurrentIsDesktopPictureInPicture: function () {
          var e;
          return (e =
            u.getCurrentState().controlledState.isDesktopPictureInPicture) !=
            null
            ? e
            : !1;
        },
        getCurrentIsFullscreen: function () {
          var e = i.current;
          return e ? e.getIsFullscreen() : !1;
        },
        getCurrentLiveRewindPlayheadPosition: function () {
          var e,
            t = u.getCurrentState(),
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
            (t = (n = m.current) == null ? void 0 : n.getPlayheadPosition()) !=
            null
              ? t
              : u.getCurrentState().uncontrolledState
                  .videoElementPlayheadPosition) != null
            ? e
            : r;
        },
        internal_getCurrentStateMachineState: function () {
          return u.getCurrentState();
        },
        internal_injectFatalError: function (t) {
          u.dispatch({
            payload: { fatalError: t },
            type: "controller_inject_fatal_error",
          });
        },
        loggerAPI: _,
        pauseImpl: function (t) {
          u.dispatch({
            payload: { reason: t },
            type: "controller_pause_requested",
          });
        },
        playImpl: function (t) {
          u.dispatch({
            payload: { reason: t },
            type: "controller_play_requested",
          });
        },
        registerEmsgObserverImpl: function (t) {
          u.dispatch({ payload: { token: t }, type: "register_emsg_observer" });
        },
        requestPictureInPictureImpl: function () {
          u.dispatch({ type: "controller_picture_in_picture_requested" });
        },
        scrubBeginImpl: function () {
          u.dispatch({ type: "controller_scrub_begin_requested" });
        },
        scrubEndImpl: function (t) {
          u.dispatch({
            payload: { seekTargetPosition: t },
            type: "controller_scrub_end_requested",
          });
        },
        seekImpl: function (t) {
          u.dispatch({
            payload: { seekTargetPosition: t },
            type: "controller_seek_requested",
          });
        },
        selectVideoQualityImpl: function (t) {
          u.dispatch({
            payload: { selectedVideoQuality: t },
            type: "controller_quality_requested",
          });
        },
        selectVideoVariantImpl: function (t) {
          u.dispatch({
            payload: { selectedVideoVariant: t },
            type: "controller_video_variant_requested",
          });
        },
        setCaptionsDisplayStyleImpl: function (t) {
          u.dispatch({
            payload: { captionDisplayStyle: t },
            type: "controller_set_caption_display_style_requested",
          });
        },
        setCaptionsUrlImpl: function (t) {
          u.dispatch({
            payload: { captionsUrl: t },
            type: "controller_set_captions_url_requested",
          });
        },
        setCaptionsVisibleImpl: function (t) {
          u.dispatch({
            payload: { captionsVisible: t },
            type: "controller_set_captions_visible_requested",
          });
        },
        setIsLiveRewindActiveImpl: function (t) {
          u.dispatch({
            payload: { isLiveRewindActive: t },
            type: "controller_set_is_live_rewind_active_requested",
          });
        },
        setLatencyLevelImpl: function (t) {
          u.dispatch({
            payload: { latencyLevel: t },
            type: "controller_set_latency_level_requested",
          });
        },
        setMutedImpl: function (t, n) {
          u.dispatch({
            payload: { muted: t, reason: n },
            type: "controller_muted_requested",
          });
        },
        setPictureInPictureStateImpl: function (t) {
          u.dispatch({
            payload: { isInPictureInPictureMode: t },
            type: "controller_set_picture_in_picture_state_requested",
          });
        },
        setPlaybackRateImpl: function (t) {
          u.dispatch({
            payload: { playbackRate: t },
            type: "controller_set_playback_rate",
          });
        },
        setVideoElementImpl: c,
        setVolumeImpl: function (t) {
          u.dispatch({
            payload: { volume: t },
            type: "controller_volume_requested",
          });
        },
        subscribers: d,
        suspendAutoLoopImpl: function (n) {
          t.current = n;
        },
        unregisterEmsgObserverImpl: function (t) {
          u.dispatch({
            payload: { token: t },
            type: "unregister_emsg_observer",
          });
        },
        videoElementAPIRef: m,
        videoPlayerPassiveViewabilityInfo: p,
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
        _ = m != null && p != null ? p(t, m) : null,
        f = a.loggingToSigmateCreateStateMachineLogger,
        g =
          a.disableLogging === !0 || f == null
            ? null
            : f({
                mediaID: n.coreVideoPlayerMetaData.videoFBID,
                playbackSessionID: n.loggingMetaData.instanceKey,
              });
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
          loggerToSigmate: g,
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
        j = H.loggerToSigmate,
        K = H.loggerToSNAPL,
        Q = H.loggerToVPL,
        X = H.loggingToSNAPLEnabled,
        Y = H.loggingToVPLEnabled,
        J = { current: $.coreVideoPlayerMetaData },
        Z = { current: (a = $.fullscreenController) != null ? a : null },
        ee = { current: null },
        te = o(
          "useConcurrentAutoplayManagementAPI",
        ).createConcurrentAutoplayManagementAPI(),
        ne = [],
        re = function () {
          (ne.forEach(function (e) {
            e();
          }),
            C({
              logFlusherToSNAPL: G,
              logFlusherToVPL: z,
              loggingConfig: V,
              loggingToSNAPLEnabled: X,
              loggingToVPLEnabled: Y,
            }));
        },
        oe = { current: $.onExposedStateChanged },
        ae = { current: null },
        ie = null,
        le = {
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
        se = { current: null },
        ue = { current: null },
        ce = [],
        de = [],
        me = "before_mounted",
        pe = { current: null },
        _e = function (t) {
          var e = m({
            coreVideoPlayerMetaData: J.current,
            engineMetadata: k,
            state: t,
          });
          return e;
        },
        fe = { current: null },
        ge = { current: null },
        he = function (t) {
          if (S(t, me)) {
            if (t === fe.current) return;
            var e = _e(t);
            if (ge.current != null && r("deepEquals")(ge.current, e)) return;
            ((fe.current = t), (ge.current = e), P(e));
            var n = oe.current;
            n &&
              n({
                implementationController: Be,
                implementationExposedState: e,
              });
          }
        },
        ye = function (t, n, r) {
          (Q.handleStateMachine(t, n, r),
            K == null || K.handleStateMachine(t, n, r),
            j == null || j.handleStateMachine(t, n, r),
            he(n),
            re());
        },
        Ce = function (t, n) {},
        be = function (t) {
          Ce(t, "state_machine_fatal_error");
        },
        ve = { current: !1 },
        Se = o(
          "VideoPlayerImplementationEngineStateMachineWithEffects",
        ).createVideoPlayerImplementationEngineStateMachineWithEffects({
          alwaysShowCaptions: !!$.coreVideoPlayerMetaData.alwaysShowCaptions,
          areCaptionsAutogenerated:
            !!$.coreVideoPlayerMetaData.areCaptionsAutogenerated,
          autoLoopSuspendedRef: ve,
          captionDisplayStyle: $.coreVideoPlayerMetaData.captionDisplayStyle,
          captionsControllerRef: ee,
          debugLogId: w,
          dimensions: $.dimensions,
          engineExtrasAPI: E,
          engineMetadata: k,
          fullscreenControllerRef: Z,
          handleFatalError: be,
          handleStateMachine: ye,
          videoElementAPIRef: pe,
          videoLiveTraceRef: U,
          videoPlayerPassiveViewabilityInfo:
            $.videoPlayerPassiveViewabilityInfo,
        }),
        Re = !1,
        Le = function (t) {
          var e = ae.current != null,
            n = pe.current != null;
          (ce.forEach(function (e) {
            return e.remove();
          }),
            (ce.length = 0),
            Se.dispatch({
              payload: {
                reason: t,
                videoElementAPIExisted: n,
                videoElementExisted: e,
              },
              type: "implementation_engine_destroy_requested",
            }));
          var o = ["destroyEngine(" + t + ")"];
          try {
            if (Re)
              _ && A("[destroyEngineParts] skip callChain:" + o.join(":"));
            else {
              ((Re = !0),
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
          var s = ee.current;
          (s != null &&
            (Se.getCurrentState().controlledState.captionsLoaded &&
              Se.dispatch({ type: "captions_unloaded" }),
            (ee.current = null),
            s.destroy()),
            c(null, Z, se, Se),
            d(null, ue, Se),
            Se.dispatch({
              payload: {
                reason: t,
                videoElementAPIExisted: n,
                videoElementExisted: e,
              },
              type: "implementation_engine_destroyed",
            }),
            e &&
              (r("gkx")("17338") || r("gkx")("18183")) &&
              xe(null, ["destroy", t]));
        };
      Ce = function (t, n) {
        var e = u(t, n);
        (Se.dispatch({
          payload: { fatalError: e },
          type: "implementation_fatal_error",
        }),
          Le("implementation_fatal_error"),
          x(e));
      };
      var Ee = function (t) {
          var e = g(t),
            n = h(t),
            r = y(t),
            a = ee.current;
          (r !== y(le.current) &&
            Se.dispatch({
              payload: { inbandCaptionsAutogenerated: r },
              type: "inband_captions_autogenerated_changed",
            }),
            a != null
              ? n !== h(le.current) &&
                (a.updateInbandCaptionsExpected(n),
                !n &&
                  Se.getCurrentState().controlledState.captionsLoaded &&
                  Se.dispatch({ type: "captions_unloaded" }))
              : (e || n) &&
                a == null &&
                (ee.current = o(
                  "VideoPlayerCaptionsController",
                ).createCaptionsController({
                  captionsUrl: e ? t.sideLoadCaptionsUrlFromProps : null,
                  inbandCaptionsExpected: n,
                  onCaptionsLoaded: function () {
                    Se.dispatch({ type: "captions_loaded" });
                  },
                })),
            (le.current = t));
        },
        ke = function (t) {
          E != null &&
            t &&
            t.width > 0 &&
            t.height > 0 &&
            (E.setDimensions(t),
            Se.dispatch({
              payload: { dimensions: { height: t.height, width: t.width } },
              type: "player_dimensions_changed",
            }));
        },
        Ie = function (t) {
          t !== Se.getCurrentState().controlledState.loopCount &&
            Se.dispatch({
              payload: { loopCount: t },
              type: "loop_count_change_requested",
            });
        },
        Te = null,
        De = function (t) {
          (_ && A("[cleanupVideoElement]"),
            Te != null && (Te(), (Te = null)),
            "srcObject" in t && (t.srcObject = null),
            t.removeAttribute("src"),
            de.forEach(function (e) {
              return e.remove();
            }),
            (de.length = 0));
        },
        xe = function (t, o) {
          if (ae.current !== t) {
            (_ &&
              A("[handleVideoElement] callChain:" + o.join(":"), {
                videoElementMaybe: t,
              }),
              t != null &&
                ae.current != null &&
                ae.current !== t &&
                r("FBLogger")("comet_video_player").mustfix(
                  "The video element was recreated",
                ),
              ie != null && ie());
            var e = ae.current;
            if (
              (e && De(e),
              (ae.current = t),
              v(t, pe),
              n("cr:506") != null && t != null && (ie = n("cr:506")(t, w)),
              t != null)
            ) {
              (b(t, Se, de),
                Se.dispatch({ type: "implementation_video_node_mounted" }));
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
              Se.dispatch({ type: "implementation_video_node_unmounted" });
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
        $e = function (t) {
          var e = ae.current !== t;
          if (
            (t != null &&
              Se.getCurrentState().controlledState.mountState ===
                "before_mounted" &&
              Se.dispatch({ type: "implementation_mounted" }),
            xe(t, ["controller_set_video_element"]),
            t != null &&
              !Se.getCurrentState().controlledState.hostCallCanApply &&
              I(t, ["controller_set_video_element_post_init_retry"]),
            t != null && e)
          ) {
            var n = [
              ["canplay", We.onCanPlay],
              ["durationchange", We.onDurationChange],
              ["ended", We.onEnded],
              ["error", We.onError],
              ["loadeddata", We.onLoadedData],
              ["loadedmetadata", We.onLoadedMetadata],
              ["pause", We.onPause],
              ["play", We.onPlay],
              ["playing", We.onPlaying],
              ["progress", We.onProgress],
              ["ratechange", We.onRateChange],
              ["seeked", We.onSeeked],
              ["seeking", We.onSeeking],
              ["timeupdate", We.onTimeUpdate],
              ["volumechange", We.onVolumeChange],
              ["waiting", We.onWaiting],
            ];
            for (var r of n) {
              var o = r[0],
                a = r[1];
              t.addEventListener(o, a);
            }
            Te = function () {
              for (var e of n) {
                var r = e[0],
                  o = e[1];
                t.removeEventListener(r, o);
              }
            };
          }
        },
        Pe = $.loggingMetaData.instanceKey,
        Ne = function (t) {
          var e, n;
          if (
            ((oe.current = t.onExposedStateChanged),
            (J.current = t.coreVideoPlayerMetaData),
            !!S(Se.getCurrentState(), me))
          ) {
            if (
              (_ &&
                (t.loggingMetaData.instanceKey !== Pe &&
                  (A(
                    "[handleReactPropsChanged][WARNING] instanceKey changed from " +
                      Pe +
                      " to " +
                      t.loggingMetaData.instanceKey,
                  ),
                  (Pe = t.loggingMetaData.instanceKey)),
                A("[handleReactPropsChanged]", t)),
              c((e = t.fullscreenController) != null ? e : null, Z, se, Se),
              d(
                (n = t.videoPlayerPassiveViewabilityInfo) != null ? n : null,
                ue,
                Se,
              ),
              !T(t))
            ) {
              var r,
                o,
                a = {
                  inbandCaptionsAutogeneratedFromManifest:
                    le.current.inbandCaptionsAutogeneratedFromManifest,
                  inbandCaptionsExpectedFromManifest:
                    le.current.inbandCaptionsExpectedFromManifest,
                  inbandCaptionsExpectedFromProps:
                    t.coreVideoPlayerMetaData.inbandCaptionsExpected,
                  representationCaptionsExpectedFromManifest:
                    le.current.representationCaptionsExpectedFromManifest,
                  sideLoadCaptionsExpectedFromProps:
                    t.coreVideoPlayerMetaData.sideLoadCaptionsExpected,
                  sideLoadCaptionsUrlFromProps:
                    (r = t.coreVideoPlayerMetaData.sideLoadCaptionsUrl) != null
                      ? r
                      : null,
                };
              (Ee(a),
                ke(t.dimensions),
                Ie((o = t.coreVideoPlayerMetaData.loopCount) != null ? o : 0));
            }
            Se.dispatch({
              payload: {
                coreVideoPlayerMetaData: t.coreVideoPlayerMetaData,
                loggingMetaData: t.loggingMetaData,
              },
              type: "notify_logging_metadata_change",
            });
          }
        },
        Me = null,
        we = function () {
          var e = Se.getCurrentState().controlledState.mountState;
          switch (e) {
            case "before_mounted": {
              (ce.push(
                o("RunComet").onUnload(function () {
                  Le("page_unload");
                }),
              ),
                Se.dispatch({ type: "implementation_mounted" }),
                I(ae.current, ["handleReactEffectInit(before_mounted)"]));
              break;
            }
            case "mounted_onscreen":
              break;
            case "mounted_offscreen": {
              (r("clearTimeout")(Me),
                (Me = null),
                Se.dispatch({ type: "implementation_onscreen" }));
              break;
            }
            case "unmounted":
              break;
            default:
          }
        },
        Ae = function () {
          var e = function () {
              if (
                (r("clearTimeout")(Me),
                (Me = null),
                Se.getCurrentState().controlledState.mountState !== "unmounted")
              ) {
                var t = D();
                t
                  ? (Me = r("setTimeout")(e, 1e3))
                  : (Se.dispatch({
                      payload: { reason: "react_effect_cleanup" },
                      type: "implementation_unmounted",
                    }),
                    Le("implementation_unmounted:react_effect_cleanup"));
              }
            },
            t = Se.getCurrentState().controlledState.mountState;
          switch (t) {
            case "before_mounted":
              break;
            case "mounted_onscreen": {
              (Se.dispatch({ type: "implementation_offscreen" }), e());
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
        Fe = function () {
          S(Se.getCurrentState(), me) ||
            ((me = "mounted"),
            ce.push(
              o("RunComet").onUnload(function () {
                Le("page_unload");
              }),
            ),
            Se.dispatch({ type: "implementation_mounted" }),
            I(ae.current, ["handleReactMount"]));
        },
        Oe = function () {
          S(Se.getCurrentState(), me) &&
            ((me = "unmounted"),
            Se.dispatch({
              payload: { reason: "react_effect_cleanup" },
              type: "implementation_unmounted",
            }),
            Le("implementation_unmounted:react_effect_cleanup"));
        },
        Be = s({
          autoLoopSuspendedRef: ve,
          concurrentAutoplayManagementAPI: te,
          createExposedState: _e,
          debugAPI: l({
            getVideoElementAPI: function () {
              return pe.current;
            },
            loggerToVPL: Q,
          }),
          fullscreenControllerRef: Z,
          loggerToSNAPL: K,
          loggerToVPL: Q,
          machine: Se,
          setVideoElementImpl: $e,
          subscribers: ne,
          videoElementAPIRef: pe,
          videoPlayerPassiveViewabilityInfo:
            $.videoPlayerPassiveViewabilityInfo,
        }),
        We = o(
          "VideoPlayerImplementationStateMachine",
        ).createReactVideoElementCallbacksForStateMachine(Se, xe),
        qe = _e(Se.getInitialState()),
        Ue = _
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
        Ve = {
          handleOnBeforeUnload: function () {
            $.coreVideoPlayerMetaData.loggingConfig
              .enablePauseAndFlushOnBeforeUnload === !0 &&
              (K == null || K.logPausedOnBeforeUnload(Se.getCurrentState()),
              G == null || G.flushLogs(!0));
          },
          handleReactEffectCleanup: r("gkx")("24349")
            ? Ue(Ae, "handleReactEffectCleanup")
            : Ue(Oe, "handleReactEffectCleanup->handleReactUnmount"),
          handleReactEffectInit: r("gkx")("24349")
            ? Ue(we, "handleReactEffectInit")
            : Ue(Fe, "handleReactEffectInit->handleReactMount"),
          handleReactPropsChanged: Ne,
          implementationController: Be,
          initialExposedState: qe,
          logFlusherToVPL: z,
          machine: Se,
          notifySubscribers: re,
          videoElementCallbacks: We,
          videoElementRefCallback: function (t) {
            (t == null && r("gkx")("17338")) ||
              xe(t, ["videoElementRefCallback"]);
          },
        };
      return (
        _ && A("[created]", { engine: Ve, machine: Se, videoElementRef: ae }),
        {
          debugLog: A,
          engine: Ve,
          getCaptionsInfo: function () {
            return le.current;
          },
          getVideoElement: function () {
            return ae.current;
          },
          getVideoLiveTrace: function () {
            return U.current;
          },
          handleCaptionsInfoChange: Ee,
          handleFatalImplementationError: Ce,
          loggerToVPL: Q,
          machine: Se,
          videoElementAPIRef: pe,
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
