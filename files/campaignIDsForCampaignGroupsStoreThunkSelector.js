__d(
  "campaignIDsForCampaignGroupsStoreThunkSelector",
  ["AdsCampaignCombinedListStore", "adsCreateStoreThunkSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateStoreThunkSelector")(
      r("AdsCampaignCombinedListStore"),
      function (e, t) {
        return r("AdsCampaignCombinedListStore").getForCampaignGroups(e, t);
      },
    );
    l.default = e;
  },
  98,
);
