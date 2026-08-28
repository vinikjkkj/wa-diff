__d(
  "AdsPlacementPlatformPlugins",
  [
    "AdsPlacementsAudienceNetworkPlatformPlugin",
    "AdsPlacementsFacebookPlatformPlugin",
    "AdsPlacementsInstagramPlatformPlugin",
    "AdsPlacementsMessengerPlatformPlugin",
    "AdsPlacementsOculusPlatformPlugin",
    "AdsPlacementsStreamingServicesPlatformPlugin",
    "AdsPlacementsThreadsPlatformPlugin",
    "AdsPlacementsWhatsAppPlatformPlugin",
    "adsPluginsFactory",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("adsPluginsFactory")(function () {
      return [
        n("AdsPlacementsAudienceNetworkPlatformPlugin"),
        n("AdsPlacementsFacebookPlatformPlugin"),
        n("AdsPlacementsInstagramPlatformPlugin"),
        n("AdsPlacementsMessengerPlatformPlugin"),
        n("AdsPlacementsOculusPlatformPlugin"),
        n("AdsPlacementsStreamingServicesPlatformPlugin"),
        n("AdsPlacementsThreadsPlatformPlugin"),
        n("AdsPlacementsWhatsAppPlatformPlugin"),
      ];
    });
    a.exports = e;
  },
  null,
);
