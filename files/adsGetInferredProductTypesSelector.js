__d(
  "adsGetInferredProductTypesSelector",
  [
    "AdCampaignDestination",
    "AdsPEAdgroupSelectors",
    "AdsPECampaignGroupSelectors",
    "AdsPECampaignSelectors",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "emptyFunction",
    "isAdsCanvasLink",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreSelector")(
        [],
        r("emptyFunction").thatReturnsArgument,
        { name: i.id + ".adObjectIDAndTypeSelector" },
      ),
      s = r("adsCreateSelector")(
        [
          e,
          o("AdsPEAdgroupSelectors").getCachedByFieldsSelector,
          o("AdsPECampaignSelectors").getCachedRecordSelector,
          o("AdsPECampaignGroupSelectors").getCachedRecordSelector,
        ],
        function (t, n, o, a) {
          if (!r("justknobx")._("26")) return null;
          var e = t.id,
            i = t.type;
          try {
            var l = null;
            switch (i) {
              case "ad": {
                var s, c, d;
                l = n(e, {
                  adset_id: null,
                  creative: null,
                  tracking_specs: null,
                }).getValue();
                var m =
                  (s = l) != null && s.adset_id
                    ? o(l.adset_id).getValue()
                    : null;
                return u(
                  (c = l) == null ? void 0 : c.tracking_specs,
                  (d = l) == null ? void 0 : d.creative,
                  m,
                );
              }
              case "ad_set":
                return ((l = o(e).getValue()), L(l));
              case "campaign":
                return ((l = a(e).getValue()), E(l));
              default:
                return null;
            }
          } catch (e) {
            return null;
          }
        },
        { name: i.id + ".adsGetInferredProductTypesByObjectTypeSelector" },
      );
    function u(e, t, n) {
      if (!t) return null;
      var r = [],
        o = t.object_story_spec;
      return (
        r.push.apply(r, c(t, n)),
        r.push.apply(r, T(n)),
        r.push.apply(r, g(t)),
        r.push.apply(r, h(t)),
        r.push.apply(r, f(o, n)),
        r.push.apply(r, S(t)),
        o
          ? (r.push.apply(r, d(t)),
            r.push.apply(r, _(o)),
            r.push.apply(r, m(o)),
            r.push.apply(r, p(o)),
            r.push.apply(r, v(e)),
            r.push.apply(r, R(t)),
            r)
          : (r.push("NO_OBJECT_STORY_SPEC"), r)
      );
    }
    function c(e, t) {
      var n,
        r,
        o,
        a = [],
        i =
          t == null || (n = t.targeting) == null
            ? void 0
            : n.publisher_platforms;
      i != null &&
        i.contains("instagram") &&
        e != null &&
        e.instagram_branded_content &&
        a.push("INSTAGRAM_BRANDED_CONTENT");
      var l = e == null ? void 0 : e.branded_content_boosting_type;
      if (
        l != null &&
        ((e == null || (r = e.facebook_branded_content) == null
          ? void 0
          : r.sponsor_page_id) != null ||
          (e == null || (o = e.instagram_branded_content) == null
            ? void 0
            : o.sponsor_id) != null)
      )
        switch (l) {
          case "SPONSOR_BOOST":
            a.push("BRANDED_CONTENT_BOOST");
            break;
          case "CREATOR_BOOST":
            a.push("BRANDED_CONTENT_BOOST");
            break;
          case "SPONSOR_INLINE":
            a.push("BRANDED_CONTENT_INLINE");
            break;
          case "CREATOR_INLINE":
            a.push("BRANDED_CONTENT_INLINE");
            break;
        }
      return (a.length > 0 && a.push("BRANDED_CONTENT"), a);
    }
    function d(e) {
      var t,
        n = [];
      return (
        (e == null ||
        (t = e.creative_sourcing_spec) == null ||
        (t = t.catalog) == null
          ? void 0
          : t.enroll_status) === "OPT_IN" &&
          n.push("CONNECTED_SOURCES_CATALOG"),
        n
      );
    }
    function m(e) {
      var t = [],
        n = e == null ? void 0 : e.link_data;
      return (
        n &&
          (t.push("LINK"),
          n.offer_id != null && t.push("OFFER"),
          n.event_id != null && t.push("EVENT")),
        t
      );
    }
    function p(e) {
      var t = [],
        n = e == null ? void 0 : e.video_data;
      return (n && (t.push("VIDEO"), n.offer_id != null && t.push("OFFER")), t);
    }
    function _(e) {
      var t = e == null ? void 0 : e.photo_data;
      return t ? ["PHOTO"] : [];
    }
    function f(e, t) {
      var n,
        o,
        a = t == null ? void 0 : t.destination_type,
        i =
          (e == null ||
          (n = e.link_data) == null ||
          (n = n.call_to_action) == null ||
          (n = n.value) == null
            ? void 0
            : n.app_destination) ||
          (e == null ||
          (o = e.video_data) == null ||
          (o = o.call_to_action) == null ||
          (o = o.value) == null
            ? void 0
            : o.app_destination);
      return a === r("AdCampaignDestination").MESSENGER || i === "MESSENGER"
        ? ["CLICK_TO_MESSENGER"]
        : [];
    }
    function g(e) {
      var t;
      return (e == null || (t = e.destination_spec) == null
        ? void 0
        : t.destination_type) === "WEBSITE_AND_SHOP"
        ? ["SHOPS_ADS"]
        : [];
    }
    function h(e) {
      var t,
        n,
        o,
        a,
        i,
        l,
        s,
        u = e == null ? void 0 : e.object_story_spec,
        c =
          (t =
            (n =
              (o = u == null || (a = u.link_data) == null ? void 0 : a.link) !=
              null
                ? o
                : u == null || (i = u.template_data) == null
                  ? void 0
                  : i.link) != null
              ? n
              : u == null ||
                  (l = u.video_data) == null ||
                  (l = l.call_to_action) == null ||
                  (l = l.value) == null
                ? void 0
                : l.link) != null
            ? t
            : e == null ||
                (s = e.asset_feed_spec) == null ||
                (s = s.link_urls) == null ||
                (s = s[0]) == null
              ? void 0
              : s.website_url;
      return r("isAdsCanvasLink")(c) ? ["INSTANT_EXPERIENCE"] : [];
    }
    function y(e) {
      var t;
      return (e == null ||
      (t = e.targeting) == null ||
      (t = t.targeting_relaxation_types) == null
        ? void 0
        : t.get("custom_audience")) === 1
        ? ["ADVANTAGE_CUSTOM_AUDIENCE"]
        : [];
    }
    function C(e) {
      var t;
      return (e == null || (t = e.targeting) == null
        ? void 0
        : t.targeting_optimization) === "expansion_all"
        ? ["ADVANTAGE_DETAILED_TARGETING"]
        : [];
    }
    function b(e) {
      var t;
      return (e == null ||
      (t = e.targeting) == null ||
      (t = t.targeting_relaxation_types) == null
        ? void 0
        : t.get("lookalike")) === 1
        ? ["ADVANTAGE_LOOKALIKE"]
        : [];
    }
    function v(e) {
      return e != null &&
        e.some(function (e) {
          return e.dataset != null && e.dataset.length > 0;
        })
        ? ["AUTO_TRACKING"]
        : [];
    }
    function S(e) {
      var t,
        n,
        r,
        o,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m,
        p,
        _ = [],
        f =
          e == null || (t = e.degrees_of_freedom_spec) == null
            ? void 0
            : t.creative_features_spec;
      ((f == null || (n = f.standard_enhancements) == null
        ? void 0
        : n.enroll_status) === "OPT_IN" && _.push("ADVANTAGE_PLUS_CREATIVE_SE"),
        (f == null || (r = f.advantage_plus_creative) == null
          ? void 0
          : r.enroll_status) === "OPT_IN" &&
          _.push("ADVANTAGE_PLUS_CREATIVE_FULL_ADOPTION"),
        (e == null || (o = e.degrees_of_freedom_spec) == null
          ? void 0
          : o.degrees_of_freedom_type) === "USER_ENROLLED_AUTOFLOW" &&
          _.push("AUTOFLOW_LITE_AD"),
        (f == null || (a = f.standard_enhancements_catalog) == null
          ? void 0
          : a.enroll_status) === "OPT_IN" &&
          _.push("ADVANTAGE_PLUS_CREATIVE_DA"),
        (f == null || (i = f.inline_comment) == null
          ? void 0
          : i.enroll_status) === "OPT_IN" && _.push("APLUSC_INLINE_COMMENT"),
        (f == null || (l = f.cv_transformation) == null
          ? void 0
          : l.enroll_status) === "OPT_IN" &&
          _.push("APLUSC_CV_TRANSFORMATION"));
      var g,
        h = e == null || (s = e.asset_feed_spec) == null ? void 0 : s.audios;
      return (
        h != null && h.length > 0 && (g = h[0].type),
        (g === "random" || g === "selected") && _.push("APLUSC_MUSIC"),
        (f == null || (u = f.profile_card) == null
          ? void 0
          : u.enroll_status) === "OPT_IN" && _.push("APLUSC_PROFILE_END_CARD"),
        (f == null || (c = f.description_automation) == null
          ? void 0
          : c.enroll_status) === "OPT_IN" &&
          _.push("APLUSC_DESCRIPTION_AUTOMATION"),
        (f == null || (d = f.media_order) == null
          ? void 0
          : d.enroll_status) === "OPT_IN" &&
          _.push("APLUSC_HIGHLIGHT_CAROUSEL_CARD"),
        (f == null || (m = f.feed_caption_optimization) == null
          ? void 0
          : m.enroll_status) === "OPT_IN" &&
          _.push("ADVANTAGE_PLUS_CREATIVE_FEED_CAPTION_ELIGIBLE_AD"),
        (f == null || (p = f.video_filtering) == null
          ? void 0
          : p.enroll_status) === "OPT_IN" &&
          _.push("ADVANTAGE_PLUS_CREATIVE_VIDEO_FILTERING_ELIGIBLE_AD"),
        (e == null ? void 0 : e.media_sourcing_spec) != null &&
          _.push("MULTI_MEDIA_AD"),
        _
      );
    }
    function R(e) {
      if (!(e != null && e.omnichannel_link_spec)) return [];
      var t = ["OMNICHANNEL_WEB_AND_APP"],
        n = e == null ? void 0 : e.applink_treatment;
      switch (n) {
        case "automatic":
          t.push("OMNICHANNEL_APPLINK_AUTOMATIC");
          break;
        case "deeplink_with_web_fallback":
          t.push("OMNICHANNEL_APPLINK_DEEPLINK_WITH_WEB_FALLBACK");
          break;
        case "deeplink_with_appstore_fallback":
          t.push("OMNICHANNEL_APPLINK_DEEPLINK_WITH_APPSTORE_FALLBACK");
          break;
        case "web_only":
          t.push("OMNICHANNEL_APPLINK_WEB_ONLY");
          break;
      }
      return t;
    }
    function L(e) {
      var t = [];
      return e
        ? (t.push("AD_SET"),
          t.push.apply(t, T(e)),
          t.push.apply(t, y(e)),
          t.push.apply(t, C(e)),
          t.push.apply(t, b(e)),
          t)
        : null;
    }
    function E(e) {
      var t = [];
      return e
        ? (t.push("AD_CAMPAIGN"),
          t.push.apply(t, k(e)),
          t.push.apply(t, I(e)),
          t)
        : null;
    }
    function k(e) {
      var t,
        n = "7441353562626803";
      return (e == null || (t = e.ad_creation_package_config) == null
        ? void 0
        : t.id) === n
        ? ["IG_BOOST_TRAFFIC_CREATION_PACKAGE"]
        : [];
    }
    function I(e) {
      return (e == null ? void 0 : e.is_odax_campaign_group) === !0
        ? ["ODAX"]
        : [];
    }
    function T(e) {
      var t,
        n,
        r = [],
        o =
          e == null || (t = e.targeting) == null
            ? void 0
            : t.publisher_platforms;
      o == null ||
        o.forEach(function (e) {
          switch (e) {
            case "audience_network":
              r.push("AUDIENCE_NETWORK");
              break;
            case "facebook":
              r.push("FACEBOOK");
              break;
            case "instagram":
              r.push("INSTAGRAM");
              break;
            case "messenger":
              r.push("MESSENGER");
              break;
            case "oculus":
              r.push("OCULUS");
              break;
            case "whatsapp":
              r.push("WHATSAPP");
              break;
          }
        });
      var a =
        e == null || (n = e.targeting) == null ? void 0 : n.instagram_positions;
      return (
        a == null ||
          a.forEach(function (e) {
            switch (e) {
              case "explore":
                r.push("INSTAGRAM_EXPLORE");
                break;
              case "explore_home":
                r.push("INSTAGRAM_EXPLORE_HOME");
                break;
              case "ig_search":
                r.push("INSTAGRAM_SEARCH");
                break;
              case "lead_gen_multi_submit":
                r.push("INSTAGRAM_LEAD_GEN_MULTI_SUBMIT");
                break;
              case "profile_feed":
                r.push("INSTAGRAM_PROFILE_FEED");
                break;
              case "profile_reels":
                r.push("INSTAGRAM_PROFILE_REELS");
                break;
              case "reels":
                r.push("INSTAGRAM_REELS");
                break;
              case "reels_overlay":
                r.push("INSTAGRAM_REELS_OVERLAY");
                break;
              case "shop":
                r.push("INSTAGRAM_SHOP");
                break;
              case "story":
                r.push("INSTAGRAM_STORY");
                break;
              case "stream":
                r.push("INSTAGRAM_STREAM");
                break;
              default:
                break;
            }
          }),
        r
      );
    }
    l.adsGetInferredProductTypesByObjectTypeSelector = s;
  },
  98,
);
