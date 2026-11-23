__d(
  "AdsAppInstallsCanvasAppCampaignBudgetODAXMigratedPlugin",
  [
    "AdsAPIObjectives",
    "AdsAppInstallsCanvasAppCampaignBudgetPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsAppInstallsCanvasAppCampaignBudgetPlugin"),
        {
          type: "campaign/budget/ODAX_MIGRATED",
          key: "app-installs/canvas-app/ODAX_MIGRATED",
          multiPivots: [
            {
              objective: r("AdsAPIObjectives").APP_INSTALLS,
              promotedObjectType: r("AdsPromotedObjectTypes").CANVAS_APP,
            },
          ],
          originalKey: "app-installs/canvas-app",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
