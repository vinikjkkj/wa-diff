__d(
  "AdsDefaultCampaignBudgetODAXMigratedPlugin",
  ["AdsDefaultCampaignBudgetPlugin"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsDefaultCampaignBudgetPlugin"), {
        type: "campaign/budget/ODAX_MIGRATED",
        key: "default/ODAX_MIGRATED",
        multiPivots: [{}],
        originalKey: "default",
      }),
      s = e;
    l.default = s;
  },
  98,
);
