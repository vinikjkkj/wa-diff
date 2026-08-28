__d(
  "adsCFSelectedBuyingTypeSelector",
  [
    "AdsAPICampaignGroupRecordUtils",
    "adsCFCampaignGroupRecordSelector",
    "adsCreateSelector",
    "adsEnforcePureGetStores",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsEnforcePureGetStores")(
        r("adsCreateSelector")(
          [r("adsCFCampaignGroupRecordSelector")],
          function (t) {
            return o("AdsAPICampaignGroupRecordUtils").getBuyingType(t);
          },
          i.id + ".adsCFSelectedBuyingTypeSelector",
        ),
      ),
      s = e;
    l.default = s;
  },
  98,
);
