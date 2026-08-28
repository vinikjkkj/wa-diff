__d(
  "AdsPlacementOmnichannelUtils",
  ["AdsAPIObjectives", "AdsPromotedObjectOmnichannelAppUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        e.objective === r("AdsAPIObjectives").CONVERSIONS &&
        e.promotedObjectType != null &&
        o(
          "AdsPromotedObjectOmnichannelAppUtils",
        ).OMNICHANNEL_IN_APP_DESTINATION_PROMOTED_OBJECT_TYPES.includes(
          e.promotedObjectType,
        )
      );
    }
    l.isIneligibleForOmnichannelAd = e;
  },
  98,
);
