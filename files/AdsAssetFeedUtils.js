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
    "isAdsCanvasLink",
    "isEmptyObject",
    "isTruthy",
    "mixedToString",
    "qex",
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
      return ge(e) && g(e, r("AdsUIMediaFormat").DCO_AUTOMATIC);
    }
    function L(e) {
      return Q(e) && g(e, r("AdsUIMediaFormat").DCO_AUTOMATIC);
    }
    function E(e) {
      return Q(e) && C(e);
    }
    function k(e) {
      return ne(e) && g(e, r("AdsUIMediaFormat").DCO_AUTOMATIC);
    }
    function I(e) {
      return G(e) && !ae(e);
    }
    function T(e) {
      return I(e) && !le(e) && !se(e);
    }
    function D(e) {
      return G(e) && !ie(e);
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
              return t === "onsite_destinations" ? !0 : U(r);
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
                o =
                  (n = e.creative) == null || (n = n.asset_feed_spec) == null
                    ? void 0
                    : n[t];
              return t === "onsite_destinations" ||
                t === "audios" ||
                (t === "promotional_metadata" && r("gkx")("29274"))
                ? !0
                : o instanceof Array
                  ? o.length === 0
                  : o instanceof Object && Object.keys(o).length === 0
                    ? !0
                    : o == null;
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
      return Q(e);
    }
    function B(e) {
      var t;
      if (!Q(e) || C(e)) return !1;
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
        (e.instant_book_configuration = !0),
        (e.lead_gen_configuration = !0),
        (e.phone_data_ids = !0),
        (e.upcoming_event_metadata = !0),
        (e.translations = !0),
        (e.lead_gen_multi_destination = !0),
        (e.f2_md_website_entry_point = !0),
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
    function U(e) {
      return r("DeepRecord").isDeepRecord(e) &&
        e instanceof r("immutable").Record
        ? H(e)
        : e instanceof o("immutable").Iterable
          ? e.isEmpty()
          : e instanceof Array
            ? e.length === 0
            : e instanceof Object
              ? r("isEmptyObject")(e)
              : e == null;
    }
    function V(e, t) {
      if (e == null) return !0;
      var n = r("DeepRecord").isDeepRecord(e)
        ? Array.from(e.keys())
        : Object.keys(e);
      return n.every(function (n) {
        return t[n] === !0 || U(e[n]);
      });
    }
    function H(e) {
      return e == null || typeof e != "object"
        ? !1
        : (function (t) {
            {
              var n = t;
              if (
                n instanceof r("immutable").Map ||
                n instanceof r("immutable").List
              )
                return n.isEmpty();
            }
            {
              var o = t;
              if (
                r("DeepRecord").isDeepRecord(o) &&
                o instanceof r("immutable").Record
              )
                return o.isEmpty();
            }
            return r("isEmptyObject")(e);
          })(e);
    }
    function G(e) {
      var t,
        n,
        a =
          !r("DeepRecord").isDeepRecord(e) || r("qex")._("3278") === !0
            ? e
            : r("adsConvertAdObjectRecordToPlainJS")(e),
        i = (t = a.creative) == null ? void 0 : t.asset_feed_spec;
      if (i == null || (H(i) && r("qex")._("5048") === !0)) return !1;
      var l = V(i, W),
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
          p = V(d, m);
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
    function z(e) {
      return (
        G(e) &&
        !N(
          r("qex")._("3278") === !0
            ? e
            : r("adsConvertAdObjectRecordToPlainJS")(e),
        )
      );
    }
    function j(e, t) {
      return (e == null ? void 0 : e.optimization_type) === t;
    }
    function K(e) {
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
    function Q(e) {
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
    function X(e) {
      return j(e, r("ApiDynamicCreativeOptimizationTypes").PLACEMENT);
    }
    function Y(e) {
      return Q(e) && b(e);
    }
    function J(e) {
      var t,
        n = (t = e.creative) == null ? void 0 : t.source_instagram_media_id;
      return n === null
        ? !1
        : r("isTruthy")(e.created_time) && r("isTruthy")(n);
    }
    function Z(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.optimization_type) ===
        r("ApiDynamicCreativeOptimizationTypes").LANGUAGE
      );
    }
    function ee(e) {
      return Z(e) || oe(e);
    }
    function te(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.link_urls;
      return n instanceof r("immutable").List
        ? n.size === 1 && r("isAdsCanvasLink")(n.getIn([0, "website_url"]))
        : !!n && n.length === 1 && r("isAdsCanvasLink")(n[0].website_url);
    }
    function ne(e) {
      return Q(e) || oe(e);
    }
    function re(e) {
      return Q(e) || Z(e) || oe(e);
    }
    function oe(e) {
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
    function ae(e) {
      return ie(e) || pe(e);
    }
    function ie(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.optimization_type) ===
        r("ApiDynamicCreativeOptimizationTypes").DEGREES_OF_FREEDOM
      );
    }
    function le(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.optimization_type) ===
        r("ApiDynamicCreativeOptimizationTypes").DOF_MESSAGING_DESTINATION
      );
    }
    function se(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.optimization_type) ===
        r("ApiDynamicCreativeOptimizationTypes")
          .UNIFIED_PROFILE_VISIT_DESTINATION
      );
    }
    function ue(e) {
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
    function ce(e) {
      return Q(e) || le(e);
    }
    function de(e) {
      return Q(e) || he(e);
    }
    function me(e) {
      var t;
      return (
        r("isTruthy")(
          (t = e.creative) == null ? void 0 : t.source_instagram_media_id,
        ) && Q(e)
      );
    }
    function pe(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.optimization_type) ===
        r("ApiDynamicCreativeOptimizationTypes").DOF_WITH_IMAGE_CROP
      );
    }
    function _e(e) {
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
    function fe(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.optimization_type) ===
        r("ApiDynamicCreativeOptimizationTypes").ASSET_CUSTOMIZATION
      );
    }
    function ge(e) {
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
    function he(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.optimization_type) ===
        r("ApiDynamicCreativeOptimizationTypes").MULTI_CREATOR
      );
    }
    function ye(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.optimization_type) ===
        r("ApiDynamicCreativeOptimizationTypes").DEGREES_OF_FREEDOM
      );
    }
    function Ce(e) {
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
    function be(e) {
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
      return ge(e) && i;
    }
    function ve(e) {
      var t = e.map(function (e) {
        var t;
        return (t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.optimization_type;
      });
      return e.length <= 1 || Se(t);
    }
    function Se(e) {
      return e.every(function (e) {
        return !e || e === r("ApiDynamicCreativeOptimizationTypes").PLACEMENT;
      });
    }
    function Re(e) {
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
    function Le(e) {
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
    function Ee(e) {
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
    function ke(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.videos,
        r = o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(e, "videos"),
        a = o("AdsAssetFeedFieldUtils").getAssetAtIndex(n, "video_id", r);
      return !!a;
    }
    function Ie(e) {
      return e instanceof Object && !(e instanceof r("AdsError"));
    }
    function Te(e) {
      return (
        typeof e == "object" &&
        !s.isFbtInstance(e) &&
        !(e instanceof r("AdsError"))
      );
    }
    function De(e, t, n, r) {
      if (Ie(t) && G(e)) {
        var a = o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(e, n);
        return r == null || !Te(t[a]) ? t[a] : t[a][r];
      }
      return t;
    }
    function xe(e, t) {
      return !t || e.length !== 1 ? null : t[e[0]];
    }
    function $e(e, t) {
      return xe(e, t);
    }
    function Pe(e, t) {
      return xe(e, t);
    }
    function Ne(e) {
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
    function Me(e, t) {
      return t
        ? t
            .filter(function (t) {
              return t.adset_id === e;
            })
            .some(function (e) {
              return ge(e);
            })
        : !1;
    }
    function we(e, t) {
      return t
        ? t
            .filter(function (t) {
              return t.adset_id === e;
            })
            .some(function (e) {
              return Ce(e);
            })
        : !1;
    }
    function Ae(e) {
      return ge(e) || Q(e) || Z(e) || fe(e) || oe(e);
    }
    function Fe(e) {
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
    function Oe(e) {
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
    function Be(e) {
      return We(e.creative);
    }
    function We(e) {
      var t,
        n,
        r =
          e == null || (t = e.asset_feed_spec) == null ? void 0 : t.ad_formats,
        o =
          e == null || (n = e.asset_feed_spec) == null
            ? void 0
            : n.optimization_type;
      return r != null ? et(o) && r.includes("AUTOMATIC_FORMAT") : !1;
    }
    function qe(e) {
      if (S(e)) return r("ApiAdObjectTypes").SHARE;
      if (v(e)) return r("ApiAdObjectTypes").VIDEO;
      var t = Error("Only SINGLE_IMAGE and SINGLE_VIDEO formats are supported");
      throw (t.stack, t);
    }
    function Ue(e, t) {
      var n,
        o = (n = e.creative) == null ? void 0 : n.asset_feed_spec;
      return o == null
        ? e
        : r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.optimization_type.set(t, e);
    }
    function Ve(e, t) {
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
    function He(e) {
      return S(e) ? "images" : v(e) ? "videos" : null;
    }
    function Ge(e, t) {
      var n,
        o = (n = e.creative) == null ? void 0 : n.asset_feed_spec,
        a = o == null ? void 0 : o.get(t);
      return a != null && r("immutable").List.isList(a) ? a.size : 0;
    }
    function ze(e, t) {
      return Ge(e, t) > 1;
    }
    function je(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.asset_customization_rules;
      if (n == null) return -1;
      if (Q(e)) {
        var a,
          i =
            (a = e.creative) == null || (a = a.asset_feed_spec) == null
              ? void 0
              : a.asset_customization_rules;
        return i != null ? Array.from(i).length - 1 : -1;
      }
      if (!oe(e)) return -1;
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
    function Ke(e) {
      var t,
        n,
        o = He(e),
        a =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.images,
        i =
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.videos;
      return g(e, r("AdsUIMediaFormat").DCO_AUTOMATIC)
        ? Qe(a) + Qe(i)
        : o === "images"
          ? Qe(a)
          : o === "videos"
            ? Qe(i)
            : -1;
    }
    function Qe(e) {
      return e == null
        ? 0
        : e.reduce(function (e, t) {
            var n = t.get("adlabels");
            return n instanceof r("immutable").List ? e + n.size : e;
          }, 0);
    }
    function Xe(e) {
      var t = e == null ? void 0 : e.optimization_type;
      return (
        t === r("ApiDynamicCreativeOptimizationTypes").DEGREES_OF_FREEDOM ||
        (t === r("ApiDynamicCreativeOptimizationTypes").DOF_WITH_IMAGE_CROP &&
          (e == null ? void 0 : e.images) == null)
      );
    }
    function Ye(e, t) {
      var n = r("getByPath")(e, t);
      return n != null
        ? n instanceof r("immutable").List
          ? n.toArray()
          : n
        : [];
    }
    function Je(e) {
      return (
        (e == null ? void 0 : e.optimization_type) ===
        r("ApiDynamicCreativeOptimizationTypes").DOF_WITH_IMAGE_CROP
      );
    }
    function Ze(e) {
      return et(e == null ? void 0 : e.optimization_type);
    }
    function et(e) {
      return (
        e === r("ApiDynamicCreativeOptimizationTypes").ACO_AUTOFLOW ||
        e === r("ApiDynamicCreativeOptimizationTypes").AUTOMATED_SHOPPING_ADS
      );
    }
    function tt(e, t, n) {
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
    function nt(e) {
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
    function rt(e) {
      var t = r("mixedToString")(e.get("url"));
      return t != null && t.includes("/safe_image.php");
    }
    function ot(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.optimization_type,
        o =
          r("qex")._("3278") === !0
            ? e
            : r("adsConvertAdObjectRecordToPlainJS")(e);
      return n == null && N(o);
    }
    function at(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.badge_sets) != null
      );
    }
    function it(e) {
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
    function lt(e) {
      if (e instanceof r("AdsError")) return e.message;
      if (Ie(e)) {
        var t = {};
        return (
          Object.keys(e).map(function (n) {
            var o = parseInt(n, 10),
              a = e[o];
            if (a instanceof r("AdsError")) t[o] = a.message;
            else if (Te(a)) {
              var i;
              t[o] = (i = it(a)) != null ? i : a;
            } else t[o] = a;
          }),
          t
        );
      }
      return e;
    }
    function st(e) {
      var t = ut(e);
      return t === "random" || t === "selected";
    }
    function ut(e) {
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
    function ct(e) {
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
    function dt(e) {
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
    function mt(e) {
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
    function pt(e) {
      var t;
      return (
        ((t = e.creative) == null ||
        (t = t.asset_feed_spec) == null ||
        (t = t.additional_data) == null
          ? void 0
          : t.is_click_to_message) === !0
      );
    }
    function _t(e, t) {
      var n,
        o,
        a = (n = e.creative) == null ? void 0 : n.asset_feed_spec;
      if (a == null) return e;
      var i = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec,
        l = G(e),
        s = i[t].delete(e),
        u = G(s),
        c = r("adsConvertAdObjectRecordToPlainJS")(s),
        d = (o = c.creative) == null ? void 0 : o.asset_feed_spec;
      return Object.keys(d != null ? d : {}).length === 0 || (u && !l)
        ? r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete(s)
        : s;
    }
    function ft(e) {
      return Q(e) && Ee(e) && Re(e);
    }
    function gt(e, t) {
      return e == null || t == null
        ? !1
        : t === r("AdsPromotedObjectTypes").MOBILE_APP &&
            e === r("AdsAPIObjectives").LINK_CLICKS;
    }
    function ht(e) {
      return (
        e === r("AdsPromotedObjectTypes").MOBILE_APP ||
        e === r("AdsPromotedObjectTypes").MESSENGER ||
        e === r("AdsPromotedObjectTypes").WHATSAPP ||
        e === r("AdsPromotedObjectTypes").INSTAGRAM ||
        e === r("AdsPromotedObjectTypes").WEBSITE_AND_MESSAGES ||
        e === r("AdsPromotedObjectTypes").LEAD_FORM_MESSENGER ||
        e === r("AdsPromotedObjectTypes").LEAD_FROM_IG_DIRECT ||
        e === r("AdsPromotedObjectTypes").WHATSAPP_CHANNEL
      );
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
      (l.isEmptyAssetFeedValue = U),
      (l.isAssetFeedSpecEmpty = H),
      (l.isAdgroupUsingAssetFeedFromRecord = G),
      (l.hasAssetFeedSpecWithoutOnlyOnsiteDestinations = z),
      (l.isAAAFromRecord = K),
      (l.isPACAdgroupFromRecord = Q),
      (l.isPACAdgroup = X),
      (l.isPACAdgroupWithExistingPosts = Y),
      (l.isInstagramExistingPostPublishedAdgroupFromRecord = J),
      (l.isDLOAdgroupFromRecord = Z),
      (l.hasLanguageCustomizationFromRecord = ee),
      (l.isPACIXAdFromRecord = te),
      (l.hasPlacementCustomizationFromRecord = ne),
      (l.hasLanguageOrPlacementCustomizationFromRecord = re),
      (l.isLocalizedPlacementsAdgroupFromRecord = oe),
      (l.isDofAdgroupFromSpec = ae),
      (l.isTextOnlyDofAdgroupFromSpec = ie),
      (l.isDofMessagingDestinationAdgroupFromSpec = le),
      (l.isUnifiedProfileVisitsDestinationAdgroupFromSpec = se),
      (l.hasMediaUploadedFromCreativeAssetGroupSpec = ue),
      (l.isPACAdgroupFromRecordOrDofMessagingDestinationAdgroupFromSpec = ce),
      (l.isPACOrMCAAdgroupFromRecord = de),
      (l.isPACAndIGAdsFromRecord = me),
      (l.isDofWithImageAdgroupFromRecord = pe),
      (l.isDofWithUCAAdgroupFromRecord = _e),
      (l.isDCAssetCustomizationAdgroupFromSpec = fe),
      (l.isRegularDCOAdgroupFromRecord = ge),
      (l.isMCAAdgroupFromRecord = he),
      (l.isDOFAdgroupFromRecord = ye),
      (l.isFormatAutomationAdgroupFromRecord = Ce),
      (l.isDCOWithBrandedContent = be),
      (l.isBulkEditable = ve),
      (l.doesAdgroupHaveImages = Re),
      (l.doesAdgroupHaveDefaultImage = Le),
      (l.doesAdgroupHaveVideos = Ee),
      (l.doesAdgroupHaveDefaultVideo = ke),
      (l.getErrorForDefaultAsset = De),
      (l.getErrorsForAssetItemList = $e),
      (l.getErrorObjectsForAssetItemList = Pe),
      (l.isAssetFeedAdWithCarouselImageFormat = Ne),
      (l.checkIfDraftCampaignAlreadyHasDraftDCAd = Me),
      (l.checkIfDraftCampaignAlreadyHasDraftACOAd = we),
      (l.isDynamicCreativeAdgroup = Ae),
      (l.isAutomaticFlowLiteAdgroup = Fe),
      (l.hasCreativeFeaturesAdgroup = Oe),
      (l.isAutomaticFlow = Be),
      (l.isAutomaticFlowFromCreative = We),
      (l.getTargetObjectType = qe),
      (l.setOptimizationType = Ue),
      (l.getDistinctMediaAssetCount = Ve),
      (l.getMediaTypeFromFormat = He),
      (l.hasMultipleAssets = ze),
      (l.getAdditionalPlacementCount = je),
      (l.getAssetMediaAdlabelCount = Ke),
      (l.isTextOnlyDofAssetFeedSpec = Xe),
      (l.getAssetsForField = Ye),
      (l.isDofWithImageAssetFeedSpec = Je),
      (l.isAcoAutoflowAssetFeedSpec = Ze),
      (l.getDLOMediaFormat = tt),
      (l.isDLOForAAA = nt),
      (l.isSafeImageURL = rt),
      (l.isStaticCreativeWithAssetFeedSpec = ot),
      (l.isCreativeBadgeFromRecord = at),
      (l.convertAdsErrorsToMessage = lt),
      (l.getIsAudiosAdgroupEnabled = st),
      (l.getAdgroupAudiosType = ut),
      (l.getAdgroupIsAudioSwap = ct),
      (l.getAdgroupAudiosIDs = dt),
      (l.getAdgroupAudiosAsset = mt),
      (l.isClickToMultiDestAds = pt),
      (l.removeFieldFromAssetFeedSpec = _t),
      (l.isPACMixedImageAndVideoFromRecord = ft),
      (l.shouldAddObjectStoreURLForTrafficAndPromotedApp = gt),
      (l.isAppOrMessagingDestination = ht));
  },
  98,
);
