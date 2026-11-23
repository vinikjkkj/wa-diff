__d(
  "AdsMobileAppEngagementCampaignBudgetODAXMigratedPlugin",
  ["AdsAPIObjectives", "AdsMobileAppEngagementCampaignBudgetPlugin"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsMobileAppEngagementCampaignBudgetPlugin"),
        {
          type: "campaign/budget/ODAX_MIGRATED",
          key: "mobile-app-engagement/ODAX_MIGRATED",
          multiPivots: [
            { objective: r("AdsAPIObjectives").MOBILE_APP_ENGAGEMENT },
          ],
          originalKey: "mobile-app-engagement",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
