__d(
  "AdsLinkClicksCampaignBudgetODAXMigratedPlugin",
  ["AdsAPIObjectives", "AdsLinkClicksCampaignBudgetPlugin"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsLinkClicksCampaignBudgetPlugin"), {
        type: "campaign/budget/ODAX_MIGRATED",
        key: "link-clicks/ODAX_MIGRATED",
        multiPivots: [{ objective: r("AdsAPIObjectives").LINK_CLICKS }],
        originalKey: "link-clicks",
      }),
      s = e;
    l.default = s;
  },
  98,
);
