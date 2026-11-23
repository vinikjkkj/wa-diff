__d(
  "getSelectionNewCountDynamicSelector",
  [
    "AdsPEAdgroupSelectionEditStatusSelectors",
    "AdsPECampaignGroupSelectionEditStatusSelectors",
    "AdsPECampaignSelectionEditStatusSelectors",
    "adsCreateDynamicSelector",
    "adsCreateSelector",
    "adsCreateStoreSelector",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").Map([
        [
          "L1",
          o("AdsPEAdgroupSelectionEditStatusSelectors").getSelectionNewCount,
        ],
        [
          "L2",
          o("AdsPECampaignSelectionEditStatusSelectors").getSelectionNewCount,
        ],
        [
          "L3",
          o("AdsPECampaignGroupSelectionEditStatusSelectors")
            .getSelectionNewCount,
        ],
      ]),
      s = r("adsCreateSelector")(
        [
          r("adsCreateStoreSelector")(
            [],
            function (t) {
              return t;
            },
            { name: i.id },
          ),
          o("AdsPECampaignGroupSelectionEditStatusSelectors")
            .getSelectionNewCount,
          o("AdsPECampaignSelectionEditStatusSelectors").getSelectionNewCount,
          o("AdsPEAdgroupSelectionEditStatusSelectors").getSelectionNewCount,
        ],
        function (n) {
          var t = e.get(n);
          return t ? t() : 0;
        },
        { name: i.id + ".getSelectionNewCount" },
      ),
      u = r("adsCreateDynamicSelector")(s);
    l.default = u;
  },
  98,
);
