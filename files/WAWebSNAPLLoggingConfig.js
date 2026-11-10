__d(
  "WAWebSNAPLLoggingConfig",
  [
    "MediaPlaybackLogFlusher",
    "WAWebCometVideoPlayerUtils",
    "WAWebMediaPlaybackLogFlusher",
    "WAWebMsgType",
    "WAWebSNAPLUserPrefs",
    "WAWebVideoMetadataProvider",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.isCopyrightMuted,
        n = e.isStatusWithMusic,
        r = e.mediaId,
        a = e.mediaIdString,
        i = e.playRequestedAtMs,
        l = e.videoOrigin,
        s = {
          media_id: r != null ? r : "-1",
          media_id_string: a != null ? a : "",
          current_watching_module: o(
            "WAWebCometVideoPlayerUtils",
          ).getCurrentWatchingModule(e.msg, n),
          is_copyright_muted: t,
        };
      if (r != null) {
        var u = o("WAWebSNAPLUserPrefs").getSNAPLPersistentId({
          forMediaId: r,
          isMusic: n === !0 || e.msg.type === o("WAWebMsgType").MSG_TYPE.MUSIC,
          msg: e.msg,
          videoOrigin: l,
        });
        u != null && (s.persistent_id = u);
      }
      var c = {
        loggingToSNAPLCreateLogFlusher: function (t, n) {
          return new (o(
            "WAWebMediaPlaybackLogFlusher",
          ).WhatsAppMediaPlaybackLogFlusher)(n, l, i);
        },
        loggingToSNAPLCreateMetadataProvider: o("WAWebVideoMetadataProvider")
          .createWAVideoMetadataProvider,
        loggingToSNAPLEnabled: !0,
      };
      return { loggingConfig: c, loggingToSNAPLAdditionalData: s };
    }
    function s() {
      return {
        loggingToSNAPLCreateLogFlusher: function (t, n) {
          return new (r("MediaPlaybackLogFlusher"))(t, n);
        },
        loggingToSNAPLCreateMetadataProvider: o("WAWebVideoMetadataProvider")
          .createWAVideoMetadataProvider,
        loggingToSNAPLEnabled: !0,
      };
    }
    ((l.createWAWebSNAPLLoggingProps = e),
      (l.createWAWebDefaultSNAPLLoggingConfig = s));
  },
  98,
);
