__d(
  "AdsInstagramApplicabilityUtils",
  [
    "AdsInstagramActorIDUtils",
    "AdsPlacementAPISpecReaderUtils",
    "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
    "adsPlacementAPISpecReaderIsActivePublisherPlatform",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(
        e,
        "reels",
      );
    }
    function s(e) {
      return o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(
        e,
        "story",
      );
    }
    function u(e) {
      return o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(
        e,
        "stream",
      );
    }
    function c(e) {
      return o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(
        e,
        "explore",
      );
    }
    function d(e) {
      return o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(
        e,
        "shop",
      );
    }
    function m(e) {
      return !!o("AdsInstagramActorIDUtils").getInstagramActorID(e);
    }
    function p(e) {
      return r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
        o(
          "AdsPlacementAPISpecReaderUtils",
        ).convertCampaignToPlacementSpec_LEGACY(e),
        "instagram",
      );
    }
    function _(e, t) {
      return r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(e, t);
    }
    function f(e) {
      return o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(
        o(
          "adsPlacementAPISpecReaderConvertCampaignRecordToPlacementSpec",
        ).convertCampaignRecordToPlacementSpec(e),
        "stream",
      );
    }
    function g(e) {
      return o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(
        o(
          "AdsPlacementAPISpecReaderUtils",
        ).convertCampaignToPlacementSpec_LEGACY(e),
        "story",
      );
    }
    function h(e) {
      return o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(
        o(
          "AdsPlacementAPISpecReaderUtils",
        ).convertCampaignToPlacementSpec_LEGACY(e),
        "reels",
      );
    }
    function y(e) {
      return o("AdsPlacementAPISpecReaderUtils").isOnlyActivePublisherPlatform(
        o(
          "AdsPlacementAPISpecReaderUtils",
        ).convertCampaignToPlacementSpec_LEGACY(e),
        "instagram",
      );
    }
    function C(e) {
      return o("AdsPlacementAPISpecReaderUtils").isOnlyActivePublisherPlatform(
        e,
        "instagram",
      );
    }
    function b(e) {
      return E(
        o(
          "AdsPlacementAPISpecReaderUtils",
        ).convertCampaignToPlacementSpec_LEGACY(e),
      );
    }
    function v(e) {
      return R(
        o(
          "AdsPlacementAPISpecReaderUtils",
        ).convertCampaignToPlacementSpec_LEGACY(e),
      );
    }
    function S(e) {
      return k(
        o(
          "AdsPlacementAPISpecReaderUtils",
        ).convertCampaignToPlacementSpec_LEGACY(e),
      );
    }
    function R(e) {
      return (
        o("AdsPlacementAPISpecReaderUtils").isOnlyActivePublisherPlatform(
          e,
          "instagram",
        ) &&
        o("AdsPlacementAPISpecReaderUtils").isOnlyActiveInstagramPosition(
          e,
          "reels",
        )
      );
    }
    function L(e) {
      return o("AdsPlacementAPISpecReaderUtils").isActiveInstagramPosition(
        e,
        "reels_overlay",
      );
    }
    function E(e) {
      return (
        o("AdsPlacementAPISpecReaderUtils").isOnlyActivePublisherPlatform(
          e,
          "instagram",
        ) &&
        o("AdsPlacementAPISpecReaderUtils").isOnlyActiveInstagramPosition(
          e,
          "story",
        )
      );
    }
    function k(e) {
      var t = r("immutable").Set(["instagram", "facebook"]);
      return (
        o("AdsPlacementAPISpecReaderUtils").isOnlyActivePublisherPlatformSet(
          e,
          t,
        ) &&
        o("AdsPlacementAPISpecReaderUtils").isOnlyActiveInstagramPosition(
          e,
          "story",
        ) &&
        o("AdsPlacementAPISpecReaderUtils").isOnlyActiveFacebookPosition(
          e,
          "story",
        )
      );
    }
    function I(e) {
      return e.every(E);
    }
    function T(e) {
      return e.every(R);
    }
    function D(e) {
      return (
        o("AdsPlacementAPISpecReaderUtils").isOnlyActivePublisherPlatform(
          e,
          "instagram",
        ) &&
        o("AdsPlacementAPISpecReaderUtils").isOnlyActiveInstagramPosition(
          e,
          "stream",
        )
      );
    }
    function x(e) {
      return !r("adsPlacementAPISpecReaderIsActivePublisherPlatform")(
        e,
        "instagram",
      ) ||
        !e.instagram_positions ||
        !e.instagram_positions.length
        ? 0
        : e.instagram_positions.length;
    }
    var $ = {
        allHaveInstagramStoryPlacementOnly: I,
        allHaveInstagramReelsPlacementOnly: T,
        hasInstagramActor: m,
        hasInstagramReelsPlacementOnly: v,
        hasInstagramPlacement: p,
        hasInstagramPlacementOnly: y,
        hasInstagramStoryAndFBStoryPlacementOnly: S,
        hasInstagramStoryPlacement: g,
        hasInstagramStoryPlacementOnly: b,
        hasInstagramStreamPlacement: f,
        hasInstagramReelsPlacement: h,
        placementSpecGetInstagramPositionsCount: x,
        placementSpecHasExplorePlacement: c,
        placementSpecHasInstagramReelsPlacementOnly: R,
        hasPlacementForPlatform: _,
        placementSpecHasInstagramPlacementOnly: C,
        placementSpecHasInstagramReelsPlacement: e,
        placementSpecHasInstagramReelsOverlayPlacement: L,
        placementSpecHasInstagramStoryAndFBStoryplacementOnly: k,
        placementSpecHasInstagramStoryPlacementOnly: E,
        placementSpecHasInstagramStreamPlacementOnly: D,
        placementSpecHasStoryPlacement: s,
        placementSpecHasStreamPlacement: u,
        placementSpecHasShopPlacement: d,
      },
      P = $;
    l.default = P;
  },
  98,
);
