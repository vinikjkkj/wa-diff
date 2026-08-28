__d(
  "AdsPlacementsInstagramPlatformPlugin",
  [
    "ix",
    "AdsAPITargetFields",
    "AdsAccountUtils",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsMutators",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementInstagramPositionPluginUtils",
    "AdsPlacementPlatformLabelConstant",
    "AdsPlacementsInstagramExploreHomePositionPlugin",
    "AdsPlacementsInstagramExplorePositionPlugin",
    "AdsPlacementsInstagramFeedPositionPlugin",
    "AdsPlacementsInstagramProfileFeedPositionPlugin",
    "AdsPlacementsInstagramProfileReelsPositionPlugin",
    "AdsPlacementsInstagramReelsPositionPlugin",
    "AdsPlacementsInstagramSearchPositionPlugin",
    "AdsPlacementsInstagramShopTabPositionPlugin",
    "AdsPlacementsInstagramStoryPositionPlugin",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "gkx",
    "immutable",
    "meta-brand-instagram-filled-20",
    "meta-brand-instagram-outline-16",
    "meta-brand-instagram-outline-20",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return r("gkx")("19623") ? s("947339") : s("901246");
    }
    var u = {
        type: "placements/platform",
        key: "instagram",
        apiPublisherPlatform: "instagram",
        apiPositionsTargetField: function () {
          return r("AdsAPITargetFields").INSTAGRAM_POSITIONS;
        },
        name: r("AdsPlacementPlatformLabelConstant")[
          r("AdsAPITargetFields").INSTAGRAM_POSITIONS
        ],
        glyph: o("meta-brand-instagram-outline-20").metaBrandInstagramOutline20,
        glyphActive: o("meta-brand-instagram-filled-20")
          .metaBrandInstagramFilled20,
        fbicon: o("meta-brand-instagram-outline-16")
          .metaBrandInstagramOutline16,
        placementPreviewImage: e(),
        isEnabled: function (t) {
          return !0;
        },
        positions: r("immutable").OrderedSet([
          r("AdsPlacementsInstagramFeedPositionPlugin"),
          r("AdsPlacementsInstagramStoryPositionPlugin"),
          r("AdsPlacementsInstagramExplorePositionPlugin"),
          r("AdsPlacementsInstagramExploreHomePositionPlugin"),
          r("AdsPlacementsInstagramReelsPositionPlugin"),
          r("AdsPlacementsInstagramShopTabPositionPlugin"),
          r("AdsPlacementsInstagramProfileFeedPositionPlugin"),
          r("AdsPlacementsInstagramSearchPositionPlugin"),
          r("AdsPlacementsInstagramProfileReelsPositionPlugin"),
        ]),
        adsetReducer: function (t, n) {
          var e = n.action;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removePlatforms.includes("instagram")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o(
                      "AdsPlacementAPISpecWriterUtils",
                    ).removePublisherPlatform(
                      t,
                      "instagram",
                      e.eligibilityInformation,
                    );
                  })
                : t;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(t, e.ids, function (t) {
                var n = r("AdsAccountUtils").hasCapabilityFromList(
                    e.eligibilityInformation.capabilities,
                    "CAN_USE_IG_EXPLORE_GRID_HOME_PLACEMENT",
                  ),
                  a = r("gkx")("21833"),
                  i = r("gkx")("21837");
                if (e.eligibilityInformation.isReelsTrendingAds === !0)
                  return o("AdsPlacementAPISpecWriterUtils").addGroup(
                    t,
                    "instagram/reels",
                    e.eligibilityInformation,
                    r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                    "instagram",
                  );
                if (
                  o(
                    "AdsPlacementInstagramPositionPluginUtils",
                  ).isEveryEligibleNonExclusivePositionActive(
                    t,
                    e.eligibilityInformation,
                  )
                )
                  return o(
                    "AdsPlacementAPISpecWriterUtils",
                  ).removePublisherPlatform(
                    t,
                    "instagram",
                    e.eligibilityInformation,
                  );
                var l = o("AdsPlacementAPISpecWriterUtils").addGroup(
                  t,
                  "instagram/stream",
                  e.eligibilityInformation,
                  r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                  "instagram",
                );
                return (
                  (l = o("AdsPlacementAPISpecWriterUtils").addGroup(
                    l,
                    "instagram/shop_tab",
                    e.eligibilityInformation,
                    r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                    "instagram",
                  )),
                  r("AdsAccountUtils").hasCapabilityFromList(
                    e.eligibilityInformation.capabilities,
                    "CAN_USE_IG_SEARCH_PLACEMENT",
                  ) &&
                    (l = o("AdsPlacementAPISpecWriterUtils").addGroup(
                      l,
                      "instagram/search",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                      "instagram",
                    )),
                  a &&
                    (l = o("AdsPlacementAPISpecWriterUtils").addGroup(
                      l,
                      "instagram/profile_feed",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                      "instagram",
                    )),
                  e.eligibilityInformation &&
                    !r(
                      "AdsPlacementsInstagramStoryPositionPlugin",
                    ).getIneligibilityReason(e.eligibilityInformation) &&
                    (l = o("AdsPlacementAPISpecWriterUtils").addGroup(
                      l,
                      "instagram/story",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                      "instagram",
                    )),
                  r("AdsAccountUtils").hasCapabilityFromList(
                    e.eligibilityInformation.capabilities,
                    "CAN_CREATE_INSTAGRAM_EXPLORE_ADS",
                  ) &&
                    (l = o("AdsPlacementAPISpecWriterUtils").addGroup(
                      l,
                      "instagram/explore",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                      "instagram",
                    )),
                  (l = o("AdsPlacementAPISpecWriterUtils").addGroup(
                    l,
                    "instagram/reels",
                    e.eligibilityInformation,
                    r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                    "instagram",
                  )),
                  n &&
                    (l = o("AdsPlacementAPISpecWriterUtils").addGroup(
                      l,
                      "instagram/explore_home",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                      "instagram",
                    )),
                  i &&
                    (l = o("AdsPlacementAPISpecWriterUtils").addGroup(
                      l,
                      "instagram/profile_reels",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").INSTAGRAM_POSITIONS,
                      "instagram",
                    )),
                  (l = o(
                    "AdsPlacementAPISpecWriterUtils",
                  ).removeMessengerThreadPlacement(
                    l,
                    e.eligibilityInformation,
                  )),
                  l
                );
              });
            case o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType:
              return o("AdsMutators").mutateEach(
                t,
                e.campaignIDs,
                function (t) {
                  return o(
                    "AdsPlacementAPISpecWriterUtils",
                  ).removePublisherPlatform(
                    t,
                    "instagram",
                    e.eligibilityInformation,
                  );
                },
              );
          }
          return t;
        },
      },
      c = u;
    l.default = c;
  },
  98,
);
