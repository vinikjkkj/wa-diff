__d(
  "AdsCreativeFeaturesUtils",
  [
    "AdsAPlusCEnhanceCTAUtils",
    "AdsAccountStore",
    "AdsAdgroupRecordAccessors",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedSimpleFieldCheckUtils",
    "AdsAssetFeedUtils",
    "AdsAutomaticFlowUtils",
    "AdsBuyingTypes",
    "AdsChildAttachmentsUtils",
    "AdsInteractiveComponentConstants",
    "AdsODAXUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAssetCustomizationTypes",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsProductExtensionsUtil",
    "AdsRegulatedCategory",
    "StandardEnhancementWithProductExtensionsCutoffTimeSV.experimental",
    "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
    "gkx",
    "immutable",
    "isTruthy",
    "justknobx",
    "parseISODate",
    "passAPlusCStickyOptOutForFastTrackGlobalishGK",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e = r("immutable")).List([
        "previews/mobile_feed_standard",
        "previews/instagram_stream",
        "previews/facebook_reels_mobile",
      ]),
      u = e.List(["previews/instagram_story"]),
      c = e.List([
        "previews/instagram_story",
        "previews/mobile_feed_standard",
        "previews/instagram_stream",
        "previews/facebook_reels_mobile",
      ]),
      d = e.List([
        "previews/instagram_reels",
        "previews/instagram_story",
        "previews/mobile_feed_standard",
        "previews/instagram_stream",
      ]),
      m = e.List([
        "previews/mobile_feed_standard",
        "previews/facebook_reels_mobile",
        "previews/facebook_story",
      ]),
      p = e.List(["previews/facebook_reels_mobile"]),
      _ = e.List([
        "previews/mobile_feed_standard",
        "previews/facebook_reels_mobile",
        "previews/instagram_reels",
        "previews/instagram_story",
        "previews/instagram_stream",
      ]),
      f = e.List([
        "previews/instagram_stream",
        "previews/instagram_story",
        "previews/facebook_reels_mobile",
        "previews/mobile_feed_standard",
      ]),
      g = e.List(
        [
          "previews/mobile_feed_standard",
          o("AdsAPlusCEnhanceCTAUtils").passNotifProminentHeadlineGK("silent")
            ? "previews/facebook_notification_mobile"
            : null,
          "previews/instagram_story",
          "previews/instagram_stream",
          "previews/instagram_reels",
        ].filter(Boolean),
      ),
      h = r("immutable").List([
        "previews/instagram_story",
        "previews/mobile_feed_standard",
        "previews/instagram_stream",
        "previews/facebook_reels_mobile",
        "previews/whatsapp_marketing_message",
      ]),
      y = r("immutable").List([
        "previews/facebook_reels_mobile",
        "previews/facebook_story",
        "previews/instagram_reels",
        "previews/instagram_story",
        "previews/instagram_stream",
        "previews/mobile_feed_standard",
      ]),
      C = r("immutable").List(
        [
          "previews/instagram_stream",
          "previews/instagram_story",
          "previews/instagram_reels",
          "previews/facebook_story",
          "previews/facebook_reels_mobile",
          o("AdsAPlusCEnhanceCTAUtils").passFBFeedDynamicCTAGK("silent")
            ? "previews/mobile_feed_standard"
            : null,
        ].filter(Boolean),
      ),
      b = r("immutable").List(["previews/instagram_story"]),
      v = r("immutable").List([
        "previews/mobile_feed_standard",
        "previews/instagram_stream",
      ]),
      S = r("immutable").List(["previews/mobile_feed_standard"]),
      R = r("immutable").List([
        "previews/mobile_feed_standard",
        "previews/facebook_reels_mobile",
        "previews/facebook_story",
        "previews/instagram_stream",
      ]),
      L = r("immutable").List(["previews/mobile_feed_standard"]),
      E = r("immutable").List([
        "previews/facebook_reels_mobile",
        "previews/facebook_story",
        "previews/instagram_reels",
        "previews/instagram_story",
        "previews/instagram_stream",
        "previews/mobile_feed_standard",
      ]),
      k = r("immutable").List(["previews/mobile_feed_standard"]),
      I = r("immutable").List(["previews/facebook_story"]),
      T = r("immutable").List([
        "previews/facebook_story",
        "previews/instagram_story",
      ]),
      D = r("immutable")
        .List(["previews/instagram_stream", "previews/mobile_feed_standard"])
        .filter(Boolean);
    function x(e, t) {
      return e.features_eligibility_map.eligible_features.includes(t);
    }
    function $(e, t, n) {
      return (
        t === void 0 && (t = !1),
        n === void 0 && (n = !1),
        e.map(function (e) {
          if (e.get("position_spec") != null && !t) {
            var a,
              i,
              l,
              s,
              u = e.get("position_spec");
            if (n) {
              var c, d, m, p;
              return r("immutable").Map(
                ((p = {}),
                (p.type = o(
                  "AdsInteractiveComponentConstants",
                ).SHOPPING_PRODUCT_TAG),
                (p.position_spec = r("immutable").Map(
                  ((m = {}),
                  (m.x = (c = u.get("x")) != null ? c : 0.5),
                  (m.y = (d = u.get("y")) != null ? d : 0.5),
                  m),
                )),
                (p.product_tag_spec = e.get("product_tag_spec")),
                p),
              );
            }
            return r("immutable").Map(
              ((s = {}),
              (s.type = o(
                "AdsInteractiveComponentConstants",
              ).SHOPPING_PRODUCT_TAG),
              (s.position_spec = r("immutable").Map(
                ((l = {}),
                (l.x = (a = u.get("x")) != null ? a : 0.5),
                (l.y = (i = u.get("y")) != null ? i : 0.5),
                (l.width = 1),
                (l.height = 1),
                l),
              )),
              (s.product_tag_spec = e.get("product_tag_spec")),
              s),
            );
          } else {
            var _;
            return r("immutable").Map(
              ((_ = {}),
              (_.type = o(
                "AdsInteractiveComponentConstants",
              ).SHOPPING_PRODUCT_TAG),
              (_.product_tag_spec = e.get("product_tag_spec")),
              _),
            );
          }
        })
      );
    }
    function P(e, t) {
      return (
        (e == null ? void 0 : e.features_eligibility_map.extra_data) != null &&
        e.features_eligibility_map.extra_data.has(t)
      );
    }
    function N(e, t) {
      var n = e.created_time,
        o = n != null ? r("parseISODate")(n).getTime() : Date.now();
      return o < t;
    }
    function M(e, t) {
      var n, r;
      return (n =
        (r = e.creative) == null ||
        (r = r.degrees_of_freedom_spec) == null ||
        (r = r.creative_features_spec) == null ||
        (r = r[t]) == null
          ? void 0
          : r.enroll_status) != null
        ? n
        : null;
    }
    function w(e) {
      return o("AdsAssetFeedUtils").getIsAudiosAdgroupEnabled(e);
    }
    function A(e) {
      var t,
        n =
          (t = e.creative) == null ||
          (t = t.degrees_of_freedom_spec) == null ||
          (t = t.creative_features_spec) == null ||
          (t = t.video_filtering) == null
            ? void 0
            : t.enroll_status;
      return n != null ? n === "OPT_IN" : null;
    }
    function F(e) {
      var t,
        n =
          ((t = e.creative) == null ||
          (t = t.interactive_components_spec) == null
            ? void 0
            : t.components) || ue(e);
      if (n == null) return !1;
      var r = n.filter(function (e) {
        return e.get("product_tag_spec");
      });
      return r.size > 0;
    }
    function O(e) {
      var t,
        n =
          (t = e.creative) == null ||
          (t = t.degrees_of_freedom_spec) == null ||
          (t = t.creative_features_spec) == null ||
          (t = t.cv_transformation) == null
            ? void 0
            : t.enroll_status;
      return n != null ? n === "OPT_IN" : null;
    }
    function B(e) {
      var t;
      if (r("gkx")("7425") || r("gkx")("6505") || r("gkx")("395")) {
        var n;
        return (
          ((n = e.creative) == null ||
          (n = n.degrees_of_freedom_spec) == null ||
          (n = n.creative_features_spec) == null ||
          (n = n.carousel_to_video) == null
            ? void 0
            : n.enroll_status) === "OPT_IN"
        );
      }
      return (
        ((t = e.creative) == null ||
        (t = t.degrees_of_freedom_spec) == null ||
        (t = t.creative_features_spec) == null ||
        (t = t.carousel_to_video) == null
          ? void 0
          : t.enroll_status) !== "OPT_OUT"
      );
    }
    function W(e) {
      var t;
      if (r("gkx")("7425") || r("gkx")("6505") || r("gkx")("395")) {
        var n;
        return (
          ((n = e.creative) == null ||
          (n = n.degrees_of_freedom_spec) == null ||
          (n = n.creative_features_spec) == null ||
          (n = n.multi_photo_to_video) == null
            ? void 0
            : n.enroll_status) === "OPT_IN"
        );
      }
      return (
        ((t = e.creative) == null ||
        (t = t.degrees_of_freedom_spec) == null ||
        (t = t.creative_features_spec) == null ||
        (t = t.multi_photo_to_video) == null
          ? void 0
          : t.enroll_status) !== "OPT_OUT"
      );
    }
    function q(e) {
      var t;
      return (
        ((t = e.creative) == null ||
        (t = t.degrees_of_freedom_spec) == null ||
        (t = t.creative_features_spec) == null
          ? void 0
          : t.multi_photo_to_video) == null
      );
    }
    function U(e) {
      var t;
      return (
        ((t = e.creative) == null ||
        (t = t.degrees_of_freedom_spec) == null ||
        (t = t.creative_features_spec) == null
          ? void 0
          : t.carousel_to_video) == null
      );
    }
    function V(e, t) {
      var n;
      return (
        ((n = e.creative) == null ||
        (n = n.degrees_of_freedom_spec) == null ||
        (n = n.creative_features_spec) == null ||
        (n = n[t]) == null
          ? void 0
          : n.enroll_status) === "OPT_IN"
      );
    }
    function H(e, t) {
      var n;
      if (!e) return null;
      var r =
        (n = e.creative) == null ||
        (n = n.degrees_of_freedom_spec) == null ||
        (n = n.creative_features_spec) == null
          ? void 0
          : n[t];
      return r == null ? null : r.enroll_status === "OPT_IN";
    }
    function G(e) {
      var t;
      if (!e) return null;
      var n =
        (t = e.creative) == null ||
        (t = t.biz_ai) == null ||
        (t = t.capabilities) == null
          ? void 0
          : t.prompts;
      return n == null ? null : n.enroll_status === "OPT_IN";
    }
    function z(e, t) {
      var n;
      return (
        (e == null ||
        (n = e.creative) == null ||
        (n = n.degrees_of_freedom_spec) == null ||
        (n = n.creative_features_spec) == null ||
        (n = n[t]) == null
          ? void 0
          : n.enroll_status) === "OPT_OUT"
      );
    }
    function j(e, t) {
      var n;
      return (
        ((n = e.creative) == null ||
        (n = n.degrees_of_freedom_spec) == null ||
        (n = n.creative_features_spec) == null ||
        (n = n[t]) == null
          ? void 0
          : n.enroll_status) != null
      );
    }
    function K(e) {
      return V(e, "video_auto_crop") || V(e, "video_uncrop");
    }
    function Q(e) {
      var t,
        n =
          (t = e.creative) == null ||
          (t = t.degrees_of_freedom_spec) == null ||
          (t = t.creative_features_spec) == null ||
          (t = t.image_animation) == null
            ? void 0
            : t.enroll_status;
      return n != null ? n === "OPT_IN" : null;
    }
    function X(e) {
      var t,
        n =
          (t = e.creative) == null ||
          (t = t.degrees_of_freedom_spec) == null ||
          (t = t.creative_features_spec) == null ||
          (t = t.image_animation) == null
            ? void 0
            : t.enroll_status,
        r = n != null ? n === "OPT_IN" : null;
      if (r === null || !r) {
        var o,
          a =
            (o = e.creative) == null ||
            (o = o.degrees_of_freedom_spec) == null ||
            (o = o.creative_features_spec) == null ||
            (o = o.cv_transformation) == null
              ? void 0
              : o.enroll_status;
        r = a != null ? a === "OPT_IN" : null;
      }
      return r;
    }
    function Y(e) {
      var t,
        n =
          (t = e.creative) == null ||
          (t = t.degrees_of_freedom_spec) == null ||
          (t = t.creative_features_spec) == null ||
          (t = t.image_uncrop) == null
            ? void 0
            : t.enroll_status;
      return n != null ? n === "OPT_IN" : null;
    }
    function J(e, t) {
      var n = r("AdsAccountStore").get(e.account_id).getValue();
      return (
        t == null &&
        n != null &&
        o("AdsProductExtensionsUtil").isAdgroupEligibleForProductExtensions(
          e,
        ) &&
        N(
          e,
          r("StandardEnhancementWithProductExtensionsCutoffTimeSV.experimental")
            .cutOffTime,
        )
      );
    }
    function Z(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.creative_sourcing_spec) == null
          ? void 0
          : t.associated_product_set_id) != null
      );
    }
    function ee(e) {
      var t,
        n =
          (t = e.creative) == null ||
          (t = t.degrees_of_freedom_spec) == null ||
          (t = t.creative_features_spec) == null ||
          (t = t.product_extensions) == null
            ? void 0
            : t.enroll_status;
      if (J(e, n)) {
        var r,
          o =
            (r = e.creative) == null ||
            (r = r.degrees_of_freedom_spec) == null ||
            (r = r.creative_features_spec) == null ||
            (r = r.standard_enhancements) == null
              ? void 0
              : r.enroll_status;
        return o != null ? o === "OPT_IN" : null;
      }
      return n != null ? n === "OPT_IN" : null;
    }
    function te(e) {
      var t,
        n =
          (t = e.creative) == null ||
          (t = t.degrees_of_freedom_spec) == null ||
          (t = t.creative_features_spec) == null ||
          (t = t.local_store_extension) == null
            ? void 0
            : t.enroll_status;
      return n != null ? n === "OPT_IN" : null;
    }
    function ne(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.degrees_of_freedom_spec) == null
          ? void 0
          : t.ad_handle_type) === "DYNAMIC"
      );
    }
    function re(e) {
      var t,
        n,
        r,
        o,
        a,
        i,
        l,
        s = "multi_share_end_card";
      return !!((t =
        (n =
          (r =
            (o = e.creative) == null ||
            (o = o.object_story_spec) == null ||
            (o = o.template_data) == null
              ? void 0
              : o.multi_share_end_card) != null
            ? r
            : (a = e.creative) == null ||
                (a = a.object_story_spec) == null ||
                (a = a.link_data) == null
              ? void 0
              : a.multi_share_end_card) != null
          ? n
          : (i = e.creative) == null ||
              (i = i.asset_feed_spec) == null ||
              (i = i.carousels) == null ||
              (i = i.first()) == null
            ? void 0
            : i.get(s)) != null
        ? t
        : !(
            (l = e.creative) == null ||
            (l = l.asset_feed_spec) == null ||
            (l = l.additional_data) == null
          ) && l.multi_share_end_card);
    }
    function oe(e) {
      var t,
        n,
        r,
        o,
        a,
        i = "multi_share_optimized";
      return (t =
        (n =
          (r = e.creative) == null ||
          (r = r.object_story_spec) == null ||
          (r = r.template_data) == null
            ? void 0
            : r.multi_share_optimized) != null
          ? n
          : (o = e.creative) == null ||
              (o = o.object_story_spec) == null ||
              (o = o.link_data) == null
            ? void 0
            : o.multi_share_optimized) != null
        ? t
        : ((a = e.creative) == null ||
          (a = a.asset_feed_spec) == null ||
          (a = a.carousels) == null ||
          (a = a.first()) == null
            ? void 0
            : a.get(i)) === !0;
    }
    function ae(e) {
      var t,
        n = o("AdsAssetFeedSimpleFieldCheckUtils").isRegularDCOCampaign(e),
        a = o(
          "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
        ).convertCampaignRecordToPlacementSpec(e),
        i = o("AdsPlacementAPISpecReaderUtils").isActiveFacebookFeedPosition(a),
        l = r("isTruthy")(
          (t = e.promoted_object) == null ? void 0 : t.offer_id,
        );
      return !n && !l && i;
    }
    function ie(e, t) {
      return (
        e.buying_type === r("AdsBuyingTypes").AUCTION &&
        o("AdsAutomaticFlowUtils").eligibleObjectives.includes(
          o("AdsODAXUtils").maybeTranslateObjective(e.objective, t),
        )
      );
    }
    function le(e) {
      var t,
        n,
        r =
          (t = e.creative) == null ||
          (t = t.degrees_of_freedom_spec) == null ||
          (t = t.creative_features_spec) == null
            ? void 0
            : t.standard_enhancements;
      return (
        (r == null ? void 0 : r.enroll_status) === "OPT_IN" &&
        (r == null || (n = r.action_metadata) == null ? void 0 : n.type) ===
          "DEFAULT"
      );
    }
    function se(e) {
      var t;
      return !(
        e.special_ad_categories == null ||
        e.special_ad_categories.size === 0 ||
        e.special_ad_categories.length === 0 ||
        ((t = e.special_ad_categories) != null &&
          t.includes(r("AdsRegulatedCategory").NONE))
      );
    }
    function ue(e) {
      var t,
        n,
        a =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.asset_customization_rules;
      if (a == null) return r("immutable").List();
      var i = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).getDefaultTargetRuleLabel(e, "image_label"),
        l =
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.images,
        s = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(l, i).index,
        u = r("immutable").List();
      if (s != null && s >= 0) {
        var c,
          d = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.images.at(
            s,
          );
        u =
          ((c = d.interactive_components_spec.get(e)) == null
            ? void 0
            : c.get("components")) || r("immutable").List();
      }
      return u;
    }
    function ce(e) {
      var t,
        n,
        a,
        i,
        l =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.asset_customization_rules;
      if (l == null) return r("immutable").List();
      var s =
          e == null ||
          (n = e.creative) == null ||
          (n = n.asset_feed_spec) == null ||
          (n = n.images) == null
            ? void 0
            : n.find(function (e) {
                var t = o(
                  "AdsAssetFeedFieldUtils",
                ).getAssetInteractiveComponents(r("immutable").fromJS(e));
                return t != null && !t.isEmpty();
              }),
        u =
          e == null ||
          (a = e.creative) == null ||
          (a = a.asset_feed_spec) == null ||
          (a = a.videos) == null
            ? void 0
            : a.find(function (e) {
                var t = o(
                  "AdsAssetFeedFieldUtils",
                ).getAssetInteractiveComponents(r("immutable").fromJS(e));
                return t != null && !t.isEmpty();
              }),
        c = s != null ? s : u;
      return c == null
        ? r("immutable").List()
        : (i = o("AdsAssetFeedFieldUtils").getAssetInteractiveComponents(
              r("immutable").fromJS(c),
            )) != null
          ? i
          : r("immutable").List();
    }
    function de(e) {
      var t,
        n =
          ((t = e.creative) == null ||
          (t = t.interactive_components_spec) == null
            ? void 0
            : t.components) || ce(e),
        a = r("immutable").List();
      if (
        (n != null &&
          n.size > 0 &&
          (a = n
            .filter(function (e) {
              return e.get("product_tag_spec");
            })
            .map(function (e) {
              return {
                positionSpec: e.get("position_spec"),
                productTagSpec: e.get("product_tag_spec"),
                isProductTagSelected: !1,
              };
            })),
        a.size === 0)
      )
        return null;
      if (a != null && a.size > 0) {
        var i = r("immutable")
          .Map()
          .set(
            o("AdsPlacementAssetCustomizationTypes").AdsPlacementAssetGroups
              .INSTAGRAM,
            a,
          );
        return i;
      }
      return null;
    }
    function me(e, t, n, o, a, i) {
      var l = [];
      return (
        r("isTruthy")(a) && l.push("previews/instagram_reels"),
        r("isTruthy")(i) && l.push("previews/instagram_story"),
        r("isTruthy")(t) && l.push("previews/facebook_reels_mobile"),
        r("isTruthy")(e) && l.push("previews/mobile_feed_standard"),
        r("isTruthy")(n) && l.push("previews/watch_feed_mobile"),
        r("isTruthy")(o) && l.push("previews/instagram_stream"),
        r("immutable").List(l)
      );
    }
    function pe(e, t, n) {
      var o = [];
      return (
        n != null && n && o.push("previews/instagram_story"),
        e != null && e && o.push("previews/instagram_stream"),
        t != null && t && o.push("previews/instagram_reels"),
        r("immutable").List(o)
      );
    }
    function _e(e) {
      var t, n, r, o, a;
      return (
        ((t = e.image_templates) == null ? void 0 : t.enroll_status) != null ||
        ((n = e.image_touchups) == null ? void 0 : n.enroll_status) != null ||
        ((r = e.text_optimizations) == null ? void 0 : r.enroll_status) !=
          null ||
        ((o = e.video_auto_crop) == null ? void 0 : o.enroll_status) != null ||
        ((a = e.inline_comment) == null ? void 0 : a.enroll_status) != null
      );
    }
    function fe(e) {
      if (!o("AdsChildAttachmentsUtils").isDynamicAdCarouselMediaFormat(e))
        return !1;
      var t = r("justknobx")._("1762");
      return t;
    }
    function ge(e) {
      return !(
        !o("AdsChildAttachmentsUtils").isCarouselAd(e) ||
        o("AdsChildAttachmentsUtils").isDynamicAdCarouselMediaFormat(e)
      );
    }
    var he = function (t, n, o, a) {
        if (a === !0 && r("passAPlusCStickyOptOutForFastTrackGlobalishGK")())
          return !1;
        var e = z(t, o);
        return !e && n;
      },
      ye = function (t) {
        return t.platform === "instagram" && t.position === "reels";
      },
      Ce = function (t) {
        var e,
          n =
            (t == null || (e = t.assets) == null || (e = e.media) == null
              ? void 0
              : e.validPlacements) || r("immutable").List([]),
          o = n.filter(function (e) {
            return ye(e);
          });
        return o.size > 0;
      };
    function be(e, t) {
      var n, o, a;
      t === void 0 && (t = !1);
      var i =
          ((n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.optimization_type) != null && r("gkx")("12583"),
        l =
          t || i
            ? (o = e.creative) == null
              ? void 0
              : o.product_data
            : (a = e.creative) == null || (a = a.object_story_spec) == null
              ? void 0
              : a.product_data;
      return (
        l != null &&
        l.filter(function (e) {
          return e.product_id !== "0";
        }).length > 0
      );
    }
    function ve(e, t) {
      var n,
        r,
        o =
          (n = e.creative) == null ||
          (n = n.degrees_of_freedom_spec) == null ||
          (n = n.creative_features_spec) == null ||
          (n = n[t]) == null ||
          (n = n.action_metadata) == null
            ? void 0
            : n.type,
        a =
          (r = e.creative) == null ||
          (r = r.degrees_of_freedom_spec) == null ||
          (r = r.creative_features_spec) == null ||
          (r = r[t]) == null
            ? void 0
            : r.enroll_status;
      return o === "STICKY" && a === "OPT_IN";
    }
    ((l.IMAGE_TEMPLATE_AFFECTED_PLACEMENTS = s),
      (l.ADD_OVERLAYS_AFFECTED_PLACEMENTS = u),
      (l.IMAGE_TOUCHUP_AFFECTED_PLACEMENTS = c),
      (l.VIDEO_AUTO_CROP_AFFECTED_PLACEMENTS = d),
      (l.TRANSLATE_VOICEOVER_AFFECTED_PLACEMENTS = m),
      (l.VIDEO_VOICEOVER_AFFECTED_PLACEMENTS = p),
      (l.VIDEO_VISUAL_TOUCHUPS_AFFECTED_PLACEMENTS = _),
      (l.VIDEO_FILTERING_AFFECTED_PLACEMENTS = f),
      (l.TEXT_OPTIMIZATION_AFFECTED_PLACEMENTS = g),
      (l.IMAGE_BRIGHTNESS_AND_CONTRAST_AFFECTED_PLACEMENTS = h),
      (l.BIZ_AI_CHAT_STARTER_AFFECTED_PLACEMENTS = y),
      (l.ENHANCE_CTA_AFFECTED_PLACEMENTS = C),
      (l.GENERATE_CTA_AFFECTED_PLACEMENTS = b),
      (l.DA_APLUSC_AFFECTED_PLACEMENTS = v),
      (l.DA_DYNAMIC_DESCRIPTION_AFFECTED_PLACEMENTS = S),
      (l.IMAGE_BACKGROUND_GEN_AFFECTED_PLACEMENTS = R),
      (l.DA_ADD_TEXT_OVERLAYS_AFFECTED_PLACEMENTS = L),
      (l.TEXT_TRANSLATION_AFFECTED_PLACEMENTS = E),
      (l.VIDEO_TO_IMAGE_AFFECTED_PLACEMENTS = k),
      (l.CREATIVE_STICKERS_AFFECTED_PLACEMENTS = I),
      (l.CREATIVE_STICKERS_AFFECTED_PLACEMENTS_WITH_IG = T),
      (l.APLUSC_SHOW_SUMMARY_AFFECTED_PLACEMENTS = D),
      (l.isCreativeFeatureEligible = x),
      (l.getProductTagComponentsSpec = $),
      (l.isAPlusCFeatureRecommendedOn = P),
      (l.getAPlusCFeatureEnrollmentFromAdgroup = M),
      (l.isMusicOnReelsOptedInFromAdgroup = w),
      (l.isVideoFilteringOptedInFromAdgroup = A),
      (l.isProductTaggingOptedInFromAdgroup = F),
      (l.isCVTransformationOptedInFromAdgroup = O),
      (l.isCarouselToVideoOptedInFromAdgroup = B),
      (l.isMultiPhotoToVideoOptedInFromAdgroup = W),
      (l.isMultiPhotoToVideDefaultOptedInFromAdgroup = q),
      (l.isCarouselToVideDefaultOptedInFromAdgroup = U),
      (l.isFeatureOptedInFromAdgroup = V),
      (l.isFeatureOptedInFromAdgroupNullable = H),
      (l.isBizAIPromptsOptedInFromAdgroupNullable = G),
      (l.isFeatureOptedOutFromAdgroup = z),
      (l.isFeatureEnrollStatusSetInAdgroup = j),
      (l.getVideoTouchupOptedInStatus = K),
      (l.getImageAnimationOptedInStatus = Q),
      (l.getAddAnimationOptedInStatus = X),
      (l.getImageUncropOptedInStatus = Y),
      (l.hasAssociatedProductSetId = Z),
      (l.isProductExtensionsOptedInFromAdgroup = ee),
      (l.isAPlusCLocalStoreExtensionOptedInFromAdgroup = te),
      (l.isDHAOptedInFromAdgroup = ne),
      (l.isCarouselEndCardOptedInFromAdgroup = re),
      (l.isCarouselReorderOptedInFromAdgroup = oe),
      (l.isCampaignEligibleForCreativeFeatures = ae),
      (l.isCampaignGroupEligibleForCreativeFeatures = ie),
      (l.isDefaultOnSEAdgroup = le),
      (l.isAdsRegulatedCategory = se),
      (l.getDefaultPACInteractiveComponents = ue),
      (l.getPACInteractiveComponents = ce),
      (l.getProductTagDataForProductExtensions = de),
      (l.getMusicAdsPreviewPluginKeys = me),
      (l.get3DAdsPreviewPluginKeys = pe),
      (l.areSESubFeaturesPresentInChangeSet = _e),
      (l.isEligibleForDAUncropPreview = fe),
      (l.isEligibleForSACarouselUncropPreview = ge),
      (l.shouldOverrideAplusCFeatureAsOn = he),
      (l.isIGReelsPlacement = ye),
      (l.isIGReelsAsset = Ce),
      (l.hasProductData = be),
      (l.isAPlusCFeatureStickyOn = ve));
  },
  98,
);
