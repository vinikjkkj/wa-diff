__d(
  "getFilterFieldForLevel",
  ["AdsPEFilterFields"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e === "campaignGroup"
        ? r("AdsPEFilterFields").CAMPAIGN_GROUP_SELECTED
        : e === "campaign"
          ? r("AdsPEFilterFields").CAMPAIGN_SELECTED
          : e === "adgroup"
            ? r("AdsPEFilterFields").ADGROUP_SELECTED
            : e === "uniqueAdCreative"
              ? r("AdsPEFilterFields").UNIQUE_ADCREATIVE_SELECTED
              : null;
    }
    l.default = e;
  },
  98,
);
