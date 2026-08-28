__d(
  "adsMgmtCampaignAllSelectedSelector",
  [
    "AdsMgmtCampaignSelectionProvider",
    "AdsPECampaignVisibleIDsSelectors",
    "adsCreateSelector",
    "adsMgmtCampaignAllSelectedSelectorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsMgmtCampaignSelectionProvider").toFluxSelector(),
      s = r("adsCreateSelector")(
        [e, r("AdsPECampaignVisibleIDsSelectors").visibleIDsSelector],
        function (t, n) {
          var e = t.selection;
          return o(
            "adsMgmtCampaignAllSelectedSelectorUtils",
          ).adsMgmtCampaignAllSelected(e, n);
        },
        { name: i.id + ".adsMgmtCampaignAllSelectedSelector" },
      ),
      u = s;
    l.default = u;
  },
  98,
);
