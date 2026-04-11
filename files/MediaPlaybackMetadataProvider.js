__d(
  "MediaPlaybackMetadataProvider",
  [
    "MediaPlaybackCompoundEventUtils",
    "VideoPlayerConnectionQuality",
    "VideoPlayerImplementationErrorNormalization",
    "getPlayerFormatForLogData",
    "mapObject",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = null,
      u = function (t) {
        return (
          (s = s != null ? s : document.createElement("video")),
          "canPlayType" in s ? s.canPlayType(t) : ""
        );
      };
    function c(e) {
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
    function d(t, n, o, a, i) {
      var l =
        t.controlledState.error === o
          ? babelHelpers.extends({}, t, {
              controlledState: babelHelpers.extends({}, t.controlledState, {
                error: { $ref: "$.player.lastError" },
              }),
            })
          : t;
      t.uncontrolledState.videoElementError != null &&
        (l = babelHelpers.extends({}, l, {
          uncontrolledState: babelHelpers.extends({}, l.uncontrolledState, {
            videoElementError: {
              code: t.uncontrolledState.videoElementError.code,
              message: t.uncontrolledState.videoElementError.message,
            },
          }),
        }));
      var s = n;
      {
        var d =
          typeof n.payload == "object" && n.payload != null ? n.payload : null;
        if (d != null) {
          var m = {};
          (Object.keys(d).forEach(function (e) {
            var t = d[e];
            t === o ? (m[e] = { $ref: "$.player.lastError" }) : (m[e] = t);
          }),
            (s = babelHelpers.extends({}, n, { payload: m })));
        }
      }
      var p = {
        "application/vnd.apple.mpegurl": "application/vnd.apple.mpegurl",
        "application/x-mpegURL": "application/x-mpegURL",
        "video/mp4": "video/mp4",
        "video/ogg": "video/ogg",
        "video/webm": "video/webm",
      };
      return {
        currentVideo: {
          audioStreamId: t.uncontrolledState.audioRepresentationID,
          dashAudioFormat: void 0,
          hasHD: void 0,
          hasRateLimit: void 0,
          hasSubtitles: t.controlledState.captionsLoaded,
          isDrm: !!i.graphQLVideoDRMInfo,
          isHD: void 0,
          isLiveStream: i.isLiveStreaming,
          isRateLimited: void 0,
          liveManifestUrl: void 0,
          projection: t.uncontrolledState.videoProjection,
          resourceUrl: void 0,
          streamId: t.uncontrolledState.videoRepresentationID,
          streamType: t.controlledState.streamingFormat,
          tagHD: void 0,
          tagSD: void 0,
          videoID: i.videoFBID,
        },
        player: {
          canPlayType: (e || (e = r("mapObject")))(p, u),
          dimensions: a.dimensions
            ? { height: a.dimensions.height, width: a.dimensions.width }
            : null,
          droppedFrames: t.uncontrolledState.videoElementDroppedFrameCount,
          initializationTime: void 0,
          initializationTimestamp: void 0,
          inPlayStallCount: void 0,
          inPlayStallTime: void 0,
          interruptCount: void 0,
          interruptTime: void 0,
          lastError: o,
          loggedError: void 0,
          stallCount: void 0,
          stallTime: void 0,
          state: c(t),
          totalFrames: t.uncontrolledState.videoElementTotalFrameCount,
          version: t.playerVersion,
          videoSource: void 0,
          viewabilityPercentage: t.uncontrolledState.viewabilityPercentage,
        },
        playerStateMachine: { action: s, state: l },
      };
    }
    function m(e) {
      var t = e.action,
        n = e.coreVideoPlayerMetaData,
        r = e.loggingMetaData,
        a = e.state,
        i = e.videoPlayerError,
        l = i.errorMessageFormat,
        s = i.errorName,
        u = i.errorType,
        c = i.errorCode == null || i.errorCode === "" ? s : i.errorCode,
        m = d(a, t, i, r, n),
        p = {
          code: c,
          description: l,
          domain: s,
          error: s,
          type: String(
            u != null
              ? u
              : o(
                  "VideoPlayerImplementationErrorNormalization",
                ).getErrorTypeFromErrorName(s, l),
          ),
          user_info: JSON.stringify(m),
        };
      return p;
    }
    function p(e, t, n, r) {
      var o,
        a,
        i,
        l = _(e, t, n);
      return {
        attribution_id_v2_root: void 0,
        author_id: r.author_id,
        current_watching_module:
          (o = r.current_watching_module) != null ? o : "",
        is_audio_only: t.audioOnly,
        is_live_streaming: (a = t.isLiveStreaming) != null ? a : void 0,
        media_id: t.videoFBID,
        nav_chain: r.nav_chain,
        player_format: l.player_format,
        player_origin: t.playerOriginOverride,
        player_suborigin: t.subOrigin,
        player_version: e.playerVersion,
        sessionizer_nav_chain: void 0,
        tracking_data_encrypted: n.trackingDataEncrypted,
        tracking_token: r.tracking_token,
        tracking_type: (i = r.tracking_type) != null ? i : "none",
        video_play_reason: l.video_play_reason,
      };
    }
    function _(e, t, n) {
      var a, i, l, s, u, c, d, m;
      return {
        attribution_id_v2: o(
          "MediaPlaybackCompoundEventUtils",
        ).getMediaPlaybackAttributionIDV2(n),
        audio_representation_id: o(
          "MediaPlaybackCompoundEventUtils",
        ).stringifyMediaPlaybackMetadata(
          e.uncontrolledState.audioRepresentationID,
        ),
        autoplay_eligible: t.canAutoplay === "allow",
        autoplay_failure_reasons: JSON.stringify(
          t.autoplayGatingResult ? [t.autoplayGatingResult] : [],
        ),
        autoplay_setting: o(
          "MediaPlaybackCompoundEventUtils",
        ).stringifyMediaPlaybackMetadata(t.autoplaySetting),
        available_qualities_count: o(
          "MediaPlaybackCompoundEventUtils",
        ).stringifyMediaPlaybackMetadata(
          e.uncontrolledState.availableQualities.length,
        ),
        caption_format: o(
          "MediaPlaybackCompoundEventUtils",
        ).stringifyMediaPlaybackMetadata(e.controlledState.captionFormat),
        caption_locale: o(
          "MediaPlaybackCompoundEventUtils",
        ).stringifyMediaPlaybackMetadata(e.controlledState.captionsLocale),
        caption_state: o(
          "MediaPlaybackCompoundEventUtils",
        ).getMediaPlaybackCaptionState(e.controlledState.captionsVisible),
        client_latency_setting: e.controlledState.latencyLevel,
        current_viewability: o(
          "MediaPlaybackCompoundEventUtils",
        ).stringifyMediaPlaybackMetadata(
          e.uncontrolledState.viewabilityPercentage,
        ),
        dash_manifest_identifier: e.uncontrolledState.manifestIdentifier,
        data_connection_quality: o(
          "MediaPlaybackCompoundEventUtils",
        ).getMediaPlaybackDataConnectionQuality(
          o("VideoPlayerConnectionQuality").evaluate(function () {
            return e.uncontrolledState.estimatedBandwidth;
          }),
        ),
        downstream_share_origin_uri:
          (a = n.downstreamShareSignalTracking) == null
            ? void 0
            : a.downstream_share_session_origin_uri,
        downstream_share_start_time: o(
          "MediaPlaybackCompoundEventUtils",
        ).stringifyMediaPlaybackMetadata(
          (i = n.downstreamShareSignalTracking) == null
            ? void 0
            : i.downstream_share_session_start_time,
        ),
        downstream_share_visit_uuid:
          (l = n.downstreamShareSignalTracking) == null
            ? void 0
            : l.downstream_share_session_id,
        dropped_frame_count: o(
          "MediaPlaybackCompoundEventUtils",
        ).stringifyMediaPlaybackMetadata(
          e.uncontrolledState.videoElementDroppedFrameCount,
        ),
        external_log_id: o(
          "MediaPlaybackCompoundEventUtils",
        ).stringifyMediaPlaybackMetadata(t.externalLogID),
        external_log_type: o(
          "MediaPlaybackCompoundEventUtils",
        ).stringifyMediaPlaybackMetadata(t.externalLogType),
        is_abr_enabled: e.isAbrEnabled,
        is_fbms: (s = e.uncontrolledState.isFBMS) != null ? s : void 0,
        is_live_video_rewound: e.controlledState.isLiveRewindActive,
        is_mixed_codec_manifest:
          (u = e.uncontrolledState.isMixedCodecManifest) != null ? u : void 0,
        is_predictive_playback: e.uncontrolledState.isPredictiveDash,
        mpd_validation_errors: o(
          "MediaPlaybackCompoundEventUtils",
        ).stringifyMediaPlaybackMetadata(
          e.uncontrolledState.mpdValidationErrors,
        ),
        playback_speed: e.uncontrolledState.videoElementPlaybackRate,
        player_format: r("getPlayerFormatForLogData")(
          {
            isDesktopPictureInPicture:
              (c = e.controlledState.isDesktopPictureInPicture) != null
                ? c
                : !1,
            isFullscreen: e.uncontrolledState.isFullscreen,
          },
          t.playerFormat,
        ),
        player_sound_on: !(
          e.controlledState.muted || e.controlledState.volume === 0
        ),
        projection: o(
          "MediaPlaybackCompoundEventUtils",
        ).stringifyMediaPlaybackMetadata(e.uncontrolledState.videoProjection),
        streaming_format: o(
          "MediaPlaybackCompoundEventUtils",
        ).stringifyMediaPlaybackMetadata(e.controlledState.streamingFormat),
        total_frame_count: o(
          "MediaPlaybackCompoundEventUtils",
        ).stringifyMediaPlaybackMetadata(
          e.uncontrolledState.videoElementTotalFrameCount,
        ),
        video_bandwidth:
          (d = e.uncontrolledState.estimatedBandwidth) != null ? d : void 0,
        video_play_reason:
          e.controlledState.lastPlayReason != null
            ? o("MediaPlaybackCompoundEventUtils").getMediaPlaybackPlayReason(
                e.controlledState.lastPlayReason,
              )
            : null,
        video_projection:
          (m = e.uncontrolledState.videoProjection) != null ? m : void 0,
        video_representation_id: o(
          "MediaPlaybackCompoundEventUtils",
        ).stringifyMediaPlaybackMetadata(
          e.uncontrolledState.videoRepresentationID,
        ),
        view_height: o(
          "MediaPlaybackCompoundEventUtils",
        ).stringifyMediaPlaybackMetadata(Math.floor(n.dimensions.height)),
        view_width: o(
          "MediaPlaybackCompoundEventUtils",
        ).stringifyMediaPlaybackMetadata(Math.floor(n.dimensions.width)),
      };
    }
    ((l.getSNAPLErrorMetadataCommon = m),
      (l.getSNAPLRequiredMetadataCommon = p),
      (l.getSNAPLTagMetadataCommon = _));
  },
  98,
);
