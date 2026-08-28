__d(
  "AdsPlacementsWhatsAppPlatformPlugin",
  [
    "ix",
    "AdsAPITargetFields",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsMutators",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementPlatformLabelConstant",
    "AdsPlacementsWhatsAppChannelPositionPlugin",
    "AdsPlacementsWhatsAppMarketingMessagePositionPlugin",
    "AdsPlacementsWhatsAppStatusPositionPlugin",
    "AdsUEditorAdgroupMessageMarketingLiquidityUtils",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "PromoChannelAdsManagerUtils",
    "WAMOStatusAdsManagerUtils",
    "gkx",
    "immutable",
    "meta-brand-whatsapp-filled-20",
    "meta-brand-whatsapp-outline-16",
    "meta-brand-whatsapp-outline-20",
    "setUserAgeUnknownMutator",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return r("gkx")("19623") ? s("947345") : s("556723");
    }
    var u = {
        type: "placements/platform",
        key: "whatsapp",
        apiPublisherPlatform: "whatsapp",
        apiPositionsTargetField: function () {
          return r("AdsAPITargetFields").WHATSAPP_POSITIONS;
        },
        name: r("AdsPlacementPlatformLabelConstant")[
          r("AdsAPITargetFields").WHATSAPP_POSITIONS
        ],
        isEnabled: function (t) {
          return (
            o(
              "PromoChannelAdsManagerUtils",
            ).isAdAccountEligibleForPromoChannel() ||
            o(
              "AdsUEditorAdgroupMessageMarketingLiquidityUtils",
            ).isAdAccountEligibleForMessageMarketingLiquidity() ||
            o("WAMOStatusAdsManagerUtils").isAdAccountEligibleForWAMOStatus()
          );
        },
        glyph: o("meta-brand-whatsapp-outline-20").metaBrandWhatsappOutline20,
        glyphActive: o("meta-brand-whatsapp-filled-20")
          .metaBrandWhatsappFilled20,
        fbicon: o("meta-brand-whatsapp-outline-16").metaBrandWhatsappOutline16,
        placementPreviewImage: e(),
        positions: r("immutable").OrderedSet([
          r("AdsPlacementsWhatsAppChannelPositionPlugin"),
          r("AdsPlacementsWhatsAppStatusPositionPlugin"),
          r("AdsPlacementsWhatsAppMarketingMessagePositionPlugin"),
        ]),
        adsetReducer: function (t, n) {
          var e = n.action;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removePlatforms.includes("whatsapp")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    var n = o(
                      "AdsPlacementAPISpecWriterUtils",
                    ).removePublisherPlatform(
                      t,
                      "whatsapp",
                      e.eligibilityInformation,
                    );
                    return r("setUserAgeUnknownMutator")(n, null);
                  })
                : t;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(t, e.ids, function (t) {
                return o("AdsPlacementAPISpecWriterUtils").addPublisherPlatform(
                  t,
                  "whatsapp",
                  e.eligibilityInformation,
                );
              });
            case o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType:
              return o("AdsMutators").mutateEach(
                t,
                e.campaignIDs,
                function (t) {
                  var n = o(
                    "AdsPlacementAPISpecWriterUtils",
                  ).removePublisherPlatform(
                    t,
                    "whatsapp",
                    e.eligibilityInformation,
                  );
                  return r("setUserAgeUnknownMutator")(n, null);
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
