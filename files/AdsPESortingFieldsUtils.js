__d(
  "AdsPESortingFieldsUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e === "ad_set" || e === "ad" ? "campaign.name" : null;
    }
    function l(e) {
      return e === "ad" ? "adset.name" : null;
    }
    function s(e) {
      return e === "campaign" || e === "ad_set"
        ? "start_time"
        : e === "ad"
          ? "adset.start_time"
          : null;
    }
    function u(e) {
      return e === "campaign"
        ? "stop_time"
        : e === "ad_set"
          ? "end_time"
          : e === "ad"
            ? "adset.end_time"
            : null;
    }
    ((i.getCampaignGroupNameSortField = e),
      (i.getCampaignNameSortField = l),
      (i.getStartTimeSortField = s),
      (i.getStopTimeSortField = u));
  },
  66,
);
