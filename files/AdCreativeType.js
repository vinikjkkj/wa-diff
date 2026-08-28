__d(
  "AdCreativeType",
  ["fbt"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    for (
      var e = Object.freeze({
          STANDARD: 1,
          INLINE_FAN: 2,
          INLINE_RSVP: 3,
          BASS_PAGE_CONNECTIONS: 9,
          PAGE_POSTS_V2: 27,
          CONTEXTUAL_APP_AD: 32,
          INSTAGRAM_AD: 35,
          FEED_URL: 101,
          NEKO_LPP: 102,
          AD_VIDEO: 103,
          EXOTIC_OR_INVALID: 999,
          OFFER_CLAIMED_STORY: 1001,
          GAME_PLAYED_STORY: 1002,
          SPECIFIC_POST_LIKE_STORY: 1003,
          SPECIFIC_POST_COMMENT_STORY: 1004,
          SPECIFIC_POST_SHARE_STORY: 1005,
          EVENT_RSVP_STORY: 1006,
          PAGE_CHECKIN_STORY: 1007,
          WALL_POST_STORY: 1008,
          PAGE_LIKE_STORY: 1009,
          APP_USER_ACTION_STORY: 1010,
          PAGE_POST_LIKE_STORY: 1011,
          PAGE_SUBSCRIBE_STORY: 1012,
          DOMAIN_SHARE_STORY: 1013,
          QUESTION_VOTE_STORY: 1014,
          OTHER: 1999,
        }),
        u = {
          STORY_PAGE_LIKE: {
            id: 9,
            name: s._(
              /*BTDS*/ "Stories about their friends liking {page_name}",
              [s._param("page_name", "{page_name}")],
            ),
          },
          AD_EXTERNAL_URL: {
            id: 1,
            name: s._(/*BTDS*/ "A new ad about {url}", [
              s._param("url", "{url}"),
            ]),
            validFields: ["title", "body", "linkUrl", "imageUrl", "imageHash"],
            requiredFields: [
              "title",
              "body",
              "linkUrl",
              ["imageUrl", "imageHash"],
            ],
          },
          FEED_URL: {
            id: 101,
            validFields: [
              "title",
              "body",
              "linkUrl",
              "imageUrl",
              "imageHash",
              "storyId",
              "brandedContentSponsorPageID",
            ],
            requiredFields: [
              "actor",
              "title",
              "body",
              "linkUrl",
              ["imageUrl", "imageHash"],
            ],
          },
          AD_FAN_LIKE: {
            id: 2,
            name: s._(/*BTDS*/ "A new ad about {page_name}", [
              s._param("page_name", "{page_name}"),
            ]),
            validFields: [
              "objectId",
              "title",
              "body",
              "linkUrl",
              "imageUrl",
              "imageHash",
            ],
            requiredFields: ["objectId", "body"],
          },
          AD_EVENT_RSVP: {
            id: 3,
            name: s._(/*BTDS*/ "A new ad about {event_name}", [
              s._param("event_name", "{event_name}"),
            ]),
            validFields: [
              "objectId",
              "body",
              "imageUrl",
              "imageHash",
              "linkUrl",
            ],
            requiredFields: [
              "objectId",
              "body",
              "linkUrl",
              ["imageUrl", "imageHash"],
            ],
          },
          AD_PAGE_POST: {
            id: 27,
            name: s._(/*BTDS*/ "Just my post"),
            validFields: [
              "objectId",
              "autoUpdate",
              "storyId",
              "urlTags",
              "storyLang",
            ],
            requiredFields: ["objectId", "storyId"],
          },
          MOBILE_APP_INSTALL: {
            id: 32,
            name: s._(/*BTDS*/ "Create a mobile ad about {app_name}", [
              s._param("app_name", "{app_name}"),
            ]),
            validFields: [
              "objectId",
              "title",
              "body",
              "iconImageHash",
              "iconImageUrl",
              "imageHash",
              "imageUrl",
              "mobileStore",
              "mobileStoreContentId",
              "videoId",
              "brandedContentSponsorPageID",
            ],
            requiredFields: ["objectId", ["imageUrl", "imageHash"]],
          },
          MOBILE_APP_ENGAGEMENT: {
            id: 32,
            name: s._(/*BTDS*/ "Create a mobile ad about {app_name}", [
              s._param("app_name", "{app_name}"),
            ]),
            validFields: [
              "objectId",
              "title",
              "body",
              "iconImageHash",
              "iconImageUrl",
              "imageHash",
              "imageUrl",
              "mobileStore",
              "mobileApplinkSpec",
              "mobileProductName",
              "callToActionType",
            ],
            requiredFields: ["objectId", ["imageUrl", "imageHash"]],
          },
          CANVAS_APP_INSTALL_ENGAGEMENT: {
            id: 32,
            name: s._(/*BTDS*/ "Create a desktop ad about {app_name}", [
              s._param("app_name", "{app_name}"),
            ]),
            validFields: [
              "objectId",
              "title",
              "body",
              "iconImageHash",
              "iconImageUrl",
              "imageHash",
              "imageUrl",
              "mobileStore",
              "urlTags",
              "linkUrl",
            ],
            requiredFields: ["objectId", ["imageUrl", "imageHash"]],
          },
          NEKO_LPP: {
            id: 102,
            validFields: [
              "body",
              "brandedContentSponsorPageID",
              "callToActionType",
              "imageHash",
              "imageUrl",
              "linkUrl",
              "mobileProductName",
              "storyId",
              "title",
              "videoId",
            ],
            requiredFields: [
              "callToActionType",
              "linkUrl",
              ["imageUrl", "videoId"],
            ],
          },
          AD_VIDEO: {
            id: 103,
            validFields: [
              "body",
              "callToActionType",
              "videoId",
              "brandedContentSponsorPageID",
            ],
            requiredFields: ["body", "videoId"],
          },
        },
        c = Object.values(u),
        d = {},
        m = 0;
      m < c.length;
      ++m
    ) {
      var p = c[m].validFields;
      if (p) for (var _ = 0; _ < p.length; ++_) d[p[_]] = !0;
    }
    var f = Object.keys(d);
    (f.push("id", "type", "imageCrops"),
      f.sort(),
      (l.AD_CREATIVE_TYPE = e),
      (l.keyToType = u),
      (l.ALL_CREATIVE_API_FIELDS = f));
  },
  226,
);
