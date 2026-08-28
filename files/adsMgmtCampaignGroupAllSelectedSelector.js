__d(
  "adsMgmtCampaignGroupAllSelectedSelector",
  [
    "AdsMgmtCampaignGroupSelectionProvider",
    "AdsPECampaignGroupVisibleIDsSelectors",
    "adsCreateSelector",
    "adsMgmtCampaignGroupAllSelectedSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsMgmtCampaignGroupSelectionProvider").toFluxSelector(),
      s = r("adsCreateSelector")(
        [e, r("AdsPECampaignGroupVisibleIDsSelectors").visibleIDsSelector],
        function (t, n) {
          return o(
            "adsMgmtCampaignGroupAllSelectedSelectorUtils",
          ).adsMgmtCampaignGroupAllSelected(t, n);
        },
        { name: i.id + ".adsMgmtCampaignGroupAllSelectedSelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
