__d(
  "AdsPlacementCopy",
  [
    "fbt",
    "AHGHelpTrayLink2.react",
    "AdsPlacementCopyStrings",
    "AdsUniqueMetricsHelpID",
    "AdsUniqueMetricsID",
    "GeoBaseText.react",
    "GeoLink.react",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = u.jsx(r("GeoBaseText.react"), {
        color: "placeholder",
        size: "value",
        weight: "bold",
        children: s._(/*BTDS*/ "square (1:1)"),
      }),
      d = u.jsx(r("GeoBaseText.react"), {
        color: "placeholder",
        size: "value",
        weight: "bold",
        children: s._(/*BTDS*/ "vertical (4:5)"),
      }),
      m = u.jsx(r("GeoBaseText.react"), {
        color: "placeholder",
        size: "value",
        weight: "bold",
        children: s._(/*BTDS*/ "vertical (9:16)"),
      }),
      p = u.jsx(r("GeoBaseText.react"), {
        color: "placeholder",
        size: "value",
        weight: "bold",
        children: s._(/*BTDS*/ "fullscreen horizontal (16:9)"),
      }),
      _ = u.jsx(r("GeoBaseText.react"), {
        color: "placeholder",
        size: "value",
        weight: "bold",
        children: s._(/*BTDS*/ "fullscreen vertical (9:16)"),
      }),
      f = u.jsx(r("GeoBaseText.react"), {
        color: "placeholder",
        size: "value",
        weight: "bold",
        children: s._(/*BTDS*/ "(9:16)"),
      }),
      g = u.jsx(r("GeoBaseText.react"), {
        color: "placeholder",
        size: "value",
        weight: "bold",
        children: s._(/*BTDS*/ "horizontal (1.91:1)"),
      }),
      h = s._(
        /*BTDS*/ "We recommend {horizontal} images and {square} videos.",
        [s._param("horizontal", g), s._param("square", c)],
      ),
      y = s._(/*BTDS*/ "We recommend {square} images or videos.", [
        s._param("square", c),
      ]),
      C = s._(/*BTDS*/ "We recommend {square} images and {vertical} videos.", [
        s._param("square", c),
        s._param("vertical", d),
      ]),
      b = s._(/*BTDS*/ "We recommend {vertical} images and videos.", [
        s._param("vertical", d),
      ]),
      v = s._(
        /*BTDS*/ "We recommend {vertical} images and {fullscreen vertical} videos.",
        [s._param("vertical", d), s._param("fullscreen vertical", _)],
      ),
      S = s._(
        /*BTDS*/ "We recommend {square} images. {line break} Groups feed is a mobile tab that shows a personalized feed of activity across all your groups.",
        [
          s._param("square", c),
          s._param("line break", u.jsx("div", { children: u.jsx("br", {}) })),
        ],
      ),
      R = s._(
        /*BTDS*/ "For Facebook: {horizontal_image_square_video} This placement includes both general search and Marketplace search.",
        [s._param("horizontal_image_square_video", h)],
      ),
      L = s._(
        /*BTDS*/ "{horizontal_image_square_video} {line break} This placement includes both general search and Marketplace search.",
        [
          s._param("horizontal_image_square_video", h),
          s._param("line break", u.jsx("div", { children: u.jsx("br", {}) })),
        ],
      ),
      E = s._(
        /*BTDS*/ "We recommend {square} images and videos. {line break} This placement includes both general search and Marketplace search.",
        [
          s._param("square", c),
          s._param("line break", u.jsx("div", { children: u.jsx("br", {}) })),
        ],
      ),
      k = s._(
        /*BTDS*/ "We recommend {square} images and videos. This placement includes both general search and Marketplace search.",
        [s._param("square", c)],
      ),
      I = s._(/*BTDS*/ "We recommend {full vertical} videos.", [
        s._param("full vertical", _),
      ]),
      T = {
        AUTO_PLACEMENT_TEXT: o("AdsPlacementCopyStrings").AUTO_PLACEMENT_TEXT,
        AUTO_PLACEMENT_TEXT_ADVANTAGE_RENAMED_WITH_ICON: o(
          "AdsPlacementCopyStrings",
        ).AUTO_PLACEMENT_TEXT_ADVANTAGE_RENAMED_WITH_ICON,
        RECOMMENDED_AUTO_PLACEMENT_TEXT: o("AdsPlacementCopyStrings")
          .RECOMMENDED_AUTO_PLACEMENT_TEXT,
        ADVANTAGE_PLUS_PLACEMENTS_READ_ONLY_EDITOR_DESCRIPTION: o(
          "AdsPlacementCopyStrings",
        ).ADVANTAGE_PLUS_PLACEMENTS_READ_ONLY_EDITOR_DESCRIPTION,
        MANUAL_PLACEMENTS_TEXT: o("AdsPlacementCopyStrings")
          .MANUAL_PLACEMENTS_TEXT,
        MANUAL_PLACEMENTS_DESCRIPTION: o("AdsPlacementCopyStrings")
          .MANUAL_PLACEMENTS_DESCRIPTION,
        MANUAL_PLACEMENTS_WITH_MM_DESCRIPTION: o("AdsPlacementCopyStrings")
          .MANUAL_PLACEMENTS_WITH_MM_DESCRIPTION,
        MESSENGE_BODY_SOME_CAMPAIGN_PAC: o("AdsPlacementCopyStrings")
          .MESSENGE_BODY_SOME_CAMPAIGN_PAC,
        MIXED_PLACEMENTS_TEXT: o("AdsPlacementCopyStrings")
          .MIXED_PLACEMENTS_TEXT,
        MIXED_PLACEMENTS_DESCRIPTION: o("AdsPlacementCopyStrings")
          .MIXED_PLACEMENTS_DESCRIPTION,
        HIDE_MESSAGE: o("AdsPlacementCopyStrings").HIDE_MESSAGE,
        DEFAULT_PLACEMENT_DEVICE_PLATFORM_LABEL: o("AdsPlacementCopyStrings")
          .DEFAULT_PLACEMENT_DEVICE_PLATFORM_LABEL,
        PLACEMENT_POSITION_GROUPS: o("AdsPlacementCopyStrings")
          .PLACEMENT_POSITION_GROUPS,
        PLACEMENT_SELECTION: o("AdsPlacementCopyStrings").PLACEMENT_SELECTION,
        PLACEMENT_SELECTION_AUTOMATIC: o("AdsPlacementCopyStrings")
          .PLACEMENT_SELECTION_AUTOMATIC,
        EXPAND_AND_COLLAPSE_MESSAGE: o("AdsPlacementCopyStrings")
          .EXPAND_AND_COLLAPSE_MESSAGE,
        PLACEMENT_FIELD_DISABLED_TOOLTIP_TEXT: o("AdsPlacementCopyStrings")
          .PLACEMENT_FIELD_DISABLED_TOOLTIP_TEXT,
        getAdBreaksPlacementHeaderTooltipText: o("AdsPlacementCopyStrings")
          .getAdBreaksPlacementHeaderTooltipText,
        getAdBreaksPlacementFieldDisabledTooltipText: o(
          "AdsPlacementCopyStrings",
        ).getAdBreaksPlacementFieldDisabledTooltipText,
        PLACEMENT_DEVICES_SECTION_HEADER: o("AdsPlacementCopyStrings")
          .PLACEMENT_DEVICES_SECTION_HEADER,
        HELP_CMS: "965529646866485",
        HELP_CMS_AUTOMATIC: "965529646866485",
        HELP_CMS_MANUAL: "965529646866485",
        AUTO_PLACEMENTS_DESCRIPTION: s._(
          /*BTDS*/ "Use Advantage+ placements to maximize your budget and help show your ads to more {=m2}. Facebook's delivery system will allocate your ad set's budget across multiple placements based on where they're likely to perform best.",
          [
            s._implicitParam(
              "=m2",
              u.jsx(r("AHGHelpTrayLink2.react"), {
                helpCenterID: o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
                source: "ads_manager_context_preview_learn_more",
                children: s._(/*BTDS*/ "people"),
              }),
            ),
          ],
        ),
        AUTO_PLACEMENTS_WITH_MM_DESCRIPTION: s._(
          /*BTDS*/ "Use Advantage+ placements to maximize your budget and help show your ads and marketing messages to more {=m2}. Facebook's delivery system will allocate your ad set's budget across multiple placements based on where they're likely to perform best.",
          [
            s._implicitParam(
              "=m2",
              u.jsx(r("AHGHelpTrayLink2.react"), {
                helpCenterID: o("AdsUniqueMetricsID").AdsUniqueMetricsHelpID,
                source: "ads_manager_context_preview_learn_more",
                children: s._(/*BTDS*/ "people"),
              }),
            ),
          ],
        ),
        PLACEMENT_POSITION_SUBHEADERS: Object.freeze({
          FEED: s._(
            /*BTDS*/ "Get high visibility for your business with ads in feeds",
          ),
          STORY: s._(
            /*BTDS*/ "Tell a rich, visual story with immersive, fullscreen vertical ads",
          ),
          REELS_OVERLAY: s._(
            /*BTDS*/ "Reach {=m1} with sticker, banner or video ads as they watch reels",
            [
              s._implicitParam(
                "=m1",
                u.jsx(r("GeoLink.react"), {
                  href: o("AdsUniqueMetricsHelpID").getUniqueMetricsHelpURL(),
                  target: "_blank",
                  children: s._(/*BTDS*/ "people"),
                }),
              ),
            ],
          ),
          STREAM: s._(
            /*BTDS*/ "Quickly capture people's attention while they're watching videos",
          ),
          STREAM_AND_REELS: s._(
            /*BTDS*/ "Reach people before, during or after they watch a video or reel",
          ),
          STREAM_AND_REELS_VU: s._(
            /*BTDS*/ "Reach people before, during or after they watch a reel",
          ),
          MESSAGING: s._(
            /*BTDS*/ "Send offers or updates to {=m2} who are already connected to your business",
            [
              s._implicitParam(
                "=m2",
                u.jsx(r("GeoLink.react"), {
                  href: o("AdsUniqueMetricsHelpID").getUniqueMetricsHelpURL(),
                  target: "_blank",
                  children: s._(/*BTDS*/ "people"),
                }),
              ),
            ],
          ),
          MARKETING_MESSAGES: s._(
            /*BTDS*/ "Send a marketing message to people on WhatsApp when they are most likely to engage",
          ),
          MESSENGER_MARKETING_MESSAGES: s._(
            /*BTDS*/ "Send a marketing message to people on Messenger when they are most likely to engage.",
          ),
          CHANNEL: s._(
            /*BTDS*/ "Get people to follow information from your business.",
          ),
          CONTEXT: s._(
            /*BTDS*/ "Engage with {=m2} reading content from publishers",
            [
              s._implicitParam(
                "=m2",
                u.jsx(r("GeoLink.react"), {
                  href: o("AdsUniqueMetricsHelpID").getUniqueMetricsHelpURL(),
                  target: "_blank",
                  children: s._(/*BTDS*/ "people"),
                }),
              ),
            ],
          ),
          EXTERNAL: s._(
            /*BTDS*/ "Expand your reach with ads in external apps and websites",
          ),
          SEARCH: s._(
            /*BTDS*/ "Get visibility for your business as people search",
          ),
          STICKERS: s._(
            /*BTDS*/ "Reach {=m2} with a sticker ad while they're watching short-form content",
            [
              s._implicitParam(
                "=m2",
                u.jsx(r("GeoLink.react"), {
                  href: o("AdsUniqueMetricsHelpID").getUniqueMetricsHelpURL(),
                  target: "_blank",
                  children: s._(/*BTDS*/ "people"),
                }),
              ),
            ],
          ),
          OCULUS: s._(
            /*BTDS*/ "Reach potential customers who use VR with ads on Oculus",
          ),
          CONNECTED_TV: s._(
            /*BTDS*/ "Reach people streaming content on TV screens",
          ),
        }),
        EDIT_PLACEMENT_WARNING: function (t) {
          return s._(
            /*BTDS*/ "The existing placements for this ad set don't match the placement options available here. To edit placements here, you'll need to {link to address warning}.",
            [
              s._param(
                "link to address warning",
                u.jsx(r("GeoLink.react"), {
                  onClick: t,
                  children: s._(/*BTDS*/ "override your original choices"),
                }),
              ),
            ],
          );
        },
        POSITION_GROUP_MEDIA_RECOMMENDATION: Object.freeze({
          FEED: s._(
            /*BTDS*/ "We recommend {square} images and {vertical} videos.",
            [s._param("square", c), s._param("vertical", d)],
          ),
          STORY: s._(
            /*BTDS*/ "We recommend {fullscreen vertical} images or videos.",
            [s._param("fullscreen vertical", _)],
          ),
          STORY_AND_REELS: s._(
            /*BTDS*/ "For Stories: we recommend {fullscreen vertical} images or videos. {newline} For Instagram Reels: use {fullscreen vertical} videos of 15 minutes or less. We recommend including sound.",
            [
              s._param("fullscreen vertical", _),
              s._param("newline", u.jsx("div", { children: u.jsx("br", {}) })),
            ],
          ),
          STORY_STATUS_AND_REELS: s._(
            /*BTDS*/ "For Stories and Status: we recommend {fullscreen vertical} images or videos. {newline} For Instagram Reels: use {fullscreen vertical} videos of 15 minutes or less. We recommend including sound.",
            [
              s._param("fullscreen vertical", _),
              s._param("newline", u.jsx("div", { children: u.jsx("br", {}) })),
            ],
          ),
          STREAM: s._(
            /*BTDS*/ "We recommend {full landscape\/horizontal} or {square} images or videos. Videos are limited to 15 seconds or less.",
            [s._param("full landscape/horizontal", p), s._param("square", c)],
          ),
          STREAM_WITHOUT_VIDEO_LENGTH: s._(
            /*BTDS*/ "We recommend {full landscape\/horizontal} or {square} images or videos.",
            [s._param("full landscape/horizontal", p), s._param("square", c)],
          ),
          STREAM_WITH_IGTV_WITHOUT_INSTREAM_VIDEO_LENGTH: s._(
            /*BTDS*/ "For Facebook in-stream: We recommend {full landscape\/horizontal} or {square} images or videos. {line break} For Instagram in-stream videos: We recommend {fullscreen\/vertical} videos of 15 seconds or less.",
            [
              s._param("full landscape/horizontal", p),
              s._param("square", c),
              s._param(
                "line break",
                u.jsx("div", { children: u.jsx("br", {}) }),
              ),
              s._param("fullscreen/vertical", _),
            ],
          ),
          STREAM_WITH_REELS: s._(
            /*BTDS*/ "We recommend {full landscape\/horizontal} {for videos} {max duration} {vertical} {for reels} {square} {image format}",
            [
              s._param("full landscape/horizontal", p),
              s._param(
                "for videos",
                u.jsx(r("GeoBaseText.react"), {
                  color: "placeholder",
                  size: "value",
                  weight: "bold",
                  children: s._(/*BTDS*/ "for videos"),
                }),
              ),
              s._param("max duration", s._(/*BTDS*/ "up to 10 seconds,")),
              s._param("vertical", m),
              s._param(
                "for reels",
                u.jsx(r("GeoBaseText.react"), {
                  color: "placeholder",
                  size: "value",
                  weight: "bold",
                  children: s._(/*BTDS*/ "for reels, and a"),
                }),
              ),
              s._param("square", c),
              s._param(
                "image format",
                u.jsx(r("GeoBaseText.react"), {
                  color: "placeholder",
                  size: "value",
                  weight: "bold",
                  children: s._(/*BTDS*/ "image format."),
                }),
              ),
            ],
          ),
          STREAM_WITH_REELS_VERTICAL: s._(
            /*BTDS*/ "We recommend {vertical} {for videos} {square} {image format}",
            [
              s._param("vertical", m),
              s._param(
                "for videos",
                u.jsx(r("GeoBaseText.react"), {
                  color: "placeholder",
                  size: "value",
                  weight: "bold",
                  children: s._(/*BTDS*/ "videos, and"),
                }),
              ),
              s._param("square", c),
              s._param(
                "image format",
                u.jsx(r("GeoBaseText.react"), {
                  color: "placeholder",
                  size: "value",
                  weight: "bold",
                  children: s._(/*BTDS*/ "images."),
                }),
              ),
            ],
          ),
          MESSAGING: s._(/*BTDS*/ "We recommend {horizontal} images.", [
            s._param("horizontal", g),
          ]),
          MARKETING_MESSAGES: s._(
            /*BTDS*/ "We recommend {horizontal} images and {vertical} videos.",
            [s._param("horizontal", g), s._param("vertical", m)],
          ),
          CHANNEL: s._(
            /*BTDS*/ "Promo Channel Media Recommendation Placeholder",
          ),
          CONTEXT: s._(/*BTDS*/ "We recommend {horizontal} images or videos.", [
            s._param("horizontal", g),
          ]),
          EXTERNAL: s._(
            /*BTDS*/ "For native, banner, interstitial and rewarded videos: We recommend {fullscreen vertical} images or videos. {line break} For in-stream videos: We recommend {fullscreen horizontal} images or videos.",
            [
              s._param("fullscreen vertical", _),
              s._param(
                "line break",
                u.jsx("div", { children: u.jsx("br", {}) }),
              ),
              s._param("fullscreen horizontal", p),
            ],
          ),
          SEARCH: L,
          IG_SEARCH_FEED: s._(
            /*BTDS*/ "{horizontal_image_square_videos_fb_search_no_line_break}{line break} For Instagram: {square_image_horizontal_video}",
            [
              s._param(
                "horizontal_image_square_videos_fb_search_no_line_break",
                R,
              ),
              s._param(
                "line break",
                u.jsx("div", { children: u.jsx("br", {}) }),
              ),
              s._param("square_image_horizontal_video", C),
            ],
          ),
          IG_SEARCH_GRID: s._(
            /*BTDS*/ "{horizontal_image_square_videos_fb_search_no_line_break}{line break} For Instagram: {square_image_video} This placement includes both search results grid and feed.",
            [
              s._param(
                "horizontal_image_square_videos_fb_search_no_line_break",
                R,
              ),
              s._param(
                "line break",
                u.jsx("div", { children: u.jsx("br", {}) }),
              ),
              s._param("square_image_video", y),
            ],
          ),
          SEARCH_GROUP: s._(
            /*BTDS*/ "For Facebook: {fb_search_grid_media_recommendation}{line break} For Instagram: {square_image_video} This placement includes both search results grid and feed.",
            [
              s._param("fb_search_grid_media_recommendation", k),
              s._param(
                "line break",
                u.jsx("div", { children: u.jsx("br", {}) }),
              ),
              s._param("square_image_video", y),
            ],
          ),
          REELS_OVERLAY: s._(
            /*BTDS*/ "We recommend {square} images or {fullscreen vertical} videos up to 10 seconds.",
            [s._param("square", c), s._param("fullscreen vertical", _)],
          ),
          OCULUS: s._(
            /*BTDS*/ "Select a placement to see its recommended creative specification.",
          ),
          CONNECTED_TV: s._(
            /*BTDS*/ "We recommend {fullscreen horizontal} videos that are 15 or 30 seconds long.",
            [s._param("fullscreen horizontal", p)],
          ),
        }),
        POSITION_MEDIA_RECOMMENDATION: Object.freeze({
          FB_FEED: b,
          FB_PROFILE_FEED: C,
          IG_FEED: v,
          FB_SEARCH: L,
          IG_SEARCH_FEED: C,
          IG_SEARCH_GRID: y,
          IG_SEARCH_FEED_IN_REELS: s._(
            /*BTDS*/ "We recommend fullscreen vertical {full vertical} images or videos. Videos are limited to 15 minutes or less.",
            [s._param("full vertical", f)],
          ),
          IG_PROFILE_FEED: C,
          FB_MARKETPLACE: C,
          FB_GROUPS_FEED: S,
          FB_RIGHT_COLUMN: s._(
            /*BTDS*/ "We recommend {horizontal} images or videos.",
            [s._param("horizontal", g)],
          ),
          FB_SUGGESTED_VIDEOS: C,
          MESSENGER_INBOX: s._(/*BTDS*/ "We recommend {square} images", [
            s._param("square", c),
          ]),
          AN_CLASSIC: s._(
            /*BTDS*/ "We recommend {fullscreen vertical} images or videos.",
            [s._param("fullscreen vertical", _)],
          ),
          AN_INSTREAM_VIDEO: s._(
            /*BTDS*/ "We recommend {fullscreen horizontal} images or videos.",
            [s._param("fullscreen horizontal", p)],
          ),
          AN_REWARDED_VIDEO: s._(
            /*BTDS*/ "We recommend {fullscreen vertical} images or videos.",
            [s._param("fullscreen vertical", _)],
          ),
          AN_CTV_INSTREAM_VIDEO: s._(
            /*BTDS*/ "We recommend {fullscreen horizontal} videos that are 15 or 30 seconds long.",
            [s._param("fullscreen horizontal", p)],
          ),
          INSTREAM_VIDEO: s._(
            /*BTDS*/ "We recommend {full landscape\/horizontal} or {square} images or videos.",
            [s._param("full landscape/horizontal", p), s._param("square", c)],
          ),
          INSTREAM_VIDEO_WITH_DURATION: s._(
            /*BTDS*/ "We suggest using {video with} {full landscape\/horizontal} {format}, up to 10 seconds, or an image with a {square} {format with period}",
            [
              s._param(
                "video with",
                u.jsx(r("GeoBaseText.react"), {
                  color: "placeholder",
                  size: "value",
                  weight: "bold",
                  children: s._(/*BTDS*/ "video with"),
                }),
              ),
              s._param("full landscape/horizontal", p),
              s._param(
                "format",
                u.jsx(r("GeoBaseText.react"), {
                  color: "placeholder",
                  size: "value",
                  weight: "bold",
                  children: s._(/*BTDS*/ "format"),
                }),
              ),
              s._param("square", c),
              s._param(
                "format with period",
                u.jsx(r("GeoBaseText.react"), {
                  color: "placeholder",
                  size: "value",
                  weight: "bold",
                  children: s._(/*BTDS*/ "format."),
                }),
              ),
            ],
          ),
          INSTREAM_VERTICAL_VIDEO: s._(
            /*BTDS*/ "We recommend {full vertical} videos and {square} images.",
            [s._param("full vertical", _), s._param("square", c)],
          ),
          FB_REELS_OVERLAY: s._(
            /*BTDS*/ "We recommend {square} images or {fullscreen vertical} videos up to 10 seconds.",
            [s._param("square", c), s._param("fullscreen vertical", _)],
          ),
          ADS_ON_FACEBOOK_REELS: s._(
            /*BTDS*/ "Recommended video format is vertical (9:16), under 10 seconds. {break} Image format is square (1:1).",
            [s._param("break", u.jsx("br", {}))],
          ),
          ADS_ON_FACEBOOK_REELS_IMAGE: s._(
            /*BTDS*/ "We recommend {square} images.",
            [s._param("square", c)],
          ),
          FB_SEARCH_GRID: E,
          STORY: s._(
            /*BTDS*/ "We recommend {fullscreen vertical} images or videos.",
            [s._param("fullscreen vertical", _)],
          ),
          IG_REELS: s._(
            /*BTDS*/ "We recommend {full vertical} videos. Videos are limited to 15 minutes or less.",
            [s._param("full vertical", _)],
          ),
          OC_TWILIGHT_FEED: s._(
            /*BTDS*/ "Your ad will show your app's cover art from the Meta Quest Store.",
          ),
          OC_TWILIGHT_FEED_SPOTLIGHT: s._(
            /*BTDS*/ "Your ad will show your app's cover art from the Meta Horizon Store.",
          ),
          OC_TWILIGHT_SEARCH: s._(
            /*BTDS*/ "Your ad will show your app's cover art from the Meta Horizon Store.",
          ),
          OC_TWILIGHT_SEARCH_NULL_STATE: s._(
            /*BTDS*/ "Your ad will show your app's cover art from the Meta Quest Store.",
          ),
          OC_TWILIGHT_DEVELOPER_UPDATE: s._(
            /*BTDS*/ "We recommend {fullscreen_horizontal} content.",
            [s._param("fullscreen_horizontal", p)],
          ),
          OC_VR_APPS: s._(
            /*BTDS*/ "We recommend {fullscreen_horizontal}, {fullscreen_vertical} or {square} content.",
            [
              s._param("fullscreen_horizontal", p),
              s._param("fullscreen_vertical", _),
              s._param("square", c),
            ],
          ),
          OC_REWARDED_VIDEO: s._(
            /*BTDS*/ "We recommend {fullscreen_horizontal} content.",
            [s._param("fullscreen_horizontal", p)],
          ),
          IG_SHOP_TAB: s._(/*BTDS*/ "We recommend {square} images", [
            s._param("square", c),
          ]),
          BIZ_DISCO_FEED: s._(
            /*BTDS*/ "We recommend {square} images and {vertical} videos. {line break} Your ad will appear to English-speaking audiences in one or more eligible countries. {learn more}",
            [
              s._param("square", c),
              s._param("vertical", d),
              s._param(
                "line break",
                u.jsx("div", { children: u.jsx("br", {}) }),
              ),
              s._param(
                "learn more",
                u.jsx(r("GeoLink.react"), {
                  href: "https://www.facebook.com/business/help/1131129814312163",
                  target: "_blank",
                  children: s._(/*BTDS*/ "Learn More"),
                }),
              ),
            ],
          ),
          FB_REELS: I,
          FB_PROFILE_REELS: I,
          IG_EXPLORE_HOME: s._(
            /*BTDS*/ "We recommend {square} images or videos, {vertical} videos, and {fullscreen vertical} videos.",
            [
              s._param("square", c),
              s._param("vertical", d),
              s._param("fullscreen vertical", _),
            ],
          ),
          WHATSAPP_CHANNEL: s._(
            /*BTDS*/ "Your branded channel will be shown in WhatsApp.",
          ),
          WAMO_STATUS: s._(/*BTDS*/ "We recommend {=m1} images or videos.", [
            s._implicitParam(
              "=m1",
              u.jsx("strong", {
                children: s._(/*BTDS*/ "fullscreen vertical (9:16)"),
              }),
            ),
          ]),
          IG_EXPLORE_HOME_2_BY_2_DEPRECATION: s._(
            /*BTDS*/ "We recommend {square} images and {fullscreen vertical} videos.",
            [s._param("square", c), s._param("fullscreen vertical", _)],
          ),
          THREADS_FEED: r("gkx")("5512")
            ? s._(
                /*BTDS*/ "We recommend {horizontal} and {square} images or videos.",
                [s._param("horizontal", g), s._param("square", c)],
              )
            : s._(/*BTDS*/ "We recommend {horizontal} and {square} images", [
                s._param("horizontal", g),
                s._param("square", c),
              ]),
          FACEBOOK_NOTIFICATION: s._(
            /*BTDS*/ "Images or videos are not required for notification placement.",
          ),
          IG_EXPLORE_TALL_GRID: s._(
            /*BTDS*/ "We recommend {vertical} images and videos.",
            [s._param("vertical", d)],
          ),
        }),
      };
    l.default = T;
  },
  226,
);
