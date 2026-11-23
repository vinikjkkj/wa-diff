__d(
  "AdsCanvasAppInstallsCampaignBudgetODAXMigratedPlugin",
  ["AdsAPIObjectives", "AdsCanvasAppInstallsCampaignBudgetPlugin"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsCanvasAppInstallsCampaignBudgetPlugin"),
        {
          type: "campaign/budget/ODAX_MIGRATED",
          key: "canvas-app-installs/ODAX_MIGRATED",
          multiPivots: [
            { objective: r("AdsAPIObjectives").CANVAS_APP_INSTALLS },
          ],
          originalKey: "canvas-app-installs",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
