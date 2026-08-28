__d(
  "AdsMessageMarketingCompatibleSettingsEmptyPlugin",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
        type: "messageMarketingCompatibleSettings",
        key: "empty",
        pivots: {},
        getCampaignGroupCompatibleSettingsForPrimaryFields: function () {
          return { objective: [], hasProductCatalog: [] };
        },
        getCampaignGroupCompatibleSettingsForSecondaryFields: function () {
          return { specialAdCategories: [] };
        },
        getCampaignCompatibleSettingsForPrimaryFields: function () {
          return { promotedObjectType: [] };
        },
        getCampaignCompatibleSettingsForSecondaryFields: function () {
          return {
            optimizationGoal: [],
            dynamicCreative: [],
            appHasUnsupportedMMP: [],
          };
        },
      },
      l = e;
    i.default = l;
  },
  66,
);
