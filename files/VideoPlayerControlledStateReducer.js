__d(
  "VideoPlayerControlledStateReducer",
  [
    "FBLogger",
    "VideoPlayerEmsgForStateMachine",
    "VideoPlayerImplementationErrors",
    "VideoPlayerODS",
    "gkx",
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
          var p = r("gkx")("17440"),
            _ = p ? !1 : e.bufferingDetected,
            f = p ? !1 : e.seeking,
            g = !1,
            h = e.playbackState;
          return babelHelpers.extends({}, e, {
            bufferingDetected: _,
            playbackState: s({
              bufferingDetected: _,
              prevPlaybackState: h,
              seeking: f,
              waitingForDomPlaying: g,
            }),
            seeking: f,
            waitingForDomPlaying: g,
          });
        }
        case "dom_event_timeupdate": {
          var y = o(
            "VideoPlayerEmsgForStateMachine",
          ).makeUpdatedActiveEmsgBoxes(
            e.allEmsgBoxes,
            t.videoElementPlayheadPosition,
            e.activeEmsgBoxes,
          );
          if (e.waitingForDomTimeUpdateAfterSeeked) {
            var C = e.bufferingDetected,
              b = e.seeking,
              v = !1,
              S = e.playbackState;
            return babelHelpers.extends({}, e, {
              activeEmsgBoxes: y,
              playbackState: s({
                bufferingDetected: C,
                prevPlaybackState: S,
                seeking: b,
                waitingForDomPlaying: v,
              }),
              waitingForDomPlaying: v,
              waitingForDomTimeUpdateAfterSeeked: !1,
            });
          }
          return babelHelpers.extends({}, e, { activeEmsgBoxes: y });
        }
        case "dom_event_seeking": {
          var R = e.playbackState,
            L = R;
          switch (R) {
            case "paused":
            case "ended":
              break;
            case "stalling":
            case "playing":
              L = "stalling";
              break;
            default:
              r("FBLogger")("comet_video_player").mustfix(
                "unexpected playbackState: %s",
                R,
              );
          }
          return babelHelpers.extends({}, e, {
            playbackState: L,
            seeking: !0,
            waitingForDomPlaying: !0,
          });
        }
        case "dom_event_seeked": {
          var E = e.bufferingDetected,
            k = e.waitingForDomPlaying,
            I = !1,
            T = e.playbackState;
          return babelHelpers.extends({}, e, {
            implementationSeekSourcePosition: null,
            playbackState: s({
              bufferingDetected: E,
              prevPlaybackState: T,
              seeking: I,
              waitingForDomPlaying: k,
            }),
            seeking: I,
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
          if (a === "comet_nextgendash" || a === "comet_nextgendash_wasm") {
            var D = n.payload.playPromiseRejectionReason;
            return babelHelpers.extends(
              {},
              e,
              { hostCallPlayIDLast: null },
              !(D != null && D.name === "AbortError") &&
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
          if (a === "comet_nextgendash" || a === "comet_nextgendash_wasm") {
            var x =
              t.videoElementEnded === !0
                ? "ended"
                : t.videoElementPaused === !0
                  ? "paused"
                  : e.playbackState;
            if (
              (e.playbackState === "stalling" ||
                e.playbackState === "playing") &&
              x !== e.playbackState
            )
              return babelHelpers.extends({}, e, {
                playbackState: x,
                waitingForDomPlaying: !1,
              });
          }
          return e;
        }
        case "implementation_host_call_queue_flushed":
          return babelHelpers.extends({}, e, { hostCallQueue: [] });
        case "implementation_host_call_failed": {
          var $ = o(
            "VideoPlayerImplementationErrors",
          ).createVideoPlayerErrorFromHTMLVideoElementError({
            errorLocation: n.payload.errorLocation,
            hostCallError: n.payload.hostCallError,
            videoElementError: n.payload.videoElementError,
            videoElementNetworkState: n.payload.videoElementNetworkState,
            videoElementReadyState: n.payload.videoElementReadyState,
          });
          return babelHelpers.extends({}, e, {
            error: $,
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
          var P,
            N = (P = n.payload.streamingFormat) != null ? P : e.streamingFormat;
          return babelHelpers.extends({}, e, {
            hostCallCanApply: !0,
            selectedVideoQuality: n.payload.selectedVideoQuality,
            streamingFormat: N,
          });
        }
        case "implementation_engine_qualities_changed": {
          var M,
            w = (M = n.payload.streamingFormat) != null ? M : e.streamingFormat;
          return babelHelpers.extends({}, e, {
            selectedVideoQuality: n.payload.selectedVideoQuality,
            streamingFormat: w,
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
          var A = e.playbackState,
            F = A;
          switch (A) {
            case "paused":
            case "ended":
              break;
            case "playing":
            case "stalling":
              F = "stalling";
              break;
            default:
              r("FBLogger")("comet_video_player").mustfix(
                "unexpected playbackState: %s",
                A,
              );
              break;
          }
          var O = n.payload.bufferingType;
          return babelHelpers.extends({}, e, {
            bufferingDetected: !0,
            lastBufferingType: O,
            playbackState: F,
          });
        }
        case "buffering_end_requested": {
          var B = e.seeking,
            W = e.waitingForDomPlaying,
            q = !1,
            U = e.playbackState;
          return babelHelpers.extends({}, e, {
            bufferingDetected: q,
            playbackState: s({
              bufferingDetected: q,
              prevPlaybackState: U,
              seeking: B,
              waitingForDomPlaying: W,
            }),
          });
        }
        case "controller_set_captions_visible_requested": {
          var V = n.payload.captionsVisible;
          return e.captionsVisible === V
            ? e
            : babelHelpers.extends({}, e, {
                activeCaptions: V ? e.activeCaptions : null,
                captionsLocale: V ? e.captionsLocale : null,
                captionsVisible: V,
              });
        }
        case "controller_set_active_captions_requested": {
          var H,
            G,
            z = n.payload.activeCaptions,
            j = (H = z == null ? void 0 : z.rows) != null ? H : [],
            K = n.payload.captionsLocale,
            Q = e.activeCaptions,
            X = (G = Q == null ? void 0 : Q.rows) != null ? G : [];
          return X.length === j.length &&
            j.every(function (e, t) {
              return X[t] === e;
            })
            ? e
            : babelHelpers.extends({}, e, {
                activeCaptions: z,
                captionsLocale: K,
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
          var Y = n.payload.inbandCaptionsAutogenerated;
          return e.inbandCaptionsAutogenerated === Y
            ? e
            : babelHelpers.extends({}, e, { inbandCaptionsAutogenerated: Y });
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
          var J = n.payload.seekableRanges;
          return babelHelpers.extends({}, e, { seekableRanges: J });
        }
        case "controller_set_is_live_rewind_active_requested": {
          var Z = n.payload.isLiveRewindActive;
          return babelHelpers.extends({}, e, { isLiveRewindActive: Z });
        }
        case "loop_count_change_requested": {
          var ee = n.payload.loopCount;
          return ee === e.loopCount
            ? e
            : babelHelpers.extends({}, e, { loopCount: ee, loopCurrent: 0 });
        }
        case "player_dimensions_changed": {
          var te = n.payload.dimensions,
            ne = te.height,
            re = te.width;
          return re === e.dimensions.width && ne === e.dimensions.height
            ? e
            : babelHelpers.extends({}, e, {
                dimensions: { height: ne, width: re },
              });
        }
        case "emsg_boxes_parsed": {
          var oe = o("VideoPlayerEmsgForStateMachine").makeUpdatedAllEmsgBoxes(
              e.allEmsgBoxes,
              n.payload.emsgBoxes,
            ),
            ae = o("VideoPlayerEmsgForStateMachine").makeUpdatedActiveEmsgBoxes(
              oe,
              t.videoElementPlayheadPosition,
              e.activeEmsgBoxes,
            );
          return babelHelpers.extends({}, e, {
            activeEmsgBoxes: ae,
            allEmsgBoxes: oe,
          });
        }
        case "register_emsg_observer": {
          var ie = new Set(e.emsgObserverTokens);
          return (
            ie.add(n.payload.token),
            babelHelpers.extends({}, e, { emsgObserverTokens: ie })
          );
        }
        case "unregister_emsg_observer": {
          var le = new Set(e.emsgObserverTokens);
          return (
            le.delete(n.payload.token),
            babelHelpers.extends({}, e, { emsgObserverTokens: le })
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
