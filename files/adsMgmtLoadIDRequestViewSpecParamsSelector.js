__d(
  "adsMgmtLoadIDRequestViewSpecParamsSelector",
  [
    "AdsAccountStore",
    "AdsPEAdgroupSortLiveSelectors",
    "AdsPECampaignGroupSortLiveSelectors",
    "AdsPECampaignSortLiveSelectors",
    "AdsPEStatRangeUIStoreSelectors",
    "adsCreateSelector",
    "adsPECreativeGetSortLiveInfoSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("adsCreateSelector")(
        [
          o("AdsPECampaignGroupSortLiveSelectors").getSortInfo,
          o("AdsPECampaignSortLiveSelectors").getSortInfo,
          o("AdsPEAdgroupSortLiveSelectors").getSortInfo,
          r("adsPECreativeGetSortLiveInfoSelector"),
        ],
        function (t, n, r, o) {
          return {
            campaignGroup: t,
            campaign: n,
            adgroup: r,
            uniqueAdCreative: o,
          };
        },
        { name: i.id + ".getAdsSortInfoMap" },
      ),
      s = r("adsCreateSelector")(
        [
          o("AdsPEStatRangeUIStoreSelectors").getStatRangeStringSelector,
          r("AdsAccountStore").getSelectedAccount,
        ],
        function (t, n) {
          var e = n.getValue() || {};
          return t(e.timezone_id);
        },
        { name: i.id + ".getDateTimeRange" },
      ),
      u = r("adsCreateSelector")(
        [
          e,
          s,
          o("AdsPEStatRangeUIStoreSelectors").getRangeTypeSelector,
          o("AdsPEStatRangeUIStoreSelectors").getComparisonOrNullSelector,
          r("AdsAccountStore").getTimezoneID,
        ],
        function (t, n, r, o, a) {
          return {
            sortInfoMap: t,
            dateTimeRange: n,
            datePreset: r(),
            comparisonDateTimeRange: o(),
            timezoneID: a,
          };
        },
        { name: i.id + ".adsMgmtLoadIDRequestViewSpecParamsSelector" },
      ),
      c = u;
    l.default = c;
  },
  98,
);
