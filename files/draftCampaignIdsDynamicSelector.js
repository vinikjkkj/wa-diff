__d(
  "draftCampaignIdsDynamicSelector",
  ["AdsCampaignDraftFragmentStore", "adsCreateDynamicSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateDynamicSelector")(
      r("AdsCampaignDraftFragmentStore").getNewIDsForSelector,
    );
    l.draftCampaignIdsDynamicSelector = e;
  },
  98,
);
