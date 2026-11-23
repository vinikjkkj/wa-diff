__d(
  "WAWebSNAPLPlayCancelledBeforePlayer",
  [
    "WAHashStringToNumber",
    "WAWebCometVideoPlayerUtils",
    "WAWebMediaPlaybackLogFlusher",
    "WAWebSNAPLLoggingConfig",
    "WAWebVideoMetadataProvider",
    "WAWebWamMsgUtils",
    "videoPlayerUniqueID",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        a = e.closedAtMs,
        i = e.msg,
        l = e.playRequestedAtMs,
        s = o("WAWebWamMsgUtils").getWamMessageType(i),
        u = o("WAWebCometVideoPlayerUtils").getChannelMediaMetadataForSNAPL(i),
        c = u.mediaId,
        d = u.mediaIdString,
        m = o("WAWebSNAPLLoggingConfig").createWAWebSNAPLLoggingProps({
          isCopyrightMuted: !1,
          mediaId: c,
          mediaIdString: d,
          msg: i,
          videoOrigin: s,
        }),
        p = m.loggingToSNAPLAdditionalData,
        _ = r("videoPlayerUniqueID")(),
        f = {
          client_time_ms: String(a),
          media_time_ms: "0",
          player_instance_id: String(
            o("WAHashStringToNumber").hashStringToNumber(_),
          ),
          player_instance_key: _,
        },
        g = {
          events: [
            babelHelpers.extends({}, f, {
              event_name: "requested_playing",
              start_state: "started",
            }),
            babelHelpers.extends({}, f, { event_name: "cancelled" }),
          ],
          required_metadata: o(
            "WAWebVideoMetadataProvider",
          ).getWAVideoRequiredMetadata(
            {
              current_watching_module:
                (t = p.current_watching_module) != null ? t : "",
              media_id: (n = p.media_id) != null ? n : "-1",
              player_format: "inline",
              player_suborigin: "not_specified_please_fix",
              player_version: "comet_progressive",
              tracking_data_encrypted: "",
              tracking_type: "organic",
              video_play_reason: 1,
            },
            p,
          ),
        };
      new (o("WAWebMediaPlaybackLogFlusher").WhatsAppMediaPlaybackLogFlusher)(
        {
          consumeLoggerEvents: function () {
            return [g];
          },
        },
        s,
        l,
      ).flushLogs();
    }
    l.logPlayCancelledBeforePlayer = e;
  },
  98,
);
