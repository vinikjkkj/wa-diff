__d(
  "adsAssetFeedAdgroupRequireCallToActionSpec",
  [
    "AdCampaignDestination",
    "AdsAssetFeedUtils",
    "AdsCallToActionTypesUtils",
    "AdsIsApplicationInCallToAction",
    "AdsLinkTypeUtils",
    "AdsMessengerDestinationAdgroupUtils",
    "AdsPACSupportedLinkCTAs",
    "AdsPECampaignSelectors",
    "AdsUEditorInstagramUtils",
    "AdsWhatsAppUtils",
    "isAccountEligibleForThreeCOL2AdEx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = o("AdsCallToActionTypesUtils").getCTATypeFromAdgroup(e),
        a = r("AdsPACSupportedLinkCTAs").includes(n),
        l = n === "MESSAGE_PAGE",
        s =
          (t = o("AdsPECampaignSelectors")
            .getCachedByFieldsSelector()(
              e.adset_id,
              { destination_type: null },
              i.id,
            )
            .getValue()) == null
            ? void 0
            : t.destination_type,
        u = !1;
      if (o("isAccountEligibleForThreeCOL2AdEx").is3coXPacFix()) {
        var c,
          d =
            (c = o("AdsPECampaignSelectors")
              .getCachedByFieldsSelector()(
                e.adset_id,
                { promoted_object: null },
                i.id,
              )
              .getValue()) == null
              ? void 0
              : c.promoted_object;
        u = (d == null ? void 0 : d.mcme_conversion_id) != null;
      }
      var m = l || s === r("AdCampaignDestination").WEBSITE_AND_LEAD_FORM || u;
      return (
        o("AdsLinkTypeUtils").isEventLinkTypeSelected(e) ||
        o(
          "AdsMessengerDestinationAdgroupUtils",
        ).hasMessengerDestinationForAdgroupSpec(e) ||
        o("AdsUEditorInstagramUtils").isInstagramDirectDestinationAd(e) ||
        o("AdsWhatsAppUtils").isWhatsAppDestinationAd(e) ||
        o("AdsIsApplicationInCallToAction").isApplicationInCallToAction(e) ||
        a ||
        (o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(e) && m)
      );
    }
    l.default = e;
  },
  98,
);
