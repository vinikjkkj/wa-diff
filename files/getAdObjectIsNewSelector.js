__d(
  "getAdObjectIsNewSelector",
  [
    "invariant",
    "AdsAdgroupDraftFragmentStore",
    "AdsCampaignDraftFragmentStore",
    "AdsCampaignGroupDraftFragmentStore",
    "adsCreateDynamicSelector",
    "adsCreateSelector",
    "adsCreateSelectorsByLevel",
    "adsCreateStoreSelector",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u =
        ((e = {}),
        (e.campaign = r("AdsCampaignGroupDraftFragmentStore").getIsNewSelector),
        (e.ad_set = r("AdsCampaignDraftFragmentStore").getIsNewSelector),
        (e.ad = r("AdsAdgroupDraftFragmentStore").getIsNewSelector),
        e),
      c = r("adsCreateSelectorsByLevel")(function (e) {
        var t = u[e];
        return (
          t !== null || s(0, 55436),
          r("adsCreateDynamicSelector")(
            r("adsCreateSelector")(
              [
                r("adsCreateStoreSelector")(
                  [],
                  function (t) {
                    return t;
                  },
                  { name: i.id },
                ),
                t,
              ],
              function (t, n) {
                return n(t);
              },
              { name: i.id },
            ),
          )
        );
      });
    l.getAdObjectIsNewSelector = c;
  },
  98,
);
