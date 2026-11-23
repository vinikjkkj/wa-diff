__d(
  "AdsAppInstallsMobileAppCampaignBudgetODAXMigratedPlugin",
  [
    "AdsAPIObjectives",
    "AdsAppInstallsMobileAppCampaignBudgetPlugin",
    "AdsPromotedObjectTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsAppInstallsMobileAppCampaignBudgetPlugin"),
        {
          type: "campaign/budget/ODAX_MIGRATED",
          key: "app-installs/app/ODAX_MIGRATED",
          multiPivots: [
            {
              objective: r("AdsAPIObjectives").APP_INSTALLS,
              promotedObjectType: r("AdsPromotedObjectTypes").MOBILE_APP,
            },
          ],
          originalKey: "app-installs/app",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
