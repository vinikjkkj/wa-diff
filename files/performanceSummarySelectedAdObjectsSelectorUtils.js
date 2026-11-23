__d(
  "performanceSummarySelectedAdObjectsSelectorUtils",
  ["AdsObjectTypes"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a) {
      var i =
          o === "L1"
            ? {
                selectedIdsAtCurrentLevel: n,
                selectedAdObjectLevel: "ad",
                selectedAdObjectType: r("AdsObjectTypes").ADGROUP,
              }
            : o === "L2"
              ? {
                  selectedIdsAtCurrentLevel: t,
                  selectedAdObjectLevel: "ad_set",
                  selectedAdObjectType: r("AdsObjectTypes").CAMPAIGN,
                }
              : {
                  selectedIdsAtCurrentLevel: e,
                  selectedAdObjectLevel: "campaign",
                  selectedAdObjectType: r("AdsObjectTypes").CAMPAIGN_GROUP,
                },
        l = i.selectedAdObjectLevel,
        s = i.selectedAdObjectType,
        u = i.selectedIdsAtCurrentLevel;
      return {
        selectedIdsAtCurrentLevel: u,
        selectedAdObjectLevel: l,
        selectedAdObjectType: s,
        availableCampaignIdsForSelectedCampaignGroups: a,
      };
    }
    l.performanceSummarySelectedAdObjects = e;
  },
  98,
);
