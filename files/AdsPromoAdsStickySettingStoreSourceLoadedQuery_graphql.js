__d(
  "AdsPromoAdsStickySettingStoreSourceLoadedQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          kind: "ClientExtension",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XFBPromoAdgroupStickySettingData",
              kind: "LinkedField",
              name: "loaded_promo_ads_adgroup_data",
              plural: !0,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_always_on_enabled_email",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "is_always_on_enabled_promo",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "draft_product_catalog_email_id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "draft_product_catalog_promo_id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "product_catalog_email_id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "product_catalog_promo_id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "turn_off_promo",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "turn_off_email",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
      ];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "AdsPromoAdsStickySettingStoreSourceLoadedQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "AdsPromoAdsStickySettingStoreSourceLoadedQuery",
          selections: e,
        },
        params: {
          cacheID: "208e238ed17cdd27d95c2b5a1c173731",
          id: null,
          metadata: {},
          name: "AdsPromoAdsStickySettingStoreSourceLoadedQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
