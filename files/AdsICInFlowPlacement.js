__d(
  "AdsICInFlowPlacement",
  [
    "AdsICGenericPlacementBasedOnFormatWithCap",
    "AdsInProductGuidanceConfig.experimental",
    "AdsIntelligentComponentsMessageFormat",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [r("AdsIntelligentComponentsMessageFormat").INLINE],
      u =
        r("AdsInProductGuidanceConfig.experimental").cap_per_type.get(
          "IN_FLOW",
        ) || 0,
      c = r("immutable").Map(
        ((e = {}),
        (e.CREATION_AND_EDITING_L1 =
          r("AdsInProductGuidanceConfig.experimental").cap_per_type.get(
            "CREATION_AND_EDITING_L1",
          ) || 0),
        (e.CREATION_AND_EDITING_L2 =
          r("AdsInProductGuidanceConfig.experimental").cap_per_type.get(
            "CREATION_AND_EDITING_L2",
          ) || 0),
        (e.CREATION_AUDIENCE =
          r("AdsInProductGuidanceConfig.experimental").cap_per_type.get(
            "CREATION_AUDIENCE",
          ) || 0),
        (e.CREATION_L2_SIDEBAR =
          r("AdsInProductGuidanceConfig.experimental").cap_per_type.get(
            "CREATION_L2_SIDEBAR",
          ) || 0),
        (e.CREATION_L3_HEADER =
          r("AdsInProductGuidanceConfig.experimental").cap_per_type.get(
            "CREATION_L3_HEADER",
          ) || 0),
        (e.DELIVERY_OPTIMIZATION =
          r("AdsInProductGuidanceConfig.experimental").cap_per_type.get(
            "DELIVERY_OPTIMIZATION",
          ) || 0),
        (e.DUPLICATION =
          r("AdsInProductGuidanceConfig.experimental").cap_per_type.get(
            "DUPLICATION",
          ) || 0),
        (e.EDITING_L3 =
          r("AdsInProductGuidanceConfig.experimental").cap_per_type.get(
            "EDITING_L3",
          ) || 0),
        (e.CREATION_AND_EDITING_L3_RIGHT_SIDEBAR =
          r("AdsInProductGuidanceConfig.experimental").cap_per_type.get(
            "CREATION_AND_EDITING_L3_RIGHT_SIDEBAR",
          ) || 0),
        (e.EXPORT =
          r("AdsInProductGuidanceConfig.experimental").cap_per_type.get(
            "EXPORT",
          ) || 0),
        (e.IMPORT =
          r("AdsInProductGuidanceConfig.experimental").cap_per_type.get(
            "IMPORT",
          ) || 0),
        (e.INSIGHTS_TRAY =
          r("AdsInProductGuidanceConfig.experimental").cap_per_type.get(
            "INSIGHTS_TRAY",
          ) || 0),
        (e.NOT_IN_ADS_MANAGER =
          r("AdsInProductGuidanceConfig.experimental").cap_per_type.get(
            "NOT_IN_ADS_MANAGER",
          ) || 0),
        (e.OBJECTIVE =
          r("AdsInProductGuidanceConfig.experimental").cap_per_type.get(
            "OBJECTIVE",
          ) || 0),
        (e.PLACEMENT =
          r("AdsInProductGuidanceConfig.experimental").cap_per_type.get(
            "PLACEMENT",
          ) || 0),
        (e.PUBLISHING_RECEIPT =
          r("AdsInProductGuidanceConfig.experimental").cap_per_type.get(
            "PUBLISHING_RECEIPT",
          ) || 0),
        (e.QUICK_CREATION =
          r("AdsInProductGuidanceConfig.experimental").cap_per_type.get(
            "QUICK_CREATION",
          ) || 0),
        e),
      ),
      d = new (r("AdsICGenericPlacementBasedOnFormatWithCap"))(
        "IN_FLOW",
        s,
        u,
        c,
      );
    l.default = d;
  },
  98,
);
