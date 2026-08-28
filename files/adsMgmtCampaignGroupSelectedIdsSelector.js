__d(
  "adsMgmtCampaignGroupSelectedIdsSelector",
  ["AdsMgmtCampaignGroupSelectionProvider", "AdsTypedID", "adsCreateSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsMgmtCampaignGroupSelectionProvider").toFluxSelector(),
      s = r("adsCreateSelector")(
        [e],
        function (t) {
          var e = t.cachedSelectedIDs;
          return e;
        },
        { name: i.id + ".adsMgmtCampaignGroupSelectedIdsSelector" },
      ),
      u = r("adsCreateSelector")(
        [e],
        function (t) {
          var e = t.cachedSelectedIDs;
          return o("AdsTypedID").fbidArrayToCampaignGroupTypedIDArray(e);
        },
        { name: i.id + ".adsMgmtCampaignGroupSelectedTypedIdsSelector" },
      );
    ((l.adsMgmtCampaignGroupSelectedIdsSelector = s),
      (l.adsMgmtCampaignGroupSelectedTypedIdsSelector = u));
  },
  98,
);
