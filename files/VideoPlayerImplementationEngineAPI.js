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
    var e,
      s = r("gkx")("25264");
    function u(e) {
      var t = e.autoLoopSuspendedRef,
        n = e.concurrentAutoplayManagementAPI,
        a = e.createExposedState,
        i = e.debugAPI,
        l = e.fullscreenControllerRef,
        s = e.loggerToSNAPL,
        u = e.loggerToVPL,
        c = e.machine,
        d = e.setVideoElementImpl,
        m = e.subscribers,
        p = e.videoElementAPIRef,
        _ = e.videoPlayerPassiveViewabilityInfo,
        f = {
          logVPLEvent_DO_NOT_USE: function (t, n) {
            u.logVPLEvent({
              eventType: t,
              logDataOverrides: n,
              state: c.getCurrentState(),
            });
          },
          setLoggingToSNAPLAdditionalData: function (t) {
            s == null || s.setLoggingToSNAPLAdditionalData(t);
          },
          setLoggingToVPLAdditionalData: function (t, n) {
            u.setLoggingToVPLAdditionalData(t, n);
          },
        };
      return o(
        "VideoPlayerImplementationControllerImpl",
      ).createVideoPlayerImplementationControllerImpl({
        concurrentAutoplayManagementAPI: n,
        debugAPI: i,
        exitPictureInPictureImpl: function () {
          c.dispatch({ type: "controller_picture_in_picture_exit_requested" });
        },
        fullscreenControllerRef: l,
        getCurrentExposedState: function () {
          return a(c.getCurrentState());
        },
        getCurrentIsDesktopPictureInPicture: function () {
          var e;
          return (e =
            c.getCurrentState().controlledState.isDesktopPictureInPicture) !=
            null
            ? e
            : !1;
        },
        getCurrentIsFullscreen: function () {
          var e = l.current;
          return e ? e.getIsFullscreen() : !1;
        },
        getCurrentLiveRewindPlayheadPosition: function () {
          var e,
            t = c.getCurrentState(),
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
            (t = (n = p.current) == null ? void 0 : n.getPlayheadPosition()) !=
            null
              ? t
              : c.getCurrentState().uncontrolledState
                  .videoElementPlayheadPosition) != null
            ? e
            : r;
        },
        internal_getCurrentStateMachineState: function () {
          return c.getCurrentState();
        },
        internal_injectFatalError: function (t) {
          c.dispatch({
            payload: { fatalError: t },
            type: "controller_inject_fatal_error",
          });
        },
        loggerAPI: f,
        pauseImpl: function (t) {
          c.dispatch({
            payload: { reason: t },
            type: "controller_pause_requested",
          });
        },
        playImpl: function (t) {
          c.dispatch({
            payload: { reason: t },
            type: "controller_play_requested",
          });
        },
        registerEmsgObserverImpl: function (t) {
          c.dispatch({ payload: { token: t }, type: "register_emsg_observer" });
        },
        requestPictureInPictureImpl: function () {
          c.dispatch({ type: "controller_picture_in_picture_requested" });
        },
        scrubBeginImpl: function () {
          c.dispatch({ type: "controller_scrub_begin_requested" });
        },
        scrubEndImpl: function (t) {
          c.dispatch({
            payload: { seekTargetPosition: t },
            type: "controller_scrub_end_requested",
          });
        },
        seekImpl: function (t) {
          c.dispatch({
            payload: { seekTargetPosition: t },
            type: "controller_seek_requested",
          });
        },
        selectVideoQualityImpl: function (t) {
          c.dispatch({
            payload: { selectedVideoQuality: t },
            type: "controller_quality_requested",
          });
        },
        selectVideoVariantImpl: function (t) {
          c.dispatch({
            payload: { selectedVideoVariant: t },
            type: "controller_video_variant_requested",
          });
        },
        setCaptionsDisplayStyleImpl: function (t) {
          c.dispatch({
            payload: { captionDisplayStyle: t },
            type: "controller_set_caption_display_style_requested",
          });
        },
        setCaptionsUrlImpl: function (t) {
          c.dispatch({
            payload: { captionsUrl: t },
            type: "controller_set_captions_url_requested",
          });
        },
        setCaptionsVisibleImpl: function (t) {
          c.dispatch({
            payload: { captionsVisible: t },
            type: "controller_set_captions_visible_requested",
          });
        },
        setIsLiveRewindActiveImpl: function (t) {
          c.dispatch({
            payload: { isLiveRewindActive: t },
            type: "controller_set_is_live_rewind_active_requested",
          });
        },
        setLatencyLevelImpl: function (t) {
          c.dispatch({
            payload: { latencyLevel: t },
            type: "controller_set_latency_level_requested",
          });
        },
        setMutedImpl: function (t, n) {
          c.dispatch({
            payload: { muted: t, reason: n },
            type: "controller_muted_requested",
          });
        },
        setPictureInPictureStateImpl: function (t) {
          c.dispatch({
            payload: { isInPictureInPictureMode: t },
            type: "controller_set_picture_in_picture_state_requested",
          });
        },
        setPlaybackRateImpl: function (t) {
          c.dispatch({
            payload: { playbackRate: t },
            type: "controller_set_playback_rate",
          });
        },
        setVideoElementImpl: d,
        setVolumeImpl: function (t) {
          c.dispatch({
            payload: { volume: t },
            type: "controller_volume_requested",
          });
        },
        subscribers: m,
        suspendAutoLoopImpl: function (n) {
          r("gkx")("22756") && (t.current = n);
        },
        unregisterEmsgObserverImpl: function (t) {
          c.dispatch({
            payload: { token: t },
            type: "unregister_emsg_observer",
          });
        },
        videoElementAPIRef: p,
        videoPlayerPassiveViewabilityInfo: _,
      });
    }
    function c(e) {
      var t = e.current;
      if (t == null)
        throw r("FBLogger")("comet_video_player").mustfixThrow(
          "Attempted to access VideoElementAPI while it is not available.",
        );
      return t;
    }
    function d(e, t, n, r) {
      (e !== t.current &&
        (n.current && (n.current.remove(), (n.current = null)),
        (t.current = e)),
        t.current &&
          !n.current &&
          (n.current = t.current.subscribe(function () {
            r.dispatch({ type: "notify_fullscreen_changed" });
          })));
    }
    function m(e, t, n) {
      (t.current && (t.current.remove(), (t.current = null)),
        e != null &&
          (t.current = e.subscribe(function () {
            n.dispatch({ type: "notify_viewability_changed" });
          })));
    }
    function p(e) {
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
    var _ = function () {},
      f = !1;
    r("gkx")("13250") &&
      ((f = !0),
      (_ = function (t, n) {
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
    function g(e) {
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
    function h(e) {
      return (
        e.sideLoadCaptionsExpectedFromProps ||
        e.sideLoadCaptionsUrlFromProps != null
      );
    }
    function y(e) {
      var t;
      return (
        e.inbandCaptionsExpectedFromProps &&
        ((t = e.inbandCaptionsExpectedFromManifest) != null ? t : !1)
      );
    }
    function C(e) {
      var t;
      return (t = e.inbandCaptionsAutogeneratedFromManifest) != null ? t : !1;
    }
    function b(e) {
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
    function v(e, t, n) {
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
    function S(e, t) {
      r("gkx")("18183") &&
        (e
          ? (t.current == null ||
              e !== t.current.getUnderlyingVideoElement()) &&
            (t.current = o(
              "VideoPlayerImplementationEngineVideoElementAPI",
            ).createVideoPlayerImplementationEngineVideoElementAPI(e))
          : (t.current = null));
    }
    function R(e, t) {
      return r("gkx")("24349")
        ? e.controlledState.mountState === "mounted_onscreen" ||
            e.controlledState.mountState === "mounted_offscreen"
        : t === "mounted";
    }
    function L(t) {
      var a,
        i,
        l = t.createDebugAPI,
        c = t.createVideoPlayerError,
        L = t.destroyEngineParts,
        E = t.engineCreateArgs,
        k = t.engineExtrasAPI,
        I = t.engineMetadata,
        T = t.handleVideoElementChanged,
        D = t.handleVideoInfoChange,
        x = E.checkInDOM,
        $ = E.handleFatalError,
        P = E.initialProps,
        N = E.setExposedStateInReact,
        M = P.loggingMetaData.instanceKey,
        w = "#" + ((e || (e = r("performanceNow")))() * 1e3).toFixed(0),
        A = M + ";vid=" + P.coreVideoPlayerMetaData.videoFBID + ";" + w;
      (o("VideoPlayerUsageLogging").countEngineInstantiated(I.playerVersion),
        o("VideoPlayerUsageLogging").logEngineInstantiatedDetailed(
          I.playerVersion,
          P.coreVideoPlayerMetaData.subOrigin,
          P.coreVideoPlayerMetaData.videoFBID,
          M,
        ));
      var F = function () {};
      if (f) {
        var O = { debugLogId: A, engineMetadata: I };
        ((F = function (t) {
          for (
            var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1;
            r < e;
            r++
          )
            n[r - 1] = arguments[r];
          return _.apply(void 0, [O, t].concat(n));
        }),
          F("[creating]", P));
      }
      var B = P.coreVideoPlayerMetaData,
        W = B.broadcastId,
        q = B.isLiveStreaming,
        U = B.isLiveTraceEnabled,
        V = {
          current:
            q && U && W != null && n("cr:543") != null
              ? new (n("cr:543"))(W, M, r("CurrentUser").getAccountID())
              : null,
        },
        H = P.coreVideoPlayerMetaData.loggingConfig,
        G = g({
          debugLogId: A,
          initialProps: P,
          loggingConfig: H,
          videoLiveTraceRef: V,
        }),
        z = G.logFlusherToSNAPL,
        j = G.logFlusherToVPL,
        K = G.loggerToSNAPL,
        Q = G.loggerToVPL,
        X = G.loggingToSNAPLEnabled,
        Y = G.loggingToVPLEnabled,
        J = { current: P.coreVideoPlayerMetaData },
        Z = { current: (a = P.fullscreenController) != null ? a : null },
        ee = { current: null },
        te = o(
          "useConcurrentAutoplayManagementAPI",
        ).createConcurrentAutoplayManagementAPI(),
        ne = [],
        re = function () {
          (ne.forEach(function (e) {
            e();
          }),
            b({
              logFlusherToSNAPL: z,
              logFlusherToVPL: j,
              loggingConfig: H,
              loggingToSNAPLEnabled: X,
              loggingToVPLEnabled: Y,
            }));
        },
        oe = { current: P.onExposedStateChanged },
        ae = { current: null },
        ie = null,
        le = {
          current: {
            inbandCaptionsAutogeneratedFromManifest: !1,
            inbandCaptionsExpectedFromManifest: !1,
            inbandCaptionsExpectedFromProps:
              P.coreVideoPlayerMetaData.inbandCaptionsExpected,
            representationCaptionsExpectedFromManifest: !1,
            sideLoadCaptionsExpectedFromProps:
              P.coreVideoPlayerMetaData.sideLoadCaptionsExpected,
            sideLoadCaptionsUrlFromProps:
              (i = P.coreVideoPlayerMetaData.sideLoadCaptionsUrl) != null
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
          var e = p({
            coreVideoPlayerMetaData: J.current,
            engineMetadata: I,
            state: t,
          });
          return e;
        },
        fe = { current: null },
        ge = { current: null },
        he = function (t) {
          if (R(t, me)) {
            if (t === fe.current) return;
            var e = _e(t);
            if (ge.current != null && r("deepEquals")(ge.current, e)) return;
            ((fe.current = t), (ge.current = e), N(e));
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
          alwaysShowCaptions: !!P.coreVideoPlayerMetaData.alwaysShowCaptions,
          areCaptionsAutogenerated:
            !!P.coreVideoPlayerMetaData.areCaptionsAutogenerated,
          autoLoopSuspendedRef: ve,
          captionDisplayStyle: P.coreVideoPlayerMetaData.captionDisplayStyle,
          captionsControllerRef: ee,
          debugLogId: A,
          dimensions: P.dimensions,
          engineExtrasAPI: k,
          engineMetadata: I,
          fullscreenControllerRef: Z,
          handleFatalError: be,
          handleStateMachine: ye,
          videoElementAPIRef: pe,
          videoLiveTraceRef: V,
          videoPlayerPassiveViewabilityInfo:
            P.videoPlayerPassiveViewabilityInfo,
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
              f && F("[destroyEngineParts] skip callChain:" + o.join(":"));
            else {
              ((Re = !0),
                f && F("[destroyEngineParts] begin callChain:" + o.join(":")));
              try {
                L(o);
              } finally {
                f && F("[destroyEngineParts] end callChain:" + o.join(":"));
              }
            }
          } catch (o) {
            var a = r("getErrorSafe")(o);
            try {
              var i = r("FBLogger")("comet_video_player").catching(a),
                l = P.coreVideoPlayerMetaData.videoFBID;
              (l != null && (i = i.addMetadata("COMET_VIDEO", "VIDEO_ID", l)),
                (i = i.addMetadata(
                  "COMET_VIDEO",
                  "VIDEO_IMPLEMENTATION_DEBUG_DATA",
                  JSON.stringify({
                    destroy_reason: t,
                    player_instance_key: M,
                    player_version: I.playerVersion,
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
            d(null, Z, se, Se),
            m(null, ue, Se),
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
        var e = c(t, n);
        (Se.dispatch({
          payload: { fatalError: e },
          type: "implementation_fatal_error",
        }),
          Le("implementation_fatal_error"),
          $(e));
      };
      var Ee = function (t) {
          var e = h(t),
            n = y(t),
            r = C(t),
            a = ee.current;
          (r !== C(le.current) &&
            Se.dispatch({
              payload: { inbandCaptionsAutogenerated: r },
              type: "inband_captions_autogenerated_changed",
            }),
            a != null
              ? n !== y(le.current) &&
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
          k != null &&
            t &&
            t.width > 0 &&
            t.height > 0 &&
            (k.setDimensions(t),
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
          (f && F("[cleanupVideoElement]"),
            Te != null && (Te(), (Te = null)),
            "srcObject" in t && (t.srcObject = null),
            t.removeAttribute("src"),
            s && t.load(),
            de.forEach(function (e) {
              return e.remove();
            }),
            (de.length = 0));
        },
        xe = function (t, o) {
          if (ae.current !== t) {
            (f &&
              F("[handleVideoElement] callChain:" + o.join(":"), {
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
              S(t, pe),
              n("cr:506") != null && t != null && (ie = n("cr:506")(t, A)),
              t != null)
            ) {
              (v(t, Se, de),
                Se.dispatch({ type: "implementation_video_node_mounted" }));
              var a = [].concat(o, ["handleVideoElement(non-null)"]);
              try {
                (f &&
                  F(
                    "[handleVideoElementChanged(non-null)] begin callChain:" +
                      a.join(":"),
                    { videoElementMaybe: t },
                  ),
                  T(t, a));
              } finally {
                f &&
                  F(
                    "[handleVideoElementChanged(non-null)] end callChain:" +
                      a.join(":"),
                    { videoElementMaybe: t },
                  );
              }
            } else {
              Se.dispatch({ type: "implementation_video_node_unmounted" });
              var i = [].concat(o, ["handleVideoElement(null)"]);
              try {
                (f &&
                  F(
                    "[handleVideoElementChanged(null)] begin callChain:" +
                      i.join(":"),
                    { videoElementMaybe: t },
                  ),
                  T(null, i));
              } finally {
                f &&
                  F(
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
          if ((xe(t, ["controller_set_video_element"]), t != null && e)) {
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
        Pe = P.loggingMetaData.instanceKey,
        Ne = function (t) {
          var e, n;
          if (
            ((oe.current = t.onExposedStateChanged),
            (J.current = t.coreVideoPlayerMetaData),
            !!R(Se.getCurrentState(), me))
          ) {
            if (
              (f &&
                (t.loggingMetaData.instanceKey !== Pe &&
                  (F(
                    "[handleReactPropsChanged][WARNING] instanceKey changed from " +
                      Pe +
                      " to " +
                      t.loggingMetaData.instanceKey,
                  ),
                  (Pe = t.loggingMetaData.instanceKey)),
                F("[handleReactPropsChanged]", t)),
              d((e = t.fullscreenController) != null ? e : null, Z, se, Se),
              m(
                (n = t.videoPlayerPassiveViewabilityInfo) != null ? n : null,
                ue,
                Se,
              ),
              !D(t))
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
                T(ae.current, ["handleReactEffectInit(before_mounted)"]));
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
                var t = x();
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
          R(Se.getCurrentState(), me) ||
            ((me = "mounted"),
            ce.push(
              o("RunComet").onUnload(function () {
                Le("page_unload");
              }),
            ),
            Se.dispatch({ type: "implementation_mounted" }),
            T(ae.current, ["handleReactMount"]));
        },
        Oe = function () {
          R(Se.getCurrentState(), me) &&
            ((me = "unmounted"),
            Se.dispatch({
              payload: { reason: "react_effect_cleanup" },
              type: "implementation_unmounted",
            }),
            Le("implementation_unmounted:react_effect_cleanup"));
        },
        Be = u({
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
            P.videoPlayerPassiveViewabilityInfo,
        }),
        We = o(
          "VideoPlayerImplementationStateMachine",
        ).createReactVideoElementCallbacksForStateMachine(Se, xe),
        qe = _e(Se.getInitialState()),
        Ue = f
          ? function (e, t) {
              return function () {
                F("[" + t + "] begin");
                try {
                  e();
                } finally {
                  F("[" + t + "] end");
                }
              };
            }
          : function (e, t) {
              return e;
            },
        Ve = {
          handleOnBeforeUnload: function () {
            P.coreVideoPlayerMetaData.loggingConfig
              .enablePauseAndFlushOnBeforeUnload === !0 &&
              (K == null || K.logPausedOnBeforeUnload(Se.getCurrentState()),
              z == null || z.flushLogs(!0));
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
          logFlusherToVPL: j,
          machine: Se,
          notifySubscribers: re,
          videoElementCallbacks: We,
          videoElementRefCallback: function (t) {
            (t == null && r("gkx")("17338")) ||
              xe(t, ["videoElementRefCallback"]);
          },
        };
      return (
        f && F("[created]", { engine: Ve, machine: Se, videoElementRef: ae }),
        {
          debugLog: F,
          engine: Ve,
          getCaptionsInfo: function () {
            return le.current;
          },
          getVideoElement: function () {
            return ae.current;
          },
          getVideoLiveTrace: function () {
            return V.current;
          },
          handleCaptionsInfoChange: Ee,
          handleFatalImplementationError: Ce,
          loggerToVPL: Q,
          machine: Se,
          videoElementAPIRef: pe,
        }
      );
    }
    ((l.ensureVideoElementAPI = c),
      (l.internal_createVideoPlayerImplementationExposedStateFromStateMachineState =
        p),
      (l.createVideoPlayerImplementationEngine = L));
  },
  98,
);
