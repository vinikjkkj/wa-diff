__d(
  "adsGetIsMessageMarketingEnabledFromCampaignGroupIDSelector",
  [
    "adsCreateDynamicSelector",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "adsGetIsMessageMarketingEnabledFromCampaignIDSelector",
    "adsMgmtGetChildrenCampaignIDsForCampaignGroupIDsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateDynamicSelector")(
        r("adsCreateSelector")(
          [
            r("adsCreateStoreSelector")(
              [],
              function (t) {
                return t;
              },
              { name: i.id },
            ),
            o("adsMgmtGetChildrenCampaignIDsForCampaignGroupIDsSelector")
              .adsMgmtGetChildrenCampaignIDsForCampaignGroupIDsSelector,
            r("adsGetIsMessageMarketingEnabledFromCampaignIDSelector"),
          ],
          function (t, n, r) {
            var e = n([t]);
            return e.some(function (e) {
              return r(e);
            });
          },
          { name: i.id },
        ),
      ),
      s = e;
    l.default = s;
  },
  98,
);
