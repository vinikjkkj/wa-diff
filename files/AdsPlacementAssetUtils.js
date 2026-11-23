__d(
  "AdsPlacementAssetUtils",
  [
    "AdsApplicationUtils",
    "AdsAssetFeedConstant",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedUtils",
    "AdsHeadlineAssetChangeSet",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAssetCustomizationTypes",
    "AdsPlacementAssetEligibilityUtils",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsPlacementsFacebookBizDiscoFeedPositionPlugin",
    "AdsPlacementsFacebookFbReelsPositionPlugin",
    "AdsPlacementsInstagramExploreHomePositionPlugin",
    "AdsPlacementsInstagramProfileFeedPositionPlugin",
    "AdsPlacementsInstagramSearchPositionPlugin",
    "AdsPlatformTypes",
    "AdsTextAssetChangeSet",
    "AdsUEditorAdgroupAddCustomizationBodyAtIndexAction",
    "AdsUEditorAdgroupAddCustomizationDisplayUrlAction",
    "AdsUEditorAdgroupAddCustomizationHeadlineAtIndexAction",
    "AdsUEditorAdgroupAddCustomizationWebsiteUrlAction",
    "AdsUEditorAdgroupAddOmnichannelCustomizationIosAndAndroidUrlAction",
    "AdsUEditorAdgroupBodyRemoveCustomizationAction",
    "AdsUEditorAdgroupEditCustomizationBodyAtIndexAction",
    "AdsUEditorAdgroupEditCustomizationHeadlineAtIndexAction",
    "AdsUEditorAdgroupHeadlineRemoveCustomizationAction",
    "AdsUEditorAdgroupRemoveCustomizationBodyAtIndexAction",
    "AdsUEditorAdgroupRemoveCustomizationHeadlineAtIndexAction",
    "FBLogger",
    "adsContainsAssetCustomizationPlacement",
    "adsPlacementAPISpecReaderIsActivePublisherPlatform",
    "adsPlacementAssetMutationIsAssetValueAvailableInAssetFeed",
    "adsPreviewGetPositionFromFormat",
    "getByPath",
    "guid",
    "immutable",
    "isTruthy",
    "maxBy",
    "observeRuntimeType",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = "127128577862845",
      c = [
        (e = r("AdsPlacementAssetCustomizationTypes"))
          .AdsAssetCustomizationGroups.FACEBOOK_RHC,
        e.AdsAssetCustomizationGroups.FACEBOOK_GROUPS_FEED,
        e.AdsAssetCustomizationGroups.INSTAGRAM_SHOP,
        e.AdsAssetCustomizationGroups.INSTAGRAM_REELS_OVERLAY,
      ],
      d = [
        e.AdsAssetCustomizationGroups.AUDIENCE_NETWORK_INSTREAM_VIDEO,
        e.AdsAssetCustomizationGroups.AUDIENCE_NETWORK_REWARDED_VIDEO,
      ];
    function m() {
      return d;
    }
    function p() {
      return c;
    }
    function _(e) {
      var t = e.hasFacebookPlacement
          ? r("AdsPlacementAssetCustomizationTypes").AdsPlacementAssetGroups
              .FACEBOOK
          : r("AdsPlacementAssetCustomizationTypes").AdsPlacementAssetGroups
              .INSTAGRAM,
        n =
          e.hasFacebookPlacement && e.hasInstagramStreamPlacement
            ? [
                r("AdsPlacementAssetCustomizationTypes").AdsPlacementAssetGroups
                  .INSTAGRAM,
              ]
            : [];
      return { basePlacementGroup: t, customizationPlacementGroups: n };
    }
    function f(e) {
      var t = x(e);
      return _({
        hasFacebookPlacement: t.some(function (e) {
          return r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
            e,
            "facebook",
          );
        }),
        hasInstagramStreamPlacement: t.some(function (e) {
          return o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(
            e,
            "stream",
          );
        }),
      });
    }
    function g(e, t) {
      return e ===
        r("AdsPlacementAssetCustomizationTypes").AdsPlacementAssetGroups
          .INSTAGRAM && t
        ? r("AdsPlatformTypes").INSTAGRAM
        : r("AdsPlatformTypes").DEFAULT_PLATFORM;
    }
    function h(e, t, n) {
      var r =
          !!t &&
          !!e &&
          o(
            "AdsPlacementAssetEligibilityUtils",
          ).isEligibleForPlacementAssetCustomizationPhase2(t, e, n[0]),
        a = !!e && o("AdsAssetFeedUtils").hasLanguageCustomizationFromRecord(e),
        i = !!e && o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e);
      return r && (i || a);
    }
    function y() {
      return "placement_asset_" + r("guid")();
    }
    function C(e) {
      var t = e.findKey(function (e) {
        return e.isEmpty();
      });
      if (t != null) return t;
      var n = r("maxBy")(e, function (e) {
        var t = e[0],
          n = e[1];
        return n.size;
      });
      return n != null ? n[0] : null;
    }
    function b(e) {
      var t = e.assetsPlacements;
      if (t != null && !t.isEmpty()) {
        var n = C(t);
        if (r("isTruthy")(n)) return n;
      }
      var o = e.labels;
      if (o && !o.isEmpty()) return o.first();
      if (e.basePlacementGroup == null)
        throw r("FBLogger")("am_feature_pac").mustfixThrow(
          "base placement group cannot be null",
        );
      return String(e.basePlacementGroup);
    }
    function v(e) {
      if (e.hasDCO === !0) return [];
      var t = e.labels;
      if (t && !t.isEmpty()) {
        var n = b(e);
        return t
          .filter(function (e) {
            return e !== n;
          })
          .toArray();
      }
      return e.customizationPlacementGroups.map(String);
    }
    var S = (s = r("immutable")).OrderedMap([
      [
        e.AdsAssetCustomizationGroups.FACEBOOK_FEED,
        s.List([{ platform: "facebook", position: "feed" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.FACEBOOK_INSTREAM,
        s.List([{ platform: "facebook", position: "instream_video" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.FACEBOOK_REELS_OVERLAY,
        s.List([{ platform: "facebook", position: "facebook_reels_overlay" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.FACEBOOK_MARKETPLACE,
        s.List([{ platform: "facebook", position: "marketplace" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.FACEBOOK_PROFILE_FEED,
        s.List([{ platform: "facebook", position: "profile_feed" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.FACEBOOK_PROFILE_REELS,
        s.List([{ platform: "facebook", position: "profile_reels" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.FACEBOOK_NOTIFICATION,
        s.List([{ platform: "facebook", position: "notification" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.FACEBOOK_RHC,
        s.List([{ platform: "facebook", position: "right_hand_column" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.FACEBOOK_SEARCH,
        s.List([{ platform: "facebook", position: "search" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.FACEBOOK_STORY,
        s.List([{ platform: "facebook", position: "story" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.FACEBOOK_GROUPS,
        s.List([{ platform: "facebook", position: "facebook_groups" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.FACEBOOK_GROUPS_FEED,
        s.List([{ platform: "facebook", position: "groups_feed" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.VIDEO_FEEDS,
        s.List([{ platform: "facebook", position: "video_feeds" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.SUGGESTED_VIDEO,
        s.List([{ platform: "facebook", position: "suggested_video" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.INSTAGRAM_STREAM,
        s.List([{ platform: "instagram", position: "stream" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.INSTAGRAM_STORY,
        s.List([{ platform: "instagram", position: "story" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.INSTAGRAM_REELS,
        s.List([{ platform: "instagram", position: "reels" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.INSTAGRAM_EXPLORE,
        s.List([{ platform: "instagram", position: "explore" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.INSTAGRAM_EXPLORE_HOME,
        s.List([{ platform: "instagram", position: "explore_home" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.INSTAGRAM_SHOP,
        s.List([{ platform: "instagram", position: "shop" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.INSTAGRAM_REELS_OVERLAY,
        s.List([{ platform: "instagram", position: "reels_overlay" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.INSTAGRAM_PROFILE_FEED,
        s.List([{ platform: "instagram", position: "profile_feed" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.INSTAGRAM_PROFILE_REELS,
        s.List([{ platform: "instagram", position: "profile_reels" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.INSTAGRAM_SEARCH,
        s.List([{ platform: "instagram", position: "ig_search" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.AUDIENCE_NETWORK_CLASSIC,
        s.List([{ platform: "audience_network", position: "classic" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.AUDIENCE_NETWORK_INSTREAM_VIDEO,
        s.List([{ platform: "audience_network", position: "instream_video" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.AUDIENCE_NETWORK_REWARDED_VIDEO,
        s.List([{ platform: "audience_network", position: "rewarded_video" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.MESSENGER_STORY,
        s.List([{ platform: "messenger", position: "story" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.WHATSAPP_STATUS,
        s.List([{ platform: "whatsapp", position: "status" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.FACEBOOK_REELS,
        s.List([{ platform: "facebook", position: "facebook_reels" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.FACEBOOK_BIZ_DISCO_FEED,
        s.List([{ platform: "facebook", position: "biz_disco_feed" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.WHATSAPP_MARKETING_MESSAGE,
        s.List([{ platform: "whatsapp", position: "marketing_messages" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.MESSENGER_MARKETING_MESSAGE,
        s.List([{ platform: "messenger", position: "marketing_messages" }]),
      ],
      [
        e.AdsAssetCustomizationGroups.THREADS_STREAM,
        s.List([{ platform: "threads", position: "threads_stream" }]),
      ],
    ]);
    function R(e, t) {
      var n;
      return (n = t != null ? t : e) != null ? n : void 0;
    }
    function L(e) {
      var t = Object.keys(S.toJS()),
        n = t.indexOf(e);
      return n !== -1 ? n : 1 / 0;
    }
    var E = s.Set([
        e.AdsAssetCustomizationGroups.FACEBOOK_FEED,
        e.AdsAssetCustomizationGroups.INSTAGRAM_STREAM,
        e.AdsAssetCustomizationGroups.INSTAGRAM_STORY,
        e.AdsAssetCustomizationGroups.INSTAGRAM_REELS,
      ]),
      k = s.OrderedMap([
        [
          "facebook",
          [
            {
              group: r("AdsPlacementsFacebookBizDiscoFeedPositionPlugin").key,
              position: "biz_disco_feed",
              capability: "ENABLE_PAC_FOR_BIZ_DISCO_ADS",
            },
            {
              group: r("AdsPlacementsFacebookFbReelsPositionPlugin").key,
              position: "facebook_reels",
              capability: "ENABLE_FB_REELS_CREATION_PAC_ADS",
            },
          ],
        ],
        [
          "instagram",
          [
            {
              group: r("AdsPlacementsInstagramExploreHomePositionPlugin").key,
              position: "explore_home",
              capability: "CAN_USE_IG_EXPLORE_GRID_HOME_PLACEMENT",
            },
            {
              group: r("AdsPlacementsInstagramSearchPositionPlugin").key,
              position: "ig_search",
              capability: "CAN_USE_IG_SEARCH_PLACEMENT",
            },
            {
              group: r("AdsPlacementsInstagramProfileFeedPositionPlugin").key,
              position: "profile_feed",
              capability: "CAN_USE_IG_PROFILE_FEED_POSITION",
            },
          ],
        ],
        ["whatsapp", []],
      ]);
    function I(e) {
      return S.get(e) || r("immutable").List([]);
    }
    function T(e) {
      var t = e.reduce(function (e, t) {
        return e.concat(I(t));
      }, r("immutable").Set());
      return t.toList();
    }
    function D(e) {
      return e != null &&
        Object.prototype.hasOwnProperty.call(
          r("AdsPlacementAssetCustomizationTypes").AdsAssetCustomizationGroups,
          e,
        )
        ? r("AdsPlacementAssetCustomizationTypes").AdsAssetCustomizationGroups[
            e
          ]
        : null;
    }
    function x(e) {
      return e.map(function (e) {
        var t = e.campaign.targeting;
        return o(
          "AdsPlacementAPISpecReaderUtils",
        ).convertTargetingSpecToPlacementSpec(t);
      });
    }
    function $(e, t) {
      var n = o(
          "AdsPlacementAssetEligibilityUtils",
        ).getAssetCustomizationPlacementGroupsToAdd(e),
        r = o(
          "AdsPlacementAssetEligibilityUtils",
        ).isEligiblePlacementSpecForPlacementAssetCustomizationPhase2(
          e,
          e.spec,
        ),
        a = F(e),
        i = n.length;
      return {
        eligibleForAssetCustomization: r,
        numPlacementsSelected: a,
        totalCustomizablePlacements: i,
        selectCustomizablePlacements: t,
      };
    }
    function P(e) {
      if (e.length === 0) return null;
      var t = x(e),
        n = r("immutable").List(
          o(
            "AdsPlacementAssetTargetingRuleUtils",
          ).convertCampaignTargetingObjectToPlacementList(t[0]),
        ),
        a = S.map(function (e) {
          return e.filter(function (e) {
            return r("adsContainsAssetCustomizationPlacement")(n, e);
          });
        }).filter(function (e) {
          return e.size !== 0;
        });
      return { assetGroups: a.keySeq().toArray() };
    }
    function N(e) {
      return e instanceof r("immutable").Map
        ? e.getIn([o("AdsAssetFeedConstant").ADLABELS, 0, "name"])
        : null;
    }
    function M(e) {
      return N(e);
    }
    function w(e) {
      return r("immutable").List(
        S.filter(function (t) {
          return t.some(function (t) {
            return r("adsContainsAssetCustomizationPlacement")(e, t);
          });
        }).keySeq(),
      );
    }
    function A(e) {
      var t = e
        .map(function (e) {
          return r("adsPreviewGetPositionFromFormat")(e);
        })
        .filter(Boolean)
        .map(function (e) {
          return { platform: e.platform, position: String(e.position) };
        });
      return w(t);
    }
    function F(e) {
      return [
        e.spec.facebook_positions,
        e.spec.instagram_positions,
        e.spec.audience_network_positions,
        e.spec.messenger_positions,
        e.spec.whatsapp_positions,
        e.spec.threads_positions,
      ].reduce(function (e, t) {
        return Array.isArray(t) ? e + t.length : e;
      }, 0);
    }
    function O(e, t) {
      if (t === "post") {
        var n;
        return o("AdsAssetFeedFieldUtils").getAssetLabelListAtIndex(
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.posts,
          0,
        );
      } else if (t === "carousel") {
        var r;
        return o("AdsAssetFeedFieldUtils").getAssetLabelListAtIndex(
          (r = e.creative) == null || (r = r.asset_feed_spec) == null
            ? void 0
            : r.carousels,
          0,
        );
      } else if (t === "image") {
        var a;
        return o("AdsAssetFeedFieldUtils").getAssetLabelListAtIndex(
          (a = e.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a.images,
          0,
        );
      } else {
        var i;
        return o("AdsAssetFeedFieldUtils").getAssetLabelListAtIndex(
          (i = e.creative) == null || (i = i.asset_feed_spec) == null
            ? void 0
            : i.videos,
          0,
        );
      }
    }
    function B(e) {
      return (
        e.size === 1 &&
        r("adsContainsAssetCustomizationPlacement")(e, {
          platform: "instagram",
          position: "story",
        })
      );
    }
    function W(e, t) {
      var n = t == null ? void 0 : t.get(e);
      return n != null ? n.first() : null;
    }
    function q(e, t) {
      var n = t.findKey(function (t) {
          return t.includes(e);
        }),
        r = t.get(n);
      return r && r.size === 1 ? n : void 0;
    }
    function U(e, t, n) {
      var r = e.findKey(function (e) {
        return (
          e.find(function (e) {
            return e.platform === t && e.position === n;
          }) != null
        );
      });
      return r != null ? r : C(e);
    }
    function V(e, t, n) {
      if (e == null || t == null || n === "STORIFY_OVERRIDE_BUTTON") return !1;
      var r = t.findKey(function (t) {
          return t.includes(e);
        }),
        o = t.get(r);
      if (o == null) return !1;
      var a = C(t);
      return r !== a;
    }
    function H(e, t) {
      var n;
      if (e == null || t == null) return !1;
      var r = t.findKey(function (t) {
        return t.includes(e);
      });
      return ((n = t.get(r)) == null ? void 0 : n.size) === 1;
    }
    function G(e) {
      var t = D(e);
      return t && I(t);
    }
    function z(e, t) {
      var n = D(e);
      return t && !!n && t.includes(n);
    }
    function j(e, t) {
      return t
        ? e
        : e.filter(function (e) {
            return !m().includes(e);
          });
    }
    function K(e, t, n, o, a, l) {
      switch (o) {
        case r("AdsTextAssetChangeSet").ADD_ASSET:
          r("AdsUEditorAdgroupAddCustomizationBodyAtIndexAction").dispatch(
            {
              adgroupIDs: t,
              hostID: e,
              placements: n,
              assetValue: l,
              isDefaultPlacementAsset: !1,
            },
            {
              line: "1085",
              module: "AdsPlacementAssetUtils.js",
              moduleID: i.id,
            },
          );
          break;
        case r("AdsTextAssetChangeSet").CHANGE_ASSET:
          r("AdsUEditorAdgroupEditCustomizationBodyAtIndexAction").dispatch(
            {
              adgroupIDs: t,
              hostID: e,
              placements: n,
              assetValue: l,
              assetIndex: a,
              isDefaultPlacementAsset: !1,
            },
            {
              line: "1094",
              module: "AdsPlacementAssetUtils.js",
              moduleID: i.id,
            },
          );
          break;
        case r("AdsTextAssetChangeSet").REMOVE_ASSET:
          r("AdsUEditorAdgroupRemoveCustomizationBodyAtIndexAction").dispatch(
            { adgroupIDs: t, hostID: e, placements: n, assetIndex: a },
            {
              line: "1104",
              module: "AdsPlacementAssetUtils.js",
              moduleID: i.id,
            },
          );
          break;
        case r("AdsTextAssetChangeSet").REMOVE_CUSTOMIZATION:
          r("AdsUEditorAdgroupBodyRemoveCustomizationAction").dispatch(
            { hostID: e, adgroupIDs: t, placements: n },
            {
              line: "1112",
              module: "AdsPlacementAssetUtils.js",
              moduleID: i.id,
            },
          );
          break;
      }
    }
    function Q(e, t, n, o, a, l) {
      switch (o) {
        case r("AdsHeadlineAssetChangeSet").ADD_ASSET:
          r("AdsUEditorAdgroupAddCustomizationHeadlineAtIndexAction").dispatch(
            {
              adgroupIDs: t,
              hostID: e,
              placements: n,
              assetValue: l,
              isDefaultPlacementAsset: !1,
            },
            {
              line: "1131",
              module: "AdsPlacementAssetUtils.js",
              moduleID: i.id,
            },
          );
          break;
        case r("AdsHeadlineAssetChangeSet").CHANGE_ASSET:
          r("AdsUEditorAdgroupEditCustomizationHeadlineAtIndexAction").dispatch(
            {
              adgroupIDs: t,
              hostID: e,
              placements: n,
              assetValue: l,
              assetIndex: a,
              isDefaultPlacementAsset: !1,
            },
            {
              line: "1140",
              module: "AdsPlacementAssetUtils.js",
              moduleID: i.id,
            },
          );
          break;
        case r("AdsHeadlineAssetChangeSet").REMOVE_ASSET:
          r(
            "AdsUEditorAdgroupRemoveCustomizationHeadlineAtIndexAction",
          ).dispatch(
            { adgroupIDs: t, hostID: e, placements: n, assetIndex: a },
            {
              line: "1150",
              module: "AdsPlacementAssetUtils.js",
              moduleID: i.id,
            },
          );
          break;
        case r("AdsHeadlineAssetChangeSet").REMOVE_CUSTOMIZATION:
          r("AdsUEditorAdgroupHeadlineRemoveCustomizationAction").dispatch(
            { hostID: e, adgroupIDs: t, placements: n },
            {
              line: "1158",
              module: "AdsPlacementAssetUtils.js",
              moduleID: i.id,
            },
          );
          break;
      }
    }
    function X(e, t, n, o, a) {
      r(
        "AdsUEditorAdgroupAddOmnichannelCustomizationIosAndAndroidUrlAction",
      ).dispatch(
        {
          adgroupIDs: t,
          androidDeepLink: a,
          iosDeepLink: o,
          hostID: e,
          isDefaultPlacementAsset: !1,
          placements: n,
        },
        { line: "1174", module: "AdsPlacementAssetUtils.js", moduleID: i.id },
      );
    }
    function Y(e, t, n, o, a) {
      (r("observeRuntimeType")(
        t,
        "AdsPlacementAssetUtils.editWebsiteUrlCustomization.adgroupIDs",
      ),
        r("AdsUEditorAdgroupAddCustomizationWebsiteUrlAction").dispatch(
          {
            adgroupIDs: t,
            hostID: e,
            placements: n,
            websiteUrl: o,
            isDefaultPlacementAsset: !1,
            isWebandAppPACUsage: a,
          },
          { line: "1195", module: "AdsPlacementAssetUtils.js", moduleID: i.id },
        ));
    }
    function J(e, t, n, o, a) {
      r("AdsUEditorAdgroupAddCustomizationDisplayUrlAction").dispatch(
        {
          adgroupIDs: t,
          hostID: e,
          placements: n,
          displayUrl: o,
          isDefaultPlacementAsset: !1,
          isWebandAppPACUsage: a,
        },
        { line: "1212", module: "AdsPlacementAssetUtils.js", moduleID: i.id },
      );
    }
    function Z(e, t) {
      return t
        ? e
        : e.filter(function (e) {
            return !c.includes(e);
          });
    }
    function ee(e, t, n) {
      var r = T(e),
        a = r.filter(function (e) {
          return o(
            "AdsPlacementAssetEligibilityUtils",
          ).isEligiblePlacementForCarouselPlacementAssetCustomization(e, t, n);
        });
      return w(a).toArray();
    }
    function te(e) {
      var t = T(e),
        n = t.filter(function (e) {
          return o(
            "AdsPlacementAssetEligibilityUtils",
          ).isEligiblePlacementForIXPlacementAssetCustomization(e);
        });
      return w(n).toArray();
    }
    function ne(e, t) {
      if (e == null || t == null) return null;
      var n = r("immutable").List();
      (t.includes("SINGLE_IMAGE") && (n = n.concat(T(m()))),
        t.includes("SINGLE_VIDEO") && (n = n.concat(T(c))));
      var o = function (t) {
        var e = t.platform,
          r = t.position;
        return (
          n.findIndex(function (t) {
            return t.platform === e && t.position === r;
          }) === -1
        );
      };
      return e.filter(o);
    }
    function re(e) {
      var t;
      return (
        !!(
          e != null &&
          (t = e.creative) != null &&
          t.platform_customizations
        ) || o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e)
      );
    }
    function oe(e, t, n) {
      if (e != null && t != null) {
        var a = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).getDefaultRuleOrRuleWithMostPlacements(e);
        if (
          a == null ||
          !o("AdsPlacementAssetTargetingRuleUtils").hasLabelFieldInRule(a, n)
        )
          return r("immutable").List();
        var i = o(
            "AdsPlacementAssetTargetingRuleUtils",
          ).getLabelNameFromTargetingRule(a, n),
          l = o("AdsAssetFeedFieldUtils").getAssetEntriesForLabel(
            t,
            o("AdsAssetFeedConstant").ADLABELS,
            i,
          );
        if (l == null) return r("immutable").List();
        var s = l
          .map(function (e) {
            return e.index;
          })
          .toSet();
        return e.reduce(function (e, r) {
          if (r.get(n) == null) return e;
          var a = o(
              "AdsPlacementAssetTargetingRuleUtils",
            ).getLabelNameFromTargetingRule(r, n),
            i = o("AdsAssetFeedFieldUtils").getAssetEntriesForLabel(
              t,
              o("AdsAssetFeedConstant").ADLABELS,
              a,
            );
          if (i != null) {
            var l = i
              .map(function (e) {
                return e.index;
              })
              .toSet();
            if (!s.equals(l)) return e.push(a);
          }
          return e;
        }, r("immutable").List());
      }
      return r("immutable").List();
    }
    function ae(e) {
      return !(e.format === "template" || e.format === "post");
    }
    function ie(e, t, n, a) {
      var i = r("adsPlacementAssetMutationIsAssetValueAvailableInAssetFeed")(
        e,
        t,
        n,
      );
      if (i) {
        var l,
          s = o(
            "AdsPlacementAssetTargetingRuleUtils",
          ).getDefaultRuleOrRuleWithMostPlacements(
            (l = e.creative) == null || (l = l.asset_feed_spec) == null
              ? void 0
              : l.asset_customization_rules,
          );
        if (s != null)
          return o("AdsPlacementAssetTargetingRuleUtils").hasLabelFieldInRule(
            s,
            a,
          );
      }
      return !1;
    }
    function le(e, t, n, a) {
      if (e != null && t != null) {
        var i = o(
          "AdsPlacementAssetTargetingRuleUtils",
        ).getDefaultRuleOrRuleWithMostPlacements(e);
        if (
          i == null ||
          !o("AdsPlacementAssetTargetingRuleUtils").hasLabelFieldInRule(i, n)
        )
          return r("immutable").List();
        var l = o(
            "AdsPlacementAssetTargetingRuleUtils",
          ).getLabelNameFromTargetingRule(i, n),
          s = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(t, l).index;
        return s == null
          ? r("immutable").List()
          : e.reduce(function (e, a) {
              if (a.get(n) == null) return e;
              var i = o(
                  "AdsPlacementAssetTargetingRuleUtils",
                ).getLabelNameFromTargetingRule(a, n),
                l = o("AdsAssetFeedFieldUtils").getAssetEntryForLabel(
                  t,
                  i,
                ).index,
                s = r("immutable").fromJS(t),
                u = s.get(l);
              return l != null &&
                o("AdsAssetFeedFieldUtils").getAssetInteractivePollSpec(u) !=
                  null
                ? e.push(i)
                : e;
            }, r("immutable").List());
      }
      return r("immutable").List();
    }
    function se(e) {
      switch (e) {
        case "video":
          return "VIDEO";
        case "image":
          return "IMAGE";
        case "carousel":
          return "CAROUSEL";
        default:
          r("FBLogger")("am_feature_pac").mustfix(
            "Asset format was not video / image / carousel. Need to handle this case",
          );
      }
    }
    function ue(e) {
      var t = e.assets.get(b(e));
      return !!r("getByPath")(t, ["video", "spherical"]);
    }
    function ce(e) {
      var t = e.assets.get(b(e)),
        n = r("getByPath")(t, ["video", "id"]);
      return n || null;
    }
    function de(e, t) {
      var n = t == null ? void 0 : t.customizationData;
      if (e != null && n != null && n.size > 0) {
        var r,
          o = I(e).first(),
          a = n.find(function (e) {
            return e.placements.find(function (e) {
              return (
                e.platform === (o == null ? void 0 : o.platform) &&
                e.position === (o == null ? void 0 : o.position)
              );
            });
          }),
          i = a == null || (r = a.assets) == null ? void 0 : r.media;
        return i;
      }
    }
    function me(e) {
      var t = w(e).toSet();
      return !E.intersect(t).isEmpty();
    }
    function pe(e) {
      return e.every(function (e) {
        return me(r("immutable").List([e]));
      });
    }
    function _e(e) {
      var t = w(e),
        n = E.toSet().intersect(t.toSet()).toList();
      return T(n);
    }
    function fe(e) {
      return (
        me(e) &&
        !o("AdsApplicationUtils").isCreativeStudio() &&
        !o("AdsApplicationUtils").isAdBuilder()
      );
    }
    ((l.CUSTOMIZE_HELP_CMS_ID = u),
      (l.ASSET_GROUPS_THAT_SUPPORT_ONLY_IMAGE = c),
      (l.getVideoOnlyAssetGroups = m),
      (l.getImageOnlyAssetGroups = p),
      (l.getPlacementAssetSelectorConfigForAdObjectList = f),
      (l.getPlatformFromPlacementGroup = g),
      (l.getVideoPlacementAssetSelectorReadFromAssetFeedEligibility = h),
      (l.makeUniqueLabelNameForPlacementAsset = y),
      (l.getDefaultOrMaxAssetLabel = C),
      (l.getBaseAssetLabel = b),
      (l.getCustomizationAssetLabels = v),
      (l.getThreadsStreamVideoMaxLengthToShow = R),
      (l.getAssetGroupPriority = L),
      (l.groupToCapabilities = k),
      (l.getPlacementsFromAssetGroup = I),
      (l.getPlacementsFromAssetGroups = T),
      (l.coerceAssetCustomizationGroup = D),
      (l.getCustomizablePlacementsProps = $),
      (l.getCustomizationGroupInfoFromAdObjectList = P),
      (l.getFirstAdLabel = M),
      (l.getAssetGroupsFromPlacements = w),
      (l.getAssetGroupsFromFormats = A),
      (l.getFirstAssetLabels = O),
      (l.isInstagramStoryPlacementOnly = B),
      (l.getFirstCustomizedAssetGroupFromLabel = W),
      (l.getAssetLabelIfSingleValidAssetGroup = q),
      (l.getAssetLabelForPlacement = U),
      (l.isAssetGroupCustomized = V),
      (l.assetGroupHasOwnAssetLabel = H),
      (l.getPlacementListFromAdLabel = G),
      (l.isNewVideoAdlabel = z),
      (l.getFilteredImageSupportedAssetGroups = j),
      (l.editBodyCustomization = K),
      (l.editHeadlineCustomization = Q),
      (l.editOmnichannelDestinationCustomization = X),
      (l.editWebsiteUrlCustomization = Y),
      (l.editDisplayUrlCustomization = J),
      (l.getFilteredVideoSupportedAssetGroups = Z),
      (l.getFilteredCarouselSupportedAssetGroups = ee),
      (l.getFilteredIXSupportedAssetGroups = te),
      (l.getFilteredSupportedPlacements = ne),
      (l.hasPACPhase1or2 = re),
      (l.getCustomizedAssetLabelList = oe),
      (l.isTextShownOnIGStory = ae),
      (l.hasCustomizationsInSpec = ie),
      (l.getInteractivePollSpecAssetLabelList = le),
      (l.getMediaFormat = se),
      (l.isSphericalVideo = ue),
      (l.getBaseAssetVideoID = ce),
      (l.getMediaByAssetGroup = de),
      (l.isAllPlacementEligibleForPACTextDOF = pe),
      (l.getSupportedPlacementForPACTextDOF = _e),
      (l.isEligibleForPACTextDOF = fe));
  },
  98,
);
