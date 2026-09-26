__d(
  "MerlinOriginMap",
  ["$InternalEnum", "gkx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
        FB_EVENTS_EYML: "fb_events_eyml",
        FB_EVENTS_TAB: "fb_events_tab",
        FB_GROUP_FEED: "fb_group_feed",
        FB_GYSJ_GROUP_CARD: "fb_gysj_group_card",
        FB_MARKETPLACE: "fb_marketplace",
        FB_MARKETPLACE_ADS: "fb_marketplace_ads",
        FB_MARKETPLACE_PDP: "fb_marketplace_pdp",
        FB_MARKETPLACE_PRODUCT_TILE: "fb_marketplace_product_tile",
        FB_NEWSFEED: "fb_newsfeed",
        FB_PERMALINK: "fb_permalink",
        FB_PROFILE: "fb_profile",
        FB_PYMK_PROFILE_CARD: "fb_pymk_profile_card",
        FB_PYML_PAGE_CARD: "fb_pyml_page_card",
        FB_REELS: "fb_reels",
        FB_SEARCH: "fb_search",
        FB_SHOWCASE_IFU_TILE: "fb_showcase_ifu_tile",
        FB_SINGLE_PHOTO: "fb_single_photo",
        FB_STORIES: "fb_stories",
        FB_WATCH: "fb_watch",
        FB_XAR_COMMENTS: "fb_xar_comments",
        NON_PERSONALIZED_FOLLOWING_FEED: "fb_non_personalized_following_feed",
      }),
      s = new Map([
        [78, e.FB_SEARCH],
        [0, e.FB_NEWSFEED],
        [26, e.FB_XAR_COMMENTS],
        [193, e.NON_PERSONALIZED_FOLLOWING_FEED],
        [202, e.FB_GYSJ_GROUP_CARD],
        [203, e.FB_PYMK_PROFILE_CARD],
        [204, e.FB_PYML_PAGE_CARD],
        [65, e.FB_REELS],
        [3, e.FB_PROFILE],
        [4, e.FB_GROUP_FEED],
        [8, e.FB_PERMALINK],
        [6, e.FB_SINGLE_PHOTO],
        [36, e.FB_STORIES],
        [58, e.FB_SHOWCASE_IFU_TILE],
        [23, e.FB_WATCH],
        [151, e.FB_EVENTS_EYML],
        [150, e.FB_EVENTS_TAB],
      ]);
    function u(t) {
      switch (t) {
        case e.FB_SEARCH:
        case e.FB_NEWSFEED:
        case e.FB_XAR_COMMENTS:
        case e.NON_PERSONALIZED_FOLLOWING_FEED:
        case e.FB_GYSJ_GROUP_CARD:
        case e.FB_PYMK_PROFILE_CARD:
        case e.FB_PYML_PAGE_CARD:
          return r("gkx")("4280");
        case e.FB_REELS:
          return r("qex")._("1404") === !0;
        case e.FB_PROFILE:
          return r("gkx")("5132");
        case e.FB_GROUP_FEED:
          return r("gkx")("5165");
        case e.FB_EVENTS_EYML:
        case e.FB_EVENTS_TAB:
          return r("gkx")("15453");
        case e.FB_PERMALINK:
          return r("qex")._("2839") === !0;
        case e.FB_MARKETPLACE:
        case e.FB_MARKETPLACE_PRODUCT_TILE:
        case e.FB_MARKETPLACE_PDP:
        case e.FB_MARKETPLACE_ADS:
          return r("gkx")("5483");
        case e.FB_SINGLE_PHOTO:
          return r("gkx")("6232");
        case e.FB_STORIES:
          return r("qex")._("5040") === !0;
        case e.FB_WATCH:
          return r("qex")._("5387") === !0;
        case e.FB_SHOWCASE_IFU_TILE:
          return r("qex")._("5041") === !0;
      }
    }
    ((l.MerlinOrigin = e),
      (l.InteractionSourceToMerlinOriginMap = s),
      (l.isMerlinV2EnabledForOrigin = u));
  },
  98,
);
