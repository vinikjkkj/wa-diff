__d(
  "GraphQLVideoPublishUtils",
  ["immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("immutable").List([
        "cs_ab_testing_video_upload",
        "cs_content_library",
        "cs_content_library_bulk_upload",
        "cs_content_library_upload_videos",
        "cs_content_show_episode_upload",
        "cs_global_bulk_upload",
        "cs_global_multipost",
        "cs_global_upload_video",
        "cs_home_basic_post",
        "cs_home_bulk_video",
        "cs_home_upload_video",
        "cs_home_multipost",
        "cs_instagram_content_library",
        "media_manager",
        "pages_feed_video_composer",
        "pages_composer_bulk_upload_upsell",
        "page_content_tab_drafts",
        "page_content_tab_published_posts_opted_out",
        "page_content_tab_scheduled_posts_opted_out",
        "page_content_tab_video_library",
        "page_content_tab_video_library_premiere",
        "pages_posts",
        "pages_video_tab",
        "timeline",
        "video_page_video_list",
        "cs_unified_composer_optout",
        "cs_content_show_trailer_upload",
        "biz_web_testing_video_upload",
      ]);
      n = n.push("feed_story");
      var o = n.contains(t);
      return (
        (e === "composer" ||
          e === "media_manager_instagram_video_composer" ||
          e === "comment") &&
        o
      );
    }
    l.isGraphQLPublish = e;
  },
  98,
);
