__d(
  "AdsReachFrequencyAdFormatsPlugins",
  [
    "AdsReachFrequencyAdFormatsCanvasPlugin",
    "AdsReachFrequencyAdFormatsImagePlugin",
    "AdsReachFrequencyAdFormatsSphericalImagePlugin",
    "AdsReachFrequencyAdFormatsSphericalVideoPlugin",
    "AdsReachFrequencyAdFormatsStoriesCarouselPlugin",
    "AdsReachFrequencyAdFormatsVideoPlugin",
    "adsPluginsFactory",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("adsPluginsFactory")(function () {
      return [
        n("AdsReachFrequencyAdFormatsCanvasPlugin"),
        n("AdsReachFrequencyAdFormatsImagePlugin"),
        n("AdsReachFrequencyAdFormatsSphericalImagePlugin"),
        n("AdsReachFrequencyAdFormatsSphericalVideoPlugin"),
        n("AdsReachFrequencyAdFormatsStoriesCarouselPlugin"),
        n("AdsReachFrequencyAdFormatsVideoPlugin"),
      ];
    });
    a.exports = e;
  },
  null,
);
