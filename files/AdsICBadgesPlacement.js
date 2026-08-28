__d(
  "AdsICBadgesPlacement",
  [
    "AdsICGenericPlacementBasedOnFormatWithCap",
    "AdsInProductGuidanceConfig.experimental",
    "AdsIntelligentComponentsMessageFormat",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [r("AdsIntelligentComponentsMessageFormat").NEW_BADGE],
      s =
        r("AdsInProductGuidanceConfig.experimental").cap_per_type.get(
          "BADGES",
        ) || 0,
      u = new (r("AdsICGenericPlacementBasedOnFormatWithCap"))("BADGES", e, s);
    l.default = u;
  },
  98,
);
