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
            a = t.state,
            i = o(
              "MediaPlaybackMetadataProvider",
            ).getSNAPLRequiredMetadataCommon(a, e, r, n);
          return babelHelpers.extends({}, i, {
            tracking_type: "organic",
            persistent_id: n.persistent_id,
            media_id_string: n.media_id_string,
          });
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
    l.createWAVideoMetadataProvider = e;
  },
  98,
);
