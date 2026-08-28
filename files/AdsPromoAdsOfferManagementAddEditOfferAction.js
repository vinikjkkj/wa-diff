__d(
  "AdsPromoAdsOfferManagementAddEditOfferAction",
  [
    "AdsConnectedSourcesDataProvider",
    "AdsConnectedSourcesNestedViewLayoutReducerPlugins",
    "AdsPromoAdsOfferManagementDataProvider",
    "AdsPromoAdsOfferManagementModalReducerPlugins",
    "Laminar",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("Laminar").__createAction(
      function () {
        return [
          n("Laminar").__createReducer(
            n("AdsConnectedSourcesNestedViewLayoutReducerPlugins")
              .onPromoAdsOfferManagementAddEditOfferInline,
            n("AdsConnectedSourcesDataProvider"),
            {},
            "",
          ),
          n("Laminar").__createReducer(
            n("AdsPromoAdsOfferManagementModalReducerPlugins")
              .onPromoAdsOfferManagementAddEditOfferModal,
            n("AdsPromoAdsOfferManagementDataProvider"),
            {},
            "",
          ),
        ];
      },
      function () {
        return [];
      },
      "AdsPromoAdsOfferManagementAddEditOfferActionPlugin",
    );
    a.exports = e;
  },
  null,
);
