__d(
  "adsCampaignGroupBudgetBatchMutationSelector",
  [
    "AdsCampaignGroupBudgetBatchMutationDataProvider",
    "adsCreateSelector",
    "adsStoreToSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsCampaignGroupBudgetBatchMutationDataProvider").toFluxStore(),
      s = r("adsCreateSelector")(
        [r("adsStoreToSelector")(e)],
        function (t) {
          return t;
        },
        { name: i.id },
      ),
      u = s;
    l.default = u;
  },
  98,
);
