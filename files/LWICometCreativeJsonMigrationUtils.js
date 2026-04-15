__d(
  "LWICometCreativeJsonMigrationUtils",
  ["vulture"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t;
      return e == null
        ? null
        : { id: (t = e.id) != null ? t : void 0, name: e.name };
    }
    function s(t) {
      return t == null
        ? null
        : t
            .map(function (t) {
              return e(t);
            })
            .filter(Boolean);
    }
    function u(e) {
      switch (e) {
        case "CLASSIC":
          return "classic";
        case "INSTREAM_VIDEO":
          return "instream_video";
        case "REWARDED_VIDEO":
          return "rewarded_video";
      }
      return null;
    }
    function c(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              return u(e);
            })
            .filter(Boolean);
    }
    function d(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              return {
                adlabels: s(e.adlabels),
                text: e.text,
                translation_confidence: e.translation_confidence,
                url_tags: e.url_tags,
              };
            })
            .filter(Boolean);
    }
    function m(e) {
      return e == null || e === "%future added value" ? null : e;
    }
    function p(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              var t;
              return {
                adlabels: s(e.adlabels),
                type: m(e.type),
                value: (t = _(e.value)) != null ? t : void 0,
              };
            })
            .filter(Boolean);
    }
    function _(e) {
      var t = e == null ? void 0 : e.link;
      return t == null || t === "https://fb.me"
        ? babelHelpers.extends({}, e, { link: void 0 })
        : t.startsWith("tel:") || t.startsWith("fbgeo://")
          ? e
          : void 0;
    }
    function f(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              return m(e);
            })
            .filter(Boolean);
    }
    function g(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              return {
                adlabels: s(e.adlabels),
                text: e.text,
                translation_confidence: e.translation_confidence,
                url_tags: e.url_tags,
              };
            })
            .filter(Boolean);
    }
    function h(e) {
      switch (e) {
        case "DESKTOP":
          return "desktop";
        case "MOBILE":
          return "mobile";
      }
      return null;
    }
    function y(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              return h(e);
            })
            .filter(Boolean);
    }
    function C(e) {
      switch (e) {
        case "BIZ_DISCO_FEED":
          return "biz_disco_feed";
        case "FB_REELS":
          return "facebook_reels";
        case "FEED":
          return "feed";
        case "GROUPS":
          return "group";
        case "GROUP_MALL":
          return "facebook_groups";
        case "GROUP_TAB":
          return "groups_feed";
        case "INSTANT_ARTICLE":
          return "instant_article";
        case "INSTREAM_VIDEO":
          return "instream_video";
        case "JOBS_BROWSER":
          return "jobs_browser";
        case "MARKETPLACE":
          return "marketplace";
        case "RHC":
          return "right_hand_column";
        case "SEARCH":
          return "search";
        case "STORY":
          return "story";
        case "STORY_STICKER":
          return "story_sticker";
        case "SUGGESTED_VIDEO":
          return "suggested_video";
        case "VIDEO_FEEDS":
          return "video_feeds";
      }
      return null;
    }
    function b(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              return C(e);
            })
            .filter(Boolean);
    }
    function v(e) {
      return e == null ? null : babelHelpers.extends({}, e);
    }
    function S(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              return {
                adlabels: s(e.adlabels),
                hash: e.url == null ? e.hash : void 0,
                image_crops: v(e.image_crops),
                interactive_components_spec: null,
                portrait_customizations: null,
                url: e.url,
                url_tags: e.url_tags,
              };
            })
            .filter(Boolean);
    }
    function R(e) {
      switch (e) {
        case "EXPLORE":
          return "explore";
        case "REELS":
          return "reels";
        case "SHOP":
          return "shop";
        case "STORY":
          return "story";
        case "STREAM":
          return "stream";
      }
      return null;
    }
    function L(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              return R(e);
            })
            .filter(Boolean);
    }
    function E(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              return {
                adlabels: s(e.adlabels),
                deeplink_url: e.deeplink_url,
                display_url: e.deeplink_url,
                url_tags: e.url_tags,
                website_url: e.website_url,
              };
            })
            .filter(Boolean);
    }
    function k(e) {
      switch (e) {
        case "MESSENGER_INBOX":
          return "messenger_home";
        case "MESSENGER_STORY":
          return "story";
        case "MESSENGER_THREAD":
          return "sponsored_messages";
      }
      return null;
    }
    function I(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              return k(e);
            })
            .filter(Boolean);
    }
    function T(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              return {
                adlabels: s(e.adlabels),
                post_id: e.post_id,
                source_instagram_media_id: e.source_instagram_media_id,
              };
            })
            .filter(Boolean);
    }
    function D(e) {
      switch (e) {
        case "AUDIENCE_NETWORK":
          return "audience_network";
        case "FACEBOOK":
          return "facebook";
        case "INSTAGRAM":
          return "instagram";
        case "MESSENGER":
          return "messenger";
        case "OCULUS":
          return "oculus";
        case "WHATSAPP":
          return "whatsapp";
      }
      return null;
    }
    function x(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              return D(e);
            })
            .filter(Boolean);
    }
    function $(e) {
      var t, n, r, o, a, i, l;
      return {
        audience_network_positions:
          (t = c(e.audience_network_positions)) != null ? t : void 0,
        device_platforms: (n = y(e.device_platforms)) != null ? n : void 0,
        facebook_positions: (r = b(e.facebook_positions)) != null ? r : void 0,
        instagram_positions:
          (o = L(e.instagram_positions)) != null ? o : void 0,
        messenger_positions:
          (a = I(e.messenger_positions)) != null ? a : void 0,
        publisher_platforms:
          (i = x(e.publisher_platforms)) != null ? i : void 0,
        whatsapp_positions: (l = F(e.whatsapp_positions)) != null ? l : void 0,
      };
    }
    function P(t) {
      return t == null
        ? null
        : t
            .map(function (t) {
              return {
                body_label: e(t.body_label),
                call_to_action_type_label: e(t.call_to_action_type_label),
                caption_label: e(t.caption_label),
                description_label: e(t.description_label),
                image_label: e(t.image_label),
                link_url_label: e(t.link_url_label),
                targeting: $(t.targeting),
                title_label: e(t.title_label),
                video_label: e(t.video_label),
              };
            })
            .filter(Boolean);
    }
    function N(e) {
      if (e == null) return null;
      switch (e) {
        case "assumed_custom":
        case "assumed_generated_default":
        case "custom":
        case "generated_default":
        case "generated_selected":
        case "scrubber_selected":
        case "smart_selected":
        case "unknown":
          return e;
      }
      return null;
    }
    function M(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              return {
                adlabels: s(e.adlabels),
                text: e.text,
                translation_confidence: e.translation_confidence,
                url_tags: e.url_tags,
              };
            })
            .filter(Boolean);
    }
    function w(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              return {
                adlabels: null,
                caption_ids: null,
                interactive_components_spec: null,
                portrait_customizations: null,
                thumbnail_hash: e.thumbnail_hash,
                thumbnail_source: N(e.thumbnail_source),
                thumbnail_url: e.thumbnail_url,
                url_tags: null,
                video_id: e.video_id,
              };
            })
            .filter(Boolean);
    }
    function A(e) {
      switch (e) {
        case "STATUS":
          return "status";
      }
      return null;
    }
    function F(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              return (r("vulture")("Pi35erWGnqueSvXTpzurEvCPUdI="), A(e));
            })
            .filter(Boolean);
    }
    ((l.convertBodiesType = d),
      (l.convertCTAType = m),
      (l.convertCTAsType = p),
      (l.convertCTAValueToAFS = _),
      (l.convertCTATypesType = f),
      (l.convertDescriptionsType = g),
      (l.convertImagesType = S),
      (l.convertLinkUrlsType = E),
      (l.convertPostsType = T),
      (l.convertTargetRulesType = P),
      (l.convertTitlesType = M),
      (l.convertVideosType = w));
  },
  98,
);
