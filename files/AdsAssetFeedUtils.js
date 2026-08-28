__d(
  "AdsAssetFeedUtils",
  [
    "fbt",
    "AdCampaignDestination",
    "AdsAPIObjectives",
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupTypeUtils",
    "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
    "AdsAssetFeedFieldUtils",
    "AdsClientAdAssetFeedSpecFields",
    "AdsError",
    "AdsInterfacesLogger",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsPlacementAssetUtils",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupBodyMutators",
    "AdsUEditorAdgroupHeadlineMutators",
    "AdsUIMediaFormat",
    "AdsUIMediaFormatUtils",
    "ApiAdObjectTypes",
    "ApiDynamicCreativeOptimizationTypes",
    "DeepRecord",
    "adsConvertAdObjectRecordToPlainJS",
    "getByPath",
    "gkx",
    "immutable",
    "isAccountEligibleForThreeCOL2AdEx",
    "isAdsCanvasLink",
    "isEmptyObject",
    "isTruthy",
    "mixedToString",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e, u;
    function c(e) {
      switch (e) {
        case "AUTOMATIC_FORMAT":
          return r("AdsUIMediaFormat").DCO_AUTOMATIC;
        case "SINGLE_IMAGE":
          return r("AdsUIMediaFormat").SINGLE_IMAGE;
        case "SINGLE_VIDEO":
          return r("AdsUIMediaFormat").SINGLE_VIDEO;
        case "CAROUSEL":
          return r("AdsUIMediaFormat").CAROUSEL;
        case "CAROUSEL_IMAGE":
          return r("AdsUIMediaFormat").CAROUSEL;
        case "CAROUSEL_VIDEO":
          return r("AdsUIMediaFormat").CAROUSEL;
        case "COLLECTION":
          return r("AdsUIMediaFormat").COLLECTIONS;
        case "POST":
          return r("AdsUIMediaFormat").DCO_AUTOMATIC;
        default:
          return r("AdsUIMediaFormat").SINGLE_IMAGE;
      }
    }
    function d(e) {
      switch (e) {
        case r("AdsUIMediaFormat").SINGLE_IMAGE:
          return "SINGLE_IMAGE";
        case r("AdsUIMediaFormat").SINGLE_VIDEO:
          return "SINGLE_VIDEO";
        default: {
          var t = new Error("Cannot convert " + e + " into DLO ad format");
          throw (t.stack, t);
        }
      }
    }
    function m(e) {
      switch (e) {
        case "SINGLE_IMAGE":
          return "IMAGE";
        case "SINGLE_VIDEO":
          return "VIDEO";
        case "CAROUSEL":
        case "CAROUSEL_IMAGE":
        case "CAROUSEL_VIDEO":
          return "CAROUSEL";
        case "AUTOMATIC_FORMAT":
          return "AUTOMATIC";
        default:
          return "IMAGE";
      }
    }
    function p(e) {
      switch (e) {
        case "SINGLE_IMAGE":
        case "CAROUSEL_IMAGE":
          return "images";
        case "SINGLE_VIDEO":
        case "CAROUSEL_VIDEO":
          return "videos";
        default:
          return null;
      }
    }
    function _(e, t) {
      var n,
        a,
        i,
        l,
        s,
        u =
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.call_to_action_types,
        c =
          ((a = e.creative) == null ||
          (a = a.object_story_spec) == null ||
          (a = a.link_data) == null ||
          (a = a.call_to_action) == null
            ? void 0
            : a.type) ||
          ((i = e.creative) == null ||
          (i = i.object_story_spec) == null ||
          (i = i.template_data) == null ||
          (i = i.call_to_action) == null
            ? void 0
            : i.type) ||
          ((l = e.creative) == null ||
          (l = l.object_story_spec) == null ||
          (l = l.video_data) == null ||
          (l = l.call_to_action) == null
            ? void 0
            : l.type) ||
          (u instanceof o("immutable").Iterable &&
            ((s = u.entries()) == null || (s = s.next().value) == null
              ? void 0
              : s[1]));
      return c === "CALL_NOW" && t === r("AdCampaignDestination").PHONE_CALL;
    }
    function f(e, t, n) {
      var a,
        i,
        l,
        s,
        u,
        c =
          (a = e.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a.call_to_action_types,
        d =
          ((i = e.creative) == null ||
          (i = i.object_story_spec) == null ||
          (i = i.link_data) == null ||
          (i = i.call_to_action) == null
            ? void 0
            : i.type) ||
          ((l = e.creative) == null ||
          (l = l.object_story_spec) == null ||
          (l = l.template_data) == null ||
          (l = l.call_to_action) == null
            ? void 0
            : l.type) ||
          ((s = e.creative) == null ||
          (s = s.object_story_spec) == null ||
          (s = s.video_data) == null ||
          (s = s.call_to_action) == null
            ? void 0
            : s.type) ||
          (c instanceof o("immutable").Iterable &&
            ((u = c.entries()) == null || (u = u.next().value) == null
              ? void 0
              : u[1]));
      return (
        (t === r("AdsAPIObjectives").LINK_CLICKS ||
          t === r("AdsAPIObjectives").CONVERSIONS) &&
        d === "CALL_NOW" &&
        n === r("AdCampaignDestination").PHONE_CALL
      );
    }
    function g(e, t) {
      var n;
      if (!I(e)) return !1;
      var r =
        (n = e.creative) == null || (n = n.asset_feed_spec) == null
          ? void 0
          : n.ad_formats;
      return (
        r != null &&
        r.some(function (e) {
          return c(e) === t;
        })
      );
    }
    function h(e) {
      var t,
        n,
        o =
          (t =
            e == null || (n = e.creative_asset_groups_spec) == null
              ? void 0
              : n.groups) != null
            ? t
            : [];
      return (
        o instanceof r("immutable").List && (o = o.toJS()),
        o.some(function (e) {
          var t = e.images,
            n = e.videos,
            r = e.posts;
          return (
            (t && t.length > 0) || (n && n.length > 0) || (r && r.length > 0)
          );
        })
      );
    }
    function y(e) {
      var t = o(
          "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
        ).hasAnyOrigins(e, [
          "creative_asset_groups",
          "pca_unification_alpha_experiment_full_format",
        ]),
        n = h(e);
      return t && n;
    }
    function C(e) {
      return g(e, r("AdsUIMediaFormat").CAROUSEL);
    }
    function b(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.ad_formats;
      return (
        n != null &&
        n.some(function (e) {
          return e === "POST";
        })
      );
    }
    function v(e) {
      return g(e, r("AdsUIMediaFormat").SINGLE_VIDEO);
    }
    function S(e) {
      return g(e, r("AdsUIMediaFormat").SINGLE_IMAGE);
    }
    function R(e) {
      return _e(e) && g(e, r("AdsUIMediaFormat").DCO_AUTOMATIC);
    }
    function L(e) {
      return j(e) && g(e, r("AdsUIMediaFormat").DCO_AUTOMATIC);
    }
    function E(e) {
      return j(e) && C(e);
    }
    function k(e) {
      return ee(e) && g(e, r("AdsUIMediaFormat").DCO_AUTOMATIC);
    }
    function I(e) {
      return V(e) && !re(e);
    }
    function T(e) {
      return I(e) && !ae(e) && !ie(e);
    }
    function D(e) {
      return V(e) && !oe(e);
    }
    function x(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.onsite_destinations) != null
      );
    }
    function $(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.call_to_actions) != null
      );
    }
    function P(e) {
      var t, n, o;
      return ((t = e.creative) == null ? void 0 : t.asset_feed_spec) == null
        ? !1
        : ((n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.optimization_type) ===
            r("ApiDynamicCreativeOptimizationTypes")
              .DOF_MESSAGING_DESTINATION ||
            ((o = e.creative) == null ||
            (o = o.asset_feed_spec) == null ||
            (o = o.additional_data) == null
              ? void 0
              : o.is_click_to_message) === !0;
    }
    function N(e) {
      var t, n;
      return ((t = e.creative) == null ? void 0 : t.asset_feed_spec) == null
        ? !1
        : ((n = e.creative) == null || (n = n.asset_feed_spec) == null
              ? void 0
              : n.onsite_destinations) != null
          ? r("AdsClientAdAssetFeedSpecFields").every(function (t) {
              var n,
                r =
                  (n = e.creative) == null || (n = n.asset_feed_spec) == null
                    ? void 0
                    : n[t];
              return t === "onsite_destinations"
                ? !0
                : r instanceof Array
                  ? r.length === 0
                  : r instanceof Object && Object.keys(r).length === 0
                    ? !0
                    : r == null;
            })
          : !1;
    }
    function M(e) {
      var t, n;
      return (
        ((t = e.creative) == null ||
        (t = t.asset_feed_spec) == null ||
        (t = t.additional_data) == null
          ? void 0
          : t.page_private_reply) != null &&
        Object.keys(
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.additional_data,
        ).length === 1
      );
    }
    function w(e) {
      var t;
      return (
        ((t = e.creative) == null ||
        (t = t.asset_feed_spec) == null ||
        (t = t.additional_data) == null
          ? void 0
          : t.page_private_reply) != null
      );
    }
    function A(e) {
      var t, n;
      return ((t = e.creative) == null ? void 0 : t.asset_feed_spec) == null
        ? !1
        : ((n = e.creative) == null || (n = n.asset_feed_spec) == null
              ? void 0
              : n.onsite_destinations) != null
          ? r("AdsClientAdAssetFeedSpecFields").every(function (t) {
              var n,
                r =
                  (n = e.creative) == null || (n = n.asset_feed_spec) == null
                    ? void 0
                    : n[t];
              return t === "onsite_destinations" || t === "audios"
                ? !0
                : r instanceof Array
                  ? r.length === 0
                  : r instanceof Object && Object.keys(r).length === 0
                    ? !0
                    : r == null;
            })
          : !1;
    }
    function F(e, t) {
      if (!x(e)) return t;
      var n = r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.onsite_destinations.get(e);
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.onsite_destinations.set(n, t);
    }
    function O(e) {
      return j(e);
    }
    function B(e) {
      var t;
      if (!j(e) || C(e)) return !1;
      var n = (t = e.creative) == null ? void 0 : t.asset_feed_spec;
      if (n == null) return !1;
      var r = o("AdsUEditorAdgroupBodyMutators").getDefaultPlacementBodyAssets(
          e,
        ),
        a = o(
          "AdsUEditorAdgroupHeadlineMutators",
        ).getDefaultPlacementHeadlineAssets(e);
      return (r != null && r.size > 1) || (a != null && a.size > 1);
    }
    var W =
        ((e = {}),
        (e.shops_bundle = !0),
        (e.reasons_to_shop = !0),
        (e.audios = !0),
        (e.badge_sets = !0),
        (e.app_product_page_id = !0),
        (e.promotional_metadata = !0),
        (e.message_extensions = !0),
        (e.lead_nurture_channels = !0),
        (e.web_destination_spec = !0),
        (e.upcoming_events = !0),
        (e.onsite_destinations = !0),
        (e.call_ads_configuration = !0),
        (e.lead_gen_configuration = !0),
        (e.phone_data_ids = !0),
        (e.upcoming_event_metadata = !0),
        (e.translations = !0),
        (e.lead_gen_multi_destination = !0),
        (e.additional_data = !0),
        (e.ctwa_consent_data = !0),
        e),
      q =
        ((u = {}),
        (u.reward_info = !0),
        (u.partner_app_welcome_message_flow_id = !0),
        (u.multi_share_end_card = !0),
        (u.page_whatsapp_number_id = !0),
        (u.page_private_reply = !0),
        u);
    function U(e, t) {
      if (e == null) return !0;
      var n = r("DeepRecord").isDeepRecord(e)
        ? Array.from(e.keys())
        : Object.keys(e);
      return n.every(function (n) {
        var o = e[n];
        return (
          t[n] === !0 ||
          o == null ||
          (o instanceof Array && o.length === 0) ||
          (o instanceof Object && r("isEmptyObject")(o))
        );
      });
    }
    function V(e) {
      var t,
        n,
        a = r("adsConvertAdObjectRecordToPlainJS")(e),
        i = (t = a.creative) == null ? void 0 : t.asset_feed_spec;
      if (i == null) return !1;
      var l = U(i, W),
        s = r("DeepRecord").isDeepRecord(i)
          ? Array.from(i.keys())
          : Object.keys(i),
        u = s.some(function (e) {
          return i[e] === void 0 ? !1 : W[e] === !0;
        });
      if (u && l) {
        var c,
          d = i == null ? void 0 : i.additional_data,
          m = babelHelpers.extends(
            {},
            q,
            ((c = {}), (c.page_welcome_message = !0), c),
          ),
          p = U(d, m);
        if (p) return !1;
      }
      return o(
        "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
      ).isUnifiedCreativePhotoData(a) &&
        i.optimization_type !==
          r("ApiDynamicCreativeOptimizationTypes").DEGREES_OF_FREEDOM &&
        i.optimization_type !==
          r("ApiDynamicCreativeOptimizationTypes").PLACEMENT &&
        i.optimization_type !==
          r("ApiDynamicCreativeOptimizationTypes").MULTI_CREATOR
        ? !1
        : !!((n = e.creative) != null && n.asset_feed_spec);
    }
    function H(e) {
      return V(e) && !N(r("adsConvertAdObjectRecordToPlainJS")(e));
    }
    function G(e, t) {
      return (e == null ? void 0 : e.optimization_type) === t;
    }
    function z(e) {
      var t, n;
      return (t =
        (n = e.creative) == null ||
        (n = n.asset_feed_spec) == null ||
        (n = n.additional_data) == null
          ? void 0
          : n.is_smart_app_promotion) != null
        ? t
        : !1;
    }
    function j(e) {
      var t;
      return (
        (e == null ||
        (t = e.creative) == null ||
        (t = t.asset_feed_spec) == null
          ? void 0
          : t.optimization_type) ===
        r("ApiDynamicCreativeOptimizationTypes").PLACEMENT
      );
    }
    function K(e) {
      return G(e, r("ApiDynamicCreativeOptimizationTypes").PLACEMENT);
    }
    function Q(e) {
      return j(e) && b(e);
    }
    function X(e) {
      var t,
        n = (t = e.creative) == null ? void 0 : t.source_instagram_media_id;
      return n === null
        ? !1
        : r("isTruthy")(e.created_time) && r("isTruthy")(n);
    }
    function Y(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.optimization_type) ===
        r("ApiDynamicCreativeOptimizationTypes").LANGUAGE
      );
    }
    function J(e) {
      return Y(e) || ne(e);
    }
    function Z(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.link_urls;
      return n instanceof r("immutable").List
        ? n.size === 1 && r("isAdsCanvasLink")(n.getIn([0, "website_url"]))
        : !!n && n.length === 1 && r("isAdsCanvasLink")(n[0].website_url);
    }
    function ee(e) {
      return j(e) || ne(e);
    }
    function te(e) {
      return j(e) || Y(e) || ne(e);
    }
    function ne(e) {
      var t;
      return (
        (e == null ||
        (t = e.creative) == null ||
        (t = t.asset_feed_spec) == null
          ? void 0
          : t.optimization_type) ===
        r("ApiDynamicCreativeOptimizationTypes").LOCALIZED_PLACEMENTS
      );
    }
    function re(e) {
      return oe(e) || de(e);
    }
    function oe(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.optimization_type) ===
        r("ApiDynamicCreativeOptimizationTypes").DEGREES_OF_FREEDOM
      );
    }
    function ae(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.optimization_type) ===
        r("ApiDynamicCreativeOptimizationTypes").DOF_MESSAGING_DESTINATION
      );
    }
    function ie(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.optimization_type) ===
        r("ApiDynamicCreativeOptimizationTypes")
          .UNIFIED_PROFILE_VISIT_DESTINATION
      );
    }
    function le(e) {
      var t,
        n,
        o =
          (t =
            (n = e.creative_asset_groups_spec) == null ? void 0 : n.groups) !=
          null
            ? t
            : [];
      return (
        o instanceof r("immutable").List && (o = o.toJS()),
        o.some(function (e) {
          var t,
            n,
            r = (t = e.images) != null ? t : [],
            o = (n = e.videos) != null ? n : [];
          return (
            (r == null ? void 0 : r.length) > 0 ||
            (o == null ? void 0 : o.length) > 0
          );
        })
      );
    }
    function se(e) {
      return j(e) || ae(e);
    }
    function ue(e) {
      return j(e) || fe(e);
    }
    function ce(e) {
      var t;
      return (
        r("isTruthy")(
          (t = e.creative) == null ? void 0 : t.source_instagram_media_id,
        ) && j(e)
      );
    }
    function de(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.optimization_type) ===
        r("ApiDynamicCreativeOptimizationTypes").DOF_WITH_IMAGE_CROP
      );
    }
    function me(e) {
      var t, n;
      return (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.optimization_type) ===
          r("ApiDynamicCreativeOptimizationTypes").DEGREES_OF_FREEDOM &&
        ((n = e.creative) == null || (n = n.asset_feed_spec) == null
          ? void 0
          : n.images) != null
      );
    }
    function pe(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.optimization_type) ===
        r("ApiDynamicCreativeOptimizationTypes").ASSET_CUSTOMIZATION
      );
    }
    function _e(e) {
      var t;
      return (
        (e == null ||
        (t = e.creative) == null ||
        (t = t.asset_feed_spec) == null
          ? void 0
          : t.optimization_type) ===
        r("ApiDynamicCreativeOptimizationTypes").REGULAR
      );
    }
    function fe(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.optimization_type) ===
        r("ApiDynamicCreativeOptimizationTypes").MULTI_CREATOR
      );
    }
    function ge(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.optimization_type) ===
        r("ApiDynamicCreativeOptimizationTypes").DEGREES_OF_FREEDOM
      );
    }
    function he(e) {
      var t,
        n = e == null ? void 0 : e.creative,
        o =
          n == null || (t = n.asset_feed_spec) == null
            ? void 0
            : t.optimization_type;
      return (
        !!(n != null && n.asset_feed_spec) &&
        o === r("ApiDynamicCreativeOptimizationTypes").FORMAT_AUTOMATION
      );
    }
    function ye(e) {
      var t,
        n,
        o =
          ((t = e.creative) == null
            ? void 0
            : t.branded_content_boosting_type) != null,
        a =
          ((n = e.creative) == null ||
          (n = n.asset_feed_spec) == null ||
          (n = n.additional_data) == null
            ? void 0
            : n.brand_page_id) != null,
        i = o;
      if (a !== o) {
        var l,
          s,
          u = {
            brandedContentBoostingType:
              (l = e.creative) == null
                ? void 0
                : l.branded_content_boosting_type,
            resultLegacyIsBrandedContentCheck: a,
            resultNewBrandedContentCheck: o,
          };
        r("AdsInterfacesLogger").log({
          adgroupId: e == null ? void 0 : e.id,
          data:
            ((s = {}),
            (s.event_source = "AdsAssetFeedUtils.js"),
            (s.message = JSON.stringify(u)),
            s),
          eventName: "branded_content_boosting_type_mismatch",
        });
      }
      return _e(e) && i;
    }
    function Ce(e) {
      var t = e.map(function (e) {
        var t;
        return (t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.optimization_type;
      });
      return e.length <= 1 || be(t);
    }
    function be(e) {
      return e.every(function (e) {
        return !e || e === r("ApiDynamicCreativeOptimizationTypes").PLACEMENT;
      });
    }
    function ve(e) {
      var t,
        n =
          e == null ||
          (t = e.creative) == null ||
          (t = t.asset_feed_spec) == null
            ? void 0
            : t.images,
        o =
          n &&
          n.findIndex(function (e) {
            if (e instanceof r("immutable").Map) {
              var t = e.get("hash"),
                n = e.get("url");
              return r("isTruthy")(t) || !!n;
            } else {
              var o = e.hash,
                a = e.url;
              return r("isTruthy")(o) || !!a;
            }
          }) !== -1;
      return !!o;
    }
    function Se(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.images,
        a = o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(e, "images"),
        i = ["hash", "url"].map(function (e) {
          return o("AdsAssetFeedFieldUtils").getAssetAtIndex(n, e, a);
        }),
        l = i[0],
        s = i[1];
      return r("isTruthy")(l) || !!s;
    }
    function Re(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.videos;
      return (
        n != null &&
        n.some(function (e) {
          return e instanceof r("immutable").Map
            ? !!e.get("video_id")
            : !!e.video_id;
        })
      );
    }
    function Le(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.videos,
        r = o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(e, "videos"),
        a = o("AdsAssetFeedFieldUtils").getAssetAtIndex(n, "video_id", r);
      return !!a;
    }
    function Ee(e) {
      return e instanceof Object && !(e instanceof r("AdsError"));
    }
    function ke(e) {
      return (
        typeof e == "object" &&
        !s.isFbtInstance(e) &&
        !(e instanceof r("AdsError"))
      );
    }
    function Ie(e, t, n, r) {
      if (Ee(t) && V(e)) {
        var a = o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(e, n);
        return r == null || !ke(t[a]) ? t[a] : t[a][r];
      }
      return t;
    }
    function Te(e, t) {
      return !t || e.length !== 1 ? null : t[e[0]];
    }
    function De(e, t) {
      return Te(e, t);
    }
    function xe(e, t) {
      return Te(e, t);
    }
    function $e(e) {
      var t;
      if (!I(e)) return !1;
      var n =
        (t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.ad_formats;
      return (
        !!n &&
        Array.from(n).length === 1 &&
        n.some(function (e) {
          return e === "CAROUSEL_IMAGE";
        })
      );
    }
    function Pe(e, t) {
      return t
        ? t
            .filter(function (t) {
              return t.adset_id === e;
            })
            .some(function (e) {
              return _e(e);
            })
        : !1;
    }
    function Ne(e, t) {
      return t
        ? t
            .filter(function (t) {
              return t.adset_id === e;
            })
            .some(function (e) {
              return he(e);
            })
        : !1;
    }
    function Me(e) {
      return _e(e) || j(e) || Y(e) || pe(e) || ne(e);
    }
    function we(e) {
      if (r("gkx")("5591")) {
        var t, n;
        return (
          ((t = e.creative) == null || (t = t.degrees_of_freedom_spec) == null
            ? void 0
            : t.degrees_of_freedom_type) === "USER_ENROLLED_AUTOFLOW" ||
          ((n = e.creative) == null || (n = n.degrees_of_freedom_spec) == null
            ? void 0
            : n.degrees_of_freedom_type) === "USER_ENROLLED_LWI_ACO"
        );
      } else {
        var o;
        return (
          ((o = e.creative) == null || (o = o.degrees_of_freedom_spec) == null
            ? void 0
            : o.degrees_of_freedom_type) === "USER_ENROLLED_AUTOFLOW"
        );
      }
    }
    function Ae(e) {
      var t,
        n,
        r,
        o =
          (t = e.creative) == null || (t = t.degrees_of_freedom_spec) == null
            ? void 0
            : t.creative_features_spec;
      return (
        (o == null || (n = o.standard_enhancements) == null
          ? void 0
          : n.enroll_status) === "OPT_IN" ||
        (o == null || (r = o.image_enhancement) == null
          ? void 0
          : r.enroll_status) === "OPT_IN"
      );
    }
    function Fe(e) {
      return Oe(e.creative);
    }
    function Oe(e) {
      var t,
        n,
        r =
          e == null || (t = e.asset_feed_spec) == null ? void 0 : t.ad_formats,
        o =
          e == null || (n = e.asset_feed_spec) == null
            ? void 0
            : n.optimization_type;
      return r != null ? Je(o) && r.includes("AUTOMATIC_FORMAT") : !1;
    }
    function Be(e) {
      if (S(e)) return r("ApiAdObjectTypes").SHARE;
      if (v(e)) return r("ApiAdObjectTypes").VIDEO;
      var t = Error("Only SINGLE_IMAGE and SINGLE_VIDEO formats are supported");
      throw (t.stack, t);
    }
    function We(e, t) {
      var n,
        o = (n = e.creative) == null ? void 0 : n.asset_feed_spec;
      return o == null
        ? e
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.optimization_type.set(t, e);
    }
    function qe(e, t) {
      if (t === "videos") {
        var n,
          r =
            (n = e.creative) == null || (n = n.asset_feed_spec) == null
              ? void 0
              : n.videos;
        return r != null ? (Array.isArray(r) ? r.length : r.size) : 0;
      }
      if (t === "images") {
        var o,
          a =
            (o = e.creative) == null || (o = o.asset_feed_spec) == null
              ? void 0
              : o.images;
        return a != null ? (Array.isArray(a) ? a.length : a.size) : 0;
      }
      return 0;
    }
    function Ue(e) {
      return S(e) ? "images" : v(e) ? "videos" : null;
    }
    function Ve(e, t) {
      var n,
        o = (n = e.creative) == null ? void 0 : n.asset_feed_spec,
        a = o == null ? void 0 : o.get(t);
      return a != null && r("immutable").List.isList(a) ? a.size : 0;
    }
    function He(e, t) {
      return Ve(e, t) > 1;
    }
    function Ge(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.asset_customization_rules;
      if (n == null) return -1;
      if (j(e)) {
        var a,
          i =
            (a = e.creative) == null || (a = a.asset_feed_spec) == null
              ? void 0
              : a.asset_customization_rules;
        return i != null ? Array.from(i).length - 1 : -1;
      }
      if (!ne(e)) return -1;
      var l = n.reduce(function (e, t) {
        var n = t instanceof r("immutable").Map ? t : r("immutable").fromJS(t),
          a = o(
            "AdsPlacementAssetTargetingRuleUtils",
          ).convertTargetingRuleToPlacementList(n);
        if (!a.isEmpty()) {
          var i = o("AdsPlacementAssetUtils")
            .getAssetGroupsFromPlacements(a)
            .sort()
            .join(":");
          return e.add(i);
        }
        return e;
      }, r("immutable").Set());
      return l.size;
    }
    function ze(e) {
      var t,
        n,
        o = Ue(e),
        a =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.images,
        i =
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.videos;
      return g(e, r("AdsUIMediaFormat").DCO_AUTOMATIC)
        ? je(a) + je(i)
        : o === "images"
          ? je(a)
          : o === "videos"
            ? je(i)
            : -1;
    }
    function je(e) {
      return e == null
        ? 0
        : e.reduce(function (e, t) {
            var n = t.get("adlabels");
            return n instanceof r("immutable").List ? e + n.size : e;
          }, 0);
    }
    function Ke(e) {
      var t = e == null ? void 0 : e.optimization_type;
      return (
        t === r("ApiDynamicCreativeOptimizationTypes").DEGREES_OF_FREEDOM ||
        (t === r("ApiDynamicCreativeOptimizationTypes").DOF_WITH_IMAGE_CROP &&
          (e == null ? void 0 : e.images) == null)
      );
    }
    function Qe(e, t) {
      var n = r("getByPath")(e, t);
      return n != null
        ? n instanceof r("immutable").List
          ? n.toArray()
          : n
        : [];
    }
    function Xe(e) {
      return (
        (e == null ? void 0 : e.optimization_type) ===
        r("ApiDynamicCreativeOptimizationTypes").DOF_WITH_IMAGE_CROP
      );
    }
    function Ye(e) {
      return Je(e == null ? void 0 : e.optimization_type);
    }
    function Je(e) {
      return (
        e === r("ApiDynamicCreativeOptimizationTypes").ACO_AUTOFLOW ||
        e === r("ApiDynamicCreativeOptimizationTypes").AUTOMATED_SHOPPING_ADS
      );
    }
    function Ze(e, t, n) {
      var a;
      if (!o("AdsAdgroupTypeUtils").isAutomaticFormatAd(e))
        return o("AdsUIMediaFormatUtils").getUIFormat(e, t, n);
      var i = null,
        l =
          (a = e.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a.asset_customization_rules;
      return (
        l != null &&
          (i = l.find(function (e) {
            return e.get("is_default", null);
          })),
        i != null && i.has("image_label") && i.get("image_label") !== void 0
          ? r("AdsUIMediaFormat").SINGLE_IMAGE
          : n
            ? r("AdsUIMediaFormat").SLIDESHOW
            : r("AdsUIMediaFormat").SINGLE_VIDEO
      );
    }
    function et(e) {
      var t,
        n,
        r =
          ((t = e.creative) == null ||
          (t = t.asset_feed_spec) == null ||
          (t = t.additional_data) == null
            ? void 0
            : t.is_smart_app_promotion) === !0,
        o = !!(
          (n = e.creative) != null &&
          (n = n.asset_feed_spec) != null &&
          n.asset_customization_rules
        );
      return r && o;
    }
    function tt(e) {
      var t = r("mixedToString")(e.get("url"));
      return t != null && t.includes("/safe_image.php");
    }
    function nt(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.optimization_type,
        o = r("adsConvertAdObjectRecordToPlainJS")(e);
      return n == null && N(o);
    }
    function rt(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.badge_sets) != null
      );
    }
    function ot(e) {
      if (e != null) {
        var t = {};
        return (
          Object.keys(e).forEach(function (n) {
            t[n] = e[n] instanceof r("AdsError") ? e[n].message : e[n];
          }),
          t
        );
      } else return null;
    }
    function at(e) {
      if (e instanceof r("AdsError")) return e.message;
      if (Ee(e)) {
        var t = {};
        return (
          Object.keys(e).map(function (n) {
            var o = parseInt(n, 10),
              a = e[o];
            if (a instanceof r("AdsError")) t[o] = a.message;
            else if (ke(a)) {
              var i;
              t[o] = (i = ot(a)) != null ? i : a;
            } else t[o] = a;
          }),
          t
        );
      }
      return e;
    }
    function it(e) {
      var t = st(e);
      return t === "random" || t === "selected";
    }
    function lt(e) {
      var t = st(e);
      return t === "opted_out";
    }
    function st(e) {
      var t, n, r;
      if (
        ((t = e.creative) == null ? void 0 : t.asset_feed_spec) == null ||
        ((n = e.creative) == null || (n = n.asset_feed_spec) == null
          ? void 0
          : n.audios) == null
      )
        return null;
      var a =
          (r = e.creative) == null || (r = r.asset_feed_spec) == null
            ? void 0
            : r.audios,
        i = o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(e, "audios");
      return o("AdsAssetFeedFieldUtils").getAssetAtIndex(a, "type", i);
    }
    function ut(e) {
      var t, n, r;
      if (
        ((t = e.creative) == null ? void 0 : t.asset_feed_spec) == null ||
        ((n = e.creative) == null || (n = n.asset_feed_spec) == null
          ? void 0
          : n.audios) == null
      )
        return !1;
      var a =
          (r = e.creative) == null || (r = r.asset_feed_spec) == null
            ? void 0
            : r.audios,
        i = o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(e, "audios");
      return o("AdsAssetFeedFieldUtils").getBooleanAssetAtIndex(
        a,
        "is_audio_swap",
        i,
      );
    }
    function ct(e) {
      var t, n, a;
      if (
        ((t = e.creative) == null ? void 0 : t.asset_feed_spec) == null ||
        ((n = e.creative) == null || (n = n.asset_feed_spec) == null
          ? void 0
          : n.audios) == null
      )
        return [];
      var i =
          (a = e.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a.audios,
        l = o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(e, "audios"),
        s = o("AdsAssetFeedFieldUtils").getSingleValueAssetForType(i, l),
        u = [];
      return (
        s != null &&
          s.forEach(function (e) {
            var t = e.get("selected_audios");
            t instanceof r("immutable").List
              ? t.map(function (e) {
                  var t = e.get("audio_asset_id");
                  u.push(t);
                })
              : t instanceof Array &&
                t.map(function (e) {
                  var t = e.audio_asset_id;
                  u.push(t);
                });
          }),
        u
      );
    }
    function dt(e) {
      var t, n, a;
      if (
        ((t = e.creative) == null ? void 0 : t.asset_feed_spec) == null ||
        ((n = e.creative) == null || (n = n.asset_feed_spec) == null
          ? void 0
          : n.audios) == null
      )
        return r("immutable").List();
      var i =
          (a = e.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a.audios,
        l = o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(e, "audios"),
        s = o("AdsAssetFeedFieldUtils").getSingleValueAssetForType(i, l),
        u = [];
      return (
        s != null &&
          s.forEach(function (e) {
            var t = e.get("selected_audios");
            t instanceof r("immutable").List
              ? t.map(function (e) {
                  var t = e.get("audio_asset_id"),
                    n = e.get("label"),
                    r = e.get("start_time");
                  r == null
                    ? u.push({ audio_asset_id: t, label: n })
                    : u.push({ audio_asset_id: t, label: n, start_time: r });
                })
              : t instanceof Array &&
                t.map(function (e) {
                  var t,
                    n = e.audio_asset_id,
                    r = (t = e.label) != null ? t : "",
                    o = e.start_time;
                  o == null
                    ? u.push({ audio_asset_id: n, label: r })
                    : u.push({ audio_asset_id: n, label: r, start_time: o });
                });
          }),
        r("immutable").List(u)
      );
    }
    function mt(e) {
      var t;
      return (
        ((t = e.creative) == null ||
        (t = t.asset_feed_spec) == null ||
        (t = t.additional_data) == null
          ? void 0
          : t.is_click_to_message) === !0
      );
    }
    function pt(e, t) {
      var n,
        a = (n = e.creative) == null ? void 0 : n.asset_feed_spec;
      if (a == null) return e;
      var i = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec,
        l = V(e),
        s = i[t].delete(e),
        u = V(s),
        c = o("isAccountEligibleForThreeCOL2AdEx").is3coEnableCarouselFormat();
      if (c) {
        var d,
          m = r("adsConvertAdObjectRecordToPlainJS")(s),
          p = (d = m.creative) == null ? void 0 : d.asset_feed_spec;
        if (Object.keys(p != null ? p : {}).length === 0)
          return r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete(
            s,
          );
      }
      return u && !l
        ? r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete(s)
        : s;
    }
    function _t(e) {
      return j(e) && Re(e) && ve(e);
    }
    function ft(e, t) {
      return e == null || t == null
        ? !1
        : t === r("AdsPromotedObjectTypes").MOBILE_APP &&
            e === r("AdsAPIObjectives").LINK_CLICKS;
    }
    ((l.convertDCOAdFormatToUIFormat = c),
      (l.convertUIFormatToDCOAdFormat = d),
      (l.convertDCOAdFormatToMediaFormat = m),
      (l.getAssetFeedMediaFieldForDCOAdFormat = p),
      (l.isLeadGenPhoneCallSelected = _),
      (l.isTrafficOrConversionsPhoneCallSelected = f),
      (l.hasMediaFormat = g),
      (l.hasCreativeAssetGroupSpecMedia = h),
      (l.hasCagOrPCAOriginAndMediaFromSpec = y),
      (l.hasCarouselFormat = C),
      (l.hasPostFormat = b),
      (l.hasSingleVideoFormat = v),
      (l.hasSingleImageFormat = S),
      (l.hasAutomaticFormat = R),
      (l.hasPACAutomaticFormat = L),
      (l.hasPACCarouselFormat = E),
      (l.hasPlacementCustomizationAutomaticFormat = k),
      (l.isAdgroupUsingNonDofAssetFeedSpec = I),
      (l.usesAssetFeedVideoWritePath = T),
      (l.isAdgroupUsingNonTextOnlyDofAssetFeedSpec = D),
      (l.isAdgroupUsingSomeOnsiteDestinations = x),
      (l.isAdgroupUsingSomeCallToActions = $),
      (l.isAdgroupUsingOnlyCTXMultiDestinations = P),
      (l.isAdgroupUsingOnlyOnsiteDestinations = N),
      (l.isAdgroupUsingOnlyPrivateMessageFromRecord = M),
      (l.isAdgroupUsingPrivateReplyAutomation = w),
      (l.isAdgroupUsingOnlySupportedOnsiteDestinationsSpecs = A),
      (l.restoreOnsiteDestinations = F),
      (l.canPacAdgroupUsingDOF = O),
      (l.isPacAdgroupUsingTextDOF = B),
      (l.isAdgroupUsingAssetFeedFromRecord = V),
      (l.hasAssetFeedSpecWithoutOnlyOnsiteDestinations = H),
      (l.isAAAFromRecord = z),
      (l.isPACAdgroupFromRecord = j),
      (l.isPACAdgroup = K),
      (l.isPACAdgroupWithExistingPosts = Q),
      (l.isInstagramExistingPostPublishedAdgroupFromRecord = X),
      (l.isDLOAdgroupFromRecord = Y),
      (l.hasLanguageCustomizationFromRecord = J),
      (l.isPACIXAdFromRecord = Z),
      (l.hasPlacementCustomizationFromRecord = ee),
      (l.hasLanguageOrPlacementCustomizationFromRecord = te),
      (l.isLocalizedPlacementsAdgroupFromRecord = ne),
      (l.isDofAdgroupFromSpec = re),
      (l.isTextOnlyDofAdgroupFromSpec = oe),
      (l.isDofMessagingDestinationAdgroupFromSpec = ae),
      (l.isUnifiedProfileVisitsDestinationAdgroupFromSpec = ie),
      (l.hasMediaUploadedFromCreativeAssetGroupSpec = le),
      (l.isPACAdgroupFromRecordOrDofMessagingDestinationAdgroupFromSpec = se),
      (l.isPACOrMCAAdgroupFromRecord = ue),
      (l.isPACAndIGAdsFromRecord = ce),
      (l.isDofWithImageAdgroupFromRecord = de),
      (l.isDofWithUCAAdgroupFromRecord = me),
      (l.isDCAssetCustomizationAdgroupFromSpec = pe),
      (l.isRegularDCOAdgroupFromRecord = _e),
      (l.isMCAAdgroupFromRecord = fe),
      (l.isDOFAdgroupFromRecord = ge),
      (l.isFormatAutomationAdgroupFromRecord = he),
      (l.isDCOWithBrandedContent = ye),
      (l.isBulkEditable = Ce),
      (l.doesAdgroupHaveImages = ve),
      (l.doesAdgroupHaveDefaultImage = Se),
      (l.doesAdgroupHaveVideos = Re),
      (l.doesAdgroupHaveDefaultVideo = Le),
      (l.getErrorForDefaultAsset = Ie),
      (l.getErrorsForAssetItemList = De),
      (l.getErrorObjectsForAssetItemList = xe),
      (l.isAssetFeedAdWithCarouselImageFormat = $e),
      (l.checkIfDraftCampaignAlreadyHasDraftDCAd = Pe),
      (l.checkIfDraftCampaignAlreadyHasDraftACOAd = Ne),
      (l.isDynamicCreativeAdgroup = Me),
      (l.isAutomaticFlowLiteAdgroup = we),
      (l.hasCreativeFeaturesAdgroup = Ae),
      (l.isAutomaticFlow = Fe),
      (l.isAutomaticFlowFromCreative = Oe),
      (l.getTargetObjectType = Be),
      (l.setOptimizationType = We),
      (l.getDistinctMediaAssetCount = qe),
      (l.getMediaTypeFromFormat = Ue),
      (l.hasMultipleAssets = He),
      (l.getAdditionalPlacementCount = Ge),
      (l.getAssetMediaAdlabelCount = ze),
      (l.isTextOnlyDofAssetFeedSpec = Ke),
      (l.getAssetsForField = Qe),
      (l.isDofWithImageAssetFeedSpec = Xe),
      (l.isAcoAutoflowAssetFeedSpec = Ye),
      (l.getDLOMediaFormat = Ze),
      (l.isDLOForAAA = et),
      (l.isSafeImageURL = tt),
      (l.isStaticCreativeWithAssetFeedSpec = nt),
      (l.isCreativeBadgeFromRecord = rt),
      (l.convertAdsErrorsToMessage = at),
      (l.getIsAudiosAdgroupEnabled = it),
      (l.getIsAudiosAdgroupOptedOut = lt),
      (l.getAdgroupAudiosType = st),
      (l.getAdgroupIsAudioSwap = ut),
      (l.getAdgroupAudiosIDs = ct),
      (l.getAdgroupAudiosAsset = dt),
      (l.isClickToMultiDestAds = mt),
      (l.removeFieldFromAssetFeedSpec = pt),
      (l.isPACMixedImageAndVideoFromRecord = _t),
      (l.shouldAddObjectStoreURLForTrafficAndPromotedApp = ft));
  },
  98,
);
