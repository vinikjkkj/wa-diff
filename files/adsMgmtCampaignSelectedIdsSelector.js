__d(
  "adsMgmtCampaignSelectedIdsSelector",
  ["AdsMgmtCampaignSelectionProvider", "AdsTypedID", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsMgmtCampaignSelectionProvider").toFluxSelector(),
      s = r("adsCreateSelector")(
        [e],
        function (t) {
          var e = t.cachedSelectedIDs;
          return e;
        },
        { name: i.id + ".adsMgmtCampaignSelectedIdsSelector" },
      ),
      u = r("adsCreateSelector")(
        [e],
        function (t) {
          var e = t.cachedSelectedIDs;
          return o("AdsTypedID").fbidArrayToCampaignTypedIDArray(e);
        },
        { name: i.id + ".adsMgmtCampaignSelectedTypedIdsSelector" },
      );
    ((l.adsMgmtCampaignSelectedIdsSelector = s),
      (l.adsMgmtCampaignSelectedTypedIdsSelector = u));
  },
  98,
);
