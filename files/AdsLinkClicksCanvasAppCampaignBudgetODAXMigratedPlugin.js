__d(
  "AdsLinkClicksCanvasAppCampaignBudgetODAXMigratedPlugin",
  [
    "AdsAPIObjectives",
    "AdsLinkClicksCanvasAppCampaignBudgetPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsLinkClicksCanvasAppCampaignBudgetPlugin"),
        {
          type: "campaign/budget/ODAX_MIGRATED",
          key: "link-clicks/canvas-app/ODAX_MIGRATED",
          multiPivots: [
            {
              objective: r("AdsAPIObjectives").LINK_CLICKS,
              promotedObjectType: r("AdsPromotedObjectTypes").CANVAS_APP,
            },
          ],
          originalKey: "link-clicks/canvas-app",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
