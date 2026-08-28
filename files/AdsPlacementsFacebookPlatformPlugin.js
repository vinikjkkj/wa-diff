__d(
  "AdsPlacementsFacebookPlatformPlugin",
  [
    "ix",
    "AdsAPITargetFields",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsMutators",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementPlatformLabelConstant",
    "AdsPlacementsFacebookBizDiscoFeedPositionPlugin",
    "AdsPlacementsFacebookFbReelsPositionPlugin",
    "AdsPlacementsFacebookFeedsPositionPlugin",
    "AdsPlacementsFacebookGroupTabPositionPlugin",
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
    "AdsReelsTrendingAdsPlacementUtils",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "gkx",
    "immutable",
    "meta-brand-facebook-filled-20",
    "meta-brand-facebook-outline-16",
    "meta-brand-facebook-outline-20",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = r("immutable").OrderedSet([
      r("AdsPlacementsFacebookFeedsPositionPlugin"),
      r("AdsPlacementsFacebookProfileFeedPositionPlugin"),
      r("AdsPlacementsFacebookInstantArticlePositionPlugin"),
      r("AdsPlacementsFacebookInstreamVideosPositionPlugin"),
      r("AdsPlacementsFacebookRightColumnPositionPlugin"),
      r("AdsPlacementsFacebookVideoFeedsPositionPlugin"),
      r("AdsPlacementsFacebookMarketplacePositionPlugin"),
      r("AdsPlacementsFacebookStoryPositionPlugin"),
      r("AdsPlacementsFacebookReelsOverlayPositionPlugin"),
      r("AdsPlacementsFacebookSearchPositionPlugin"),
      r("AdsPlacementsFacebookGroupTabPositionPlugin"),
      r("AdsPlacementsFacebookBizDiscoFeedPositionPlugin"),
      r("AdsPlacementsFacebookFbReelsPositionPlugin"),
      r("AdsPlacementsFacebookNotificationPositionPlugin"),
    ]);
    function u(e, t) {
      var n =
        e.isTopicEnabledForFBReels === !0 ||
        e.isCountryEnabledForFBReels === !0;
      return e.isReelsTrendingAds === !0 && (n || t);
    }
    var c = {
        type: "placements/platform",
        key: "facebook",
        apiPublisherPlatform: "facebook",
        apiPositionsTargetField: function () {
          return r("AdsAPITargetFields").FACEBOOK_POSITIONS;
        },
        name: r("AdsPlacementPlatformLabelConstant")[
          r("AdsAPITargetFields").FACEBOOK_POSITIONS
        ],
        glyph: o("meta-brand-facebook-outline-20")
          .metaBrandFacebookNewAppFacebookCircleOutline20,
        glyphActive: o("meta-brand-facebook-filled-20")
          .metaBrandFacebookNewAppFacebookCircleFilled20,
        fbicon: o("meta-brand-facebook-outline-16")
          .metaBrandFacebookNewAppFacebookCircleOutline16,
        placementPreviewImage: s("556718"),
        isEnabled: function (t) {
          return !0;
        },
        positions: e,
        adsetReducer: function (t, n) {
          var e = n.action;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removePlatforms.includes("facebook")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o(
                      "AdsPlacementAPISpecWriterUtils",
                    ).removePublisherPlatform(
                      t,
                      "facebook",
                      e.eligibilityInformation,
                    );
                  })
                : t;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(t, e.ids, function (t) {
                var n,
                  a = r("gkx")("11580"),
                  i = u(e.eligibilityInformation, a),
                  l = i
                    ? babelHelpers.extends({}, e.eligibilityInformation, {
                        capabilities: o(
                          "AdsReelsTrendingAdsPlacementUtils",
                        ).getCapabilitiesWithRTAFBReelsDefault(
                          e.eligibilityInformation.capabilities,
                        ),
                      })
                    : e.eligibilityInformation,
                  s =
                    (n = t.targeting) == null
                      ? void 0
                      : n.get(r("AdsAPITargetFields").FACEBOOK_POSITIONS),
                  c = s != null && !s.includes("facebook_reels");
                if (i && (!a || !c))
                  return o("AdsPlacementAPISpecWriterUtils").addGroup(
                    t,
                    "facebook/fb_reels",
                    l,
                    r("AdsAPITargetFields").FACEBOOK_POSITIONS,
                    "facebook",
                  );
                if (i) return t;
                var d = o(
                  "AdsPlacementAPISpecWriterUtils",
                ).addPublisherPlatform(t, "facebook", l);
                return (
                  (d = o(
                    "AdsPlacementAPISpecWriterUtils",
                  ).removeMessengerThreadPlacement(d, l)),
                  d
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
                    "facebook",
                    e.eligibilityInformation,
                  );
                },
              );
          }
          return t;
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
