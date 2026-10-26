__d(
  "WAWebVideoMetadataProvider",
  ["MediaPlaybackMetadataProvider", "WAWebMusicPlaybackUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return {
        getErrorMetadata: o("MediaPlaybackMetadataProvider")
          .getSNAPLErrorMetadataCommon,
        getRequiredMetadata: function (t) {
          var e = t.coreVideoPlayerMetaData,
            n = t.logDataAdditions,
            r = t.loggingMetaData,
            a = t.state;
          return s(
            o("MediaPlaybackMetadataProvider").getSNAPLRequiredMetadataCommon(
              a,
              e,
              r,
              n,
            ),
            n,
          );
        },
        getTagMetadata: function (t) {
          var e = t.coreVideoPlayerMetaData,
            n = t.logDataAdditions,
            r = t.loggingMetaData,
            a = t.state,
            i = o("MediaPlaybackMetadataProvider").getSNAPLTagMetadataCommon(
              a,
              e,
              r,
            );
          return babelHelpers.extends({}, i, {
            is_copyright_muted: n.is_copyright_muted,
            country: o("WAWebMusicPlaybackUtils").getUserCountryCodeForSNAPL(),
          });
        },
      };
    }
    function s(e, t) {
      var n;
      return babelHelpers.extends({}, e, {
        media_id: (n = t.media_id) != null ? n : e.media_id,
        tracking_type: "organic",
        persistent_id: t.persistent_id,
        media_id_string: t.media_id_string,
      });
    }
    ((l.createWAVideoMetadataProvider = e), (l.getWAVideoRequiredMetadata = s));
  },
  98,
);
