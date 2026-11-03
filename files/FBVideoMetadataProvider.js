__d(
  "FBVideoMetadataProvider",
  [
    "MediaPlaybackCompoundEventUtils",
    "MediaPlaybackMetadataProvider",
    "getVideoBrowserTabId",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return {
        getErrorMetadata: o("MediaPlaybackMetadataProvider")
          .getSNAPLErrorMetadataCommon,
        getRequiredMetadata: function (t) {
          var e,
            n = t.coreVideoPlayerMetaData,
            a = t.logDataAdditions,
            i = t.loggingMetaData,
            l = t.state,
            s = n.adClientToken == null ? "organic" : "paid",
            u = o(
              "MediaPlaybackCompoundEventUtils",
            ).getMediaPlaybackAttributionIDV2Root(i),
            c = o(
              "MediaPlaybackMetadataProvider",
            ).getSNAPLRequiredMetadataCommon(l, n, i, a),
            d = o("MediaPlaybackMetadataProvider").getSNAPLTagMetadataCommon(
              l,
              n,
              i,
            ),
            m = babelHelpers.extends({}, c, {
              browser_tab_id: r("getVideoBrowserTabId")(),
              current_watching_module: "",
              nav_chain: d.attribution_id_v2,
              sessionizer_nav_chain: u != null ? u : null,
              tracking_token: (e = a.tracking_token) != null ? e : void 0,
              tracking_type: s,
              trackings: void 0,
            });
          return m;
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
            ),
            l = babelHelpers.extends({}, i, {
              video_chaining_depth_level: n.video_chaining_depth_level,
              video_chaining_parent_video_id: n.video_chaining_parent_video_id,
              video_chaining_session_id: n.video_chaining_session_id,
              video_type: n.video_type,
            });
          return l;
        },
      };
    }
    l.createFBVideoMetadataProvider = e;
  },
  98,
);
