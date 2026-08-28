__d(
  "draftCampaignGroupIdsDynamicSelector",
  ["AdsCampaignGroupDraftFragmentStore", "adsCreateDynamicSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateDynamicSelector")(
      r("AdsCampaignGroupDraftFragmentStore").getNewIDsForSelector,
    );
    l.draftCampaignGroupIdsDynamicSelector = e;
  },
  98,
);
