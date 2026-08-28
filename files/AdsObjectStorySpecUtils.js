__d(
  "AdsObjectStorySpecUtils",
  [
    "AdsAPIAdgroupPaths",
    "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
    "AdsCreativeSpecTypes",
    "getByPath",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = _(e, t).call_to_action;
      return n ? r("getByPath")(e, n) : null;
    }
    function s(e, t) {
      var n = _(e, t).display_url;
      return n ? r("getByPath")(e, n) : null;
    }
    function u(e, t) {
      var n = _(e, t).headline;
      return n ? r("getByPath")(e, n) : null;
    }
    function c(e, t) {
      var n = _(e, t).message;
      return n ? r("getByPath")(e, n) : null;
    }
    function d(e, t) {
      var n = _(e, t).link;
      return n ? r("getByPath")(e, n) : null;
    }
    function m(e, t) {
      var n = _(e, t).link_description;
      return n ? r("getByPath")(e, n) : null;
    }
    function p(e, t) {
      var n = _(e, t).eventID;
      return n ? r("getByPath")(e, n) : null;
    }
    function _(e, t) {
      switch (t) {
        case r("AdsCreativeSpecTypes").LINK_DATA:
          return {
            call_to_action:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .CALL_TO_ACTION.path,
            display_url:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .CAPTION,
            eventID:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .EVENT_ID,
            headline:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.NAME,
            link: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
              .LINK,
            link_description:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .DESCRIPTION,
            message:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .MESSAGE,
            image_hash:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .IMAGE_HASH,
            image_url:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .PICTURE,
            multi_share_end_card:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .MULTI_SHARE_END_CARD,
            multi_share_optimized:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .MULTI_SHARE_OPTIMIZED,
            page_welcome_message:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .PAGE_WELCOME_MESSAGE,
            retailer_item_ids:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .RETAILER_ITEM_IDS,
            post_click_item_headline:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .POST_CLICK_CONFIGURATION.POST_CLICK_ITEM_HEADLINE,
            post_click_item_description:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
                .POST_CLICK_CONFIGURATION.POST_CLICK_ITEM_DESCRIPTION,
          };
        case r("AdsCreativeSpecTypes").PHOTO_DATA:
          return {
            call_to_action: o(
              "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
            ).getUnifiedCreativeOrLegacyPath(
              e,
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.PHOTO_DATA
                .CALL_TO_ACTION.path,
              [].concat(
                r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC
                  .CALL_TO_ACTIONS,
                ["0"],
              ),
            ),
            image_hash: o(
              "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
            ).getUnifiedCreativeOrLegacyPath(
              e,
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.PHOTO_DATA
                .IMAGE_HASH,
              [].concat(
                r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.IMAGES,
                ["0", "hash"],
              ),
            ),
            image_url: o(
              "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
            ).getUnifiedCreativeOrLegacyPath(
              e,
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.PHOTO_DATA.URL,
              [].concat(
                r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.IMAGES,
                ["0", "url"],
              ),
            ),
            link: o(
              "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
            ).getUnifiedCreativeOrLegacyPath(
              e,
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.PHOTO_DATA
                .CALL_TO_ACTION.VALUE.LINK,
              [].concat(
                r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC
                  .CALL_TO_ACTIONS,
                ["0", "value", "link"],
              ),
            ),
            message: o(
              "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
            ).getUnifiedCreativeOrLegacyPath(
              e,
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.PHOTO_DATA
                .CAPTION,
              [].concat(
                r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.BODIES,
                ["0", "text"],
              ),
            ),
            page_welcome_message: o(
              "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
            ).getUnifiedCreativeOrLegacyPath(
              e,
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.PHOTO_DATA
                .PAGE_WELCOME_MESSAGE,
              r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.ADDITIONAL_DATA
                .PAGE_WELCOME_MESSAGE,
            ),
          };
        case r("AdsCreativeSpecTypes").OFFER_DATA:
          return {
            message:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.OFFER_DATA
                .MESSAGE,
            image_url:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.OFFER_DATA
                .IMAGE_URL,
          };
        case r("AdsCreativeSpecTypes").TEMPLATE_DATA:
          return {
            call_to_action:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA
                .CALL_TO_ACTION.path,
            display_url:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA
                .CAPTION,
            headline:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA
                .NAME,
            image_hash:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA
                .IMAGE_HASH,
            image_url:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA
                .PICTURE,
            link: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC
              .TEMPLATE_DATA.LINK,
            link_description:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA
                .DESCRIPTION,
            message:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA
                .MESSAGE,
            multi_share_end_card:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA
                .MULTI_SHARE_END_CARD,
            multi_share_optimized:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA
                .MULTI_SHARE_OPTIMIZED,
            retailer_item_ids:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA
                .RETAILER_ITEM_IDS,
            post_click_item_headline:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA
                .POST_CLICK_CONFIGURATION.POST_CLICK_ITEM_HEADLINE,
            post_click_item_description:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA
                .POST_CLICK_CONFIGURATION.POST_CLICK_ITEM_DESCRIPTION,
          };
        case r("AdsCreativeSpecTypes").TEXT_DATA:
          return {
            message:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.TEXT_DATA
                .MESSAGE,
          };
        case r("AdsCreativeSpecTypes").VIDEO_DATA:
          return {
            call_to_action:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
                .CALL_TO_ACTION.path,
            display_url:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
                .CALL_TO_ACTION.VALUE.CAPTION,
            eventID:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
                .CALL_TO_ACTION.VALUE.EVENT_ID,
            headline:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
                .TITLE,
            image_hash:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
                .IMAGE_HASH,
            image_url:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
                .IMAGE_URL,
            link_description:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
                .LINK_DESCRIPTION,
            message:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
                .MESSAGE,
            link: r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
              .CALL_TO_ACTION.VALUE.LINK,
            page_welcome_message:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
                .PAGE_WELCOME_MESSAGE,
            retailer_item_ids:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
                .RETAILER_ITEM_IDS,
            post_click_item_headline:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
                .POST_CLICK_CONFIGURATION.POST_CLICK_ITEM_HEADLINE,
            post_click_item_description:
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
                .POST_CLICK_CONFIGURATION.POST_CLICK_ITEM_DESCRIPTION,
          };
      }
      return {};
    }
    function f(e) {
      var t,
        n =
          e == null || (t = e.creative) == null ? void 0 : t.object_story_spec;
      return (
        n != null &&
        (!!(n != null && n.page_id) || !!(n != null && n.instagram_actor_id))
      );
    }
    ((l.getCallToAction = e),
      (l.getDisplayURL = s),
      (l.getHeadline = u),
      (l.getPrimaryText = c),
      (l.getLink = d),
      (l.getLinkDescription = m),
      (l.getEventID = p),
      (l.getPaths = _),
      (l.isUsingObjectStorySpec = f));
  },
  98,
);
