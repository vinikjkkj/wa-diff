__d(
  "adsPromotedObjectTypeSelector_LEGACY",
  [
    "AdsAPICampaignRecordUtils",
    "AdsPECampaignGroupSelectors",
    "AdsPECampaignSelectors",
    "AdsPromotedObjectTypeUIProvider",
    "AdsPromotedObjectTypes",
    "adsCreateKeyedStoreSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("AdsPromotedObjectTypeUIProvider").toFluxStore(),
      s = r("adsCreateKeyedStoreSelector")(
        [].concat(
          o("AdsPECampaignSelectors").getSelector.getStores(),
          o("AdsPECampaignGroupSelectors").getByFieldsSelector.getStores(),
          [e],
        ),
        {
          getKey: function (t) {
            return t;
          },
          getInputData: function (n) {
            var t = o("AdsPECampaignSelectors").getSelector()(n).getValue(),
              r = t == null ? void 0 : t.campaign_id,
              a =
                r != null
                  ? o("AdsPECampaignGroupSelectors")
                      .getByFieldsSelector()(r, { objective: null }, i.id)
                      .getValue()
                  : null;
            return {
              campaign: t,
              objective: a == null ? void 0 : a.objective,
              uiState: e.getState().get(n),
            };
          },
          computeResult: function (t, n) {
            var e = n.campaign,
              a = n.objective,
              i = n.uiState;
            return e == null || a == null
              ? r("AdsPromotedObjectTypes").NONE
              : o("AdsAPICampaignRecordUtils").getPromotedObjectType(
                  a,
                  e,
                  i != null ? i : void 0,
                );
          },
        },
      ),
      u = s;
    l.default = u;
  },
  98,
);
