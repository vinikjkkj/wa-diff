__d(
  "AdsOfferClaimsCampaignBudgetODAXMigratedPlugin",
  ["AdsAPIObjectives", "AdsOfferClaimsCampaignBudgetPlugin"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsOfferClaimsCampaignBudgetPlugin"), {
        type: "campaign/budget/ODAX_MIGRATED",
        key: "offer-claims/ODAX_MIGRATED",
        multiPivots: [{ objective: r("AdsAPIObjectives").OFFER_CLAIMS }],
        originalKey: "offer-claims",
      }),
      s = e;
    l.default = s;
  },
  98,
);
