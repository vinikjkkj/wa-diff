__d(
  "AdsReachFrequencyCreativeFormatPlugins",
  [
    "AdsReachFrequencyCreativeFormatCanvasPlugin",
    "AdsReachFrequencyCreativeFormatSphericalPhotoPlugin",
    "AdsReachFrequencyCreativeFormatSphericalVideoPlugin",
    "AdsReachFrequencyCreativeFormatStoriesCarouselPlugin",
    "AdsReachFrequencyCreativeFormatUnspecifiedPlugin",
    "AdsReachFrequencyCreativeFormatVideoPlugin",
    "adsPluginsFactory",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("adsPluginsFactory")(function () {
      return [
        n("AdsReachFrequencyCreativeFormatCanvasPlugin"),
        n("AdsReachFrequencyCreativeFormatSphericalPhotoPlugin"),
        n("AdsReachFrequencyCreativeFormatStoriesCarouselPlugin"),
        n("AdsReachFrequencyCreativeFormatUnspecifiedPlugin"),
        n("AdsReachFrequencyCreativeFormatVideoPlugin"),
        n("AdsReachFrequencyCreativeFormatSphericalVideoPlugin"),
      ];
    });
    a.exports = e;
  },
  null,
);
