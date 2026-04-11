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
        n = e.mediaId,
        r = e.mediaIdString,
        a = e.videoOrigin,
        i = {
          media_id_string: r != null ? r : "",
          current_watching_module: o(
            "WAWebCometVideoPlayerUtils",
          ).getCurrentWatchingModule(a),
          is_copyright_muted: t,
        };
      n != null &&
        (i.persistent_id = o("WAWebSNAPLUserPrefs").getSNAPLPersistentId(n, a));
      var l = {
        loggingToSNAPLCreateLogFlusher: function (t, n) {
          return new (o(
            "WAWebMediaPlaybackLogFlusher",
          ).WhatsAppMediaPlaybackLogFlusher)(n, a);
        },
        loggingToSNAPLCreateMetadataProvider: o("WAWebVideoMetadataProvider")
          .createWAVideoMetadataProvider,
        loggingToSNAPLEnabled: !0,
      };
      return { loggingConfig: l, loggingToSNAPLAdditionalData: i };
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
