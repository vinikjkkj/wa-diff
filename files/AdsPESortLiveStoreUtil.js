__d(
  "AdsPESortLiveStoreUtil",
  [
    "AdsInsightsColumn",
    "AdsMgmtColumn",
    "AdsPESortInfo",
    "AdsPESortingFieldsUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      switch (e) {
        case r("AdsMgmtColumn").START:
        case "start_time":
        case "start_time":
        case "adset.start_time":
          return o("AdsPESortingFieldsUtils").getStartTimeSortField(t);
        case r("AdsMgmtColumn").END:
        case "stop_time":
        case "end_time":
        case "adset.end_time":
          return o("AdsPESortingFieldsUtils").getStopTimeSortField(t);
        case r("AdsInsightsColumn").CAMPAIGN_GROUP_NAME:
        case "campaign.name":
          return o("AdsPESortingFieldsUtils").getCampaignGroupNameSortField(t);
        case r("AdsInsightsColumn").CAMPAIGN_NAME:
        case "adset.name":
          return o("AdsPESortingFieldsUtils").getCampaignNameSortField(t);
        default:
          return null;
      }
    }
    function s(e, t) {
      return new (r("AdsPESortInfo"))({
        datePreset: t.datePreset,
        sort: e.sort,
      });
    }
    ((l.getLevelSpecificSortField = e), (l.deriveActionSortInfo = s));
  },
  98,
);
