__d(
  "AdsPlacementPositionGroupPlugins",
  [
    "AdsPlacementChannelPositionGroupPlugin",
    "AdsPlacementConnectedTVPositionGroupPlugin",
    "AdsPlacementExternalDisplayPositionGroupPlugin",
    "AdsPlacementFeedPositionGroupPlugin",
    "AdsPlacementInContextPositionGroupPlugin",
    "AdsPlacementInStreamPositionGroupPlugin",
    "AdsPlacementMessagingPositionGroupPlugin",
    "AdsPlacementOculusPositionGroupPlugin",
    "AdsPlacementReelsOverlayPositionGroupPlugin",
    "AdsPlacementSearchPositionGroupPlugin",
    "AdsPlacementStoryPositionGroupPlugin",
    "adsPluginsFactory",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("adsPluginsFactory")(function () {
      return [
        n("AdsPlacementChannelPositionGroupPlugin"),
        n("AdsPlacementConnectedTVPositionGroupPlugin"),
        n("AdsPlacementInContextPositionGroupPlugin"),
        n("AdsPlacementExternalDisplayPositionGroupPlugin"),
        n("AdsPlacementFeedPositionGroupPlugin"),
        n("AdsPlacementMessagingPositionGroupPlugin"),
        n("AdsPlacementOculusPositionGroupPlugin"),
        n("AdsPlacementReelsOverlayPositionGroupPlugin"),
        n("AdsPlacementSearchPositionGroupPlugin"),
        n("AdsPlacementStoryPositionGroupPlugin"),
        n("AdsPlacementInStreamPositionGroupPlugin"),
      ];
    });
    a.exports = e;
  },
  null,
);
