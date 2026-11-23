__d(
  "AdsCanvasAppEngagementCampaignBudgetODAXMigratedPlugin",
  ["AdsAPIObjectives", "AdsCanvasAppEngagementCampaignBudgetPlugin"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsCanvasAppEngagementCampaignBudgetPlugin"),
        {
          type: "campaign/budget/ODAX_MIGRATED",
          key: "canvas-app-engagement/ODAX_MIGRATED",
          multiPivots: [
            { objective: r("AdsAPIObjectives").CANVAS_APP_ENGAGEMENT },
          ],
          originalKey: "canvas-app-engagement",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
