__d(
  "AdsMobileAppInstallsCampaignBudgetODAXMigratedPlugin",
  ["AdsAPIObjectives", "AdsMobileAppInstallsCampaignBudgetPlugin"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends(
        {},
        r("AdsMobileAppInstallsCampaignBudgetPlugin"),
        {
          type: "campaign/budget/ODAX_MIGRATED",
          key: "mobile-app-installs/ODAX_MIGRATED",
          multiPivots: [
            { objective: r("AdsAPIObjectives").MOBILE_APP_INSTALLS },
          ],
          originalKey: "mobile-app-installs",
        },
      ),
      s = e;
    l.default = s;
  },
  98,
);
