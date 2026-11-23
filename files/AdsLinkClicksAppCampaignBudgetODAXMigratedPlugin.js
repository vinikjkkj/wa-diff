__d(
  "AdsLinkClicksAppCampaignBudgetODAXMigratedPlugin",
  [
    "AdsAPIObjectives",
    "AdsLinkClicksAppCampaignBudgetPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsLinkClicksAppCampaignBudgetPlugin"),
        {
          type: "campaign/budget/ODAX_MIGRATED",
          key: "link-clicks/app/ODAX_MIGRATED",
          multiPivots: [
            {
              objective: r("AdsAPIObjectives").LINK_CLICKS,
              promotedObjectType: r("AdsPromotedObjectTypes").MOBILE_APP,
            },
          ],
          originalKey: "link-clicks/app",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
