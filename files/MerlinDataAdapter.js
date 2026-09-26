__d(
  "MerlinDataAdapter",
  [
    "FBReelsMerlinData",
    "FBShowcaseIFUMerlinData",
    "FBStoriesMerlinData",
    "PlaceholderPayloadMerlinData",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      if (e instanceof r("FBReelsMerlinData")) {
        var t = e.getPayload();
        return {
          derivation_settings: { fb_vpvs_direct_derivation: !0 },
          object_id: t.video_id,
          payload: {
            vpv: babelHelpers.extends(
              {
                fb_reels_metadata: {
                  client_viewstate_position: t.client_page_position,
                  consumption_language: t.consumption_language,
                  creator_id: t.creator_id,
                  fb_shorts_viewer: !0,
                  fb_shorts_viewer_referral_source: t.referral_source,
                  feed_ranking_type: t.feed_ranking_type,
                  player_origin: t.player_origin,
                  player_suborigin: t.player_suborigin,
                  reels_session_id: t.viewer_session_id,
                  video_chaining_depth_level: t.client_page_position,
                  video_chaining_parent_video_id: t.parent_video_id,
                  video_id: t.video_id,
                },
                nav_chain: t.nav_attribution_id_v2,
              },
              t.tracking != null && t.tracking !== ""
                ? { tracking: [t.tracking] }
                : null,
            ),
          },
        };
      }
      if (e instanceof r("FBStoriesMerlinData")) {
        var n = e.getPayload();
        return {
          derivation_settings: { fb_vpvs_direct_derivation: !0 },
          object_id: n.media_id,
          payload: {
            vpv: {
              fb_stories_metadata: {
                bucket_id: n.bucket_id,
                client_viewer_session_id: n.viewer_session_id,
                story_card_fbid: n.card_id,
                story_media_id: n.media_id,
                story_owner_type: n.story_owner_type,
                tofu_tray_session_id: n.tofu_tray_session_id,
                viewer_session_source: n.source,
              },
              nav_chain: n.nav_attribution_id_v2,
            },
          },
        };
      }
      if (e instanceof r("FBShowcaseIFUMerlinData")) {
        var o = e.getPayload();
        return {
          derivation_settings: { fb_vpvs_direct_derivation: !0 },
          object_id: o.video_id,
          extra_data: {
            showcase_story_type: o.showcase_story_type,
            reels_position_in_tray: o.position_in_tray,
          },
        };
      }
      if (e instanceof r("PlaceholderPayloadMerlinData")) {
        var a = e.getExtraData();
        return babelHelpers.extends(
          { payload: { placeholder_payload: e.getPlaceholderPayload() } },
          a != null ? { extra_data: a } : null,
        );
      }
      return {};
    }
    l.default = e;
  },
  98,
);
