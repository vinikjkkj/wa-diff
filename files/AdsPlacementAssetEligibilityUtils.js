__d(
  "AdsPlacementAssetEligibilityUtils",
  [
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAccountUtils",
    "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
    "AdsAssetCustomizationEligibility",
    "AdsAssetCustomizationIXEligibility",
    "AdsAssetFeedUtils",
    "AdsCanvasAdUtils",
    "AdsChildAttachmentsUtils",
    "AdsDynamicAdsUtils",
    "AdsODAXUtils",
    "AdsOfferState",
    "AdsPlacementAPISpecDefaultsUtils",
    "AdsPlacementAssetCarouselUtils",
    "AdsPlacementAssetUtils",
    "AdsPlacementPluginList",
    "AdsPlacementsAudienceNetworkClassicPositionPlugin",
    "AdsPlacementsAudienceNetworkInstreamVideoPositionPlugin",
    "AdsPlacementsAudienceNetworkRewardedVideoPositionPlugin",
    "AdsPlacementsFacebookBizDiscoFeedPositionPlugin",
    "AdsPlacementsFacebookFbReelsPositionPlugin",
    "AdsPlacementsFacebookFeedsPositionPlugin",
    "AdsPlacementsFacebookInstantArticlePositionPlugin",
    "AdsPlacementsFacebookInstreamVideosPositionPlugin",
    "AdsPlacementsFacebookMarketplacePositionPlugin",
    "AdsPlacementsFacebookNotificationPositionPlugin",
    "AdsPlacementsFacebookProfileFeedPositionPlugin",
    "AdsPlacementsFacebookReelsOverlayPositionPlugin",
    "AdsPlacementsFacebookRightColumnPositionPlugin",
    "AdsPlacementsFacebookSearchPositionPlugin",
    "AdsPlacementsFacebookStoryPositionPlugin",
    "AdsPlacementsFacebookVideoFeedsPositionPlugin",
    "AdsPlacementsInstagramExplorePositionPlugin",
    "AdsPlacementsInstagramFeedPositionPlugin",
    "AdsPlacementsInstagramProfileReelsPositionPlugin",
    "AdsPlacementsInstagramReelsPositionPlugin",
    "AdsPlacementsInstagramStoryPositionPlugin",
    "AdsPlacementsMessengerInboxPositionPlugin",
    "AdsPlacementsMessengerStoryPositionPlugin",
    "AdsPlacementsThreadsFeedPositionPlugin",
    "AdsPlacementsWhatsAppMarketingMessagePositionPlugin",
    "AdsPlacementsWhatsAppStatusPositionPlugin",
    "AdsPromotedObjectTypes",
    "AdsUEditorMessagingDestinationUtils",
    "AppAdsPlayablesUtils",
    "WAMOStatusAdsManagerUtils",
    "adsCampaignGetOfferStateType",
    "adsConvertAdObjectRecordToPlainJS",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = t.publisher_platforms;
      return (
        !!n &&
        n.every(function (e) {
          return r(
            "AdsAssetCustomizationEligibility",
          ).PUBLISHER_PLATFORMS.includes(e);
        })
      );
    }
    function s(e, t) {
      var n = t.device_platforms;
      return (
        !n ||
        n.every(function (e) {
          return r(
            "AdsAssetCustomizationEligibility",
          ).DEVICE_PLATFORMS.includes(e);
        })
      );
    }
    function u(e, t) {
      var n = t.facebook_positions;
      return !n || c(n.map(String), e.capabilities);
    }
    function c(e, t) {
      var n,
        a =
          (n = o("AdsPlacementAssetUtils").groupToCapabilities.get(
            "facebook",
          )) != null
            ? n
            : [],
        i = a.some(function (n) {
          var r = n.capability,
            o = n.position;
          return e.includes(o) && !(t != null && t.includes(r));
        });
      return i
        ? !1
        : e.every(function (e) {
            return r(
              "AdsAssetCustomizationEligibility",
            ).FACEBOOK_POSITIONS.includes(e);
          });
    }
    function d(e, t) {
      var n = t.instagram_positions;
      return !n || m(n.map(String), e.capabilities);
    }
    function m(e, t) {
      var n;
      if (r("gkx")("6500") && e.includes("explore")) return !1;
      var a =
          (n = o("AdsPlacementAssetUtils").groupToCapabilities.get(
            "instagram",
          )) != null
            ? n
            : [],
        i = a.some(function (n) {
          var r = n.capability,
            o = n.position;
          return e.includes(o) && !(t != null && t.includes(r));
        });
      return i
        ? !1
        : e.every(function (e) {
            return r(
              "AdsAssetCustomizationEligibility",
            ).INSTAGRAM_POSITIONS.includes(e);
          });
    }
    function p(e, t) {
      var n = t.audience_network_positions;
      return !n || _(n.map(String));
    }
    function _(e) {
      return e.every(function (e) {
        return r(
          "AdsAssetCustomizationEligibility",
        ).AUDIENCE_NETWORK_POSITIONS.includes(e);
      });
    }
    function f(e, t) {
      var n = t.messenger_positions;
      return !n || g(n.map(String));
    }
    function g(e) {
      return e.every(function (e) {
        return r(
          "AdsAssetCustomizationEligibility",
        ).MESSENGER_POSITIONS.includes(e);
      });
    }
    function h(e, t) {
      var n = t.threads_positions;
      return !n || y(n.map(String));
    }
    function y(e) {
      return e.every(function (e) {
        return r("AdsAssetCustomizationEligibility").THREADS_POSITIONS.includes(
          e,
        );
      });
    }
    function C(e, t) {
      var n = t.oculus_positions;
      return !n || b(n.map(String));
    }
    function b(e) {
      return e.every(function (e) {
        return r("AdsAssetCustomizationEligibility").OCULUS_POSITIONS.includes(
          e,
        );
      });
    }
    function v(e, t) {
      var n = t.whatsapp_positions;
      return !n || S(n.map(String));
    }
    function S(e) {
      return e.every(function (e) {
        return r(
          "AdsAssetCustomizationEligibility",
        ).WHATSAPP_POSITIONS.includes(e);
      })
        ? e.includes("status")
          ? o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForWAMOStatus()
          : !!e.includes("marketing_messages")
        : !1;
    }
    function R(e, t, n) {
      return L(e, t, n) && B(n, n == null ? null : n.spec);
    }
    function L(e, t, n) {
      return o("AppAdsPlayablesUtils").isPlayableAdsAdgroupFromRecord(t) ||
        k(t) ||
        o("AdsDynamicAdsUtils").isDynamicAd(t)
        ? !1
        : !!n &&
            E(e, n) &&
            ((!o("AdsChildAttachmentsUtils").isCarouselAd(t) &&
              !o("AdsAssetFeedUtils").hasCarouselFormat(t)) ||
              !o("AdsCanvasAdUtils").isCanvasDestinationEnabled(t)) &&
            r("adsCampaignGetOfferStateType")(e) !==
              r("AdsOfferState").HAS_OFFER;
    }
    function E(e, t) {
      return !P(e) && x(t);
    }
    function k(e) {
      var t = r("adsConvertAdObjectRecordToPlainJS")(e);
      return !1;
    }
    function I(e, t, n) {
      return L(e, t, n) && !$(t);
    }
    function T(e, t, n) {
      var a, i, l, s, u, c;
      if (
        o("AppAdsPlayablesUtils").isPlayableAdsAdgroupFromRecord(t) ||
        k(t) ||
        ((a = e.promoted_object) == null ? void 0 : a.omnichannel_object) !=
          null ||
        (n == null ? void 0 : n.promotedObjectType) ===
          r("AdsPromotedObjectTypes").PHONE_CALL
      )
        return !1;
      var d =
        (i =
          (l =
            (s = t.creative) == null ||
            (s = s.object_story_spec) == null ||
            (s = s.link_data) == null ||
            (s = s.call_to_action) == null
              ? void 0
              : s.type) != null
            ? l
            : (u = t.creative) == null ||
                (u = u.object_story_spec) == null ||
                (u = u.video_data) == null ||
                (u = u.call_to_action) == null
              ? void 0
              : u.type) != null
          ? i
          : (c = t.creative) == null ||
              (c = c.object_story_spec) == null ||
              (c = c.photo_data) == null ||
              (c = c.call_to_action) == null
            ? void 0
            : c.type;
      if (
        o(
          "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
        ).isUnifiedCreativePhotoData(t)
      ) {
        var m;
        d =
          (m = t.creative) == null ||
          (m = m.asset_feed_spec) == null ||
          (m = m.call_to_actions) == null
            ? void 0
            : m.getIn([0, "type"]);
      }
      return d === "CALL_NOW"
        ? !1
        : !!n &&
            [
              r("AdsAPIObjectives").LINK_CLICKS,
              r("AdsAPIObjectives").CONVERSIONS,
              r("AdsAPIObjectives").PAGE_LIKES,
              r("AdsAPIObjectives").POST_ENGAGEMENT,
              r("AdsAPIObjectives").MESSAGES,
              r("AdsAPIObjectives").BRAND_AWARENESS,
              r("AdsAPIObjectives").REACH,
              r("AdsAPIObjectives").APP_INSTALLS,
              r("AdsAPIObjectives").VIDEO_VIEWS,
              r("AdsAPIObjectives").LEAD_GENERATION,
              r("AdsAPIObjectives").WILDCARD_INTERNAL_ONLY,
            ].includes(n.objective);
    }
    function D(e, t) {
      var n;
      return ((n = e.promoted_object) == null ? void 0 : n.product_set_id) !=
        null && e.promoted_object.product_set_id !== ""
        ? !1
        : !!t && E(e, t);
    }
    function x(e) {
      if (!e) return !1;
      var t = o("AdsODAXUtils").maybeTranslateObjective(
        e.objective,
        e.promotedObjectType,
        e.optimizationGoal == null
          ? null
          : r("AdsAPIOptimizationGoals")[e.optimizationGoal],
      );
      return (
        N(babelHelpers.extends({}, e, { objective: t })) &&
        M(e.promotedObjectType, e == null ? void 0 : e.destinationType)
      );
    }
    function $(e) {
      var t;
      return (
        ((t = e.creative) == null ? void 0 : t.platform_customizations) != null
      );
    }
    function P(e) {
      return e.is_dynamic_creative_optimization;
    }
    function N(e) {
      return e.objective === r("AdsAPIObjectives").STORE_VISITS
        ? !1
        : e.objective === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES
          ? !0
          : []
              .concat(r("AdsAssetCustomizationEligibility").OBJECTIVES)
              .includes(e.objective);
    }
    function M(e, t) {
      return !e ||
        e === r("AdsPromotedObjectTypes").INSTAGRAM_PROFILE ||
        e === r("AdsPromotedObjectTypes").WEB_AND_SHOP ||
        e === r("AdsPromotedObjectTypes").WEB_AND_APP ||
        e === r("AdsPromotedObjectTypes").PHONE_CALL ||
        e === r("AdsPromotedObjectTypes").IN_STORE ||
        e === r("AdsPromotedObjectTypes").WEBSITE_AND_IN_STORE ||
        e === r("AdsPromotedObjectTypes").WEBSITE_APP_AND_IN_STORE ||
        e === r("AdsPromotedObjectTypes").LEAD_FORM_MESSENGER ||
        o("AdsUEditorMessagingDestinationUtils").isMultiDestination(t) ||
        e === r("AdsPromotedObjectTypes").PRODUCT_SET ||
        e === r("AdsPromotedObjectTypes").WEBSITE_AND_INSTANT_FORM ||
        e === r("AdsPromotedObjectTypes").WEBSITE_AND_PHONE_CALL
        ? !0
        : r("AdsAssetCustomizationEligibility").PROMOTED_OBJECTS.includes(e);
    }
    function w(e, t) {
      switch (e.platform) {
        case "facebook":
          return c([e.position], t);
        case "instagram":
          return m([e.position], t);
        case "audience_network":
          return _([e.position]);
        case "messenger":
          return g([e.position]);
        case "oculus":
          return b([e.position]);
        case "whatsapp":
          return S([e.position]);
        case "threads":
          return y([e.position]);
        default:
          return !1;
      }
    }
    function A(e, t) {
      var n = e.platform;
      switch (n) {
        case "facebook":
          return o(
            "AdsPlacementAssetCarouselUtils",
          ).getIsValidPlatformCarouselFacebookPosition([e.position], t);
        case "instagram":
          return o(
            "AdsPlacementAssetCarouselUtils",
          ).getIsValidPlatformCarouselInstagramPosition([e.position], t);
        case "messenger":
          return o(
            "AdsPlacementAssetCarouselUtils",
          ).getIsValidPlatformCarouselMessengerPosition([e.position], t);
        case "audience_network":
          return o(
            "AdsPlacementAssetCarouselUtils",
          ).getIsValidPlatformCarouselAudienceNetworkPosition([e.position], t);
        case "whatsapp":
          return o(
            "AdsPlacementAssetCarouselUtils",
          ).getIsValidPlatformCarouselWhatsAppPosition([e.position], t);
        default:
          return !1;
      }
    }
    function F(e) {
      var t = e.platform,
        n = e.position;
      switch (t) {
        case "facebook":
          return r(
            "AdsAssetCustomizationIXEligibility",
          ).FACEBOOK_POSITIONS.includes(n);
        case "instagram":
          return n === "profile_feed"
            ? !1
            : r(
                "AdsAssetCustomizationIXEligibility",
              ).INSTAGRAM_POSITIONS.includes(n);
        default:
          return !1;
      }
    }
    function O(e) {
      var t = e.platform,
        n = e.position;
      switch (t) {
        case "facebook":
          return n === "feed" || n === "story" || n === "facebook_reels";
        case "instagram":
          return n === "stream" || n === "story" || n === "reels";
        default:
          return !1;
      }
    }
    function B(t, n) {
      return !t || !n
        ? !1
        : [p, s, u, d, f, C, v, h, e].every(function (e) {
            return e(t, n);
          });
    }
    function W(e) {
      var t,
        n,
        a = [
          r("AdsPlacementsFacebookFeedsPositionPlugin").key,
          r("AdsPlacementsFacebookStoryPositionPlugin").key,
          r("AdsPlacementsFacebookRightColumnPositionPlugin").key,
          r("AdsPlacementsFacebookMarketplacePositionPlugin").key,
          r("AdsPlacementsFacebookInstreamVideosPositionPlugin").key,
          r("AdsPlacementsFacebookInstantArticlePositionPlugin").key,
          r("AdsPlacementsFacebookProfileFeedPositionPlugin").key,
          r("AdsPlacementsFacebookSearchPositionPlugin").key,
          r("AdsPlacementsFacebookFbReelsPositionPlugin").key,
          r("AdsPlacementsFacebookReelsOverlayPositionPlugin").key,
          r("AdsPlacementsFacebookVideoFeedsPositionPlugin").key,
          r("AdsPlacementsInstagramFeedPositionPlugin").key,
          r("AdsPlacementsInstagramStoryPositionPlugin").key,
          r("AdsPlacementsInstagramReelsPositionPlugin").key,
          r("AdsPlacementsInstagramProfileReelsPositionPlugin").key,
          r("AdsPlacementsMessengerInboxPositionPlugin").key,
          r("AdsPlacementsMessengerStoryPositionPlugin").key,
          r("AdsPlacementsAudienceNetworkClassicPositionPlugin").key,
          r("AdsPlacementsAudienceNetworkInstreamVideoPositionPlugin").key,
          r("AdsPlacementsAudienceNetworkRewardedVideoPositionPlugin").key,
          r("AdsPlacementsWhatsAppStatusPositionPlugin").key,
          r("AdsPlacementsFacebookBizDiscoFeedPositionPlugin").key,
          r("AdsPlacementsFacebookNotificationPositionPlugin").key,
          r("AdsPlacementsThreadsFeedPositionPlugin").key,
        ];
      return (
        r("gkx")("6500") ||
          a.push(r("AdsPlacementsInstagramExplorePositionPlugin").key),
        r("gkx")("9095") &&
          a.push(r("AdsPlacementsWhatsAppMarketingMessagePositionPlugin").key),
        []
          .concat(
            (t = o("AdsPlacementAssetUtils").groupToCapabilities.get(
              "instagram",
            )) != null
              ? t
              : [],
            (n = o("AdsPlacementAssetUtils").groupToCapabilities.get(
              "whatsapp",
            )) != null
              ? n
              : [],
          )
          .forEach(function (t) {
            r("AdsAccountUtils").hasCapabilityFromList(e, t.capability) &&
              a.push(t.group);
          }),
        a
      );
    }
    function q(e) {
      var t = W(e.capabilities),
        n = o("AdsPlacementAPISpecDefaultsUtils").getAllEligibleGroupsKeySet(e);
      return t.filter(function (e) {
        return n.includes(e);
      });
    }
    function U(e) {
      var t = q(e);
      return o("AdsPlacementPluginList")
        .getAllPositions()
        .filter(function (t) {
          return t.isEnabled(e.capabilities, e.account);
        })
        .filter(function (e) {
          var n = e.key;
          return !t.includes(n);
        })
        .map(function (e) {
          var t = e.key;
          return t;
        })
        .toJS();
    }
    function V(e, t) {
      var n, r;
      if (e) {
        var a = e.assetGroups,
          i = e.assets,
          l = e.assetsPlacements;
        if (l) {
          var s = o("AdsPlacementAssetUtils").getPlacementsFromAssetGroup(t);
          if (!s) return null;
          var u = s.first();
          ((n = o("AdsPlacementAssetUtils").getAssetLabelForPlacement(
            l,
            u.platform,
            u.position,
          )),
            i.forEach(function (e, t) {
              n === t && e.video !== void 0 && (r = e.video);
            }));
        } else
          i.forEach(function (e) {
            a.includes(t) && e.video !== void 0 && (r = e.video);
          });
      }
      return r;
    }
    function H(e, t, n) {
      return R(t, e, n) && !!$(e);
    }
    ((l.isPACDisabledForBrandInlineCreationFlow = k),
      (l.isEligibleForPlacementAssetCustomizationPhase2 = I),
      (l.isEligibleForPlacementAssetCustomizationPhase1 = T),
      (l.isCampaignEligibleForPlacementAssetCustomizationPhase2 = D),
      (l.baseEligibilityOnlyChecks = x),
      (l.hasPlatformCustomizations = $),
      (l.isDCOCampaignSelected = P),
      (l.isEligibleObjectiveForPlacementAssetCustomizationPhase2 = N),
      (l.isEligiblePromotedObjectForPlacementAssetCustomizationPhase2 = M),
      (l.isEligiblePlacementForPlacementAssetCustomizationPhase2 = w),
      (l.isEligiblePlacementForCarouselPlacementAssetCustomization = A),
      (l.isEligiblePlacementForIXPlacementAssetCustomization = F),
      (l.isEligiblePlacementForArPlacementAssetCustomization = O),
      (l.isEligiblePlacementSpecForPlacementAssetCustomizationPhase2 = B),
      (l.getSupportedPlacementGroups = W),
      (l.getAssetCustomizationPlacementGroupsToAdd = q),
      (l.getAssetCustomizationPlacementGroupsToRemove = U),
      (l.getVideoWithSpecificPlacement = V),
      (l.shouldConvertPhase1ToPhase2 = H));
  },
  98,
);
