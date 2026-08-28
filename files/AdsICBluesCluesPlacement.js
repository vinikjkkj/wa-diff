__d(
  "AdsICBluesCluesPlacement",
  [
    "AdsICGenericPlacementBasedOnFormatWithCap",
    "AdsInProductGuidanceConfig.experimental",
    "AdsIntelligentComponentsMessageFormat",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        r("AdsIntelligentComponentsMessageFormat").BLUE_TIP,
        r("AdsIntelligentComponentsMessageFormat").BLUE_TOUR,
      ],
      s =
        r("AdsInProductGuidanceConfig.experimental").cap_per_type.get(
          "BLUES_CLUES",
        ) || 0,
      u = new (r("AdsICGenericPlacementBasedOnFormatWithCap"))(
        "BLUES_CLUES",
        e,
        s,
      );
    l.default = u;
  },
  98,
);
