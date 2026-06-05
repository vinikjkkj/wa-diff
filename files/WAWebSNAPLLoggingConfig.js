__d(
  "WAWebSNAPLLoggingConfig",
  [
    "MediaPlaybackLogFlusher",
    "WAWebCometVideoPlayerUtils",
    "WAWebMediaPlaybackLogFlusher",
    "WAWebSNAPLPersistentId",
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
      if (r != null) {
        var s = o("WAWebSNAPLPersistentId").getSNAPLPersistentId(i, n === !0);
        s != null && (l.persistent_id = s);
      }
      var u = {
        loggingToSNAPLCreateLogFlusher: function (t, n) {
          return new (o(
            "WAWebMediaPlaybackLogFlusher",
          ).WhatsAppMediaPlaybackLogFlusher)(n, i);
        },
        loggingToSNAPLCreateMetadataProvider: o("WAWebVideoMetadataProvider")
          .createWAVideoMetadataProvider,
        loggingToSNAPLEnabled: !0,
      };
      return { loggingConfig: u, loggingToSNAPLAdditionalData: l };
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
