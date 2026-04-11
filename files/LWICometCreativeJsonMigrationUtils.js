__d(
  "LWICometCreativeJsonMigrationUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t;
      return e == null
        ? null
        : { id: (t = e.id) != null ? t : void 0, name: e.name };
    }
    function l(t) {
      return t == null
        ? null
        : t
            .map(function (t) {
              return e(t);
            })
            .filter(Boolean);
    }
    function s(e) {
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
    function u(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              return s(e);
            })
            .filter(Boolean);
    }
    function c(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              return {
                adlabels: l(e.adlabels),
                text: e.text,
                translation_confidence: e.translation_confidence,
                url_tags: e.url_tags,
              };
            })
            .filter(Boolean);
    }
    function d(e) {
      return e == null || e === "%future added value" ? null : e;
    }
    function m(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              var t;
              return {
                adlabels: l(e.adlabels),
                type: d(e.type),
                value: (t = p(e.value)) != null ? t : void 0,
              };
            })
            .filter(Boolean);
    }
    function p(e) {
      var t = e == null ? void 0 : e.link;
      return t == null || t === "https://fb.me"
        ? babelHelpers.extends({}, e, { link: void 0 })
        : t.startsWith("tel:") || t.startsWith("fbgeo://")
          ? e
          : void 0;
    }
    function _(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              return d(e);
            })
            .filter(Boolean);
    }
    function f(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              return {
                adlabels: l(e.adlabels),
                text: e.text,
                translation_confidence: e.translation_confidence,
                url_tags: e.url_tags,
              };
            })
            .filter(Boolean);
    }
    function g(e) {
      switch (e) {
        case "DESKTOP":
          return "desktop";
        case "MOBILE":
          return "mobile";
      }
      return null;
    }
    function h(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              return g(e);
            })
            .filter(Boolean);
    }
    function y(e) {
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
    function C(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              return y(e);
            })
            .filter(Boolean);
    }
    function b(e) {
      return e == null ? null : babelHelpers.extends({}, e);
    }
    function v(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              return {
                adlabels: l(e.adlabels),
                hash: e.url == null ? e.hash : void 0,
                image_crops: b(e.image_crops),
                interactive_components_spec: null,
                portrait_customizations: null,
                url: e.url,
                url_tags: e.url_tags,
              };
            })
            .filter(Boolean);
    }
    function S(e) {
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
    function R(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              return S(e);
            })
            .filter(Boolean);
    }
    function L(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              return {
                adlabels: l(e.adlabels),
                deeplink_url: e.deeplink_url,
                display_url: e.deeplink_url,
                url_tags: e.url_tags,
                website_url: e.website_url,
              };
            })
            .filter(Boolean);
    }
    function E(e) {
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
    function k(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              return E(e);
            })
            .filter(Boolean);
    }
    function I(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              return {
                adlabels: l(e.adlabels),
                post_id: e.post_id,
                source_instagram_media_id: e.source_instagram_media_id,
              };
            })
            .filter(Boolean);
    }
    function T(e) {
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
    function D(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              return T(e);
            })
            .filter(Boolean);
    }
    function x(e) {
      var t, n, r, o, a, i, l;
      return {
        audience_network_positions:
          (t = u(e.audience_network_positions)) != null ? t : void 0,
        device_platforms: (n = h(e.device_platforms)) != null ? n : void 0,
        facebook_positions: (r = C(e.facebook_positions)) != null ? r : void 0,
        instagram_positions:
          (o = R(e.instagram_positions)) != null ? o : void 0,
        messenger_positions:
          (a = k(e.messenger_positions)) != null ? a : void 0,
        publisher_platforms:
          (i = D(e.publisher_platforms)) != null ? i : void 0,
        whatsapp_positions: (l = A(e.whatsapp_positions)) != null ? l : void 0,
      };
    }
    function $(t) {
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
                targeting: x(t.targeting),
                title_label: e(t.title_label),
                video_label: e(t.video_label),
              };
            })
            .filter(Boolean);
    }
    function P(e) {
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
    function N(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              return {
                adlabels: l(e.adlabels),
                text: e.text,
                translation_confidence: e.translation_confidence,
                url_tags: e.url_tags,
              };
            })
            .filter(Boolean);
    }
    function M(e) {
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
                thumbnail_source: P(e.thumbnail_source),
                thumbnail_url: e.thumbnail_url,
                url_tags: null,
                video_id: e.video_id,
              };
            })
            .filter(Boolean);
    }
    function w(e) {
      switch (e) {
        case "STATUS":
          return "status";
      }
      return null;
    }
    function A(e) {
      return e == null
        ? null
        : e
            .map(function (e) {
              return w(e);
            })
            .filter(Boolean);
    }
    ((i.convertBodiesType = c),
      (i.convertCTAType = d),
      (i.convertCTAsType = m),
      (i.convertCTAValueToAFS = p),
      (i.convertCTATypesType = _),
      (i.convertDescriptionsType = f),
      (i.convertImagesType = v),
      (i.convertLinkUrlsType = L),
      (i.convertPostsType = I),
      (i.convertTargetRulesType = $),
      (i.convertTitlesType = N),
      (i.convertVideosType = M));
  },
  66,
);
