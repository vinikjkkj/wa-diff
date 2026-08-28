__d(
  "AdsICFloatingPlacement",
  [
    "AdsICPlacementWithContextualEntryPointAndCap",
    "AdsInProductGuidanceConfig.experimental",
    "AdsIntelligentComponentsMessageFormat",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [r("AdsIntelligentComponentsMessageFormat").EDITOR_CARD_FLOATING],
      s =
        r("AdsInProductGuidanceConfig.experimental").cap_per_type.get(
          "IN_FLOW",
        ) || 0,
      u = [
        "CREATION_AND_EDITING_L1",
        "CREATION_AND_EDITING_L2",
        "CREATION_AND_EDITING_L3_RIGHT_SIDEBAR",
        "CREATION_AUDIENCE",
        "CREATION_L2_SIDEBAR",
        "CREATION_L3_HEADER",
        "DELIVERY_OPTIMIZATION",
        "DUPLICATION",
        "EDITING_L3",
        "EXPORT",
        "IMPORT",
        "INSIGHTS_TRAY",
        "NOT_IN_ADS_MANAGER",
        "OBJECTIVE",
        "PLACEMENT",
        "PUBLISHING_RECEIPT",
        "QUICK_CREATION",
      ],
      c = r("immutable").Map(
        u.map(function (e) {
          return [
            e,
            r("AdsInProductGuidanceConfig.experimental").cap_per_type.get(e) ||
              0,
          ];
        }),
      ),
      d = new (r("AdsICPlacementWithContextualEntryPointAndCap"))(
        "EDITOR_CARD_FLOATING_TIP",
        e,
        s,
        c,
      );
    l.default = d;
  },
  98,
);
