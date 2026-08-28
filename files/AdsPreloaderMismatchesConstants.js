__d(
  "AdsPreloaderMismatchesConstants",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = [
        "AdsPEAdObjectTableDataManager",
        "AdsDraftDataManager._load",
        "AdsDraftDataManager.getOrCreateCurrentDraft",
        "AdsDraftFragmentListDataManager",
        "AdsPEFilterLiveDataManager._getDataForLevels",
        "AdsPETableDataFetchingPolicy.fetchBody.stats>fetchSync",
        "AdsInsightsColumnPresetDataLoader",
      ],
      l = "preloader_has_no_queries_and_is_likely_disabled",
      s = {
        AdsDraftDataManagerPreloader: [
          {
            requestName: "objectByName:addraft_ID",
            stringArrayAnnotations: { fields: ["path"] },
          },
        ],
        AdsPEAdObjectTableDataManagerPreloader: [
          {
            requestName: "objects:adtable_campaignGroup",
            stringArrayAnnotations: { fields: ["ids"] },
          },
        ],
      };
    ((i.IMPORTANT_PRELOADERS_REQUEST_SOURCE = e),
      (i.NO_QUERIES_MSG = l),
      (i.COMMON_KNOWN_MISMATCHES_TO_IGNORE = s));
  },
  66,
);
