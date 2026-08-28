__d(
  "AdsPlacementTargetingFields",
  ["AdsAPITargetFields", "AdsPlacementStrictlyPlacementFields"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("AdsPlacementStrictlyPlacementFields").concat([
        (e = r("AdsAPITargetFields")).USER_DEVICE,
        e.USER_OS,
        e.WIRELESS_CARRIER,
        e.EXCLUDED_PUBLISHER_LIST_IDS,
        e.EXCLUDED_USER_DEVICE,
        e.BRAND_SAFETY_CONTENT_FILTER_LEVELS,
        e.EXCLUDED_BRAND_SAFETY_CONTENT_TYPES,
        e.INSTREAM_VIDEO_SKIPPABLE_EXCLUDED,
        e.CONTEXTUAL_TARGETING_CATEGORIES,
      ]),
      u = s;
    l.default = u;
  },
  98,
);
