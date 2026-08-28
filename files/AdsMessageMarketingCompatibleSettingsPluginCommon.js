__d(
  "AdsMessageMarketingCompatibleSettingsPluginCommon",
  ["AdsRegulatedCategory", "gkx", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        getCampaignGroupCompatibleSettingsForPrimaryFields: function () {
          return {};
        },
        getCampaignGroupCompatibleSettingsForSecondaryFields: function () {
          var e = {
            specialAdCategories: [
              o("immutable").List([r("AdsRegulatedCategory").NONE]),
              o("immutable").List(),
            ],
          };
          return e;
        },
        getCampaignCompatibleSettingsForPrimaryFields: function () {
          return {};
        },
        getCampaignCompatibleSettingsForSecondaryFields: function () {
          var e = { dynamicCreative: [!1], appHasUnsupportedMMP: [!1] };
          return (r("gkx")("19672") && e.appHasUnsupportedMMP.push(!0), e);
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
