__d(
  "VideoPlayerImplementationStateMachineLogger",
  [
    "CometProductAttribution",
    "FBLogger",
    "NetworkStatus",
    "PlaybackSpeedExperiments",
    "SiteData",
    "VideoMimeTypes",
    "VideoPlayerConnectionQuality",
    "VideoPlayerImplementationErrorNormalization",
    "VideoPlayerLoggerPlayerStates",
    "VideoPlayerMutedStateChange",
    "VideoPlayerStateBasedLoggingEvents.experimental",
    "emptyFunction",
    "getPlayerFormatForLogData",
    "getVideoBrowserTabId",
    "gkx",
    "justknobx",
    "mapObject",
    "performanceAbsoluteNow",
    "qex",
    "removeFromArray",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 6e4,
      m = (e = r("qex")._("1675")) != null ? e : 0,
      p = 1e3,
      _ = null,
      f = function (t) {
        return (
          (_ = _ != null ? _ : document.createElement("video")),
          "canPlayType" in _ ? _.canPlayType(t) : ""
        );
      },
      g = r("emptyFunction"),
      h = r("emptyFunction"),
      y = r("emptyFunction"),
      C = r("emptyFunction"),
      b = !1;
    r("gkx")("5551") &&
      ((b = !0),
      (g = function (t, n) {
        try {
          for (
            var e,
              r = arguments.length,
              o = new Array(r > 2 ? r - 2 : 0),
              a = 2;
            a < r;
            a++
          )
            o[a - 2] = arguments[a];
          (e = window.console).info.apply(
            e,
            [
              "[" + t + "][VideoPlayerImplementationStateMachineLogger]" + n,
            ].concat(o),
          );
        } catch (e) {}
      }),
      (h = function (t, n, r, o) {
        g(t, "[handleMetaData]", {
          loggingMetaData: r,
          loggingMetaDataPrevious: n,
          trackedChanges: o,
        });
      }),
      (y = function (t, n, r, o) {
        g(t, "[handleStateMachine]", { prevState: n, state: r, action: o });
      }),
      (C = function (t, n, r) {
        g(t, "[setAdditionalLogData]", { key: n, value: r });
      }));
    var v =
      (s = o("PlaybackSpeedExperiments").enablePlaybackSpeedLogging()) != null
        ? s
        : !1;
    function S() {
      return {
        canLogPausedOrFinishedPlaying: !1,
        canLogPlayingEvent: !0,
        debugSubscribers: [],
        dontLogPauseOnUnpausedSeeking: !1,
        errorRecoveryAttemptState: {
          currentRecoverableError: null,
          eventsLogged: 0,
          repeatCount: 0,
        },
        hasLoggedStallData: !1,
        hasLoggedStartedPlaying: !1,
        hasPausedOnce: !1,
        hasPendingRequestedPlaying: !1,
        initialSuborigin: void 0,
        inPlayStallCount200ms: 0,
        interruptCount: 0,
        interruptDuration: 0,
        interruptEndTimestamp: 0,
        interruptStartTimestamp: 0,
        isLoggingScrubbingSequence: !1,
        lastLoggedError: null,
        lastLoggedFullscreenState: !1,
        lastLoggedPlaybackSpeed: null,
        lastLoggedViewabilityPercentage: void 0,
        lastStartTimePosition: null,
        lastTrackedAudioRepresentation: null,
        lastTrackedVideoRepresentation: null,
        nextHeartbeatTime: null,
        sequenceNumber: 0,
        shouldIgnoreDomPause: !1,
        shouldIgnoreDomPlay: !1,
        shouldLogRequestedPlayingForScrub: !1,
        stallCount: 0,
        stallCount200ms: 0,
        stallCountTotal: 0,
        stallDuration: 0,
        stallDurationTotal: 0,
        stallStartTimestamp: 0,
        startStallCountTotal: 0,
        startStallDurationTotal: 0,
        vplEventSequenceNumber: 0,
        warningState: {
          eventsLoggedPerKey: new Map(),
          eventsLoggedTotal: 0,
          eventsMaxLoggedPerKey: (function () {
            try {
              return Math.max(0, r("justknobx")._("1831") || 0);
            } catch (e) {
              return 0;
            }
          })(),
          eventsMaxLoggedTotal: (function () {
            try {
              return Math.max(0, r("justknobx")._("1832") || 0);
            } catch (e) {
              return 0;
            }
          })(),
        },
      };
    }
    function R(e, t) {
      return t === "muted" ||
        t === "unmuted" ||
        t === "started_playing" ||
        t === "caption_change" ||
        t === "unpaused"
        ? e.controlledState.captionsVisible
          ? "on"
          : "off"
        : void 0;
    }
    function L(e) {
      var t = new Map(),
        n = e.initialLoggingMetaData,
        a = e.initialCoreVideoPlayerMetaData,
        i = n,
        l = a,
        s = [],
        _ = S(),
        L = new Set(
          r("VideoPlayerStateBasedLoggingEvents.experimental")
            .StateBasedLoggingEventNames,
        );
      function E(e) {
        return (
          _.debugSubscribers.push(e),
          function () {
            r("removeFromArray")(_.debugSubscribers, e);
          }
        );
      }
      function k(e) {
        _.debugSubscribers.forEach(function (t) {
          return t(e);
        });
      }
      function I(e) {
        var t = _.stallStartTimestamp;
        if (t > 0) {
          ((_.stallCount += 1),
            (_.stallCountTotal += 1),
            _.hasPendingRequestedPlaying && (_.startStallCountTotal += 1));
          var n = e - t,
            r = n > 200;
          ((_.stallDurationTotal += n),
            (_.stallDuration += n),
            (_.stallCount200ms += r ? 1 : 0),
            (_.inPlayStallCount200ms +=
              r && !_.hasPendingRequestedPlaying ? 1 : 0),
            _.hasPendingRequestedPlaying && (_.startStallDurationTotal += n));
        }
      }
      function T(e, t) {
        var n =
            e.uncontrolledState.videoElementPlayheadPosition == null
              ? null
              : e.uncontrolledState.videoElementPlayheadPosition,
          r = null;
        switch (t) {
          case "paused":
          case "cancelled_requested_playing":
          case "finished_playing":
          case "heart_beat":
          case "playback_speed_changed":
          case "representation_ended":
            r = _.lastStartTimePosition;
            break;
          case "scrubbed":
            r = n;
            break;
          default:
            break;
        }
        switch (t) {
          case "paused":
          case "cancelled_requested_playing":
          case "finished_playing":
          case "scrubbed":
            _.lastStartTimePosition = null;
            break;
          case "started_playing":
          case "unpaused":
          case "heart_beat":
          case "playback_speed_changed":
          case "representation_ended":
            _.lastStartTimePosition = n;
            break;
          default:
            break;
        }
        return { video_last_start_time_position: r };
      }
      function D(e, t) {
        var n = t.uncontrolledState.clockTimestamp,
          r = e.controlledState.streamInterrupted,
          o = t.controlledState.streamInterrupted;
        !r && o
          ? (_.interruptStartTimestamp = n)
          : r &&
            !o &&
            _.interruptStartTimestamp > 0 &&
            ((_.interruptEndTimestamp = n),
            (_.interruptCount += 1),
            (_.interruptDuration +=
              _.interruptEndTimestamp - _.interruptStartTimestamp));
      }
      function x(e, t, n) {
        var r = t.uncontrolledState.clockTimestamp,
          o = e.controlledState.playbackState,
          a = t.controlledState.playbackState;
        if (
          (o !== "stalling" &&
            a === "stalling" &&
            (k("stall_start"), (_.stallStartTimestamp = r)),
          o === "stalling" && a !== "stalling")
        ) {
          var i = 0;
          ((n.type === "dom_event_playing" ||
            n.type === "buffering_end_requested") &&
            n.payload.domEventPerfTimestamp != null &&
            (i = Math.max(
              t.uncontrolledState.perfTimestamp -
                n.payload.domEventPerfTimestamp,
              0,
            )),
            I(t.uncontrolledState.clockTimestamp - i),
            (_.stallStartTimestamp = 0),
            k("stall_end"));
        }
      }
      function $(e, t, n) {
        if (_.interruptCount > 0 && _.interruptDuration > 0) {
          var r = {
            interrupt_count: _.interruptCount,
            interrupt_time: _.interruptDuration,
          };
          return (
            (_.interruptCount = 0),
            (_.interruptDuration = 0),
            (_.interruptStartTimestamp = 0),
            (_.interruptEndTimestamp = 0),
            r
          );
        }
        return { interrupt_count: null, interrupt_time: null };
      }
      function P(e, t, n) {
        var r = {
            stall_count: null,
            stall_count_200_ms: null,
            stall_time: null,
          },
          o = t.uncontrolledState.clockTimestamp,
          a = function () {
            var e = {
              stall_count: _.stallCount,
              stall_count_200_ms: _.stallCount200ms,
              stall_time: _.stallDuration,
            };
            return (
              (_.stallCount = 0),
              (_.stallCount200ms = 0),
              (_.stallDuration = 0),
              (_.stallStartTimestamp = 0),
              e
            );
          },
          i = e.controlledState.playbackState,
          l = t.controlledState.playbackState;
        switch (
          (i !== "stalling" && l === "stalling" && (_.stallStartTimestamp = o),
          n)
        ) {
          case "started_playing":
          case "unpaused":
          case "finished_playing":
          case "paused":
          case "cancelled_requested_playing":
          case "representation_ended":
            (I(t.uncontrolledState.clockTimestamp), (r = a()));
            break;
          case "heart_beat":
            t.controlledState.playbackState !== "stalling" &&
              (I(t.uncontrolledState.clockTimestamp), (r = a()));
            break;
          default:
            break;
        }
        return r;
      }
      function N(e, t, n) {
        var r =
          t.controlledState.playbackState === "paused" &&
          e.controlledState.playbackState === "stalling";
        return n > 0 && (t.controlledState.playbackState === "stalling" || r);
      }
      function M(e, t) {
        var n = e.current,
          r = null;
        switch (t) {
          case "finished_playing":
          case "paused":
          case "heart_beat":
            return (
              n && (r = n.getAndFlushTracedFrames()),
              r != null ? JSON.stringify(r) : null
            );
          default:
            return null;
        }
      }
      function w(e) {
        var t = e.controlledState.playbackState;
        switch (t) {
          case "playing":
          case "stalling":
            return "playing";
          case "paused":
            return "paused";
          case "ended":
            return "finished";
          default:
            return "unknown";
        }
      }
      function A(e) {
        switch (e) {
          case "normal":
            return "normal";
          case "low":
            return "low";
          case "ultra-low":
            return "ultra_low";
          default:
            return null;
        }
      }
      function F() {
        return {
          state: _.hasLoggedStartedPlaying
            ? r("VideoPlayerLoggerPlayerStates").UNPAUSED
            : r("VideoPlayerLoggerPlayerStates").STARTED,
        };
      }
      function O(e) {
        var t, n;
        if (e != null && e.v2 && (e == null ? void 0 : e.v2.length) > 0) {
          var r = e == null ? void 0 : e.v2,
            a = r[r.length - 1];
          return [a.class, a.module]
            .map(o("CometProductAttribution").filterEntryValue)
            .join(":");
        }
        return (t =
          e == null || (n = e.v2) == null
            ? void 0
            : n
                .map(function (e) {
                  return [e.class, e.module]
                    .map(o("CometProductAttribution").filterEntryValue)
                    .join(":");
                })
                .join(";")) != null
          ? t
          : "";
      }
      function B(i) {
        var l,
          c,
          d,
          m,
          p,
          f,
          h,
          y,
          C,
          S = i.eventType,
          E = i.logDataOverrides,
          k = i.prevState,
          I = i.state,
          D = T(I, S),
          x = D.video_last_start_time_position,
          F = P(k, I, S),
          B = F.stall_count,
          W = F.stall_count_200_ms,
          q = F.stall_time,
          U = $(k, I, S),
          V = U.interrupt_count,
          H = U.interrupt_time,
          G = M(e.videoLiveTraceRef, S),
          z = [],
          j = e.initialCoreVideoPlayerMetaData.autoplayGatingResult;
        j && z.push(j);
        var K =
            S === "entered_fs"
              ? !0
              : S === "exited_fs"
                ? !1
                : _.lastLoggedFullscreenState,
          Q = r("getPlayerFormatForLogData")(
            {
              isDesktopPictureInPicture:
                (l = I.controlledState.isDesktopPictureInPicture) != null
                  ? l
                  : !1,
              isFullscreen: K,
            },
            a.playerFormat,
          ),
          X = I.uncontrolledState.viewabilityPercentage,
          Y = !!I.uncontrolledState.isFBIsLiveTemplated,
          J = !!I.uncontrolledState.isFBWasLive,
          Z = I.uncontrolledState.videoElementPlaybackRate,
          ee = Z == null || Z === 0 ? _.lastLoggedPlaybackSpeed : Z,
          te = e.initialLoggingMetaData.productAttribution;
        if (Q === "watch_scroll" && te && te.v2) {
          var ne,
            re = {
              0: babelHelpers.extends({}, te[0]),
              v2: [babelHelpers.extends({}, te.v2[0])],
            },
            oe =
              (ne = n.productAttribution) == null || (ne = ne.v2) == null
                ? void 0
                : ne[0];
          if (oe) {
            var ae = re.v2[0];
            ((ae.class = oe.class),
              (ae.scope_id = oe.scope_id),
              (ae.ts = oe.ts));
          }
          te = re;
        }
        var ie = null,
          le = null;
        ((ie =
          te != null
            ? o("CometProductAttribution").minifyProductAttributionV2(te)
            : null),
          (le = te != null ? O(te) : null));
        var se = N(k, I, q != null ? q : 0),
          ue = {
            access_token: e.initialLoggingMetaData.accessToken,
            ad_client_token: a.adClientToken,
            attribution_id:
              te != null && Object.prototype.hasOwnProperty.call(te, "0")
                ? JSON.stringify({ 0: te[0] })
                : null,
            attribution_id_v2: ie,
            attribution_id_v2_root: le,
            audio_only: a.audioOnly,
            audio_representation_id: I.uncontrolledState.audioRepresentationID,
            autoplay_eligible:
              e.initialCoreVideoPlayerMetaData.canAutoplay === "allow",
            autoplay_failure_reasons: JSON.stringify(z),
            autoplay_setting: e.initialCoreVideoPlayerMetaData.autoplaySetting,
            available_qualities: I.uncontrolledState.availableQualities.length,
            broadcaster_origin:
              e.initialCoreVideoPlayerMetaData.broadcasterOrigin,
            browser_tab_id: r("getVideoBrowserTabId")(),
            caption_state: R(I, S),
            client_latency_setting: A(I.controlledState.latencyLevel),
            current_playback_speed: v ? ee : null,
            current_viewability_percentage: X,
            dash_perf_logging_enabled:
              a.VideoPlayerShakaPerformanceLoggerClass != null &&
              a.VideoPlayerShakaPerformanceLoggerClass.isEnabled(),
            data_connection_quality: o("VideoPlayerConnectionQuality").evaluate(
              function () {
                return I.uncontrolledState.estimatedBandwidth;
              },
            ),
            downstream_share_origin_uri:
              (c = n.downstreamShareSignalTracking) == null
                ? void 0
                : c.downstream_share_session_origin_uri,
            downstream_share_start_time:
              (d = n.downstreamShareSignalTracking) == null
                ? void 0
                : d.downstream_share_session_start_time,
            downstream_share_visit_uuid:
              (m = n.downstreamShareSignalTracking) == null
                ? void 0
                : m.downstream_share_session_id,
            dropped_frame_count:
              I.uncontrolledState.videoElementDroppedFrameCount,
            external_log_id: a.externalLogID,
            external_log_type: a.externalLogType,
            fb_manifest_identifier: I.uncontrolledState.manifestIdentifier,
            frame_events: G,
            interrupt_count: V,
            interrupt_time: H,
            is_abr_enabled: I.isAbrEnabled,
            is_fbms: I.uncontrolledState.isFBMS,
            is_live_video_rewound: I.controlledState.isLiveRewindActive,
            is_mixed_codec_manifest: I.uncontrolledState.isMixedCodecManifest,
            is_pip: I.controlledState.isDesktopPictureInPicture,
            is_predictive_playback: I.uncontrolledState.isPredictiveDash,
            is_sound_on: !I.controlledState.muted,
            is_stalling: se,
            is_templated_manifest: Y || J,
            last_viewability_percentage: _.lastLoggedViewabilityPercentage,
            mpd_validation_errors: I.uncontrolledState.mpdValidationErrors,
            network_connected: I.uncontrolledState.networkConnected,
            playback_caption_format: I.controlledState.captionFormat,
            playback_caption_locale: I.controlledState.captionsLocale,
            playback_duration: I.uncontrolledState.videoElementDuration,
            playback_is_broadcast:
              e.initialCoreVideoPlayerMetaData.isVideoBroadcast,
            playback_is_drm:
              !!e.initialCoreVideoPlayerMetaData.graphQLVideoDRMInfo,
            playback_is_live_streaming:
              e.initialCoreVideoPlayerMetaData.isLiveStreaming,
            player_format: Q,
            player_instance_key: n.instanceKey,
            player_origin: a.playerOriginOverride,
            player_state: w(I),
            player_suborigin: a.subOrigin,
            player_version: I.playerVersion,
            projection: I.uncontrolledState.videoProjection,
            representation_id: I.uncontrolledState.videoRepresentationID,
            source_VPL_LOGGING_HACK: a.source_VPL_LOGGING_HACK,
            stall_count: B,
            stall_count_200_ms: W,
            stall_time: q,
            streaming_format: I.controlledState.streamingFormat,
            total_frame_count: I.uncontrolledState.videoElementTotalFrameCount,
            tracking_data_encrypted:
              e.initialLoggingMetaData.trackingDataEncrypted,
            tracking_nodes: e.initialLoggingMetaData.trackingNodes,
            v2_heart_beat: r("gkx")("24377") && S === "heart_beat" ? !0 : null,
            video_bandwidth: I.uncontrolledState.estimatedBandwidth,
            video_buffer_end_position:
              I.uncontrolledState.videoElementLastBufferEndPosition,
            video_id: a.videoFBID,
            video_last_start_time_position: x,
            video_play_reason: I.controlledState.lastPlayReason,
            video_player_height: (p = n.dimensions) == null ? void 0 : p.height,
            video_player_width: (f = n.dimensions) == null ? void 0 : f.width,
            video_time_position:
              I.uncontrolledState.videoElementPlayheadPosition,
            web_client_revision: r("SiteData").client_revision,
          },
          ce = L.has(S) ? ++_.sequenceNumber : null,
          de = {
            event_seq_num: ++_.vplEventSequenceNumber,
            seq_num: ce,
            time_ms: Date.now(),
            vpts: (u || (u = r("performanceAbsoluteNow")))(),
          },
          me = {};
        t.forEach(function (e, t) {
          me[t] = e;
        });
        var pe = a.loggingToVPLAdditionalData,
          _e = babelHelpers.extends({}, pe, me),
          fe = babelHelpers.extends({}, _e, ue, E, de),
          ge = (h = _.initialSuborigin) != null ? h : a.subOrigin,
          he = (y = fe.source_VPL_LOGGING_HACK) != null ? y : ge,
          ye = (C = a.initialTracePolicy) != null ? C : a.routeTracePolicy,
          Ce = {
            eventType: S,
            logData: fe,
            routeTracePolicy: ye,
            source_VPL_LOGGING_HACK: he,
          };
        (s.push(Ce),
          _.initialSuborigin == null && ge != null && (_.initialSuborigin = ge),
          (_.lastLoggedFullscreenState = K),
          (_.lastLoggedPlaybackSpeed = ee),
          S === "viewability_changed" &&
            (_.lastLoggedViewabilityPercentage = X),
          b &&
            g(e.debugLogId, "[_push] " + S, {
              loggedEvent: Ce,
              loggerEventsLength: s.length,
              loggingState: JSON.stringify(_),
            }));
      }
      var W = {};
      function q(e, t, n) {
        return (
          B({
            eventType: "requested_playing",
            logDataOverrides: babelHelpers.extends({}, n, F()),
            prevState: e,
            state: t,
          }),
          (_.hasPendingRequestedPlaying = !0),
          (_.canLogPausedOrFinishedPlaying = !0),
          W
        );
      }
      function U(e, t, n) {
        return _.canLogPausedOrFinishedPlaying
          ? _.hasPendingRequestedPlaying
            ? (V(e, t, n),
              (_.canLogPausedOrFinishedPlaying = !1),
              (_.hasPendingRequestedPlaying = !1),
              W)
            : (B({
                eventType: "paused",
                logDataOverrides: babelHelpers.extends({}, n, {
                  error_user_info: JSON.stringify({
                    is_document_hidden: t.uncontrolledState.isDocumentHidden,
                  }),
                }),
                prevState: e,
                state: t,
              }),
              (_.canLogPausedOrFinishedPlaying = !1),
              (_.hasPendingRequestedPlaying = !1),
              W)
          : W;
      }
      function V(e, t, n) {
        var r = t.uncontrolledState.liveTraceContext,
          o = babelHelpers.extends({}, n, F(), {
            live_trace_source_id: r ? r.sourceId : void 0,
            live_trace_stream_id: r ? r.streamId : void 0,
            live_trace_stream_type: r ? r.streamType : void 0,
          });
        return (
          B({
            eventType: "cancelled_requested_playing",
            logDataOverrides: o,
            prevState: e,
            state: t,
          }),
          W
        );
      }
      function H(e, t, n) {
        if (
          n.type === "dom_event_play_promise_rejected" &&
          n.payload.hostCallPlayID === e.controlledState.hostCallPlayIDLast &&
          t.controlledState.hostCallPlayIDLast == null &&
          _.hasPendingRequestedPlaying
        ) {
          var r = n.payload.playPromiseRejectionReason;
          return r != null && r.name === "NotAllowedError"
            ? (V(e, t, { debug_reason: "not_allowed" }), W)
            : (t.playerVersion !== "comet_nextgendash" &&
                r != null &&
                r.name === "AbortError" &&
                V(e, t, { debug_reason: "aborted" }),
              W);
        } else return W;
      }
      function G(e, t, n) {
        if (
          (n.type === "controller_play_requested" ||
            (n.type === "dom_event_play" && !_.shouldIgnoreDomPlay)) &&
          e.controlledState.playbackState !== t.controlledState.playbackState
        ) {
          var r = t.uncontrolledState.liveTraceContext,
            o = r
              ? {
                  live_trace_source_id: r.sourceId,
                  live_trace_stream_id: r.streamId,
                  live_trace_stream_type: r.streamType,
                }
              : null;
          return (q(e, t, o), W);
        } else return W;
      }
      function z(e, t, n) {
        if (
          e.controlledState.playbackState === "stalling" &&
          t.controlledState.playbackState === "playing" &&
          _.canLogPlayingEvent
        ) {
          var r = t.uncontrolledState.liveTraceContext,
            o = r
              ? {
                  live_trace_source_id: r.sourceId,
                  live_trace_stream_id: r.streamId,
                  live_trace_stream_type: r.streamType,
                }
              : null;
          return (
            B({
              eventType: _.hasLoggedStartedPlaying
                ? "unpaused"
                : "started_playing",
              logDataOverrides: o,
              prevState: e,
              state: t,
            }),
            (_.hasLoggedStartedPlaying = !0),
            (_.canLogPlayingEvent = !1),
            (_.hasPendingRequestedPlaying = !1),
            W
          );
        } else return W;
      }
      function j(e, t, n) {
        var r = t.controlledState.playbackState,
          o = e.controlledState.playbackState;
        return n.type === "controller_scrub_begin_requested" &&
          !e.controlledState.scrubbing &&
          r !== "paused" &&
          r !== "ended"
          ? (U(e, t), (_.isLoggingScrubbingSequence = !0), W)
          : !e.controlledState.seeking &&
              t.controlledState.seeking &&
              !_.isLoggingScrubbingSequence &&
              r !== "paused" &&
              r !== "ended" &&
              !_.hasPendingRequestedPlaying
            ? (U(e, t), (_.shouldLogRequestedPlayingForScrub = !0), W)
            : n.type === "controller_scrub_end_requested" &&
                e.controlledState.scrubbing &&
                r !== "paused" &&
                r !== "ended"
              ? (q(e, t, { video_time_position: n.payload.seekTargetPosition }),
                W)
              : (e.controlledState.seeking &&
                  !t.controlledState.seeking &&
                  (_.shouldLogRequestedPlayingForScrub &&
                    r !== "paused" &&
                    r !== "ended" &&
                    q(e, t),
                  B({ eventType: "scrubbed", prevState: e, state: t }),
                  (_.isLoggingScrubbingSequence = !1),
                  (_.shouldLogRequestedPlayingForScrub = !1),
                  o !== "paused" &&
                    o !== "ended" &&
                    (_.canLogPlayingEvent = !0)),
                W);
      }
      function K(e, t, n) {
        return (
          e.controlledState.playbackState !== t.controlledState.playbackState &&
            t.controlledState.playbackState === "ended" &&
            _.canLogPausedOrFinishedPlaying &&
            (B({ eventType: "finished_playing", prevState: e, state: t }),
            (_.canLogPausedOrFinishedPlaying = !1)),
          W
        );
      }
      function Q(e, t, n) {
        return (
          (n.type === "controller_pause_requested" ||
            (n.type === "dom_event_pause" && !_.shouldIgnoreDomPause)) &&
            e.controlledState.playbackState !==
              t.controlledState.playbackState &&
            U(e, t, { debug_reason: "paused" }),
          W
        );
      }
      function X(e, t, n) {
        var r = t.controlledState.playbackState;
        return (
          r !== "paused" &&
            r !== "ended" &&
            (n.type === "implementation_video_node_unmounted"
              ? U(e, e, { debug_reason: "unloaded" })
              : (n.type === "implementation_unmounted" ||
                  n.type === "implementation_engine_destroy_requested") &&
                U(e, t, { debug_reason: "unloaded" })),
          W
        );
      }
      function Y(e, t, n) {
        if (n.type === "implementation_engine_representation_blocked") {
          var r = n.payload.blockedRepresentationID;
          B({
            eventType: "video_playback_fallback",
            logDataOverrides: { representation_id: r },
            prevState: e,
            state: t,
          });
        }
        return W;
      }
      function J(e, t, n) {
        var a = t.controlledState.muted,
          i = t.controlledState.volume,
          l = e.controlledState.muted,
          s = e.controlledState.volume,
          u = o("VideoPlayerMutedStateChange").getVideoPlayerMutedStateChange({
            currMuted: a,
            currVolume: i,
            prevMuted: l,
            prevVolume: s,
          }),
          c = { current_volume: Math.round(i * 100) };
        switch (u) {
          case "muted":
            return (
              B({
                eventType: "muted",
                logDataOverrides: c,
                prevState: e,
                state: t,
              }),
              W
            );
          case "unmuted":
            return (
              B({
                eventType: "unmuted",
                logDataOverrides: c,
                prevState: e,
                state: t,
              }),
              W
            );
          case null:
            return s < i
              ? (B({
                  eventType: "volume_increase",
                  logDataOverrides: c,
                  prevState: e,
                  state: t,
                }),
                W)
              : (s > i &&
                  B({
                    eventType: "volume_decrease",
                    logDataOverrides: c,
                    prevState: e,
                    state: t,
                  }),
                W);
          default:
            return (
              r("FBLogger")("comet_video_player").mustfix(
                "Unexpected mutedStateChange %s",
                u,
              ),
              W
            );
        }
      }
      function Z(e, t, n) {
        var r = t.uncontrolledState.videoRepresentationID,
          o = _.lastTrackedVideoRepresentation,
          a = t.uncontrolledState.audioRepresentationID,
          i = _.lastTrackedAudioRepresentation,
          l = t.controlledState.playbackState,
          s = t.controlledState.seeking;
        if (!s && l !== "paused" && l !== "ended" && o != null && o !== r) {
          var u = t.uncontrolledState.availableVideoTracks.find(function (e) {
              return e.id === t.uncontrolledState.videoRepresentationID;
            }),
            c = t.uncontrolledState.availableVideoTracks.find(function (e) {
              return e.id === _.lastTrackedVideoRepresentation;
            });
          (B({
            eventType: "representation_ended",
            logDataOverrides: {
              next_quality_label: u == null ? void 0 : u.qualityLabel,
              next_representation_id: u == null ? void 0 : u.id,
              next_video_codecs: u == null ? void 0 : u.codec,
              quality_label: c == null ? void 0 : c.qualityLabel,
              representation_id: c == null ? void 0 : c.id,
              video_codecs: c == null ? void 0 : c.codec,
            },
            prevState: e,
            state: t,
          }),
            (_.lastTrackedVideoRepresentation = r),
            k("quality_change"));
        } else o == null && o !== r && (_.lastTrackedVideoRepresentation = r);
        return (
          !s && l !== "paused" && l !== "ended" && i != null && i !== a
            ? (B({
                eventType: "representation_ended",
                logDataOverrides: {
                  audio_representation_id: i,
                  next_representation_id: a,
                },
                prevState: e,
                state: t,
              }),
              (_.lastTrackedAudioRepresentation = a),
              k("audio_change"))
            : i == null && i !== a && (_.lastTrackedAudioRepresentation = a),
          W
        );
      }
      function ee(e, t, o) {
        var i =
          e.controlledState.error === o
            ? babelHelpers.extends({}, e, {
                controlledState: babelHelpers.extends({}, e.controlledState, {
                  error: { $ref: "$.player.lastError" },
                }),
              })
            : e;
        e.uncontrolledState.videoElementError != null &&
          (i = babelHelpers.extends({}, i, {
            uncontrolledState: babelHelpers.extends({}, i.uncontrolledState, {
              videoElementError: {
                code: e.uncontrolledState.videoElementError.code,
                message: e.uncontrolledState.videoElementError.message,
              },
            }),
          }));
        var l = t;
        {
          var s =
            typeof t.payload == "object" && t.payload != null
              ? t.payload
              : null;
          if (s != null) {
            var u = {};
            (Object.keys(s).forEach(function (e) {
              var t = s[e];
              t === o ? (u[e] = { $ref: "$.player.lastError" }) : (u[e] = t);
            }),
              (l = babelHelpers.extends({}, t, { payload: u })));
          }
        }
        return {
          currentVideo: {
            audioStreamId: e.uncontrolledState.audioRepresentationID,
            dashAudioFormat: void 0,
            hasHD: void 0,
            hasRateLimit: void 0,
            hasSubtitles: e.controlledState.captionsLoaded,
            isDrm: !!a.graphQLVideoDRMInfo,
            isHD: void 0,
            isLiveStream: a.isLiveStreaming,
            isRateLimited: void 0,
            liveManifestUrl: void 0,
            projection: e.uncontrolledState.videoProjection,
            resourceUrl: void 0,
            streamId: e.uncontrolledState.videoRepresentationID,
            streamType: e.controlledState.streamingFormat,
            tagHD: void 0,
            tagSD: void 0,
            videoID: a.videoFBID,
          },
          player: {
            canPlayType: (c || (c = r("mapObject")))(r("VideoMimeTypes"), f),
            dimensions: n.dimensions
              ? { height: n.dimensions.height, width: n.dimensions.width }
              : null,
            droppedFrames: e.uncontrolledState.videoElementDroppedFrameCount,
            initializationTime: void 0,
            initializationTimestamp: void 0,
            inPlayStallCount: void 0,
            inPlayStallTime: void 0,
            interruptCount: void 0,
            interruptTime: void 0,
            lastError: o,
            loggedError:
              _.lastLoggedError === o
                ? { $ref: "$.player.lastError" }
                : _.lastLoggedError,
            stallCount: _.stallCount,
            stallTime: _.stallDuration,
            state: w(e),
            totalFrames: e.uncontrolledState.videoElementTotalFrameCount,
            version: e.playerVersion,
            videoSource: void 0,
            viewabilityPercentage: e.uncontrolledState.viewabilityPercentage,
          },
          playerStateMachine: { action: l, state: i },
        };
      }
      function te(e) {
        var t = e.errorMessageFormat,
          n = e.errorName,
          r = e.errorCode == null || e.errorCode === "" ? n : e.errorCode,
          o = n + "#" + r + ": " + re(t);
        return o;
      }
      function ne(e, t, n, r) {
        var a = ee(e, t, n),
          i = n.errorMessageFormat,
          l = n.errorName,
          s = n.errorType,
          u = n.url,
          c = n.errorCode == null || n.errorCode === "" ? l : n.errorCode;
        return {
          error: l,
          error_code: c,
          error_description: i,
          error_domain: l,
          error_type:
            s != null
              ? s
              : o(
                  "VideoPlayerImplementationErrorNormalization",
                ).getErrorTypeFromErrorName(l, i),
          error_user_info: JSON.stringify(babelHelpers.extends({}, a, r)),
          resource_url: u,
        };
      }
      var re = function (t) {
        return t.replace(/([0-9]{2,})/g, function (e) {
          for (var t = ""; t.length < e.length; ) t += "#";
          return t;
        });
      };
      function oe(e, t, n) {
        if (r("justknobx")._("3727")) return W;
        if (n.type === "implementation_warning") {
          var o,
            a = n.payload.warningError,
            i = te(a),
            l = _.warningState.eventsLoggedTotal,
            s = (o = _.warningState.eventsLoggedPerKey.get(i)) != null ? o : 0;
          if (
            l < _.warningState.eventsMaxLoggedTotal &&
            s < _.warningState.eventsMaxLoggedPerKey
          ) {
            (_.warningState.eventsLoggedTotal++,
              _.warningState.eventsLoggedPerKey.set(i, s + 1));
            var u = ne(t, n, a, {
              warning: { loggedPerKey: s + 1, loggedTotal: l + 1 },
            });
            B({
              eventType: "player_warning",
              logDataOverrides: babelHelpers.extends({}, F(), u),
              prevState: e,
              state: t,
            });
          }
        }
        return W;
      }
      function ae(e, t, n) {
        var r = t.controlledState.error;
        if (r != null && r !== _.lastLoggedError && r.errorCode !== "410") {
          var o = ne(t, n, r);
          (B({
            eventType: "error",
            logDataOverrides: babelHelpers.extends({}, F(), o),
            prevState: e,
            state: t,
          }),
            (_.lastLoggedError = r));
        }
        return W;
      }
      function ie(e, t, n) {
        var r = _.errorRecoveryAttemptState.currentRecoverableError;
        if (r != null) {
          var o = ne(t, n, r);
          (_.errorRecoveryAttemptState.eventsLogged++,
            (_.errorRecoveryAttemptState.repeatCount = 0),
            B({
              eventType: "error_recovery_attempt",
              logDataOverrides: babelHelpers.extends({}, o),
              prevState: e,
              state: t,
            }));
        }
        return W;
      }
      function le(e, t, n) {
        if (
          n.type === "error_recovery_attempt" &&
          _.errorRecoveryAttemptState.eventsLogged < p
        ) {
          var o = _.errorRecoveryAttemptState.currentRecoverableError,
            a = n.payload.recoverableError;
          if (
            a != null &&
            a.errorName === "OZ_NETWORK" &&
            !r("NetworkStatus").isOnline()
          )
            return W;
          ((_.errorRecoveryAttemptState.currentRecoverableError = a),
            o == null ||
            o.errorName !== a.errorName ||
            o.errorCode !== a.errorCode
              ? ie(e, t, n)
              : (_.errorRecoveryAttemptState.repeatCount++,
                _.errorRecoveryAttemptState.repeatCount > m && ie(e, t, n)));
        }
        return W;
      }
      function se(e, t, n) {
        if (!v) return W;
        var r = t.uncontrolledState.videoElementPlaybackRate;
        return (
          n.type === "dom_event_ratechange" &&
            _.lastLoggedPlaybackSpeed != null &&
            r !== 0 &&
            r !== _.lastLoggedPlaybackSpeed &&
            B({ eventType: "playback_speed_changed", prevState: e, state: t }),
          W
        );
      }
      function ue(e, t, n) {
        var r = t.controlledState.playbackState;
        r === "paused" || r === "ended"
          ? (_.nextHeartbeatTime = null)
          : r !== "stalling" &&
            _.nextHeartbeatTime == null &&
            (_.nextHeartbeatTime = Date.now() + d);
        var o = _.nextHeartbeatTime;
        if (o != null) {
          var a = Date.now();
          a >= o &&
            (r !== "stalling" &&
              B({ eventType: "heart_beat", prevState: e, state: t }),
            (_.nextHeartbeatTime = a + d));
        }
        return W;
      }
      function ce(e, t, n) {
        return (
          n.type === "implementation_mounted" &&
            B({ eventType: "player_loaded", prevState: e, state: t }),
          W
        );
      }
      function de(e, t, n) {
        B({
          eventType: n ? "entered_fs" : "exited_fs",
          prevState: e,
          state: t,
        });
      }
      function me(e, t, n) {
        return (
          a.playerFormat !== l.playerFormat &&
            B({ eventType: "player_format_changed", prevState: e, state: t }),
          W
        );
      }
      function pe(e, t, n) {
        if (n.type !== "notify_fullscreen_changed") return W;
        var r = _.lastLoggedFullscreenState,
          o = t.uncontrolledState.isFullscreen;
        return r !== !0 && o === !0
          ? (de(e, t, o), W)
          : (r === !0 && o === !1 && de(e, t, o), W);
      }
      function _e(e, t, n) {
        var o = a,
          i = o.adClientToken;
        if ((i == null || i === "") && r("gkx")("24380")) return W;
        var l = t.controlledState.playbackState,
          s = _.lastLoggedViewabilityPercentage,
          u = t.uncontrolledState.viewabilityPercentage;
        return (
          l !== "paused" &&
            l !== "ended" &&
            s != null &&
            s !== u &&
            B({ eventType: "viewability_changed", prevState: e, state: t }),
          W
        );
      }
      function fe(e, t, n) {
        return (
          n.type === "controller_set_captions_visible_requested" &&
            B({ eventType: "caption_change", prevState: e, state: t }),
          W
        );
      }
      function ge(t) {
        if (((i = n), (l = a), t.type === "notify_logging_metadata_change")) {
          var r = t.payload,
            o = r.coreVideoPlayerMetaData,
            s = r.loggingMetaData;
          if (b) {
            var u = o.initialTracePolicy !== a.initialTracePolicy;
            h(e.debugLogId, n, s, { initialTracePolicyChanged: u });
          }
          ((n = s), (a = o));
        }
      }
      return {
        addDebugSubscriber: function (t) {
          return E(t);
        },
        consumeLoggerEvents: function () {
          var t = s.splice(0);
          return (
            b &&
              t.length > 0 &&
              g(
                e.debugLogId,
                "[consumeLoggerEvents] (" + t.length + " events)",
                t,
              ),
            t
          );
        },
        getLoggerState: function () {
          return _;
        },
        handleStateMachine: function (n, r, o) {
          ge(o);
          var t = r.controlledState.playbackState;
          (x(n, r, o), D(n, r));
          var a = [
            me,
            pe,
            _e,
            H,
            G,
            j,
            z,
            K,
            Q,
            Y,
            J,
            X,
            ce,
            fe,
            Z,
            oe,
            ae,
            le,
            ue,
            se,
          ];
          (a.forEach(function (e) {
            e(n, r, o);
          }),
            b && y(e.debugLogId, n, r, o),
            (t === "paused" || t === "ended") && (_.canLogPlayingEvent = !0),
            o.type === "controller_pause_requested" &&
              ((_.hasPausedOnce = !0), (_.shouldIgnoreDomPause = !0)),
            o.type === "controller_play_requested" &&
              ((_.hasPausedOnce = !0), (_.shouldIgnoreDomPlay = !0)),
            o.type === "dom_event_pause" && (_.shouldIgnoreDomPause = !1),
            o.type === "dom_event_play" &&
              ((_.shouldIgnoreDomPlay = !1),
              (_.lastLoggedViewabilityPercentage =
                r.uncontrolledState.viewabilityPercentage)));
        },
        logVPLEvent: function (t) {
          var e = t.eventType,
            n = t.logDataOverrides,
            r = t.state;
          B({ eventType: e, logDataOverrides: n, prevState: r, state: r });
        },
        setLoggingToVPLAdditionalData: function (n, r) {
          (t.set(n, r), b && C(n, r));
        },
      };
    }
    ((l.HEARTBEAT_INTERVAL = d),
      (l.createVideoPlayerImplementationStateMachineLogger = L));
  },
  98,
);
