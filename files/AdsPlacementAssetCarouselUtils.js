__d(
  "AdsPlacementAssetCarouselUtils",
  ["AdsAssetCustomizationCarouselEligibility", "WAMOStatusAdsManagerUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return e.every(function (e) {
        return r(
          "AdsAssetCustomizationCarouselEligibility",
        ).INSTAGRAM_POSITIONS.includes(e);
      });
    }
    function s(e, t) {
      var n = e.filter(function (e) {
        return r(
          "AdsAssetCustomizationCarouselEligibility",
        ).FACEBOOK_POSITIONS.includes(e);
      });
      return n.length > 0;
    }
    function u(e, t) {
      return e.every(function (e) {
        return r(
          "AdsAssetCustomizationCarouselEligibility",
        ).MESSENGER_POSITIONS.includes(e);
      });
    }
    function c(e, t) {
      return e.every(function (e) {
        return r(
          "AdsAssetCustomizationCarouselEligibility",
        ).AUDIENCE_NETWORK_POSITIONS.includes(e);
      });
    }
    function d(e, t) {
      return e.every(function (e) {
        return e === "status"
          ? o(
              "WAMOStatusAdsManagerUtils",
            ).isAdAccountEligibleForCarouselExpansion()
          : r(
              "AdsAssetCustomizationCarouselEligibility",
            ).WHATSAPP_POSITIONS.includes(e);
      });
    }
    ((l.getIsValidPlatformCarouselInstagramPosition = e),
      (l.getIsValidPlatformCarouselFacebookPosition = s),
      (l.getIsValidPlatformCarouselMessengerPosition = u),
      (l.getIsValidPlatformCarouselAudienceNetworkPosition = c),
      (l.getIsValidPlatformCarouselWhatsAppPosition = d));
  },
  98,
);
