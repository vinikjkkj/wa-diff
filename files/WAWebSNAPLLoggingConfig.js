__d(
  "WAWebSNAPLLoggingConfig",
  [
    "MediaPlaybackLogFlusher",
    "WAWebCometVideoPlayerUtils",
    "WAWebMediaPlaybackLogFlusher",
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
        i = e.videoOrigin,
        l = {
          media_id_string: a != null ? a : "",
          current_watching_module: o(
            "WAWebCometVideoPlayerUtils",
          ).getCurrentWatchingModule(i, n),
          is_copyright_muted: t,
        };
      r != null &&
        (l.persistent_id = o("WAWebSNAPLUserPrefs").getSNAPLPersistentId(r, i));
      var s = {
        loggingToSNAPLCreateLogFlusher: function (t, n) {
          return new (o(
            "WAWebMediaPlaybackLogFlusher",
          ).WhatsAppMediaPlaybackLogFlusher)(n, i);
        },
        loggingToSNAPLCreateMetadataProvider: o("WAWebVideoMetadataProvider")
          .createWAVideoMetadataProvider,
        loggingToSNAPLEnabled: !0,
      };
      return { loggingConfig: s, loggingToSNAPLAdditionalData: l };
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
