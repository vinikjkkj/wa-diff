__d(
  "AdsCFActiveCampaignGroupIDBuyingTypeChangeActionHandler",
  ["AdsCFConstants", "AdsCreationBuyingTypeChangeDataActionFlux", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        type: o("AdsCreationBuyingTypeChangeDataActionFlux").actionType,
        mutate: function (t, n) {
          return r("immutable").Set([
            o("AdsCFConstants").NEW_CAMPAIGN_GROUP_ID,
          ]);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
