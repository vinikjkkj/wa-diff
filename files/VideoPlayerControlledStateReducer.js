__d(
  "VideoPlayerControlledStateReducer",
  [
    "FBLogger",
    "VideoPlayerEmsgForStateMachine",
    "VideoPlayerImplementationErrors",
    "VideoPlayerODS",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.bufferingDetected,
        n = e.seeking,
        r = e.waitingForDomPlaying;
      return !t && !n && !r;
    }
    function s(t) {
      var n = t.bufferingDetected,
        o = t.prevPlaybackState,
        a = t.seeking,
        i = t.waitingForDomPlaying,
        l = e({ bufferingDetected: n, seeking: a, waitingForDomPlaying: i }),
        s = o;
      switch (o) {
        case "stalling":
          s = l ? "playing" : "stalling";
          break;
        case "ended":
        case "paused":
        case "playing":
          break;
        default:
          r("FBLogger")("comet_video_player").mustfix(
            "unexpected playbackState: %s",
            o,
          );
          break;
      }
      return s;
    }
    function u(e) {
      return (
        (e.loopCount > 0 && e.loopCurrent < e.loopCount) || e.loopCount === -1
      );
    }
    function c(e, t, n, a) {
      var i, l;
      switch (n.type) {
        case "host_call_pause":
        case "host_call_play":
        case "host_call_set_current_time":
        case "host_call_set_volume":
        case "host_call_set_muted":
        case "host_call_set_playback_rate":
        case "host_call_set_video_quality":
        case "host_call_set_latency_level":
          return babelHelpers.extends({}, e, {
            hostCallQueue: e.hostCallQueue.concat([n]),
          });
        case "controller_set_latency_level_requested":
        case "implementation_set_latency_level_requested":
          return babelHelpers.extends({}, e, {
            latencyLevel: n.payload.latencyLevel,
            ullIneligibilityReason: n.payload.ullIneligibilityReason,
          });
        case "dom_event_loadedmetadata":
          return babelHelpers.extends({}, e, {
            domEventsLatestPerfMs: babelHelpers.extends(
              {},
              e.domEventsLatestPerfMs,
              {
                clockMs: t.clockTimestamp,
                loadedmetadata: n.payload.domEventPerfTimestamp,
                perfMs: t.perfTimestamp,
              },
            ),
          });
        case "dom_event_loadeddata":
          return babelHelpers.extends({}, e, {
            domEventsLatestPerfMs: babelHelpers.extends(
              {},
              e.domEventsLatestPerfMs,
              {
                clockMs: t.clockTimestamp,
                loadeddata: n.payload.domEventPerfTimestamp,
                perfMs: t.perfTimestamp,
              },
            ),
          });
        case "dom_event_canplay":
          return babelHelpers.extends({}, e, {
            domEventsLatestPerfMs: babelHelpers.extends(
              {},
              e.domEventsLatestPerfMs,
              {
                canplay: n.payload.domEventPerfTimestamp,
                clockMs: t.clockTimestamp,
                perfMs: t.perfTimestamp,
              },
            ),
          });
        case "dom_event_ended":
          return babelHelpers.extends({}, e, {
            playbackState: "ended",
            waitingForDomPlaying: !1,
          });
        case "dom_event_pause":
          return e.playbackState === "ended"
            ? e
            : t.videoElementEnded === !0
              ? babelHelpers.extends({}, e, {
                  playbackState: "ended",
                  waitingForDomPlaying: !1,
                })
              : e.playbackState === "paused"
                ? e
                : babelHelpers.extends({}, e, {
                    playbackState: "paused",
                    waitingForDomPlaying: !1,
                  });
        case "dom_event_play": {
          var c = e.playbackState,
            d = c;
          switch (c) {
            case "playing":
            case "stalling":
            case "ended":
            case "paused":
              d = "stalling";
              break;
            default:
              r("FBLogger")("comet_video_player").mustfix(
                "unexpected playbackState: %s",
                c,
              );
              break;
          }
          var m = !0;
          return babelHelpers.extends({}, e, {
            playbackState: d,
            waitingForDomPlaying: m,
          });
        }
        case "dom_event_playing": {
          var p = e.bufferingDetected,
            _ = e.seeking,
            f = !1,
            g = e.playbackState;
          return babelHelpers.extends({}, e, {
            playbackState: s({
              bufferingDetected: p,
              prevPlaybackState: g,
              seeking: _,
              waitingForDomPlaying: f,
            }),
            waitingForDomPlaying: f,
          });
        }
        case "dom_event_timeupdate": {
          var h = o(
            "VideoPlayerEmsgForStateMachine",
          ).makeUpdatedActiveEmsgBoxes(
            e.allEmsgBoxes,
            t.videoElementPlayheadPosition,
            e.activeEmsgBoxes,
          );
          if (e.waitingForDomTimeUpdateAfterSeeked) {
            var y = e.bufferingDetected,
              C = e.seeking,
              b = !1,
              v = e.playbackState;
            return babelHelpers.extends({}, e, {
              activeEmsgBoxes: h,
              playbackState: s({
                bufferingDetected: y,
                prevPlaybackState: v,
                seeking: C,
                waitingForDomPlaying: b,
              }),
              waitingForDomPlaying: b,
              waitingForDomTimeUpdateAfterSeeked: !1,
            });
          }
          return babelHelpers.extends({}, e, { activeEmsgBoxes: h });
        }
        case "dom_event_seeking": {
          var S = e.playbackState,
            R = S;
          switch (S) {
            case "paused":
            case "ended":
              break;
            case "stalling":
            case "playing":
              R = "stalling";
              break;
            default:
              r("FBLogger")("comet_video_player").mustfix(
                "unexpected playbackState: %s",
                S,
              );
          }
          return babelHelpers.extends({}, e, {
            playbackState: R,
            seeking: !0,
            waitingForDomPlaying: !0,
          });
        }
        case "dom_event_seeked": {
          var L = e.bufferingDetected,
            E = e.waitingForDomPlaying,
            k = !1,
            I = e.playbackState;
          return babelHelpers.extends({}, e, {
            implementationSeekSourcePosition: null,
            playbackState: s({
              bufferingDetected: L,
              prevPlaybackState: I,
              seeking: k,
              waitingForDomPlaying: E,
            }),
            seeking: k,
            waitingForDomTimeUpdateAfterSeeked: !0,
          });
        }
        case "dom_event_error":
          return (
            n.payload.videoElementError == null &&
              o("VideoPlayerODS").bumpEntityKey(
                "comet_video_player",
                "dom_event_error.error_is_nullish",
                14,
              ),
            babelHelpers.extends({}, e, {
              playbackState: "paused",
              waitingForDomPlaying: !1,
            })
          );
        case "dom_event_play_promise_created":
          return babelHelpers.extends({}, e, {
            hostCallPlayIDLast: n.payload.hostCallPlayID,
          });
        case "dom_event_play_promise_resolved":
          return e.hostCallPlayIDLast !== n.payload.hostCallPlayID
            ? e
            : babelHelpers.extends({}, e, { hostCallPlayIDLast: null });
        case "dom_event_play_promise_rejected":
          if (e.hostCallPlayIDLast !== n.payload.hostCallPlayID) return e;
          if (a === "comet_nextgendash") {
            var T = n.payload.playPromiseRejectionReason;
            return babelHelpers.extends(
              {},
              e,
              { hostCallPlayIDLast: null },
              !(T != null && T.name === "AbortError") &&
                e.playbackState === "stalling"
                ? { playbackState: "paused", waitingForDomPlaying: !1 }
                : {},
            );
          }
          return babelHelpers.extends({}, e, {
            hostCallPlayIDLast: null,
            playbackState:
              e.playbackState === "stalling" ? "paused" : e.playbackState,
            waitingForDomPlaying: !1,
          });
        case "dom_event_durationchange": {
          if (a === "comet_nextgendash") {
            var D =
              t.videoElementEnded === !0
                ? "ended"
                : t.videoElementPaused === !0
                  ? "paused"
                  : e.playbackState;
            if (
              (e.playbackState === "stalling" ||
                e.playbackState === "playing") &&
              D !== e.playbackState
            )
              return babelHelpers.extends({}, e, {
                playbackState: D,
                waitingForDomPlaying: !1,
              });
          }
          return e;
        }
        case "implementation_host_call_queue_flushed":
          return babelHelpers.extends({}, e, { hostCallQueue: [] });
        case "implementation_host_call_failed": {
          var x = o(
            "VideoPlayerImplementationErrors",
          ).createVideoPlayerErrorFromHTMLVideoElementError({
            errorLocation: n.payload.errorLocation,
            hostCallError: n.payload.hostCallError,
            videoElementError: n.payload.videoElementError,
            videoElementNetworkState: n.payload.videoElementNetworkState,
            videoElementReadyState: n.payload.videoElementReadyState,
          });
          return babelHelpers.extends({}, e, {
            error: x,
            playbackState: "paused",
            waitingForDomPlaying: !1,
          });
        }
        case "implementation_mounted":
          return babelHelpers.extends({}, e, {
            mountState: "mounted_onscreen",
          });
        case "implementation_unmounted":
          return babelHelpers.extends({}, e, { mountState: "unmounted" });
        case "implementation_onscreen":
          return babelHelpers.extends({}, e, {
            mountState: "mounted_onscreen",
          });
        case "implementation_offscreen":
          return babelHelpers.extends({}, e, {
            mountState: "mounted_offscreen",
          });
        case "implementation_video_node_unmounted":
          return babelHelpers.extends({}, e, { hostCallPlayIDLast: null });
        case "implementation_engine_initialized": {
          var $,
            P = ($ = n.payload.streamingFormat) != null ? $ : e.streamingFormat;
          return babelHelpers.extends({}, e, {
            hostCallCanApply: !0,
            selectedVideoQuality: n.payload.selectedVideoQuality,
            streamingFormat: P,
          });
        }
        case "implementation_engine_qualities_changed": {
          var N,
            M = (N = n.payload.streamingFormat) != null ? N : e.streamingFormat;
          return babelHelpers.extends({}, e, {
            selectedVideoQuality: n.payload.selectedVideoQuality,
            streamingFormat: M,
          });
        }
        case "implementation_engine_destroyed":
          return babelHelpers.extends({}, e, { hostCallPlayIDLast: null });
        case "implementation_fatal_error":
          return babelHelpers.extends({}, e, {
            error: n.payload.fatalError,
            hostCallPlayIDLast: null,
            playbackState: "paused",
            waitingForDomPlaying: !1,
          });
        case "controller_inject_fatal_error":
          return babelHelpers.extends({}, e, {
            error: n.payload.fatalError,
            hostCallPlayIDLast: null,
            playbackState: "paused",
            waitingForDomPlaying: !1,
          });
        case "implementation_seek_requested":
          return babelHelpers.extends({}, e, {
            implementationSeekSourcePosition: n.payload.seekSourcePosition,
          });
        case "representation_changed":
          return babelHelpers.extends({}, e);
        case "controller_pause_requested":
          return e.playbackState === "ended"
            ? e
            : babelHelpers.extends({}, e, {
                lastPausedTimeMs: Date.now(),
                lastPauseReason: n.payload.reason,
                lastPlayedTimeMs: 0,
                playbackState: "paused",
                waitingForDomPlaying: !1,
                watchTimeMs:
                  e.lastPlayedTimeMs > 0
                    ? e.watchTimeMs + (Date.now() - e.lastPlayedTimeMs)
                    : e.watchTimeMs,
              });
        case "controller_play_requested":
          return e.playbackState !== "paused" && e.playbackState !== "ended"
            ? e
            : babelHelpers.extends({}, e, {
                hasPlayEverBeenRequested: !0,
                lastPlayedTimeMs:
                  e.lastPlayedTimeMs === 0 ? Date.now() : e.lastPlayedTimeMs,
                lastPlayReason: n.payload.reason,
                loopCurrent: u(e)
                  ? n.payload.reason === "loop_initiated"
                    ? e.loopCurrent + 1
                    : e.loopCurrent
                  : 0,
                playbackState: "stalling",
                waitingForDomPlaying: !0,
              });
        case "controller_seek_requested":
          return babelHelpers.extends({}, e, {
            implementationSeekSourcePosition:
              (i = t.videoElementPlayheadPosition) != null
                ? i
                : e.implementationSeekSourcePosition,
            seeking: !0,
            seekTargetPosition: n.payload.seekTargetPosition,
          });
        case "controller_quality_requested":
          return babelHelpers.extends({}, e, {
            selectedVideoQuality: n.payload.selectedVideoQuality,
          });
        case "controller_video_variant_requested":
          return babelHelpers.extends({}, e, {
            selectedVideoVariant: n.payload.selectedVideoVariant,
          });
        case "controller_set_caption_display_style_requested":
          return babelHelpers.extends({}, e, {
            captionDisplayStyle: n.payload.captionDisplayStyle,
          });
        case "controller_set_picture_in_picture_state_requested":
          return babelHelpers.extends({}, e, {
            isDesktopPictureInPicture: n.payload.isInPictureInPictureMode,
          });
        case "controller_set_caption_format_requested":
          return babelHelpers.extends({}, e, {
            captionFormat: n.payload.captionFormat,
          });
        case "controller_set_playback_rate":
          return babelHelpers.extends({}, e, {
            targetPlaybackRate: n.payload.playbackRate,
          });
        case "controller_muted_requested":
          return babelHelpers.extends({}, e, {
            lastMuteReason: n.payload.reason,
            muted: n.payload.muted,
          });
        case "controller_volume_requested":
          return babelHelpers.extends({}, e, { volume: n.payload.volume });
        case "controller_scrub_begin_requested":
          return e.scrubbing
            ? e
            : babelHelpers.extends({}, e, {
                scrubbing: !0,
                seekTargetPosition: null,
              });
        case "controller_scrub_end_requested":
          return e.scrubbing
            ? babelHelpers.extends({}, e, {
                implementationSeekSourcePosition:
                  (l = t.videoElementPlayheadPosition) != null
                    ? l
                    : e.implementationSeekSourcePosition,
                scrubbing: !1,
                seeking: n.payload.seekTargetPosition != null,
                seekTargetPosition: n.payload.seekTargetPosition,
              })
            : e;
        case "buffering_begin_requested": {
          var w = e.playbackState,
            A = w;
          switch (w) {
            case "paused":
            case "ended":
              break;
            case "playing":
            case "stalling":
              A = "stalling";
              break;
            default:
              r("FBLogger")("comet_video_player").mustfix(
                "unexpected playbackState: %s",
                w,
              );
              break;
          }
          var F = n.payload.bufferingType;
          return babelHelpers.extends({}, e, {
            bufferingDetected: !0,
            lastBufferingType: F,
            playbackState: A,
          });
        }
        case "buffering_end_requested": {
          var O = e.seeking,
            B = e.waitingForDomPlaying,
            W = !1,
            q = e.playbackState;
          return babelHelpers.extends({}, e, {
            bufferingDetected: W,
            playbackState: s({
              bufferingDetected: W,
              prevPlaybackState: q,
              seeking: O,
              waitingForDomPlaying: B,
            }),
          });
        }
        case "controller_set_captions_visible_requested": {
          var U = n.payload.captionsVisible;
          return e.captionsVisible === U
            ? e
            : babelHelpers.extends({}, e, {
                activeCaptions: U ? e.activeCaptions : null,
                captionsLocale: U ? e.captionsLocale : null,
                captionsVisible: U,
              });
        }
        case "controller_set_active_captions_requested": {
          var V,
            H,
            G = n.payload.activeCaptions,
            z = (V = G == null ? void 0 : G.rows) != null ? V : [],
            j = n.payload.captionsLocale,
            K = e.activeCaptions,
            Q = (H = K == null ? void 0 : K.rows) != null ? H : [];
          return Q.length === z.length &&
            z.every(function (e, t) {
              return Q[t] === e;
            })
            ? e
            : babelHelpers.extends({}, e, {
                activeCaptions: G,
                captionsLocale: j,
              });
        }
        case "captions_loaded":
          return babelHelpers.extends({}, e, {
            activeCaptions: e.activeCaptions,
            captionsLoaded: !0,
          });
        case "captions_unloaded":
          return babelHelpers.extends({}, e, {
            activeCaptions: null,
            captionsLoaded: !1,
            captionsLocale: null,
          });
        case "inband_captions_autogenerated_changed": {
          var X = n.payload.inbandCaptionsAutogenerated;
          return e.inbandCaptionsAutogenerated === X
            ? e
            : babelHelpers.extends({}, e, { inbandCaptionsAutogenerated: X });
        }
        case "stream_ended":
          return babelHelpers.extends({}, e, { streamEnded: !0 });
        case "stream_gone_before_start":
          return babelHelpers.extends({}, e, {
            playbackState: "ended",
            streamEnded: !0,
            waitingForDomPlaying: !1,
          });
        case "stream_interrupted":
          return babelHelpers.extends({}, e, { streamInterrupted: !0 });
        case "stream_resumed":
          return babelHelpers.extends({}, e, { streamInterrupted: !1 });
        case "seekable_ranges_changed": {
          var Y = n.payload.seekableRanges;
          return babelHelpers.extends({}, e, { seekableRanges: Y });
        }
        case "controller_set_is_live_rewind_active_requested": {
          var J = n.payload.isLiveRewindActive;
          return babelHelpers.extends({}, e, { isLiveRewindActive: J });
        }
        case "loop_count_change_requested": {
          var Z = n.payload.loopCount;
          return Z === e.loopCount
            ? e
            : babelHelpers.extends({}, e, { loopCount: Z, loopCurrent: 0 });
        }
        case "player_dimensions_changed": {
          var ee = n.payload.dimensions,
            te = ee.height,
            ne = ee.width;
          return ne === e.dimensions.width && te === e.dimensions.height
            ? e
            : babelHelpers.extends({}, e, {
                dimensions: { height: te, width: ne },
              });
        }
        case "emsg_boxes_parsed": {
          var re = o("VideoPlayerEmsgForStateMachine").makeUpdatedAllEmsgBoxes(
              e.allEmsgBoxes,
              n.payload.emsgBoxes,
            ),
            oe = o("VideoPlayerEmsgForStateMachine").makeUpdatedActiveEmsgBoxes(
              re,
              t.videoElementPlayheadPosition,
              e.activeEmsgBoxes,
            );
          return babelHelpers.extends({}, e, {
            activeEmsgBoxes: oe,
            allEmsgBoxes: re,
          });
        }
        case "register_emsg_observer": {
          var ae = new Set(e.emsgObserverTokens);
          return (
            ae.add(n.payload.token),
            babelHelpers.extends({}, e, { emsgObserverTokens: ae })
          );
        }
        case "unregister_emsg_observer": {
          var ie = new Set(e.emsgObserverTokens);
          return (
            ie.delete(n.payload.token),
            babelHelpers.extends({}, e, { emsgObserverTokens: ie })
          );
        }
        case "dom_event_progress":
          return babelHelpers.extends({}, e, {
            bufferedRanges: n.payload.bufferedRanges,
          });
        default:
          return e;
      }
    }
    l.controlledStateReducer = c;
  },
  98,
);
